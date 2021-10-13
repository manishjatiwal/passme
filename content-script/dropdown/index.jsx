import React from 'react'
import Header from 'components/header'
import PasswordGenerator from './generator'
import { Container } from './style'
import Settings from './settings'
import Button from './use-generated'

function Dropdown({ styles, showDropdown }) {
  if (!showDropdown) return null

  return (
    <Container styles={styles} showDropdown={showDropdown}>
      <Header />
      <PasswordGenerator />
      <Settings />
      <Button />
    </Container>
  )
}

export default Dropdown
