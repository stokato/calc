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
        template: "<div>\n                  <ul class=\"pads\">\n                     <li>\n                        <label>\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0439: </label>\n                        <input type=\"checkbox\" [checked]=\"saveCalcRout\" \n                               (input)=\"saveCalcRout = $event.target.value\" />\n                     </li>\n                     <li>\n                        <label>\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439 \u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438: </label>\n                        <input type=\"checkbox\" [checked]=\"profilesAndPackagesStec\" \n                               (input)=\"profilesAndPackagesStec = $event.target.value\" />\n                     </li>\n                     <li>\n                        <label>\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0440\u043E\u043D \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0444\u0430\u043B\u044C\u0446\u0430: </label>\n                        <input type=\"checkbox\" [checked]=\"fittingsSidesCalculation\" \n                               (input)=\"fittingsSidesCalculation = $event.target.value\" />\n                     </li>\n                  </ul>\n               </div>",
        styles: [require('./tab.component.css')]
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
        template: "<div></div>"
    })
], AdvancedTabComponent);
exports.AdvancedTabComponent = AdvancedTabComponent;
//# sourceMappingURL=tab.component.js.map