import { Injectable } from '@angular/core';
import { Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  value: number = 0;
  id?: number;

  constructor() { }

  public getNumbers(): Observable<number> {
    return new Observable<number>((subscriber: Subscriber<number>) => {
      this.value = 0;

      this.id = window.setInterval( () => {
        console.log(this.value);
        subscriber.next(this.value++); // retourne une valeur

        // subscriber.error(); // retourne une erreur et met fin à l'observable

        if(this.value >= 10) {
          subscriber.complete(); // met fin à l'abonnement avec l'observeur
          this.clear();
        }

      }, 1000);

    });
  }

  public clear(): void {
    clearInterval(this.id);
  }
}
