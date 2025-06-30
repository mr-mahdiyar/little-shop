import { filterProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

export default function useFilteredProducts(endPointUrl: string) {

  const { data, isLoading, isError, error } = useQuery({

    queryKey: ["products", endPointUrl],
    queryFn: () => filterProducts(endPointUrl),
    select: (response) => response.data,
    retry: 1,
  });

  return {
    filteredProducts: data,
    isFilteredProductsLoading: isLoading,
    isFilteredProductsError: isError,
    filteredProductsError: error,
  };
}
