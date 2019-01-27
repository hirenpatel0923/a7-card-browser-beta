import { Injectable, Inject, ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
import { CardComponent } from '../../../components/work-space/card/card.component';
import { GroupListColorsStartService } from '../../shared-services/data/group-list-colors/group-list-colors-start.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCardComponentService {
  groupColor: string;
  cardCount = 0;
  rootViewContainer;
  constructor(private factoryResolver: ComponentFactoryResolver,
              private groupListColorsStartService: GroupListColorsStartService) {
      this.groupListColorsStartService.currentSelectedColor.subscribe(color => this.groupColor = color);
   }

   setRootViewContainerRef(ViewContainerRef) {
     this.rootViewContainer = ViewContainerRef;
   }

   addDynamicComponent() {
     const factory = this.factoryResolver.resolveComponentFactory(CardComponent);
     const component = factory.create(this.rootViewContainer.parentInjector);
     this.rootViewContainer.insert(component.hostView);
     component.instance._ref = component;

     this.cardCount = this.cardCount + 1;
     component.instance._card_number = this.cardCount;

     component.instance._group_color = this.groupColor;
   }
}
