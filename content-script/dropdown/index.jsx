import React from 'react'
import Header from 'components/header'
import PasswordGenerator from './generator'
import { Container } from './style'

function Dropdown({ styles, showDropdown }) {
  if (!showDropdown) return null

  return (
    <Container styles={styles} showDropdown={showDropdown}>
      <Header />
      <PasswordGenerator />
    </Container>
  )
}

export default Dropdown
