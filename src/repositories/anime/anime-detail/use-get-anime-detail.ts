import { useQuery } from "@tanstack/react-query";
import { fetchAnimeDetail } from "./get-anime-detail";
import { DEFAULT_RESULT } from "./constants";

export const useGetAnimeDetail = (id: string) => {
  const query = useQuery({
    queryKey: ["animeDetail", id],
    queryFn: () => fetchAnimeDetail(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    data: query.data ?? DEFAULT_RESULT,
  };
};
