import { OrganizationModel } from "../models/organization.model";
import { UserModel } from "../models/user.model";


export const getOrganization = async ({ userId }: { userId: string }) => {
    const user = await UserModel.findById(userId, {
        organization: 1,
    }).exec();
    if (!user) throw new Error("User not found");
    const organizationId = user.organization.toString();
    const organization = await OrganizationModel.findById(organizationId);
    if (!organization) throw new Error("Organization not found");
    return {
        ...organization.toJSON(),
        users: organization.users.map((user) => user.toString()),
    }
};

export const upsertOrganization = async ({ domain }: { domain: string }) => {
    const organization = await OrganizationModel.findOne({ domain }).exec();
    if (organization) return organization;
    const newOrganization = await OrganizationModel.create({
        domain,
        name: domain.split(".")[0],
        users: [],
        description: "We are a new organization",
    });
    return newOrganization;
};
