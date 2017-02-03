/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import { Component } from '@angular/core';

export class TabComponent {

}

@Component({
    selector: 'tab-technological',
    template: `<div>
                  <ul class="pads">
                     <li>
                        <label>Сохранять маршрут вычислений: </label>
                        <input type="checkbox" [checked]="saveCalcRout" 
                               (input)="saveCalcRout = $event.target.value" />
                     </li>
                     <li>
                        <label>Спецификация профилей и пакетов для сборки: </label>
                        <input type="checkbox" [checked]="profilesAndPackagesStec" 
                               (input)="profilesAndPackagesStec = $event.target.value" />
                     </li>
                     <li>
                        <label>Расчет сторон фурнитуры с учетом фальца: </label>
                        <input type="checkbox" [checked]="fittingsSidesCalculation" 
                               (input)="fittingsSidesCalculation = $event.target.value" />
                     </li>
                  </ul>
               </div>`,
    styles: [require('./tab.component.css')]
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
    template: `<div></div>`
})
export class AdvancedTabComponent extends TabComponent {

}

