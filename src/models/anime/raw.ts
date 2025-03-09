export interface Links {
  self: string;
  related?: string;
}

export interface RatingFrequencies {
  [key: string]: string;
}

export interface Titles {
  en?: string | null;
  en_jp?: string | null;
  ja_jp?: string | null;
}

export interface Dimensions {
  width?: string | null;
  height?: string | null;
}

export interface MetaDimensions {
  tiny?: Dimensions;
  small?: Dimensions;
  medium?: Dimensions;
  large?: Dimensions;
}

export interface Meta {
  dimensions?: MetaDimensions;
}

export interface Image {
  tiny: string;
  small: string;
  medium?: string;
  large: string;
  original: string;
  meta?: Meta;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset?: number | null;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: "G" | "PG" | "R" | "R18" | null;
  ageRatingGuide?: string | null;
  subtype: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
  status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
  tba: string;
  posterImage: Image;
  coverImage: Image;
  episodeCount: number;
  episodeLength: number;
  youtubeVideoId: string;
  showType: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
  nsfw: boolean;
}

export interface Relationships {
  genres?: { links: Links };
  categories?: { links: Links };
  castings?: { links: Links };
  installments?: { links: Links };
  mappings?: { links: Links };
  reviews?: { links: Links };
  mediaRelationships?: { links: Links };
  episodes?: { links: Links };
  streamingLinks?: { links: Links };
}

export interface AnimeData {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}
