import { AxiosResponse } from "axios";
import { AnimeListResponse } from "../../../models/anime/anime-list";
import {
  AnimeDataNormalized,
  AnimeListNormalized,
} from "../../../models/anime/anime-list/normalized";
import { DEFAULT_RESULT } from "./constants";

interface Deps {
  res?: AxiosResponse<AnimeListResponse>;
}

const normalizer = (deps: Deps) => {
  const { res } = deps;

  if (!res?.data?.data) {
    return DEFAULT_RESULT;
  }

  const list: AnimeDataNormalized[] = res.data.data.map(
    ({ id, attributes }) => ({
      id,
      image: attributes.posterImage?.small ?? "",
      titleEn: attributes.titles.en_jp ?? "",
      titleJp: attributes.titles.ja_jp ?? "",
      rating: attributes.averageRating ?? "",
    })
  );

  const result: AnimeListNormalized = {
    list: list,
    pagination: {
      next: res.data?.links?.next ?? "",
      prev: res.data?.links?.prev ?? "",
    },
  };

  return result;
};

export default normalizer;
