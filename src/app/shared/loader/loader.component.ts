import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  @Input('isRequest') public isRequest: boolean;

  /**
   * Values:
   * medium - medium loader 150x150 px. Default
   */
  @Input('size') public size: string;

  public loading$: Observable<boolean>;

  constructor(
    private _loader: LoaderService,
  ) {
    this.isRequest = true;
    this.loading$ = this._loader.getLoading$();
    this.size = 'medium';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
