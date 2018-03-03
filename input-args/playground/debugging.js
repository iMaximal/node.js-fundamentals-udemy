// node inspect debugging.js
// node --inspect-brk debugging.js
// n - next; c - continue
// repl
const person = {
  name: 'Max',
}

person.age = 30

debugger

console.log(person)
