import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { ExperienceComponent } from './experience/experience.component';
import { MyworkComponent } from './mywork/mywork.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactmeComponent } from './contactme/contactme.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MyservicesComponent,
    MyworkComponent,
    ContactmeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
