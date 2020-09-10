import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSignComponent } from './material-sign.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MaterialSignComponent],
  imports: [
    MatIconModule,
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [MaterialSignComponent]
})
export class MaterialSignModule { }
