import { OrganizationModel } from "../models/organization.model";


export const getOrganization = async ({ organizationId }: { organizationId: string }) => {
    const organization = await OrganizationModel.findById(organizationId);
    if (!organization) throw new Error("Organization not found");
    return organization;
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
