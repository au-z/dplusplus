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
	states: string[];
	stateFilter: Filter;
	currentFilter: Filter;

	constructor(private _router: Router, private repSvc: RepSvc) {
		this.states = ['', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
		
		this.stateFilter = {
			key: 'state',
			operator: 'exact' as FilterOp,
			value: 'MN'
		};

		this.currentFilter = {
			key: 'current',
			operator: '' as FilterOp,
			value: 'true'
		};

		this.query = {
			limit: 50,
			sort: ['person'],
			sortDesc: false,
			filter: [this.stateFilter, this.currentFilter]
		};
	}

	editStateFilter(value) {
		let filterIdx = this.query.filter.findIndex(f => f.key === 'state');
		// console.log(filterIdx);
		if (filterIdx == -1 && value){ //add filter
			this.query.filter.push({
				key: 'state',
				operator: 'exact',
				value: value
			});
		} else if (!value && filterIdx > -1){ //remove filter
			this.query.filter.splice(filterIdx, 1);
		} else {
			this.query.filter[filterIdx].value = value; //edit filter
		}
		this.getReps(this.query);
	}

	editCurrentFilter(value){
		this.currentFilter.value = (!JSON.parse(this.currentFilter.value)).toString();
		console.log(value);
		this.getReps(this.query);
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