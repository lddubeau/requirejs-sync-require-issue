Test case for issue:

https://github.com/jrburke/r.js/issues/662

To reproduce:

    $ npm install requirejs mocha
    $ node_modules/.bin/mocha spec.js

Test should run without unhandled exception but the following happens intermittently (you may need multiple runs):

    Uncaught Error: Tried loading "A" at /home/ldd/local/lib/node_modules/mocha/bin/A.js then tried node's require("A") and it failed with error: Error: Cannot find module 'A'
          at /tmp/t19/node_modules/requirejs/bin/r.js:2526:27
          at Object.context.execCb (/tmp/t19/node_modules/requirejs/bin/r.js:1890:33)
          at Object.Module.check (/tmp/t19/node_modules/requirejs/bin/r.js:1106:51)
          at Object.Module.enable (/tmp/t19/node_modules/requirejs/bin/r.js:1383:22)
          at Object.Module.init (/tmp/t19/node_modules/requirejs/bin/r.js:1014:26)
          at callGetModule (/tmp/t19/node_modules/requirejs/bin/r.js:1410:63)
          at Object.context.completeLoad (/tmp/t19/node_modules/requirejs/bin/r.js:1784:21)
          at Function.req.load (/tmp/t19/node_modules/requirejs/bin/r.js:2539:17)
          at Object.context.load (/tmp/t19/node_modules/requirejs/bin/r.js:1879:21)
          at Object.Module.load (/tmp/t19/node_modules/requirejs/bin/r.js:1060:29)
          at Object.Module.fetch (/tmp/t19/node_modules/requirejs/bin/r.js:1050:66)
          at Object.Module.check (/tmp/t19/node_modules/requirejs/bin/r.js:1080:26)
          at Object.Module.enable (/tmp/t19/node_modules/requirejs/bin/r.js:1383:22)
          at Object.context.enable (/tmp/t19/node_modules/requirejs/bin/r.js:1751:39)
          at Object.<anonymous> (/tmp/t19/node_modules/requirejs/bin/r.js:1368:33)
          at /tmp/t19/node_modules/requirejs/bin/r.js:372:23
          at each (/tmp/t19/node_modules/requirejs/bin/r.js:297:31)
          at Object.Module.enable (/tmp/t19/node_modules/requirejs/bin/r.js:1330:17)
          at Object.Module.init (/tmp/t19/node_modules/requirejs/bin/r.js:1014:26)
          at null._onTimeout (/tmp/t19/node_modules/requirejs/bin/r.js:1656:36)
          at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
