import { isEmpty } from './validators'

/**
 * Reads an environment variable, and logs it.
 * If the environment variable cannot be found, the process is exited (die).
 * @param envName the name of the environment variable to be read
 */
export function readEnvOrDie (envName: string): string {
  const env = process.env[envName]
  if (isEmpty(env)) {
    console.error(`Required environment variable ${envName} is not defined or empty`)
    console.error('Unable to proceed with service')
    process.exit(-2)
  }

  console.info(`[Environment Variable] ${envName} = ${env}`)
  return env
}
