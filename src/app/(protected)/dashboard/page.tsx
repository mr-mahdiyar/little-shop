"use client";

import { logout } from "@/actions/auth";
import useProducts from "@/hooks/useProducts";
import useUser from "@/hooks/useUser";
import Loading from "@/components/Loading";
import Product from "@/components/Product";
import Container from "@/components/Container";
import Image from "next/image";
import logoutIcon from "@/../public/icons/logout.png";
import SearchBox from "@/components/SearchBox";
import { useSearchTermsAndValues } from "@/hooks/useSearchTermsAndValues";
import useSearchEndPintCreator from "@/hooks/useSearchEndPointCreator";
import useFilteredProducts from "@/hooks/useFilteredProducts";

export default function DashboardPage() {

  const searchTermsAndValues = useSearchTermsAndValues("title");
  const searchEndPoint = useSearchEndPintCreator(searchTermsAndValues);

  const { filteredProducts, isFilteredProductsError, isFilteredProductsLoading } = useFilteredProducts(searchEndPoint);
  const { allProducts, isProductsError, isProductsLoading } = useProducts();
  const { isUserDataLoading, userData } = useUser();

  const products = searchEndPoint ? filteredProducts : allProducts;

  if (isProductsLoading || isFilteredProductsLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (isProductsError || isFilteredProductsError) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>There is something wrong with fetching data...</h1>
      </div>
    );
  }
  
  return (
    <Container className="flex flex-col gap-y-4">
      <div className="flex mx-auto justify-between mt-10 items-center w-full">
        {isUserDataLoading ? <Loading /> : <h1>Welcome {userData?.name}</h1>}
        <SearchBox searchTerm="title" placeholder="search products..." className="w-72" />
        <form
          action={async () => {
            await logout();
          }}
        >
          <button className="cursor-pointer">
            <Image src={logoutIcon} alt="logout" className="w-8" />
          </button>
        </form>
      </div>
      <section className="flex flex-wrap justify-between gap-y-8">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </Container>
  );
}
