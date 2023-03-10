import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        <li>
            <Link to='/profile'>Profile</Link>
        </li>
    </ul>
  )
}
