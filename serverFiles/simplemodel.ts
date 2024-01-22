import tf, { Tensor2D } from "@tensorflow/tfjs-node" 
import { npy } from "tfjs-npy-node";
import fs from "fs"
import DH from './datahandler.ts'

class SimpleModel{
    private Data: tf.Variable[] = []

    async Run(UniList: number[][]){
        var m = 0
        for(var i = 0;i < UniList.length;i++){
            m = Math.max(m,UniList[i].length)
        }
        for(var i = 0;i < UniList.length;i++){
            for(var j = 0;j < m;j++){
                if(typeof UniList[i][j] === "undefined"){
                    UniList[i][j] = 0
                }
            }
        }
        return this.PredictModel(tf.tensor2d(UniList))
    }

    async PredictModel(Input:Tensor2D){//given input 0-1 range

        
        const UniD = this.Data[0]
        const uni_count = UniD.shape[0]
        //Input.print()
        if (UniD.shape[1] != Input.shape[0] || UniD.shape[2] != Input.shape[1])
            throw new Error(`Input Tensor Shape Differs from database ( ${UniD.shape[1]}, ${UniD.shape[2]}) -> ( ${Input.shape[0]}, ${Input.shape[1]})`)
        
        const PaddedInput = tf.tile(tf.expandDims(Input, 0), [uni_count, 1, 1])

        const WeightedCalc = UniD.mul(PaddedInput)
        const AverageCalc = WeightedCalc.sum(-1).divNoNan(UniD.sum(-1))
        const AM = AverageCalc.mean(-1)
        return AM.add(1).mul(0.5)
    }

    async LoadDB(PathToModelData:string,PathToBigData:string,ForceGenerate:boolean=false,Debug:boolean=false){
        //console.log("Loading Data")
        if (typeof this.Data[0] === 'undefined' || ForceGenerate || Debug) {
            //console.log("Loading Database")
            if ((!fs.existsSync(PathToModelData + "\\weightSimple.npy")) || ForceGenerate) {
                //console.log("Not Found, Generating Model From Scratch")
                if (!fs.existsSync(PathToBigData + "\\bigData.xlsx")) {
                    throw new Error("Bigdata file: " + PathToBigData + "\\bigData.xlsx does not exist");
                }
                const Bigdata = DH.Load(`${PathToBigData}\\bigData.xlsx`);
                this.Data = this.GenerateModel(Bigdata).map((p) => tf.variable(p));
                //here is for preprocessing
                //this.Data[0].print()
                await npy.save(`${PathToModelData}\\weightSimple.npy`, this.Data[0])
            }
            this.Data[0] = tf.variable(await npy.load(`${PathToModelData}\\weightSimple.npy`));
            //this.Data[1] = await npy.load(`${PathToModelData}\\vector.npy`);
        }
        //console.log("Complete")
        return this.Data;
    }

    GenerateModel(Bigdata:{
        name: string;
        data: any[][];
}[]){
        const ParsedData = DH.ParseModelData(Bigdata) 
        const ModelSkillData = ParsedData[0]
        const ModelInterestData = ParsedData[1]
        const ModelKeyData = ParsedData[2]
        //const ModelVectorNodeData:Tensor3D = tf.ones([TotalFacultyCount,1,Dimensions])
        //const ModelWeightNodeData:Tensor2D = tf.zeros([1,1])
        
        //now we put it all in one large matrix
        const ModelData:number[][][] = []
        const CatagoryNameData:string[][] = [[],[]] // [dimen,name]

        var l = 0
        //Skill
        for(var i = 0;i < ModelSkillData.length;i++){
            ModelData.push([[],[]])
        }

        for(var i = 0;i < ModelSkillData.length;i++){
            const ar = ModelSkillData[i]
            for(var j = 0;j < ar.length;j++){
                const d = ar[j]
                var ind = CatagoryNameData[0].indexOf(d[0])
                if(ind === -1){
                    ind = CatagoryNameData[0].length
                    CatagoryNameData[0].push(d[0])
                }
                ModelData[i][0][ind] = d[1]
                l = Math.max(l,ind)
            }
            
        }
        for(var i = 0;i < ModelInterestData.length;i++){
            const ar = ModelInterestData[i]
            //const VD:number[][] = [[]]
            for(var j = 0;j < ar.length;j++){
                const d = ar[j]
                var ind = CatagoryNameData[1].indexOf(d[0])
                if(ind === -1){
                    ind = CatagoryNameData[1].length
                    CatagoryNameData[1].push(d[0])
                }
                ModelData[i][1][ind] = d[1]
                l = Math.max(l,ind)
            }
        }
        ModelKeyData

        //[ModelData.length,2,l+1]
        for(var u = 0; u < ModelData.length; u++){
            for(var v = 0; v < 2; v++){
                for(var k = 0; k < l+1; k++){
                    if(typeof ModelData[u][v][k] === "undefined"){
                        ModelData[u][v][k] = 0
                    }
                }
            }
        }
        
        //console.log(ModelSkillData)
        //console.log(ModelInterestData)
        //console.log(ModelKeyData)
        //console.log(JSON.stringify(ModelData))

        return [tf.tensor3d(ModelData,[ModelData.length,2,l+1])]
    }
}

export default new SimpleModel()