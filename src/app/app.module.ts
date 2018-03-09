import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DatepickerComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
