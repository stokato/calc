/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { Component } from '@angular/core';

import {TechnologicalTabComponent, AdvancedTabComponent} from "../tab.component/tab.component";

const template = require('./tabs.component.html');
const css      = require('./tabs.component.css');

@Component({
    selector: 'dynamic-tabs',
    entryComponents: [TechnologicalTabComponent, AdvancedTabComponent],
    template: template,
    // styles: [ css ]
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
    }

    viewContent() {
        for(let i = 0; i < this.tabs.length; i++) {
            if(this.tabs[i].active === true) {
                this.componentData = this.tabs[i].component;
            }
        }
    }

    initTab(tab) {
        for(let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false;
        }

        tab.active = true;

        this.componentData = tab.component;
    }
}

