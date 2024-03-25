type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/{companyDomain}/v1/meta/tables-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/meta/fields-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/meta/lists-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/meta/users-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/meta/lists/{listFieldId}-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'listFieldId'
            },
            {
                name: 'options'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/comments-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'comment'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'applicationId'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/status-POST': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'applicationId'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/application-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'firstName'
            },
            {
                name: 'lastName'
            },
            {
                name: 'jobId'
            },
            {
                name: 'email'
            },
            {
                name: 'phoneNumber'
            },
            {
                name: 'source'
            },
            {
                name: 'address'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'zip'
            },
            {
                name: 'country'
            },
            {
                name: 'linkedinUrl'
            },
            {
                name: 'dateAvailable'
            },
            {
                name: 'desiredSalary'
            },
            {
                name: 'referredBy'
            },
            {
                name: 'websiteUrl'
            },
            {
                name: 'highestEducation'
            },
            {
                name: 'collegeName'
            },
            {
                name: 'references'
            },
            {
                name: 'resume'
            },
            {
                name: 'coverLetter'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/job_opening-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'postingTitle'
            },
            {
                name: 'jobStatus'
            },
            {
                name: 'hiringLead'
            },
            {
                name: 'employmentType'
            },
            {
                name: 'jobDescription'
            },
            {
                name: 'department'
            },
            {
                name: 'minimumExperience'
            },
            {
                name: 'compensation'
            },
            {
                name: 'jobLocation'
            },
            {
                name: 'applicationQuestionResume'
            },
            {
                name: 'applicationQuestionAddress'
            },
            {
                name: 'applicationQuestionLinkedinUrl'
            },
            {
                name: 'applicationQuestionDateAvailable'
            },
            {
                name: 'applicationQuestionDesiredSalary'
            },
            {
                name: 'applicationQuestionCoverLetter'
            },
            {
                name: 'applicationQuestionReferredBy'
            },
            {
                name: 'applicationQuestionWebsiteUrl'
            },
            {
                name: 'applicationQuestionHighestEducation'
            },
            {
                name: 'applicationQuestionCollege'
            },
            {
                name: 'applicationQuestionReferences'
            },
            {
                name: 'internalJobCode'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/applications/{applicationId}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'applicationId'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/locations-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/hiring_leads-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/jobs-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'statusGroups'
            },
            {
                name: 'sortBy'
            },
            {
                name: 'sortOrder'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/applications-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'page'
            },
            {
                name: 'jobId'
            },
            {
                name: 'applicationStatusId'
            },
            {
                name: 'applicationStatus'
            },
            {
                name: 'jobStatusGroups'
            },
            {
                name: 'searchString'
            },
            {
                name: 'sortBy'
            },
            {
                name: 'sortOrder'
            },
            {
                name: 'newSince'
            },
        ]
    },
    '/{companyDomain}/v1/applicant_tracking/statuses-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefitgroupemployees-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'benefitGroupId'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'startDate'
            },
            {
                name: 'endDate'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/employee_benefit-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'companyBenefitId'
            },
            {
                name: 'companyBenefitName'
            },
            {
                name: 'coverageLevel'
            },
            {
                name: 'deductionEndDate'
            },
            {
                name: 'deductionStartDate'
            },
            {
                name: 'enrollmentStatus'
            },
            {
                name: 'effectiveDate'
            },
            {
                name: 'currencyCode'
            },
            {
                name: 'employeeAmount'
            },
            {
                name: 'employeeAmountType'
            },
            {
                name: 'employeePercentBasedOn'
            },
            {
                name: 'employeeCapAmount'
            },
            {
                name: 'employeeCapAmountType'
            },
            {
                name: 'employeeAnnualMax'
            },
            {
                name: 'companyAmount'
            },
            {
                name: 'companyAmountType'
            },
            {
                name: 'companyPercentBasedOn'
            },
            {
                name: 'companyCapAmount'
            },
            {
                name: 'companyCapAmountType'
            },
            {
                name: 'companyAnnualMax'
            },
            {
                name: 'benefitPlanCoverageId'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'description'
            },
            {
                name: 'companyBenefitName'
            },
            {
                name: 'benefitVendorId'
            },
            {
                name: 'benefitType'
            },
            {
                name: 'deductionTypeId'
            },
            {
                name: 'startDate'
            },
            {
                name: 'endDate'
            },
            {
                name: 'planUrl'
            },
            {
                name: 'ssoLoginUrl'
            },
            {
                name: 'ssoLoginUrlLinkText'
            },
            {
                name: 'safeHarbor'
            },
            {
                name: 'meetAcaMin'
            },
            {
                name: 'reimbursementAmount'
            },
            {
                name: 'reimbursementFrequency'
            },
            {
                name: 'reimbursementCurrencyCode'
            },
            {
                name: 'minEssentialCoverage'
            },
        ]
    },
    '/{companyDomain}/v1/employeedependents-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'lastName'
            },
            {
                name: 'relationship'
            },
            {
                name: 'gender'
            },
            {
                name: 'ssn'
            },
            {
                name: 'dateOfBirth'
            },
            {
                name: 'addressLine1'
            },
            {
                name: 'addressLine2'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'zipCode'
            },
            {
                name: 'homePhone'
            },
            {
                name: 'country'
            },
            {
                name: 'isUsCitizen'
            },
            {
                name: 'isStudent'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/benefitgroupemployees-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefitgroups-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/employee/plans/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/benefitplans-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/benefitcoverages-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefits/settings/deduction_types/all-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/employee/deductions/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/payroll/deductions/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employeedependents/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/benefitgroupplancosts-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefitgroupplans-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefitplancoverages-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit/type-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/employee_benefit-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'filters'
            },
        ]
    },
    '/{companyDomain}/v1/employeedependents-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeid'
            },
        ]
    },
    '/{companyDomain}/v1/benefit/company_benefit/{id}-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'companyBenefitName'
            },
            {
                name: 'benefitVendorId'
            },
            {
                name: 'benefitType'
            },
            {
                name: 'deductionTypeId'
            },
            {
                name: 'startDate'
            },
            {
                name: 'endDate'
            },
            {
                name: 'planUrl'
            },
            {
                name: 'ssoLoginUrl'
            },
            {
                name: 'ssoLoginUrlLinkText'
            },
            {
                name: 'safeHarbor'
            },
            {
                name: 'meetAcaMin'
            },
            {
                name: 'reimbursementAmount'
            },
            {
                name: 'reimbursementFrequency'
            },
            {
                name: 'reimbursementCurrencyCode'
            },
            {
                name: 'minEssentialCoverage'
            },
        ]
    },
    '/{companyDomain}/v1/employeedependents/{id}-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'lastName'
            },
            {
                name: 'relationship'
            },
            {
                name: 'gender'
            },
            {
                name: 'ssn'
            },
            {
                name: 'dateOfBirth'
            },
            {
                name: 'addressLine1'
            },
            {
                name: 'addressLine2'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'zipCode'
            },
            {
                name: 'homePhone'
            },
            {
                name: 'country'
            },
            {
                name: 'isUsCitizen'
            },
            {
                name: 'isStudent'
            },
        ]
    },
    '/{companyDomain}/v1/files/categories-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/files/{fileId}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'fileId'
            },
        ]
    },
    '/{companyDomain}/v1/files/view-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/files/{fileId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'fileId'
            },
        ]
    },
    '/{companyDomain}/v1/files/{fileId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'fileId'
            },
            {
                name: 'name'
            },
            {
                name: 'categoryId'
            },
            {
                name: 'shareWithEmployee'
            },
        ]
    },
    '/{companyDomain}/v1/files-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/employees/files/categories-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/files/{fileId}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'fileId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/files/view-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/files/{fileId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'fileId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/files/{fileId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'fileId'
            },
            {
                name: 'name'
            },
            {
                name: 'categoryId'
            },
            {
                name: 'shareWithEmployee'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/files-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employees-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'firstName'
            },
            {
                name: 'lastName'
            },
        ]
    },
    '/{companyDomain}/v1/employees/directory-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'fields'
            },
            {
                name: 'id'
            },
            {
                name: 'onlyCurrent'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'firstName'
            },
            {
                name: 'lastName'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/close-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/filters-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'sharedWithEmployeeIds'
            },
            {
                name: 'dueDate'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'description'
            },
            {
                name: 'percentComplete'
            },
            {
                name: 'alignsWithOptionId'
            },
            {
                name: 'completionDate'
            },
            {
                name: 'milestones'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
            {
                name: 'commentId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/canCreateGoals-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/alignmentOptions-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/aggregate-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/aggregate-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1_2/performance/employees/{employeeId}/goals/aggregate-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'filter'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/aggregate-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/reopen-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/shareOptions-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'search'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/filters-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
            {
                name: 'commentId'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}-PUT': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'id'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
            {
                name: 'description'
            },
            {
                name: 'percentComplete'
            },
            {
                name: 'alignsWithOptionId'
            },
            {
                name: 'sharedWithEmployeeIds'
            },
            {
                name: 'dueDate'
            },
            {
                name: 'completionDate'
            },
        ]
    },
    '/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/{goalId}-PUT': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'sharedWithEmployeeIds'
            },
            {
                name: 'dueDate'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
            {
                name: 'description'
            },
            {
                name: 'alignsWithOptionId'
            },
            {
                name: 'milestonesEnabled'
            },
            {
                name: 'deletedMilestoneIds'
            },
            {
                name: 'milestones'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/sharedWith-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
            {
                name: 'sharedWithEmployeeIds'
            },
        ]
    },
    '/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/progress-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'goalId'
            },
        ]
    },
    '/{companyDomain}/v1/timetracking/record-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/timetracking/delete/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/timetracking/adjust-PUT': {
        parameters: [
            {
                name: 'timeTrackingId'
            },
            {
                name: 'hoursWorked'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/timetracking/record/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/timetracking/add-POST': {
        parameters: [
            {
                name: 'timeTrackingId'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'dateHoursWorked'
            },
            {
                name: 'rateType'
            },
            {
                name: 'hoursWorked'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'divisionId'
            },
            {
                name: 'departmentId'
            },
            {
                name: 'jobTitleId'
            },
            {
                name: 'payCode'
            },
            {
                name: 'payRate'
            },
            {
                name: 'jobCode'
            },
            {
                name: 'jobData'
            },
        ]
    },
    '/{companyDomain}/v1/employees/changed-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'since'
            },
            {
                name: 'type'
            },
        ]
    },
    '/{companyDomain}/v1/login-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'applicationKey'
            },
            {
                name: 'user'
            },
            {
                name: 'password'
            },
        ]
    },
    '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'accounts'
            },
        ]
    },
    '/{companyDomain}/v1/employee_pay_stub-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'externalRecordId'
            },
            {
                name: 'payPeriodFrom'
            },
            {
                name: 'payPeriodTo'
            },
            {
                name: 'payDate'
            },
            {
                name: 'payorName'
            },
            {
                name: 'payorAdd1'
            },
            {
                name: 'payorAdd2'
            },
            {
                name: 'payorCity'
            },
            {
                name: 'payorState'
            },
            {
                name: 'payorZip'
            },
            {
                name: 'payeeName'
            },
            {
                name: 'currencyCode'
            },
            {
                name: 'net'
            },
            {
                name: 'gross'
            },
            {
                name: 'totalTaxes'
            },
            {
                name: 'totalDeductions'
            },
            {
                name: 'ytdNet'
            },
            {
                name: 'ytdGross'
            },
            {
                name: 'ytdTaxes'
            },
            {
                name: 'ytdDeductions'
            },
            {
                name: 'fedWitholding'
            },
            {
                name: 'federalType'
            },
            {
                name: 'twoJobs'
            },
            {
                name: 'dependentsAmount'
            },
            {
                name: 'otherIncome'
            },
            {
                name: 'deductionsAmount'
            },
            {
                name: 'stateWithholding'
            },
            {
                name: 'localWithholding'
            },
            {
                name: 'additionalFed'
            },
            {
                name: 'additionalState'
            },
            {
                name: 'additionalLocal'
            },
            {
                name: 'taxState'
            },
            {
                name: 'taxLocal'
            },
            {
                name: 'wages'
            },
            {
                name: 'taxes'
            },
            {
                name: 'deductions'
            },
            {
                name: 'deposits'
            },
        ]
    },
    '/{companyDomain}/v1/employee_unpaid_pay_stubs-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'unpaidPeriods'
            },
        ]
    },
    '/{companyDomain}/v1/employee_withholding/{id}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'fedWithholding'
            },
            {
                name: 'stateWithholding'
            },
            {
                name: 'localWithholding'
            },
            {
                name: 'additionalFed'
            },
            {
                name: 'additionalState'
            },
            {
                name: 'additionalLocal'
            },
            {
                name: 'taxState'
            },
            {
                name: 'taxLocal'
            },
        ]
    },
    '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_withholding/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_pay_stub/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_direct_deposit_accounts/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_withholding/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_pay_stub/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/photo/{size}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'size'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/photo-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/reports/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'format'
            },
            {
                name: 'fd'
            },
            {
                name: 'onlyCurrent'
            },
        ]
    },
    '/{companyDomain}/v1/reports/custom-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'format'
            },
            {
                name: 'title'
            },
            {
                name: 'filters'
            },
            {
                name: 'fields'
            },
            {
                name: 'onlyCurrent'
            },
        ]
    },
    '/{companyDomain}/v1_1/employees/{id}/tables/{table}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
            {
                name: 'date'
            },
            {
                name: 'location'
            },
            {
                name: 'division'
            },
            {
                name: 'department'
            },
            {
                name: 'jobTitle'
            },
            {
                name: 'reportsTo'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/tables/{table}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
            {
                name: 'date'
            },
            {
                name: 'location'
            },
            {
                name: 'division'
            },
            {
                name: 'department'
            },
            {
                name: 'jobTitle'
            },
            {
                name: 'reportsTo'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
            {
                name: 'rowId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/changed/tables/{table}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'table'
            },
            {
                name: 'since'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/tables/{table}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
            {
                name: 'rowId'
            },
            {
                name: 'date'
            },
            {
                name: 'location'
            },
            {
                name: 'division'
            },
            {
                name: 'department'
            },
            {
                name: 'jobTitle'
            },
            {
                name: 'reportsTo'
            },
        ]
    },
    '/{companyDomain}/v1_1/employees/{id}/tables/{table}/{rowId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'table'
            },
            {
                name: 'rowId'
            },
            {
                name: 'date'
            },
            {
                name: 'location'
            },
            {
                name: 'division'
            },
            {
                name: 'department'
            },
            {
                name: 'jobTitle'
            },
            {
                name: 'reportsTo'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/history-PUT': {
        parameters: [
            {
                name: 'date'
            },
            {
                name: 'timeOffRequestId'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'note'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/policies-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/balance_adjustment-PUT': {
        parameters: [
            {
                name: 'date'
            },
            {
                name: 'timeOffTypeId'
            },
            {
                name: 'amount'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'note'
            },
        ]
    },
    '/{companyDomain}/v1/time_off/requests/{requestId}/status-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'requestId'
            },
            {
                name: 'status'
            },
            {
                name: 'note'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/calculator-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'end'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/meta/time_off/policies-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_off/requests-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
            {
                name: 'id'
            },
            {
                name: 'action'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'type'
            },
            {
                name: 'status'
            },
        ]
    },
    '/{companyDomain}/v1/meta/time_off/types-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'mode'
            },
        ]
    },
    '/{companyDomain}/v1/time_off/whos_out-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
        ]
    },
    '/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/policies-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/employees/{employeeId}/time_off/request-PUT': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'status'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
            {
                name: 'timeOffTypeId'
            },
            {
                name: 'amount'
            },
            {
                name: 'notes'
            },
            {
                name: 'dates'
            },
            {
                name: 'previousRequest'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/timesheets/approve-POST': {
        parameters: [
            {
                name: 'lastChanged'
            },
            {
                name: 'timesheets'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/timesheets/clock_out_and_approve-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'clockOuts'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_in/{employeeId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'start'
            },
            {
                name: 'timezone'
            },
            {
                name: 'note'
            },
            {
                name: 'projectId'
            },
            {
                name: 'taskId'
            },
            {
                name: 'clockInLocation'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_out/{employeeId}-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'clockOutLocation'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_out/datetime-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'datetime'
            },
            {
                name: 'timezone'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_entries-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'clockEntryIds'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_in/data-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'start'
            },
            {
                name: 'timezone'
            },
            {
                name: 'note'
            },
            {
                name: 'projectId'
            },
            {
                name: 'taskId'
            },
            {
                name: 'clockInLocation'
            },
            {
                name: 'clockOutLocation'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/is_clocked_in-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/timesheet/{timesheetId}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'timesheetId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_entries/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/daily_entries/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects/{projectId}/tasks-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'projectId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/timesheets-GET': {
        parameters: [
            {
                name: 'timesheets'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_entries-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'entries'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/daily_entries-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'entries'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_out-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_entries/store-POST': {
        parameters: [
            {
                name: 'entries'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/hour_entries/store-POST': {
        parameters: [
            {
                name: 'hours'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_in-POST': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'projectId'
            },
            {
                name: 'taskId'
            },
            {
                name: 'note'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/projects-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'billable'
            },
            {
                name: 'allowAllEmployees'
            },
            {
                name: 'employeeIds'
            },
            {
                name: 'hasTasks'
            },
            {
                name: 'tasks'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/hour_entries/delete-POST': {
        parameters: [
            {
                name: 'hourEntryIds'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/clock_entries/delete-POST': {
        parameters: [
            {
                name: 'clockEntryIds'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/employees/{employeeId}/projects-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
        ]
    },
    '/{companyDomain}/v1/time_tracking/timesheet_entries-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'start'
            },
            {
                name: 'end'
            },
            {
                name: 'employeeIds'
            },
        ]
    },
    '/{companyDomain}/v1/training/category-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/training/record/employee/{employeeId}-POST': {
        parameters: [
            {
                name: 'completed'
            },
            {
                name: 'type'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'cost'
            },
            {
                name: 'instructor'
            },
            {
                name: 'hours'
            },
            {
                name: 'credits'
            },
            {
                name: 'notes'
            },
        ]
    },
    '/{companyDomain}/v1/training/category-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/training/category/{trainingCategoryId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'trainingCategoryId'
            },
        ]
    },
    '/{companyDomain}/v1/training/record/{employeeTrainingRecordId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeTrainingRecordId'
            },
        ]
    },
    '/{companyDomain}/v1/training/type-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/training/record/employee/{employeeId}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'trainingTypeId'
            },
        ]
    },
    '/{companyDomain}/v1/training/type/{trainingTypeId}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'trainingTypeId'
            },
        ]
    },
    '/{companyDomain}/v1/training/type-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'required'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'description'
            },
            {
                name: 'frequency'
            },
            {
                name: 'renewable'
            },
            {
                name: 'category'
            },
            {
                name: 'dueFromHireDate'
            },
            {
                name: 'linkUrl'
            },
            {
                name: 'allowEmployeesToMarkComplete'
            },
        ]
    },
    '/{companyDomain}/v1/training/category/{trainingCategoryId}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'trainingCategoryId'
            },
        ]
    },
    '/{companyDomain}/v1/training/record/{employeeTrainingRecordId}-PUT': {
        parameters: [
            {
                name: 'completed'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'employeeTrainingRecordId'
            },
            {
                name: 'cost'
            },
            {
                name: 'instructor'
            },
            {
                name: 'hours'
            },
            {
                name: 'credits'
            },
            {
                name: 'notes'
            },
        ]
    },
    '/{companyDomain}/v1/training/type/{trainingTypeId}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'required'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'trainingTypeId'
            },
            {
                name: 'description'
            },
            {
                name: 'frequency'
            },
            {
                name: 'renewable'
            },
            {
                name: 'category'
            },
            {
                name: 'dueFromHireDate'
            },
            {
                name: 'linkUrl'
            },
            {
                name: 'allowEmployeesToMarkComplete'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'monitorFields'
            },
            {
                name: 'postFields'
            },
            {
                name: 'url'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'format'
            },
            {
                name: 'frequency'
            },
            {
                name: 'limit'
            },
            {
                name: 'includeCompanyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks/{id}-DELETE': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks/{id}-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks/{id}/log-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks/monitor_fields-GET': {
        parameters: [
            {
                name: 'companyDomain'
            },
        ]
    },
    '/{companyDomain}/v1/webhooks/{id}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'monitorFields'
            },
            {
                name: 'postFields'
            },
            {
                name: 'url'
            },
            {
                name: 'companyDomain'
            },
            {
                name: 'id'
            },
            {
                name: 'format'
            },
            {
                name: 'frequency'
            },
            {
                name: 'limit'
            },
            {
                name: 'includeCompanyDomain'
            },
        ]
    },
}