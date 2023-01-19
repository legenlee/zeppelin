export class BaseParams {
  public toPlainObject() {
    return Object.assign({}, this) as Record<string, never>;
  }
}
