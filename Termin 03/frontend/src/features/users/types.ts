export interface User {
  id: string;
  first_name: string;
  last_name: string;
  country?: string;
  birth_date?: string;
  profile_image?: string; // base64 encoded
}
