/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import {Component} from "@angular/core";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

const template = require('./auth.component.html');
const css      = require('./auth.component.css');

@Component({
    selector: 'app-auth',
    template: template,
    styles: [ css ],
    providers: [UserService]
})
export class AuthComponent {
    private email: string;
    private password: string;

    constructor(private userService: UserService, private router: Router) {
        this.email = 'admin@greymag.ru';
        this.password = 'admin';
    }

    onSubmit() {
        this.userService.login(this.email, this.password)
            .then(succes => {
                this.router.navigateByUrl('/workplace');
            },
            error => {
                this.email = '';
                this.password = '';
            });
    }
}
