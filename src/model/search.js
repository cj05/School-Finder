import MyWorkerFile from './searchworker?worker'

var myWorker
var output
function search (parameters,func) {
    myWorker  = new MyWorkerFile();
    console.log(parameters,myWorker)
    myWorker.postMessage(parameters)
    myWorker.addEventListener("message", event => {
        console.log(event.data)
        if (event.data) {
            output = event.data
            func(output)
        }
        myWorker.terminate()
    })
    
};




export default {search,output};