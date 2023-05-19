import { Serializer } from 'common/serializer';
import { Nullable } from 'common/types/nullable';
import { StatusCode } from '../enums/statusCode';

export class Response<T> {
  private _statusCode?: StatusCode;
  private _rawBody: string;
  private _body: T;

  public constructor(body: string, statusCode?: StatusCode) {
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

  public get isTimeout(): boolean {
    return this._statusCode == null;
  }

  public get isError(): boolean {
    return this.isClientError || this.isServerError || this.isTimeout;
  }

  public toString(): string {
    return this._rawBody;
  }

  public toJSON(): T {
    return this._body;
  }
}
