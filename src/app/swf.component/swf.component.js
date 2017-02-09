/**
 * Created by "s.t.o.k.a.t.o" on 08.02.2017.
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
var router_1 = require("@angular/router");
var swfObject = require('swfobject');
var config = require('../config.json');
var SWFComponent = (function () {
    function SWFComponent(router) {
        var _this = this;
        this.router = router;
        this.swf = swfObject;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    SWFComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.loading = false;
            this.loadSWF();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof router_1.NavigationError) {
            this.loading = false;
        }
    };
    SWFComponent.prototype.loadSWF = function () {
        var st = config.flashSettings;
        var flashvars = {};
        var params = (_a = {},
            _a[st.play] = st.play,
            _a[st.loop] = st.loop,
            _a[st.wmode] = st.wmode,
            _a[st.quality] = st.quality,
            _a[st.allowScriptAccess] = st.allowScriptAccess,
            _a[st.scale] = st.scale,
            _a[st.align] = st.align,
            _a);
        var attributes = {};
        var flash = null;
        this.swf.embedSWF(st.src, st.flashID, st.width, st.height, st.version, st.expressInstallSwfurl, flashvars, params, attributes, function (e) { flash = e.ref; });
        var _a;
    };
    return SWFComponent;
}());
SWFComponent = __decorate([
    core_1.Component({
        selector: 'app-swf',
        template: "<div id=\"BridgeMovie\"><p>Loading swf...</p></div>"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SWFComponent);
exports.SWFComponent = SWFComponent;
//# sourceMappingURL=swf.component.js.map