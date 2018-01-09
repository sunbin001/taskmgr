import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdToolbarModule, 
  MdIconModule, 
  MdInputModule, 
  MdCardModule, 
  MdButtonModule 
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: []
})
export class SharedModule { }
 