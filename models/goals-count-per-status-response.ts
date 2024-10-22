/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsCountPerStatusResponseFiltersInner } from './goals-count-per-status-response-filters-inner';

/**
 * 
 * @export
 * @interface GoalsCountPerStatusResponse
 */
export interface GoalsCountPerStatusResponse {
    /**
     * All the goals of the user seperated by filter.
     * @type {Array<GoalsCountPerStatusResponseFiltersInner>}
     * @memberof GoalsCountPerStatusResponse
     */
    'filters'?: Array<GoalsCountPerStatusResponseFiltersInner>;
}

