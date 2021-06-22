import { Component } from '@angular/core';
import { HogwartsService } from 'src/app/core/services/hogwarts.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-homr',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage {
  
  public TITLE = 'my-app-Hogwarts';

  public readonly LINK_STUDENTS: string = `/${this.util.Navigation.STUDENTS}`;
  
  public readonly LINK_CHARACTER: string = `/${this.util.Navigation.CHARACTER}`;
  
  public readonly LINK_TEACHERS: string = `/${this.util.Navigation.TEACHERS}`;
  
  constructor( 
    private _hogwartsService: HogwartsService,
    public util: UtilService){
    this._hogwartsService.getStaff().subscribe(
      ( profiles ) => {
        console.log(profiles);
      }, 
      (err) => {
        console.log(err);
      }
    );
  }

}
