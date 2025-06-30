import { Product } from "@/types/products";
import apiCaller from "./api-caller";

export async function getProducts() {
  const response = await apiCaller.get<Array<Product>>("/products");
  return response;
}

export async function filterProducts(term: string) {
  const endPoint = "/products" + "?" + term;
  console.log("end point: ", endPoint)
  const response = await apiCaller.get<Array<Product>>(endPoint);
  return response;
}
