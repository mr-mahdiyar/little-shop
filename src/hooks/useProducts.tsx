import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (response) => response.data,
  });

  return {
    products: data?.products,
    limit: data?.limit,
    skip: data?.skip,
    total: data?.total,
    isLoading,
    isError,
    error,
  };
}
