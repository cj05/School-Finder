import Model from '../build/model.js'
import log from '../log.js'
async function lookup(Input){
    console.log(typeof Input)
    if(typeof Input !== 'object'){
        return "Error: Format Mismatch"
    }
    log.log(typeof Input.Data)
    return (await Model.Run(Input.Data)).dataSync()
}
function catagory(){
    return Model.getCatagoryData()
}
function uni(){
    return Model.getUniData()
}
export default {lookup,catagory,uni};