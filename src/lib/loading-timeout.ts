/**
 * Creates a timer that executes a callback after a specified duration
 * @param callback Function to execute when timer completes
 * @param duration Duration in milliseconds (default: 3500)
 * @returns Cleanup function to clear the timer
 */
export function loadingTimeout(
  callback: () => void,
  duration: number = 3500,
): () => void {
  const timer = setTimeout(() => {
    callback()
  }, duration)

  return () => clearTimeout(timer)
}

/**
 * Creates a promise that resolves after a specified duration
 * @param ms Duration in milliseconds
 * @returns Promise that resolves after the specified duration
 */
export function timingTransition(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
