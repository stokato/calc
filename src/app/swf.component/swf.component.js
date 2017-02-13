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
var protocol = config.baseSettings.protocol;
var template = require('./swf.component.html');
var css = require('./swf.component.css');
var SWFComponent = (function () {
    function SWFComponent(router) {
        var _this = this;
        this.router = router;
        this.swf = swfObject;
        this.protocol = protocol;
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
        // swfobject.createCSS("#flashContent", "display:block;text-align:left;");
        var st = config.flashSettings.desktop;
        var flashvars = {
            "f2p": config.baseSettings.gateway,
            "uploadUrl": st.upladUrl,
            "imageUrl": st.imageUrl,
        };
        var params = {
            'play': st.play,
            'loop': st.loop,
            'wmode': st.wmode,
            'quality': st.quality,
            'allowScriptAccess': st.allowScriptAccess,
            'allowFullScreen': st.allowFullScreen,
            'scale': st.scale,
            'align': st.align,
            'bgcolor': st.bgcolor
        };
        var attributes = {
            'id': st.id,
            'name': st.name,
            'align': st.align
        };
        var flash = null;
        this.swf.embedSWF(st.src, st.flashID, st.width, st.height, st.version, st.xiSwfUrlStr, flashvars, params, attributes, function (e) { flash = e.ref; });
    };
    return SWFComponent;
}());
SWFComponent = __decorate([
    core_1.Component({
        selector: 'app-swf',
        template: template,
        styles: [css]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SWFComponent);
exports.SWFComponent = SWFComponent;
//# sourceMappingURL=swf.component.js.map