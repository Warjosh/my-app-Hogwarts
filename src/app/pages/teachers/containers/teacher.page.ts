import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss']
})

export class AppTeacherPage{
  /* mode for datatable */
  public readonly mode: string = 'teacher';

  constructor( private router: Router){
  }
  /*  */
  public back(){
		this.router.navigate(['']);
	}
}
