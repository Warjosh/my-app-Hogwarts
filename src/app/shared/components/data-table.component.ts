import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Profile } from 'src/app/classes/profile';
import { HogwartsService } from 'src/app/core/services/hogwarts.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  /* Columns Table */
  public readonly displayedColumns: string[] = ['photo','name','age', 'patronus'];
  
  /** Its array of Profile*/
  private profileList: Profile[];

  /** Mode Table , students or teacher*/
  @Input() mode: string;

  /* Only can be ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin']  */
  public schoolSelected: string;

  /*  */
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( 
    private _hogwartsService: HogwartsService,
    public util: UtilService){
      this.profileList = [];
    }

  
  ngOnInit() {
    if (this.mode == 'teacher' ) 
      this.initTeacher();
    if (this.mode == 'students' )
     this.initStudent();
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

  /*  */
  private initStudent () {
    this._hogwartsService.getStudents().subscribe(
      ( profiles ) => {     
        
        this.profileList = profiles;

        let auxList;
        auxList = localStorage.getItem('profileList');
            
        if (auxList != null) {
          auxList = JSON.parse( auxList )
          this.profileList = this.profileList.concat( auxList );
        
        }
             
        this.dataSource.data = this.profileList;
      }, 
      (err) => {
        console.log(err);
      }
    );
  }

  /*  */
  private initTeacher () {
    this._hogwartsService.getStaff().subscribe(
      ( profiles ) => {
        this.dataSource.data = profiles;
      }, 
      (err) => {
        console.log(err);
      }
    );
  }
}