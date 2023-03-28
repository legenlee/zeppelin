import https from 'https';

type IncomingResponse = Parameters<
  Exclude<Parameters<typeof https.request>[2], undefined>
>[0];

type IncomingResponseHeaders = IncomingResponse['headers'];

export class Response<T = unknown> {
  public readonly statusCode?: number;
  public readonly header?: IncomingResponseHeaders;
  public readonly body?: T;

  public constructor(incoming: IncomingResponse, data: T) {
    this.statusCode = incoming.statusCode;
    this.header = incoming.headers;
    this.body = data;
  }
}
