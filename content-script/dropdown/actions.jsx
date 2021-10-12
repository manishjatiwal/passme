import React from 'react'
import { Actions as Container } from './style'
import Eye from 'icons/actions/eye'
import EyeSlash from 'icons/actions/eye-slash'
import Sliders from 'icons/actions/sliders'

function Actions() {
  return (
    <Container>
      <Eye />
      <EyeSlash />
      <Sliders />
    </Container>
  )
}

export default Actions
