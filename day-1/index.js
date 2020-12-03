const input = require('./input.json')

function equalToNumber(number, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (+arr[i] + +arr[j] === number) {
        return +arr[i] * +arr[j]
      }
    }
  }
}

console.log(equalToNumber(2020, input))
