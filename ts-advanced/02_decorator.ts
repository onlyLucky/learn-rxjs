/*
 * @Author: fg
 * @Date: 2022-05-03 23:51:44
 * @LastEditors: fg
 * @LastEditTime: 2022-05-04 17:22:23
 * @Description: 装饰器
 */

function classFactory (): ClassDecorator {
  return function (target) {

  }
}

// 单行
@a @b x
// 多行
@a
@b
x