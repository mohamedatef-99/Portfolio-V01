import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './Components/body/body.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkComponent } from './Components/work/work.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    BodyComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
