import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { FormSelectorComponent } from './components/form-selector/form-selector.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSelectorComponent,
    UserInfoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
