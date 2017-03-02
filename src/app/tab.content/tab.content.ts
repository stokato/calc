/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Component, ViewContainerRef, ViewChild, Input, Type, ComponentFactoryResolver} from "@angular/core";
import {TabComponent} from "../tab.component/tab.component";

const html = require('./tab.content.html');

@Component({
    selector: 'tab-content',
    template: html
    // styles: [ css ]
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
