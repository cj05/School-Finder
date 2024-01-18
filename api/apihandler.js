
const registerPostAPI = (app,uri,func) => {
    app.post("/api"+uri,func)
}

const init = (app) => {
    console.log("Starting up api handler")
    registerPostAPI(app,"",(req, res) => {
        res.send('hello world')
    })
    registerPostAPI(app,"/lookup",(req, res) => {
        res.send('amongus')
    })
    registerPostAPI(app,"/lookup",(req, res) => {
        res.send('amongus')
    })
}
export default init;