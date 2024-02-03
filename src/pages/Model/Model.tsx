
//import styles from './HomeComponent.module.scss';
import Model from '../../model/model.js'
import PDP from '../../model/postdataprocessor.js'
import { useEffect , useState } from 'react';
const model = () => {
  const [smodel, setModel] = useState(Model);
  const [prediction, setPrediction] = useState({});
  useEffect(() => {
    async function loadModel() {
      // "threshold" The the confidence interval for the classier.
      // Higher values = the model is more confident about its prediction.
      Model.LoadDB("model")
      setModel(Model)
    }
    if (typeof smodel.Data[0] === 'undefined') {
      // Only load the model if its current value is null
      loadModel();
    }
  }, [prediction, smodel]);
  const predict = async (event:any) => {
    console.log(JSON.parse(event.target.value))
    
      const predictionsTensor = await smodel?.Run(JSON.parse(event.target.value))
      console.log(predictionsTensor)
      const predictions = PDP.UniSort(predictionsTensor.dataSync(),Model.getUniData())
      console.log(predictions)
      setPrediction(
        
        // Sets the "textToxicity" array
        // to the predictions after some filtering and mapping.
        // (console.log) the predictions to see
        // from where this came from.
        predictions
      );
    
  };
  console.log(prediction);

  return (
    
    <div>
      Input: <input type="text" defaultValue="[[1, 0.7, -0.3, 0.6], [0.1, -0.7, 0.5, 0.9, -0.6, -0.9, -0.3, 0, 0.1, -0.7, 0.5, 0.9, 0.6, 0.9, 0.3, 0]]" onChange={predict} style={{
        textAlign: 'center',
        width: '700px',
        border: '1px solid gray',
        borderRadius: '5px'}}/>
      Output: {JSON.stringify(prediction)}
    </div>
  );
};

export default model;