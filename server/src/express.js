import MiddlewareInfra from "./infra/middleware.infra";
import configInfra from "./infra/config.infra"
import routeInfra from "./infra/route.infra"

function startClientServer(app) {
    configInfra.handle(app)
    MiddlewareInfra.handle(app)
    routeInfra.handle(app)
    return app;
}

export default startClientServer;
