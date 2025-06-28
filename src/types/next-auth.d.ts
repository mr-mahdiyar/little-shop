/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    accessToken: string;
    refreshToken: string;
  }
}
