'use strict';

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Rep} from './rep';

@Injectable()

export class RepSvc{
	constructor(private http: Http){}
	private _mockRepsUrl = 'https://www.govtrack.us/api/v2/role?current=true';

	getReps(){
		return this.http.get(this._mockRepsUrl)
			.map(res => <Rep[]> res.json().objects)
			.do(data => console.log(data))
			.catch(this.handleError);
	}
	getRep(id: number) {
		return this.http.get(this._mockRepsUrl)
			.map(res => <Rep[]>res.json())
			.map(reps => reps.filter(rep => rep.id === id));
	}

	private handleError (e: Response){
		console.log("Error: " + e);
		return Observable.throw('Server error');
	}
}
