import { OrganizationModel } from "../models/organization.model";
import { QuestionModel } from "../models/question.model";
import { UserModel } from "../models/user.model";
import { getQuestion } from "./question.service";


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

export const getOrganizationQuestions = async ({ organizationId }: { organizationId: string }) => {
    const organization = await OrganizationModel.findById(organizationId, { users: 1 }).exec();
    if (!organization) throw new Error("Organization not found");
    const users = organization.users.map((user) => user.toString());
    const questions = await QuestionModel.find({ user: { $in: users } }).exec();
    return questions.map((question) => question.id);
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
