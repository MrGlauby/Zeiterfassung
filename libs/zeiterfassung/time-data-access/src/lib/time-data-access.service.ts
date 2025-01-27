import { Injectable } from '@angular/core';
import { Hour } from './time.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeDataAccessService {
  private userHours: { [userId: number]: Hour[] } = {};

  public addHours(userId: number, hour: Hour): Observable<Hour> {
    if (!this.userHours[userId]) {
      this.userHours[userId] = [];
    }
    this.userHours[userId].push(hour);
      return of(hour);
  }

  public getHours(userId: number): Hour[] {
    return this.userHours[userId] || [];
  }
}



