import apiCaller from "./api-caller";

export async function getProducts() {
  const response = await apiCaller.get("/products");
  return response;
}
