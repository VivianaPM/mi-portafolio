import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    silent: false,
    passWithNoTests: true,
    logHeapUsage: true,
  },
});
