import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
/**
 * ! we can wright any  name of mongodb databage file name in the cotation ()
 */
const db = client.db();

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
    /**
     * ! requireEmailVerification: true, is a importent we can see rule of setting in next.js (Authentication/email-password) 
     * ! or search in browser | https://better-auth.com/docs/authentication/email-password |
     */
    //  requireEmailVerification: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});