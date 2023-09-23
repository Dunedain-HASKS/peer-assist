import { User, UserBasic, UserInput } from "@/types/user.interface";
import { UserModel } from "../models/user.model";
import { OrganizationModel } from "../models/organization.model";
import bcrypt from "bcrypt";
import { upsertOrganization } from "./organization.service";

export const getUsers = async ({ query }: { query: string }): Promise<string[]> => {
    const regex = new RegExp(query, 'i');
    const users = await UserModel.find({username: regex}, { _id: 1 });
    return users.map((user) => String(user._id));
};

export const getUser = async ({ userId }: { userId: string }): Promise<UserBasic> => {
    const user = await UserModel.findById(userId, {
        _id: 1, username: 1, organization: 1
    });
    if (!user) throw new Error("User not found");
    const organization = await OrganizationModel.findById(user.organization, { _id: 1, name: 1 });
    if (!organization) throw new Error("Organization not found");
    return {
        _id: String(user._id),
        username: user.username,
        organization: {
            name: organization.name
        }
    };
};

export const getProfile = async ({ userId }: { userId: string }) => {
    const user = await UserModel.findById(userId);
    if (!user) throw new Error("Profile not found");
    const organization = await OrganizationModel.findById(user.organization, { _id: 1, name: 1, description: 1 });
    if (!organization) throw new Error("Organization not found");
    return {
        ...castDocumentToUser(user),
        organization: {
            _id: String(organization._id),
            name: organization.name,
            description: organization.description,
        }
    };
};

export const createUser = async ({ user_input }: { user_input: UserInput }): Promise<User> => {
    const domain = user_input.email.split("@")[1];
   const organization =  await upsertOrganization({ domain });
    
    const user = await UserModel.create({
        ...user_input,
        password: await bcrypt.hash(user_input.password, 10),
        registered: new Date(),
        questions: [],
        answers: [],
        upvote: 0,
        organization: organization._id,
    });

    if (!user) throw new Error("User not created");

    await OrganizationModel.findByIdAndUpdate(organization._id, {
        $push: {
            users: user._id,
        }
    });

    return castDocumentToUser(user);
};

export const updateUser = async ({ userId, user_input }: { userId: string, user_input: UserInput }): Promise<User> => {
    const user = await UserModel.findByIdAndUpdate(userId, user_input, { new: true });
    if (!user) throw new Error("User not updated");
    return castDocumentToUser(user);
};

export const deleteUser = async ({ userId }: { userId: string }) => {
    await UserModel.findByIdAndDelete(userId);
    return true;
};

function castDocumentToUser(user: import("mongoose").Document<unknown, {}, User> & UserInput & { organization: string | import("mongoose").Schema.Types.ObjectId; questions: string[] | import("mongoose").Schema.Types.ObjectId[]; answers: string[] | import("mongoose").Schema.Types.ObjectId[]; registered: Date; upvote: number; } & { _id: import("mongoose").Types.ObjectId; }) {
    return {
        ...user.toJSON(),
        organization: String(user.organization),
        questions: user.questions.map((question) => String(question)),
        answers: user.answers.map((answer) => String(answer)),
        registered: new Date(user.registered),
    };
}
