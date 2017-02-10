/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import {ServerService} from './server.service';
import {Injectable} from "@angular/core";
import {error} from "util";

const config = require('../config.json');

@Injectable()
export class SettingsService {
    static isCreating: boolean = false;
    static instance: SettingsService;

    server: ServerService;
    settings: Array<any> = null;
    dictionary: any;
    private _isLoaded:boolean = false;

    constructor() {
        if(!SettingsService.isCreating) {
            throw new Error("Вы не можете использовать конструктор для этого класса. Воспользуйтесь методом getInstance");
        }
        this.server = ServerService.getInstance();
        this.dictionary = config.settingsDictionary;

        // this.load()
        //     .then(res => {
        //
        //     },
        //     error => {
        //         console.log(error);
        //     });
    }

    static getInstance() {
        if(SettingsService.instance == null) {
            SettingsService.isCreating = true;
            SettingsService.instance = new SettingsService();
            SettingsService.isCreating = false;
        }

        return SettingsService.instance;
    }

    load () {
        return new Promise((resolve, reject) => {
            this.server.info.getSettings((res) => {
                if(res && res.list) {
                    this.settings = res.list;
                    this._isLoaded = true;
                    resolve();
                } else {
                    reject(new Error('Неверный ответ сервера при запросе настроек'));
                }
            })
        });
    };

    get isLoaded () {
        return this._isLoaded;
    }

    save () {
        return new Promise((resolve, reject) => {
            this.server.manager.saveSettings(this.settings, (res) => {
                resolve(res);
            });
        });
    }

    saveOption () {
        return new Promise((resolve, reject) => {
            this.server.manager.saveSettingElement({uid: 'test', type : 0, value: true}, (res) => {
                console.log(res);
            })
        })
    }

    setOption( key: string, value: any ) {

            let field = this.dictionary.fields[key];
            if(!field) {
                throw new Error('Попытка сохранить настройку, которой нет в словаре');
            }
            if(!field.uid) {
                throw new Error('Попытка сохранить настройку, для которой в словаре не задан uid');
            }

            let option = this.getOptionByUID(field.uid);

            if(option) {
                option.value = value;
            } else {
                this.settings.push({
                    uid: field.uid,
                    type: field.type,
                    value: value
                });
            }
    }

    // getOption( key: string ) {
    //
    //     return new Promise((resolve, reject) => {
    //        if(this.settings == null) {
    //            this.load()
    //                .then(res => {
    //                     return this.getLoadedOption(key);
    //                 },error => {
    //                    reject(error)
    //                })
    //                .then(value => {
    //                     resolve(value);
    //                 }, error => {
    //                     reject(error);
    //                 });
    //        } else {
    //            this.getLoadedOption(key)
    //                .then(value => {
    //                    resolve(value);
    //                },
    //                error => {
    //                    reject(error);
    //                });
    //        }
    //     });
    // };

    // setOption( key: string, value: any ) {
    //
    //     return new Promise((resolve, reject) => {
    //         let field = this.dictionary.fields['key'];
    //         if(!field) {
    //             reject(new Error('Попытка сохранить настройку, которой нет в словаре'));
    //         }
    //         if(!field.uid) {
    //             reject(new Error('Попытка сохранить настройку, для которой в словаре не задан uid'));
    //         }
    //
    //         let option = this.getOptionByUID(field.uid);
    //
    //         if(option) {
    //             option.value = value;
    //         } else {
    //             this.settings.push({
    //                 uid: field.uid,
    //                 type: field.type,
    //                 value: value
    //             });
    //         }
    //
    //         resolve();
    //     });
    // }

    getOption( key: string ) {

            let field = this.dictionary.fields[key];
            if(!field) {
                throw new Error('Запрошена настройка, которой нет в словаре');
            }
            if(!field.uid) {
                throw new Error('Для запрощенной настройки в словаре не задан uid');
            }

            let option = this.getOptionByUID(field.uid);

            if(!option) {
                return this.dictionary.fields[key].default;
            }

            return option.value;
    }

    // private getLoadedOption( key: string ) {
    //     return new Promise((resolve, reject) => {
    //         let field = this.dictionary.fields[key];
    //         if(!field) {
    //             reject(new Error('Запрошена настройка, которой нет в словаре'));
    //         }
    //         if(!field.uid) {
    //             reject(new Error('Для запрощенной настройки в словаре не задан uid'));
    //         }
    //
    //         let option = this.getOptionByUID(field.uid);
    //
    //         if(!option) {
    //             resolve(this.dictionary.fields[key].default);
    //         }
    //
    //         resolve(option.value);
    //     });
    // }

    private getOptionByUID(uid: string) {
        for(let i = 0; i < this.settings.length; i++) {
            if(this.settings[i].uid == uid) {
                return this.settings[i];
            }
        }

        return null;
    }
}