import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://github.com/metonym/vite-plugin-gh-pages
import { ghPages } from "vite-plugin-gh-pages";
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
