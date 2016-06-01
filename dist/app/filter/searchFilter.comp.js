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
var common_1 = require('angular2/common');
var SearchFilterComp = (function () {
    function SearchFilterComp() {
        this.states = ['', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
        this.initQuery();
        this.stateControl = new common_1.Control();
        this.queryEmitter = new core_1.EventEmitter();
        this.emitFilterChange(true);
    }
    SearchFilterComp.prototype.editStateFilter = function (value) {
        var filterIdx = this.query.filter.findIndex(function (f) { return f.key === 'state'; });
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
            this.query.filter[filterIdx].value = value;
        }
        this.selectedState = value;
        this.emitFilterChange(true);
    };
    SearchFilterComp.prototype.editCurrentFilter = function (value) {
        var filterIdx = this.query.filter.findIndex(function (f) { return f.key === 'current'; });
        var currentFilter = this.query.filter[filterIdx];
        currentFilter.value = (!JSON.parse(currentFilter.value)).toString();
        this.emitFilterChange(true);
    };
    SearchFilterComp.prototype.emitFilterChange = function (doSearch) {
        this.queryEmitter.next({ query: this.query });
    };
    SearchFilterComp.prototype.initQuery = function () {
        this.selectedState = 'MN';
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
            limit: 20,
            sort: ['person'],
            sortDesc: false,
            filter: [stateFilter, currentFilter]
        };
    };
    SearchFilterComp = __decorate([
        core_1.Component({
            selector: 'search-filter',
            events: ['queryEmitter'],
            templateUrl: 'app/filter/searchFilter.comp.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFilterComp);
    return SearchFilterComp;
})();
exports.SearchFilterComp = SearchFilterComp;
//# sourceMappingURL=searchFilter.comp.js.map