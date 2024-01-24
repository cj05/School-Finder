console.log("Loading Modules")

import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';
import apiHandler from './api/apihandler.js'
import ViteExpress from "vite-express";

import test from './test.js'
//import Model from './serverFiles/model.ts'
console.log("Starting up server")
const app = express();

apiHandler(app)

//for(var i = 0;i<10;i++)
    await test()


//Model.PrepData([[1,2],[3,4,5]]).print()

 
ViteExpress.listen(app, 80, () => console.log("http://localhost"));


