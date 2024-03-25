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
import { Employee } from '../models';
// @ts-ignore
import { EmployeesGetDirectory200Response } from '../models';
// @ts-ignore
import { EmployeesGetDirectoryResponse } from '../models';
// @ts-ignore
import { EmployeesGetEmployeeData200Response } from '../models';
// @ts-ignore
import { EmployeesGetEmployeeDataResponse } from '../models';
// @ts-ignore
import { PostNewEmployee } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeesApi - axios parameter creator
 * @export
 */
export const EmployeesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new employee. New employees must have at least a first name and a last name. The ID of the newly created employee is included in the Location header of the response. Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields) endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the following required fields (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Add Employee
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEmployee: async (companyDomain: string, requestBody: { [key: string]: any; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('createNewEmployee', 'companyDomain', companyDomain)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('createNewEmployee', 'requestBody', requestBody)
            const localVarPath = `/{companyDomain}/v1/employees`
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
                requestBody: requestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets employee directory.
         * @summary Get Employee Directory
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectory: async (companyDomain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('getDirectory', 'companyDomain', companyDomain)
            const localVarPath = `/{companyDomain}/v1/employees/directory`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)));
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
                pathTemplate: '/{companyDomain}/v1/employees/directory',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information. See the [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
         * @summary Get Employee
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} fields {fields} is a comma separated list of values taken from the official list of field names. 
         * @param {string} id {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
         * @param {boolean} [onlyCurrent] Setting to false will return future dated values from history table fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployeeData: async (companyDomain: string, fields: string, id: string, onlyCurrent?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('getEmployeeData', 'companyDomain', companyDomain)
            // verify required parameter 'fields' is not null or undefined
            assertParamExists('getEmployeeData', 'fields', fields)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEmployeeData', 'id', id)
            const localVarPath = `/{companyDomain}/v1/employees/{id}`
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
            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (onlyCurrent !== undefined) {
                localVarQueryParameter['onlyCurrent'] = onlyCurrent;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/employees/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an employee, based on employee ID. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the API user will need to update the employee with all of the following required fields for the update to be successful (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Update Employee
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} id {id} is an employee ID.
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployee: async (companyDomain: string, id: string, requestBody: { [key: string]: any; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('updateEmployee', 'companyDomain', companyDomain)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateEmployee', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('updateEmployee', 'requestBody', requestBody)
            const localVarPath = `/{companyDomain}/v1/employees/{id}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
                requestBody: requestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/employees/{id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeesApi - functional programming interface
 * @export
 */
export const EmployeesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeesApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a new employee. New employees must have at least a first name and a last name. The ID of the newly created employee is included in the Location header of the response. Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields) endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the following required fields (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Add Employee
         * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const requestBody: { [key: string]: any; } = {
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewEmployee(requestParameters.companyDomain, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets employee directory.
         * @summary Get Employee Directory
         * @param {EmployeesApiGetDirectoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDirectory(requestParameters: EmployeesApiGetDirectoryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesGetDirectoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDirectory(requestParameters.companyDomain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information. See the [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
         * @summary Get Employee
         * @param {EmployeesApiGetEmployeeDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmployeeData(requestParameters: EmployeesApiGetEmployeeDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesGetEmployeeDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmployeeData(requestParameters.companyDomain, requestParameters.fields, requestParameters.id, requestParameters.onlyCurrent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an employee, based on employee ID. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the API user will need to update the employee with all of the following required fields for the update to be successful (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Update Employee
         * @param {EmployeesApiUpdateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEmployee(requestParameters: EmployeesApiUpdateEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const requestBody: { [key: string]: any; } = {
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEmployee(requestParameters.companyDomain, requestParameters.id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeesApi - factory interface
 * @export
 */
export const EmployeesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeesApiFp(configuration)
    return {
        /**
         * Add a new employee. New employees must have at least a first name and a last name. The ID of the newly created employee is included in the Location header of the response. Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields) endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the following required fields (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Add Employee
         * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createNewEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets employee directory.
         * @summary Get Employee Directory
         * @param {EmployeesApiGetDirectoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectory(requestParameters: EmployeesApiGetDirectoryRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesGetDirectoryResponse> {
            return localVarFp.getDirectory(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information. See the [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
         * @summary Get Employee
         * @param {EmployeesApiGetEmployeeDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmployeeData(requestParameters: EmployeesApiGetEmployeeDataRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesGetEmployeeDataResponse> {
            return localVarFp.getEmployeeData(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an employee, based on employee ID. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the API user will need to update the employee with all of the following required fields for the update to be successful (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
         * @summary Update Employee
         * @param {EmployeesApiUpdateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployee(requestParameters: EmployeesApiUpdateEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewEmployee operation in EmployeesApi.
 * @export
 * @interface EmployeesApiCreateNewEmployeeRequest
 */
export type EmployeesApiCreateNewEmployeeRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof EmployeesApiCreateNewEmployee
    */
    readonly companyDomain: string
    
} & { [key: string]: any; }

/**
 * Request parameters for getDirectory operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetDirectoryRequest
 */
export type EmployeesApiGetDirectoryRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof EmployeesApiGetDirectory
    */
    readonly companyDomain: string
    
}

/**
 * Request parameters for getEmployeeData operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetEmployeeDataRequest
 */
export type EmployeesApiGetEmployeeDataRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof EmployeesApiGetEmployeeData
    */
    readonly companyDomain: string
    
    /**
    * {fields} is a comma separated list of values taken from the official list of field names. 
    * @type {string}
    * @memberof EmployeesApiGetEmployeeData
    */
    readonly fields: string
    
    /**
    * {id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).
    * @type {string}
    * @memberof EmployeesApiGetEmployeeData
    */
    readonly id: string
    
    /**
    * Setting to false will return future dated values from history table fields.
    * @type {boolean}
    * @memberof EmployeesApiGetEmployeeData
    */
    readonly onlyCurrent?: boolean
    
}

/**
 * Request parameters for updateEmployee operation in EmployeesApi.
 * @export
 * @interface EmployeesApiUpdateEmployeeRequest
 */
export type EmployeesApiUpdateEmployeeRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof EmployeesApiUpdateEmployee
    */
    readonly companyDomain: string
    
    /**
    * {id} is an employee ID.
    * @type {string}
    * @memberof EmployeesApiUpdateEmployee
    */
    readonly id: string
    
} & { [key: string]: any; }

/**
 * EmployeesApiGenerated - object-oriented interface
 * @export
 * @class EmployeesApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeesApiGenerated extends BaseAPI {
    /**
     * Add a new employee. New employees must have at least a first name and a last name. The ID of the newly created employee is included in the Location header of the response. Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields) endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the following required fields (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
     * @summary Add Employee
     * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).createNewEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets employee directory.
     * @summary Get Employee Directory
     * @param {EmployeesApiGetDirectoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getDirectory(requestParameters: EmployeesApiGetDirectoryRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getDirectory(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information. See the [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
     * @summary Get Employee
     * @param {EmployeesApiGetEmployeeDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getEmployeeData(requestParameters: EmployeesApiGetEmployeeDataRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getEmployeeData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an employee, based on employee ID. If employee is currently on a pay schedule syncing with Trax Payroll, or being added to one, the API user will need to update the employee with all of the following required fields for the update to be successful (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state, country, employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and division.
     * @summary Update Employee
     * @param {EmployeesApiUpdateEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public updateEmployee(requestParameters: EmployeesApiUpdateEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).updateEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}