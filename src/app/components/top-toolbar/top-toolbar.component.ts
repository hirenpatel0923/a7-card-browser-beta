import { Component, OnInit } from '@angular/core';
import { CreateCardComponentDataService } from '../../services/shared-services/card/create-card-component-data.service';
import { CreateCardComponentService } from '../../services/components/card/create-card-component.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.less']
})
export class TopToolbarComponent implements OnInit {

  number: number;

  constructor(private createCardComponentDataService: CreateCardComponentDataService,
              private createCardComponentService: CreateCardComponentService) {
  }

  ngOnInit() {
    this.createCardComponentDataService.currentNumber.subscribe(number => this.number = number);
  }

  addNewCard() {
    this.createCardComponentDataService.changeNumber();
    this.createCardComponentService.addDynamicComponent();
  }
}
