import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";

export interface Organization {
    users: ObjectId[];
    name: string;
    description: string;
    domain: string;
};

export type OrganizationDocument = MongoDoc<Organization>;