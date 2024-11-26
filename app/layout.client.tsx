"use client";

import { Fragment } from "react";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Toaster />
      {children}
    </Fragment>
  );
}
