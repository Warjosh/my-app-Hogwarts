import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/classes/profile';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileEditorComponent {

  /*validation for SQL INJECTION */
	public readonly TEXT: string = `${this.util.Pattern.NAMES}`;
	/*validation for only images URLs */
	public readonly PHOTO_URL : string = `${this.util.Pattern.PHOTO_URL}`;

	public profileForm: FormGroup;

	private profileList: Profile[];

  constructor(
		private form: FormBuilder,
		private util: UtilService) {

		this.profileForm = this.form.group({
			name: ['', Validators.required],
			species: [''],
			patronus: [''],
			photo: [''],
			gender: [''],
			birthDate:[(new Date()).toISOString()],
			ancestry: [''],
			eyeColor: [''],
			hairColor: [''],
			wandForm: this.form.group({
					core: [''],
					length: [''],
					wood: ['']
			}),
			actorForm: this.form.group({
					actor: [''],
					alive: ['']
			})
		});
		this.profileList = [];
		let auxList = localStorage.getItem('profileList')
		
		if ( auxList != null)
			this.profileList = JSON.parse( auxList )
	}

  public onSubmit() {
    let profile =  new Profile();
		profile = this.profileForm.value;
		
		this.profileList.push(profile);

		localStorage.setItem('profileList', JSON.stringify(this.profileList));
		
		this.clear();
  }

	private clear () {
		
		this.profileForm = this.form.group({
			name: ['', Validators.required,Validators.pattern(this.TEXT)],
			species: ['',Validators.pattern(this.TEXT)],
			patronus: ['',Validators.pattern(this.TEXT)],
			photo: ['',Validators.pattern(this.PHOTO_URL)],
			gender: [''],
			birthDate:[(new Date()).toISOString()],
			ancestry: [''],
			eyeColor: [''],
			hairColor: [''],
			wandForm: this.form.group({
					core: [''],
					length: [''],
					wood: ['']
			}),
			actorForm: this.form.group({
					actor: [''],
					alive: ['']
			})
		});
	
	}

	
}