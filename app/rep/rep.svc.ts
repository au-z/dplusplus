'use strict';

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Rep} from './rep';

import {QueryParams, Filter, FilterOp} from '../../app/govtrack/queryParams';

@Injectable()
export class RepSvc{
	constructor(private http: Http){}

	private _mockRepsUrl = '/app/rep/mock-reps.json';
	private serviceUrl = 'https://www.govtrack.us/api/v2/role';
	private DEFAULT_LIMIT: number = 20;

	getReps(query : QueryParams){
		return this.http.get(this._mockRepsUrl + this.formatQuery(query))
			.map(res => <Rep[]> res.json().objects)
			.catch(this.handleError);
	}

	private formatQuery(q : QueryParams){
		var sortPrefix: string = q.sortDesc ? '-' : '';
		var query: string = '?';

		if(q.filter){
			query += "&"  + q.filter.map(f => this.formatFilterParameter(f)).join("&");
		}
		if (q.sort) {
			query += '&sort=' + q.sort.map(m => sortPrefix + m).join('|');
		}
		query += (q.limit !== null) ? '&limit=' + q.limit : '&limit=' + this.DEFAULT_LIMIT;
		console.log('GOVTRACK QUERY: ' + query);
		return query;
	}

	private formatFilterParameter(f: Filter) {
		if (f.operator) {
			return f.key + '__' + f.operator + '=' + f.value;
		}
		return f.key + '=' + f.value;
	}

	private handleError (e: Response){
		console.log('Error: ' + e);
		return Observable.throw('Server error');
	}
}
