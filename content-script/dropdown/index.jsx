import React from 'react'
import Header from 'components/header'
import Item from './item'
import { Container } from './style'

function Dropdown({ styles, showDropdown }) {
  if (!showDropdown) return null

  return (
    <Container styles={styles} showDropdown={showDropdown}>
      <Header />
      <Item />
      <Item />
      <Item />
    </Container>
  )
}

export default Dropdown
