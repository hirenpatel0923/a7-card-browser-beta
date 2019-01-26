import { Component, Inject, ViewContainerRef, OnInit } from '@angular/core';
import { CardCreateService } from '../../../services/components/card/card-create.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.less']
})
export class CardContainerComponent implements OnInit {

  constructor(private cardCreateService: CardCreateService, private viewContainerRef: ViewContainerRef) { 
    this.cardCreateService.setRootViewContainerRef(viewContainerRef);
    this.cardCreateService.addDynamicComponent();
  }

  ngOnInit() {
  }

}
