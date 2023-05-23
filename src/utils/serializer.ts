export class Serializer {
  public static serialize(value: unknown): string {
    switch (typeof value) {
      case 'string':
        return value;

      case 'bigint':
      case 'number':
      case 'boolean':
        return value.toString();

      case 'object':
        return JSON.stringify(value);

      default:
        throw new Error(`Unknown type: ${typeof value}`);
    }
  }

  public static deserialize<T>(value: string): T {
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      throw new Error(`Failed to deserialize value: ${value}`);
    }
  }
}
