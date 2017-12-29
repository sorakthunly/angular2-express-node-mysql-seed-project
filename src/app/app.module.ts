import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { UserService } from './services/user.service';


import 'rxjs/add/operator/map';
import 'rxjs/Observable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
