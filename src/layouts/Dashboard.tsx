import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
