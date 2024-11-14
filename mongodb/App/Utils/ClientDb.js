import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://rmamedoff056:5CEaFCuLMFFLIRux@node-2.mbgsk.mongodb.net/?retryWrites=true&w=majority&appName=node-2";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
