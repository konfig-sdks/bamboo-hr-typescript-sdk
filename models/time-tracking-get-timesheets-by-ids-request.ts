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
 * @interface TimeTrackingGetTimesheetsByIdsRequest
 */
export interface TimeTrackingGetTimesheetsByIdsRequest {
    /**
     * Comma separated list of timesheet ids
     * @type {string}
     * @memberof TimeTrackingGetTimesheetsByIdsRequest
     */
    'timesheets': string;
}
