import React, { useEffect, useCallback } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/router';

const UserComponent = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleLogin = useCallback(async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Login failed", error);
        }
    }, [gitHubSignIn]);

    useEffect(() => {
        const loginIfNoUser = async () => {
            if (!user) {
                await handleLogin();
            } else {
                router.push('/shopping-list');
            }
        };
        loginIfNoUser();
    }, [user, handleLogin, router]);

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    if (user) {
        return (
            <div>
                <p>Welcome, {user.displayName} ({user.email})</p>
                <button onClick={handleLogout}>Logout</button>
                <a href="/app/week8/shopping-list">Go to Shopping List</a>
            </div>
        );
    }

    return <div>Loading...</div>;
};

export default UserComponent;
