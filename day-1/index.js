const axios = require('axios')

const API_URL =
  'https://adventofcode.com/2020/day/1/input'

;(async () => {
  try {
    const input = await axios.get(API_URL)
    console.log(input.data)
  } catch (e) {
    console.log(e)
  }
})()
