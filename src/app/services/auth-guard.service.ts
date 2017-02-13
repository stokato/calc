/**
 * Created by "s.t.o.k.a.t.o" on 10.02.2017.
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private user: UserService, private router: Router) {

    }

    canActivate(): boolean {

        if (!this.user.isLoggedIn()) {
            // this.router.navigateByUrl('/auth');
            return false;
        }
        return true;
    }

}