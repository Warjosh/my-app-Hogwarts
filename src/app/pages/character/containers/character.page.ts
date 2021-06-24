import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl:'./character.page.html',
  styleUrls: ['./character.page.scss']
})

export class AppCharacterPage {
  /* mode for datatable */
  public mode: string = 'character';
  
  constructor( private router: Router ){
  }
  /*  */
  public back(){
		this.router.navigate(['']);
	}
}
