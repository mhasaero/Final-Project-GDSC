import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">{children}</div>;
}
