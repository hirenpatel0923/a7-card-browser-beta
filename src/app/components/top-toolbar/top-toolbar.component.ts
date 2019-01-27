import { Component, OnInit } from '@angular/core';
import { CreateCardComponentDataService } from '../../services/shared-services/card/create-card-component-data.service';
import { CreateCardComponentService } from '../../services/components/card/create-card-component.service';
import { GroupListColorsStartService } from '../../services/shared-services/data/group-list-colors/group-list-colors-start.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.less']
})
export class TopToolbarComponent implements OnInit {

  number: number;
  selectedColor;

  constructor(private createCardComponentDataService: CreateCardComponentDataService,
              private createCardComponentService: CreateCardComponentService,
              private groupListColorsStartService: GroupListColorsStartService) {
  }

  ngOnInit() {
    this.createCardComponentDataService.currentNumber.subscribe(number => this.number = number);
    this.groupListColorsStartService.currentSelectedColor.subscribe(
      selectedColor => this.selectedColor = selectedColor
    );
  }

  addNewCard() {
    this.createCardComponentDataService.changeNumber();
    this.createCardComponentService.addDynamicComponent();
  }

  deleteGroup() {
    this.groupListColorsStartService.removeColor(this.selectedColor);
  }
}
