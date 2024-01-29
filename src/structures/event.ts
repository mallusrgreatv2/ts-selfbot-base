import { ClientEvents } from "discord.js-selfbot-v13";
import Selfbot from "./client.js";
interface IEvent<K extends keyof ClientEvents> {
  name: K;
  run: (selfbot: Selfbot, ...args: ClientEvents[K]) => unknown;
}
export default class SelfbotEvent<K extends keyof ClientEvents> {
  name: K;
  run: (selfbot: Selfbot, ...rest: ClientEvents[K]) => unknown;
  constructor(options: IEvent<K>) {
    this.name = options.name;
    this.run = options.run;
  }
}
