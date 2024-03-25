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
 * @interface GoalsGetAllAggregateInfoResponsePersonsInner
 */
export interface GoalsGetAllAggregateInfoResponsePersonsInner {
    /**
     * The id of this employee.
     * @type {number}
     * @memberof GoalsGetAllAggregateInfoResponsePersonsInner
     */
    'employeeId'?: number;
    /**
     * The user id of the person if applicable.
     * @type {number}
     * @memberof GoalsGetAllAggregateInfoResponsePersonsInner
     */
    'userId'?: number;
    /**
     * First name of the person.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfoResponsePersonsInner
     */
    'displayFirstName'?: string;
    /**
     * Last name of the person.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfoResponsePersonsInner
     */
    'lastName'?: string;
    /**
     * url of the user profile image.
     * @type {string}
     * @memberof GoalsGetAllAggregateInfoResponsePersonsInner
     */
    'photoUrl'?: string;
}
