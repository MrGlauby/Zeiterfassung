import { Injectable } from '@angular/core';
import { Hour } from './user.interface';

@Injectable({ providedIn: 'root' })
export class ZeiterfassungHourService {
  private userHours: { [userId: number]: Hour[] } = {};

  public addHours(userId: number, hour: Hour): void {
    if (!this.userHours[userId]) {
      this.userHours[userId] = [];
    }
    this.userHours[userId].push(hour);
  }

  public getHours(userId: number): Hour[] {
    return this.userHours[userId] || [];
  }
}
