/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeTrackingPrivateBetaAddEditClockEntriesRequestEntriesInner } from './time-tracking-private-beta-add-edit-clock-entries-request-entries-inner';

/**
 * 
 * @export
 * @interface TimeTrackingPrivateBetaAddEditClockEntriesRequest
 */
export interface TimeTrackingPrivateBetaAddEditClockEntriesRequest {
    /**
     * 
     * @type {Array<TimeTrackingPrivateBetaAddEditClockEntriesRequestEntriesInner>}
     * @memberof TimeTrackingPrivateBetaAddEditClockEntriesRequest
     */
    'entries': Array<TimeTrackingPrivateBetaAddEditClockEntriesRequestEntriesInner>;
}

