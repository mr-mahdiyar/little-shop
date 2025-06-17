"use server";

import { auth, signIn, signOut } from "@/auth";

export async function login(credentials: { username: string | null; password: string | null }) {
  await signIn("credentials", { ...credentials, redirectTo: "/dashboard" });
}

export async function getSession() {
  return await auth();
}

export async function getAccessToken() {
  const session = await auth();
  if (!!!session?.user) return null;

  return session.user.accessToken;
}

export async function authenticationChecking() {
  const session = await getSession();
  if (!!session?.user?.accessToken) return true;
  return false;
}

export async function logout() {
  await signOut({redirectTo: "/auth/login"});
} 