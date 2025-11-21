export interface ScryfallListResponse {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page?: string;
  data: string[];
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