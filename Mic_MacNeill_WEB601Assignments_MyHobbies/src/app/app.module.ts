import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
