/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * To limit how often to potentially fire a webhook, and maximum amount of records to send
 * @export
 * @interface WebHookResponseLimit
 */
export interface WebHookResponseLimit {
    /**
     * The amount of records to send
     * @type {number}
     * @memberof WebHookResponseLimit
     */
    'times'?: number;
    /**
     * The minimum amount of seconds between requests
     * @type {number}
     * @memberof WebHookResponseLimit
     */
    'seconds'?: number;
}

