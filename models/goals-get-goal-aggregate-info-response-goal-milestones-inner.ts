/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An individual milestone.
 * @export
 * @interface GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
 */
export interface GoalsGetGoalAggregateInfoResponseGoalMilestonesInner {
    /**
     * The title of the milestone.
     * @type {string}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'title'?: string;
    /**
     * The id of the milestone.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'id'?: number;
    /**
     * The id of the goal which encompasses this milestone.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'employeeGoalId'?: number;
    /**
     * The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'currentValue'?: number;
    /**
     * The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'startValue'?: number;
    /**
     * The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'endValue'?: number;
    /**
     * The date and time in which the goal has been completed. If the goal is not completed the value will be null.
     * @type {string}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'completedDateTime'?: string;
    /**
     * The date and time in which the goal was last updated.
     * @type {string}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'lastUpdateDateDateTime'?: string;
    /**
     * The ID of the user who last updated this milestone.
     * @type {number}
     * @memberof GoalsGetGoalAggregateInfoResponseGoalMilestonesInner
     */
    'lastUpdateUserId'?: number;
}
