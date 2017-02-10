/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import {Component, ViewChild} from '@angular/core';
import {WindowComponent} from "../window.component/window.component";
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

    constructor () {


        // console.log();
    }

}
