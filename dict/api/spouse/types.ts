/* eslint-disable */
// tslint:disable
/**
 * ServiceApi 1-
 * 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface SpouseApi {
	postCreateSpouseItin: (request: Api.BodyData2 | undefined) => Promise<PostCreateSpouseItinResponse>
	postCreateSpouseSsn: (request: Api.BodyData1 | undefined) => Promise<PostCreateSpouseSsnResponse>
	deleteDeleteSpouseItin: (accountNumber: number) => Promise<DeleteDeleteSpouseItinResponse>
	deleteDeleteSpouseSsn: (accountNumber: number) => Promise<DeleteDeleteSpouseSsnResponse>
	getGetSpouseItin: () => Promise<GetGetSpouseItinResponse>
	getGetSpouseSsn: () => Promise<GetGetSpouseSsnResponse>
	putUpdateSpouseItin: (accountNumber: number, request: Api.BodyData2 | undefined) => Promise<PutUpdateSpouseItinResponse>
	putUpdateSpouseSsn: (accountNumber: number, request: Api.BodyData1 | undefined) => Promise<PutUpdateSpouseSsnResponse>
}

export type PostCreateSpouseItinResponse = PostCreateSpouseItin201Response | PostCreateSpouseItin400Response

export interface PostCreateSpouseItin201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface PostCreateSpouseItin400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type PostCreateSpouseSsnResponse = PostCreateSpouseSsn201Response | PostCreateSpouseSsn400Response

export interface PostCreateSpouseSsn201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface PostCreateSpouseSsn400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type DeleteDeleteSpouseItinResponse = DeleteDeleteSpouseItin201Response | DeleteDeleteSpouseItin400Response

export interface DeleteDeleteSpouseItin201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface DeleteDeleteSpouseItin400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type DeleteDeleteSpouseSsnResponse = DeleteDeleteSpouseSsn201Response | DeleteDeleteSpouseSsn400Response

export interface DeleteDeleteSpouseSsn201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface DeleteDeleteSpouseSsn400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetGetSpouseItinResponse = GetGetSpouseItin201Response | GetGetSpouseItin400Response

export interface GetGetSpouseItin201Response {
	status: 201
	body: Api.BodyData2[]
	headers?: never
}

export interface GetGetSpouseItin400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetGetSpouseSsnResponse = GetGetSpouseSsn201Response | GetGetSpouseSsn400Response

export interface GetGetSpouseSsn201Response {
	status: 201
	body: Api.BodyData1[]
	headers?: never
}

export interface GetGetSpouseSsn400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type PutUpdateSpouseItinResponse = PutUpdateSpouseItin201Response | PutUpdateSpouseItin400Response

export interface PutUpdateSpouseItin201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface PutUpdateSpouseItin400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type PutUpdateSpouseSsnResponse = PutUpdateSpouseSsn201Response | PutUpdateSpouseSsn400Response

export interface PutUpdateSpouseSsn201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface PutUpdateSpouseSsn400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

