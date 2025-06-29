import { getUserData } from "@/services/user";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "next-auth";

export default function useUser() {

  const { isError, isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    select: (response) => response.data,
  });

  return { userData: data, isError, isLoading };
}
