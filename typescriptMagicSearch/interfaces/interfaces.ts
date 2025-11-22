export interface ScryfallListResponse {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page?: string;
  data: ScryfallCard[];
}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string
  border_crop: string
}

export interface Cardface {
  name: string;
  oracle_text?: string;
  image_uris?: ImageUris;
}

export interface ScryfallCard {
  id: string;
  name: string;
  type_line: string;
  oracle_text?: string;
  image_uris?: ImageUris;
  card_faces?: Cardface[];
}

export interface SearchOptions {
  name?: string;
  oracle_text?: string;
  type_line?: string;
  cmc_criteria?: string;
  cmc?: string;
}

export interface ImageObject {
  id: string;
  small: string;
  normal: string;
}