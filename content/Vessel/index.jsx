import React from 'react'
import { useSelector } from 'react-redux'
import Header from 'components/Header'
import Container from './Container'
import PasswordGenerator from '../PasswordGenerator'

function Vessel({ uuid }) {
  const { vesselStyles, vesselVisiblity } = useSelector(state => state.input)

  if (vesselVisiblity[uuid])
    return (
      <Container styles={vesselStyles[uuid]}>
        <Header />
        <PasswordGenerator uuid={uuid} />
      </Container>
    )

  return null
}

export default Vessel
