/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import {Component, ViewChild, OnInit} from "@angular/core";
import {WindowComponent, SettingsModalContext} from "../window.component/window.component";
import {Modal, overlayConfigFactory} from "angular2-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {CustomModal} from "../modal.component/modal.component";
import {FlashService} from "../services/flash.service";
import {SettingsService} from "../services/settings.service";

const template = require('./workplace.component.html');
const config = window['config'];

@Component({
    selector: 'work-app',
    template: template,
    providers: [FlashService, SettingsService]
})
export class WorkPlaceComponent  implements OnInit {
    isReady: boolean;
    isFlashReady: boolean;
    flashCallback: string;
    sService: SettingsService;
    @ViewChild('windowApp') windowComponent: WindowComponent;

    constructor(private modal: Modal) {
        this.flashCallback = config.flashSettings.common.callback;
        this.sService = SettingsService.getInstance();
        this.initFlashInterface();
    }

    openWindow() {
        // this.windowComponent.open()
        if(this.isReady) {
            this.modal.open(WindowComponent, overlayConfigFactory({}, BSModalContext));
        }
        // this.modal.open(CustomModal, overlayConfigFactory({num1: 2, num2: 3}, BSModalContext));
    }

    private initFlashInterface() {
        FlashService.addMethod('isReady', () => {
            return this.isReady;
        });

        FlashService.addMethod('flashReady', () => {
            this.isFlashReady = true;
        });

        FlashService.addMethod('getSettings', (taskID) => {
            if(this.isReady && this.isFlashReady) {
                let res = { list: this.sService.settings };

                FlashService.call(this.flashCallback, taskID, res);
            } else {
                console.warn('Метод getSettings вызван при isReady == false');
            }
        });
    }

    ngOnInit() {
        if(this.sService.isLoaded) {
            this.isReady = true;
            console.log('onInit');
        } else {
            this.sService.load()
                .then(res => {
                        this.isReady = true;
                        console.log('onInit');
                    },
                    error => {
                        alert(error);
                    });
        }
    }
}