"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Loader from "@/components/common/Loader";
import "@/styles/style.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const params = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [params]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <div className="-2 dark:text-bodydark bg-[#F6F2FF]">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
