/**
 * Created by "s.t.o.k.a.t.o" on 06.02.2017.
 */

import {Injectable} from "@angular/core";

const config = require('../config.json');
const F2p = require('../../assets/vendor/F2PInvoker.js');

let server: Server;

@Injectable()
export class BaseService {

    constructor( private _service: string ) {
        if(!server) {
            server = new Server();
        }
    }

    public prepareAndCall (name, ...params) {

        let onResult = params.pop();

        this.call(name, params, onResult);
    }

    public call (method: string, params: Array<any>, onResult: Function) {

        let callback = ( obj ) => {
            if (obj.errno == F2p.ERRNO_AUTH_BLOCKED) {
                window.location.reload();
            } else {
                try {
                    onResult(obj);
                } catch (e) {
                    Server.err({error: 'Ошибка при обработке ответа'})
                }
            }
        };

        server.request([ this._service, method, callback, ...params ]);
    }

}


class Server {
    f2p: any = F2p;
    issue: Issue;

    constructor() {
        console.log(config);
        let gw = config.baseSettings.gateway;
        let defPack = config.baseSettings.defalutPackage;
        let uShort = config.baseSettings.useShort;

        this.f2p.F2PInvoker(gw, defPack, uShort);

        this.issue = new Issue();
    }

    request(params) {
        this.f2p.request(...params);
    }

    static err (res) {
        alert( ( typeof res.error != 'undefined' ) ? res.error : 'Ошибка при запросе к серверу' );
    }
}

class Issue {
    private baseService : BaseService;

    constructor() {
        this.baseService = new BaseService('IssueService');
    }

    public compete (issueID: any, onResult: Function) {
        this.baseService.prepareAndCall('complete', issueID, onResult);
    }

    public load (issueId: any, onResult: Function) {
        this.baseService.prepareAndCall('load', issueId, onResult);
    }
}

