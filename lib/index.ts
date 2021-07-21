import chalk from 'chalk';

/**
 * logger
 * @param severity type of log, eg: error, success, info and debug
 * @param source source of the log, info to help indetify where the log is coming from
 * @param message message to log out
 */
const logger = (severity: string, source: string, message: string) => {

  switch (severity) {
    case "error":
      console.log(`${chalk.gray(process.uptime())}s  [${chalk.red("error")}]  [${chalk.red(source)}]  ${chalk.red(message)}`);
    break;
    case "success":
      console.log(`${chalk.gray(process.uptime())}s  [${chalk.green("success")}]  [${chalk.green(source)}]  ${chalk.green(message)}`);
    break;
    case "info":
      console.log(`${chalk.gray(process.uptime())}s  [${chalk.magenta("info")}]  [${chalk.magenta(source)}]  ${chalk.magenta(message)}`);
    break;
    case "debug":
      console.log(`${chalk.gray(process.uptime())}s  [${chalk.cyan("debug")}]  [${chalk.cyan(source)}]  ${chalk.cyan(message)}`);
    break;
    case "default":
      console.log(`${chalk.gray(process.uptime())}s  [${chalk.yellow(severity)}]  [${chalk.yellow(source)}]  ${chalk.yellow(message)}`);
    break;
  }

}

export default logger;