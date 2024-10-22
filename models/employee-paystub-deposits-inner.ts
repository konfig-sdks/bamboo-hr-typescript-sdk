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
 * @interface EmployeePaystubDepositsInner
 */
export interface EmployeePaystubDepositsInner {
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubDepositsInner
     */
    'depositOrder'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubDepositsInner
     */
    'depositAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubDepositsInner
     */
    'maskedAccountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubDepositsInner
     */
    'accountType'?: string;
}

