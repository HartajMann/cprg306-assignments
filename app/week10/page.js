"use client";
import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="absolute top-0">
      <h1 className="text-xl font-bold  mt-5 mb-5">Shopping List App</h1>
        {user ? (
          <>
            <p>Signed in as {user.displayName} ({user.email})</p>
            <p><Link href="../week8/shopping-list" className="hover:text-slate-500">Continue to your Shopping List</Link></p>
            <button onClick={handleLogout} className="hover:text-slate-500">Logout</button>
          </>
        ) : (
          <button onClick={handleLogin} className="hover:text-slate-500">Login with GitHub</button>
        )}
      </div>
    </div>
  );
};

export default Page;

