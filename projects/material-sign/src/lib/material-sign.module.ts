import { NgModule } from '@angular/core';
import { MaterialSignComponent } from './material-sign.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [MaterialSignComponent],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [MaterialSignComponent]
})
export class MaterialSignModule { }
