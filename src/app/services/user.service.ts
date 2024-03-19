import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable(
	{
		providedIn: 'root'
	})

	export class UserService {

	constructor( private http : HttpClient) { }

	getUsers( user : User)
	{
		
		return this.http.get<User>(environment.host + "/users?email="+user.email+"&password="+user.password)
	}
	
}
