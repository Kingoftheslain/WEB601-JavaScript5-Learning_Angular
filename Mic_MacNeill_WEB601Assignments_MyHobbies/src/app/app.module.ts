import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterByTypePipe } from './filter-by-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    ContentListComponent,
    FilterByTypePipe,
    HoverAffectDirective,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
