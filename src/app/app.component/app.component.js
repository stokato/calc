/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tabs_component_1 = require('../tabs.component/tabs.component');
var base_service_1 = require('../services/base.service');
var f2p = require('../../assets/vendor/F2PInvoker.js');
var template = require('./app.component.html');
var css = require('../../assets/css/style.css');
var AppComponent = (function () {
    function AppComponent() {
        this.srv = base_service_1.ServerService.getInstance();
        this.srv.issue.compete('1', function (res) {
            console.log(res);
        });
        new tabs_component_1.TabsComponent();
        var f = f2p.F2PInvoker("2", "3", true);
        window['recieveFromFlash'] = function (txt) {
            console.log(txt);
        };
    }
    AppComponent.prototype.setValueFlash = function () {
        var value = "Got from JS";
        var movie = this.getMovie();
        movie.sendFromJS(value);
    };
    AppComponent.prototype.getMovie = function () {
        var M$ = navigator.appName.indexOf("Microsoft") != -1;
        return (M$ ? window : document)["BridgeMovie"];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: template,
            styles: [css],
            providers: [base_service_1.ServerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map