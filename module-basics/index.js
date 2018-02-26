console.log('Starting app.')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

console.log('Result:', notes.add(9, -2))

// const user = os.userInfo()
//
// fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
//   if (err) throw err
// })
