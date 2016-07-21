'use strict';

import {Component, View, OnInit} from 'angular2/core';

import {Rep} from './rep';
import {RepCard} from './repCard.comp';
import {RepSvc} from './rep.svc';
import {Router} from 'angular2/router';

import {SearchFilterComp} from '../filter/searchFilter.comp';
import {QueryParams, Filter, FilterOp} from '../govtrack/queryParams';

@Component({
	selector: 'rep-context',
	inputs: ['query'],
	templateUrl: 'app/rep/repCtx.comp.html',
	styleUrls: ['/dist/app/css/main.css'],
	providers: [RepSvc],
	directives: [SearchFilterComp, RepCard]
})

export class RepCtx implements OnInit{
	public reps: Rep[];
	public selectedRep: Rep;
	public query: QueryParams;
	errorMessage: string;

	stateFilter: Filter;
	currentFilter: Filter;

	constructor(private router: Router, private repSvc: RepSvc){
		var stateFilter = {
			key: 'state',
			operator: 'exact' as FilterOp,
			value: 'MN'
		} as Filter;

		var currentFilter = {
			key: 'current',
			operator: '' as FilterOp,
			value: 'true'
		} as Filter;

		this.query = {
			limit: 20,
			sort: ['person'],
			sortDesc: false,
			filter: [stateFilter, currentFilter]
		};
	}

	ngOnInit(){
		this.getReps(this.query);
	}

	onSearch(event){
		this.getReps(event.query);
	}

	getReps(query: QueryParams) {
		this.repSvc.getReps(query).subscribe(
			reps => this.reps = reps,
			error => this.errorMessage = <any>error);
	}

	onSelect(rep: Rep){
		console.log(rep.id);
	}
}