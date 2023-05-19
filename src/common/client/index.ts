import http from 'http';
import https, { RequestOptions } from 'https';
import { Response } from './models/response';
import { Serializer } from './helpers/serializer';

export class Client {
  private _url: URL;

  private constructor(url: string | URL) {
    this._url = new URL(url.toString());
  }

  public get url(): URL {
    return this._url;
  }

  private get _clientModule() {
    switch (this._url.protocol) {
      case 'https:':
        return https;

      case 'http:':
        return http;

      default:
        throw new Error(`Unknown protocol: ${this._url.protocol}`);
    }
  }

  private _promisifiedRequest<T>(
    path: string,
    options?: RequestOptions,
    body?: string
  ): Promise<Response<T>> {
    return new Promise((resolve, reject) => {
      const request = this._clientModule.request(
        this._url + path,
        { ...options },
        (incoming) => {
          let data = '';

          incoming.on('data', (chunk) => {
            data += chunk;
          });

          incoming.on('end', () => {
            const response = new Response<T>(data, incoming.statusCode);
            resolve(response);
          });

          incoming.on('error', (error) => {
            reject(error);
          });
        }
      );

      if (body != null) {
        request.write(body);
      }

      request.end();
    });
  }

  public async get<T>(path: string): Promise<Response<T>> {
    return this._promisifiedRequest<T>(path, { method: 'GET' });
  }

  public async post<T>(path: string, body: unknown): Promise<Response<T>> {
    const serializedBody = Serializer.serialize(body);

    return this._promisifiedRequest<T>(
      path,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(serializedBody),
        },
      },
      serializedBody
    );
  }

  public async put<T>(path: string, body: unknown): Promise<Response<T>> {
    const serializedBody = Serializer.serialize(body);

    return this._promisifiedRequest<T>(
      path,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(serializedBody),
        },
      },
      serializedBody
    );
  }

  public async delete<T>(path: string): Promise<Response<T>> {
    return this._promisifiedRequest<T>(path, { method: 'DELETE' });
  }
}
