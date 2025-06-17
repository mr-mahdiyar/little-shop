import { Products } from "@/types/products";
import apiCaller from "./api-caller";

export async function getProducts() {
  const response = await apiCaller.get<Products>("/products");
  return response;
}
