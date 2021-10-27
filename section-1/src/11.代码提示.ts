/*
一个方法：生成错误的提示信息 tsdocs
*/

/**
 * 一个方法：生成错误的提示信息
 * @param {string} message 提示信息
 * @param {(number | string)} code 错误码
 * @param {("demo1" | "demo2")} [type] 类型
 * @returns {string} 错误信息
 * [还不懂？点击这里吧](https://www.google.com)
 * ```js
 * // example
 * getErrorMessage('demo', 1000)
 * ```
 */
function getErrorMessage(
  message: string,
  code: number | string,
  type?: "demo1" | "demo2"
): string {
  return message || "网络繁忙，请稍后" + code;
}

getErrorMessage("demo", 1000);
