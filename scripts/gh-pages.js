import fs from "fs";
import path from "path";
import gp from "gh-pages";

const getPackageName = () => {
  const pkg_path = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(pkg_path)) return;

  const pkg = JSON.parse(fs.readFileSync(pkg_path, "utf-8"));
  return pkg?.name ?? undefined;
};

console.log(getPackageName());

export const ghPages = (options) => {
  let outDir = "";

  const onError = options?.onError ?? ((error) => console.log(error));

  const onPublish =
    options?.onPublish ??
    (({ outDir, branch }) => {
      console.log(`🎉 Published \`${outDir}\` to branch \`${branch}\`.`);
    });

  return {
    name: "vite:gh-pages",
    apply: "build",
    enforce: "post",
    config(config) {
      if (config.base === undefined) {
        config.base = "/" + getPackageName() + "/";
      }
    },
    configResolved(resolvedConfig) {
      outDir = resolvedConfig.build.outDir;
    },
    async closeBundle() {
      const gpOptions = {
        dotfiles: true,
        branch: "gh-pages",
        nojekyll: true,
        ...options,
      };

      options?.onBeforePublish?.({ ...gpOptions, outDir });

      await gp.publish(outDir, gpOptions, (error) => {
        if (error) return onError(error);
        onPublish({ ...gpOptions, outDir });
      });
    },
  };
};

export default ghPages;
