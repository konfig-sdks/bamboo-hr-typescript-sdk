<div align="left">

[![Visit Bamboohr](./header.png)](https://bamboohr.com)

# [Bamboohr](https://bamboohr.com)<a id="bamboohr"></a>

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`bamboohr.accountInformation.discoverTableFields`](#bamboohraccountinformationdiscovertablefields)
  * [`bamboohr.accountInformation.getFieldList`](#bamboohraccountinformationgetfieldlist)
  * [`bamboohr.accountInformation.getListFields`](#bamboohraccountinformationgetlistfields)
  * [`bamboohr.accountInformation.getUserList`](#bamboohraccountinformationgetuserlist)
  * [`bamboohr.accountInformation.updateListFieldValues`](#bamboohraccountinformationupdatelistfieldvalues)
  * [`bamboohr.applicantTracking.addApplicationComment`](#bamboohrapplicanttrackingaddapplicationcomment)
  * [`bamboohr.applicantTracking.changeApplicantStatus`](#bamboohrapplicanttrackingchangeapplicantstatus)
  * [`bamboohr.applicantTracking.createNewApplication`](#bamboohrapplicanttrackingcreatenewapplication)
  * [`bamboohr.applicantTracking.createNewJobOpening`](#bamboohrapplicanttrackingcreatenewjobopening)
  * [`bamboohr.applicantTracking.getApplicationDetails`](#bamboohrapplicanttrackinggetapplicationdetails)
  * [`bamboohr.applicantTracking.getCompanyLocations`](#bamboohrapplicanttrackinggetcompanylocations)
  * [`bamboohr.applicantTracking.getHiringLeads`](#bamboohrapplicanttrackinggethiringleads)
  * [`bamboohr.applicantTracking.getJobSummaries`](#bamboohrapplicanttrackinggetjobsummaries)
  * [`bamboohr.applicantTracking.listApplications`](#bamboohrapplicanttrackinglistapplications)
  * [`bamboohr.applicantTracking.listStatuses`](#bamboohrapplicanttrackingliststatuses)
  * [`bamboohr.benefits.addBenefitGroupEmployee`](#bamboohrbenefitsaddbenefitgroupemployee)
  * [`bamboohr.benefits.addEmployeeBenefit`](#bamboohrbenefitsaddemployeebenefit)
  * [`bamboohr.benefits.addNewCompanyBenefit`](#bamboohrbenefitsaddnewcompanybenefit)
  * [`bamboohr.benefits.createEmployeeDependent`](#bamboohrbenefitscreateemployeedependent)
  * [`bamboohr.benefits.deleteCompanyBenefit`](#bamboohrbenefitsdeletecompanybenefit)
  * [`bamboohr.benefits.getBenefitGroupEmployees`](#bamboohrbenefitsgetbenefitgroupemployees)
  * [`bamboohr.benefits.getBenefitGroups`](#bamboohrbenefitsgetbenefitgroups)
  * [`bamboohr.benefits.getBenefitPlanDeductionsByEmployee`](#bamboohrbenefitsgetbenefitplandeductionsbyemployee)
  * [`bamboohr.benefits.getBenefitPlans`](#bamboohrbenefitsgetbenefitplans)
  * [`bamboohr.benefits.getCompanyBenefit`](#bamboohrbenefitsgetcompanybenefit)
  * [`bamboohr.benefits.getCoverages`](#bamboohrbenefitsgetcoverages)
  * [`bamboohr.benefits.getDeductionTypesAll`](#bamboohrbenefitsgetdeductiontypesall)
  * [`bamboohr.benefits.getDeductionsByPlan`](#bamboohrbenefitsgetdeductionsbyplan)
  * [`bamboohr.benefits.getEmployeeBenefitDeductions`](#bamboohrbenefitsgetemployeebenefitdeductions)
  * [`bamboohr.benefits.getEmployeeDependent`](#bamboohrbenefitsgetemployeedependent)
  * [`bamboohr.benefits.getGroupPlanCosts`](#bamboohrbenefitsgetgroupplancosts)
  * [`bamboohr.benefits.getGroupPlans`](#bamboohrbenefitsgetgroupplans)
  * [`bamboohr.benefits.listBenefitPlanCoverages`](#bamboohrbenefitslistbenefitplancoverages)
  * [`bamboohr.benefits.listCompanyBenefitTypes`](#bamboohrbenefitslistcompanybenefittypes)
  * [`bamboohr.benefits.listCompanyBenefits`](#bamboohrbenefitslistcompanybenefits)
  * [`bamboohr.benefits.listEmployeeBenefits`](#bamboohrbenefitslistemployeebenefits)
  * [`bamboohr.benefits.listEmployeeDependents`](#bamboohrbenefitslistemployeedependents)
  * [`bamboohr.benefits.updateCompanyBenefit`](#bamboohrbenefitsupdatecompanybenefit)
  * [`bamboohr.benefits.updateDependentInformation`](#bamboohrbenefitsupdatedependentinformation)
  * [`bamboohr.companyFiles.createCategory`](#bamboohrcompanyfilescreatecategory)
  * [`bamboohr.companyFiles.getFile`](#bamboohrcompanyfilesgetfile)
  * [`bamboohr.companyFiles.listFilesAndCategories`](#bamboohrcompanyfileslistfilesandcategories)
  * [`bamboohr.companyFiles.removeFile`](#bamboohrcompanyfilesremovefile)
  * [`bamboohr.companyFiles.updateFile`](#bamboohrcompanyfilesupdatefile)
  * [`bamboohr.companyFiles.uploadFile`](#bamboohrcompanyfilesuploadfile)
  * [`bamboohr.employeeFiles.addCategory`](#bamboohremployeefilesaddcategory)
  * [`bamboohr.employeeFiles.getEmployeeFile`](#bamboohremployeefilesgetemployeefile)
  * [`bamboohr.employeeFiles.listFilesAndCategories`](#bamboohremployeefileslistfilesandcategories)
  * [`bamboohr.employeeFiles.removeFile`](#bamboohremployeefilesremovefile)
  * [`bamboohr.employeeFiles.updateEmployeeFile`](#bamboohremployeefilesupdateemployeefile)
  * [`bamboohr.employeeFiles.uploadFile`](#bamboohremployeefilesuploadfile)
  * [`bamboohr.employees.createNewEmployee`](#bamboohremployeescreatenewemployee)
  * [`bamboohr.employees.getDirectory`](#bamboohremployeesgetdirectory)
  * [`bamboohr.employees.getEmployeeData`](#bamboohremployeesgetemployeedata)
  * [`bamboohr.employees.updateEmployee`](#bamboohremployeesupdateemployee)
  * [`bamboohr.goals.closeGoal`](#bamboohrgoalsclosegoal)
  * [`bamboohr.goals.countPerStatus`](#bamboohrgoalscountperstatus)
  * [`bamboohr.goals.createComment`](#bamboohrgoalscreatecomment)
  * [`bamboohr.goals.createEmployeeGoal`](#bamboohrgoalscreateemployeegoal)
  * [`bamboohr.goals.deleteById`](#bamboohrgoalsdeletebyid)
  * [`bamboohr.goals.deleteComment`](#bamboohrgoalsdeletecomment)
  * [`bamboohr.goals.determinePermission`](#bamboohrgoalsdeterminepermission)
  * [`bamboohr.goals.getAlignableOptions`](#bamboohrgoalsgetalignableoptions)
  * [`bamboohr.goals.getAllAggregateInfo`](#bamboohrgoalsgetallaggregateinfo)
  * [`bamboohr.goals.getAllAggregateInfo_0`](#bamboohrgoalsgetallaggregateinfo_0)
  * [`bamboohr.goals.getAllAggregateInfo_1`](#bamboohrgoalsgetallaggregateinfo_1)
  * [`bamboohr.goals.getComments`](#bamboohrgoalsgetcomments)
  * [`bamboohr.goals.getEmployeeGoals`](#bamboohrgoalsgetemployeegoals)
  * [`bamboohr.goals.getGoalAggregateInfo`](#bamboohrgoalsgetgoalaggregateinfo)
  * [`bamboohr.goals.reopenGoal`](#bamboohrgoalsreopengoal)
  * [`bamboohr.goals.shareOptionsGet`](#bamboohrgoalsshareoptionsget)
  * [`bamboohr.goals.statusCount`](#bamboohrgoalsstatuscount)
  * [`bamboohr.goals.updateComment`](#bamboohrgoalsupdatecomment)
  * [`bamboohr.goals.updateEmployeeGoal`](#bamboohrgoalsupdateemployeegoal)
  * [`bamboohr.goals.updateEmployeeGoalV11`](#bamboohrgoalsupdateemployeegoalv11)
  * [`bamboohr.goals.updateGoalSharing`](#bamboohrgoalsupdategoalsharing)
  * [`bamboohr.goals.updateProgress`](#bamboohrgoalsupdateprogress)
  * [`bamboohr.hours.bulkRecordEdit`](#bamboohrhoursbulkrecordedit)
  * [`bamboohr.hours.deleteHourRecord`](#bamboohrhoursdeletehourrecord)
  * [`bamboohr.hours.editHourRecord`](#bamboohrhoursedithourrecord)
  * [`bamboohr.hours.getHourRecord`](#bamboohrhoursgethourrecord)
  * [`bamboohr.hours.recordAddition`](#bamboohrhoursrecordaddition)
  * [`bamboohr.lastChangeInformation.getChangedEmployeeIds`](#bamboohrlastchangeinformationgetchangedemployeeids)
  * [`bamboohr.login.userCredentials`](#bamboohrloginusercredentials)
  * [`bamboohr.payroll.addEmployeeDirectDepositInfo`](#bamboohrpayrolladdemployeedirectdepositinfo)
  * [`bamboohr.payroll.addEmployeePaystub`](#bamboohrpayrolladdemployeepaystub)
  * [`bamboohr.payroll.addEmployeeUnpaidPaystubs`](#bamboohrpayrolladdemployeeunpaidpaystubs)
  * [`bamboohr.payroll.addEmployeeWithholdings`](#bamboohrpayrolladdemployeewithholdings)
  * [`bamboohr.payroll.clearEmployeeDirectDeposit`](#bamboohrpayrollclearemployeedirectdeposit)
  * [`bamboohr.payroll.clearEmployeeUnpaidPaystubs`](#bamboohrpayrollclearemployeeunpaidpaystubs)
  * [`bamboohr.payroll.clearEmployeeWithholdings`](#bamboohrpayrollclearemployeewithholdings)
  * [`bamboohr.payroll.deleteEmployeePaystub`](#bamboohrpayrolldeleteemployeepaystub)
  * [`bamboohr.payroll.employeeDirectDepositInfo`](#bamboohrpayrollemployeedirectdepositinfo)
  * [`bamboohr.payroll.getDefaultWithholdings`](#bamboohrpayrollgetdefaultwithholdings)
  * [`bamboohr.payroll.getPaystub`](#bamboohrpayrollgetpaystub)
  * [`bamboohr.payroll.getUnpaidPaystubs`](#bamboohrpayrollgetunpaidpaystubs)
  * [`bamboohr.photos.getEmployeePhoto`](#bamboohrphotosgetemployeephoto)
  * [`bamboohr.photos.storeNewEmployeePhoto`](#bamboohrphotosstorenewemployeephoto)
  * [`bamboohr.reports.companyReport`](#bamboohrreportscompanyreport)
  * [`bamboohr.reports.requestCustomReport`](#bamboohrreportsrequestcustomreport)
  * [`bamboohr.tabularData.addRow`](#bamboohrtabulardataaddrow)
  * [`bamboohr.tabularData.addTableRow`](#bamboohrtabulardataaddtablerow)
  * [`bamboohr.tabularData.deleteRow`](#bamboohrtabulardatadeleterow)
  * [`bamboohr.tabularData.getChangedTableRows`](#bamboohrtabulardatagetchangedtablerows)
  * [`bamboohr.tabularData.getEmployeeTableRows`](#bamboohrtabulardatagetemployeetablerows)
  * [`bamboohr.tabularData.updateRow`](#bamboohrtabulardataupdaterow)
  * [`bamboohr.tabularData.updateRow_0`](#bamboohrtabulardataupdaterow_0)
  * [`bamboohr.timeOff.addTimeOffHistoryItem`](#bamboohrtimeoffaddtimeoffhistoryitem)
  * [`bamboohr.timeOff.assignEmployeePolicies`](#bamboohrtimeoffassignemployeepolicies)
  * [`bamboohr.timeOff.assignEmployeePoliciesV11`](#bamboohrtimeoffassignemployeepoliciesv11)
  * [`bamboohr.timeOff.balanceAdjustmentPut`](#bamboohrtimeoffbalanceadjustmentput)
  * [`bamboohr.timeOff.changeRequestStatus`](#bamboohrtimeoffchangerequeststatus)
  * [`bamboohr.timeOff.estimateFutureTimeOffBalances`](#bamboohrtimeoffestimatefuturetimeoffbalances)
  * [`bamboohr.timeOff.getPolicies`](#bamboohrtimeoffgetpolicies)
  * [`bamboohr.timeOff.getTimeOffRequests`](#bamboohrtimeoffgettimeoffrequests)
  * [`bamboohr.timeOff.getTimeOffTypes`](#bamboohrtimeoffgettimeofftypes)
  * [`bamboohr.timeOff.getWhosOutList`](#bamboohrtimeoffgetwhosoutlist)
  * [`bamboohr.timeOff.listEmployeePolicies`](#bamboohrtimeofflistemployeepolicies)
  * [`bamboohr.timeOff.listEmployeeTimeOffPolicies`](#bamboohrtimeofflistemployeetimeoffpolicies)
  * [`bamboohr.timeOff.requestCreation`](#bamboohrtimeoffrequestcreation)
  * [`bamboohr.timeTracking.approveEmployeeTimesheets`](#bamboohrtimetrackingapproveemployeetimesheets)
  * [`bamboohr.timeTracking.approveEmployeeTimesheets_0`](#bamboohrtimetrackingapproveemployeetimesheets_0)
  * [`bamboohr.timeTracking.clockInEmployee`](#bamboohrtimetrackingclockinemployee)
  * [`bamboohr.timeTracking.clockOutEmployee`](#bamboohrtimetrackingclockoutemployee)
  * [`bamboohr.timeTracking.clockOutEmployeeAtSpecificTime`](#bamboohrtimetrackingclockoutemployeeatspecifictime)
  * [`bamboohr.timeTracking.deleteClockEntries`](#bamboohrtimetrackingdeleteclockentries)
  * [`bamboohr.timeTracking.editClockedInEntryData`](#bamboohrtimetrackingeditclockedinentrydata)
  * [`bamboohr.timeTracking.employeeClockedIn`](#bamboohrtimetrackingemployeeclockedin)
  * [`bamboohr.timeTracking.employeeTimesheetGet`](#bamboohrtimetrackingemployeetimesheetget)
  * [`bamboohr.timeTracking.getClockEntry`](#bamboohrtimetrackinggetclockentry)
  * [`bamboohr.timeTracking.getDailyEntry`](#bamboohrtimetrackinggetdailyentry)
  * [`bamboohr.timeTracking.getProjectTasks`](#bamboohrtimetrackinggetprojecttasks)
  * [`bamboohr.timeTracking.getTimesheetsByIds`](#bamboohrtimetrackinggettimesheetsbyids)
  * [`bamboohr.timeTracking.listEmployeeProjects`](#bamboohrtimetrackinglistemployeeprojects)
  * [`bamboohr.timeTracking.storeClockEntries`](#bamboohrtimetrackingstoreclockentries)
  * [`bamboohr.timeTracking.storeDailyEntries`](#bamboohrtimetrackingstoredailyentries)
  * [`bamboohr.timeTrackingPrivateBeta.addClockOut`](#bamboohrtimetrackingprivatebetaaddclockout)
  * [`bamboohr.timeTrackingPrivateBeta.addEditClockEntries`](#bamboohrtimetrackingprivatebetaaddeditclockentries)
  * [`bamboohr.timeTrackingPrivateBeta.addEditHourEntries`](#bamboohrtimetrackingprivatebetaaddedithourentries)
  * [`bamboohr.timeTrackingPrivateBeta.addTimesheetClockIn`](#bamboohrtimetrackingprivatebetaaddtimesheetclockin)
  * [`bamboohr.timeTrackingPrivateBeta.createProjectTask`](#bamboohrtimetrackingprivatebetacreateprojecttask)
  * [`bamboohr.timeTrackingPrivateBeta.deleteHourEntries`](#bamboohrtimetrackingprivatebetadeletehourentries)
  * [`bamboohr.timeTrackingPrivateBeta.deleteTimeSheetEntries`](#bamboohrtimetrackingprivatebetadeletetimesheetentries)
  * [`bamboohr.timeTrackingPrivateBeta.listEmployeeProjects`](#bamboohrtimetrackingprivatebetalistemployeeprojects)
  * [`bamboohr.timeTrackingPrivateBeta.listTimesheetEntries`](#bamboohrtimetrackingprivatebetalisttimesheetentries)
  * [`bamboohr.training.addCategory`](#bamboohrtrainingaddcategory)
  * [`bamboohr.training.addEmployeeTrainingRecord`](#bamboohrtrainingaddemployeetrainingrecord)
  * [`bamboohr.training.categoryList`](#bamboohrtrainingcategorylist)
  * [`bamboohr.training.deleteCategory`](#bamboohrtrainingdeletecategory)
  * [`bamboohr.training.deleteEmployeeRecord`](#bamboohrtrainingdeleteemployeerecord)
  * [`bamboohr.training.getTypes`](#bamboohrtraininggettypes)
  * [`bamboohr.training.listEmployeeTrainings`](#bamboohrtraininglistemployeetrainings)
  * [`bamboohr.training.removeType`](#bamboohrtrainingremovetype)
  * [`bamboohr.training.typeAddition`](#bamboohrtrainingtypeaddition)
  * [`bamboohr.training.updateCategory`](#bamboohrtrainingupdatecategory)
  * [`bamboohr.training.updateEmployeeTrainingRecord`](#bamboohrtrainingupdateemployeetrainingrecord)
  * [`bamboohr.training.updateType`](#bamboohrtrainingupdatetype)
  * [`bamboohr.webhooks.addNewWebhook`](#bamboohrwebhooksaddnewwebhook)
  * [`bamboohr.webhooks.deleteWebhook`](#bamboohrwebhooksdeletewebhook)
  * [`bamboohr.webhooks.getUserList`](#bamboohrwebhooksgetuserlist)
  * [`bamboohr.webhooks.getUserWebhook`](#bamboohrwebhooksgetuserwebhook)
  * [`bamboohr.webhooks.getWebhookLogs`](#bamboohrwebhooksgetwebhooklogs)
  * [`bamboohr.webhooks.listMonitorFields`](#bamboohrwebhookslistmonitorfields)
  * [`bamboohr.webhooks.updateWebhookById`](#bamboohrwebhooksupdatewebhookbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=BambooHR&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BambooHr } from "bamboo-hr-typescript-sdk";

const bamboohr = new BambooHr({
  // Defining the base path is optional and defaults to https://api.bamboohr.com/api/gateway.php
  // basePath: "https://api.bamboohr.com/api/gateway.php",
});

const discoverTableFieldsResponse =
  await bamboohr.accountInformation.discoverTableFields({
    companyDomain: "companyDomain_example",
  });

console.log(discoverTableFieldsResponse);
```

## Reference<a id="reference"></a>


### `bamboohr.accountInformation.discoverTableFields`<a id="bamboohraccountinformationdiscovertablefields"></a>

This endpoint can help discover table fields available in your BambooHR account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const discoverTableFieldsResponse =
  await bamboohr.accountInformation.discoverTableFields({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/tables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.accountInformation.getFieldList`<a id="bamboohraccountinformationgetfieldlist"></a>

This endpoint can help with discovery of fields that are available in an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFieldListResponse = await bamboohr.accountInformation.getFieldList({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.accountInformation.getListFields`<a id="bamboohraccountinformationgetlistfields"></a>

This endpoint will return details for all list fields. Lists that can be edited will have the "manageable" attribute set to yes. Lists with the "multiple" attribute set to yes are fields that can have multiple values. Options with the "archived" attribute set to yes should not appear as current options, but are included so that historical data can reference the value.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListFieldsResponse = await bamboohr.accountInformation.getListFields({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.accountInformation.getUserList`<a id="bamboohraccountinformationgetuserlist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserListResponse = await bamboohr.accountInformation.getUserList({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.accountInformation.updateListFieldValues`<a id="bamboohraccountinformationupdatelistfieldvalues"></a>

This resource accepts one or more options. To update an option, specify an ID. You may also remove an option from the list of current values by archiving the value. To create a new option, do not specify an "id" attribute.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateListFieldValuesResponse =
  await bamboohr.accountInformation.updateListFieldValues({
    companyDomain: "companyDomain_example",
    listFieldId: "listFieldId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### listFieldId: `string`<a id="listfieldid-string"></a>



##### options: [`ListFieldValuesOptionsInner`](./models/list-field-values-options-inner.ts)[]<a id="options-listfieldvaluesoptionsinnermodelslist-field-values-options-innerts"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/lists/{listFieldId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.addApplicationComment`<a id="bamboohrapplicanttrackingaddapplicationcomment"></a>

Add a comment to an application. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addApplicationCommentResponse =
  await bamboohr.applicantTracking.addApplicationComment({
    companyDomain: "companyDomain_example",
    applicationId: 0,
    type: "comment",
    comment: "I really like this applicant",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

Always the value \\\"comment\\\".

##### comment: `string`<a id="comment-string"></a>

The comment being posted.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### applicationId: `number`<a id="applicationid-number"></a>

The ID of the application to add a comment to.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.changeApplicantStatus`<a id="bamboohrapplicanttrackingchangeapplicantstatus"></a>

Change applicant's status. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const changeApplicantStatusResponse =
  await bamboohr.applicantTracking.changeApplicantStatus({
    companyDomain: "companyDomain_example",
    applicationId: 0,
    status: 2,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `number`<a id="status-number"></a>

Associates a status id with an application.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### applicationId: `number`<a id="applicationid-number"></a>

The ID of the application to add a comment to.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/status` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.createNewApplication`<a id="bamboohrapplicanttrackingcreatenewapplication"></a>

Add a new candidate application to a job opening. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewApplicationResponse =
  await bamboohr.applicantTracking.createNewApplication({
    companyDomain: "companyDomain_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    jobId: 1,
    highestEducation: "GED or Equivalent",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### firstName: `string`<a id="firstname-string"></a>

The first name of the candidate.

##### lastName: `string`<a id="lastname-string"></a>

The last name of the candidate.

##### jobId: `number`<a id="jobid-number"></a>

The id of the job opening for the candidate application.

##### email: `string`<a id="email-string"></a>

The email address of the candidate.

##### phoneNumber: `string`<a id="phonenumber-string"></a>

The phone number of the candidate.

##### source: `string`<a id="source-string"></a>

The source of the candidate application, e.g. LinkedIn, Indeed, etc.

##### address: `string`<a id="address-string"></a>

The street address of the candidate.

##### city: `string`<a id="city-string"></a>

The city of the candidate.

##### state: `string`<a id="state-string"></a>

The state or province of the candidate. Accepts state name, abbreviation, or ISO code.

##### zip: `string`<a id="zip-string"></a>

The zip code or postal code of the candidate.

##### country: `string`<a id="country-string"></a>

The country of the candidate. Accepts country name or ISO code.

##### linkedinUrl: `string`<a id="linkedinurl-string"></a>

The LinkedIn profile url of the candidate.

##### dateAvailable: `string`<a id="dateavailable-string"></a>

The available start date of the candidate with the format YYYY-MM-DD.

##### desiredSalary: `string`<a id="desiredsalary-string"></a>

The desired salary of the candidate.

##### referredBy: `string`<a id="referredby-string"></a>

The person or entity that referred the candidate.

##### websiteUrl: `string`<a id="websiteurl-string"></a>

The personal website, blog, or online portfolio of the candidate.

##### highestEducation: `string`<a id="highesteducation-string"></a>

The highest completed education level of the candidate.

##### collegeName: `string`<a id="collegename-string"></a>

The college or university of the candidate.

##### references: `string`<a id="references-string"></a>

A list of references supplied by the candidate.

##### resume: `Uint8Array | File | buffer.File`<a id="resume-uint8array--file--bufferfile"></a>

Resume of the candidate.

##### coverLetter: `Uint8Array | File | buffer.File`<a id="coverletter-uint8array--file--bufferfile"></a>

Cover letter of the candidate.

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingCreateNewApplicationResponseInner](./models/applicant-tracking-create-new-application-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/application` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.createNewJobOpening`<a id="bamboohrapplicanttrackingcreatenewjobopening"></a>

Add a new job opening. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewJobOpeningResponse =
  await bamboohr.applicantTracking.createNewJobOpening({
    companyDomain: "companyDomain_example",
    postingTitle: "postingTitle_example",
    jobStatus: "Draft",
    hiringLead: 1,
    employmentType: "employmentType_example",
    minimumExperience: "Entry-level",
    jobDescription: "jobDescription_example",
    applicationQuestionResume: "true",
    applicationQuestionAddress: "true",
    applicationQuestionLinkedinUrl: "true",
    applicationQuestionDateAvailable: "true",
    applicationQuestionDesiredSalary: "true",
    applicationQuestionCoverLetter: "true",
    applicationQuestionReferredBy: "true",
    applicationQuestionWebsiteUrl: "true",
    applicationQuestionHighestEducation: "true",
    applicationQuestionCollege: "true",
    applicationQuestionReferences: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### postingTitle: `string`<a id="postingtitle-string"></a>

The posting title of the job opening.

##### jobStatus: `string`<a id="jobstatus-string"></a>

The status of the job opening.

##### hiringLead: `number`<a id="hiringlead-number"></a>

The employee id (from the v1/applicant_tracking/hiring_leads endpoint) of the hiring lead for the job opening.

##### employmentType: `string`<a id="employmenttype-string"></a>

The type of employment offered in the job opening, e.g. Full-Time, Part-Time, Contractor, etc.

##### jobDescription: `string`<a id="jobdescription-string"></a>

The long-form text description of the job opening.

##### department: `string`<a id="department-string"></a>

The department of the job opening.

##### minimumExperience: `string`<a id="minimumexperience-string"></a>

The minimum experience level that qualifies a candidate for the job opening.

##### compensation: `string`<a id="compensation-string"></a>

The pay rate or compensation for the job opening.

##### jobLocation: `number`<a id="joblocation-number"></a>

The location id (from the v1/applicant_tracking/locations endpoint) of the job opening. Omit this parameter for a remote job location.

##### applicationQuestionResume: `string`<a id="applicationquestionresume-string"></a>

Whether the job opening application has a standard question for resume (true) or not (false) or if uploading a resume is mandatory (required).

##### applicationQuestionAddress: `string`<a id="applicationquestionaddress-string"></a>

Whether the job opening application has a standard question for address (true) or not (false) or if entering an address is mandatory (required).

##### applicationQuestionLinkedinUrl: `string`<a id="applicationquestionlinkedinurl-string"></a>

Whether the job opening application has a standard question for LinkedIn profile url (true) or not (false) or if entering a LinkedIn profile url is mandatory (required).

##### applicationQuestionDateAvailable: `string`<a id="applicationquestiondateavailable-string"></a>

Whether the job opening application has a standard question for availability date (true) or not (false) or if entering an availability date is mandatory (required).

##### applicationQuestionDesiredSalary: `string`<a id="applicationquestiondesiredsalary-string"></a>

Whether the job opening application has a standard question for desired salary (true) or not (false) or if entering a desired salary is mandatory (required).

##### applicationQuestionCoverLetter: `string`<a id="applicationquestioncoverletter-string"></a>

Whether the job opening application has a standard question for cover letter (true) or not (false) or if uploading a cover letter is mandatory (required).

##### applicationQuestionReferredBy: `string`<a id="applicationquestionreferredby-string"></a>

Whether the job opening application has a standard question for referred by (true) or not (false) or if entering referred by is mandatory (required).

##### applicationQuestionWebsiteUrl: `string`<a id="applicationquestionwebsiteurl-string"></a>

Whether the job opening application has a standard question for website url (true) or not (false) or if entering a website url is mandatory (required).

##### applicationQuestionHighestEducation: `string`<a id="applicationquestionhighesteducation-string"></a>

Whether the job opening application has a standard question for highest education (true) or not (false) or if entering highest education is mandatory (required).

##### applicationQuestionCollege: `string`<a id="applicationquestioncollege-string"></a>

Whether the job opening application has a standard question for college (true) or not (false) or if entering a college is mandatory (required).

##### applicationQuestionReferences: `string`<a id="applicationquestionreferences-string"></a>

Whether the job opening application has a standard question for references (true) or not (false) or if entering references is mandatory (required).

##### internalJobCode: `string`<a id="internaljobcode-string"></a>

The internal job code for the job opening.

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingCreateNewJobOpeningResponseInner](./models/applicant-tracking-create-new-job-opening-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/job_opening` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.getApplicationDetails`<a id="bamboohrapplicanttrackinggetapplicationdetails"></a>

Get the details of an application. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApplicationDetailsResponse =
  await bamboohr.applicantTracking.getApplicationDetails({
    companyDomain: "companyDomain_example",
    applicationId: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### applicationId: `number`<a id="applicationid-number"></a>

The ID of the application to look up details.

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingGetApplicationDetailsResponse](./models/applicant-tracking-get-application-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/applications/{applicationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.getCompanyLocations`<a id="bamboohrapplicanttrackinggetcompanylocations"></a>

Get company locations for use in creating a new job opening. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyLocationsResponse =
  await bamboohr.applicantTracking.getCompanyLocations({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingGetCompanyLocationsResponseInner](./models/applicant-tracking-get-company-locations-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.getHiringLeads`<a id="bamboohrapplicanttrackinggethiringleads"></a>

Get potential hiring leads for use in creating a new job opening. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHiringLeadsResponse = await bamboohr.applicantTracking.getHiringLeads({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingGetHiringLeadsResponseInner](./models/applicant-tracking-get-hiring-leads-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/hiring_leads` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.getJobSummaries`<a id="bamboohrapplicanttrackinggetjobsummaries"></a>

Get a list of job summaries. The owner of the API key used must have access to ATS settings. Combine as many different optional parameter filters as you like.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobSummariesResponse =
  await bamboohr.applicantTracking.getJobSummaries({
    companyDomain: "companyDomain_example",
    statusGroups: "ALL",
    sortBy: "count",
    sortOrder: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### statusGroups: `'ALL' | 'DRAFT_AND_OPEN' | 'Open' | 'Filled' | 'Draft' | 'Deleted' | 'On Hold' | 'Canceled'`<a id="statusgroups-all--draft_and_open--open--filled--draft--deleted--on-hold--canceled"></a>

A list of status groups to filter positions by.

##### sortBy: `'count' | 'title' | 'lead' | 'created' | 'status'`<a id="sortby-count--title--lead--created--status"></a>

A specific field to sort the results by.

##### sortOrder: `'ASC' | 'DESC'`<a id="sortorder-asc--desc"></a>

Order by which to sort results.

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingGetJobSummariesResponseInner](./models/applicant-tracking-get-job-summaries-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.listApplications`<a id="bamboohrapplicanttrackinglistapplications"></a>

Get a list of applications. The owner of the API key used must have access to ATS settings. Combine as many different optional parameter filters as you like.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listApplicationsResponse =
  await bamboohr.applicantTracking.listApplications({
    companyDomain: "companyDomain_example",
    applicationStatus: "ALL",
    jobStatusGroups: "ALL",
    sortBy: "first_name",
    sortOrder: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### page: `number`<a id="page-number"></a>

The page number

##### jobId: `number`<a id="jobid-number"></a>

A Job Id to limit results to

##### applicationStatusId: `number`<a id="applicationstatusid-number"></a>

Application status id to filter by.

##### applicationStatus: `'ALL' | 'ALL_ACTIVE' | 'NEW' | 'ACTIVE' | 'INACTIVE' | 'HIRED'`<a id="applicationstatus-all--all_active--new--active--inactive--hired"></a>

A list of application status groups to filter by.

##### jobStatusGroups: `'ALL' | 'DRAFT_AND_OPEN' | 'Open' | 'Filled' | 'Draft' | 'Deleted' | 'On Hold' | 'Canceled'`<a id="jobstatusgroups-all--draft_and_open--open--filled--draft--deleted--on-hold--canceled"></a>

A list of position status groups to filter by.

##### searchString: `string`<a id="searchstring-string"></a>

A general search criteria by which to find applications.

##### sortBy: `'first_name' | 'job_title' | 'rating' | 'phone' | 'status' | 'last_updated' | 'created_date'`<a id="sortby-first_name--job_title--rating--phone--status--last_updated--created_date"></a>

A specific field to sort the results by.

##### sortOrder: `'ASC' | 'DESC'`<a id="sortorder-asc--desc"></a>

Order by which to sort results.

##### newSince: `string`<a id="newsince-string"></a>

Only get applications newer than a given UTC timestamp, for example 2024-01-01 13:00:00

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingListApplicationsResponse](./models/applicant-tracking-list-applications-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/applications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.applicantTracking.listStatuses`<a id="bamboohrapplicanttrackingliststatuses"></a>

Get a list of statuses for a company. The owner of the API key used must have access to ATS settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStatusesResponse = await bamboohr.applicantTracking.listStatuses({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[ApplicantTrackingListStatusesResponseInner](./models/applicant-tracking-list-statuses-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/applicant_tracking/statuses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.addBenefitGroupEmployee`<a id="bamboohrbenefitsaddbenefitgroupemployee"></a>

Add a benefit group employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addBenefitGroupEmployeeResponse =
  await bamboohr.benefits.addBenefitGroupEmployee({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### benefitGroupId: `string`<a id="benefitgroupid-string"></a>



##### employeeId: `string`<a id="employeeid-string"></a>



##### startDate: `string`<a id="startdate-string"></a>



##### endDate: `string`<a id="enddate-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitgroupemployees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.addEmployeeBenefit`<a id="bamboohrbenefitsaddemployeebenefit"></a>

Add an employee benefit

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeBenefitResponse = await bamboohr.benefits.addEmployeeBenefit({
  companyDomain: "companyDomain_example",
  enrollmentStatus: "Eligible",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

Employee ID

##### companyBenefitId: `number`<a id="companybenefitid-number"></a>

Company benefit ID

##### companyBenefitName: `string`<a id="companybenefitname-string"></a>

Company benefit name

##### coverageLevel: `string`<a id="coveragelevel-string"></a>

Coverage level

##### deductionEndDate: `string`<a id="deductionenddate-string"></a>

Deduction end date

##### deductionStartDate: `string`<a id="deductionstartdate-string"></a>

Deduction start date

##### enrollmentStatus: `string`<a id="enrollmentstatus-string"></a>

Enrollment status

##### effectiveDate: `string`<a id="effectivedate-string"></a>

Enrollment status effective date

##### currencyCode: `string`<a id="currencycode-string"></a>

Currency code

##### employeeAmount: `number`<a id="employeeamount-number"></a>

Employee amount

##### employeeAmountType: `string`<a id="employeeamounttype-string"></a>

Employee amount type

##### employeePercentBasedOn: `string`<a id="employeepercentbasedon-string"></a>

Employee percent based on

##### employeeCapAmount: `number`<a id="employeecapamount-number"></a>

Employee cap amount

##### employeeCapAmountType: `string`<a id="employeecapamounttype-string"></a>

Employee cap amount type

##### employeeAnnualMax: `number`<a id="employeeannualmax-number"></a>

Employee annual max

##### companyAmount: `number`<a id="companyamount-number"></a>

Company amount

##### companyAmountType: `string`<a id="companyamounttype-string"></a>

Company amount type

##### companyPercentBasedOn: `string`<a id="companypercentbasedon-string"></a>

Company percent based on

##### companyCapAmount: `number`<a id="companycapamount-number"></a>

Company cap amount

##### companyCapAmountType: `string`<a id="companycapamounttype-string"></a>

Company cap amount type

##### companyAnnualMax: `number`<a id="companyannualmax-number"></a>

Company annual max

##### benefitPlanCoverageId: `number`<a id="benefitplancoverageid-number"></a>

Benefit Plan Coverage ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/employee_benefit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.addNewCompanyBenefit`<a id="bamboohrbenefitsaddnewcompanybenefit"></a>

Add a new company benefit

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewCompanyBenefitResponse =
  await bamboohr.benefits.addNewCompanyBenefit({
    companyDomain: "companyDomain_example",
    benefitType: "health",
    reimbursementFrequency: "pay period",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### description: `string`<a id="description-string"></a>

Description

##### companyBenefitName: `string`<a id="companybenefitname-string"></a>

Name

##### benefitVendorId: `string`<a id="benefitvendorid-string"></a>

Benefit vendor ID

##### benefitType: `string`<a id="benefittype-string"></a>

Benefit type

##### deductionTypeId: `string`<a id="deductiontypeid-string"></a>

Deduction type ID

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Benefit start date

##### endDate: `string | Date`<a id="enddate-string--date"></a>

Benefit end date

##### planUrl: `string`<a id="planurl-string"></a>

Plan url

##### ssoLoginUrl: `string`<a id="ssologinurl-string"></a>

SSO login url

##### ssoLoginUrlLinkText: `string`<a id="ssologinurllinktext-string"></a>

SSO login link text

##### safeHarbor: `boolean`<a id="safeharbor-boolean"></a>

Is a safe harbor

##### meetAcaMin: `boolean`<a id="meetacamin-boolean"></a>

Meets ACA minimum requirements

##### reimbursementAmount: `number`<a id="reimbursementamount-number"></a>

Reimbursement amount

##### reimbursementFrequency: `string`<a id="reimbursementfrequency-string"></a>

Reimbursement frequency

##### reimbursementCurrencyCode: `string`<a id="reimbursementcurrencycode-string"></a>

Reimbursement currency code

##### minEssentialCoverage: `boolean`<a id="minessentialcoverage-boolean"></a>

Provides minimum essential coverage

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitResponse](./models/company-benefit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.createEmployeeDependent`<a id="bamboohrbenefitscreateemployeedependent"></a>

Adds an employee dependent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmployeeDependentResponse =
  await bamboohr.benefits.createEmployeeDependent({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### firstName: `string`<a id="firstname-string"></a>



##### middleName: `string`<a id="middlename-string"></a>



##### lastName: `string`<a id="lastname-string"></a>



##### relationship: `string`<a id="relationship-string"></a>



##### gender: `string`<a id="gender-string"></a>



##### ssn: `string`<a id="ssn-string"></a>



##### dateOfBirth: `string`<a id="dateofbirth-string"></a>



##### addressLine1: `string`<a id="addressline1-string"></a>



##### addressLine2: `string`<a id="addressline2-string"></a>



##### city: `string`<a id="city-string"></a>



##### state: `string`<a id="state-string"></a>



##### zipCode: `string`<a id="zipcode-string"></a>



##### homePhone: `string`<a id="homephone-string"></a>



##### country: `string`<a id="country-string"></a>



##### isUsCitizen: `string`<a id="isuscitizen-string"></a>



##### isStudent: `string`<a id="isstudent-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employeedependents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.deleteCompanyBenefit`<a id="bamboohrbenefitsdeletecompanybenefit"></a>

Delete a company benefit

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCompanyBenefitResponse =
  await bamboohr.benefits.deleteCompanyBenefit({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the company benefit ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getBenefitGroupEmployees`<a id="bamboohrbenefitsgetbenefitgroupemployees"></a>

Get benefit group employees

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBenefitGroupEmployeesResponse =
  await bamboohr.benefits.getBenefitGroupEmployees({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitgroupemployees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getBenefitGroups`<a id="bamboohrbenefitsgetbenefitgroups"></a>

Get benefit groups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBenefitGroupsResponse = await bamboohr.benefits.getBenefitGroups({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitgroups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getBenefitPlanDeductionsByEmployee`<a id="bamboohrbenefitsgetbenefitplandeductionsbyemployee"></a>

Get benefit plan deductions by employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBenefitPlanDeductionsByEmployeeResponse =
  await bamboohr.benefits.getBenefitPlanDeductionsByEmployee({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee/plans/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getBenefitPlans`<a id="bamboohrbenefitsgetbenefitplans"></a>

Get benefit plans

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBenefitPlansResponse = await bamboohr.benefits.getBenefitPlans({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitplans` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getCompanyBenefit`<a id="bamboohrbenefitsgetcompanybenefit"></a>

Get a company benefit

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyBenefitResponse = await bamboohr.benefits.getCompanyBenefit({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the company benefit ID.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitResponse](./models/company-benefit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getCoverages`<a id="bamboohrbenefitsgetcoverages"></a>

Get benefit coverages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCoveragesResponse = await bamboohr.benefits.getCoverages({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitcoverages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getDeductionTypesAll`<a id="bamboohrbenefitsgetdeductiontypesall"></a>

Get benefit deduction types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeductionTypesAllResponse =
  await bamboohr.benefits.getDeductionTypesAll({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefits/settings/deduction_types/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getDeductionsByPlan`<a id="bamboohrbenefitsgetdeductionsbyplan"></a>

Get employee deductions by benefit plan

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeductionsByPlanResponse = await bamboohr.benefits.getDeductionsByPlan(
  {
    companyDomain: "companyDomain_example",
    id: "id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the benefit plan ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee/deductions/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getEmployeeBenefitDeductions`<a id="bamboohrbenefitsgetemployeebenefitdeductions"></a>

Get benefit deductions for employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeBenefitDeductionsResponse =
  await bamboohr.benefits.getEmployeeBenefitDeductions({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/payroll/deductions/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getEmployeeDependent`<a id="bamboohrbenefitsgetemployeedependent"></a>

Get employee dependent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeDependentResponse =
  await bamboohr.benefits.getEmployeeDependent({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee dependent ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employeedependents/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getGroupPlanCosts`<a id="bamboohrbenefitsgetgroupplancosts"></a>

Get benefit group plan costs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupPlanCostsResponse = await bamboohr.benefits.getGroupPlanCosts({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitgroupplancosts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.getGroupPlans`<a id="bamboohrbenefitsgetgroupplans"></a>

Get benefit group plans

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupPlansResponse = await bamboohr.benefits.getGroupPlans({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitgroupplans` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.listBenefitPlanCoverages`<a id="bamboohrbenefitslistbenefitplancoverages"></a>

Get benefit plan coverages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBenefitPlanCoveragesResponse =
  await bamboohr.benefits.listBenefitPlanCoverages({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefitplancoverages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.listCompanyBenefitTypes`<a id="bamboohrbenefitslistcompanybenefittypes"></a>

Get a list of company benefit types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyBenefitTypesResponse =
  await bamboohr.benefits.listCompanyBenefitTypes({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitType](./models/company-benefit-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit/type` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.listCompanyBenefits`<a id="bamboohrbenefitslistcompanybenefits"></a>

Get a list of company benefits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyBenefitsResponse = await bamboohr.benefits.listCompanyBenefits(
  {
    companyDomain: "companyDomain_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitResponse](./models/company-benefit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.listEmployeeBenefits`<a id="bamboohrbenefitslistemployeebenefits"></a>

Get a list of employee benefits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeBenefitsResponse =
  await bamboohr.benefits.listEmployeeBenefits({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### filters: [`EmployeeBenefitFiltersFilters`](./models/employee-benefit-filters-filters.ts)<a id="filters-employeebenefitfiltersfiltersmodelsemployee-benefit-filters-filtersts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeBenefit](./models/employee-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/employee_benefit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.listEmployeeDependents`<a id="bamboohrbenefitslistemployeedependents"></a>

Get all employee dependents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeDependentsResponse =
  await bamboohr.benefits.listEmployeeDependents({
    companyDomain: "companyDomain_example",
    employeeid: "employeeid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeid: `string`<a id="employeeid-string"></a>

{employeeid} is the employee ID. Supplying this ID limits the response to the specific employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employeedependents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.updateCompanyBenefit`<a id="bamboohrbenefitsupdatecompanybenefit"></a>

Update a company benefit

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompanyBenefitResponse =
  await bamboohr.benefits.updateCompanyBenefit({
    companyDomain: "companyDomain_example",
    id: "id_example",
    benefitType: "health",
    reimbursementFrequency: "pay period",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the company benefit ID.

##### description: `string`<a id="description-string"></a>

Description

##### companyBenefitName: `string`<a id="companybenefitname-string"></a>

Name

##### benefitVendorId: `string`<a id="benefitvendorid-string"></a>

Benefit vendor ID

##### benefitType: `string`<a id="benefittype-string"></a>

Benefit type

##### deductionTypeId: `string`<a id="deductiontypeid-string"></a>

Deduction type ID

##### startDate: `string`<a id="startdate-string"></a>

Benefit start date

##### endDate: `string`<a id="enddate-string"></a>

Benefit end date

##### planUrl: `string`<a id="planurl-string"></a>

Plan url

##### ssoLoginUrl: `string`<a id="ssologinurl-string"></a>

SSO login url

##### ssoLoginUrlLinkText: `string`<a id="ssologinurllinktext-string"></a>

SSO login link text

##### safeHarbor: `boolean`<a id="safeharbor-boolean"></a>

Is a safe harbor

##### meetAcaMin: `boolean`<a id="meetacamin-boolean"></a>

Meets ACA minimum requirements

##### reimbursementAmount: `number`<a id="reimbursementamount-number"></a>

Reimbursement amount

##### reimbursementFrequency: `string`<a id="reimbursementfrequency-string"></a>

Reimbursement frequency

##### reimbursementCurrencyCode: `string`<a id="reimbursementcurrencycode-string"></a>

Reimbursement currency code

##### minEssentialCoverage: `boolean`<a id="minessentialcoverage-boolean"></a>

Provides minimum essential coverage

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitResponse](./models/company-benefit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/benefit/company_benefit/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.benefits.updateDependentInformation`<a id="bamboohrbenefitsupdatedependentinformation"></a>

This API allows you to change the information for a given dependent ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDependentInformationResponse =
  await bamboohr.benefits.updateDependentInformation({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee dependent ID.

##### employeeId: `string`<a id="employeeid-string"></a>



##### firstName: `string`<a id="firstname-string"></a>



##### middleName: `string`<a id="middlename-string"></a>



##### lastName: `string`<a id="lastname-string"></a>



##### relationship: `string`<a id="relationship-string"></a>



##### gender: `string`<a id="gender-string"></a>



##### ssn: `string`<a id="ssn-string"></a>



##### dateOfBirth: `string`<a id="dateofbirth-string"></a>



##### addressLine1: `string`<a id="addressline1-string"></a>



##### addressLine2: `string`<a id="addressline2-string"></a>



##### city: `string`<a id="city-string"></a>



##### state: `string`<a id="state-string"></a>



##### zipCode: `string`<a id="zipcode-string"></a>



##### homePhone: `string`<a id="homephone-string"></a>



##### country: `string`<a id="country-string"></a>



##### isUsCitizen: `string`<a id="isuscitizen-string"></a>



##### isStudent: `string`<a id="isstudent-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employeedependents/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.createCategory`<a id="bamboohrcompanyfilescreatecategory"></a>

Add a company file category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCategoryResponse = await bamboohr.companyFiles.createCategory({
  companyDomain: "companyDomain_example",
  requestBody: ["A new category"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### requestBody: `string`[]<a id="requestbody-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files/categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.getFile`<a id="bamboohrcompanyfilesgetfile"></a>

Gets an company file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileResponse = await bamboohr.companyFiles.getFile({
  companyDomain: "companyDomain_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the company file being retrieved.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.listFilesAndCategories`<a id="bamboohrcompanyfileslistfilesandcategories"></a>

Lists company files and categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesAndCategoriesResponse =
  await bamboohr.companyFiles.listFilesAndCategories({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.removeFile`<a id="bamboohrcompanyfilesremovefile"></a>

Delete a company file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileResponse = await bamboohr.companyFiles.removeFile({
  companyDomain: "companyDomain_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the company file being deleted.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files/{fileId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.updateFile`<a id="bamboohrcompanyfilesupdatefile"></a>

Update a company file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileResponse = await bamboohr.companyFiles.updateFile({
  companyDomain: "companyDomain_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the employee file being updated.

##### name: `string`<a id="name-string"></a>



##### categoryId: `string`<a id="categoryid-string"></a>



##### shareWithEmployee: `string`<a id="sharewithemployee-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files/{fileId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.companyFiles.uploadFile`<a id="bamboohrcompanyfilesuploadfile"></a>

Upload a company file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadFileResponse = await bamboohr.companyFiles.uploadFile({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.addCategory`<a id="bamboohremployeefilesaddcategory"></a>

Add an employee file category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCategoryResponse = await bamboohr.employeeFiles.addCategory({
  companyDomain: "companyDomain_example",
  requestBody: ["A new category"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### requestBody: `string`[]<a id="requestbody-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/files/categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.getEmployeeFile`<a id="bamboohremployeefilesgetemployeefile"></a>

Gets an employee file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeFileResponse = await bamboohr.employeeFiles.getEmployeeFile({
  companyDomain: "companyDomain_example",
  id: "0",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the employee file being retrieved.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.listFilesAndCategories`<a id="bamboohremployeefileslistfilesandcategories"></a>

Lists employee files and categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesAndCategoriesResponse =
  await bamboohr.employeeFiles.listFilesAndCategories({
    companyDomain: "companyDomain_example",
    id: "0",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/files/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.removeFile`<a id="bamboohremployeefilesremovefile"></a>

Delete an employee file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileResponse = await bamboohr.employeeFiles.removeFile({
  companyDomain: "companyDomain_example",
  id: "0",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the employee file being deleted.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/files/{fileId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.updateEmployeeFile`<a id="bamboohremployeefilesupdateemployeefile"></a>

Update an employee file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeFileResponse =
  await bamboohr.employeeFiles.updateEmployeeFile({
    companyDomain: "companyDomain_example",
    id: "0",
    fileId: "fileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

##### fileId: `string`<a id="fileid-string"></a>

{fileId} is the ID of the employee file being updated.

##### name: `string`<a id="name-string"></a>



##### categoryId: `string`<a id="categoryid-string"></a>



##### shareWithEmployee: `string`<a id="sharewithemployee-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/files/{fileId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employeeFiles.uploadFile`<a id="bamboohremployeefilesuploadfile"></a>

Upload an employee file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadFileResponse = await bamboohr.employeeFiles.uploadFile({
  companyDomain: "companyDomain_example",
  id: "0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employees.createNewEmployee`<a id="bamboohremployeescreatenewemployee"></a>

Add a new employee. New employees must have at least a first name and a last name. The ID of the newly created employee is included in the Location header of the response. Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields) endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the following required fields (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEmployeeResponse = await bamboohr.employees.createNewEmployee({
  companyDomain: "companyDomain_example",
  firstName: "Panda",
  lastName: "Bear",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### firstName: `string`<a id="firstname-string"></a>



##### lastName: `string`<a id="lastname-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employees.getDirectory`<a id="bamboohremployeesgetdirectory"></a>

Gets employee directory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDirectoryResponse = await bamboohr.employees.getDirectory({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetDirectoryResponse](./models/employees-get-directory-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/directory` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employees.getEmployeeData`<a id="bamboohremployeesgetemployeedata"></a>

Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information. See the [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeDataResponse = await bamboohr.employees.getEmployeeData({
  companyDomain: "companyDomain_example",
  fields: "firstName,lastName",
  id: "0",
  onlyCurrent: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### fields: `string`<a id="fields-string"></a>

{fields} is a comma separated list of values taken from the official list of field names. 

##### id: `string`<a id="id-string"></a>

{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).

##### onlyCurrent: `boolean`<a id="onlycurrent-boolean"></a>

Setting to false will return future dated values from history table fields.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetEmployeeDataResponse](./models/employees-get-employee-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.employees.updateEmployee`<a id="bamboohremployeesupdateemployee"></a>

Update an employee, based on employee ID. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the API user will need to update the employee with all of the following required fields for the update to be successful (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeResponse = await bamboohr.employees.updateEmployee({
  companyDomain: "companyDomain_example",
  id: "id_example",
  firstName: "Panda",
  lastName: "Bear",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an employee ID.

##### firstName: `string`<a id="firstname-string"></a>



##### lastName: `string`<a id="lastname-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.closeGoal`<a id="bamboohrgoalsclosegoal"></a>

Close a goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const closeGoalResponse = await bamboohr.goals.closeGoal({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
  requestBody: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### requestBody: `string`<a id="requestbody-string"></a>

Comment field is optional.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsCloseGoalResponse](./models/goals-close-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/close` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.countPerStatus`<a id="bamboohrgoalscountperstatus"></a>

Get the number of goals per status for an employee. Difference from Version 1: Returns goals in the closed filter and provides filter actions for each filter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const countPerStatusResponse = await bamboohr.goals.countPerStatus({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID to whom the goals are assigned.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsCountPerStatusResponse](./models/goals-count-per-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/filters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.createComment`<a id="bamboohrgoalscreatecomment"></a>

Create a new goal comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCommentResponse = await bamboohr.goals.createComment({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
  requestBody: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### requestBody: `string`<a id="requestbody-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.createEmployeeGoal`<a id="bamboohrgoalscreateemployeegoal"></a>

Create a new goal for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmployeeGoalResponse = await bamboohr.goals.createEmployeeGoal({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  title: "title_example",
  sharedWithEmployeeIds: [1],
  dueDate: "dueDate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

[Required] The goal title.

##### sharedWithEmployeeIds: `number`[]<a id="sharedwithemployeeids-number"></a>

[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered \\\"shared with\\\". This must include the employee for whom the goal is created.

##### dueDate: `string`<a id="duedate-string"></a>

[Required] The goal due date in YYYY-mm-dd format.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### description: `string`<a id="description-string"></a>

[Optional] The goal description.

##### percentComplete: `number`<a id="percentcomplete-number"></a>

[Optional] The goal completion percentage (0 - 100). If completionDate is set, this value must be 100.

##### alignsWithOptionId: `string`<a id="alignswithoptionid-string"></a>

[Optional] The option ID that aligns with this goal.

##### completionDate: `number`<a id="completiondate-number"></a>

[Optional] The date the goal was completed. If date is set, and no milestones are contained within this goal, percentComplete must be set to 100. If this goal does contain milestones, completion date cannot be set.

##### milestones: [`Milestone`](./models/milestone.ts)[]<a id="milestones-milestonemodelsmilestonets"></a>

[Optional] Milestones for the goal.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.deleteById`<a id="bamboohrgoalsdeletebyid"></a>

Delete a goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await bamboohr.goals.deleteById({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.deleteComment`<a id="bamboohrgoalsdeletecomment"></a>

Delete a goal comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCommentResponse = await bamboohr.goals.deleteComment({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
  commentId: "commentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### commentId: `string`<a id="commentid-string"></a>

commentId is the ID of a specific comment for the specified goal.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.determinePermission`<a id="bamboohrgoalsdeterminepermission"></a>

Determine if the API user has permission to create a goal for this employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const determinePermissionResponse = await bamboohr.goals.determinePermission({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/canCreateGoals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getAlignableOptions`<a id="bamboohrgoalsgetalignableoptions"></a>

Get alignable goal options for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAlignableOptionsResponse = await bamboohr.goals.getAlignableOptions({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  requestBody: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID to get alignable goal options for.

##### requestBody: `string`<a id="requestbody-string"></a>

Get alignment options including the option currently aligned with this goal (if applicable). If omitted, response will be alignment options belonging to the API user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/alignmentOptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getAllAggregateInfo`<a id="bamboohrgoalsgetallaggregateinfo"></a>

Provides a list of all goals, type counts, goal comment counts, and employees shared with goals for the given employee. This version of the endpoint will not return any goals with milestones. Milestone functionality for this endpoint begins in version 1.2.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAggregateInfoResponse = await bamboohr.goals.getAllAggregateInfo({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID used to generate the aggregate information.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetAllAggregateInfoResponse](./models/goals-get-all-aggregate-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/aggregate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getAllAggregateInfo_0`<a id="bamboohrgoalsgetallaggregateinfo_0"></a>

Provides a list of all goals, type counts, filter actions, goal comment counts, and employees shared with goals for the given employee. Difference from Version 1: Returns goals in the closed filter and provides filter actions for each filter. This version of the endpoint will not return any goals with milestones. Milestone functionality for this endpoint begins in version 1.2.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAggregateInfo_0Response =
  await bamboohr.goals.getAllAggregateInfo_0({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID used to generate the aggregate information.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetAllAggregateInfo200Response](./models/goals-get-all-aggregate-info200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/aggregate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getAllAggregateInfo_1`<a id="bamboohrgoalsgetallaggregateinfo_1"></a>

Provides a list of all goals, type counts, filter actions, goal comment counts, and employees shared with goals for the given employee. Difference from Version 1.1: Returns all goals, including goals that contain milestones.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAggregateInfo_1Response =
  await bamboohr.goals.getAllAggregateInfo_1({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID used to generate the aggregate information.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetAllAggregateInfo200Response1](./models/goals-get-all-aggregate-info200-response1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_2/performance/employees/{employeeId}/goals/aggregate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getComments`<a id="bamboohrgoalsgetcomments"></a>

Get comments for a goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsResponse = await bamboohr.goals.getComments({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getEmployeeGoals`<a id="bamboohrgoalsgetemployeegoals"></a>

Get goals for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeGoalsResponse = await bamboohr.goals.getEmployeeGoals({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID to whom the goals are assigned.

##### filter: `string`<a id="filter-string"></a>

A filter that can be applied to only show the goals that are in a certain state.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetEmployeeGoalsResponse](./models/goals-get-employee-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.getGoalAggregateInfo`<a id="bamboohrgoalsgetgoalaggregateinfo"></a>

Provides goal information, goal comments, and employees shared with goals or who have commented on the given goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGoalAggregateInfoResponse = await bamboohr.goals.getGoalAggregateInfo({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the Goal ID used to generate the aggregate information.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetGoalAggregateInfoResponse](./models/goals-get-goal-aggregate-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/aggregate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.reopenGoal`<a id="bamboohrgoalsreopengoal"></a>

Reopen a goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const reopenGoalResponse = await bamboohr.goals.reopenGoal({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/reopen` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.shareOptionsGet`<a id="bamboohrgoalsshareoptionsget"></a>

Provides a list of employees with whom the specified employee's goals may be shared.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const shareOptionsGetResponse = await bamboohr.goals.shareOptionsGet({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID to get sharing options for.

##### search: `string`<a id="search-string"></a>

The search term used to filter employees returned. Will search name, employee ID and email.

##### limit: `string`<a id="limit-string"></a>

Limit will restrict results to specified number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/shareOptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.statusCount`<a id="bamboohrgoalsstatuscount"></a>

Get the number of goals per status for an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const statusCountResponse = await bamboohr.goals.statusCount({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID to whom the goals are assigned.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsStatusCountResponse](./models/goals-status-count-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/filters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.updateComment`<a id="bamboohrgoalsupdatecomment"></a>

Update a goal comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCommentResponse = await bamboohr.goals.updateComment({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
  commentId: "commentId_example",
  requestBody: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### commentId: `string`<a id="commentid-string"></a>

commentId is the comment ID for the specified goal.

##### requestBody: `string`<a id="requestbody-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.updateEmployeeGoal`<a id="bamboohrgoalsupdateemployeegoal"></a>

Update a goal. This version will not update a goal to contain milestones, that functionality is added in version 1.1

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeGoalResponse = await bamboohr.goals.updateEmployeeGoal({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
  title: "title_example",
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The goal title.

##### id: `number`<a id="id-number"></a>

A unique identifier for the record. Use this ID to reference this goal.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### description: `string`<a id="description-string"></a>

The goal description.

##### percentComplete: `number`<a id="percentcomplete-number"></a>

The goal completion percentage (0 - 100).

##### alignsWithOptionId: `string`<a id="alignswithoptionid-string"></a>

The option ID that aligns with this goal.

##### sharedWithEmployeeIds: `number`[]<a id="sharedwithemployeeids-number"></a>

Employee IDs of employees with whom the goal is shared. All goal owners are considered \\\"shared with\\\".

##### dueDate: `string`<a id="duedate-string"></a>

The goal due date in YYYY-mm-dd format.

##### completionDate: `number`<a id="completiondate-number"></a>

The date the goal was completed.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.updateEmployeeGoalV11`<a id="bamboohrgoalsupdateemployeegoalv11"></a>

Update a goal. Version 1.1 allows the updating of the milestones contained within the goal, unlike Version 1.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeGoalV11Response =
  await bamboohr.goals.updateEmployeeGoalV11({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    goalId: "goalId_example",
    title: "title_example",
    sharedWithEmployeeIds: [1],
    dueDate: "dueDate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

[Required] The goal title.

##### sharedWithEmployeeIds: `number`[]<a id="sharedwithemployeeids-number"></a>

[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered \\\"shared with\\\". This must include the employee for whom the goal is created.

##### dueDate: `string`<a id="duedate-string"></a>

[Required] The goal due date in YYYY-mm-dd format.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### description: `string`<a id="description-string"></a>

[Optional] The goal description.

##### alignsWithOptionId: `string`<a id="alignswithoptionid-string"></a>

[Optional] The option ID that aligns with this goal.

##### milestonesEnabled: `boolean`<a id="milestonesenabled-boolean"></a>

[Optional] A flag indicating whether or not milestones are enabled for this goal. Setting this flag to false will delete all existing milestones for this goal.

##### deletedMilestoneIds: `number`[]<a id="deletedmilestoneids-number"></a>

[Optional] Ids of all the milestones to be deleted with the update.

##### milestones: [`Milestone`](./models/milestone.ts)[]<a id="milestones-milestonemodelsmilestonets"></a>

[Optional] All milestones to be added to the goal with this update.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/{goalId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.updateGoalSharing`<a id="bamboohrgoalsupdategoalsharing"></a>

Updates which employees this goal is shared with.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGoalSharingResponse = await bamboohr.goals.updateGoalSharing({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  goalId: "goalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `string`<a id="goalid-string"></a>

goalId is the goal ID for the specified employee.

##### sharedWithEmployeeIds: `number`[]<a id="sharedwithemployeeids-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GoalsUpdateGoalSharingResponse](./models/goals-update-goal-sharing-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/sharedWith` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.goals.updateProgress`<a id="bamboohrgoalsupdateprogress"></a>

Update Goal Progress

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProgressResponse = await bamboohr.goals.updateProgress({
  companyDomain: "companyDomain_example",
  employeeId: 1,
  goalId: 1,
  requestBody: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

employeeId is the employee ID with whom the goal is associated.

##### goalId: `number`<a id="goalid-number"></a>

goalId is the goal ID for the specified employee.

##### requestBody: `number`<a id="requestbody-number"></a>

Employee IDs of employees with whom the goal is shared. All goal owners are considered \"shared with\".

#### 🔄 Return<a id="🔄-return"></a>

[GoalsUpdateProgressResponse](./models/goals-update-progress-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/progress` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.hours.bulkRecordEdit`<a id="bamboohrhoursbulkrecordedit"></a>

Bulk add/edit hour records

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bulkRecordEditResponse = await bamboohr.hours.bulkRecordEdit({
  companyDomain: "companyDomain_example",
  requestBody: [
    {
      timeTrackingId: "timeTrackingId_example",
      employeeId: 1,
      dateHoursWorked: "dateHoursWorked_example",
      rateType: "rateType_example",
      hoursWorked: 3.14,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### requestBody: [`TimeTrackingRecord`](./models/time-tracking-record.ts)[]<a id="requestbody-timetrackingrecordmodelstime-tracking-recordts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/timetracking/record` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.hours.deleteHourRecord`<a id="bamboohrhoursdeletehourrecord"></a>

Delete an hour record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteHourRecordResponse = await bamboohr.hours.deleteHourRecord({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/timetracking/delete/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.hours.editHourRecord`<a id="bamboohrhoursedithourrecord"></a>

Edit an hour record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editHourRecordResponse = await bamboohr.hours.editHourRecord({
  companyDomain: "companyDomain_example",
  timeTrackingId: "timeTrackingId_example",
  hoursWorked: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeTrackingId: `string`<a id="timetrackingid-string"></a>

The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).

##### hoursWorked: `number`<a id="hoursworked-number"></a>

The updated number of hours worked. e.g. if Employee A worked 8.0 hours originally and decided they only worked 6.0, please send 6.0 here not -2.0.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/timetracking/adjust` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.hours.getHourRecord`<a id="bamboohrhoursgethourrecord"></a>

Get an hour record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHourRecordResponse = await bamboohr.hours.getHourRecord({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the time tracking ID used to originally create the record.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/timetracking/record/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.hours.recordAddition`<a id="bamboohrhoursrecordaddition"></a>

Add an hour record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const recordAdditionResponse = await bamboohr.hours.recordAddition({
  companyDomain: "companyDomain_example",
  timeTrackingId: "timeTrackingId_example",
  employeeId: 1,
  dateHoursWorked: "dateHoursWorked_example",
  rateType: "rateType_example",
  hoursWorked: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeTrackingId: `string`<a id="timetrackingid-string"></a>

A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).

##### employeeId: `number`<a id="employeeid-number"></a>

The ID of the employee.

##### dateHoursWorked: `string`<a id="datehoursworked-string"></a>

The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.

##### rateType: `string`<a id="ratetype-string"></a>

The type of hours - regular or overtime. Please use either \\\"REG\\\" or \\\"OT\\\" here.

##### hoursWorked: `number`<a id="hoursworked-number"></a>

The number of hours worked.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### divisionId: `number`<a id="divisionid-number"></a>

[Optional] The ID of the division for the employee.

##### departmentId: `number`<a id="departmentid-number"></a>

[Optional] The ID of the department for the employee.

##### jobTitleId: `number`<a id="jobtitleid-number"></a>

[Optional] The ID of the job title for the employee.

##### payCode: `string`<a id="paycode-string"></a>

[Optional] Only necessary if the payroll provider requires a pay code

##### payRate: `number`<a id="payrate-number"></a>

[Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.

##### jobCode: `number`<a id="jobcode-number"></a>

[Optional] A job code.

##### jobData: `string`<a id="jobdata-string"></a>

[Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/timetracking/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.lastChangeInformation.getChangedEmployeeIds`<a id="bamboohrlastchangeinformationgetchangedemployeeids"></a>

This API allows for efficient syncing of employee data. When you use this API you will provide a timestamp and the results will be limited to just the employees that have changed since the time you provided. This API operates on an employee-last-changed-timestamp, which means that a change in ANY individual field in the employee record, as well as any change to the employment status, job info, or compensation tables, will cause that employee to be returned via this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChangedEmployeeIdsResponse =
  await bamboohr.lastChangeInformation.getChangedEmployeeIds({
    companyDomain: "companyDomain_example",
    since: "since_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### since: `string`<a id="since-string"></a>

URL encoded iso8601 timestamp

##### type: `string`<a id="type-string"></a>

Use one of these in the {type} variable in the URL: \"inserted\", \"updated\", \"deleted\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/changed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.login.userCredentials`<a id="bamboohrloginusercredentials"></a>

User Login

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userCredentialsResponse = await bamboohr.login.userCredentials({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### applicationKey: `string`<a id="applicationkey-string"></a>



##### user: `string`<a id="user-string"></a>



##### password: `string`<a id="password-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.addEmployeeDirectDepositInfo`<a id="bamboohrpayrolladdemployeedirectdepositinfo"></a>

Add an employee's direct deposit information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeDirectDepositInfoResponse =
  await bamboohr.payroll.addEmployeeDirectDepositInfo({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee id.

##### accounts: [`EmployeeDepositAccountsInner`](./models/employee-deposit-accounts-inner.ts)[]<a id="accounts-employeedepositaccountsinnermodelsemployee-deposit-accounts-innerts"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_direct_deposit_accounts/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.addEmployeePaystub`<a id="bamboohrpayrolladdemployeepaystub"></a>

Add an employee's paystub

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeePaystubResponse = await bamboohr.payroll.addEmployeePaystub({
  companyDomain: "companyDomain_example",
  federalType: "2020_w4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### externalRecordId: `string`<a id="externalrecordid-string"></a>



##### payPeriodFrom: `string`<a id="payperiodfrom-string"></a>



##### payPeriodTo: `string`<a id="payperiodto-string"></a>



##### payDate: `string`<a id="paydate-string"></a>



##### payorName: `string`<a id="payorname-string"></a>



##### payorAdd1: `string`<a id="payoradd1-string"></a>



##### payorAdd2: `string`<a id="payoradd2-string"></a>



##### payorCity: `string`<a id="payorcity-string"></a>



##### payorState: `string`<a id="payorstate-string"></a>



##### payorZip: `string`<a id="payorzip-string"></a>



##### payeeName: `string`<a id="payeename-string"></a>



##### currencyCode: `string`<a id="currencycode-string"></a>



##### net: `string`<a id="net-string"></a>



##### gross: `string`<a id="gross-string"></a>



##### totalTaxes: `string`<a id="totaltaxes-string"></a>



##### totalDeductions: `string`<a id="totaldeductions-string"></a>



##### ytdNet: `string`<a id="ytdnet-string"></a>



##### ytdGross: `string`<a id="ytdgross-string"></a>



##### ytdTaxes: `string`<a id="ytdtaxes-string"></a>



##### ytdDeductions: `string`<a id="ytddeductions-string"></a>



##### fedWitholding: `string`<a id="fedwitholding-string"></a>



##### federalType: `string`<a id="federaltype-string"></a>

must be 2020_w4, pre_2020_w4, or null

##### twoJobs: `string`<a id="twojobs-string"></a>

boolean value

##### dependentsAmount: `string`<a id="dependentsamount-string"></a>

float value

##### otherIncome: `string`<a id="otherincome-string"></a>

float value

##### deductionsAmount: `string`<a id="deductionsamount-string"></a>

float value

##### stateWithholding: `string`<a id="statewithholding-string"></a>



##### localWithholding: `string`<a id="localwithholding-string"></a>



##### additionalFed: `string`<a id="additionalfed-string"></a>



##### additionalState: `string`<a id="additionalstate-string"></a>



##### additionalLocal: `string`<a id="additionallocal-string"></a>



##### taxState: `string`<a id="taxstate-string"></a>



##### taxLocal: `string`<a id="taxlocal-string"></a>



##### wages: [`EmployeePaystubWagesInner`](./models/employee-paystub-wages-inner.ts)[]<a id="wages-employeepaystubwagesinnermodelsemployee-paystub-wages-innerts"></a>



##### taxes: [`EmployeePaystubTaxesInner`](./models/employee-paystub-taxes-inner.ts)[]<a id="taxes-employeepaystubtaxesinnermodelsemployee-paystub-taxes-innerts"></a>



##### deductions: [`EmployeePaystubDeductionsInner`](./models/employee-paystub-deductions-inner.ts)[]<a id="deductions-employeepaystubdeductionsinnermodelsemployee-paystub-deductions-innerts"></a>



##### deposits: [`EmployeePaystubDepositsInner`](./models/employee-paystub-deposits-inner.ts)[]<a id="deposits-employeepaystubdepositsinnermodelsemployee-paystub-deposits-innerts"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_pay_stub` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.addEmployeeUnpaidPaystubs`<a id="bamboohrpayrolladdemployeeunpaidpaystubs"></a>

Add an employee's unpaid paystubs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeUnpaidPaystubsResponse =
  await bamboohr.payroll.addEmployeeUnpaidPaystubs({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### unpaidPeriods: [`EmployeeUnpaidPaystubUnpaidPeriodsInner`](./models/employee-unpaid-paystub-unpaid-periods-inner.ts)[]<a id="unpaidperiods-employeeunpaidpaystubunpaidperiodsinnermodelsemployee-unpaid-paystub-unpaid-periods-innerts"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_unpaid_pay_stubs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.addEmployeeWithholdings`<a id="bamboohrpayrolladdemployeewithholdings"></a>

Add an employee's default withholdings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeWithholdingsResponse =
  await bamboohr.payroll.addEmployeeWithholdings({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee id.

##### fedWithholding: `string`<a id="fedwithholding-string"></a>



##### stateWithholding: `string`<a id="statewithholding-string"></a>



##### localWithholding: `string`<a id="localwithholding-string"></a>



##### additionalFed: `string`<a id="additionalfed-string"></a>



##### additionalState: `string`<a id="additionalstate-string"></a>



##### additionalLocal: `string`<a id="additionallocal-string"></a>



##### taxState: `string`<a id="taxstate-string"></a>



##### taxLocal: `string`<a id="taxlocal-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_withholding/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.clearEmployeeDirectDeposit`<a id="bamboohrpayrollclearemployeedirectdeposit"></a>

Clear an employee's direct deposit information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clearEmployeeDirectDepositResponse =
  await bamboohr.payroll.clearEmployeeDirectDeposit({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_direct_deposit_accounts/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.clearEmployeeUnpaidPaystubs`<a id="bamboohrpayrollclearemployeeunpaidpaystubs"></a>

Clear an employee's unpaid paystubs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clearEmployeeUnpaidPaystubsResponse =
  await bamboohr.payroll.clearEmployeeUnpaidPaystubs({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee id.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.clearEmployeeWithholdings`<a id="bamboohrpayrollclearemployeewithholdings"></a>

Clear an employee's default withholdings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clearEmployeeWithholdingsResponse =
  await bamboohr.payroll.clearEmployeeWithholdings({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee id.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_withholding/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.deleteEmployeePaystub`<a id="bamboohrpayrolldeleteemployeepaystub"></a>

Delete an employee's paystub

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmployeePaystubResponse =
  await bamboohr.payroll.deleteEmployeePaystub({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the paystub (record) ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_pay_stub/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.employeeDirectDepositInfo`<a id="bamboohrpayrollemployeedirectdepositinfo"></a>

Get an employee's direct deposit information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const employeeDirectDepositInfoResponse =
  await bamboohr.payroll.employeeDirectDepositInfo({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_direct_deposit_accounts/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.getDefaultWithholdings`<a id="bamboohrpayrollgetdefaultwithholdings"></a>

Get an employee's default withholdings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDefaultWithholdingsResponse =
  await bamboohr.payroll.getDefaultWithholdings({
    companyDomain: "companyDomain_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_withholding/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.getPaystub`<a id="bamboohrpayrollgetpaystub"></a>

Get an employee's paystub

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPaystubResponse = await bamboohr.payroll.getPaystub({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the paystub (record) ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_pay_stub/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.payroll.getUnpaidPaystubs`<a id="bamboohrpayrollgetunpaidpaystubs"></a>

Get an employee's unpaid paystubs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnpaidPaystubsResponse = await bamboohr.payroll.getUnpaidPaystubs({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.photos.getEmployeePhoto`<a id="bamboohrphotosgetemployeephoto"></a>

Get an employee photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeePhotoResponse = await bamboohr.photos.getEmployeePhoto({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  size: "original",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

The ID for the employee you are getting the photo for.

##### size: `'original' | 'large' | 'medium' | 'xs' | 'tiny'`<a id="size-original--large--medium--xs--tiny"></a>

Photo size

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/photo/{size}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.photos.storeNewEmployeePhoto`<a id="bamboohrphotosstorenewemployeephoto"></a>

Store a new employee photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const storeNewEmployeePhotoResponse =
  await bamboohr.photos.storeNewEmployeePhoto({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

The ID for the employee you are setting the photo for.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/photo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.reports.companyReport`<a id="bamboohrreportscompanyreport"></a>

Use this resource to request one of your existing custom company reports from the My Reports or Manage Reports sections in the Reports tab. You can get the report number by hovering over the report name and noting the ID from the URL. At present, only reports from the My Reports or Manage Reports sections are supported. In the future we may implement reports from the Standard Reports section if there is enough demand for it. The report numbers used in this request are different in each company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const companyReportResponse = await bamboohr.reports.companyReport({
  companyDomain: "companyDomain_example",
  id: "id_example",
  format: "format_example",
  onlyCurrent: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is a report ID.

##### format: `string`<a id="format-string"></a>

The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON

##### fd: `string`<a id="fd-string"></a>

yes=apply standard duplicate field filtering, no=return the raw results with no duplicate filtering. Default value is \"yes\"

##### onlyCurrent: `boolean`<a id="onlycurrent-boolean"></a>

Setting to false will return future dated values from history table fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/reports/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.reports.requestCustomReport`<a id="bamboohrreportsrequestcustomreport"></a>

Use this resource to request BambooHR generate a report. You must specify a type of either "PDF", "XLS", "CSV", "JSON", or "XML". You must specify a list of fields to show on the report. The list of fields is available here. The custom report will return employees regardless of their status, "Active" or "Inactive". This differs from the UI, which by default applies a quick filter to display only "Active" employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestCustomReportResponse = await bamboohr.reports.requestCustomReport({
  companyDomain: "companyDomain_example",
  format: "format_example",
  onlyCurrent: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### format: `string`<a id="format-string"></a>

The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON

##### title: `string`<a id="title-string"></a>



##### filters: [`RequestCustomReportFilters`](./models/request-custom-report-filters.ts)<a id="filters-requestcustomreportfiltersmodelsrequest-custom-report-filtersts"></a>

##### fields: `string`[]<a id="fields-string"></a>



##### onlyCurrent: `boolean`<a id="onlycurrent-boolean"></a>

Limits the report to only current employees. Setting to false will include future-dated employees in the report.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/reports/custom` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.addRow`<a id="bamboohrtabulardataaddrow"></a>

Adds a table row. Fundamentally the same as version 1 so choose a version and stay with it unless other changes occur. Changes from version 1 are now minor with a few variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addRowResponse = await bamboohr.tabularData.addRow({
  companyDomain: "companyDomain_example",
  id: "id_example",
  table: "table_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

##### date: `string`<a id="date-string"></a>



##### location: `string`<a id="location-string"></a>



##### division: `string`<a id="division-string"></a>



##### department: `string`<a id="department-string"></a>



##### jobTitle: `string`<a id="jobtitle-string"></a>



##### reportsTo: `string`<a id="reportsto-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/employees/{id}/tables/{table}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.addTableRow`<a id="bamboohrtabulardataaddtablerow"></a>

Adds a table row. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the row cannot be added if they are missing any required fields for that table. If the API user is adding a row on the compensation table, the row cannot be added if they are missing any of the required employee fields (including fields not on that table).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTableRowResponse = await bamboohr.tabularData.addTableRow({
  companyDomain: "companyDomain_example",
  id: "id_example",
  table: "table_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

##### date: `string`<a id="date-string"></a>



##### location: `string`<a id="location-string"></a>



##### division: `string`<a id="division-string"></a>



##### department: `string`<a id="department-string"></a>



##### jobTitle: `string`<a id="jobtitle-string"></a>



##### reportsTo: `string`<a id="reportsto-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/tables/{table}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.deleteRow`<a id="bamboohrtabulardatadeleterow"></a>

Deletes a table row

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRowResponse = await bamboohr.tabularData.deleteRow({
  companyDomain: "companyDomain_example",
  id: "id_example",
  table: "table_example",
  rowId: "rowId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

##### rowId: `string`<a id="rowid-string"></a>

Row ID

#### 🔄 Return<a id="🔄-return"></a>

[TabularDataDeleteRowResponse](./models/tabular-data-delete-row-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.getChangedTableRows`<a id="bamboohrtabulardatagetchangedtablerows"></a>

This API is merely an optimization to avoid downloading all table data for all employees. When you use this API you will provide a timestamp and the results will be limited to just the employees that have changed since the time you provided. This API operates on an employee-last-changed-timestamp, which means that a change in ANY field in the employee record will cause ALL of that employees table rows to show up via this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChangedTableRowsResponse =
  await bamboohr.tabularData.getChangedTableRows({
    companyDomain: "companyDomain_example",
    table: "table_example",
    since: "since_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### table: `string`<a id="table-string"></a>

Table name

##### since: `string`<a id="since-string"></a>

URL encoded iso8601 timestamp

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/changed/tables/{table}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.getEmployeeTableRows`<a id="bamboohrtabulardatagetemployeetablerows"></a>

Returns a data structure representing all the table rows for a given employee and table combination. The result is not sorted in any particular order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeTableRowsResponse =
  await bamboohr.tabularData.getEmployeeTableRows({
    companyDomain: "companyDomain_example",
    id: "id_example",
    table: "table_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/tables/{table}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.updateRow`<a id="bamboohrtabulardataupdaterow"></a>

Updates a table row. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the row cannot be added if they are missing any required fields for that table. If the API user is updating a row on the compensation table, the row cannot be updated if they are missing any of the required employee fields (including fields not on that table).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRowResponse = await bamboohr.tabularData.updateRow({
  companyDomain: "companyDomain_example",
  id: "id_example",
  table: "table_example",
  rowId: "rowId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

##### rowId: `string`<a id="rowid-string"></a>

Row ID

##### date: `string`<a id="date-string"></a>



##### location: `string`<a id="location-string"></a>



##### division: `string`<a id="division-string"></a>



##### department: `string`<a id="department-string"></a>



##### jobTitle: `string`<a id="jobtitle-string"></a>



##### reportsTo: `string`<a id="reportsto-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.tabularData.updateRow_0`<a id="bamboohrtabulardataupdaterow_0"></a>

Updates a table row. Fundamentally the same as version 1 so choose a version and stay with it unless other changes occur. Changes from version 1 are now minor with a few variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRow_0Response = await bamboohr.tabularData.updateRow_0({
  companyDomain: "companyDomain_example",
  id: "id_example",
  table: "table_example",
  rowId: "rowId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is the employee ID.

##### table: `string`<a id="table-string"></a>

Table name

##### rowId: `string`<a id="rowid-string"></a>

Row ID

##### date: `string`<a id="date-string"></a>



##### location: `string`<a id="location-string"></a>



##### division: `string`<a id="division-string"></a>



##### department: `string`<a id="department-string"></a>



##### jobTitle: `string`<a id="jobtitle-string"></a>



##### reportsTo: `string`<a id="reportsto-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/employees/{id}/tables/{table}/{rowId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.addTimeOffHistoryItem`<a id="bamboohrtimeoffaddtimeoffhistoryitem"></a>

To use this API make an HTTP PUT where the body of the request is the JSON documented below. A new time off history item will be inserted into the database. On success, a 201 Created code is returned and the "Location" header of the response will contain a URL that identifies the new history item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTimeOffHistoryItemResponse =
  await bamboohr.timeOff.addTimeOffHistoryItem({
    companyDomain: "companyDomain_example",
    employeeId: 1,
    date: "date_example",
    timeOffRequestId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

The date the request should be added in history. This will usually be the first date of the request. Should be in ISO8601 date format (YYYY-MM-DD).

##### timeOffRequestId: `number`<a id="timeoffrequestid-number"></a>

The ID of the time off request.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

The ID of the employee.

##### note: `string`<a id="note-string"></a>

This is an optional note to show in history.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/history` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.assignEmployeePolicies`<a id="bamboohrtimeoffassignemployeepolicies"></a>

To use this API make an HTTP PUT where the body of the request is the JSON documented below. A time off policy will be assigned to the employee with accruals starting on the date specified. A null start date will remove the assignment. On success, a 200 Success code is returned and the content of the response will be the same as the List Time off Policies API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignEmployeePoliciesResponse =
  await bamboohr.timeOff.assignEmployeePolicies({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    requestBody: [{}],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### requestBody: [`TimeOffPoliciesInner`](./models/time-off-policies-inner.ts)[]<a id="requestbody-timeoffpoliciesinnermodelstime-off-policies-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/policies` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.assignEmployeePoliciesV11`<a id="bamboohrtimeoffassignemployeepoliciesv11"></a>

To use this API make an HTTP PUT where the body of the request is the JSON documented below. A time off policy will be assigned to the employee with accruals starting on the date specified. On success, a 200 Success code is returned and the content of the response will be the same as the List Time off Policies API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignEmployeePoliciesV11Response =
  await bamboohr.timeOff.assignEmployeePoliciesV11({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    requestBody: [{}],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### requestBody: [`TimeOffPoliciesInner`](./models/time-off-policies-inner.ts)[]<a id="requestbody-timeoffpoliciesinnermodelstime-off-policies-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.balanceAdjustmentPut`<a id="bamboohrtimeoffbalanceadjustmentput"></a>

To use this API make an HTTP PUT where the body of the request is the JSON documented below. A time off balance adjustment will be inserted into the database. On success, a 201 Created code is returned and the "Location" header of the response will contain a URL that identifies the new history item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const balanceAdjustmentPutResponse =
  await bamboohr.timeOff.balanceAdjustmentPut({
    companyDomain: "companyDomain_example",
    employeeId: 1,
    date: "date_example",
    timeOffTypeId: 1,
    amount: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

The date the adjustment should be added in history. Should be in ISO8601 date format (YYYY-MM-DD).

##### timeOffTypeId: `number`<a id="timeofftypeid-number"></a>

The ID of the time off type to add a balance adjustment for.

##### amount: `number`<a id="amount-number"></a>

The number of hours/days to adjust the balance by.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

The ID of the employee.

##### note: `string`<a id="note-string"></a>

This is an optional note to show in history.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/balance_adjustment` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.changeRequestStatus`<a id="bamboohrtimeoffchangerequeststatus"></a>

This endpoint allows you to change the status of a request in the system. You can use this to approve, deny, or cancel a time off request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const changeRequestStatusResponse = await bamboohr.timeOff.changeRequestStatus({
  companyDomain: "companyDomain_example",
  requestId: "requestId_example",
  status: "Approved",
  note: "Note!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### requestId: `string`<a id="requestid-string"></a>



##### status: `string`<a id="status-string"></a>

One of approved, cancelled, denied

##### note: `string`<a id="note-string"></a>

A note to attach to the change in status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_off/requests/{requestId}/status` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.estimateFutureTimeOffBalances`<a id="bamboohrtimeoffestimatefuturetimeoffbalances"></a>

This endpoint will sum future time off accruals, scheduled time off, and carry-over events to produce estimates for the anticipated time off balance on a given date in the future.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const estimateFutureTimeOffBalancesResponse =
  await bamboohr.timeOff.estimateFutureTimeOffBalances({
    companyDomain: "companyDomain_example",
    end: "1970-01-01T00:00:00.00Z",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### end: `string`<a id="end-string"></a>



##### employeeId: `string`<a id="employeeid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/calculator` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.getPolicies`<a id="bamboohrtimeoffgetpolicies"></a>

This endpoint gets a list of time off policies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPoliciesResponse = await bamboohr.timeOff.getPolicies({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/time_off/policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.getTimeOffRequests`<a id="bamboohrtimeoffgettimeoffrequests"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffRequestsResponse = await bamboohr.timeOff.getTimeOffRequests({
  companyDomain: "companyDomain_example",
  start: "start_example",
  end: "end_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### start: `string`<a id="start-string"></a>

YYYY-MM-DD. Only show time off that occurs on/after the specified start date.

##### end: `string`<a id="end-string"></a>

YYYY-MM-DD. Only show time off that occurs on/before the specified end date.

##### id: `number`<a id="id-number"></a>

A particular request ID to limit the response to.

##### action: `string`<a id="action-string"></a>

Limit to requests that the user has a particular level of access to. Legal values are: \"view\" or \"approve\". Defaults to view.

##### employeeId: `string`<a id="employeeid-string"></a>

A particular employee ID to limit the response to.

##### type: `string`<a id="type-string"></a>

A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included.

##### status: `string`<a id="status-string"></a>

A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are \"approved\", \"denied\", \"superceded\", \"requested\", \"canceled\".

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_off/requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.getTimeOffTypes`<a id="bamboohrtimeoffgettimeofftypes"></a>

This endpoint gets a list of time off types.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffTypesResponse = await bamboohr.timeOff.getTimeOffTypes({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### mode: `string`<a id="mode-string"></a>

set to \'request\' to get a list of all time off types with which this user can create a time off request. The default is to return the list of time off types the user has permissions on. This distinction is important, as employees can request time off for types that they don\'t have permission to view balances and requests for.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/meta/time_off/types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.getWhosOutList`<a id="bamboohrtimeoffgetwhosoutlist"></a>

This endpoint will return a list, sorted by date, of employees who will be out, and company holidays, for a period of time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWhosOutListResponse = await bamboohr.timeOff.getWhosOutList({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### start: `string`<a id="start-string"></a>

A date in the form YYYY-MM-DD - defaults to the current date.

##### end: `string`<a id="end-string"></a>

A date in the form YYYY-MM-DD - defaults to 14 days from the start date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_off/whos_out` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.listEmployeePolicies`<a id="bamboohrtimeofflistemployeepolicies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeePoliciesResponse =
  await bamboohr.timeOff.listEmployeePolicies({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.listEmployeeTimeOffPolicies`<a id="bamboohrtimeofflistemployeetimeoffpolicies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeTimeOffPoliciesResponse =
  await bamboohr.timeOff.listEmployeeTimeOffPolicies({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeOff.requestCreation`<a id="bamboohrtimeoffrequestcreation"></a>

A time off request is an entity that describes the decision making process for approving time off. Once a request has been created, a history entry can be created documenting the actual use of time off.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestCreationResponse = await bamboohr.timeOff.requestCreation({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>



##### status: `string`<a id="status-string"></a>



##### start: `string`<a id="start-string"></a>



##### end: `string`<a id="end-string"></a>



##### timeOffTypeId: `number`<a id="timeofftypeid-number"></a>



##### amount: `number`<a id="amount-number"></a>



##### notes: [`TimeOffRequestNotesInner`](./models/time-off-request-notes-inner.ts)[]<a id="notes-timeoffrequestnotesinnermodelstime-off-request-notes-innerts"></a>



##### dates: [`TimeOffRequestDatesInner`](./models/time-off-request-dates-inner.ts)[]<a id="dates-timeoffrequestdatesinnermodelstime-off-request-dates-innerts"></a>



##### previousRequest: `number`<a id="previousrequest-number"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/employees/{employeeId}/time_off/request` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.approveEmployeeTimesheets`<a id="bamboohrtimetrackingapproveemployeetimesheets"></a>

Approve employee timesheets

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveEmployeeTimesheetsResponse =
  await bamboohr.timeTracking.approveEmployeeTimesheets({
    companyDomain: "companyDomain_example",
    lastChanged: 1624485787,
    timesheets: [
      {
        timesheetId: 100,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lastChanged: `number`<a id="lastchanged-number"></a>

UNIX timestamp for last change to timesheet

##### timesheets: [`TimeTrackingApproveEmployeeTimesheetsRequestTimesheetsInner`](./models/time-tracking-approve-employee-timesheets-request-timesheets-inner.ts)[]<a id="timesheets-timetrackingapproveemployeetimesheetsrequesttimesheetsinnermodelstime-tracking-approve-employee-timesheets-request-timesheets-innerts"></a>

Array of timesheet objects that contain the timesheet id

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/timesheets/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.approveEmployeeTimesheets_0`<a id="bamboohrtimetrackingapproveemployeetimesheets_0"></a>

Approve timesheets for employees that are currently clocked in

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveEmployeeTimesheets_0Response =
  await bamboohr.timeTracking.approveEmployeeTimesheets_0({
    companyDomain: "companyDomain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### clockOuts: [`TimeTrackingApproveEmployeeTimesheetsRequest1ClockOutsInner`](./models/time-tracking-approve-employee-timesheets-request1-clock-outs-inner.ts)[]<a id="clockouts-timetrackingapproveemployeetimesheetsrequest1clockoutsinnermodelstime-tracking-approve-employee-timesheets-request1-clock-outs-innerts"></a>

Array of clock out information

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/timesheets/clock_out_and_approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.clockInEmployee`<a id="bamboohrtimetrackingclockinemployee"></a>

Clock in (employee id optional)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockInEmployeeResponse = await bamboohr.timeTracking.clockInEmployee({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  start: "780",
  timezone: "America/Denver",
  note: "Back from lunch.",
  projectId: 3,
  taskId: 2,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

{employeeId} is id of the employee clocking out

##### start: `string`<a id="start-string"></a>

The start time for the clock in. In 24 hour format HH:MM

##### timezone: `string`<a id="timezone-string"></a>

The timezone associated with the clock in.

##### note: `string`<a id="note-string"></a>

The note associated with the clock in

##### projectId: `number`<a id="projectid-number"></a>

The id of the project associated with the clock in

##### taskId: `number`<a id="taskid-number"></a>

The id of the task associated with the clock in

##### clockInLocation: [`TimeTrackingClockInEmployeeRequestClockInLocation`](./models/time-tracking-clock-in-employee-request-clock-in-location.ts)<a id="clockinlocation-timetrackingclockinemployeerequestclockinlocationmodelstime-tracking-clock-in-employee-request-clock-in-locationts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_in/{employeeId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.clockOutEmployee`<a id="bamboohrtimetrackingclockoutemployee"></a>

Clock out (employee id optional)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockOutEmployeeResponse = await bamboohr.timeTracking.clockOutEmployee({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

{employeeId} is id of the employee clocking out

##### clockOutLocation: [`TimeTrackingClockOutEmployeeRequestClockOutLocation`](./models/time-tracking-clock-out-employee-request-clock-out-location.ts)<a id="clockoutlocation-timetrackingclockoutemployeerequestclockoutlocationmodelstime-tracking-clock-out-employee-request-clock-out-locationts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_out/{employeeId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.clockOutEmployeeAtSpecificTime`<a id="bamboohrtimetrackingclockoutemployeeatspecifictime"></a>

Clock out an employee at a specific time

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockOutEmployeeAtSpecificTimeResponse =
  await bamboohr.timeTracking.clockOutEmployeeAtSpecificTime({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    requestBody: {
      datetime: "2020-12-16T17:28:00-05:00",
      timezone: "America/Denver",
      employeeId: 40342,
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to whom the projects belong.

##### requestBody: [`TimeTrackingClockOutEmployeeAtSpecificTimeRequest`](./models/time-tracking-clock-out-employee-at-specific-time-request.ts)<a id="requestbody-timetrackingclockoutemployeeatspecifictimerequestmodelstime-tracking-clock-out-employee-at-specific-time-requestts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_out/datetime` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.deleteClockEntries`<a id="bamboohrtimetrackingdeleteclockentries"></a>

Delete clock entries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteClockEntriesResponse =
  await bamboohr.timeTracking.deleteClockEntries({
    companyDomain: "companyDomain_example",
    clockEntryIds: [10, 11, 12],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### clockEntryIds: `number`[]<a id="clockentryids-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_entries` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.editClockedInEntryData`<a id="bamboohrtimetrackingeditclockedinentrydata"></a>

Edit information on the currently clocked in entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editClockedInEntryDataResponse =
  await bamboohr.timeTracking.editClockedInEntryData({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    start: "780",
    timezone: "America/Denver",
    note: "Back from lunch.",
    projectId: 3,
    taskId: 2,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to whom the projects belong.

##### start: `string`<a id="start-string"></a>

The start time for the clock in. In 24 hour format HH:MM

##### timezone: `string`<a id="timezone-string"></a>

The timezone associated with the clock in.

##### note: `string`<a id="note-string"></a>

The note associated with the clock in

##### projectId: `number`<a id="projectid-number"></a>

The id of the project associated with the clock in

##### taskId: `number`<a id="taskid-number"></a>

The id of the task associated with the clock in

##### clockInLocation: [`TimeTrackingEditClockedInEntryDataRequestClockInLocation`](./models/time-tracking-edit-clocked-in-entry-data-request-clock-in-location.ts)<a id="clockinlocation-timetrackingeditclockedinentrydatarequestclockinlocationmodelstime-tracking-edit-clocked-in-entry-data-request-clock-in-locationts"></a>

##### clockOutLocation: [`TimeTrackingEditClockedInEntryDataRequestClockOutLocation`](./models/time-tracking-edit-clocked-in-entry-data-request-clock-out-location.ts)<a id="clockoutlocation-timetrackingeditclockedinentrydatarequestclockoutlocationmodelstime-tracking-edit-clocked-in-entry-data-request-clock-out-locationts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_in/data` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.employeeClockedIn`<a id="bamboohrtimetrackingemployeeclockedin"></a>

Is employee clocked in?

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const employeeClockedInResponse = await bamboohr.timeTracking.employeeClockedIn(
  {
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of employee to whom the clock entry belongs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/is_clocked_in` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.employeeTimesheetGet`<a id="bamboohrtimetrackingemployeetimesheetget"></a>

Get a timesheet for an employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const employeeTimesheetGetResponse =
  await bamboohr.timeTracking.employeeTimesheetGet({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    timesheetId: "timesheetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of employee to whom the timesheet belongs.

##### timesheetId: `string`<a id="timesheetid-string"></a>

timesheetId is the id to whom the timesheet belongs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/timesheet/{timesheetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.getClockEntry`<a id="bamboohrtimetrackinggetclockentry"></a>

Get a clock entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClockEntryResponse = await bamboohr.timeTracking.getClockEntry({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of employee to whom the clock entry belongs.

##### id: `string`<a id="id-string"></a>

the id to whom the clock entry belongs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_entries/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.getDailyEntry`<a id="bamboohrtimetrackinggetdailyentry"></a>

Get a daily entry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailyEntryResponse = await bamboohr.timeTracking.getDailyEntry({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of employee to whom the daily entry belongs.

##### id: `string`<a id="id-string"></a>

the id to whom the daily entry belongs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/daily_entries/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.getProjectTasks`<a id="bamboohrtimetrackinggetprojecttasks"></a>

Get tasks for a project

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectTasksResponse = await bamboohr.timeTracking.getProjectTasks({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to whom the projects belong.

##### projectId: `string`<a id="projectid-string"></a>

id of the project to which the tasks belong.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects/{projectId}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.getTimesheetsByIds`<a id="bamboohrtimetrackinggettimesheetsbyids"></a>

Get timesheets by ids

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimesheetsByIdsResponse =
  await bamboohr.timeTracking.getTimesheetsByIds({
    companyDomain: "companyDomain_example",
    timesheets: "10, 11, 12",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: `string`<a id="timesheets-string"></a>

Comma separated list of timesheet ids

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/timesheets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.listEmployeeProjects`<a id="bamboohrtimetrackinglistemployeeprojects"></a>

Get projects an employee can log time to

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeProjectsResponse =
  await bamboohr.timeTracking.listEmployeeProjects({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to whom the projects belong.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.storeClockEntries`<a id="bamboohrtimetrackingstoreclockentries"></a>

Store clock entries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const storeClockEntriesResponse = await bamboohr.timeTracking.storeClockEntries(
  {
    companyDomain: "companyDomain_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### entries: [`TimeTrackingStoreClockEntriesRequestEntriesInner`](./models/time-tracking-store-clock-entries-request-entries-inner.ts)[]<a id="entries-timetrackingstoreclockentriesrequestentriesinnermodelstime-tracking-store-clock-entries-request-entries-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_entries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTracking.storeDailyEntries`<a id="bamboohrtimetrackingstoredailyentries"></a>

Store daily entries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const storeDailyEntriesResponse = await bamboohr.timeTracking.storeDailyEntries(
  {
    companyDomain: "companyDomain_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### entries: [`TimeTrackingStoreDailyEntriesRequestEntriesInner`](./models/time-tracking-store-daily-entries-request-entries-inner.ts)[]<a id="entries-timetrackingstoredailyentriesrequestentriesinnermodelstime-tracking-store-daily-entries-request-entries-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/daily_entries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.addClockOut`<a id="bamboohrtimetrackingprivatebetaaddclockout"></a>

Clock out an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addClockOutResponse = await bamboohr.timeTrackingPrivateBeta.addClockOut({
  companyDomain: "companyDomain_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to clock out.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntry](./models/timesheet-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_out` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.addEditClockEntries`<a id="bamboohrtimetrackingprivatebetaaddeditclockentries"></a>

Add or edit timesheet clock entries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEditClockEntriesResponse =
  await bamboohr.timeTrackingPrivateBeta.addEditClockEntries({
    companyDomain: "companyDomain_example",
    entries: [
      {
        employeeId: 1,
        date: "2024-01-31",
        start: "09:00",
        end: "1020",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### entries: [`TimeTrackingPrivateBetaAddEditClockEntriesRequestEntriesInner`](./models/time-tracking-private-beta-add-edit-clock-entries-request-entries-inner.ts)[]<a id="entries-timetrackingprivatebetaaddeditclockentriesrequestentriesinnermodelstime-tracking-private-beta-add-edit-clock-entries-request-entries-innerts"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntry](./models/timesheet-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_entries/store` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.addEditHourEntries`<a id="bamboohrtimetrackingprivatebetaaddedithourentries"></a>

Add or edit timesheet hour entries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEditHourEntriesResponse =
  await bamboohr.timeTrackingPrivateBeta.addEditHourEntries({
    companyDomain: "companyDomain_example",
    hours: [
      {
        employeeId: 1,
        date: "2024-01-31",
        hours: 3.5,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hours: [`TimeTrackingPrivateBetaAddEditHourEntriesRequestHoursInner`](./models/time-tracking-private-beta-add-edit-hour-entries-request-hours-inner.ts)[]<a id="hours-timetrackingprivatebetaaddedithourentriesrequesthoursinnermodelstime-tracking-private-beta-add-edit-hour-entries-request-hours-innerts"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntry](./models/timesheet-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/hour_entries/store` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.addTimesheetClockIn`<a id="bamboohrtimetrackingprivatebetaaddtimesheetclockin"></a>

Clock in an employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTimesheetClockInResponse =
  await bamboohr.timeTrackingPrivateBeta.addTimesheetClockIn({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
    projectId: 10,
    taskId: 25,
    note: "Back from lunch.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to clock in.

##### projectId: `number`<a id="projectid-number"></a>

id of the time tracking project that should be associated with the timesheet entry. Required if taskId is specified.

##### taskId: `number`<a id="taskid-number"></a>

id of the time tracking task that should be associated with the timesheet entry.

##### note: `string`<a id="note-string"></a>

The note that should be associated with the timesheet entry

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntry](./models/timesheet-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_in` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.createProjectTask`<a id="bamboohrtimetrackingprivatebetacreateprojecttask"></a>

Create a time tracking project with optional tasks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProjectTaskResponse =
  await bamboohr.timeTrackingPrivateBeta.createProjectTask({
    companyDomain: "companyDomain_example",
    name: "Project A",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the project.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### billable: `boolean`<a id="billable-boolean"></a>

Indicates if the project is billable. Defaults to true if not provided.

##### allowAllEmployees: `boolean`<a id="allowallemployees-boolean"></a>

Indicates if all employees can log time for this project. Defaults to true if not provided.

##### employeeIds: `number`[]<a id="employeeids-number"></a>

A list of employee IDs that can log time for this project.

##### hasTasks: `boolean`<a id="hastasks-boolean"></a>

Indicates if the project has tasks. Defaults to false if not provided.

##### tasks: [`TimeTrackingPrivateBetaCreateProjectTaskRequestTasksInner`](./models/time-tracking-private-beta-create-project-task-request-tasks-inner.ts)[]<a id="tasks-timetrackingprivatebetacreateprojecttaskrequesttasksinnermodelstime-tracking-private-beta-create-project-task-request-tasks-innerts"></a>

List of tasks to create and associate with the project.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingProjectWithTasksAndEmployeeIds](./models/time-tracking-project-with-tasks-and-employee-ids.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.deleteHourEntries`<a id="bamboohrtimetrackingprivatebetadeletehourentries"></a>

Delete timesheet hour entries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteHourEntriesResponse =
  await bamboohr.timeTrackingPrivateBeta.deleteHourEntries({
    companyDomain: "companyDomain_example",
    hourEntryIds: [1],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hourEntryIds: `number`[]<a id="hourentryids-number"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/hour_entries/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.deleteTimeSheetEntries`<a id="bamboohrtimetrackingprivatebetadeletetimesheetentries"></a>

Delete timesheet clock entries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTimeSheetEntriesResponse =
  await bamboohr.timeTrackingPrivateBeta.deleteTimeSheetEntries({
    companyDomain: "companyDomain_example",
    clockEntryIds: [1],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clockEntryIds: `number`[]<a id="clockentryids-number"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/clock_entries/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.listEmployeeProjects`<a id="bamboohrtimetrackingprivatebetalistemployeeprojects"></a>

Get the projects an employee can track time for.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeProjectsResponse =
  await bamboohr.timeTrackingPrivateBeta.listEmployeeProjects({
    companyDomain: "companyDomain_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `string`<a id="employeeid-string"></a>

id of the employee to retrieve projects for.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/employees/{employeeId}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.timeTrackingPrivateBeta.listTimesheetEntries`<a id="bamboohrtimetrackingprivatebetalisttimesheetentries"></a>

Get all timesheet entries for a given period of time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTimesheetEntriesResponse =
  await bamboohr.timeTrackingPrivateBeta.listTimesheetEntries({
    companyDomain: "companyDomain_example",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### start: `string`<a id="start-string"></a>

YYYY-MM-DD. Only show timesheet entries on/after the specified start date. Must be within the last 365 days.

##### end: `string`<a id="end-string"></a>

YYYY-MM-DD. Only show timesheet entries on/before the specified end date. Must be within the last 365 days.

##### employeeIds: `string`<a id="employeeids-string"></a>

A comma separated list of employee IDs. When specified, only entries that match these employee IDs are returned.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntry](./models/timesheet-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/time_tracking/timesheet_entries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.addCategory`<a id="bamboohrtrainingaddcategory"></a>

Add a training category. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCategoryResponse = await bamboohr.training.addCategory({
  companyDomain: "companyDomain_example",
  name: "My New Training Category",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the new training category.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[TrainingCategory](./models/training-category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/category` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.addEmployeeTrainingRecord`<a id="bamboohrtrainingaddemployeetrainingrecord"></a>

Add a new employee training record. The owner of the API key used must have permission to add trainings for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeTrainingRecordResponse =
  await bamboohr.training.addEmployeeTrainingRecord({
    companyDomain: "companyDomain_example",
    employeeId: 0,
    completed: "Tue May 24 17:00:00 PDT 2016",
    instructor: "Bob Jones",
    hours: 16,
    credits: 4,
    notes: "sample note",
    type: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### completed: `string`<a id="completed-string"></a>

Completed is a required field and must be in yyyy-mm-dd format.

##### type: `number`<a id="type-number"></a>

This must be an existing training type id.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

The ID of the employee to add a training record to.

##### cost: [`TrainingAddEmployeeTrainingRecordRequestCost`](./models/training-add-employee-training-record-request-cost.ts)<a id="cost-trainingaddemployeetrainingrecordrequestcostmodelstraining-add-employee-training-record-request-costts"></a>

##### instructor: `string`<a id="instructor-string"></a>

##### hours: `number`<a id="hours-number"></a>

##### credits: `number`<a id="credits-number"></a>

##### notes: `string`<a id="notes-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TrainingRecord](./models/training-record.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/record/employee/{employeeId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.categoryList`<a id="bamboohrtrainingcategorylist"></a>

Get a list of training categories. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const categoryListResponse = await bamboohr.training.categoryList({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[TrainingCategoryListResponseInner](./models/training-category-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/category` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.deleteCategory`<a id="bamboohrtrainingdeletecategory"></a>

Delete an existing training category. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCategoryResponse = await bamboohr.training.deleteCategory({
  companyDomain: "companyDomain_example",
  trainingCategoryId: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### trainingCategoryId: `number`<a id="trainingcategoryid-number"></a>

The ID of the training category to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/category/{trainingCategoryId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.deleteEmployeeRecord`<a id="bamboohrtrainingdeleteemployeerecord"></a>

Delete an existing employee training record. The owner of the API key used must have permission to view and edit the employee and training type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmployeeRecordResponse =
  await bamboohr.training.deleteEmployeeRecord({
    companyDomain: "companyDomain_example",
    employeeTrainingRecordId: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeTrainingRecordId: `number`<a id="employeetrainingrecordid-number"></a>

The ID of the training record to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/record/{employeeTrainingRecordId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.getTypes`<a id="bamboohrtraininggettypes"></a>

Get a list of training types. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTypesResponse = await bamboohr.training.getTypes({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[TrainingGetTypesResponseInner](./models/training-get-types-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/type` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.listEmployeeTrainings`<a id="bamboohrtraininglistemployeetrainings"></a>

Get all employee training records. The owner of the API key used must have access to view the employee. The API will only return trainings for the employee that the owner of the API key has permission to see. Included with each employee training is the training information that has been selected for tracking in settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeeTrainingsResponse =
  await bamboohr.training.listEmployeeTrainings({
    companyDomain: "companyDomain_example",
    employeeId: 0,
    trainingTypeId: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeId: `number`<a id="employeeid-number"></a>

The ID of the employee to get a list of trainings for.

##### trainingTypeId: `number`<a id="trainingtypeid-number"></a>

The training type id is optional. Not supplying a training type id will return the collection of all training records for the employee.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingListEmployeeTrainingsResponseInner](./models/training-list-employee-trainings-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/record/employee/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.removeType`<a id="bamboohrtrainingremovetype"></a>

Delete an existing training type. The owner of the API key used must have access to training settings. Deleting a training type will only be successful if all employee trainings for this type have been removed prior to this request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTypeResponse = await bamboohr.training.removeType({
  companyDomain: "companyDomain_example",
  trainingTypeId: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### trainingTypeId: `number`<a id="trainingtypeid-number"></a>

The ID of the training type to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/type/{trainingTypeId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.typeAddition`<a id="bamboohrtrainingtypeaddition"></a>

Add a training type. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const typeAdditionResponse = await bamboohr.training.typeAddition({
  companyDomain: "companyDomain_example",
  name: "My New Training",
  frequency: 12,
  renewable: true,
  required: false,
  dueFromHireDate: 30,
  allowEmployeesToMarkComplete: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the new training type.

##### required: `boolean`<a id="required-boolean"></a>

Is this a required training?

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### description: `string`<a id="description-string"></a>

Description for the training.

##### frequency: `number`<a id="frequency-number"></a>

The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.

##### renewable: `boolean`<a id="renewable-boolean"></a>

Renewable is optional but if you are setting it to true you must pass a frequency which is the months between renewals.

##### category: [`TrainingTypeAdditionRequestCategory`](./models/training-type-addition-request-category.ts)<a id="category-trainingtypeadditionrequestcategorymodelstraining-type-addition-request-categoryts"></a>

##### dueFromHireDate: `number`<a id="duefromhiredate-number"></a>

Number of days before the training is due for new hires. Not valid unless training is required.

##### linkUrl: `string`<a id="linkurl-string"></a>

Optional URL that can be included with a training.

##### allowEmployeesToMarkComplete: `boolean`<a id="allowemployeestomarkcomplete-boolean"></a>

Allows all employees who can view the training to be able to mark it complete.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingType](./models/training-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/type` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.updateCategory`<a id="bamboohrtrainingupdatecategory"></a>

Update an existing training category. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryResponse = await bamboohr.training.updateCategory({
  companyDomain: "companyDomain_example",
  trainingCategoryId: 0,
  name: "My Training Category",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the training category.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### trainingCategoryId: `number`<a id="trainingcategoryid-number"></a>

The ID of the training category to update.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingCategory](./models/training-category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/category/{trainingCategoryId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.updateEmployeeTrainingRecord`<a id="bamboohrtrainingupdateemployeetrainingrecord"></a>

Update an existing exmployee training record. The owner of the API key used must have permission to add trainings for the selected employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeTrainingRecordResponse =
  await bamboohr.training.updateEmployeeTrainingRecord({
    companyDomain: "companyDomain_example",
    employeeTrainingRecordId: 0,
    completed: "2016-05-25",
    instructor: "Bob Jones",
    hours: 16,
    credits: 4,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### completed: `string`<a id="completed-string"></a>

Completed is the only required field and must be in yyyy-mm-dd format. The other parameters are optional.

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### employeeTrainingRecordId: `number`<a id="employeetrainingrecordid-number"></a>

The ID of the training record to update.

##### cost: [`TrainingAddEmployeeTrainingRecordRequestCost`](./models/training-add-employee-training-record-request-cost.ts)<a id="cost-trainingaddemployeetrainingrecordrequestcostmodelstraining-add-employee-training-record-request-costts"></a>

##### instructor: `string`<a id="instructor-string"></a>

##### hours: `number`<a id="hours-number"></a>

##### credits: `number`<a id="credits-number"></a>

##### notes: `number`<a id="notes-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TrainingRecord](./models/training-record.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/record/{employeeTrainingRecordId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.training.updateType`<a id="bamboohrtrainingupdatetype"></a>

Update an existing training type. The owner of the API key used must have access to training settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTypeResponse = await bamboohr.training.updateType({
  companyDomain: "companyDomain_example",
  trainingTypeId: 0,
  name: "My Edited Training",
  frequency: 12,
  renewable: true,
  required: false,
  dueFromHireDate: 30,
  allowEmployeesToMarkComplete: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the training type.

##### required: `boolean`<a id="required-boolean"></a>

Is this a required training?

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### trainingTypeId: `number`<a id="trainingtypeid-number"></a>

The ID of the training type to update.

##### description: `string`<a id="description-string"></a>

Description for the training.

##### frequency: `number`<a id="frequency-number"></a>

The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.

##### renewable: `boolean`<a id="renewable-boolean"></a>

Renewable is optional but if you are setting it to true you must pass a frequency.

##### category: [`TrainingUpdateTypeRequestCategory`](./models/training-update-type-request-category.ts)<a id="category-trainingupdatetyperequestcategorymodelstraining-update-type-request-categoryts"></a>

##### dueFromHireDate: `number`<a id="duefromhiredate-number"></a>

Number of days before the training is due for new hires. Not valid unless training is required.

##### linkUrl: `string`<a id="linkurl-string"></a>

Optional URL that can be included with a training.

##### allowEmployeesToMarkComplete: `boolean`<a id="allowemployeestomarkcomplete-boolean"></a>

Allows all employees who can view the training to be able to mark it complete.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingType](./models/training-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/training/type/{trainingTypeId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.addNewWebhook`<a id="bamboohrwebhooksaddnewwebhook"></a>

Add a new Webhook. For more details or instructions you can refer to the [webhooks API tutorial](https://documentation.bamboohr.com/docs/webhooks-api-permission-based).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewWebhookResponse = await bamboohr.webhooks.addNewWebhook({
  companyDomain: "companyDomain_example",
  name: "My new webhook",
  monitorFields: ["firstName", "lastName"],
  postFields: {
    key: "string_example",
  },
  url: "http:/",
  format: "json",
  includeCompanyDomain: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the webhook.

##### monitorFields: `string`[]<a id="monitorfields-string"></a>

A list of fields to monitor.

##### postFields: Record<string, `string`><a id="postfields-record"></a>

A list of fields to post to the webhook url. Field ID or alias: external name

##### url: `string`<a id="url-string"></a>

The url the webhook should send data to (must begin with https://).

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### format: `string`<a id="format-string"></a>

The format the webhook should use (json - default, form-encoded).

##### frequency: [`NewWebHookFrequency`](./models/new-web-hook-frequency.ts)<a id="frequency-newwebhookfrequencymodelsnew-web-hook-frequencyts"></a>

##### limit: [`NewWebHookLimit`](./models/new-web-hook-limit.ts)<a id="limit-newwebhooklimitmodelsnew-web-hook-limitts"></a>

##### includeCompanyDomain: `boolean`<a id="includecompanydomain-boolean"></a>

If set to true, the company domain will be added to the header.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksAddNewWebhookResponse](./models/webhooks-add-new-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.deleteWebhook`<a id="bamboohrwebhooksdeletewebhook"></a>

Delete a webhook that is tied to a specific user API Key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookResponse = await bamboohr.webhooks.deleteWebhook({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is an webhook ID that is associated with the User API key.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.getUserList`<a id="bamboohrwebhooksgetuserlist"></a>

Gets as list of webhooks for the user API key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserListResponse = await bamboohr.webhooks.getUserList({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksGetUserListResponse](./models/webhooks-get-user-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.getUserWebhook`<a id="bamboohrwebhooksgetuserwebhook"></a>

Get webhook data that is tied to a specific user API Key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserWebhookResponse = await bamboohr.webhooks.getUserWebhook({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

The webhook ID to display details about.

#### 🔄 Return<a id="🔄-return"></a>

[WebHookResponse](./models/web-hook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.getWebhookLogs`<a id="bamboohrwebhooksgetwebhooklogs"></a>

Get webhook logs for specific webhook id that is associated with the user API Key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookLogsResponse = await bamboohr.webhooks.getWebhookLogs({
  companyDomain: "companyDomain_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

The webhook ID to get logs about.

#### 🔄 Return<a id="🔄-return"></a>

[WebHookLogResponse](./models/web-hook-log-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks/{id}/log` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.listMonitorFields`<a id="bamboohrwebhookslistmonitorfields"></a>

Get a list fields webhooks can monitor monitor

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMonitorFieldsResponse = await bamboohr.webhooks.listMonitorFields({
  companyDomain: "companyDomain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListMonitorFieldsResponse](./models/webhooks-list-monitor-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks/monitor_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `bamboohr.webhooks.updateWebhookById`<a id="bamboohrwebhooksupdatewebhookbyid"></a>

Update a webhook, based on webhook ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookByIdResponse = await bamboohr.webhooks.updateWebhookById({
  companyDomain: "companyDomain_example",
  id: "id_example",
  name: "My new webhook",
  monitorFields: ["firstName", "lastName"],
  postFields: {
    key: "string_example",
  },
  url: "http:/",
  format: "json",
  includeCompanyDomain: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the webhook.

##### monitorFields: `string`[]<a id="monitorfields-string"></a>

A list of fields to monitor.

##### postFields: Record<string, `string`><a id="postfields-record"></a>

A list of fields to post to the webhook url. Field ID or alias: external name

##### url: `string`<a id="url-string"></a>

The url the webhook should send data to (must begin with https://).

##### companyDomain: `string`<a id="companydomain-string"></a>

The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"

##### id: `string`<a id="id-string"></a>

{id} is a webhook ID.

##### format: `string`<a id="format-string"></a>

The format the webhook should use (json - default, form-encoded).

##### frequency: [`NewWebHookFrequency`](./models/new-web-hook-frequency.ts)<a id="frequency-newwebhookfrequencymodelsnew-web-hook-frequencyts"></a>

##### limit: [`NewWebHookLimit`](./models/new-web-hook-limit.ts)<a id="limit-newwebhooklimitmodelsnew-web-hook-limitts"></a>

##### includeCompanyDomain: `boolean`<a id="includecompanydomain-boolean"></a>

If set to true, the company domain will be added to the header.

#### 🔄 Return<a id="🔄-return"></a>

[WebHookResponse](./models/web-hook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{companyDomain}/v1/webhooks/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
