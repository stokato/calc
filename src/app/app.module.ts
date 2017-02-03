/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component/app.component';
import { TabsComponent, TabContent } from './tabs.component/tabs.component';
import { TechnologicalTabComponent, AdvancedTabComponent } from './tab.component/tab.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule, FormsModule
    ],
    declarations: [
        AppComponent, TabsComponent, TabContent, TechnologicalTabComponent, AdvancedTabComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}