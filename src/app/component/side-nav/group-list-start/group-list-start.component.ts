import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-group-list-start',
  templateUrl: './group-list-start.component.html',
  styleUrls: ['./group-list-start.component.less']
})
export class GroupListStartComponent implements OnInit {

  colors = [
    'red',
    'green',
    'blue',
    'pink',
    'yellow',
    'orange',
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

}
