export interface User {
  id: number;
  name: string;
  lastname: string;
  group: UserGroup;
  hours: Hour[]; //hier wurde Hour neu hinzugefügt um ein Array für die Stundesliste !
}

// // Der UserGroup-Typ ist ein sogenannter Literal Type, der nur zwei mögliche Werte...
export type UserGroup = 'freelancer' | 'employee';

export interface UserCreate {
  name: string;
  lastname: string;
  group: UserGroup;
}

export interface Hour {
  from: string;
  to: string;
  description: string;
}
