import * as tfc from "@tensorflow/tfjs-core";
import tf, { Tensor2D } from "@tensorflow/tfjs-node" 
import { npy } from "tfjs-npy-node";
import fs from "fs"
import DH from './modeldatahandler.ts'
//import {GPU} from "gpu.js"

/*class TrainableCosineSimilarityLayer extends tf.layers.Layer {
    private units
    private inputShape
    private ud
    constructor(units, inputShape) {
        super({});
        this.units = units;
        this.inputShape = inputShape;
    }

    // Build method to create the trainable variable(s)
    build(inputShape) {
        this.ud = this.addWeight('kernel',[this.inputShape[this.inputShape.length - 1], this.units],'float32',tf.initializers.zeros());
        this.built = true;
    }

    // Call method to define the layer's computation
    call(inputs) {
        // Assuming inputs is a tensor
        const output = tf.matMul(inputs, this.ud);
        return output;
    }
//    getClassName() { return 'BatchCosineSum'; }
//}*/

class model{

    private Data: tfc.Tensor[] = []
    PrepData(inputSet: number[][]){
        //we make a Cartesian Product
        //O(n^d)
        function cartesianProduct(arrays: number[][]) {
            return arrays.reduce((a:number[][], b) => a.flatMap(x => b.map(y => x.concat([y]))), [[]]);
        }
        const cartesianP = cartesianProduct(inputSet)
        return tf.tensor2d(cartesianP)
    }

    /*
    BuildModel(size:number,n:number,d:number){
        //tensorflow model
        //size = the cartesian product size
        //n = uni count
        //d = dimension count
        //const 
        const Unidata = tf.layers.input({shape: [size,d]})
        const weightVariable = tf.layers.input({shape: [n,size]})
        const input = tf.layers.input({shape: [size,d]})
        //const weightedST = tf.layers.input(weightVariable)
        const normal = tf.layers.layerNormalization().apply(input)
        const weightedAverage: tf.SymbolicTensor[] = []
        for (let index = 0; index < n; index++) {
            //for every university
            //this is probably unrolling em, i think
            //maybe, maybe not idk much about tensorflow
            const slicedUniData = Unidata.sourceLayer
            const cosDistance = tf.layers.dot({axes: -1}).apply([normal,Unidata[index]])
            const weightedProduct = tf.layers.multiply().apply([cosDistance,weightVariable[index]])
            const weightedSum = tf.layers.add().apply(weightedProduct)
            const weightSum = tf.layers.add().apply(weightVariable[index])
            weightedAverage.push(tf.layers.multiply.apply([weightedSum,weightSum]))
        }

        //expand
        //const predictionOutput = new TrainableCosineSimilarityLayer().apply(normal)

        const model = tf.model({inputs: [input,Unidata,weightVariable],outputs: weightedAverage})
        return model
    }*/

    async PredictModel(Input:Tensor2D){//To be optimized
        //Proof of concept
        console.log("Target:")
        //Input.print()
        const size = Input.shape[0]
        const d = Input.shape[1]
        const uni_count = 2
            
        //console.log(size)
        //uni datas
        const uni_vec_data = tf.randomUniform([uni_count,size,d]).add(-1).mul(2)
        const uni_weight = tf.randomUniform([uni_count,size])

        //console.log("Database:")
        uni_vec_data.print()

        //console.log("Weights:")
        uni_weight.print()

        //normalize in prep for cosine distance
        const normal_norm = tf.norm(Input,2,-1,true)
        const normal = Input.div(normal_norm)
        const normal_uni_data_norm = tf.norm(uni_vec_data,2,-1,true)
        const normal_uni_data = uni_vec_data.div(normal_uni_data_norm)
        //normal_uni_data.print()
        
        //pad it out in prep for cosine distance
        const pad_normal = tf.tile(tf.expandDims(normal,0),[uni_count,1,1])
        //pad_normal.print()
        //cosine distance
        const cd_data = normal_uni_data.mul(pad_normal).sum(-1)
        const cs_data = cd_data.add(1).mul(0.5)
        //cs_data.print()
        const weighted_cs = cs_data.mul(uni_weight)
        //weighted_cs.print()
        const prediction = weighted_cs.sum(-1).div(uni_weight.sum(-1))
        //prediction.print()
        return prediction
    }

    async LoadDB(PathToModelData:string,PathToBigData:string,ForceGenerate:boolean=false){
        if(typeof this.Data[0] === 'undefined'||typeof this.Data[1] === 'undefined'){
            if((!fs.existsSync(PathToModelData+"\\weight.npy")||!fs.existsSync(PathToModelData+"/vector.npy"))||ForceGenerate){
                if(!fs.existsSync(PathToBigData+"\\bigData.xlsx")){
                    throw new Error("Bigdata file: "+PathToBigData+"\\bigData.xlsx does not exist");
                }
                const Bigdata = DH.Load(`${PathToBigData}\\bigData.xlsx`);
                this.GenerateModel(Bigdata)
                //here is for preprocessing
            }npy
            //this.Data[0] = await npy.load(`${PathToModelData}\\weight.npy`);
            //this.Data[1] = await npy.load(`${PathToModelData}\\vector.npy`);
        }
        return this.Data;
    }

    GenerateModel(Bigdata:{
        name: string;
        data: any[][];
}[]){
        const UniCompendiumData = Bigdata[0].data // Uni Data Header
        const UniNameList = UniCompendiumData[0]  // Uni Name Data
        const UniCount = UniNameList.length - 1   // remove the top header

        var TotalFacultyCount = 0
        var TotalBranchCount = 0

        for(var i = 1;i <= UniCount;i++){
            const IndexedUniData = Bigdata[i];
            const UniName = IndexedUniData.name
            const UniInfo = IndexedUniData.data

            const FacultyCount = UniInfo[0].length - 1//the faculty name list
            //we are going to transfer these info into permanent more efficient data storages
            // wip

            console.log(UniName)
            for(var j = 1;j <= FacultyCount;j++){
                console.log(`->${UniInfo[0][j]}`)
                TotalFacultyCount++

                const branchesInfo = UniInfo[2][j]
                if(typeof branchesInfo === 'undefined'){
                    continue
                }

                const branches = branchesInfo.split("\n").map(
                    (branch:string)=>branch.split(" ")[1]
                )
                console.log(branches)
                //i know shit lookup time but this isnt run often
                TotalBranchCount+=branches.length
                
            }

        }
        console.log(TotalFacultyCount)
        console.log(TotalBranchCount)



    }
    
    



}

export default new model;