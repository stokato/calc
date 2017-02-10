/**
 * Created by "s.t.o.k.a.t.o" on 06.02.2017.
 */

import {Injectable} from "@angular/core";
import { AuthHttp } from 'angular2-jwt';

const config = require('../config.json');
const F2p = require('../../assets/vendor/F2PInvoker.js');

@Injectable()
export class ServerService {
    static isCreating: boolean = false;
    static instance: ServerService;

    private _f2p: any = F2p;
    private  _issue: Issue;
    private _user: User;
    private _info: Info;
    private _manager: Manager;

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
        this._info = new Info();
        this._manager = new Manager();
    }

    setSID (sid) {
        this._f2p.setSid(sid);
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

    get info () {
        return this._info;
    }

    get manager () {
        return this._manager;
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
            if (obj.errno == F2p.F2PInvoker.ERRNO_AUTH_BLOCKED) {
                // window.location.reload();
                console.log(obj);
            } else {
                try {
                    onResult(obj);
                } catch (e) {
                    console.log(e);
                    ServerService.err({error: 'Ошибка при обработке ответа'})
                }
            }
        };
        console.log(this._service + ' ' + method + ' ' + ' ' + params);

        ServerService.getInstance().request([ this._service, method, callback, ...params ]);
    }

}

class Service {
    protected baseService : BaseService;

    constructor(protected serviceName: string) {
        this.baseService = new BaseService(serviceName);
    }
}

class Issue extends Service {
    constructor() {
        super('IssueService');
    }

    public compete (issueID: any, onResult: Function) {
        this.baseService.prepareAndCall('complete', issueID, onResult);
    }

    public load (issueId: any, onResult: Function) {
        this.baseService.prepareAndCall('load', issueId, onResult);
    }
}

class User extends Service {
    constructor() {
        super('UserService');
    }

    public auth (email: any, password: any, onResult: Function) {
        this.baseService.prepareAndCall('auth', email, password, onResult);
    }

    public logout (onResult: Function) {
        this.baseService.prepareAndCall('logout', onResult);
    }
}

class Info extends Service {
    constructor() {
        super('InfoService');
    }

    public getSettings (onResult: Function) {
        this.baseService.prepareAndCall('getSettings', onResult);
    }
}

class Manager extends Service {
    constructor() {
        super('ManagerService');
    }

    public saveSettingElement (savingOption: any, onResult: Function) {
        this.baseService.prepareAndCall('saveSettingElement', savingOption, onResult);
    }

    public saveSettings (settingsArray: Array<any>, onResult: Function) {
        this.baseService.prepareAndCall('saveSettings', settingsArray, onResult);
    }
}
