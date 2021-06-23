import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Profile } from 'src/app/classes/profile';
import { HogwartsService } from 'src/app/core/services/hogwarts.service';
import { UtilService } from 'src/app/core/services/util.service';

import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss']
})



export class AppTeacherPage implements AfterViewInit {
  /*  */
  public readonly displayedColumns: string[] = ['photo','name','age', 'patronus'];
   /*  */
  private DATA: Profile[] = [];
  /*  */
  public dataSource = new MatTableDataSource(this.DATA);


  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    private _hogwartsService: HogwartsService,
    public util: UtilService){
      
    this._hogwartsService.getStaff().subscribe(
      ( profiles ) => {
        //this.DATA =  profiles; 
        this.dataSource.data = profiles;
      }, 
      (err) => {
        console.log(err);
      }
    );
  
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
