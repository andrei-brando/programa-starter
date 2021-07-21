import { Profile } from "./profile.model";

export interface User {
  uid: string;
  login: string;
  password?: string;
  profile?: Profile;
}