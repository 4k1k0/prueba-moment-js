'use strict'
const moment = require('moment')

const a = moment().format('YYYY/MM/DD')
const b = moment().subtract(1, 'year').format('YYYY/MM/DD')

console.log('....')
console.log(a)
console.log(b)
console.log('....')