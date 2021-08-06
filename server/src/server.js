import nconf from "nconf"
import app from "./app";

app.then(app=> app.listen(nconf.get("port"), (err, result)=> {
    if(err)console.log(err);
    console.info(`server started on port ${nconf.get("port")}`)
}))
