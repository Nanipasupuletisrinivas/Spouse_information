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
import { Api } from './models'

type FromJsonFunction<T> = (name: string, value: any) => T
type MapOf<T> = { [name: string]: T }

/**
 * A conditional type to convert an interface model to the equivalent JSON model.
 * We may represent dates as Date objects in our object model, but we must translate
 * them to strings for the JSON model.
 */
type ToJson<T> =
	T extends Date ? string
	: T extends object ? {
		[P in keyof T]: ToJson<T[P]>
	}
	: T extends (infer R)[] ? ToJson<R>[]
	: T

export function arrayFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return function(name: string, value: any) {
		if (typeof value !== 'object' || typeof value.length !== 'number') {
			throw `Invalid type for ${name}: expected array got ${typeof value}`
		}
	
		const result: T[] = []
		for (const el of value) {
			result.push(next(name, el))
		}
		return result
	}
}

export function arrayToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return arrayFromJson(next)
}

export function mapFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return function(name: string, value: any) {
		if (typeof value !== 'object') {
			throw `Invalid type for ${name}: expected object got ${typeof value}`
		}
	
		const result: MapOf<T> = {}
		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				result[key] = next(name, value[key])
			}
		}
		return result
	}
}

export function mapToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return mapFromJson(next)
}

export function allowNull<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		return next(name, value)
	}
}

export function allowUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | undefined> {
	return function(name: string, value: any) {
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function allowNullOrUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null | undefined> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function unsupportedFromJson(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid type for ${name}: expected unknown got undefined`
	}
	return value
}

export function unsupportedToJson(name: string, value: unknown): any {
	return unsupportedFromJson(name, value)
}

export function parseUnsupported(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected unknown got undefined`
	}
	return value
}

export function booleanFromJson(name: string, value: any): boolean {
	if (typeof value !== 'boolean') {
		throw `Invalid type for ${name}: expected boolean got ${typeof value}`
	}
	return value
}

export function booleanToJson(name: string, value: boolean): any {
	return booleanFromJson(name, value)
}

export function parseBoolean(name: string, value: any): boolean {
	if (value === 'true') {
		return true
	} else if (value === 'false') {
		return false
	} else {
		throw `Invalid value for ${name}: expected boolean got "${value}"`
	}
}

export function stringFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return value
}

export function stringToJson(name: string, value: string): any {
	return stringFromJson(name, value)
}

export function binaryFromJson(name: string, value: any): Buffer {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return new Buffer(value, 'base64')
}

export function binaryToJson(name: string, value: string | Buffer): string {
	if (typeof value === 'string') {
		return value
	} else {
		return value.toString('base64')
	}
}

export function parseString(name: string, value: any): string {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected string got undefined`
	}
	if (typeof value === 'string') {
		return value
	}
	if (typeof value === 'object' && typeof value.length === 'number') {
		if (value.length > 0) {
			return value[0]
		}
	}

	throw `Invalid value for ${name}: expected string got ${typeof value}`
}

export function integerFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	if (Math.floor(value) !== value) {
		throw `Invalid value for ${name}: expected integer got "${value}"`
	}
	return value
}

export function integerToJson(name: string, value: number): any {
	return integerFromJson(name, value)
}

export function parseInteger(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		if (value.indexOf('.') !== -1) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}

		const result = parseInt(value, 10)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected integer got ${typeof value}`
}

export function numberFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	return value
}

export function numberToJson(name: string, value: number): any {
	return numberFromJson(name, value)
}

export function parseNumber(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		const result = parseFloat(value)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected float got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected number got ${typeof value}`
}

export function dateFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
		throw `Invalid value for ${name}: expected valid date string got "${value}"`
	}
	return value
}

export function parseDate(name: string, value: any): string {
	return dateFromJson(name, value)
}

export function dateToJson(name: string, value: string): string {
	return dateFromJson(name, value)
}

export function dateTimeFromJson(name: string, value: any): Date {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?(Z|(\+|-)[0-9]{2}(:?[0-9]{2})?)$/)) {
		throw `Invalid value for ${name}: expected valid datetime string got "${value}"`
	}
	return new Date(value)
}

export function parseDateTime(name: string, value: any): Date {
	return dateTimeFromJson(name, value)
}

export function dateTimeToJson(name: string, value: Date): string {
	if (typeof value !== 'object' || typeof value.toISOString !== 'function') {
		throw `Invalid type for ${name}: expected Date got ${typeof value}`
	}
	return value.toISOString()
}

export function timeFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?$/)) {
		throw `Invalid value for ${name}: expected valid time string got "${value}"`
	}
	return value
}

export function parseTime(name: string, value: any): string {
	return timeFromJson(name, value)
}

export function timeToJson(name: string, value: string): string {
	return timeFromJson(name, value)
}

/* Model conversion functions */

const ApiApiResponseKeys: string[] = ['code', 'type', 'message']

function modelApiApiResponseFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.ApiResponse {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiApiResponseKeys.forEach(k => knownKeys[k] = true)

	const result: Api.ApiResponse = {
		'code': allowUndefined(integerFromJson)(`${name}.code`, value['code']),
		'type': allowUndefined(stringFromJson)(`${name}.type`, value['type']),
		'message': allowUndefined(stringFromJson)(`${name}.message`, value['message']),
	}

	return result
}

function modelApiApiResponseToJsonContent(name: string, value: Api.ApiResponse, knownKeys: Record<string, boolean> = {}): ToJson<Api.ApiResponse> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiApiResponseKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.ApiResponse> = {
		'code': allowUndefined(integerToJson)(`${name}.code`, value['code']),
		'type': allowUndefined(stringToJson)(`${name}.type`, value['type']),
		'message': allowUndefined(stringToJson)(`${name}.message`, value['message']),
	}

	return result
}

export function modelApiApiResponseFromJson(name: string, value: any): Api.ApiResponse {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.ApiResponse = modelApiApiResponseFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.ApiResponse: ${key}`)
		}
	}

	return result
}

export function modelApiApiResponseToJson(name: string, value: Api.ApiResponse): ToJson<Api.ApiResponse> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.ApiResponse> = modelApiApiResponseToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.ApiResponse: ${key}`)
		}
	}

	return result
}

const ApiBodyData1Keys: string[] = ['First_Name', 'Middle_Name', 'Last_Name', 'DateOfBirth', 'Occupation', 'Visa_Type', 'Account_Number', 'SSN']

function modelApiBodyData1FromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.BodyData1 {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiBodyData1Keys.forEach(k => knownKeys[k] = true)

	const result: Api.BodyData1 = {
		'First_Name': allowUndefined(stringFromJson)(`${name}.First_Name`, value['First_Name']),
		'Middle_Name': allowUndefined(stringFromJson)(`${name}.Middle_Name`, value['Middle_Name']),
		'Last_Name': allowUndefined(stringFromJson)(`${name}.Last_Name`, value['Last_Name']),
		'DateOfBirth': allowUndefined(numberFromJson)(`${name}.DateOfBirth`, value['DateOfBirth']),
		'Occupation': allowUndefined(stringFromJson)(`${name}.Occupation`, value['Occupation']),
		'Visa_Type': allowUndefined(stringFromJson)(`${name}.Visa_Type`, value['Visa_Type']),
		'Account_Number': allowUndefined(numberFromJson)(`${name}.Account_Number`, value['Account_Number']),
		'SSN': allowUndefined(stringFromJson)(`${name}.SSN`, value['SSN']),
	}

	return result
}

function modelApiBodyData1ToJsonContent(name: string, value: Api.BodyData1, knownKeys: Record<string, boolean> = {}): ToJson<Api.BodyData1> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiBodyData1Keys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.BodyData1> = {
		'First_Name': allowUndefined(stringToJson)(`${name}.First_Name`, value['First_Name']),
		'Middle_Name': allowUndefined(stringToJson)(`${name}.Middle_Name`, value['Middle_Name']),
		'Last_Name': allowUndefined(stringToJson)(`${name}.Last_Name`, value['Last_Name']),
		'DateOfBirth': allowUndefined(numberToJson)(`${name}.DateOfBirth`, value['DateOfBirth']),
		'Occupation': allowUndefined(stringToJson)(`${name}.Occupation`, value['Occupation']),
		'Visa_Type': allowUndefined(stringToJson)(`${name}.Visa_Type`, value['Visa_Type']),
		'Account_Number': allowUndefined(numberToJson)(`${name}.Account_Number`, value['Account_Number']),
		'SSN': allowUndefined(stringToJson)(`${name}.SSN`, value['SSN']),
	}

	return result
}

export function modelApiBodyData1FromJson(name: string, value: any): Api.BodyData1 {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.BodyData1 = modelApiBodyData1FromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.BodyData1: ${key}`)
		}
	}

	return result
}

export function modelApiBodyData1ToJson(name: string, value: Api.BodyData1): ToJson<Api.BodyData1> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.BodyData1> = modelApiBodyData1ToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.BodyData1: ${key}`)
		}
	}

	return result
}

const ApiBodyData2Keys: string[] = ['First_Name', 'Middle_Name', 'Last_Name', 'DateOfBirth', 'Occupation', 'Visa_Type', 'Account_Number', 'Passport_Number', 'Passport_Expiry_Date', 'Visa_Number', 'Visa_Expiry_Date', 'First_Entry_Date_into_USA']

function modelApiBodyData2FromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.BodyData2 {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiBodyData2Keys.forEach(k => knownKeys[k] = true)

	const result: Api.BodyData2 = {
		'First_Name': allowUndefined(stringFromJson)(`${name}.First_Name`, value['First_Name']),
		'Middle_Name': allowUndefined(stringFromJson)(`${name}.Middle_Name`, value['Middle_Name']),
		'Last_Name': allowUndefined(stringFromJson)(`${name}.Last_Name`, value['Last_Name']),
		'DateOfBirth': allowUndefined(numberFromJson)(`${name}.DateOfBirth`, value['DateOfBirth']),
		'Occupation': allowUndefined(stringFromJson)(`${name}.Occupation`, value['Occupation']),
		'Visa_Type': allowUndefined(stringFromJson)(`${name}.Visa_Type`, value['Visa_Type']),
		'Account_Number': allowUndefined(numberFromJson)(`${name}.Account_Number`, value['Account_Number']),
		'Passport_Number': allowUndefined(numberFromJson)(`${name}.Passport_Number`, value['Passport_Number']),
		'Passport_Expiry_Date': allowUndefined(stringFromJson)(`${name}.Passport_Expiry_Date`, value['Passport_Expiry_Date']),
		'Visa_Number': allowUndefined(numberFromJson)(`${name}.Visa_Number`, value['Visa_Number']),
		'Visa_Expiry_Date': allowUndefined(stringFromJson)(`${name}.Visa_Expiry_Date`, value['Visa_Expiry_Date']),
		'First_Entry_Date_into_USA': allowUndefined(stringFromJson)(`${name}.First_Entry_Date_into_USA`, value['First_Entry_Date_into_USA']),
	}

	return result
}

function modelApiBodyData2ToJsonContent(name: string, value: Api.BodyData2, knownKeys: Record<string, boolean> = {}): ToJson<Api.BodyData2> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiBodyData2Keys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.BodyData2> = {
		'First_Name': allowUndefined(stringToJson)(`${name}.First_Name`, value['First_Name']),
		'Middle_Name': allowUndefined(stringToJson)(`${name}.Middle_Name`, value['Middle_Name']),
		'Last_Name': allowUndefined(stringToJson)(`${name}.Last_Name`, value['Last_Name']),
		'DateOfBirth': allowUndefined(numberToJson)(`${name}.DateOfBirth`, value['DateOfBirth']),
		'Occupation': allowUndefined(stringToJson)(`${name}.Occupation`, value['Occupation']),
		'Visa_Type': allowUndefined(stringToJson)(`${name}.Visa_Type`, value['Visa_Type']),
		'Account_Number': allowUndefined(numberToJson)(`${name}.Account_Number`, value['Account_Number']),
		'Passport_Number': allowUndefined(numberToJson)(`${name}.Passport_Number`, value['Passport_Number']),
		'Passport_Expiry_Date': allowUndefined(stringToJson)(`${name}.Passport_Expiry_Date`, value['Passport_Expiry_Date']),
		'Visa_Number': allowUndefined(numberToJson)(`${name}.Visa_Number`, value['Visa_Number']),
		'Visa_Expiry_Date': allowUndefined(stringToJson)(`${name}.Visa_Expiry_Date`, value['Visa_Expiry_Date']),
		'First_Entry_Date_into_USA': allowUndefined(stringToJson)(`${name}.First_Entry_Date_into_USA`, value['First_Entry_Date_into_USA']),
	}

	return result
}

export function modelApiBodyData2FromJson(name: string, value: any): Api.BodyData2 {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.BodyData2 = modelApiBodyData2FromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.BodyData2: ${key}`)
		}
	}

	return result
}

export function modelApiBodyData2ToJson(name: string, value: Api.BodyData2): ToJson<Api.BodyData2> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.BodyData2> = modelApiBodyData2ToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.BodyData2: ${key}`)
		}
	}

	return result
}
