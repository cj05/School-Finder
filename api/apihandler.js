import bodyParser from 'body-parser'
import lookup from './LookupAPI.js'
const registerPostAPI = (app,uri,func) => {
    app.post("/api"+uri,func)
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
        lookup(req.body).then((Response)=>{
            console.log(Response)
            res.json(Response)
        })
    })
}
export default init;