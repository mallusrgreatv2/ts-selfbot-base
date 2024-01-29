import { getDefault } from "../../functions/getDefault.js";
import listdir from "../../functions/listdir.js";
import { CommandParser } from "../../parsers.js";
import SelfbotCommand from "../../structures/command.js";

export default new SelfbotCommand({
  name: "help",
  description: "Show all commands",
  async run({ message, selfbot }) {
    const files = listdir("commands");
    const commandInfos = await Promise.all(
      files.map((file) =>
        getDefault(file).then((v) => {
          const parsed = CommandParser.safeParse(v);
          if (!parsed.success) return;
          return parsed.data;
        })
      )
    );
    const cmdsString = `\`\`\`${commandInfos
      .map(
        (cmd) => `${selfbot.config.prefix}${cmd?.name} - ${cmd?.description}`
      )
      .join("\n")}\`\`\``;
    await message.reply(cmdsString);
  },
});
