import React from "react";
import {printTimeLapse} from "./../../helpers/timeHelpers";

let CooerTimeTeller = ({time})=>  
<span> { printTimeLapse(time)}</span>;

export default CooerTimeTeller;