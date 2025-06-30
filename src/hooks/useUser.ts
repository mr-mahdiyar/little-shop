import { getUserData } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    select: (response) => response.data,
  });

  return { userData: data, isUserDataError: isError, isUserDataLoading: isLoading };
}
