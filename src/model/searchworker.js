import Model from './model.js'
import PDP from './postdataprocessor.js'
import config from "../../config.js"
var loaded = false
// addEventListener is directly accessible in worker file
addEventListener("message", event => {
  console.log(event.data)
    function load(){
      let person = event.data
      compute(person).then(workerResult=>{console.log(workerResult);postMessage(workerResult)})
    }
    async function loadModel() {
        // "threshold" The the confidence interval for the classier.
        // Higher values = the model is more confident about its prediction.
        await Model.LoadDB(`${config.Path}model`)
    }
    if (loaded === false) {
        // Only load the model if its current value is null
        loadModel().then(load)
        loaded = true
    }else{
      load()
    }
    // extract person passed from main thread from event object
    
    
  })
  
  async function compute(parameters) {
    // generating membership card takes some amount of time
    console.log(parameters)
    
    const predictionsTensor = await Model?.Run(parameters)
    console.log(predictionsTensor)
    const predictions = PDP.UniSort(predictionsTensor.map((x)=>x.dataSync()),Model.getUniData())
    console.log(predictions)
    return predictions
  }

