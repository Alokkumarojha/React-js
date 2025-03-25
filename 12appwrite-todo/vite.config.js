import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Ensure Vercel picks the correct output folder
  },
  server: {
    port: 3000,
  },
});
