'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var rep_svc_1 = require('./rep.svc');
var router_1 = require('angular2/router');
var searchFilter_comp_1 = require('../filter/searchFilter.comp');
var RepComp = (function () {
    function RepComp(_router, repSvc) {
        this._router = _router;
        this.repSvc = repSvc;
        this.title = 'Representatives';
        this.states = ['', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
        this.stateFilter = {
            key: 'state',
            operator: 'exact',
            value: 'MN'
        };
        this.currentFilter = {
            key: 'current',
            operator: '',
            value: 'true'
        };
        this.query = {
            limit: 50,
            sort: ['person'],
            sortDesc: false,
            filter: [this.stateFilter, this.currentFilter]
        };
    }
    RepComp.prototype.editStateFilter = function (value) {
        var filterIdx = this.query.filter.findIndex(function (f) { return f.key === 'state'; });
        // console.log(filterIdx);
        if (filterIdx == -1 && value) {
            this.query.filter.push({
                key: 'state',
                operator: 'exact',
                value: value
            });
        }
        else if (!value && filterIdx > -1) {
            this.query.filter.splice(filterIdx, 1);
        }
        else {
            this.query.filter[filterIdx].value = value; //edit filter
        }
        this.getReps(this.query);
    };
    RepComp.prototype.editCurrentFilter = function (value) {
        this.currentFilter.value = (!JSON.parse(this.currentFilter.value)).toString();
        console.log(value);
        this.getReps(this.query);
    };
    RepComp.prototype.ngOnInit = function () {
        this.getReps(this.query);
    };
    RepComp.prototype.getReps = function (query) {
        var _this = this;
        this.repSvc.getReps(query).subscribe(function (reps) { return _this.reps = reps; }, function (error) { return _this.errorMessage = error; }, function () { return console.log('got reps.'); });
    };
    RepComp.prototype.onSelect = function (rep) {
        console.log(rep.id);
        //unimplemented
    };
    RepComp = __decorate([
        core_1.Component({
            selector: 'rep-list',
            templateUrl: 'app/rep/rep_list.comp.html',
            styleUrls: ['/dist/app/css/main.css'],
            providers: [rep_svc_1.RepSvc],
            directives: [searchFilter_comp_1.SearchFilter]
        }), 
        __metadata('design:paramtypes', [router_1.Router, rep_svc_1.RepSvc])
    ], RepComp);
    return RepComp;
})();
exports.RepComp = RepComp;
//# sourceMappingURL=rep_list.comp.js.map