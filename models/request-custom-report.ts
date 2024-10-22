/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RequestCustomReportFilters } from './request-custom-report-filters';

/**
 * 
 * @export
 * @interface RequestCustomReport
 */
export interface RequestCustomReport {
    /**
     * 
     * @type {string}
     * @memberof RequestCustomReport
     */
    'title'?: string;
    /**
     * 
     * @type {RequestCustomReportFilters}
     * @memberof RequestCustomReport
     */
    'filters'?: RequestCustomReportFilters;
    /**
     * 
     * @type {Array<string>}
     * @memberof RequestCustomReport
     */
    'fields'?: Array<string>;
}

