/**
 * Created by "s.t.o.k.a.t.o" on 08.02.2017.
 */

import {Component} from "@angular/core";

import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router'

const swfObject = require('swfobject');
const config    = require('../config.json');

@Component({
    selector: 'app-swf',
    template: `<div id="BridgeMovie"><p>Loading swf...</p></div>`
})
export class SWFComponent {
    swf: any = swfObject;

    loading: boolean;

    constructor(private router: Router) {

        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });

    }

    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
            this.loadSWF();
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }

    loadSWF () {

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