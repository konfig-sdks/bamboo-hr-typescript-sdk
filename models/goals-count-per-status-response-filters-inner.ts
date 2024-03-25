/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsCountPerStatusResponseFiltersInnerActions } from './goals-count-per-status-response-filters-inner-actions';

/**
 * 
 * @export
 * @interface GoalsCountPerStatusResponseFiltersInner
 */
export interface GoalsCountPerStatusResponseFiltersInner {
    /**
     * Id of the filter.
     * @type {string}
     * @memberof GoalsCountPerStatusResponseFiltersInner
     */
    'id'?: string;
    /**
     * The name of the filter.
     * @type {string}
     * @memberof GoalsCountPerStatusResponseFiltersInner
     */
    'name'?: string;
    /**
     * Count of the goals with that filter.
     * @type {number}
     * @memberof GoalsCountPerStatusResponseFiltersInner
     */
    'count'?: number;
    /**
     * 
     * @type {GoalsCountPerStatusResponseFiltersInnerActions}
     * @memberof GoalsCountPerStatusResponseFiltersInner
     */
    'actions'?: GoalsCountPerStatusResponseFiltersInnerActions;
}

