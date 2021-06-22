import { Injectable } from "@angular/core";

import { HttpClient} from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Profile } from "src/app/classes/profile";

//import { AlertService } from "src/app/core/services/alert.service";

@Injectable()
export class HogwartsService {

  constructor(
    private _http: HttpClient,
    //private _alertService: AlertService
	) { }

	/** */
	public getStaff(): Observable<Profile[]> {
		return this._http.get('http://hp-api.herokuapp.com/api/characters/staff')
		.pipe(
			map((response: any) => {
				return Profile.toClientObject(response);
			}),
			catchError(
				(error) => {
					console.log(error);
					throw error;
				}
		));
	}

	/** */
	public getStudents(): Observable<Profile[]> {
		return this._http.get('http://hp-api.herokuapp.com/api/characters/students')
		.pipe(
			map((response: any) => {
				return Profile.toClientObject(response);
			}),
			catchError(
				(error) => {
					console.log(error);
					throw error;
				}
		));
	}

	/** */
	public getByHouse( _house: string): Observable<Profile[]> {
		return this._http.get( `${'http://hp-api.herokuapp.com/api/characters/house'}/${_house}`)
		.pipe(
			map((response: any) => {
				return Profile.toClientObject(response);
			}),
			catchError(
				(error) => {
					console.log(error);
					throw error;
				}
		));
	}

}