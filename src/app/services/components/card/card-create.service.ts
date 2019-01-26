import { Injectable, Inject, ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
import { CardComponent } from '../../../components/work-space/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CardCreateService {
  rootViewContainer;
  constructor(private factoryResolver: ComponentFactoryResolver) {
   }

   setRootViewContainerRef(ViewContainerRef) {
     this.rootViewContainer = ViewContainerRef;
   }

   addDynamicComponent() {
     const factory = this.factoryResolver.resolveComponentFactory(CardComponent);
     const component = factory.create(this.rootViewContainer.parentInjector);
     this.rootViewContainer.insert(component.hostView);
   }
}
