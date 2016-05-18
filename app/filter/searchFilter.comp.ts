'use strict';

import {Component, Output} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {QueryParams} from '../govtrack/queryParams';

@Component({
	selector: 'search-filter',
	templateUrl: 'app/filter/searchFilter.comp.html'
})

export class SearchFilter {
	@Output() queryOut: QueryParams;
	public query: QueryParams;
	submitted = false;
	onSubmit() {
		this.submitted = true;
		console.log('submitted');
	}
	get debug() { return JSON.stringify(this.query); }
}