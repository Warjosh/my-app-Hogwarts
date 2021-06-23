import { Component } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage {
  

  public readonly LINK_STUDENTS: string = `/${this.util.Navigation.STUDENTS}`;
  
  public readonly LINK_CHARACTER: string = `/${this.util.Navigation.CHARACTER}`;
  
  public readonly LINK_TEACHERS: string = `/${this.util.Navigation.TEACHERS}`;
  
  constructor( 
    public util: UtilService){
  }

}
