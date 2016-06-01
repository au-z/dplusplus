'use strict';

import {Component, EventEmitter} from 'angular2/core';
import {Control} from 'angular2/common';
import {QueryParams, Filter, FilterOp} from '../govtrack/queryParams';

@Component({
	selector: 'search-filter',
	events: ['queryEmitter'],
	templateUrl: 'app/filter/searchFilter.comp.html'
})

export class SearchFilterComp{
	public query: QueryParams;
	states = <string[]>['', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
	selectedState: string;

	queryEmitter: EventEmitter<QueryParams>;
	stateControl: Control;

	constructor(){
		this.initQuery();
		this.stateControl = new Control();
		this.queryEmitter = new EventEmitter<QueryParams>();
		this.emitFilterChange(true);
	}

	editStateFilter(value) {
		let filterIdx = this.query.filter.findIndex(f => f.key === 'state');
		if (filterIdx == -1 && value) { //add filter
			this.query.filter.push({
				key: 'state',
				operator: 'exact',
				value: value
			});
		} else if (!value && filterIdx > -1) { //remove filter
			this.query.filter.splice(filterIdx, 1);
		} else { //edit filter
			this.query.filter[filterIdx].value = value;
		}
		this.selectedState = value;
		this.emitFilterChange(true);
	}

	editCurrentFilter(value) {
		let filterIdx = this.query.filter.findIndex(f => f.key === 'current');
		var currentFilter = this.query.filter[filterIdx];
		currentFilter.value = (!JSON.parse(currentFilter.value)).toString();
		this.emitFilterChange(true);
	}

	emitFilterChange(doSearch: boolean){
		this.queryEmitter.next({ query: <QueryParams>this.query });
	}

	initQuery(){
		this.selectedState = 'MN';
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
}