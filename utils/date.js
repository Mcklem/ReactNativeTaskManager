import moment from "moment";

const outputDateFormat = "DD/MM/YYYY";

/**
 * Get date with {outputDateFormat} from given unix timestamp in seconds
 * @param {*} unixTime Seconds
 * @returns 
 */
export function getDateFromUnix(unixTime){
   return moment.unix(unixTime).format(outputDateFormat);
}

export function getHoursDiff(unixTimeA, unixTimeB){
    return moment.unix(unixTimeA).diff(moment.unix(unixTimeB), 'hours');
}