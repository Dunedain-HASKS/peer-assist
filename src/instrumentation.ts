import MongooseConnect from "./server/mongoose";

export async function register() {
    console.log("Registering instrumentation at " + new Date().toUTCString());
    await MongooseConnect();
    console.log("Instrumentation registered at " + new Date().toUTCString());
};