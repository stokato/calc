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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component/app.component");
var tabs_component_1 = require("./tabs.component/tabs.component");
var tab_component_1 = require("./tab.component/tab.component");
var forms_1 = require("@angular/forms");
var window_component_1 = require("./window.component/window.component");
var swf_component_1 = require("./swf.component/swf.component");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            tabs_component_1.TabsComponent,
            tabs_component_1.TabContent,
            tab_component_1.TechnologicalTabComponent,
            tab_component_1.AdvancedTabComponent,
            window_component_1.WindowComponent,
            swf_component_1.SWFComponent,
            routes_1.routedComponents
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map