/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import {Component, OnInit} from '@angular/core';

import { SettingsService } from '../services/settings.service';
import {error} from "util";


const technoTemplate = require('./tab.component.html');
const css            = require('./tab.component.css');

export class TabComponent {

}

@Component({
    selector: 'tab-technological',
    template: technoTemplate,
    styles: [ css ],
    providers: [ SettingsService ]
})
export class TechnologicalTabComponent extends TabComponent implements OnInit{
    sService: SettingsService;

    private saveCalculationRoute: boolean;
    private profilesPackagesSpec:  boolean;
    private separateContoursBoxSpec:  boolean;
    private mosquitoNetsSpec:  boolean;
    private equalityOfTextures:  boolean;
    private mirrorOptionsSelection:  boolean;
    private takeGrooveWithSidesCalculation:  boolean;
    private checkMinRadiusOfBending:  boolean;
    private analizeContourAngularDeformation:  boolean;
    private rectangleFillsArea:  boolean;
    private minSideFillsBeadingsCalculateActive: boolean;
    private minSideFillsBeadingsCalculate: number;
    private installCornerImpostlWith2L:  boolean;
    private notRoundProfileCount:  boolean;
    private activateDefCompoundsForAttachedProfiles:  boolean;
    private selectNewProfilesWithTexturePriority:  boolean;
    private replaceAllFittingsWithProfileChanging:  boolean;

    constructor() {
        super();

        this.sService = SettingsService.getInstance();
    }

    ngOnInit() {
        this.initFields();
    }

    private initFields() {
        this.saveCalculationRoute                       = this.sService.getOptionValue('saveCalculationRoute');
        this.profilesPackagesSpec                       = this.sService.getOptionValue('profilesPackagesSpec');
        this.separateContoursBoxSpec                    = this.sService.getOptionValue('separateContoursBoxSpec');
        this.mosquitoNetsSpec                           = this.sService.getOptionValue('mosquitoNetsSpec');
        this.equalityOfTextures                         = this.sService.getOptionValue('equalityOfTextures');
        this.mirrorOptionsSelection                     = this.sService.getOptionValue('mirrorOptionsSelection');
        this.takeGrooveWithSidesCalculation             = this.sService.getOptionValue('takeGrooveWithSidesCalculation');
        this.checkMinRadiusOfBending                    = this.sService.getOptionValue('checkMinRadiusOfBending');
        this.analizeContourAngularDeformation           = this.sService.getOptionValue('analizeContourAngularDeformation');
        this.rectangleFillsArea                         = this.sService.getOptionValue('rectangleFillsArea');
        this.minSideFillsBeadingsCalculate              = this.sService.getOptionValue('minSideFillsBeadingsCalculate');
        this.minSideFillsBeadingsCalculateActive        = (this.minSideFillsBeadingsCalculate > 0);
        this.installCornerImpostlWith2L                 = this.sService.getOptionValue('installCornerImpostlWith2L');
        this.notRoundProfileCount                       = this.sService.getOptionValue('notRoundProfileCount');
        this.activateDefCompoundsForAttachedProfiles    = this.sService.getOptionValue('activateDefCompoundsForAttachedProfiles');
        this.selectNewProfilesWithTexturePriority       = this.sService.getOptionValue('selectNewProfilesWithTexturePriority');
        this.replaceAllFittingsWithProfileChanging      = this.sService.getOptionValue('replaceAllFittingsWithProfileChanging');

        console.log(this.installCornerImpostlWith2L);
        console.log(this.notRoundProfileCount);
    }

    inputOption(option, value) {
        this[option] = value;

        console.log(option);
        console.log(this.minSideFillsBeadingsCalculate);

        this.minSideFillsBeadingsCalculateActive = (this.minSideFillsBeadingsCalculate > 0);


        this.sService.setOption(option, value);
    }
}

@Component({
    selector: 'tab-advanced',
    template: `<div></div>`,
    styles: [ css ]
})
export class AdvancedTabComponent extends TabComponent {

}

