import { ConnectionState } from 'core/enums/connectionState';

export class Client {
  private _connectionState: ConnectionState = ConnectionState.IDLE;
  private _baseURL: URL;

  public constructor(url: string | URL) {
    this._baseURL = typeof url === 'string' ? new URL(url) : url;
  }

  public fetch<T>(
    path?: string,
    body?: Record<string, unknown>,
    options?: RequestInit
  ) {
    const input = new URL(this._baseURL);

    if (path != null) {
      input.pathname = path;
    }

    const controller = new AbortController();
    const init: RequestInit = {
      ...options,
      signal: controller.signal,
    };

    if (body != null) {
      init.body = JSON.stringify(body);
    }

    const timeoutEvent = setTimeout(() => {
      controller.abort();
    }, 1000 * 30);

    return fetch(input.toString(), init)
      .then((value) => {
        this._connectionState = value.ok
          ? ConnectionState.COMPLETED
          : ConnectionState.ERROR;
        return value.json() as Promise<T>;
      })
      .catch(() => {
        this._connectionState = ConnectionState.ERROR;
      })
      .finally(() => {
        clearTimeout(timeoutEvent);
      });
  }

  public get<T>(
    path?: string,
    params?: Record<string, unknown>,
    options?: RequestInit
  ) {
    return this.fetch<T>(path, params, {
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
    options?: RequestInit
  ) {
    return this.fetch<T>(path, params, {
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
    options?: RequestInit
  ) {
    return this.fetch<T>(path, params, {
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
    options?: RequestInit
  ) {
    return this.fetch<T>(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      ...options,
    });
  }

  public get connectionState() {
    return this._connectionState;
  }
}
