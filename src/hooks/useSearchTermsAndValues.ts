import { useSearchParams } from "next/navigation";

export function useSearchTermsAndValues(...terms: Array<string>) {
  let termsAndValues = new Object();

  const searchParams = useSearchParams();
  terms.map((term) => {
    const value = searchParams.get(term);
    if (value) {
      termsAndValues = {
        ...termsAndValues,
        [term]: value,
      };
    }
  });

  return termsAndValues
}
