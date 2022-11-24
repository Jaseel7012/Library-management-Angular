import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryAdminLogComponent } from './library-admin-log/library-admin-log.component';
import { LibraryAdminRegComponent } from './library-admin-reg/library-admin-reg.component';
import { LibraryUserRegisterComponent } from './library-user-register/library-user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryAdminLogComponent,
    LibraryAdminRegComponent,
    LibraryUserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
