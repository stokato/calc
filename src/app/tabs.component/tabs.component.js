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
var core_2 = require("@angular/core");
var tab_component_1 = require("../tab.component/tab.component");
var template = require('./tabs.component.html');
var css = require('./tabs.component.css');
var TabsComponent = (function () {
    function TabsComponent() {
        this.componentData = null;
        this.tabs = [];
        var tabList = [
            {
                active: true,
                title: 'Технологические',
                component: tab_component_1.TechnologicalTabComponent,
            },
            {
                active: false,
                title: 'Дополнительно',
                component: tab_component_1.AdvancedTabComponent
            }
        ];
        this.tabs = tabList;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].active === true) {
                this.componentData = this.tabs[i].component;
            }
        }
    }
    TabsComponent.prototype.initTab = function (tab) {
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false;
        }
        tab.active = true;
        this.componentData = tab.component;
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-tabs',
        entryComponents: [tab_component_1.TechnologicalTabComponent, tab_component_1.AdvancedTabComponent],
        template: template,
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;
var TabContent = (function () {
    function TabContent(resolver) {
        this.resolver = resolver;
        this.currentComponent = null;
    }
    Object.defineProperty(TabContent.prototype, "componentData", {
        set: function (tabType) {
            if (!tabType) {
                return;
            }
            // Создаем фабрику
            var factory = this.resolver.resolveComponentFactory(tabType);
            // Создаем компанент
            var component = this.dynamicComponentContainer.createComponent(factory);
            // Удаляем старый комнонент
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            // Сохраняем новый
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    return TabContent;
}());
__decorate([
    core_2.ViewChild('dynamicComponentContainer', { read: core_2.ViewContainerRef }),
    __metadata("design:type", core_2.ViewContainerRef)
], TabContent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    core_2.Input(),
    __metadata("design:type", core_1.Type),
    __metadata("design:paramtypes", [core_1.Type])
], TabContent.prototype, "componentData", null);
TabContent = __decorate([
    core_1.Component({
        selector: 'tab-content',
        template: "<div ><div class=\"panel-body\" id=\"container\" #dynamicComponentContainer></div></div> ",
    }),
    __metadata("design:paramtypes", [core_2.ComponentFactoryResolver])
], TabContent);
exports.TabContent = TabContent;
//# sourceMappingURL=tabs.component.js.map