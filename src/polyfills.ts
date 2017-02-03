/**
 * Created by "s.t.o.k.a.t.o" on 01.02.2017.
 */

import 'core-js/es6';
import 'core-js/es7/reflect';

require('zone.js/dist/zone');

if(process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}