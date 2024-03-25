/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Country } from './country';
import { State } from './state';

/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * Description of the location
     * @type {string}
     * @memberof Location
     */
    'description'?: string;
    /**
     * The ID of the location
     * @type {number}
     * @memberof Location
     */
    'id'?: number;
    /**
     * Name of the location
     * @type {string}
     * @memberof Location
     */
    'name'?: string;
    /**
     * City of the location
     * @type {string}
     * @memberof Location
     */
    'city'?: string;
    /**
     * 
     * @type {State}
     * @memberof Location
     */
    'state'?: State;
    /**
     * 
     * @type {Country}
     * @memberof Location
     */
    'country'?: Country;
    /**
     * The ZIP or postal code of the location
     * @type {string}
     * @memberof Location
     */
    'zipcode'?: string;
    /**
     * The first address line of the location
     * @type {string}
     * @memberof Location
     */
    'addressLine1'?: string;
    /**
     * The second address line of the location
     * @type {string}
     * @memberof Location
     */
    'addressLine2'?: string;
    /**
     * The phone number of the location
     * @type {string}
     * @memberof Location
     */
    'phone'?: string;
}
