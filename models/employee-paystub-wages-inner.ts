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
 * @interface EmployeePaystubWagesInner
 */
export interface EmployeePaystubWagesInner {
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'externalWageId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'wageDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'wageAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'ytdWageAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'wageRate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubWagesInner
     */
    'hours'?: string;
}

