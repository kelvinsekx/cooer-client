import clientmanager from "./clientmanager"
import baseManager from "./basemanager";

const client = {
    configureDevEnv(app) {
        app.use("/",
        clientmanager.createPageRouter(app))
    }
}

export default Object.assign({}, baseManager, client)