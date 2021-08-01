import express from "express"

import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet";

import {baseUrl} from "./../../src/helpers/gen.helpers"

import baseManager from "./basemanager"
const middlewares = {
    configureDevEnv(app) {
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use(cookieParser())
        app.use(compress())
        app.use(helmet())
        app.use(cors({origin: baseUrl})); 
    }
}

const MiddlewareInfra = Object.assign({}, baseManager, middlewares);

export default MiddlewareInfra;