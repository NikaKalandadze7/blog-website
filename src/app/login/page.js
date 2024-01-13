"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <div className="container m-auto w-full h-screen flex justify-center items-center">
      {session ? (
        <div className="flex justify-center gap-12 flex-col">
          <h3 className="text-xl">{session.user.name}</h3>
          <button
            onClick={() => signOut()}
            className="border-gray-300 border-[1px] p-4 rounded-full"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="border-gray-300 border-[1px] p-4 rounded-full"
        >
          Press to Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
