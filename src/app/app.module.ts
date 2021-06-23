import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HogwartsService } from './core/services/hogwarts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppTeacherPage } from './pages/teachers/containers/teacher.page';
import { AppCharacterPage } from './pages/character/containers/character.page';
import { AppStudentsPage } from './pages/students/containers/students.page';
import { UtilService } from './core/services/util.service';
import { HomePage } from './pages/home/containers/home.page';


import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AgePipe } from './shared/pipes/age.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AppCharacterPage,
    AppStudentsPage,
    AppTeacherPage,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    HogwartsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
