import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule}  from './core/core.module'
import { MdSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing-module'; 
import { AppComponent } from './app.component';
import { LoginModule }  from './login/login.module'

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MdSidenavModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
