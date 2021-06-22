import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HogwartsService } from './core/services/hogwarts.service';
import { HttpClientModule } from '@angular/common/http';
import { AppCharacterPage } from './pages/character/containers/character.page';
import { AppStudentsPage } from './pages/students/containers/students.page';
import { UtilService } from './core/services/util.service';
import { HomePage } from './pages/home/containers/home.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AppCharacterPage,
    AppStudentsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HogwartsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
