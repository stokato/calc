/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import {Component, ViewChild} from "@angular/core";
import {WindowComponent} from "../window.component/window.component";

const template = require('./workplace.component.html');

@Component({
    selector: 'work-app',
    template: template
})
export class WorkPlaceComponent {
    @ViewChild('windowApp') windowComponent: WindowComponent;

    constructor() {

    }

    openWindow() {
        this.windowComponent.open()
    }
}