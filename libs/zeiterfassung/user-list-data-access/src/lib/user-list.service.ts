import { Injectable } from "@angular/core";
import { User, UserCreate } from './user.interface';

@Injectable({providedIn: "root"})
export class ZeiterfassungUserListService{

// Private =  # zugriffsmodifiaktor accesModifire
  #data: User[] =[];
  #counter = 0;

  // property name: type
  public create(user:UserCreate):void {
    this.#data.push({...user,id:this.#counter++});
  };

  public getAll(): User[]{
    return this.#data;
  };

}



// #data: Private Property, ein Array vom Typ User[], um die Benutzer zu speichern.

// #counter: Private Property, initialisiert mit 0, dient zur Vergabe eindeutiger IDs.


// create(user: UserCreate): void:
// Nimmt einen Parameter vom Typ UserCreate (definiert in user.interface.ts).

//Der Spread-Operator wird verwendet, um die Inhalte eines Arrays oder Objekts zu "entpacken" und zu verteilen.

// Fügt mithilfe von this.#data.push({...user, id: this.#counter++}) einen neuen Benutzer ins Array ein:

// {...user} kopiert die Felder von user (Spread-Syntax).
// id wird dynamisch mit dem aktuellen Wert von #counter hinzugefügt, der dann um 1 hochgezählt wird.
// getAll(): Gibt das gesamte #data-Array als User[] zurück.


//Fazit:
// Spread: Verteilt die Werte (Kopieren/Erweitern). Der Spread-Operator wird verwendet, um die Inhalte eines Arrays oder Objekts zu "entpacken" und zu verteilen.
// Rest: Sammelt den Rest der Werte ein.
