/*
 * @Author: fg
 * @Date: 2022-04-26 11:02:18
 * @LastEditors: fg
 * @LastEditTime: 2022-05-01 05:07:23
 * @Description: 函数
 */

// 函数

function add (x:number, y:number):number {
  return x + y
}

const myAdd: (x:number, y:number)=>number = function (x, y) { return x + y }

function buildName (firstName:string, lastName?: string) {
  if (lastName) { return firstName + ' ' + lastName } else { return firstName }
}

function buildNameDefault (firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

function buildName1 (firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

// 箭头函数
interface Card{
  suit: string;
  card: number;
}
interface Deck{
  suits: string[];
  cards: number;
  createCardPicker(this: Deck): ()=>Card
}
const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickedCard / 13)
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

interface UIElement {
  addClickListener(onclick: (this: void, e: Event)=>void): void
}

class Handler {
  info: string;
  onClickBad (this: Handler, e: Event) {
    this.info = e.message
  }
}

// 函数重载 传递不同参数执行不同的
