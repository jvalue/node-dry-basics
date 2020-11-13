
/**
 * Stringifies an array and cuts out text from elements if it is longer than maxLen.
 * Can be used for logging to reduce clutter.
 * @param arg the array of objects to be logged.
 * @param maxLen if length of stringified arg is longer than maxLen, then we cut it short.
 */
export function stringifyArray (args: unknown[], maxLen?: number): string {
  return JSON.stringify(
    args.map(arg => stringify(arg, maxLen))
  )
}

/**
 * Stringifies an object and cuts out text if it is longer than maxLen.
 * Can be used for logging to reduce clutter.
 * @param arg the object to be logged.
 * @param maxLen if length of stringified arg is longer than maxLen, then we cut it short.
 */
export const stringify = (arg: unknown, maxLen?: number): string => {
  const json = JSON.stringify(arg)
  if (maxLen === undefined || json.length <= maxLen) {
    return json
  }
  return `${json.substring(0, maxLen * 0.8)}[...]${json.substring(json.length - maxLen * 0.2)}`
}
