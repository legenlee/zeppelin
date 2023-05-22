import { Serializer } from 'common/utils/serializer';
import { Nullable } from 'common/types/nullable';
import { StatusCode } from '../enums/statusCode';
import { ResponseHeaders } from '../types/responseHeaders';

export class Response<T> {
  private _statusCode?: StatusCode;
  private _headers: ResponseHeaders;
  private _rawBody: string;
  private _body: T;

  public constructor(
    headers: ResponseHeaders,
    body: string,
    statusCode?: StatusCode
  ) {
    this._headers = headers;
    this._statusCode = statusCode;
    this._rawBody = body;
    this._body = Serializer.deserialize<T>(body);
  }

  public get statusCode(): Nullable<StatusCode> {
    return this._statusCode;
  }

  public get isInformational(): boolean {
    return this._statusCode?.toString().startsWith('1') ?? false;
  }

  public get isSuccess(): boolean {
    return this._statusCode?.toString().startsWith('2') ?? false;
  }

  public get isRedirect(): boolean {
    return this._statusCode?.toString().startsWith('3') ?? false;
  }

  public get isClientError(): boolean {
    return this._statusCode?.toString().startsWith('4') ?? false;
  }

  public get isServerError(): boolean {
    return this._statusCode?.toString().startsWith('5') ?? false;
  }

  public get isTimeoutError(): boolean {
    return this._statusCode == null;
  }

  public get isError(): boolean {
    return this.isClientError || this.isServerError || this.isTimeoutError;
  }

  public get headers(): ResponseHeaders {
    return this._headers;
  }

  public get rawBody(): string {
    return this._rawBody;
  }

  public get body(): T {
    return this._body;
  }
}
