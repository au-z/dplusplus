import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Rep} from './rep';
import {REPS} from './mock-reps';

@Injectable()

export class RepSvc{
	constructor(private http: Http){}
	private _mockRepsUrl = 'app/rep/mock-reps.json';

	getMockReps(){
		return Promise.resolve(REPS);
	}

	getReps(){
		console.log('huh?');
		return this.http.get(this._mockRepsUrl)
				.map(res => <Rep[]> res.json().data)
				.do(data => console.log(data)) //eyeball
				.catch(this.handleError);
	}

	private handleError (error: Response){
		// console.log(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
