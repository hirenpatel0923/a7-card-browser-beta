import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }

}