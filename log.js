import cluster from 'cluster'

function log(Input){
    console.log(`WThread PID ${process.pid}: ${Input}`)
}

export default {log}