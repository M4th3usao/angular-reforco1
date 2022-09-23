import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurossimplesComponent } from './jurossilmplesComponent/jurossimples/jurossimples.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, JurossimplesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
