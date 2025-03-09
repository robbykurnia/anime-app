import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAnimeList } from "./get-anime-list";
import { AnimeListNormalized } from "../../../models/anime/anime-list/normalized";

export const useGetAnimeList = () => {
  return useInfiniteQuery<AnimeListNormalized>({
    queryKey: ["animeListInfinite"],
    queryFn: (next) => fetchAnimeList({ pageParam: `${next.pageParam}` }),
    initialPageParam: "/anime?page[limit]=10&page[offset]=0",
    getNextPageParam: (prev: AnimeListNormalized) => prev.pagination.next ?? "",
    staleTime: 1000 * 60 * 5,
  });
};
