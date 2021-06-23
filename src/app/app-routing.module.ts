import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCharacterPage } from './pages/character/containers/character.page';
import { HomePage } from './pages/home/containers/home.page';
import { AppStudentsPage } from './pages/students/containers/students.page';
import { AppTeacherPage } from './pages/teachers/containers/teacher.page';
import { Navigation } from './utils/Navigation';

const routes: Routes = [
  {
		path: '',
		component: HomePage
	},
  {
		path: Navigation.STUDENTS,
    component: AppStudentsPage 
	},
  {
		path: Navigation.CHARACTER,
		component: AppCharacterPage
	},
	{
		path: Navigation.TEACHERS,
		component: AppTeacherPage
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
