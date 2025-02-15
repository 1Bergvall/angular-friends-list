import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PeopleComponent } from './people/people.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
