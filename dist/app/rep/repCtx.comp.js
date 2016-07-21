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
var repCard_comp_1 = require('./repCard.comp');
var rep_svc_1 = require('./rep.svc');
var router_1 = require('angular2/router');
var searchFilter_comp_1 = require('../filter/searchFilter.comp');
var RepCtx = (function () {
    function RepCtx(router, repSvc) {
        this.router = router;
        this.repSvc = repSvc;
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
    }
    RepCtx.prototype.ngOnInit = function () {
        this.getReps(this.query);
    };
    RepCtx.prototype.onSearch = function (event) {
        this.getReps(event.query);
    };
    RepCtx.prototype.getReps = function (query) {
        var _this = this;
        this.repSvc.getReps(query).subscribe(function (reps) { return _this.reps = reps; }, function (error) { return _this.errorMessage = error; });
    };
    RepCtx.prototype.onSelect = function (rep) {
        console.log(rep.id);
    };
    RepCtx = __decorate([
        core_1.Component({
            selector: 'rep-context',
            inputs: ['query'],
            templateUrl: 'app/rep/repCtx.comp.html',
            styleUrls: ['/dist/app/css/main.css'],
            providers: [rep_svc_1.RepSvc],
            directives: [searchFilter_comp_1.SearchFilterComp, repCard_comp_1.RepCard]
        }), 
        __metadata('design:paramtypes', [router_1.Router, rep_svc_1.RepSvc])
    ], RepCtx);
    return RepCtx;
}());
exports.RepCtx = RepCtx;
//# sourceMappingURL=repCtx.comp.js.map