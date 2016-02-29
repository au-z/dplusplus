'use strict';

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Rep} from './rep';

import {queryParams} from '../../app/govtrack/queryParams';

@Injectable()

export class RepSvc{
	constructor(private http: Http){}
	// private _mockRepsUrl = 'https://www.govtrack.us/api/v2/role';
	private _mockRepsUrl = '/app/rep/mock-reps.json';
	private DEFAULT_LIMIT: number = 20;

	getReps(query : queryParams){
		return this.http.get(this._mockRepsUrl + this.formatQuery(query))
			.map(res => <Rep[]> res.json().objects)
			// .do(data => console.log(data))
			.catch(this.handleError);
	}
	getRep(id: number) {
		return this.http.get(this._mockRepsUrl)
			.map(res => <Rep[]>res.json())
			.map(reps => reps.filter(rep => rep.id === id));
	}

	private formatQuery(q : queryParams){
		var query: string = "?"
		query += "limit=" + (q.limit == null) ? this.DEFAULT_LIMIT : q.limit;
	}

	private handleError (e: Response){
		console.log("Error: " + e);
		return Observable.throw('Server error');
	}
}
