import { PostCreateSpouseSsnResponse, DeleteDeleteSpouseSsnResponse, GetGetSpouseSsnResponse, PutUpdateSpouseSsnResponse,GetGetSpouseItinResponse,DeleteDeleteSpouseItinResponse,PutUpdateSpouseItinResponse,PostCreateSpouseItinResponse, SpouseApi } from "../../../dict/api/spouse/types";
import { Api } from "../../../dict/models";
import { collections } from "../../../src/admin/types"


export class UserApiImpl implements SpouseApi {
    getGetSpouseSsn(): Promise<GetGetSpouseSsnResponse>  {
        return new Promise<GetGetSpouseSsnResponse>((resolve,reject)=>{
            collections.ans!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetGetSpouseSsnResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetGetSpouseSsnResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

    getGetSpouseItin(): Promise<GetGetSpouseItinResponse>  {
        return new Promise<GetGetSpouseItinResponse>((resolve,reject)=>{
            collections.ans!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetGetSpouseItinResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetGetSpouseItinResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

    deleteDeleteSpouseSsn(Account_Number: number):Promise<DeleteDeleteSpouseSsnResponse>{
        return new Promise<DeleteDeleteSpouseSsnResponse>((resolve,reject)=>{
            collections.ans!.deleteOne(
                {Account_Number: Account_Number},
                function(err: any,result: any){
                    if(err){
                        const response=<DeleteDeleteSpouseSsnResponse>{
                            status:400,
                            body:{message:`someting went wrong`}
                        }
                        resolve(response)
                    }
                    const response=<DeleteDeleteSpouseSsnResponse>{
                        status:201,
                        body:{
                            message:`Spouse deleted Sucessfully`
                        }
                    }
                    resolve(response)
                }
            )
            
        })
     }

     deleteDeleteSpouseItin(Account_Number: number):Promise<DeleteDeleteSpouseItinResponse>{
        return new Promise<DeleteDeleteSpouseItinResponse>((resolve,reject)=>{
            collections.ans!.deleteOne(
                {Account_Number: Account_Number},
                function(err: any,result: any){
                    if(err){
                        const response=<DeleteDeleteSpouseItinResponse>{
                            status:400,
                            body:{message:`someting went wrong`}
                        }
                        resolve(response)
                    }
                    const response=<DeleteDeleteSpouseItinResponse>{
                        status:201,
                        body:{
                            message:`Spouse deleted Sucessfully`
                        }
                    }
                    resolve(response)
                }
            )
            
        })
     }
     putUpdateSpouseSsn (Account_Number: number, request: Api.BodyData1 | undefined) : Promise<PutUpdateSpouseSsnResponse>{  
        return new Promise<PutUpdateSpouseSsnResponse>((resolve,reject)=>{
            collections.ans!.updateOne(
                {Account_Number: Account_Number},
                {$set:request},
                function(err:any,result: any){
                    if(!Account_Number)
                    {
                        body:{message: `ndckebfie`}
                    }
                if(err){
                    const response=<PutUpdateSpouseSsnResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<PutUpdateSpouseSsnResponse>{
                    status:201,
                    body:{message:`Spouse Updated Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }

 putUpdateSpouseItin (Account_Number: number, request: Api.BodyData2 | undefined) : Promise<PutUpdateSpouseItinResponse>{  
    return new Promise<PutUpdateSpouseItinResponse>((resolve,reject)=>{
        collections.ans!.updateOne(
            {Account_Number: Account_Number},
            {$set:request},
            function(err:any,result: any){
            if(err){
                const response=<PutUpdateSpouseItinResponse>{
                    status: 400,
                    body:{message:`Somting Went Wrong`}
                }
                resolve(response)
            }
            const response=<PutUpdateSpouseItinResponse>{
                status:201,
                body:{message:`Spouse Updated Sucessfully`}
            }
            resolve(response)
           
        }    
    )

})
}


 postCreateSpouseSsn(request: Api.BodyData1 | undefined): Promise<PostCreateSpouseSsnResponse>
 {
    return new Promise<PostCreateSpouseSsnResponse>((resolve,reject)=>{
        collections.ans!.findOne(
            {Account_Number:request?.Account_Number},
            function(err:any,result:any){
                if(result){
                    const response=<PostCreateSpouseSsnResponse>{
                        status:400,
                        body:{message:`Spouse Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.ans!.insertOne(
                        {First_Name:request?.First_Name,Middle_Name:request?.Middle_Name,Last_Name:request?.Last_Name,dateOfBirth:request?.DateOfBirth,Occupation:request?.Occupation,Visa_Type:request?.Visa_Type,Account_Number:request?.Account_Number},
                        function(err:any,result:any){
                          if(err){
                            const response=<PostCreateSpouseSsnResponse>{
                                status:400,
                                body:{message:`Something Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<PostCreateSpouseSsnResponse>{
                                status:201,
                                body:{message:`Spouse created Sucessfully`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )

                }

            }
            
        )
    })
 }

 postCreateSpouseItin(request: Api.BodyData2 | undefined): Promise<PostCreateSpouseItinResponse>
 {
    return new Promise<PostCreateSpouseItinResponse>((resolve,reject)=>{
        collections.ans!.findOne(
            {Account_Number:request?.Account_Number},
            function(err:any,result:any){
                if(result){
                    const response=<PostCreateSpouseItinResponse>{
                        status:400,
                        body:{message:`Spouse Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.ans!.insertOne(
                        {First_Name:request?.First_Name,Middle_Name:request?.Middle_Name,Last_Name:request?.Last_Name,DateOfBirth:request?.DateOfBirth,Occupation:request?.Occupation,Visa_Type:request?.Visa_Type,Account_Number:request?.Account_Number,Passport_Number:request?.Passport_Number,Passport_Expiry_Date:request?.Passport_Expiry_Date,Visa_Number:request?.Visa_Number,Visa_Expiry_Date:request?.Visa_Expiry_Date,First_Entry_Date_into_USA:request?.First_Entry_Date_into_USA},
                        function(err:any,result:any){
                          if(err){
                            const response=<PostCreateSpouseItinResponse>{
                                status:400,
                                body:{message:`Something Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<PostCreateSpouseItinResponse>{
                                status:201,
                                body:{message:`Spouse created Sucessfully`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )

                }

            }
            
        )
    })
 }

}