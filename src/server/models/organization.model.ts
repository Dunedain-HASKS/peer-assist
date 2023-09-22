import { Organization } from "@/types/organization.interface";
import { Model, Schema, model } from "mongoose";

const OrganizationSchema = new Schema<Organization>({
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    domain: { type: String, required: true }
});

export const OrganizationModel: Model<Organization> = model<Organization>("Organization", OrganizationSchema);