# Spouse

## Operations

### postCreateSpouseItin

```http
POST /create/spouse/itin
```

Spouse Created

### postCreateSpouseSsn

```http
POST /create/spouse/ssn
```

Spouse Created

### deleteDeleteSpouseItin

```http
DELETE /delete/spouse/itin/{Account_Number}
```

deleting spouse

### deleteDeleteSpouseSsn

```http
DELETE /delete/spouse/ssn/{Account_Number}
```

deleting spouse

### getGetSpouseItin

```http
GET /get/spouse/itin
```

getting Spouse

### getGetSpouseSsn

```http
GET /get/spouse/ssn
```

getting Spouse

### putUpdateSpouseItin

```http
PUT /update/spouse/itin/{Account_Number}
```

Updating Spouse

### putUpdateSpouseSsn

```http
PUT /update/spouse/ssn/{Account_Number}
```

Updating Spouse

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
