import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
  }
}

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {
        const url = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000") + "/user/login";
        console.log(url);
        const userInResponseFormat = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username as string,
            password: credentials.password as string,
          }),
          cache: "no-cache",
        });

        const userInJSONFormat = await userInResponseFormat.json();
        console.log("user data: ", userInJSONFormat);
        if (!!!userInJSONFormat) return null;
        return { ...userInJSONFormat };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && "accessToken" in user && "refreshToken" in user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ token, session }) {
      if (!!!token) return session;

      if ("accessToken" in token && "refreshToken" in token) {
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
      }
      return session;
    },
  },
};
