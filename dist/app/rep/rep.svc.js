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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var RepSvc = (function () {
    function RepSvc(http) {
        this.http = http;
        this._mockRepsUrl = '/app/rep/mock-reps.json';
        this.serviceUrl = 'https://www.govtrack.us/api/v2/role';
        this.DEFAULT_LIMIT = 20;
    }
    RepSvc.prototype.getReps = function (query) {
        return this.http.get(this.serviceUrl + this.formatQuery(query))
            .map(function (res) { return res.json().objects; })
            .catch(this.handleError);
    };
    RepSvc.prototype.formatQuery = function (q) {
        var _this = this;
        var sortPrefix = q.sortDesc ? '-' : '';
        var query = '?';
        if (q.filter) {
            query += "&" + q.filter.map(function (f) { return _this.formatFilterParameter(f); }).join("&");
        }
        if (q.sort) {
            query += '&sort=' + q.sort.map(function (m) { return sortPrefix + m; }).join('|');
        }
        query += (q.limit !== null) ? '&limit=' + q.limit : '&limit=' + this.DEFAULT_LIMIT;
        console.log('GOVTRACK QUERY: ' + query);
        return query;
    };
    RepSvc.prototype.formatFilterParameter = function (f) {
        if (f.operator) {
            return f.key + '__' + f.operator + '=' + f.value;
        }
        return f.key + '=' + f.value;
    };
    RepSvc.prototype.handleError = function (e) {
        console.log('Error: ' + e);
        return Observable_1.Observable.throw('Server error');
    };
    RepSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RepSvc);
    return RepSvc;
})();
exports.RepSvc = RepSvc;
//# sourceMappingURL=rep.svc.js.map