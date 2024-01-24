import Model from '../serverFiles/model.ts'

async function lookup(Input){
    return (await Model.Run(Input.Data)).dataSync()
}
export default lookup;