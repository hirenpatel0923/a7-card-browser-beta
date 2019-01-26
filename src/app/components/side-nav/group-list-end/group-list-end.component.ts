import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-group-list-end',
  templateUrl: './group-list-end.component.html',
  styleUrls: ['./group-list-end.component.less']
})
export class GroupListEndComponent implements OnInit {

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
