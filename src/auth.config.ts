import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {

        const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" + "/auth/login";
        
        const userInResponseFormat = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            ...credentials,
            expiresInMins: 3,
          }),
          credentials: "include",
        });

        const userInJSONFormat = await userInResponseFormat.json()

        if(!!!userInJSONFormat) return null;
        
        return userInJSONFormat;
      },
    }),
  ],
};
