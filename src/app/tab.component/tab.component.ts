/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { Component } from '@angular/core';


const technoTemplate = require('./tab.component.html');
const css            = require('../../assets/css/style.css');

export class TabComponent {

}

@Component({
    selector: 'tab-technological',
    template: technoTemplate,
    styles: [ css ]
})
export class TechnologicalTabComponent extends TabComponent {
    private saveCalcRout: boolean;
    private profilesAndPackagesStec: boolean;
    private fittingsSidesCalculation: boolean;

    constructor() {
        super();

        this.fittingsSidesCalculation = true;
    }
}

@Component({
    selector: 'tab-advanced',
    template: `<div></div>`,
    styles: [ css ]
})
export class AdvancedTabComponent extends TabComponent {

}

