/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantTrackingListApplicationsResponseApplicationsInner } from './applicant-tracking-list-applications-response-applications-inner';

/**
 * 
 * @export
 * @interface ApplicantTrackingListApplicationsResponse
 */
export interface ApplicantTrackingListApplicationsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ApplicantTrackingListApplicationsResponse
     */
    'paginationComplete'?: boolean;
    /**
     * 
     * @type {Array<ApplicantTrackingListApplicationsResponseApplicationsInner>}
     * @memberof ApplicantTrackingListApplicationsResponse
     */
    'applications'?: Array<ApplicantTrackingListApplicationsResponseApplicationsInner>;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingListApplicationsResponse
     */
    'nextPageUrl'?: string;
}

