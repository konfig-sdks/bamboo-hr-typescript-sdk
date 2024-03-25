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
 * @interface EmployeeDepositAccountsInner
 */
export interface EmployeeDepositAccountsInner {
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'accountType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'maskedAccountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'bankName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'depositOrder'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'ruleType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeDepositAccountsInner
     */
    'ruleAmount'?: string;
}
