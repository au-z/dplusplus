'use strict';

import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Rep} from './rep';
import {RepSvc} from './rep.svc';
import {Router} from 'angular2/router';

import {SearchFilter} from '../filter/searchFilter.comp';

import {QueryParams, Filter, FilterOp} from '../govtrack/queryParams';

@Component({
	selector: 'rep-list',
	templateUrl: 'app/rep/rep_list.comp.html',
	styleUrls: ['/dist/app/css/main.css'],
	providers: [RepSvc],
	directives: [SearchFilter]
})

export class RepComp implements OnInit {
	public title = 'Representatives';
	public reps: Rep[];
	public selectedRep: Rep;
	public query: QueryParams;
	errorMessage: string;

	constructor(private _router: Router, private repSvc: RepSvc) {
		var stateFilter = {
			key: 'state',
			operator: 'exact',
			value: 'MN'
		};

		var currentFilter = {
			key: 'current',
			operator: '',
			value: 'true'
		};

		this.query = {
			limit: 50,
			sort: ['person'],
			sortDesc: false,
			filter: [currentFilter, stateFilter],
		};
	}

	ngOnInit() {
		this.getReps(this.query);
	}

	getReps(query: QueryParams){
		this.repSvc.getReps(query).subscribe(
			reps => this.reps = reps,
			error => this.errorMessage = <any>error,
			() => console.log('got reps.'));
	}

	onSelect(rep: Rep){
		console.log(rep.id);
		//unimplemented
	}
}