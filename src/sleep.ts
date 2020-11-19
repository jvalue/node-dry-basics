/**
 * Return promise after given amount of milliseconds. Await the promise to simulate a sleep.
 * @param ms time in milliseconds
 */
export async function sleep (ms: number): Promise<void> {
  return await new Promise<void>(resolve => setTimeout(resolve, ms))
}
