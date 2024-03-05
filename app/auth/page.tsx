"use client";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { KeyRound } from "lucide-react";
import React from "react";

export default function page() {
  const handleLoginWithOAuth = (provider: "google" | "github") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: Location.origin + "/auth/callback",
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 border rounded-md p-5 space-y-5">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p>Signup Today </p>
        <Button
          onClick={() => handleLoginWithOAuth("google")}
          variant={"outline"}
          className="block w-full"
        >
          Google
        </Button>
        <Button
          onClick={() => handleLoginWithOAuth("github")}
          variant={"outline"}
          className="block w-full"
        >
          Github
        </Button>
      </div>
    </div>
  );
}
