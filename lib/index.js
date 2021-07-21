"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
/**
 * logger
 * @param severity type of log, eg: error, success, info and debug
 * @param source source of the log, info to help indetify where the log is coming from
 * @param message message to log out
 */
var logger = function (severity, source, message) {
    switch (severity) {
        case "error":
            console.log(chalk_1.default.gray(process.uptime()) + "s  [" + chalk_1.default.red("error") + "]  [" + chalk_1.default.red(source) + "]  " + chalk_1.default.red(message));
            break;
        case "success":
            console.log(chalk_1.default.gray(process.uptime()) + "s  [" + chalk_1.default.green("success") + "]  [" + chalk_1.default.green(source) + "]  " + chalk_1.default.green(message));
            break;
        case "info":
            console.log(chalk_1.default.gray(process.uptime()) + "s  [" + chalk_1.default.magenta("info") + "]  [" + chalk_1.default.magenta(source) + "]  " + chalk_1.default.magenta(message));
            break;
        case "debug":
            console.log(chalk_1.default.gray(process.uptime()) + "s  [" + chalk_1.default.cyan("debug") + "]  [" + chalk_1.default.cyan(source) + "]  " + chalk_1.default.cyan(message));
            break;
        case "default":
            console.log(chalk_1.default.gray(process.uptime()) + "s  [" + chalk_1.default.yellow(severity) + "]  [" + chalk_1.default.yellow(source) + "]  " + chalk_1.default.yellow(message));
            break;
    }
};
exports.default = logger;
