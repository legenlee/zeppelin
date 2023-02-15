export class Argument<T> {
  private constructor(
    private _name: string,
    private _value: T,
    private _prefix = '--'
  ) {}

  public get prefix() {
    return this._prefix;
  }

  public get name() {
    return this._name;
  }

  public get value() {
    return this._value;
  }

  public setPrefix(value: string) {
    this._prefix = value;
    return this;
  }

  public setValue(value: T) {
    this._value = value;
    return this;
  }

  public toString(equalize = false) {
    return `${this._prefix}${this._name}${equalize ? '=' : ' '}${this._value}`;
  }

  public static create<T = boolean>(name: string, value?: T) {
    return new Argument<T>(name, value);
  }
}
