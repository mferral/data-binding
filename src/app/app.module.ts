import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropiedadComponent } from './ejpropiedad/ejpropiedad.component';
import { EjeventoComponent } from './ejevento/ejevento.component';
import { Ej2wayComponent } from './ej2way/ej2way.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropiedadComponent,
    EjeventoComponent,
    Ej2wayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
