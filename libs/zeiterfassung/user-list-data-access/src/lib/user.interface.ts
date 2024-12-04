export interface User {
  id: number;
  name: string;
  lastname: string;
  group: UserGroup;
}

// Der UserGroup-Typ ist ein sogenannter Literal Type, der nur zwei mögliche Werte...
export type UserGroup = 'freelancer' | 'employee';


export interface UserCreate {
  name: string;
  lastname: string;
  group: UserGroup;
}


