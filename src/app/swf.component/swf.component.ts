/**
 * Created by "s.t.o.k.a.t.o" on 08.02.2017.
 */

import {Component} from "@angular/core";

const swfObject = require('swfobject');
const config    = require('../config.json');

@Component({
    selector: 'app-swf',
    template: `<div id="BridgeMovie"><p>Loading swf...</p></div>`
})
export class SWFComponent {
    swf: any = swfObject;

    constructor() {
        let st = config.flashSettings;

        let flashvars = {};

        let params = {
            [st.play] : st.play,
            [st.loop] : st.loop,
            [st.wmode] : st.wmode,
            [st.quality] : st.quality,
            [st.allowScriptAccess] : st.allowScriptAccess,
            [st.scale] : st.scale,
            [st.align] : st.align
        };

        let attributes = {
            // [st.id] : st.id,
            // [st.name] : st.name
        };

        let flash = null;

        this.swf.embedSWF(
            st.src,
            st.flashID,
            st.width,
            st.height,
            st.version,
            st.expressInstallSwfurl,
            flashvars,
            params,
            attributes, function(e) { flash = e.ref; });

    }
}