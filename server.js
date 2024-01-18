import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';
import apiHandler from './api/apihandler.js'
import ViteExpress from "vite-express";
console.log("Starting up server")
const app = express();

apiHandler(app)
 
ViteExpress.listen(app, 3000, () => console.log("http://localhost:3000"));