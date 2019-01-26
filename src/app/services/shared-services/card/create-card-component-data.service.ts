import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCardComponentDataService {

  private number = new BehaviorSubject<number>(0);
  currentNumber = this.number.asObservable();

  constructor() { }

  changeNumber() {
    this.number.next(this.number.getValue() + 1);
    console.log(this.number.getValue());
  }
}
