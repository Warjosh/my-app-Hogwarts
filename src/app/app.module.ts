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
import { ProfileEditorComponent } from './pages/students/components/profile-form/profile-form.component';


import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

import { AgePipe } from './shared/pipes/age.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { DataTableComponent } from './shared/components/data-table.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AppCharacterPage,
    AppStudentsPage,
    AppTeacherPage,
    ProfileEditorComponent,
    DataTableComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatButtonModule,
    MatPaginatorModule 
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule, 
    HogwartsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
