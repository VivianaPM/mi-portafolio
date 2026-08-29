import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Configuración para manejar archivos YAML
  assetsInclude: ["**/*.yml", "**/*.yaml"],
  // Resolver alias para facilitar las importaciones
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    silent: false,
    passWithNoTests: true,
    logHeapUsage: true,
  },
});
