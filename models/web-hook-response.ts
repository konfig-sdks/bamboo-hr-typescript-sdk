/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebHookResponseFrequency } from './web-hook-response-frequency';
import { WebHookResponseLimit } from './web-hook-response-limit';

/**
 * 
 * @export
 * @interface WebHookResponse
 */
export interface WebHookResponse {
    /**
     * The id of the webhook.
     * @type {number}
     * @memberof WebHookResponse
     */
    'id'?: number;
    /**
     * The name of the webhook.
     * @type {string}
     * @memberof WebHookResponse
     */
    'name'?: string;
    /**
     * timestamp of creation
     * @type {string}
     * @memberof WebHookResponse
     */
    'created'?: string;
    /**
     * timestamp of last webhook sent
     * @type {string}
     * @memberof WebHookResponse
     */
    'lastSent'?: string;
    /**
     * A list of fields to monitor.
     * @type {Array<string>}
     * @memberof WebHookResponse
     */
    'monitorFields'?: Array<string>;
    /**
     * A list of fields to post to the webhook url. Field ID or alias: external name
     * @type {{ [key: string]: string; }}
     * @memberof WebHookResponse
     */
    'postFields'?: { [key: string]: string; };
    /**
     * The url the webhook should send data to.
     * @type {string}
     * @memberof WebHookResponse
     */
    'url'?: string;
    /**
     * The format the webhook should use (json, form-encoded).
     * @type {string}
     * @memberof WebHookResponse
     */
    'format'?: string;
    /**
     * 
     * @type {WebHookResponseFrequency}
     * @memberof WebHookResponse
     */
    'frequency'?: WebHookResponseFrequency;
    /**
     * 
     * @type {WebHookResponseLimit}
     * @memberof WebHookResponse
     */
    'limit'?: WebHookResponseLimit;
    /**
     * If set to true, the company domain will be added to the header.
     * @type {boolean}
     * @memberof WebHookResponse
     */
    'includeCompanyDomain'?: boolean;
}

