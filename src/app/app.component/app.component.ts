/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import { Component } from '@angular/core';
import {TabsComponent} from "../tabs.component/tabs.component";

const f2p = require('../../assets/vendor/F2PInvoker.js');

// import { F2PInvoker } from "../../assets/vendor/F2PInvoker.js";

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})

export class AppComponent {

    constructor() {
        new TabsComponent();

        let f = f2p.F2PInvoker("2", "3", true);

        console.log(f2p);
        console.log(f2p.request("dl", {}));
    }
}