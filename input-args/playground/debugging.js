// node inspect debugging.js
// node --inspect-brk debugging.js (chrome://inspect)
// n - next; c - continue
// repl
const person = {
  name: 'Max',
}

person.age = 30

debugger

console.log(person)
