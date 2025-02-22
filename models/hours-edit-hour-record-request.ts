/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface HoursEditHourRecordRequest
 */
export interface HoursEditHourRecordRequest {
    /**
     * The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).
     * @type {string}
     * @memberof HoursEditHourRecordRequest
     */
    'timeTrackingId': string;
    /**
     * The updated number of hours worked. e.g. if Employee A worked 8.0 hours originally and decided they only worked 6.0, please send 6.0 here not -2.0.
     * @type {number}
     * @memberof HoursEditHourRecordRequest
     */
    'hoursWorked': number;
}

