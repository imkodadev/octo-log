/**
 * logger
 * @param severity type of log, eg: error, success, info and debug
 * @param source source of the log, info to help indetify where the log is coming from
 * @param message message to log out
 */
declare const logger: (severity: string, source: string, message: string) => void;
export default logger;
