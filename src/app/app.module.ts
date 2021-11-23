import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common';
import localRu from "@angular/common/locales/ru";
import localUK from "@angular/common/locales/uk";

import {AppComponent} from './app.component';
import {IncrementPipe} from './pipes';
import {BoldAndColourDirective} from './directives';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { TestComponent } from './components/test/test.component';

registerLocaleData(localRu, 'ru');
registerLocaleData(localUK, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldAndColourDirective,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
