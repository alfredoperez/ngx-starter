import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdToolbarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';


import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngx-starter'}),
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    routing,
    ServiceWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
