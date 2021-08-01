import nconf from 'nconf';

const baseManager = {
    handle(app) {
        this.configureCommon(app);

        if(nconf.get("development")) {
            this.configureDevEnv(app)
        }else {
            this.configureProductionEnv(app)
        }
    },

    configureCommon () {},
    configureProductionEnv() {},
    configureDevEnv() {}
};

export default baseManager;
