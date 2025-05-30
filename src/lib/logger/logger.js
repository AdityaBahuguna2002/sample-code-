// import { createLogger, format, transports } from 'winston';
// import path from 'path';

// const logFormat = format.printf(({ level, message, timestamp }) => {
//   return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
// });

// const logger = createLogger({
//   level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
//   format: format.combine(format.timestamp(), logFormat),
//   transports: [
//     new transports.Console(),
//     new transports.File({
//       filename: path.join(process.cwd(), 'logs', 'error.log'),
//       level: 'error',
//     }),
//     new transports.File({
//       filename: path.join(process.cwd(), 'logs', 'combined.log'),
//     }),
//   ],
//   exceptionHandlers: [
//     new transports.File({
//       filename: path.join(process.cwd(), 'logs', 'exceptions.log'),
//     }),
//   ],
//   rejectionHandlers: [
//     new transports.File({
//       filename: path.join(process.cwd(), 'logs', 'rejections.log'),
//     }),
//   ],
// });

// export default logger;
