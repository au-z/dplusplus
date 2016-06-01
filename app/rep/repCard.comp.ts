'use-strict';

import {Component, View} from 'angular2/core';

import {RepCtx} from './repCtx.comp';
import {Rep} from './rep';

@Component({
	selector: 'rep-card',
	inputs: ['rep'],
	templateUrl: 'app/rep/repCard.comp.html',
	styleUrls: ['/dist/app/css/main.css'],
})

export class RepCard{
	rep: Rep;
}