"use client";

import { createContext, useContext } from "react";

// Defaults to true so components still animate normally if ever rendered
// outside the provider (e.g. in isolation).
const AppReadyContext = createContext(true);

export const useAppReady = () => useContext(AppReadyContext);

export default AppReadyContext;
