import { Injectable } from '@angular/core';
import { User, UserCreate } from './user.interface';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ZeiterfassungUserListService {


  #data$$ = new BehaviorSubject<User[]>([]);
  #counter = 0;

  public getAll(): Observable<User[]> {
    return this.#data$$.asObservable();
  }

  public create(user: UserCreate) {
    const newUser: User = { ...user, id: this.#counter++ };
    this.#data$$.next([...this.#data$$.value, newUser]);
  }



  public getUser(id: number): Observable<User | undefined> {
    return this.#data$$.asObservable().pipe(map((users: User[]) => {
        const user = users.find((user) => user.id === id);
        return user;
      })
    );
  }

}
