import SelfbotCommand from "../../structures/command.js";

export default new SelfbotCommand({
  name: "ping",
  description: "Pong",
  async run({ selfbot, message }) {
    await message.reply(`Pong! ${selfbot.ws.ping}ms`);
  },
});
