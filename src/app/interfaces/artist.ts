export interface Artist {
  id: string;
  name: string;
  image_url?: string,
  thumb_url?: string,
  facebook_page_url: string;
  upcoming_event_count: number;
  imageSrc?: string;
}
