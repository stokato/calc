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
var core_1 = require("@angular/core");
var window_component_1 = require("../window.component/window.component");
var template = require('./app.component.html');
var css = require('../../assets/css/style.css');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.openWindow = function () {
        this.windowComponent.open();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('windowApp'),
    __metadata("design:type", window_component_1.WindowComponent)
], AppComponent.prototype, "windowComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: template,
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map