/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetAllAggregateInfoResponseCommentsInner } from './goals-get-all-aggregate-info-response-comments-inner';
import { GoalsGetAllAggregateInfoResponseFiltersInner } from './goals-get-all-aggregate-info-response-filters-inner';
import { GoalsGetAllAggregateInfoResponseGoalsInner } from './goals-get-all-aggregate-info-response-goals-inner';
import { GoalsGetAllAggregateInfoResponsePersonsInner } from './goals-get-all-aggregate-info-response-persons-inner';

/**
 * 
 * @export
 * @interface GoalsGetAllAggregateInfoResponse
 */
export interface GoalsGetAllAggregateInfoResponse {
    /**
     * The selected user can align goals with other users.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'canAlign'?: boolean;
    /**
     * The selected user can create a goal.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'canCreateGoals'?: boolean;
    /**
     * All the goals of the user seperated by filter.
     * @type {Array<GoalsGetAllAggregateInfoResponseFiltersInner>}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'filters'?: Array<GoalsGetAllAggregateInfoResponseFiltersInner>;
    /**
     * The id of the current selected filter.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'selectedFilter'?: string;
    /**
     * All goals in selected filter.
     * @type {Array<GoalsGetAllAggregateInfoResponseGoalsInner>}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'goals'?: Array<GoalsGetAllAggregateInfoResponseGoalsInner>;
    /**
     * A list of people with access to the goal.
     * @type {Array<GoalsGetAllAggregateInfoResponsePersonsInner>}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'persons'?: Array<GoalsGetAllAggregateInfoResponsePersonsInner>;
    /**
     * A list of how many comments belong to each goal.
     * @type {Array<GoalsGetAllAggregateInfoResponseCommentsInner>}
     * @memberof GoalsGetAllAggregateInfoResponse
     */
    'comments'?: Array<GoalsGetAllAggregateInfoResponseCommentsInner>;
}

