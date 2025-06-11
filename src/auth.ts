import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "./auth.config";
declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
  }
  interface Session {
    user: {
      address: string;
    } & DefaultSession["user"];
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt"},
  ...authConfig
});
