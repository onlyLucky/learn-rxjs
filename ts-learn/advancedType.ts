/*
 * @Author: fg
 * @Date: 2022-05-01 22:33:27
 * @LastEditors: fg
 * @LastEditTime: 2022-05-01 23:04:04
 * @Description: 高级类型
 */

// 交叉类型
function extend<T, U> (first: T, second: U): T&U {
  let result = <T & U>{};
  for (let id in first){
    (<any>result)[id] = (<any>first)[id]
  }
  for(let id in second){
    if(!result.hasOwnProperty(id)){
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

// 联合类型
function padLeft(value: string, padding: any){
  if(typeof padding === 'number'){
    return Array(padding+1).join(' ')+value
  }
  if(typeof padding === 'string'){
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}