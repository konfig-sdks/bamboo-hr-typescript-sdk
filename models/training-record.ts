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
 * @interface TrainingRecord
 */
export interface TrainingRecord {
    /**
     * The ID of the training record.
     * @type {number}
     * @memberof TrainingRecord
     */
    'id'?: number;
    /**
     * The ID of the employee associated with the training.
     * @type {number}
     * @memberof TrainingRecord
     */
    'employeeId'?: number;
    /**
     * Completed is a date in the format yyyy-mm-dd.
     * @type {string}
     * @memberof TrainingRecord
     */
    'completed'?: string;
    /**
     * Notes left on the training record.
     * @type {string}
     * @memberof TrainingRecord
     */
    'notes'?: string;
    /**
     * Name of the instructor.
     * @type {string}
     * @memberof TrainingRecord
     */
    'instructor'?: string;
    /**
     * What was credited for the training record.
     * @type {number}
     * @memberof TrainingRecord
     */
    'credits'?: number;
    /**
     * Hours associated with the training record.
     * @type {number}
     * @memberof TrainingRecord
     */
    'hours'?: number;
    /**
     * The currency and cost for the training record.
     * @type {string}
     * @memberof TrainingRecord
     */
    'cost'?: string;
    /**
     * The training type ID.
     * @type {number}
     * @memberof TrainingRecord
     */
    'type'?: number;
}

