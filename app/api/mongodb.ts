import { MongoClient, MongoClientOptions } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI as string, { retryReads: true, retryWrites:true })
export const clPromise = client.connect()