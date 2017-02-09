/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
 */

import {Component, Input, Output} from '@angular/core';
import {FlashService} from "../services/flash.service";
import {SettingsService} from '../services/settings.service';


const template = require('./window.component.html');
const css      = require('./window.component.css');

@Component({
    selector: 'app-window',
    template: template,
    styles: [css],
    providers: [FlashService, SettingsService]
})
export class WindowComponent {
    isHidden: boolean = true;
    settings: Array<Object>;

    constructor() {
        this.initFlashInterfase();
    }

    private initFlashInterfase() {
        // Передаем флешке метод для открытия окна
        FlashService.addMethod('recieveFromFlash', (txt) => {
            console.log(txt);
        })
    }

    open() {
        this.isHidden = false;
    }

    close() {
        this.isHidden = true;

        // сообщяем что то флешке
        let value = "Received from JS";

        FlashService.call('sendFromJS', value);
    }

    saveSettings() {
        SettingsService.getInstance()
            .save()
            .then(res => {
                console.log("Настройки сохранены");
            },
            error => {
                console.log("Ошибка при сохранении настроек");
            })
    }
}