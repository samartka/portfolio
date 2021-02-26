import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowSkillModule } from "./show-skill/show-skill.module";
import { ShowExperienceModule } from "./show-experience/show-experience.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowSkillModule,
    BrowserAnimationsModule,
    ShowExperienceModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
