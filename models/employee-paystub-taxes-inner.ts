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
 * @interface EmployeePaystubTaxesInner
 */
export interface EmployeePaystubTaxesInner {
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubTaxesInner
     */
    'externalTaxId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubTaxesInner
     */
    'taxDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubTaxesInner
     */
    'taxAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePaystubTaxesInner
     */
    'ytdTaxAmount'?: string;
}

