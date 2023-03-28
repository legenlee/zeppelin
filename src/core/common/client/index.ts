import https from 'https';
import fs from 'fs';
import { ConnectionState } from '../enums/connectionState';

export class Client {
  private _connectionState: ConnectionState = ConnectionState.IDLE;
  private _baseURL: URL;

  public constructor(url: string | URL) {
    this._baseURL = typeof url === 'string' ? new URL(url) : url;
  }

  private _promisifiedRequest<T>(
    url: URL,
    data?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    return new Promise<T>((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      const request = https.request(url, { ...options }, (response) => {
        response.on('data', (chunk) => {
          chunks.push(chunk);
        });

        response.on('error', (error) => {
          this._connectionState = ConnectionState.ERROR;
          console.error(error);
          reject(error);
        });

        response.on('end', () => {
          const data = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
          this._connectionState = ConnectionState.COMPLETED;
          resolve(data);
        });
      });

      if (data != null) {
        request.write(data);
      }

      request.end();
    });
  }

  private _promisifiedDownload(
    path: string,
    filepath: string,
    params?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    const url = path != null ? new URL(path, this._baseURL) : this._baseURL;

    return new Promise<void>((resolve, reject) => {
      const file = fs.createWriteStream(filepath);
      const request = https.get(url, { ...options }, (response) => {
        response.pipe(file);
      });

      file.on('finish', () => {
        file.close();
      });

      file.on('error', (error) => {
        reject(error);
      });

      file.on('close', () => {
        resolve();
      });

      if (params != null) {
        request.write(params);
      }

      request.end();
    });
  }

  public async request<T>(
    path?: string,
    data?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    const url = path != null ? new URL(path, this._baseURL) : this._baseURL;
    return await this._promisifiedRequest<T>(url, data, options);
  }

  public get<T>(
    path?: string,
    params?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    return this.request<T>(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      ...options,
    });
  }

  public post<T>(
    path?: string,
    params?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    return this.request<T>(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      ...options,
    });
  }

  public put<T>(
    path?: string,
    params?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    return this.request<T>(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      ...options,
    });
  }

  public delete<T>(
    path?: string,
    params?: Record<string, unknown>,
    options?: https.RequestOptions
  ) {
    return this.request<T>(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      ...options,
    });
  }

  // public download(
  //   path: string,
  //   filepath?: string,
  //   params?: Record<string, unknown>,
  //   options?: https.RequestOptions
  // ) {
  //   return this._promisifiedDownload(path, filepath, params, options);
  // }

  public get connectionState() {
    return this._connectionState;
  }
}
