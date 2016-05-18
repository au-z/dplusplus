'use strict';

export interface QueryParams{
	limit: number;
	sort: string[];
	sortDesc: boolean;
	filter: Filter[]; 
}

export interface Filter{
	key: string;
	operator: FilterOp;
	value: string;
}

export type FilterOp =
	'contains' |
	'exact' |
	'gt' |
	'lt' |
	'gte' |
	'lte' |
	'in' |
	'startswith' |
	'range' |
	'';