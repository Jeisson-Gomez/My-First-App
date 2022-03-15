import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './primeromponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
