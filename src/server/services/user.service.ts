import { UserInput } from "@/types/user.interface";

export const getUsers = async ({ query }: { query: string }) => {
    //  
};

export const getUser = async ({ userId }: { userId: string }) => {
    //  
};

export const getProfile = async ({ userId }: { userId: string }) => {
    // 
};

export const createUser = async ({ user }: { user: UserInput }) => {
    //
};

export const updateUser = async ({ userId, user }: { userId: string, user: UserInput }) => {
    // 
};

export const deleteUser = async ({ userId }: { userId: string }) => {
    // 
};