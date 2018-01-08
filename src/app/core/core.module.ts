import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdIconModule, MdInputModule,MdCardModule,MdButtonModule,MdSidenavModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { SildebarComponent } from './sildebar/sildebar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    MdToolbarModule, MdIconModule, MdInputModule,MdCardModule,MdButtonModule,MdSidenavModule
  ],
  declarations: [HeaderComponent, FooterComponent, SildebarComponent],
  exports: [HeaderComponent, FooterComponent, SildebarComponent,MdToolbarModule, MdIconModule, MdInputModule,MdCardModule,MdButtonModule,MdSidenavModule],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent:CoreModule) {
    if (parent) {
      throw new Error('模块已经存在')
    }
  }
}
