'use strict'
const moment = require('moment')

const a = moment().format('YYYY/MM/DD')
const b = moment().subtract(1, 'year').format('YYYY/MM/DD')

const fechas = getFechas(a, b)
const hoy = fechas.hoy
const pasado = fechas.pasado
console.log('....')
console.log(a)
console.log(b)
console.log(hoy)
console.log(pasado)
console.log('....')

function getFechas (a, b) {
  const fechaA = new Date(a)
  const fechaB = new Date(b)
  return {
    hoy: generaFecha(fechaA),
    pasado: generaFecha(fechaB)
  }
}

function generaFecha (f) {
  console.log(f)
  return {
    year: f.getFullYear(),
    month: f.getMonth() + 1,
    day: f.getDate()
  }
}
