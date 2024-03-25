/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The category is optional and you can pass either a category id or a category name.
 * @export
 * @interface TrainingTypeAdditionRequestCategory
 */
export interface TrainingTypeAdditionRequestCategory {
    /**
     * Category ID
     * @type {number}
     * @memberof TrainingTypeAdditionRequestCategory
     */
    'id'?: number;
    /**
     * Category Name
     * @type {string}
     * @memberof TrainingTypeAdditionRequestCategory
     */
    'name'?: string;
    /**
     * Accuracy in meters of the clock in location
     * @type {number}
     * @memberof TrainingTypeAdditionRequestCategory
     */
    'accuracy'?: number;
    /**
     * Address...
     * @type {string}
     * @memberof TrainingTypeAdditionRequestCategory
     */
    'address'?: string;
}
