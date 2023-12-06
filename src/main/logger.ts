import { constants } from './constants';

export class Logger {
  static log(message: string): void {
    console.log(`[${constants.common.appId}] ${message}`);
  }

  static error(message: string): void {
    console.error(`[${constants.common.appId}] ${message}`);
  }

  static warn(message: string): void {
    console.warn(`[${constants.common.appId}] ${message}`);
  }
}
