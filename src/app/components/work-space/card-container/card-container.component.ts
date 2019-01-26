import { Component, Inject, ViewContainerRef, OnInit } from '@angular/core';
import { CreateCardComponentService } from '../../../services/components/card/create-card-component.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.less']
})
export class CardContainerComponent implements OnInit {

  constructor(private createCardComponentService: CreateCardComponentService, private viewContainerRef: ViewContainerRef) {
    this.createCardComponentService.setRootViewContainerRef(viewContainerRef);
    // this.createCardComponentService.addDynamicComponent();
  }

  ngOnInit() {
  }

}
