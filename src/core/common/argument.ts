export class Argument<T = string> {
  private _name: string;
  private _value: T;
  private _prefix = '--';
  private _hidden: boolean;

  public constructor(name: string, value: T, prefix = '--', hidden = false) {
    this._name = name;
    this._value = value;
    this._prefix = prefix;
    this._hidden = hidden;
  }

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

  public setHidden(value: boolean) {
    this._hidden = value;
    return this;
  }

  public toString(equalize = false) {
    return `${this._prefix}${this._name}${equalize ? '=' : ' '}${this._value}`;
  }
}
