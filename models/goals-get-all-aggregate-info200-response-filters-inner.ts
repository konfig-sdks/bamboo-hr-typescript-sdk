/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetAllAggregateInfo200ResponseFiltersInnerActions } from './goals-get-all-aggregate-info200-response-filters-inner-actions';

/**
 * 
 * @export
 * @interface GoalsGetAllAggregateInfo200ResponseFiltersInner
 */
export interface GoalsGetAllAggregateInfo200ResponseFiltersInner {
    /**
     * Id of the filter.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200ResponseFiltersInner
     */
    'id'?: string;
    /**
     * The name of the filter.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200ResponseFiltersInner
     */
    'name'?: string;
    /**
     * Count of the goals with that filter.
     * @type {number}
     * @memberof GoalsGetAllAggregateInfo200ResponseFiltersInner
     */
    'count'?: number;
    /**
     * 
     * @type {GoalsGetAllAggregateInfo200ResponseFiltersInnerActions}
     * @memberof GoalsGetAllAggregateInfo200ResponseFiltersInner
     */
    'actions'?: GoalsGetAllAggregateInfo200ResponseFiltersInnerActions;
}
