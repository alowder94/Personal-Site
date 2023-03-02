import React from 'react'
import { signOut } from 'next-auth/react'

export function AdminTools() {
  return (
    <div>
        <h1>Admin Tools Displayed Here</h1>
        <button onClick={() => signOut()}>Log out of admin</button>
    </div>
  )
}