/**
 * Creates a throttled function that only invokes `fn` at most once every `delay` milliseconds.
 * Useful for rate-limiting events that occur faster than desired.
 *
 * @template T The type of the function to throttle.
 * @param {T} fn The function to throttle.
 * @param {number} delay The number of milliseconds to delay invocations of `fn`.
 * @returns {(...args: Parameters<T>) => void} A throttled version of the input function `fn`.
 *
 * @example
 * // Function to be throttled
 * const logMessage = (message) => {
 *   console.log(message);
 * };
 *
 * // Create a throttled version of `logMessage` with a 2-second delay
 * const throttledLog = throttle(logMessage, 2000);
 *
 * // Usage
 * window.addEventListener('resize', () => throttledLog('Window resized!'));
 *
 * // This will log "Window resized!" to the console at most once every 2 seconds,
 * // even if the window is resized multiple times in that period.
 */
export function throttle<T extends (...args: never[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>): void {
    if (timeoutId === null) {
      fn(...args)
      timeoutId = setTimeout(() => {
        timeoutId = null
      }, delay)
    }
  }
}
