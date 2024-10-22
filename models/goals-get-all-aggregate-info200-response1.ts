/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetAllAggregateInfo200Response1CommentsInner } from './goals-get-all-aggregate-info200-response1-comments-inner';
import { GoalsGetAllAggregateInfo200Response1FiltersInner } from './goals-get-all-aggregate-info200-response1-filters-inner';
import { GoalsGetAllAggregateInfo200Response1GoalsInner } from './goals-get-all-aggregate-info200-response1-goals-inner';
import { GoalsGetAllAggregateInfo200Response1PersonsInner } from './goals-get-all-aggregate-info200-response1-persons-inner';

/**
 * 
 * @export
 * @interface GoalsGetAllAggregateInfo200Response1
 */
export interface GoalsGetAllAggregateInfo200Response1 {
    /**
     * The selected user can align goals with other users.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'canAlign'?: boolean;
    /**
     * The selected user can create a goal.
     * @type {boolean}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'canCreateGoals'?: boolean;
    /**
     * All the goals of the user seperated by filter.
     * @type {Array<GoalsGetAllAggregateInfo200Response1FiltersInner>}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'filters'?: Array<GoalsGetAllAggregateInfo200Response1FiltersInner>;
    /**
     * The id of the current selected filter.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'selectedFilter'?: string;
    /**
     * All goals in selected filter.
     * @type {Array<GoalsGetAllAggregateInfo200Response1GoalsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'goals'?: Array<GoalsGetAllAggregateInfo200Response1GoalsInner>;
    /**
     * A list of people with access to the goal.
     * @type {Array<GoalsGetAllAggregateInfo200Response1PersonsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'persons'?: Array<GoalsGetAllAggregateInfo200Response1PersonsInner>;
    /**
     * A list of how many comments belong to each goal.
     * @type {Array<GoalsGetAllAggregateInfo200Response1CommentsInner>}
     * @memberof GoalsGetAllAggregateInfo200Response1
     */
    'comments'?: Array<GoalsGetAllAggregateInfo200Response1CommentsInner>;
}

