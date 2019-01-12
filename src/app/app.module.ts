import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TopToolbarComponent } from './component/top-toolbar/top-toolbar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { GroupIconListComponent } from './component/side-nav/group-icon-list/group-icon-list.component';
import { WorkSpaceComponent } from './component/work-space/work-space.component';
import { CardComponent } from './component/work-space/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    SideNavComponent,
    GroupIconListComponent,
    WorkSpaceComponent,
    CardComponent
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
