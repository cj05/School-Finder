import tf, { Tensor2D } from "@tensorflow/tfjs-node" 
import { npy } from "tfjs-npy-node";
import fs from "fs"
import DH from './datahandler.ts'

class SimpleModel{
    private Data: tf.Variable[] = []
    async PredictModel(Input:Tensor2D){//given input 0-1 range
        const UniD = this.Data[0]
        const uni_count = UniD.shape[0]
        const PaddedInput = tf.tile(tf.expandDims(Input, 0), [uni_count, 1, 1])

        const WeightedCalc = UniD.mul(PaddedInput)
        const AverageCalc = WeightedCalc.sum(-1).divNoNan(UniD.sum(-1))
        
        return AverageCalc.mean(-1)
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
            }
        }
        ModelKeyData
        
        //console.log(ModelSkillData)
        //console.log(ModelInterestData)
        //console.log(ModelKeyData)
        //console.log(ModelData)

        return [tf.tensor3d(ModelData)]
    }
}

export default new SimpleModel()