import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (response) => response.data,
    retry: 1,
  });

  return {
    products: data,
    isLoading,
    isError,
    error,
  };
}
