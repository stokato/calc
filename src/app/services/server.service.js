/**
 * Created by "s.t.o.k.a.t.o" on 06.02.2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var config = require('../config.json');
var F2p = require('../../assets/vendor/F2PInvoker.js');
var ServerService = ServerService_1 = (function () {
    function ServerService() {
        this._f2p = F2p;
        if (!ServerService_1.isCreating) {
            throw new Error("Вы не можете использовать конструктор для этого класса. Воспользуйтесь методом getInstance");
        }
        var gw = config.baseSettings.gateway;
        var defPack = config.baseSettings.defalutPackage;
        var uShort = config.baseSettings.useShort;
        this._f2p.F2PInvoker(gw, defPack, uShort);
        this._issue = new Issue();
        this._user = new User();
        this._info = new Info();
        this._manager = new Manager();
    }
    ServerService.getInstance = function () {
        if (ServerService_1.instance == null) {
            ServerService_1.isCreating = true;
            ServerService_1.instance = new ServerService_1();
            ServerService_1.isCreating = false;
        }
        return ServerService_1.instance;
    };
    ServerService.err = function (res) {
        alert((typeof res.error != 'undefined') ? res.error : 'Ошибка при запросе к серверу');
    };
    ServerService.prototype.request = function (params) {
        (_a = this._f2p).request.apply(_a, params);
        var _a;
    };
    Object.defineProperty(ServerService.prototype, "issue", {
        get: function () {
            return this._issue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerService.prototype, "info", {
        get: function () {
            return this._info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerService.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        enumerable: true,
        configurable: true
    });
    return ServerService;
}());
ServerService.isCreating = false;
ServerService = ServerService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ServerService);
exports.ServerService = ServerService;
var BaseService = (function () {
    function BaseService(_service) {
        this._service = _service;
    }
    BaseService.prototype.prepareAndCall = function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var onResult = params.pop();
        this.call(name, params, onResult);
    };
    BaseService.prototype.call = function (method, params, onResult) {
        var callback = function (obj) {
            if (obj.errno == F2p.F2PInvoker.ERRNO_AUTH_BLOCKED) {
                // window.location.reload();
                console.log(obj);
            }
            else {
                try {
                    onResult(obj);
                }
                catch (e) {
                    ServerService.err({ error: 'Ошибка при обработке ответа' });
                }
            }
        };
        console.log(this._service + ' ' + method + ' ' + ' ' + params);
        ServerService.getInstance().request([this._service, method, callback].concat(params));
    };
    return BaseService;
}());
var Service = (function () {
    function Service(serviceName) {
        this.serviceName = serviceName;
        this.baseService = new BaseService(serviceName);
    }
    return Service;
}());
var Issue = (function (_super) {
    __extends(Issue, _super);
    function Issue() {
        return _super.call(this, 'IssueService') || this;
    }
    Issue.prototype.compete = function (issueID, onResult) {
        this.baseService.prepareAndCall('complete', issueID, onResult);
    };
    Issue.prototype.load = function (issueId, onResult) {
        this.baseService.prepareAndCall('load', issueId, onResult);
    };
    return Issue;
}(Service));
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, 'UserService') || this;
    }
    User.prototype.auth = function (onResult) {
        this.baseService.prepareAndCall('auth', onResult);
    };
    return User;
}(Service));
var Info = (function (_super) {
    __extends(Info, _super);
    function Info() {
        return _super.call(this, 'InfoService') || this;
    }
    Info.prototype.getSettings = function (onResult) {
        this.baseService.prepareAndCall('getSettings', onResult);
    };
    return Info;
}(Service));
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super.call(this, 'ManagerService') || this;
    }
    Manager.prototype.saveSettingElement = function (savingOption, onResult) {
        this.baseService.prepareAndCall('saveSettingElement', savingOption, onResult);
    };
    Manager.prototype.saveSettings = function (settingsArray, onResult) {
        this.baseService.prepareAndCall('saveSettings', settingsArray, onResult);
    };
    return Manager;
}(Service));
var ServerService_1;
//# sourceMappingURL=server.service.js.map