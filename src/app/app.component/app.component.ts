/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import { Component } from '@angular/core';
import {TabsComponent} from "../tabs.component/tabs.component";

// const f2p = require('../vendor/f2pinvoker.js');

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})

export class AppComponent {

    constructor() {
        new TabsComponent();

    }
}