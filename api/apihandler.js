import bodyParser from 'body-parser'
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
        res.json(req.body)
    })
}
export default init;