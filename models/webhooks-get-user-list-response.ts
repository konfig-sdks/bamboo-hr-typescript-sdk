/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhooksGetUserListResponseWebhooksInner } from './webhooks-get-user-list-response-webhooks-inner';

/**
 * 
 * @export
 * @interface WebhooksGetUserListResponse
 */
export interface WebhooksGetUserListResponse {
    /**
     * 
     * @type {Array<WebhooksGetUserListResponseWebhooksInner>}
     * @memberof WebhooksGetUserListResponse
     */
    'webhooks'?: Array<WebhooksGetUserListResponseWebhooksInner>;
}

