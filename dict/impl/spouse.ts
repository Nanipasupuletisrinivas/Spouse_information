import * as t from '../api/spouse/types'
import { Api } from '../models'

async function postCreateSpouseItin(request: Api.BodyData2 | undefined): Promise<t.PostCreateSpouseItinResponse> {
	throw 'Unimplemented'
}

async function postCreateSpouseSsn(request: Api.BodyData1 | undefined): Promise<t.PostCreateSpouseSsnResponse> {
	throw 'Unimplemented'
}

async function deleteDeleteSpouseItin(accountNumber: number): Promise<t.DeleteDeleteSpouseItinResponse> {
	throw 'Unimplemented'
}

async function deleteDeleteSpouseSsn(accountNumber: number): Promise<t.DeleteDeleteSpouseSsnResponse> {
	throw 'Unimplemented'
}

async function getGetSpouseItin(): Promise<t.GetGetSpouseItinResponse> {
	throw 'Unimplemented'
}

async function getGetSpouseSsn(): Promise<t.GetGetSpouseSsnResponse> {
	throw 'Unimplemented'
}

async function putUpdateSpouseItin(accountNumber: number, request: Api.BodyData2 | undefined): Promise<t.PutUpdateSpouseItinResponse> {
	throw 'Unimplemented'
}

async function putUpdateSpouseSsn(accountNumber: number, request: Api.BodyData1 | undefined): Promise<t.PutUpdateSpouseSsnResponse> {
	throw 'Unimplemented'
}


const api: t.SpouseApi = {
	postCreateSpouseItin,
	postCreateSpouseSsn,
	deleteDeleteSpouseItin,
	deleteDeleteSpouseSsn,
	getGetSpouseItin,
	getGetSpouseSsn,
	putUpdateSpouseItin,
	putUpdateSpouseSsn,
}

export default api
