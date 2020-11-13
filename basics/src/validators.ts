/**
 * Type guard checking if x is a number.
 * @param x
 */
export function isNumber (x: unknown): x is number {
  return typeof x === 'number'
}

/**
 * Type guard checking if x is a string.
 * @param x
 */
export function isString (x: unknown): x is string {
  return typeof x === 'string'
}

/**
 * Type guard checking if value is undefined or empty.
 * @param value
 */
export function isEmpty (value: string | undefined): value is undefined {
  return value === undefined || value === ''
}

/**
 * Type guard checking if x is an object.
 * @param x
 */
export function isObject (x: unknown): x is object {
  return typeof x === 'object'
}

/**
 * Type guard checking if object has property p.
 * @param object the object to be checked
 * @param name name of the property
 */
// Helper function to fix issue that `in` operator as type guard is not widening type with the asserted property key
// See https://github.com/microsoft/TypeScript/issues/21732
export function hasProperty<P extends PropertyKey, O extends object> (object: O, name: P):
object is O & { [K in P]: unknown } {
  return name in object
}
