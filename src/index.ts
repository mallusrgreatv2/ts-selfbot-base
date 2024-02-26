import "dotenv/config";

import { fromZodError } from "zod-validation-error";
import { CommandParser, EventParser } from "./parsers.js";
import Selfbot from "./structures/client.js";
import Handler from "./structures/handler.js";

const client = new Selfbot();

new Handler({
  selfbot: client,
  rootDir: "commands",
  run: (cmd, dir) => {
    const parsed = CommandParser.safeParse(cmd);
    if (!parsed.success) {
      client.logger.error(
        `Issues detected in command ${dir}: ${fromZodError(parsed.error)}`
      );
      return;
    }
    client.commands.set(parsed.data.name, parsed.data);
    client.logger.info(`Registered command ${parsed.data.name} (${dir})`);
  },
});

new Handler({
  selfbot: client,
  rootDir: "events",
  run: (cmd, dir) => {
    const parsed = EventParser.safeParse(cmd);
    if (!parsed.success) {
      client.logger.error(
        `Issues detected in event: ${fromZodError(parsed.error)}`
      );
      return;
    }
    client.on(parsed.data.name, (...args) => parsed.data.run(client, ...args));
    client.logger.info(`Registered event ${parsed.data.name} (${dir})`);
  },
});
client.start();
