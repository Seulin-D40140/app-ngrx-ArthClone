import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AircraftsState , AircraftsStateEnum} from 'src/app/ngrx/aircrafts.state';
import { loginUserAction , logoutUserActionSuccess , logoutUserActionError} from 'src/app/ngrx/authenticate.action';
import { selectLogIsConnected } from 'src/app/ngrx/login.selector';

@Component(
	{
		selector: 'app-login',
		templateUrl: './login.component.html',
		styleUrls: ['./login.component.css']
	})

	export class LoginComponent implements OnInit 
	{
		myForm : FormGroup;
		isLogin$$: Observable<boolean> 
		aircraftsState$:Observable<AircraftsState> | null = null; 
		readonly aircraftsStateEnum = AircraftsStateEnum;


	constructor(private formBuilder: FormBuilder , private store : Store , private router : Router) 
	{
		this.myForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
			password: ['', Validators.required]
		})
		this.isLogin$$ = store.select(selectLogIsConnected)
	}

	ngOnInit(): void 
	{   
		this.aircraftsState$ = this.store.pipe(
			map((state) => { 
			if(state.airbusState.isLogin) {
				this.router.navigateByUrl('aircrafts');
			}
			return state.airbusState;
			})  
		);  
	}

	login(user : User): void 
	{
		this.store.dispatch(new loginUserAction(user));
	}
}
