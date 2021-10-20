import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Regenerate from './icons/sync'
import Settings from './icons/cog'
import { generatePassword } from '_redux/passwordSlice'
import { autofillGeneratedPassword } from '_redux/inputSlice'

function Actions({ uuid }) {
  const dispatch = useDispatch()
  const password = useSelector(state => state.password.password)
  return (
    <div className='random-password-actions'>
      <button
        type='button'
        onClick={() => {
          dispatch(autofillGeneratedPassword({ uuid, password }))
        }}
      >
        Use Generated Password
      </button>
      <div className='middle-icon'>
        <Regenerate
          onClick={() => {
            dispatch(generatePassword())
          }}
          className='sync'
        />
      </div>
      <Settings />
    </div>
  )
}

export default Actions
