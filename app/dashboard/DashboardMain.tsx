"use client";

import UserDashboard from "@/components/dashboard";
import { SessionProvider } from "next-auth/react";

export default function DashboardMain(){
 return (
    <>
     <SessionProvider>
        <UserDashboard />
     </SessionProvider>
    </>
 )
}