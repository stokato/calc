/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
 */

import {Component} from '@angular/core';
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
    isActive: boolean;
    sService: SettingsService;

    constructor() {

        this.sService = SettingsService.getInstance();

        this.initFlashInterfase();

        if(this.sService.isLoaded) {
            this.isActive = true;
        } else {
            this.sService.load()
                .then(res => {
                    this.isActive = true;
                },
                error => {
                    alert(error);
                });
        }
    }

    private initFlashInterfase() {
        FlashService.addMethod('recieveFromFlash', (txt) => {
            console.log(txt);
        });

        FlashService.addMethod('getSettings', () => {
            if(this.isActive) {
                return this.sService.settings;
            }
            return false;
        });
    }

    open() {
        if(this.isActive) {
            this.isHidden = false;
        }

        this.sService.settings;
    }

    close() {
        this.isHidden = true;

        // сообщяем что то флешке
        // let value = "Received from JS";

        // FlashService.call('sendFromJS', value);
    }

    saveSettings() {
        SettingsService.getInstance()
            .save()
            .then(res => {
                console.log("Настройки сохранены");
            },
            error => {
                console.log("Ошибка при сохранении настроек");
            });

    }


}