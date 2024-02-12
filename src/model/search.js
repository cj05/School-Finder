import MyWorkerFile from './searchworker?worker'
import config from "../../config.js"
var myWorker
var output
function search(parameters, func) {
    var port = 5173
    var url = `/api/lookup`
    var jsonData = {
        "Data":{}
      }
    function run(){
        console.log("Errored Trying To Calculate Via External Server")
            myWorker = new MyWorkerFile();
            console.log(parameters, myWorker)
            myWorker.postMessage(parameters)
            myWorker.addEventListener("message", event => {
                //console.log(event.data)
                if (event.data) {
                    output = event.data
                    func(output)
                }
                myWorker.terminate()
            })
    }
    //try using the server
    jsonData["Data"] = parameters
    // Send data to the backend via POST
    console.log(url)
    fetch(`${url}`, {  // Enter your IP address here

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    })
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            if(typeof data === "object"){
                output = data
                func(output)
            }else{
                run()
            }
        }).catch((e) => {
            run()
        })

        if(typeof output !== "object"){
            run()
        }
        





};




export default { search, output };