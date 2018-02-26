console.log('Starting app.')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

const filteredArray = _.uniq(['Max', 1, 'Max', 1, 2, 3, 4])
console.log(filteredArray)

// console.log(_.isString(true))

// console.log('Result:', notes.add(9, -2))

// const user = os.userInfo()
//
// fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
//   if (err) throw err
// })
