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

const protocol = config.baseSettings.protocol;

const template = require('./swf.component.html');
const css = require('./swf.component.css');

@Component({
    selector: 'app-swf',
    template: template,
    styles: [ css ]
})
export class SWFComponent {
    swf: any = swfObject;
    protocol: any;
    loading: boolean;

    constructor(private router: Router) {
        this.protocol = protocol;

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

        // swfobject.createCSS("#flashContent", "display:block;text-align:left;");


        let st = config.flashSettings.desktop;

        let flashvars = {
            "f2p"       : config.baseSettings.gateway,
            "uploadUrl" : st.upladUrl,
            "imageUrl"  : st.imageUrl,
        };

        let params = {
            'play'              : st.play,
            'loop'              : st.loop,
            'wmode'             : st.wmode,
            'quality'           : st.quality,
            'allowScriptAccess' : st.allowScriptAccess,
            'allowFullScreen'   : st.allowFullScreen,
            'scale'             : st.scale,
            'align'             : st.align,
            'bgcolor'           : st.bgcolor
        };

        let attributes = {
            'id'    : st.id,
            'name'  : st.name,
            'align' : st.align
        };

        let flash = null;

        this.swf.embedSWF(
            st.src,
            st.flashID,
            st.width,
            st.height,
            st.version,
            st.xiSwfUrlStr,
            flashvars,
            params,
            attributes, function(e) { flash = e.ref; });

    }
}