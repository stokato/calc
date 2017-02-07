/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
 */

import {Component, Input, Output} from '@angular/core';
import {FlashService} from "../services/flash.service";

const template = require('./window.component.html');
const css      = require('./window.component.css');

@Component({
    selector: 'app-window',
    template: template,
    styles: [css],
    providers: [FlashService]
})
export class WindowComponent {
    isHidden: boolean = true;

    constructor() {
        this.initFlashInterfase();
    }

    private initFlashInterfase() {
        // Передаем флешке метод для открытия окна
        FlashService.addMethod('recieveFromFlash', (txt) => {
            console.log(txt);
        })
    }

    private saveSettings() {
        //TODO: отправляем настройки на сервер

        // сообщяем что то флешке
        let value = "Received from JS";

        FlashService.call('sendFromJS', value);
    }

    open() {
        this.isHidden = false;
    }

    close() {
        this.isHidden = true;
    }
}