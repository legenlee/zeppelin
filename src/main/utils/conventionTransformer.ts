export class ConventionTransformer {
  public static kebabCaseToCamelCase(value: string): string {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  public static kebabCaseToSnakeCase(value: string): string {
    return value.replace(/-/g, '_');
  }

  public static kebabCaseToPascalCase(value: string): string {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  public static camelCaseToSnakeCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }

  public static camelCaseToPascalCase(value: string): string {
    return value.replace(/^[a-z]/, (letter) => letter.toUpperCase());
  }

  public static camelCaseToKebabCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }

  public static snakeCaseToPascalCase(value: string): string {
    return value.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  public static snakeCaseToKebabCase(value: string): string {
    return value.replace(/_/g, '-');
  }

  public static snakeCaseToCamelCase(value: string): string {
    return value.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  public static pascalCaseToKebabCase(value: string): string {
    return value.replace(/([A-Z])/g, (_, letter) => `-${letter.toLowerCase()}`);
  }

  public static pascalCaseToCamelCase(value: string): string {
    return value.replace(/^[A-Z]/, (letter) => letter.toLowerCase());
  }

  public static pascalCaseToSnakeCase(value: string): string {
    return value.replace(/([A-Z])/g, (_, letter) => `_${letter.toLowerCase()}`);
  }
}
