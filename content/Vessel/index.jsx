import React from 'react'
import { useSelector } from 'react-redux'
import Header from 'components/Header'
import Container from './Container'

function Vessel({ uuid }) {
  const { vesselStyles, vesselVisiblity } = useSelector(state => state.input)

  if (vesselVisiblity[uuid])
    return (
      <Container styles={vesselStyles[uuid]}>
        <Header />
      </Container>
    )

  return null
}

export default Vessel
