// let username = 'Ivan'

// username = 1
// console.log(username);

let isOpen: boolean = false
isOpen = true

// let isOpenArray: boolean[] = [false, true, ""] // this is ts error
let isClosedArray: Array<boolean> = [false, true]

function createUser(username: string, age: number) {
  return {
    username,
    age,
  }
}

const ivan = createUser("Ivan", 26)
// const ivan1 = createUser(123) // this is ts error

function id<T>(item: T): T {
  return item
}

const num = id(1)

interface IMyDto {
  prop: string
  prop1: number
}

type MyDtoOrNumber = IMyDto | number
type BooleanArray = Array<boolean>

let newProp = id<MyDtoOrNumber>({ prop: "hey", prop1: 1 })

class MyClass {
    constructor(public name: string, private age: number) {}
}

const petya = new MyClass('Petya' , 40)
