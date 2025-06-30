"use client";

import { logout } from "@/actions/auth";
import Loading from "@/components/Loading";
import SearchBox from "@/components/SearchBox";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import logoutIcon from "@/../public/icons/logout.png";

export default function Header() {
  const { isUserDataLoading, userData } = useUser();
  return (
    <section className="flex mx-auto justify-between mt-10 items-center w-full">
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
    </section>
  );
}
