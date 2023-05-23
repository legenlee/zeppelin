import { Nullable } from '../../types/nullable';
import { StatusCode } from '../enums/statusCode';
import { Response } from '../models/response';
import { ResponseHeaders } from '../types/responseHeaders';

export class HttpError<T = void> extends Error {
  private _response: Response<T>;

  public constructor(message: string, response: Response<T>) {
    super(message);
    this._response = response;
  }

  public get response(): Response<T> {
    return this._response;
  }

  public get statusCode(): Nullable<StatusCode> {
    return this._response.statusCode;
  }

  public get headers(): ResponseHeaders {
    return this._response.headers;
  }

  public get body(): T {
    return this._response.body;
  }

  public get rawBody(): string {
    return this._response.rawBody;
  }

  public get isClientError(): boolean {
    return this._response.isClientError;
  }

  public get isServerError(): boolean {
    return this._response.isServerError;
  }

  public get isTimeoutError(): boolean {
    return this._response.isTimeoutError;
  }
}
