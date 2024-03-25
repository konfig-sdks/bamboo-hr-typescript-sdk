/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetAllAggregateInfo200ResponseCommentsInner } from './goals-get-all-aggregate-info200-response-comments-inner';
import { GoalsGetAllAggregateInfo200ResponseFiltersInner } from './goals-get-all-aggregate-info200-response-filters-inner';
import { GoalsGetAllAggregateInfo200ResponseGoalsInner } from './goals-get-all-aggregate-info200-response-goals-inner';
import { GoalsGetAllAggregateInfo200ResponsePersonsInner } from './goals-get-all-aggregate-info200-response-persons-inner';

/**
 * 
 * @export
 * @interface GoalsGetAllAggregateInfo200Response
 */
export interface GoalsGetAllAggregateInfo200Response {
    /**
     * The selected user can align goals with other users.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'canAlign'?: boolean;
    /**
     * The selected user can create a goal.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'canCreateGoals'?: boolean;
    /**
     * All the goals of the user seperated by filter.
     * @type {Array<GoalsGetAllAggregateInfo200ResponseFiltersInner>}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'filters'?: Array<GoalsGetAllAggregateInfo200ResponseFiltersInner>;
    /**
     * The id of the current selected filter.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'selectedFilter'?: string;
    /**
     * All goals in selected filter.
     * @type {Array<GoalsGetAllAggregateInfo200ResponseGoalsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'goals'?: Array<GoalsGetAllAggregateInfo200ResponseGoalsInner>;
    /**
     * A list of people with access to the goal.
     * @type {Array<GoalsGetAllAggregateInfo200ResponsePersonsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'persons'?: Array<GoalsGetAllAggregateInfo200ResponsePersonsInner>;
    /**
     * A list of how many comments belong to each goal.
     * @type {Array<GoalsGetAllAggregateInfo200ResponseCommentsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response
     */
    'comments'?: Array<GoalsGetAllAggregateInfo200ResponseCommentsInner>;
}
