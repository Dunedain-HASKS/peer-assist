"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { loginAction, verifyAction } from "./action";

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
        if (stored_session.token) {
            setSession(stored_session);
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
    };


    return {
        session,
        login,
        logout,
        isLoading,
        error,
    };
};