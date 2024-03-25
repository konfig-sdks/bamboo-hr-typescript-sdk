/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The selected goal object
 * @export
 * @interface GoalsUpdateProgressResponseGoal
 */
export interface GoalsUpdateProgressResponseGoal {
    /**
     * Title of the goal.
     * @type {string}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'title'?: string;
    /**
     * A description of the goal.
     * @type {string}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'description'?: string;
    /**
     * The id of the goal.
     * @type {number}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'id'?: number;
    /**
     * A percentage (1-100) that denotes how complete the goal is.
     * @type {number}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'percentComplete'?: number;
    /**
     * 
     * @type {number}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'alignsWithOptionId'?: number;
    /**
     * Ids of the employees that have access to this goal.
     * @type {Array<number>}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'sharedWithEmployeeIds'?: Array<number>;
    /**
     * The due date of the goal.
     * @type {string}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'dueDate'?: string;
    /**
     * The date the goal was completed.
     * @type {string}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'completionDate'?: string;
    /**
     * The status of the goal.
     * @type {string}
     * @memberof GoalsUpdateProgressResponseGoal
     */
    'status'?: string;
}
