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
var mock_reps_1 = require('./mock-reps');
var RepSvc = (function () {
    function RepSvc(http) {
        this.http = http;
        this._mockRepsUrl = 'app/rep/mock-reps.json';
    }
    RepSvc.prototype.getMockReps = function () {
        return Promise.resolve(mock_reps_1.REPS);
    };
    RepSvc.prototype.getReps = function () {
        console.log('huh?');
        return this.http.get(this._mockRepsUrl)
            .map(function (res) { return res.json().data; })
            .do(function (data) { return console.log(data); }) //eyeball
            .catch(this.handleError);
    };
    RepSvc.prototype.handleError = function (error) {
        // console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RepSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RepSvc);
    return RepSvc;
})();
exports.RepSvc = RepSvc;
//# sourceMappingURL=rep.svc.js.map