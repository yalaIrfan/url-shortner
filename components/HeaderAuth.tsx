"use client";

import React from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function HeaderAuth() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex gap-4">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </>
      ) : (
        <UserButton />
      )}
    </div>
  );
}
