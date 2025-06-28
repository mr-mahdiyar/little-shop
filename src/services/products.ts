import { Product } from "@/types/products";
import apiCaller from "./api-caller";

export async function getProducts() {
  const response = await apiCaller.get<Array<Product>>("/products");
  return response;
}
