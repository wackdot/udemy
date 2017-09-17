// A module (app.module) is a bundle of functionalities

// Manages import(s) for Typescript
// Import the required Typescript components and modules 
// Some modules are standard modules from Angular
// Components tend to be self made
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// Manages import(s) for Angular
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // 2. List all components that needs to be known to Angular at runtime
  // the module(s) is passed as an argument. Angular then analyses the
  // the component, reads the selectors and insert the html 
  // attached to it
  bootstrap: [AppComponent]
})
export class AppModule { }
