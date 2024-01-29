import SelfbotEvent from "../structures/event.js";

export default new SelfbotEvent({
  name: "messageCreate",
  async run(selfbot, message) {
    if (
      message.author.id !== selfbot.user?.id ||
      !message.content.startsWith(selfbot.config.prefix)
    )
      return;
    const [cmd, ...args] = message.content
      .slice(selfbot.config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = selfbot.commands.get(cmd);
    if (!command) return;
    try {
      await command.run({
        args,
        message,
        selfbot,
      });
    } catch (err) {
      selfbot.logger.error(`Issue running command ${cmd}`, err);
    }
  },
});
