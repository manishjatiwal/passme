import React from 'react'

function randomCharGenerator() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const random = Math.floor(Math.random() * characters.length)
  return characters[random]
}

function randomDigitGenerator() {
  const digits = '0123456789'
  const random = Math.floor(Math.random() * digits.length)
  return digits[random]
}

function randomSymbolGenerator() {
  const symbols = '@&$!#?'
  const random = Math.floor(Math.random() * symbols.length)
  return symbols[random]
}

function randomPasswordGenerator(config = {}) {
  const { length = 10, includeDigits = true, includeSymbols = true } = config
  let randomPassword = ''
  const randomStyledPassword = []
  // Types define what type of random char to be generated
  // 0 - characher
  // 1 - digit
  // 2 - symbol
  // Below string will decide the probablity of each type
  let types = '0102010'
  if (!includeDigits) types = types.replace(/1/g, '0')
  if (!includeSymbols) types = types.replace(/2/g, '0')

  for (let i = 1; i <= length; i++) {
    const randomTypes = Math.floor(Math.random() * types.length)
    const type = types[randomTypes]
    let random = ''
    switch (type) {
      case '1':
        random = randomDigitGenerator()
        randomStyledPassword.push(<span className="digit">{random}</span>)
        break
      case '2':
        random = randomSymbolGenerator()
        randomStyledPassword.push(<span className="symbol">{random}</span>)
        break
      default:
        random = randomCharGenerator()
        randomStyledPassword.push(<span className="char">{random}</span>)
        break
    }
    randomPassword += random
  }
  return [randomPassword, randomStyledPassword]
}

export default randomPasswordGenerator
