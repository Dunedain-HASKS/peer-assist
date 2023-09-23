"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { loginAction, verifyAction } from "./action";
import { useRouter } from "next/navigation";

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
        const stored_session = JSON.parse(localStorage.getItem("session") as string);
        if (stored_session?.token) {
            setSession(stored_session);
        }
        else {
            setSession({} as SessionInterface);
        }
    }, []);
    useEffect(() => {
        if (session.token)
            localStorage.setItem("session", JSON.stringify(session));
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
    const router = useRouter();
    const login = async ({ username, password }: { username: string, password: string }) => {
        const { session, message } = await loginAction({ username, password });
        setIsLoading(false);
        if (session) {
            setError("");
            setSession(session);
        }
        else {
            setError(message);
            setSession({} as SessionInterface);
        }
        return {
            session,
            message,
        };
    }

    const logout = async () => {
        setSession({} as SessionInterface);
        localStorage.removeItem("session");
        router.push("/");
    };


    return {
        session,
        login,
        logout,
        isLoading,
        error,
    };
};