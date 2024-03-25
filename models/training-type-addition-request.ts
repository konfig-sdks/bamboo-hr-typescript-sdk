/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrainingTypeAdditionRequestCategory } from './training-type-addition-request-category';

/**
 * 
 * @export
 * @interface TrainingTypeAdditionRequest
 */
export interface TrainingTypeAdditionRequest {
    /**
     * Description for the training.
     * @type {string}
     * @memberof TrainingTypeAdditionRequest
     */
    'description'?: string;
    /**
     * Name of the new training type.
     * @type {string}
     * @memberof TrainingTypeAdditionRequest
     */
    'name': string;
    /**
     * The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.
     * @type {number}
     * @memberof TrainingTypeAdditionRequest
     */
    'frequency'?: number;
    /**
     * Renewable is optional but if you are setting it to true you must pass a frequency which is the months between renewals.
     * @type {boolean}
     * @memberof TrainingTypeAdditionRequest
     */
    'renewable'?: boolean;
    /**
     * 
     * @type {TrainingTypeAdditionRequestCategory}
     * @memberof TrainingTypeAdditionRequest
     */
    'category'?: TrainingTypeAdditionRequestCategory;
    /**
     * Is this a required training?
     * @type {boolean}
     * @memberof TrainingTypeAdditionRequest
     */
    'required': boolean;
    /**
     * Number of days before the training is due for new hires. Not valid unless training is required.
     * @type {number}
     * @memberof TrainingTypeAdditionRequest
     */
    'dueFromHireDate'?: number;
    /**
     * Optional URL that can be included with a training.
     * @type {string}
     * @memberof TrainingTypeAdditionRequest
     */
    'linkUrl'?: string;
    /**
     * Allows all employees who can view the training to be able to mark it complete.
     * @type {boolean}
     * @memberof TrainingTypeAdditionRequest
     */
    'allowEmployeesToMarkComplete'?: boolean;
}

