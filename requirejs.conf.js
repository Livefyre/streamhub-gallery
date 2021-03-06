requirejs.config({
  baseUrl: '/',
  paths: {
    jquery: 'lib/jquery/jquery',
    jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
    text: 'lib/requirejs-text/text',
    hgn: 'lib/requirejs-hogan-plugin/hgn',
    hogan: 'lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
    json: 'lib/requirejs-plugins/src/json',
    base64: 'lib/base64/base64',
    'event-emitter': 'lib/event-emitter/src/event-emitter',
    'livefyre-package-attribute': 'lib/livefyre-package-attribute/src/main',
    inherits: 'lib/inherits/inherits',
    hammerjs: 'lib/hammerjs/dist/hammer',
    rework: 'lib/rework/rework',
    debug: 'lib/debug/debug'
  },

  packages: [{
    name: "streamhub-sdk",
    location: "lib/streamhub-sdk/src/"
  },{
    name: "streamhub-sdk/auth",
    location: "lib/streamhub-sdk/src/auth"
  },{
    name: "streamhub-sdk/collection",
    location: "lib/streamhub-sdk/src/collection"
  },{
    name: "streamhub-sdk/content",
    location: "lib/streamhub-sdk/src/content"
  },{
    name: "streamhub-sdk/modal",
    location: "lib/streamhub-sdk/src/modal"
  },{
    name: 'streamhub-sdk/ui',
    location: 'lib/streamhub-sdk/src/ui'
  },{
    name: "streamhub-sdk-tests",
    location: "lib/streamhub-sdk/tests/"
  },{
    name: "stream",
    location: "lib/stream/src"
  },{
    name: "streamhub-gallery",
  	location: "./src"
  },{
    name: 'streamhub-gallery-tests',
    location: './tests/'
  },{
    name: 'streamhub-ui',
    location: 'lib/streamhub-ui/src'
  },{
    name: 'streamhub-share',
    location: 'lib/streamhub-share/src',
    main: 'share-button.js'
  },{
    name: "livefyre-bootstrap",
    location: "lib/livefyre-bootstrap/src"
  },{
    name: 'view',
    location: 'lib/view/src',
    main: 'view'
  },{
    name: 'auth',
    location: 'lib/auth/src'
  },{
    name: "css",
    location: "lib/require-css",
    main: "css"
  },{
    name: "less",
    location: "lib/require-less",
    main: "less"
  }
  ],
  css: {
    clearFileEachBuild: 'dist/streamhub-gallery.min.css',
    transformEach: {
      requirejs: 'lib/livefyre-package-attribute/tools/prefix-css-requirejs',
      node: 'lib/livefyre-package-attribute/tools/prefix-css-node'
    }
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'jasmine-jquery': {
      deps: ['jquery', 'jasmine']
    },
    jquery: {
        exports: '$'
    },
    hammerjs: {
        exports: 'Hammer'
    },
    rework: {
      exports: 'rework'
    }
  },
  urlArgs: "_=" +  (new Date()).getTime()
});
