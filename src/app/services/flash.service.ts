/**
 * Created by "s.t.o.k.a.t.o" on 07.02.2017.
 */

import {Injectable} from "@angular/core";

const config = require('../config.json');

@Injectable()
export class FlashService {
    static call(method: string, params: any) {
        let flashID = config.flashSettings.flashID;

        let M$ = navigator.appName.indexOf("Microsoft")!=-1;
        let flash = (M$ ? window : document)[flashID];

        //TODO: вызов call(method, params)
        if(flash[method]) {
           flash[method](params);
        }
    };

    static addMethod (method: string, handler: Function) {

        let flashApi = config.baseSettings.flashApi;

        if(!window[flashApi]) {
            window[flashApi] = {};
        }

        window[flashApi][method] = handler;
    }
}