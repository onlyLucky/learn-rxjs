/*
 * @Author: fg
 * @Date: 2022-04-14 10:21:44
 * @LastEditors: fg
 * @LastEditTime: 2022-05-23 14:30:36
 * @Description: content
 */
module.exports = {
  extends: [
    'standard'
  ],
  parser: 'babel-eslint',
  // 如果你还需要检测 ts 文件则添加该项，并且保证根目录有 tsconfig.json 文件
  parserOptions: {
    project: './tsconfig.json'
  }
}
