import React, { useEffect, useState } from 'react'
import passwordGenerator from 'utils/password-generator'
import { Item as Container, Password } from './style'
import Actions from './actions'

function Item() {
  const [password, setpassword] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  useEffect(() => {
    const password = passwordGenerator()
    setpassword(password)
  }, [])
  return (
    <Container>
      <Password showPassword={showPassword}>{password}</Password>
      <Actions />
    </Container>
  )
}

export default Item
