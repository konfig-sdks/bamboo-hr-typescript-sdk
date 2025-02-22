/* tslint:disable */
/* eslint-disable */
/*
BambooHR API

This is the majority of the API requests including some that are not documented.

http://www.bamboohr.com/api/documentation/

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HoursEditHourRecordRequest } from '../models';
// @ts-ignore
import { TimeTrackingRecord } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HoursApi - axios parameter creator
 * @export
 */
export const HoursApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Bulk add/edit hour records
         * @summary Bulk add/edit hour records
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {Array<TimeTrackingRecord>} timeTrackingRecord 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkRecordEdit: async (companyDomain: string, timeTrackingRecord: Array<TimeTrackingRecord>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('bulkRecordEdit', 'companyDomain', companyDomain)
            // verify required parameter 'timeTrackingRecord' is not null or undefined
            assertParamExists('bulkRecordEdit', 'timeTrackingRecord', timeTrackingRecord)
            const localVarPath = `/{companyDomain}/v1/timetracking/record`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "auth", [], configuration)
            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: timeTrackingRecord,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/timetracking/record',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeTrackingRecord, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an hour record
         * @summary Delete an hour record
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} id The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteHourRecord: async (companyDomain: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('deleteHourRecord', 'companyDomain', companyDomain)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteHourRecord', 'id', id)
            const localVarPath = `/{companyDomain}/v1/timetracking/delete/{id}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "auth", [], configuration)
            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/timetracking/delete/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Edit an hour record
         * @summary Edit an hour record
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {HoursEditHourRecordRequest} hoursEditHourRecordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editHourRecord: async (companyDomain: string, hoursEditHourRecordRequest: HoursEditHourRecordRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('editHourRecord', 'companyDomain', companyDomain)
            // verify required parameter 'hoursEditHourRecordRequest' is not null or undefined
            assertParamExists('editHourRecord', 'hoursEditHourRecordRequest', hoursEditHourRecordRequest)
            const localVarPath = `/{companyDomain}/v1/timetracking/adjust`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "auth", [], configuration)
            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: hoursEditHourRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/timetracking/adjust',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(hoursEditHourRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an hour record
         * @summary Get an hour record
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} id {id} is the time tracking ID used to originally create the record.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHourRecord: async (companyDomain: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('getHourRecord', 'companyDomain', companyDomain)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getHourRecord', 'id', id)
            const localVarPath = `/{companyDomain}/v1/timetracking/record/{id}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "auth", [], configuration)
            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/timetracking/record/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add an hour record
         * @summary Add an hour record
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {TimeTrackingRecord} timeTrackingRecord 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordAddition: async (companyDomain: string, timeTrackingRecord: TimeTrackingRecord, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('recordAddition', 'companyDomain', companyDomain)
            // verify required parameter 'timeTrackingRecord' is not null or undefined
            assertParamExists('recordAddition', 'timeTrackingRecord', timeTrackingRecord)
            const localVarPath = `/{companyDomain}/v1/timetracking/add`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "auth", [], configuration)
            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: timeTrackingRecord,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/timetracking/add',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeTrackingRecord, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HoursApi - functional programming interface
 * @export
 */
export const HoursApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HoursApiAxiosParamCreator(configuration)
    return {
        /**
         * Bulk add/edit hour records
         * @summary Bulk add/edit hour records
         * @param {HoursApiBulkRecordEditRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkRecordEdit(requestParameters: HoursApiBulkRecordEditRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const timeTrackingRecord: Array<TimeTrackingRecord> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkRecordEdit(requestParameters.companyDomain, timeTrackingRecord, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an hour record
         * @summary Delete an hour record
         * @param {HoursApiDeleteHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteHourRecord(requestParameters: HoursApiDeleteHourRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteHourRecord(requestParameters.companyDomain, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Edit an hour record
         * @summary Edit an hour record
         * @param {HoursApiEditHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editHourRecord(requestParameters: HoursApiEditHourRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const hoursEditHourRecordRequest: HoursEditHourRecordRequest = {
                timeTrackingId: requestParameters.timeTrackingId,
                hoursWorked: requestParameters.hoursWorked
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.editHourRecord(requestParameters.companyDomain, hoursEditHourRecordRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get an hour record
         * @summary Get an hour record
         * @param {HoursApiGetHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHourRecord(requestParameters: HoursApiGetHourRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHourRecord(requestParameters.companyDomain, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Add an hour record
         * @summary Add an hour record
         * @param {HoursApiRecordAdditionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordAddition(requestParameters: HoursApiRecordAdditionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const timeTrackingRecord: TimeTrackingRecord = {
                timeTrackingId: requestParameters.timeTrackingId,
                employeeId: requestParameters.employeeId,
                divisionId: requestParameters.divisionId,
                departmentId: requestParameters.departmentId,
                jobTitleId: requestParameters.jobTitleId,
                payCode: requestParameters.payCode,
                dateHoursWorked: requestParameters.dateHoursWorked,
                payRate: requestParameters.payRate,
                rateType: requestParameters.rateType,
                hoursWorked: requestParameters.hoursWorked,
                jobCode: requestParameters.jobCode,
                jobData: requestParameters.jobData
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordAddition(requestParameters.companyDomain, timeTrackingRecord, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HoursApi - factory interface
 * @export
 */
export const HoursApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HoursApiFp(configuration)
    return {
        /**
         * Bulk add/edit hour records
         * @summary Bulk add/edit hour records
         * @param {HoursApiBulkRecordEditRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkRecordEdit(requestParameters: HoursApiBulkRecordEditRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.bulkRecordEdit(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an hour record
         * @summary Delete an hour record
         * @param {HoursApiDeleteHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteHourRecord(requestParameters: HoursApiDeleteHourRecordRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteHourRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Edit an hour record
         * @summary Edit an hour record
         * @param {HoursApiEditHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editHourRecord(requestParameters: HoursApiEditHourRecordRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.editHourRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an hour record
         * @summary Get an hour record
         * @param {HoursApiGetHourRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHourRecord(requestParameters: HoursApiGetHourRecordRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getHourRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Add an hour record
         * @summary Add an hour record
         * @param {HoursApiRecordAdditionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordAddition(requestParameters: HoursApiRecordAdditionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.recordAddition(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for bulkRecordEdit operation in HoursApi.
 * @export
 * @interface HoursApiBulkRecordEditRequest
 */
export type HoursApiBulkRecordEditRequest = {
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof HoursApiBulkRecordEdit
    */
    readonly companyDomain: string
    /**
    * 
    * @type {Array<TimeTrackingRecord>}
    * @memberof HoursApiBulkRecordEdit
    */
    readonly requestBody: Array<TimeTrackingRecord>
}

/**
 * Request parameters for deleteHourRecord operation in HoursApi.
 * @export
 * @interface HoursApiDeleteHourRecordRequest
 */
export type HoursApiDeleteHourRecordRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof HoursApiDeleteHourRecord
    */
    readonly companyDomain: string
    
    /**
    * The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).
    * @type {string}
    * @memberof HoursApiDeleteHourRecord
    */
    readonly id: string
    
}

/**
 * Request parameters for editHourRecord operation in HoursApi.
 * @export
 * @interface HoursApiEditHourRecordRequest
 */
export type HoursApiEditHourRecordRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof HoursApiEditHourRecord
    */
    readonly companyDomain: string
    
} & HoursEditHourRecordRequest

/**
 * Request parameters for getHourRecord operation in HoursApi.
 * @export
 * @interface HoursApiGetHourRecordRequest
 */
export type HoursApiGetHourRecordRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof HoursApiGetHourRecord
    */
    readonly companyDomain: string
    
    /**
    * {id} is the time tracking ID used to originally create the record.
    * @type {string}
    * @memberof HoursApiGetHourRecord
    */
    readonly id: string
    
}

/**
 * Request parameters for recordAddition operation in HoursApi.
 * @export
 * @interface HoursApiRecordAdditionRequest
 */
export type HoursApiRecordAdditionRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof HoursApiRecordAddition
    */
    readonly companyDomain: string
    
} & TimeTrackingRecord

/**
 * HoursApiGenerated - object-oriented interface
 * @export
 * @class HoursApiGenerated
 * @extends {BaseAPI}
 */
export class HoursApiGenerated extends BaseAPI {
    /**
     * Bulk add/edit hour records
     * @summary Bulk add/edit hour records
     * @param {HoursApiBulkRecordEditRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HoursApiGenerated
     */
    public bulkRecordEdit(requestParameters: HoursApiBulkRecordEditRequest, options?: AxiosRequestConfig) {
        return HoursApiFp(this.configuration).bulkRecordEdit(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an hour record
     * @summary Delete an hour record
     * @param {HoursApiDeleteHourRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HoursApiGenerated
     */
    public deleteHourRecord(requestParameters: HoursApiDeleteHourRecordRequest, options?: AxiosRequestConfig) {
        return HoursApiFp(this.configuration).deleteHourRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Edit an hour record
     * @summary Edit an hour record
     * @param {HoursApiEditHourRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HoursApiGenerated
     */
    public editHourRecord(requestParameters: HoursApiEditHourRecordRequest, options?: AxiosRequestConfig) {
        return HoursApiFp(this.configuration).editHourRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an hour record
     * @summary Get an hour record
     * @param {HoursApiGetHourRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HoursApiGenerated
     */
    public getHourRecord(requestParameters: HoursApiGetHourRecordRequest, options?: AxiosRequestConfig) {
        return HoursApiFp(this.configuration).getHourRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add an hour record
     * @summary Add an hour record
     * @param {HoursApiRecordAdditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HoursApiGenerated
     */
    public recordAddition(requestParameters: HoursApiRecordAdditionRequest, options?: AxiosRequestConfig) {
        return HoursApiFp(this.configuration).recordAddition(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
