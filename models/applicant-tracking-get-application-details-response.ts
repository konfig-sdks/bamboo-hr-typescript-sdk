/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantTrackingGetApplicationDetailsResponseApplicant } from './applicant-tracking-get-application-details-response-applicant';
import { ApplicantTrackingGetApplicationDetailsResponseJob } from './applicant-tracking-get-application-details-response-job';
import { ApplicantTrackingGetApplicationDetailsResponseMovedTo } from './applicant-tracking-get-application-details-response-moved-to';
import { ApplicantTrackingGetApplicationDetailsResponseQuestionsAndAnswersInner } from './applicant-tracking-get-application-details-response-questions-and-answers-inner';
import { ApplicantTrackingGetApplicationDetailsResponseStatus } from './applicant-tracking-get-application-details-response-status';

/**
 * 
 * @export
 * @interface ApplicantTrackingGetApplicationDetailsResponse
 */
export interface ApplicantTrackingGetApplicationDetailsResponse {
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'appliedDate'?: string;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseStatus}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'status'?: ApplicantTrackingGetApplicationDetailsResponseStatus;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'rating'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'resumeFileId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'coverLetterFileId'?: number;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseMovedTo}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'movedTo'?: ApplicantTrackingGetApplicationDetailsResponseMovedTo;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'movedFrom'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'alsoAppliedToCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'duplicateApplicationCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'referredBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'desiredSalary'?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'commentCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'emailCount'?: number;
    /**
     * 
     * @type {Array<ApplicantTrackingGetApplicationDetailsResponseQuestionsAndAnswersInner>}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'questionsAndAnswers'?: Array<ApplicantTrackingGetApplicationDetailsResponseQuestionsAndAnswersInner>;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseApplicant}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'applicant'?: ApplicantTrackingGetApplicationDetailsResponseApplicant;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseJob}
     * @memberof ApplicantTrackingGetApplicationDetailsResponse
     */
    'job'?: ApplicantTrackingGetApplicationDetailsResponseJob;
}

