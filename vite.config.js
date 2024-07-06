import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import ghPages from "./scripts/gh-pages";
import Config from "./config.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    base: `/${Config.repoName}/`,
    plugins: [react(), ghPages()],
  };
});
