import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from '../shared/shared.module';
import { SildebarComponent } from './sildebar/sildebar.component';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SildebarComponent],
  exports: [HeaderComponent, FooterComponent, SildebarComponent],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent:CoreModule) {
    if (parent) {
      throw new Error('模块已经存在')
    }
  }
}
