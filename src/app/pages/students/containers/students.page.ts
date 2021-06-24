import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss']
})
export class AppStudentsPage{
  /* mode for datatable */
  public readonly mode: string = 'students';

  /* mode for datatable */
  public SHOW_FORM: boolean = false;

  constructor( 
    public util: UtilService,
    private router: Router){}

  /*  */  
  public showForm (){
    this.SHOW_FORM = true;
  }  
  /*  */
  public hideForm (){
    this.SHOW_FORM = false;
  }  
  /*  */
  public back(){
		this.router.navigate(['']);
	}
}
