/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import {Component, ViewChild} from '@angular/core';
import {TabsComponent} from '../tabs.component/tabs.component';
import {ServerService} from '../services/base.service';

const f2p = require('../../assets/vendor/F2PInvoker.js');

const template = require('./app.component.html');
const css      = require('../../assets/css/style.css');

@Component({
    selector: 'my-app',
    template: template,
    styles: [ css ],
    providers: [ServerService]
})
export class AppComponent {
    srv: ServerService;

    constructor() {
        this.srv = ServerService.getInstance();

        this.srv.issue.compete('1', (res) =>{
            console.log(res);
        });

        new TabsComponent();

        let f = f2p.F2PInvoker("2", "3", true);

        window['recieveFromFlash'] = (txt) => {
            console.log(txt);
        };
    }

    setValueFlash() {
        let value = "Got from JS";

        let movie = this.getMovie();

        movie.sendFromJS(value);
    }

    getMovie() {
        let M$ = navigator.appName.indexOf("Microsoft")!=-1;
        return (M$ ? window : document)["BridgeMovie"];
    }


}