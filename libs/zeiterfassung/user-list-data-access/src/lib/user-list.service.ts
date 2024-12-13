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

  // hier kommt noch ein get für einen user rein!
  // get einen user! retun oneUser! mit userID
  public getUser(id: number): User | undefined {
    const oneUser = this.#data.find((user) => user.id === id);
    return oneUser;
  }

  public getAll(): User[] {
    return this.#data;
  }
}
