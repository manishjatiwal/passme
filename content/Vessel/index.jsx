import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/Header'
import Container from './Container'
import PasswordGenerator from '../PasswordGenerator'
import { setVesselVisiblity } from '_redux/inputSlice'

function Vessel({ uuid }) {
  const { vesselStyles, vesselVisiblity } = useSelector(state => state.input)
  const dispatch = useDispatch()

  const onWindowClick = event => {
    const inputElement = document.querySelector(
      `input[data-passme-identifier="${uuid}"]`
    )
    const passmeKey = document.getElementById(`passme-key-${uuid}`)
    if (event.target === inputElement || event.target === passmeKey) {
      return
    }

    const rootElement = document.getElementById(`passme-vessel-${uuid}`)
    if (rootElement) {
      const isDescendant = rootElement.contains(event.target)
      if (!isDescendant) {
        dispatch(setVesselVisiblity({ uuid, visible: false }))
      }
    }
  }

  useEffect(() => {
    window.addEventListener('click', onWindowClick)

    return () => {
      window.removeEventListener('click', onWindowClick)
    }
  }, [])

  if (vesselVisiblity[uuid])
    return (
      <Container id={`passme-vessel-${uuid}`} styles={vesselStyles[uuid]}>
        <Header />
        <PasswordGenerator uuid={uuid} />
      </Container>
    )

  return null
}

export default Vessel
