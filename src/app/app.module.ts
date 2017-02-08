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

@NgModule({
    imports: [
        BrowserModule, FormsModule, CommonModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        TabContent,
        TechnologicalTabComponent,
        AdvancedTabComponent,
        WindowComponent,
        SWFComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}