/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

// 这是一个验证工具函数文件 validate.js，主要提供了一系列用于验证数据格式的工具函数。让我为您详细分析：

// 主要功能函数：

// isExternal(path)
// 检查路径是否为外部链接
// 验证是否以 http://, https://, mailto: 或 tel: 开头
// 返回布尔值

// validUsername(str)
// 验证用户名是否有效
// 检查用户名是否在预设的列表中 ['admin', 'editor']
// 返回布尔值

// validURL(url)
// 验证 URL 是否合法
// 使用复杂的正则表达式验证完整的 URL 格式
// 支持 http、https、ftp 协议
// 支持域名、IP 地址、端口号、路径等完整 URL 结构

// validLowerCase(str)
// 验证字符串是否全为小写字母
// 使用正则表达式 /^[a-z]+$/ 验证

// validUpperCase(str)
// 验证字符串是否全为大写字母
// 使用正则表达式 /^[A-Z]+$/ 验证

// validAlphabets(str)
// 验证字符串是否只包含字母
// 使用正则表达式 /^[A-Za-z]+$/ 验证

// validEmail(email)
// 验证邮箱地址格式是否正确
// 使用标准的邮箱验证正则表达式

// isString(str)
// 检查参数是否为字符串类型
// 使用 typeof 和 instanceof 进行判断

// isArray(arg)
// 检查参数是否为数组类型
// 优先使用 Array.isArray()
// 降级使用 Object.prototype.toString.call() 方法判断

// 这个工具文件在整个项目中主要用于：
// 表单验证
// 数据提交前的格式验证
// 用户输入的合法性检查
// 链接格式的验证
// 它是项目中数据验证的核心工具文件，提供了一套完整的数据格式验证解决方案。
