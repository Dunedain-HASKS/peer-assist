import { MongoDoc } from "@/server/mongoose";

export interface Organization {
    users: string[];
    name: string;
    description: string;
    domain: string;
};

export type OrganizationDocument = MongoDoc<Organization>;