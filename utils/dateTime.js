import moment from "moment";

const outputDateFormat = "DD/MM/YYYY HH:mm:ss";

/**
 * Get date with {outputDateFormat} from given unix timestamp in seconds
 * @param {*} unixTime Seconds
 * @returns 
 */
export function getDateFromUnix(unixTime) {
    return moment.unix(unixTime).format(outputDateFormat);
}

export function getHoursAndMinutesDiff(unixTimeA, unixTimeB) {
  
    var duration = moment.duration(moment.unix(unixTimeB).diff(moment.unix(unixTimeA)));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) % 60;

    return {hours: hours, minutes: minutes};

}