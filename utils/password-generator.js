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
  // Types define what type of random char to be generated
  // 0 - characher
  // 1 - digit
  // 2 - symbol
  // Below string will decide the probablity of each type
  let types = '0102010'
  if (!includeDigits) types = types.replace(/1/g, '0')
  if (!includeSymbols) types = types.replace(/2/g, '0')

  for (let i = 1; i <= length; i++) {
    const random = Math.floor(Math.random() * types.length)
    const type = types[random]
    switch (type) {
      case '1':
        randomPassword += randomDigitGenerator()
        break
      case '2':
        randomPassword += randomSymbolGenerator()
        break
      default:
        randomPassword += randomCharGenerator()
        break
    }
  }
  return randomPassword
}

export default randomPasswordGenerator
