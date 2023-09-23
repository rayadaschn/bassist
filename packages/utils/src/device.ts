import { getUserAgent } from './ua'

/**
 * Checks if the code is being executed in a browser environment
 *
 * @category device
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * Checks if the code is being executed in a server environment
 *
 * @category device
 */
export const isServer = !isBrowser

/**
 * Regular expression pattern to match mobile device user agents
 *
 * @category device
 */
export const mobileDevicesRegExp = /iPhone|phone|android|iPod|pad|iPad/i

/**
 * Checks if the code is being executed on a mobile device
 *
 * @category device
 */
export function isMobile() {
  if (!isBrowser) return false
  return mobileDevicesRegExp.test(getUserAgent())
}

/**
 * Checks if the code is being executed on a desktop device
 *
 * @category device
 */
export function isDesktop() {
  if (!isBrowser) return false
  return !isMobile()
}

/**
 * Checks if the code is running on an Android device
 *
 * @category device
 */
export const isAndroid = /Android/i.test(getUserAgent())

/**
 * Checks if the code is running on an iOS device
 *
 * @category device
 */
export const isIOS = /iPhone|iPod|iPad|iOS/i.test(getUserAgent())

/**
 * Checks if the code is running in a Uni-App environment
 *
 * @category device
 */
export const isUniApp = /uni-app|html5plus/.test(getUserAgent())

/**
 * Checks if the code is running in a WeChat (Weixin) environment
 *
 * @category device
 */
export const isWeixin = /MicroMessenger/i.test(getUserAgent())

/**
 * Checks if the code is running in a QQ environment
 *
 * @category device
 */
export const isQQ = /\sQQ|mqqbrowser|qzone|qqbrowser/i.test(getUserAgent())

/**
 * Checks if the code is running in a QQ Browser environment
 *
 * @category device
 */
export const isQQBrowser = /mqqbrowser|qqbrowser/i.test(getUserAgent())

/**
 * Checks if the code is running in a Qzone environment
 *
 * @category device
 */
export const isQzone = /qzone\/.*_qz_([\d.]+)/i.test(getUserAgent())

/**
 * Checks if the code is running in a Weibo environment
 *
 * @category device
 */
export const isWeibo = /(weibo).*weibo__([\d.]+)/i.test(getUserAgent())

/**
 * Checks if the code is running in a Baidu Box App environment
 *
 * @category device
 */
export const isBaidu = /(baiduboxapp)\/([\d.]+)/i.test(getUserAgent())

/**
 * @category device
 */
interface DeviceResizeWatcherOptions {
  // Executed when the page load done
  immediate: boolean
}

/**
 * Watches for page resize or orientation change events and executes the callback
 *
 * @param callback - The callback function to be executed
 *
 * @param options - The options for the resize watcher
 *       `immediate`: Determines whether the callback should be immediately executed on page load
 *
 * @category device
 */
export function watchResize(
  callback: () => void,
  { immediate }: DeviceResizeWatcherOptions = { immediate: true },
) {
  if (!isBrowser) return
  if (immediate) {
    window.addEventListener('load', callback, false)
  }
  window.addEventListener(
    'orientationchange' in window ? 'orientationchange' : 'resize',
    callback,
    false,
  )
}
