import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generatePassword } from '_redux/passwordSlice'
import Container from './Container'
import Actions from './Actions'

function PasswordGenerator({ uuid }) {
  const dispatch = useDispatch()
  const styledPassword = useSelector(state => state.password.styledPassword)
  useEffect(() => {
    // Generate a random password on component mount
    dispatch(generatePassword())
  }, [])

  return (
    <Container>
      <div className='random-password' showPassword>
        {styledPassword}
      </div>
      <Actions uuid={uuid} />
    </Container>
  )
}

export default PasswordGenerator
