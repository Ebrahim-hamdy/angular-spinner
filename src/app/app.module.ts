import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Context } from './data/context'
import { LoaderService } from './services/loader/loader.service';
import { LoaderComponent } from './services/loader/loader.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layouts/full-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Context, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
