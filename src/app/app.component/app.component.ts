/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */


import {Component, ViewChild} from '@angular/core';
import {TabsComponent} from '../tabs.component/tabs.component';
import {BaseService} from '../services/base.service';

const f2p = require('../../assets/vendor/F2PInvoker.js');

const template = require('./app.component.html');
const css      = require('../../assets/css/style.css');

@Component({
    selector: 'my-app',
    template: template,
    styles: [ css ],
    providers: [BaseService]
})
export class AppComponent {
    _BaseService: BaseService;

    constructor() {
        this._BaseService = new BaseService('f2p');
        this._BaseService.call('getSettings', ['one', 'two'], (err) => {
           console.log(err);
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