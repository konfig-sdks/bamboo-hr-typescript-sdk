/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeBenefit } from './employee-benefit';

/**
 * 
 * @export
 * @interface BenefitsAddEmployeeBenefitRequest
 */
export interface BenefitsAddEmployeeBenefitRequest {
    /**
     * Employee ID
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeId': number;
    /**
     * Company benefit ID
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyBenefitId': number;
    /**
     * Company benefit name
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyBenefitName': string;
    /**
     * Coverage level
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'coverageLevel'?: string;
    /**
     * Deduction end date
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'deductionEndDate'?: string;
    /**
     * Deduction start date
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'deductionStartDate'?: string;
    /**
     * Enrollment status
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'enrollmentStatus': BenefitsAddEmployeeBenefitRequestEnrollmentStatusEnum;
    /**
     * Enrollment status effective date
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'effectiveDate': string;
    /**
     * Currency code
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'currencyCode'?: string;
    /**
     * Employee amount
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeAmount'?: number;
    /**
     * Employee amount type
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeAmountType'?: string;
    /**
     * Employee percent based on
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeePercentBasedOn'?: string;
    /**
     * Employee cap amount
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeCapAmount'?: number;
    /**
     * Employee cap amount type
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeCapAmountType'?: string;
    /**
     * Employee annual max
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'employeeAnnualMax'?: number;
    /**
     * Company amount
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyAmount'?: number;
    /**
     * Company amount type
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyAmountType'?: string;
    /**
     * Company percent based on
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyPercentBasedOn'?: string;
    /**
     * Company cap amount
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyCapAmount'?: number;
    /**
     * Company cap amount type
     * @type {string}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyCapAmountType'?: string;
    /**
     * Company annual max
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'companyAnnualMax'?: number;
    /**
     * Benefit Plan Coverage ID
     * @type {number}
     * @memberof BenefitsAddEmployeeBenefitRequest
     */
    'benefitPlanCoverageId'?: number;
}

type BenefitsAddEmployeeBenefitRequestEnrollmentStatusEnum = 'Eligible' | 'Enrolled' | 'Waived' | 'Withdrawn' | 'Terminated' | 'Ineligible'


