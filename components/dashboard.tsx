"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  if (!session) {
    if (status !== "loading") {
      redirect("/api/auth/signin");
    }
  }
  if (session) {
    return (
      <>
        <div className="bg-white mt-20 flex h-screen">
          Hey {session?.user?.name} welcome to you dashboard
        </div>
      </>
    );
  }
}
