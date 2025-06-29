import { User } from "next-auth";
import apiCaller from "./api-caller";

export async function getUserData() {
  return await apiCaller.get<User>("/auth/profile");
}