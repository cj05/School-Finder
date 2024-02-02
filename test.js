import { StopWatch } from 'stopwatch-node';
import Model from './build/model.js';
import SModel from './build/simplemodel.js';
import fs from "fs"
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Sample = [[1,0.7,-0.3,0.6],[0.1,-0.7,0.5,0.9,-0.6,-0.9,-0.3,0,0.1,-0.7,0.5,0.9,0.6,0.9,0.3,0]]

export default async function run(){
    console.log(`Input Data: ${JSON.stringify(Sample)}`)
    RM(process.cwd()+"\\db\\model\\weightSimple.npy")
    const sw = new StopWatch('sw');
    console.log(process.cwd()+"\\db")
    sw.start('Model Generation');
    await Model.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db",true)
    sw.stop();

    sw.start('Model Loading');
    await Model.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db",false,true)
    sw.stop();

    sw.start('Do_Nothing');
    await Model.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db")
    sw.stop();
    
    sw.start('Model Prediction');
    const model = await Model.Run(Sample)
    model.print()
    sw.stop();

    const sw2 = new StopWatch('sw');
    RM(process.cwd()+"\\db\\model\\weightSimple.npy")
    sw2.start('Simple Model Generation');
    await SModel.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db",true)
    sw2.stop();

    sw2.start('Simple Model Loading');
    await SModel.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db",false,true)
    sw2.stop();

    sw2.start('Simple Do_Nothing');
    await SModel.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db")
    sw2.stop();

    sw2.start('Simple Model Prediction');
    const Smodel = await SModel.Run(Sample)
    Smodel.print()
    sw2.stop();
    // whether the stop watch is currently running
    
    console.info(`Short Summary: ${sw.shortSummary()}`);
    console.info(`Task Count: ${sw.getTaskCount()}`);
    // a table describing all tasks performed
    sw.prettyPrint();
    console.info(`Short Summary: ${sw2.shortSummary()}`);
    console.info(`Task Count: ${sw2.getTaskCount()}`);
    // a table describing all tasks performed
    sw2.prettyPrint();
}
function RM(Path){
    if (fs.existsSync(Path)) {
        fs.unlinkSync(Path)
    }
}
