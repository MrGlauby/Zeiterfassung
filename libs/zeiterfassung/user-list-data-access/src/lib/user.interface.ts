export interface User {
  id: number;
  name: string;
  lastname: string;
  group: UserGroup;
}

export interface UserCreate {
  name: string;
  lastname: string;
  group: UserGroup;
}

export type UserGroup = 'freelancer' | 'employee';

