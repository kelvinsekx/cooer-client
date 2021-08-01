import nconf from 'nconf'
import PATH from "path";

import basemanager from "./basemanager";
const content = 'config/default.json'


const defaultConfig = PATH.resolve(process.cwd(), content);

nconf.argv()
    .env()
    .file({file: defaultConfig})
    .defaults({ENV: 'development'});

const configManager = Object.assign({}, basemanager, {
    configureDevEnv (app) {
        app.use((req, res, next)=> {
            // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:9006`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
        })
    }
});

export default configManager;