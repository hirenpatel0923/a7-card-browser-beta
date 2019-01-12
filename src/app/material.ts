import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatToolbarModule,
              MatInputModule, MatSidenavModule, MatCardModule],
    exports: [MatButtonModule, MatIconModule, MatToolbarModule,
              MatInputModule, MatSidenavModule, MatCardModule],
})
export class MaterialModule {}
