/*
 * @Author: fg
 * @Date: 2022-05-03 23:51:44
 * @LastEditors: fg
 * @LastEditTime: 2022-05-07 11:28:02
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


function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
// 会先执行first工厂函数、second工厂函数，
// 再执行second工厂返回的装饰器、first工厂返回的装饰器函数
// 因此，打印顺序为：
// 'first(): factory evaluated'
// 'second(): factory evaluated'
// 'second(): called'
// 'first(): called'