import dayjs from "dayjs"
import relativeTime  from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(relativeTime )
dayjs.extend(utc)
dayjs.extend(timezone)

export const printTimeLapse = function (time) {
    let theDay = new Date(time);
    var dd = String(theDay.getDate()). padStart(2, '0');
    var mm = String(theDay.getMonth() + 1). padStart(2, '0');
    var yyyy = theDay.getFullYear();

    const guess = dayjs.tz.guess()
    const fr = `${yyyy}-${mm}-${dd}`
    return dayjs(fr).tz(guess).fromNow()
}