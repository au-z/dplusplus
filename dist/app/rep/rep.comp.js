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
var RepComp = (function () {
    function RepComp(_router, _repSvc) {
        this._router = _router;
        this._repSvc = _repSvc;
        this.title = 'Representatives';
    }
    RepComp.prototype.ngOnInit = function () {
        console.log('hweg');
        this.getReps();
    };
    RepComp.prototype.getReps = function () {
        var _this = this;
        console.log('get');
        this._repSvc.getReps().subscribe(function (reps) { return _this.reps = reps; }, function (error) { return _this.errorMessage = error; }, function () { return console.log(_this.reps); });
    };
    RepComp.prototype.onSelect = function (rep) {
        console.log(rep.id);
        //unimplemented
    };
    RepComp = __decorate([
        core_1.Component({
            selector: 'rep-list',
            templateUrl: 'views/rep/rep.comp.html',
            providers: [rep_svc_1.RepSvc]
        }), 
        __metadata('design:paramtypes', [router_1.Router, rep_svc_1.RepSvc])
    ], RepComp);
    return RepComp;
})();
exports.RepComp = RepComp;
//# sourceMappingURL=rep.comp.js.map