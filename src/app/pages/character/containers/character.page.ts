import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Profile } from 'src/app/classes/profile';
import { HogwartsService } from 'src/app/core/services/hogwarts.service';
import { UtilService } from 'src/app/core/services/util.service';

import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss']
})



export class AppCharacterPage implements AfterViewInit {
  /*  */
  public readonly displayedColumns: string[] = ['photo','name','age', 'patronus'];
  /*   */
  private DATA: Profile[] = [];
  /*  */
  public dataSource = new MatTableDataSource(this.DATA);
  /*  */
  public schoolSelected: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    private _hogwartsService: HogwartsService,
    public util: UtilService){
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /*  */
  public refreshList(ev: Event){

    this._hogwartsService.getByHouse(this.schoolSelected).subscribe(
      ( profiles ) => {
        this.dataSource.data = profiles;
      }, 
      (err) => {
        console.log(err);
      }
    );

    this.schoolSelected
  }
}
