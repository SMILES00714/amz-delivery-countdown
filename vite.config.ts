/** Vendors */
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  /** Remove non-react-app envs */
  const devenv = {};
  for (const key in env) {
    if (!key?.includes("REACT_APP_")) {
      delete env[key];
    } else {
      devenv[`import.meta.env.VITE_${key}`] = JSON.stringify(env[key]);
    }
  }

  return {
    define: devenv,
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
