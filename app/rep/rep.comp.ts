import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Rep} from './rep';
import {RepSvc} from './rep.svc';
import {Router} from 'angular2/router';

@Component({
	selector: 'rep-list',
	templateUrl: 'views/rep/rep.comp.html',
	providers: [RepSvc]
})

export class RepComp implements OnInit {
	public title = 'Representatives';
	public reps: Rep[];
	public selectedRep: Rep;
	errorMessage: string;

	constructor(private _router: Router, private _repSvc: RepSvc) { }
	ngOnInit() {
		console.log('hweg');
		this.getReps();
	}
	getReps(){
		console.log('get');
		this._repSvc.getReps().subscribe(
			reps => this.reps = reps, 
			error => this.errorMessage = <any>error,
			() => console.log(this.reps));
	}
	onSelect(rep: Rep){
		console.log(rep.id);
		//unimplemented
	}
}