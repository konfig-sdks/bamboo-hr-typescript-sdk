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
import { CompanyFileUpdate } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CompanyFilesApi - axios parameter creator
 * @export
 */
export const CompanyFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a company file category.
         * @summary Add Company File Category
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCategory: async (companyDomain: string, requestBody: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('createCategory', 'companyDomain', companyDomain)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('createCategory', 'requestBody', requestBody)
            const localVarPath = `/{companyDomain}/v1/files/categories`
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
                pathTemplate: '/{companyDomain}/v1/files/categories',
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
         * Gets an company file
         * @summary Get an Company File
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} fileId {fileId} is the ID of the company file being retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (companyDomain: string, fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('getFile', 'companyDomain', companyDomain)
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFile', 'fileId', fileId)
            const localVarPath = `/{companyDomain}/v1/files/{fileId}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-fileId-`)));
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
                pathTemplate: '/{companyDomain}/v1/files/{fileId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists company files and categories
         * @summary List company files and categories
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFilesAndCategories: async (companyDomain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('listFilesAndCategories', 'companyDomain', companyDomain)
            const localVarPath = `/{companyDomain}/v1/files/view`
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
                pathTemplate: '/{companyDomain}/v1/files/view',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a company file
         * @summary Delete Company File
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} fileId {fileId} is the ID of the company file being deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFile: async (companyDomain: string, fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('removeFile', 'companyDomain', companyDomain)
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('removeFile', 'fileId', fileId)
            const localVarPath = `/{companyDomain}/v1/files/{fileId}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-fileId-`)));
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
                pathTemplate: '/{companyDomain}/v1/files/{fileId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a company file
         * @summary Update Company File
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {string} fileId {fileId} is the ID of the employee file being updated.
         * @param {CompanyFileUpdate} companyFileUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFile: async (companyDomain: string, fileId: string, companyFileUpdate: CompanyFileUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('updateFile', 'companyDomain', companyDomain)
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFile', 'fileId', fileId)
            // verify required parameter 'companyFileUpdate' is not null or undefined
            assertParamExists('updateFile', 'companyFileUpdate', companyFileUpdate)
            const localVarPath = `/{companyDomain}/v1/files/{fileId}`
                .replace(`{${"companyDomain"}}`, encodeURIComponent(String(companyDomain !== undefined ? companyDomain : `-companyDomain-`)))
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-fileId-`)));
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
                requestBody: companyFileUpdate,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/files/{fileId}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(companyFileUpdate, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Upload a company file
         * @summary Upload Company File
         * @param {string} companyDomain The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \&quot;mycompany\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: async (companyDomain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyDomain' is not null or undefined
            assertParamExists('uploadFile', 'companyDomain', companyDomain)
            const localVarPath = `/{companyDomain}/v1/files`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{companyDomain}/v1/files',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompanyFilesApi - functional programming interface
 * @export
 */
export const CompanyFilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompanyFilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a company file category.
         * @summary Add Company File Category
         * @param {CompanyFilesApiCreateCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCategory(requestParameters: CompanyFilesApiCreateCategoryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const requestBody: Array<string> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCategory(requestParameters.companyDomain, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an company file
         * @summary Get an Company File
         * @param {CompanyFilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(requestParameters: CompanyFilesApiGetFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(requestParameters.companyDomain, requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists company files and categories
         * @summary List company files and categories
         * @param {CompanyFilesApiListFilesAndCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFilesAndCategories(requestParameters: CompanyFilesApiListFilesAndCategoriesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFilesAndCategories(requestParameters.companyDomain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a company file
         * @summary Delete Company File
         * @param {CompanyFilesApiRemoveFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFile(requestParameters: CompanyFilesApiRemoveFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFile(requestParameters.companyDomain, requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a company file
         * @summary Update Company File
         * @param {CompanyFilesApiUpdateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFile(requestParameters: CompanyFilesApiUpdateFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const companyFileUpdate: CompanyFileUpdate = {
                name: requestParameters.name,
                categoryId: requestParameters.categoryId,
                shareWithEmployee: requestParameters.shareWithEmployee
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFile(requestParameters.companyDomain, requestParameters.fileId, companyFileUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Upload a company file
         * @summary Upload Company File
         * @param {CompanyFilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFile(requestParameters: CompanyFilesApiUploadFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFile(requestParameters.companyDomain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CompanyFilesApi - factory interface
 * @export
 */
export const CompanyFilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompanyFilesApiFp(configuration)
    return {
        /**
         * Add a company file category.
         * @summary Add Company File Category
         * @param {CompanyFilesApiCreateCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCategory(requestParameters: CompanyFilesApiCreateCategoryRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createCategory(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an company file
         * @summary Get an Company File
         * @param {CompanyFilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile(requestParameters: CompanyFilesApiGetFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists company files and categories
         * @summary List company files and categories
         * @param {CompanyFilesApiListFilesAndCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFilesAndCategories(requestParameters: CompanyFilesApiListFilesAndCategoriesRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.listFilesAndCategories(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a company file
         * @summary Delete Company File
         * @param {CompanyFilesApiRemoveFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFile(requestParameters: CompanyFilesApiRemoveFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a company file
         * @summary Update Company File
         * @param {CompanyFilesApiUpdateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFile(requestParameters: CompanyFilesApiUpdateFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload a company file
         * @summary Upload Company File
         * @param {CompanyFilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile(requestParameters: CompanyFilesApiUploadFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.uploadFile(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCategory operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiCreateCategoryRequest
 */
export type CompanyFilesApiCreateCategoryRequest = {
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiCreateCategory
    */
    readonly companyDomain: string
    /**
    * 
    * @type {Array<string>}
    * @memberof CompanyFilesApiCreateCategory
    */
    readonly requestBody: Array<string>
}

/**
 * Request parameters for getFile operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiGetFileRequest
 */
export type CompanyFilesApiGetFileRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiGetFile
    */
    readonly companyDomain: string
    
    /**
    * {fileId} is the ID of the company file being retrieved.
    * @type {string}
    * @memberof CompanyFilesApiGetFile
    */
    readonly fileId: string
    
}

/**
 * Request parameters for listFilesAndCategories operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiListFilesAndCategoriesRequest
 */
export type CompanyFilesApiListFilesAndCategoriesRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiListFilesAndCategories
    */
    readonly companyDomain: string
    
}

/**
 * Request parameters for removeFile operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiRemoveFileRequest
 */
export type CompanyFilesApiRemoveFileRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiRemoveFile
    */
    readonly companyDomain: string
    
    /**
    * {fileId} is the ID of the company file being deleted.
    * @type {string}
    * @memberof CompanyFilesApiRemoveFile
    */
    readonly fileId: string
    
}

/**
 * Request parameters for updateFile operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiUpdateFileRequest
 */
export type CompanyFilesApiUpdateFileRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiUpdateFile
    */
    readonly companyDomain: string
    
    /**
    * {fileId} is the ID of the employee file being updated.
    * @type {string}
    * @memberof CompanyFilesApiUpdateFile
    */
    readonly fileId: string
    
} & CompanyFileUpdate

/**
 * Request parameters for uploadFile operation in CompanyFilesApi.
 * @export
 * @interface CompanyFilesApiUploadFileRequest
 */
export type CompanyFilesApiUploadFileRequest = {
    
    /**
    * The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"
    * @type {string}
    * @memberof CompanyFilesApiUploadFile
    */
    readonly companyDomain: string
    
}

/**
 * CompanyFilesApiGenerated - object-oriented interface
 * @export
 * @class CompanyFilesApiGenerated
 * @extends {BaseAPI}
 */
export class CompanyFilesApiGenerated extends BaseAPI {
    /**
     * Add a company file category.
     * @summary Add Company File Category
     * @param {CompanyFilesApiCreateCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public createCategory(requestParameters: CompanyFilesApiCreateCategoryRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).createCategory(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an company file
     * @summary Get an Company File
     * @param {CompanyFilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public getFile(requestParameters: CompanyFilesApiGetFileRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).getFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists company files and categories
     * @summary List company files and categories
     * @param {CompanyFilesApiListFilesAndCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public listFilesAndCategories(requestParameters: CompanyFilesApiListFilesAndCategoriesRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).listFilesAndCategories(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a company file
     * @summary Delete Company File
     * @param {CompanyFilesApiRemoveFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public removeFile(requestParameters: CompanyFilesApiRemoveFileRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).removeFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a company file
     * @summary Update Company File
     * @param {CompanyFilesApiUpdateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public updateFile(requestParameters: CompanyFilesApiUpdateFileRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).updateFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload a company file
     * @summary Upload Company File
     * @param {CompanyFilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyFilesApiGenerated
     */
    public uploadFile(requestParameters: CompanyFilesApiUploadFileRequest, options?: AxiosRequestConfig) {
        return CompanyFilesApiFp(this.configuration).uploadFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
