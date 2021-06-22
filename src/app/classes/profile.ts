import { Wand } from 'src/app/classes/wand';
import { TransformDate } from "src/app/utils/TransformDate";

export class Profile {

    /* Example data */
    /* 
        "name":"Harry Potter",
        "species":"human",
        "gender":"male",
        "house":"Gryffindor",
        "dateOfBirth":"31-07-1980",
        "yearOfBirth":1980,
        "ancestry":"half-blood",
        "eyeColour":"green",
        "hairColour":"black",
        "wand":{
            "wood":"holly",
            "core":"phoenix feather",
            "length":11
        },
        "patronus":"stag",
        "hogwartsStudent":true,
        "hogwartsStaff":false,
        "actor":"Daniel Radcliffe",
        "alive":true,
        "image":"http://hp-api.herokuapp.com/images/harry.jpg"
    */

    /** Class attribute description. */
	private _name: string;
	set name(_name: string) { this._name = _name };
	get name(): string { return this._name };

    /** Class attribute description. */
	private _species: string;
	set species(_species: string) { this._species = _species };
	get species(): string { return this._species };

    /** Class attribute description. */
	private _gender: string;
	set gender(_gender: string) { this._gender = _gender };
	get gender(): string { return this._gender };

    /** Class attribute description. */
	private _house: string;
	set house(_house: string) { this._house = _house };
	get house(): string { return this._house };

	/** Class attribute description. */
	private _birthdate: Date;
	set birthdate(_birthdate: Date) { this._birthdate = _birthdate };
	get birthdate(): Date { return this._birthdate };

	/** Class attribute description. */
	private _yearOfBirth: Date;
	set yearOfBirth(_yearOfBirth: Date) { this._yearOfBirth = _yearOfBirth };
	get yearOfBirth(): Date { return this._yearOfBirth };

    /** Class attribute description. */
	private _ancestry: string;
	set ancestry(_ancestry: string) { this._ancestry = _ancestry };
	get ancestry(): string { return this._ancestry };

    /** Class attribute description. */
	private _eyeColor: string;
	set eyeColor(_eyeColor: string) { this._eyeColor = _eyeColor };
	get eyeColor(): string { return this._eyeColor };    

    /** Class attribute description. */
	private _hairColor: string;
	set hairColor(_hairColor: string) { this._hairColor = _hairColor };
	get hairColor(): string { return this._hairColor };

    /** Class attribute description. */
	private _wand: Wand;
	set wand(_wand: Wand) { this._wand = _wand };
	get wand(): Wand { return this._wand };

    /** Class attribute description. */
	private _patronus: string;
	set patronus(_patronus: string) { this._patronus = _patronus };
	get patronus(): string { return this._patronus };
    
    /** Class attribute description. */
	private _hogwartsStudent: boolean;
	set hogwartsStudent(_hogwartsStudent: boolean) { this._hogwartsStudent = _hogwartsStudent };
	get hogwartsStudent(): boolean { return this._hogwartsStudent };
    
    /** Class attribute description. */
	private _hogwartsStaff: boolean;
	set hogwartsStaff(_hogwartsStaff: boolean) { this._hogwartsStaff = _hogwartsStaff };
	get hogwartsStaff(): boolean { return this._hogwartsStaff };    

    /** Class attribute description. */
	private _actor: string;
	set actor(_actor: string) { this._actor = _actor };
	get actor(): string { return this._actor };

    /** Class attribute description. */
	private _photo: string;
	set photo(_photo: string) { this._photo = _photo };
	get photo(): string { return this._photo };

    /** Class attribute description. */
	private _alive: boolean;
	set alive(_alive: boolean) { this._alive = _alive };
	get alive(): boolean { return this._alive };

	constructor (
        _name?: string,
        _species?: string,
        _gender?: string,
        _house?: string,
        _birthdate?: Date,
        _yearOfBirth?: Date,
        _ancestry?: string,
        _eyeColor?: string,
        _hairColor?: string,
        _wand?: Wand,
        _patronus?: string,
        _hogwartsStudent?: boolean,
        _hogwartsStaff?: boolean,
        _actor?: string,
        _photo?: string,
        _alive?: boolean
        ) {
          this._name = _name? _name : ''; 
          this._species = _species? _species : ''; 
          this._gender = _gender? _gender : ''; 
          this._house = _house? _house : ''; 
          this._birthdate = _birthdate? _birthdate : new Date(); 
          this._yearOfBirth = _yearOfBirth? _yearOfBirth : new Date(); 
          this._ancestry = _ancestry? _ancestry : ''; 
          this._eyeColor = _eyeColor? _eyeColor : ''; 
          this._hairColor = _hairColor? _hairColor : ''; 
          this._wand = _wand? _wand : new Wand(); 
          this._patronus = _patronus? _patronus : ''; 
          this._hogwartsStudent = _hogwartsStudent? _hogwartsStudent : false; 
          this._hogwartsStaff = _hogwartsStaff? _hogwartsStaff : false; 
          this._actor = _actor? _actor : ''; 
          this._photo = _photo? _photo : ''; 
          this._alive = _alive? _alive : false; 
	}

   /**
	 * 
	 * @param _data 
	 * @returns _profiles
	 */
	public static toClientObject(_data: any): Profile[] {
    let _profiles: Profile[] = [];

		_data.forEach(( profile: any ) => {
			let _profile: Profile = new Profile();

			_profile.name = profile.name;
      _profile.species = profile.species;
      _profile.gender = profile.gender;
      _profile.house = profile.house;
      
      /* cambiar */
      _profile.birthdate = profile.dateOfBirth != '' ? TransformDate.transformStringToDate(profile.dateOfBirth, '-') : new Date();
      
      _profile.yearOfBirth = profile.yearOfBirth;
      _profile.ancestry = profile.ancestry;
      _profile.eyeColor = profile.eyeColour;
      _profile.hairColor = profile.hairColour;
      _profile.wand.core = profile.wand.core;
      _profile.wand.length = profile.wand.length;
      _profile.wand.wood = profile.wand.wood;
      _profile.patronus = profile.patronus;
      _profile.hogwartsStudent = profile.hogwartsStudent;
      _profile.hogwartsStaff = profile.hogwartsStaff;
      _profile.actor = profile.actor;
      _profile.alive = profile.alive;
      _profile.photo = profile.image;

			_profiles.push(_profile);
		});

		return _profiles;
	} 

   /**
	 * 
	 * @returns _photo
	 */
	public getPhotoURL(): string {
		return `url(${this.photo})`;
	}
}
