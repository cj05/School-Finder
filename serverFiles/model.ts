import tf, { Tensor2D } from "@tensorflow/tfjs-node"
import { npy } from "tfjs-npy-node";
import fs from "fs"
import DH from './datahandler.js'

//const Dimensions = 1
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

class model {
    
    private config:{[key:string]:any} = {}
    private Data: tf.Variable[] = []
    PrepData(inputSet: number[][]) {
        //we make a Cartesian Product
        //O(n^d)
        function cartesianProduct(arrays: number[][]) {
            return arrays.reduce((a: number[][], b) => a.flatMap(x => b.map(y => x.concat([y]))), [[]]);
        }
        const cartesianP = cartesianProduct(inputSet)
        return tf.tensor2d(cartesianP)
    }

    getCatagoryData(){
        return this.config["Catagory_Key_Data"]
    }
    getUniData(){
        return this.config["Uni_Key_Data"]
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

    async Run(UniList: number[][]){
        return this.PredictModel(this.PrepData(UniList))
    }

    async PredictModel(Input: Tensor2D) {//To be optimized
        //Proof of concept
        //log.log("Predicting....")
        //Input.print()

        //const size = Input.shape[0]
        //const d = Input.shape[1]

        var confidence = this.config["Confidence"]
        if (typeof confidence === 'undefined'||confidence>1||confidence<0){
            confidence = 0.9 
        }

        const z = Math.abs(this.percentile_z((1-confidence)/2))/2//we div by 0 because out value is 0 -> 1 not -1 -> 1
        //log.log(z)
        //uni datas
        const uni_vec_data = this.Data[0]

        const uni_count = uni_vec_data.shape[0]

        if (uni_vec_data.shape[1] != Input.shape[0] || uni_vec_data.shape[2] != Input.shape[1])
            throw new Error(`Input Tensor Shape Differs from database (${uni_vec_data.shape[1]} ,${uni_vec_data.shape[2]} ) -> (${Input.shape[0]} ,${Input.shape[1]} )`)
        //const uni_weight = tf.randomUniform([uni_count,size])

        //log.log("Database:")
        //uni_vec_data.print()

        //log.log("Weights:")
        //log.log("1/5")
        //normalize in prep for cosine distance
        const normal_norm = tf.norm(Input, 2, -1, true) //O(n^3)
        const normal = Input.divNoNan(normal_norm) //O(n^3)
        const uni_weight = tf.norm(uni_vec_data, 2, -1, true) //O(n^3)
        const normal_uni_data = uni_vec_data.divNoNan(uni_weight) //O(n^3)
        const uni_weight_value = tf.norm(uni_vec_data, 2, -1, false)
        //tf.
        //uni_weight.print()
        //normal_uni_data.print()
        //log.log("2/5")
        //pad it out in prep for cosine distance
        const pad_normal = tf.tile(tf.expandDims(normal, 0), [uni_count, 1, 1]) //O(n^3)
        //pad_normal.print()
        //cosine distance
        //log.log("3/5")
        const cd_data = normal_uni_data.mul(pad_normal).sum(-1)
        const cs_data = cd_data.add(1).mul(0.5)
        //log.log("4/5")
        //cs_data.print()
        const weighted_cs = cs_data.mul(uni_weight_value)
        //weighted_cs.print()
        const average = weighted_cs.sum(-1).divNoNan(uni_weight_value.sum(-1))
        
        //uni_vec_data.print()
        //uni_weight.print()
        //log.log("5/5")
        //prediction.print()
        //log.log("Complete")
        //Calculate SD for interval

        const padded_average = weighted_cs.sum(-1,true).divNoNan(uni_weight_value.sum(-1,true))
        const Difference = cs_data.sub(padded_average)
        const squared_difference = Difference.square()
        const weighted_squared_difference = squared_difference.mul(uni_weight_value)
        
        const SD = weighted_squared_difference.sum(-1).divNoNan(uni_weight_value.sum(-1).mul(Input.shape[1]-1)).sqrt()
        const Confidence = SD.divNoNan(Math.sqrt(Input.shape[1])/z)//+- of the mean


        return [average,Confidence]
    }

    async TrainablePredictor(Input: Tensor2D) {//a function that somehow connects userfeedback to the model output into a scalar unit
        return this.PredictModel(Input);
    }

    async FeedBack(TrueUserMatching: number) {
        //use this to feedback the process
        //TODO()
        TrueUserMatching
    }

    percentile_z(p:number):number {//thanks github
        if (p < 0.5) return -this.percentile_z(1-p);
    
        if (p > 0.92) {
            if (p == 1) return Infinity;
            let r = Math.sqrt(-Math.log(1-p));
            return (((2.3212128*r+4.8501413)*r-2.2979648)*r-2.7871893)/
                   ((1.6370678*r+3.5438892)*r+1);
        }
        p -= 0.5;
        let r = p*p;
        return p*(((-25.4410605*r+41.3911977)*r-18.6150006)*r+2.5066282)/
                 ((((3.1308291*r-21.0622410)*r+23.0833674)*r-8.4735109)*r+1);
    }

    async LoadDB(PathToModelData: string, PathToBigData: string, ForceGenerate: boolean = false, Debug: boolean = false) {
        //log.log("Loading Data")
        if (typeof this.Data[0] === 'undefined' || ForceGenerate || Debug) {
            //log.log("Loading Database")
            if ((!fs.existsSync(PathToModelData + "\\weight.npy")) || ForceGenerate) {
                //log.log("Not Found, Generating Model From Scratch")
                if (!fs.existsSync(PathToBigData + "\\bigData.xlsx")) {
                    throw new Error("Bigdata file: " + PathToBigData + "\\bigData.xlsx does not exist");
                }
                const Bigdata = DH.Load(`${PathToBigData}\\bigData.xlsx`);
                this.Data = this.GenerateModel(Bigdata).map((p) => tf.variable(p));
                //here is for preprocessing
                fs.writeFileSync(`${PathToModelData}\\config.json`,JSON.stringify(this.config))
                await npy.save(`${PathToModelData}\\weight.npy`, this.Data[0])
            }
            this.config = JSON.parse(fs.readFileSync(`${PathToModelData}\\config.json`,'utf-8'))
            this.Data[0] = tf.variable(await npy.load(`${PathToModelData}\\weight.npy`));
            //this.Data[1] = await npy.load(`${PathToModelData}\\vector.npy`);
        }
        //log.log("Complete")
        return this.Data;
    }

    GenerateModel(Bigdata: {

        //bad runtime algorithm
        name: string;
        data: any[][];
    }[]) {
        const ParsedData = DH.ParseModelData(Bigdata)
        const ModelSkillData = ParsedData[0]
        const ModelInterestData = ParsedData[1]
        const ModelPersonalityData = ParsedData[2]
        const ModelKeyData = ParsedData[3]
        console.log(ModelPersonalityData)
        //const ModelVectorNodeData:Tensor3D = tf.ones([TotalFacultyCount,1,Dimensions])
        //const ModelWeightNodeData:Tensor2D = tf.zeros([1,1])

        //now we put it all in one large matrix
        const ModelData: number[][][] = []
        const CatagoryNameData: string[][] = [[], [], []] // [dimen,name]

        //Skill
        for (var i = 0; i < ModelSkillData.length; i++) {
            ModelData.push([[], [], []])
        }

        for (var i = 0; i < ModelSkillData.length; i++) {
            const ar = ModelSkillData[i]
            for (var j = 0; j < ar.length; j++) {
                const d = ar[j]
                var ind = CatagoryNameData[0].indexOf(d[0])
                if (ind === -1) {
                    ind = CatagoryNameData[0].length
                    CatagoryNameData[0].push(d[0])
                }
                ModelData[i][0][ind] = d[1]
            }

        }
        for (var i = 0; i < ModelInterestData.length; i++) {
            const ar = ModelInterestData[i]
            //const VD:number[][] = [[]]
            for (var j = 0; j < ar.length; j++) {
                const d = ar[j]
                var ind = CatagoryNameData[1].indexOf(d[0])
                if (ind === -1) {
                    ind = CatagoryNameData[1].length
                    CatagoryNameData[1].push(d[0])
                }
                ModelData[i][1][ind] = d[1]
            }
        }
        for (var i = 0; i < ModelPersonalityData.length; i++) {
            const ar = ModelPersonalityData[i]
            //const VD:number[][] = [[]]
            for (var j = 0; j < ar.length; j++) {
                const d = ar[j]
                var ind = CatagoryNameData[2].indexOf(d[0])
                if (ind === -1) {
                    ind = CatagoryNameData[2].length
                    CatagoryNameData[2].push(d[0])
                }
                ModelData[i][2][ind] = d[1]
            }
        }
        ModelKeyData

        //log.log(ModelSkillData)
        //log.log(ModelInterestData)
        //log.log(JSON.stringify(ModelKeyData))
        //log.log(JSON.stringify(ModelData))
        this.config["skill_count"] = ModelData[0][0].length
        this.config["interest_count"] = ModelData[0][1].length
        this.config["Uni_Key_Data"] = ModelKeyData
        this.config["Catagory_Key_Data"] = CatagoryNameData
        this.config["Confidence"] = 0.9

        const VectorNodeData = this.GenerateCartesianVectorNodes(ModelData)
        //VectorNodeData.print()
        return [VectorNodeData]
    }


    GenerateCartesianVectorNodes(UniList: number[][][]) {
        //{uni{catagory{data}}}
        const l = UniList.map((arrays: number[][]) => arrays.reduce((a: number[][], b) => a.flatMap(x => b.map(y => x.concat([y]))), [[]]))
        return tf.tensor3d(l)
    }
}

export default new model;