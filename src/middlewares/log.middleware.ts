import * as log4js from 'log4js';

export const logger = log4js.getLogger();
logger.level = 'debug';

export function log(req, res, next) {
  const origin = req.headers?.origin || req.headers?.host;
  console.log('first');
  if (origin) {
    logger.info(`接口【${req.url}】【${req.method}】被【${origin}】调用！`);
  } else {
    logger.info(`接口【${req.url}】【${req.method}】被调用！`);
  }
  next();
}
