let second = 1000,
    min = (60*second),
    hour = (60*min),
    day = (24 * hour);

const TIMEHELPERS = {
    getTime (time = new Date) {
        var o = new Object();
        o.min = `${Math.round(time / min)} mins ago`;
        o.hour = `
            ${Math.round(time / hour)} 
            ${(Math.round(time / hour) > 1 ) ? "hours" : "hour"} ago`;
        o.day  = `
            ${Math.round(time / day)} 
            ${(Math.round(time / day) > 1 ) ? "days" : "day"} ago`;
        return o;
    },

    friendlierTime (time) {
        let result;
    
        if (( time + (1.5*min)) > Date.now()) {
            return result = "just now"
        }
        if(Date.now() > time){
            const timeDifference = Date.now() - time;
            if (timeDifference < hour){
                return result = this.getTime(timeDifference).min;
            }
    
            if((timeDifference > hour) && (timeDifference < day)){
                return result = this.getTime(timeDifference).hour;
            }else if((timeDifference > hour) && (timeDifference > day)){
                return result = this.getTime(timeDifference).day;
            }else if (timeDifference > (24*day)) {
                return result = new Date(time).toLocaleDateString()
            }
        }
    }
}

export default TIMEHELPERS;