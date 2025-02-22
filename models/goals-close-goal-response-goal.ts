/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsCloseGoalResponseGoalActions } from './goals-close-goal-response-goal-actions';
import { GoalsCloseGoalResponseGoalMilestonesInner } from './goals-close-goal-response-goal-milestones-inner';

/**
 * An individual goal
 * @export
 * @interface GoalsCloseGoalResponseGoal
 */
export interface GoalsCloseGoalResponseGoal {
    /**
     * Title of the goal.
     * @type {string}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'title'?: string;
    /**
     * A description of the goal.
     * @type {string}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'description'?: string;
    /**
     * The id of the goal.
     * @type {number}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'id'?: number;
    /**
     * A percentage (1-100) that denotes how complete the goal is.
     * @type {number}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'percentComplete'?: number;
    /**
     * 
     * @type {number}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'alignsWithOptionId'?: number;
    /**
     * Ids of the employees that have access to this goal.
     * @type {Array<number>}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'sharedWithEmployeeIds'?: Array<number>;
    /**
     * The due date of the goal.
     * @type {string}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'dueDate'?: string;
    /**
     * The date the goal was completed.
     * @type {string}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'completionDate'?: string;
    /**
     * The status of the goal.
     * @type {string}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'status'?: string;
    /**
     * All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.
     * @type {Array<GoalsCloseGoalResponseGoalMilestonesInner>}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'milestones'?: Array<GoalsCloseGoalResponseGoalMilestonesInner>;
    /**
     * 
     * @type {GoalsCloseGoalResponseGoalActions}
     * @memberof GoalsCloseGoalResponseGoal
     */
    'actions'?: GoalsCloseGoalResponseGoalActions;
}

