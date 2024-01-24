import Model from '../serverFiles/model.ts'

async function lookup(Input){
    console.log(typeof Input)
    if(typeof Input !== 'object'){
        return "Error: Format Mismatch"
    }
    return (await Model.Run(Input.Data)).dataSync()
}
function catagory(){
    return Model.getCatagoryData()
}
function uni(){
    return Model.getUniData()
}
export default {lookup,catagory,uni};