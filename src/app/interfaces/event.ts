export interface Event {
  id: string;
  artist_id: number;
  url:  string;
  on_sale_datetime:  string;
  datetime:  string;
  description:  string;
  venue: {
    name: string;
    city: string;
    country: string;
  }
}
