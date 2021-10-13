import React, { useEffect, useState } from 'react'
import passwordGenerator from 'utils/password-generator'
import { Generator as Container, Password } from './style'
import Actions from './actions'

function PasswordGenerator() {
  const [password, setpassword] = useState('')
  const [styledPassword, setstyledPassword] = useState([])
  const [showPassword, setshowPassword] = useState(false)

  const generateNewPassword = () => {
    const [password, styledPassword] = passwordGenerator()
    setpassword(password)
    setstyledPassword(styledPassword)
  }
  useEffect(() => {
    generateNewPassword()
  }, [])
  return (
    <Container>
      <Password showPassword={showPassword}>{styledPassword}</Password>
      <Actions
        showPassword={showPassword}
        setshowPassword={setshowPassword}
        generateNewPassword={generateNewPassword}
      />
    </Container>
  )
}

export default PasswordGenerator
