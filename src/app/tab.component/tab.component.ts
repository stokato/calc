/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { Component } from '@angular/core';

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
export class TechnologicalTabComponent extends TabComponent {
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

        if(this.sService.isLoaded) {
            this.initFields();
        } else {
            this.sService.load()
                .then(res => {
                    this.initFields();
                },
                error => {
                    alert(error);
                });
        }

    }

    private initFields() {
        this.saveCalculationRoute                       = this.sService.getOption('saveCalculationRoute');
        this.profilesPackagesSpec                       = this.sService.getOption('profilesPackagesSpec');
        this.separateContoursBoxSpec                    = this.sService.getOption('separateContoursBoxSpec');
        this.mosquitoNetsSpec                           = this.sService.getOption('mosquitoNetsSpec');
        this.equalityOfTextures                         = this.sService.getOption('equalityOfTextures');
        this.mirrorOptionsSelection                     = this.sService.getOption('mirrorOptionsSelection');
        this.takeGrooveWithSidesCalculation             = this.sService.getOption('takeGrooveWithSidesCalculation');
        this.checkMinRadiusOfBending                    = this.sService.getOption('checkMinRadiusOfBending');
        this.analizeContourAngularDeformation           = this.sService.getOption('analizeContourAngularDeformation');
        this.rectangleFillsArea                         = this.sService.getOption('rectangleFillsArea');
        this.minSideFillsBeadingsCalculate              = this.sService.getOption('minSideFillsBeadingsCalculate');
        this.minSideFillsBeadingsCalculateActive        = (this.minSideFillsBeadingsCalculate > 0);
        this.installCornerImpostlWith2L                 = this.sService.getOption('installCornerImpostlWith2L');
        this.notRoundProfileCount                       = this.sService.getOption('notRoundProfileCount');
        this.activateDefCompoundsForAttachedProfiles    = this.sService.getOption('activateDefCompoundsForAttachedProfiles');
        this.selectNewProfilesWithTexturePriority       = this.sService.getOption('selectNewProfilesWithTexturePriority');
        this.replaceAllFittingsWithProfileChanging      = this.sService.getOption('replaceAllFittingsWithProfileChanging');
    }

    imputOption(option, value) {
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

