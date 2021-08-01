import express from "express";
import app from "./express";



const serverStarter = async ()=>{
const APP = express()
if (process.env.NODE_ENV.trim() == "production") {
  return app(APP);
}else {
const frontEndAPP = 	import("./devBundle")
		.then(res => res.default)
		.then(devBundle => { 
			devBundle.compile(APP);
			return app(APP)
		})
	return frontEndAPP
}}

export default serverStarter()
