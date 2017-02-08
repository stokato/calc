/**
 * Created by "s.t.o.k.a.t.o" on 06.02.2017.
 */

import {Injectable} from "@angular/core";

const config = require('../config.json');
const F2p = require('../../assets/vendor/F2PInvoker.js');

@Injectable()
export class ServerService {
    static isCreating: boolean = false;
    static instance: ServerService;

    private _f2p: any = F2p;
    private  _issue: Issue;
    private _user: User;

    constructor() {
        if(!ServerService.isCreating) {
            throw new Error("Вы не можете использовать конструктор для этого класса. Воспользуйтесь методом getInstance");
        }

        let gw = config.baseSettings.gateway;
        let defPack = config.baseSettings.defalutPackage;
        let uShort = config.baseSettings.useShort;

        this._f2p.F2PInvoker(gw, defPack, uShort);

        this._issue = new Issue();
        this._user = new User();
    }

    static getInstance() {
        if(ServerService.instance == null) {
            ServerService.isCreating = true;
            ServerService.instance = new ServerService();
            ServerService.isCreating = false;
        }
        
        return ServerService.instance;
    }

    static err (res) {
        alert( ( typeof res.error != 'undefined' ) ? res.error : 'Ошибка при запросе к серверу' );
    }


    request(params) {
        this._f2p.request(...params);
    }

    get issue () {
        return this._issue;
    }

    get user () {
        return this._user;
    }
}

class BaseService {

    constructor(private _service: string ) {}

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
                    ServerService.err({error: 'Ошибка при обработке ответа'})
                }
            }
        };
        console.log(this._service + ' ' + method + ' ' + ' ' + params);

        ServerService.getInstance().request([ this._service, method, callback, ...params ]);
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

class User {
    private baseService : BaseService;

    constructor() {
        this.baseService = new BaseService('UserService');
    }

    public auth (issueId: any, onResult: Function) {
        this.baseService.prepareAndCall('auth', issueId, onResult);
    }
}

