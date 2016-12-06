(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Phaser", [], factory);
	else if(typeof exports === 'object')
		exports["Phaser"] = factory();
	else
		root["Phaser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var OS = {

    /**
    * @property {boolean} desktop - Is running on a desktop?
    * @default
    */
    desktop: false,

    /**
    * @property {boolean} webApp - Set to true if running as a WebApp, i.e. within a WebView
    * @default
    */
    webApp: false,

    /**
    * @property {boolean} iOS - Is running on iOS?
    * @default
    */
    iOS: false,

    /**
    * @property {number} iOSVersion - If running in iOS this will contain the major version number.
    * @default
    */
    iOSVersion: 0,

    /**
    * @property {boolean} iPhone - Is running on iPhone?
    * @default
    */
    iPhone: false,

    /**
    * @property {boolean} iPad - Is running on iPad?
    * @default
    */
    iPad: false,

    /**
    * @property {boolean} cocoonJS - Is the game running under CocoonJS?
    * @default
    */
    cocoonJS: false,
    
    /**
    * @property {boolean} cocoonJSApp - Is this game running with CocoonJS.App?
    * @default
    */
    cocoonJSApp: false,
    
    /**
    * @property {boolean} cordova - Is the game running under Apache Cordova?
    * @default
    */
    cordova: false,
    
    /**
    * @property {boolean} node - Is the game running under Node.js?
    * @default
    */
    node: false,
    
    /**
    * @property {boolean} nodeWebkit - Is the game running under Node-Webkit?
    * @default
    */
    nodeWebkit: false,
    
    /**
    * @property {boolean} electron - Is the game running under GitHub Electron?
    * @default
    */
    electron: false,
    
    /**
    * @property {boolean} ejecta - Is the game running under Ejecta?
    * @default
    */
    ejecta: false,

    /**
    * @property {boolean} crosswalk - Is the game running under the Intel Crosswalk XDK?
    * @default
    */
    crosswalk: false,

    /**
    * @property {boolean} android - Is running on android?
    * @default
    */
    android: false,

    /**
    * @property {boolean} chromeOS - Is running on chromeOS?
    * @default
    */
    chromeOS: false,

    /**
    * @property {boolean} linux - Is running on linux?
    * @default
    */
    linux: false,

    /**
    * @property {boolean} macOS - Is running on macOS?
    * @default
    */
    macOS: false,

    /**
    * @property {boolean} windows - Is running on windows?
    * @default
    */
    windows: false,

    /**
    * @property {boolean} windowsPhone - Is running on a Windows Phone?
    * @default
    */
    windowsPhone: false,

    /**
    * @property {boolean} vita - Is running on a PlayStation Vita?
    * @default
    */
    vita: false,

    /**
    * @property {boolean} kindle - Is running on an Amazon Kindle?
    * @default
    */
    kindle: false,

    /**
    * @property {number} pixelRatio - PixelRatio of the host device?
    * @default
    */
    pixelRatio: 1

};

function init ()
{
    var ua = navigator.userAgent;

    if (/Windows/.test(ua))
    {
        OS.windows = true;
    }
    else if (/Mac OS/.test(ua))
    {
        OS.macOS = true;
    }
    else if (/Linux/.test(ua))
    {
        OS.linux = true;
    }
    else if (/Android/.test(ua))
    {
        OS.android = true;
    }
    else if (/iP[ao]d|iPhone/i.test(ua))
    {
        OS.iOS = true;
        (navigator.appVersion).match(/OS (\d+)/);
        OS.iOSVersion = parseInt(RegExp.$1, 10);
    }
    else if (/Kindle/.test(ua) || (/\bKF[A-Z][A-Z]+/).test(ua) || (/Silk.*Mobile Safari/).test(ua))
    {
        OS.kindle = true;

        // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
        // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
    }
    else if (/CrOS/.test(ua))
    {
        OS.chromeOS = true;
    }
    else if ((/Playstation Vita/).test(ua))
    {
        OS.vita = true;
    }

    if (/Windows Phone/i.test(ua) || (/IEMobile/i).test(ua))
    {
        OS.android = false;
        OS.iOS = false;
        OS.macOS = false;
        OS.windows = true;
        OS.windowsPhone = true;
    }

    var silk = (/Silk/).test(ua);

    if (OS.windows || OS.macOS || (OS.linux && !silk) || OS.chromeOS)
    {
        OS.desktop = true;
    }

    //  Windows Phone / Table reset
    if (OS.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua))))
    {
        OS.desktop = false;
    }

    //  WebApp mode in iOS
    if (navigator.standalone)
    {
        OS.webApp = true;
    }
    
    if (window.cordova !== undefined)
    {
        OS.cordova = true;
    }
    
    if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined'))
    {
        OS.node = true;
    }
    
    if (OS.node && typeof process.versions === 'object')
    {
        OS.nodeWebkit = !!process.versions['node-webkit'];
        
        OS.electron = !!process.versions.electron;
    }
    
    if (navigator.isCocoonJS)
    {
        OS.cocoonJS = true;

        try
        {
            OS.cocoonJSApp = (typeof CocoonJS !== 'undefined');
        }
        catch (error)
        {
            OS.cocoonJSApp = false;
        }
    }

    if (window.ejecta !== undefined)
    {
        OS.ejecta = true;
    }

    if ((/Crosswalk/).test(ua))
    {
        OS.crosswalk = true;
    }

    OS.iPhone = ua.toLowerCase().indexOf('iphone') !== -1;
    OS.iPad = ua.toLowerCase().indexOf('ipad') !== -1;

    OS.pixelRatio = window['devicePixelRatio'] || 1;

    return OS;
}

module.exports = init();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ },
/* 1 */
/***/ function(module, exports) {

var CONST = {

    VERSION: '3.0.0',

    AUTO: 0,
    CANVAS: 1,
    WEBGL: 2,

    state: {

        PENDING: 0,
        INSTALLED: 1,

        BOOT: 0,
        INIT: 1,
        PRELOAD: 2,
        CREATE: 3,
        UPDATE: 4,
        RENDER: 5,
        SHUTDOWN: 6

    },

    blendModes: {

        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16

    },

    scaleModes: {

        DEFAULT: 0,
        LINEAR: 0,
        NEAREST: 1

    }

};

module.exports = CONST;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);

var Browser = {

    /**
    * @property {boolean} arora - Set to true if running in Arora.
    * @default
    */
    arora: false,

    /**
    * @property {boolean} chrome - Set to true if running in Chrome.
    * @default
    */
    chrome: false,

    /**
    * @property {number} chromeVersion - If running in Chrome this will contain the major version number.
    * @default
    */
    chromeVersion: 0,

    /**
    * @property {boolean} epiphany - Set to true if running in Epiphany.
    * @default
    */
    epiphany: false,

    /**
    * @property {boolean} firefox - Set to true if running in Firefox.
    * @default
    */
    firefox: false,

    /**
    * @property {number} firefoxVersion - If running in Firefox this will contain the major version number.
    * @default
    */
    firefoxVersion: 0,

    /**
    * @property {boolean} mobileSafari - Set to true if running in Mobile Safari.
    * @default
    */
    mobileSafari: false,

    /**
    * @property {boolean} ie - Set to true if running in Internet Explorer.
    * @default
    */
    ie: false,

    /**
    * @property {number} ieVersion - If running in Internet Explorer this will contain the major version number. Beyond IE10 you should use Device.trident and Device.tridentVersion.
    * @default
    */
    ieVersion: 0,

    /**
    * @property {boolean} midori - Set to true if running in Midori.
    * @default
    */
    midori: false,

    /**
    * @property {boolean} opera - Set to true if running in Opera.
    * @default
    */
    opera: false,

    /**
    * @property {boolean} safari - Set to true if running in Safari.
    * @default
    */
    safari: false,

    /**
    * @property {number} safariVersion - If running in Safari this will contain the major version number.
    * @default
    */
    safariVersion: 0,

    /**
    * @property {boolean} trident - Set to true if running a Trident version of Internet Explorer (IE11+)
    * @default
    */
    trident: false,

    /**
    * @property {number} tridentVersion - If running in Internet Explorer 11 this will contain the major version number. See {@link http://msdn.microsoft.com/en-us/library/ie/ms537503(v=vs.85).aspx}
    * @default
    */
    tridentVersion: 0,

    /**
    * @property {boolean} edge - Set to true if running in Microsoft Edge browser.
    * @default
    */
    edge: false,

    /**
    * @property {boolean} silk - Set to true if running in the Silk browser (as used on the Amazon Kindle)
    * @default
    */
    silk: false

};

function init ()
{
    var ua = navigator.userAgent;

    if ((/Arora/).test(ua))
    {
        Browser.arora = true;
    }
    else if (/Edge\/\d+/.test(ua))
    {
        Browser.edge = true;
    }
    else if ((/Chrome\/(\d+)/).test(ua) && !OS.windowsPhone)
    {
        Browser.chrome = true;
        Browser.chromeVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/Epiphany/).test(ua))
    {
        Browser.epiphany = true;
    }
    else if ((/Firefox\D+(\d+)/).test(ua))
    {
        Browser.firefox = true;
        Browser.firefoxVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/AppleWebKit/).test(ua) && OS.iOS)
    {
        Browser.mobileSafari = true;
    }
    else if ((/MSIE (\d+\.\d+);/).test(ua))
    {
        Browser.ie = true;
        Browser.ieVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/Midori/).test(ua))
    {
        Browser.midori = true;
    }
    else if ((/Opera/).test(ua))
    {
        Browser.opera = true;
    }
    else if ((/Safari/).test(ua) && !OS.windowsPhone)
    {
        Browser.safari = true;
    }
    else if ((/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/).test(ua))
    {
        Browser.ie = true;
        Browser.trident = true;
        Browser.tridentVersion = parseInt(RegExp.$1, 10);
        Browser.ieVersion = parseInt(RegExp.$3, 10);
    }

    //  Silk gets its own if clause because its ua also contains 'Safari'
    if ((/Silk/).test(ua))
    {
        Browser.silk = true;
    }

    return Browser;
}

module.exports = init();


/***/ },
/* 3 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The GameObject Factory is a global level container of Factory instances.
* Factories register themselves with this container (when required)
*
* @class Phaser.GameObject.Factory
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/

var factories = {};

var FactoryContainer = function ()
{
    console.log('FactoryContainer is alive');

    this.register = function (factory)
    {
        if (factories.hasOwnProperty(factory.KEY))
        {
            console.log('Already registered', factory.KEY);

            return this.getType(factory.KEY);
        }

        console.log('registering', factory.KEY);

        factories[factory.KEY] = {
            add: factory.add,
            make: factory.make
        };

        return factory;
    };

    this.getType = function (key)
    {
        return factories[key];
    };

    this.load = function (dest, isFactory)
    {
        for (var factory in factories)
        {
            if (factories.hasOwnProperty(factory))
            {
                // console.log('Loading', factory);

                dest[factory] = (isFactory) ? factories[factory].add : factories[factory].make;
            }
        }

        return dest;
    };

    return this;
};

module.exports = FactoryContainer();


/***/ },
/* 4 */
/***/ function(module, exports) {

var Event = function (type)
{
    this.type = type;

    this.target;

    this._propagate = true;
};

Event.prototype.constructor = Event;

Event.prototype = {

    reset: function (target)
    {
        this.target = target;

        this._propagate = true;
    },

    stopPropagation: function ()
    {
        this._propagate = false;
    }

};

module.exports = Event;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var EventBinding = __webpack_require__(32);

var EventDispatcher = function ()
{
    this.bindings = {};
    this.filters = [];
    this.hasFilters = false;
};

EventDispatcher.prototype.constructor = EventDispatcher;

EventDispatcher.prototype = {

    getBinding: function (type)
    {
        if (this.bindings.hasOwnProperty(type))
        {
            return this.bindings[type];
        }
    },

    createBinding: function (type)
    {
        if (!this.getBinding(type))
        {
            this.bindings[type] = new EventBinding(this, type);
        }

        return this.bindings[type];
    },

    on: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        var binding = this.createBinding(type);

        if (binding)
        {
            binding.add(listener, priority, false);
        }

        return this;
    },

    once: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        var binding = this.createBinding(type);

        if (binding)
        {
            binding.add(listener, priority, true);
        }

        return this;
    },

    //  Add a callback that is notified every time this EventDispatcher dispatches an event
    //  no matter what the event type is. Filters are invoked first, before any bindings,
    //  and can stop events if they wish (in which case they'll never reach the bindings)
    filter: function (callback)
    {
        var i = this.filters.indexOf(callback);

        if (i === -1)
        {
            //  Add the filter
            this.filters.push(callback);
        }
        else
        {
            //  Remove the filter
            this.filters.splice(i, 1);
        }
        
        this.hasFilters = (this.filters.length > 0);

        return this;
    },

    has: function (type, listener)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            return binding.has(listener);
        }
        else
        {
            return false;
        }
    },

    total: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            return binding.total();
        }
    },

    //  Removes an event listener.
    //  If there is no matching listener registered with the EventDispatcher, a call to this method has no effect.
    off: function (type, listener)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.remove(listener);
        }

        return this;
    },

    _dispatchHandler: function (event)
    {
        event.reset(this);

        //  Pass the event through the filters first

        if (this.hasFilters)
        {
            for (var i = 0; i < this.filters.length; i++)
            {
                this.filters[i].call(this, event);

                //  Did the filter kill the event? If so, we can abort now
                if (!event._propagate)
                {
                    return;
                }
            }
        }

        var binding = this.getBinding(event.type);

        if (binding)
        {
            binding.dispatch(event);
        }
    },

    dispatch: function (event)
    {
        if (Array.isArray(event))
        {
            for (var i = 0; i < event.length; i++)
            {
                this._dispatchHandler(event[i]);
            }
        }
        else
        {
            this._dispatchHandler(event);
        }
    },

    //  Removes all listeners, but retains the event type entries
    removeAll: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.removeAll();
        }

        return this;
    },

    removeAllFilters: function ()
    {
        this.filters.length = 0;

        this.hasFilters = false;

        return this;
    },

    delete: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.destroy();

            delete this.bindings[type];
        }

        return this;
    },

    deleteAll: function ()
    {
        for (var binding in this.bindings)
        {
            binding.destroy();
        }

        this.bindings = {};
    },

    destroy: function ()
    {
        this.deleteAll();
        this.removeAllFilters();
    }

};

module.exports = EventDispatcher;


/***/ },
/* 6 */
/***/ function(module, exports) {

//  Creates an XHRSettings Object with default values

var XHRSettings = function (responseType, async, user, password, timeout)
{
    if (responseType === undefined) { responseType = ''; }
    if (async === undefined) { async = true; }
    if (user === undefined) { user = ''; }
    if (password === undefined) { password = ''; }
    if (timeout === undefined) { timeout = 0; }

    // Before sending a request, set the xhr.responseType to "text", 
    // "arraybuffer", "blob", or "document", depending on your data needs. 
    // Note, setting xhr.responseType = '' (or omitting) will default the response to "text".

    return {

        //  Ignored by the Loader, only used by File.
        responseType: responseType,

        async: async,

        //  credentials
        user: user,
        password: password,

        //  timeout in ms (0 = no timeout)
        timeout: timeout,

        //  setRequestHeader
        header: undefined,
        headerValue: undefined,

        //  overrideMimeType
        overrideMimeType: undefined

    };
    
};

module.exports = XHRSettings;


/***/ },
/* 7 */
/***/ function(module, exports) {

//  Source object
//  The key as a string, or an array of keys, i.e. 'banner', or 'banner.hideBanner'
//  The default value to use if the key doesn't exist

var GetObjectValue = function (source, key, defaultValue)
{
    if (key.indexOf('.'))
    {
        keys = key.split('.');

        var parent = source;
        var value = defaultValue;

        //  Use for loop here so we can break early
        for (var i = 0; i < keys.length; i++)
        {
            if (parent.hasOwnProperty(keys[i]))
            {
                //  Yes it has a key property, let's carry on down
                value = parent[keys[i]];

                parent = parent[keys[i]];
            }
            else
            {
                break;
            }
        }

        return value;
    }
    else
    {
        return (source.hasOwnProperty(key) ? source[key] : defaultValue);
    }

}

module.exports = GetObjectValue;


/***/ },
/* 8 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var CanvasPool = __webpack_require__(10);

var Features = {

    /**
    * @property {boolean} canvas - Is canvas available?
    * @default
    */
    canvas: false,

    /**
    * @property {?boolean} canvasBitBltShift - True if canvas supports a 'copy' bitblt onto itself when the source and destination regions overlap.
    * @default
    */
    canvasBitBltShift: null,

    /**
    * @property {boolean} webGL - Is webGL available?
    * @default
    */
    webGL: false,

    /**
    * @property {boolean} file - Is file available?
    * @default
    */
    file: false,

    /**
    * @property {boolean} fileSystem - Is fileSystem available?
    * @default
    */
    fileSystem: false,

    /**
    * @property {boolean} localStorage - Is localStorage available?
    * @default
    */
    localStorage: false,

    /**
    * @property {boolean} worker - Is worker available?
    * @default
    */
    worker: false,

    /**
    * @property {boolean} pointerLock - Is Pointer Lock available?
    * @default
    */
    pointerLock: false,

    /**
    * @property {boolean} vibration - Does the device support the Vibration API?
    * @default
    */
    vibration: false,

    /**
    * @property {boolean} getUserMedia - Does the device support the getUserMedia API?
    * @default
    */
    getUserMedia: true,

    /**
    * @property {boolean} littleEndian - Is the device big or little endian? (only detected if the browser supports TypedArrays)
    * @default
    */
    littleEndian: false,

    /**
    * @property {boolean} support32bit - Does the device context support 32bit pixel manipulation using array buffer views?
    * @default
    */
    support32bit: false

};

/**
* Check Little or Big Endian system.
*
* @author Matt DesLauriers (@mattdesl)
*/
function checkIsLittleEndian ()
{
    var a = new ArrayBuffer(4);
    var b = new Uint8Array(a);
    var c = new Uint32Array(a);

    b[0] = 0xa1;
    b[1] = 0xb2;
    b[2] = 0xc3;
    b[3] = 0xd4;

    if (c[0] === 0xd4c3b2a1)
    {
        return true;
    }

    if (c[0] === 0xa1b2c3d4)
    {
        return false;
    }
    else
    {
        //  Could not determine endianness
        return null;
    }
}

function init ()
{
    console.log('Features.init');

    Features.canvas = !!window['CanvasRenderingContext2D'] || OS.cocoonJS;

    try
    {
        Features.localStorage = !!localStorage.getItem;
    }
    catch (error)
    {
        Features.localStorage = false;
    }

    Features.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    Features.fileSystem = !!window['requestFileSystem'];

    var isUint8 = false;

    var testWebGL = function ()
    {
        if (window['WebGLRenderingContext'])
        {
            try
            {
                var canvas = CanvasPool.createWebGL(this);

                if (OS.cocoonJS)
                {
                    canvas.screencanvas = false;
                }

                var ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

                var canvas2D = CanvasPool.create2D(this);

                var ctx2D = canvas2D.getContext('2d');

                //  Can't be done on a webgl context
                var image = ctx2D.createImageData(1, 1);
    
                /**
                * Test to see if ImageData uses CanvasPixelArray or Uint8ClampedArray.
                *
                * @author Matt DesLauriers (@mattdesl)
                */
                isUint8 = image.data instanceof Uint8ClampedArray;

                CanvasPool.remove(canvas);
                CanvasPool.remove(canvas2D);

                return (ctx !== null);
            }
            catch (e)
            {
                return false;
            }
        }
        
        return false;
    };

    Features.webGL = testWebGL();

    Features.worker = !!window['Worker'];

    Features.pointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    Features.getUserMedia = Features.getUserMedia && !!navigator.getUserMedia && !!window.URL;

    // Older versions of firefox (< 21) apparently claim support but user media does not actually work
    if (Browser.firefox && Browser.firefoxVersion < 21)
    {
        Features.getUserMedia = false;
    }

    // Excludes iOS versions as they generally wrap UIWebView (eg. Safari WebKit) and it
    // is safer to not try and use the fast copy-over method.
    if (!OS.iOS && (Browser.ie || Browser.firefox || Browser.chrome))
    {
        Features.canvasBitBltShift = true;
    }

    // Known not to work
    if (Browser.safari || Browser.mobileSafari)
    {
        Features.canvasBitBltShift = false;
    }

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate)
    {
        Features.vibration = true;
    }

    if (typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint32Array !== 'undefined')
    {
        Features.littleEndian = checkIsLittleEndian();
    }

    Features.support32bit = (
        typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8ClampedArray !== 'undefined' &&
        typeof Int32Array !== 'undefined' &&
        Features.littleEndian !== null &&
        isUint8
    );

    return Features;
}

module.exports = init();


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);

/**
 * The pool into which the canvas elements are placed.
 *
 * @property pool
 * @type Array
 */
var pool = [];

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games on the same page
//  can share the one single pool

/**
* The CanvasPool is a global static object, that allows Phaser to recycle and pool Canvas DOM elements.
*
* @class Phaser.CanvasPool
* @static
*/
var CanvasPool = function ()
{
    /**
    * Creates a new Canvas DOM element, or pulls one from the pool if free.
    * 
    * @method Phaser.CanvasPool.create
    * @static
    * @param {any} parent - The parent of the canvas element.
    * @param {number} width - The width of the canvas element.
    * @param {number} height - The height of the canvas element.
    * @return {HTMLCanvasElement} The canvas element.
    */
    var create = function (parent, width, height, type)
    {
        if (width === undefined) { width = 1; }
        if (height === undefined) { height = 1; }
        if (type === undefined) { type = CONST.CANVAS; }

        var canvas;
        var container = first(type);

        if (container === null)
        {
            console.log('CanvasPool.create new');

            container = {
                parent: parent,
                canvas: document.createElement('canvas'),
                type: type
            };

            pool.push(container);

            canvas = container.canvas;
        }
        else
        {
            console.log('CanvasPool.create existing');

            container.parent = parent;

            canvas = container.canvas;
        }

        if (width !== undefined)
        {
            canvas.width = width;
            canvas.height = height;
        }

        return canvas;
    };

    var create2D = function (parent, width, height)
    {
        return create(parent, width, height, CONST.CANVAS);
    };

    var createWebGL = function (parent, width, height)
    {
        return create(parent, width, height, CONST.WEBGL);
    };

    /**
    * Gets the first free canvas index from the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getFirst
    * @return {number}
    */
    var first = function (type)
    {
        if (type === undefined) { type = CONST.CANVAS; }

        pool.forEach(function (container)
        {
            if (!container.parent && container.type === type)
            {
                return container;
            }
        });

        return null;
    };

    /**
    * Looks up a canvas based on its parent, and if found puts it back in the pool, freeing it up for re-use.
    * The canvas has its width and height set to 1, and its parent attribute nulled.
    * 
    * @static
    * @method Phaser.CanvasPool.remove
    * @param {any|HTMLCanvasElement} parent - The parent of the canvas element.
    */
    var remove = function (parent)
    {
        //  Check to see if the parent is a canvas object
        var isCanvas = parent instanceof HTMLCanvasElement;

        pool.forEach(function (container)
        {
            if ((isCanvas && container.canvas === parent) || (!isCanvas && container.parent === parent))
            {
                console.log('CanvasPool.remove found and removed');
                container.parent = null;
                container.canvas.width = 1;
                container.canvas.height = 1;
            }
        });
    };

    /**
    * Gets the total number of used canvas elements in the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getTotal
    * @return {number} The number of in-use (parented) canvas elements in the pool.
    */
    var total = function ()
    {
        var c = 0;

        pool.forEach(function (container)
        {
            if (container.parent)
            {
                c++;
            }
        });

        return c;
    };

    /**
    * Gets the total number of free canvas elements in the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getFree
    * @return {number} The number of free (un-parented) canvas elements in the pool.
    */
    var free = function ()
    {
        return pool.length - total();
    };

    return {
        create: create,
        create2D: create2D,
        createWebGL: createWebGL,
        first: first,
        remove: remove,
        total: total,
        free: free,
        pool: pool
    };
};

//  If we export the called function here, it'll only be invoked once (not every time it's required).
module.exports = CanvasPool();


/***/ },
/* 11 */
/***/ function(module, exports) {

var EVENT_CONST = {

    DISPATCHER_IDLE: 0,
    DISPATCHER_DISPATCHING: 1,
    DISPATCHER_REMOVING: 2,
    DISPATCHER_DESTROYED: 3,

    LISTENER_PENDING: 4,
    LISTENER_ACTIVE: 5,
    LISTENER_REMOVING: 6

};

module.exports = EVENT_CONST;


/***/ },
/* 12 */
/***/ function(module, exports) {

var FILE_CONST = {

    LOADER_IDLE: 0,
    LOADER_LOADING: 1,
    LOADER_PROCESSING: 2,
    LOADER_COMPLETE: 3,
    LOADER_DESTROYED: 4,

    FILE_PENDING: 5,      // file is in the load queue but not yet started
    FILE_LOADING: 6,      // file has been started to load by the loader (onLoad called)
    FILE_LOADED: 7,       // file has loaded successfully, awaiting processing
    FILE_FAILED: 8,       // file failed to load
    FILE_PROCESSING: 9,   // file is being processed (onProcess callback)
    FILE_COMPLETE: 10,     // file has finished processing
    FILE_DESTROYED: 11     // file has been destroyed

};

module.exports = FILE_CONST;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(43),
    LOADER_COMPLETE_EVENT: __webpack_require__(42)

};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

// var FILE_CONST = require('../const');
var File = __webpack_require__(38);

//  Different images based on device-pixel ratio
//  And maybe on screen resolution breakpoints

//  2 options - can either return the File object, so they can listen to it specifically
//  Or can return the Loader, so they can chain calls?

var ImageFile = function (key, url, path)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        console.warn('Loader: You tried to load an Image, but no key was given');

        return false;
    }

    if (!url)
    {
        url = path + key + '.png';
    }
    else
    {
        url = path.concat(url);
    }

    var file = new File('image', key, url, 'arraybuffer');

    return file;
};

module.exports = ImageFile;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(1);
var GetObjectValue = __webpack_require__(7);

var Settings = function (state, config)
{
    if (typeof config === 'string')
    {
        config = { key: config };
    }
    else if (config === undefined)
    {
        //  Pass the 'hasOwnProperty' checks
        config = {};
    }

    this.state = state; //  Do we actually need this reference? This could just be a property bucket

    this.status = CONST.state.PENDING;

    //  Which part of this State is currently being processed?
    //  preload, create, update, shutdown, etc
    this.op = CONST.state.BOOT;

    this.key = GetObjectValue(config, 'key', '');
    this.active = GetObjectValue(config, 'active', false);
    this.visible = GetObjectValue(config, 'visible', true);
    this.scaleMode = GetObjectValue(config, 'scaleMode', CONST.scaleModes.DEFAULT);
    this.fps = GetObjectValue(config, 'fps', 60);
    this.x = GetObjectValue(config, 'x', 0);
    this.y = GetObjectValue(config, 'y', 0);

    //  -1 means the State Manager will set it to be the Game dimensions
    this.width = GetObjectValue(config, 'width', -1);
    this.height = GetObjectValue(config, 'height', -1);
};

//  Unless we add some actual functions in here, we'll make this just return an Object instead of an instance
Settings.prototype.constructor = Settings;

module.exports = Settings;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(5);
var GameObjectFactory = __webpack_require__(56);
var GameObjectCreator = __webpack_require__(55);
var Loader = __webpack_require__(57);
var MainLoop = __webpack_require__(58);
var UpdateManager = __webpack_require__(59);

var Systems = function (state, config)
{
    this.state = state;

    this.config = config;

    this.events;

    //  State specific managers (Factory, Tweens, Loader, Physics, etc)
    this.add;
    this.make;
    this.input;
    this.load;
    this.tweens;
    this.mainloop;
    this.updates;

    //  State specific properties (transform, data, children, etc)
    this.camera;
    this.children;
    this.color;
    this.data;
    this.fbo;
    this.time;
    this.transform;
};

Systems.prototype.constructor = Systems;

Systems.prototype = {

    init: function ()
    {
        console.log('State.Systems.init');

        //  All of the systems can use the State level EventDispatcher
        this.events = new EventDispatcher();

        //  State specific managers (Factory, Tweens, Loader, Physics, etc)
        //  All these to be set by a State Config package

        this.add = new GameObjectFactory(this.state);
        // this.make = GameObjectCreator(this.state);
        this.mainloop = new MainLoop(this.state, this.state.settings.fps);
        this.updates = new UpdateManager(this.state);
        this.load = new Loader(this.state);

        // this.tweens = new Phaser.TweenManager(this.state);
        // this.input = new Phaser.State.Input(this.state);
        // this.physics = new Phaser.Physics.Arcade(this.state, 800, 600);

        //  State specific properties (transform, data, children, etc)
        // this.camera = new Phaser.Camera(this.state, 0, 0, 800, 600);
        // this.children = new Phaser.Component.Children(this.state);
        // this.color = new Phaser.Component.Color(this.state);
        // this.data = new Phaser.Component.Data(this.state);
        // this.transform = this.camera.transform;

        //  Boot

        // this.input.init();

        //  Defaults

        this.state.events = this.events;
        this.state.add = this.add;
        this.state.load = this.load;
        // this.state.children = this.children;
        // this.state.color = this.color;
        // this.state.data = this.data;
        // this.state.camera = this.camera;
        // this.state.input = this.input;
        // this.state.transform = this.camera.transform;
        // this.state.state = this.state.game.state;

        //  Here we can check which Systems to install as properties into the State object
        //  (default systems always exist in here, regardless)

        /*
        var config = this.config;
        var t = typeof config;

        if (t !== 'object' || (t === 'object' && !t.hasOwnProperty('systems')))
        {
            return;
        }
        */

        // this.key = (config.hasOwnProperty('key')) ? config.key : '';
    },

    begin: function (timestamp, frameDelta)
    {
    },

    update: function (timestep, physicsStep)
    {
        // this.tweens.update(timestep);
        // this.physics.preUpdate(physicsStep);
    },

    preRender: function ()
    {
        // this.physics.update();
    },

    end: function (fps, panic)
    {
        if (panic)
        {
            // This pattern introduces non-deterministic behavior, but in this case
            // it's better than the alternative (the application would look like it
            // was running very quickly until the simulation caught up to real
            // time).
            var discardedTime = Math.round(this.mainloop.resetFrameDelta());

            console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
        }
    }

};

module.exports = Systems;


/***/ },
/* 17 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(23),

    Event: __webpack_require__(4),
    EventDispatcher: __webpack_require__(5),

    Loader: {
        ImageFile: __webpack_require__(14)
    }

};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(50);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(49);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(17);
var GetObjectValue = __webpack_require__(7);

var defaultBannerColor = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#000000'
];

var defaultBannerTextColor = '#ffffff';

function Config (config)
{
    if (config === undefined) { config = {}; }

    this.width = GetObjectValue(config, 'width', 1024);
    this.height = GetObjectValue(config, 'height', 768);

    this.resolution = GetObjectValue(config, 'resolution', 1);

    this.renderType = GetObjectValue(config, 'type', CONST.AUTO);

    this.parent = GetObjectValue(config, 'parent', null);
    this.canvas = GetObjectValue(config, 'canvas', null);
    this.canvasStyle = GetObjectValue(config, 'canvasStyle', null);

    this.stateConfig = GetObjectValue(config, 'state', null);

    this.seed = GetObjectValue(config, 'seed', [ (Date.now() * Math.random()).toString() ]);

    this.gameTitle = GetObjectValue(config, 'title', '');
    this.gameURL = GetObjectValue(config, 'url', 'http://phaser.io');
    this.gameVersion = GetObjectValue(config, 'version', '');

    //  If you do: { banner: false } it won't display any banner at all
    this.hideBanner = (GetObjectValue(config, 'banner', false) === false);

    this.hidePhaser = GetObjectValue(config, 'banner.hidePhaser', false);
    this.bannerTextColor = GetObjectValue(config, 'banner.text', defaultBannerTextColor);
    this.bannerBackgroundColor = GetObjectValue(config, 'banner.background', defaultBannerColor);
   
    this.forceSetTimeOut = GetObjectValue(config, 'forceSetTimeOut', false);
    this.transparent = GetObjectValue(config, 'transparent', false);
    this.pixelArt = GetObjectValue(config, 'pixelArt', false);

    //  Callbacks
    this.preBoot = GetObjectValue(config, 'callbacks.preBoot', NOOP);
    this.postBoot = GetObjectValue(config, 'callbacks.postBoot', NOOP);

}

Config.prototype.constructor = Config;

module.exports = Config;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CanvasPool = __webpack_require__(10);
var Features = __webpack_require__(9);

/**
* Checks if the device is capable of using the requested renderer and sets it up or an alternative if not.
*
* @method Phaser.Game#setUpRenderer
* @protected
*/
var CreateRenderer = function (game)
{
    var config = game.config;

    //  Game either requested Canvas,
    //  or requested AUTO or WEBGL but the browser doesn't support it, so fall back to Canvas
    if (config.renderType === CONST.CANVAS || (config.renderType !== CONST.CANVAS && !Features.webGL))
    {
        if (Features.canvas)
        {
            //  They requested Canvas and their browser supports it
            config.renderType = CONST.CANVAS;
        }
        else
        {
            throw new Error('Cannot create Canvas or WebGL context, aborting.');
        }
    }
    else
    {
        //  Game requested WebGL and browser says it supports it
        config.renderType = CONST.WEBGL;
    }

    //  Does the game config provide its own canvas element to use?
    if (config.canvas)
    {
        game.canvas = config.canvas;
    }
    else
    {
        game.canvas = CanvasPool.create(game, config.width, config.height, config.renderType);
    }

    //  Does the game config provide some canvas css styles to use?
    if (config.canvasStyle)
    {
        game.canvas.style = config.canvasStyle;
    }

    //  Create the renderer
    if (config.renderType === CONST.WEBGL)
    {
        console.log('Creating WEBGL Renderer');
        // game.renderer = new Phaser.Renderer.WebGL(this);
        // game.context = null;
    }
    else
    {
        console.log('Creating Canvas Renderer');
        // game.renderer = new Phaser.Renderer.Canvas(this);
        // game.context = this.renderer.context;
    }

    if (config.renderType !== Phaser.HEADLESS)
    {
        // Phaser.Canvas.addToDOM(this.canvas, this.parent, false);
        // Phaser.Canvas.setTouchAction(this.canvas);
    }

};

module.exports = CreateRenderer;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(24);

var DebugHeader = function (game)
{
    var config = game.config;

    if (config.hideBanner)
    {
        return;
    }

    var renderType = (config.renderType === CONST.CANVAS) ? 'Canvas' : 'WebGL';

    var ie = false;

    if (!ie)
    {
        var c = '';
        var args = [c];

        if (Array.isArray(config.bannerBackgroundColor))
        {
            var lastColor;

            config.bannerBackgroundColor.forEach(function(color) {

                c = c.concat('%c ');

                args.push('background: ' + color);

                lastColor = color;

            });

            //  inject the text color
            args[args.length - 1] = 'color: ' + config.bannerTextColor + '; background: ' + lastColor;
        }
        else
        {
            c = c.concat('%c ');

            args.push('color: ' + config.bannerTextColor + '; background: ' + config.bannerBackgroundColor);
        }

        //  URL link background color (always white)
        args.push('background: #fff');

        if (config.gameTitle)
        {
            c = c.concat(config.gameTitle);

            if (config.gameVersion)
            {
                c = c.concat(' v' + config.gameVersion);
            }

            if (!config.hidePhaser)
            {
                c = c.concat(' / ');
            }
        }

        if (!config.hidePhaser)
        {
            c = c.concat('Phaser v' + CONST.VERSION + ' (' + renderType + ')');
        }

        c = c.concat(' %c ' + config.gameURL);

        //  Inject the new string back into the args array
        args[0] = c;

        console.log.apply(console, args);
    }
    else if (window['console'])
    {
        console.log('Phaser v' + CONST.VERSION + ' / http://phaser.io');
    }

    // Keep this during dev build only
    console.log(CHECKSUM.build);

};

module.exports = DebugHeader;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(29);
var Config = __webpack_require__(20);
var DebugHeader = __webpack_require__(22);
var CreateRenderer = __webpack_require__(21);
var RequestAnimationFrame = __webpack_require__(31);
var DOMContentLoaded = __webpack_require__(30);
var RandomDataGenerator = __webpack_require__(44);
var StateManager = __webpack_require__(54);
var FactoryContainer = __webpack_require__(3);
var GameObjects = __webpack_require__ (36);

var Game = function (config)
{
    this.config = new Config(config);

    //  Decide which of the following should be Game properties, or placed elsewhere ...

    this.renderer = null;
    this.canvas = null;
    this.context = null;

    /**
    * @property {string|HTMLElement} parent - The Games DOM parent.
    * @default
    */
    this.parent = parent;

    this.isBooted = false;
    this.isRunning = false;

    /**
    * @property {Phaser.RequestAnimationFrame} raf - Automatically handles the core game loop via requestAnimationFrame or setTimeout
    * @protected
    */
    this.raf = new RequestAnimationFrame(this);

    /**
    * @property {Phaser.TextureManager} textures - Reference to the Phaser Texture Manager.
    */
    this.textures = null;

    /**
    * @property {Phaser.UpdateManager} updates - Reference to the Phaser Update Manager.
    */
    this.updates = null;

    /**
    * @property {Phaser.Cache} cache - Reference to the assets cache.
    */
    this.cache = null;

    /**
    * @property {Phaser.Input} input - Reference to the input manager
    */
    this.input = null;

    /**
    * @property {Phaser.StateManager} state - The StateManager. Phaser instance specific.
    */
    this.state = new StateManager(this, this.config.stateConfig);

    /**
    * @property {Phaser.Device} device - Contains device information and capabilities (singleton)
    */
    this.device = Device;

    //  More this somewhere else? Math perhaps? Doesn't need to be a Game level system.
    this.rnd;

    //  Wait for the DOM Ready event, then call boot.
    DOMContentLoaded(this.boot.bind(this));

    //  For debugging only
    window.game = this;
};

Game.prototype.constructor = Game;

Game.prototype = {

    boot: function ()
    {
        this.isBooted = true;

        this.config.preBoot();

        //  Probably move within Math
        this.rnd = new RandomDataGenerator(this.config.seed);

        DebugHeader(this);

        CreateRenderer(this);

        this.state.boot();

        this.isRunning = true;

        this.config.postBoot();

        this.raf.start();
    },

    //  timestamp = DOMHighResTimeStamp
    update: function (timestamp)
    {
        // console.log(timestamp);
        // this.state.step(timestamp);
    }

};

module.exports = Game;


/***/ },
/* 24 */
/***/ function(module, exports) {

var CHECKSUM = {
build: 'ecf1bb90-bbc7-11e6-beca-a9f2e8e0caf0'
};
module.exports = CHECKSUM;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);

var Audio = {

    /**
    * @property {boolean} audioData - Are Audio tags available?
    * @default
    */
    audioData: false,

    /**
    * @property {boolean} webAudio - Is the WebAudio API available?
    * @default
    */
    webAudio: false,

    /**
    * @property {boolean} ogg - Can this device play ogg files?
    * @default
    */
    ogg: false,

    /**
    * @property {boolean} opus - Can this device play opus files?
    * @default
    */
    opus: false,

    /**
    * @property {boolean} mp3 - Can this device play mp3 files?
    * @default
    */
    mp3: false,

    /**
    * @property {boolean} wav - Can this device play wav files?
    * @default
    */
    wav: false,

    /**
    * Can this device play m4a files?
    * @property {boolean} m4a - True if this device can play m4a files.
    * @default
    */
    m4a: false,

    /**
    * @property {boolean} webm - Can this device play webm files?
    * @default
    */
    webm: false,

    /**
    * @property {boolean} dolby - Can this device play EC-3 Dolby Digital Plus files?
    * @default
    */
    dolby: false

};

function init ()
{
    Audio.audioData = !!(window['Audio']);
    Audio.webAudio = !!(window['AudioContext'] || window['webkitAudioContext']);

    var audioElement = document.createElement('audio');

    var result = !!audioElement.canPlayType;

    try
    {
        if (result)
        {
            if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
            {
                Audio.ogg = true;
            }

            if (audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || audioElement.canPlayType('audio/opus;').replace(/^no$/, ''))
            {
                Audio.opus = true;
            }

            if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
            {
                Audio.mp3 = true;
            }

            //  Mimetypes accepted:
            //  developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //  bit.ly/iphoneoscodecs
            if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
            {
                Audio.wav = true;
            }

            if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
            {
                Audio.m4a = true;
            }

            if (audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))
            {
                Audio.webm = true;
            }

            if (audioElement.canPlayType('audio/mp4;codecs="ec-3"') !== '')
            {
                if (Browser.edge)
                {
                    Audio.dolby = true;
                }
                else if (Browser.safari && Browser.safariVersion >= 9)
                {
                    if ((/Mac OS X (\d+)_(\d+)/).test(navigator.userAgent))
                    {
                        var major = parseInt(RegExp.$1, 10);
                        var minor = parseInt(RegExp.$2, 10);

                        if ((major === 10 && minor >= 11) || major > 10)
                        {
                            Audio.dolby = true;
                        }
                    }
                }
            }
        }
    }
    catch (e)
    {
        //  Nothing to do here
    }

    return Audio;
}

module.exports = init();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);

var Fullscreen = {

    /**
    * @property {boolean} available - Does the browser support the Full Screen API?
    * @default
    */
    available: false,

    /**
    * @property {string} request - If the browser supports the Full Screen API this holds the call you need to use to activate it.
    * @default
    */
    request: '',

    /**
    * @property {string} cancel - If the browser supports the Full Screen API this holds the call you need to use to cancel it.
    * @default
    */
    cancel: '',

    /**
    * @property {boolean} keyboard - Does the browser support access to the Keyboard during Full Screen mode?
    * @default
    */
    keyboard: false

};

/**
* Checks for support of the Full Screen API.
*/
function init ()
{
    var fs = [
        'requestFullscreen',
        'requestFullScreen',
        'webkitRequestFullscreen',
        'webkitRequestFullScreen',
        'msRequestFullscreen',
        'msRequestFullScreen',
        'mozRequestFullScreen',
        'mozRequestFullscreen'
    ];

    var element = document.createElement('div');

    for (var i = 0; i < fs.length; i++)
    {
        if (element[fs[i]])
        {
            Fullscreen.available = true;
            Fullscreen.request = fs[i];
            break;
        }
    }

    var cfs = [
        'cancelFullScreen',
        'exitFullscreen',
        'webkitCancelFullScreen',
        'webkitExitFullscreen',
        'msCancelFullScreen',
        'msExitFullscreen',
        'mozCancelFullScreen',
        'mozExitFullscreen'
    ];

    if (Fullscreen.available)
    {
        for (var i = 0; i < cfs.length; i++)
        {
            if (document[cfs[i]])
            {
                Fullscreen.cancel = cfs[i];
                break;
            }
        }
    }

    //  Keyboard Input?
    if (window['Element'] && Element['ALLOW_KEYBOARD_INPUT'])
    {
        Fullscreen.keyboard = true;
    }

    return Fullscreen;
}

module.exports = init();


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);

var Input = {

    /**
    * @property {boolean} touch - Is touch available?
    * @default
    */
    touch: false,

    /**
    * @property {boolean} mspointer - Is mspointer available?
    * @default
    */
    mspointer: false,

    /**
    * @property {?string} wheelType - The newest type of Wheel/Scroll event supported: 'wheel', 'mousewheel', 'DOMMouseScroll'
    * @default
    * @protected
    */
    wheelEvent: null
    
};

function init ()
{
    if ('ontouchstart' in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1))
    {
        Input.touch = true;
    }

    if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled)
    {
        Input.mspointer = true;
    }

    if (!OS.cocoonJS)
    {
        // See https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        if ('onwheel' in window || (Browser.ie && 'WheelEvent' in window))
        {
            // DOM3 Wheel Event: FF 17+, IE 9+, Chrome 31+, Safari 7+
            Input.wheelEvent = 'wheel';
        }
        else if ('onmousewheel' in window)
        {
            // Non-FF legacy: IE 6-9, Chrome 1-31, Safari 5-7.
            Input.wheelEvent = 'mousewheel';
        }
        else if (Browser.firefox && 'MouseScrollEvent' in window)
        {
            // FF prior to 17. This should probably be scrubbed.
            Input.wheelEvent = 'DOMMouseScroll';
        }
    }

    return Input;
}

module.exports = init();


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);

var Video = {

    /**
    * @property {boolean} oggVideo - Can this device play ogg video files?
    * @default
    */
    oggVideo: false,

    /**
    * @property {boolean} h264Video - Can this device play h264 mp4 video files?
    * @default
    */
    h264Video: false,

    /**
    * @property {boolean} mp4Video - Can this device play h264 mp4 video files?
    * @default
    */
    mp4Video: false,

    /**
    * @property {boolean} webmVideo - Can this device play webm video files?
    * @default
    */
    webmVideo: false,

    /**
    * @property {boolean} vp9Video - Can this device play vp9 video files?
    * @default
    */
    vp9Video: false,

    /**
    * @property {boolean} hlsVideo - Can this device play hls video files?
    * @default
    */
    hlsVideo: false

};

function init ()
{
    var videoElement = document.createElement('video');
    var result = !!videoElement.canPlayType;

    try
    {
        if (result)
        {
            if (videoElement.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''))
            {
                Video.oggVideo = true;
            }

            if (videoElement.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''))
            {
                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                Video.h264Video = true;
                Video.mp4Video = true;
            }

            if (videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''))
            {
                Video.webmVideo = true;
            }

            if (videoElement.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''))
            {
                Video.vp9Video = true;
            }

            if (videoElement.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''))
            {
                Video.hlsVideo = true;
            }
        }
    }
    catch (e)
    {
        //  Nothing to do
    }

    return Video;
}

module.exports = init();


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(9);
var Input = __webpack_require__(27);
var Audio = __webpack_require__(25);
var Video = __webpack_require__(28);
var Fullscreen = __webpack_require__(26);

module.exports = {

    OS: OS,
    Browser: Browser,
    Features: Features,
    Input: Input,
    Audio: Audio,
    Video: Video,
    Fullscreen: Fullscreen

};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var OS = __webpack_require__(0);

var isBooted = false;

function DOMContentLoaded (callback)
{
    if (isBooted)
    {
        return;
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive')
    {
        isBooted = true;
        
        callback();

        return;
    }

    var check = function ()
    {
        isBooted = true;

        document.removeEventListener('deviceready', check, true);
        document.removeEventListener('DOMContentLoaded', check, true);
        window.removeEventListener('load', check, true);

        callback();
    };

    if (!document.body)
    {
        window.setTimeout(check, 20);
    }
    else if (OS.cordova && !OS.cocoonJS)
    {
        //  Ref. http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#deviceready
        document.addEventListener('deviceready', check, false);
    }
    else
    {
        document.addEventListener('DOMContentLoaded', check, true);
        window.addEventListener('load', check, true);
    }
}

module.exports = DOMContentLoaded;


/***/ },
/* 31 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Abstracts away the use of RAF or setTimeOut for the core game update loop.
*
* @class Phaser.RequestAnimationFrame
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {boolean} [forceSetTimeOut=false] - Tell Phaser to use setTimeOut even if raf is available.
*/
function RequestAnimationFrame (game)
{
    /**
    * @property {Phaser.Game} game - The currently running game.
    */
    this.game = game;

    /**
    * @property {boolean} isRunning - true if RequestAnimationFrame is running, otherwise false.
    * @default
    */
    this.isRunning = false;

    this.tick = 0;

    var vendors = [
        'ms',
        'moz',
        'webkit',
        'o'
    ];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
    {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'];
    }

    /**
    * @property {boolean} isSetTimeOut  - True if the browser is using setTimeout instead of rAf.
    */
    this.isSetTimeOut = false;

    /**
    * @property {number} timeOutID - The callback setTimeout or rAf callback ID used when calling cancel.
    */
    this.timeOutID = null;

    var _this = this;

    //  timestamp = DOMHighResTimeStamp
    var step = function (timestamp)
    {
        _this.tick = timestamp;

        _this.timeOutID = window.requestAnimationFrame(step);

        _this.game.update(timestamp);
    };

    var stepTimeout = function ()
    {
        _this.tick = Date.now();

        // _this.game.update(_this.tick);

        // _this.timeOutID = window.setTimeout(stepTimeout, _this.game.time.timeToCall);
    };

    /**
    * Starts the requestAnimationFrame running or setTimeout if unavailable in browser
    * @method Phaser.RequestAnimationFrame#start
    */
    this.start = function ()
    {
        this.isRunning = true;

        if (this.game.config.forceSetTimeOut)
        {
            this.isSetTimeOut = true;

            this.timeOutID = window.setTimeout(stepTimeout, 0);
        }
        else
        {
            this.isSetTimeOut = false;

            this.timeOutID = window.requestAnimationFrame(step);
        }
    };

    /**
    * Stops the requestAnimationFrame from running.
    * @method Phaser.RequestAnimationFrame#stop
    */
    this.stop = function ()
    {
        this.isRunning = false;

        if (this.isSetTimeOut)
        {
            clearTimeout(this.timeOutID);
        }
        else
        {
            window.cancelAnimationFrame(this.timeOutID);
        }
    };

    this.destroy = function ()
    {
        this.stop();

        this.game = undefined;
    };

}

RequestAnimationFrame.prototype.constructor = RequestAnimationFrame;

module.exports = RequestAnimationFrame;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(11);
var EventListener = __webpack_require__(33);

var EventBinding = function (dispatcher, type)
{
    this.dispatcher = dispatcher;
    this.type = type;
    this.state = CONST.DISPATCHER_IDLE;
    this.active = [];
};

EventBinding.prototype.constructor = EventBinding;

EventBinding.prototype = {

    total: function ()
    {
        var total = 0;

        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].state !== CONST.LISTENER_REMOVING)
            {
                total++;
            }
        }

        return total;
    },

    get: function (callback)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].callback === callback)
            {
                return this.active[i];
            }
        }
    },

    getIndex: function (callback)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].callback === callback)
            {
                return i;
            }
        }

        return null;
    },

    has: function (callback)
    {
        return (this.get(callback));
    },

    add: function (callback, priority, once)
    {
        var listener = this.get(callback);

        if (!listener)
        {
            //  The listener doesn't exist, so create one
            listener = EventListener(this.type, callback, priority, once);
        }
        else
        {
            //  Listener already exists, abort
            return;
        }

        if (this.state === CONST.DISPATCHER_IDLE)
        {
            //  The Dispatcher isn't doing anything, so we don't need a pending state
            listener.state = CONST.LISTENER_ACTIVE;

            this.active.push(listener);

            this.active.sort(this.sortHandler);
        }
        else if (this.state === CONST.DISPATCHER_DISPATCHING)
        {
            //  Add it to the list, but keep the state as pending.
            //  The call to 'tidy' will sort it out at the end of the dispatch.
            this.active.push(listener);
        }
    },

    sortHandler: function (listenerA, listenerB)
    {
        if (listenerB.priority < listenerA.priority)
        {
            return -1;
        }
        else if (listenerB.priority > listenerA.priority)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    },

    remove: function (callback)
    {
        if (this.state === CONST.DISPATCHER_IDLE)
        {
            //  The Dispatcher isn't doing anything, so we can remove right away
            var i = this.getIndex(callback);

            if (i !== null)
            {
                this.active.splice(i, 1);
            }
        }
        else if (this.state === CONST.DISPATCHER_DISPATCHING)
        {
            //  The Dispatcher is working, so we flag the listener for removal at the end
            var listener = this.get(callback);

            if (listener)
            {
                listener.state = CONST.LISTENER_REMOVING;
            }
        }
    },

    dispatch: function (event)
    {
        if (this.state !== CONST.DISPATCHER_IDLE)
        {
            throw new Error('Error: Failed to execute \'EventDispatcher.dispatch\' on \'' + this.type + '\': The event is already being dispatched.');
        }
        else if (this.active.length === 0)
        {
            //  This was a valid dispatch call, we just had nothing to do ...
            return;
        }

        this.state = CONST.DISPATCHER_DISPATCHING;

        var listener;

        for (var i = 0; i < this.active.length; i++)
        {
            listener = this.active[i];

            if (listener.state !== CONST.LISTENER_ACTIVE)
            {
                continue;
            }

            listener.callback.call(this.dispatcher, event);

            //  Has the callback changed the state of this binding?
            if (this.state !== CONST.DISPATCHER_DISPATCHING)
            {
                //  Yup! Let's break out
                break;
            }

            //  Was it a 'once' listener?
            if (listener.once)
            {
                listener.state = CONST.LISTENER_REMOVING;
            }

            //  Has the event been halted by the callback?
            if (!event._propagate)
            {
                //  Break out, a listener has called Event.stopPropagation
                break;
            }
        }

        //  Dispatch over, or aborted
        if (this.state === CONST.DISPATCHER_REMOVING)
        {
            this.removeAll();

            //  All done, tidy the list in case there were any pending events added
            this.tidy();
        }
        else if (this.state === CONST.DISPATCHER_DESTROYED)
        {
            this.dispatcher.delete(this.type);
        }
        else
        {
            //  All done, just purge the list
            this.tidy();

            this.state = CONST.DISPATCHER_IDLE;
        }
    },

    //  Removes all listeners
    //  If this is currently being dispatched then don't remove 'pending' listeners
    //  (i.e. ones that were added during the dispatch), only active ones
    removeAll: function ()
    {
        if (this.state === CONST.DISPATCHER_IDLE)
        {
            this.active.length = 0;
        }
        else
        {
            for (var i = this.active.length - 1; i >= 0; i--)
            {
                if (this.active[i].state !== CONST.LISTENER_PENDING)
                {
                    this.active.pop();
                }
            }

            this.state = CONST.DISPATCHER_IDLE;
        }
    },

    tidy: function ()
    {
        var added = 0;

        var i = this.active.length - 1;

        do
        {
            if (this.active[i].state === CONST.LISTENER_REMOVING)
            {
                this.active.splice(i, 1);
            }
            else if (this.active[i].state === CONST.LISTENER_PENDING)
            {
                this.active[i].state === CONST.LISTENER_ACTIVE;
                added++;
            }

            i--;
        }
        while (i >= 0);

        if (added > 0)
        {
            this.active.sort(this.sortHandler);
        }
    },

    destroy: function ()
    {
        this.active.length = 0;
        this.dispatcher = undefined;
        this.type = '';
        this.state = CONST.DISPATCHER_DESTROYED;
    }

};

module.exports = EventBinding;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(11);

var EventListener = function (type, callback, priority, once)
{
    return {
        type: type,
        callback: callback,
        priority: priority,
        once: once,
        state: CONST.LISTENER_PENDING
    };
};

module.exports = EventListener;


/***/ },
/* 34 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
* It can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
*
* @class Phaser.GameObject.Image
* @extends Phaser.GameObject
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {string} [key] - The texture used by the Image during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture, BitmapData or PIXI.Texture.
* @param {string|number} [frame] - If this Image is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/
var Image = function (state, x, y, key, frame, name)
{
    /*
    var _texture = state.game.textures.get(key);
    var _frame = _texture.get(frame);

    Phaser.GameObject.call(this, state, x, y, _texture, _frame);

    this.name = name;

    this.type = Phaser.IMAGE;
    */
};

module.exports = Image;


// Image.prototype = Object.create(Phaser.GameObject.prototype);
// Image.prototype.constructor = Image;

/**
* Automatically called by World.preUpdate.
*
* @method Phaser.Image#preUpdate
* @memberof Phaser.Image
Phaser.GameObject.Image.prototype.preUpdate = function ()
{
    //  Would like to get rid of this somehow ...
    if (this.parent)
    {
        this.color.worldAlpha = this.parent.color.worldAlpha;
    }
};
*/

/*
Object.defineProperties(Image.prototype, {

    width: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX * this.frame.realWidth;
        },

        set: function (value)
        {
            this.scaleX = value / this.frame.realWidth;
        }

    },

    height: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY * this.frame.realHeight;
        },

        set: function (value)
        {
            this.scaleY = value / this.frame.realHeight;
        }

    }

});
*/


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(34);
var FactoryContainer = __webpack_require__(3);

var ImageFactory = {

    KEY: 'image',

    /**
    * Create a new `Image` object.
    *
    * An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
    *
    * It can still rotate, scale, crop and receive input events.
    * This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
    *
    * @method Phaser.GameObject.Factory#image
    * @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
    * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @return {Phaser.Image} The newly created Image object.
    */
    add: function (x, y, key, frame, group)
    {
        if (group === undefined) { group = this.state; }

        console.log('ImageFactory.add', key, x, y, frame, group);
        console.log('into State', this.state);

        // return group.children.add(new Image(this.state, x, y, key, frame));
    },

    make: function (x, y, key, frame)
    {
        console.log('ImageFactory.make', key, x, y, frame);

        return new Image(this.state, x, y, key, frame);
    }

};

module.exports = FactoryContainer.register(ImageFactory);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//  
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__ (35);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(12);
var Set = __webpack_require__(60);
var XHRSettings = __webpack_require__(6);
var Event = __webpack_require__(13);
var EventDispatcher = __webpack_require__(5);

var BaseLoader = function ()
{
    //  To finish the loader ...
    //  
    //  1) Image Tag loader
    //  2) Events (or Signals?) for the various stages
    //  3) Progress update
    //  4) JSON loader
    //  5) XML Loader
    //  6) Multi File support (atlas + data)
    //  7) Atlas Loader

    this.events = new EventDispatcher();

    //  Move to a 'setURL' method?
    this.baseURL = '';
    this.path = '';

    //  Read from Game / State Config
    this.enableParallel = true;
    this.maxParallelDownloads = 8;

    //  xhr specific global settings (can be overridden on a per-file basis)
    this.xhr = XHRSettings();

    this.crossOrigin = undefined;

    this.list = new Set();
    this.inflight = new Set();
    this.failed = new Set();
    this.queue = new Set();

    this.storage = new Set();

    this._state = CONST.LOADER_IDLE;
};

BaseLoader.prototype.contructor = BaseLoader;

BaseLoader.prototype = {

    addFile: function (file)
    {
        if (!this.isReady())
        {
            return -1;
        }

        //  Multipart file?
        if (file.multipart)
        {
            file.fileA.path = this.path;
            file.fileB.path = this.path;

            this.list.add(file.fileA);
            this.list.add(file.fileB);
        }
        else
        {
            file.path = this.path;

            this.list.add(file);
        }

        return this;
    },

    //  Is the Loader actively loading (or processing loaded files)
    isLoading: function ()
    {
        return (this._state === CONST.LOADER_LOADING || this._state === CONST.LOADER_PROCESSING);
    },

    //  Is the Loader ready to start a new load?
    isReady: function ()
    {
        return (this._state === CONST.LOADER_IDLE || this._state === CONST.LOADER_COMPLETE || this._state === CONST.LOADER_FAILED);
    },

    start: function ()
    {
        // console.log('BaseLoader start. Files to load:', this.list.size);

        if (!this.isReady())
        {
            return;
        }

        this.events.dispatch(new Event.LOADER_START_EVENT(this));

        if (this.list.size === 0)
        {
            this.finishedLoading();
        }
        else
        {
            this._state = CONST.LOADER_LOADING;

            this.failed.clear();
            this.inflight.clear();
            this.queue.clear();

            this.updateProgress();

            this.processLoadQueue();
        }
    },

    updateProgress: function ()
    {

    },

    processLoadQueue: function ()
    {
        // console.log('BaseLoader processLoadQueue', this.list.size);

        var _this = this;

        this.list.each(function (file)
        {
            if (file.state === CONST.FILE_PENDING && _this.inflight.size < _this.maxParallelDownloads)
            {
                // console.log('ADDED TO QUEUE:', file.key);

                _this.inflight.add(file);

                _this.list.delete(file);

                _this.loadFile(file);
            }

            if (_this.inflight.size === _this.maxParallelDownloads)
            {
                //  Tells the Set iterator to abort
                return false;
            }

        });

    },

    //  private
    loadFile: function (file)
    {
        // console.log('LOADING', file.key);

        //  If the file doesn't have its own crossOrigin set,
        //  we'll use the Loaders (which is undefined by default)
        if (!file.crossOrigin)
        {
            file.crossOrigin = this.crossOrigin;
        }

        file.load(this.nextFile.bind(this), this.baseURL);
    },

    nextFile: function (previousFile, success)
    {
        // console.log('LOADED:', previousFile.src, success);

        //  Move the file that just loaded from the inflight list to the queue or failed Set

        if (success)
        {
            this.queue.add(previousFile);
        }
        else
        {
            this.failed.add(previousFile);
        }

        this.inflight.delete(previousFile);

        if (this.list.size > 0)
        {
            // console.log('nextFile - still something in the list');
            this.processLoadQueue();
        }
        else if (this.inflight.size === 0)
        {
            // console.log('nextFile calling finishedLoading');
            this.finishedLoading();
        }
    },

    finishedLoading: function ()
    {
        // console.log('BaseLoader.finishedLoading PROCESSING');

        this._state = CONST.LOADER_PROCESSING;

        var storage = this.storage;

        storage.clear();

        //  This could be Promise based as well, allowing for async processing

        this.queue.each(function (file)
        {
            file.onProcess();

            //  The File specific process handler has run
            //  Now run any custom callbacks
            if (file.processCallback)
            {
                file.processCallback(file);
            }

            file.onComplete();

            storage.add(file);
        });

        this.list.clear();
        this.inflight.clear();
        this.queue.clear();

        // console.log('Loader Complete. Loaded:', storage.size, 'Failed:', this.failed.size);

        this._state = CONST.LOADER_COMPLETE;

        this.events.dispatch(new Event.LOADER_COMPLETE_EVENT(this));
    },

    getLoadedFiles (group = '', output = []) {

        var output = [];

        //  Return an array of all files that have state = COMPLETE (which means loaded + processed)

        for (let file of this.storage)
        {
            if (file.state === FILE.COMPLETE && file.tag === group && (type !== '' && file.type === type))
            {
                output.push(file);
            }
        }

        return output;

    },

    reset: function ()
    {
        this.list.clear();
        this.inflight.clear();
        this.failed.clear();
        this.queue.clear();
        this.storage.clear();

        this.tag = '';
        this.path = '';
        this.baseURL = '';

        this._state = CONST.LOADER_IDLE;
    },

    destroy: function ()
    {
        this.reset();
        this._state = CONST.LOADER_DESTROYED;
    }

};

module.exports = BaseLoader;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(39);
var CONST = __webpack_require__(12);
var XHRLoader = __webpack_require__(41);
var XHRSettings = __webpack_require__(6);

var File = function (type, key, url, responseType)
{
    //  file type (image, json, etc) for sorting within the Loader
    this.type = type;

    //  unique cache key (unique within its file type)
    this.key = key;

    //  The URL of the file, not including baseURL
    this.url = url;

    //  Set when the Loader calls 'load' on this file
    this.src = '';

    this.xhrSettings = XHRSettings(responseType);

    this.xhrLoader = null;

    this.state = CONST.FILE_PENDING;

    //  Set by onProgress (if loading via XHR)
    this.bytesTotal = 0;
    this.bytesLoaded = -1;
    this.percentComplete = -1;

    //  For CORs based loading.
    //  If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)
    this.crossOrigin = undefined;

    //  The actual processed file data
    this.data = undefined;

    //  Multipart file? (i.e. an atlas and its json)
    this.multipart = undefined;
    this.linkFile = undefined;

    this.callback = null;
};

File.prototype.constructor = File;

File.prototype = {

    resetXHR: function ()
    {
        this.xhrLoader.onload = undefined;
        this.xhrLoader.onerror = undefined;
        this.xhrLoader.onprogress = undefined;
    },

    //  Called when the Image loads
    //  ProgressEvent
    onLoad: function (event)
    {
        console.log('image loaded');
        console.log(event);

        // this.onStateChange(LOADING);

        this.resetXHR();

        this.callback(this, true);
    },

    onError: function (event)
    {
        console.log('image error');
        console.log(event);

        this.resetXHR();

        this.callback(this, false);
    },

    onProgress: function (event)
    {
        this.bytesLoaded = event.loaded;
        this.bytesTotal = event.total;

        this.percentComplete = Math.min((this.bytesLoaded / this.bytesTotal), 1);

        console.log(this.percentComplete + '% (' + this.bytesLoaded + ' bytes)');
    },

    onProcess: function ()
    {
        console.log('process the image');
    },

    onComplete: function ()
    {
        console.log('image completed and added to the loader store');
    },

    //  Called by the Loader, starts the actual file downloading
    load: function (callback, baseURL, globalXHR)
    {
        if (baseURL === undefined) { baseURL = ''; }

        this.callback = callback;

        this.src = GetURL(this, baseURL);

        console.log('LOADING2', this.src);

        this.xhrLoader = XHRLoader(this, globalXHR);
    }
};

module.exports = File;


/***/ },
/* 39 */
/***/ function(module, exports) {

var GetURL = function (file, baseURL)
{
    if (!file.url)
    {
        return false;
    }

    if (file.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/))
    {
        return file.url;
    }
    else
    {
        return baseURL + file.path + file.url;
    }
};

module.exports = GetURL;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var XHRSettings = __webpack_require__(6);

//  Takes two XHR Objects and creates a new object

//  The new object is based on global initially, but any setting in
//  local overrides the global value.

var MergeXHRSettings = function (global, local)
{
    var output = (global === undefined) ? XHRSettings() : Object.assign(global);

    if (local)
    {
        for (var setting in local)
        {
            if (local[setting] !== undefined)
            {
                output[setting] = local[setting];
            }
        }
    }

    return output;

};

module.exports = MergeXHRSettings;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(40);

var XHRLoader = function (file, globalXHRSettings)
{
    var config = MergeXHRSettings(globalXHRSettings, file.xhrSettings);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', file.src, config.async, config.user, config.password);

    xhr.responseType = file.xhrSettings.responseType;
    xhr.timeout = config.timeout;

    if (config.header && config.headerValue)
    {
        xhr.setRequestHeader(config.header, config.headerValue);
    }

    if (config.overrideMimeType)
    {
        xhr.overrideMimeType(config.overrideMimeType);
    }

    // After a successful request, the xhr.response property will contain the requested data as a DOMString, ArrayBuffer, Blob, or Document (depending on what was set for responseType.)

    xhr.onload = file.onLoad.bind(file);
    xhr.onerror = file.onError.bind(file);
    xhr.onprogress = file.onProgress.bind(file);

    //  This is the only standard method, the ones above are browser additions (maybe not universal?)
    // xhr.onreadystatechange

    xhr.send();

    return xhr;
};

module.exports = XHRLoader;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(4);

var LoaderCompleteEvent = function (loader)
{
    Event.call(this, 'LOADER_COMPLETE_EVENT');

    this.loader = loader;
};

LoaderCompleteEvent.prototype = Object.create(Event.prototype);
LoaderCompleteEvent.prototype.constructor = LoaderCompleteEvent;

module.exports = LoaderCompleteEvent;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(4);

var LoaderStartEvent = function (loader)
{
    Event.call(this, 'LOADER_START_EVENT');

    this.loader = loader;
};

LoaderStartEvent.prototype = Object.create(Event.prototype);
LoaderStartEvent.prototype.constructor = LoaderStartEvent;

module.exports = LoaderStartEvent;


/***/ },
/* 44 */
/***/ function(module, exports) {

/**
* @property {number} c - Internal var.
* @private
*/
var c = 1;

/**
* @property {number} s0 - Internal var.
* @private
*/
var s0 = 0;

/**
* @property {number} s1 - Internal var.
* @private
*/
var s1 = 0;

/**
* @property {number} s2 - Internal var.
* @private
*/
var s2 = 0;

/**
* @property {Array} sign - Internal var.
* @private
*/
var sign = [ -1, 1 ];

/**
* Private random helper.
*
* @method Phaser.RandomDataGenerator#rnd
* @private
* @return {number}
*/
var rnd = function ()
{
    var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32

    c = t | 0;
    s0 = s1;
    s1 = s2;
    s2 = t - c;

    return s2;
};

/**
* Internal method that creates a seed hash.
*
* @method Phaser.RandomDataGenerator#hash
* @private
* @param {any} data
* @return {number} hashed value.
*/
var hash = function (data)
{
    var h, i, n;
    n = 0xefc8249d;
    data = data.toString();

    for (i = 0; i < data.length; i++)
    {
        n += data.charCodeAt(i);
        h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;// 2^32
    }

    return (n >>> 0) * 2.3283064365386963e-10;// 2^-32
};


var RandomDataGenerator = function (seeds)
{
    if (typeof seeds === 'string')
    {
        this.state(seeds);
    }
    else
    {
        this.sow(seeds);
    }
};

RandomDataGenerator.prototype.constructor = RandomDataGenerator;

RandomDataGenerator.prototype = {

    /**
    * Reset the seed of the random data generator.
    *
    * _Note_: the seed array is only processed up to the first `undefined` (or `null`) value, should such be present.
    *
    * @method Phaser.RandomDataGenerator#sow
    * @param {any[]} seeds - The array of seeds: the `toString()` of each value is used.
    */
    sow: function (seeds)
    {
        // Always reset to default seed
        s0 = hash(' ');
        s1 = hash(s0);
        s2 = hash(s1);
        c = 1;

        if (!seeds)
        {
            return;
        }

        // Apply any seeds
        for (var i = 0; i < seeds.length && (seeds[i] != null); i++)
        {
            var seed = seeds[i];

            s0 -= hash(seed);
            s0 += ~~(s0 < 0);
            s1 -= hash(seed);
            s1 += ~~(s1 < 0);
            s2 -= hash(seed);
            s2 += ~~(s2 < 0);
        }

    },

    /**
    * Returns a random integer between 0 and 2^32.
    *
    * @method Phaser.RandomDataGenerator#integer
    * @return {number} A random integer between 0 and 2^32.
    */
    integer: function ()
    {
        // 2^32
        return rnd() * 0x100000000;
    },

    /**
    * Returns a random real number between 0 and 1.
    *
    * @method Phaser.RandomDataGenerator#frac
    * @return {number} A random real number between 0 and 1.
    */
    frac: function ()
    {
        // 2^-53
        return rnd() + (rnd() * 0x200000 | 0) * 1.1102230246251565e-16;
    },

    /**
    * Returns a random real number between 0 and 2^32.
    *
    * @method Phaser.RandomDataGenerator#real
    * @return {number} A random real number between 0 and 2^32.
    */
    real: function ()
    {
        return this.integer() + this.frac();
    },

    /**
    * Returns a random integer between and including min and max.
    *
    * @method Phaser.RandomDataGenerator#integerInRange
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    integerInRange: function (min, max)
    {
        return Math.floor(this.realInRange(0, max - min + 1) + min);
    },

    /**
    * Returns a random integer between and including min and max.
    * This method is an alias for RandomDataGenerator.integerInRange.
    *
    * @method Phaser.RandomDataGenerator#between
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    between: function (min, max)
    {
        return this.integerInRange(min, max);
    },

    /**
    * Returns a random real number between min and max.
    *
    * @method Phaser.RandomDataGenerator#realInRange
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    realInRange: function (min, max)
    {
        return this.frac() * (max - min) + min;
    },

    /**
    * Returns a random real number between -1 and 1.
    *
    * @method Phaser.RandomDataGenerator#normal
    * @return {number} A random real number between -1 and 1.
    */
    normal: function ()
    {
        return 1 - (2 * this.frac());
    },

    /**
    * Returns a valid RFC4122 version4 ID hex string from https://gist.github.com/1308368
    *
    * @method Phaser.RandomDataGenerator#uuid
    * @return {string} A valid RFC4122 version4 ID hex string
    */
    uuid: function ()
    {
        var a = '';
        var b = '';

        for (b = a = ''; a++ < 36; b +=~a % 5 | a * 3&4 ? (a^15 ? 8^this.frac() * (a^20 ? 16 : 4) : 4).toString(16) : '-')
        {
        }

        return b;
    },

    /**
    * Returns a random member of `array`.
    *
    * @method Phaser.RandomDataGenerator#pick
    * @param {Array} array - An Array to pick a random member of.
    * @return {any} A random member of the array.
    */
    pick: function (array)
    {
        return array[this.integerInRange(0, array.length - 1)];
    },

    /**
    * Returns a sign to be used with multiplication operator.
    *
    * @method Phaser.RandomDataGenerator#sign
    * @return {number} -1 or +1.
    */
    sign: function ()
    {
        return this.pick(sign);
    },

    /**
    * Returns a random member of `array`, favoring the earlier entries.
    *
    * @method Phaser.RandomDataGenerator#weightedPick
    * @param {Array} array - An Array to pick a random member of.
    * @return {any} A random member of the array.
    */
    weightedPick: function (array)
    {
        return array[~~(Math.pow(this.frac(), 2) * (array.length - 1) + 0.5)];
    },

    /**
    * Returns a random timestamp between min and max, or between the beginning of 2000 and the end of 2020 if min and max aren't specified.
    *
    * @method Phaser.RandomDataGenerator#timestamp
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random timestamp between min and max.
    */
    timestamp: function (min, max)
    {
        return this.realInRange(min || 946684800000, max || 1577862000000);
    },

    /**
    * Returns a random angle between -180 and 180.
    *
    * @method Phaser.RandomDataGenerator#angle
    * @return {number} A random number between -180 and 180.
    */
    angle: function ()
    {
        return this.integerInRange(-180, 180);
    },

    /**
    * Returns a random rotation in radians, between -3.141 and 3.141
    *
    * @method Phaser.RandomDataGenerator#rotation
    * @return {number} A random number between -3.141 and 3.141
    */
    rotation: function ()
    {
        return this.realInRange(-3.141592653589793, 3.141592653589793);
    },

    /**
    * Gets or Sets the state of the generator. This allows you to retain the values
    * that the generator is using between games, i.e. in a game save file.
    *
    * To seed this generator with a previously saved state you can pass it as the
    * `seed` value in your game config, or call this method directly after Phaser has booted.
    *
    * Call this method with no parameters to return the current state.
    *
    * If providing a state it should match the same format that this method
    * returns, which is a string with a header `!rnd` followed by the `c`,
    * `s0`, `s1` and `s2` values respectively, each comma-delimited.
    *
    * @method Phaser.RandomDataGenerator#state
    * @param {string} [state] - Generator state to be set.
    * @return {string} The current state of the generator.
    */
    state: function (state)
    {
        if (typeof state === 'string' && state.match(/^!rnd/))
        {
            state = state.split(',');

            c = parseFloat(state[1]);
            s0 = parseFloat(state[2]);
            s1 = parseFloat(state[3]);
            s2 = parseFloat(state[4]);
        }

        return [ '!rnd', c, s0, s1, s2 ].join(',');
    }

};

module.exports = RandomDataGenerator;


/***/ },
/* 45 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A polyfill for Array.forEach
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function (fun /*, thisArg */)
    {
        'use strict';

        if (this === void 0 || this === null)
        {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== 'function')
        {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                fun.call(thisArg, t[i], i, t);
            }
        }
    };
}


/***/ },
/* 46 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A polyfill for Array.isArray
*/
if (!Array.isArray)
{
    Array.isArray = function (arg)
    {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}


/***/ },
/* 47 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// ES6 Math.trunc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
if (!Math.trunc) {
    Math.trunc = function trunc(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
}

/**
* A polyfill for Function.prototype.bind
*/
if (!Function.prototype.bind) {

    /* jshint freeze: false */
    Function.prototype.bind = (function () {

        var slice = Array.prototype.slice;

        return function (thisArg) {

            var target = this, boundArgs = slice.call(arguments, 1);

            if (typeof target !== 'function')
            {
                throw new TypeError();
            }

            function bound() {
                var args = boundArgs.concat(slice.call(arguments));
                target.apply(this instanceof bound ? this : thisArg, args);
            }

            bound.prototype = (function F(proto) {
                if (proto)
                {
                    F.prototype = proto;
                }

                if (!(this instanceof F))
                {
                    /* jshint supernew: true */
                    return new F;
                }
            })(target.prototype);

            return bound;
        };
    })();
}

/**
* A polyfill for Array.isArray
*/
if (!Array.isArray)
{
    Array.isArray = function (arg)
    {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

/**
* A polyfill for Array.forEach
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function(fun /*, thisArg */)
    {
        "use strict";

        if (this === void 0 || this === null)
        {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== "function")
        {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                fun.call(thisArg, t[i], i, t);
            }
        }
    };
}

/**
* Low-budget Float32Array knock-off, suitable for use with P2.js in IE9
* Source: http://www.html5gamedevs.com/topic/5988-phaser-12-ie9/
* Cameron Foale (http://www.kibibu.com)
*/
if (typeof window.Uint32Array !== "function" && typeof window.Uint32Array !== "object")
{
    var CheapArray = function(type)
    {
        var proto = new Array(); // jshint ignore:line

        window[type] = function(arg) {

            if (typeof(arg) === "number")
            {
                Array.call(this, arg);
                this.length = arg;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = 0;
                }
            }
            else
            {
                Array.call(this, arg.length);

                this.length = arg.length;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = arg[i];
                }
            }
        };

        window[type].prototype = proto;
        window[type].constructor = window[type];
    };

    CheapArray('Float32Array'); // jshint ignore:line
    CheapArray('Uint32Array'); // jshint ignore:line
    CheapArray('Uint16Array'); // jshint ignore:line
    CheapArray('Int16Array'); // jshint ignore:line
    CheapArray('ArrayBuffer'); // jshint ignore:line
}

/**
 * Also fix for the absent console in IE9
 */
if (!window.console)
{
    window.console = {};
    window.console.log = window.console.assert = function(){};
    window.console.warn = window.console.assert = function(){};
}

/**
 * performance.now
 */
(function(){

  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
      return new Date().getTime();
  });

  if ("now" in window.performance == false)
  {
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }

    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }

})();


/***/ },
/* 48 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// ES6 Math.trunc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
if (!Math.trunc) {
    Math.trunc = function trunc(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
}


/***/ },
/* 49 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/


/**
* Low-budget Float32Array knock-off, suitable for use with P2.js in IE9
* Source: http://www.html5gamedevs.com/topic/5988-phaser-12-ie9/
* Cameron Foale (http://www.kibibu.com)
*/
if (typeof window.Uint32Array !== "function" && typeof window.Uint32Array !== "object")
{
    var CheapArray = function(type)
    {
        var proto = new Array(); // jshint ignore:line

        window[type] = function(arg) {

            if (typeof(arg) === "number")
            {
                Array.call(this, arg);
                this.length = arg;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = 0;
                }
            }
            else
            {
                Array.call(this, arg.length);

                this.length = arg.length;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = arg[i];
                }
            }
        };

        window[type].prototype = proto;
        window[type].constructor = window[type];
    };

    CheapArray('Float32Array'); // jshint ignore:line
    CheapArray('Uint32Array'); // jshint ignore:line
    CheapArray('Uint16Array'); // jshint ignore:line
    CheapArray('Int16Array'); // jshint ignore:line
    CheapArray('ArrayBuffer'); // jshint ignore:line
}


/***/ },
/* 50 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
 * Also fix for the absent console in IE9
 */
if (!window.console)
{
    window.console = {};
    window.console.log = window.console.assert = function(){};
    window.console.warn = window.console.assert = function(){};
}


/***/ },
/* 51 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
 * performance.now
 */
(function(){

  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
      return new Date().getTime();
  });

  if ("now" in window.performance == false)
  {
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }

    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }

})();


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// performance.now
if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();
    if (!global.performance) {
        global.performance = {};
    }
    global.performance.now = function () {
        return Date.now() - startTime;
    };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for(var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
    global.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] ||
        global[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }

        var currentTime = Date.now(),
            delay = 16 + lastTime - currentTime;

        if (delay < 0) {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(15);
var Systems = __webpack_require__(16);

/**
* A Base State Class.
*
* @class Phaser.State
* @constructor
*/
var State = function (config)
{
    //  The properties a State *must* have, that cannot be changed without breaking it:

    this.game = null;

    //  Maybe just an object? Doesn't have to instantiate I don't think ...
    this.settings = new Settings(this, config);

    this.sys = new Systems(this, config);

    //  Reference to sys.children, set during sys.init only
    this.children;
};

State.prototype.constructor = State;

State.prototype = {

    //  Can be overridden by your own States
    preUpdate: function ()
    {
    },

    //  Can be overridden by your own States
    update: function ()
    {
    },

    //  Can be overridden by your own States
    postUpdate: function ()
    {
    },

    //  Can be overridden by your own States
    render: function ()
    {
    }

};

module.exports = State;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(17);
var State = __webpack_require__(53);
var Settings = __webpack_require__(15);
var Systems = __webpack_require__(16);
var GetObjectValue = __webpack_require__(7);
var LoaderEvent = __webpack_require__(13);

/**
* The State Manager is responsible for loading, setting up and switching game states.
*
* @class Phaser.StateManager
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/
var StateManager = function (game, stateConfig)
{
    this.game = game;

    //  Everything kept in here
    this.keys = {};
    this.states = [];

    //  Only active states are kept in here
    this.active = [];

    this._pending = [];

    if (stateConfig)
    {
        if (Array.isArray(stateConfig))
        {
            for (var i = 0; i < stateConfig.length; i++)
            {
                //  The i === 0 part just starts the first State given
                this._pending.push({
                    index: i,
                    key: 'default',
                    state: stateConfig[i],
                    autoStart: (i === 0)
                });
            }
        }
        else
        {
            this._pending.push({
                index: 0,
                key: 'default',
                state: stateConfig,
                autoStart: true
            });
        }
    }
};

StateManager.prototype.constructor = StateManager;

StateManager.prototype = {

    /**
    * The Boot handler is called by Phaser.Game when it first starts up.
    * The renderer is available by now.
    *
    * @method Phaser.StateManager#boot
    * @private
    */
    boot: function ()
    {
        // this.game.onPause.add(this.pause, this);
        // this.game.onResume.add(this.resume, this);

        for (var i = 0; i < this._pending.length; i++)
        {
            var entry = this._pending[i];

            this.add(entry.key, entry.state, entry.autoStart);
        }

        //  Clear the pending list
        this._pending = [];
    },

    getKey: function (key, stateConfig)
    {
        if (!key) { key = 'default'; }

        if (stateConfig instanceof State)
        {
            key = stateConfig.settings.key;
        }
        else if (typeof stateConfig === 'object' && stateConfig.hasOwnProperty('key'))
        {
            key = stateConfig.key;
        }

        //  By this point it's either 'default' or extracted from the State

        if (this.keys.hasOwnProperty(key))
        {
            throw new Error('Cannot add a State with duplicate key: ' + key);
        }
        else
        {
            return key;
        }
    },

    /**
    * Adds a new State into the StateManager. You must give each State a unique key by which you'll identify it.
    * The State can be either a Phaser.State object (or an object that extends it), a plain JavaScript object or a function.
    * If a function is given a new state object will be created by calling it.
    *
    * @method Phaser.StateManager#add
    * @param {string} key - A unique key you use to reference this state, i.e. "MainMenu", "Level1".
    * @param {Phaser.State|object|function} state  - The state you want to switch to.
    * @param {boolean} [autoStart=false]  - If true the State will be started immediately after adding it.
    */
    add: function (key, stateConfig, autoStart)
    {
        if (autoStart === undefined) { autoStart = false; }

        //  if not booted, then put state into a holding pattern
        if (!this.game.isBooted)
        {
            this._pending.push({
                index: this._pending.length,
                key: key,
                state: stateConfig,
                autoStart: autoStart
            });

            // console.log('StateManager not yet booted, adding to list', this._pending.length);

            return;
        }

        key = this.getKey(key, stateConfig);

        var newState;

        if (stateConfig instanceof State)
        {
            // console.log('StateManager.add from instance', key);
            newState = this.createStateFromInstance(key, stateConfig);
        }
        else if (typeof stateConfig === 'object')
        {
            // console.log('StateManager.add from object', key);

            stateConfig.key = key;

            newState = this.createStateFromObject(key, stateConfig);
        }
        else if (typeof stateConfig === 'function')
        {
            // console.log('StateManager.add from function', key);

            newState = this.createStateFromFunction(key, stateConfig);
        }

        this.keys[key] = newState;

        this.states.push(newState);

        if (autoStart || newState.settings.active)
        {
            if (this.game.isBooted)
            {
                this.start(key);
            }
            else
            {
                this._start.push(key);
            }
        }

        return newState;
    },

    createStateFromInstance: function (key, newState)
    {
        newState.game = this.game;

        newState.settings.key = key;

        newState.sys.init();

        if (this.game.config.renderType === CONST.WEBGL)
        {
            this.createStateFrameBuffer(newState);
        }

        return newState;
    },

    createStateFromObject: function (key, stateConfig)
    {
        var newState = new State(stateConfig);

        newState.game = this.game;

        newState.sys.init();

        if (this.game.config.renderType === CONST.WEBGL)
        {
            this.createStateFrameBuffer(newState);
        }

        return this.setupCallbacks(newState, stateConfig);
    },

    createStateFromFunction: function (key, state)
    {
        var newState = new state();

        if (newState instanceof State)
        {
            return this.createStateFromInstance(key, newState);
        }
        else
        {
            newState.game = this.game;

            newState.settings = new Settings(newState, key);
            newState.sys = new Systems(newState);

            newState.sys.init();

            if (this.game.config.renderType === CONST.WEBGL)
            {
                this.createStateFrameBuffer(newState);
            }

            //  Default required functions
            return this.setupCallbacks(newState);
        }
    },

    setupCallbacks: function (newState, stateConfig)
    {
        if (stateConfig === undefined) { stateConfig = newState; }

        //  Extract callbacks or set NOOP

        newState.init = GetObjectValue(stateConfig, 'init', NOOP);
        newState.preload = GetObjectValue(stateConfig, 'preload', NOOP);
        newState.create = GetObjectValue(stateConfig, 'create', NOOP);
        newState.shutdown = GetObjectValue(stateConfig, 'shutdown', NOOP);

        newState.preUpdate = GetObjectValue(stateConfig, 'preUpdate', NOOP);
        newState.update = GetObjectValue(stateConfig, 'update', NOOP);
        newState.postUpdate = GetObjectValue(stateConfig, 'postUpdate', NOOP);
        newState.render = GetObjectValue(stateConfig, 'render', NOOP);

        return newState;
    },

    createStateFrameBuffer: function (newState)
    {
        var x = newState.settings.x;
        var y = newState.settings.y;

        if (newState.settings.width === -1)
        {
            newState.settings.width = this.game.config.width;
        }

        if (newState.settings.height === -1)
        {
            newState.settings.height = this.game.config.height;
        }

        var width = newState.settings.width;
        var height = newState.settings.height;

        // newState.sys.fbo = this.game.renderer.createFBO(newState, x, y, width, height);
    },

    getState: function (key)
    {
        return this.keys[key];
    },

    getStateIndex: function (state)
    {
        return this.states.indexOf(state);
    },

    getActiveStateIndex: function (state)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].state === state)
            {
                return this.active[i].index;
            }
        }

        return -1;
    },

    isActive: function (key)
    {
        var state = this.getState(key);

        return (state && state.settings.active && this.active.indexOf(state) !== -1);
    },

    start: function (key)
    {
        //  if not booted, then put state into a holding pattern
        if (!this.game.isBooted)
        {
            // console.log('StateManager not yet booted, setting autoStart on pending list');

            for (var i = 0; i < this._pending.length; i++)
            {
                var entry = this._pending[i];

                if (entry.key === key)
                {
                    entry.autoStart = true;
                }
            }

            return;
        }

        var state = this.getState(key);

        if (state)
        {
            //  Already started? Nothing more to do here ...
            if (this.isActive(key))
            {
                return;
            }

            state.settings.active = true;

            //  + arguments
            if (state.init)
            {
                state.init.call(state);
            }

            if (state.preload && state.sys.load)
            {
                state.sys.load.reset();

                state.preload.call(state, this.game);

                //  Is the loader empty?
                if (state.sys.load.list.size === 0)
                {
                    this.startCreate(state);
                }
                else
                {
                    //  Start the loader going as we have something in the queue

                    state.sys.load.events.on('LOADER_COMPLETE_EVENT', this.loadComplete.bind(this));

                    state.sys.load.start();
                }
            }
            else
            {
                //  No preload? Then there was nothing to load either
                this.startCreate(state);
            }

        }
    },

    loadComplete: function (event)
    {
        var state = event.loader.state;

        //  Make sure to do load-update one last time before state is set to _created

        //  Stop doing this ...
        if (state.hasOwnProperty('loadUpdate'))
        {
            state.loadUpdate.call(state);
        }

        this.startCreate(state);
    },

    startCreate: function (state)
    {
        if (state.create)
        {
            state.create.call(state);
        }

        //  Insert at the correct index, or it just all goes wrong :)

        var i = this.getStateIndex(state);

        this.active.push({ index: i, state: state });

        //  Sort the 'active' array based on the index property
        this.active.sort(this.sortStates.bind(this));

        state.sys.updates.running = true;

        state.sys.mainloop.start();
    },

    pause: function (key)
    {
        var index = this.getActiveStateIndex(key);

        if (index > -1)
        {
            var state = this.getState(key);

            state.settings.active = false;

            this.active.splice(index, 1);

            this.active.sort(this.sortStates.bind(this));
        }
    },

    sortStates: function (stateA, stateB)
    {
        //  Sort descending
        if (stateA.index < stateB.index)
        {
            return -1;
        }
        else if (stateA.index > stateB.index)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    },

    //  See if we can reduce this down to just update and render

    step: function (timestamp)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            if (state.sys.mainloop.running)
            {
                state.sys.mainloop.step(timestamp);
            }
        }
    },

    /*
    preUpdate: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                state.sys.children.list[c].preUpdate();
            }

            state.preUpdate();
        }
    },

    update: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            //  Invoke State Main Loop here - updating all of its systems (tweens, physics, etc)

            //  This shouldn't be called if the State is still loading
            //  Have a State.STATUS const in the Settings, dictating what is going on

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                var child = state.sys.children.list[c];

                if (child.exists)
                {
                    child.update();
                }
            }

            state.update();
        }
    },

    postUpdate: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                state.sys.children.list[c].postUpdate();
            }

            state.postUpdate();
        }
    },

    render: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            //  Can put all kinds of other checks in here, like MainLoop, FPS, etc.
            if (!state.settings.visible || state.sys.color.alpha === 0 || state.sys.children.list.length === 0)
            {
                continue;
            }

            this.game.renderer.render(state);
        }
    },
    */

    renderChildren: function (renderer, state, interpolationPercentage)
    {
        //  Populates the display list
        for (var c = 0; c < state.sys.children.list.length; c++)
        {
            var child = state.sys.children.list[c];

            child.render(renderer, child, interpolationPercentage);
        }
    }

};

module.exports = StateManager;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var FactoryContainer = __webpack_require__(3);

/**
* The GameObject Factory is a quick way to create many common game objects. The Factory is owned by the State.
*
* @class Phaser.GameObject.Factory
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/

var GameObjectCreator = {

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    state: null

};

function init (state)
{
    console.log('Creating GameObjectCreator instance for State', state);

    GameObjectCreator.state = state;

    //   Load the factories into this Object

    FactoryContainer.load(GameObjectCreator, false);

    return GameObjectCreator;
}

module.exports = init;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var FactoryContainer = __webpack_require__(3);

/**
* The GameObject Factory is a quick way to create many common game objects. The Factory is owned by the State.
*
* @class Phaser.GameObject.Factory
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/

var GameObjectFactory = {

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    state: null

};

function init (state)
{
    console.log('Creating GameObjectFactory instance for State');

    GameObjectFactory.state = state;

    //   Load the factories into this Object

    return FactoryContainer.load(GameObjectFactory, true);

    // return GameObjectFactory;
}

module.exports = init;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var BaseLoader = __webpack_require__(37);
var ImageLoader = __webpack_require__(14);

var Loader = function (state)
{
    BaseLoader.call(this);

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    this.state = state;

};

Loader.prototype = Object.create(BaseLoader.prototype);
Loader.prototype.constructor = Loader;

Loader.prototype.image = function (key, url)
{
    var file = ImageLoader(key, url, this.path);

    console.log('Loader.image');
    console.log(file);

    this.addFile(file);

    console.log(this.list);

    return this;
};

module.exports = Loader;


/***/ },
/* 58 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// My thanks to Isaac Sukin for creating MainLoop.js, on which lots of this is based.

var MainLoop = function (state, framerate)
{
    /**
    * @property {Phaser.State} state
    */
    this.state = state;

    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    this.game = state.game;

    // The amount of time (in milliseconds) to simulate each time update() runs.
    this.timestep = 1000 / framerate;

    this.physicsStep = 1 / framerate;

    // The cumulative amount of in-app time that hasn't been simulated yet.
    // See the comments inside animate() for details.
    this.frameDelta = 0;

    // The timestamp in milliseconds of the last time the main loop was run.
    // Used to compute the time elapsed between frames.
    this.lastFrameTimeMs = 0;

    // An exponential moving average of the frames per second.
    this.fps = 60;

    // The timestamp (in milliseconds) of the last time the `fps` moving
    // average was updated.
    this.lastFpsUpdate = 0;

    // The number of frames delivered in the current second.
    this.framesThisSecond = 0;

    // The number of times update() is called in a given frame. This is only
    // relevant inside of animate(), but a reference is held externally so that
    // this variable is not marked for garbage collection every time the main
    // loop runs.
    this.numUpdateSteps = 0;

    // The minimum amount of time in milliseconds that must pass since the last
    // frame was executed before another frame can be executed. The
    // multiplicative inverse caps the FPS (the default of zero means there is
    // no cap).
    this.minFrameDelay = 0;

    // Whether the main loop is running.
    this.running = false;

    // `true` if `MainLoop.start()` has been called and the most recent time it
    // was called has not been followed by a call to `MainLoop.stop()`. This is
    // different than `running` because there is a delay of a few milliseconds
    // after `MainLoop.start()` is called before the application is considered
    // "running." This delay is due to waiting for the next frame.
    this.started = false;

    // Whether the simulation has fallen too far behind real time.
    // Specifically, `panic` will be set to `true` if too many updates occur in
    // one frame. This is only relevant inside of animate(), but a reference is
    // held externally so that this variable is not marked for garbage
    // collection every time the main loop runs.
    this.panic = false;
};

MainLoop.prototype.constructor = MainLoop;

MainLoop.prototype = {

    setMaxFPS: function (fps)
    {
        if (fps === 0)
        {
            this.stop();
        }
        else
        {
            this.minFrameDelay = 1000 / fps;
        }
    },

    getMaxFPS: function ()
    {
        return 1000 / this.minFrameDelay;
    },

    resetFrameDelta: function ()
    {
        var oldFrameDelta = this.frameDelta;

        this.frameDelta = 0;

        return oldFrameDelta;
    },

    start: function ()
    {
        if (this.started)
        {
            return this;
        }

        this.started = true;
        this.running = true;

        this.lastFrameTimeMs = window.performance.now();
        this.lastFpsUpdate = window.performance.now();
        this.framesThisSecond = 0;
    },

    //  timestamp = DOMHighResTimeStamp
    step: function (timestamp)
    {
        // Throttle the frame rate (if minFrameDelay is set to a non-zero value by
        // `MainLoop.setMaxAllowedFPS()`).
        if (timestamp < this.lastFrameTimeMs + this.minFrameDelay)
        {
            return;
        }

        // frameDelta is the cumulative amount of in-app time that hasn't been
        // simulated yet. Add the time since the last frame. We need to track total
        // not-yet-simulated time (as opposed to just the time elapsed since the
        // last frame) because not all actually elapsed time is guaranteed to be
        // simulated each frame. See the comments below for details.
        this.frameDelta += timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;

        // Run any updates that are not dependent on time in the simulation.

        //  Here we'll need to run things like tween.update, input.update, etc.
        this.state.sys.begin(timestamp, this.frameDelta);

        // Update the estimate of the frame rate, `fps`. Every second, the number
        // of frames that occurred in that second are included in an exponential
        // moving average of all frames per second, with an alpha of 0.25. This
        // means that more recent seconds affect the estimated frame rate more than
        // older seconds.
        if (timestamp > this.lastFpsUpdate + 1000)
        {
            // Compute the new exponential moving average with an alpha of 0.25.
            // Using constants inline is okay here.
            this.fps = 0.25 * this.framesThisSecond + 0.75 * this.fps;

            this.lastFpsUpdate = timestamp;
            this.framesThisSecond = 0;
        }

        this.framesThisSecond++;

        this.numUpdateSteps = 0;

        var step = this.timestep;

        while (this.frameDelta >= step)
        {
            // this.update(this.timestep);

            this.state.sys.update(step, this.physicsStep);

            for (var c = 0; c < this.state.sys.children.list.length; c++)
            {
                var child = this.state.sys.children.list[c];

                if (child.exists)
                {
                    child.update(step);
                }
            }

            //  Dev level callback
            this.state.update(step);

            this.frameDelta -= this.timestep;

            if (++this.numUpdateSteps >= 240)
            {
                this.panic = true;
                break;
            }
        }

        this.state.sys.preRender();

        this.state.sys.updates.start();

        if (this.state.settings.visible && this.state.sys.color.alpha !== 0 && this.state.sys.children.list.length > 0)
        {
            this.game.renderer.render(this.state, this.frameDelta / this.timestep);
        }

        this.state.sys.updates.stop();

        // Run any updates that are not dependent on time in the simulation.
        this.state.sys.end(this.fps, this.panic);

        this.panic = false;
    },

    /*
    update: function (timestep)
    {
        this.state.sys.update(timestep);

        var c;
        var child;

        for (var c = 0; c < this.state.sys.children.list.length; c++)
        {
            var child = this.state.sys.children.list[c];

            if (child.exists)
            {
                child.update(timestep);
            }
        }

        //  Dev level callback
        this.state.update(timestep);

        for (c = 0; c < this.state.sys.children.list.length; c++)
        {
            var child = this.state.sys.children.list[c];

            if (child.exists)
            {
                child.update(timestep);
            }
        }
    },
    */

    stop: function ()
    {
        this.running = false;
        this.started = false;

        return this;
    }

};

module.exports = MainLoop;


/***/ },
/* 59 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Dirty! Manager
*
* @class
*/
var UpdateManager = function (state)
{
    this.state = state;

    this.game = state.game;

    this.list = [];

    // this.i = 1;

    this.running = false;
    
    this.processed = 0;
};

UpdateManager.prototype.constructor = UpdateManager;

UpdateManager.prototype = {

    stop: function ()
    {
        if (!this.running)
        {
            return;
        }

        // console.log(this.i, 'UpdateManager.stop', this.processed);

        this.list.length = 0;

        // this.i++;
    },

    start: function ()
    {
        if (!this.running)
        {
            return;
        }

        var len = this.list.length;

        if (len === 0)
        {
            return;
        }

        // console.log(this.i, 'UpdateManager.start', len);

        this.processed = 0;

        for (var i = 0; i < len; i++)
        {
            //  Because it may have already been processed (as a child of another Transform that was updated)
            if (this.list[i] && this.list[i]._dirty)
            {
                this.processed++;
                this.list[i].update();
            }
        }
    },

    add: function (transform)
    {
        this.list.push(transform);
    }

};

module.exports = UpdateManager;


/***/ },
/* 60 */
/***/ function(module, exports) {

var Set = function ()
{
    this.values = [];
};

Set.prototype.constructor = Set;

Set.prototype = {

    add: function (value)
    {
        if (this.values.indexOf(value) === -1)
        {
            this.values.push(value);
        }
    },

    delete: function (value)
    {
        var index = this.values.indexOf(value);

        if (index > -1)
        {
            this.values.splice(index, 1);
        }
    },

    each: function (callback)
    {
        for (var i = 0; i < this.values.length; i++)
        {
            if (!callback(this.values[i]))
            {
                break;
            }
        }
    },

    clear: function ()
    {
        this.values.length = 0;
    },

    contains: function (value)
    {
        return (this.values.indexOf(value) > -1);
    },

    union: function (set)
    {
        var newSet = new Set();

        set.values.forEach(function (value)
        {
            newSet.add(value);
        });

        this.values.forEach(function (value)
        {
            newSet.add(value);
        });

        return newSet;
    },

    intersect: function (set)
    {
        var newSet = new Set();

        this.values.forEach(function (value)
        {
            if (set.contains(value))
            {
                newSet.add(value);
            }
        });

        return newSet;
    },

    difference: function (set)
    {
        var newSet = new Set();

        this.values.forEach(function (value)
        {
            if (!set.contains(value))
            {
                newSet.add(value);
            }
        });

        return newSet;
    }

};

Object.defineProperties(Set.prototype, {

    size: {

        enumerable: true,

        get: function ()
        {
            return this.values.length;
        },

        set: function (value)
        {
            return this.values.length = value;
        }

    }

});

module.exports = Set;


/***/ },
/* 61 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(19);

var boot = __webpack_require__(18);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NzE2NDA2YzAyZjBlN2JiZjlkZiIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL09TLmpzIiwid2VicGFjazovLy8uLi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50LmpzIiwid2VicGFjazovLy8uLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy9zcmMvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2NvbnN0LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2ZpbGV0eXBlcy9JbWFnZUZpbGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3V0aWxzL05PT1AuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvcG9seWZpbGxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9EZWJ1Z0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy8uLi9jaGVja3N1bS5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0F1ZGlvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0F1ZGlvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9WaWRlby5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9WaWRlby5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy8uLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9ldmVudHMvRXZlbnRCaW5kaW5nLmpzIiwid2VicGFjazovLy9zcmMvZXZlbnRzL0V2ZW50QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ldmVudHMvRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvQmFzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0ZpbGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0dldFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9YSFJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy8uLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvQXJyYXkuZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL1VpbnQzMkFycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL3BlcmZvcm1hbmNlLm5vdy5qcyIsIndlYnBhY2s6Ly8vc3JjL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL01haW5Mb29wLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL1VwZGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0cnVjdHMvU2V0LmpzIiwid2VicGFjazovLy9kOi93YW1wL3d3dy9waGFzZXIvdjMvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9waGFzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3BoYXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwrQ0NBQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsR0FBRyx1QkFBdUIsT0FBTztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDclFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ3ZEQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPLHNHQUFzRztBQUM5SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUU1S0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDM0JBLG1CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRXpOQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RCw4QkFBOEIsY0FBYztBQUM1Qyw2QkFBNkIsV0FBVztBQUN4QyxpQ0FBaUMsZUFBZTtBQUNoRCxnQ0FBZ0MsYUFBYTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYSxFQUFFOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNsQkEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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Q0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFOUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYjtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFM0ZBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxhQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGFDQUEsbUJEQUEsQ0NB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QUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRTNGQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUU3REEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXhGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLFlDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUV2QkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FFckRBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCLFVBQVUsUUFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxREFBcUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUM1SEEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxvQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRXJRQSxZQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBRWJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHVCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsd0VBQXdFO0FBQ3RGLGNBQWMsY0FBYztBQUM1QixjQUFjLGFBQWE7QUFDM0IsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFaERBO0FBQ0E7QUFDQTs7QUNFQSxtQkRBQSxFQ0FBLEVEQUE7Ozs7Ozs7O0FFSEEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxVQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGtCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFlDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esc0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRWpSQSxhQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLFlDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsZ0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLHlCQUF5Qjs7QUFFbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV2aUJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsdUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUV2Q0EsaUJDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVoQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIseUNBQXlDO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHlDQUF5QztBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzFQQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7Ozs7Ozs7QUNySEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs4Q0NuTHRDLG1CQ0FBLENEQUEsRUNBQTs7QUFFQSxXREFBLG1CQ0FBLENEQUEsRUNBQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwaGFzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlBoYXNlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQaGFzZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDcxNjQwNmMwMmYwZTdiYmY5ZGYiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvT1MuanMiLCJ2YXIgT1MgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVza3RvcCAtIElzIHJ1bm5pbmcgb24gYSBkZXNrdG9wP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGRlc2t0b3A6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkFwcCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYXMgYSBXZWJBcHAsIGkuZS4gd2l0aGluIGEgV2ViVmlld1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdlYkFwcDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaU9TIC0gSXMgcnVubmluZyBvbiBpT1M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaU9TOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGlPU1ZlcnNpb24gLSBJZiBydW5uaW5nIGluIGlPUyB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaU9TVmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpUGhvbmUgLSBJcyBydW5uaW5nIG9uIGlQaG9uZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpUGhvbmU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQYWQgLSBJcyBydW5uaW5nIG9uIGlQYWQ/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaVBhZDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlMgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIENvY29vbkpTP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNvY29vbkpTOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlNBcHAgLSBJcyB0aGlzIGdhbWUgcnVubmluZyB3aXRoIENvY29vbkpTLkFwcD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjb2Nvb25KU0FwcDogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvcmRvdmEgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEFwYWNoZSBDb3Jkb3ZhP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNvcmRvdmE6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLmpzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG5vZGU6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlV2Via2l0IC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLVdlYmtpdD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBub2RlV2Via2l0OiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWxlY3Ryb24gLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEdpdEh1YiBFbGVjdHJvbj9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlbGVjdHJvbjogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVqZWN0YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgRWplY3RhP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGVqZWN0YTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY3Jvc3N3YWxrIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciB0aGUgSW50ZWwgQ3Jvc3N3YWxrIFhESz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjcm9zc3dhbGs6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFuZHJvaWQgLSBJcyBydW5uaW5nIG9uIGFuZHJvaWQ/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgYW5kcm9pZDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lT1MgLSBJcyBydW5uaW5nIG9uIGNocm9tZU9TP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNocm9tZU9TOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsaW51eCAtIElzIHJ1bm5pbmcgb24gbGludXg/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbGludXg6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1hY09TIC0gSXMgcnVubmluZyBvbiBtYWNPUz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtYWNPUzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2luZG93cyAtIElzIHJ1bm5pbmcgb24gd2luZG93cz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3aW5kb3dzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzUGhvbmUgLSBJcyBydW5uaW5nIG9uIGEgV2luZG93cyBQaG9uZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3aW5kb3dzUGhvbmU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpdGEgLSBJcyBydW5uaW5nIG9uIGEgUGxheVN0YXRpb24gVml0YT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB2aXRhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBraW5kbGUgLSBJcyBydW5uaW5nIG9uIGFuIEFtYXpvbiBLaW5kbGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAga2luZGxlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBpeGVsUmF0aW8gLSBQaXhlbFJhdGlvIG9mIHRoZSBob3N0IGRldmljZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBwaXhlbFJhdGlvOiAxXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIGlmICgvV2luZG93cy8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mud2luZG93cyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvTWFjIE9TLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5tYWNPUyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvTGludXgvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmxpbnV4ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5hbmRyb2lkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9pUFthb11kfGlQaG9uZS9pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmlPUyA9IHRydWU7XHJcbiAgICAgICAgKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspLyk7XHJcbiAgICAgICAgT1MuaU9TVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0tpbmRsZS8udGVzdCh1YSkgfHwgKC9cXGJLRltBLVpdW0EtWl0rLykudGVzdCh1YSkgfHwgKC9TaWxrLipNb2JpbGUgU2FmYXJpLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mua2luZGxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIE5PVCBkZXRlY3QgZWFybHkgZ2VuZXJhdGlvbnMgb2YgS2luZGxlIEZpcmUsIEkgdGhpbmsgdGhlcmUgaXMgbm8gcmVsaWFibGUgd2F5Li4uXHJcbiAgICAgICAgLy8gRS5nLiBcIk1vemlsbGEvNS4wIChNYWNpbnRvc2g7IFU7IEludGVsIE1hYyBPUyBYIDEwXzZfMzsgZW4tdXM7IFNpbGsvMS4xLjAtODApIEFwcGxlV2ViS2l0LzUzMy4xNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNS4wIFNhZmFyaS81MzMuMTYgU2lsay1BY2NlbGVyYXRlZD10cnVlXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9Dck9TLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5jaHJvbWVPUyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL1BsYXlzdGF0aW9uIFZpdGEvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy52aXRhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHVhKSB8fCAoL0lFTW9iaWxlL2kpLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmFuZHJvaWQgPSBmYWxzZTtcclxuICAgICAgICBPUy5pT1MgPSBmYWxzZTtcclxuICAgICAgICBPUy5tYWNPUyA9IGZhbHNlO1xyXG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xyXG4gICAgICAgIE9TLndpbmRvd3NQaG9uZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpbGsgPSAoL1NpbGsvKS50ZXN0KHVhKTtcclxuXHJcbiAgICBpZiAoT1Mud2luZG93cyB8fCBPUy5tYWNPUyB8fCAoT1MubGludXggJiYgIXNpbGspIHx8IE9TLmNocm9tZU9TKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmRlc2t0b3AgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBXaW5kb3dzIFBob25lIC8gVGFibGUgcmVzZXRcclxuICAgIGlmIChPUy53aW5kb3dzUGhvbmUgfHwgKCgvV2luZG93cyBOVC9pLnRlc3QodWEpKSAmJiAoL1RvdWNoL2kudGVzdCh1YSkpKSlcclxuICAgIHtcclxuICAgICAgICBPUy5kZXNrdG9wID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFdlYkFwcCBtb2RlIGluIGlPU1xyXG4gICAgaWYgKG5hdmlnYXRvci5zdGFuZGFsb25lKVxyXG4gICAge1xyXG4gICAgICAgIE9TLndlYkFwcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh3aW5kb3cuY29yZG92YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmNvcmRvdmEgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT09ICd1bmRlZmluZWQnKSlcclxuICAgIHtcclxuICAgICAgICBPUy5ub2RlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKE9TLm5vZGUgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnKVxyXG4gICAge1xyXG4gICAgICAgIE9TLm5vZGVXZWJraXQgPSAhIXByb2Nlc3MudmVyc2lvbnNbJ25vZGUtd2Via2l0J107XHJcbiAgICAgICAgXHJcbiAgICAgICAgT1MuZWxlY3Ryb24gPSAhIXByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChuYXZpZ2F0b3IuaXNDb2Nvb25KUylcclxuICAgIHtcclxuICAgICAgICBPUy5jb2Nvb25KUyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSAodHlwZW9mIENvY29vbkpTICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9TLmNvY29vbkpTQXBwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cuZWplY3RhICE9PSB1bmRlZmluZWQpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuZWplY3RhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKC9Dcm9zc3dhbGsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5jcm9zc3dhbGsgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIE9TLmlQaG9uZSA9IHVhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBob25lJykgIT09IC0xO1xyXG4gICAgT1MuaVBhZCA9IHVhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBhZCcpICE9PSAtMTtcclxuXHJcbiAgICBPUy5waXhlbFJhdGlvID0gd2luZG93WydkZXZpY2VQaXhlbFJhdGlvJ10gfHwgMTtcclxuXHJcbiAgICByZXR1cm4gT1M7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvT1MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0ge1xyXG5cclxuICAgIFZFUlNJT046ICczLjAuMCcsXHJcblxyXG4gICAgQVVUTzogMCxcclxuICAgIENBTlZBUzogMSxcclxuICAgIFdFQkdMOiAyLFxyXG5cclxuICAgIHN0YXRlOiB7XHJcblxyXG4gICAgICAgIFBFTkRJTkc6IDAsXHJcbiAgICAgICAgSU5TVEFMTEVEOiAxLFxyXG5cclxuICAgICAgICBCT09UOiAwLFxyXG4gICAgICAgIElOSVQ6IDEsXHJcbiAgICAgICAgUFJFTE9BRDogMixcclxuICAgICAgICBDUkVBVEU6IDMsXHJcbiAgICAgICAgVVBEQVRFOiA0LFxyXG4gICAgICAgIFJFTkRFUjogNSxcclxuICAgICAgICBTSFVURE9XTjogNlxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYmxlbmRNb2Rlczoge1xyXG5cclxuICAgICAgICBOT1JNQUw6IDAsXHJcbiAgICAgICAgQUREOiAxLFxyXG4gICAgICAgIE1VTFRJUExZOiAyLFxyXG4gICAgICAgIFNDUkVFTjogMyxcclxuICAgICAgICBPVkVSTEFZOiA0LFxyXG4gICAgICAgIERBUktFTjogNSxcclxuICAgICAgICBMSUdIVEVOOiA2LFxyXG4gICAgICAgIENPTE9SX0RPREdFOiA3LFxyXG4gICAgICAgIENPTE9SX0JVUk46IDgsXHJcbiAgICAgICAgSEFSRF9MSUdIVDogOSxcclxuICAgICAgICBTT0ZUX0xJR0hUOiAxMCxcclxuICAgICAgICBESUZGRVJFTkNFOiAxMSxcclxuICAgICAgICBFWENMVVNJT046IDEyLFxyXG4gICAgICAgIEhVRTogMTMsXHJcbiAgICAgICAgU0FUVVJBVElPTjogMTQsXHJcbiAgICAgICAgQ09MT1I6IDE1LFxyXG4gICAgICAgIExVTUlOT1NJVFk6IDE2XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzY2FsZU1vZGVzOiB7XHJcblxyXG4gICAgICAgIERFRkFVTFQ6IDAsXHJcbiAgICAgICAgTElORUFSOiAwLFxyXG4gICAgICAgIE5FQVJFU1Q6IDFcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDT05TVDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG5cclxudmFyIEJyb3dzZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXJvcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEFyb3JhLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGFyb3JhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjaHJvbWUgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIENocm9tZS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjaHJvbWU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gY2hyb21lVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gQ2hyb21lIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjaHJvbWVWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVwaXBoYW55IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBFcGlwaGFueS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlcGlwaGFueTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlyZWZveCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gRmlyZWZveC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaXJlZm94OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGZpcmVmb3hWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBGaXJlZm94IHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaXJlZm94VmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtb2JpbGVTYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1vYmlsZSBTYWZhcmkuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbW9iaWxlU2FmYXJpOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaWU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gaWVWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIEJleW9uZCBJRTEwIHlvdSBzaG91bGQgdXNlIERldmljZS50cmlkZW50IGFuZCBEZXZpY2UudHJpZGVudFZlcnNpb24uXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaWVWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pZG9yaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWlkb3JpLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1pZG9yaTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3BlcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE9wZXJhLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9wZXJhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIFNhZmFyaS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBzYWZhcmk6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FmYXJpVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gU2FmYXJpIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBzYWZhcmlWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRyaWRlbnQgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGEgVHJpZGVudCB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIChJRTExKylcclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0cmlkZW50OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRyaWRlbnRWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIFNlZSB7QGxpbmsgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL21zNTM3NTAzKHY9dnMuODUpLmFzcHh9XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdHJpZGVudFZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWRnZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWljcm9zb2Z0IEVkZ2UgYnJvd3Nlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlZGdlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzaWxrIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiB0aGUgU2lsayBicm93c2VyIChhcyB1c2VkIG9uIHRoZSBBbWF6b24gS2luZGxlKVxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHNpbGs6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIGlmICgoL0Fyb3JhLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5hcm9yYSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvRWRnZVxcL1xcZCsvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZWRnZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL0Nocm9tZVxcLyhcXGQrKS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5jaHJvbWUgPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIuY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9FcGlwaGFueS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZXBpcGhhbnkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9GaXJlZm94XFxEKyhcXGQrKS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZmlyZWZveCA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9BcHBsZVdlYktpdC8pLnRlc3QodWEpICYmIE9TLmlPUylcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLm1vYmlsZVNhZmFyaSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL01TSUUgKFxcZCtcXC5cXGQrKTsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmllID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLmllVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9NaWRvcmkvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLm1pZG9yaSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL09wZXJhLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5vcGVyYSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL1NhZmFyaS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5zYWZhcmkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9UcmlkZW50XFwvKFxcZCtcXC5cXGQrKSguKilydjooXFxkK1xcLlxcZCspLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5pZSA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci50cmlkZW50ID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLnRyaWRlbnRWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICAgICAgQnJvd3Nlci5pZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDMsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgU2lsayBnZXRzIGl0cyBvd24gaWYgY2xhdXNlIGJlY2F1c2UgaXRzIHVhIGFsc28gY29udGFpbnMgJ1NhZmFyaSdcclxuICAgIGlmICgoL1NpbGsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLnNpbGsgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBCcm93c2VyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0Jyb3dzZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgZ2xvYmFsIGxldmVsIGNvbnRhaW5lciBvZiBGYWN0b3J5IGluc3RhbmNlcy5cclxuKiBGYWN0b3JpZXMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB3aXRoIHRoaXMgY29udGFpbmVyICh3aGVuIHJlcXVpcmVkKVxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcblxyXG52YXIgZmFjdG9yaWVzID0ge307XHJcblxyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKCdGYWN0b3J5Q29udGFpbmVyIGlzIGFsaXZlJyk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uIChmYWN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChmYWN0b3JpZXMuaGFzT3duUHJvcGVydHkoZmFjdG9yeS5LRVkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgcmVnaXN0ZXJlZCcsIGZhY3RvcnkuS0VZKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFR5cGUoZmFjdG9yeS5LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nJywgZmFjdG9yeS5LRVkpO1xyXG5cclxuICAgICAgICBmYWN0b3JpZXNbZmFjdG9yeS5LRVldID0ge1xyXG4gICAgICAgICAgICBhZGQ6IGZhY3RvcnkuYWRkLFxyXG4gICAgICAgICAgICBtYWtlOiBmYWN0b3J5Lm1ha2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmFjdG9yeTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFjdG9yaWVzW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uIChkZXN0LCBpc0ZhY3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgZmFjdG9yeSBpbiBmYWN0b3JpZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZycsIGZhY3RvcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlc3RbZmFjdG9yeV0gPSAoaXNGYWN0b3J5KSA/IGZhY3Rvcmllc1tmYWN0b3J5XS5hZGQgOiBmYWN0b3JpZXNbZmFjdG9yeV0ubWFrZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGYWN0b3J5Q29udGFpbmVyKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpXHJcbntcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgdGhpcy5fcHJvcGFnYXRlID0gdHJ1ZTtcclxufTtcclxuXHJcbkV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50O1xyXG5cclxuRXZlbnQucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAodGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9wYWdhdGUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEJpbmRpbmcgPSByZXF1aXJlKCcuL0V2ZW50QmluZGluZycpO1xyXG5cclxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcclxuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgdGhpcy5oYXNGaWx0ZXJzID0gZmFsc2U7XHJcbn07XHJcblxyXG5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnREaXNwYXRjaGVyO1xyXG5cclxuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBnZXRCaW5kaW5nOiBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5iaW5kaW5ncy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3R5cGVdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlQmluZGluZzogZnVuY3Rpb24gKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldEJpbmRpbmcodHlwZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzW3R5cGVdID0gbmV3IEV2ZW50QmluZGluZyh0aGlzLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3R5cGVdO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgeyBwcmlvcml0eSA9IDA7IH1cclxuXHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5hZGQobGlzdGVuZXIsIHByaW9yaXR5LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgb25jZTogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgeyBwcmlvcml0eSA9IDA7IH1cclxuXHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5hZGQobGlzdGVuZXIsIHByaW9yaXR5LCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQWRkIGEgY2FsbGJhY2sgdGhhdCBpcyBub3RpZmllZCBldmVyeSB0aW1lIHRoaXMgRXZlbnREaXNwYXRjaGVyIGRpc3BhdGNoZXMgYW4gZXZlbnRcclxuICAgIC8vICBubyBtYXR0ZXIgd2hhdCB0aGUgZXZlbnQgdHlwZSBpcy4gRmlsdGVycyBhcmUgaW52b2tlZCBmaXJzdCwgYmVmb3JlIGFueSBiaW5kaW5ncyxcclxuICAgIC8vICBhbmQgY2FuIHN0b3AgZXZlbnRzIGlmIHRoZXkgd2lzaCAoaW4gd2hpY2ggY2FzZSB0aGV5J2xsIG5ldmVyIHJlYWNoIHRoZSBiaW5kaW5ncylcclxuICAgIGZpbHRlcjogZnVuY3Rpb24gKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpID0gdGhpcy5maWx0ZXJzLmluZGV4T2YoY2FsbGJhY2spO1xyXG5cclxuICAgICAgICBpZiAoaSA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgUmVtb3ZlIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYXNGaWx0ZXJzID0gKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhczogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xyXG5cclxuICAgICAgICBpZiAoYmluZGluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmhhcyhsaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsOiBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy50b3RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIuXHJcbiAgICAvLyAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgbGlzdGVuZXIgcmVnaXN0ZXJlZCB3aXRoIHRoZSBFdmVudERpc3BhdGNoZXIsIGEgY2FsbCB0byB0aGlzIG1ldGhvZCBoYXMgbm8gZWZmZWN0LlxyXG4gICAgb2ZmOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5yZW1vdmUobGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIF9kaXNwYXRjaEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudClcclxuICAgIHtcclxuICAgICAgICBldmVudC5yZXNldCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gIFBhc3MgdGhlIGV2ZW50IHRocm91Z2ggdGhlIGZpbHRlcnMgZmlyc3RcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIERpZCB0aGUgZmlsdGVyIGtpbGwgdGhlIGV2ZW50PyBJZiBzbywgd2UgY2FuIGFib3J0IG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5fcHJvcGFnYXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcoZXZlbnQudHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSGFuZGxlcihldmVudFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hIYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMsIGJ1dCByZXRhaW5zIHRoZSBldmVudCB0eXBlIGVudHJpZXNcclxuICAgIHJlbW92ZUFsbDogZnVuY3Rpb24gKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVBbGxGaWx0ZXJzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmhhc0ZpbHRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZTogZnVuY3Rpb24gKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5iaW5kaW5nc1t0eXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVBbGw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgYmluZGluZyBpbiB0aGlzLmJpbmRpbmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmluZGluZy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVBbGwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbEZpbHRlcnMoKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RGlzcGF0Y2hlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwiLy8gIENyZWF0ZXMgYW4gWEhSU2V0dGluZ3MgT2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHJcbnZhciBYSFJTZXR0aW5ncyA9IGZ1bmN0aW9uIChyZXNwb25zZVR5cGUsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCwgdGltZW91dClcclxue1xyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkKSB7IHJlc3BvbnNlVHlwZSA9ICcnOyB9XHJcbiAgICBpZiAoYXN5bmMgPT09IHVuZGVmaW5lZCkgeyBhc3luYyA9IHRydWU7IH1cclxuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHsgdXNlciA9ICcnOyB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyBwYXNzd29yZCA9ICcnOyB9XHJcbiAgICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7IHRpbWVvdXQgPSAwOyB9XHJcblxyXG4gICAgLy8gQmVmb3JlIHNlbmRpbmcgYSByZXF1ZXN0LCBzZXQgdGhlIHhoci5yZXNwb25zZVR5cGUgdG8gXCJ0ZXh0XCIsIFxyXG4gICAgLy8gXCJhcnJheWJ1ZmZlclwiLCBcImJsb2JcIiwgb3IgXCJkb2N1bWVudFwiLCBkZXBlbmRpbmcgb24geW91ciBkYXRhIG5lZWRzLiBcclxuICAgIC8vIE5vdGUsIHNldHRpbmcgeGhyLnJlc3BvbnNlVHlwZSA9ICcnIChvciBvbWl0dGluZykgd2lsbCBkZWZhdWx0IHRoZSByZXNwb25zZSB0byBcInRleHRcIi5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgSWdub3JlZCBieSB0aGUgTG9hZGVyLCBvbmx5IHVzZWQgYnkgRmlsZS5cclxuICAgICAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcclxuXHJcbiAgICAgICAgYXN5bmM6IGFzeW5jLFxyXG5cclxuICAgICAgICAvLyAgY3JlZGVudGlhbHNcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuXHJcbiAgICAgICAgLy8gIHRpbWVvdXQgaW4gbXMgKDAgPSBubyB0aW1lb3V0KVxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcblxyXG4gICAgICAgIC8vICBzZXRSZXF1ZXN0SGVhZGVyXHJcbiAgICAgICAgaGVhZGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaGVhZGVyVmFsdWU6IHVuZGVmaW5lZCxcclxuXHJcbiAgICAgICAgLy8gIG92ZXJyaWRlTWltZVR5cGVcclxuICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiB1bmRlZmluZWRcclxuXHJcbiAgICB9O1xyXG4gICAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFhIUlNldHRpbmdzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIFNvdXJjZSBvYmplY3RcclxuLy8gIFRoZSBrZXkgYXMgYSBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIGtleXMsIGkuZS4gJ2Jhbm5lcicsIG9yICdiYW5uZXIuaGlkZUJhbm5lcidcclxuLy8gIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RcclxuXHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IGZ1bmN0aW9uIChzb3VyY2UsIGtleSwgZGVmYXVsdFZhbHVlKVxyXG57XHJcbiAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSlcclxuICAgIHtcclxuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnQgPSBzb3VyY2U7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgICAgICAvLyAgVXNlIGZvciBsb29wIGhlcmUgc28gd2UgY2FuIGJyZWFrIGVhcmx5XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNPd25Qcm9wZXJ0eShrZXlzW2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFllcyBpdCBoYXMgYSBrZXkgcHJvcGVydHksIGxldCdzIGNhcnJ5IG9uIGRvd25cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyZW50W2tleXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudFtrZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSA/IHNvdXJjZVtrZXldIDogZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2V0T2JqZWN0VmFsdWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL0dldE9iamVjdFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XHJcblxyXG52YXIgRmVhdHVyZXMgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2FudmFzIC0gSXMgY2FudmFzIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgez9ib29sZWFufSBjYW52YXNCaXRCbHRTaGlmdCAtIFRydWUgaWYgY2FudmFzIHN1cHBvcnRzIGEgJ2NvcHknIGJpdGJsdCBvbnRvIGl0c2VsZiB3aGVuIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHJlZ2lvbnMgb3ZlcmxhcC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXNCaXRCbHRTaGlmdDogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJHTCAtIElzIHdlYkdMIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJHTDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlsZSAtIElzIGZpbGUgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGZpbGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGVTeXN0ZW0gLSBJcyBmaWxlU3lzdGVtIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaWxlU3lzdGVtOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsb2NhbFN0b3JhZ2UgLSBJcyBsb2NhbFN0b3JhZ2UgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGxvY2FsU3RvcmFnZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd29ya2VyIC0gSXMgd29ya2VyIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3b3JrZXI6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHBvaW50ZXJMb2NrIC0gSXMgUG9pbnRlciBMb2NrIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBwb2ludGVyTG9jazogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdmlicmF0aW9uIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIFZpYnJhdGlvbiBBUEk/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdmlicmF0aW9uOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBnZXRVc2VyTWVkaWEgLSBEb2VzIHRoZSBkZXZpY2Ugc3VwcG9ydCB0aGUgZ2V0VXNlck1lZGlhIEFQST9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBnZXRVc2VyTWVkaWE6IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIC0gSXMgdGhlIGRldmljZSBiaWcgb3IgbGl0dGxlIGVuZGlhbj8gKG9ubHkgZGV0ZWN0ZWQgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWRBcnJheXMpXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbGl0dGxlRW5kaWFuOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzdXBwb3J0MzJiaXQgLSBEb2VzIHRoZSBkZXZpY2UgY29udGV4dCBzdXBwb3J0IDMyYml0IHBpeGVsIG1hbmlwdWxhdGlvbiB1c2luZyBhcnJheSBidWZmZXIgdmlld3M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc3VwcG9ydDMyYml0OiBmYWxzZVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4qIENoZWNrIExpdHRsZSBvciBCaWcgRW5kaWFuIHN5c3RlbS5cclxuKlxyXG4qIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxyXG4qL1xyXG5mdW5jdGlvbiBjaGVja0lzTGl0dGxlRW5kaWFuICgpXHJcbntcclxuICAgIHZhciBhID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG4gICAgdmFyIGIgPSBuZXcgVWludDhBcnJheShhKTtcclxuICAgIHZhciBjID0gbmV3IFVpbnQzMkFycmF5KGEpO1xyXG5cclxuICAgIGJbMF0gPSAweGExO1xyXG4gICAgYlsxXSA9IDB4YjI7XHJcbiAgICBiWzJdID0gMHhjMztcclxuICAgIGJbM10gPSAweGQ0O1xyXG5cclxuICAgIGlmIChjWzBdID09PSAweGQ0YzNiMmExKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjWzBdID09PSAweGExYjJjM2Q0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyAgQ291bGQgbm90IGRldGVybWluZSBlbmRpYW5uZXNzXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0ZlYXR1cmVzLmluaXQnKTtcclxuXHJcbiAgICBGZWF0dXJlcy5jYW52YXMgPSAhIXdpbmRvd1snQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJ10gfHwgT1MuY29jb29uSlM7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcilcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5sb2NhbFN0b3JhZ2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5maWxlID0gISF3aW5kb3dbJ0ZpbGUnXSAmJiAhIXdpbmRvd1snRmlsZVJlYWRlciddICYmICEhd2luZG93WydGaWxlTGlzdCddICYmICEhd2luZG93WydCbG9iJ107XHJcbiAgICBGZWF0dXJlcy5maWxlU3lzdGVtID0gISF3aW5kb3dbJ3JlcXVlc3RGaWxlU3lzdGVtJ107XHJcblxyXG4gICAgdmFyIGlzVWludDggPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgdGVzdFdlYkdMID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAod2luZG93WydXZWJHTFJlbmRlcmluZ0NvbnRleHQnXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGVXZWJHTCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoT1MuY29jb29uSlMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnNjcmVlbmNhbnZhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhczJEID0gQ2FudmFzUG9vbC5jcmVhdGUyRCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4MkQgPSBjYW52YXMyRC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBDYW4ndCBiZSBkb25lIG9uIGEgd2ViZ2wgY29udGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gY3R4MkQuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICogVGVzdCB0byBzZWUgaWYgSW1hZ2VEYXRhIHVzZXMgQ2FudmFzUGl4ZWxBcnJheSBvciBVaW50OENsYW1wZWRBcnJheS5cclxuICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICogQGF1dGhvciBNYXR0IERlc0xhdXJpZXJzIChAbWF0dGRlc2wpXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaXNVaW50OCA9IGltYWdlLmRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNQb29sLnJlbW92ZShjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzMkQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoY3R4ICE9PSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgRmVhdHVyZXMud2ViR0wgPSB0ZXN0V2ViR0woKTtcclxuXHJcbiAgICBGZWF0dXJlcy53b3JrZXIgPSAhIXdpbmRvd1snV29ya2VyJ107XHJcblxyXG4gICAgRmVhdHVyZXMucG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5vR2V0VXNlck1lZGlhO1xyXG5cclxuICAgIHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XHJcblxyXG4gICAgRmVhdHVyZXMuZ2V0VXNlck1lZGlhID0gRmVhdHVyZXMuZ2V0VXNlck1lZGlhICYmICEhbmF2aWdhdG9yLmdldFVzZXJNZWRpYSAmJiAhIXdpbmRvdy5VUkw7XHJcblxyXG4gICAgLy8gT2xkZXIgdmVyc2lvbnMgb2YgZmlyZWZveCAoPCAyMSkgYXBwYXJlbnRseSBjbGFpbSBzdXBwb3J0IGJ1dCB1c2VyIG1lZGlhIGRvZXMgbm90IGFjdHVhbGx5IHdvcmtcclxuICAgIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA8IDIxKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmdldFVzZXJNZWRpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4Y2x1ZGVzIGlPUyB2ZXJzaW9ucyBhcyB0aGV5IGdlbmVyYWxseSB3cmFwIFVJV2ViVmlldyAoZWcuIFNhZmFyaSBXZWJLaXQpIGFuZCBpdFxyXG4gICAgLy8gaXMgc2FmZXIgdG8gbm90IHRyeSBhbmQgdXNlIHRoZSBmYXN0IGNvcHktb3ZlciBtZXRob2QuXHJcbiAgICBpZiAoIU9TLmlPUyAmJiAoQnJvd3Nlci5pZSB8fCBCcm93c2VyLmZpcmVmb3ggfHwgQnJvd3Nlci5jaHJvbWUpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLbm93biBub3QgdG8gd29ya1xyXG4gICAgaWYgKEJyb3dzZXIuc2FmYXJpIHx8IEJyb3dzZXIubW9iaWxlU2FmYXJpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdG9yLnZpYnJhdGUgPSBuYXZpZ2F0b3IudmlicmF0ZSB8fCBuYXZpZ2F0b3Iud2Via2l0VmlicmF0ZSB8fCBuYXZpZ2F0b3IubW96VmlicmF0ZSB8fCBuYXZpZ2F0b3IubXNWaWJyYXRlO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IudmlicmF0ZSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy52aWJyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmxpdHRsZUVuZGlhbiA9IGNoZWNrSXNMaXR0bGVFbmRpYW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5zdXBwb3J0MzJiaXQgPSAoXHJcbiAgICAgICAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gIT09IG51bGwgJiZcclxuICAgICAgICBpc1VpbnQ4XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBGZWF0dXJlcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GZWF0dXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwb29sIGludG8gd2hpY2ggdGhlIGNhbnZhcyBlbGVtZW50cyBhcmUgcGxhY2VkLlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgcG9vbFxyXG4gKiBAdHlwZSBBcnJheVxyXG4gKi9cclxudmFyIHBvb2wgPSBbXTtcclxuXHJcbi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXHJcbi8vICBiZWZvcmUgYSBQaGFzZXIuR2FtZSBpbnN0YW5jZSBoYXMgZXZlbiBiZWVuIGNyZWF0ZWQuXHJcbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBvbiB0aGUgc2FtZSBwYWdlXHJcbi8vICBjYW4gc2hhcmUgdGhlIG9uZSBzaW5nbGUgcG9vbFxyXG5cclxuLyoqXHJcbiogVGhlIENhbnZhc1Bvb2wgaXMgYSBnbG9iYWwgc3RhdGljIG9iamVjdCwgdGhhdCBhbGxvd3MgUGhhc2VyIHRvIHJlY3ljbGUgYW5kIHBvb2wgQ2FudmFzIERPTSBlbGVtZW50cy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuQ2FudmFzUG9vbFxyXG4qIEBzdGF0aWNcclxuKi9cclxudmFyIENhbnZhc1Bvb2wgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlcyBhIG5ldyBDYW52YXMgRE9NIGVsZW1lbnQsIG9yIHB1bGxzIG9uZSBmcm9tIHRoZSBwb29sIGlmIGZyZWUuXHJcbiAgICAqIFxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmNyZWF0ZVxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBwYXJhbSB7YW55fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gVGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgKi9cclxuICAgIHZhciBjcmVhdGUgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCB0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkKSB7IHdpZHRoID0gMTsgfVxyXG4gICAgICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgeyBoZWlnaHQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkgeyB0eXBlID0gQ09OU1QuQ0FOVkFTOyB9XHJcblxyXG4gICAgICAgIHZhciBjYW52YXM7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGZpcnN0KHR5cGUpO1xyXG5cclxuICAgICAgICBpZiAoY29udGFpbmVyID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIG5ldycpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcG9vbC5wdXNoKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5jcmVhdGUgZXhpc3RpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjcmVhdGUyRCA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULkNBTlZBUyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjcmVhdGVXZWJHTCA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULldFQkdMKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGZpcnN0IGZyZWUgY2FudmFzIGluZGV4IGZyb20gdGhlIHBvb2wuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0Rmlyc3RcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICAgIHZhciBmaXJzdCA9IGZ1bmN0aW9uICh0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxyXG5cclxuICAgICAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyLnBhcmVudCAmJiBjb250YWluZXIudHlwZSA9PT0gdHlwZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIExvb2tzIHVwIGEgY2FudmFzIGJhc2VkIG9uIGl0cyBwYXJlbnQsIGFuZCBpZiBmb3VuZCBwdXRzIGl0IGJhY2sgaW4gdGhlIHBvb2wsIGZyZWVpbmcgaXQgdXAgZm9yIHJlLXVzZS5cclxuICAgICogVGhlIGNhbnZhcyBoYXMgaXRzIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHRvIDEsIGFuZCBpdHMgcGFyZW50IGF0dHJpYnV0ZSBudWxsZWQuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlXHJcbiAgICAqIEBwYXJhbSB7YW55fEhUTUxDYW52YXNFbGVtZW50fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICovXHJcbiAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKHBhcmVudClcclxuICAgIHtcclxuICAgICAgICAvLyAgQ2hlY2sgdG8gc2VlIGlmIHRoZSBwYXJlbnQgaXMgYSBjYW52YXMgb2JqZWN0XHJcbiAgICAgICAgdmFyIGlzQ2FudmFzID0gcGFyZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKChpc0NhbnZhcyAmJiBjb250YWluZXIuY2FudmFzID09PSBwYXJlbnQpIHx8ICghaXNDYW52YXMgJiYgY29udGFpbmVyLnBhcmVudCA9PT0gcGFyZW50KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wucmVtb3ZlIGZvdW5kIGFuZCByZW1vdmVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jYW52YXMud2lkdGggPSAxO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdXNlZCBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0VG90YWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGluLXVzZSAocGFyZW50ZWQpIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cclxuICAgICovXHJcbiAgICB2YXIgdG90YWwgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjID0gMDtcclxuXHJcbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIGZyZWUgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZyZWVcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGZyZWUgKHVuLXBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqL1xyXG4gICAgdmFyIGZyZWUgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwb29sLmxlbmd0aCAtIHRvdGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlOiBjcmVhdGUsXHJcbiAgICAgICAgY3JlYXRlMkQ6IGNyZWF0ZTJELFxyXG4gICAgICAgIGNyZWF0ZVdlYkdMOiBjcmVhdGVXZWJHTCxcclxuICAgICAgICBmaXJzdDogZmlyc3QsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmUsXHJcbiAgICAgICAgdG90YWw6IHRvdGFsLFxyXG4gICAgICAgIGZyZWU6IGZyZWUsXHJcbiAgICAgICAgcG9vbDogcG9vbFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vICBJZiB3ZSBleHBvcnQgdGhlIGNhbGxlZCBmdW5jdGlvbiBoZXJlLCBpdCdsbCBvbmx5IGJlIGludm9rZWQgb25jZSAobm90IGV2ZXJ5IHRpbWUgaXQncyByZXF1aXJlZCkuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzUG9vbCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vQ2FudmFzUG9vbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ2YXIgRVZFTlRfQ09OU1QgPSB7XHJcblxyXG4gICAgRElTUEFUQ0hFUl9JRExFOiAwLFxyXG4gICAgRElTUEFUQ0hFUl9ESVNQQVRDSElORzogMSxcclxuICAgIERJU1BBVENIRVJfUkVNT1ZJTkc6IDIsXHJcbiAgICBESVNQQVRDSEVSX0RFU1RST1lFRDogMyxcclxuXHJcbiAgICBMSVNURU5FUl9QRU5ESU5HOiA0LFxyXG4gICAgTElTVEVORVJfQUNUSVZFOiA1LFxyXG4gICAgTElTVEVORVJfUkVNT1ZJTkc6IDZcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVWRU5UX0NPTlNUO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBGSUxFX0NPTlNUID0ge1xyXG5cclxuICAgIExPQURFUl9JRExFOiAwLFxyXG4gICAgTE9BREVSX0xPQURJTkc6IDEsXHJcbiAgICBMT0FERVJfUFJPQ0VTU0lORzogMixcclxuICAgIExPQURFUl9DT01QTEVURTogMyxcclxuICAgIExPQURFUl9ERVNUUk9ZRUQ6IDQsXHJcblxyXG4gICAgRklMRV9QRU5ESU5HOiA1LCAgICAgIC8vIGZpbGUgaXMgaW4gdGhlIGxvYWQgcXVldWUgYnV0IG5vdCB5ZXQgc3RhcnRlZFxyXG4gICAgRklMRV9MT0FESU5HOiA2LCAgICAgIC8vIGZpbGUgaGFzIGJlZW4gc3RhcnRlZCB0byBsb2FkIGJ5IHRoZSBsb2FkZXIgKG9uTG9hZCBjYWxsZWQpXHJcbiAgICBGSUxFX0xPQURFRDogNywgICAgICAgLy8gZmlsZSBoYXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSwgYXdhaXRpbmcgcHJvY2Vzc2luZ1xyXG4gICAgRklMRV9GQUlMRUQ6IDgsICAgICAgIC8vIGZpbGUgZmFpbGVkIHRvIGxvYWRcclxuICAgIEZJTEVfUFJPQ0VTU0lORzogOSwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxyXG4gICAgRklMRV9DT01QTEVURTogMTAsICAgICAvLyBmaWxlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nXHJcbiAgICBGSUxFX0RFU1RST1lFRDogMTEgICAgIC8vIGZpbGUgaGFzIGJlZW4gZGVzdHJveWVkXHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGSUxFX0NPTlNUO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIExPQURFUl9TVEFSVF9FVkVOVDogcmVxdWlyZSgnLi9Mb2FkZXJTdGFydEV2ZW50JyksXHJcbiAgICBMT0FERVJfQ09NUExFVEVfRVZFTlQ6IHJlcXVpcmUoJy4vTG9hZGVyQ29tcGxldGVFdmVudCcpXHJcblxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZXZlbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwiLy8gdmFyIEZJTEVfQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgRmlsZSA9IHJlcXVpcmUoJy4uL0ZpbGUnKTtcclxuXHJcbi8vICBEaWZmZXJlbnQgaW1hZ2VzIGJhc2VkIG9uIGRldmljZS1waXhlbCByYXRpb1xyXG4vLyAgQW5kIG1heWJlIG9uIHNjcmVlbiByZXNvbHV0aW9uIGJyZWFrcG9pbnRzXHJcblxyXG4vLyAgMiBvcHRpb25zIC0gY2FuIGVpdGhlciByZXR1cm4gdGhlIEZpbGUgb2JqZWN0LCBzbyB0aGV5IGNhbiBsaXN0ZW4gdG8gaXQgc3BlY2lmaWNhbGx5XHJcbi8vICBPciBjYW4gcmV0dXJuIHRoZSBMb2FkZXIsIHNvIHRoZXkgY2FuIGNoYWluIGNhbGxzP1xyXG5cclxudmFyIEltYWdlRmlsZSA9IGZ1bmN0aW9uIChrZXksIHVybCwgcGF0aClcclxue1xyXG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgeyBwYXRoID0gJyc7IH1cclxuXHJcbiAgICBpZiAoIWtleSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0xvYWRlcjogWW91IHRyaWVkIHRvIGxvYWQgYW4gSW1hZ2UsIGJ1dCBubyBrZXkgd2FzIGdpdmVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVybClcclxuICAgIHtcclxuICAgICAgICB1cmwgPSBwYXRoICsga2V5ICsgJy5wbmcnO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHVybCA9IHBhdGguY29uY2F0KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGUgPSBuZXcgRmlsZSgnaW1hZ2UnLCBrZXksIHVybCwgJ2FycmF5YnVmZmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlRmlsZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2ZpbGV0eXBlcy9JbWFnZUZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcclxuXHJcbnZhciBTZXR0aW5ncyA9IGZ1bmN0aW9uIChzdGF0ZSwgY29uZmlnKVxyXG57XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpXHJcbiAgICB7XHJcbiAgICAgICAgY29uZmlnID0geyBrZXk6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFBhc3MgdGhlICdoYXNPd25Qcm9wZXJ0eScgY2hlY2tzXHJcbiAgICAgICAgY29uZmlnID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlOyAvLyAgRG8gd2UgYWN0dWFsbHkgbmVlZCB0aGlzIHJlZmVyZW5jZT8gVGhpcyBjb3VsZCBqdXN0IGJlIGEgcHJvcGVydHkgYnVja2V0XHJcblxyXG4gICAgdGhpcy5zdGF0dXMgPSBDT05TVC5zdGF0ZS5QRU5ESU5HO1xyXG5cclxuICAgIC8vICBXaGljaCBwYXJ0IG9mIHRoaXMgU3RhdGUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZD9cclxuICAgIC8vICBwcmVsb2FkLCBjcmVhdGUsIHVwZGF0ZSwgc2h1dGRvd24sIGV0Y1xyXG4gICAgdGhpcy5vcCA9IENPTlNULnN0YXRlLkJPT1Q7XHJcblxyXG4gICAgdGhpcy5rZXkgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdrZXknLCAnJyk7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2FjdGl2ZScsIGZhbHNlKTtcclxuICAgIHRoaXMudmlzaWJsZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3Zpc2libGUnLCB0cnVlKTtcclxuICAgIHRoaXMuc2NhbGVNb2RlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2NhbGVNb2RlJywgQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUKTtcclxuICAgIHRoaXMuZnBzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnZnBzJywgNjApO1xyXG4gICAgdGhpcy54ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAneCcsIDApO1xyXG4gICAgdGhpcy55ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAneScsIDApO1xyXG5cclxuICAgIC8vICAtMSBtZWFucyB0aGUgU3RhdGUgTWFuYWdlciB3aWxsIHNldCBpdCB0byBiZSB0aGUgR2FtZSBkaW1lbnNpb25zXHJcbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAtMSk7XHJcbiAgICB0aGlzLmhlaWdodCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2hlaWdodCcsIC0xKTtcclxufTtcclxuXHJcbi8vICBVbmxlc3Mgd2UgYWRkIHNvbWUgYWN0dWFsIGZ1bmN0aW9ucyBpbiBoZXJlLCB3ZSdsbCBtYWtlIHRoaXMganVzdCByZXR1cm4gYW4gT2JqZWN0IGluc3RlYWQgb2YgYW4gaW5zdGFuY2VcclxuU2V0dGluZ3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2V0dGluZ3M7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TZXR0aW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU2V0dGluZ3MuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcicpO1xyXG52YXIgR2FtZU9iamVjdEZhY3RvcnkgPSByZXF1aXJlKCcuL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnknKTtcclxudmFyIEdhbWVPYmplY3RDcmVhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yJyk7XHJcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuL3N5c3RlbXMvTG9hZGVyJyk7XHJcbnZhciBNYWluTG9vcCA9IHJlcXVpcmUoJy4vc3lzdGVtcy9NYWluTG9vcCcpO1xyXG52YXIgVXBkYXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9VcGRhdGVNYW5hZ2VyJyk7XHJcblxyXG52YXIgU3lzdGVtcyA9IGZ1bmN0aW9uIChzdGF0ZSwgY29uZmlnKVxyXG57XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgdGhpcy5ldmVudHM7XHJcblxyXG4gICAgLy8gIFN0YXRlIHNwZWNpZmljIG1hbmFnZXJzIChGYWN0b3J5LCBUd2VlbnMsIExvYWRlciwgUGh5c2ljcywgZXRjKVxyXG4gICAgdGhpcy5hZGQ7XHJcbiAgICB0aGlzLm1ha2U7XHJcbiAgICB0aGlzLmlucHV0O1xyXG4gICAgdGhpcy5sb2FkO1xyXG4gICAgdGhpcy50d2VlbnM7XHJcbiAgICB0aGlzLm1haW5sb29wO1xyXG4gICAgdGhpcy51cGRhdGVzO1xyXG5cclxuICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXHJcbiAgICB0aGlzLmNhbWVyYTtcclxuICAgIHRoaXMuY2hpbGRyZW47XHJcbiAgICB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5kYXRhO1xyXG4gICAgdGhpcy5mYm87XHJcbiAgICB0aGlzLnRpbWU7XHJcbiAgICB0aGlzLnRyYW5zZm9ybTtcclxufTtcclxuXHJcblN5c3RlbXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtcztcclxuXHJcblN5c3RlbXMucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlLlN5c3RlbXMuaW5pdCcpO1xyXG5cclxuICAgICAgICAvLyAgQWxsIG9mIHRoZSBzeXN0ZW1zIGNhbiB1c2UgdGhlIFN0YXRlIGxldmVsIEV2ZW50RGlzcGF0Y2hlclxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuICAgICAgICAvLyAgU3RhdGUgc3BlY2lmaWMgbWFuYWdlcnMgKEZhY3RvcnksIFR3ZWVucywgTG9hZGVyLCBQaHlzaWNzLCBldGMpXHJcbiAgICAgICAgLy8gIEFsbCB0aGVzZSB0byBiZSBzZXQgYnkgYSBTdGF0ZSBDb25maWcgcGFja2FnZVxyXG5cclxuICAgICAgICB0aGlzLmFkZCA9IG5ldyBHYW1lT2JqZWN0RmFjdG9yeSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLm1ha2UgPSBHYW1lT2JqZWN0Q3JlYXRvcih0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLm1haW5sb29wID0gbmV3IE1haW5Mb29wKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUuc2V0dGluZ3MuZnBzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXMgPSBuZXcgVXBkYXRlTWFuYWdlcih0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLmxvYWQgPSBuZXcgTG9hZGVyKHRoaXMuc3RhdGUpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnR3ZWVucyA9IG5ldyBQaGFzZXIuVHdlZW5NYW5hZ2VyKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMuaW5wdXQgPSBuZXcgUGhhc2VyLlN0YXRlLklucHV0KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcyA9IG5ldyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUodGhpcy5zdGF0ZSwgODAwLCA2MDApO1xyXG5cclxuICAgICAgICAvLyAgU3RhdGUgc3BlY2lmaWMgcHJvcGVydGllcyAodHJhbnNmb3JtLCBkYXRhLCBjaGlsZHJlbiwgZXRjKVxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhID0gbmV3IFBoYXNlci5DYW1lcmEodGhpcy5zdGF0ZSwgMCwgMCwgODAwLCA2MDApO1xyXG4gICAgICAgIC8vIHRoaXMuY2hpbGRyZW4gPSBuZXcgUGhhc2VyLkNvbXBvbmVudC5DaGlsZHJlbih0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLmNvbG9yID0gbmV3IFBoYXNlci5Db21wb25lbnQuQ29sb3IodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gbmV3IFBoYXNlci5Db21wb25lbnQuRGF0YSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuY2FtZXJhLnRyYW5zZm9ybTtcclxuXHJcbiAgICAgICAgLy8gIEJvb3RcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dC5pbml0KCk7XHJcblxyXG4gICAgICAgIC8vICBEZWZhdWx0c1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkID0gdGhpcy5hZGQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkID0gdGhpcy5sb2FkO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNhbWVyYSA9IHRoaXMuY2FtZXJhO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuaW5wdXQgPSB0aGlzLmlucHV0O1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUudHJhbnNmb3JtID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3RhdGUgPSB0aGlzLnN0YXRlLmdhbWUuc3RhdGU7XHJcblxyXG4gICAgICAgIC8vICBIZXJlIHdlIGNhbiBjaGVjayB3aGljaCBTeXN0ZW1zIHRvIGluc3RhbGwgYXMgcHJvcGVydGllcyBpbnRvIHRoZSBTdGF0ZSBvYmplY3RcclxuICAgICAgICAvLyAgKGRlZmF1bHQgc3lzdGVtcyBhbHdheXMgZXhpc3QgaW4gaGVyZSwgcmVnYXJkbGVzcylcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICAgICAgdmFyIHQgPSB0eXBlb2YgY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAodCAhPT0gJ29iamVjdCcgfHwgKHQgPT09ICdvYmplY3QnICYmICF0Lmhhc093blByb3BlcnR5KCdzeXN0ZW1zJykpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICAvLyB0aGlzLmtleSA9IChjb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKSA/IGNvbmZpZy5rZXkgOiAnJztcclxuICAgIH0sXHJcblxyXG4gICAgYmVnaW46IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGZyYW1lRGVsdGEpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwLCBwaHlzaWNzU3RlcClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnR3ZWVucy51cGRhdGUodGltZXN0ZXApO1xyXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy5wcmVVcGRhdGUocGh5c2ljc1N0ZXApO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmVSZW5kZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmQ6IGZ1bmN0aW9uIChmcHMsIHBhbmljKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwYW5pYylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgcGF0dGVybiBpbnRyb2R1Y2VzIG5vbi1kZXRlcm1pbmlzdGljIGJlaGF2aW9yLCBidXQgaW4gdGhpcyBjYXNlXHJcbiAgICAgICAgICAgIC8vIGl0J3MgYmV0dGVyIHRoYW4gdGhlIGFsdGVybmF0aXZlICh0aGUgYXBwbGljYXRpb24gd291bGQgbG9vayBsaWtlIGl0XHJcbiAgICAgICAgICAgIC8vIHdhcyBydW5uaW5nIHZlcnkgcXVpY2tseSB1bnRpbCB0aGUgc2ltdWxhdGlvbiBjYXVnaHQgdXAgdG8gcmVhbFxyXG4gICAgICAgICAgICAvLyB0aW1lKS5cclxuICAgICAgICAgICAgdmFyIGRpc2NhcmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubWFpbmxvb3AucmVzZXRGcmFtZURlbHRhKCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYWluIGxvb3AgcGFuaWNrZWQsIHByb2JhYmx5IGJlY2F1c2UgdGhlIGJyb3dzZXIgdGFiIHdhcyBwdXQgaW4gdGhlIGJhY2tncm91bmQuIERpc2NhcmRpbmcgJyArIGRpc2NhcmRlZFRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTeXN0ZW1zO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TeXN0ZW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TeXN0ZW1zLmpzIiwiXHJcbnZhciBOT09QID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgLy8gIE5PT1AgKE5vIE9wZXJhdGlvbikgQ2FsbGJhY2tcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTk9PUDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdXRpbHMvTk9PUC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgLy8gIERvaW5nIHRoaXMgbWFrZXMgaXQgYXZhaWxhYmxlIHVuZGVyIFBoYXNlci5HYW1lXHJcbiAgICBHYW1lOiByZXF1aXJlKCcuL0dhbWUnKSxcclxuXHJcbiAgICBFdmVudDogcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50JyksXHJcbiAgICBFdmVudERpc3BhdGNoZXI6IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInKSxcclxuXHJcbiAgICBMb2FkZXI6IHtcclxuICAgICAgICBJbWFnZUZpbGU6IHJlcXVpcmUoJy4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlJylcclxuICAgIH1cclxuXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvaW5kZXguanMiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCJyZXF1aXJlKCcuL0FycmF5LmZvckVhY2gnKTtcclxucmVxdWlyZSgnLi9BcnJheS5pc0FycmF5Jyk7XHJcbnJlcXVpcmUoJy4vY29uc29sZScpO1xyXG5yZXF1aXJlKCcuL0Z1bmN0aW9uLmJpbmQnKTtcclxucmVxdWlyZSgnLi9NYXRoLnRydW5jJyk7XHJcbnJlcXVpcmUoJy4vcGVyZm9ybWFuY2Uubm93Jyk7XHJcbnJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XHJcbnJlcXVpcmUoJy4vVWludDMyQXJyYXknKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgTk9PUCA9IHJlcXVpcmUoJy4uL3V0aWxzL05PT1AnKTtcclxudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcclxuXHJcbnZhciBkZWZhdWx0QmFubmVyQ29sb3IgPSBbXHJcbiAgICAnI2ZmMDAwMCcsXHJcbiAgICAnI2ZmZmYwMCcsXHJcbiAgICAnIzAwZmYwMCcsXHJcbiAgICAnIzAwZmZmZicsXHJcbiAgICAnIzAwMDAwMCdcclxuXTtcclxuXHJcbnZhciBkZWZhdWx0QmFubmVyVGV4dENvbG9yID0gJyNmZmZmZmYnO1xyXG5cclxuZnVuY3Rpb24gQ29uZmlnIChjb25maWcpXHJcbntcclxuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkgeyBjb25maWcgPSB7fTsgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd3aWR0aCcsIDEwMjQpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCA3NjgpO1xyXG5cclxuICAgIHRoaXMucmVzb2x1dGlvbiA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3Jlc29sdXRpb24nLCAxKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlclR5cGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0eXBlJywgQ09OU1QuQVVUTyk7XHJcblxyXG4gICAgdGhpcy5wYXJlbnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdwYXJlbnQnLCBudWxsKTtcclxuICAgIHRoaXMuY2FudmFzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzJywgbnVsbCk7XHJcbiAgICB0aGlzLmNhbnZhc1N0eWxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzU3R5bGUnLCBudWxsKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlQ29uZmlnID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc3RhdGUnLCBudWxsKTtcclxuXHJcbiAgICB0aGlzLnNlZWQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdzZWVkJywgWyAoRGF0ZS5ub3coKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCkgXSk7XHJcblxyXG4gICAgdGhpcy5nYW1lVGl0bGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0aXRsZScsICcnKTtcclxuICAgIHRoaXMuZ2FtZVVSTCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3VybCcsICdodHRwOi8vcGhhc2VyLmlvJyk7XHJcbiAgICB0aGlzLmdhbWVWZXJzaW9uID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmVyc2lvbicsICcnKTtcclxuXHJcbiAgICAvLyAgSWYgeW91IGRvOiB7IGJhbm5lcjogZmFsc2UgfSBpdCB3b24ndCBkaXNwbGF5IGFueSBiYW5uZXIgYXQgYWxsXHJcbiAgICB0aGlzLmhpZGVCYW5uZXIgPSAoR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyJywgZmFsc2UpID09PSBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5oaWRlUGhhc2VyID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyLmhpZGVQaGFzZXInLCBmYWxzZSk7XHJcbiAgICB0aGlzLmJhbm5lclRleHRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci50ZXh0JywgZGVmYXVsdEJhbm5lclRleHRDb2xvcik7XHJcbiAgICB0aGlzLmJhbm5lckJhY2tncm91bmRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5iYWNrZ3JvdW5kJywgZGVmYXVsdEJhbm5lckNvbG9yKTtcclxuICAgXHJcbiAgICB0aGlzLmZvcmNlU2V0VGltZU91dCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZvcmNlU2V0VGltZU91dCcsIGZhbHNlKTtcclxuICAgIHRoaXMudHJhbnNwYXJlbnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0cmFuc3BhcmVudCcsIGZhbHNlKTtcclxuICAgIHRoaXMucGl4ZWxBcnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdwaXhlbEFydCcsIGZhbHNlKTtcclxuXHJcbiAgICAvLyAgQ2FsbGJhY2tzXHJcbiAgICB0aGlzLnByZUJvb3QgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdjYWxsYmFja3MucHJlQm9vdCcsIE5PT1ApO1xyXG4gICAgdGhpcy5wb3N0Qm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wb3N0Qm9vdCcsIE5PT1ApO1xyXG5cclxufVxyXG5cclxuQ29uZmlnLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbmZpZztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9Db25maWcuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XHJcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4uL2RldmljZS9GZWF0dXJlcycpO1xyXG5cclxuLyoqXHJcbiogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgaXMgY2FwYWJsZSBvZiB1c2luZyB0aGUgcmVxdWVzdGVkIHJlbmRlcmVyIGFuZCBzZXRzIGl0IHVwIG9yIGFuIGFsdGVybmF0aXZlIGlmIG5vdC5cclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLkdhbWUjc2V0VXBSZW5kZXJlclxyXG4qIEBwcm90ZWN0ZWRcclxuKi9cclxudmFyIENyZWF0ZVJlbmRlcmVyID0gZnVuY3Rpb24gKGdhbWUpXHJcbntcclxuICAgIHZhciBjb25maWcgPSBnYW1lLmNvbmZpZztcclxuXHJcbiAgICAvLyAgR2FtZSBlaXRoZXIgcmVxdWVzdGVkIENhbnZhcyxcclxuICAgIC8vICBvciByZXF1ZXN0ZWQgQVVUTyBvciBXRUJHTCBidXQgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGl0LCBzbyBmYWxsIGJhY2sgdG8gQ2FudmFzXHJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULkNBTlZBUyB8fCAoY29uZmlnLnJlbmRlclR5cGUgIT09IENPTlNULkNBTlZBUyAmJiAhRmVhdHVyZXMud2ViR0wpKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChGZWF0dXJlcy5jYW52YXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgVGhleSByZXF1ZXN0ZWQgQ2FudmFzIGFuZCB0aGVpciBicm93c2VyIHN1cHBvcnRzIGl0XHJcbiAgICAgICAgICAgIGNvbmZpZy5yZW5kZXJUeXBlID0gQ09OU1QuQ0FOVkFTO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgQ2FudmFzIG9yIFdlYkdMIGNvbnRleHQsIGFib3J0aW5nLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyAgR2FtZSByZXF1ZXN0ZWQgV2ViR0wgYW5kIGJyb3dzZXIgc2F5cyBpdCBzdXBwb3J0cyBpdFxyXG4gICAgICAgIGNvbmZpZy5yZW5kZXJUeXBlID0gQ09OU1QuV0VCR0w7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIERvZXMgdGhlIGdhbWUgY29uZmlnIHByb3ZpZGUgaXRzIG93biBjYW52YXMgZWxlbWVudCB0byB1c2U/XHJcbiAgICBpZiAoY29uZmlnLmNhbnZhcylcclxuICAgIHtcclxuICAgICAgICBnYW1lLmNhbnZhcyA9IGNvbmZpZy5jYW52YXM7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBDYW52YXNQb29sLmNyZWF0ZShnYW1lLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQsIGNvbmZpZy5yZW5kZXJUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgRG9lcyB0aGUgZ2FtZSBjb25maWcgcHJvdmlkZSBzb21lIGNhbnZhcyBjc3Mgc3R5bGVzIHRvIHVzZT9cclxuICAgIGlmIChjb25maWcuY2FudmFzU3R5bGUpXHJcbiAgICB7XHJcbiAgICAgICAgZ2FtZS5jYW52YXMuc3R5bGUgPSBjb25maWcuY2FudmFzU3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIENyZWF0ZSB0aGUgcmVuZGVyZXJcclxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIFdFQkdMIFJlbmRlcmVyJyk7XHJcbiAgICAgICAgLy8gZ2FtZS5yZW5kZXJlciA9IG5ldyBQaGFzZXIuUmVuZGVyZXIuV2ViR0wodGhpcyk7XHJcbiAgICAgICAgLy8gZ2FtZS5jb250ZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgQ2FudmFzIFJlbmRlcmVyJyk7XHJcbiAgICAgICAgLy8gZ2FtZS5yZW5kZXJlciA9IG5ldyBQaGFzZXIuUmVuZGVyZXIuQ2FudmFzKHRoaXMpO1xyXG4gICAgICAgIC8vIGdhbWUuY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgIT09IFBoYXNlci5IRUFETEVTUylcclxuICAgIHtcclxuICAgICAgICAvLyBQaGFzZXIuQ2FudmFzLmFkZFRvRE9NKHRoaXMuY2FudmFzLCB0aGlzLnBhcmVudCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIFBoYXNlci5DYW52YXMuc2V0VG91Y2hBY3Rpb24odGhpcy5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRlUmVuZGVyZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgQ0hFQ0tTVU0gPSByZXF1aXJlKCcuLi9jaGVja3N1bScpO1xyXG5cclxudmFyIERlYnVnSGVhZGVyID0gZnVuY3Rpb24gKGdhbWUpXHJcbntcclxuICAgIHZhciBjb25maWcgPSBnYW1lLmNvbmZpZztcclxuXHJcbiAgICBpZiAoY29uZmlnLmhpZGVCYW5uZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZW5kZXJUeXBlID0gKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMpID8gJ0NhbnZhcycgOiAnV2ViR0wnO1xyXG5cclxuICAgIHZhciBpZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghaWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGMgPSAnJztcclxuICAgICAgICB2YXIgYXJncyA9IFtjXTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvcikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbGFzdENvbG9yO1xyXG5cclxuICAgICAgICAgICAgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvci5mb3JFYWNoKGZ1bmN0aW9uKGNvbG9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCclYyAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goJ2JhY2tncm91bmQ6ICcgKyBjb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdENvbG9yID0gY29sb3I7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vICBpbmplY3QgdGhlIHRleHQgY29sb3JcclxuICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gJ2NvbG9yOiAnICsgY29uZmlnLmJhbm5lclRleHRDb2xvciArICc7IGJhY2tncm91bmQ6ICcgKyBsYXN0Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XHJcblxyXG4gICAgICAgICAgICBhcmdzLnB1c2goJ2NvbG9yOiAnICsgY29uZmlnLmJhbm5lclRleHRDb2xvciArICc7IGJhY2tncm91bmQ6ICcgKyBjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBVUkwgbGluayBiYWNrZ3JvdW5kIGNvbG9yIChhbHdheXMgd2hpdGUpXHJcbiAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAjZmZmJyk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZ2FtZVRpdGxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYyA9IGMuY29uY2F0KGNvbmZpZy5nYW1lVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5nYW1lVmVyc2lvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCcgdicgKyBjb25maWcuZ2FtZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oaWRlUGhhc2VyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyAvICcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5oaWRlUGhhc2VyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYyA9IGMuY29uY2F0KCdQaGFzZXIgdicgKyBDT05TVC5WRVJTSU9OICsgJyAoJyArIHJlbmRlclR5cGUgKyAnKScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYyA9IGMuY29uY2F0KCcgJWMgJyArIGNvbmZpZy5nYW1lVVJMKTtcclxuXHJcbiAgICAgICAgLy8gIEluamVjdCB0aGUgbmV3IHN0cmluZyBiYWNrIGludG8gdGhlIGFyZ3MgYXJyYXlcclxuICAgICAgICBhcmdzWzBdID0gYztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh3aW5kb3dbJ2NvbnNvbGUnXSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgLyBodHRwOi8vcGhhc2VyLmlvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gS2VlcCB0aGlzIGR1cmluZyBkZXYgYnVpbGQgb25seVxyXG4gICAgY29uc29sZS5sb2coQ0hFQ0tTVU0uYnVpbGQpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGVidWdIZWFkZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvRGVidWdIZWFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvRGVidWdIZWFkZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgRGV2aWNlID0gcmVxdWlyZSgnLi4vZGV2aWNlJyk7XHJcbnZhciBDb25maWcgPSByZXF1aXJlKCcuL0NvbmZpZycpO1xyXG52YXIgRGVidWdIZWFkZXIgPSByZXF1aXJlKCcuL0RlYnVnSGVhZGVyJyk7XHJcbnZhciBDcmVhdGVSZW5kZXJlciA9IHJlcXVpcmUoJy4vQ3JlYXRlUmVuZGVyZXInKTtcclxudmFyIFJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVpcmUoJy4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcclxudmFyIERPTUNvbnRlbnRMb2FkZWQgPSByZXF1aXJlKCcuLi9kb20vRE9NQ29udGVudExvYWRlZCcpO1xyXG52YXIgUmFuZG9tRGF0YUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL21hdGgvcmFuZG9tLWRhdGEtZ2VuZXJhdG9yL1JhbmRvbURhdGFHZW5lcmF0b3InKTtcclxudmFyIFN0YXRlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3N0YXRlL1N0YXRlTWFuYWdlcicpO1xyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcclxudmFyIEdhbWVPYmplY3RzID0gcmVxdWlyZSAoJy4uL2dhbWVvYmplY3RzLycpO1xyXG5cclxudmFyIEdhbWUgPSBmdW5jdGlvbiAoY29uZmlnKVxyXG57XHJcbiAgICB0aGlzLmNvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcclxuXHJcbiAgICAvLyAgRGVjaWRlIHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc2hvdWxkIGJlIEdhbWUgcHJvcGVydGllcywgb3IgcGxhY2VkIGVsc2V3aGVyZSAuLi5cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfEhUTUxFbGVtZW50fSBwYXJlbnQgLSBUaGUgR2FtZXMgRE9NIHBhcmVudC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICB0aGlzLmlzQm9vdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWV9IHJhZiAtIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB0aGUgY29yZSBnYW1lIGxvb3AgdmlhIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvciBzZXRUaW1lb3V0XHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICB0aGlzLnJhZiA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlRleHR1cmVNYW5hZ2VyfSB0ZXh0dXJlcyAtIFJlZmVyZW5jZSB0byB0aGUgUGhhc2VyIFRleHR1cmUgTWFuYWdlci5cclxuICAgICovXHJcbiAgICB0aGlzLnRleHR1cmVzID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVXBkYXRlTWFuYWdlcn0gdXBkYXRlcyAtIFJlZmVyZW5jZSB0byB0aGUgUGhhc2VyIFVwZGF0ZSBNYW5hZ2VyLlxyXG4gICAgKi9cclxuICAgIHRoaXMudXBkYXRlcyA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkNhY2hlfSBjYWNoZSAtIFJlZmVyZW5jZSB0byB0aGUgYXNzZXRzIGNhY2hlLlxyXG4gICAgKi9cclxuICAgIHRoaXMuY2FjaGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5JbnB1dH0gaW5wdXQgLSBSZWZlcmVuY2UgdG8gdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICovXHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGVNYW5hZ2VyfSBzdGF0ZSAtIFRoZSBTdGF0ZU1hbmFnZXIuIFBoYXNlciBpbnN0YW5jZSBzcGVjaWZpYy5cclxuICAgICovXHJcbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzLCB0aGlzLmNvbmZpZy5zdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkRldmljZX0gZGV2aWNlIC0gQ29udGFpbnMgZGV2aWNlIGluZm9ybWF0aW9uIGFuZCBjYXBhYmlsaXRpZXMgKHNpbmdsZXRvbilcclxuICAgICovXHJcbiAgICB0aGlzLmRldmljZSA9IERldmljZTtcclxuXHJcbiAgICAvLyAgTW9yZSB0aGlzIHNvbWV3aGVyZSBlbHNlPyBNYXRoIHBlcmhhcHM/IERvZXNuJ3QgbmVlZCB0byBiZSBhIEdhbWUgbGV2ZWwgc3lzdGVtLlxyXG4gICAgdGhpcy5ybmQ7XHJcblxyXG4gICAgLy8gIFdhaXQgZm9yIHRoZSBET00gUmVhZHkgZXZlbnQsIHRoZW4gY2FsbCBib290LlxyXG4gICAgRE9NQ29udGVudExvYWRlZCh0aGlzLmJvb3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gIEZvciBkZWJ1Z2dpbmcgb25seVxyXG4gICAgd2luZG93LmdhbWUgPSB0aGlzO1xyXG59O1xyXG5cclxuR2FtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lO1xyXG5cclxuR2FtZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgYm9vdDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzQm9vdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcucHJlQm9vdCgpO1xyXG5cclxuICAgICAgICAvLyAgUHJvYmFibHkgbW92ZSB3aXRoaW4gTWF0aFxyXG4gICAgICAgIHRoaXMucm5kID0gbmV3IFJhbmRvbURhdGFHZW5lcmF0b3IodGhpcy5jb25maWcuc2VlZCk7XHJcblxyXG4gICAgICAgIERlYnVnSGVhZGVyKHRoaXMpO1xyXG5cclxuICAgICAgICBDcmVhdGVSZW5kZXJlcih0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ib290KCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcucG9zdEJvb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWYuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lc3RhbXApO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3RlcCh0aW1lc3RhbXApO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0dhbWUuanMiLCJ2YXIgQ0hFQ0tTVU0gPSB7XG5idWlsZDogJ2VjZjFiYjkwLWJiYzctMTFlNi1iZWNhLWE5ZjJlOGUwY2FmMCdcbn07XG5tb2R1bGUuZXhwb3J0cyA9IENIRUNLU1VNO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NoZWNrc3VtLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcblxyXG52YXIgQXVkaW8gPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXVkaW9EYXRhIC0gQXJlIEF1ZGlvIHRhZ3MgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGF1ZGlvRGF0YTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViQXVkaW8gLSBJcyB0aGUgV2ViQXVkaW8gQVBJIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJBdWRpbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb2dnIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb2dnIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9nZzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B1cyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9wdXMgZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgb3B1czogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXAzIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgbXAzIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1wMzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2F2IC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2F2IGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdhdjogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbiB0aGlzIGRldmljZSBwbGF5IG00YSBmaWxlcz9cclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtNGEgLSBUcnVlIGlmIHRoaXMgZGV2aWNlIGNhbiBwbGF5IG00YSBmaWxlcy5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtNGE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYm0gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3ZWJtIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdlYm06IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbGJ5IC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgRUMtMyBEb2xieSBEaWdpdGFsIFBsdXMgZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZG9sYnk6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICBBdWRpby5hdWRpb0RhdGEgPSAhISh3aW5kb3dbJ0F1ZGlvJ10pO1xyXG4gICAgQXVkaW8ud2ViQXVkaW8gPSAhISh3aW5kb3dbJ0F1ZGlvQ29udGV4dCddIHx8IHdpbmRvd1snd2Via2l0QXVkaW9Db250ZXh0J10pO1xyXG5cclxuICAgIHZhciBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSAhIWF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZTtcclxuXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm9nZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwib3B1c1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSB8fCBhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29wdXM7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ub3B1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ubXAzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIE1pbWV0eXBlcyBhY2NlcHRlZDpcclxuICAgICAgICAgICAgLy8gIGRldmVsb3Blci5tb3ppbGxhLm9yZy9Fbi9NZWRpYV9mb3JtYXRzX3N1cHBvcnRlZF9ieV90aGVfYXVkaW9fYW5kX3ZpZGVvX2VsZW1lbnRzXHJcbiAgICAgICAgICAgIC8vICBiaXQubHkvaXBob25lb3Njb2RlY3NcclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby53YXYgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby94LW00YTsnKSB8fCBhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby5tNGEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLndlYm0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7Y29kZWNzPVwiZWMtM1wiJykgIT09ICcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQnJvd3Nlci5lZGdlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvLmRvbGJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJyb3dzZXIuc2FmYXJpICYmIEJyb3dzZXIuc2FmYXJpVmVyc2lvbiA+PSA5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoL01hYyBPUyBYIChcXGQrKV8oXFxkKykvKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1ham9yID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5vciA9IHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtYWpvciA9PT0gMTAgJiYgbWlub3IgPj0gMTEpIHx8IG1ham9yID4gMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvLmRvbGJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBOb3RoaW5nIHRvIGRvIGhlcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXVkaW87XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvQXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9BdWRpby5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxuXHJcbnZhciBGdWxsc2NyZWVuID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF2YWlsYWJsZSAtIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCB0aGUgRnVsbCBTY3JlZW4gQVBJP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXF1ZXN0IC0gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEZ1bGwgU2NyZWVuIEFQSSB0aGlzIGhvbGRzIHRoZSBjYWxsIHlvdSBuZWVkIHRvIHVzZSB0byBhY3RpdmF0ZSBpdC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICByZXF1ZXN0OiAnJyxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNhbmNlbCAtIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBGdWxsIFNjcmVlbiBBUEkgdGhpcyBob2xkcyB0aGUgY2FsbCB5b3UgbmVlZCB0byB1c2UgdG8gY2FuY2VsIGl0LlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNhbmNlbDogJycsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0ga2V5Ym9hcmQgLSBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgYWNjZXNzIHRvIHRoZSBLZXlib2FyZCBkdXJpbmcgRnVsbCBTY3JlZW4gbW9kZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBrZXlib2FyZDogZmFsc2VcclxuXHJcbn07XHJcblxyXG4vKipcclxuKiBDaGVja3MgZm9yIHN1cHBvcnQgb2YgdGhlIEZ1bGwgU2NyZWVuIEFQSS5cclxuKi9cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgZnMgPSBbXHJcbiAgICAgICAgJ3JlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAncmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ21zUmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21velJlcXVlc3RGdWxsc2NyZWVuJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRbZnNbaV1dKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRnVsbHNjcmVlbi5hdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBGdWxsc2NyZWVuLnJlcXVlc3QgPSBmc1tpXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjZnMgPSBbXHJcbiAgICAgICAgJ2NhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdleGl0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ21zQ2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21zRXhpdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbW96RXhpdEZ1bGxzY3JlZW4nXHJcbiAgICBdO1xyXG5cclxuICAgIGlmIChGdWxsc2NyZWVuLmF2YWlsYWJsZSlcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNmcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFtjZnNbaV1dKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLmNhbmNlbCA9IGNmc1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICBLZXlib2FyZCBJbnB1dD9cclxuICAgIGlmICh3aW5kb3dbJ0VsZW1lbnQnXSAmJiBFbGVtZW50WydBTExPV19LRVlCT0FSRF9JTlBVVCddKVxyXG4gICAge1xyXG4gICAgICAgIEZ1bGxzY3JlZW4ua2V5Ym9hcmQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBGdWxsc2NyZWVuO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0Z1bGxzY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9GdWxsc2NyZWVuLmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIElucHV0ID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRvdWNoIC0gSXMgdG91Y2ggYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHRvdWNoOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtc3BvaW50ZXIgLSBJcyBtc3BvaW50ZXIgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1zcG9pbnRlcjogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7P3N0cmluZ30gd2hlZWxUeXBlIC0gVGhlIG5ld2VzdCB0eXBlIG9mIFdoZWVsL1Njcm9sbCBldmVudCBzdXBwb3J0ZWQ6ICd3aGVlbCcsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJ1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgd2hlZWxFdmVudDogbnVsbFxyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgKHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAxKSlcclxuICAgIHtcclxuICAgICAgICBJbnB1dC50b3VjaCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKVxyXG4gICAge1xyXG4gICAgICAgIElucHV0Lm1zcG9pbnRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFPUy5jb2Nvb25KUylcclxuICAgIHtcclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXHJcbiAgICAgICAgaWYgKCdvbndoZWVsJyBpbiB3aW5kb3cgfHwgKEJyb3dzZXIuaWUgJiYgJ1doZWVsRXZlbnQnIGluIHdpbmRvdykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBET00zIFdoZWVsIEV2ZW50OiBGRiAxNyssIElFIDkrLCBDaHJvbWUgMzErLCBTYWZhcmkgNytcclxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICd3aGVlbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCdvbm1vdXNld2hlZWwnIGluIHdpbmRvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE5vbi1GRiBsZWdhY3k6IElFIDYtOSwgQ2hyb21lIDEtMzEsIFNhZmFyaSA1LTcuXHJcbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnbW91c2V3aGVlbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEJyb3dzZXIuZmlyZWZveCAmJiAnTW91c2VTY3JvbGxFdmVudCcgaW4gd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gRkYgcHJpb3IgdG8gMTcuIFRoaXMgc2hvdWxkIHByb2JhYmx5IGJlIHNjcnViYmVkLlxyXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ0RPTU1vdXNlU2Nyb2xsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIElucHV0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvSW5wdXQuanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcblxyXG52YXIgVmlkZW8gPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb2dnVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvZ2cgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgb2dnVmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGgyNjRWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGgyNjQgbXA0IHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGgyNjRWaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXA0VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBoMjY0IG1wNCB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtcDRWaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2VibVZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2VibSB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJtVmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZwOVZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgdnA5IHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHZwOVZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBobHNWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGhscyB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBobHNWaWRlbzogZmFsc2VcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgdmFyIHJlc3VsdCA9ICEhdmlkZW9FbGVtZW50LmNhblBsYXlUeXBlO1xyXG5cclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby9vZ2c7IGNvZGVjcz1cInRoZW9yYVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlkZW8ub2dnVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaXRob3V0IFF1aWNrVGltZSwgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLiBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzU0NlxyXG4gICAgICAgICAgICAgICAgVmlkZW8uaDI2NFZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFZpZGVvLm1wNFZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA4LCB2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLndlYm1WaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlkZW8udnA5VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCdhcHBsaWNhdGlvbi94LW1wZWdVUkw7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWRlby5obHNWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSlcclxuICAgIHtcclxuICAgICAgICAvLyAgTm90aGluZyB0byBkb1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBWaWRlbztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9WaWRlby5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL1ZpZGVvLmpzIiwiLy8gIFRoaXMgc2luZ2xldG9uIGlzIGluc3RhbnRpYXRlZCBhcyBzb29uIGFzIFBoYXNlciBsb2FkcyxcclxuLy8gIGJlZm9yZSBhIFBoYXNlci5HYW1lIGluc3RhbmNlIGhhcyBldmVuIGJlZW4gY3JlYXRlZC5cclxuLy8gIFdoaWNoIG1lYW5zIGFsbCBpbnN0YW5jZXMgb2YgUGhhc2VyIEdhbWVzIGNhbiBzaGFyZSBpdCxcclxuLy8gIHdpdGhvdXQgaGF2aW5nIHRvIHJlLXBvbGwgdGhlIGRldmljZSBhbGwgb3ZlciBhZ2FpblxyXG5cclxudmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG52YXIgRmVhdHVyZXMgPSByZXF1aXJlKCcuL0ZlYXR1cmVzJyk7XHJcbnZhciBJbnB1dCA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcclxudmFyIEF1ZGlvID0gcmVxdWlyZSgnLi9BdWRpbycpO1xyXG52YXIgVmlkZW8gPSByZXF1aXJlKCcuL1ZpZGVvJyk7XHJcbnZhciBGdWxsc2NyZWVuID0gcmVxdWlyZSgnLi9GdWxsc2NyZWVuJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBPUzogT1MsXHJcbiAgICBCcm93c2VyOiBCcm93c2VyLFxyXG4gICAgRmVhdHVyZXM6IEZlYXR1cmVzLFxyXG4gICAgSW5wdXQ6IElucHV0LFxyXG4gICAgQXVkaW86IEF1ZGlvLFxyXG4gICAgVmlkZW86IFZpZGVvLFxyXG4gICAgRnVsbHNjcmVlbjogRnVsbHNjcmVlblxyXG5cclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvaW5kZXguanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgT1MgPSByZXF1aXJlKCcuLi9kZXZpY2UvT1MnKTtcclxuXHJcbnZhciBpc0Jvb3RlZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZCAoY2FsbGJhY2spXHJcbntcclxuICAgIGlmIChpc0Jvb3RlZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJylcclxuICAgIHtcclxuICAgICAgICBpc0Jvb3RlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaXNCb290ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGNoZWNrLCB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hlY2ssIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2ssIHRydWUpO1xyXG5cclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2ssIDIwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKE9TLmNvcmRvdmEgJiYgIU9TLmNvY29vbkpTKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBSZWYuIGh0dHA6Ly9kb2NzLnBob25lZ2FwLmNvbS9lbi8zLjUuMC9jb3Jkb3ZhX2V2ZW50c19ldmVudHMubWQuaHRtbCNkZXZpY2VyZWFkeVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgY2hlY2ssIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hlY2ssIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2ssIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERPTUNvbnRlbnRMb2FkZWQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9ET01Db250ZW50TG9hZGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qIEFic3RyYWN0cyBhd2F5IHRoZSB1c2Ugb2YgUkFGIG9yIHNldFRpbWVPdXQgZm9yIHRoZSBjb3JlIGdhbWUgdXBkYXRlIGxvb3AuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZVNldFRpbWVPdXQ9ZmFsc2VdIC0gVGVsbCBQaGFzZXIgdG8gdXNlIHNldFRpbWVPdXQgZXZlbiBpZiByYWYgaXMgYXZhaWxhYmxlLlxyXG4qL1xyXG5mdW5jdGlvbiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKGdhbWUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5HYW1lfSBnYW1lIC0gVGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpc1J1bm5pbmcgLSB0cnVlIGlmIFJlcXVlc3RBbmltYXRpb25GcmFtZSBpcyBydW5uaW5nLCBvdGhlcndpc2UgZmFsc2UuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnRpY2sgPSAwO1xyXG5cclxuICAgIHZhciB2ZW5kb3JzID0gW1xyXG4gICAgICAgICdtcycsXHJcbiAgICAgICAgJ21veicsXHJcbiAgICAgICAgJ3dlYmtpdCcsXHJcbiAgICAgICAgJ28nXHJcbiAgICBdO1xyXG5cclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7IHgrKylcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpc1NldFRpbWVPdXQgIC0gVHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyB1c2luZyBzZXRUaW1lb3V0IGluc3RlYWQgb2YgckFmLlxyXG4gICAgKi9cclxuICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lT3V0SUQgLSBUaGUgY2FsbGJhY2sgc2V0VGltZW91dCBvciByQWYgY2FsbGJhY2sgSUQgdXNlZCB3aGVuIGNhbGxpbmcgY2FuY2VsLlxyXG4gICAgKi9cclxuICAgIHRoaXMudGltZU91dElEID0gbnVsbDtcclxuXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXHJcbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApXHJcbiAgICB7XHJcbiAgICAgICAgX3RoaXMudGljayA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgX3RoaXMudGltZU91dElEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuXHJcbiAgICAgICAgX3RoaXMuZ2FtZS51cGRhdGUodGltZXN0YW1wKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0ZXBUaW1lb3V0ID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBfdGhpcy50aWNrID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgLy8gX3RoaXMuZ2FtZS51cGRhdGUoX3RoaXMudGljayk7XHJcblxyXG4gICAgICAgIC8vIF90aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5zZXRUaW1lb3V0KHN0ZXBUaW1lb3V0LCBfdGhpcy5nYW1lLnRpbWUudGltZVRvQ2FsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTdGFydHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBydW5uaW5nIG9yIHNldFRpbWVvdXQgaWYgdW5hdmFpbGFibGUgaW4gYnJvd3NlclxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUjc3RhcnRcclxuICAgICovXHJcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLmZvcmNlU2V0VGltZU91dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZU91dElEID0gd2luZG93LnNldFRpbWVvdXQoc3RlcFRpbWVvdXQsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2V0VGltZU91dCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFN0b3BzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBydW5uaW5nLlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUjc3RvcFxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZXRUaW1lT3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dElEKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZU91dElEKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IHVuZGVmaW5lZDtcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcclxudmFyIEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL0V2ZW50TGlzdGVuZXInKTtcclxuXHJcbnZhciBFdmVudEJpbmRpbmcgPSBmdW5jdGlvbiAoZGlzcGF0Y2hlciwgdHlwZSlcclxue1xyXG4gICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9JRExFO1xyXG4gICAgdGhpcy5hY3RpdmUgPSBbXTtcclxufTtcclxuXHJcbkV2ZW50QmluZGluZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudEJpbmRpbmc7XHJcblxyXG5FdmVudEJpbmRpbmcucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHRvdGFsOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgIT09IENPTlNULkxJU1RFTkVSX1JFTU9WSU5HKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldDogZnVuY3Rpb24gKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uY2FsbGJhY2sgPT09IGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEluZGV4OiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzOiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldChjYWxsYmFjaykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgcHJpb3JpdHksIG9uY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXQoY2FsbGJhY2spO1xyXG5cclxuICAgICAgICBpZiAoIWxpc3RlbmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZSBsaXN0ZW5lciBkb2Vzbid0IGV4aXN0LCBzbyBjcmVhdGUgb25lXHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gRXZlbnRMaXN0ZW5lcih0aGlzLnR5cGUsIGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBMaXN0ZW5lciBhbHJlYWR5IGV4aXN0cywgYWJvcnRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBUaGUgRGlzcGF0Y2hlciBpc24ndCBkb2luZyBhbnl0aGluZywgc28gd2UgZG9uJ3QgbmVlZCBhIHBlbmRpbmcgc3RhdGVcclxuICAgICAgICAgICAgbGlzdGVuZXIuc3RhdGUgPSBDT05TVC5MSVNURU5FUl9BQ1RJVkU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNvcnQodGhpcy5zb3J0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfRElTUEFUQ0hJTkcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGl0IHRvIHRoZSBsaXN0LCBidXQga2VlcCB0aGUgc3RhdGUgYXMgcGVuZGluZy5cclxuICAgICAgICAgICAgLy8gIFRoZSBjYWxsIHRvICd0aWR5JyB3aWxsIHNvcnQgaXQgb3V0IGF0IHRoZSBlbmQgb2YgdGhlIGRpc3BhdGNoLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNvcnRIYW5kbGVyOiBmdW5jdGlvbiAobGlzdGVuZXJBLCBsaXN0ZW5lckIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGxpc3RlbmVyQi5wcmlvcml0eSA8IGxpc3RlbmVyQS5wcmlvcml0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGlzdGVuZXJCLnByaW9yaXR5ID4gbGlzdGVuZXJBLnByaW9yaXR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBUaGUgRGlzcGF0Y2hlciBpc24ndCBkb2luZyBhbnl0aGluZywgc28gd2UgY2FuIHJlbW92ZSByaWdodCBhd2F5XHJcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5nZXRJbmRleChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaSAhPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfRElTUEFUQ0hJTkcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgVGhlIERpc3BhdGNoZXIgaXMgd29ya2luZywgc28gd2UgZmxhZyB0aGUgbGlzdGVuZXIgZm9yIHJlbW92YWwgYXQgdGhlIGVuZFxyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnN0YXRlID0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlIFxcJ0V2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaFxcJyBvbiBcXCcnICsgdGhpcy50eXBlICsgJ1xcJzogVGhlIGV2ZW50IGlzIGFscmVhZHkgYmVpbmcgZGlzcGF0Y2hlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmUubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoaXMgd2FzIGEgdmFsaWQgZGlzcGF0Y2ggY2FsbCwgd2UganVzdCBoYWQgbm90aGluZyB0byBkbyAuLi5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfRElTUEFUQ0hJTkc7XHJcblxyXG4gICAgICAgIHZhciBsaXN0ZW5lcjtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5hY3RpdmVbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuc3RhdGUgIT09IENPTlNULkxJU1RFTkVSX0FDVElWRSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwodGhpcy5kaXNwYXRjaGVyLCBldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgSGFzIHRoZSBjYWxsYmFjayBjaGFuZ2VkIHRoZSBzdGF0ZSBvZiB0aGlzIGJpbmRpbmc/XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDT05TVC5ESVNQQVRDSEVSX0RJU1BBVENISU5HKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgWXVwISBMZXQncyBicmVhayBvdXRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgV2FzIGl0IGEgJ29uY2UnIGxpc3RlbmVyP1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIub25jZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuc3RhdGUgPSBDT05TVC5MSVNURU5FUl9SRU1PVklORztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIEhhcyB0aGUgZXZlbnQgYmVlbiBoYWx0ZWQgYnkgdGhlIGNhbGxiYWNrP1xyXG4gICAgICAgICAgICBpZiAoIWV2ZW50Ll9wcm9wYWdhdGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBCcmVhayBvdXQsIGEgbGlzdGVuZXIgaGFzIGNhbGxlZCBFdmVudC5zdG9wUHJvcGFnYXRpb25cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgRGlzcGF0Y2ggb3Zlciwgb3IgYWJvcnRlZFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX1JFTU9WSU5HKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICBBbGwgZG9uZSwgdGlkeSB0aGUgbGlzdCBpbiBjYXNlIHRoZXJlIHdlcmUgYW55IHBlbmRpbmcgZXZlbnRzIGFkZGVkXHJcbiAgICAgICAgICAgIHRoaXMudGlkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0RFU1RST1lFRClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kZWxldGUodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEFsbCBkb25lLCBqdXN0IHB1cmdlIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIHRoaXMudGlkeSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfSURMRTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBSZW1vdmVzIGFsbCBsaXN0ZW5lcnNcclxuICAgIC8vICBJZiB0aGlzIGlzIGN1cnJlbnRseSBiZWluZyBkaXNwYXRjaGVkIHRoZW4gZG9uJ3QgcmVtb3ZlICdwZW5kaW5nJyBsaXN0ZW5lcnNcclxuICAgIC8vICAoaS5lLiBvbmVzIHRoYXQgd2VyZSBhZGRlZCBkdXJpbmcgdGhlIGRpc3BhdGNoKSwgb25seSBhY3RpdmUgb25lc1xyXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0lETEUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5hY3RpdmUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfUEVORElORylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfSURMRTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRpZHk6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFkZGVkID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBkb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLnN0YXRlID09PSBDT05TVC5MSVNURU5FUl9SRU1PVklORylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlW2ldLnN0YXRlID09PSBDT05TVC5MSVNURU5FUl9QRU5ESU5HKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5zdGF0ZSA9PT0gQ09OU1QuTElTVEVORVJfQUNUSVZFO1xyXG4gICAgICAgICAgICAgICAgYWRkZWQrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaSA+PSAwKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZGVkID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNvcnQodGhpcy5zb3J0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDT05TVC5ESVNQQVRDSEVSX0RFU1RST1lFRDtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50QmluZGluZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL0V2ZW50QmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZXZlbnRzL0V2ZW50QmluZGluZy5qcyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcclxuXHJcbnZhciBFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSlcclxue1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICAgICAgb25jZTogb25jZSxcclxuICAgICAgICBzdGF0ZTogQ09OU1QuTElTVEVORVJfUEVORElOR1xyXG4gICAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXN0ZW5lcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL0V2ZW50TGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2V2ZW50cy9FdmVudExpc3RlbmVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXHJcbiogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuSW1hZ2VcclxuKiBAZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdFxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4qIEBwYXJhbSB7c3RyaW5nfSBba2V5XSAtIFRoZSB0ZXh0dXJlIHVzZWQgYnkgdGhlIEltYWdlIGR1cmluZyByZW5kZXJpbmcuIEl0IGNhbiBiZSBhIHN0cmluZyB3aGljaCBpcyBhIHJlZmVyZW5jZSB0byB0aGUgQ2FjaGUgZW50cnksIG9yIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSBvciBQSVhJLlRleHR1cmUuXHJcbiogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgdGhpcyBJbWFnZSBpcyB1c2luZyBwYXJ0IG9mIGEgc3ByaXRlIHNoZWV0IG9yIHRleHR1cmUgYXRsYXMgeW91IGNhbiBzcGVjaWZ5IHRoZSBleGFjdCBmcmFtZSB0byB1c2UgYnkgZ2l2aW5nIGEgc3RyaW5nIG9yIG51bWVyaWMgaW5kZXguXHJcbiovXHJcbnZhciBJbWFnZSA9IGZ1bmN0aW9uIChzdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSwgbmFtZSlcclxue1xyXG4gICAgLypcclxuICAgIHZhciBfdGV4dHVyZSA9IHN0YXRlLmdhbWUudGV4dHVyZXMuZ2V0KGtleSk7XHJcbiAgICB2YXIgX2ZyYW1lID0gX3RleHR1cmUuZ2V0KGZyYW1lKTtcclxuXHJcbiAgICBQaGFzZXIuR2FtZU9iamVjdC5jYWxsKHRoaXMsIHN0YXRlLCB4LCB5LCBfdGV4dHVyZSwgX2ZyYW1lKTtcclxuXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMudHlwZSA9IFBoYXNlci5JTUFHRTtcclxuICAgICovXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xyXG5cclxuXHJcbi8vIEltYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdhbWVPYmplY3QucHJvdG90eXBlKTtcclxuLy8gSW1hZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW1hZ2U7XHJcblxyXG4vKipcclxuKiBBdXRvbWF0aWNhbGx5IGNhbGxlZCBieSBXb3JsZC5wcmVVcGRhdGUuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5JbWFnZSNwcmVVcGRhdGVcclxuKiBAbWVtYmVyb2YgUGhhc2VyLkltYWdlXHJcblBoYXNlci5HYW1lT2JqZWN0LkltYWdlLnByb3RvdHlwZS5wcmVVcGRhdGUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvLyAgV291bGQgbGlrZSB0byBnZXQgcmlkIG9mIHRoaXMgc29tZWhvdyAuLi5cclxuICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbG9yLndvcmxkQWxwaGEgPSB0aGlzLnBhcmVudC5jb2xvci53b3JsZEFscGhhO1xyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuLypcclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSW1hZ2UucHJvdG90eXBlLCB7XHJcblxyXG4gICAgd2lkdGg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggKiB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdmFsdWUgLyB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBoZWlnaHQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgKiB0aGlzLmZyYW1lLnJlYWxIZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHZhbHVlIC8gdGhpcy5mcmFtZS5yZWFsSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuKi9cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBJbWFnZSA9IHJlcXVpcmUoJy4vSW1hZ2UnKTtcclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG52YXIgSW1hZ2VGYWN0b3J5ID0ge1xyXG5cclxuICAgIEtFWTogJ2ltYWdlJyxcclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxyXG4gICAgKlxyXG4gICAgKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cclxuICAgICpcclxuICAgICogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLlxyXG4gICAgKiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeSNpbWFnZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuSW1hZ2V9IFRoZSBuZXdseSBjcmVhdGVkIEltYWdlIG9iamVjdC5cclxuICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICh4LCB5LCBrZXksIGZyYW1lLCBncm91cClcclxuICAgIHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMuc3RhdGU7IH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5hZGQnLCBrZXksIHgsIHksIGZyYW1lLCBncm91cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludG8gU3RhdGUnLCB0aGlzLnN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGdyb3VwLmNoaWxkcmVuLmFkZChuZXcgSW1hZ2UodGhpcy5zdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBtYWtlOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VGYWN0b3J5Lm1ha2UnLCBrZXksIHgsIHksIGZyYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZhY3RvcnlDb250YWluZXIucmVnaXN0ZXIoSW1hZ2VGYWN0b3J5KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCIvLyAgSW5jbHVkZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3Rvcmllc1xyXG4vLyAgXHJcbi8vICBUaGlzIGZpbGUgc2hvdWxkIGJlIGxpbmtlZCB0byB0aGUgc3BlY2lmaWMgYnVpbGQgb2YgUGhhc2VyLCBpLmUuIFBoYXNlciBOYW5vIHdvbid0IHJlcXVpcmUgYWxsIEdPc1xyXG5cclxucmVxdWlyZSAoJy4vaW1hZ2UvSW1hZ2VGYWN0b3J5Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIlxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XHJcbnZhciBTZXQgPSByZXF1aXJlKCcuLi9zdHJ1Y3RzL1NldCcpO1xyXG52YXIgWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL1hIUlNldHRpbmdzJyk7XHJcbnZhciBFdmVudCA9IHJlcXVpcmUoJy4vZXZlbnRzLycpO1xyXG52YXIgRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcicpO1xyXG5cclxudmFyIEJhc2VMb2FkZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvLyAgVG8gZmluaXNoIHRoZSBsb2FkZXIgLi4uXHJcbiAgICAvLyAgXHJcbiAgICAvLyAgMSkgSW1hZ2UgVGFnIGxvYWRlclxyXG4gICAgLy8gIDIpIEV2ZW50cyAob3IgU2lnbmFscz8pIGZvciB0aGUgdmFyaW91cyBzdGFnZXNcclxuICAgIC8vICAzKSBQcm9ncmVzcyB1cGRhdGVcclxuICAgIC8vICA0KSBKU09OIGxvYWRlclxyXG4gICAgLy8gIDUpIFhNTCBMb2FkZXJcclxuICAgIC8vICA2KSBNdWx0aSBGaWxlIHN1cHBvcnQgKGF0bGFzICsgZGF0YSlcclxuICAgIC8vICA3KSBBdGxhcyBMb2FkZXJcclxuXHJcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICAvLyAgTW92ZSB0byBhICdzZXRVUkwnIG1ldGhvZD9cclxuICAgIHRoaXMuYmFzZVVSTCA9ICcnO1xyXG4gICAgdGhpcy5wYXRoID0gJyc7XHJcblxyXG4gICAgLy8gIFJlYWQgZnJvbSBHYW1lIC8gU3RhdGUgQ29uZmlnXHJcbiAgICB0aGlzLmVuYWJsZVBhcmFsbGVsID0gdHJ1ZTtcclxuICAgIHRoaXMubWF4UGFyYWxsZWxEb3dubG9hZHMgPSA4O1xyXG5cclxuICAgIC8vICB4aHIgc3BlY2lmaWMgZ2xvYmFsIHNldHRpbmdzIChjYW4gYmUgb3ZlcnJpZGRlbiBvbiBhIHBlci1maWxlIGJhc2lzKVxyXG4gICAgdGhpcy54aHIgPSBYSFJTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5pbmZsaWdodCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuZmFpbGVkID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5xdWV1ZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfSURMRTtcclxufTtcclxuXHJcbkJhc2VMb2FkZXIucHJvdG90eXBlLmNvbnRydWN0b3IgPSBCYXNlTG9hZGVyO1xyXG5cclxuQmFzZUxvYWRlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgYWRkRmlsZTogZnVuY3Rpb24gKGZpbGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBNdWx0aXBhcnQgZmlsZT9cclxuICAgICAgICBpZiAoZmlsZS5tdWx0aXBhcnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLmZpbGVBLnBhdGggPSB0aGlzLnBhdGg7XHJcbiAgICAgICAgICAgIGZpbGUuZmlsZUIucGF0aCA9IHRoaXMucGF0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZS5maWxlQSk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZS5maWxlQik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbGUucGF0aCA9IHRoaXMucGF0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIElzIHRoZSBMb2FkZXIgYWN0aXZlbHkgbG9hZGluZyAob3IgcHJvY2Vzc2luZyBsb2FkZWQgZmlsZXMpXHJcbiAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zdGF0ZSA9PT0gQ09OU1QuTE9BREVSX0xPQURJTkcgfHwgdGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9QUk9DRVNTSU5HKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIElzIHRoZSBMb2FkZXIgcmVhZHkgdG8gc3RhcnQgYSBuZXcgbG9hZD9cclxuICAgIGlzUmVhZHk6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zdGF0ZSA9PT0gQ09OU1QuTE9BREVSX0lETEUgfHwgdGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9DT01QTEVURSB8fCB0aGlzLl9zdGF0ZSA9PT0gQ09OU1QuTE9BREVSX0ZBSUxFRCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIHN0YXJ0LiBGaWxlcyB0byBsb2FkOicsIHRoaXMubGlzdC5zaXplKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmRpc3BhdGNoKG5ldyBFdmVudC5MT0FERVJfU1RBUlRfRVZFTlQodGhpcykpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saXN0LnNpemUgPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9MT0FESU5HO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mYWlsZWQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcHJvY2Vzc0xvYWRRdWV1ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQmFzZUxvYWRlciBwcm9jZXNzTG9hZFF1ZXVlJywgdGhpcy5saXN0LnNpemUpO1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QuZWFjaChmdW5jdGlvbiAoZmlsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBDT05TVC5GSUxFX1BFTkRJTkcgJiYgX3RoaXMuaW5mbGlnaHQuc2l6ZSA8IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQURERUQgVE8gUVVFVUU6JywgZmlsZS5rZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLmluZmxpZ2h0LmFkZChmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0LmRlbGV0ZShmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF90aGlzLmluZmxpZ2h0LnNpemUgPT09IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGVsbHMgdGhlIFNldCBpdGVyYXRvciB0byBhYm9ydFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHByaXZhdGVcclxuICAgIGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTE9BRElORycsIGZpbGUua2V5KTtcclxuXHJcbiAgICAgICAgLy8gIElmIHRoZSBmaWxlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIGNyb3NzT3JpZ2luIHNldCxcclxuICAgICAgICAvLyAgd2UnbGwgdXNlIHRoZSBMb2FkZXJzICh3aGljaCBpcyB1bmRlZmluZWQgYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAoIWZpbGUuY3Jvc3NPcmlnaW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbGUubG9hZCh0aGlzLm5leHRGaWxlLmJpbmQodGhpcyksIHRoaXMuYmFzZVVSTCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRGaWxlOiBmdW5jdGlvbiAocHJldmlvdXNGaWxlLCBzdWNjZXNzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMT0FERUQ6JywgcHJldmlvdXNGaWxlLnNyYywgc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgIC8vICBNb3ZlIHRoZSBmaWxlIHRoYXQganVzdCBsb2FkZWQgZnJvbSB0aGUgaW5mbGlnaHQgbGlzdCB0byB0aGUgcXVldWUgb3IgZmFpbGVkIFNldFxyXG5cclxuICAgICAgICBpZiAoc3VjY2VzcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkKHByZXZpb3VzRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmFkZChwcmV2aW91c0ZpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbmZsaWdodC5kZWxldGUocHJldmlvdXNGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXh0RmlsZSAtIHN0aWxsIHNvbWV0aGluZyBpbiB0aGUgbGlzdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbmZsaWdodC5zaXplID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25leHRGaWxlIGNhbGxpbmcgZmluaXNoZWRMb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2hlZExvYWRpbmc6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIuZmluaXNoZWRMb2FkaW5nIFBST0NFU1NJTkcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfUFJPQ0VTU0lORztcclxuXHJcbiAgICAgICAgdmFyIHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gIFRoaXMgY291bGQgYmUgUHJvbWlzZSBiYXNlZCBhcyB3ZWxsLCBhbGxvd2luZyBmb3IgYXN5bmMgcHJvY2Vzc2luZ1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXVlLmVhY2goZnVuY3Rpb24gKGZpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLm9uUHJvY2VzcygpO1xyXG5cclxuICAgICAgICAgICAgLy8gIFRoZSBGaWxlIHNwZWNpZmljIHByb2Nlc3MgaGFuZGxlciBoYXMgcnVuXHJcbiAgICAgICAgICAgIC8vICBOb3cgcnVuIGFueSBjdXN0b20gY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIGlmIChmaWxlLnByb2Nlc3NDYWxsYmFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5wcm9jZXNzQ2FsbGJhY2soZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpbGUub25Db21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgc3RvcmFnZS5hZGQoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkZXIgQ29tcGxldGUuIExvYWRlZDonLCBzdG9yYWdlLnNpemUsICdGYWlsZWQ6JywgdGhpcy5mYWlsZWQuc2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ09OU1QuTE9BREVSX0NPTVBMRVRFO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnQuTE9BREVSX0NPTVBMRVRFX0VWRU5UKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TG9hZGVkRmlsZXMgKGdyb3VwID0gJycsIG91dHB1dCA9IFtdKSB7XHJcblxyXG4gICAgICAgIHZhciBvdXRwdXQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gIFJldHVybiBhbiBhcnJheSBvZiBhbGwgZmlsZXMgdGhhdCBoYXZlIHN0YXRlID0gQ09NUExFVEUgKHdoaWNoIG1lYW5zIGxvYWRlZCArIHByb2Nlc3NlZClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLnN0b3JhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmlsZS5zdGF0ZSA9PT0gRklMRS5DT01QTEVURSAmJiBmaWxlLnRhZyA9PT0gZ3JvdXAgJiYgKHR5cGUgIT09ICcnICYmIGZpbGUudHlwZSA9PT0gdHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZmFpbGVkLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRhZyA9ICcnO1xyXG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9JRExFO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9ERVNUUk9ZRUQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNlTG9hZGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvQmFzZUxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ2YXIgR2V0VVJMID0gcmVxdWlyZSgnLi9HZXRVUkwnKTtcclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xyXG52YXIgWEhSTG9hZGVyID0gcmVxdWlyZSgnLi9YSFJMb2FkZXInKTtcclxudmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xyXG5cclxudmFyIEZpbGUgPSBmdW5jdGlvbiAodHlwZSwga2V5LCB1cmwsIHJlc3BvbnNlVHlwZSlcclxue1xyXG4gICAgLy8gIGZpbGUgdHlwZSAoaW1hZ2UsIGpzb24sIGV0YykgZm9yIHNvcnRpbmcgd2l0aGluIHRoZSBMb2FkZXJcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgLy8gIHVuaXF1ZSBjYWNoZSBrZXkgKHVuaXF1ZSB3aXRoaW4gaXRzIGZpbGUgdHlwZSlcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgIC8vICBUaGUgVVJMIG9mIHRoZSBmaWxlLCBub3QgaW5jbHVkaW5nIGJhc2VVUkxcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG5cclxuICAgIC8vICBTZXQgd2hlbiB0aGUgTG9hZGVyIGNhbGxzICdsb2FkJyBvbiB0aGlzIGZpbGVcclxuICAgIHRoaXMuc3JjID0gJyc7XHJcblxyXG4gICAgdGhpcy54aHJTZXR0aW5ncyA9IFhIUlNldHRpbmdzKHJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgdGhpcy54aHJMb2FkZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBDT05TVC5GSUxFX1BFTkRJTkc7XHJcblxyXG4gICAgLy8gIFNldCBieSBvblByb2dyZXNzIChpZiBsb2FkaW5nIHZpYSBYSFIpXHJcbiAgICB0aGlzLmJ5dGVzVG90YWwgPSAwO1xyXG4gICAgdGhpcy5ieXRlc0xvYWRlZCA9IC0xO1xyXG4gICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSAtMTtcclxuXHJcbiAgICAvLyAgRm9yIENPUnMgYmFzZWQgbG9hZGluZy5cclxuICAgIC8vICBJZiB0aGlzIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBGaWxlIHdpbGwgY2hlY2sgQmFzZUxvYWRlci5jcm9zc09yaWdpbiBhbmQgdXNlIHRoYXQgKGlmIHNldClcclxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gIFRoZSBhY3R1YWwgcHJvY2Vzc2VkIGZpbGUgZGF0YVxyXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8vICBNdWx0aXBhcnQgZmlsZT8gKGkuZS4gYW4gYXRsYXMgYW5kIGl0cyBqc29uKVxyXG4gICAgdGhpcy5tdWx0aXBhcnQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmxpbmtGaWxlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xyXG59O1xyXG5cclxuRmlsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlO1xyXG5cclxuRmlsZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgcmVzZXRYSFI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25sb2FkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9uZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25wcm9ncmVzcyA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbGxlZCB3aGVuIHRoZSBJbWFnZSBsb2Fkc1xyXG4gICAgLy8gIFByb2dyZXNzRXZlbnRcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2FkZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMub25TdGF0ZUNoYW5nZShMT0FESU5HKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFhIUigpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMsIHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGVycm9yJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0WEhSKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ieXRlc0xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcclxuICAgICAgICB0aGlzLmJ5dGVzVG90YWwgPSBldmVudC50b3RhbDtcclxuXHJcbiAgICAgICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSBNYXRoLm1pbigodGhpcy5ieXRlc0xvYWRlZCAvIHRoaXMuYnl0ZXNUb3RhbCksIDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcmNlbnRDb21wbGV0ZSArICclICgnICsgdGhpcy5ieXRlc0xvYWRlZCArICcgYnl0ZXMpJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uUHJvY2VzczogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJvY2VzcyB0aGUgaW1hZ2UnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgY29tcGxldGVkIGFuZCBhZGRlZCB0byB0aGUgbG9hZGVyIHN0b3JlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYWxsZWQgYnkgdGhlIExvYWRlciwgc3RhcnRzIHRoZSBhY3R1YWwgZmlsZSBkb3dubG9hZGluZ1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrLCBiYXNlVVJMLCBnbG9iYWxYSFIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGJhc2VVUkwgPT09IHVuZGVmaW5lZCkgeyBiYXNlVVJMID0gJyc7IH1cclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnNyYyA9IEdldFVSTCh0aGlzLCBiYXNlVVJMKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xPQURJTkcyJywgdGhpcy5zcmMpO1xyXG5cclxuICAgICAgICB0aGlzLnhockxvYWRlciA9IFhIUkxvYWRlcih0aGlzLCBnbG9iYWxYSFIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvRmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL0ZpbGUuanMiLCJ2YXIgR2V0VVJMID0gZnVuY3Rpb24gKGZpbGUsIGJhc2VVUkwpXHJcbntcclxuICAgIGlmICghZmlsZS51cmwpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWxlLnVybC5tYXRjaCgvXig/OmJsb2I6fGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xcXC9cXC8pLykpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGUudXJsO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBiYXNlVVJMICsgZmlsZS5wYXRoICsgZmlsZS51cmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdldFVSTDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL0dldFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xyXG5cclxuLy8gIFRha2VzIHR3byBYSFIgT2JqZWN0cyBhbmQgY3JlYXRlcyBhIG5ldyBvYmplY3RcclxuXHJcbi8vICBUaGUgbmV3IG9iamVjdCBpcyBiYXNlZCBvbiBnbG9iYWwgaW5pdGlhbGx5LCBidXQgYW55IHNldHRpbmcgaW5cclxuLy8gIGxvY2FsIG92ZXJyaWRlcyB0aGUgZ2xvYmFsIHZhbHVlLlxyXG5cclxudmFyIE1lcmdlWEhSU2V0dGluZ3MgPSBmdW5jdGlvbiAoZ2xvYmFsLCBsb2NhbClcclxue1xyXG4gICAgdmFyIG91dHB1dCA9IChnbG9iYWwgPT09IHVuZGVmaW5lZCkgPyBYSFJTZXR0aW5ncygpIDogT2JqZWN0LmFzc2lnbihnbG9iYWwpO1xyXG5cclxuICAgIGlmIChsb2NhbClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBzZXR0aW5nIGluIGxvY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsW3NldHRpbmddICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFtzZXR0aW5nXSA9IGxvY2FsW3NldHRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZXJnZVhIUlNldHRpbmdzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanMiLCJ2YXIgTWVyZ2VYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vTWVyZ2VYSFJTZXR0aW5ncycpO1xyXG5cclxudmFyIFhIUkxvYWRlciA9IGZ1bmN0aW9uIChmaWxlLCBnbG9iYWxYSFJTZXR0aW5ncylcclxue1xyXG4gICAgdmFyIGNvbmZpZyA9IE1lcmdlWEhSU2V0dGluZ3MoZ2xvYmFsWEhSU2V0dGluZ3MsIGZpbGUueGhyU2V0dGluZ3MpO1xyXG5cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub3BlbignR0VUJywgZmlsZS5zcmMsIGNvbmZpZy5hc3luYywgY29uZmlnLnVzZXIsIGNvbmZpZy5wYXNzd29yZCk7XHJcblxyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IGZpbGUueGhyU2V0dGluZ3MucmVzcG9uc2VUeXBlO1xyXG4gICAgeGhyLnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcclxuXHJcbiAgICBpZiAoY29uZmlnLmhlYWRlciAmJiBjb25maWcuaGVhZGVyVmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoY29uZmlnLmhlYWRlciwgY29uZmlnLmhlYWRlclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFmdGVyIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0LCB0aGUgeGhyLnJlc3BvbnNlIHByb3BlcnR5IHdpbGwgY29udGFpbiB0aGUgcmVxdWVzdGVkIGRhdGEgYXMgYSBET01TdHJpbmcsIEFycmF5QnVmZmVyLCBCbG9iLCBvciBEb2N1bWVudCAoZGVwZW5kaW5nIG9uIHdoYXQgd2FzIHNldCBmb3IgcmVzcG9uc2VUeXBlLilcclxuXHJcbiAgICB4aHIub25sb2FkID0gZmlsZS5vbkxvYWQuYmluZChmaWxlKTtcclxuICAgIHhoci5vbmVycm9yID0gZmlsZS5vbkVycm9yLmJpbmQoZmlsZSk7XHJcbiAgICB4aHIub25wcm9ncmVzcyA9IGZpbGUub25Qcm9ncmVzcy5iaW5kKGZpbGUpO1xyXG5cclxuICAgIC8vICBUaGlzIGlzIHRoZSBvbmx5IHN0YW5kYXJkIG1ldGhvZCwgdGhlIG9uZXMgYWJvdmUgYXJlIGJyb3dzZXIgYWRkaXRpb25zIChtYXliZSBub3QgdW5pdmVyc2FsPylcclxuICAgIC8vIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2VcclxuXHJcbiAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiB4aHI7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFhIUkxvYWRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL1hIUkxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL1hIUkxvYWRlci5qcyIsInZhciBFdmVudCA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cy9FdmVudCcpO1xyXG5cclxudmFyIExvYWRlckNvbXBsZXRlRXZlbnQgPSBmdW5jdGlvbiAobG9hZGVyKVxyXG57XHJcbiAgICBFdmVudC5jYWxsKHRoaXMsICdMT0FERVJfQ09NUExFVEVfRVZFTlQnKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxufTtcclxuXHJcbkxvYWRlckNvbXBsZXRlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xyXG5Mb2FkZXJDb21wbGV0ZUV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlckNvbXBsZXRlRXZlbnQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlckNvbXBsZXRlRXZlbnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJDb21wbGV0ZUV2ZW50LmpzIiwidmFyIEV2ZW50ID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzL0V2ZW50Jyk7XHJcblxyXG52YXIgTG9hZGVyU3RhcnRFdmVudCA9IGZ1bmN0aW9uIChsb2FkZXIpXHJcbntcclxuICAgIEV2ZW50LmNhbGwodGhpcywgJ0xPQURFUl9TVEFSVF9FVkVOVCcpO1xyXG5cclxuICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG59O1xyXG5cclxuTG9hZGVyU3RhcnRFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7XHJcbkxvYWRlclN0YXJ0RXZlbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTG9hZGVyU3RhcnRFdmVudDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTG9hZGVyU3RhcnRFdmVudDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCIvKipcclxuKiBAcHJvcGVydHkge251bWJlcn0gYyAtIEludGVybmFsIHZhci5cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG52YXIgYyA9IDE7XHJcblxyXG4vKipcclxuKiBAcHJvcGVydHkge251bWJlcn0gczAgLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHMwID0gMDtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMSAtIEludGVybmFsIHZhci5cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG52YXIgczEgPSAwO1xyXG5cclxuLyoqXHJcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMyIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBzMiA9IDA7XHJcblxyXG4vKipcclxuKiBAcHJvcGVydHkge0FycmF5fSBzaWduIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBzaWduID0gWyAtMSwgMSBdO1xyXG5cclxuLyoqXHJcbiogUHJpdmF0ZSByYW5kb20gaGVscGVyLlxyXG4qXHJcbiogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNybmRcclxuKiBAcHJpdmF0ZVxyXG4qIEByZXR1cm4ge251bWJlcn1cclxuKi9cclxudmFyIHJuZCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHZhciB0ID0gMjA5MTYzOSAqIHMwICsgYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXHJcblxyXG4gICAgYyA9IHQgfCAwO1xyXG4gICAgczAgPSBzMTtcclxuICAgIHMxID0gczI7XHJcbiAgICBzMiA9IHQgLSBjO1xyXG5cclxuICAgIHJldHVybiBzMjtcclxufTtcclxuXHJcbi8qKlxyXG4qIEludGVybmFsIG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBzZWVkIGhhc2guXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2hhc2hcclxuKiBAcHJpdmF0ZVxyXG4qIEBwYXJhbSB7YW55fSBkYXRhXHJcbiogQHJldHVybiB7bnVtYmVyfSBoYXNoZWQgdmFsdWUuXHJcbiovXHJcbnZhciBoYXNoID0gZnVuY3Rpb24gKGRhdGEpXHJcbntcclxuICAgIHZhciBoLCBpLCBuO1xyXG4gICAgbiA9IDB4ZWZjODI0OWQ7XHJcbiAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcclxuICAgICAgICBuID0gaCA+Pj4gMDtcclxuICAgICAgICBoIC09IG47XHJcbiAgICAgICAgaCAqPSBuO1xyXG4gICAgICAgIG4gPSBoID4+PiAwO1xyXG4gICAgICAgIGggLT0gbjtcclxuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsvLyAyXjMyXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7Ly8gMl4tMzJcclxufTtcclxuXHJcblxyXG52YXIgUmFuZG9tRGF0YUdlbmVyYXRvciA9IGZ1bmN0aW9uIChzZWVkcylcclxue1xyXG4gICAgaWYgKHR5cGVvZiBzZWVkcyA9PT0gJ3N0cmluZycpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZShzZWVkcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zb3coc2VlZHMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUmFuZG9tRGF0YUdlbmVyYXRvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSYW5kb21EYXRhR2VuZXJhdG9yO1xyXG5cclxuUmFuZG9tRGF0YUdlbmVyYXRvci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlc2V0IHRoZSBzZWVkIG9mIHRoZSByYW5kb20gZGF0YSBnZW5lcmF0b3IuXHJcbiAgICAqXHJcbiAgICAqIF9Ob3RlXzogdGhlIHNlZWQgYXJyYXkgaXMgb25seSBwcm9jZXNzZWQgdXAgdG8gdGhlIGZpcnN0IGB1bmRlZmluZWRgIChvciBgbnVsbGApIHZhbHVlLCBzaG91bGQgc3VjaCBiZSBwcmVzZW50LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3Nvd1xyXG4gICAgKiBAcGFyYW0ge2FueVtdfSBzZWVkcyAtIFRoZSBhcnJheSBvZiBzZWVkczogdGhlIGB0b1N0cmluZygpYCBvZiBlYWNoIHZhbHVlIGlzIHVzZWQuXHJcbiAgICAqL1xyXG4gICAgc293OiBmdW5jdGlvbiAoc2VlZHMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQWx3YXlzIHJlc2V0IHRvIGRlZmF1bHQgc2VlZFxyXG4gICAgICAgIHMwID0gaGFzaCgnICcpO1xyXG4gICAgICAgIHMxID0gaGFzaChzMCk7XHJcbiAgICAgICAgczIgPSBoYXNoKHMxKTtcclxuICAgICAgICBjID0gMTtcclxuXHJcbiAgICAgICAgaWYgKCFzZWVkcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGFueSBzZWVkc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VlZHMubGVuZ3RoICYmIChzZWVkc1tpXSAhPSBudWxsKTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlZWQgPSBzZWVkc1tpXTtcclxuXHJcbiAgICAgICAgICAgIHMwIC09IGhhc2goc2VlZCk7XHJcbiAgICAgICAgICAgIHMwICs9IH5+KHMwIDwgMCk7XHJcbiAgICAgICAgICAgIHMxIC09IGhhc2goc2VlZCk7XHJcbiAgICAgICAgICAgIHMxICs9IH5+KHMxIDwgMCk7XHJcbiAgICAgICAgICAgIHMyIC09IGhhc2goc2VlZCk7XHJcbiAgICAgICAgICAgIHMyICs9IH5+KHMyIDwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlclxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxyXG4gICAgKi9cclxuICAgIGludGVnZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMl4zMlxyXG4gICAgICAgIHJldHVybiBybmQoKSAqIDB4MTAwMDAwMDAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjZnJhY1xyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICovXHJcbiAgICBmcmFjOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIDJeLTUzXHJcbiAgICAgICAgcmV0dXJuIHJuZCgpICsgKHJuZCgpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMl4zMi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyZWFsXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxyXG4gICAgKi9cclxuICAgIHJlYWw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZWdlcigpICsgdGhpcy5mcmFjKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIG1pbiBhbmQgbWF4LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2ludGVnZXJJblJhbmdlXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqL1xyXG4gICAgaW50ZWdlckluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJlYWxJblJhbmdlKDAsIG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXHJcbiAgICAqIFRoaXMgbWV0aG9kIGlzIGFuIGFsaWFzIGZvciBSYW5kb21EYXRhR2VuZXJhdG9yLmludGVnZXJJblJhbmdlLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2JldHdlZW5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICBiZXR3ZWVuOiBmdW5jdGlvbiAobWluLCBtYXgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZWdlckluUmFuZ2UobWluLCBtYXgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxJblJhbmdlXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqL1xyXG4gICAgcmVhbEluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mcmFjKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMS5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNub3JtYWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxyXG4gICAgKi9cclxuICAgIG5vcm1hbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gMSAtICgyICogdGhpcy5mcmFjKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzEzMDgzNjhcclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN1dWlkXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ30gQSB2YWxpZCBSRkM0MTIyIHZlcnNpb240IElEIGhleCBzdHJpbmdcclxuICAgICovXHJcbiAgICB1dWlkOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhID0gJyc7XHJcbiAgICAgICAgdmFyIGIgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChiID0gYSA9ICcnOyBhKysgPCAzNjsgYiArPX5hICUgNSB8IGEgKiAzJjQgPyAoYV4xNSA/IDhedGhpcy5mcmFjKCkgKiAoYV4yMCA/IDE2IDogNCkgOiA0KS50b1N0cmluZygxNikgOiAnLScpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIG1lbWJlciBvZiBgYXJyYXlgLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3BpY2tcclxuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cclxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxyXG4gICAgKi9cclxuICAgIHBpY2s6IGZ1bmN0aW9uIChhcnJheSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlbdGhpcy5pbnRlZ2VySW5SYW5nZSgwLCBhcnJheS5sZW5ndGggLSAxKV07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc2lnbiB0byBiZSB1c2VkIHdpdGggbXVsdGlwbGljYXRpb24gb3BlcmF0b3IuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc2lnblxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIG9yICsxLlxyXG4gICAgKi9cclxuICAgIHNpZ246IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGljayhzaWduKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAsIGZhdm9yaW5nIHRoZSBlYXJsaWVyIGVudHJpZXMuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijd2VpZ2h0ZWRQaWNrXHJcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gQW4gQXJyYXkgdG8gcGljayBhIHJhbmRvbSBtZW1iZXIgb2YuXHJcbiAgICAqIEByZXR1cm4ge2FueX0gQSByYW5kb20gbWVtYmVyIG9mIHRoZSBhcnJheS5cclxuICAgICovXHJcbiAgICB3ZWlnaHRlZFBpY2s6IGZ1bmN0aW9uIChhcnJheSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlbfn4oTWF0aC5wb3codGhpcy5mcmFjKCksIDIpICogKGFycmF5Lmxlbmd0aCAtIDEpICsgMC41KV07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHRpbWVzdGFtcCBiZXR3ZWVuIG1pbiBhbmQgbWF4LCBvciBiZXR3ZWVuIHRoZSBiZWdpbm5pbmcgb2YgMjAwMCBhbmQgdGhlIGVuZCBvZiAyMDIwIGlmIG1pbiBhbmQgbWF4IGFyZW4ndCBzcGVjaWZpZWQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjdGltZXN0YW1wXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqL1xyXG4gICAgdGltZXN0YW1wOiBmdW5jdGlvbiAobWluLCBtYXgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbEluUmFuZ2UobWluIHx8IDk0NjY4NDgwMDAwMCwgbWF4IHx8IDE1Nzc4NjIwMDAwMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBhbmdsZSBiZXR3ZWVuIC0xODAgYW5kIDE4MC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNhbmdsZVxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIC0xODAgYW5kIDE4MC5cclxuICAgICovXHJcbiAgICBhbmdsZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZSgtMTgwLCAxODApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByb3RhdGlvbiBpbiByYWRpYW5zLCBiZXR3ZWVuIC0zLjE0MSBhbmQgMy4xNDFcclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyb3RhdGlvblxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIC0zLjE0MSBhbmQgMy4xNDFcclxuICAgICovXHJcbiAgICByb3RhdGlvbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZSgtMy4xNDE1OTI2NTM1ODk3OTMsIDMuMTQxNTkyNjUzNTg5NzkzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgb3IgU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci4gVGhpcyBhbGxvd3MgeW91IHRvIHJldGFpbiB0aGUgdmFsdWVzXHJcbiAgICAqIHRoYXQgdGhlIGdlbmVyYXRvciBpcyB1c2luZyBiZXR3ZWVuIGdhbWVzLCBpLmUuIGluIGEgZ2FtZSBzYXZlIGZpbGUuXHJcbiAgICAqXHJcbiAgICAqIFRvIHNlZWQgdGhpcyBnZW5lcmF0b3Igd2l0aCBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgeW91IGNhbiBwYXNzIGl0IGFzIHRoZVxyXG4gICAgKiBgc2VlZGAgdmFsdWUgaW4geW91ciBnYW1lIGNvbmZpZywgb3IgY2FsbCB0aGlzIG1ldGhvZCBkaXJlY3RseSBhZnRlciBQaGFzZXIgaGFzIGJvb3RlZC5cclxuICAgICpcclxuICAgICogQ2FsbCB0aGlzIG1ldGhvZCB3aXRoIG5vIHBhcmFtZXRlcnMgdG8gcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxyXG4gICAgKlxyXG4gICAgKiBJZiBwcm92aWRpbmcgYSBzdGF0ZSBpdCBzaG91bGQgbWF0Y2ggdGhlIHNhbWUgZm9ybWF0IHRoYXQgdGhpcyBtZXRob2RcclxuICAgICogcmV0dXJucywgd2hpY2ggaXMgYSBzdHJpbmcgd2l0aCBhIGhlYWRlciBgIXJuZGAgZm9sbG93ZWQgYnkgdGhlIGBjYCxcclxuICAgICogYHMwYCwgYHMxYCBhbmQgYHMyYCB2YWx1ZXMgcmVzcGVjdGl2ZWx5LCBlYWNoIGNvbW1hLWRlbGltaXRlZC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzdGF0ZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXSAtIEdlbmVyYXRvciBzdGF0ZSB0byBiZSBzZXQuXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci5cclxuICAgICovXHJcbiAgICBzdGF0ZTogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdzdHJpbmcnICYmIHN0YXRlLm1hdGNoKC9eIXJuZC8pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgYyA9IHBhcnNlRmxvYXQoc3RhdGVbMV0pO1xyXG4gICAgICAgICAgICBzMCA9IHBhcnNlRmxvYXQoc3RhdGVbMl0pO1xyXG4gICAgICAgICAgICBzMSA9IHBhcnNlRmxvYXQoc3RhdGVbM10pO1xyXG4gICAgICAgICAgICBzMiA9IHBhcnNlRmxvYXQoc3RhdGVbNF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFsgJyFybmQnLCBjLCBzMCwgczEsIHMyIF0uam9pbignLCcpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tRGF0YUdlbmVyYXRvcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qIEEgcG9seWZpbGwgZm9yIEFycmF5LmZvckVhY2hcclxuKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoXHJcbiovXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmZvckVhY2gpXHJcbntcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc0FyZyAqLylcclxuICAgIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzID09PSB2b2lkIDAgfHwgdGhpcyA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpIGluIHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvQXJyYXkuZm9yRWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qIEEgcG9seWZpbGwgZm9yIEFycmF5LmlzQXJyYXlcclxuKi9cclxuaWYgKCFBcnJheS5pc0FycmF5KVxyXG57XHJcbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKGFyZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9BcnJheS5pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXHJcbmlmICghTWF0aC50cnVuYykge1xyXG4gICAgTWF0aC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcclxuKi9cclxuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xyXG5cclxuICAgIC8qIGpzaGludCBmcmVlemU6IGZhbHNlICovXHJcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcywgYm91bmRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYm91bmQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGJvdW5kQXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBseSh0aGlzIGluc3RhbmNlb2YgYm91bmQgPyB0aGlzIDogdGhpc0FyZywgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IChmdW5jdGlvbiBGKHByb3RvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdG8pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBwcm90bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoganNoaW50IHN1cGVybmV3OiB0cnVlICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSh0YXJnZXQucHJvdG90eXBlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBib3VuZDtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxufVxyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxyXG4qL1xyXG5pZiAoIUFycmF5LmlzQXJyYXkpXHJcbntcclxuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4qIEEgcG9seWZpbGwgZm9yIEFycmF5LmZvckVhY2hcclxuKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoXHJcbiovXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmZvckVhY2gpXHJcbntcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oZnVuIC8qLCB0aGlzQXJnICovKVxyXG4gICAge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcyA9PT0gdm9pZCAwIHx8IHRoaXMgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcclxuICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZnVuICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpIGluIHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiogTG93LWJ1ZGdldCBGbG9hdDMyQXJyYXkga25vY2stb2ZmLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUDIuanMgaW4gSUU5XHJcbiogU291cmNlOiBodHRwOi8vd3d3Lmh0bWw1Z2FtZWRldnMuY29tL3RvcGljLzU5ODgtcGhhc2VyLTEyLWllOS9cclxuKiBDYW1lcm9uIEZvYWxlIChodHRwOi8vd3d3LmtpYmlidS5jb20pXHJcbiovXHJcbmlmICh0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJvYmplY3RcIilcclxue1xyXG4gICAgdmFyIENoZWFwQXJyYXkgPSBmdW5jdGlvbih0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBwcm90byA9IG5ldyBBcnJheSgpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICAgICAgd2luZG93W3R5cGVdID0gZnVuY3Rpb24oYXJnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGFyZykgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmcubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gYXJnW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93W3R5cGVdLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICAgIHdpbmRvd1t0eXBlXS5jb25zdHJ1Y3RvciA9IHdpbmRvd1t0eXBlXTtcclxuICAgIH07XHJcblxyXG4gICAgQ2hlYXBBcnJheSgnRmxvYXQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnVWludDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0ludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdBcnJheUJ1ZmZlcicpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsc28gZml4IGZvciB0aGUgYWJzZW50IGNvbnNvbGUgaW4gSUU5XHJcbiAqL1xyXG5pZiAoIXdpbmRvdy5jb25zb2xlKVxyXG57XHJcbiAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xyXG4gICAgd2luZG93LmNvbnNvbGUubG9nID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xyXG4gICAgd2luZG93LmNvbnNvbGUud2FybiA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHBlcmZvcm1hbmNlLm5vd1xyXG4gKi9cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93ID09IGZhbHNlKSB7XHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xyXG4gIH1cclxuICBcclxuICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlID09IGZhbHNlKVxyXG4gIHtcclxuICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xyXG4gICAgXHJcbiAgICBpZiAocGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpe1xyXG4gICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpe1xyXG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIG5vd09mZnNldDtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8vIEVTNiBNYXRoLnRydW5jIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC90cnVuY1xyXG5pZiAoIU1hdGgudHJ1bmMpIHtcclxuICAgIE1hdGgudHJ1bmMgPSBmdW5jdGlvbiB0cnVuYyh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwID8gTWF0aC5jZWlsKHgpIDogTWF0aC5mbG9vcih4KTtcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL01hdGgudHJ1bmMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG5cclxuLyoqXHJcbiogTG93LWJ1ZGdldCBGbG9hdDMyQXJyYXkga25vY2stb2ZmLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUDIuanMgaW4gSUU5XHJcbiogU291cmNlOiBodHRwOi8vd3d3Lmh0bWw1Z2FtZWRldnMuY29tL3RvcGljLzU5ODgtcGhhc2VyLTEyLWllOS9cclxuKiBDYW1lcm9uIEZvYWxlIChodHRwOi8vd3d3LmtpYmlidS5jb20pXHJcbiovXHJcbmlmICh0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJvYmplY3RcIilcclxue1xyXG4gICAgdmFyIENoZWFwQXJyYXkgPSBmdW5jdGlvbih0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBwcm90byA9IG5ldyBBcnJheSgpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICAgICAgd2luZG93W3R5cGVdID0gZnVuY3Rpb24oYXJnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGFyZykgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmcubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gYXJnW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93W3R5cGVdLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICAgIHdpbmRvd1t0eXBlXS5jb25zdHJ1Y3RvciA9IHdpbmRvd1t0eXBlXTtcclxuICAgIH07XHJcblxyXG4gICAgQ2hlYXBBcnJheSgnRmxvYXQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnVWludDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0ludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdBcnJheUJ1ZmZlcicpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvVWludDMyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcclxuICovXHJcbmlmICghd2luZG93LmNvbnNvbGUpXHJcbntcclxuICAgIHdpbmRvdy5jb25zb2xlID0ge307XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2cgPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9jb25zb2xlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIHBlcmZvcm1hbmNlLm5vd1xyXG4gKi9cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93ID09IGZhbHNlKSB7XHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xyXG4gIH1cclxuICBcclxuICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlID09IGZhbHNlKVxyXG4gIHtcclxuICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xyXG4gICAgXHJcbiAgICBpZiAocGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpe1xyXG4gICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpe1xyXG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIG5vd09mZnNldDtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcGVyZm9ybWFuY2Uubm93LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLy8gUmVmZXJlbmNlczpcclxuLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cclxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTU3OTY3MVxyXG4vLyBodHRwOi8vdXBkYXRlcy5odG1sNXJvY2tzLmNvbS8yMDEyLzA1L3JlcXVlc3RBbmltYXRpb25GcmFtZS1BUEktbm93LXdpdGgtc3ViLW1pbGxpc2Vjb25kLXByZWNpc2lvblxyXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS90aW1oYWxsLzQwNzg2MTRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL3RyZWUvbWFzdGVyL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuXHJcbi8vIEV4cGVjdGVkIHRvIGJlIHVzZWQgd2l0aCBCcm93c2VyZml5XHJcbi8vIEJyb3dzZXJpZnkgYXV0b21hdGljYWxseSBkZXRlY3RzIHRoZSB1c2Ugb2YgYGdsb2JhbGAgYW5kIHBhc3NlcyB0aGVcclxuLy8gY29ycmVjdCByZWZlcmVuY2Ugb2YgYGdsb2JhbGAsIGBzZWxmYCwgYW5kIGZpbmFsbHkgYHdpbmRvd2BcclxuXHJcbi8vIERhdGUubm93XHJcbmlmICghKERhdGUubm93ICYmIERhdGUucHJvdG90eXBlLmdldFRpbWUpKSB7XHJcbiAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBwZXJmb3JtYW5jZS5ub3dcclxuaWYgKCEoZ2xvYmFsLnBlcmZvcm1hbmNlICYmIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cpKSB7XHJcbiAgICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGlmICghZ2xvYmFsLnBlcmZvcm1hbmNlKSB7XHJcbiAgICAgICAgZ2xvYmFsLnBlcmZvcm1hbmNlID0ge307XHJcbiAgICB9XHJcbiAgICBnbG9iYWwucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbnZhciBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbnZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcclxuXHJcbmZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XHJcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZ2xvYmFsW3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XHJcbiAgICAgICAgZ2xvYmFsW3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcbn1cclxuXHJcbmlmICghZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICdpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgZGVsYXkgPSAxNiArIGxhc3RUaW1lIC0gY3VycmVudFRpbWU7XHJcblxyXG4gICAgICAgIGlmIChkZWxheSA8IDApIHtcclxuICAgICAgICAgICAgZGVsYXkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHBlcmZvcm1hbmNlLm5vdygpKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5pZiAoIWdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XHJcbnZhciBTeXN0ZW1zID0gcmVxdWlyZSgnLi9TeXN0ZW1zJyk7XHJcblxyXG4vKipcclxuKiBBIEJhc2UgU3RhdGUgQ2xhc3MuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlN0YXRlXHJcbiogQGNvbnN0cnVjdG9yXHJcbiovXHJcbnZhciBTdGF0ZSA9IGZ1bmN0aW9uIChjb25maWcpXHJcbntcclxuICAgIC8vICBUaGUgcHJvcGVydGllcyBhIFN0YXRlICptdXN0KiBoYXZlLCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIHdpdGhvdXQgYnJlYWtpbmcgaXQ6XHJcblxyXG4gICAgdGhpcy5nYW1lID0gbnVsbDtcclxuXHJcbiAgICAvLyAgTWF5YmUganVzdCBhbiBvYmplY3Q/IERvZXNuJ3QgaGF2ZSB0byBpbnN0YW50aWF0ZSBJIGRvbid0IHRoaW5rIC4uLlxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyh0aGlzLCBjb25maWcpO1xyXG5cclxuICAgIHRoaXMuc3lzID0gbmV3IFN5c3RlbXModGhpcywgY29uZmlnKTtcclxuXHJcbiAgICAvLyAgUmVmZXJlbmNlIHRvIHN5cy5jaGlsZHJlbiwgc2V0IGR1cmluZyBzeXMuaW5pdCBvbmx5XHJcbiAgICB0aGlzLmNoaWxkcmVuO1xyXG59O1xyXG5cclxuU3RhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGU7XHJcblxyXG5TdGF0ZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcclxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGUuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgTk9PUCA9IHJlcXVpcmUoJy4uL3V0aWxzL05PT1AnKTtcclxudmFyIFN0YXRlID0gcmVxdWlyZSgnLi9TdGF0ZScpO1xyXG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XHJcbnZhciBTeXN0ZW1zID0gcmVxdWlyZSgnLi9TeXN0ZW1zJyk7XHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XHJcbnZhciBMb2FkZXJFdmVudCA9IHJlcXVpcmUoJy4uL2xvYWRlci9ldmVudHMvJyk7XHJcblxyXG4vKipcclxuKiBUaGUgU3RhdGUgTWFuYWdlciBpcyByZXNwb25zaWJsZSBmb3IgbG9hZGluZywgc2V0dGluZyB1cCBhbmQgc3dpdGNoaW5nIGdhbWUgc3RhdGVzLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5TdGF0ZU1hbmFnZXJcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcbnZhciBTdGF0ZU1hbmFnZXIgPSBmdW5jdGlvbiAoZ2FtZSwgc3RhdGVDb25maWcpXHJcbntcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcblxyXG4gICAgLy8gIEV2ZXJ5dGhpbmcga2VwdCBpbiBoZXJlXHJcbiAgICB0aGlzLmtleXMgPSB7fTtcclxuICAgIHRoaXMuc3RhdGVzID0gW107XHJcblxyXG4gICAgLy8gIE9ubHkgYWN0aXZlIHN0YXRlcyBhcmUga2VwdCBpbiBoZXJlXHJcbiAgICB0aGlzLmFjdGl2ZSA9IFtdO1xyXG5cclxuICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcclxuXHJcbiAgICBpZiAoc3RhdGVDb25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGVDb25maWcpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZUNvbmZpZy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFRoZSBpID09PSAwIHBhcnQganVzdCBzdGFydHMgdGhlIGZpcnN0IFN0YXRlIGdpdmVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZ1tpXSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IChpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXHJcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXRlTWFuYWdlcjtcclxuXHJcblN0YXRlTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSBCb290IGhhbmRsZXIgaXMgY2FsbGVkIGJ5IFBoYXNlci5HYW1lIHdoZW4gaXQgZmlyc3Qgc3RhcnRzIHVwLlxyXG4gICAgKiBUaGUgcmVuZGVyZXIgaXMgYXZhaWxhYmxlIGJ5IG5vdy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2Jvb3RcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBib290OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblBhdXNlLmFkZCh0aGlzLnBhdXNlLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUub25SZXN1bWUuYWRkKHRoaXMucmVzdW1lLCB0aGlzKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fcGVuZGluZ1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGVudHJ5LmtleSwgZW50cnkuc3RhdGUsIGVudHJ5LmF1dG9TdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgQ2xlYXIgdGhlIHBlbmRpbmcgbGlzdFxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoIWtleSkgeyBrZXkgPSAnZGVmYXVsdCc7IH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXkgPSBzdGF0ZUNvbmZpZy5zZXR0aW5ncy5rZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ29iamVjdCcgJiYgc3RhdGVDb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gc3RhdGVDb25maWcua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEJ5IHRoaXMgcG9pbnQgaXQncyBlaXRoZXIgJ2RlZmF1bHQnIG9yIGV4dHJhY3RlZCBmcm9tIHRoZSBTdGF0ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgYSBTdGF0ZSB3aXRoIGR1cGxpY2F0ZSBrZXk6ICcgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFkZHMgYSBuZXcgU3RhdGUgaW50byB0aGUgU3RhdGVNYW5hZ2VyLiBZb3UgbXVzdCBnaXZlIGVhY2ggU3RhdGUgYSB1bmlxdWUga2V5IGJ5IHdoaWNoIHlvdSdsbCBpZGVudGlmeSBpdC5cclxuICAgICogVGhlIFN0YXRlIGNhbiBiZSBlaXRoZXIgYSBQaGFzZXIuU3RhdGUgb2JqZWN0IChvciBhbiBvYmplY3QgdGhhdCBleHRlbmRzIGl0KSwgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCBvciBhIGZ1bmN0aW9uLlxyXG4gICAgKiBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuIGEgbmV3IHN0YXRlIG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgYnkgY2FsbGluZyBpdC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2FkZFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQSB1bmlxdWUga2V5IHlvdSB1c2UgdG8gcmVmZXJlbmNlIHRoaXMgc3RhdGUsIGkuZS4gXCJNYWluTWVudVwiLCBcIkxldmVsMVwiLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5TdGF0ZXxvYmplY3R8ZnVuY3Rpb259IHN0YXRlICAtIFRoZSBzdGF0ZSB5b3Ugd2FudCB0byBzd2l0Y2ggdG8uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TdGFydD1mYWxzZV0gIC0gSWYgdHJ1ZSB0aGUgU3RhdGUgd2lsbCBiZSBzdGFydGVkIGltbWVkaWF0ZWx5IGFmdGVyIGFkZGluZyBpdC5cclxuICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnLCBhdXRvU3RhcnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCA9PT0gdW5kZWZpbmVkKSB7IGF1dG9TdGFydCA9IGZhbHNlOyB9XHJcblxyXG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuaXNCb290ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX3BlbmRpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXHJcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IGF1dG9TdGFydFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIgbm90IHlldCBib290ZWQsIGFkZGluZyB0byBsaXN0JywgdGhpcy5fcGVuZGluZy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5ID0gdGhpcy5nZXRLZXkoa2V5LCBzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdTdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIGluc3RhbmNlJywga2V5KTtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlKGtleSwgc3RhdGVDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBvYmplY3QnLCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGVDb25maWcua2V5ID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbU9iamVjdChrZXksIHN0YXRlQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBmdW5jdGlvbicsIGtleSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb24oa2V5LCBzdGF0ZUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IG5ld1N0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcy5wdXNoKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCB8fCBuZXdTdGF0ZS5zZXR0aW5ncy5hY3RpdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydC5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlU3RhdGVGcm9tSW5zdGFuY2U6IGZ1bmN0aW9uIChrZXksIG5ld1N0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmtleSA9IGtleTtcclxuXHJcbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyb21PYmplY3Q6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBTdGF0ZShzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgc3RhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuXHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKG5ld1N0YXRlLCBrZXkpO1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMgPSBuZXcgU3lzdGVtcyhuZXdTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBEZWZhdWx0IHJlcXVpcmVkIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR1cENhbGxiYWNrcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR1cENhbGxiYWNrczogZnVuY3Rpb24gKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhdGVDb25maWcgPT09IHVuZGVmaW5lZCkgeyBzdGF0ZUNvbmZpZyA9IG5ld1N0YXRlOyB9XHJcblxyXG4gICAgICAgIC8vICBFeHRyYWN0IGNhbGxiYWNrcyBvciBzZXQgTk9PUFxyXG5cclxuICAgICAgICBuZXdTdGF0ZS5pbml0ID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdpbml0JywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucHJlbG9hZCA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlbG9hZCcsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLmNyZWF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAnY3JlYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUuc2h1dGRvd24gPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3NodXRkb3duJywgTk9PUCk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnByZVVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlVXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUudXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICd1cGRhdGUnLCBOT09QKTtcclxuICAgICAgICBuZXdTdGF0ZS5wb3N0VXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwb3N0VXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucmVuZGVyID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdyZW5kZXInLCBOT09QKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyYW1lQnVmZmVyOiBmdW5jdGlvbiAobmV3U3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS5zZXR0aW5ncy54O1xyXG4gICAgICAgIHZhciB5ID0gbmV3U3RhdGUuc2V0dGluZ3MueTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID0gdGhpcy5nYW1lLmNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZS5zZXR0aW5ncy5oZWlnaHQgPT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBuZXdTdGF0ZS5zeXMuZmJvID0gdGhpcy5nYW1lLnJlbmRlcmVyLmNyZWF0ZUZCTyhuZXdTdGF0ZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWN0aXZlU3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IHN0YXRlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHN0YXRlICYmIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZS5pbmRleE9mKHN0YXRlKSAhPT0gLTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlciBub3QgeWV0IGJvb3RlZCwgc2V0dGluZyBhdXRvU3RhcnQgb24gcGVuZGluZyBsaXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3BlbmRpbmcubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3BlbmRpbmdbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmF1dG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEFscmVhZHkgc3RhcnRlZD8gTm90aGluZyBtb3JlIHRvIGRvIGhlcmUgLi4uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKGtleSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICArIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5pdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaW5pdC5jYWxsKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnByZWxvYWQgJiYgc3RhdGUuc3lzLmxvYWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJlbG9hZC5jYWxsKHN0YXRlLCB0aGlzLmdhbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBJcyB0aGUgbG9hZGVyIGVtcHR5P1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN5cy5sb2FkLmxpc3Quc2l6ZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgU3RhcnQgdGhlIGxvYWRlciBnb2luZyBhcyB3ZSBoYXZlIHNvbWV0aGluZyBpbiB0aGUgcXVldWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQuZXZlbnRzLm9uKCdMT0FERVJfQ09NUExFVEVfRVZFTlQnLCB0aGlzLmxvYWRDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBObyBwcmVsb2FkPyBUaGVuIHRoZXJlIHdhcyBub3RoaW5nIHRvIGxvYWQgZWl0aGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRDb21wbGV0ZTogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGV2ZW50LmxvYWRlci5zdGF0ZTtcclxuXHJcbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB0byBkbyBsb2FkLXVwZGF0ZSBvbmUgbGFzdCB0aW1lIGJlZm9yZSBzdGF0ZSBpcyBzZXQgdG8gX2NyZWF0ZWRcclxuXHJcbiAgICAgICAgLy8gIFN0b3AgZG9pbmcgdGhpcyAuLi5cclxuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoJ2xvYWRVcGRhdGUnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvYWRVcGRhdGUuY2FsbChzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnRDcmVhdGU6IGZ1bmN0aW9uIChzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhdGUuY3JlYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUuY3JlYXRlLmNhbGwoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEluc2VydCBhdCB0aGUgY29ycmVjdCBpbmRleCwgb3IgaXQganVzdCBhbGwgZ29lcyB3cm9uZyA6KVxyXG5cclxuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0U3RhdGVJbmRleChzdGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlLnB1c2goeyBpbmRleDogaSwgc3RhdGU6IHN0YXRlIH0pO1xyXG5cclxuICAgICAgICAvLyAgU29ydCB0aGUgJ2FjdGl2ZScgYXJyYXkgYmFzZWQgb24gdGhlIGluZGV4IHByb3BlcnR5XHJcbiAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRTdGF0ZXMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnN5cy51cGRhdGVzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGF1c2U6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVTdGF0ZUluZGV4KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRTdGF0ZXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzb3J0U3RhdGVzOiBmdW5jdGlvbiAoc3RhdGVBLCBzdGF0ZUIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFNvcnQgZGVzY2VuZGluZ1xyXG4gICAgICAgIGlmIChzdGF0ZUEuaW5kZXggPCBzdGF0ZUIuaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlQS5pbmRleCA+IHN0YXRlQi5pbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBTZWUgaWYgd2UgY2FuIHJlZHVjZSB0aGlzIGRvd24gdG8ganVzdCB1cGRhdGUgYW5kIHJlbmRlclxyXG5cclxuICAgIHN0ZXA6IGZ1bmN0aW9uICh0aW1lc3RhbXApXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN5cy5tYWlubG9vcC5ydW5uaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RlcCh0aW1lc3RhbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKlxyXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnByZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5wcmVVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAvLyAgSW52b2tlIFN0YXRlIE1haW4gTG9vcCBoZXJlIC0gdXBkYXRpbmcgYWxsIG9mIGl0cyBzeXN0ZW1zICh0d2VlbnMsIHBoeXNpY3MsIGV0YylcclxuXHJcbiAgICAgICAgICAgIC8vICBUaGlzIHNob3VsZG4ndCBiZSBjYWxsZWQgaWYgdGhlIFN0YXRlIGlzIHN0aWxsIGxvYWRpbmdcclxuICAgICAgICAgICAgLy8gIEhhdmUgYSBTdGF0ZS5TVEFUVVMgY29uc3QgaW4gdGhlIFNldHRpbmdzLCBkaWN0YXRpbmcgd2hhdCBpcyBnb2luZyBvblxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwb3N0VXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnBvc3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUucG9zdFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICBDYW4gcHV0IGFsbCBraW5kcyBvZiBvdGhlciBjaGVja3MgaW4gaGVyZSwgbGlrZSBNYWluTG9vcCwgRlBTLCBldGMuXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuc2V0dGluZ3MudmlzaWJsZSB8fCBzdGF0ZS5zeXMuY29sb3IuYWxwaGEgPT09IDAgfHwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcihzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICovXHJcblxyXG4gICAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIChyZW5kZXJlciwgc3RhdGUsIGludGVycG9sYXRpb25QZXJjZW50YWdlKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBQb3B1bGF0ZXMgdGhlIGRpc3BsYXkgbGlzdFxyXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihyZW5kZXJlciwgY2hpbGQsIGludGVycG9sYXRpb25QZXJjZW50YWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZU1hbmFnZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N0YXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGVNYW5hZ2VyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgcXVpY2sgd2F5IHRvIGNyZWF0ZSBtYW55IGNvbW1vbiBnYW1lIG9iamVjdHMuIFRoZSBGYWN0b3J5IGlzIG93bmVkIGJ5IHRoZSBTdGF0ZS5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG5cclxudmFyIEdhbWVPYmplY3RDcmVhdG9yID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgc3RhdGU6IG51bGxcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RDcmVhdG9yIGluc3RhbmNlIGZvciBTdGF0ZScsIHN0YXRlKTtcclxuXHJcbiAgICBHYW1lT2JqZWN0Q3JlYXRvci5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIC8vICAgTG9hZCB0aGUgZmFjdG9yaWVzIGludG8gdGhpcyBPYmplY3RcclxuXHJcbiAgICBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdENyZWF0b3IsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gR2FtZU9iamVjdENyZWF0b3I7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xyXG5cclxuLyoqXHJcbiogVGhlIEdhbWVPYmplY3QgRmFjdG9yeSBpcyBhIHF1aWNrIHdheSB0byBjcmVhdGUgbWFueSBjb21tb24gZ2FtZSBvYmplY3RzLiBUaGUgRmFjdG9yeSBpcyBvd25lZCBieSB0aGUgU3RhdGUuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeVxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKi9cclxuXHJcbnZhciBHYW1lT2JqZWN0RmFjdG9yeSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcclxuICAgICogQHByb3RlY3RlZFxyXG4gICAgKi9cclxuICAgIHN0YXRlOiBudWxsXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoc3RhdGUpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBHYW1lT2JqZWN0RmFjdG9yeSBpbnN0YW5jZSBmb3IgU3RhdGUnKTtcclxuXHJcbiAgICBHYW1lT2JqZWN0RmFjdG9yeS5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIC8vICAgTG9hZCB0aGUgZmFjdG9yaWVzIGludG8gdGhpcyBPYmplY3RcclxuXHJcbiAgICByZXR1cm4gRmFjdG9yeUNvbnRhaW5lci5sb2FkKEdhbWVPYmplY3RGYWN0b3J5LCB0cnVlKTtcclxuXHJcbiAgICAvLyByZXR1cm4gR2FtZU9iamVjdEZhY3Rvcnk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsInZhciBCYXNlTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vbG9hZGVyL0Jhc2VMb2FkZXInKTtcclxudmFyIEltYWdlTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vbG9hZGVyL2ZpbGV0eXBlcy9JbWFnZUZpbGUnKTtcclxuXHJcbnZhciBMb2FkZXIgPSBmdW5jdGlvbiAoc3RhdGUpXHJcbntcclxuICAgIEJhc2VMb2FkZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcclxuICAgICogQHByb3RlY3RlZFxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbn07XHJcblxyXG5Mb2FkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlTG9hZGVyLnByb3RvdHlwZSk7XHJcbkxvYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMb2FkZXI7XHJcblxyXG5Mb2FkZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24gKGtleSwgdXJsKVxyXG57XHJcbiAgICB2YXIgZmlsZSA9IEltYWdlTG9hZGVyKGtleSwgdXJsLCB0aGlzLnBhdGgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdMb2FkZXIuaW1hZ2UnKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG5cclxuICAgIHRoaXMuYWRkRmlsZShmaWxlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8vIE15IHRoYW5rcyB0byBJc2FhYyBTdWtpbiBmb3IgY3JlYXRpbmcgTWFpbkxvb3AuanMsIG9uIHdoaWNoIGxvdHMgb2YgdGhpcyBpcyBiYXNlZC5cclxuXHJcbnZhciBNYWluTG9vcCA9IGZ1bmN0aW9uIChzdGF0ZSwgZnJhbWVyYXRlKVxyXG57XHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIEdhbWUuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgICAvLyBUaGUgYW1vdW50IG9mIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gc2ltdWxhdGUgZWFjaCB0aW1lIHVwZGF0ZSgpIHJ1bnMuXHJcbiAgICB0aGlzLnRpbWVzdGVwID0gMTAwMCAvIGZyYW1lcmF0ZTtcclxuXHJcbiAgICB0aGlzLnBoeXNpY3NTdGVwID0gMSAvIGZyYW1lcmF0ZTtcclxuXHJcbiAgICAvLyBUaGUgY3VtdWxhdGl2ZSBhbW91bnQgb2YgaW4tYXBwIHRpbWUgdGhhdCBoYXNuJ3QgYmVlbiBzaW11bGF0ZWQgeWV0LlxyXG4gICAgLy8gU2VlIHRoZSBjb21tZW50cyBpbnNpZGUgYW5pbWF0ZSgpIGZvciBkZXRhaWxzLlxyXG4gICAgdGhpcy5mcmFtZURlbHRhID0gMDtcclxuXHJcbiAgICAvLyBUaGUgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyBvZiB0aGUgbGFzdCB0aW1lIHRoZSBtYWluIGxvb3Agd2FzIHJ1bi5cclxuICAgIC8vIFVzZWQgdG8gY29tcHV0ZSB0aGUgdGltZSBlbGFwc2VkIGJldHdlZW4gZnJhbWVzLlxyXG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSAwO1xyXG5cclxuICAgIC8vIEFuIGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIG9mIHRoZSBmcmFtZXMgcGVyIHNlY29uZC5cclxuICAgIHRoaXMuZnBzID0gNjA7XHJcblxyXG4gICAgLy8gVGhlIHRpbWVzdGFtcCAoaW4gbWlsbGlzZWNvbmRzKSBvZiB0aGUgbGFzdCB0aW1lIHRoZSBgZnBzYCBtb3ZpbmdcclxuICAgIC8vIGF2ZXJhZ2Ugd2FzIHVwZGF0ZWQuXHJcbiAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSAwO1xyXG5cclxuICAgIC8vIFRoZSBudW1iZXIgb2YgZnJhbWVzIGRlbGl2ZXJlZCBpbiB0aGUgY3VycmVudCBzZWNvbmQuXHJcbiAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xyXG5cclxuICAgIC8vIFRoZSBudW1iZXIgb2YgdGltZXMgdXBkYXRlKCkgaXMgY2FsbGVkIGluIGEgZ2l2ZW4gZnJhbWUuIFRoaXMgaXMgb25seVxyXG4gICAgLy8gcmVsZXZhbnQgaW5zaWRlIG9mIGFuaW1hdGUoKSwgYnV0IGEgcmVmZXJlbmNlIGlzIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0XHJcbiAgICAvLyB0aGlzIHZhcmlhYmxlIGlzIG5vdCBtYXJrZWQgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbiBldmVyeSB0aW1lIHRoZSBtYWluXHJcbiAgICAvLyBsb29wIHJ1bnMuXHJcbiAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcclxuXHJcbiAgICAvLyBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCBtdXN0IHBhc3Mgc2luY2UgdGhlIGxhc3RcclxuICAgIC8vIGZyYW1lIHdhcyBleGVjdXRlZCBiZWZvcmUgYW5vdGhlciBmcmFtZSBjYW4gYmUgZXhlY3V0ZWQuIFRoZVxyXG4gICAgLy8gbXVsdGlwbGljYXRpdmUgaW52ZXJzZSBjYXBzIHRoZSBGUFMgKHRoZSBkZWZhdWx0IG9mIHplcm8gbWVhbnMgdGhlcmUgaXNcclxuICAgIC8vIG5vIGNhcCkuXHJcbiAgICB0aGlzLm1pbkZyYW1lRGVsYXkgPSAwO1xyXG5cclxuICAgIC8vIFdoZXRoZXIgdGhlIG1haW4gbG9vcCBpcyBydW5uaW5nLlxyXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gYHRydWVgIGlmIGBNYWluTG9vcC5zdGFydCgpYCBoYXMgYmVlbiBjYWxsZWQgYW5kIHRoZSBtb3N0IHJlY2VudCB0aW1lIGl0XHJcbiAgICAvLyB3YXMgY2FsbGVkIGhhcyBub3QgYmVlbiBmb2xsb3dlZCBieSBhIGNhbGwgdG8gYE1haW5Mb29wLnN0b3AoKWAuIFRoaXMgaXNcclxuICAgIC8vIGRpZmZlcmVudCB0aGFuIGBydW5uaW5nYCBiZWNhdXNlIHRoZXJlIGlzIGEgZGVsYXkgb2YgYSBmZXcgbWlsbGlzZWNvbmRzXHJcbiAgICAvLyBhZnRlciBgTWFpbkxvb3Auc3RhcnQoKWAgaXMgY2FsbGVkIGJlZm9yZSB0aGUgYXBwbGljYXRpb24gaXMgY29uc2lkZXJlZFxyXG4gICAgLy8gXCJydW5uaW5nLlwiIFRoaXMgZGVsYXkgaXMgZHVlIHRvIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGZyYW1lLlxyXG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gV2hldGhlciB0aGUgc2ltdWxhdGlvbiBoYXMgZmFsbGVuIHRvbyBmYXIgYmVoaW5kIHJlYWwgdGltZS5cclxuICAgIC8vIFNwZWNpZmljYWxseSwgYHBhbmljYCB3aWxsIGJlIHNldCB0byBgdHJ1ZWAgaWYgdG9vIG1hbnkgdXBkYXRlcyBvY2N1ciBpblxyXG4gICAgLy8gb25lIGZyYW1lLiBUaGlzIGlzIG9ubHkgcmVsZXZhbnQgaW5zaWRlIG9mIGFuaW1hdGUoKSwgYnV0IGEgcmVmZXJlbmNlIGlzXHJcbiAgICAvLyBoZWxkIGV4dGVybmFsbHkgc28gdGhhdCB0aGlzIHZhcmlhYmxlIGlzIG5vdCBtYXJrZWQgZm9yIGdhcmJhZ2VcclxuICAgIC8vIGNvbGxlY3Rpb24gZXZlcnkgdGltZSB0aGUgbWFpbiBsb29wIHJ1bnMuXHJcbiAgICB0aGlzLnBhbmljID0gZmFsc2U7XHJcbn07XHJcblxyXG5NYWluTG9vcC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYWluTG9vcDtcclxuXHJcbk1haW5Mb29wLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBzZXRNYXhGUFM6IGZ1bmN0aW9uIChmcHMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGZwcyA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkZyYW1lRGVsYXkgPSAxMDAwIC8gZnBzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TWF4RlBTOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAxMDAwIC8gdGhpcy5taW5GcmFtZURlbGF5O1xyXG4gICAgfSxcclxuXHJcbiAgICByZXNldEZyYW1lRGVsdGE6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG9sZEZyYW1lRGVsdGEgPSB0aGlzLmZyYW1lRGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGRGcmFtZURlbHRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgdGltZXN0YW1wID0gRE9NSGlnaFJlc1RpbWVTdGFtcFxyXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICAvLyBUaHJvdHRsZSB0aGUgZnJhbWUgcmF0ZSAoaWYgbWluRnJhbWVEZWxheSBpcyBzZXQgdG8gYSBub24temVybyB2YWx1ZSBieVxyXG4gICAgICAgIC8vIGBNYWluTG9vcC5zZXRNYXhBbGxvd2VkRlBTKClgKS5cclxuICAgICAgICBpZiAodGltZXN0YW1wIDwgdGhpcy5sYXN0RnJhbWVUaW1lTXMgKyB0aGlzLm1pbkZyYW1lRGVsYXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmcmFtZURlbHRhIGlzIHRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuXHJcbiAgICAgICAgLy8gc2ltdWxhdGVkIHlldC4gQWRkIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGZyYW1lLiBXZSBuZWVkIHRvIHRyYWNrIHRvdGFsXHJcbiAgICAgICAgLy8gbm90LXlldC1zaW11bGF0ZWQgdGltZSAoYXMgb3Bwb3NlZCB0byBqdXN0IHRoZSB0aW1lIGVsYXBzZWQgc2luY2UgdGhlXHJcbiAgICAgICAgLy8gbGFzdCBmcmFtZSkgYmVjYXVzZSBub3QgYWxsIGFjdHVhbGx5IGVsYXBzZWQgdGltZSBpcyBndWFyYW50ZWVkIHRvIGJlXHJcbiAgICAgICAgLy8gc2ltdWxhdGVkIGVhY2ggZnJhbWUuIFNlZSB0aGUgY29tbWVudHMgYmVsb3cgZm9yIGRldGFpbHMuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbHRhICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdEZyYW1lVGltZU1zO1xyXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICAvLyBSdW4gYW55IHVwZGF0ZXMgdGhhdCBhcmUgbm90IGRlcGVuZGVudCBvbiB0aW1lIGluIHRoZSBzaW11bGF0aW9uLlxyXG5cclxuICAgICAgICAvLyAgSGVyZSB3ZSdsbCBuZWVkIHRvIHJ1biB0aGluZ3MgbGlrZSB0d2Vlbi51cGRhdGUsIGlucHV0LnVwZGF0ZSwgZXRjLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmJlZ2luKHRpbWVzdGFtcCwgdGhpcy5mcmFtZURlbHRhKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBlc3RpbWF0ZSBvZiB0aGUgZnJhbWUgcmF0ZSwgYGZwc2AuIEV2ZXJ5IHNlY29uZCwgdGhlIG51bWJlclxyXG4gICAgICAgIC8vIG9mIGZyYW1lcyB0aGF0IG9jY3VycmVkIGluIHRoYXQgc2Vjb25kIGFyZSBpbmNsdWRlZCBpbiBhbiBleHBvbmVudGlhbFxyXG4gICAgICAgIC8vIG1vdmluZyBhdmVyYWdlIG9mIGFsbCBmcmFtZXMgcGVyIHNlY29uZCwgd2l0aCBhbiBhbHBoYSBvZiAwLjI1LiBUaGlzXHJcbiAgICAgICAgLy8gbWVhbnMgdGhhdCBtb3JlIHJlY2VudCBzZWNvbmRzIGFmZmVjdCB0aGUgZXN0aW1hdGVkIGZyYW1lIHJhdGUgbW9yZSB0aGFuXHJcbiAgICAgICAgLy8gb2xkZXIgc2Vjb25kcy5cclxuICAgICAgICBpZiAodGltZXN0YW1wID4gdGhpcy5sYXN0RnBzVXBkYXRlICsgMTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIG5ldyBleHBvbmVudGlhbCBtb3ZpbmcgYXZlcmFnZSB3aXRoIGFuIGFscGhhIG9mIDAuMjUuXHJcbiAgICAgICAgICAgIC8vIFVzaW5nIGNvbnN0YW50cyBpbmxpbmUgaXMgb2theSBoZXJlLlxyXG4gICAgICAgICAgICB0aGlzLmZwcyA9IDAuMjUgKiB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgKyAwLjc1ICogdGhpcy5mcHM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQrKztcclxuXHJcbiAgICAgICAgdGhpcy5udW1VcGRhdGVTdGVwcyA9IDA7XHJcblxyXG4gICAgICAgIHZhciBzdGVwID0gdGhpcy50aW1lc3RlcDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZnJhbWVEZWx0YSA+PSBzdGVwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy50aW1lc3RlcCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGUoc3RlcCwgdGhpcy5waHlzaWNzU3RlcCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBEZXYgbGV2ZWwgY2FsbGJhY2tcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoc3RlcCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lRGVsdGEgLT0gdGhpcy50aW1lc3RlcDtcclxuXHJcbiAgICAgICAgICAgIGlmICgrK3RoaXMubnVtVXBkYXRlU3RlcHMgPj0gMjQwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy5wcmVSZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlcy5zdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZXR0aW5ncy52aXNpYmxlICYmIHRoaXMuc3RhdGUuc3lzLmNvbG9yLmFscGhhICE9PSAwICYmIHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGF0ZSwgdGhpcy5mcmFtZURlbHRhIC8gdGhpcy50aW1lc3RlcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy8gUnVuIGFueSB1cGRhdGVzIHRoYXQgYXJlIG5vdCBkZXBlbmRlbnQgb24gdGltZSBpbiB0aGUgc2ltdWxhdGlvbi5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy5lbmQodGhpcy5mcHMsIHRoaXMucGFuaWMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmljID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RlcClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGUodGltZXN0ZXApO1xyXG5cclxuICAgICAgICB2YXIgYztcclxuICAgICAgICB2YXIgY2hpbGQ7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUodGltZXN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgRGV2IGxldmVsIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGltZXN0ZXApO1xyXG5cclxuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUodGltZXN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICovXHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYWluTG9vcDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9NYWluTG9vcC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogRGlydHkhIE1hbmFnZXJcclxuKlxyXG4qIEBjbGFzc1xyXG4qL1xyXG52YXIgVXBkYXRlTWFuYWdlciA9IGZ1bmN0aW9uIChzdGF0ZSlcclxue1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gICAgdGhpcy5saXN0ID0gW107XHJcblxyXG4gICAgLy8gdGhpcy5pID0gMTtcclxuXHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgdGhpcy5wcm9jZXNzZWQgPSAwO1xyXG59O1xyXG5cclxuVXBkYXRlTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBVcGRhdGVNYW5hZ2VyO1xyXG5cclxuVXBkYXRlTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaSwgJ1VwZGF0ZU1hbmFnZXIuc3RvcCcsIHRoaXMucHJvY2Vzc2VkKTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaSsrO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobGVuID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pLCAnVXBkYXRlTWFuYWdlci5zdGFydCcsIGxlbik7XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBCZWNhdXNlIGl0IG1heSBoYXZlIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgKGFzIGEgY2hpbGQgb2YgYW5vdGhlciBUcmFuc2Zvcm0gdGhhdCB3YXMgdXBkYXRlZClcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFtpXSAmJiB0aGlzLmxpc3RbaV0uX2RpcnR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICh0cmFuc2Zvcm0pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2godHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVwZGF0ZU1hbmFnZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMudmFsdWVzID0gW107XHJcbn07XHJcblxyXG5TZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2V0O1xyXG5cclxuU2V0LnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGU6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKHRoaXMudmFsdWVzW2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA+IC0xKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5pb246IGZ1bmN0aW9uIChzZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgc2V0LnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbnRlcnNlY3Q6IGZ1bmN0aW9uIChzZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc2V0LmNvbnRhaW5zKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NldDtcclxuICAgIH0sXHJcblxyXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gKHNldClcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghc2V0LmNvbnRhaW5zKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NldDtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTZXQucHJvdG90eXBlLCB7XHJcblxyXG4gICAgc2l6ZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdHJ1Y3RzL1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGQ6L3dhbXAvd3d3L3BoYXNlci92My9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGhhc2VyLmpzIiwicmVxdWlyZSgnLi9wb2x5ZmlsbHMnKTtcclxuXHJcbnZhciBib290ID0gcmVxdWlyZSgnLi9ib290Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJvb3Q7XHJcblxyXG5nbG9iYWwuUGhhc2VyID0gYm9vdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcGhhc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9