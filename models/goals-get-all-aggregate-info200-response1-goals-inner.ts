/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetAllAggregateInfo200Response1GoalsInnerActions } from './goals-get-all-aggregate-info200-response1-goals-inner-actions';
import { GoalsGetAllAggregateInfo200Response1GoalsInnerMilestonesInner } from './goals-get-all-aggregate-info200-response1-goals-inner-milestones-inner';

/**
 * 
 * @export
 * @interface GoalsGetAllAggregateInfo200Response1GoalsInner
 */
export interface GoalsGetAllAggregateInfo200Response1GoalsInner {
    /**
     * Title of the goal.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'title'?: string;
    /**
     * A description of the goal.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'description'?: string;
    /**
     * The id of the goal.
     * @type {number}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'id'?: number;
    /**
     * A percentage (1-100) that denotes how complete the goal is.
     * @type {number}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'percentComplete'?: number;
    /**
     * 
     * @type {number}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'alignsWithOptionId'?: number;
    /**
     * Ids of the employees that have access to this goal.
     * @type {Array<number>}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'sharedWithEmployeeIds'?: Array<number>;
    /**
     * The due date of the goal.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'dueDate'?: string;
    /**
     * The date the goal was completed.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'completionDate'?: string;
    /**
     * The status of the goal.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'status'?: string;
    /**
     * All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
     * @type {Array<GoalsGetAllAggregateInfo200Response1GoalsInnerMilestonesInner>}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'milestones'?: Array<GoalsGetAllAggregateInfo200Response1GoalsInnerMilestonesInner>;
    /**
     * 
     * @type {GoalsGetAllAggregateInfo200Response1GoalsInnerActions}
     * @memberof GoalsGetAllAggregateInfo200Response1GoalsInner
     */
    'actions'?: GoalsGetAllAggregateInfo200Response1GoalsInnerActions;
}

