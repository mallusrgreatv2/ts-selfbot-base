import console from "node:console";
import chalk from "chalk";
export default class Logger {
  private time() {
    return `${chalk.bgCyan.white(
      new Date().toLocaleString().replace(",", "")
    )} |`;
  }
  private formats = {
    info: chalk.whiteBright.bgBlue("INFO"),
    warning: chalk.whiteBright.bgYellow("WARNING"),
    error: chalk.whiteBright.bgRed("ERROR"),
  };
  info(...data: unknown[]) {
    data.forEach((msg) => {
      if (typeof msg === "string") {
        console.log(`${this.time()} ${this.formats.info} ${msg}`);
        return;
      }
      console.log(`${this.time()} ${this.formats.info}:`);
      console.log(msg);
    });
  }
  warning(...data: unknown[]) {
    data.forEach((msg) => {
      if (typeof msg === "string") {
        console.log(`${this.time()} ${this.formats.warning} ${msg}`);
        return;
      }
      console.log(`${this.time()} ${this.formats.warning}:`);
      console.log(msg);
    });
  }
  error(...data: unknown[]) {
    data.forEach((msg) => {
      if (typeof msg === "string") {
        console.log(`${this.time()} ${this.formats.error} ${msg}`);
        return;
      }
      console.log(`${this.time()} ${this.formats.error}:`);
      console.log(msg);
    });
  }
}
