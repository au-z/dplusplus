'use strict';

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RepCtx} from './rep/repCtx.comp';

import {RepSvc} from './rep/rep.svc';

@Component({
	selector: 'dpp-app',
	templateUrl: 'app/app.comp.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, RepSvc],
})

@RouteConfig([
	{
		path: '/reps',
		name: 'Reps',
		component: RepCtx,
		useAsDefault: true
	}
])

export class DppAppComp{
	title = "Democracy++";
}
