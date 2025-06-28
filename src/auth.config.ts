import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const url = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000") + "/auth/login";
        const userInResponseFormat = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email as string,
            password: credentials.password as string,
          }),
          cache: "no-cache",
        });

        const userInJSONFormat = await userInResponseFormat.json();
        if (!!!userInJSONFormat) return null;
        return {
          accessToken: userInJSONFormat.access_token,
          refreshToken: userInJSONFormat.refresh_token,
          ...userInJSONFormat
        };
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
    async redirect({ url }) {
      return url;
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
