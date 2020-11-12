import { isEmpty } from './validators'

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
