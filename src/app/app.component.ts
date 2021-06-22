import { Component } from '@angular/core';
import { HogwartsService } from './core/services/hogwarts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app-Hogwarts';

  constructor( private _hogwartsService: HogwartsService){
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
