"use client";

import React, { useState } from "react";
import AppReadyContext from "@/components/app-ready-context";
import Loader from "@/components/loader";

export default function AppReadyProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <AppReadyContext.Provider value={ready}>
      <Loader onReveal={() => setReady(true)} />
      {children}
    </AppReadyContext.Provider>
  );
}
