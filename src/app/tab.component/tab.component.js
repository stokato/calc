/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var technoTemplate = require('./tab.component.html');
var css = require('./tab.component.css');
var TabComponent = (function () {
    function TabComponent() {
    }
    return TabComponent;
}());
exports.TabComponent = TabComponent;
var TechnologicalTabComponent = (function (_super) {
    __extends(TechnologicalTabComponent, _super);
    function TechnologicalTabComponent() {
        var _this = _super.call(this) || this;
        _this.fittingsSidesCalculation = true;
        return _this;
    }
    return TechnologicalTabComponent;
}(TabComponent));
TechnologicalTabComponent = __decorate([
    core_1.Component({
        selector: 'tab-technological',
        template: technoTemplate,
        styles: [css]
    }),
    __metadata("design:paramtypes", [])
], TechnologicalTabComponent);
exports.TechnologicalTabComponent = TechnologicalTabComponent;
var AdvancedTabComponent = (function (_super) {
    __extends(AdvancedTabComponent, _super);
    function AdvancedTabComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdvancedTabComponent;
}(TabComponent));
AdvancedTabComponent = __decorate([
    core_1.Component({
        selector: 'tab-advanced',
        template: "<div></div>",
        styles: [css]
    })
], AdvancedTabComponent);
exports.AdvancedTabComponent = AdvancedTabComponent;
//# sourceMappingURL=tab.component.js.map