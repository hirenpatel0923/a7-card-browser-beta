import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { WebviewDirective } from './webview.directive';

import { TopToolbarComponent } from './component/top-toolbar/top-toolbar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { WorkSpaceComponent } from './component/work-space/work-space.component';
import { CardComponent } from './component/work-space/card/card.component';
import { DragDropCardComponent } from './component/work-space/drag-drop-card/drag-drop-card.component';
import { GroupListStartComponent } from './component/side-nav/group-list-start/group-list-start.component';
import { GroupListEndComponent } from './component/side-nav/group-list-end/group-list-end.component';

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    TopToolbarComponent,
    SideNavComponent,
    WorkSpaceComponent,
    CardComponent,
    DragDropCardComponent,
    GroupListStartComponent,
    GroupListEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
