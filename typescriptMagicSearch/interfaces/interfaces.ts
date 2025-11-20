export interface ScryfallListResponse<T> {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page?: string;
  data: T[];
}

export interface ScryfallCard {
  id: string;
  name: string;
  type_line: string;
  oracle_text?: string;
}