import type { User } from '../../user';

export interface LoginUser {
  email: string;
  password: string;
}

export interface ResponseLoginUser {
  user: User;
  token: string;
}