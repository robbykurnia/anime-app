import { AxiosResponse } from "axios";
import {
  AnimeDetailNormalized,
  AnimeDetailResponse,
} from "../../../models/anime/anime-detail";

import { DEFAULT_RESULT } from "./constants";
import formatNumber from "../../../lib/format-number";

interface Deps {
  res?: AxiosResponse<AnimeDetailResponse>;
}

const normalizer = (deps: Deps) => {
  const { res } = deps;

  if (!res?.data?.data) {
    return DEFAULT_RESULT;
  }

  const { id, attributes } = res.data.data;

  const result: AnimeDetailNormalized = {
    id,
    image: attributes.posterImage?.small ?? "",
    titleEn: attributes.titles?.en_jp ?? "",
    titleJp: attributes.titles?.ja_jp ?? "",
    synopsis: attributes.synopsis ?? "",
    rating: attributes.averageRating ?? "",
    userCount: formatNumber(attributes.userCount) ?? "0",
    ranked: attributes.ratingRank ? `${attributes.ratingRank}` : "?",
    showType: attributes.showType ?? "",
  };

  return result;
};

export default normalizer;
