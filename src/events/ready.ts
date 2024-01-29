import SelfbotEvent from "../structures/event.js";

export default new SelfbotEvent({
  name: "ready",
  async run(selfbot) {
    selfbot.logger.info(`Connected as ${selfbot.user?.tag}`);
  },
});
