import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryAdminLogComponent } from './library-admin-log/library-admin-log.component';
import { LibraryAdminRegComponent } from './library-admin-reg/library-admin-reg.component';
import { LibraryUserRegisterComponent } from './library-user-register/library-user-register.component';
import { LibraryUserLogComponent } from './library-user-log/library-user-log.component';
import { LibraryAddBookComponent } from './library-add-book/library-add-book.component';
import { LibraryViewBooksComponent } from './library-view-books/library-view-books.component';
import { LibraryBookSearchComponent } from './library-book-search/library-book-search.component';
import { LibraryBookDeleteComponent } from './library-book-delete/library-book-delete.component';
import { LibraryEditBookComponent } from './library-edit-book/library-edit-book.component';
import { LibraryBooksIssueComponent } from './library-books-issue/library-books-issue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { RouterModule,Routes } from '@angular/router';

const myroute:Routes=[
  {path:'userlog',
  'component':LibraryUserLogComponent

  },
  {
    path:'userreg',
    component:LibraryUserRegisterComponent
  },{
    path:'adminreg',
    component:LibraryAdminRegComponent
  },{
    path:'',
    component:LibraryAdminLogComponent
  },{
    path:'add',
    component:LibraryAddBookComponent
  },{
    path:'delete',
    component:LibraryBookDeleteComponent
  },{
    path:'edit',
    component:LibraryEditBookComponent
  },{
    path:'view',
    component:LibraryViewBooksComponent
  },{
    path:'search',
    component:LibraryBookSearchComponent
  },{
    path:'issue',
    component:LibraryBooksIssueComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LibraryAdminLogComponent,
    LibraryAdminRegComponent,
    LibraryUserRegisterComponent,
    LibraryUserLogComponent,
    LibraryAddBookComponent,
    LibraryViewBooksComponent,
    LibraryBookSearchComponent,
    LibraryBookDeleteComponent,
    LibraryEditBookComponent,
    LibraryBooksIssueComponent,
    NavbarComponent,
    NavbarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
