/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
 */

import {Component, OnInit, ViewChild} from '@angular/core';
import {FlashService} from "../services/flash.service";
import {SettingsService} from '../services/settings.service';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {ModalComponent, DialogRef} from "angular2-modal";
import {TabsComponent} from "../tabs.component/tabs.component";


const template = require('./window.component.html');
const css      = require('./window.component.css');

export class SettingsModalContext extends BSModalContext {
    constructor() {
        super();
    }
}

@Component({
    selector: 'app-window',
    template: template,
    styles: [css],
    providers: [SettingsService]
})
export class WindowComponent implements ModalComponent<SettingsModalContext>, OnInit {

    @ViewChild('tabsComponent') private tabsComponent : TabsComponent;

    constructor(public dialog: DialogRef<SettingsModalContext>) {}

    ngOnInit() {
        SettingsService.getInstance()
            .load()
            .then(res => {
                    this.tabsComponent.viewContent();
                },
                error => {
                    alert(error);
                });
    }

    close() {
        this.dialog.close();
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