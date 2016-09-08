import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username: string;
	private client_id = 'd66d57eb786a3a3f5174';
	private client_secret = '179f3cebdbaece0bc856ccfbcebf183a0f39c0b5';

	constructor(private _http:Http){
		this.username = 'BryanSmith33';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json())
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json())
	}

	updateUser(username:string){
		this.username = username;
	}
}