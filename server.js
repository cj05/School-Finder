console.log("Loading Modules")

import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';
import apiHandler from './api/apihandler.js'
import ViteExpress from "vite-express";
import Model from './serverFiles/model.ts';
import cluster from 'cluster'
import os from 'os'
import test from './test.js'
import log from './log'


if(cluster.isMaster){
    console.log(`Primary ${process.pid} is running`);
    // get the number of available cpu cores 
    const nCPUs = os.cpus().length;
    // fork worker processes for each available CPU core
    for(let i = 0; i< nCPUs; i++){
        cluster.fork()
    }

    cluster.on('disconnect', function(worker) 
   {
       console.error('disconnect!');
       cluster.fork();
   });
}else{
    const app = express();

    apiHandler(app)

    await Model.LoadDB(process.cwd()+"\\db\\model",process.cwd()+"\\db")

    ViteExpress.listen(app, 80, () => log.log("Connected to http://localhost:80"));

    console.log(`Worker ${process.pid} started`);
}
