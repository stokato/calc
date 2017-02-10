/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component/app.component';
import { TabsComponent, TabContent } from './tabs.component/tabs.component';
import { TechnologicalTabComponent, AdvancedTabComponent } from './tab.component/tab.component';
import { FormsModule } from '@angular/forms';
import { WindowComponent} from './window.component/window.component';
import { SWFComponent } from './swf.component/swf.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

import { routing, routedComponents } from './routes';

@NgModule({
    imports: [
        BrowserModule, FormsModule, CommonModule, routing
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        TabContent,
        TechnologicalTabComponent,
        AdvancedTabComponent,
        WindowComponent,
        SWFComponent,
        routedComponents
    ],
    providers: [AuthGuard, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}