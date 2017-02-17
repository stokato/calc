/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import {Component, ViewChild} from "@angular/core";
import {WindowComponent, SettingsModalContext} from "../window.component/window.component";
import {Modal, overlayConfigFactory} from "angular2-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {CustomModal} from "../modal.component/modal.component";

const template = require('./workplace.component.html');

@Component({
    selector: 'work-app',
    template: template
})
export class WorkPlaceComponent {
    @ViewChild('windowApp') windowComponent: WindowComponent;

    constructor(private modal: Modal) {

    }

    openWindow() {
        // this.windowComponent.open()
        this.modal.open(WindowComponent, overlayConfigFactory({}, BSModalContext));
        // this.modal.open(CustomModal, overlayConfigFactory({num1: 2, num2: 3}, BSModalContext));
    }
}