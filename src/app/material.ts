import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatToolbarModule,
              MatInputModule, MatSidenavModule, MatCardModule,
              DragDropModule],
    exports: [MatButtonModule, MatIconModule, MatToolbarModule,
              MatInputModule, MatSidenavModule, MatCardModule,
              DragDropModule],
})
export class MaterialModule {}
