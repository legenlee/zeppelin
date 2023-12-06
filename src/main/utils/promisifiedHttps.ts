import { IncomingMessage } from 'http';
import https from 'https';
import fs from 'fs';
import { Logger } from '../logger';

export const promisifiedHttps = {
  get: (url: string): Promise<IncomingMessage> => {
    return new Promise((resolve, reject) => {
      https
        .get(url, (response) => {
          resolve(response);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  },
  install: (url: string, path: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(path);

      https
        .get(url, (response) => {
          response.pipe(file);

          file.on('finish', () => {
            file.close();
            resolve();
          });

          file.on('error', (err) => {
            Logger.error(err.message);
            fs.unlink(path, () => {
              reject();
            });
            reject();
          });
        })
        .on('error', (err) => {
          Logger.error(err.message);
          reject(err);
        });
    });
  },
};
