import { Injectable } from '@angular/core';
import { User, UserCreate } from './user.interface';

@Injectable({ providedIn: 'root' })
export class ZeiterfassungUserListService {
  #data: User[] = [];
  #counter = 0;

  public create(user: UserCreate): User {
    const newUser = { ...user, id: this.#counter++, hours: [] };
    this.#data.push(newUser);
    return newUser;
  }

  public getAll(): User[] {
    return this.#data;
  }
}
