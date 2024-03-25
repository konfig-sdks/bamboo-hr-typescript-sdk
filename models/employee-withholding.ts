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
 * @interface EmployeeWithholding
 */
export interface EmployeeWithholding {
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'fedWithholding'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'stateWithholding'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'localWithholding'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'additionalFed'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'additionalState'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'additionalLocal'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'taxState'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeWithholding
     */
    'taxLocal'?: string;
}
