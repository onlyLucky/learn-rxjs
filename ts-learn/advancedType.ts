/*
 * @Author: fg
 * @Date: 2022-05-01 22:33:27
 * @LastEditors: fg
 * @LastEditTime: 2022-05-02 15:31:50
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
function padLeft(value: string, padding: string | number){
  if(typeof padding === 'number'){
    return Array(padding+1).join(' ')+value
  }
  if(typeof padding === 'string'){
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}


function isFish(pet: Fish | Bird): pet is Fish{
  return (<Fish>pet).swim !==undefined;
}

function isNumber(x: any): x is number {
  return typeof x === "number";
}