
export function stringifyArray (args: unknown[], maxLen?: number): string {
  return JSON.stringify(
    args.map(arg => stringify(arg, maxLen))
  )
}

export const stringify = (arg: unknown, maxLen?: number): string => {
  const json = JSON.stringify(arg)
  if (maxLen === undefined || json.length <= maxLen) {
    return json
  }
  return `${json.substring(0, maxLen * 0.8)}[...]${json.substring(json.length - maxLen * 0.2)}`
}
