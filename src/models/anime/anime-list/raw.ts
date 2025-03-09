import type { AnimeData } from "..";

export interface AnimeListResponse {
  data: AnimeData[];
  meta: {
    count: number;
  };
  links?: {
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
  };
}
