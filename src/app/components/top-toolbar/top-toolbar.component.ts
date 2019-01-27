import { Component, OnInit } from '@angular/core';
import { CreateCardComponentService } from '../../services/components/card/create-card-component.service';
import { GroupListColorsStartService } from '../../services/shared-services/data/group-list-colors/group-list-colors-start.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.less']
})
export class TopToolbarComponent implements OnInit {

  selectedColor;

  constructor(private createCardComponentService: CreateCardComponentService,
              private groupListColorsStartService: GroupListColorsStartService) {
  }

  ngOnInit() {
    this.groupListColorsStartService.currentSelectedColor.subscribe(
      selectedColor => this.selectedColor = selectedColor
    );
  }

  addNewCard() {
    this.createCardComponentService.addDynamicComponent();
  }

  deleteGroup() {
    this.groupListColorsStartService.removeColor(this.selectedColor);
  }
}
