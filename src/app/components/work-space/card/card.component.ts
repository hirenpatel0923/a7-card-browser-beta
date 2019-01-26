import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  _ref: any;

  constructor() {
    // $(function() {
    //   $('.example-card').resizable();
    // });
   }

  ngOnInit() {
  }

  removeCard() {
    this._ref.destroy();
  }
}
