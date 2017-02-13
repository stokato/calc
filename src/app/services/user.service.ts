/**
 * Created by "s.t.o.k.a.t.o" on 10.02.2017.
 */

import { Injectable } from '@angular/core';

import { ServerService } from './server.service';
import {error} from "util";

@Injectable()
export class UserService {
    private loggedIn = false;
    private server: ServerService;

    constructor() {
        this.server = ServerService.getInstance();

        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email: string, password: string) {

        return new Promise((resolve, reject) => {
            this.server.user.auth(email, password, (res) => {
                //{"user":{"userId":1,"email":"admin@greymag.ru","role":2}}
                if(res.user) {
                    localStorage.setItem('auth_token', res.sid);
                    this.loggedIn = true;
                    this.server.setSID(res.sid);

                    resolve();
                }

                if(res.error) {
                    console.log(error);

                    reject();
                }

                reject();
            });
        });

    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}