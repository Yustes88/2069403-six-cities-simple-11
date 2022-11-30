import { UserData } from './user-data';

export type AuthorizedUser = UserData & {
  email: string;
  token: string;
};


export type AuthData = {
  email: string;
  password: string;
};
