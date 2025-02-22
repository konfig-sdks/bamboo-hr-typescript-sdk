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
 * @interface TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner
 */
export interface TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner {
    /**
     * The id of the timesheet
     * @type {number}
     * @memberof TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner
     */
    'timesheetId': number;
    /**
     * 24 hour format (hh:mm) for clock out time
     * @type {string}
     * @memberof TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner
     */
    'end': string;
    /**
     * Date of the clock out. Date string format (YYYY-MM-DD)
     * @type {string}
     * @memberof TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner
     */
    'date': string;
}

