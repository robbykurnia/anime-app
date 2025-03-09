export interface AnimeDataNormalized {
  id: string;
  image: string;
  titleEn: string;
  titleJp: string;
  rating: string;
}

export interface AnimeListNormalized {
  list: AnimeDataNormalized[];
  pagination: {
    next: string;
    prev: string;
  };
}
