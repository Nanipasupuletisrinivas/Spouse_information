import * as mongoDB from "mongodb"
export const collections:{ans?:mongoDB.Collection}={}
export async function connectToDatabase(){
    const client:mongoDB.MongoClient=new mongoDB.MongoClient(
        "mongodb+srv://NaniPasupuleti:9505785028@cluster0.aqnmbqs.mongodb.net/?retryWrites=true&w=majority"
    )
    await client.connect();
    const db:mongoDB.Db=client.db("api1")
    const ans:mongoDB.Collection=db.collection("collection1");
    collections.ans=ans
    
}