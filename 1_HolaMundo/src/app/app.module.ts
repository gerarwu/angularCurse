import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header.component';
import { AppComponent }  from './app.component';
import { BodyComponent } from './components/body.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, BodyComponent , FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
