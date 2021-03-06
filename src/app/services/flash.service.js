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
var core_1 = require("@angular/core");
//const config = require('../config.json');
var config = window['config'];
var FlashService = (function () {
    function FlashService() {
    }
    FlashService.call = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var flashID = config.flashSettings.flashID;
        var M$ = navigator.appName.indexOf("Microsoft") != -1;
        var flash = (M$ ? window : document)[flashID];
        //TODO: вызов call(method, params)
        if (flash[method]) {
            flash[method].apply(flash, params);
        }
    };
    ;
    FlashService.addMethod = function (method, handler) {
        var flashApi = config.baseSettings.flashApi;
        if (!window[flashApi]) {
            window[flashApi] = {};
        }
        window[flashApi][method] = handler;
    };
    return FlashService;
}());
FlashService = __decorate([
    core_1.Injectable()
], FlashService);
exports.FlashService = FlashService;
//# sourceMappingURL=flash.service.js.map