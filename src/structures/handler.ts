import Selfbot from "./client.js";
import listdir from "../functions/listdir.js";
import { getDefault } from "../functions/getDefault.js";
export default class Handler {
  rootDir: string;
  bot: Selfbot;
  constructor(options: {
    selfbot: Selfbot;
    rootDir: string;
    run: (defaultReturn: unknown, fileName?: string) => unknown;
  }) {
    this.rootDir = options.rootDir;
    this.bot = options.selfbot;
    const files = listdir(this.rootDir);
    files.forEach(async (file) => {
      const def = await getDefault(file);
      try {
        await options.run(
          def,
          `${(
            file.substring(
              0,
              file.lastIndexOf(".") < 0 ? file.length : file.lastIndexOf(".")
            ) + ".ts"
          ).replace(/dist/, "src")}`
        );
      } catch (err) {
        this.bot.logger.error(
          `Issue when loading handler at file ${
            file.substring(
              0,
              file.lastIndexOf(".") < 0 ? file.length : file.lastIndexOf(".")
            ) + ".ts"
          }`,
          err
        );
      }
    });
  }
}
