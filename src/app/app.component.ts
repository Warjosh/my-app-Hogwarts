import { Component } from '@angular/core';
import { UtilService } from './core/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public TITLE = 'my-app-Hogwarts';

  constructor( public util: UtilService ){}
}
