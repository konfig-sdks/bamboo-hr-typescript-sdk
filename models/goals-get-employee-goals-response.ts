/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetEmployeeGoalsResponseGoalsInner } from './goals-get-employee-goals-response-goals-inner';

/**
 * 
 * @export
 * @interface GoalsGetEmployeeGoalsResponse
 */
export interface GoalsGetEmployeeGoalsResponse {
    /**
     * All goals of the selected employee
     * @type {Array<GoalsGetEmployeeGoalsResponseGoalsInner>}
     * @memberof GoalsGetEmployeeGoalsResponse
     */
    'goals'?: Array<GoalsGetEmployeeGoalsResponseGoalsInner>;
}
