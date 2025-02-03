import { Injectable } from '@angular/core';
import { Hour } from './time.interface';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeDataAccessService {
  // Nochmals repeaten!
  // 1. verstanden - $$ signalisert was kommen soll! ($$ subject $ observalbe)
  // 2. explzite Typen setzen um typ sicherhiet herzustellen ! BehaviorSubject<Record<number, Hour[]>>
  // 3. zuweisung der variablen userHourss$$ = new BehaviorSubject<Record<number, Hour[]>>()
  private userHours$$: BehaviorSubject<Record<number, Hour[]>> = new BehaviorSubject<Record<number, Hour[]>>({
      // 245436: [{description: 'test', from: 'test2', to: 'tst'}], // example data
    });
  
  
    // private suserHours$$ = new BehaviorSubject<Record<number, Hour[]>>({});


    // // Wert setzen (immer mit `.next()`)
    // this.userHours$$.next({
    //   ...this.userHours$$.getValue(),
    //   1: [{ start: "08:00", end: "16:00" }]
    // });
    
    // // Wert lesen (reaktiv)
    // this.userHours$$.subscribe(hours => {
    //   console.log("Aktualisierte Stunden:", hours);
    // });
    
    // // Wert lesen (nicht-reaktiv)
    // const currentHours = this.userHours$$.getValue();
    // console.log(currentHours);
  
  
  
  //   private suserHours: { [userId: number]: Hour[] } = {};


  // public addHours(userId: number, hour: Hour): Observable<Hour>{

  // }


  // type Record<K extends keyof any, T> = { [P in K]: T; }

  // public addHours(userId: number, hour: Hour): Observable<Hour> {
  //   if (!this.userHours[userId]) {
  //     this.userHours[userId] = [];
  //   }
  //   this.userHours[userId].push(hour);
  //     return of(hour);
  // }

  // public getHours(userId: number): Hour[] {
  //   return this.userHours[userId] || [];
  // }

  public getHours(userId: number): Observable<Hour[]> {
    return this.userHours$$.pipe(
      // tap((userHours) => {
      //   console.log('hier gickst due!', userHours);
      // }),
      map(userddHours => userddHours[userId]),
      // tap((reesult) => {
      //   console.log('hier gickst due!', reesult);
      // }),

      // ---------------------------------------
      // map(userddHours => userddHours[userId]),
      // Es wird nicht direkt eine Zuweisung gemacht (userHours = userHours), sondern der Wert an userHours[userId] wird aus dem Array oder Objekt extrahiert.
      //-------------------------------------------
    );    

  }
}


// servic.getHours(3567467).subscribe(console.log) // [{description: 'gdjj', from: ''}]