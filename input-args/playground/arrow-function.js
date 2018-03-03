const square = (x) => x * x
console.log(square(9))

const user = {
  name: 'Max',
  sayHi: () => {
    console.log(arguments) // global arguments from module
    console.log(`Hi. I'm ${this.name}`) // undefined
  },
  sayHiAlt () {
    console.log(arguments) // local
    console.log(`Hi. I'm ${this.name}`) // Max
  }
}

user.sayHi(1, 2, 3)
user.sayHiAlt(1, 2, 3)
