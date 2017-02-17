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
var flash_service_1 = require("../services/flash.service");
var settings_service_1 = require("../services/settings.service");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var angular2_modal_1 = require("angular2-modal");
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
        var _this = this;
        this.dialog = dialog;
        this.isHidden = false;
        this.sService = settings_service_1.SettingsService.getInstance();
        this.initFlashInterfase();
        if (this.sService.isLoaded) {
            this.isActive = true;
            this.isHidden = false;
        }
        else {
            this.sService.load()
                .then(function (res) {
                _this.isActive = true;
            }, function (error) {
                alert(error);
            });
        }
    }
    WindowComponent.prototype.initFlashInterfase = function () {
        var _this = this;
        flash_service_1.FlashService.addMethod('recieveFromFlash', function (txt) {
            console.log(txt);
        });
        flash_service_1.FlashService.addMethod('getSettings', function () {
            if (_this.isActive) {
                return _this.sService.settings;
            }
            return false;
        });
    };
    WindowComponent.prototype.open = function () {
        if (this.isActive) {
            this.isHidden = false;
        }
        this.sService.settings;
    };
    WindowComponent.prototype.close = function () {
        // this.isHidden = true;
        this.dialog.close();
        // сообщяем что то флешке
        // let value = "Received from JS";
        // FlashService.call('sendFromJS', value);
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
WindowComponent = __decorate([
    core_1.Component({
        selector: 'app-window',
        template: template,
        styles: [css],
        providers: [flash_service_1.FlashService, settings_service_1.SettingsService]
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], WindowComponent);
exports.WindowComponent = WindowComponent;
//# sourceMappingURL=window.component.js.map