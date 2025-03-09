import { api } from "../../../lib/api";
import { AnimeDetailResponse } from "../../../models/anime/anime-detail";
import normalizer from "./normalizer";

export const fetchAnimeDetail = async (id: string) => {
  try {
    const res = await api.get<AnimeDetailResponse>(`/anime/${id}`);

    return normalizer({ res });
  } catch {
    return normalizer({});
  }
};
