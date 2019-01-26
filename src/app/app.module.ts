import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { WebviewDirective } from './webview.directive';

import { CardCreateService } from './services/components/card/card-create.service';

import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WorkSpaceComponent } from './components/work-space/work-space.component';
import { CardComponent } from './components/work-space/card/card.component';
import { GroupListStartComponent } from './components/side-nav/group-list-start/group-list-start.component';
import { GroupListEndComponent } from './components/side-nav/group-list-end/group-list-end.component';
import { CardContainerComponent } from './components/work-space/card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    TopToolbarComponent,
    SideNavComponent,
    WorkSpaceComponent,
    CardComponent,
    GroupListStartComponent,
    GroupListEndComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CardCreateService],
  entryComponents: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
