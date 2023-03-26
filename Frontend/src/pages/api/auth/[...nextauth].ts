import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { config } from "../../../../config"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: config.GITHUB_ID as string,
      clientSecret: config.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)