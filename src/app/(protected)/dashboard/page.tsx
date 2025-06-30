"use client";

import useProducts from "@/hooks/useProducts";
import Loading from "@/components/Loading";
import Product from "@/components/Product";
import Container from "@/components/Container";
import { useSearchTermsAndValues } from "@/hooks/useSearchTermsAndValues";
import useSearchEndPintCreator from "@/hooks/useSearchEndPointCreator";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import Header from "@/components/ui/dashboard/Header";

export default function DashboardPage() {
  const searchTermsAndValues = useSearchTermsAndValues("title");
  const searchEndPoint = useSearchEndPintCreator(searchTermsAndValues);

  const { filteredProducts, isFilteredProductsError, isFilteredProductsLoading } = useFilteredProducts(searchEndPoint);
  const { allProducts, isProductsError, isProductsLoading } = useProducts();

  const products = searchEndPoint ? filteredProducts : allProducts;

  if (isProductsLoading || isFilteredProductsLoading) {
    return (
      <Container>
        <Header />
        <div className="h-dvh flex items-center justify-center">
          <Loading />
        </div>
      </Container>
    );
  }

  if (isProductsError || isFilteredProductsError) {
    return (
      <Container>
        <Header />
        <div className="h-dvh flex items-center justify-center">
          <h1>There is something wrong with fetching data...</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container className="flex flex-col gap-y-4">
      <Header />
      <section className="flex flex-wrap justify-between gap-y-8">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </Container>
  );
}
