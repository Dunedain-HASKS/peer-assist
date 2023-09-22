"use client";
import { UserBasic } from "@/types/user.interface";
import { createContext, useContext, useEffect, useState } from "react";

export interface SessionInterface {
    token: string;
};

const SessionContext = createContext({
    session: {} as SessionInterface,
    setSession: (session: SessionInterface) => { },
});

export default function SessionProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<SessionInterface>({} as SessionInterface);
    useEffect(() => {
        const session = localStorage.getItem("session");
        if (session) {
            setSession(JSON.parse(session));
        }
    }, []);
    useEffect(() => {
        if (session)
            localStorage.setItem("session", JSON.stringify(session));
        else
            localStorage.removeItem("session");
    }, [session]);

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export function useAuth() {
    const { session, setSession } = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const loginWithUserName = async ({ username, password }: { username: string, password: string }) => {
        // const { session, message } = await createToken({ name, password });
        setIsLoading(false);
        if (session) {
            setError("");
            setSession(session);
        }
        else {
            // setError(message);
            setSession({} as SessionInterface);
        }
        // return {
        //     session,
        //     message,
        // };
    };

    const loginWithEmail = async ({ email, password }: { email: string, password: string }) => {
        // const { session, message } = await createToken({ name, password });
        setIsLoading(false);
        if (session) {
            setError("");
            setSession(session);
        }
        else {
            // setError(message);
            setSession({} as SessionInterface);
        }
        // return {
        //     session,
        //     message,
        // };
    };

    const logout = async () => {
        // await deleteSession({ id: session._id });
        setSession({} as SessionInterface);
    };

    return {
        session,
        login: loginWithUserName,
        logout,
        isLoading,
        error,
    };
};