import { StopWatch } from 'stopwatch-node';
import Model from './serverFiles/model.ts';
import fs from "fs"
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default async function run(){
    fs.unlinkSync("C:\\Cjs data folder\\GIT\\School Finder\\db\\model\\weight.npy")
    const sw = new StopWatch('sw');
    sw.start('Model Generation');
    await Model.LoadDB("C:\\Cjs data folder\\GIT\\School Finder\\db\\model","C:\\Cjs data folder\\GIT\\School Finder\\db",true)
    sw.stop();

    sw.start('Model Loading');
    await Model.LoadDB("C:\\Cjs data folder\\GIT\\School Finder\\db\\model","C:\\Cjs data folder\\GIT\\School Finder\\db",false,true)
    sw.stop();

    sw.start('Do_Nothing');
    await Model.LoadDB("C:\\Cjs data folder\\GIT\\School Finder\\db\\model","C:\\Cjs data folder\\GIT\\School Finder\\db")
    sw.stop();

    sw.start('Model Prediction');
    const model = await Model.PredictModel(Model.PrepData([[1,2,3,4,5],[3,4,5,6,7]]))
    model.print()
    sw.stop();
    // whether the stop watch is currently running
    
    console.info(`Short Summary: ${sw.shortSummary()}`);
    console.info(`Task Count: ${sw.getTaskCount()}`);
    // a table describing all tasks performed
    sw.prettyPrint();
}
