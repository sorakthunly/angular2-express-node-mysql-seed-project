import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class UserService {

	http: any;

	constructor(@Inject(HttpClient) http) {
		this.http = http;
	}

	getUsers() {
		return this.http.get('http://localhost:3300/');
	}

	addUser(data) {
		const headers = new HttpHeaders({"Content-Type": "application/json"});
		return this.http.post('http://localhost:3300/adduser',
      JSON.stringify(data), { headers: headers });
	}


}
