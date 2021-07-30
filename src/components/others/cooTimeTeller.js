import React from "react";
import $ from "./../../helpers/timeHelpers"

let CooerTimeTeller = ({time})=> {
    time = new Date(time).getTime();
    time = $.friendlierTime(time)
    return <span>{time}</span>
};

export default CooerTimeTeller;