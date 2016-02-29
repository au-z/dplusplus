'use strict';

import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Rep} from './rep';
import {RepSvc} from './rep.svc';
import {Router} from 'angular2/router';

import {queryParams} from '../govtrack/queryParams';

@Component({
	selector: 'rep-list',
	templateUrl: 'app/rep/rep_list.comp.html',
	styleUrls: ['/dist/app/css/main.css'],
	providers: [RepSvc]
})

export class RepComp implements OnInit {
	public title = 'Representatives';
	public reps: Rep[];
	public selectedRep: Rep;
	public query: queryParams;
	errorMessage: string;

	constructor(private _router: Router, private _repSvc: RepSvc) { }
	ngOnInit() {
		this.getReps(this.query);
	}
	getReps(query: queryParams){
		this._repSvc.getReps(query).subscribe(
			reps => this.reps = reps,
			error => this.errorMessage = <any>error,
			() => console.log("got reps."));
	}
	onSelect(rep: Rep){
		console.log(rep.id);
		//unimplemented
	}
}