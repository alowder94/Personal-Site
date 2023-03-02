import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { AdminTools } from "./AdminTools"
import { config } from "../../config"

type LoginButtonProps = {
  EMAIL: string
}

export function LoginButton( props: LoginButtonProps ) {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data: session } = useSession()

  if(session && session?.user?.email == props.EMAIL) {
  return (
    <AdminTools />
    )
  }

  return (
    //Return the button used to either login or redirect to a login page
    <div>
      <p>You are <strong>not</strong> logged in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}
