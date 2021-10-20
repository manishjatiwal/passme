import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Regenerate from './icons/sync'
import Settings from './icons/cog'

function Actions() {
  return (
    <div className='random-password-actions'>
      <button>Use Generated Password</button>
      <div className='middle-icon'>
        <Regenerate className='sync' />
      </div>
      <Settings />
    </div>
  )
}

export default Actions
