"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ComponentPropsWithRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchBoxProps extends Pick<ComponentPropsWithRef<"input">, "placeholder" | "className"> {
  searchTerm: string;
}

export default function SearchBox({ searchTerm, ...props }: SearchBoxProps) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(searchTerm, term);
    } else {
      params.delete(searchTerm);
    }

    const pathMixedWithSearchParams = pathName + "?" + params.toString();
    replace(pathMixedWithSearchParams);
  }, 1 * 1000)

  return (
    <input
      {...props}
      className={`p-1 border rounded-md outline-none ${props.className || null}`}
      onChange={(event) => handleSearch(event.target.value)}
      defaultValue={searchParams.get(searchTerm)?.toString()}
    />
  );
}
