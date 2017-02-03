/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { Component, Type } from '@angular/core';
import { Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import {TabComponent, TechnologicalTabComponent, AdvancedTabComponent} from "../tab.component/tab.component";

@Component({
    selector: 'dynamic-tabs',
    entryComponents: [TechnologicalTabComponent, AdvancedTabComponent],
    template: require('./tabs.component.html'),
    styles: [ require('./../tab.component/tabs.component.css')]
})
export class TabsComponent {
    componentData = null;
    tabs: any = [];

    constructor() {
        let tabList = [
            {
                active: true,
                title: 'Технологические',
                component: TechnologicalTabComponent,
            },
            {
                active: false,
                title: 'Дополнительно',
                component: AdvancedTabComponent
            }
        ];

        this.tabs = tabList;

        for(let i = 0; i < this.tabs.length; i++) {
            if(this.tabs[i].active === true) {
                this.componentData = this.tabs[i].component;
            }
        }
    }

    initTab(tab) {
        this.componentData = tab.component;
    }
}


@Component({
    selector: 'tab-content',
    template: `<div class="content" id="container" #dynamicComponentContainer></div>`
})
export class TabContent {
    currentComponent = null;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
    dynamicComponentContainer: ViewContainerRef;

    @Input() set componentData(tabType: Type<TabComponent>) {
        if(!tabType) {
            return;
        }

        // Создаем фабрику
        let factory = this.resolver.resolveComponentFactory(tabType);

        // Создаем компанент
        let component = this.dynamicComponentContainer.createComponent(factory);

        // Удаляем старый комнонент
        if(this.currentComponent) {
            this.currentComponent.destroy();
        }

        // Сохраняем новый
        this.currentComponent = component;
    }

    constructor(private resolver: ComponentFactoryResolver) {

    }

}
