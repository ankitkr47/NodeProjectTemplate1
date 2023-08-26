const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : [${label}] : ${level} : ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: "Checking Logger!" }),
    timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    // new transports.File({ filename: "AllLogs.log" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;