import { Message } from "discord.js-selfbot-v13";
import Selfbot from "./client.js";
interface ICommand {
  name: string;
  description: string;
  run: (options: {
    selfbot: Selfbot;
    message: Message;
    args: string[];
  }) => unknown;
}
export default class SelfbotCommand {
  name: string;
  description: string;
  run: (options: {
    selfbot: Selfbot;
    message: Message;
    args: string[];
  }) => unknown;
  constructor(options: ICommand) {
    this.name = options.name;
    this.description = options.description;
    this.run = options.run;
  }
}
