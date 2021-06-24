import { Component } from '@angular/core';
import { UtilService } from './core/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public TITLE = 'Hogwarts App V.0.0.1';

  constructor( public util: UtilService ){}
}
