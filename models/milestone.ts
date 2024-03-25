/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Milestone
 */
export interface Milestone {
    /**
     * [Required] The title of the milestone.
     * @type {string}
     * @memberof Milestone
     */
    'title': string;
    /**
     * [Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.
     * @type {number}
     * @memberof Milestone
     */
    'startValue'?: number;
    /**
     * [Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.
     * @type {number}
     * @memberof Milestone
     */
    'endValue'?: number;
}
