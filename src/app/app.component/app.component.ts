/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {WindowComponent} from "../window.component/window.component";
import {Overlay} from "angular2-modal";
// import { AuthService } from '../services/auth.service';

const template = require('./app.component.html');
// const css      = require('../../assets/css/style.css');

@Component({
    selector: 'my-app',
    template: template,
    styles: [  ],
    // providers: [AuthService]
})
export class AppComponent {

    constructor (overlay: Overlay, viewContainer: ViewContainerRef) {
        overlay.defaultViewContainer = viewContainer;

        // debugger;
    }

}
