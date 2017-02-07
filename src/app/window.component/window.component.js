/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
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
var flash_service_1 = require("../services/flash.service");
var template = require('./window.component.html');
var css = require('./window.component.css');
var WindowComponent = (function () {
    function WindowComponent() {
        this.isHidden = true;
        this.initFlashInterfase();
    }
    WindowComponent.prototype.initFlashInterfase = function () {
        // Передаем флешке метод для открытия окна
        flash_service_1.FlashService.addMethod('recieveFromFlash', function (txt) {
            console.log(txt);
        });
    };
    WindowComponent.prototype.saveSettings = function () {
        //TODO: отправляем настройки на сервер
        // сообщяем что то флешке
        var value = "Received from JS";
        flash_service_1.FlashService.call('sendFromJS', value);
    };
    WindowComponent.prototype.open = function () {
        this.isHidden = false;
    };
    WindowComponent.prototype.close = function () {
        this.isHidden = true;
    };
    return WindowComponent;
}());
WindowComponent = __decorate([
    core_1.Component({
        selector: 'app-window',
        template: template,
        styles: [css],
        providers: [flash_service_1.FlashService]
    }),
    __metadata("design:paramtypes", [])
], WindowComponent);
exports.WindowComponent = WindowComponent;
//# sourceMappingURL=window.component.js.map