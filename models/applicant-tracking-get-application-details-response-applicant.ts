/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantTrackingGetApplicationDetailsResponseApplicantAddress } from './applicant-tracking-get-application-details-response-applicant-address';
import { ApplicantTrackingGetApplicationDetailsResponseApplicantEducation } from './applicant-tracking-get-application-details-response-applicant-education';

/**
 * 
 * @export
 * @interface ApplicantTrackingGetApplicationDetailsResponseApplicant
 */
export interface ApplicantTrackingGetApplicationDetailsResponseApplicant {
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseApplicantAddress}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'address'?: ApplicantTrackingGetApplicationDetailsResponseApplicantAddress;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'linkedinUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'websiteUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'availableStartDate'?: string | null;
    /**
     * 
     * @type {ApplicantTrackingGetApplicationDetailsResponseApplicantEducation}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'education'?: ApplicantTrackingGetApplicationDetailsResponseApplicantEducation;
    /**
     * 
     * @type {number}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantTrackingGetApplicationDetailsResponseApplicant
     */
    'avatar'?: string | null;
}

