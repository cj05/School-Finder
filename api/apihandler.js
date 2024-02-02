import bodyParser from 'body-parser'
import LookupAPI from './LookupAPI.js'
import PDP from '../serverFiles/postdataprocessor.ts'
const registerPostAPI = (app,uri,func) => {
    app.post("/api"+uri,(req, res)=>{try{func(req, res)} catch(er2) {res.json('Error sending 500!', er2.stack); console.error('Error sending 500!', er2.stack);}})
}
const registerGetAPI = (app,uri,func) => {
    app.get("/api"+uri,(req, res)=>{try{func(req, res)} catch(er2) {res.json('Error sending 500!', er2.stack); console.error('Error sending 500!', er2.stack);}})
}
const registerPostGetAPI = (app,uri,func) => {
    registerPostAPI(app,uri,func)
    registerGetAPI(app,uri,func)
}
const init = (app) => {
    console.log("Starting up api handler")
    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
     
    registerPostAPI(app,"",(req, res) => {
        res.send('hello world')
    })
    registerPostAPI(app,"/lookup",(req, res) => {
        console.log(req.body)
        LookupAPI.lookup(req.body).then((Response)=>{
            const SortedResponse = PDP.UniSort(Response,LookupAPI.uni())
            console.log(SortedResponse)
            res.json(SortedResponse)
        }).catch()
    })
    registerPostGetAPI(app,"/catagory",(req, res) => {
        res.json({"Data":LookupAPI.catagory()})
    })
}
export default init;