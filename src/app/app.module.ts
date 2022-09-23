import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurossimplesComponent } from './jurossilmplesComponent/jurossimples/jurossimples.component';
import { HeaderComponent } from './headerComponent/header/header.component';
import { JuroscompostoComponent } from './juroscompostoComponent/juroscomposto/juroscomposto.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JurossimplesComponent,
    JuroscompostoComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
