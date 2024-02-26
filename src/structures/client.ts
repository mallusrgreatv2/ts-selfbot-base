import { Client, Collection } from "discord.js-selfbot-v13";
import { fromZodError } from "zod-validation-error";
import { CommandParser, EnvTokenParser } from "../parsers.js";
import Logger from "./logger.js";
import { z } from "zod";
import config from "../../config.json" assert { type: "json" };
export default class Selfbot extends Client {
  logger = new Logger();
  config = config;
  commands = new Collection<string, z.infer<typeof CommandParser>>();
  constructor() {
    super({
      allowedMentions: {
        repliedUser: true,
        roles: [],
        users: [],
      },
    });
  }
  start() {
    const token = process.env.ACCOUNT_TOKEN;
    const parsed = EnvTokenParser.safeParse(token);
    if (!parsed.success) {
      this.logger.error(
        `Issues detected in token: ${fromZodError(parsed.error)}`
      );
      process.exit();
    }
    this.login(token);
  }
}
