import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { config } from "../../config"
import Layout from "./Layout"
import AdminToolsFacade from "./AdminToolsFacade"

type LoginButtonProps = {
  EMAIL: string
}

export function AdminToolLoginButton( props: LoginButtonProps ) {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data: session } = useSession()

  if(session && session?.user?.email == props.EMAIL) {
  return (
    <Layout>
      <AdminToolsFacade />
      <div className="text-center">
        <button onClick={() => signOut() } className="ml-3 mt-3">Sign Out</button>
      </div>
    </Layout>
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