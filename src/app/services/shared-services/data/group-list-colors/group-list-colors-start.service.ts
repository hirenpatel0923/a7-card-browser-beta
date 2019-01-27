import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { StartColors } from './group-list-colors-start';

@Injectable({
  providedIn: 'root'
})
export class GroupListColorsStartService {

  colors = [];
  private colorsSubject = new Subject<StartColors>();
  StartColors = this.colorsSubject.asObservable();

  selectedColor;
  private selectedColorSubject = new BehaviorSubject<string>('');
  currentSelectedColor = this.selectedColorSubject.asObservable();

  constructor() { }

  addNewColor(color) {
    this.colors.push(color);
    this.colorsSubject.next(<StartColors>{colors: this.colors});
  }

  removeColor(color) {
    this.colors = this.colors.filter(c => c !== color);
    this.colorsSubject.next(<StartColors>{colors: this.colors});
  }

  changeSelectedColor(color) {
    this.selectedColorSubject.next(color);
  }

}
