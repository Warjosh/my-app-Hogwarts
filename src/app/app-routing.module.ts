import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCharacterPage } from './pages/character/containers/character.page';
import { HomePage } from './pages/home/containers/home.page';
import { AppStudentsPage } from './pages/students/containers/students.page';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
