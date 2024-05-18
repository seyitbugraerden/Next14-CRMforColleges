"use client";
import "@/styles/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="-2 dark:text-bodydark bg-[#F6F2FF]">
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
