/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
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
var settings_service_1 = require("../services/settings.service");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var angular2_modal_1 = require("angular2-modal");
var tabs_component_1 = require("../tabs.component/tabs.component");
var template = require('./window.component.html');
var css = require('./window.component.css');
var SettingsModalContext = (function (_super) {
    __extends(SettingsModalContext, _super);
    function SettingsModalContext() {
        return _super.call(this) || this;
    }
    return SettingsModalContext;
}(bootstrap_1.BSModalContext));
exports.SettingsModalContext = SettingsModalContext;
var WindowComponent = (function () {
    function WindowComponent(dialog) {
        this.dialog = dialog;
    }
    WindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        settings_service_1.SettingsService.getInstance()
            .load()
            .then(function (res) {
            _this.tabsComponent.viewContent();
        }, function (error) {
            alert(error);
        });
    };
    WindowComponent.prototype.close = function () {
        this.dialog.close();
    };
    WindowComponent.prototype.saveSettings = function () {
        settings_service_1.SettingsService.getInstance()
            .save()
            .then(function (res) {
            console.log("Настройки сохранены");
        }, function (error) {
            console.log("Ошибка при сохранении настроек");
        });
    };
    return WindowComponent;
}());
__decorate([
    core_1.ViewChild('tabsComponent'),
    __metadata("design:type", tabs_component_1.TabsComponent)
], WindowComponent.prototype, "tabsComponent", void 0);
WindowComponent = __decorate([
    core_1.Component({
        selector: 'app-window',
        template: template,
        styles: [css],
        providers: [settings_service_1.SettingsService]
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], WindowComponent);
exports.WindowComponent = WindowComponent;
//# sourceMappingURL=window.component.js.map