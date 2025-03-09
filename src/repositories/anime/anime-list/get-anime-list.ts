import { api } from "../../../lib/api";
import { AnimeListResponse } from "../../../models/anime/anime-list";
import normalizer from "./normalizer";

interface Deps {
  pageParam: string;
}

export const fetchAnimeList = async (deps: Deps) => {
  const { pageParam = "/anime?page[limit]=10&page[offset]=0" } = deps;
  try {
    const res = await api.get<AnimeListResponse>(pageParam);

    return normalizer({ res });
  } catch {
    return normalizer({});
  }
};
