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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var CONST = {

    VERSION: '3.0.0',

    AUTO: 0,
    CANVAS: 1,
    WEBGL: 2,

    IMAGE: 20,

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
/* 1 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);

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
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Children: __webpack_require__(28),
    Color: __webpack_require__(29),
    Data: __webpack_require__(30),
    Transform: __webpack_require__(31)

};


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

var EventBinding = __webpack_require__(40);

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
    // console.log('FactoryContainer is alive');

    this.register = function (factory)
    {
        if (factories.hasOwnProperty(factory.KEY))
        {
            // console.log('Already registered', factory.KEY);

            return this.getType(factory.KEY);
        }

        // console.log('registering', factory.KEY);

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
/* 7 */
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
/* 8 */
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
    FILE_ERRORED: 10,   // file is being processed (onProcess callback)
    FILE_COMPLETE: 11,     // file has finished processing
    FILE_DESTROYED: 12     // file has been destroyed

};

module.exports = FILE_CONST;


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
var Browser = __webpack_require__(2);
var CanvasPool = __webpack_require__(12);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);

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
            // console.log('CanvasPool.create new');

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
            // console.log('CanvasPool.create existing');

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
                // console.log('CanvasPool.remove found and removed');
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(8);
var File = __webpack_require__(48);

var ImageFile = function (key, url, path)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.image\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.png';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'image', key, url, 'blob');
};

ImageFile.prototype = Object.create(File.prototype);
ImageFile.prototype.constructor = ImageFile;

ImageFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = new Image();

    this.data.crossOrigin = this.crossOrigin;

    var _this = this;

    this.data.onload = function ()
    {
        URL.revokeObjectURL(_this.data.src);

        _this.onComplete();

        callback(_this);
    };

    this.data.onerror = function ()
    {
        URL.revokeObjectURL(_this.data.src);

        _this.state = CONST.FILE_ERRORED;

        callback(_this);
    };

    this.data.src = URL.createObjectURL(this.xhrLoader.response);
};

module.exports = ImageFile;


/***/ },
/* 15 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
*
*
* @class BaseBatch
* @constructor
* @param {Phaser.Renderer.WebGL} renderer - The WebGL Renderer.
*/
var BaseBatch = function (manager, batchSize, vertSize)
{
    this.batchManager = manager;

    this.renderer = manager.renderer;

    this.gl = null;

    this.type = 0;

    //  Total number of objects we'll batch before flushing and rendering
    //  Integer
    this.maxSize = batchSize;

    //  Integer
    this.halfSize = Math.floor(this.maxSize / 2);

    //  Integer
    this.vertSize = vertSize;

    //  * 4 because there are 4 verts per batch entry (each corner of the quad)
    var numVerts = this.vertSize * this.maxSize * 4;

    //  ArrayBuffer
    //  This data is what changes every frame, populated by the game objects
    //  passed in. There are often views into it (position, color, etc)
    this.vertices = new ArrayBuffer(numVerts);

    //  Number of total quads allowed in the batch * 6
    //  6 because there are 2 triangles per quad, and each triangle has 3 indices
    //  This Typed Array is set in the build method of the extended class, and then
    //  doesn't change again (it's populated just once)
    this.indices = new Uint16Array(this.maxSize * 6);

    //  Populated by the flush operation when the batch is < 50% of the max size
    this.view = null;

    //  Integer
    this.size = 0;

    //  Boolean
    this.dirty = true;

    /**
     * The WebGL program.
     * @property program
     * @type WebGLProgram
     */
    this.program = null;

    /**
    * The Default Vertex shader source.
    *
    * @property defaultVertexSrc
    * @type Array
    */
    this.vertexSrc = [];

    /**
     * The fragment shader.
     * @property fragmentSrc
     * @type Array
    */
    this.fragmentSrc = [];

    //   WebGLBuffer
    this.indexBuffer = null;

    //   WebGLBuffer
    this.vertexBuffer = null;

    //  Internal index count
    //  Integer
    this._i = 0;
};

BaseBatch.prototype.constructor = BaseBatch;

BaseBatch.prototype = {

    start: function ()
    {
        this._i = 0;

        this.size = 0;

        //  We only need to do this if this batch isn't the current one

        if (this.renderer.shaderManager.setShader(this.program))
        {
            this.bindShader();
        }

        // if (this.dirty || force)
        // {
            // this.bindShader();
            // this.dirty = false;
        // }
    },

    stop: function ()
    {
        this.flush();
    },

    //  Can be overridden by custom Batch processors
    flush: function ()
    {
        if (this.size === 0)
        {
            return;
        }

        var gl = this.gl;

        //  Upload the vertex data to the GPU - is this cheaper (overall) than creating a new TypedArray view?
        //  The tradeoff is sending 224KB of data to the GPU every frame, even if most of it is empty should the
        //  batch be only slightly populated, vs. the creation of a new TypedArray view and its corresponding gc every frame.

        if (this.size > this.halfSize)
        {
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
        }
        else
        {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

            this.view = this.positions.subarray(0, this.size * this.vertSize);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.view);
        }

        gl.drawElements(gl.TRIANGLES, this.size * 6, gl.UNSIGNED_SHORT, 0);

        this.renderer.drawCount++;

        //  Reset the batch
        this.size = 0;

        this._i = 0;
    }

};

module.exports = BaseBatch;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(0);

var CreateEmptyTexture = function (gl, width, height, scaleMode, textureIndex)
{
    var texture = gl.createTexture();
    var glScaleMode = (scaleMode === CONST.scaleModes.LINEAR) ? gl.LINEAR : gl.NEAREST;

    gl.activeTexture(gl.TEXTURE0 + textureIndex);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    //  We'll read from this texture, but it won't have mipmaps, so turn them off:
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, glScaleMode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, glScaleMode);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    return texture;
};

module.exports = CreateEmptyTexture;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(0);
var GetObjectValue = __webpack_require__(9);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(5);
var GameObjectFactory = __webpack_require__(73);
// var GameObjectCreator = require('./systems/GameObjectCreator');
var Loader = __webpack_require__(74);
var MainLoop = __webpack_require__(75);
var UpdateManager = __webpack_require__(76);
var Component = __webpack_require__(3);
var Camera = __webpack_require__(26);

var Systems = function (state, config)
{
    this.state = state;

    this.config = config;

    this.events;

    //  Reference to the global Game level TextureManager.
    this.textures;

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

        this.textures = this.state.game.textures;

        //  All of the systems can use the State level EventDispatcher, or their own
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
        this.camera = new Camera(this.state, 0, 0, 800, 600);
        this.children = new Component.Children(this.state);
        this.color = new Component.Color(this.state);
        this.data = new Component.Data(this.state);
        this.transform = this.camera.transform;

        //  Boot

        // this.input.init();

        //  Defaults

        this.state.events = this.events;
        this.state.add = this.add;
        this.state.load = this.load;
        this.state.children = this.children;
        this.state.color = this.color;
        this.state.data = this.data;
        this.state.camera = this.camera;
        this.state.transform = this.camera.transform;



        // this.state.input = this.input;
        // this.state.state = this.state.game.state;

        //  Here we can check which Systems to install as properties into the State object
        //  (default systems always exist in here, regardless)
    },

    begin: function (timestamp, frameDelta)
    {
    },

    update: function (timestep, physicsStep)
    {
    },

    preRender: function ()
    {
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
/* 19 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(25),

    Event: __webpack_require__(4),
    EventDispatcher: __webpack_require__(5),

    Loader: {
        ImageFile: __webpack_require__(14)
    }

};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(62);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(61);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var NOOP = __webpack_require__(19);
var GetObjectValue = __webpack_require__(9);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CanvasPool = __webpack_require__(12);
var Features = __webpack_require__(11);
var WebGLRenderer = __webpack_require__(67);

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
        game.renderer = new WebGLRenderer(game);
        game.context = null;
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CHECKSUM = __webpack_require__(27);

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(36);
var Config = __webpack_require__(22);
var DebugHeader = __webpack_require__(24);
var CreateRenderer = __webpack_require__(23);
var RequestAnimationFrame = __webpack_require__(39);
var DOMContentLoaded = __webpack_require__(38);
var RandomDataGenerator = __webpack_require__(56);
var StateManager = __webpack_require__(72);
var FactoryContainer = __webpack_require__(6);
var GameObjects = __webpack_require__(46);
var TextureManager = __webpack_require__ (80);
var AddToDOM = __webpack_require__(37);

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
    this.textures = new TextureManager(this);

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

        AddToDOM(this.canvas, this.config.parent);

        this.state.boot();

        this.isRunning = true;

        this.config.postBoot();

        this.raf.start();
    },

    //  timestamp = DOMHighResTimeStamp
    update: function (timestamp)
    {
        this.state.step(timestamp);
    }

};

module.exports = Game;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Component = __webpack_require__(3);

/**
* A Camera is your view into the game world. It has a position and size and renders only those objects within its field of view.
* The game automatically creates a single Stage sized camera on boot. Move the camera around the world with Phaser.Camera.x/y
*
* @class Phaser.Camera
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
* @param {number} id - Not being used at the moment, will be when Phaser supports multiple camera
* @param {number} x - Position of the camera on the X axis
* @param {number} y - Position of the camera on the Y axis
* @param {number} width - The width of the view rectangle
* @param {number} height - The height of the view rectangle
*/
var Camera = function (state, x, y, viewportWidth, viewportHeight)
{
    /**
     * The State that this Camera belongs to. A Camera can only belong to one State, and a State only
     * has one Camera.
    * @property {Phaser.State} state
    */
    this.state = state;

    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    this.game = state.game;

    this.viewportWidth = viewportWidth;

    this.viewportHeight = viewportHeight;

    this.transform = new Component.Transform(this, x, y);

    /**
    * The Camera is bound to this Rectangle and cannot move outside of it. By default it is enabled and set to the size of the World.
    * The Rectangle can be located anywhere in the world and updated as often as you like. If you don't wish the Camera to be bound
    * at all then set this to null. The values can be anything and are in World coordinates, with 0,0 being the top-left of the world.
    *
    * @property {Phaser.Rectangle} bounds - The Rectangle in which the Camera is bounded. Set to null to allow for movement anywhere.
    */
    // this.bounds = new Phaser.Rectangle(x, y, width, height);

    // this.bounds = new Phaser.Circle(x, y)

    /**
    * @property {boolean} atLimit - Whether this camera is flush with the World Bounds or not.
    */
    this.atLimit = { x: false, y: false };
};

Camera.prototype.constructor = Camera;

Camera.prototype = {

    /**
    * Method called to ensure the camera doesn't venture outside of the game world.
    * Called automatically by Camera.update.
    *
    * @method Phaser.Camera#checkBounds
    * @protected
    */
    checkBounds: function ()
    {
        this.atLimit.x = false;
        this.atLimit.y = false;

        // var vx = this.view.x + this._shake.x;
        // var vw = this.view.right + this._shake.x;
        // var vy = this.view.y + this._shake.y;
        // var vh = this.view.bottom + this._shake.y;

        var vx = this.x;
        var vw = this.x + this.viewportWidth;
        var vy = this.y;
        var vh = this.y + this.viewportHeight;

        //  Make sure we didn't go outside the cameras bounds
        if (vx <= this.bounds.x * this.scale.x)
        {
            this.atLimit.x = true;
            this.view.x = this.bounds.x * this.scale.x;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.x = 0;
            }
        }

        if (vw >= this.bounds.right * this.scale.x)
        {
            this.atLimit.x = true;
            this.view.x = (this.bounds.right * this.scale.x) - this.width;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.x = 0;
            }
        }

        if (vy <= this.bounds.top * this.scale.y)
        {
            this.atLimit.y = true;
            this.view.y = this.bounds.top * this.scale.y;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.y = 0;
            }
        }

        if (vh >= this.bounds.bottom * this.scale.y)
        {
            this.atLimit.y = true;
            this.view.y = (this.bounds.bottom * this.scale.y) - this.height;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.y = 0;
            }
        }

    }

};

Object.defineProperties(Camera.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX;
        },

        set: function (value)
        {
            this.transform._posX = value;
            this.transform.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY;
        },

        set: function (value)
        {
            this.transform._posY = value;
            this.transform.dirty = true;
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX + (this.viewportWidth * this.transform._scaleX);
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY + (this.viewportHeight * this.transform._scaleY);
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY;
        },

        set: function (value)
        {
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotX;
        },

        set: function (value)
        {
            this.transform._pivotX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotY;
        },

        set: function (value)
        {
            this.transform._pivotY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return Phaser.Math.wrapAngle(this.rotation * Phaser.Math.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = Phaser.Math.wrapAngle(value) * Phaser.Math.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this.transform._rotation;
        },

        set: function (value)
        {
            if (this.transform._rotation === value)
            {
                return;
            }

            this.transform._rotation = value;
            this.transform.dirty = true;

            if (this.transform._rotation % Phaser.Math.PI2)
            {
                this.transform.cache.sr = Math.sin(this.transform._rotation);
                this.transform.cache.cr = Math.cos(this.transform._rotation);
                this.transform.updateCache();
                this.transform.hasLocalRotation = true;
            }
            else
            {
                this.transform.hasLocalRotation = false;
            }
        }

    }

});

module.exports = Camera;


/***/ },
/* 27 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '18d69660-bc2f-11e6-9837-952b15df5558'
};
module.exports = CHECKSUM;

/***/ },
/* 28 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Children Component features quick access to Group sorting related methods.
*
* @class
*/
var Children = function (gameObject)
{
    this.gameObject = gameObject;

    //  The objects that belong to this collection.
    //  The equivalent of the old `Sprite.children` array.
    this.list = [];

    this.position = 0;
};

Children.prototype.constructor = Children;

Children.prototype = {

    add: function (child, skipTransform)
    {
        if (skipTransform === undefined) { skipTransform = false; }

        // console.log('--->', this.gameObject.name, 'adds new child:', child.name);

        if (child.parent === this)
        {
            // console.log('Children.add 1');
            return child;
        }
        else if (child.parent)
        {
            // console.log('Children.add 2');
            child.parent.children.remove(child);
        }

        child.parent = this.gameObject;

        this.list.push(child);

        if (!skipTransform && this.gameObject.transform && child.transform)
        {
            // console.log(this.gameObject.name, 'adds transform from', child.name);
            this.gameObject.transform.add(child.transform);
        }

        // console.log('<--- end');

        return child;
    },

    addAt: function (child, index, skipTransform)
    {
        if (index === undefined) { index = 0; }
        if (skipTransform === undefined) { skipTransform = false; }

        if (this.list.length === 0)
        {
            return this.add(child);
        }

        if (index >= 0 && index <= this.list.length)
        {
            if (child.parent)
            {
                child.parent.children.remove(child);
            }

            child.parent = this;

            this.list.splice(index, 0, child);
        }

        if (!skipTransform && this.gameObject.transform && child.transform)
        {
            this.gameObject.transform.add(child.transform);
        }

        return child;

    },

    addMultiple: function (children, skipTransform)
    {
        if (Array.isArray(children))
        {
            for (var i = 0; i < children.length; i++)
            {
                this.add(children[i], skipTransform);
            }
        }

        return children;
    },

    getAt: function (index)
    {
        return this.list[index];
    },

    getIndex: function (child)
    {
        //  Return -1 if given child isn't a child of this parent
        return this.list.indexOf(child);
    },

    /**
    * Gets the first item from the set based on the property strictly equaling the value given.
    * Returns null if not found.
    *
    * @method Phaser.ArraySet#getByKey
    * @param {string} property - The property to check against the value.
    * @param {any} value - The value to check if the property strictly equals.
    * @return {any} The item that was found, or null if nothing matched.
    */
    getByKey: function (property, value)
    {
        for (var i = 0; i < this.list.length; i++)
        {
            if (this.list[i][property] === value)
            {
                return this.list[i];
            }
        }

        return null;
    },

    /**
    * Searches the Group for the first instance of a child with the `name`
    * property matching the given argument. Should more than one child have
    * the same name only the first instance is returned.
    *
    * @method Phaser.Group#getByName
    * @param {string} name - The name to search for.
    * @return {any} The first child with a matching name, or null if none were found.
    */
    getByName: function (name)
    {
        return this.getByKey('name', name);
    },

    /**
    * Returns a random child from the group.
    *
    * @method Phaser.Group#getRandom
    * @param {integer} [startIndex=0] - Offset from the front of the group (lowest child).
    * @param {integer} [length=(to top)] - Restriction on the number of values you want to randomly select from.
    * @return {any} A random child of this Group.
    */
    getRandom: function (startIndex, length)
    {
        if (startIndex === undefined) { startIndex = 0; }
        if (length === undefined) { length = this.list.length; }

        if (length === 0 || length > this.list.length)
        {
            return null;
        }

        var randomIndex = startIndex + Math.floor(Math.random() * length);

        return this.list[randomIndex];
    },

    /**
    * Returns all children in this Group.
    *
    * You can optionally specify a matching criteria using the `property` and `value` arguments.
    *
    * For example: `getAll('exists', true)` would return only children that have their exists property set.
    *
    * Optionally you can specify a start and end index. For example if this Group had 100 children,
    * and you set `startIndex` to 0 and `endIndex` to 50, it would return matches from only
    * the first 50 children in the Group.
    *
    * @method Phaser.Group#getAll
    * @param {string} [property] - An optional property to test against the value argument.
    * @param {any} [value] - If property is set then Child.property must strictly equal this value to be included in the results.
    * @param {integer} [startIndex=0] - The first child index to start the search from.
    * @param {integer} [endIndex] - The last child index to search up until.
    * @return {any} A random existing child of this Group.
    */
    getAll: function (property, value, startIndex, endIndex)
    {
        if (startIndex === undefined) { startIndex = 0; }
        if (endIndex === undefined) { endIndex = this.list.length; }

        var output = [];

        for (var i = startIndex; i < endIndex; i++)
        {
            var child = this.list[i];

            if (property)
            {
                if (child[property] === value)
                {
                    output.push(child);
                }
            }
            else
            {
                output.push(child);
            }
        }

        return output;
    },

    swap: function (child1, child2)
    {
        if (child1 === child2)
        {
            return;
        }

        var index1 = this.getIndex(child1);
        var index2 = this.getIndex(child2);

        if (index1 < 0 || index2 < 0)
        {
            throw new Error('Children.swap: Supplied objects must be children of the same parent');
        }

        this.list[index1] = child2;
        this.list[index2] = child1;
    },

    //   was setIndex
    moveTo: function (child, index)
    {
        var currentIndex = this.getIndex(child);

        if (currentIndex === -1 || index < 0 || index >= this.list.length)
        {
            throw new Error('Children.moveTo: The supplied index is out of bounds');
        }

        //  Remove
        this.list.splice(currentIndex, 1);

        //  Add in new location
        this.list.splice(index, 0, child);

        return child;
    },

    remove: function (child, skipTransform)
    {
        var index = this.list.indexOf(child);

        if (index !== -1)
        {
            child.parent = undefined;

            this.list.splice(index, 1);

            if (!skipTransform && this.gameObject.transform && child.transform)
            {
                this.gameObject.transform.remove(child.transform);
            }
        }
        
        return child;
    },

    removeAt: function (index, skipTransform)
    {
        var child = this.list[index];

        if (child)
        {
            child.parent = undefined;

            this.children.splice(index, 1);

            if (!skipTransform && this.gameObject.transform && child.transform)
            {
                this.gameObject.transform.remove(child.transform);
            }
        }

        return child;
    },

    removeBetween: function (beginIndex, endIndex)
    {
        if (beginIndex === undefined) { beginIndex = 0; }
        if (endIndex === undefined) { endIndex = this.list.length; }

        var range = endIndex - beginIndex;

        if (range > 0 && range <= endIndex)
        {
            var removed = this.list.splice(beginIndex, range);

            for (var i = 0; i < removed.length; i++)
            {
                removed[i].parent = undefined;
            }

            return removed;
        }
        else if (range === 0 && this.list.length === 0)
        {
            return [];
        }
        else
        {
            throw new Error('Children.removeBetween: Range Error, numeric values are outside the acceptable range');
        }
    },

    /**
    * Removes all the items.
    *
    * @method Phaser.ArraySet#removeAll
    */
    removeAll: function ()
    {
        var i = this.list.length;

        while (i--)
        {
            this.remove(this.list[i]);
        }

        return this;
    },

    //  Check to see if the given child is a child of this object, at any depth (recursively scans up the tree)
    contains: function (child)
    {
        if (!child)
        {
            return false;
        }
        else if (child.parent === this)
        {
            return true;
        }
        else
        {
            return this.contains(child.parent);
        }
    },

    /**
    * Brings the given child to the top of this group so it renders above all other children.
    *
    * @method Phaser.Group#bringToTop
    * @param {any} child - The child to bring to the top of this group.
    * @return {any} The child that was moved.
    */
    bringToTop: function (child)
    {
        if (child.parent === this && this.getIndex(child) < this.list.length)
        {
            this.remove(child);
            this.add(child);
        }

        return child;
    },

    /**
    * Sends the given child to the bottom of this group so it renders below all other children.
    *
    * @method Phaser.Group#sendToBack
    * @param {any} child - The child to send to the bottom of this group.
    * @return {any} The child that was moved.
    */
    sendToBack: function (child)
    {
        if (child.parent === this && this.getIndex(child) > 0)
        {
            this.remove(child);
            this.addAt(child, 0);
        }

        return child;
    },

    /**
    * Moves the given child up one place in this group unless it's already at the top.
    *
    * @method Phaser.Group#moveUp
    * @param {any} child - The child to move up in the group.
    * @return {any} The child that was moved.
    */
    moveUp: function (child)
    {
        var a = this.getIndex(child);

        if (a !== -1 && a < this.list.length - 1)
        {
            var b = this.getAt(a + 1);

            if (b)
            {
                this.swap(child, b);
            }
        }

        return child;
    },

    /**
    * Moves the given child down one place in this group unless it's already at the bottom.
    *
    * @method Phaser.Group#moveDown
    * @param {any} child - The child to move down in the group.
    * @return {any} The child that was moved.
    */
    moveDown: function (child)
    {
        var a = this.getIndex(child);

        if (a > 0)
        {
            var b = this.getAt(a - 1);

            if (b)
            {
                this.swap(child, b);
            }
        }

        return child;
    },

    /**
    * Reverses all children in this group.
    *
    * This operation applies only to immediate children and does not propagate to subgroups.
    *
    * @method Phaser.Group#reverse
    */
    reverse: function ()
    {
        this.list.reverse();

        return this;
    },

    shuffle: function ()
    {
        for (var i = this.list.length - 1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }

        return this;
    },

    /**
    * Replaces a child of this Group with the given newChild. The newChild cannot be a member of this Group.
    *
    * If `Group.enableBody` is set, then a physics body will be created on the object, so long as one does not already exist.
    *
    * If `Group.inputEnableChildren` is set, then an Input Handler will be created on the object, so long as one does not already exist.
    *
    * @method Phaser.Group#replace
    * @param {any} oldChild - The child in this group that will be replaced.
    * @param {any} newChild - The child to be inserted into this group.
    * @return {any} Returns the oldChild that was replaced within this group.
    */
    replace: function (oldChild, newChild, skipTransform)
    {
        var index = this.getIndex(oldChild);

        if (index !== -1)
        {
            if (newChild.parent)
            {
                newChild.parent.remove(newChild, skipTransform);
            }

            this.remove(oldChild, skipTransform);

            this.addAt(newChild, index, skipTransform);

            return oldChild;
        }
    },

    //  Swaps a child from another parent, with one from this parent.
    //  child1 = the child of THIS parent
    //  child2 = the child of the OTHER parent
    exchange: function (child1, child2, skipTransform)
    {
        if (child1 === child2 || child1.parent === child2.parent)
        {
            return;
        }

        var parentChildren = child2.parent.children;

        var index1 = this.getIndex(child1);
        var index2 = parentChildren.getIndex(child2);

        if (index1 < 0 || index2 < 0)
        {
            throw new Error('Children.swap: Supplied objects must be children of parents');
        }

        this.remove(child1, skipTransform);

        parentChildren.remove(child2, skipTransform);

        this.addAt(child2, index1, skipTransform);

        parentChildren.addAt(child1, index2, skipTransform);
    },

    /**
    * Checks for the item within this list.
    *
    * @method Phaser.ArraySet#exists
    * @param {any} item - The element to get the list index for.
    * @return {boolean} True if the item is found in the list, otherwise false.
    */
    exists: function (child)
    {
        return (this.list.indexOf(child) > -1);
    },

    /**
    * Sets the property `key` to the given value on all members of this list.
    *
    * @method Phaser.ArraySet#setAll
    * @param {any} key - The property of the item to set.
    * @param {any} value - The value to set the property to.
    */
    setAll: function (key, value)
    {
        for (var i = 0; i < this.list.length; i++)
        {
            if (this.list[i])
            {
                this.list[i][key] = value;
            }
        }
    },

    /**
    * Passes all children to the given callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [thisArg] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the child.
    */
    each: function (callback, thisArg)
    {
        var args = [ null ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (i = 0; i < this.list.length; i++)
        {
            args[0] = this.list[i];
            callback.apply(thisArg, args);
        }
    },

    /**
    * Moves all children from this Group to the Group given.
    *
    * @method Phaser.Group#moveAll
    * @param {Phaser.Group} group - The new Group to which the children will be moved to.
    * @param {boolean} [silent=false] - If true the children will not dispatch the `onAddedToGroup` event for the new Group.
    * @return {Phaser.Group} The Group to which all the children were moved.
    */
    reparent: function (newParent)
    {
        if (newParent !== this)
        {
            for (var i = 0; i < this.list.length; i++)
            {
                var child = this.remove(this.list[i]);

                newParent.add(child);
            }
        }

        return newParent;
    }

};

Object.defineProperties(Children.prototype, {

    /**
    * Returns the first item and resets the cursor to the start.
    *
    * @name Phaser.ArraySet#first
    * @property {any} first
    */
    length: {

        enumerable: true,

        get: function ()
        {
            return this.list.length;
        }

    },

    /**
    * Returns the first item and resets the cursor to the start.
    *
    * @name Phaser.ArraySet#first
    * @property {any} first
    */
    first: {

        enumerable: true,

        get: function ()
        {
            this.position = 0;

            if (this.list.length > 0)
            {
                return this.list[0];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the last item and resets the cursor to the end.
    *
    * @name Phaser.ArraySet#last
    * @property {any} last
    */
    last: {

        enumerable: true,

        get: function ()
        {
            if (this.list.length > 0)
            {
                this.position = this.list.length - 1;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the the next item (based on the cursor) and advances the cursor.
    *
    * @name Phaser.ArraySet#next
    * @property {any} next
    */
    next: {

        enumerable: true,

        get: function ()
        {
            if (this.position < this.list.length)
            {
                this.position++;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the the previous item (based on the cursor) and retreats the cursor.
    *
    * @name Phaser.ArraySet#previous
    * @property {any} previous
    */
    previous: {

        enumerable: true,

        get: function ()
        {
            if (this.position > 0)
            {
                this.position--;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    }

});

module.exports = Children;


/***/ },
/* 29 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Color Component allows you to control the alpha, blend mode, tint and background color
* of a Game Object.
*
* @class
*/
var Color = function (gameObject)
{
    this.gameObject = gameObject;

    this.state = gameObject.state;

    this._dirty = false;

    this._alpha = 1;
    this._worldAlpha = 1;

    this._blendMode = 0;

    this._tint = { topLeft: 0xffffff, topRight: 0xffffff, bottomLeft: 0xffffff, bottomRight: 0xffffff };
    this._glTint = { topLeft: 16777215, topRight: 16777215, bottomLeft: 16777215, bottomRight: 16777215 };
    this._hasTint = false;

    //  Between 0 and 255
    this._r = 0;
    this._g = 0;
    this._b = 0;

    //  Between 0 and 1
    this._a = 1;

    //  String version of RGBA
    this._rgba = '';

    //  32-bit version of ARGB
    this._glBg = 0;

    this._hasBackground = false;
};

Color.prototype.constructor = Color;

Color.prototype = {

    setBackground: function (red, green, blue, alpha)
    {
        if (red === undefined)
        {
            this._hasBackground = false;
            this._glBg = 0;
        }
        else
        {
            this._hasBackground = true;
            this._r = red;
            this._g = (green) ? green : 0;
            this._b = (blue) ? blue : 0;
            this._a = (alpha) ? alpha : 1;
        }

        this.dirty = true;
    },

    clearTint: function ()
    {
        this.setTint(0xffffff);

        this._hasTint = false;
    },

    setTint: function (topLeft, topRight, bottomLeft, bottomRight)
    {
        if (topRight === undefined)
        {
            topRight = topLeft;
            bottomLeft = topLeft;
            bottomRight = topLeft;
        }

        this.tintTopLeft = topLeft;
        this.tintTopRight = topRight;
        this.tintBottomLeft = bottomLeft;
        this.tintBottomRight = bottomRight;

        this._hasTint = true;

        this.dirty = true;
    },

    //  Called by the Dirty Manager
    update: function ()
    {
        this._dirty = false;

        if (this._hasBackground)
        {
            this._rgba = 'rgba(' + this._r + ',' + this._g + ',' + this._b + ',' + this._a + ')';
            this._glBg = this.getColor32(this._r, this._g, this._b, this._a);
        }

        //  Tint mults?

    },

    getColor: function (value)
    {
        return (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
    },

    getColor32: function (r, g, b, a)
    {
        a *= 255;

        return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
    },

    destroy: function ()
    {
        this.gameObject = null;
        this.state = null;
        this._tint = [];
    }

};

Object.defineProperties(Color.prototype, {

    dirty: {

        enumerable: true,

        get: function ()
        {
            return this._dirty;
        },

        set: function (value)
        {
            if (value)
            {
                if (!this._dirty)
                {
                    this.state.sys.updates.add(this);
                }

                this._dirty = true;
            }
            else
            {
                this._dirty = false;
            }
        }

    },

    tintTopLeft: {

        enumerable: true,

        get: function ()
        {
            return this._tint.topLeft;
        },

        set: function (value)
        {
            this._tint.topLeft = value;
            this._glTint.topLeft = this.getColor(value);
            this.dirty = true;
        }

    },

    tintTopRight: {

        enumerable: true,

        get: function ()
        {
            return this._tint.topRight;
        },

        set: function (value)
        {
            this._tint.topRight = value;
            this._glTint.topRight = this.getColor(value);
            this.dirty = true;
        }

    },

    tintBottomLeft: {

        enumerable: true,

        get: function ()
        {
            return this._tint.bottomLeft;
        },

        set: function (value)
        {
            this._tint.bottomLeft = value;
            this._glTint.bottomLeft = this.getColor(value);
            this.dirty = true;
        }

    },

    tintBottomRight: {

        enumerable: true,

        get: function ()
        {
            return this._tint.bottomRight;
        },

        set: function (value)
        {
            this._tint.bottomRight = value;
            this._glTint.bottomRight = this.getColor(value);
            this.dirty = true;
        }

    },

    tint: {

        enumerable: true,

        get: function ()
        {
            return this._tint;
        },

        set: function (value)
        {
            this.setTint(value, value, value, value);
        }

    },

    alpha: {

        enumerable: true,

        get: function ()
        {
            return this._alpha;
        },

        set: function (value)
        {
            if (value !== this._alpha)
            {
                this._alpha = value;
                this.dirty = true;
            }
        }

    },

    blendMode: {

        enumerable: true,

        get: function ()
        {
            return this._blendMode;
        },

        set: function (value)
        {
            if (value !== this._blendMode && value >= 0 && value <= 16)
            {
                this._blendMode = value;
                this.dirty = true;
            }
        }

    },

    worldAlpha: {

        enumerable: true,

        get: function ()
        {
            return this._worldAlpha;
        },

        set: function (value)
        {
            this._worldAlpha = this._alpha * value;
        }

    },

    backgroundAlpha: {

        enumerable: true,

        get: function ()
        {
            return this._a;
        },

        set: function (value)
        {
            if (value !== this._a)
            {
                this._a = value;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    red: {

        enumerable: true,

        get: function ()
        {
            return this._r;
        },

        set: function (value)
        {
            if (value !== this._r)
            {
                this._r = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    green: {

        enumerable: true,

        get: function ()
        {
            return this._g;
        },

        set: function (value)
        {
            if (value !== this._g)
            {
                this._g = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    blue: {

        enumerable: true,

        get: function ()
        {
            return this._b;
        },

        set: function (value)
        {
            if (value !== this._b)
            {
                this._b = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    }

});

module.exports = Color;


/***/ },
/* 30 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Data Component features a means to store pieces of data specific to a Game Object,
* search it, query it, and retrieve it.
*
* @class
*/
var Data = function (parent)
{
    this.parent = parent;

    this.list = {};

    this._beforeCallbacks = {};
    this._afterCallbacks = {};

    this._frozen = false;
};

Data.prototype.constructor = Data;

Data.prototype = {

    //  Retrieves the value for the given key, or undefined if it doesn't exist.
    get: function (key)
    {
        return this.list[key];
    },

    getAll: function ()
    {
        var results = {};

        for (var key in this.list)
        {
            results[key] = this.list[key];
        }

        return results;
    },

    query: function (search)
    {
        var results = {};

        for (var key in this.list)
        {
            if (key.match(search))
            {
                results[key] = this.list[key];
            }
        }

        return results;
    },

    set: function (key, data)
    {
        if (this._frozen)
        {
            return this;
        }

        var listener;
        var result;

        //  If there is a 'before' callback, then check it for a result
        if (this._beforeCallbacks.hasOwnProperty(key))
        {
            listener = this._beforeCallbacks[key];

            result = listener.callback.call(listener.scope, this.parent, key, data);

            if (result !== undefined)
            {
                data = result;
            }
        }

        this.list[key] = data;

        //  If there is a 'after' callback, then check it for a result
        if (this._afterCallbacks.hasOwnProperty(key))
        {
            listener = this._afterCallbacks[key];

            result = listener.callback.call(listener.scope, this.parent, key, data);

            if (result !== undefined)
            {
                this.list[key] = result;
            }
        }

        return this;
    },

    before: function (key, callback, scope)
    {
        if (callback === undefined)
        {
            //  Remove entry
            delete this._beforeCallbacks[key];
        }
        else
        {
            this._beforeCallbacks[key] = { callback: callback, scope: scope };
        }
    },

    after: function (key, callback, scope)
    {
        if (callback === undefined)
        {
            //  Remove entry
            delete this._afterCallbacks[key];
        }
        else
        {
            this._afterCallbacks[key] = { callback: callback, scope: scope };
        }
    },

    /**
    * Passes all data entries to the given callback. Stores the result of the callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [scope] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the game object, key, and data.
    */
    each: function (callback, scope)
    {
        var args = [ this.parent, null, undefined ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (var key in this.list)
        {
            args[1] = key;
            args[2] = this.list[key];

            callback.apply(scope, args);
        }
    },

    merge: function (data, overwrite)
    {
        if (overwrite === undefined) { overwrite = true; }

        //  Merge data from another component into this one
        for (var key in data)
        {
            if (overwrite || (!overwrite && !this.has(key)))
            {
                this.list[key] = data;
            }
        }
    },

    remove: function (key)
    {
        if (!this._frozen && this.has(key))
        {
            delete this.list[key];

            this.removeListeners(key);
        }
    },

    removeListeners: function (key)
    {
        if (this._beforeCallbacks.hasOwnProperty(key))
        {
            delete this._beforeCallbacks[key];
        }

        if (this._afterCallbacks.hasOwnProperty(key))
        {
            delete this._afterCallbacks[key];
        }
    },

    //  Gets the data associated with the given 'key', deletes it from this Data store, then returns it.
    pop: function (key)
    {
        var data = undefined;

        if (!this._frozen && this.has(key))
        {
            data = this.list[key];

            delete this.list[key];

            this.removeListeners(key);
        }

        return data;
    },

    has: function (key)
    {
        return this.list.hasOwnProperty(key);
    },

    reset: function ()
    {
        for (var key in this.list)
        {
            delete this.list[key];
        }

        for (key in this._beforeCallbacks)
        {
            delete this._beforeCallbacks[key];
        }

        for (key in this._afterCallbacks)
        {
            delete this._afterCallbacks[key];
        }

        this._frozen = false;
    }

};

Object.defineProperties(Data.prototype, {

    /**
    * Freeze this Data component, so no changes can be written to it.
    *
    * @name freeze
    * @property {boolean} freeze
    */
    freeze: {

        enumerable: true,

        get: function ()
        {
            return this._frozen;
        },

        set: function (value)
        {
            this._frozen = (value) ? true : false;
        }

    },

    count: {

        enumerable: true,

        get: function ()
        {
            var i = 0;

            for (var key in this.list)
            {
                if (this.list[key] !== undefined)
                {
                    i++;
                }
            }

            return i;
        }

    }

});

module.exports = Data;


/***/ },
/* 31 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* 2D Transformation Component.
*
* @class
*/
var Transform = function (gameObject, x, y, scaleX, scaleY)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    if (scaleX === undefined) { scaleX = 1; }
    if (scaleY === undefined) { scaleY = 1; }

    this.gameObject = gameObject;

    this.state = (gameObject.state) ? gameObject.state : gameObject.parent.state;

    this.game = this.state.game;

    //  Local Transform
    //  a = scale X
    //  b = shear Y
    //  c = shear X
    //  d = scale Y
    //  tx / ty = translation
    // this.local = { a: scaleX, b: 0, c: 0, d: scaleY, tx: x, ty: y };

    //  World Transform
    this.world = { a: scaleX, b: 0, c: 0, d: scaleY, tx: x, ty: y };

    this.old = { a: scaleX, b: 0, c: 0, d: scaleY, tx: x, ty: y };

    //  Cached Transform Calculations
    this.cache = { a: 1, b: 0, c: 0, d: 1, sr: 0, cr: 0 };

    //  GL Vertex Data
    this.glVertextData = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 };

    this.immediate = false;

    this.interpolate = false;

    this.hasLocalRotation = false;

    //  Private value holders, accessed via the getters and setters
    this._posX = x;
    this._posY = y;
    this._scaleX = scaleX;
    this._scaleY = scaleY;
    this._rotation = 0;
    this._pivotX = 0;
    this._pivotY = 0;
    this._anchorX = 0;
    this._anchorY = 0;

    this._worldRotation = 0;
    this._worldScaleX = scaleX;
    this._worldScaleY = scaleY;

    this._dirty = true;
    this._dirtyVertex = true;

    this.state.sys.updates.add(this);

    //  The parent Transform (NOT the parent GameObject, although very often they are related)
    this.parent = null;

    //  Any child Transforms of this one - note that they don't have to belong to Game Objects
    //  that are children of the owner of this Transform
    this.children = [];
};

Transform.prototype.constructor = Transform;

Transform.prototype = {

    add: function (child)
    {
        return this.addAt(child, this.children.length);
    },

    addAt: function (child, index)
    {
        //  Invalid child?
        if (child === this || child.parent === this || index < 0 || index > this.children.length)
        {
            console.log('Invalid child');
            return child;
        }

        //  Child already parented? Remove it
        if (child.parent)
        {
            child.parent.remove(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        this.dirty = true;

        this.updateAncestors();

        return child;
    },

    remove: function (child)
    {
        //  Invalid child?
        if (child === this || child.parent !== this)
        {
            return child;
        }

        var index = this.children.indexOf(child);

        if (index !== -1)
        {
            return this.removeAt(index);
        }
    },

    removeAt: function (index)
    {
        //  Valid index?
        if (index >= 0 && index < this.children.length)
        {
            var child = this.children.splice(index, 1);

            if (child[0])
            {
                child[0].parent = null;

                return child[0];
            }
        }
    },

    enableInterpolation: function ()
    {
        this.interpolate = true;

        this.syncInterpolation();
    },

    syncInterpolation: function ()
    {
        this._dirty = true;

        this.update();

        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;
    },

    disableInterpolation: function ()
    {
        this.interpolate = false;
    },

    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._posX = x;
        this._posY = y;

        return this.update();
    },

    setScale: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._scaleX = x;
        this._scaleY = y;
        this.updateCache();

        return this.update();
    },

    setPivot: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._pivotX = x;
        this._pivotY = y;

        return this.update();
    },

    setAnchor: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._anchorX = x;
        this._anchorY = y;

        this.dirty = true;
    },

    setRotation: function (rotation)
    {
        this.rotation = rotation;

        return this.update();
    },

    //  Updates the Transform.world object, ready for rendering
    //  Assuming this Transform is a root node (i.e. no transform parent)
    updateFromRoot: function ()
    {
        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;

        if (this.hasLocalRotation)
        {
            // console.log(this.name, 'Transform.updateFromRoot');

            world.a = this.cache.a;
            world.b = this.cache.b;
            world.c = this.cache.c;
            world.d = this.cache.d;
            world.tx = this._posX - ((this._pivotX * this.cache.a) + (this._pivotY * this.cache.c));
            world.ty = this._posY - ((this._pivotX * this.cache.b) + (this._pivotY * this.cache.d));

            this._worldRotation = Math.atan2(-this.cache.c, this.cache.d);
        }
        else
        {
            // console.log(this.name, 'Transform.updateFromRoot FAST');

            world.a = this._scaleX;
            world.b = 0;
            world.c = 0;
            world.d = this._scaleY;
            world.tx = this._posX - (this._pivotX * this._scaleX);
            world.ty = this._posY - (this._pivotY * this._scaleY);

            this._worldRotation = 0;
        }

        this._worldScaleX = this._scaleX;
        this._worldScaleY = this._scaleY;

        return this;
    },

    updateFromParent: function ()
    {
        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;

        var parent = this.parent.world;
        var tx = 0;
        var ty = 0;

        if (this.hasLocalRotation)
        {
            // console.log(this.name, 'Transform.updateFromParent', this.parent.name);

            var a = this.cache.a;
            var b = this.cache.b;
            var c = this.cache.c;
            var d = this.cache.d;

            tx = this._posX - ((this._pivotX * a) + (this._pivotY * c));
            ty = this._posY - ((this._pivotX * b) + (this._pivotY * d));

            world.a = (a * parent.a) + (b * parent.c);
            world.b = (a * parent.b) + (b * parent.d);
            world.c = (c * parent.a) + (d * parent.c);
            world.d = (c * parent.b) + (d * parent.d);
        }
        else
        {
            // console.log(this.name, 'Transform.updateFromParent FAST', this.parent.name);

            tx = this._posX - (this._pivotX * this._scaleX);
            ty = this._posY - (this._pivotY * this._scaleY);

            world.a = this._scaleX * parent.a;
            world.b = this._scaleX * parent.b;
            world.c = this._scaleY * parent.c;
            world.d = this._scaleY * parent.d;
        }

        this._worldRotation = Math.atan2(-this.world.c, this.world.d);

        world.tx = (tx * parent.a) + (ty * parent.c) + parent.tx;
        world.ty = (tx * parent.b) + (ty * parent.d) + parent.ty;

        this._worldScaleX = this._scaleX * Math.sqrt((world.a * world.a) + (world.c * world.c));
        this._worldScaleY = this._scaleY * Math.sqrt((world.b * world.b) + (world.d * world.d));

        return this;
    },

    updateAncestors: function ()
    {
        // console.log(this.name, 'Transform.updateAncestors');

        //  No parent? Then just update the children and leave, our job is done
        if (!this.parent)
        {
            // console.log(this.name, 'updateAncestors has no parent Transform');

            this.updateFromRoot();

            this.updateChildren();

            this.dirty = false;

            return this;
        }

        // console.log(this.name, 'start updateAncestors while');

        //  Gets all parent nodes, starting from this Transform.
        //  Then updates from the top, down, but only on the ancestors,
        //  not any other children - will give us accurate worldX etc properties

        var node = this.parent;
        var nodes = [];

        do
        {
            nodes.push(node);
            node = node.parent;
        }
        while (node);

        //  We've got all the ancestors in the 'nodes' array, let's loop it

        while (nodes.length)
        {
            node = nodes.pop();

            if (node.parent)
            {
                node.updateFromParent();
            }
            else
            {
                node.updateFromRoot();
            }
        }

        //  By this point all of this Transforms ancestors have been
        //  updated, in the correct order, so we can now do this one
        //  and any of its children too

        this.update();
    },

    updateChildren: function ()
    {
        // console.log(this.name, 'Transform.updateChildren');

        for (var i = 0; i < this.children.length; i++)
        {
            this.children[i].update();
        }
    },

    updateFromDirtyParent: function ()
    {
        // console.log(this.name, 'is updateFromDirtyParent', this.parent.name);

        this.updateFromParent();

        if (this.children.length)
        {
            for (var i = 0; i < this.children.length; i++)
            {
                this.children[i].updateFromDirtyParent();
            }
        }

        this._dirty = false;
        this._dirtyVertex = true;
    },

    update: function ()
    {
        if (!this._dirty)
        {
            return;
        }

        //  If we got this far then this Transform is dirty
        //  so we need to update it from its parent
        //  and then force the update to all children

        if (this.parent)
        {
            this.updateFromParent();
        }
        else
        {
            this.updateFromRoot();
        }

        var len = this.children.length;

        if (len)
        {
            for (var i = 0; i < len; i++)
            {
                this.children[i].updateFromDirtyParent();
            }
        }

        this._dirty = false;
        this._dirtyVertex = true;
    },

    updateCache: function ()
    {
        this.cache.a = this.cache.cr * this._scaleX;
        this.cache.b = this.cache.sr * this._scaleX;
        this.cache.c = -this.cache.sr * this._scaleY;
        this.cache.d = this.cache.cr * this._scaleY;
    },

    updateVertexData: function (interpolationPercentage)
    {
        if (!this.gameObject.frame || (!this._dirtyVertex && !this.interpolate))
        {
            return;
        }

        var frame = this.gameObject.frame;

        var w0;
        var h0;
        var w1;
        var h1;

        if (frame.data.trim)
        {
            //  If the sprite is trimmed, add the extra space before transforming
            w1 = frame.x - (this._anchorX * frame.width);
            w0 = w1 + frame.cutWidth;

            h1 = frame.y - (this._anchorY * frame.height);
            h0 = h1 + frame.cutHeight;
        }
        else
        {
            // w0 = frame.width * (1 - this._anchorX);
            // w1 = frame.width * -this._anchorX;

            // h0 = frame.height * (1 - this._anchorY);
            // h1 = frame.height * -this._anchorY;

            w0 = frame.cutWidth * (1 - this._anchorX);
            w1 = frame.cutWidth * -this._anchorX;

            h0 = frame.cutHeight * (1 - this._anchorY);
            h1 = frame.cutHeight * -this._anchorY;
        }

        var resolution = frame.source.resolution;

        var wt = this.world;

        var a = wt.a / resolution;
        var b = wt.b / resolution;
        var c = wt.c / resolution;
        var d = wt.d / resolution;
        var tx = wt.tx;
        var ty = wt.ty;

        if (this.interpolate)
        {
            var old = this.old;

            // Interpolate with the last position to reduce stuttering.
            a = old.a + ((a - old.a) * interpolationPercentage);
            b = old.b + ((b - old.b) * interpolationPercentage);
            c = old.c + ((c - old.c) * interpolationPercentage);
            d = old.d + ((d - old.d) * interpolationPercentage);
            tx = old.tx + ((tx - old.tx) * interpolationPercentage);
            ty = old.ty + ((ty - old.ty) * interpolationPercentage);
        }

        if (frame.rotated)
        {
            // var cw = frame.cutWidth;
            var ch = frame.height;
            var a0 = a;
            var b0 = b;
            var c0 = c;
            var d0 = d;
            var _w1 = w1;
            var _w0 = w0;

            //  Offset before rotating
            tx = (wt.c * ch) + tx;
            ty = (wt.d * ch) + ty;
            
            //  Rotate matrix by 90 degrees with precalc values for sine and cosine of rad(90)
            a = (a0 * 6.123233995736766e-17) + -c0;
            b = (b0 * 6.123233995736766e-17) + -d0;
            c = a0 + (c0 * 6.123233995736766e-17);
            d = b0 + (d0 * 6.123233995736766e-17);

            // Update UV coordinates
            frame.updateUVsInverted();

            // Rotate dimensions
            w0 = h0;
            w1 = h1;
            h0 = _w0;
            h1 = _w1;
        }

        if (frame.autoRound === 1 || (frame.autoRound === -1 && this.game.renderer.roundPixels))
        {
            tx |= 0;
            ty |= 0;
        }

        var vert = this.glVertextData;

        //  Top Left Vert
        vert.x0 = (a * w1) + (c * h1) + tx;
        vert.y0 = (d * h1) + (b * w1) + ty;

        //  Top Right Vert
        vert.x1 = (a * w0) + (c * h1) + tx;
        vert.y1 = (d * h1) + (b * w0) + ty;

        //  Bottom Right Vert
        vert.x2 = (a * w0) + (c * h0) + tx;
        vert.y2 = (d * h0) + (b * w0) + ty;

        //  Bottom Left Vert
        vert.x3 = (a * w1) + (c * h0) + tx;
        vert.y3 = (d * h0) + (b * w1) + ty;
        
        return vert;
    },

    getVertexData: function (interpolationPercentage)
    {
        if (this.interpolate || this._dirtyVertex)
        {
            this.updateVertexData(interpolationPercentage);

            this._dirtyVertex = false;
        }

        return this.glVertextData;
    },

    cloneVertexData: function ()
    {
        var src = this.glVertextData;

        return {
            x0: src.x0,
            y0: src.y0,
            x1: src.x1,
            y1: src.y1,
            x2: src.x2,
            y2: src.y2,
            x3: src.x3,
            y3: src.y3
        };
    }
};

Object.defineProperties(Transform.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this._posX;
        },

        set: function (value)
        {
            this._posX = value;
            this.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this._posY;
        },

        set: function (value)
        {
            this._posY = value;
            this.dirty = true;
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this._scaleX;
        },

        set: function (value)
        {
            this._scaleX = value;
            this._scaleY = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this._scaleX;
        },

        set: function (value)
        {
            this._scaleX = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this._scaleY;
        },

        set: function (value)
        {
            this._scaleY = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    anchor: {

        enumerable: true,

        get: function ()
        {
            return this._anchorX;
        },

        set: function (value)
        {
            this.setAnchor(value);
        }

    },

    anchorX: {

        enumerable: true,

        get: function ()
        {
            return this._anchorX;
        },

        set: function (value)
        {
            this._anchorX = value;
            this.dirty = true;
        }

    },

    anchorY: {

        enumerable: true,

        get: function ()
        {
            return this._anchorY;
        },

        set: function (value)
        {
            this._anchorY = value;
            this.dirty = true;
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this._pivotX;
        },

        set: function (value)
        {
            this._pivotX = value;
            this.dirty = true;
            this.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this._pivotY;
        },

        set: function (value)
        {
            this._pivotY = value;
            this.dirty = true;
            this.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return Phaser.Math.wrapAngle(this.rotation * Phaser.Math.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = Phaser.Math.wrapAngle(value) * Phaser.Math.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this._rotation;
        },

        set: function (value)
        {
            if (this._rotation === value)
            {
                return;
            }

            this._rotation = value;
            this.dirty = true;

            if (this._rotation % Phaser.Math.PI2)
            {
                this.cache.sr = Math.sin(this._rotation);
                this.cache.cr = Math.cos(this._rotation);
                this.updateCache();
                this.hasLocalRotation = true;
            }
            else
            {
                this.hasLocalRotation = false;
            }
        }

    },

    //  Sets this *component* as being dirty
    dirty: {

        enumerable: true,

        get: function ()
        {
            return this._dirty;
        },

        set: function (value)
        {
            if (value)
            {
                if (!this._dirty)
                {
                    this._dirty = true;

                    if (this.immediate)
                    {
                        this.update();
                    }
                    else
                    {
                        this._dirtyVertex = true;
                        this.state.sys.updates.add(this);
                    }
                }
            }
            else
            {
                this._dirty = false;
            }
        }

    },

    //  GLOBAL read-only properties from here on
    //  Need *all* parents taken into account to get the correct values

    name: {

        enumerable: true,

        get: function ()
        {
            return (this.gameObject) ? this.gameObject.name : '';
        }

    },

    worldRotation: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldRotation;
        }

    },

    worldScaleX: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldScaleX;
        }

    },

    worldScaleY: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldScaleY;
        }

    },

    worldX: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this.world.tx;
        }

    },

    worldY: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this.world.ty;
        }

    }

});

module.exports = Transform;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(1);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(11);
var Input = __webpack_require__(34);
var Audio = __webpack_require__(32);
var Video = __webpack_require__(35);
var Fullscreen = __webpack_require__(33);

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
/* 37 */
/***/ function(module, exports) {

function AddToDOM (element, parent, overflowHidden)
{
    if (overflowHidden === undefined) { overflowHidden = true; }

    var target;

    if (parent)
    {
        if (typeof parent === 'string')
        {
            //  Hopefully an element ID
            target = document.getElementById(parent);
        }
        else if (typeof parent === 'object' && parent.nodeType === 1)
        {
            //  Quick test for a HTMLelement
            target = parent;
        }
    }

    //  Fallback, covers an invalid ID and a non HTMLelement object
    if (!target)
    {
        target = document.body;
    }

    if (overflowHidden && target.style)
    {
        target.style.overflow = 'hidden';
    }

    target.appendChild(element);

    return element;

}

module.exports = AddToDOM;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var OS = __webpack_require__(1);

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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(13);
var EventListener = __webpack_require__(41);

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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(13);

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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var Component = __webpack_require__(3);

/**
* This is the base Game Object class that you can use when creating your own extended Game Objects.
* It hides away the 'private' stuff and exposes only the useful getters, setters and properties.
*
* @class
*/

//  Phaser.Texture and Phaser.Frame objects passed in here, instead of looked-up.
//  Allows override from non-standard GO types

var GameObject = function (state, x, y, texture, frame, parent)
{
    this.state = state;

    this.game = state.game;

    this.name = '';

    this.type = 0;

    this.parent = parent;

    //  Texture is globally shared between GameObjects, not specific to this one
    this.texture = texture;

    //  Frame is globally shared between GameObjects, not specific to this one
    this.frame = frame;

    //  All GameObjects have the following components, always:
    this.transform = new Component.Transform(this, x, y);

    //  Optional? Maybe set on a per GO basis?
    this.data = new Component.Data(this);

    this.color = new Component.Color(this);

    //  ----------------------------------------------------------------
    //  ----------------------------------------------------------------
    //  The following properties are debatable to have in this class
    //  ----------------------------------------------------------------
    //  ----------------------------------------------------------------

    this.scaleMode = CONST.scaleModes.DEFAULT;

    //  Allows you to turn off a GameObject from rendering, but still render its children (if it has any)
    //  Maybe this should move?
    // this.skipRender = (key === undefined);
    this.skipRender = false;

    this.visible = true;

    //  Either null, or the Children component
    this.children = null;

    this.exists = true;
};

GameObject.prototype.constructor = GameObject;

GameObject.prototype = {

    preUpdate: function ()
    {
        //  NOOP
    },

    update: function ()
    {
        //  NOOP
    },

    postUpdate: function ()
    {
        //  NOOP
    },

    render: function ()
    {
        //  NOOP
    },

    destroy: function ()
    {
        //  NOOP
    }

};

Object.defineProperties(GameObject.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX;
        },

        set: function (value)
        {
            this.transform._posX = value;
            this.transform.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY;
        },

        set: function (value)
        {
            this.transform._posY = value;
            this.transform.dirty = true;
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY;
        },

        set: function (value)
        {
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    anchor: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorX;
        },

        set: function (value)
        {
            this.transform.setAnchor(value);
        }

    },

    anchorX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorX;
        },

        set: function (value)
        {
            this.transform._anchorX = value;
            this.transform.dirty = true;
        }

    },

    anchorY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorY;
        },

        set: function (value)
        {
            this.transform._anchorY = value;
            this.transform.dirty = true;
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotX;
        },

        set: function (value)
        {
            this.transform._pivotX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotY;
        },

        set: function (value)
        {
            this.transform._pivotY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return Phaser.Math.wrapAngle(this.rotation * Phaser.Math.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = Phaser.Math.wrapAngle(value) * Phaser.Math.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this.transform._rotation;
        },

        set: function (value)
        {
            if (this.transform._rotation === value)
            {
                return;
            }

            this.transform._rotation = value;
            this.transform.dirty = true;

            if (this.transform._rotation % Phaser.Math.PI2)
            {
                this.transform.cache.sr = Math.sin(this.transform._rotation);
                this.transform.cache.cr = Math.cos(this.transform._rotation);
                this.transform.updateCache();
                this.transform.hasLocalRotation = true;
            }
            else
            {
                this.transform.hasLocalRotation = false;
            }
        }

    },

    //  Color getters / setters

    alpha: {

        enumerable: true,

        get: function ()
        {
            return this.color._alpha;
        },

        set: function (value)
        {
            this.color.alpha = value;
        }

    },

    blendMode: {

        enumerable: true,

        get: function ()
        {
            return this.color._blendMode;
        },

        set: function (value)
        {
            this.color.blendMode = value;
        }

    }

});

module.exports = GameObject;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var GameObject = __webpack_require__(42);
var ImageWebGLRenderer = __webpack_require__(45);

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
var Image = function (state, x, y, key, frame)
{
    var _texture = state.game.textures.get(key);
    var _frame = _texture.get(frame);

    GameObject.call(this, state, x, y, _texture, _frame);

    this.type = CONST.IMAGE;

    this.render = ImageWebGLRenderer;
};

Image.prototype = Object.create(GameObject.prototype);
Image.prototype.constructor = Image;

/**
* Automatically called by World.preUpdate.
*
* @method Phaser.Image#preUpdate
* @memberof Phaser.Image
*/
Image.prototype.preUpdate = function ()
{
    //  Would like to get rid of this somehow ...
    if (this.parent)
    {
        this.color.worldAlpha = this.parent.color.worldAlpha;
    }
};

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

module.exports = Image;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(43);
var FactoryContainer = __webpack_require__(6);

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

        return group.children.add(new Image(this.state, x, y, key, frame));
    },

    make: function (x, y, key, frame)
    {
        console.log('ImageFactory.make', key, x, y, frame);

        return new Image(this.state, x, y, key, frame);
    }

};

module.exports = FactoryContainer.register(ImageFactory);


/***/ },
/* 45 */
/***/ function(module, exports) {


var ImageWebGLRenderer = function (renderer, src, interpolationPercentage)
{
    var frame = src.frame;
    var alpha = src.color.worldAlpha * 255 << 24;

    //  Skip rendering?

    if (src.skipRender || !src.visible || alpha === 0 || !frame.cutWidth || !frame.cutHeight)
    {
        return;
    }

    var verts = src.transform.getVertexData(interpolationPercentage);
    var index = src.frame.source.glTextureIndex;
    var tint = src.color._glTint;
    var bg = src.color._glBg;

    renderer.batch.add(frame.source, src.blendMode, verts, frame.uvs, index, alpha, tint, bg);
};

module.exports = ImageWebGLRenderer;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__(44);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(8);
var Set = __webpack_require__(77);
var XHRSettings = __webpack_require__(7);
var Event = __webpack_require__(54);
var EventDispatcher = __webpack_require__(5);

var BaseLoader = function ()
{
    //  To finish the loader ...
    //  
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
        // console.log('BaseLoader.finishedLoading PROCESSING', this.queue.size, 'files');

        this._state = CONST.LOADER_PROCESSING;

        var storage = this.storage;

        storage.clear();

        var _this = this;

        this.queue.each(function (file)
        {
            file.onProcess(_this.processUpdate.bind(_this));
        });
    },

    processUpdate: function (file)
    {
        if (file.state === CONST.FILE_ERRORED)
        {
            this.failed.add(file);
        }
        else
        {
            this.storage.add(file);
        }

        this.queue.delete(file);

        if (this.queue.size === 0 && this._state === CONST.LOADER_PROCESSING)
        {
            //  We've processed all the files we loaded
            this.processComplete();
        }
    },

    processComplete: function ()
    {
        this.list.clear();
        this.inflight.clear();
        this.queue.clear();

        console.log('Loader Complete. Loaded:', this.storage.size, 'Failed:', this.failed.size);

        if (this.processCallback)
        {
            this.processCallback();
        }

        this._state = CONST.LOADER_COMPLETE;

        this.events.dispatch(new Event.LOADER_COMPLETE_EVENT(this));
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(49);
var CONST = __webpack_require__(8);
var XHRLoader = __webpack_require__(51);
var XHRSettings = __webpack_require__(7);

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

    //  Set by onProgress (only if loading via XHR)
    this.bytesTotal = 0;
    this.bytesLoaded = -1;
    this.percentComplete = -1;

    //  For CORs based loading.
    //  If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)
    this.crossOrigin = undefined;

    //  The actual processed file data
    this.data = undefined;

    //  Multipart file? (i.e. an atlas and its json together)
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
        this.resetXHR();

        this.callback(this, true);
    },

    onError: function (event)
    {
        this.resetXHR();

        this.callback(this, false);
    },

    onProgress: function (event)
    {
        if (event.lengthComputable)
        {
            this.bytesLoaded = event.loaded;
            this.bytesTotal = event.total;

            this.percentComplete = Math.min((this.bytesLoaded / this.bytesTotal), 1);
        }

        // console.log(this.percentComplete + '% (' + this.bytesLoaded + ' bytes)');
    },

    onProcess: function (callback)
    {
        this.state = CONST.FILE_PROCESSING;

        //  If overridden by another class, it must call the callback when finished, then onComplete
        callback(this);

        this.onComplete();
    },

    onComplete: function ()
    {
        this.state = CONST.FILE_COMPLETE;
    },

    //  Called by the Loader, starts the actual file downloading
    load: function (callback, baseURL, globalXHR)
    {
        if (baseURL === undefined) { baseURL = ''; }

        this.callback = callback;

        this.src = GetURL(this, baseURL);

        this.xhrLoader = XHRLoader(this, globalXHR);
    }
};

module.exports = File;


/***/ },
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var XHRSettings = __webpack_require__(7);

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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(50);

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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(53),
    LOADER_COMPLETE_EVENT: __webpack_require__(52)

};


/***/ },
/* 55 */
/***/ function(module, exports) {

/**
* Checks if the given dimensions make a power of two texture.
* 
* @method Phaser.Math#isPowerOfTwo
* @param {number} width - The width to check.
* @param {number} height - The height to check.
* @return {boolean} True if the width and height are a power of two.
*/
var IsPowerOfTwo = function (width, height)
{
    return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
};

module.exports = IsPowerOfTwo;


/***/ },
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var SingleTextureBatch = __webpack_require__(69);
var MultiTextureBatch = __webpack_require__(68);

/**
* Manages the different WebGL Sprite Batches.
*
* @class Phaser.Renderer.Canvas
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
*/
var BatchManager = function (renderer, batchSize)
{
    this.renderer = renderer;

    this.gl = null;

    this.currentBatch = null;
    this.spriteBatch = null;

    this.singleTextureBatch = new SingleTextureBatch(this, batchSize);
    this.multiTextureBatch = new MultiTextureBatch(this, batchSize);

    // this.pixelBatch = new Batch.Pixel(this, batchSize);
    // this.fxBatch = new Batch.FX(this, batchSize);
};

BatchManager.prototype.constructor = BatchManager;

BatchManager.prototype = {

    init: function ()
    {
        this.gl = this.renderer.gl;

        this.singleTextureBatch.init();
        this.multiTextureBatch.init();

        // this.pixelBatch.init();
        // this.fxBatch.init();

        if (this.renderer.multiTexture)
        {
            this.currentBatch = this.multiTextureBatch;
            this.spriteBatch = this.multiTextureBatch;
        }
        else
        {
            this.currentBatch = this.singleTextureBatch;
            this.spriteBatch = this.singleTextureBatch;
        }
    },

    start: function ()
    {
        this.currentBatch.start();
    },

    stop: function ()
    {
        this.currentBatch.stop();
    },

    setBatch: function (newBatch)
    {
        if (this.currentBatch.type === newBatch.type)
        {
            return false;
        }

        //  Flush whatever was in the current batch (if anything)
        this.currentBatch.flush();

        this.currentBatch = newBatch;

        this.currentBatch.start(true);

        return true;
    },

    //  Add a new entry into the current sprite batch
    add: function (source, blendMode, verts, uvs, textureIndex, alpha, tintColors, bgColors)
    {
        //  Set the current batch (if different from this one)
        var hasFlushed = this.setBatch(this.spriteBatch);

        //  Check Batch Size and flush if needed
        if (!hasFlushed && this.spriteBatch.size >= this.spriteBatch.maxSize)
        {
            this.spriteBatch.flush();

            hasFlushed = true;
        }

        source.glLastUsed = this.renderer.startTime;

        //  Does this TextureSource need updating?
        if (source.glDirty)
        {
            this.renderer.updateTexture(source);
        }

        //  Does the batch need to activate a new texture?
        if (this.renderer.textureArray[source.glTextureIndex] !== source)
        {
            // console.log('setCurrentTexture to', source.glTextureIndex);
            // console.log(source.image.currentSrc);
            this.setCurrentTexture(source);
        }

        //  Blend Mode?
        if (blendMode !== this.renderer.currentBlendMode)
        {
            if (!hasFlushed)
            {
                this.spriteBatch.flush();
            }

            this.renderer.setBlendMode(blendMode);
        }

        this.spriteBatch.add(verts, uvs, textureIndex, alpha, tintColors, bgColors);
    },

    addCustomShader: function ()
    {
        //  TODO
    },

    addFX: function ()
    {
        //  TODO
    },

    addPixel: function (x0, y0, x1, y1, x2, y2, x3, y3, color)
    {
        var hasFlushed = this.setBatch(this.pixelBatch);

        //  Check Batch Size and flush if needed
        if (!hasFlushed && this.pixelBatch.size >= this.pixelBatch.maxSize)
        {
            this.pixelBatch.flush();
        }

        this.pixelBatch.add(x0, y0, x1, y1, x2, y2, x3, y3, color);
    },

    setCurrentTexture: function (source)
    {
        var gl = this.gl;

        this.currentBatch.flush();

        gl.activeTexture(gl.TEXTURE0 + source.glTextureIndex);

        gl.bindTexture(gl.TEXTURE_2D, source.glTexture);

        this.renderer.textureArray[source.glTextureIndex] = source;
    },

    destroy: function ()
    {
        this.singleTextureBatch.destroy();

        this.renderer = null;
        this.gl = null;
    }

};

module.exports = BatchManager;


/***/ },
/* 66 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Mat Groves (@Doormat23)
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* New version of PIXI.WebGLShaderManager
*
* @class Phaser.Renderer.Canvas
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
*/
var ShaderManager = function (renderer)
{
    this.renderer = renderer;

    this.gl = null;

    this.currentShader = null;

};

ShaderManager.prototype.constructor = ShaderManager;

ShaderManager.prototype = {

    init: function ()
    {
        this.gl = this.renderer.gl;
    },

    /*
    setAttribs: function (attribs)
    {
        // reset temp state
        var i;

        for (i = 0; i < this.tempAttribState.length; i++)
        {
            this.tempAttribState[i] = false;
        }

        // set the new attribs
        for (i = 0; i < attribs.length; i++)
        {
            var attribId = attribs[i];
            this.tempAttribState[attribId] = true;
        }

        for (i = 0; i < this.attribState.length; i++)
        {
            if (this.attribState[i] !== this.tempAttribState[i])
            {
                this.attribState[i] = this.tempAttribState[i];

                if (this.tempAttribState[i])
                {
                    this.gl.enableVertexAttribArray(i);
                }
                else
                {
                    this.gl.disableVertexAttribArray(i);
                }
            }
        }
    },
    */

    setShader: function (program)
    {
        if (this.currentShader === program)
        {
            return false;
        }
        
        //  Tell the current shader it is being unbound?

        this.currentShader = program;

        this.gl.useProgram(program);

        // this.setAttribs(shader.attributes);

        return true;
    },

    destroy: function ()
    {
        this.renderer = null;
        this.gl = null;

        // this.attribState = [];
        // this.tempAttribState = [];
        // this.stack = [];

        this.currentShader = null;

        // this.primitiveShader.destroy();
        // this.complexPrimitiveShader.destroy();
        // this.defaultShader.destroy();
        // this.fastShader.destroy();
        // this.stripShader.destroy();
    }

};

module.exports = ShaderManager;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Mat Groves (@Doormat23)
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CreateEmptyTexture = __webpack_require__(16);
var QuadFBO = __webpack_require__(70);
var BatchManager = __webpack_require__(65);
var ShaderManager = __webpack_require__(66);

/**
* A WebgL based renderer.
*
* @class Phaser.Renderer.WebGL
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
*/
var WebGLRenderer = function (game)
{
    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    this.game = game;

    this.type = CONST.WEBGL;

    //  Read all the following from game config
    this.clearBeforeRender = true;

    this.transparent = false;

    this.autoResize = false;

    this.preserveDrawingBuffer = false;

    this.width = game.config.width * game.config.resolution;

    this.height = game.config.height * game.config.resolution;

    this.resolution = game.config.resolution;

    this.clipUnitX = 2 / this.width;

    this.clipUnitY = 2 / this.height;

    this.view = game.canvas;

    // this.stencilBufferLimit = 6;

    this.multiTexture = false;

    this.extensions = {};

    /**
     * @property _contextOptions
     * @type Object
     * @private
    this.contextOptions = {
        alpha: this.transparent,
        antialias: game.antialias,
        premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
        stencil: true,
        preserveDrawingBuffer: this.preserveDrawingBuffer
    };
     */

    this.contextOptions = {
        alpha: true,
        antialias: true,
        premultipliedAlpha: true,
        stencil: true,
        preserveDrawingBuffer: false
    };

    this.projection = { x: 0, y: 0 };

    this.offset = { x: 0, y: 0 };

    this.shaderManager = new ShaderManager(this);
    this.batch = new BatchManager(this, 4000);

    // this.filterManager = new Phaser.Renderer.WebGL.FilterManager(this);
    // this.stencilManager = new Phaser.Renderer.WebGL.StencilManager(this);

    this.gl = null;

    this.emptyTexture = null;

    this.textureArray = [];

    this.currentBlendMode = -1;
    this.currentTextureSource = null;
    this.currentShader = null;

    this.blendModes = [];

    this.flipY = 1;

    this.startTime = 0;
    this.endTime = 0;
    this.drawCount = 0;

    this.contextLost = false;

    this._fbErrors = {
        36054: 'Incomplete attachment',
        36055: 'Missing attachment',
        36057: 'Incomplete dimensions',
        36061: 'Framebuffer unsupported'
    };

    this.init();
};

WebGLRenderer.prototype.constructor = WebGLRenderer;

WebGLRenderer.prototype = {

    init: function ()
    {
        this.gl = this.view.getContext('webgl', this.contextOptions) || this.view.getContext('experimental-webgl', this.contextOptions);

        if (!this.gl)
        {
            this.contextLost = true;
            throw new Error('This browser does not support WebGL. Try using the Canvas renderer.');
        }

        var gl = this.gl;

        this.maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

        if (this.maxTextures === 1)
        {
            this.multiTexture = false;
        }
        else
        {
            this.createMultiEmptyTextures();
        }

        this.emptyTexture = CreateEmptyTexture(this.gl, 1, 1, 0, 0);

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.enable(gl.BLEND);

         // Transparent
        // gl.clearColor(0, 0, 0, 0);

        //  Black
        gl.clearColor(1, 0, 0, 1);

        this.shaderManager.init();
        this.batch.init();

        // this.filterManager.init();
        // this.stencilManager.init();

        this.resize(this.width, this.height);

        // Load WebGL extension
        this.extensions.compression = {};

        var etc1 = gl.getExtension('WEBGL_compressed_texture_etc1') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_etc1');
        var pvrtc = gl.getExtension('WEBGL_compressed_texture_pvrtc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        var s3tc = gl.getExtension('WEBGL_compressed_texture_s3tc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');

        if (etc1)
        {
            this.extensions.compression.ETC1 = etc1;
        }

        if (pvrtc)
        {
            this.extensions.compression.PVRTC = pvrtc;
        }

        if (s3tc)
        {
            this.extensions.compression.S3TC = s3tc;
        }

        //  Map Blend Modes

        var add = [ gl.SRC_ALPHA, gl.DST_ALPHA ];
        var normal = [ gl.ONE, gl.ONE_MINUS_SRC_ALPHA ];
        var multiply = [ gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA ];
        var screen = [ gl.SRC_ALPHA, gl.ONE ];

        this.blendModes = [
            normal, add, multiply, screen, normal,
            normal, normal, normal, normal,
            normal, normal, normal, normal,
            normal, normal, normal, normal
        ];
    },

    //  Bind empty multi-textures to avoid WebGL spam

    createMultiEmptyTextures: function ()
    {
        if (this.maxTextures === 1)
        {
            return;
        }

        for (var i = 0; i < this.maxTextures; i++)
        {
            this.textureArray[i] = CreateEmptyTexture(this.gl, 1, 1, 0, i);
        }
    },

    enableMultiTextureSupport: function (textureArray)
    {
        if (this.maxTextures === 1)
        {
            return;
        }

        this.multiTexture = true;

        this.batch.spriteBatch = this.batch.multiTextureBatch;

        if (Array.isArray(textureArray))
        {
            //  index 0 is reserved?
            var index = 0;

            for (var i = 0; i < textureArray.length; i++)
            {
                var texture = this.game.textures.get(textureArray[i]);

                index = texture.setTextureIndex(index);
            }
        }
    },

    disableMultiTextureSupport: function ()
    {
        this.multiTexture = false;

        this.batch.spriteBatch = this.batch.singleTextureBatch;
    },

    resize: function (width, height)
    {
        var res = this.game.config.resolution;

        this.width = width * res;
        this.height = height * res;

        this.view.width = this.width;
        this.view.height = this.height;

        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        this.gl.viewport(0, 0, this.width, this.height);

        this.clipUnitX = 2 / this.width;
        this.clipUnitY = 2 / this.height;

        this.projection.x = (this.width / 2) / res;
        this.projection.y = -(this.height / 2) / res;
    },

    /**
     * Renders the State.
     *
     * @method render
     * @param {Phaser.State} state - The State to be rendered.
     * @param {number} interpolationPercentage - The cumulative amount of time that hasn't been simulated yet, divided
     *   by the amount of time that will be simulated the next time update()
     *   runs. Useful for interpolating frames.
     */
    render: function (state, interpolationPercentage)
    {
        // console.log('%c render start ', 'color: #ffffff; background: #00ff00;');

        //  No point rendering if our context has been blown up!
        if (this.contextLost)
        {
            return;
        }

        //  Add Pre-render hook

        this.startTime = Date.now();

        var gl = this.gl;

        var fbo = state.sys.fbo;

        fbo.activate();

        //  clear is needed for the FBO, otherwise corruption ...
        gl.clear(gl.COLOR_BUFFER_BIT);

        this.setBlendMode(CONST.blendModes.NORMAL);

        this.drawCount = 0;

        this.batch.start();

        //  Could move to the State Systems or MainLoop
        this.game.state.renderChildren(this, state, interpolationPercentage);

        this.batch.stop();

        //  Call state.render here, so we can do some extra shizzle on the top
        //  Maybe pass in the FBO texture too?

        fbo.render(null);

        //  Unbind the fbo texture and replace it with an empty texture.
        //  If we forget this we corrupt the main context texture!
        //  or get `RENDER WARNING: there is no texture bound to the unit 0` spam in the console
        gl.bindTexture(gl.TEXTURE_2D, this.emptyTexture);

        this.endTime = Date.now();

        // console.log('%c render end ', 'color: #ffffff; background: #ff0000;');

        //  Reset back to defaults
        // gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        //  Add Post-render hook
    },

    clipX: function (x)
    {
        return (this.clipUnitX * x) - 1;
    },

    clipY: function (y)
    {
        return 1 - (this.clipUnitY * y);
    },

    getVerticesFromRect: function (x, y, width, height)
    {
        // -1.0, -1.0, // 0 = bottom-left
        // 1.0, -1.0,  // 1 = bottom-right
        // -1.0, 1.0,  // 2 = top-left
        // 1.0, 1.0    // 3 = top-right

        return [
            //  bottom-left
            this.clipX(x), this.clipY(y + height),

            //  bottom-right
            this.clipX(x + width), this.clipY(y + height),

            //  top-left
            this.clipX(x), this.clipY(y),

            //  top-right
            this.clipX(x + width), this.clipY(y)
        ];
    },

    /**
    * Removes the base texture from the GPU, useful for managing resources on the GPU.
    * A texture is still 100% usable and will simply be re-uploaded if there is a sprite on screen that is using it.
    *
    * @method unloadTexture
    */
    unloadTexture: function (texture)
    {
        var gl = this.gl;

        var glTexture = texture._glTexture;

        if (gl && glTexture)
        {
            gl.deleteTexture(glTexture);
        }

        texture._glTexture = null;
        texture._dirty = false;
    },

    //  Takes a TextureSource object
    updateTexture: function (source)
    {
        if (source.compressionAlgorithm)
        {
            return this.updateCompressedTexture(source);
        }

        var gl = this.gl;

        if (!source.glTexture)
        {
            source.glTexture = gl.createTexture();
        }

        // console.log('updateTexture', source.glTextureIndex);
        // console.log(source.image.currentSrc);

        gl.activeTexture(gl.TEXTURE0 + source.glTextureIndex);

        gl.bindTexture(gl.TEXTURE_2D, source.glTexture);

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, source.premultipliedAlpha);

        //  Throws a warning in Firefox: WebGL: texImage2D: Chosen format/type incured an expensive reformat: 0x1908/0x1401
        //  @see https://github.com/mrdoob/three.js/issues/9109
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source.image);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, source.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);

        if (source.mipmap && source.isPowerOf2)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, source.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, source.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
        }

        if (source.isPowerOf2)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }

        source.glDirty = false;

        return true;
    },

    /*
    updateCompressedTexture: function (texture)
    {
        if (!texture.hasLoaded)
        {
            return false;
        }

        var gl = this.gl;
        var textureMetaData = texture.source;

        if (!texture._glTextures)
        {
            texture._glTextures = gl.createTexture();
        }

        gl.activeTexture(gl.TEXTURE0 + texture.textureIndex);

        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures);

        gl.compressedTexImage2D(
            gl.TEXTURE_2D,
            0,
            textureMetaData.glExtensionFormat,
            textureMetaData.width,
            textureMetaData.height,
            0,
            textureMetaData.textureData
        );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === Phaser.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);

        if (texture.mipmap && Phaser.Math.isPowerOfTwo(texture.width, texture.height))
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === Phaser.scaleModes.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === Phaser.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
        }

        if (!texture._powerOf2)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }

        texture._dirty = false;

        return true;
    },
    */

    //  Blend Mode Manager

    setBlendMode: function (newBlendMode)
    {
        if (this.currentBlendMode === newBlendMode)
        {
            return false;
        }
        
        var blendModeWebGL = this.blendModes[newBlendMode];

        if (blendModeWebGL)
        {
            this.currentBlendMode = newBlendMode;
    
            this.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);

            return true;
        }
        else
        {
            return false;
        }
    },

    //  WebGL Mask Manager

    pushMask: function (maskData)
    {
        var gl = this.gl;

        if (maskData.dirty)
        {
            // PIXI.WebGLGraphics.updateGraphics(maskData, gl);
        }

        if (maskData._webGL === undefined || maskData._webGL.data === undefined || maskData._webGL.data.length === 0)
        {
            return;
        }

        this.stencilManager.pushStencil(maskData, maskData._webGL.data[0]);
    },

    popMask: function (maskData)
    {
        if (maskData._webGL === undefined || maskData._webGL.data === undefined || maskData._webGL.data.length === 0)
        {
            return;
        }

        this.stencilManager.popStencil(maskData, maskData._webGL.data[0]);
    },

    //  Shader Utils

    //  PIXI.CompileVertexShader
    compileVertexShader: function (src)
    {
        return this.compileShader(src, this.gl.VERTEX_SHADER);
    },

    //  PIXI.CompileFragmentShader
    compileFragmentShader: function (src)
    {
        return this.compileShader(src, this.gl.FRAGMENT_SHADER);
    },

    //  PIXI._CompileShader
    compileShader: function (src, type)
    {
        if (Array.isArray(src))
        {
            src = src.join('\n');
        }

        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, src);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
        {
            console.log(this.gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    },

    //  PIXI.compileProgram
    compileProgram: function (vertexSrc, fragmentSrc)
    {
        var gl = this.gl;

        var fragmentShader = this.compileFragmentShader(fragmentSrc);
        var vertexShader = this.compileVertexShader(vertexSrc);

        var shaderProgram = gl.createProgram();

        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
        {
            console.log(gl.getProgramInfoLog(shaderProgram));
            console.log('Could not initialize shaders: Vertex & Fragment');
            console.log(vertexSrc.join('\n'));
            console.log(fragmentSrc.join('\n'));
        }

        return shaderProgram;
    },

    deleteProgram: function (program)
    {
        var gl = this.gl;

        gl.deleteProgram(program);

        return this;
    },


    createFBO: function (parent, x, y, width, height)
    {
        //   Store in a local list so we can update size if the canvas size changes?
        return new QuadFBO(this, parent, x, y, width, height);
    },

    destroy: function ()
    {
        this.projection = null;
        this.offset = null;

        this.shaderManager.destroy();
        this.batch.destroy();
        this.maskManager.destroy();
        this.filterManager.destroy();

        this.shaderManager = null;
        this.batch = null;
        this.maskManager = null;
        this.filterManager = null;

        this.gl = null;
        this.renderSession = null;

        // Phaser.CanvasPool.remove(this);
    }

};

module.exports = WebGLRenderer;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var BaseBatch = __webpack_require__(15);

/**
* Standard Image and Sprite Shader.
*
* @class Phaser.Renderer.WebGL.Batch.Image
* @constructor
* @param {Phaser.Renderer.WebGL} renderer - The WebGL Renderer.
*/
var MultiTextureBatch = function (manager, batchSize)
{
    //  Vertex Data Size is calculated by adding together:
    //
    //  Position (vec2) = 4 * 2 = 8 bytes
    //  UV (vec2) = 4 * 2 = 8 bytes
    //  Texture Index (float) = 4 bytes
    //  Tint Color (float) = 4 bytes
    //  BG Color (float) = 4 bytes
    //
    //  Total: 28 bytes (per vert) * 4 (4 verts per quad) (= 112 bytes) * maxSize (usually 2000) = 224 kilobytes sent to the GPU every frame

    var vertSize = (4 * 2) + (4 * 2) + (4) + (4) + (4);

    BaseBatch.call(this, manager, batchSize, vertSize);

    this.type = 2;

    //  View on the vertices as a Float32Array
    this.positions = new Float32Array(this.vertices);

    //  View on the vertices as a Uint32Array
    this.colors = new Uint32Array(this.vertices);

    //  Attributes and Uniforms specific to this Batch Shader

    //  @type {GLint}
    this.aVertexPosition;

    //  @type {GLint}
    this.aTextureCoord;

    //  @type {GLint}
    this.aTextureIndex;

    //  @type {GLint}
    this.aTintColor;

    //  @type {GLint}
    this.aBgColor;

    //  @type {WebGLUniformLocation}
    this.uSampler;

    //  @type {WebGLUniformLocation}
    this.projectionVector;

    //  @type {WebGLUniformLocation}
    this.offsetVector;
};

MultiTextureBatch.prototype = Object.create(BaseBatch.prototype);

MultiTextureBatch.prototype.constructor = MultiTextureBatch;

MultiTextureBatch.prototype.init = function ()
{
    var gl = this.renderer.gl;

    this.gl = gl;

    //  Our static index buffer, calculated once at the start of our game

    //  This contains the indices data for the quads.
    //
    //  A quad is made up of 2 triangles (A and B in the image below)
    //
    //  0 = Top Left
    //  1 = Top Right
    //  2 = Bottom Right
    //  3 = Bottom Left
    //
    //  0----1
    //  |\  A|
    //  | \  |
    //  |  \ |
    //  | B \|
    //  |    \
    //  3----2
    //
    //  Because triangles A and B share 2 points (0 and 2) the vertex buffer only stores
    //  4 sets of data (top-left, top-right, bottom-left and bottom-right), which is why
    //  the indices offsets uses the j += 4 iteration. Indices array has to contain 3
    //  entries for every triangle (so 6 for every quad), but our vertex data compacts
    //  that down, as we don't want to fill it with loads of DUPLICATE data, so the
    //  indices array is a look-up table, telling WebGL where in the vertex buffer to look
    //  for that triangles indice data.

    //  batchSize * vertSize = 2000 * 6 (because we store 6 pieces of vertex data per triangle)
    //  and up to a maximum of 2000 entries in the batch

    for (var i = 0, j = 0; i < (this.maxSize * this.vertSize); i += 6, j += 4)
    {
        //  Triangle 1
        this.indices[i + 0] = j + 0;    //  Top Left
        this.indices[i + 1] = j + 1;    //  Top Right
        this.indices[i + 2] = j + 2;    //  Bottom Right

        //  Triangle 2
        this.indices[i + 3] = j + 0;    //  Top Left
        this.indices[i + 4] = j + 2;    //  Bottom Right
        this.indices[i + 5] = j + 3;    //  Bottom Left
    }

    //  Create indices buffer
    this.indexBuffer = gl.createBuffer();

    //  Bind it
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    //  Set the source of the buffer data (this.indices array)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    //  Create Vertex Data buffer
    this.vertexBuffer = gl.createBuffer();

    //  Bind it
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

    //  Set the source of the buffer data (this.vertices array)
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    //  Create the shader

    this.vertexSrc = [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'attribute float aTextureIndex;',
        'attribute vec4 aTintColor;',
        'attribute vec4 aBgColor;',

        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vTintColor;',
        'varying vec4 vBgColor;',
        'varying float vTextureIndex;',

        'const vec2 center = vec2(-1.0, 1.0);',

        'void main(void) {',
        '   if (aTextureIndex > 0.0) gl_Position = vec4(0.0);',
        '   gl_Position = vec4(((aVertexPosition + offsetVector) / projectionVector) + center, 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;', // pass the texture coordinate to the fragment shader, the GPU will interpolate the points
        '   vTintColor = vec4(aTintColor.rgb * aTintColor.a, aTintColor.a);',
        '   vBgColor = aBgColor;',
        '   vTextureIndex = aTextureIndex;',
        '}'
    ];

    this.fragmentSrc = [
        'precision lowp float;',

        'varying vec2 vTextureCoord;', // the texture coords passed in from the vertex shader
        'varying vec4 vTintColor;', //  the color value passed in from the vertex shader (texture color + alpha + tint)
        'varying vec4 vBgColor;', //  the bg color value passed in from the vertex shader
        'varying float vTextureIndex;',

        'uniform sampler2D uSamplerArray[' + this.renderer.maxTextures + '];',

        'const vec4 PINK = vec4(1.0, 0.0, 1.0, 1.0);',

        'void main(void) {',
        '   vec4 pixel;',

        '   if (vTextureIndex == 0.0)',
        '   {',
        '       pixel = texture2D(uSamplerArray[0], vTextureCoord);',
        '   }',
        '// IFELSEBLOCK', // special tag used to insert the multi-texture if else block. Do not edit or remove.
        '   else',
        '   {',
        '       pixel = PINK;',
        '   }',

        '   pixel *= vTintColor;',
        // '   if (pixel.a == 0.0) pixel = vBgColor;', // if texture alpha is zero, use the bg color
        '   gl_FragColor = pixel;',
        '}'
    ];

    var block = [];
    var splicePoint = 0;

    //  Build the else if block
    for (var t = 1; t < this.renderer.maxTextures; t++)
    {
        block.push('   else if (vTextureIndex == ' + t + '.0)');
        block.push('   {');
        block.push('       pixel = texture2D(uSamplerArray[' + t + '], vTextureCoord);');
        block.push('   }');
    }

    //  Parse the fragment src array
    for (i = 0; i < this.fragmentSrc.length; i++)
    {
        if (this.fragmentSrc[i] === '// IFELSEBLOCK')
        {
            //  Store the index at which we need to insert the if else block
            splicePoint = i;
            break;
        }
    }

    //  Store the end part of the shader
    var shaderEnd = this.fragmentSrc.splice(splicePoint);

    //  Stitch it back together again
    this.fragmentSrc = this.fragmentSrc.concat(block, shaderEnd);

    //  Compile the Shader
    this.program = this.renderer.compileProgram(this.vertexSrc, this.fragmentSrc);

    //  Bind empty multi-textures to avoid WebGL spam

    gl.useProgram(this.program);

    var indices = [];

    for (i = 0; i < this.renderer.maxTextures; i++)
    {
        indices.push(i);
    }

    this.uSampler = gl.getUniformLocation(this.program, 'uSamplerArray[0]');

    gl.uniform1iv(this.uSampler, indices);
};

MultiTextureBatch.prototype.bindShader = function ()
{
    var program = this.program;

    // console.log('MultiTexture bindShader');

    var gl = this.gl;
    var vertSize = this.vertSize;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    //  Get and store the attributes

    //  vertex position
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    gl.enableVertexAttribArray(this.aVertexPosition);

    //  texture coordinate
    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');
    gl.enableVertexAttribArray(this.aTextureCoord);

    //  texture index
    this.aTextureIndex = gl.getAttribLocation(program, 'aTextureIndex');
    gl.enableVertexAttribArray(this.aTextureIndex);

    //  tint / pixel color
    this.aTintColor = gl.getAttribLocation(program, 'aTintColor');
    gl.enableVertexAttribArray(this.aTintColor);

    //  background pixel color
    this.aBgColor = gl.getAttribLocation(program, 'aBgColor');
    gl.enableVertexAttribArray(this.aBgColor);

    //  The projection vector (middle of the game world)
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');

    //  The offset vector (camera shake)
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');

    //  The Texture Sampler
    this.uSampler = gl.getUniformLocation(this.program, 'uSamplerArray[0]');

    //  Set the projection vector. Defaults to the middle of the Game World, on negative y.
    //  I.e. if the world is 800x600 then the projection vector is 400 x -300
    gl.uniform2f(this.projectionVector, this.renderer.projection.x, this.renderer.projection.y);

    //  Set the offset vector.
    gl.uniform2f(this.offsetVector, this.renderer.offset.x, this.renderer.offset.y);

    //  The Vertex Position (x/y)
    //  2 FLOATS, 2 * 4 = 8 bytes. Index pos: 0 to 7
    //  final argument = the offset within the vertex input
    gl.vertexAttribPointer(this.aVertexPosition, 2, gl.FLOAT, false, vertSize, 0);

    //  The Texture Coordinate (uvx/uvy)
    //  2 FLOATS, 2 * 4 = 8 bytes. Index pos: 8 to 15
    gl.vertexAttribPointer(this.aTextureCoord, 2, gl.FLOAT, false, vertSize, 8);

    //  Texture Index
    //  1 FLOAT, 4 bytes. Index pos: 16 to 19
    gl.vertexAttribPointer(this.aTextureIndex, 1, gl.FLOAT, false, vertSize, 16);

    //  Tint color
    //  4 UNSIGNED BYTES, 4 bytes. Index pos: 20 to 23
    //  Attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.aTintColor, 4, gl.UNSIGNED_BYTE, true, vertSize, 20);

    //  Background Color
    //  4 UNSIGNED BYTES, 4 bytes. Index pos: 24 to 27
    //  Attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.aBgColor, 4, gl.UNSIGNED_BYTE, true, vertSize, 24);
};

MultiTextureBatch.prototype.add = function (verts, uvs, textureIndex, alpha, tintColors, bgColors)
{
    //  These are TypedArray Views into the vertices ArrayBuffer
    var colors = this.colors;
    var positions = this.positions;

    var i = this._i;

    //  Top Left vert (xy, uv, color)
    positions[i++] = verts.x0;
    positions[i++] = verts.y0;
    positions[i++] = uvs.x0;
    positions[i++] = uvs.y0;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.topLeft + alpha;
    colors[i++] = bgColors.topLeft;

    //  Top Right vert (xy, uv, color)
    positions[i++] = verts.x1;
    positions[i++] = verts.y1;
    positions[i++] = uvs.x1;
    positions[i++] = uvs.y1;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.topRight + alpha;
    colors[i++] = bgColors.topRight;

    //  Bottom Right vert (xy, uv, color)
    positions[i++] = verts.x2;
    positions[i++] = verts.y2;
    positions[i++] = uvs.x2;
    positions[i++] = uvs.y2;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.bottomRight + alpha;
    colors[i++] = bgColors.bottomRight;

    //  Bottom Left vert (xy, uv, color)
    positions[i++] = verts.x3;
    positions[i++] = verts.y3;
    positions[i++] = uvs.x3;
    positions[i++] = uvs.y3;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.bottomLeft + alpha;
    colors[i++] = bgColors.bottomLeft;

    this._i = i;

    this.size++;
};

MultiTextureBatch.prototype.destroy = function ()
{
    this.vertices = null;
    this.indices = null;
    this.view = null;

    this.gl.deleteBuffer(this.vertexBuffer);
    this.gl.deleteBuffer(this.indexBuffer);

    this.renderer.deleteProgram(this.program);

    this.renderer = null;

    this.gl = null;

    this.manager = null;
};

module.exports = MultiTextureBatch;



/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var BaseBatch = __webpack_require__(15);

/**
* Standard Image and Sprite Shader.
*
* @class Phaser.Renderer.WebGL.Batch.SingleTexture
* @constructor
* @param {Phaser.Renderer.WebGL} renderer - The WebGL Renderer.
*/
var SingleTextureBatch = function (manager, batchSize)
{
    //  Vertex Data Size is calculated by adding together:
    //
    //  Position (vec2) = 4 * 2 = 8 bytes
    //  UV (vec2) = 4 * 2 = 8 bytes
    //  Texture Index (float) = 4 bytes
    //  Tint Color (float) = 4 bytes
    //  BG Color (float) = 4 bytes
    //
    //  Total: 28 bytes (per vert) * 4 (4 verts per quad) (= 112 bytes) * maxSize (usually 2000) = 224 kilobytes sent to the GPU every frame

    var vertSize = (4 * 2) + (4 * 2) + (4) + (4) + (4);

    BaseBatch.call(this, manager, batchSize, vertSize);

    this.type = 1;

    //  View on the vertices as a Float32Array
    this.positions = new Float32Array(this.vertices);

    //  View on the vertices as a Uint32Array
    this.colors = new Uint32Array(this.vertices);

    //  Attributes and Uniforms specific to this Batch Shader

    //  @type {GLint}
    this.aVertexPosition;

    //  @type {GLint}
    this.aTextureCoord;

    //  @type {GLint}
    this.aTextureIndex;

    //  @type {GLint}
    this.aTintColor;

    //  @type {GLint}
    this.aBgColor;

    //  @type {WebGLUniformLocation}
    this.uSampler;

    //  @type {WebGLUniformLocation}
    this.projectionVector;

    //  @type {WebGLUniformLocation}
    this.offsetVector;
};

SingleTextureBatch.prototype = Object.create(BaseBatch.prototype);

SingleTextureBatch.prototype.constructor = SingleTextureBatch;

SingleTextureBatch.prototype.init = function ()
{
    this.gl = this.renderer.gl;

    this.vertexSrc = [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'attribute float aTextureIndex;',
        'attribute vec4 aTintColor;',
        'attribute vec4 aBgColor;',

        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vTintColor;',
        'varying vec4 vBgColor;',
        'varying float vTextureIndex;',

        'const vec2 center = vec2(-1.0, 1.0);',

        'void main(void) {',
        '   if (aTextureIndex > 0.0) gl_Position = vec4(0.0);',
        '   gl_Position = vec4(((aVertexPosition + offsetVector) / projectionVector) + center, 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;', // pass the texture coordinate to the fragment shader, the GPU will interpolate the points
        '   vTintColor = vec4(aTintColor.rgb * aTintColor.a, aTintColor.a);', // pre-multiply the alpha (all textures are pre-multiplied)
        '   vBgColor = aBgColor;',
        '   vTextureIndex = aTextureIndex;',
        '}'
    ];

    this.fragmentSrc = [
        'precision lowp float;',

        'varying vec2 vTextureCoord;', // the texture coords passed in from the vertex shader
        'varying vec4 vTintColor;', //  the color value passed in from the vertex shader (texture color + alpha + tint)
        'varying vec4 vBgColor;', //  the bg color value passed in from the vertex shader
        'varying float vTextureIndex;',

        'uniform sampler2D uSampler;', // our texture

        'void main(void) {',
        '   vec4 pixel = texture2D(uSampler, vTextureCoord) * vTintColor;', // get the color from the texture
        // '   if (pixel.a == 0.0) pixel = vBgColor;', // if texture alpha is zero, use the bg color
        '   gl_FragColor = pixel;',
        '}'
    ];

    //  Compile the Shader
    this.program = this.renderer.compileProgram(this.vertexSrc, this.fragmentSrc);

    //  Our static index buffer, calculated once at the start of our game

    //  This contains the indices data for the quads.
    //
    //  A quad is made up of 2 triangles (A and B in the image below)
    //
    //  0 = Top Left
    //  1 = Top Right
    //  2 = Bottom Right
    //  3 = Bottom Left
    //
    //  0----1
    //  |\  A|
    //  | \  |
    //  |  \ |
    //  | B \|
    //  |    \
    //  3----2
    //
    //  Because triangles A and B share 2 points (0 and 2) the vertex buffer only stores
    //  4 sets of data (top-left, top-right, bottom-left and bottom-right), which is why
    //  the indices offsets uses the j += 4 iteration. Indices array has to contain 3
    //  entries for every triangle (so 6 for every quad), but our vertex data compacts
    //  that down, as we don't want to fill it with loads of DUPLICATE data, so the
    //  indices array is a look-up table, telling WebGL where in the vertex buffer to look
    //  for that triangles indice data.

    //  batchSize * vertSize = 2000 * 6 (because we store 6 pieces of vertex data per triangle)
    //  and up to a maximum of 2000 entries in the batch

    for (var i = 0, j = 0; i < (this.maxSize * this.vertSize); i += 6, j += 4)
    {
        //  Triangle 1
        this.indices[i + 0] = j + 0;    //  Top Left
        this.indices[i + 1] = j + 1;    //  Top Right
        this.indices[i + 2] = j + 2;    //  Bottom Right

        //  Triangle 2
        this.indices[i + 3] = j + 0;    //  Top Left
        this.indices[i + 4] = j + 2;    //  Bottom Right
        this.indices[i + 5] = j + 3;    //  Bottom Left
    }

    var gl = this.gl;

    //  Create indices buffer
    this.indexBuffer = gl.createBuffer();

    //  Bind it
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    //  Set the source of the buffer data (this.indices array)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    //  Create Vertex Data buffer
    this.vertexBuffer = gl.createBuffer();

    //  Bind it
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

    //  Set the source of the buffer data (this.vertices array)
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

};

SingleTextureBatch.prototype.bindShader = function ()
{
    var gl = this.gl;
    var program = this.program;
    var vertSize = this.vertSize;

    //  Set Shader
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    //  Get and store the attributes

    //  vertex position
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    gl.enableVertexAttribArray(this.aVertexPosition);

    //  texture coordinate
    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');
    gl.enableVertexAttribArray(this.aTextureCoord);

    //  texture index
    this.aTextureIndex = gl.getAttribLocation(program, 'aTextureIndex');
    gl.enableVertexAttribArray(this.aTextureIndex);

    //  tint / pixel color
    this.aTintColor = gl.getAttribLocation(program, 'aTintColor');
    gl.enableVertexAttribArray(this.aTintColor);

    //  background pixel color
    this.aBgColor = gl.getAttribLocation(program, 'aBgColor');
    gl.enableVertexAttribArray(this.aBgColor);

    //  The projection vector (middle of the game world)
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');

    //  The offset vector (camera shake)
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');

    //  The Texture Sampler
    this.uSampler = gl.getUniformLocation(this.program, 'uSampler');

    //  Set the projection vector. Defaults to the middle of the Game World, on negative y.
    //  I.e. if the world is 800x600 then the projection vector is 400 x -300
    gl.uniform2f(this.projectionVector, this.renderer.projection.x, this.renderer.projection.y);

    //  Set the offset vector.
    gl.uniform2f(this.offsetVector, this.renderer.offset.x, this.renderer.offset.y);

    //  The Vertex Position (x/y)
    //  2 FLOATS, 2 * 4 = 8 bytes. Index pos: 0 to 7
    //  final argument = the offset within the vertex input
    gl.vertexAttribPointer(this.aVertexPosition, 2, gl.FLOAT, false, vertSize, 0);

    //  The Texture Coordinate (uvx/uvy)
    //  2 FLOATS, 2 * 4 = 8 bytes. Index pos: 8 to 15
    gl.vertexAttribPointer(this.aTextureCoord, 2, gl.FLOAT, false, vertSize, 8);

    //  Texture Index
    //  1 FLOAT, 4 bytes. Index pos: 16 to 19
    gl.vertexAttribPointer(this.aTextureIndex, 1, gl.FLOAT, false, vertSize, 16);

    //  Tint color
    //  4 UNSIGNED BYTES, 4 bytes. Index pos: 20 to 23
    //  Attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.aTintColor, 4, gl.UNSIGNED_BYTE, true, vertSize, 20);

    //  Background Color
    //  4 UNSIGNED BYTES, 4 bytes. Index pos: 24 to 27
    //  Attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.aBgColor, 4, gl.UNSIGNED_BYTE, true, vertSize, 24);
};

SingleTextureBatch.prototype.add = function (verts, uvs, textureIndex, alpha, tintColors, bgColors)
{
    //  These are TypedArray Views into the vertices ArrayBuffer
    var colors = this.colors;
    var positions = this.positions;

    var i = this._i;

    //  Top Left vert (xy, uv, color)
    positions[i++] = verts.x0;
    positions[i++] = verts.y0;
    positions[i++] = uvs.x0;
    positions[i++] = uvs.y0;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.topLeft + alpha;
    colors[i++] = bgColors.topLeft;

    //  Top Right vert (xy, uv, color)
    positions[i++] = verts.x1;
    positions[i++] = verts.y1;
    positions[i++] = uvs.x1;
    positions[i++] = uvs.y1;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.topRight + alpha;
    colors[i++] = bgColors.topRight;

    //  Bottom Right vert (xy, uv, color)
    positions[i++] = verts.x2;
    positions[i++] = verts.y2;
    positions[i++] = uvs.x2;
    positions[i++] = uvs.y2;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.bottomRight + alpha;
    colors[i++] = bgColors.bottomRight;

    //  Bottom Left vert (xy, uv, color)
    positions[i++] = verts.x3;
    positions[i++] = verts.y3;
    positions[i++] = uvs.x3;
    positions[i++] = uvs.y3;
    positions[i++] = textureIndex;
    colors[i++] = tintColors.bottomLeft + alpha;
    colors[i++] = bgColors.bottomLeft;

    this._i = i;

    this.size++;
};

SingleTextureBatch.prototype.destroy = function ()
{
    this.vertices = null;
    this.indices = null;
    this.view = null;

    var gl = this.gl;

    gl.disableVertexAttribArray(this.aVertexPosition);
    gl.disableVertexAttribArray(this.aTextureCoord);
    gl.disableVertexAttribArray(this.aTextureIndex);
    gl.disableVertexAttribArray(this.aTintColor);
    gl.disableVertexAttribArray(this.aBgColor);

    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.indexBuffer);

    this.renderer.deleteProgram(this.program);

    this.renderer = null;

    this.gl = null;

    this.manager = null;
};

module.exports = SingleTextureBatch;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CreateEmptyTexture = __webpack_require__(16);

/**
* Frame Buffer Object with drawing quad + shader
*
* @class Phaser.Renderer.Canvas
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
*/
var QuadFBO = function (renderer, parent, x, y, width, height)
{
    this.renderer = renderer;

    this.parent = parent;

    this.gl = renderer.gl;

    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this.textureIndex = 0;

    this.clipX = function (x)
    {
        return (renderer.clipUnitX * x) - 1;
    };

    this.clipY = function (y)
    {
        return 1 - (renderer.clipUnitY * y);
    };

    this.vertexBuffer;
    this.indexBuffer;
    this.textureBuffer;

    this.vertices;

    this.texture;
    this.renderBuffer;
    this.frameBuffer;

    this.program;
    this.aVertexPosition;
    this.aTextureCoord;

    this._normal;
    this._twirl;

    this.init();
};

QuadFBO.prototype.constructor = QuadFBO;

QuadFBO.prototype = {

    init: function ()
    {
        var gl = this.gl;

        //  An FBO quad is made up of 2 triangles (A and B in the image below)
        //
        //  0 = Bottom Left (-1, -1)
        //  1 = Bottom Right (1, -1)
        //  2 = Top Left (-1, 1)
        //  3 = Top Right (1, 1)
        //
        //  2----3
        //  |\  B|
        //  | \  |
        //  |  \ |
        //  | A \|
        //  |    \
        //  0----1

        var width = this.renderer.width;
        var height = this.renderer.height;

        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([ 0, 1, 2, 2, 1, 3 ]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        this.vertices = new Float32Array(8);

        this.updateVerts();

        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

        this.textureBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 1, 0, 0, 1, 1, 1 ]), gl.STATIC_DRAW);

        //  Create a texture for our color buffer
        this.texture = CreateEmptyTexture(gl, width, height, 0, 0);

        //  The FBO's depth buffer
        this.renderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);

        this.frameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

        //  May need to optionally be: gl.DEPTH_STENCIL_ATTACHMENT
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);

        var fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

        if (fbStatus !== gl.FRAMEBUFFER_COMPLETE)
        {
            window.console.error('FrameBuffer Error: ', this.renderer._fbErrors[fbStatus]);
        }

        this.createShader();
    },

    //  This whole function ought to be split out into the Shader Manager
    //    so they can easily change the shader being used for an FBO.
    //  This class will have to expose those shader attribs though.
    createShader: function ()
    {
        //  Create the quad shader

        var gl = this.gl;

        var vertexSrc = [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',

            'varying vec2 vTextureCoord;',

            'void main(void) {',
            '   vTextureCoord = aTextureCoord;',
            '   gl_Position = vec4(aVertexPosition, 0.0, 1.0);',
            '}'
        ];

        var fragmentSrc = [
            'precision mediump float;',

            'uniform sampler2D uSampler;',
            'uniform float time;',

            'varying vec2 vTextureCoord;',

            'void main(void) {',
            '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
            '}'
        ];

        var twirlFragmentSrc = [
            'precision mediump float;',

            'uniform sampler2D uSampler;',
            'uniform float time;',

            'varying vec2 vTextureCoord;',

            'const float radius = 0.5;',
            'const float angle = 5.0;',
            'const vec2 offset = vec2(0.5, 0.5);',

            'void main(void) {',
            '   vec2 coord = vTextureCoord - offset;',
            '   float distance = length(coord);',

            '   if (distance < radius) {',
            '       float ratio = (radius - distance) / radius;',
            '       float angleMod = ratio * ratio * angle;',
            '       float s = sin(angleMod);',
            '       float c = cos(angleMod);',
            '       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);',
            '   }',

            '   gl_FragColor = texture2D(uSampler, coord + offset);',
            '}'
        ];

        var plasmaFragmentSrc = [

            'precision mediump float;',

            'uniform sampler2D uSampler;',
            'uniform float time;',

            'varying vec2 vTextureCoord;',

            '// Oldskool plasm shader. (c) Victor Korsun, bitekas@gmail.com; 1996-2013.',
            '//',
            '// Attribution-ShareAlike CC License.',

            '//----------------',
            'const int ps = 2; // use values > 1..10 for oldskool',
            'const vec2 resolution = vec2(1280.0, 720.0);',
            '//----------------',

            'void main(void) {',

            'float x = gl_FragCoord.x / resolution.x * 1280.0;',
            'float y = gl_FragCoord.y / resolution.y * 720.0;',

            'if (ps > 0)',
            '{',
            'x = float(int(x / float(ps)) * ps);',
            'y = float(int(y / float(ps)) * ps);',
            '}',

            'float mov0 = x+y+sin(time)*10.+sin(x/90.)*70.+time*2.;',
            'float mov1 = (mov0 / 5. + sin(mov0 / 30.))/ 10. + time * 3.;',
            'float mov2 = mov1 + sin(mov1)*5. + time*1.0;',
            'float cl1 = sin(sin(mov1/4. + time)+mov1);',
            'float c1 = cl1 +mov2/2.-mov1-mov2+time;',
            'float c2 = sin(c1+sin(mov0/100.+time)+sin(y/57.+time/50.)+sin((x+y)/200.)*2.);',
            'float c3 = abs(sin(c2+cos((mov1+mov2+c2) / 10.)+cos((mov2) / 10.)+sin(x/80.)));',

            'float dc = float(16-ps);',

            'if (ps > 0)',
            '{',
            'cl1 = float(int(cl1*dc))/dc;',
            'c2 = float(int(c2*dc))/dc;',
            'c3 = float(int(c3*dc))/dc;',
            '}',

            'gl_FragColor = vec4(cl1, c2, c3, 1.0);',

            '}'
        ];


        //  This compiles, attaches and links the shader
        this._normal = this.renderer.compileProgram(vertexSrc, fragmentSrc);
        // this._twirl = this.renderer.compileProgram(vertexSrc, twirlFragmentSrc);
        this._twirl = this.renderer.compileProgram(vertexSrc, plasmaFragmentSrc);

        this.program = this._normal;

        this.aVertexPosition = gl.getAttribLocation(this.program, 'aVertexPosition');
        this.aTextureCoord = gl.getAttribLocation(this.program, 'aTextureCoord');
    },

    setPosition: function (x, y)
    {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = 0; }

        if (x !== this._x || y !== this._y)
        {
            this._x = x;
            this._y = y;

            this.updateVerts();
        }
    },

    setSize: function (width, height)
    {
        if (width === undefined) { width = this.renderer.width; }
        if (height === undefined) { height = this.renderer.height; }

        if (width !== this._width || height !== this._height)
        {
            this._width = width;
            this._height = height;

            this.updateVerts();
        }
    },

    updateVerts: function ()
    {
        var x = this._x;
        var y = this._y;

        var width = this._width;
        var height = this._height;

        //  Bottom Left
        this.vertices[0] = this.clipX(x);
        this.vertices[1] = this.clipY(y + height);

        //  Bottom Right
        this.vertices[2] = this.clipX(x + width);
        this.vertices[3] = this.clipY(y + height);

        //  Top Left
        this.vertices[4] = this.clipX(x);
        this.vertices[5] = this.clipY(y);

        //  Top Right
        this.vertices[6] = this.clipX(x + width);
        this.vertices[7] = this.clipY(y);
    },

    activate: function ()
    {
        var gl = this.gl;

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);

        //  FBO textures always use index zero
        this.renderer.textureArray[0] = this.texture;
    },

    bindShader: function ()
    {
        var program = this.program;

        var gl = this.gl;

        gl.useProgram(program);

        gl.uniform1i(gl.getUniformLocation(program, 'uSampler'), 0);
        gl.uniform1f(gl.getUniformLocation(program, 'time'), this.parent.sys.mainloop.frameDelta);

        gl.enableVertexAttribArray(this.aTextureCoord);
        gl.enableVertexAttribArray(this.aVertexPosition);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
        gl.vertexAttribPointer(this.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
        gl.vertexAttribPointer(this.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
    },

    //  destinationBuffer MUST be set, even if just to 'null'
    render: function (destinationBuffer)
    {
        var gl = this.gl;

        //  Set the framebuffer to render to
        gl.bindFramebuffer(gl.FRAMEBUFFER, destinationBuffer);

        //  Bind the texture we rendered to, for reading, always TEXTURE0
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        //  The shader that will read from the fbo texture
        if (this.renderer.shaderManager.setShader(this.program))
        {
            this.bindShader();
        }

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        this.renderer.drawCount++;
    },

    destroy: function ()
    {

        //  TODO!

    }

};

Object.defineProperties(QuadFBO.prototype, {

    x: {

        enumerable: true,

        get: function ()
        {
            return this._x;
        },

        set: function (value)
        {
            if (value !== this._x)
            {
                this._x = value;
                this.updateVerts();
            }
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this._y;
        },

        set: function (value)
        {
            if (value !== this._y)
            {
                this._y = value;
                this.updateVerts();
            }
        }

    },

    width: {

        enumerable: true,

        get: function ()
        {
            return this._width;
        },

        set: function (value)
        {
            if (value !== this._width)
            {
                this._width = value;
                this.updateVerts();
            }
        }

    },

    height: {

        enumerable: true,

        get: function ()
        {
            return this._height;
        },

        set: function (value)
        {
            if (value !== this._height)
            {
                this._height = value;
                this.updateVerts();
            }
        }

    }

});

module.exports = QuadFBO;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(17);
var Systems = __webpack_require__(18);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var NOOP = __webpack_require__(19);
var State = __webpack_require__(71);
var Settings = __webpack_require__(17);
var Systems = __webpack_require__(18);
var GetObjectValue = __webpack_require__(9);
// var LoaderEvent = require('../loader/events/');

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

        newState.sys.fbo = this.game.renderer.createFBO(newState, x, y, width, height);
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

                    state.sys.load.events.once('LOADER_COMPLETE_EVENT', this.loadComplete.bind(this));

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var FactoryContainer = __webpack_require__(6);

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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var BaseLoader = __webpack_require__(47);
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
    var file = new ImageLoader(key, url, this.path);

    this.addFile(file);

    return this;
};

Loader.prototype.processCallback = function ()
{
    //  All of the files have loaded. Now to put them into the Cache.

    if (this.storage.size > 0)
    {
        var textures = this.state.sys.textures;

        this.storage.each(function (file)
        {
            if (file.type === 'image')
            {
                textures.addImage(file.key, file.data);
            }
        });
    }

};

module.exports = Loader;


/***/ },
/* 75 */
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

        if (this.state.settings.visible && this.state.sys.color.alpha !== 0)
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
/* 76 */
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
/* 77 */
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
            if (callback(this.values[i]) === false)
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
/* 78 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A Frame is a section of a Texture.
*
* Called TextureFrame during integration, will rename to Frame later.
*
* @class Phaser.TextureFrame
* @constructor
* @param {Phaser.Texture} texture - The Texture this Frame belongs to.
* @param {string} name - The unique (within the Texture) name of this Frame.
* @param {number} x - X position of the frame within the Texture.
* @param {number} y - Y position of the frame within the Texture.
* @param {number} width - Width of the frame within the Texture.
* @param {number} height - Height of the frame within the Texture.
*/
var Frame = function (texture, name, sourceIndex, x, y, width, height)
{
    /**
    * @property {Phaser.Texture} texture - The Texture this frame belongs to.
    */
    this.texture = texture;

    /**
    * @property {string} name - The name of this frame within the Texture.
    */
    this.name = name;

    this.source = texture.source[sourceIndex];

    this.sourceIndex = sourceIndex;

    /**
    * @property {number} cutX - X position within the source image to cut from.
    */
    this.cutX = x;

    /**
    * @property {number} cutY - Y position within the source image to cut from.
    */
    this.cutY = y;

    /**
    * @property {number} cutWidth - The width of the area in the source image to cut.
    */
    this.cutWidth = width;

    /**
    * @property {number} cutHeight - The height of the area in the source image to cut.
    */
    this.cutHeight = height;

    /**
    * @property {number} x - The X rendering offset of this Frame, taking trim into account.
    */
    this.x = 0;

    /**
    * @property {number} y - The Y rendering offset of this Frame, taking trim into account.
    */
    this.y = 0;

    /**
    * @property {number} width - The rendering width of this Frame, taking trim into account.
    */
    this.width = width;

    /**
    * @property {number} height - The rendering height of this Frame, taking trim into account.
    */
    this.height = height;

    /**
    * Is this frame is rotated or not in the Texture?
    * Rotation allows you to use rotated frames in texture atlas packing.
    * It has nothing to do with Sprite rotation.
    *
    * @property {boolean} rotated
    * @default
    */
    this.rotated = false;

    /**
    * Is this a tiling texture? As used by the likes of a TilingSprite.
    * TODO: Try and remove this, it shouldn't be here
    *
    * @property {boolean} isTiling
    * @default
    */
    this.isTiling = false;

    /**
    * This will let a renderer know that a tinted parent has updated its texture.
    * TODO: Try and remove this, it shouldn't be here
    *
    * @property {boolean} requiresReTint
    * @default
    */
    this.requiresReTint = false;

    //  Over-rides the Renderer setting? -1 = use Renderer Setting, 0 = No rounding, 1 = Round
    this.autoRound = -1;

    /**
    * The un-modified source frame, trim and UV data.
    *
    * @private
    * @property {object} data
    */
    this.data = {
        cut: {
            x: x,
            y: y,
            w: width,
            h: height,
            r: x + width,
            b: y + height
        },
        trim: false,
        sourceSize: {
            w: width,
            h: height
        },
        spriteSourceSize: {
            x: 0,
            y: 0,
            w: width,
            h: height
        },
        uvs: {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x3: 0,
            y3: 0
        }
    };

    this.updateUVs();
};

Frame.prototype.constructor = Frame;

Frame.prototype = {

    /**
    * If the frame was trimmed when added to the Texture Atlas, this records the trim and source data.
    *
    * @method Phaser.TextureFrame#setTrim
    * @param {number} actualWidth - The width of the frame before being trimmed.
    * @param {number} actualHeight - The height of the frame before being trimmed.
    * @param {number} destX - The destination X position of the trimmed frame for display.
    * @param {number} destY - The destination Y position of the trimmed frame for display.
    * @param {number} destWidth - The destination width of the trimmed frame for display.
    * @param {number} destHeight - The destination height of the trimmed frame for display.
    */
    setTrim: function (actualWidth, actualHeight, destX, destY, destWidth, destHeight)
    {
        //  Store actual values

        this.data.trim = true;

        this.data.sourceSize.w = actualWidth;
        this.data.sourceSize.h = actualHeight;

        this.data.spriteSourceSize.x = destX;
        this.data.spriteSourceSize.y = destY;
        this.data.spriteSourceSize.w = destWidth;
        this.data.spriteSourceSize.h = destHeight;

        //  Adjust properties
        this.x = destX;
        this.y = destY;
        this.width = destWidth;
        this.height = destHeight;

        this.updateUVs();

        return this;
    },

    /**
    * Updates the internal WebGL UV cache.
    *
    * @method updateUVs
    * @private
    */
    updateUVs: function ()
    {
        var tw = this.source.width;
        var th = this.source.height;
        var uvs = this.data.uvs;
        
        uvs.x0 = this.cutX / tw;
        uvs.y0 = this.cutY / th;

        uvs.x1 = (this.cutX + this.cutWidth) / tw;
        uvs.y1 = this.cutY / th;

        uvs.x2 = (this.cutX + this.cutWidth) / tw;
        uvs.y2 = (this.cutY + this.cutHeight) / th;

        uvs.x3 = this.cutX / tw;
        uvs.y3 = (this.cutY + this.cutHeight) / th;

        return this;
    },

    /**
    * Updates the internal WebGL UV cache.
    *
    * @method updateUVsInverted
    * @private
    */
    updateUVsInverted: function ()
    {
        var tw = this.source.width;
        var th = this.source.height;
        var uvs = this.data.uvs;
        
        uvs.x0 = this.cutX / tw;
        uvs.y0 = this.cutY / th;

        uvs.x1 = (this.cutX + this.cutHeight) / tw;
        uvs.y1 = this.cutY / th;

        uvs.x2 = (this.cutX + this.cutHeight) / tw;
        uvs.y2 = (this.cutY + this.cutWidth) / th;

        uvs.x3 = this.cutX / tw;
        uvs.y3 = (this.cutY + this.cutWidth) / th;

        return this;
    },

    clone: function ()
    {
        var clone = new Phaser.TextureFrame(this.texture, this.name, this.sourceIndex);

        clone.cutX = this.cutX;
        clone.cutY = this.cutY;
        clone.cutWidth = this.cutWidth;
        clone.cutHeight = this.cutHeight;

        clone.x = this.x;
        clone.y = this.y;
        clone.width = this.width;
        clone.height = this.height;

        clone.rotated = this.rotated;

        clone.data = Phaser.Utils.extend(true, clone.data, this.data);

        clone.updateUVs();

        return clone;
    },

    destroy: function ()
    {
    }

};

Object.defineProperties(Frame.prototype, {

    /**
    * The width of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
    * before being packed.
    *
    * @name Phaser.TextureFrame#realWidth
    * @property {any} realWidth
    */
    realWidth: {

        enumerable: true,

        get: function ()
        {
            return this.data.sourceSize.w;
        }

    },

    /**
    * The height of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
    * before being packed.
    *
    * @name Phaser.TextureFrame#realHeight
    * @property {any} realHeight
    */
    realHeight: {

        enumerable: true,

        get: function ()
        {
            return this.data.sourceSize.h;
        }

    },

    /**
    * UVs
    *
    * @name Phaser.TextureFrame#uvs
    * @property {Object} uvs
    */
    uvs: {

        enumerable: true,

        get: function ()
        {
            return this.data.uvs;
        }

    }

});

module.exports = Frame;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Frame = __webpack_require__(78);
var TextureSource = __webpack_require__(81);

/**
* A Texture consists of a source, usually an Image from the Cache, or a Canvas, and a collection
* of Frames. The Frames represent the different areas of the Texture. For example a texture atlas
* may have many Frames, one for each element within the atlas. Where-as a single image would have
* just one frame, that encompasses the whole image.
*
* Textures are managed by the global TextureManager. This is a singleton class that is
* responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
*
* Sprites and other Game Objects get the texture data they need from the TextureManager.
*
* @class Phaser.Texture
* @constructor
* @param {object} source
* @param {number} scaleMode
*/
var Texture = function (manager, key, source)
{
    this.manager = manager;

    if (!Array.isArray(source))
    {
        source = [ source ];
    }

    this.key = key;

    /**
    * The source that is used to create the texture.
    * Usually an Image, but can also be a Canvas.
    *
    * @property source
    * @type array
    */
    this.source = [];

    /**
    * @property {object} frames - Frames
    */
    this.frames = {};

    this.frameTotal = 0;

    //  Load the Sources
    for (var i = 0; i < source.length; i++)
    {
        this.source.push(new TextureSource(this, source[i]));
    }
};

Texture.prototype.constructor = Texture;

Texture.prototype = {

    add: function (name, sourceIndex, x, y, width, height)
    {
        var frame = new Frame(this, name, sourceIndex, x, y, width, height);

        this.frames[name] = frame;

        this.frameTotal++;

        return frame;
    },

    get: function (name)
    {
        if (name === undefined || name === null || this.frameTotal === 1)
        {
            name = '__BASE';
        }

        var frame = this.frames[name];

        if (!frame)
        {
            console.warn('No Texture.frame found with name ' + name);
        }
        else
        {
            return frame;
        }
    },

    setTextureIndex: function (index)
    {
        for (var i = 0; i < this.source.length; i++)
        {
            this.source[i].glTextureIndex = index;

            console.log(this.source[i].image.currentSrc, 'index = ', index);

            index++;
        }

        return index;
    },

    /**
    * Destroys this base texture
    *
    * @method destroy
    */
    destroy: function ()
    {
        //  Need to iterate though the TextureSources, and unload each one
        //  then clear out the frames

        /*
        if (this.source)
        {
            Phaser.CanvasPool.removeByCanvas(this.source);
        }

        this.source = null;
        */
    }

};

/**
* Helper function that creates a base texture from the given canvas element.
*
* @static
* @method fromCanvas
* @param canvas {Canvas} The canvas element source of the texture
* @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}Phaser.scaleModes{{/crossLink}} for possible values
* @return {BaseTexture}
Phaser.Texture.fromCanvas = function (canvas, scaleMode)
{
    if (canvas.width === 0)
    {
        canvas.width = 1;
    }

    if (canvas.height === 0)
    {
        canvas.height = 1;
    }

    return new Phaser.Texture(canvas, scaleMode);
};
*/

module.exports = Texture;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Parser = __webpack_require__(89);
var Texture = __webpack_require__(79);

/**
* Textures are managed by the global TextureManager. This is a singleton class that is
* responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
*
* Sprites and other Game Objects get the texture data they need from the TextureManager.
*
* Access it via `state.textures`.
*
* @class Phaser.TextureManager
* @constructor
* @param {Phaser.Game} game
*/
var TextureManager = function (game)
{
    //  Required? Remove if not
    this.game = game;

    this.list = {};
};

TextureManager.prototype.constructor = TextureManager;

TextureManager.prototype = {

    addImage: function (key, source)
    {
        var texture = this.create(key, source);
        
        Parser.Image(texture, 0);

        return texture;
    },

    addCanvas: function (key, source)
    {
        var texture = this.create(key, source);
        
        Parser.Canvas(texture, 0);

        return texture;
    },

    addAtlasJSONArray: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.JSONArray(texture, i, data[i]);
            }
        }
        else
        {
            Parser.JSONArray(texture, 0, data);
        }

        return texture;
    },

    addAtlasJSONHash: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.JSONHash(texture, i, data[i]);
            }
        }
        else
        {
            Parser.JSONHash(texture, 0, data);
        }

        return texture;
    },

    addSpriteSheet: function (key, source, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
    {
        var texture = this.create(key, source);

        var width = texture.source[0].width;
        var height = texture.source[0].height;

        Parser.SpriteSheet(texture, 0, 0, 0, width, height, frameWidth, frameHeight, startFrame, endFrame, margin, spacing);

        return texture;
    },

    addSpriteSheetFromAtlas: function (key, atlasKey, atlasFrame, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
    {
        var atlas = this.get(atlasKey);
        var sheet = atlas.get(atlasFrame);

        if (sheet)
        {
            var texture = this.create(key, sheet.source.image);

            Parser.SpriteSheet(texture, 0, sheet.cutX, sheet.cutY, sheet.cutWidth, sheet.cutHeight, frameWidth, frameHeight, startFrame, endFrame, margin, spacing);

            return texture;
        }
    },

    addAtlasStarlingXML: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.StarlingXML(texture, i, data[i]);
            }
        }
        else
        {
            Parser.StarlingXML(texture, 0, data);
        }

        return texture;
    },

    addAtlasPyxel: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.Pyxel(texture, i, data[i]);
            }
        }
        else
        {
            Parser.Pyxel(texture, 0, data);
        }

        return texture;
    },

    create: function (key, source)
    {
        var texture = new Texture(this, key, source);

        this.list[key] = texture;

        return texture;

    },

    exists: function (key)
    {
        return (this.list.hasOwnProperty(key));
    },

    get: function (key)
    {
        if (key === undefined) { key = '__DEFAULT'; }

        if (this.list[key])
        {
            return this.list[key];
        }
        else
        {
            return this.list['__MISSING'];
        }
    },

    cloneFrame: function (key, frame)
    {
        if (this.list[key])
        {
            return this.list[key].get(frame).clone();
        }
    },

    getFrame: function (key, frame)
    {
        if (this.list[key])
        {
            return this.list[key].get(frame);
        }
    },

    setTexture: function (gameObject, key, frame)
    {
        if (this.list[key])
        {
            gameObject.texture = this.list[key];
            gameObject.frame = gameObject.texture.get(frame);
        }

        return gameObject;
    },

    /**
    * Passes all Textures to the given callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [thisArg] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the child.
    */
    each: function (callback, thisArg)
    {
        var args = [ null ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (var texture in this.list)
        {
            args[0] = this.list[texture];

            callback.apply(thisArg, args);
        }
    }

};

module.exports = TextureManager;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var IsPowerOfTwo = __webpack_require__(55);

/**
*
* @class Phaser.TextureSource
* @constructor
* @param {object} source
* @param {number} scaleMode
*/
var TextureSource = function (texture, source)
{
    this.texture = texture;

    this.image = source;

    this.compressionAlgorithm = null;

    /**
    * The Resolution of the texture.
    *
    * @property resolution
    * @type Number
    */
    this.resolution = 1;
    
    /**
    * The width of the Texture.
    *
    * @property width
    * @type Number
    * @readOnly
    */
    this.width = source.naturalWidth || source.width || 0;

    /**
    * The height of the Texture.
    *
    * @property height
    * @type Number
    * @readOnly
    */
    this.height = source.naturalHeight || source.height || 0;

    /**
    * The scale mode to apply when scaling this texture.
    * NEAREST or DEFAULT
    *
    * @property scaleMode
    * @type {Number}
    * @default Phaser.scaleModes.DEFAULT;
    */
    this.scaleMode = CONST.scaleModes.DEFAULT;
    // this.scaleMode = CONST.scaleModes.NEAREST;

    /**
    * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
    *
    * @property premultipliedAlpha
    * @type Boolean
    * @default true
    */
    this.premultipliedAlpha = true;

    /**
    * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
    * Also the texture must be a power of two size to work
    *
    * @property mipmap
    * @type {Boolean}
    */
    this.mipmap = false;

    /**
    * A BaseTexture can be set to skip the rendering phase in the WebGL Sprite Batch.
    *
    * You may want to do this if you have a parent Sprite with no visible texture (i.e. uses the internal `__default` texture)
    * that has children that you do want to render, without causing a batch flush in the process.
    *
    * @property renderable
    * @type Boolean
    */
    this.renderable = true;

    /**
    * @property isPowerOf2
    * @type boolean
    */
    this.isPowerOf2 = IsPowerOfTwo(this.width, this.height);

    /**
    * @property glTexture
    */
    this.glTexture = null;

    /**
    * The multi texture batching index number.
    * @property glTextureIndex
    * @type Number
    */
    this.glTextureIndex = 0;

    /**
    * The timestamp when this texture was last used by the WebGL renderer.
    * Can be used to purge out 'dead' textures from GPU memory.
    * @property glLastUsed
    * @type Number
    */
    this.glLastUsed = 0;

    /**
    * @property glDirty
    */
    this.glDirty = true;
};

module.exports = TextureSource;


/***/ },
/* 82 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.Image
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var CanvasTextureParser = function (texture, sourceIndex)
{
    var source = texture.source[sourceIndex];

    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = CanvasTextureParser;


/***/ },
/* 83 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.Image
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var ImageTextureParser = function (texture, sourceIndex)
{
    var source = texture.source[sourceIndex];

    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = ImageTextureParser;


/***/ },
/* 84 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a JSON Array and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in Array format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var JSONArrayTextureParser = function (texture, sourceIndex, json)
{
    //  Malformed?
    if (!json['frames'])
    {
        console.warn('Invalid Texture Atlas JSON Array given, missing \'frames\' array');
        return;
    }

    //  By this stage frames is a fully parsed array
    var frames = json['frames'];
    var newFrame;

    for (var i = 0; i < frames.length; i++)
    {
        var src = frames[i];

        //  The frame values are the exact coordinates to cut the frame out of the atlas from
        newFrame = texture.add(src.filename, sourceIndex, src.frame.x, src.frame.y, src.frame.w, src.frame.h);

        //  These are the original (non-trimmed) sprite values
        if (src.trimmed)
        {
            newFrame.setTrim(
                src.sourceSize.w,
                src.sourceSize.h,
                src.spriteSourceSize.x,
                src.spriteSourceSize.y,
                src.spriteSourceSize.w,
                src.spriteSourceSize.h
            );
        }

        if (src.rotated)
        {
            newFrame.rotated = true;
        }
    }

    return texture;
};

module.exports = JSONArrayTextureParser;


/***/ },
/* 85 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a JSON Array and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in JSON Hash format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var JSONHashTextureParser = function (texture, sourceIndex, json)
{
    //  Malformed?
    if (!json['frames'])
    {
        console.warn('Invalid Texture Atlas JSON Hash given, missing \'frames\' Object');
        return;
    }

    //  By this stage frames is a fully parsed Object
    var frames = json['frames'];
    var newFrame;

    for (var key in frames)
    {
        var src = frames[key];

        //  The frame values are the exact coordinates to cut the frame out of the atlas from
        newFrame = texture.add(key, sourceIndex, src.frame.x, src.frame.y, src.frame.w, src.frame.h);

        //  These are the original (non-trimmed) sprite values
        if (src.trimmed)
        {
            newFrame.setTrim(
                src.sourceSize.w,
                src.sourceSize.h,
                src.spriteSourceSize.x,
                src.spriteSourceSize.y,
                src.spriteSourceSize.w,
                src.spriteSourceSize.h
            );
        }

        if (src.rotated)
        {
            newFrame.rotated = true;
        }
    }

    return texture;
};

module.exports = JSONHashTextureParser;


/***/ },
/* 86 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a Pyxel JSON File and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in Pyxel JSON format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var PyxelTextureParser = function (texture, json)
{
    //  Malformed? There are a few keys to check here.
    var signature = [ 'layers', 'tilewidth', 'tileheight', 'tileswide', 'tileshigh' ];

    signature.forEach(function (key)
    {
        if (!json[key])
        {
            // console.warn('Phaser.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing "' + key + '" key.');
            // console.log(json);
            return;
        }
    });

    // For this purpose, I only care about parsing tilemaps with a single layer.
    if (json['layers'].length !== 1)
    {
        // console.warn('Phaser.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps.');
        // console.log(json);
        return;
    }

    var data = new Phaser.FrameData();

    var tileheight = json['tileheight'];
    var tilewidth = json['tilewidth'];

    var frames = json['layers'][0]['tiles'];
    var newFrame;

    for (var i = 0; i < frames.length; i++)
    {
        newFrame = data.addFrame(new Phaser.Frame(
            i,
            frames[i].x,
            frames[i].y,
            tilewidth,
            tileheight,
            "frame_" + i  // No names are included in pyxel tilemap data.
        ));

        // No trim data is included.
        newFrame.setTrim(false);
    }

    return data;
};

module.exports = PyxelTextureParser;


/***/ },
/* 87 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.SpriteSheet
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @param {number} frameWidth - The fixed width of each frame.
* @param {number} frameHeight - The fixed height of each frame.
* @param {number} [startFrame=0] - Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
* @param {number} [endFrame=-1] - The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
* @param {number} [margin=0] - If the frames have been drawn with a margin, specify the amount here.
* @param {number} [spacing=0] - If the frames have been drawn with spacing between them, specify the amount here.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var SpriteSheetTextureParser = function (texture, sourceIndex, x, y, width, height, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
{
    if (startFrame === undefined) { startFrame = 0; }
    if (endFrame === undefined) { endFrame = -1; }
    if (margin === undefined) { margin = 0; }
    if (spacing === undefined) { spacing = 0; }

    var row = Math.floor((width - margin) / (frameWidth + spacing));
    var column = Math.floor((height - margin) / (frameHeight + spacing));
    var total = row * column;

    if (startFrame > total || startFrame < -total)
    {
        startFrame = 0;
    }

    if (startFrame < 0)
    {
        //  Allow negative skipframes.
        startFrame = total + startFrame;
    }

    if (endFrame !== -1)
    {
        total = startFrame + (endFrame + 1);
    }

    var fx = margin;
    var fy = margin;
    var ax = 0;
    var ay = 0;

    for (var i = 0; i < total; i++)
    {
        ax = 0;
        ay = 0;

        var w = fx + frameWidth;
        var h = fy + frameHeight;

        if (w > width)
        {
            ax = w - width;
        }

        if (h > height)
        {
            ay = h - height;
        }

        texture.add(i, sourceIndex, x + fx, y + fy, frameWidth - ax, frameHeight - ay);

        fx += frameWidth + spacing;

        if (fx + frameWidth > width)
        {
            fx = margin;
            fy += frameHeight + spacing;
        }
    }

    return texture;
};

module.exports = SpriteSheetTextureParser;


/***/ },
/* 88 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses the XML and extracts the frame data from it.
*
* @class Phaser.TextureParser.StarlingXML
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} xml - The XML data from the Texture Atlas. Must be in Starling XML format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var StarlingXMLTextureParser = function (texture, xml)
{
    //  Malformed?
    if (!xml.getElementsByTagName('TextureAtlas'))
    {
        // console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
        return;
    }

    //  Let's create some frames then
    var data = new Phaser.FrameData();
    var frames = xml.getElementsByTagName('SubTexture');
    var newFrame;

    var name;
    var frame;
    var x;
    var y;
    var width;
    var height;
    var frameX;
    var frameY;
    var frameWidth;
    var frameHeight;

    for (var i = 0; i < frames.length; i++)
    {
        frame = frames[i].attributes;

        name = frame.name.value;
        x = parseInt(frame.x.value, 10);
        y = parseInt(frame.y.value, 10);
        width = parseInt(frame.width.value, 10);
        height = parseInt(frame.height.value, 10);

        frameX = null;
        frameY = null;

        if (frame.frameX)
        {
            frameX = Math.abs(parseInt(frame.frameX.value, 10));
            frameY = Math.abs(parseInt(frame.frameY.value, 10));
            frameWidth = parseInt(frame.frameWidth.value, 10);
            frameHeight = parseInt(frame.frameHeight.value, 10);
        }

        newFrame = data.addFrame(new Phaser.Frame(i, x, y, width, height, name));

        //  Trimmed?
        if (frameX !== null || frameY !== null)
        {
            newFrame.setTrim(true, width, height, frameX, frameY, frameWidth, frameHeight);
        }
    }

    return data;

};

module.exports = StarlingXMLTextureParser;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {


module.exports = {
    Canvas: __webpack_require__(82),
    Image: __webpack_require__(83),
    SpriteSheet: __webpack_require__(87),
    JSONArray: __webpack_require__(84),
    JSONHash: __webpack_require__(85),
    StarlingXML: __webpack_require__(88),
    Pyxel: __webpack_require__(86)
};


/***/ },
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(21);

var boot = __webpack_require__(20);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNmMwOTI2NDQ1YjE1MjBkZTkzNCIsIndlYnBhY2s6Ly8vLi4vY29uc3QuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvT1MuanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9YSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2NvbnN0LmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2ZpbGV0eXBlcy9JbWFnZUZpbGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9CYXNlQmF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL3V0aWxzL0NyZWF0ZUVtcHR5VGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlbmRlcmVyL3dlYmdsL3V0aWxzL0NyZWF0ZUVtcHR5VGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3V0aWxzL05PT1AuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvcG9seWZpbGxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9EZWJ1Z0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy8uLi9jYW1lcmEvQ2FtZXJhLmpzIiwid2VicGFjazovLy9zcmMvY2FtZXJhL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi4vY2hlY2tzdW0uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9BdWRpby5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9BdWRpby5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0lucHV0LmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0lucHV0LmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvVmlkZW8uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vZG9tL0FkZFRvRE9NLmpzIiwid2VicGFjazovLy8uLi9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy8uLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9ldmVudHMvRXZlbnRCaW5kaW5nLmpzIiwid2VicGFjazovLy9zcmMvZXZlbnRzL0V2ZW50QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ldmVudHMvRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovLy9zcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VXZWJHTFJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvQmFzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9CYXNlTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9GaWxlLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvR2V0VVJMLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvWEhSTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJDb21wbGV0ZUV2ZW50LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJDb21wbGV0ZUV2ZW50LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9tYXRoL0lzUG93ZXJPZlR3by5qcyIsIndlYnBhY2s6Ly8vLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9BcnJheS5pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL01hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9yZW5kZXJlci93ZWJnbC9CYXRjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9CYXRjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL1NoYWRlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL1dlYkdMUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9XZWJHTFJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL011bHRpVGV4dHVyZUJhdGNoLmpzIiwid2VicGFjazovLy9zcmMvcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9NdWx0aVRleHR1cmVCYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9TaW5nbGVUZXh0dXJlQmF0Y2guanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL1NpbmdsZVRleHR1cmVCYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcmVuZGVyZXIvd2ViZ2wvdXRpbHMvUXVhZEZCTy5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlbmRlcmVyL3dlYmdsL3V0aWxzL1F1YWRGQk8uanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvTWFpbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RydWN0cy9TZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL0ZyYW1lLmpzIiwid2VicGFjazovLy8uLi90ZXh0dXJlcy9UZXh0dXJlLmpzIiwid2VicGFjazovLy9zcmMvdGV4dHVyZXMvVGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvVGV4dHVyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy90ZXh0dXJlcy9UZXh0dXJlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvVGV4dHVyZVNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3RleHR1cmVzL1RleHR1cmVTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvQ2FudmFzVGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9JbWFnZVRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvSlNPTkFycmF5VGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9KU09OSGFzaFRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvUHl4ZWxUZXh0dXJlUGFyc2VyLmpzIiwid2VicGFjazovLy8uLi90ZXh0dXJlcy9wYXJzZXJzL1Nwcml0ZVNoZWV0VGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9TdGFybGluZ1hNTFRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90ZXh0dXJlcy9wYXJzZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvcmljaC9Eb2N1bWVudHMvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9zcmMvcGhhc2VyLmpzIiwid2VicGFjazovLy8uLi9waGFzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FDekRBLCtDQ0FBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxHQUFHLHVCQUF1QixPQUFPO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyUUEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTyxzR0FBc0c7QUFDOUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFNUtBOztBQUVBLGNDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxVQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBOzs7Ozs7O0FFUEE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzNCQSxtQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7O0FBRW5EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7O0FBRW5EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FB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RUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFck9BO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsSUFBSTtBQUNsQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLG1DQUFtQyxZQUFZO0FBQy9DLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FFeExBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUNaQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFdDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUUzREE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUM3SkEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFdEJBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFdkNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxzQkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSx3QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQTtBQUNBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxvQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxnQkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxhQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FFaElBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxVQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQSxXQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLHFCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBLG1CQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBOztBQUVBOzs7Ozs7O0FFWkEsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBO0FEQ0EsbUJDQUEsQ0RBQSxFQ0FBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixhQUFhOztBQUU1QztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBRTlEQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRS9FQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWI7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZEO0FBQzdEOztBQUVBO0FB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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBRXBWQTtBQUNBO0FBQ0E7QUFDQSww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O0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUk7QUFDckI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBQzF0QkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7Ozs7Ozs7QUN2WUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLEtBQUs7O0FBRUw7QUFD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QThCLE9BQU87O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBQ3Y3QkEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFFBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUVyUUEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUViQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxnQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBRTFXQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx5QkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBRXpGQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLHdFQUF3RTtBQUN0RixjQUFjLGNBQWM7QUFDNUIsY0FBYyxhQUFhO0FBQzNCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9COztBQUV0RDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUUvQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7O0FDRUEsbUJEQUEsQ0NBQSxFREFBOzs7Ozs7OztBRUhBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsVUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxrQkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHNCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU3UUEsYUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGdCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGtCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsY0FBYzs7QUFFbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FFaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkEsa0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FFMUJBLHVCQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFckNBLFlDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVaQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFWkE7O0FBRUEsd0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsMkJDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBOzs7Ozs7O0FFTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2QsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBLDhDQUE4QztBQUM5Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDblZBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7QUN2TEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCOzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7QUMvQkQsOENDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMscURBQXFEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLHlCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHdCQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRS9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUNBQWlDO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSx5QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG1CQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQscUJBQXFCOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlEQUF5RCxxQkFBcUI7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUVscEJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxnQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRS9VQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEseUJDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBRXhjQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV4REE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsNkJBQTZCO0FBQzNDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1COztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLHlCQUF5Qjs7QUFFbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekIsVUFBVSxPQUFPO0FB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QVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FB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QTs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLE9BQU87QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQ3pFQTtBQUNBLFlDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQTs7Ozs7OztBRVRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7OENDbkx0QyxtQkNBQSxDREFBLEVDQUE7O0FBRUEsV0RBQSxtQkNBQSxDREFBLEVDQUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGhhc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQaGFzZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBoYXNlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ2YzA5MjY0NDViMTUyMGRlOTM0IiwidmFyIENPTlNUID0ge1xuXG4gICAgVkVSU0lPTjogJzMuMC4wJyxcblxuICAgIEFVVE86IDAsXG4gICAgQ0FOVkFTOiAxLFxuICAgIFdFQkdMOiAyLFxuXG4gICAgSU1BR0U6IDIwLFxuXG4gICAgc3RhdGU6IHtcblxuICAgICAgICBQRU5ESU5HOiAwLFxuICAgICAgICBJTlNUQUxMRUQ6IDEsXG5cbiAgICAgICAgQk9PVDogMCxcbiAgICAgICAgSU5JVDogMSxcbiAgICAgICAgUFJFTE9BRDogMixcbiAgICAgICAgQ1JFQVRFOiAzLFxuICAgICAgICBVUERBVEU6IDQsXG4gICAgICAgIFJFTkRFUjogNSxcbiAgICAgICAgU0hVVERPV046IDZcblxuICAgIH0sXG5cbiAgICBibGVuZE1vZGVzOiB7XG5cbiAgICAgICAgTk9STUFMOiAwLFxuICAgICAgICBBREQ6IDEsXG4gICAgICAgIE1VTFRJUExZOiAyLFxuICAgICAgICBTQ1JFRU46IDMsXG4gICAgICAgIE9WRVJMQVk6IDQsXG4gICAgICAgIERBUktFTjogNSxcbiAgICAgICAgTElHSFRFTjogNixcbiAgICAgICAgQ09MT1JfRE9ER0U6IDcsXG4gICAgICAgIENPTE9SX0JVUk46IDgsXG4gICAgICAgIEhBUkRfTElHSFQ6IDksXG4gICAgICAgIFNPRlRfTElHSFQ6IDEwLFxuICAgICAgICBESUZGRVJFTkNFOiAxMSxcbiAgICAgICAgRVhDTFVTSU9OOiAxMixcbiAgICAgICAgSFVFOiAxMyxcbiAgICAgICAgU0FUVVJBVElPTjogMTQsXG4gICAgICAgIENPTE9SOiAxNSxcbiAgICAgICAgTFVNSU5PU0lUWTogMTZcblxuICAgIH0sXG5cbiAgICBzY2FsZU1vZGVzOiB7XG5cbiAgICAgICAgREVGQVVMVDogMCxcbiAgICAgICAgTElORUFSOiAwLFxuICAgICAgICBORUFSRVNUOiAxXG5cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ09OU1Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb25zdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvT1MuanMiLCJ2YXIgT1MgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVza3RvcCAtIElzIHJ1bm5pbmcgb24gYSBkZXNrdG9wP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGRlc2t0b3A6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkFwcCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYXMgYSBXZWJBcHAsIGkuZS4gd2l0aGluIGEgV2ViVmlld1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYkFwcDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaU9TIC0gSXMgcnVubmluZyBvbiBpT1M/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaU9TOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGlPU1ZlcnNpb24gLSBJZiBydW5uaW5nIGluIGlPUyB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaU9TVmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpUGhvbmUgLSBJcyBydW5uaW5nIG9uIGlQaG9uZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpUGhvbmU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQYWQgLSBJcyBydW5uaW5nIG9uIGlQYWQ/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaVBhZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlMgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIENvY29vbkpTP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNvY29vbkpTOiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlNBcHAgLSBJcyB0aGlzIGdhbWUgcnVubmluZyB3aXRoIENvY29vbkpTLkFwcD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjb2Nvb25KU0FwcDogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvcmRvdmEgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEFwYWNoZSBDb3Jkb3ZhP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNvcmRvdmE6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLmpzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG5vZGU6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlV2Via2l0IC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLVdlYmtpdD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBub2RlV2Via2l0OiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWxlY3Ryb24gLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEdpdEh1YiBFbGVjdHJvbj9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBlbGVjdHJvbjogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVqZWN0YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgRWplY3RhP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGVqZWN0YTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY3Jvc3N3YWxrIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciB0aGUgSW50ZWwgQ3Jvc3N3YWxrIFhESz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjcm9zc3dhbGs6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFuZHJvaWQgLSBJcyBydW5uaW5nIG9uIGFuZHJvaWQ/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgYW5kcm9pZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lT1MgLSBJcyBydW5uaW5nIG9uIGNocm9tZU9TP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNocm9tZU9TOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsaW51eCAtIElzIHJ1bm5pbmcgb24gbGludXg/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbGludXg6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1hY09TIC0gSXMgcnVubmluZyBvbiBtYWNPUz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtYWNPUzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2luZG93cyAtIElzIHJ1bm5pbmcgb24gd2luZG93cz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3aW5kb3dzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzUGhvbmUgLSBJcyBydW5uaW5nIG9uIGEgV2luZG93cyBQaG9uZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3aW5kb3dzUGhvbmU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpdGEgLSBJcyBydW5uaW5nIG9uIGEgUGxheVN0YXRpb24gVml0YT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB2aXRhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBraW5kbGUgLSBJcyBydW5uaW5nIG9uIGFuIEFtYXpvbiBLaW5kbGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAga2luZGxlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBpeGVsUmF0aW8gLSBQaXhlbFJhdGlvIG9mIHRoZSBob3N0IGRldmljZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBwaXhlbFJhdGlvOiAxXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgaWYgKC9XaW5kb3dzLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvTWFjIE9TLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLm1hY09TID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0xpbnV4Ly50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmxpbnV4ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuYW5kcm9pZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9pUFthb11kfGlQaG9uZS9pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuaU9TID0gdHJ1ZTtcbiAgICAgICAgKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspLyk7XG4gICAgICAgIE9TLmlPU1ZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0tpbmRsZS8udGVzdCh1YSkgfHwgKC9cXGJLRltBLVpdW0EtWl0rLykudGVzdCh1YSkgfHwgKC9TaWxrLipNb2JpbGUgU2FmYXJpLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5raW5kbGUgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBOT1QgZGV0ZWN0IGVhcmx5IGdlbmVyYXRpb25zIG9mIEtpbmRsZSBGaXJlLCBJIHRoaW5rIHRoZXJlIGlzIG5vIHJlbGlhYmxlIHdheS4uLlxuICAgICAgICAvLyBFLmcuIFwiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgVTsgSW50ZWwgTWFjIE9TIFggMTBfNl8zOyBlbi11czsgU2lsay8xLjEuMC04MCkgQXBwbGVXZWJLaXQvNTMzLjE2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi81LjAgU2FmYXJpLzUzMy4xNiBTaWxrLUFjY2VsZXJhdGVkPXRydWVcIlxuICAgIH1cbiAgICBlbHNlIGlmICgvQ3JPUy8udGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5jaHJvbWVPUyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvUGxheXN0YXRpb24gVml0YS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1Mudml0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKC9XaW5kb3dzIFBob25lL2kudGVzdCh1YSkgfHwgKC9JRU1vYmlsZS9pKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmFuZHJvaWQgPSBmYWxzZTtcbiAgICAgICAgT1MuaU9TID0gZmFsc2U7XG4gICAgICAgIE9TLm1hY09TID0gZmFsc2U7XG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xuICAgICAgICBPUy53aW5kb3dzUGhvbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzaWxrID0gKC9TaWxrLykudGVzdCh1YSk7XG5cbiAgICBpZiAoT1Mud2luZG93cyB8fCBPUy5tYWNPUyB8fCAoT1MubGludXggJiYgIXNpbGspIHx8IE9TLmNocm9tZU9TKVxuICAgIHtcbiAgICAgICAgT1MuZGVza3RvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gIFdpbmRvd3MgUGhvbmUgLyBUYWJsZSByZXNldFxuICAgIGlmIChPUy53aW5kb3dzUGhvbmUgfHwgKCgvV2luZG93cyBOVC9pLnRlc3QodWEpKSAmJiAoL1RvdWNoL2kudGVzdCh1YSkpKSlcbiAgICB7XG4gICAgICAgIE9TLmRlc2t0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAgV2ViQXBwIG1vZGUgaW4gaU9TXG4gICAgaWYgKG5hdmlnYXRvci5zdGFuZGFsb25lKVxuICAgIHtcbiAgICAgICAgT1Mud2ViQXBwID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICBPUy5jb3Jkb3ZhID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlICE9PSAndW5kZWZpbmVkJykpXG4gICAge1xuICAgICAgICBPUy5ub2RlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKE9TLm5vZGUgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnKVxuICAgIHtcbiAgICAgICAgT1Mubm9kZVdlYmtpdCA9ICEhcHJvY2Vzcy52ZXJzaW9uc1snbm9kZS13ZWJraXQnXTtcbiAgICAgICAgXG4gICAgICAgIE9TLmVsZWN0cm9uID0gISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uO1xuICAgIH1cbiAgICBcbiAgICBpZiAobmF2aWdhdG9yLmlzQ29jb29uSlMpXG4gICAge1xuICAgICAgICBPUy5jb2Nvb25KUyA9IHRydWU7XG5cbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIE9TLmNvY29vbkpTQXBwID0gKHR5cGVvZiBDb2Nvb25KUyAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcilcbiAgICAgICAge1xuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZWplY3RhICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICBPUy5lamVjdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgoL0Nyb3Nzd2Fsay8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuY3Jvc3N3YWxrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBPUy5pUGhvbmUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2lwaG9uZScpICE9PSAtMTtcbiAgICBPUy5pUGFkID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpcGFkJykgIT09IC0xO1xuXG4gICAgT1MucGl4ZWxSYXRpbyA9IHdpbmRvd1snZGV2aWNlUGl4ZWxSYXRpbyddIHx8IDE7XG5cbiAgICByZXR1cm4gT1M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL09TLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcblxudmFyIEJyb3dzZXIgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXJvcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEFyb3JhLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGFyb3JhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjaHJvbWUgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIENocm9tZS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjaHJvbWU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gY2hyb21lVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gQ2hyb21lIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjaHJvbWVWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVwaXBoYW55IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBFcGlwaGFueS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBlcGlwaGFueTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlyZWZveCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gRmlyZWZveC5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBmaXJlZm94OiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGZpcmVmb3hWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBGaXJlZm94IHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBmaXJlZm94VmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtb2JpbGVTYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1vYmlsZSBTYWZhcmkuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbW9iaWxlU2FmYXJpOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaWU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gaWVWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIEJleW9uZCBJRTEwIHlvdSBzaG91bGQgdXNlIERldmljZS50cmlkZW50IGFuZCBEZXZpY2UudHJpZGVudFZlcnNpb24uXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaWVWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pZG9yaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWlkb3JpLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1pZG9yaTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3BlcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE9wZXJhLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG9wZXJhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIFNhZmFyaS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBzYWZhcmk6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FmYXJpVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gU2FmYXJpIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBzYWZhcmlWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRyaWRlbnQgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGEgVHJpZGVudCB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIChJRTExKylcbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB0cmlkZW50OiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRyaWRlbnRWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIFNlZSB7QGxpbmsgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL21zNTM3NTAzKHY9dnMuODUpLmFzcHh9XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdHJpZGVudFZlcnNpb246IDAsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWRnZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWljcm9zb2Z0IEVkZ2UgYnJvd3Nlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBlZGdlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzaWxrIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiB0aGUgU2lsayBicm93c2VyIChhcyB1c2VkIG9uIHRoZSBBbWF6b24gS2luZGxlKVxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHNpbGs6IGZhbHNlXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgaWYgKCgvQXJvcmEvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuYXJvcmEgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvRWRnZVxcL1xcZCsvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5lZGdlID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9DaHJvbWVcXC8oXFxkKykvKS50ZXN0KHVhKSAmJiAhT1Mud2luZG93c1Bob25lKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5jaHJvbWUgPSB0cnVlO1xuICAgICAgICBCcm93c2VyLmNocm9tZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9FcGlwaGFueS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5lcGlwaGFueSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvRmlyZWZveFxcRCsoXFxkKykvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuZmlyZWZveCA9IHRydWU7XG4gICAgICAgIEJyb3dzZXIuZmlyZWZveFZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9BcHBsZVdlYktpdC8pLnRlc3QodWEpICYmIE9TLmlPUylcbiAgICB7XG4gICAgICAgIEJyb3dzZXIubW9iaWxlU2FmYXJpID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9NU0lFIChcXGQrXFwuXFxkKyk7LykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmllID0gdHJ1ZTtcbiAgICAgICAgQnJvd3Nlci5pZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9NaWRvcmkvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIubWlkb3JpID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9PcGVyYS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5vcGVyYSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvU2FmYXJpLykudGVzdCh1YSkgJiYgIU9TLndpbmRvd3NQaG9uZSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuc2FmYXJpID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9UcmlkZW50XFwvKFxcZCtcXC5cXGQrKSguKilydjooXFxkK1xcLlxcZCspLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmllID0gdHJ1ZTtcbiAgICAgICAgQnJvd3Nlci50cmlkZW50ID0gdHJ1ZTtcbiAgICAgICAgQnJvd3Nlci50cmlkZW50VmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgICAgICBCcm93c2VyLmllVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMywgMTApO1xuICAgIH1cblxuICAgIC8vICBTaWxrIGdldHMgaXRzIG93biBpZiBjbGF1c2UgYmVjYXVzZSBpdHMgdWEgYWxzbyBjb250YWlucyAnU2FmYXJpJ1xuICAgIGlmICgoL1NpbGsvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuc2lsayA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJyb3dzZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIENoaWxkcmVuOiByZXF1aXJlKCcuL0NoaWxkcmVuJyksXG4gICAgQ29sb3I6IHJlcXVpcmUoJy4vQ29sb3InKSxcbiAgICBEYXRhOiByZXF1aXJlKCcuL0RhdGEnKSxcbiAgICBUcmFuc2Zvcm06IHJlcXVpcmUoJy4vVHJhbnNmb3JtJylcblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbXBvbmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInZhciBFdmVudCA9IGZ1bmN0aW9uICh0eXBlKVxue1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICB0aGlzLnRhcmdldDtcblxuICAgIHRoaXMuX3Byb3BhZ2F0ZSA9IHRydWU7XG59O1xuXG5FdmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudDtcblxuRXZlbnQucHJvdG90eXBlID0ge1xuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh0YXJnZXQpXG4gICAge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcblxuICAgICAgICB0aGlzLl9wcm9wYWdhdGUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLl9wcm9wYWdhdGUgPSBmYWxzZTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50QmluZGluZyA9IHJlcXVpcmUoJy4vRXZlbnRCaW5kaW5nJyk7XG5cbnZhciBFdmVudERpc3BhdGNoZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLmhhc0ZpbHRlcnMgPSBmYWxzZTtcbn07XG5cbkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudERpc3BhdGNoZXI7XG5cbkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgPSB7XG5cbiAgICBnZXRCaW5kaW5nOiBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmJpbmRpbmdzLmhhc093blByb3BlcnR5KHR5cGUpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1t0eXBlXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVCaW5kaW5nOiBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5nZXRCaW5kaW5nKHR5cGUpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzW3R5cGVdID0gbmV3IEV2ZW50QmluZGluZyh0aGlzLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3R5cGVdO1xuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSlcbiAgICB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7IHByaW9yaXR5ID0gMDsgfVxuXG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBiaW5kaW5nLmFkZChsaXN0ZW5lciwgcHJpb3JpdHksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBvbmNlOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB1bmRlZmluZWQpIHsgcHJpb3JpdHkgPSAwOyB9XG5cbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcuYWRkKGxpc3RlbmVyLCBwcmlvcml0eSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gIEFkZCBhIGNhbGxiYWNrIHRoYXQgaXMgbm90aWZpZWQgZXZlcnkgdGltZSB0aGlzIEV2ZW50RGlzcGF0Y2hlciBkaXNwYXRjaGVzIGFuIGV2ZW50XG4gICAgLy8gIG5vIG1hdHRlciB3aGF0IHRoZSBldmVudCB0eXBlIGlzLiBGaWx0ZXJzIGFyZSBpbnZva2VkIGZpcnN0LCBiZWZvcmUgYW55IGJpbmRpbmdzLFxuICAgIC8vICBhbmQgY2FuIHN0b3AgZXZlbnRzIGlmIHRoZXkgd2lzaCAoaW4gd2hpY2ggY2FzZSB0aGV5J2xsIG5ldmVyIHJlYWNoIHRoZSBiaW5kaW5ncylcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHZhciBpID0gdGhpcy5maWx0ZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChpID09PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIEFkZCB0aGUgZmlsdGVyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgUmVtb3ZlIHRoZSBmaWx0ZXJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGFzRmlsdGVycyA9ICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKVxuICAgIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmhhcyhsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdG90YWw6IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLnRvdGFsKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAgLy8gIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGxpc3RlbmVyIHJlZ2lzdGVyZWQgd2l0aCB0aGUgRXZlbnREaXNwYXRjaGVyLCBhIGNhbGwgdG8gdGhpcyBtZXRob2QgaGFzIG5vIGVmZmVjdC5cbiAgICBvZmY6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcilcbiAgICB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlbW92ZShsaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2Rpc3BhdGNoSGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgZXZlbnQucmVzZXQodGhpcyk7XG5cbiAgICAgICAgLy8gIFBhc3MgdGhlIGV2ZW50IHRocm91Z2ggdGhlIGZpbHRlcnMgZmlyc3RcblxuICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsdGVycy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyAgRGlkIHRoZSBmaWx0ZXIga2lsbCB0aGUgZXZlbnQ/IElmIHNvLCB3ZSBjYW4gYWJvcnQgbm93XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5fcHJvcGFnYXRlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKGV2ZW50LnR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBiaW5kaW5nLmRpc3BhdGNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSGFuZGxlcihldmVudFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEhhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vICBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMsIGJ1dCByZXRhaW5zIHRoZSBldmVudCB0eXBlIGVudHJpZXNcbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsRmlsdGVyczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuaGFzRmlsdGVycyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkZWxldGU6IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5iaW5kaW5nc1t0eXBlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkZWxldGVBbGw6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBiaW5kaW5nIGluIHRoaXMuYmluZGluZ3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZWxldGVBbGwoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxGaWx0ZXJzKCk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RGlzcGF0Y2hlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgZ2xvYmFsIGxldmVsIGNvbnRhaW5lciBvZiBGYWN0b3J5IGluc3RhbmNlcy5cbiogRmFjdG9yaWVzIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCB0aGlzIGNvbnRhaW5lciAod2hlbiByZXF1aXJlZClcbipcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG5cbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIEZhY3RvcnlDb250YWluZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIGNvbnNvbGUubG9nKCdGYWN0b3J5Q29udGFpbmVyIGlzIGFsaXZlJyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGZhY3RvcnkpXG4gICAge1xuICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkuS0VZKSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FscmVhZHkgcmVnaXN0ZXJlZCcsIGZhY3RvcnkuS0VZKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZShmYWN0b3J5LktFWSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcnLCBmYWN0b3J5LktFWSk7XG5cbiAgICAgICAgZmFjdG9yaWVzW2ZhY3RvcnkuS0VZXSA9IHtcbiAgICAgICAgICAgIGFkZDogZmFjdG9yeS5hZGQsXG4gICAgICAgICAgICBtYWtlOiBmYWN0b3J5Lm1ha2VcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWN0b3JpZXNba2V5XTtcbiAgICB9O1xuXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24gKGRlc3QsIGlzRmFjdG9yeSlcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGZhY3RvcnkgaW4gZmFjdG9yaWVzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkaW5nJywgZmFjdG9yeSk7XG5cbiAgICAgICAgICAgICAgICBkZXN0W2ZhY3RvcnldID0gKGlzRmFjdG9yeSkgPyBmYWN0b3JpZXNbZmFjdG9yeV0uYWRkIDogZmFjdG9yaWVzW2ZhY3RvcnldLm1ha2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY3RvcnlDb250YWluZXIoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIENyZWF0ZXMgYW4gWEhSU2V0dGluZ3MgT2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcblxudmFyIFhIUlNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3BvbnNlVHlwZSwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkLCB0aW1lb3V0KVxue1xuICAgIGlmIChyZXNwb25zZVR5cGUgPT09IHVuZGVmaW5lZCkgeyByZXNwb25zZVR5cGUgPSAnJzsgfVxuICAgIGlmIChhc3luYyA9PT0gdW5kZWZpbmVkKSB7IGFzeW5jID0gdHJ1ZTsgfVxuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHsgdXNlciA9ICcnOyB9XG4gICAgaWYgKHBhc3N3b3JkID09PSB1bmRlZmluZWQpIHsgcGFzc3dvcmQgPSAnJzsgfVxuICAgIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHsgdGltZW91dCA9IDA7IH1cblxuICAgIC8vIEJlZm9yZSBzZW5kaW5nIGEgcmVxdWVzdCwgc2V0IHRoZSB4aHIucmVzcG9uc2VUeXBlIHRvIFwidGV4dFwiLCBcbiAgICAvLyBcImFycmF5YnVmZmVyXCIsIFwiYmxvYlwiLCBvciBcImRvY3VtZW50XCIsIGRlcGVuZGluZyBvbiB5b3VyIGRhdGEgbmVlZHMuIFxuICAgIC8vIE5vdGUsIHNldHRpbmcgeGhyLnJlc3BvbnNlVHlwZSA9ICcnIChvciBvbWl0dGluZykgd2lsbCBkZWZhdWx0IHRoZSByZXNwb25zZSB0byBcInRleHRcIi5cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLy8gIElnbm9yZWQgYnkgdGhlIExvYWRlciwgb25seSB1c2VkIGJ5IEZpbGUuXG4gICAgICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlLFxuXG4gICAgICAgIGFzeW5jOiBhc3luYyxcblxuICAgICAgICAvLyAgY3JlZGVudGlhbHNcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuXG4gICAgICAgIC8vICB0aW1lb3V0IGluIG1zICgwID0gbm8gdGltZW91dClcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcblxuICAgICAgICAvLyAgc2V0UmVxdWVzdEhlYWRlclxuICAgICAgICBoZWFkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyVmFsdWU6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyAgb3ZlcnJpZGVNaW1lVHlwZVxuICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiB1bmRlZmluZWRcblxuICAgIH07XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUlNldHRpbmdzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBGSUxFX0NPTlNUID0ge1xuXG4gICAgTE9BREVSX0lETEU6IDAsXG4gICAgTE9BREVSX0xPQURJTkc6IDEsXG4gICAgTE9BREVSX1BST0NFU1NJTkc6IDIsXG4gICAgTE9BREVSX0NPTVBMRVRFOiAzLFxuICAgIExPQURFUl9ERVNUUk9ZRUQ6IDQsXG5cbiAgICBGSUxFX1BFTkRJTkc6IDUsICAgICAgLy8gZmlsZSBpcyBpbiB0aGUgbG9hZCBxdWV1ZSBidXQgbm90IHlldCBzdGFydGVkXG4gICAgRklMRV9MT0FESU5HOiA2LCAgICAgIC8vIGZpbGUgaGFzIGJlZW4gc3RhcnRlZCB0byBsb2FkIGJ5IHRoZSBsb2FkZXIgKG9uTG9hZCBjYWxsZWQpXG4gICAgRklMRV9MT0FERUQ6IDcsICAgICAgIC8vIGZpbGUgaGFzIGxvYWRlZCBzdWNjZXNzZnVsbHksIGF3YWl0aW5nIHByb2Nlc3NpbmdcbiAgICBGSUxFX0ZBSUxFRDogOCwgICAgICAgLy8gZmlsZSBmYWlsZWQgdG8gbG9hZFxuICAgIEZJTEVfUFJPQ0VTU0lORzogOSwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxuICAgIEZJTEVfRVJST1JFRDogMTAsICAgLy8gZmlsZSBpcyBiZWluZyBwcm9jZXNzZWQgKG9uUHJvY2VzcyBjYWxsYmFjaylcbiAgICBGSUxFX0NPTVBMRVRFOiAxMSwgICAgIC8vIGZpbGUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmdcbiAgICBGSUxFX0RFU1RST1lFRDogMTIgICAgIC8vIGZpbGUgaGFzIGJlZW4gZGVzdHJveWVkXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRklMRV9DT05TVDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9jb25zdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgU291cmNlIG9iamVjdFxuLy8gIFRoZSBrZXkgYXMgYSBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIGtleXMsIGkuZS4gJ2Jhbm5lcicsIG9yICdiYW5uZXIuaGlkZUJhbm5lcidcbi8vICBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0XG5cbnZhciBHZXRPYmplY3RWYWx1ZSA9IGZ1bmN0aW9uIChzb3VyY2UsIGtleSwgZGVmYXVsdFZhbHVlKVxue1xuICAgIGlmIChrZXkuaW5kZXhPZignLicpKVxuICAgIHtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgICAgIHZhciBwYXJlbnQgPSBzb3VyY2U7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgICAgICAvLyAgVXNlIGZvciBsb29wIGhlcmUgc28gd2UgY2FuIGJyZWFrIGVhcmx5XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNPd25Qcm9wZXJ0eShrZXlzW2ldKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgWWVzIGl0IGhhcyBhIGtleSBwcm9wZXJ0eSwgbGV0J3MgY2Fycnkgb24gZG93blxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyZW50W2tleXNbaV1dO1xuXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50W2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm4gKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpID8gc291cmNlW2tleV0gOiBkZWZhdWx0VmFsdWUpO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdldE9iamVjdFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcbnZhciBDYW52YXNQb29sID0gcmVxdWlyZSgnLi4vZG9tL0NhbnZhc1Bvb2wnKTtcblxudmFyIEZlYXR1cmVzID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNhbnZhcyAtIElzIGNhbnZhcyBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2FudmFzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHs/Ym9vbGVhbn0gY2FudmFzQml0Qmx0U2hpZnQgLSBUcnVlIGlmIGNhbnZhcyBzdXBwb3J0cyBhICdjb3B5JyBiaXRibHQgb250byBpdHNlbGYgd2hlbiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiByZWdpb25zIG92ZXJsYXAuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2FudmFzQml0Qmx0U2hpZnQ6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViR0wgLSBJcyB3ZWJHTCBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2ViR0w6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGUgLSBJcyBmaWxlIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBmaWxlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaWxlU3lzdGVtIC0gSXMgZmlsZVN5c3RlbSBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZmlsZVN5c3RlbTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9jYWxTdG9yYWdlIC0gSXMgbG9jYWxTdG9yYWdlIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBsb2NhbFN0b3JhZ2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdvcmtlciAtIElzIHdvcmtlciBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd29ya2VyOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBwb2ludGVyTG9jayAtIElzIFBvaW50ZXIgTG9jayBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgcG9pbnRlckxvY2s6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpYnJhdGlvbiAtIERvZXMgdGhlIGRldmljZSBzdXBwb3J0IHRoZSBWaWJyYXRpb24gQVBJP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHZpYnJhdGlvbjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZ2V0VXNlck1lZGlhIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIGdldFVzZXJNZWRpYSBBUEk/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZ2V0VXNlck1lZGlhOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiAtIElzIHRoZSBkZXZpY2UgYmlnIG9yIGxpdHRsZSBlbmRpYW4/IChvbmx5IGRldGVjdGVkIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIFR5cGVkQXJyYXlzKVxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGxpdHRsZUVuZGlhbjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VwcG9ydDMyYml0IC0gRG9lcyB0aGUgZGV2aWNlIGNvbnRleHQgc3VwcG9ydCAzMmJpdCBwaXhlbCBtYW5pcHVsYXRpb24gdXNpbmcgYXJyYXkgYnVmZmVyIHZpZXdzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHN1cHBvcnQzMmJpdDogZmFsc2VcblxufTtcblxuLyoqXG4qIENoZWNrIExpdHRsZSBvciBCaWcgRW5kaWFuIHN5c3RlbS5cbipcbiogQGF1dGhvciBNYXR0IERlc0xhdXJpZXJzIChAbWF0dGRlc2wpXG4qL1xuZnVuY3Rpb24gY2hlY2tJc0xpdHRsZUVuZGlhbiAoKVxue1xuICAgIHZhciBhID0gbmV3IEFycmF5QnVmZmVyKDQpO1xuICAgIHZhciBiID0gbmV3IFVpbnQ4QXJyYXkoYSk7XG4gICAgdmFyIGMgPSBuZXcgVWludDMyQXJyYXkoYSk7XG5cbiAgICBiWzBdID0gMHhhMTtcbiAgICBiWzFdID0gMHhiMjtcbiAgICBiWzJdID0gMHhjMztcbiAgICBiWzNdID0gMHhkNDtcblxuICAgIGlmIChjWzBdID09PSAweGQ0YzNiMmExKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNbMF0gPT09IDB4YTFiMmMzZDQpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vICBDb3VsZCBub3QgZGV0ZXJtaW5lIGVuZGlhbm5lc3NcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgY29uc29sZS5sb2coJ0ZlYXR1cmVzLmluaXQnKTtcblxuICAgIEZlYXR1cmVzLmNhbnZhcyA9ICEhd2luZG93WydDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQnXSB8fCBPUy5jb2Nvb25KUztcblxuICAgIHRyeVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgRmVhdHVyZXMuZmlsZSA9ICEhd2luZG93WydGaWxlJ10gJiYgISF3aW5kb3dbJ0ZpbGVSZWFkZXInXSAmJiAhIXdpbmRvd1snRmlsZUxpc3QnXSAmJiAhIXdpbmRvd1snQmxvYiddO1xuICAgIEZlYXR1cmVzLmZpbGVTeXN0ZW0gPSAhIXdpbmRvd1sncmVxdWVzdEZpbGVTeXN0ZW0nXTtcblxuICAgIHZhciBpc1VpbnQ4ID0gZmFsc2U7XG5cbiAgICB2YXIgdGVzdFdlYkdMID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICh3aW5kb3dbJ1dlYkdMUmVuZGVyaW5nQ29udGV4dCddKVxuICAgICAgICB7XG4gICAgICAgICAgICB0cnlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGVXZWJHTCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmIChPUy5jb2Nvb25KUylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zY3JlZW5jYW52YXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhczJEID0gQ2FudmFzUG9vbC5jcmVhdGUyRCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIHZhciBjdHgyRCA9IGNhbnZhczJELmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgQ2FuJ3QgYmUgZG9uZSBvbiBhIHdlYmdsIGNvbnRleHRcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBjdHgyRC5jcmVhdGVJbWFnZURhdGEoMSwgMSk7XG4gICAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBUZXN0IHRvIHNlZSBpZiBJbWFnZURhdGEgdXNlcyBDYW52YXNQaXhlbEFycmF5IG9yIFVpbnQ4Q2xhbXBlZEFycmF5LlxuICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAqIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaXNVaW50OCA9IGltYWdlLmRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcblxuICAgICAgICAgICAgICAgIENhbnZhc1Bvb2wucmVtb3ZlKGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzMkQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdHggIT09IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIEZlYXR1cmVzLndlYkdMID0gdGVzdFdlYkdMKCk7XG5cbiAgICBGZWF0dXJlcy53b3JrZXIgPSAhIXdpbmRvd1snV29ya2VyJ107XG5cbiAgICBGZWF0dXJlcy5wb2ludGVyTG9jayA9ICdwb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8ICdtb3pQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8ICd3ZWJraXRQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50O1xuXG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iub0dldFVzZXJNZWRpYTtcblxuICAgIHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XG5cbiAgICBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgPSBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgJiYgISFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhICYmICEhd2luZG93LlVSTDtcblxuICAgIC8vIE9sZGVyIHZlcnNpb25zIG9mIGZpcmVmb3ggKDwgMjEpIGFwcGFyZW50bHkgY2xhaW0gc3VwcG9ydCBidXQgdXNlciBtZWRpYSBkb2VzIG5vdCBhY3R1YWxseSB3b3JrXG4gICAgaWYgKEJyb3dzZXIuZmlyZWZveCAmJiBCcm93c2VyLmZpcmVmb3hWZXJzaW9uIDwgMjEpXG4gICAge1xuICAgICAgICBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFeGNsdWRlcyBpT1MgdmVyc2lvbnMgYXMgdGhleSBnZW5lcmFsbHkgd3JhcCBVSVdlYlZpZXcgKGVnLiBTYWZhcmkgV2ViS2l0KSBhbmQgaXRcbiAgICAvLyBpcyBzYWZlciB0byBub3QgdHJ5IGFuZCB1c2UgdGhlIGZhc3QgY29weS1vdmVyIG1ldGhvZC5cbiAgICBpZiAoIU9TLmlPUyAmJiAoQnJvd3Nlci5pZSB8fCBCcm93c2VyLmZpcmVmb3ggfHwgQnJvd3Nlci5jaHJvbWUpKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMuY2FudmFzQml0Qmx0U2hpZnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEtub3duIG5vdCB0byB3b3JrXG4gICAgaWYgKEJyb3dzZXIuc2FmYXJpIHx8IEJyb3dzZXIubW9iaWxlU2FmYXJpKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMuY2FudmFzQml0Qmx0U2hpZnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0b3IudmlicmF0ZSA9IG5hdmlnYXRvci52aWJyYXRlIHx8IG5hdmlnYXRvci53ZWJraXRWaWJyYXRlIHx8IG5hdmlnYXRvci5tb3pWaWJyYXRlIHx8IG5hdmlnYXRvci5tc1ZpYnJhdGU7XG5cbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpXG4gICAge1xuICAgICAgICBGZWF0dXJlcy52aWJyYXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubGl0dGxlRW5kaWFuID0gY2hlY2tJc0xpdHRsZUVuZGlhbigpO1xuICAgIH1cblxuICAgIEZlYXR1cmVzLnN1cHBvcnQzMmJpdCA9IChcbiAgICAgICAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gIT09IG51bGwgJiZcbiAgICAgICAgaXNVaW50OFxuICAgICk7XG5cbiAgICByZXR1cm4gRmVhdHVyZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0ZlYXR1cmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBwb29sIGludG8gd2hpY2ggdGhlIGNhbnZhcyBlbGVtZW50cyBhcmUgcGxhY2VkLlxuICpcbiAqIEBwcm9wZXJ0eSBwb29sXG4gKiBAdHlwZSBBcnJheVxuICovXG52YXIgcG9vbCA9IFtdO1xuXG4vLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxuLy8gIGJlZm9yZSBhIFBoYXNlci5HYW1lIGluc3RhbmNlIGhhcyBldmVuIGJlZW4gY3JlYXRlZC5cbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBvbiB0aGUgc2FtZSBwYWdlXG4vLyAgY2FuIHNoYXJlIHRoZSBvbmUgc2luZ2xlIHBvb2xcblxuLyoqXG4qIFRoZSBDYW52YXNQb29sIGlzIGEgZ2xvYmFsIHN0YXRpYyBvYmplY3QsIHRoYXQgYWxsb3dzIFBoYXNlciB0byByZWN5Y2xlIGFuZCBwb29sIENhbnZhcyBET00gZWxlbWVudHMuXG4qXG4qIEBjbGFzcyBQaGFzZXIuQ2FudmFzUG9vbFxuKiBAc3RhdGljXG4qL1xudmFyIENhbnZhc1Bvb2wgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBDYW52YXMgRE9NIGVsZW1lbnQsIG9yIHB1bGxzIG9uZSBmcm9tIHRoZSBwb29sIGlmIGZyZWUuXG4gICAgKiBcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuY3JlYXRlXG4gICAgKiBAc3RhdGljXG4gICAgKiBAcGFyYW0ge2FueX0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IFRoZSBjYW52YXMgZWxlbWVudC5cbiAgICAqL1xuICAgIHZhciBjcmVhdGUgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCB0eXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB1bmRlZmluZWQpIHsgd2lkdGggPSAxOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgeyBoZWlnaHQgPSAxOyB9XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxuXG4gICAgICAgIHZhciBjYW52YXM7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBmaXJzdCh0eXBlKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5jcmVhdGUgbmV3Jyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHBvb2wucHVzaChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIGV4aXN0aW5nJyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgICAgIGNhbnZhcyA9IGNvbnRhaW5lci5jYW52YXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZTJEID0gZnVuY3Rpb24gKHBhcmVudCwgd2lkdGgsIGhlaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5DQU5WQVMpO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlV2ViR0wgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULldFQkdMKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBmaXJzdCBmcmVlIGNhbnZhcyBpbmRleCBmcm9tIHRoZSBwb29sLlxuICAgICogXG4gICAgKiBAc3RhdGljXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZpcnN0XG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgKi9cbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxuXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5wYXJlbnQgJiYgY29udGFpbmVyLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogTG9va3MgdXAgYSBjYW52YXMgYmFzZWQgb24gaXRzIHBhcmVudCwgYW5kIGlmIGZvdW5kIHB1dHMgaXQgYmFjayBpbiB0aGUgcG9vbCwgZnJlZWluZyBpdCB1cCBmb3IgcmUtdXNlLlxuICAgICogVGhlIGNhbnZhcyBoYXMgaXRzIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHRvIDEsIGFuZCBpdHMgcGFyZW50IGF0dHJpYnV0ZSBudWxsZWQuXG4gICAgKiBcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlXG4gICAgKiBAcGFyYW0ge2FueXxIVE1MQ2FudmFzRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKi9cbiAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKHBhcmVudClcbiAgICB7XG4gICAgICAgIC8vICBDaGVjayB0byBzZWUgaWYgdGhlIHBhcmVudCBpcyBhIGNhbnZhcyBvYmplY3RcbiAgICAgICAgdmFyIGlzQ2FudmFzID0gcGFyZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoaXNDYW52YXMgJiYgY29udGFpbmVyLmNhbnZhcyA9PT0gcGFyZW50KSB8fCAoIWlzQ2FudmFzICYmIGNvbnRhaW5lci5wYXJlbnQgPT09IHBhcmVudCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wucmVtb3ZlIGZvdW5kIGFuZCByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy5oZWlnaHQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdXNlZCBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXG4gICAgKiBcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0VG90YWxcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpbi11c2UgKHBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXG4gICAgKi9cbiAgICB2YXIgdG90YWwgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGMgPSAwO1xuXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiBmcmVlIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqIFxuICAgICogQHN0YXRpY1xuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5nZXRGcmVlXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgZnJlZSAodW4tcGFyZW50ZWQpIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqL1xuICAgIHZhciBmcmVlID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiBwb29sLmxlbmd0aCAtIHRvdGFsKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgICAgICBjcmVhdGUyRDogY3JlYXRlMkQsXG4gICAgICAgIGNyZWF0ZVdlYkdMOiBjcmVhdGVXZWJHTCxcbiAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgICBmcmVlOiBmcmVlLFxuICAgICAgICBwb29sOiBwb29sXG4gICAgfTtcbn07XG5cbi8vICBJZiB3ZSBleHBvcnQgdGhlIGNhbGxlZCBmdW5jdGlvbiBoZXJlLCBpdCdsbCBvbmx5IGJlIGludm9rZWQgb25jZSAobm90IGV2ZXJ5IHRpbWUgaXQncyByZXF1aXJlZCkuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1Bvb2woKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9DYW52YXNQb29sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kb20vQ2FudmFzUG9vbC5qcyIsInZhciBFVkVOVF9DT05TVCA9IHtcblxuICAgIERJU1BBVENIRVJfSURMRTogMCxcbiAgICBESVNQQVRDSEVSX0RJU1BBVENISU5HOiAxLFxuICAgIERJU1BBVENIRVJfUkVNT1ZJTkc6IDIsXG4gICAgRElTUEFUQ0hFUl9ERVNUUk9ZRUQ6IDMsXG5cbiAgICBMSVNURU5FUl9QRU5ESU5HOiA0LFxuICAgIExJU1RFTkVSX0FDVElWRTogNSxcbiAgICBMSVNURU5FUl9SRU1PVklORzogNlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVWRU5UX0NPTlNUO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL2NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgRmlsZSA9IHJlcXVpcmUoJy4uL0ZpbGUnKTtcblxudmFyIEltYWdlRmlsZSA9IGZ1bmN0aW9uIChrZXksIHVybCwgcGF0aClcbntcbiAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkKSB7IHBhdGggPSAnJzsgfVxuXG4gICAgaWYgKCFrZXkpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNhbGxpbmcgXFwnTG9hZGVyLmltYWdlXFwnIGludmFsaWQga2V5IHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmICghdXJsKVxuICAgIHtcbiAgICAgICAgdXJsID0gcGF0aCArIGtleSArICcucG5nJztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdXJsID0gcGF0aC5jb25jYXQodXJsKTtcbiAgICB9XG5cbiAgICBGaWxlLmNhbGwodGhpcywgJ2ltYWdlJywga2V5LCB1cmwsICdibG9iJyk7XG59O1xuXG5JbWFnZUZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGaWxlLnByb3RvdHlwZSk7XG5JbWFnZUZpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW1hZ2VGaWxlO1xuXG5JbWFnZUZpbGUucHJvdG90eXBlLm9uUHJvY2VzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaylcbntcbiAgICB0aGlzLnN0YXRlID0gQ09OU1QuRklMRV9QUk9DRVNTSU5HO1xuXG4gICAgdGhpcy5kYXRhID0gbmV3IEltYWdlKCk7XG5cbiAgICB0aGlzLmRhdGEuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuZGF0YS5vbmxvYWQgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChfdGhpcy5kYXRhLnNyYyk7XG5cbiAgICAgICAgX3RoaXMub25Db21wbGV0ZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKF90aGlzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhLm9uZXJyb3IgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChfdGhpcy5kYXRhLnNyYyk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBDT05TVC5GSUxFX0VSUk9SRUQ7XG5cbiAgICAgICAgY2FsbGJhY2soX3RoaXMpO1xuICAgIH07XG5cbiAgICB0aGlzLmRhdGEuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnhockxvYWRlci5yZXNwb25zZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlRmlsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKlxuKlxuKiBAY2xhc3MgQmFzZUJhdGNoXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5SZW5kZXJlci5XZWJHTH0gcmVuZGVyZXIgLSBUaGUgV2ViR0wgUmVuZGVyZXIuXG4qL1xudmFyIEJhc2VCYXRjaCA9IGZ1bmN0aW9uIChtYW5hZ2VyLCBiYXRjaFNpemUsIHZlcnRTaXplKVxue1xuICAgIHRoaXMuYmF0Y2hNYW5hZ2VyID0gbWFuYWdlcjtcblxuICAgIHRoaXMucmVuZGVyZXIgPSBtYW5hZ2VyLnJlbmRlcmVyO1xuXG4gICAgdGhpcy5nbCA9IG51bGw7XG5cbiAgICB0aGlzLnR5cGUgPSAwO1xuXG4gICAgLy8gIFRvdGFsIG51bWJlciBvZiBvYmplY3RzIHdlJ2xsIGJhdGNoIGJlZm9yZSBmbHVzaGluZyBhbmQgcmVuZGVyaW5nXG4gICAgLy8gIEludGVnZXJcbiAgICB0aGlzLm1heFNpemUgPSBiYXRjaFNpemU7XG5cbiAgICAvLyAgSW50ZWdlclxuICAgIHRoaXMuaGFsZlNpemUgPSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpO1xuXG4gICAgLy8gIEludGVnZXJcbiAgICB0aGlzLnZlcnRTaXplID0gdmVydFNpemU7XG5cbiAgICAvLyAgKiA0IGJlY2F1c2UgdGhlcmUgYXJlIDQgdmVydHMgcGVyIGJhdGNoIGVudHJ5IChlYWNoIGNvcm5lciBvZiB0aGUgcXVhZClcbiAgICB2YXIgbnVtVmVydHMgPSB0aGlzLnZlcnRTaXplICogdGhpcy5tYXhTaXplICogNDtcblxuICAgIC8vICBBcnJheUJ1ZmZlclxuICAgIC8vICBUaGlzIGRhdGEgaXMgd2hhdCBjaGFuZ2VzIGV2ZXJ5IGZyYW1lLCBwb3B1bGF0ZWQgYnkgdGhlIGdhbWUgb2JqZWN0c1xuICAgIC8vICBwYXNzZWQgaW4uIFRoZXJlIGFyZSBvZnRlbiB2aWV3cyBpbnRvIGl0IChwb3NpdGlvbiwgY29sb3IsIGV0YylcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEFycmF5QnVmZmVyKG51bVZlcnRzKTtcblxuICAgIC8vICBOdW1iZXIgb2YgdG90YWwgcXVhZHMgYWxsb3dlZCBpbiB0aGUgYmF0Y2ggKiA2XG4gICAgLy8gIDYgYmVjYXVzZSB0aGVyZSBhcmUgMiB0cmlhbmdsZXMgcGVyIHF1YWQsIGFuZCBlYWNoIHRyaWFuZ2xlIGhhcyAzIGluZGljZXNcbiAgICAvLyAgVGhpcyBUeXBlZCBBcnJheSBpcyBzZXQgaW4gdGhlIGJ1aWxkIG1ldGhvZCBvZiB0aGUgZXh0ZW5kZWQgY2xhc3MsIGFuZCB0aGVuXG4gICAgLy8gIGRvZXNuJ3QgY2hhbmdlIGFnYWluIChpdCdzIHBvcHVsYXRlZCBqdXN0IG9uY2UpXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KHRoaXMubWF4U2l6ZSAqIDYpO1xuXG4gICAgLy8gIFBvcHVsYXRlZCBieSB0aGUgZmx1c2ggb3BlcmF0aW9uIHdoZW4gdGhlIGJhdGNoIGlzIDwgNTAlIG9mIHRoZSBtYXggc2l6ZVxuICAgIHRoaXMudmlldyA9IG51bGw7XG5cbiAgICAvLyAgSW50ZWdlclxuICAgIHRoaXMuc2l6ZSA9IDA7XG5cbiAgICAvLyAgQm9vbGVhblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFdlYkdMIHByb2dyYW0uXG4gICAgICogQHByb3BlcnR5IHByb2dyYW1cbiAgICAgKiBAdHlwZSBXZWJHTFByb2dyYW1cbiAgICAgKi9cbiAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgKiBUaGUgRGVmYXVsdCBWZXJ0ZXggc2hhZGVyIHNvdXJjZS5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgZGVmYXVsdFZlcnRleFNyY1xuICAgICogQHR5cGUgQXJyYXlcbiAgICAqL1xuICAgIHRoaXMudmVydGV4U3JjID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnJhZ21lbnQgc2hhZGVyLlxuICAgICAqIEBwcm9wZXJ0eSBmcmFnbWVudFNyY1xuICAgICAqIEB0eXBlIEFycmF5XG4gICAgKi9cbiAgICB0aGlzLmZyYWdtZW50U3JjID0gW107XG5cbiAgICAvLyAgIFdlYkdMQnVmZmVyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IG51bGw7XG5cbiAgICAvLyAgIFdlYkdMQnVmZmVyXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBudWxsO1xuXG4gICAgLy8gIEludGVybmFsIGluZGV4IGNvdW50XG4gICAgLy8gIEludGVnZXJcbiAgICB0aGlzLl9pID0gMDtcbn07XG5cbkJhc2VCYXRjaC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlQmF0Y2g7XG5cbkJhc2VCYXRjaC5wcm90b3R5cGUgPSB7XG5cbiAgICBzdGFydDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuX2kgPSAwO1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG5cbiAgICAgICAgLy8gIFdlIG9ubHkgbmVlZCB0byBkbyB0aGlzIGlmIHRoaXMgYmF0Y2ggaXNuJ3QgdGhlIGN1cnJlbnQgb25lXG5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIodGhpcy5wcm9ncmFtKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5iaW5kU2hhZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5kaXJ0eSB8fCBmb3JjZSlcbiAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gdGhpcy5iaW5kU2hhZGVyKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9LFxuXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBCYXRjaCBwcm9jZXNzb3JzXG4gICAgZmx1c2g6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5zaXplID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIC8vICBVcGxvYWQgdGhlIHZlcnRleCBkYXRhIHRvIHRoZSBHUFUgLSBpcyB0aGlzIGNoZWFwZXIgKG92ZXJhbGwpIHRoYW4gY3JlYXRpbmcgYSBuZXcgVHlwZWRBcnJheSB2aWV3P1xuICAgICAgICAvLyAgVGhlIHRyYWRlb2ZmIGlzIHNlbmRpbmcgMjI0S0Igb2YgZGF0YSB0byB0aGUgR1BVIGV2ZXJ5IGZyYW1lLCBldmVuIGlmIG1vc3Qgb2YgaXQgaXMgZW1wdHkgc2hvdWxkIHRoZVxuICAgICAgICAvLyAgYmF0Y2ggYmUgb25seSBzbGlnaHRseSBwb3B1bGF0ZWQsIHZzLiB0aGUgY3JlYXRpb24gb2YgYSBuZXcgVHlwZWRBcnJheSB2aWV3IGFuZCBpdHMgY29ycmVzcG9uZGluZyBnYyBldmVyeSBmcmFtZS5cblxuICAgICAgICBpZiAodGhpcy5zaXplID4gdGhpcy5oYWxmU2l6ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmVydGljZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcblxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5wb3NpdGlvbnMuc3ViYXJyYXkoMCwgdGhpcy5zaXplICogdGhpcy52ZXJ0U2l6ZSk7XG5cbiAgICAgICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnZpZXcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdGhpcy5zaXplICogNiwgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZHJhd0NvdW50Kys7XG5cbiAgICAgICAgLy8gIFJlc2V0IHRoZSBiYXRjaFxuICAgICAgICB0aGlzLnNpemUgPSAwO1xuXG4gICAgICAgIHRoaXMuX2kgPSAwO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlQmF0Y2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL0Jhc2VCYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKTtcblxudmFyIENyZWF0ZUVtcHR5VGV4dHVyZSA9IGZ1bmN0aW9uIChnbCwgd2lkdGgsIGhlaWdodCwgc2NhbGVNb2RlLCB0ZXh0dXJlSW5kZXgpXG57XG4gICAgdmFyIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdmFyIGdsU2NhbGVNb2RlID0gKHNjYWxlTW9kZSA9PT0gQ09OU1Quc2NhbGVNb2Rlcy5MSU5FQVIpID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXh0dXJlSW5kZXgpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAvLyAgV2UnbGwgcmVhZCBmcm9tIHRoaXMgdGV4dHVyZSwgYnV0IGl0IHdvbid0IGhhdmUgbWlwbWFwcywgc28gdHVybiB0aGVtIG9mZjpcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2xTY2FsZU1vZGUpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbFNjYWxlTW9kZSk7XG5cbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZUVtcHR5VGV4dHVyZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL3V0aWxzL0NyZWF0ZUVtcHR5VGV4dHVyZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVuZGVyZXIvd2ViZ2wvdXRpbHMvQ3JlYXRlRW1wdHlUZXh0dXJlLmpzIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XG5cbnZhciBTZXR0aW5ncyA9IGZ1bmN0aW9uIChzdGF0ZSwgY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJylcbiAgICB7XG4gICAgICAgIGNvbmZpZyA9IHsga2V5OiBjb25maWcgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICAvLyAgUGFzcyB0aGUgJ2hhc093blByb3BlcnR5JyBjaGVja3NcbiAgICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlOyAvLyAgRG8gd2UgYWN0dWFsbHkgbmVlZCB0aGlzIHJlZmVyZW5jZT8gVGhpcyBjb3VsZCBqdXN0IGJlIGEgcHJvcGVydHkgYnVja2V0XG5cbiAgICB0aGlzLnN0YXR1cyA9IENPTlNULnN0YXRlLlBFTkRJTkc7XG5cbiAgICAvLyAgV2hpY2ggcGFydCBvZiB0aGlzIFN0YXRlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQ/XG4gICAgLy8gIHByZWxvYWQsIGNyZWF0ZSwgdXBkYXRlLCBzaHV0ZG93biwgZXRjXG4gICAgdGhpcy5vcCA9IENPTlNULnN0YXRlLkJPT1Q7XG5cbiAgICB0aGlzLmtleSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2tleScsICcnKTtcbiAgICB0aGlzLmFjdGl2ZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICB0aGlzLnZpc2libGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICAgdGhpcy5zY2FsZU1vZGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdzY2FsZU1vZGUnLCBDT05TVC5zY2FsZU1vZGVzLkRFRkFVTFQpO1xuICAgIHRoaXMuZnBzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnZnBzJywgNjApO1xuICAgIHRoaXMueCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3gnLCAwKTtcbiAgICB0aGlzLnkgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd5JywgMCk7XG5cbiAgICAvLyAgLTEgbWVhbnMgdGhlIFN0YXRlIE1hbmFnZXIgd2lsbCBzZXQgaXQgdG8gYmUgdGhlIEdhbWUgZGltZW5zaW9uc1xuICAgIHRoaXMud2lkdGggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd3aWR0aCcsIC0xKTtcbiAgICB0aGlzLmhlaWdodCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2hlaWdodCcsIC0xKTtcbn07XG5cbi8vICBVbmxlc3Mgd2UgYWRkIHNvbWUgYWN0dWFsIGZ1bmN0aW9ucyBpbiBoZXJlLCB3ZSdsbCBtYWtlIHRoaXMganVzdCByZXR1cm4gYW4gT2JqZWN0IGluc3RlYWQgb2YgYW4gaW5zdGFuY2VcblNldHRpbmdzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldHRpbmdzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1NldHRpbmdzLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInKTtcbnZhciBHYW1lT2JqZWN0RmFjdG9yeSA9IHJlcXVpcmUoJy4vc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeScpO1xuLy8gdmFyIEdhbWVPYmplY3RDcmVhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0xvYWRlcicpO1xudmFyIE1haW5Mb29wID0gcmVxdWlyZSgnLi9zeXN0ZW1zL01haW5Mb29wJyk7XG52YXIgVXBkYXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9VcGRhdGVNYW5hZ2VyJyk7XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cycpO1xudmFyIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYS9DYW1lcmEnKTtcblxudmFyIFN5c3RlbXMgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcbntcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuZXZlbnRzO1xuXG4gICAgLy8gIFJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIEdhbWUgbGV2ZWwgVGV4dHVyZU1hbmFnZXIuXG4gICAgdGhpcy50ZXh0dXJlcztcblxuICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcbiAgICB0aGlzLmFkZDtcbiAgICB0aGlzLm1ha2U7XG4gICAgdGhpcy5pbnB1dDtcbiAgICB0aGlzLmxvYWQ7XG4gICAgdGhpcy50d2VlbnM7XG4gICAgdGhpcy5tYWlubG9vcDtcbiAgICB0aGlzLnVwZGF0ZXM7XG5cbiAgICAvLyAgU3RhdGUgc3BlY2lmaWMgcHJvcGVydGllcyAodHJhbnNmb3JtLCBkYXRhLCBjaGlsZHJlbiwgZXRjKVxuICAgIHRoaXMuY2FtZXJhO1xuICAgIHRoaXMuY2hpbGRyZW47XG4gICAgdGhpcy5jb2xvcjtcbiAgICB0aGlzLmRhdGE7XG4gICAgdGhpcy5mYm87XG4gICAgdGhpcy50aW1lO1xuICAgIHRoaXMudHJhbnNmb3JtO1xufTtcblxuU3lzdGVtcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeXN0ZW1zO1xuXG5TeXN0ZW1zLnByb3RvdHlwZSA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhdGUuU3lzdGVtcy5pbml0Jyk7XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHRoaXMuc3RhdGUuZ2FtZS50ZXh0dXJlcztcblxuICAgICAgICAvLyAgQWxsIG9mIHRoZSBzeXN0ZW1zIGNhbiB1c2UgdGhlIFN0YXRlIGxldmVsIEV2ZW50RGlzcGF0Y2hlciwgb3IgdGhlaXIgb3duXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcbiAgICAgICAgLy8gIEFsbCB0aGVzZSB0byBiZSBzZXQgYnkgYSBTdGF0ZSBDb25maWcgcGFja2FnZVxuXG4gICAgICAgIHRoaXMuYWRkID0gbmV3IEdhbWVPYmplY3RGYWN0b3J5KHRoaXMuc3RhdGUpO1xuICAgICAgICAvLyB0aGlzLm1ha2UgPSBHYW1lT2JqZWN0Q3JlYXRvcih0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5tYWlubG9vcCA9IG5ldyBNYWluTG9vcCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnNldHRpbmdzLmZwcyk7XG4gICAgICAgIHRoaXMudXBkYXRlcyA9IG5ldyBVcGRhdGVNYW5hZ2VyKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLmxvYWQgPSBuZXcgTG9hZGVyKHRoaXMuc3RhdGUpO1xuXG4gICAgICAgIC8vIHRoaXMudHdlZW5zID0gbmV3IFBoYXNlci5Ud2Vlbk1hbmFnZXIodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMuaW5wdXQgPSBuZXcgUGhhc2VyLlN0YXRlLklucHV0KHRoaXMuc3RhdGUpO1xuICAgICAgICAvLyB0aGlzLnBoeXNpY3MgPSBuZXcgUGhhc2VyLlBoeXNpY3MuQXJjYWRlKHRoaXMuc3RhdGUsIDgwMCwgNjAwKTtcblxuICAgICAgICAvLyAgU3RhdGUgc3BlY2lmaWMgcHJvcGVydGllcyAodHJhbnNmb3JtLCBkYXRhLCBjaGlsZHJlbiwgZXRjKVxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5zdGF0ZSwgMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IENvbXBvbmVudC5DaGlsZHJlbih0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBDb21wb25lbnQuQ29sb3IodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBDb21wb25lbnQuRGF0YSh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XG5cbiAgICAgICAgLy8gIEJvb3RcblxuICAgICAgICAvLyB0aGlzLmlucHV0LmluaXQoKTtcblxuICAgICAgICAvLyAgRGVmYXVsdHNcblxuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cyA9IHRoaXMuZXZlbnRzO1xuICAgICAgICB0aGlzLnN0YXRlLmFkZCA9IHRoaXMuYWRkO1xuICAgICAgICB0aGlzLnN0YXRlLmxvYWQgPSB0aGlzLmxvYWQ7XG4gICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLnN0YXRlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLnN0YXRlLmNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybSA9IHRoaXMuY2FtZXJhLnRyYW5zZm9ybTtcblxuXG5cbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQ7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3RhdGUgPSB0aGlzLnN0YXRlLmdhbWUuc3RhdGU7XG5cbiAgICAgICAgLy8gIEhlcmUgd2UgY2FuIGNoZWNrIHdoaWNoIFN5c3RlbXMgdG8gaW5zdGFsbCBhcyBwcm9wZXJ0aWVzIGludG8gdGhlIFN0YXRlIG9iamVjdFxuICAgICAgICAvLyAgKGRlZmF1bHQgc3lzdGVtcyBhbHdheXMgZXhpc3QgaW4gaGVyZSwgcmVnYXJkbGVzcylcbiAgICB9LFxuXG4gICAgYmVnaW46IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGZyYW1lRGVsdGEpXG4gICAge1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RlcCwgcGh5c2ljc1N0ZXApXG4gICAge1xuICAgIH0sXG5cbiAgICBwcmVSZW5kZXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgIH0sXG5cbiAgICBlbmQ6IGZ1bmN0aW9uIChmcHMsIHBhbmljKVxuICAgIHtcbiAgICAgICAgaWYgKHBhbmljKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUaGlzIHBhdHRlcm4gaW50cm9kdWNlcyBub24tZGV0ZXJtaW5pc3RpYyBiZWhhdmlvciwgYnV0IGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgLy8gaXQncyBiZXR0ZXIgdGhhbiB0aGUgYWx0ZXJuYXRpdmUgKHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsb29rIGxpa2UgaXRcbiAgICAgICAgICAgIC8vIHdhcyBydW5uaW5nIHZlcnkgcXVpY2tseSB1bnRpbCB0aGUgc2ltdWxhdGlvbiBjYXVnaHQgdXAgdG8gcmVhbFxuICAgICAgICAgICAgLy8gdGltZSkuXG4gICAgICAgICAgICB2YXIgZGlzY2FyZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy5tYWlubG9vcC5yZXNldEZyYW1lRGVsdGEoKSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWFpbiBsb29wIHBhbmlja2VkLCBwcm9iYWJseSBiZWNhdXNlIHRoZSBicm93c2VyIHRhYiB3YXMgcHV0IGluIHRoZSBiYWNrZ3JvdW5kLiBEaXNjYXJkaW5nICcgKyBkaXNjYXJkZWRUaW1lICsgJ21zJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5c3RlbXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TeXN0ZW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TeXN0ZW1zLmpzIiwiXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gIE5PT1AgKE5vIE9wZXJhdGlvbikgQ2FsbGJhY2tcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTk9PUDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL05PT1AuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gIERvaW5nIHRoaXMgbWFrZXMgaXQgYXZhaWxhYmxlIHVuZGVyIFBoYXNlci5HYW1lXG4gICAgR2FtZTogcmVxdWlyZSgnLi9HYW1lJyksXG5cbiAgICBFdmVudDogcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50JyksXG4gICAgRXZlbnREaXNwYXRjaGVyOiByZXF1aXJlKCcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJyksXG5cbiAgICBMb2FkZXI6IHtcbiAgICAgICAgSW1hZ2VGaWxlOiByZXF1aXJlKCcuLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpXG4gICAgfVxuXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9pbmRleC5qcyIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BvbHlmaWxscy9pbmRleC5qcyIsInJlcXVpcmUoJy4vQXJyYXkuZm9yRWFjaCcpO1xucmVxdWlyZSgnLi9BcnJheS5pc0FycmF5Jyk7XG5yZXF1aXJlKCcuL2NvbnNvbGUnKTtcbnJlcXVpcmUoJy4vRnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi9NYXRoLnRydW5jJyk7XG5yZXF1aXJlKCcuL3BlcmZvcm1hbmNlLm5vdycpO1xucmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcbnJlcXVpcmUoJy4vVWludDMyQXJyYXknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBOT09QID0gcmVxdWlyZSgnLi4vdXRpbHMvTk9PUCcpO1xudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcblxudmFyIGRlZmF1bHRCYW5uZXJDb2xvciA9IFtcbiAgICAnI2ZmMDAwMCcsXG4gICAgJyNmZmZmMDAnLFxuICAgICcjMDBmZjAwJyxcbiAgICAnIzAwZmZmZicsXG4gICAgJyMwMDAwMDAnXG5dO1xuXG52YXIgZGVmYXVsdEJhbm5lclRleHRDb2xvciA9ICcjZmZmZmZmJztcblxuZnVuY3Rpb24gQ29uZmlnIChjb25maWcpXG57XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7IGNvbmZpZyA9IHt9OyB9XG5cbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAxMDI0KTtcbiAgICB0aGlzLmhlaWdodCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2hlaWdodCcsIDc2OCk7XG5cbiAgICB0aGlzLnJlc29sdXRpb24gPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdyZXNvbHV0aW9uJywgMSk7XG5cbiAgICB0aGlzLnJlbmRlclR5cGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0eXBlJywgQ09OU1QuQVVUTyk7XG5cbiAgICB0aGlzLnBhcmVudCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3BhcmVudCcsIG51bGwpO1xuICAgIHRoaXMuY2FudmFzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzJywgbnVsbCk7XG4gICAgdGhpcy5jYW52YXNTdHlsZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhc1N0eWxlJywgbnVsbCk7XG5cbiAgICB0aGlzLnN0YXRlQ29uZmlnID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc3RhdGUnLCBudWxsKTtcblxuICAgIHRoaXMuc2VlZCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3NlZWQnLCBbIChEYXRlLm5vdygpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKSBdKTtcblxuICAgIHRoaXMuZ2FtZVRpdGxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndGl0bGUnLCAnJyk7XG4gICAgdGhpcy5nYW1lVVJMID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndXJsJywgJ2h0dHA6Ly9waGFzZXIuaW8nKTtcbiAgICB0aGlzLmdhbWVWZXJzaW9uID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmVyc2lvbicsICcnKTtcblxuICAgIC8vICBJZiB5b3UgZG86IHsgYmFubmVyOiBmYWxzZSB9IGl0IHdvbid0IGRpc3BsYXkgYW55IGJhbm5lciBhdCBhbGxcbiAgICB0aGlzLmhpZGVCYW5uZXIgPSAoR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyJywgZmFsc2UpID09PSBmYWxzZSk7XG5cbiAgICB0aGlzLmhpZGVQaGFzZXIgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuaGlkZVBoYXNlcicsIGZhbHNlKTtcbiAgICB0aGlzLmJhbm5lclRleHRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci50ZXh0JywgZGVmYXVsdEJhbm5lclRleHRDb2xvcik7XG4gICAgdGhpcy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuYmFja2dyb3VuZCcsIGRlZmF1bHRCYW5uZXJDb2xvcik7XG4gICBcbiAgICB0aGlzLmZvcmNlU2V0VGltZU91dCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZvcmNlU2V0VGltZU91dCcsIGZhbHNlKTtcbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHJhbnNwYXJlbnQnLCBmYWxzZSk7XG4gICAgdGhpcy5waXhlbEFydCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3BpeGVsQXJ0JywgZmFsc2UpO1xuXG4gICAgLy8gIENhbGxiYWNrc1xuICAgIHRoaXMucHJlQm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wcmVCb290JywgTk9PUCk7XG4gICAgdGhpcy5wb3N0Qm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wb3N0Qm9vdCcsIE5PT1ApO1xuXG59XG5cbkNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25maWc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9Db25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvQ29uZmlnLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBDYW52YXNQb29sID0gcmVxdWlyZSgnLi4vZG9tL0NhbnZhc1Bvb2wnKTtcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4uL2RldmljZS9GZWF0dXJlcycpO1xudmFyIFdlYkdMUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci93ZWJnbC9XZWJHTFJlbmRlcmVyJyk7XG5cbi8qKlxuKiBDaGVja3MgaWYgdGhlIGRldmljZSBpcyBjYXBhYmxlIG9mIHVzaW5nIHRoZSByZXF1ZXN0ZWQgcmVuZGVyZXIgYW5kIHNldHMgaXQgdXAgb3IgYW4gYWx0ZXJuYXRpdmUgaWYgbm90LlxuKlxuKiBAbWV0aG9kIFBoYXNlci5HYW1lI3NldFVwUmVuZGVyZXJcbiogQHByb3RlY3RlZFxuKi9cbnZhciBDcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxue1xuICAgIHZhciBjb25maWcgPSBnYW1lLmNvbmZpZztcblxuICAgIC8vICBHYW1lIGVpdGhlciByZXF1ZXN0ZWQgQ2FudmFzLFxuICAgIC8vICBvciByZXF1ZXN0ZWQgQVVUTyBvciBXRUJHTCBidXQgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGl0LCBzbyBmYWxsIGJhY2sgdG8gQ2FudmFzXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMgfHwgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBDT05TVC5DQU5WQVMgJiYgIUZlYXR1cmVzLndlYkdMKSlcbiAgICB7XG4gICAgICAgIGlmIChGZWF0dXJlcy5jYW52YXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGV5IHJlcXVlc3RlZCBDYW52YXMgYW5kIHRoZWlyIGJyb3dzZXIgc3VwcG9ydHMgaXRcbiAgICAgICAgICAgIGNvbmZpZy5yZW5kZXJUeXBlID0gQ09OU1QuQ0FOVkFTO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIENhbnZhcyBvciBXZWJHTCBjb250ZXh0LCBhYm9ydGluZy4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyAgR2FtZSByZXF1ZXN0ZWQgV2ViR0wgYW5kIGJyb3dzZXIgc2F5cyBpdCBzdXBwb3J0cyBpdFxuICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULldFQkdMO1xuICAgIH1cblxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIGl0cyBvd24gY2FudmFzIGVsZW1lbnQgdG8gdXNlP1xuICAgIGlmIChjb25maWcuY2FudmFzKVxuICAgIHtcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBjb25maWcuY2FudmFzO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnYW1lLmNhbnZhcyA9IENhbnZhc1Bvb2wuY3JlYXRlKGdhbWUsIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCwgY29uZmlnLnJlbmRlclR5cGUpO1xuICAgIH1cblxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIHNvbWUgY2FudmFzIGNzcyBzdHlsZXMgdG8gdXNlP1xuICAgIGlmIChjb25maWcuY2FudmFzU3R5bGUpXG4gICAge1xuICAgICAgICBnYW1lLmNhbnZhcy5zdHlsZSA9IGNvbmZpZy5jYW52YXNTdHlsZTtcbiAgICB9XG5cbiAgICAvLyAgQ3JlYXRlIHRoZSByZW5kZXJlclxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgV0VCR0wgUmVuZGVyZXInKTtcbiAgICAgICAgZ2FtZS5yZW5kZXJlciA9IG5ldyBXZWJHTFJlbmRlcmVyKGdhbWUpO1xuICAgICAgICBnYW1lLmNvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgQ2FudmFzIFJlbmRlcmVyJyk7XG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLkNhbnZhcyh0aGlzKTtcbiAgICAgICAgLy8gZ2FtZS5jb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSAhPT0gUGhhc2VyLkhFQURMRVNTKVxuICAgIHtcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5hZGRUb0RPTSh0aGlzLmNhbnZhcywgdGhpcy5wYXJlbnQsIGZhbHNlKTtcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5zZXRUb3VjaEFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZVJlbmRlcmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgQ0hFQ0tTVU0gPSByZXF1aXJlKCcuLi9jaGVja3N1bScpO1xuXG52YXIgRGVidWdIZWFkZXIgPSBmdW5jdGlvbiAoZ2FtZSlcbntcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmhpZGVCYW5uZXIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlbmRlclR5cGUgPSAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULkNBTlZBUykgPyAnQ2FudmFzJyA6ICdXZWJHTCc7XG5cbiAgICB2YXIgaWUgPSBmYWxzZTtcblxuICAgIGlmICghaWUpXG4gICAge1xuICAgICAgICB2YXIgYyA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IFtjXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxhc3RDb2xvcjtcblxuICAgICAgICAgICAgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvci5mb3JFYWNoKGZ1bmN0aW9uKGNvbG9yKSB7XG5cbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyVjICcpO1xuXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAnICsgY29sb3IpO1xuXG4gICAgICAgICAgICAgICAgbGFzdENvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAgaW5qZWN0IHRoZSB0ZXh0IGNvbG9yXG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSAnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGxhc3RDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XG5cbiAgICAgICAgICAgIGFyZ3MucHVzaCgnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIFVSTCBsaW5rIGJhY2tncm91bmQgY29sb3IgKGFsd2F5cyB3aGl0ZSlcbiAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAjZmZmJyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5nYW1lVGl0bGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdChjb25maWcuZ2FtZVRpdGxlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZy5nYW1lVmVyc2lvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyB2JyArIGNvbmZpZy5nYW1lVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCcgLyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgKCcgKyByZW5kZXJUeXBlICsgJyknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMgPSBjLmNvbmNhdCgnICVjICcgKyBjb25maWcuZ2FtZVVSTCk7XG5cbiAgICAgICAgLy8gIEluamVjdCB0aGUgbmV3IHN0cmluZyBiYWNrIGludG8gdGhlIGFyZ3MgYXJyYXlcbiAgICAgICAgYXJnc1swXSA9IGM7XG5cbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd1snY29uc29sZSddKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BoYXNlciB2JyArIENPTlNULlZFUlNJT04gKyAnIC8gaHR0cDovL3BoYXNlci5pbycpO1xuICAgIH1cblxuICAgIC8vIEtlZXAgdGhpcyBkdXJpbmcgZGV2IGJ1aWxkIG9ubHlcbiAgICBjb25zb2xlLmxvZyhDSEVDS1NVTS5idWlsZCk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVidWdIZWFkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0RlYnVnSGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIERldmljZSA9IHJlcXVpcmUoJy4uL2RldmljZScpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vQ29uZmlnJyk7XG52YXIgRGVidWdIZWFkZXIgPSByZXF1aXJlKCcuL0RlYnVnSGVhZGVyJyk7XG52YXIgQ3JlYXRlUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NyZWF0ZVJlbmRlcmVyJyk7XG52YXIgUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZSgnLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xudmFyIERPTUNvbnRlbnRMb2FkZWQgPSByZXF1aXJlKCcuLi9kb20vRE9NQ29udGVudExvYWRlZCcpO1xudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yJyk7XG52YXIgU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vc3RhdGUvU3RhdGVNYW5hZ2VyJyk7XG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcbnZhciBHYW1lT2JqZWN0cyA9IHJlcXVpcmUoJy4uL2dhbWVvYmplY3RzLycpO1xudmFyIFRleHR1cmVNYW5hZ2VyID0gcmVxdWlyZSAoJy4uL3RleHR1cmVzL1RleHR1cmVNYW5hZ2VyJyk7XG52YXIgQWRkVG9ET00gPSByZXF1aXJlKCcuLi9kb20vQWRkVG9ET00nKTtcblxudmFyIEdhbWUgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIHRoaXMuY29uZmlnID0gbmV3IENvbmZpZyhjb25maWcpO1xuXG4gICAgLy8gIERlY2lkZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHNob3VsZCBiZSBHYW1lIHByb3BlcnRpZXMsIG9yIHBsYWNlZCBlbHNld2hlcmUgLi4uXG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtzdHJpbmd8SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBHYW1lcyBET00gcGFyZW50LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5pc0Jvb3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZX0gcmFmIC0gQXV0b21hdGljYWxseSBoYW5kbGVzIHRoZSBjb3JlIGdhbWUgbG9vcCB2aWEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9yIHNldFRpbWVvdXRcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHRoaXMucmFmID0gbmV3IFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVGV4dHVyZU1hbmFnZXJ9IHRleHR1cmVzIC0gUmVmZXJlbmNlIHRvIHRoZSBQaGFzZXIgVGV4dHVyZSBNYW5hZ2VyLlxuICAgICovXG4gICAgdGhpcy50ZXh0dXJlcyA9IG5ldyBUZXh0dXJlTWFuYWdlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVXBkYXRlTWFuYWdlcn0gdXBkYXRlcyAtIFJlZmVyZW5jZSB0byB0aGUgUGhhc2VyIFVwZGF0ZSBNYW5hZ2VyLlxuICAgICovXG4gICAgdGhpcy51cGRhdGVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuQ2FjaGV9IGNhY2hlIC0gUmVmZXJlbmNlIHRvIHRoZSBhc3NldHMgY2FjaGUuXG4gICAgKi9cbiAgICB0aGlzLmNhY2hlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuSW5wdXR9IGlucHV0IC0gUmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBtYW5hZ2VyXG4gICAgKi9cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGVNYW5hZ2VyfSBzdGF0ZSAtIFRoZSBTdGF0ZU1hbmFnZXIuIFBoYXNlciBpbnN0YW5jZSBzcGVjaWZpYy5cbiAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMuY29uZmlnLnN0YXRlQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuRGV2aWNlfSBkZXZpY2UgLSBDb250YWlucyBkZXZpY2UgaW5mb3JtYXRpb24gYW5kIGNhcGFiaWxpdGllcyAoc2luZ2xldG9uKVxuICAgICovXG4gICAgdGhpcy5kZXZpY2UgPSBEZXZpY2U7XG5cbiAgICAvLyAgTW9yZSB0aGlzIHNvbWV3aGVyZSBlbHNlPyBNYXRoIHBlcmhhcHM/IERvZXNuJ3QgbmVlZCB0byBiZSBhIEdhbWUgbGV2ZWwgc3lzdGVtLlxuICAgIHRoaXMucm5kO1xuXG4gICAgLy8gIFdhaXQgZm9yIHRoZSBET00gUmVhZHkgZXZlbnQsIHRoZW4gY2FsbCBib290LlxuICAgIERPTUNvbnRlbnRMb2FkZWQodGhpcy5ib290LmJpbmQodGhpcykpO1xuXG4gICAgLy8gIEZvciBkZWJ1Z2dpbmcgb25seVxuICAgIHdpbmRvdy5nYW1lID0gdGhpcztcbn07XG5cbkdhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZTtcblxuR2FtZS5wcm90b3R5cGUgPSB7XG5cbiAgICBib290OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc0Jvb3RlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jb25maWcucHJlQm9vdCgpO1xuXG4gICAgICAgIC8vICBQcm9iYWJseSBtb3ZlIHdpdGhpbiBNYXRoXG4gICAgICAgIHRoaXMucm5kID0gbmV3IFJhbmRvbURhdGFHZW5lcmF0b3IodGhpcy5jb25maWcuc2VlZCk7XG5cbiAgICAgICAgRGVidWdIZWFkZXIodGhpcyk7XG5cbiAgICAgICAgQ3JlYXRlUmVuZGVyZXIodGhpcyk7XG5cbiAgICAgICAgQWRkVG9ET00odGhpcy5jYW52YXMsIHRoaXMuY29uZmlnLnBhcmVudCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5ib290KCk7XG5cbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLnBvc3RCb290KCk7XG5cbiAgICAgICAgdGhpcy5yYWYuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RhbXApXG4gICAge1xuICAgICAgICB0aGlzLnN0YXRlLnN0ZXAodGltZXN0YW1wKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9HYW1lLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMnKTtcblxuLyoqXG4qIEEgQ2FtZXJhIGlzIHlvdXIgdmlldyBpbnRvIHRoZSBnYW1lIHdvcmxkLiBJdCBoYXMgYSBwb3NpdGlvbiBhbmQgc2l6ZSBhbmQgcmVuZGVycyBvbmx5IHRob3NlIG9iamVjdHMgd2l0aGluIGl0cyBmaWVsZCBvZiB2aWV3LlxuKiBUaGUgZ2FtZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBzaW5nbGUgU3RhZ2Ugc2l6ZWQgY2FtZXJhIG9uIGJvb3QuIE1vdmUgdGhlIGNhbWVyYSBhcm91bmQgdGhlIHdvcmxkIHdpdGggUGhhc2VyLkNhbWVyYS54L3lcbipcbiogQGNsYXNzIFBoYXNlci5DYW1lcmFcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBHYW1lIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiogQHBhcmFtIHtudW1iZXJ9IGlkIC0gTm90IGJlaW5nIHVzZWQgYXQgdGhlIG1vbWVudCwgd2lsbCBiZSB3aGVuIFBoYXNlciBzdXBwb3J0cyBtdWx0aXBsZSBjYW1lcmFcbiogQHBhcmFtIHtudW1iZXJ9IHggLSBQb3NpdGlvbiBvZiB0aGUgY2FtZXJhIG9uIHRoZSBYIGF4aXNcbiogQHBhcmFtIHtudW1iZXJ9IHkgLSBQb3NpdGlvbiBvZiB0aGUgY2FtZXJhIG9uIHRoZSBZIGF4aXNcbiogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSB2aWV3IHJlY3RhbmdsZVxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgdmlldyByZWN0YW5nbGVcbiovXG52YXIgQ2FtZXJhID0gZnVuY3Rpb24gKHN0YXRlLCB4LCB5LCB2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodClcbntcbiAgICAvKipcbiAgICAgKiBUaGUgU3RhdGUgdGhhdCB0aGlzIENhbWVyYSBiZWxvbmdzIHRvLiBBIENhbWVyYSBjYW4gb25seSBiZWxvbmcgdG8gb25lIFN0YXRlLCBhbmQgYSBTdGF0ZSBvbmx5XG4gICAgICogaGFzIG9uZSBDYW1lcmEuXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGVcbiAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBHYW1lLlxuICAgICovXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcblxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0V2lkdGg7XG5cbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQ7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBDb21wb25lbnQuVHJhbnNmb3JtKHRoaXMsIHgsIHkpO1xuXG4gICAgLyoqXG4gICAgKiBUaGUgQ2FtZXJhIGlzIGJvdW5kIHRvIHRoaXMgUmVjdGFuZ2xlIGFuZCBjYW5ub3QgbW92ZSBvdXRzaWRlIG9mIGl0LiBCeSBkZWZhdWx0IGl0IGlzIGVuYWJsZWQgYW5kIHNldCB0byB0aGUgc2l6ZSBvZiB0aGUgV29ybGQuXG4gICAgKiBUaGUgUmVjdGFuZ2xlIGNhbiBiZSBsb2NhdGVkIGFueXdoZXJlIGluIHRoZSB3b3JsZCBhbmQgdXBkYXRlZCBhcyBvZnRlbiBhcyB5b3UgbGlrZS4gSWYgeW91IGRvbid0IHdpc2ggdGhlIENhbWVyYSB0byBiZSBib3VuZFxuICAgICogYXQgYWxsIHRoZW4gc2V0IHRoaXMgdG8gbnVsbC4gVGhlIHZhbHVlcyBjYW4gYmUgYW55dGhpbmcgYW5kIGFyZSBpbiBXb3JsZCBjb29yZGluYXRlcywgd2l0aCAwLDAgYmVpbmcgdGhlIHRvcC1sZWZ0IG9mIHRoZSB3b3JsZC5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5SZWN0YW5nbGV9IGJvdW5kcyAtIFRoZSBSZWN0YW5nbGUgaW4gd2hpY2ggdGhlIENhbWVyYSBpcyBib3VuZGVkLiBTZXQgdG8gbnVsbCB0byBhbGxvdyBmb3IgbW92ZW1lbnQgYW55d2hlcmUuXG4gICAgKi9cbiAgICAvLyB0aGlzLmJvdW5kcyA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgLy8gdGhpcy5ib3VuZHMgPSBuZXcgUGhhc2VyLkNpcmNsZSh4LCB5KVxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF0TGltaXQgLSBXaGV0aGVyIHRoaXMgY2FtZXJhIGlzIGZsdXNoIHdpdGggdGhlIFdvcmxkIEJvdW5kcyBvciBub3QuXG4gICAgKi9cbiAgICB0aGlzLmF0TGltaXQgPSB7IHg6IGZhbHNlLCB5OiBmYWxzZSB9O1xufTtcblxuQ2FtZXJhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhbWVyYTtcblxuQ2FtZXJhLnByb3RvdHlwZSA9IHtcblxuICAgIC8qKlxuICAgICogTWV0aG9kIGNhbGxlZCB0byBlbnN1cmUgdGhlIGNhbWVyYSBkb2Vzbid0IHZlbnR1cmUgb3V0c2lkZSBvZiB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IENhbWVyYS51cGRhdGUuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FtZXJhI2NoZWNrQm91bmRzXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgICBjaGVja0JvdW5kczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuYXRMaW1pdC54ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXRMaW1pdC55ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdmFyIHZ4ID0gdGhpcy52aWV3LnggKyB0aGlzLl9zaGFrZS54O1xuICAgICAgICAvLyB2YXIgdncgPSB0aGlzLnZpZXcucmlnaHQgKyB0aGlzLl9zaGFrZS54O1xuICAgICAgICAvLyB2YXIgdnkgPSB0aGlzLnZpZXcueSArIHRoaXMuX3NoYWtlLnk7XG4gICAgICAgIC8vIHZhciB2aCA9IHRoaXMudmlldy5ib3R0b20gKyB0aGlzLl9zaGFrZS55O1xuXG4gICAgICAgIHZhciB2eCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHZ3ID0gdGhpcy54ICsgdGhpcy52aWV3cG9ydFdpZHRoO1xuICAgICAgICB2YXIgdnkgPSB0aGlzLnk7XG4gICAgICAgIHZhciB2aCA9IHRoaXMueSArIHRoaXMudmlld3BvcnRIZWlnaHQ7XG5cbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB3ZSBkaWRuJ3QgZ28gb3V0c2lkZSB0aGUgY2FtZXJhcyBib3VuZHNcbiAgICAgICAgaWYgKHZ4IDw9IHRoaXMuYm91bmRzLnggKiB0aGlzLnNjYWxlLngpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXRMaW1pdC54ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlldy54ID0gdGhpcy5ib3VuZHMueCAqIHRoaXMuc2NhbGUueDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9zaGFrZS5zaGFrZUJvdW5kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGNhbWVyYSBpcyB1cCBhZ2FpbnN0IHRoZSBib3VuZHMsIHNvIHJlc2V0IHRoZSBzaGFrZVxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWtlLnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZ3ID49IHRoaXMuYm91bmRzLnJpZ2h0ICogdGhpcy5zY2FsZS54KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmF0TGltaXQueCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpZXcueCA9ICh0aGlzLmJvdW5kcy5yaWdodCAqIHRoaXMuc2NhbGUueCkgLSB0aGlzLndpZHRoO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3NoYWtlLnNoYWtlQm91bmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBUaGUgY2FtZXJhIGlzIHVwIGFnYWluc3QgdGhlIGJvdW5kcywgc28gcmVzZXQgdGhlIHNoYWtlXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hha2UueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodnkgPD0gdGhpcy5ib3VuZHMudG9wICogdGhpcy5zY2FsZS55KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmF0TGltaXQueSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpZXcueSA9IHRoaXMuYm91bmRzLnRvcCAqIHRoaXMuc2NhbGUueTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9zaGFrZS5zaGFrZUJvdW5kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGNhbWVyYSBpcyB1cCBhZ2FpbnN0IHRoZSBib3VuZHMsIHNvIHJlc2V0IHRoZSBzaGFrZVxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWtlLnkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZoID49IHRoaXMuYm91bmRzLmJvdHRvbSAqIHRoaXMuc2NhbGUueSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hdExpbWl0LnkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aWV3LnkgPSAodGhpcy5ib3VuZHMuYm90dG9tICogdGhpcy5zY2FsZS55KSAtIHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3NoYWtlLnNoYWtlQm91bmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBUaGUgY2FtZXJhIGlzIHVwIGFnYWluc3QgdGhlIGJvdW5kcywgc28gcmVzZXQgdGhlIHNoYWtlXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hha2UueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2FtZXJhLnByb3RvdHlwZSwge1xuXG4gICAgLy8gIFRyYW5zZm9ybSBnZXR0ZXJzIC8gc2V0dGVyc1xuXG4gICAgeDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bvc1g7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9wb3NYID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB5OiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcG9zWTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bvc1kgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHJpZ2h0OiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcG9zWCArICh0aGlzLnZpZXdwb3J0V2lkdGggKiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGJvdHRvbToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bvc1kgKyAodGhpcy52aWV3cG9ydEhlaWdodCAqIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgc2NhbGU6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZVg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZVk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBwaXZvdFg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9waXZvdFg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9waXZvdFggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBwaXZvdFk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9waXZvdFk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9waXZvdFkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBhbmdsZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHRoaXMucm90YXRpb24gKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IFBoYXNlci5NYXRoLndyYXBBbmdsZSh2YWx1ZSkgKiBQaGFzZXIuTWF0aC5ERUdfVE9fUkFEO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgcm90YXRpb246IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbiA9PT0gdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcm90YXRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbiAlIFBoYXNlci5NYXRoLlBJMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5jYWNoZS5zciA9IE1hdGguc2luKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uY2FjaGUuY3IgPSBNYXRoLmNvcyh0aGlzLnRyYW5zZm9ybS5fcm90YXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaGFzTG9jYWxSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaGFzTG9jYWxSb3RhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NhbWVyYS9DYW1lcmEuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NhbWVyYS9DYW1lcmEuanMiLCJ2YXIgQ0hFQ0tTVU0gPSB7XG5idWlsZDogJzE4ZDY5NjYwLWJjMmYtMTFlNi05ODM3LTk1MmIxNWRmNTU1OCdcbn07XG5tb2R1bGUuZXhwb3J0cyA9IENIRUNLU1VNO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NoZWNrc3VtLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogVGhlIENoaWxkcmVuIENvbXBvbmVudCBmZWF0dXJlcyBxdWljayBhY2Nlc3MgdG8gR3JvdXAgc29ydGluZyByZWxhdGVkIG1ldGhvZHMuXG4qXG4qIEBjbGFzc1xuKi9cbnZhciBDaGlsZHJlbiA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KVxue1xuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XG5cbiAgICAvLyAgVGhlIG9iamVjdHMgdGhhdCBiZWxvbmcgdG8gdGhpcyBjb2xsZWN0aW9uLlxuICAgIC8vICBUaGUgZXF1aXZhbGVudCBvZiB0aGUgb2xkIGBTcHJpdGUuY2hpbGRyZW5gIGFycmF5LlxuICAgIHRoaXMubGlzdCA9IFtdO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG59O1xuXG5DaGlsZHJlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZHJlbjtcblxuQ2hpbGRyZW4ucHJvdG90eXBlID0ge1xuXG4gICAgYWRkOiBmdW5jdGlvbiAoY2hpbGQsIHNraXBUcmFuc2Zvcm0pXG4gICAge1xuICAgICAgICBpZiAoc2tpcFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7IHNraXBUcmFuc2Zvcm0gPSBmYWxzZTsgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0+JywgdGhpcy5nYW1lT2JqZWN0Lm5hbWUsICdhZGRzIG5ldyBjaGlsZDonLCBjaGlsZC5uYW1lKTtcblxuICAgICAgICBpZiAoY2hpbGQucGFyZW50ID09PSB0aGlzKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2hpbGRyZW4uYWRkIDEnKTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5wYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGlsZHJlbi5hZGQgMicpO1xuICAgICAgICAgICAgY2hpbGQucGFyZW50LmNoaWxkcmVuLnJlbW92ZShjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzLmdhbWVPYmplY3Q7XG5cbiAgICAgICAgdGhpcy5saXN0LnB1c2goY2hpbGQpO1xuXG4gICAgICAgIGlmICghc2tpcFRyYW5zZm9ybSAmJiB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtICYmIGNoaWxkLnRyYW5zZm9ybSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lT2JqZWN0Lm5hbWUsICdhZGRzIHRyYW5zZm9ybSBmcm9tJywgY2hpbGQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLmFkZChjaGlsZC50cmFuc2Zvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJzwtLS0gZW5kJyk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICBhZGRBdDogZnVuY3Rpb24gKGNoaWxkLCBpbmRleCwgc2tpcFRyYW5zZm9ybSlcbiAgICB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICBpZiAoc2tpcFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7IHNraXBUcmFuc2Zvcm0gPSBmYWxzZTsgfVxuXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5saXN0Lmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQuY2hpbGRyZW4ucmVtb3ZlKGNoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFza2lwVHJhbnNmb3JtICYmIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0gJiYgY2hpbGQudHJhbnNmb3JtKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLmFkZChjaGlsZC50cmFuc2Zvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuXG4gICAgfSxcblxuICAgIGFkZE11bHRpcGxlOiBmdW5jdGlvbiAoY2hpbGRyZW4sIHNraXBUcmFuc2Zvcm0pXG4gICAge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY2hpbGRyZW5baV0sIHNraXBUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH0sXG5cbiAgICBnZXRBdDogZnVuY3Rpb24gKGluZGV4KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFtpbmRleF07XG4gICAgfSxcblxuICAgIGdldEluZGV4OiBmdW5jdGlvbiAoY2hpbGQpXG4gICAge1xuICAgICAgICAvLyAgUmV0dXJuIC0xIGlmIGdpdmVuIGNoaWxkIGlzbid0IGEgY2hpbGQgb2YgdGhpcyBwYXJlbnRcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5pbmRleE9mKGNoaWxkKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBmaXJzdCBpdGVtIGZyb20gdGhlIHNldCBiYXNlZCBvbiB0aGUgcHJvcGVydHkgc3RyaWN0bHkgZXF1YWxpbmcgdGhlIHZhbHVlIGdpdmVuLlxuICAgICogUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5BcnJheVNldCNnZXRCeUtleVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIGNoZWNrIGFnYWluc3QgdGhlIHZhbHVlLlxuICAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrIGlmIHRoZSBwcm9wZXJ0eSBzdHJpY3RseSBlcXVhbHMuXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBpdGVtIHRoYXQgd2FzIGZvdW5kLCBvciBudWxsIGlmIG5vdGhpbmcgbWF0Y2hlZC5cbiAgICAqL1xuICAgIGdldEJ5S2V5OiBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV1bcHJvcGVydHldID09PSB2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogU2VhcmNoZXMgdGhlIEdyb3VwIGZvciB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYSBjaGlsZCB3aXRoIHRoZSBgbmFtZWBcbiAgICAqIHByb3BlcnR5IG1hdGNoaW5nIHRoZSBnaXZlbiBhcmd1bWVudC4gU2hvdWxkIG1vcmUgdGhhbiBvbmUgY2hpbGQgaGF2ZVxuICAgICogdGhlIHNhbWUgbmFtZSBvbmx5IHRoZSBmaXJzdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNnZXRCeU5hbWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgdG8gc2VhcmNoIGZvci5cbiAgICAqIEByZXR1cm4ge2FueX0gVGhlIGZpcnN0IGNoaWxkIHdpdGggYSBtYXRjaGluZyBuYW1lLCBvciBudWxsIGlmIG5vbmUgd2VyZSBmb3VuZC5cbiAgICAqL1xuICAgIGdldEJ5TmFtZTogZnVuY3Rpb24gKG5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUtleSgnbmFtZScsIG5hbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gY2hpbGQgZnJvbSB0aGUgZ3JvdXAuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjZ2V0UmFuZG9tXG4gICAgKiBAcGFyYW0ge2ludGVnZXJ9IFtzdGFydEluZGV4PTBdIC0gT2Zmc2V0IGZyb20gdGhlIGZyb250IG9mIHRoZSBncm91cCAobG93ZXN0IGNoaWxkKS5cbiAgICAqIEBwYXJhbSB7aW50ZWdlcn0gW2xlbmd0aD0odG8gdG9wKV0gLSBSZXN0cmljdGlvbiBvbiB0aGUgbnVtYmVyIG9mIHZhbHVlcyB5b3Ugd2FudCB0byByYW5kb21seSBzZWxlY3QgZnJvbS5cbiAgICAqIEByZXR1cm4ge2FueX0gQSByYW5kb20gY2hpbGQgb2YgdGhpcyBHcm91cC5cbiAgICAqL1xuICAgIGdldFJhbmRvbTogZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGxlbmd0aClcbiAgICB7XG4gICAgICAgIGlmIChzdGFydEluZGV4ID09PSB1bmRlZmluZWQpIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7IGxlbmd0aCA9IHRoaXMubGlzdC5sZW5ndGg7IH1cblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwIHx8IGxlbmd0aCA+IHRoaXMubGlzdC5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmRvbUluZGV4ID0gc3RhcnRJbmRleCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFtyYW5kb21JbmRleF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhbGwgY2hpbGRyZW4gaW4gdGhpcyBHcm91cC5cbiAgICAqXG4gICAgKiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhIG1hdGNoaW5nIGNyaXRlcmlhIHVzaW5nIHRoZSBgcHJvcGVydHlgIGFuZCBgdmFsdWVgIGFyZ3VtZW50cy5cbiAgICAqXG4gICAgKiBGb3IgZXhhbXBsZTogYGdldEFsbCgnZXhpc3RzJywgdHJ1ZSlgIHdvdWxkIHJldHVybiBvbmx5IGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGVpciBleGlzdHMgcHJvcGVydHkgc2V0LlxuICAgICpcbiAgICAqIE9wdGlvbmFsbHkgeW91IGNhbiBzcGVjaWZ5IGEgc3RhcnQgYW5kIGVuZCBpbmRleC4gRm9yIGV4YW1wbGUgaWYgdGhpcyBHcm91cCBoYWQgMTAwIGNoaWxkcmVuLFxuICAgICogYW5kIHlvdSBzZXQgYHN0YXJ0SW5kZXhgIHRvIDAgYW5kIGBlbmRJbmRleGAgdG8gNTAsIGl0IHdvdWxkIHJldHVybiBtYXRjaGVzIGZyb20gb25seVxuICAgICogdGhlIGZpcnN0IDUwIGNoaWxkcmVuIGluIHRoZSBHcm91cC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNnZXRBbGxcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydHldIC0gQW4gb3B0aW9uYWwgcHJvcGVydHkgdG8gdGVzdCBhZ2FpbnN0IHRoZSB2YWx1ZSBhcmd1bWVudC5cbiAgICAqIEBwYXJhbSB7YW55fSBbdmFsdWVdIC0gSWYgcHJvcGVydHkgaXMgc2V0IHRoZW4gQ2hpbGQucHJvcGVydHkgbXVzdCBzdHJpY3RseSBlcXVhbCB0aGlzIHZhbHVlIHRvIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHRzLlxuICAgICogQHBhcmFtIHtpbnRlZ2VyfSBbc3RhcnRJbmRleD0wXSAtIFRoZSBmaXJzdCBjaGlsZCBpbmRleCB0byBzdGFydCB0aGUgc2VhcmNoIGZyb20uXG4gICAgKiBAcGFyYW0ge2ludGVnZXJ9IFtlbmRJbmRleF0gLSBUaGUgbGFzdCBjaGlsZCBpbmRleCB0byBzZWFyY2ggdXAgdW50aWwuXG4gICAgKiBAcmV0dXJuIHthbnl9IEEgcmFuZG9tIGV4aXN0aW5nIGNoaWxkIG9mIHRoaXMgR3JvdXAuXG4gICAgKi9cbiAgICBnZXRBbGw6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgIHtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgICAgICBpZiAoZW5kSW5kZXggPT09IHVuZGVmaW5lZCkgeyBlbmRJbmRleCA9IHRoaXMubGlzdC5sZW5ndGg7IH1cblxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmxpc3RbaV07XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRbcHJvcGVydHldID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgc3dhcDogZnVuY3Rpb24gKGNoaWxkMSwgY2hpbGQyKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkMSA9PT0gY2hpbGQyKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZXgxID0gdGhpcy5nZXRJbmRleChjaGlsZDEpO1xuICAgICAgICB2YXIgaW5kZXgyID0gdGhpcy5nZXRJbmRleChjaGlsZDIpO1xuXG4gICAgICAgIGlmIChpbmRleDEgPCAwIHx8IGluZGV4MiA8IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4uc3dhcDogU3VwcGxpZWQgb2JqZWN0cyBtdXN0IGJlIGNoaWxkcmVuIG9mIHRoZSBzYW1lIHBhcmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0W2luZGV4MV0gPSBjaGlsZDI7XG4gICAgICAgIHRoaXMubGlzdFtpbmRleDJdID0gY2hpbGQxO1xuICAgIH0sXG5cbiAgICAvLyAgIHdhcyBzZXRJbmRleFxuICAgIG1vdmVUbzogZnVuY3Rpb24gKGNoaWxkLCBpbmRleClcbiAgICB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmdldEluZGV4KGNoaWxkKTtcblxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5saXN0Lmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbi5tb3ZlVG86IFRoZSBzdXBwbGllZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgUmVtb3ZlXG4gICAgICAgIHRoaXMubGlzdC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcblxuICAgICAgICAvLyAgQWRkIGluIG5ldyBsb2NhdGlvblxuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uIChjaGlsZCwgc2tpcFRyYW5zZm9ybSlcbiAgICB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKGNoaWxkKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBpZiAoIXNraXBUcmFuc2Zvcm0gJiYgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybSAmJiBjaGlsZC50cmFuc2Zvcm0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5yZW1vdmUoY2hpbGQudHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICByZW1vdmVBdDogZnVuY3Rpb24gKGluZGV4LCBza2lwVHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5saXN0W2luZGV4XTtcblxuICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBpZiAoIXNraXBUcmFuc2Zvcm0gJiYgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybSAmJiBjaGlsZC50cmFuc2Zvcm0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5yZW1vdmUoY2hpbGQudHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQmV0d2VlbjogZnVuY3Rpb24gKGJlZ2luSW5kZXgsIGVuZEluZGV4KVxuICAgIHtcbiAgICAgICAgaWYgKGJlZ2luSW5kZXggPT09IHVuZGVmaW5lZCkgeyBiZWdpbkluZGV4ID0gMDsgfVxuICAgICAgICBpZiAoZW5kSW5kZXggPT09IHVuZGVmaW5lZCkgeyBlbmRJbmRleCA9IHRoaXMubGlzdC5sZW5ndGg7IH1cblxuICAgICAgICB2YXIgcmFuZ2UgPSBlbmRJbmRleCAtIGJlZ2luSW5kZXg7XG5cbiAgICAgICAgaWYgKHJhbmdlID4gMCAmJiByYW5nZSA8PSBlbmRJbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHJlbW92ZWQgPSB0aGlzLmxpc3Quc3BsaWNlKGJlZ2luSW5kZXgsIHJhbmdlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlbW92ZWRbaV0ucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyYW5nZSA9PT0gMCAmJiB0aGlzLmxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuLnJlbW92ZUJldHdlZW46IFJhbmdlIEVycm9yLCBudW1lcmljIHZhbHVlcyBhcmUgb3V0c2lkZSB0aGUgYWNjZXB0YWJsZSByYW5nZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVtb3ZlcyBhbGwgdGhlIGl0ZW1zLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkFycmF5U2V0I3JlbW92ZUFsbFxuICAgICovXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxpc3QubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMubGlzdFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gIENoZWNrIHRvIHNlZSBpZiB0aGUgZ2l2ZW4gY2hpbGQgaXMgYSBjaGlsZCBvZiB0aGlzIG9iamVjdCwgYXQgYW55IGRlcHRoIChyZWN1cnNpdmVseSBzY2FucyB1cCB0aGUgdHJlZSlcbiAgICBjb250YWluczogZnVuY3Rpb24gKGNoaWxkKVxuICAgIHtcbiAgICAgICAgaWYgKCFjaGlsZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLnBhcmVudCA9PT0gdGhpcylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhjaGlsZC5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQnJpbmdzIHRoZSBnaXZlbiBjaGlsZCB0byB0aGUgdG9wIG9mIHRoaXMgZ3JvdXAgc28gaXQgcmVuZGVycyBhYm92ZSBhbGwgb3RoZXIgY2hpbGRyZW4uXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjYnJpbmdUb1RvcFxuICAgICogQHBhcmFtIHthbnl9IGNoaWxkIC0gVGhlIGNoaWxkIHRvIGJyaW5nIHRvIHRoZSB0b3Agb2YgdGhpcyBncm91cC5cbiAgICAqIEByZXR1cm4ge2FueX0gVGhlIGNoaWxkIHRoYXQgd2FzIG1vdmVkLlxuICAgICovXG4gICAgYnJpbmdUb1RvcDogZnVuY3Rpb24gKGNoaWxkKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudCA9PT0gdGhpcyAmJiB0aGlzLmdldEluZGV4KGNoaWxkKSA8IHRoaXMubGlzdC5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBTZW5kcyB0aGUgZ2l2ZW4gY2hpbGQgdG8gdGhlIGJvdHRvbSBvZiB0aGlzIGdyb3VwIHNvIGl0IHJlbmRlcnMgYmVsb3cgYWxsIG90aGVyIGNoaWxkcmVuLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdyb3VwI3NlbmRUb0JhY2tcbiAgICAqIEBwYXJhbSB7YW55fSBjaGlsZCAtIFRoZSBjaGlsZCB0byBzZW5kIHRvIHRoZSBib3R0b20gb2YgdGhpcyBncm91cC5cbiAgICAqIEByZXR1cm4ge2FueX0gVGhlIGNoaWxkIHRoYXQgd2FzIG1vdmVkLlxuICAgICovXG4gICAgc2VuZFRvQmFjazogZnVuY3Rpb24gKGNoaWxkKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudCA9PT0gdGhpcyAmJiB0aGlzLmdldEluZGV4KGNoaWxkKSA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQXQoY2hpbGQsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIE1vdmVzIHRoZSBnaXZlbiBjaGlsZCB1cCBvbmUgcGxhY2UgaW4gdGhpcyBncm91cCB1bmxlc3MgaXQncyBhbHJlYWR5IGF0IHRoZSB0b3AuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjbW92ZVVwXG4gICAgKiBAcGFyYW0ge2FueX0gY2hpbGQgLSBUaGUgY2hpbGQgdG8gbW92ZSB1cCBpbiB0aGUgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBtb3ZlZC5cbiAgICAqL1xuICAgIG1vdmVVcDogZnVuY3Rpb24gKGNoaWxkKVxuICAgIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldEluZGV4KGNoaWxkKTtcblxuICAgICAgICBpZiAoYSAhPT0gLTEgJiYgYSA8IHRoaXMubGlzdC5sZW5ndGggLSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0QXQoYSArIDEpO1xuXG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3YXAoY2hpbGQsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIE1vdmVzIHRoZSBnaXZlbiBjaGlsZCBkb3duIG9uZSBwbGFjZSBpbiB0aGlzIGdyb3VwIHVubGVzcyBpdCdzIGFscmVhZHkgYXQgdGhlIGJvdHRvbS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNtb3ZlRG93blxuICAgICogQHBhcmFtIHthbnl9IGNoaWxkIC0gVGhlIGNoaWxkIHRvIG1vdmUgZG93biBpbiB0aGUgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBtb3ZlZC5cbiAgICAqL1xuICAgIG1vdmVEb3duOiBmdW5jdGlvbiAoY2hpbGQpXG4gICAge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0SW5kZXgoY2hpbGQpO1xuXG4gICAgICAgIGlmIChhID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmdldEF0KGEgLSAxKTtcblxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2FwKGNoaWxkLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXZlcnNlcyBhbGwgY2hpbGRyZW4gaW4gdGhpcyBncm91cC5cbiAgICAqXG4gICAgKiBUaGlzIG9wZXJhdGlvbiBhcHBsaWVzIG9ubHkgdG8gaW1tZWRpYXRlIGNoaWxkcmVuIGFuZCBkb2VzIG5vdCBwcm9wYWdhdGUgdG8gc3ViZ3JvdXBzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdyb3VwI3JldmVyc2VcbiAgICAqL1xuICAgIHJldmVyc2U6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QucmV2ZXJzZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzaHVmZmxlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmxpc3RbaV07XG4gICAgICAgICAgICB0aGlzLmxpc3RbaV0gPSB0aGlzLmxpc3Rbal07XG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0gPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVwbGFjZXMgYSBjaGlsZCBvZiB0aGlzIEdyb3VwIHdpdGggdGhlIGdpdmVuIG5ld0NoaWxkLiBUaGUgbmV3Q2hpbGQgY2Fubm90IGJlIGEgbWVtYmVyIG9mIHRoaXMgR3JvdXAuXG4gICAgKlxuICAgICogSWYgYEdyb3VwLmVuYWJsZUJvZHlgIGlzIHNldCwgdGhlbiBhIHBoeXNpY3MgYm9keSB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlIG9iamVjdCwgc28gbG9uZyBhcyBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAqXG4gICAgKiBJZiBgR3JvdXAuaW5wdXRFbmFibGVDaGlsZHJlbmAgaXMgc2V0LCB0aGVuIGFuIElucHV0IEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZSBvYmplY3QsIHNvIGxvbmcgYXMgb25lIGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjcmVwbGFjZVxuICAgICogQHBhcmFtIHthbnl9IG9sZENoaWxkIC0gVGhlIGNoaWxkIGluIHRoaXMgZ3JvdXAgdGhhdCB3aWxsIGJlIHJlcGxhY2VkLlxuICAgICogQHBhcmFtIHthbnl9IG5ld0NoaWxkIC0gVGhlIGNoaWxkIHRvIGJlIGluc2VydGVkIGludG8gdGhpcyBncm91cC5cbiAgICAqIEByZXR1cm4ge2FueX0gUmV0dXJucyB0aGUgb2xkQ2hpbGQgdGhhdCB3YXMgcmVwbGFjZWQgd2l0aGluIHRoaXMgZ3JvdXAuXG4gICAgKi9cbiAgICByZXBsYWNlOiBmdW5jdGlvbiAob2xkQ2hpbGQsIG5ld0NoaWxkLCBza2lwVHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleChvbGRDaGlsZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnQucmVtb3ZlKG5ld0NoaWxkLCBza2lwVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW1vdmUob2xkQ2hpbGQsIHNraXBUcmFuc2Zvcm0pO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEF0KG5ld0NoaWxkLCBpbmRleCwgc2tpcFRyYW5zZm9ybSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvbGRDaGlsZDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyAgU3dhcHMgYSBjaGlsZCBmcm9tIGFub3RoZXIgcGFyZW50LCB3aXRoIG9uZSBmcm9tIHRoaXMgcGFyZW50LlxuICAgIC8vICBjaGlsZDEgPSB0aGUgY2hpbGQgb2YgVEhJUyBwYXJlbnRcbiAgICAvLyAgY2hpbGQyID0gdGhlIGNoaWxkIG9mIHRoZSBPVEhFUiBwYXJlbnRcbiAgICBleGNoYW5nZTogZnVuY3Rpb24gKGNoaWxkMSwgY2hpbGQyLCBza2lwVHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkMSA9PT0gY2hpbGQyIHx8IGNoaWxkMS5wYXJlbnQgPT09IGNoaWxkMi5wYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbiA9IGNoaWxkMi5wYXJlbnQuY2hpbGRyZW47XG5cbiAgICAgICAgdmFyIGluZGV4MSA9IHRoaXMuZ2V0SW5kZXgoY2hpbGQxKTtcbiAgICAgICAgdmFyIGluZGV4MiA9IHBhcmVudENoaWxkcmVuLmdldEluZGV4KGNoaWxkMik7XG5cbiAgICAgICAgaWYgKGluZGV4MSA8IDAgfHwgaW5kZXgyIDwgMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbi5zd2FwOiBTdXBwbGllZCBvYmplY3RzIG11c3QgYmUgY2hpbGRyZW4gb2YgcGFyZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdmUoY2hpbGQxLCBza2lwVHJhbnNmb3JtKTtcblxuICAgICAgICBwYXJlbnRDaGlsZHJlbi5yZW1vdmUoY2hpbGQyLCBza2lwVHJhbnNmb3JtKTtcblxuICAgICAgICB0aGlzLmFkZEF0KGNoaWxkMiwgaW5kZXgxLCBza2lwVHJhbnNmb3JtKTtcblxuICAgICAgICBwYXJlbnRDaGlsZHJlbi5hZGRBdChjaGlsZDEsIGluZGV4Miwgc2tpcFRyYW5zZm9ybSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2tzIGZvciB0aGUgaXRlbSB3aXRoaW4gdGhpcyBsaXN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkFycmF5U2V0I2V4aXN0c1xuICAgICogQHBhcmFtIHthbnl9IGl0ZW0gLSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIGxpc3QgaW5kZXggZm9yLlxuICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBmb3VuZCBpbiB0aGUgbGlzdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICovXG4gICAgZXhpc3RzOiBmdW5jdGlvbiAoY2hpbGQpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMubGlzdC5pbmRleE9mKGNoaWxkKSA+IC0xKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBga2V5YCB0byB0aGUgZ2l2ZW4gdmFsdWUgb24gYWxsIG1lbWJlcnMgb2YgdGhpcyBsaXN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkFycmF5U2V0I3NldEFsbFxuICAgICogQHBhcmFtIHthbnl9IGtleSAtIFRoZSBwcm9wZXJ0eSBvZiB0aGUgaXRlbSB0byBzZXQuXG4gICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0by5cbiAgICAqL1xuICAgIHNldEFsbDogZnVuY3Rpb24gKGtleSwgdmFsdWUpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFtpXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUGFzc2VzIGFsbCBjaGlsZHJlbiB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suXG4gICAgKlxuICAgICogQG1ldGhvZCBlYWNoXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFt0aGlzQXJnXSAtIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgKiBAcGFyYW0gey4uLip9IFthcmd1bWVudHNdIC0gQWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2ssIGFmdGVyIHRoZSBjaGlsZC5cbiAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZylcbiAgICB7XG4gICAgICAgIHZhciBhcmdzID0gWyBudWxsIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgYXJnc1swXSA9IHRoaXMubGlzdFtpXTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogTW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gdGhpcyBHcm91cCB0byB0aGUgR3JvdXAgZ2l2ZW4uXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjbW92ZUFsbFxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IGdyb3VwIC0gVGhlIG5ldyBHcm91cCB0byB3aGljaCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBtb3ZlZCB0by5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbGVudD1mYWxzZV0gLSBJZiB0cnVlIHRoZSBjaGlsZHJlbiB3aWxsIG5vdCBkaXNwYXRjaCB0aGUgYG9uQWRkZWRUb0dyb3VwYCBldmVudCBmb3IgdGhlIG5ldyBHcm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIEdyb3VwIHRvIHdoaWNoIGFsbCB0aGUgY2hpbGRyZW4gd2VyZSBtb3ZlZC5cbiAgICAqL1xuICAgIHJlcGFyZW50OiBmdW5jdGlvbiAobmV3UGFyZW50KVxuICAgIHtcbiAgICAgICAgaWYgKG5ld1BhcmVudCAhPT0gdGhpcylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5yZW1vdmUodGhpcy5saXN0W2ldKTtcblxuICAgICAgICAgICAgICAgIG5ld1BhcmVudC5hZGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1BhcmVudDtcbiAgICB9XG5cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENoaWxkcmVuLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGFuZCByZXNldHMgdGhlIGN1cnNvciB0byB0aGUgc3RhcnQuXG4gICAgKlxuICAgICogQG5hbWUgUGhhc2VyLkFycmF5U2V0I2ZpcnN0XG4gICAgKiBAcHJvcGVydHkge2FueX0gZmlyc3RcbiAgICAqL1xuICAgIGxlbmd0aDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgZmlyc3QgaXRlbSBhbmQgcmVzZXRzIHRoZSBjdXJzb3IgdG8gdGhlIHN0YXJ0LlxuICAgICpcbiAgICAqIEBuYW1lIFBoYXNlci5BcnJheVNldCNmaXJzdFxuICAgICogQHByb3BlcnR5IHthbnl9IGZpcnN0XG4gICAgKi9cbiAgICBmaXJzdDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBhbmQgcmVzZXRzIHRoZSBjdXJzb3IgdG8gdGhlIGVuZC5cbiAgICAqXG4gICAgKiBAbmFtZSBQaGFzZXIuQXJyYXlTZXQjbGFzdFxuICAgICogQHByb3BlcnR5IHthbnl9IGxhc3RcbiAgICAqL1xuICAgIGxhc3Q6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmxpc3QubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIHRoZSBuZXh0IGl0ZW0gKGJhc2VkIG9uIHRoZSBjdXJzb3IpIGFuZCBhZHZhbmNlcyB0aGUgY3Vyc29yLlxuICAgICpcbiAgICAqIEBuYW1lIFBoYXNlci5BcnJheVNldCNuZXh0XG4gICAgKiBAcHJvcGVydHkge2FueX0gbmV4dFxuICAgICovXG4gICAgbmV4dDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMubGlzdC5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgdGhlIHByZXZpb3VzIGl0ZW0gKGJhc2VkIG9uIHRoZSBjdXJzb3IpIGFuZCByZXRyZWF0cyB0aGUgY3Vyc29yLlxuICAgICpcbiAgICAqIEBuYW1lIFBoYXNlci5BcnJheVNldCNwcmV2aW91c1xuICAgICogQHByb3BlcnR5IHthbnl9IHByZXZpb3VzXG4gICAgKi9cbiAgICBwcmV2aW91czoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi0tO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZHJlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbXBvbmVudHMvQ2hpbGRyZW4uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBUaGUgQ29sb3IgQ29tcG9uZW50IGFsbG93cyB5b3UgdG8gY29udHJvbCB0aGUgYWxwaGEsIGJsZW5kIG1vZGUsIHRpbnQgYW5kIGJhY2tncm91bmQgY29sb3Jcbiogb2YgYSBHYW1lIE9iamVjdC5cbipcbiogQGNsYXNzXG4qL1xudmFyIENvbG9yID0gZnVuY3Rpb24gKGdhbWVPYmplY3QpXG57XG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcblxuICAgIHRoaXMuc3RhdGUgPSBnYW1lT2JqZWN0LnN0YXRlO1xuXG4gICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcblxuICAgIHRoaXMuX2FscGhhID0gMTtcbiAgICB0aGlzLl93b3JsZEFscGhhID0gMTtcblxuICAgIHRoaXMuX2JsZW5kTW9kZSA9IDA7XG5cbiAgICB0aGlzLl90aW50ID0geyB0b3BMZWZ0OiAweGZmZmZmZiwgdG9wUmlnaHQ6IDB4ZmZmZmZmLCBib3R0b21MZWZ0OiAweGZmZmZmZiwgYm90dG9tUmlnaHQ6IDB4ZmZmZmZmIH07XG4gICAgdGhpcy5fZ2xUaW50ID0geyB0b3BMZWZ0OiAxNjc3NzIxNSwgdG9wUmlnaHQ6IDE2Nzc3MjE1LCBib3R0b21MZWZ0OiAxNjc3NzIxNSwgYm90dG9tUmlnaHQ6IDE2Nzc3MjE1IH07XG4gICAgdGhpcy5faGFzVGludCA9IGZhbHNlO1xuXG4gICAgLy8gIEJldHdlZW4gMCBhbmQgMjU1XG4gICAgdGhpcy5fciA9IDA7XG4gICAgdGhpcy5fZyA9IDA7XG4gICAgdGhpcy5fYiA9IDA7XG5cbiAgICAvLyAgQmV0d2VlbiAwIGFuZCAxXG4gICAgdGhpcy5fYSA9IDE7XG5cbiAgICAvLyAgU3RyaW5nIHZlcnNpb24gb2YgUkdCQVxuICAgIHRoaXMuX3JnYmEgPSAnJztcblxuICAgIC8vICAzMi1iaXQgdmVyc2lvbiBvZiBBUkdCXG4gICAgdGhpcy5fZ2xCZyA9IDA7XG5cbiAgICB0aGlzLl9oYXNCYWNrZ3JvdW5kID0gZmFsc2U7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb2xvcjtcblxuQ29sb3IucHJvdG90eXBlID0ge1xuXG4gICAgc2V0QmFja2dyb3VuZDogZnVuY3Rpb24gKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKVxuICAgIHtcbiAgICAgICAgaWYgKHJlZCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNCYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9nbEJnID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fciA9IHJlZDtcbiAgICAgICAgICAgIHRoaXMuX2cgPSAoZ3JlZW4pID8gZ3JlZW4gOiAwO1xuICAgICAgICAgICAgdGhpcy5fYiA9IChibHVlKSA/IGJsdWUgOiAwO1xuICAgICAgICAgICAgdGhpcy5fYSA9IChhbHBoYSkgPyBhbHBoYSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2xlYXJUaW50OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRUaW50KDB4ZmZmZmZmKTtcblxuICAgICAgICB0aGlzLl9oYXNUaW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHNldFRpbnQ6IGZ1bmN0aW9uICh0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAodG9wUmlnaHQgPT09IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgdG9wUmlnaHQgPSB0b3BMZWZ0O1xuICAgICAgICAgICAgYm90dG9tTGVmdCA9IHRvcExlZnQ7XG4gICAgICAgICAgICBib3R0b21SaWdodCA9IHRvcExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbnRUb3BMZWZ0ID0gdG9wTGVmdDtcbiAgICAgICAgdGhpcy50aW50VG9wUmlnaHQgPSB0b3BSaWdodDtcbiAgICAgICAgdGhpcy50aW50Qm90dG9tTGVmdCA9IGJvdHRvbUxlZnQ7XG4gICAgICAgIHRoaXMudGludEJvdHRvbVJpZ2h0ID0gYm90dG9tUmlnaHQ7XG5cbiAgICAgICAgdGhpcy5faGFzVGludCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfSxcblxuICAgIC8vICBDYWxsZWQgYnkgdGhlIERpcnR5IE1hbmFnZXJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9oYXNCYWNrZ3JvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9yZ2JhID0gJ3JnYmEoJyArIHRoaXMuX3IgKyAnLCcgKyB0aGlzLl9nICsgJywnICsgdGhpcy5fYiArICcsJyArIHRoaXMuX2EgKyAnKSc7XG4gICAgICAgICAgICB0aGlzLl9nbEJnID0gdGhpcy5nZXRDb2xvcjMyKHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2EpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIFRpbnQgbXVsdHM/XG5cbiAgICB9LFxuXG4gICAgZ2V0Q29sb3I6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPj4gMTYpICsgKHZhbHVlICYgMHhmZjAwKSArICgodmFsdWUgJiAweGZmKSA8PCAxNik7XG4gICAgfSxcblxuICAgIGdldENvbG9yMzI6IGZ1bmN0aW9uIChyLCBnLCBiLCBhKVxuICAgIHtcbiAgICAgICAgYSAqPSAyNTU7XG5cbiAgICAgICAgcmV0dXJuICgoYSA8PCAyNCkgfCAoYiA8PCAxNikgfCAoZyA8PCA4KSB8IHIpID4+PiAwO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RpbnQgPSBbXTtcbiAgICB9XG5cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbG9yLnByb3RvdHlwZSwge1xuXG4gICAgZGlydHk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuYWRkKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgdGludFRvcExlZnQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQudG9wTGVmdDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdGludC50b3BMZWZ0ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9nbFRpbnQudG9wTGVmdCA9IHRoaXMuZ2V0Q29sb3IodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB0aW50VG9wUmlnaHQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQudG9wUmlnaHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbnQudG9wUmlnaHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2dsVGludC50b3BSaWdodCA9IHRoaXMuZ2V0Q29sb3IodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB0aW50Qm90dG9tTGVmdDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGludC5ib3R0b21MZWZ0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90aW50LmJvdHRvbUxlZnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2dsVGludC5ib3R0b21MZWZ0ID0gdGhpcy5nZXRDb2xvcih2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHRpbnRCb3R0b21SaWdodDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGludC5ib3R0b21SaWdodDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdGludC5ib3R0b21SaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZ2xUaW50LmJvdHRvbVJpZ2h0ID0gdGhpcy5nZXRDb2xvcih2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHRpbnQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGludCh2YWx1ZSwgdmFsdWUsIHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBhbHBoYToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxwaGE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fYWxwaGEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxwaGEgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGJsZW5kTW9kZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxlbmRNb2RlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2JsZW5kTW9kZSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDE2KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JsZW5kTW9kZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd29ybGRBbHBoYToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ybGRBbHBoYTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fd29ybGRBbHBoYSA9IHRoaXMuX2FscGhhICogdmFsdWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBiYWNrZ3JvdW5kQWxwaGE6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2E7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fYSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzQmFja2dyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICByZWQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3I7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yID0gdmFsdWUgfCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZ3JlZW46IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nID0gdmFsdWUgfCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgYmx1ZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9iKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2IgPSB2YWx1ZSB8IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzQmFja2dyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb21wb25lbnRzL0NvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogVGhlIERhdGEgQ29tcG9uZW50IGZlYXR1cmVzIGEgbWVhbnMgdG8gc3RvcmUgcGllY2VzIG9mIGRhdGEgc3BlY2lmaWMgdG8gYSBHYW1lIE9iamVjdCxcbiogc2VhcmNoIGl0LCBxdWVyeSBpdCwgYW5kIHJldHJpZXZlIGl0LlxuKlxuKiBAY2xhc3NcbiovXG52YXIgRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQpXG57XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmxpc3QgPSB7fTtcblxuICAgIHRoaXMuX2JlZm9yZUNhbGxiYWNrcyA9IHt9O1xuICAgIHRoaXMuX2FmdGVyQ2FsbGJhY2tzID0ge307XG5cbiAgICB0aGlzLl9mcm96ZW4gPSBmYWxzZTtcbn07XG5cbkRhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YTtcblxuRGF0YS5wcm90b3R5cGUgPSB7XG5cbiAgICAvLyAgUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleSwgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgZ2V0OiBmdW5jdGlvbiAoa2V5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFtrZXldO1xuICAgIH0sXG5cbiAgICBnZXRBbGw6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxpc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IHRoaXMubGlzdFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcblxuICAgIHF1ZXJ5OiBmdW5jdGlvbiAoc2VhcmNoKVxuICAgIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5saXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKHNlYXJjaCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1trZXldID0gdGhpcy5saXN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCBkYXRhKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2Zyb3plbilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgLy8gIElmIHRoZXJlIGlzIGEgJ2JlZm9yZScgY2FsbGJhY2ssIHRoZW4gY2hlY2sgaXQgZm9yIGEgcmVzdWx0XG4gICAgICAgIGlmICh0aGlzLl9iZWZvcmVDYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLl9iZWZvcmVDYWxsYmFja3Nba2V5XTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgdGhpcy5wYXJlbnQsIGtleSwgZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0W2tleV0gPSBkYXRhO1xuXG4gICAgICAgIC8vICBJZiB0aGVyZSBpcyBhICdhZnRlcicgY2FsbGJhY2ssIHRoZW4gY2hlY2sgaXQgZm9yIGEgcmVzdWx0XG4gICAgICAgIGlmICh0aGlzLl9hZnRlckNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuX2FmdGVyQ2FsbGJhY2tzW2tleV07XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuc2NvcGUsIHRoaXMucGFyZW50LCBrZXksIGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYmVmb3JlOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaywgc2NvcGUpXG4gICAge1xuICAgICAgICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFJlbW92ZSBlbnRyeVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JlZm9yZUNhbGxiYWNrc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQ2FsbGJhY2tzW2tleV0gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgc2NvcGU6IHNjb3BlIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrLCBzY29wZSlcbiAgICB7XG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgUmVtb3ZlIGVudHJ5XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYWZ0ZXJDYWxsYmFja3Nba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQ2FsbGJhY2tzW2tleV0gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgc2NvcGU6IHNjb3BlIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBQYXNzZXMgYWxsIGRhdGEgZW50cmllcyB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suIFN0b3JlcyB0aGUgcmVzdWx0IG9mIHRoZSBjYWxsYmFjay5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGVhY2hcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSAtIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgKiBAcGFyYW0gey4uLip9IFthcmd1bWVudHNdIC0gQWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2ssIGFmdGVyIHRoZSBnYW1lIG9iamVjdCwga2V5LCBhbmQgZGF0YS5cbiAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaywgc2NvcGUpXG4gICAge1xuICAgICAgICB2YXIgYXJncyA9IFsgdGhpcy5wYXJlbnQsIG51bGwsIHVuZGVmaW5lZCBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxpc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFyZ3NbMV0gPSBrZXk7XG4gICAgICAgICAgICBhcmdzWzJdID0gdGhpcy5saXN0W2tleV07XG5cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXJnZTogZnVuY3Rpb24gKGRhdGEsIG92ZXJ3cml0ZSlcbiAgICB7XG4gICAgICAgIGlmIChvdmVyd3JpdGUgPT09IHVuZGVmaW5lZCkgeyBvdmVyd3JpdGUgPSB0cnVlOyB9XG5cbiAgICAgICAgLy8gIE1lcmdlIGRhdGEgZnJvbSBhbm90aGVyIGNvbXBvbmVudCBpbnRvIHRoaXMgb25lXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAob3ZlcndyaXRlIHx8ICghb3ZlcndyaXRlICYmICF0aGlzLmhhcyhrZXkpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Rba2V5XSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLl9mcm96ZW4gJiYgdGhpcy5oYXMoa2V5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdFtrZXldO1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9iZWZvcmVDYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JlZm9yZUNhbGxiYWNrc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2FmdGVyQ2FsbGJhY2tzLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hZnRlckNhbGxiYWNrc1trZXldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vICBHZXRzIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gJ2tleScsIGRlbGV0ZXMgaXQgZnJvbSB0aGlzIERhdGEgc3RvcmUsIHRoZW4gcmV0dXJucyBpdC5cbiAgICBwb3A6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIXRoaXMuX2Zyb3plbiAmJiB0aGlzLmhhcyhrZXkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5saXN0W2tleV07XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxpc3Rba2V5XTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmhhc093blByb3BlcnR5KGtleSk7XG4gICAgfSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubGlzdClcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5fYmVmb3JlQ2FsbGJhY2tzKVxuICAgICAgICB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYmVmb3JlQ2FsbGJhY2tzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9hZnRlckNhbGxiYWNrcylcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FmdGVyQ2FsbGJhY2tzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9mcm96ZW4gPSBmYWxzZTtcbiAgICB9XG5cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKERhdGEucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAqIEZyZWV6ZSB0aGlzIERhdGEgY29tcG9uZW50LCBzbyBubyBjaGFuZ2VzIGNhbiBiZSB3cml0dGVuIHRvIGl0LlxuICAgICpcbiAgICAqIEBuYW1lIGZyZWV6ZVxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmcmVlemVcbiAgICAqL1xuICAgIGZyZWV6ZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJvemVuO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9mcm96ZW4gPSAodmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY291bnQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5saXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbXBvbmVudHMvRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIDJEIFRyYW5zZm9ybWF0aW9uIENvbXBvbmVudC5cbipcbiogQGNsYXNzXG4qL1xudmFyIFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0LCB4LCB5LCBzY2FsZVgsIHNjYWxlWSlcbntcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7IHggPSAwOyB9XG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gMDsgfVxuICAgIGlmIChzY2FsZVggPT09IHVuZGVmaW5lZCkgeyBzY2FsZVggPSAxOyB9XG4gICAgaWYgKHNjYWxlWSA9PT0gdW5kZWZpbmVkKSB7IHNjYWxlWSA9IDE7IH1cblxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XG5cbiAgICB0aGlzLnN0YXRlID0gKGdhbWVPYmplY3Quc3RhdGUpID8gZ2FtZU9iamVjdC5zdGF0ZSA6IGdhbWVPYmplY3QucGFyZW50LnN0YXRlO1xuXG4gICAgdGhpcy5nYW1lID0gdGhpcy5zdGF0ZS5nYW1lO1xuXG4gICAgLy8gIExvY2FsIFRyYW5zZm9ybVxuICAgIC8vICBhID0gc2NhbGUgWFxuICAgIC8vICBiID0gc2hlYXIgWVxuICAgIC8vICBjID0gc2hlYXIgWFxuICAgIC8vICBkID0gc2NhbGUgWVxuICAgIC8vICB0eCAvIHR5ID0gdHJhbnNsYXRpb25cbiAgICAvLyB0aGlzLmxvY2FsID0geyBhOiBzY2FsZVgsIGI6IDAsIGM6IDAsIGQ6IHNjYWxlWSwgdHg6IHgsIHR5OiB5IH07XG5cbiAgICAvLyAgV29ybGQgVHJhbnNmb3JtXG4gICAgdGhpcy53b3JsZCA9IHsgYTogc2NhbGVYLCBiOiAwLCBjOiAwLCBkOiBzY2FsZVksIHR4OiB4LCB0eTogeSB9O1xuXG4gICAgdGhpcy5vbGQgPSB7IGE6IHNjYWxlWCwgYjogMCwgYzogMCwgZDogc2NhbGVZLCB0eDogeCwgdHk6IHkgfTtcblxuICAgIC8vICBDYWNoZWQgVHJhbnNmb3JtIENhbGN1bGF0aW9uc1xuICAgIHRoaXMuY2FjaGUgPSB7IGE6IDEsIGI6IDAsIGM6IDAsIGQ6IDEsIHNyOiAwLCBjcjogMCB9O1xuXG4gICAgLy8gIEdMIFZlcnRleCBEYXRhXG4gICAgdGhpcy5nbFZlcnRleHREYXRhID0geyB4MDogMCwgeTA6IDAsIHgxOiAwLCB5MTogMCwgeDI6IDAsIHkyOiAwLCB4MzogMCwgeTM6IDAgfTtcblxuICAgIHRoaXMuaW1tZWRpYXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLmludGVycG9sYXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhc0xvY2FsUm90YXRpb24gPSBmYWxzZTtcblxuICAgIC8vICBQcml2YXRlIHZhbHVlIGhvbGRlcnMsIGFjY2Vzc2VkIHZpYSB0aGUgZ2V0dGVycyBhbmQgc2V0dGVyc1xuICAgIHRoaXMuX3Bvc1ggPSB4O1xuICAgIHRoaXMuX3Bvc1kgPSB5O1xuICAgIHRoaXMuX3NjYWxlWCA9IHNjYWxlWDtcbiAgICB0aGlzLl9zY2FsZVkgPSBzY2FsZVk7XG4gICAgdGhpcy5fcm90YXRpb24gPSAwO1xuICAgIHRoaXMuX3Bpdm90WCA9IDA7XG4gICAgdGhpcy5fcGl2b3RZID0gMDtcbiAgICB0aGlzLl9hbmNob3JYID0gMDtcbiAgICB0aGlzLl9hbmNob3JZID0gMDtcblxuICAgIHRoaXMuX3dvcmxkUm90YXRpb24gPSAwO1xuICAgIHRoaXMuX3dvcmxkU2NhbGVYID0gc2NhbGVYO1xuICAgIHRoaXMuX3dvcmxkU2NhbGVZID0gc2NhbGVZO1xuXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuX2RpcnR5VmVydGV4ID0gdHJ1ZTtcblxuICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuYWRkKHRoaXMpO1xuXG4gICAgLy8gIFRoZSBwYXJlbnQgVHJhbnNmb3JtIChOT1QgdGhlIHBhcmVudCBHYW1lT2JqZWN0LCBhbHRob3VnaCB2ZXJ5IG9mdGVuIHRoZXkgYXJlIHJlbGF0ZWQpXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgLy8gIEFueSBjaGlsZCBUcmFuc2Zvcm1zIG9mIHRoaXMgb25lIC0gbm90ZSB0aGF0IHRoZXkgZG9uJ3QgaGF2ZSB0byBiZWxvbmcgdG8gR2FtZSBPYmplY3RzXG4gICAgLy8gIHRoYXQgYXJlIGNoaWxkcmVuIG9mIHRoZSBvd25lciBvZiB0aGlzIFRyYW5zZm9ybVxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUgPSB7XG5cbiAgICBhZGQ6IGZ1bmN0aW9uIChjaGlsZClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEF0KGNoaWxkLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfSxcblxuICAgIGFkZEF0OiBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KVxuICAgIHtcbiAgICAgICAgLy8gIEludmFsaWQgY2hpbGQ/XG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcyB8fCBjaGlsZC5wYXJlbnQgPT09IHRoaXMgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIGNoaWxkJyk7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgQ2hpbGQgYWxyZWFkeSBwYXJlbnRlZD8gUmVtb3ZlIGl0XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuXG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uIChjaGlsZClcbiAgICB7XG4gICAgICAgIC8vICBJbnZhbGlkIGNoaWxkP1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMgfHwgY2hpbGQucGFyZW50ICE9PSB0aGlzKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVBdDogZnVuY3Rpb24gKGluZGV4KVxuICAgIHtcbiAgICAgICAgLy8gIFZhbGlkIGluZGV4P1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZFswXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZFswXS5wYXJlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGVuYWJsZUludGVycG9sYXRpb246IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmludGVycG9sYXRlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN5bmNJbnRlcnBvbGF0aW9uKCk7XG4gICAgfSxcblxuICAgIHN5bmNJbnRlcnBvbGF0aW9uOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgdmFyIG9sZCA9IHRoaXMub2xkO1xuICAgICAgICB2YXIgd29ybGQgPSB0aGlzLndvcmxkO1xuXG4gICAgICAgIG9sZC5hID0gd29ybGQuYTtcbiAgICAgICAgb2xkLmIgPSB3b3JsZC5iO1xuICAgICAgICBvbGQuYyA9IHdvcmxkLmM7XG4gICAgICAgIG9sZC5kID0gd29ybGQuZDtcbiAgICAgICAgb2xkLnR4ID0gd29ybGQudHg7XG4gICAgICAgIG9sZC50eSA9IHdvcmxkLnR5O1xuICAgIH0sXG5cbiAgICBkaXNhYmxlSW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0geDsgfVxuXG4gICAgICAgIHRoaXMuX3Bvc1ggPSB4O1xuICAgICAgICB0aGlzLl9wb3NZID0geTtcblxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgc2V0U2NhbGU6IGZ1bmN0aW9uICh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0geDsgfVxuXG4gICAgICAgIHRoaXMuX3NjYWxlWCA9IHg7XG4gICAgICAgIHRoaXMuX3NjYWxlWSA9IHk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgc2V0UGl2b3Q6IGZ1bmN0aW9uICh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0geDsgfVxuXG4gICAgICAgIHRoaXMuX3Bpdm90WCA9IHg7XG4gICAgICAgIHRoaXMuX3Bpdm90WSA9IHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIHNldEFuY2hvcjogZnVuY3Rpb24gKHgsIHkpXG4gICAge1xuICAgICAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSB4OyB9XG5cbiAgICAgICAgdGhpcy5fYW5jaG9yWCA9IHg7XG4gICAgICAgIHRoaXMuX2FuY2hvclkgPSB5O1xuXG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzZXRSb3RhdGlvbjogZnVuY3Rpb24gKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICAvLyAgVXBkYXRlcyB0aGUgVHJhbnNmb3JtLndvcmxkIG9iamVjdCwgcmVhZHkgZm9yIHJlbmRlcmluZ1xuICAgIC8vICBBc3N1bWluZyB0aGlzIFRyYW5zZm9ybSBpcyBhIHJvb3Qgbm9kZSAoaS5lLiBubyB0cmFuc2Zvcm0gcGFyZW50KVxuICAgIHVwZGF0ZUZyb21Sb290OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIG9sZCA9IHRoaXMub2xkO1xuICAgICAgICB2YXIgd29ybGQgPSB0aGlzLndvcmxkO1xuXG4gICAgICAgIG9sZC5hID0gd29ybGQuYTtcbiAgICAgICAgb2xkLmIgPSB3b3JsZC5iO1xuICAgICAgICBvbGQuYyA9IHdvcmxkLmM7XG4gICAgICAgIG9sZC5kID0gd29ybGQuZDtcbiAgICAgICAgb2xkLnR4ID0gd29ybGQudHg7XG4gICAgICAgIG9sZC50eSA9IHdvcmxkLnR5O1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0xvY2FsUm90YXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ1RyYW5zZm9ybS51cGRhdGVGcm9tUm9vdCcpO1xuXG4gICAgICAgICAgICB3b3JsZC5hID0gdGhpcy5jYWNoZS5hO1xuICAgICAgICAgICAgd29ybGQuYiA9IHRoaXMuY2FjaGUuYjtcbiAgICAgICAgICAgIHdvcmxkLmMgPSB0aGlzLmNhY2hlLmM7XG4gICAgICAgICAgICB3b3JsZC5kID0gdGhpcy5jYWNoZS5kO1xuICAgICAgICAgICAgd29ybGQudHggPSB0aGlzLl9wb3NYIC0gKCh0aGlzLl9waXZvdFggKiB0aGlzLmNhY2hlLmEpICsgKHRoaXMuX3Bpdm90WSAqIHRoaXMuY2FjaGUuYykpO1xuICAgICAgICAgICAgd29ybGQudHkgPSB0aGlzLl9wb3NZIC0gKCh0aGlzLl9waXZvdFggKiB0aGlzLmNhY2hlLmIpICsgKHRoaXMuX3Bpdm90WSAqIHRoaXMuY2FjaGUuZCkpO1xuXG4gICAgICAgICAgICB0aGlzLl93b3JsZFJvdGF0aW9uID0gTWF0aC5hdGFuMigtdGhpcy5jYWNoZS5jLCB0aGlzLmNhY2hlLmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnVHJhbnNmb3JtLnVwZGF0ZUZyb21Sb290IEZBU1QnKTtcblxuICAgICAgICAgICAgd29ybGQuYSA9IHRoaXMuX3NjYWxlWDtcbiAgICAgICAgICAgIHdvcmxkLmIgPSAwO1xuICAgICAgICAgICAgd29ybGQuYyA9IDA7XG4gICAgICAgICAgICB3b3JsZC5kID0gdGhpcy5fc2NhbGVZO1xuICAgICAgICAgICAgd29ybGQudHggPSB0aGlzLl9wb3NYIC0gKHRoaXMuX3Bpdm90WCAqIHRoaXMuX3NjYWxlWCk7XG4gICAgICAgICAgICB3b3JsZC50eSA9IHRoaXMuX3Bvc1kgLSAodGhpcy5fcGl2b3RZICogdGhpcy5fc2NhbGVZKTtcblxuICAgICAgICAgICAgdGhpcy5fd29ybGRSb3RhdGlvbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl93b3JsZFNjYWxlWCA9IHRoaXMuX3NjYWxlWDtcbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZVkgPSB0aGlzLl9zY2FsZVk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUZyb21QYXJlbnQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgb2xkID0gdGhpcy5vbGQ7XG4gICAgICAgIHZhciB3b3JsZCA9IHRoaXMud29ybGQ7XG5cbiAgICAgICAgb2xkLmEgPSB3b3JsZC5hO1xuICAgICAgICBvbGQuYiA9IHdvcmxkLmI7XG4gICAgICAgIG9sZC5jID0gd29ybGQuYztcbiAgICAgICAgb2xkLmQgPSB3b3JsZC5kO1xuICAgICAgICBvbGQudHggPSB3b3JsZC50eDtcbiAgICAgICAgb2xkLnR5ID0gd29ybGQudHk7XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50LndvcmxkO1xuICAgICAgICB2YXIgdHggPSAwO1xuICAgICAgICB2YXIgdHkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0xvY2FsUm90YXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ1RyYW5zZm9ybS51cGRhdGVGcm9tUGFyZW50JywgdGhpcy5wYXJlbnQubmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5jYWNoZS5hO1xuICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmNhY2hlLmI7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2FjaGUuYztcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5jYWNoZS5kO1xuXG4gICAgICAgICAgICB0eCA9IHRoaXMuX3Bvc1ggLSAoKHRoaXMuX3Bpdm90WCAqIGEpICsgKHRoaXMuX3Bpdm90WSAqIGMpKTtcbiAgICAgICAgICAgIHR5ID0gdGhpcy5fcG9zWSAtICgodGhpcy5fcGl2b3RYICogYikgKyAodGhpcy5fcGl2b3RZICogZCkpO1xuXG4gICAgICAgICAgICB3b3JsZC5hID0gKGEgKiBwYXJlbnQuYSkgKyAoYiAqIHBhcmVudC5jKTtcbiAgICAgICAgICAgIHdvcmxkLmIgPSAoYSAqIHBhcmVudC5iKSArIChiICogcGFyZW50LmQpO1xuICAgICAgICAgICAgd29ybGQuYyA9IChjICogcGFyZW50LmEpICsgKGQgKiBwYXJlbnQuYyk7XG4gICAgICAgICAgICB3b3JsZC5kID0gKGMgKiBwYXJlbnQuYikgKyAoZCAqIHBhcmVudC5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ1RyYW5zZm9ybS51cGRhdGVGcm9tUGFyZW50IEZBU1QnLCB0aGlzLnBhcmVudC5uYW1lKTtcblxuICAgICAgICAgICAgdHggPSB0aGlzLl9wb3NYIC0gKHRoaXMuX3Bpdm90WCAqIHRoaXMuX3NjYWxlWCk7XG4gICAgICAgICAgICB0eSA9IHRoaXMuX3Bvc1kgLSAodGhpcy5fcGl2b3RZICogdGhpcy5fc2NhbGVZKTtcblxuICAgICAgICAgICAgd29ybGQuYSA9IHRoaXMuX3NjYWxlWCAqIHBhcmVudC5hO1xuICAgICAgICAgICAgd29ybGQuYiA9IHRoaXMuX3NjYWxlWCAqIHBhcmVudC5iO1xuICAgICAgICAgICAgd29ybGQuYyA9IHRoaXMuX3NjYWxlWSAqIHBhcmVudC5jO1xuICAgICAgICAgICAgd29ybGQuZCA9IHRoaXMuX3NjYWxlWSAqIHBhcmVudC5kO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fd29ybGRSb3RhdGlvbiA9IE1hdGguYXRhbjIoLXRoaXMud29ybGQuYywgdGhpcy53b3JsZC5kKTtcblxuICAgICAgICB3b3JsZC50eCA9ICh0eCAqIHBhcmVudC5hKSArICh0eSAqIHBhcmVudC5jKSArIHBhcmVudC50eDtcbiAgICAgICAgd29ybGQudHkgPSAodHggKiBwYXJlbnQuYikgKyAodHkgKiBwYXJlbnQuZCkgKyBwYXJlbnQudHk7XG5cbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZVggPSB0aGlzLl9zY2FsZVggKiBNYXRoLnNxcnQoKHdvcmxkLmEgKiB3b3JsZC5hKSArICh3b3JsZC5jICogd29ybGQuYykpO1xuICAgICAgICB0aGlzLl93b3JsZFNjYWxlWSA9IHRoaXMuX3NjYWxlWSAqIE1hdGguc3FydCgod29ybGQuYiAqIHdvcmxkLmIpICsgKHdvcmxkLmQgKiB3b3JsZC5kKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUFuY2VzdG9yczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ1RyYW5zZm9ybS51cGRhdGVBbmNlc3RvcnMnKTtcblxuICAgICAgICAvLyAgTm8gcGFyZW50PyBUaGVuIGp1c3QgdXBkYXRlIHRoZSBjaGlsZHJlbiBhbmQgbGVhdmUsIG91ciBqb2IgaXMgZG9uZVxuICAgICAgICBpZiAoIXRoaXMucGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICd1cGRhdGVBbmNlc3RvcnMgaGFzIG5vIHBhcmVudCBUcmFuc2Zvcm0nKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVGcm9tUm9vdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICdzdGFydCB1cGRhdGVBbmNlc3RvcnMgd2hpbGUnKTtcblxuICAgICAgICAvLyAgR2V0cyBhbGwgcGFyZW50IG5vZGVzLCBzdGFydGluZyBmcm9tIHRoaXMgVHJhbnNmb3JtLlxuICAgICAgICAvLyAgVGhlbiB1cGRhdGVzIGZyb20gdGhlIHRvcCwgZG93biwgYnV0IG9ubHkgb24gdGhlIGFuY2VzdG9ycyxcbiAgICAgICAgLy8gIG5vdCBhbnkgb3RoZXIgY2hpbGRyZW4gLSB3aWxsIGdpdmUgdXMgYWNjdXJhdGUgd29ybGRYIGV0YyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdmFyIG5vZGVzID0gW107XG5cbiAgICAgICAgZG9cbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAobm9kZSk7XG5cbiAgICAgICAgLy8gIFdlJ3ZlIGdvdCBhbGwgdGhlIGFuY2VzdG9ycyBpbiB0aGUgJ25vZGVzJyBhcnJheSwgbGV0J3MgbG9vcCBpdFxuXG4gICAgICAgIHdoaWxlIChub2Rlcy5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGUudXBkYXRlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGUudXBkYXRlRnJvbVJvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBCeSB0aGlzIHBvaW50IGFsbCBvZiB0aGlzIFRyYW5zZm9ybXMgYW5jZXN0b3JzIGhhdmUgYmVlblxuICAgICAgICAvLyAgdXBkYXRlZCwgaW4gdGhlIGNvcnJlY3Qgb3JkZXIsIHNvIHdlIGNhbiBub3cgZG8gdGhpcyBvbmVcbiAgICAgICAgLy8gIGFuZCBhbnkgb2YgaXRzIGNoaWxkcmVuIHRvb1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnVHJhbnNmb3JtLnVwZGF0ZUNoaWxkcmVuJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUZyb21EaXJ0eVBhcmVudDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ2lzIHVwZGF0ZUZyb21EaXJ0eVBhcmVudCcsIHRoaXMucGFyZW50Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVBhcmVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0udXBkYXRlRnJvbURpcnR5UGFyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kaXJ0eVZlcnRleCA9IHRydWU7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5fZGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB0aGlzIFRyYW5zZm9ybSBpcyBkaXJ0eVxuICAgICAgICAvLyAgc28gd2UgbmVlZCB0byB1cGRhdGUgaXQgZnJvbSBpdHMgcGFyZW50XG4gICAgICAgIC8vICBhbmQgdGhlbiBmb3JjZSB0aGUgdXBkYXRlIHRvIGFsbCBjaGlsZHJlblxuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGcm9tUGFyZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZyb21Sb290KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbilcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZUZyb21EaXJ0eVBhcmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGlydHlWZXJ0ZXggPSB0cnVlO1xuICAgIH0sXG5cbiAgICB1cGRhdGVDYWNoZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuY2FjaGUuYSA9IHRoaXMuY2FjaGUuY3IgKiB0aGlzLl9zY2FsZVg7XG4gICAgICAgIHRoaXMuY2FjaGUuYiA9IHRoaXMuY2FjaGUuc3IgKiB0aGlzLl9zY2FsZVg7XG4gICAgICAgIHRoaXMuY2FjaGUuYyA9IC10aGlzLmNhY2hlLnNyICogdGhpcy5fc2NhbGVZO1xuICAgICAgICB0aGlzLmNhY2hlLmQgPSB0aGlzLmNhY2hlLmNyICogdGhpcy5fc2NhbGVZO1xuICAgIH0sXG5cbiAgICB1cGRhdGVWZXJ0ZXhEYXRhOiBmdW5jdGlvbiAoaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZU9iamVjdC5mcmFtZSB8fCAoIXRoaXMuX2RpcnR5VmVydGV4ICYmICF0aGlzLmludGVycG9sYXRlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5nYW1lT2JqZWN0LmZyYW1lO1xuXG4gICAgICAgIHZhciB3MDtcbiAgICAgICAgdmFyIGgwO1xuICAgICAgICB2YXIgdzE7XG4gICAgICAgIHZhciBoMTtcblxuICAgICAgICBpZiAoZnJhbWUuZGF0YS50cmltKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgSWYgdGhlIHNwcml0ZSBpcyB0cmltbWVkLCBhZGQgdGhlIGV4dHJhIHNwYWNlIGJlZm9yZSB0cmFuc2Zvcm1pbmdcbiAgICAgICAgICAgIHcxID0gZnJhbWUueCAtICh0aGlzLl9hbmNob3JYICogZnJhbWUud2lkdGgpO1xuICAgICAgICAgICAgdzAgPSB3MSArIGZyYW1lLmN1dFdpZHRoO1xuXG4gICAgICAgICAgICBoMSA9IGZyYW1lLnkgLSAodGhpcy5fYW5jaG9yWSAqIGZyYW1lLmhlaWdodCk7XG4gICAgICAgICAgICBoMCA9IGgxICsgZnJhbWUuY3V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdzAgPSBmcmFtZS53aWR0aCAqICgxIC0gdGhpcy5fYW5jaG9yWCk7XG4gICAgICAgICAgICAvLyB3MSA9IGZyYW1lLndpZHRoICogLXRoaXMuX2FuY2hvclg7XG5cbiAgICAgICAgICAgIC8vIGgwID0gZnJhbWUuaGVpZ2h0ICogKDEgLSB0aGlzLl9hbmNob3JZKTtcbiAgICAgICAgICAgIC8vIGgxID0gZnJhbWUuaGVpZ2h0ICogLXRoaXMuX2FuY2hvclk7XG5cbiAgICAgICAgICAgIHcwID0gZnJhbWUuY3V0V2lkdGggKiAoMSAtIHRoaXMuX2FuY2hvclgpO1xuICAgICAgICAgICAgdzEgPSBmcmFtZS5jdXRXaWR0aCAqIC10aGlzLl9hbmNob3JYO1xuXG4gICAgICAgICAgICBoMCA9IGZyYW1lLmN1dEhlaWdodCAqICgxIC0gdGhpcy5fYW5jaG9yWSk7XG4gICAgICAgICAgICBoMSA9IGZyYW1lLmN1dEhlaWdodCAqIC10aGlzLl9hbmNob3JZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSBmcmFtZS5zb3VyY2UucmVzb2x1dGlvbjtcblxuICAgICAgICB2YXIgd3QgPSB0aGlzLndvcmxkO1xuXG4gICAgICAgIHZhciBhID0gd3QuYSAvIHJlc29sdXRpb247XG4gICAgICAgIHZhciBiID0gd3QuYiAvIHJlc29sdXRpb247XG4gICAgICAgIHZhciBjID0gd3QuYyAvIHJlc29sdXRpb247XG4gICAgICAgIHZhciBkID0gd3QuZCAvIHJlc29sdXRpb247XG4gICAgICAgIHZhciB0eCA9IHd0LnR4O1xuICAgICAgICB2YXIgdHkgPSB3dC50eTtcblxuICAgICAgICBpZiAodGhpcy5pbnRlcnBvbGF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMub2xkO1xuXG4gICAgICAgICAgICAvLyBJbnRlcnBvbGF0ZSB3aXRoIHRoZSBsYXN0IHBvc2l0aW9uIHRvIHJlZHVjZSBzdHV0dGVyaW5nLlxuICAgICAgICAgICAgYSA9IG9sZC5hICsgKChhIC0gb2xkLmEpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgYiA9IG9sZC5iICsgKChiIC0gb2xkLmIpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgYyA9IG9sZC5jICsgKChjIC0gb2xkLmMpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgZCA9IG9sZC5kICsgKChkIC0gb2xkLmQpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgdHggPSBvbGQudHggKyAoKHR4IC0gb2xkLnR4KSAqIGludGVycG9sYXRpb25QZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHR5ID0gb2xkLnR5ICsgKCh0eSAtIG9sZC50eSkgKiBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhbWUucm90YXRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdmFyIGN3ID0gZnJhbWUuY3V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgY2ggPSBmcmFtZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgYTAgPSBhO1xuICAgICAgICAgICAgdmFyIGIwID0gYjtcbiAgICAgICAgICAgIHZhciBjMCA9IGM7XG4gICAgICAgICAgICB2YXIgZDAgPSBkO1xuICAgICAgICAgICAgdmFyIF93MSA9IHcxO1xuICAgICAgICAgICAgdmFyIF93MCA9IHcwO1xuXG4gICAgICAgICAgICAvLyAgT2Zmc2V0IGJlZm9yZSByb3RhdGluZ1xuICAgICAgICAgICAgdHggPSAod3QuYyAqIGNoKSArIHR4O1xuICAgICAgICAgICAgdHkgPSAod3QuZCAqIGNoKSArIHR5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgUm90YXRlIG1hdHJpeCBieSA5MCBkZWdyZWVzIHdpdGggcHJlY2FsYyB2YWx1ZXMgZm9yIHNpbmUgYW5kIGNvc2luZSBvZiByYWQoOTApXG4gICAgICAgICAgICBhID0gKGEwICogNi4xMjMyMzM5OTU3MzY3NjZlLTE3KSArIC1jMDtcbiAgICAgICAgICAgIGIgPSAoYjAgKiA2LjEyMzIzMzk5NTczNjc2NmUtMTcpICsgLWQwO1xuICAgICAgICAgICAgYyA9IGEwICsgKGMwICogNi4xMjMyMzM5OTU3MzY3NjZlLTE3KTtcbiAgICAgICAgICAgIGQgPSBiMCArIChkMCAqIDYuMTIzMjMzOTk1NzM2NzY2ZS0xNyk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBVViBjb29yZGluYXRlc1xuICAgICAgICAgICAgZnJhbWUudXBkYXRlVVZzSW52ZXJ0ZWQoKTtcblxuICAgICAgICAgICAgLy8gUm90YXRlIGRpbWVuc2lvbnNcbiAgICAgICAgICAgIHcwID0gaDA7XG4gICAgICAgICAgICB3MSA9IGgxO1xuICAgICAgICAgICAgaDAgPSBfdzA7XG4gICAgICAgICAgICBoMSA9IF93MTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFtZS5hdXRvUm91bmQgPT09IDEgfHwgKGZyYW1lLmF1dG9Sb3VuZCA9PT0gLTEgJiYgdGhpcy5nYW1lLnJlbmRlcmVyLnJvdW5kUGl4ZWxzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdHggfD0gMDtcbiAgICAgICAgICAgIHR5IHw9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmVydCA9IHRoaXMuZ2xWZXJ0ZXh0RGF0YTtcblxuICAgICAgICAvLyAgVG9wIExlZnQgVmVydFxuICAgICAgICB2ZXJ0LngwID0gKGEgKiB3MSkgKyAoYyAqIGgxKSArIHR4O1xuICAgICAgICB2ZXJ0LnkwID0gKGQgKiBoMSkgKyAoYiAqIHcxKSArIHR5O1xuXG4gICAgICAgIC8vICBUb3AgUmlnaHQgVmVydFxuICAgICAgICB2ZXJ0LngxID0gKGEgKiB3MCkgKyAoYyAqIGgxKSArIHR4O1xuICAgICAgICB2ZXJ0LnkxID0gKGQgKiBoMSkgKyAoYiAqIHcwKSArIHR5O1xuXG4gICAgICAgIC8vICBCb3R0b20gUmlnaHQgVmVydFxuICAgICAgICB2ZXJ0LngyID0gKGEgKiB3MCkgKyAoYyAqIGgwKSArIHR4O1xuICAgICAgICB2ZXJ0LnkyID0gKGQgKiBoMCkgKyAoYiAqIHcwKSArIHR5O1xuXG4gICAgICAgIC8vICBCb3R0b20gTGVmdCBWZXJ0XG4gICAgICAgIHZlcnQueDMgPSAoYSAqIHcxKSArIChjICogaDApICsgdHg7XG4gICAgICAgIHZlcnQueTMgPSAoZCAqIGgwKSArIChiICogdzEpICsgdHk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmVydDtcbiAgICB9LFxuXG4gICAgZ2V0VmVydGV4RGF0YTogZnVuY3Rpb24gKGludGVycG9sYXRpb25QZXJjZW50YWdlKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJwb2xhdGUgfHwgdGhpcy5fZGlydHlWZXJ0ZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmVydGV4RGF0YShpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2RpcnR5VmVydGV4ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nbFZlcnRleHREYXRhO1xuICAgIH0sXG5cbiAgICBjbG9uZVZlcnRleERhdGE6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgc3JjID0gdGhpcy5nbFZlcnRleHREYXRhO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4MDogc3JjLngwLFxuICAgICAgICAgICAgeTA6IHNyYy55MCxcbiAgICAgICAgICAgIHgxOiBzcmMueDEsXG4gICAgICAgICAgICB5MTogc3JjLnkxLFxuICAgICAgICAgICAgeDI6IHNyYy54MixcbiAgICAgICAgICAgIHkyOiBzcmMueTIsXG4gICAgICAgICAgICB4Mzogc3JjLngzLFxuICAgICAgICAgICAgeTM6IHNyYy55M1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRyYW5zZm9ybS5wcm90b3R5cGUsIHtcblxuICAgIC8vICBUcmFuc2Zvcm0gZ2V0dGVycyAvIHNldHRlcnNcblxuICAgIHg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc1g7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3Bvc1ggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgeToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zWTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcG9zWSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGVYO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zY2FsZVggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NjYWxlWSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGUoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHNjYWxlWDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGVYO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zY2FsZVggPSB2YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZVk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjYWxlWTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc2NhbGVZID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgYW5jaG9yOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JYO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldEFuY2hvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBhbmNob3JYOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JYO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hbmNob3JYID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGFuY2hvclk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvclk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FuY2hvclkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgcGl2b3RYOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9waXZvdFg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3Bpdm90WCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBwaXZvdFk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bpdm90WTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcGl2b3RZID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGUoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGFuZ2xlOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBQaGFzZXIuTWF0aC53cmFwQW5nbGUodGhpcy5yb3RhdGlvbiAqIFBoYXNlci5NYXRoLlJBRF9UT19ERUcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHZhbHVlKSAqIFBoYXNlci5NYXRoLkRFR19UT19SQUQ7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICByb3RhdGlvbjoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3RhdGlvbiA9PT0gdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3RhdGlvbiAlIFBoYXNlci5NYXRoLlBJMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnNyID0gTWF0aC5zaW4odGhpcy5fcm90YXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUuY3IgPSBNYXRoLmNvcyh0aGlzLl9yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzTG9jYWxSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNMb2NhbFJvdGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyAgU2V0cyB0aGlzICpjb21wb25lbnQqIGFzIGJlaW5nIGRpcnR5XG4gICAgZGlydHk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbW1lZGlhdGUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eVZlcnRleCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLmFkZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLy8gIEdMT0JBTCByZWFkLW9ubHkgcHJvcGVydGllcyBmcm9tIGhlcmUgb25cbiAgICAvLyAgTmVlZCAqYWxsKiBwYXJlbnRzIHRha2VuIGludG8gYWNjb3VudCB0byBnZXQgdGhlIGNvcnJlY3QgdmFsdWVzXG5cbiAgICBuYW1lOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5nYW1lT2JqZWN0KSA/IHRoaXMuZ2FtZU9iamVjdC5uYW1lIDogJyc7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3b3JsZFJvdGF0aW9uOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93b3JsZFJvdGF0aW9uO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd29ybGRTY2FsZVg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmNlc3RvcnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkU2NhbGVYO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd29ybGRTY2FsZVk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmNlc3RvcnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkU2NhbGVZO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd29ybGRYOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmxkLnR4O1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd29ybGRZOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmxkLnR5O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbXBvbmVudHMvVHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xuXG52YXIgQXVkaW8gPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXVkaW9EYXRhIC0gQXJlIEF1ZGlvIHRhZ3MgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGF1ZGlvRGF0YTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViQXVkaW8gLSBJcyB0aGUgV2ViQXVkaW8gQVBJIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3ZWJBdWRpbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb2dnIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb2dnIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG9nZzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B1cyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9wdXMgZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgb3B1czogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXAzIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgbXAzIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1wMzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2F2IC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2F2IGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdhdjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIENhbiB0aGlzIGRldmljZSBwbGF5IG00YSBmaWxlcz9cbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbTRhIC0gVHJ1ZSBpZiB0aGlzIGRldmljZSBjYW4gcGxheSBtNGEgZmlsZXMuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbTRhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJtIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2VibSBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3ZWJtOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBkb2xieSAtIENhbiB0aGlzIGRldmljZSBwbGF5IEVDLTMgRG9sYnkgRGlnaXRhbCBQbHVzIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGRvbGJ5OiBmYWxzZVxuXG59O1xuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgQXVkaW8uYXVkaW9EYXRhID0gISEod2luZG93WydBdWRpbyddKTtcbiAgICBBdWRpby53ZWJBdWRpbyA9ICEhKHdpbmRvd1snQXVkaW9Db250ZXh0J10gfHwgd2luZG93Wyd3ZWJraXRBdWRpb0NvbnRleHQnXSk7XG5cbiAgICB2YXIgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcblxuICAgIHZhciByZXN1bHQgPSAhIWF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZTtcblxuICAgIHRyeVxuICAgIHtcbiAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ub2dnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJvcHVzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpIHx8IGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb3B1czsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLm9wdXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ubXAzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIE1pbWV0eXBlcyBhY2NlcHRlZDpcbiAgICAgICAgICAgIC8vICBkZXZlbG9wZXIubW96aWxsYS5vcmcvRW4vTWVkaWFfZm9ybWF0c19zdXBwb3J0ZWRfYnlfdGhlX2F1ZGlvX2FuZF92aWRlb19lbGVtZW50c1xuICAgICAgICAgICAgLy8gIGJpdC5seS9pcGhvbmVvc2NvZGVjc1xuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLndhdiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ubTRhID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLndlYm0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7Y29kZWNzPVwiZWMtM1wiJykgIT09ICcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChCcm93c2VyLmVkZ2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJyb3dzZXIuc2FmYXJpICYmIEJyb3dzZXIuc2FmYXJpVmVyc2lvbiA+PSA5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgvTWFjIE9TIFggKFxcZCspXyhcXGQrKS8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWpvciA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbm9yID0gcGFyc2VJbnQoUmVnRXhwLiQyLCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWFqb3IgPT09IDEwICYmIG1pbm9yID49IDExKSB8fCBtYWpvciA+IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvLmRvbGJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSlcbiAgICB7XG4gICAgICAgIC8vICBOb3RoaW5nIHRvIGRvIGhlcmVcbiAgICB9XG5cbiAgICByZXR1cm4gQXVkaW87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0F1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvQXVkaW8uanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xuXG52YXIgRnVsbHNjcmVlbiA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdmFpbGFibGUgLSBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIEZ1bGwgU2NyZWVuIEFQST9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBhdmFpbGFibGU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVxdWVzdCAtIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBGdWxsIFNjcmVlbiBBUEkgdGhpcyBob2xkcyB0aGUgY2FsbCB5b3UgbmVlZCB0byB1c2UgdG8gYWN0aXZhdGUgaXQuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgcmVxdWVzdDogJycsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYW5jZWwgLSBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgRnVsbCBTY3JlZW4gQVBJIHRoaXMgaG9sZHMgdGhlIGNhbGwgeW91IG5lZWQgdG8gdXNlIHRvIGNhbmNlbCBpdC5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjYW5jZWw6ICcnLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGtleWJvYXJkIC0gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IGFjY2VzcyB0byB0aGUgS2V5Ym9hcmQgZHVyaW5nIEZ1bGwgU2NyZWVuIG1vZGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAga2V5Ym9hcmQ6IGZhbHNlXG5cbn07XG5cbi8qKlxuKiBDaGVja3MgZm9yIHN1cHBvcnQgb2YgdGhlIEZ1bGwgU2NyZWVuIEFQSS5cbiovXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgdmFyIGZzID0gW1xuICAgICAgICAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAncmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICdtc1JlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgJ21velJlcXVlc3RGdWxsc2NyZWVuJ1xuICAgIF07XG5cbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmIChlbGVtZW50W2ZzW2ldXSlcbiAgICAgICAge1xuICAgICAgICAgICAgRnVsbHNjcmVlbi5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0ID0gZnNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjZnMgPSBbXG4gICAgICAgICdjYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgJ3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAnbXNDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICdtb3pFeGl0RnVsbHNjcmVlbidcbiAgICBdO1xuXG4gICAgaWYgKEZ1bGxzY3JlZW4uYXZhaWxhYmxlKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZnMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFtjZnNbaV1dKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEZ1bGxzY3JlZW4uY2FuY2VsID0gY2ZzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gIEtleWJvYXJkIElucHV0P1xuICAgIGlmICh3aW5kb3dbJ0VsZW1lbnQnXSAmJiBFbGVtZW50WydBTExPV19LRVlCT0FSRF9JTlBVVCddKVxuICAgIHtcbiAgICAgICAgRnVsbHNjcmVlbi5rZXlib2FyZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZ1bGxzY3JlZW47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0Z1bGxzY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9GdWxsc2NyZWVuLmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcblxudmFyIElucHV0ID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRvdWNoIC0gSXMgdG91Y2ggYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRvdWNoOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtc3BvaW50ZXIgLSBJcyBtc3BvaW50ZXIgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1zcG9pbnRlcjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7P3N0cmluZ30gd2hlZWxUeXBlIC0gVGhlIG5ld2VzdCB0eXBlIG9mIFdoZWVsL1Njcm9sbCBldmVudCBzdXBwb3J0ZWQ6ICd3aGVlbCcsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJ1xuICAgICogQGRlZmF1bHRcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHdoZWVsRXZlbnQ6IG51bGxcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8ICh3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPj0gMSkpXG4gICAge1xuICAgICAgICBJbnB1dC50b3VjaCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKVxuICAgIHtcbiAgICAgICAgSW5wdXQubXNwb2ludGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIU9TLmNvY29vbkpTKVxuICAgIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxuICAgICAgICBpZiAoJ29ud2hlZWwnIGluIHdpbmRvdyB8fCAoQnJvd3Nlci5pZSAmJiAnV2hlZWxFdmVudCcgaW4gd2luZG93KSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gRE9NMyBXaGVlbCBFdmVudDogRkYgMTcrLCBJRSA5KywgQ2hyb21lIDMxKywgU2FmYXJpIDcrXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ3doZWVsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnb25tb3VzZXdoZWVsJyBpbiB3aW5kb3cpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIE5vbi1GRiBsZWdhY3k6IElFIDYtOSwgQ2hyb21lIDEtMzEsIFNhZmFyaSA1LTcuXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ21vdXNld2hlZWwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJyb3dzZXIuZmlyZWZveCAmJiAnTW91c2VTY3JvbGxFdmVudCcgaW4gd2luZG93KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBGRiBwcmlvciB0byAxNy4gVGhpcyBzaG91bGQgcHJvYmFibHkgYmUgc2NydWJiZWQuXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ0RPTU1vdXNlU2Nyb2xsJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvSW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9JbnB1dC5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG5cbnZhciBWaWRlbyA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvZ2dWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9nZyB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBvZ2dWaWRlbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaDI2NFZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaDI2NCBtcDQgdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaDI2NFZpZGVvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtcDRWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGgyNjQgbXA0IHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1wNFZpZGVvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJtVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3ZWJtIHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYm1WaWRlbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdnA5VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB2cDkgdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdnA5VmlkZW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGhsc1ZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaGxzIHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGhsc1ZpZGVvOiBmYWxzZVxuXG59O1xuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmFyIHJlc3VsdCA9ICEhdmlkZW9FbGVtZW50LmNhblBsYXlUeXBlO1xuXG4gICAgdHJ5XG4gICAge1xuICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby9vZ2c7IGNvZGVjcz1cInRoZW9yYVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBWaWRlby5vZ2dWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gV2l0aG91dCBRdWlja1RpbWUsIHRoaXMgdmFsdWUgd2lsbCBiZSBgdW5kZWZpbmVkYC4gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy81NDZcbiAgICAgICAgICAgICAgICBWaWRlby5oMjY0VmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIFZpZGVvLm1wNFZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA4LCB2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVmlkZW8ud2VibVZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA5XCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFZpZGVvLnZwOVZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXBwbGljYXRpb24veC1tcGVnVVJMOyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBWaWRlby5obHNWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpXG4gICAge1xuICAgICAgICAvLyAgTm90aGluZyB0byBkb1xuICAgIH1cblxuICAgIHJldHVybiBWaWRlbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvVmlkZW8uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9WaWRlby5qcyIsIi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXG4vLyAgYmVmb3JlIGEgUGhhc2VyLkdhbWUgaW5zdGFuY2UgaGFzIGV2ZW4gYmVlbiBjcmVhdGVkLlxuLy8gIFdoaWNoIG1lYW5zIGFsbCBpbnN0YW5jZXMgb2YgUGhhc2VyIEdhbWVzIGNhbiBzaGFyZSBpdCxcbi8vICB3aXRob3V0IGhhdmluZyB0byByZS1wb2xsIHRoZSBkZXZpY2UgYWxsIG92ZXIgYWdhaW5cblxudmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4vRmVhdHVyZXMnKTtcbnZhciBJbnB1dCA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcbnZhciBBdWRpbyA9IHJlcXVpcmUoJy4vQXVkaW8nKTtcbnZhciBWaWRlbyA9IHJlcXVpcmUoJy4vVmlkZW8nKTtcbnZhciBGdWxsc2NyZWVuID0gcmVxdWlyZSgnLi9GdWxsc2NyZWVuJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgT1M6IE9TLFxuICAgIEJyb3dzZXI6IEJyb3dzZXIsXG4gICAgRmVhdHVyZXM6IEZlYXR1cmVzLFxuICAgIElucHV0OiBJbnB1dCxcbiAgICBBdWRpbzogQXVkaW8sXG4gICAgVmlkZW86IFZpZGVvLFxuICAgIEZ1bGxzY3JlZW46IEZ1bGxzY3JlZW5cblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL2luZGV4LmpzIiwiZnVuY3Rpb24gQWRkVG9ET00gKGVsZW1lbnQsIHBhcmVudCwgb3ZlcmZsb3dIaWRkZW4pXG57XG4gICAgaWYgKG92ZXJmbG93SGlkZGVuID09PSB1bmRlZmluZWQpIHsgb3ZlcmZsb3dIaWRkZW4gPSB0cnVlOyB9XG5cbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgaWYgKHBhcmVudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIEhvcGVmdWxseSBhbiBlbGVtZW50IElEXG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdvYmplY3QnICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFF1aWNrIHRlc3QgZm9yIGEgSFRNTGVsZW1lbnRcbiAgICAgICAgICAgIHRhcmdldCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICBGYWxsYmFjaywgY292ZXJzIGFuIGludmFsaWQgSUQgYW5kIGEgbm9uIEhUTUxlbGVtZW50IG9iamVjdFxuICAgIGlmICghdGFyZ2V0KVxuICAgIHtcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dIaWRkZW4gJiYgdGFyZ2V0LnN0eWxlKVxuICAgIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb0RPTTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9BZGRUb0RPTS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIE9TID0gcmVxdWlyZSgnLi4vZGV2aWNlL09TJyk7XG5cbnZhciBpc0Jvb3RlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBET01Db250ZW50TG9hZGVkIChjYWxsYmFjaylcbntcbiAgICBpZiAoaXNCb290ZWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJylcbiAgICB7XG4gICAgICAgIGlzQm9vdGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpc0Jvb3RlZCA9IHRydWU7XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjaGVjaywgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2ssIHRydWUpO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrLCAyMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKE9TLmNvcmRvdmEgJiYgIU9TLmNvY29vbkpTKVxuICAgIHtcbiAgICAgICAgLy8gIFJlZi4gaHR0cDovL2RvY3MucGhvbmVnYXAuY29tL2VuLzMuNS4wL2NvcmRvdmFfZXZlbnRzX2V2ZW50cy5tZC5odG1sI2RldmljZXJlYWR5XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgY2hlY2ssIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoZWNrLCB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERPTUNvbnRlbnRMb2FkZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vRE9NQ29udGVudExvYWRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogQWJzdHJhY3RzIGF3YXkgdGhlIHVzZSBvZiBSQUYgb3Igc2V0VGltZU91dCBmb3IgdGhlIGNvcmUgZ2FtZSB1cGRhdGUgbG9vcC5cbipcbiogQGNsYXNzIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiogQHBhcmFtIHtib29sZWFufSBbZm9yY2VTZXRUaW1lT3V0PWZhbHNlXSAtIFRlbGwgUGhhc2VyIHRvIHVzZSBzZXRUaW1lT3V0IGV2ZW4gaWYgcmFmIGlzIGF2YWlsYWJsZS5cbiovXG5mdW5jdGlvbiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKGdhbWUpXG57XG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5HYW1lfSBnYW1lIC0gVGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4gICAgKi9cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzUnVubmluZyAtIHRydWUgaWYgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlzIHJ1bm5pbmcsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy50aWNrID0gMDtcblxuICAgIHZhciB2ZW5kb3JzID0gW1xuICAgICAgICAnbXMnLFxuICAgICAgICAnbW96JyxcbiAgICAgICAgJ3dlYmtpdCcsXG4gICAgICAgICdvJ1xuICAgIF07XG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyB4KyspXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzU2V0VGltZU91dCAgLSBUcnVlIGlmIHRoZSBicm93c2VyIGlzIHVzaW5nIHNldFRpbWVvdXQgaW5zdGVhZCBvZiByQWYuXG4gICAgKi9cbiAgICB0aGlzLmlzU2V0VGltZU91dCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZU91dElEIC0gVGhlIGNhbGxiYWNrIHNldFRpbWVvdXQgb3IgckFmIGNhbGxiYWNrIElEIHVzZWQgd2hlbiBjYWxsaW5nIGNhbmNlbC5cbiAgICAqL1xuICAgIHRoaXMudGltZU91dElEID0gbnVsbDtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyAgdGltZXN0YW1wID0gRE9NSGlnaFJlc1RpbWVTdGFtcFxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcClcbiAgICB7XG4gICAgICAgIF90aGlzLnRpY2sgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgX3RoaXMudGltZU91dElEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgICBfdGhpcy5nYW1lLnVwZGF0ZSh0aW1lc3RhbXApO1xuICAgIH07XG5cbiAgICB2YXIgc3RlcFRpbWVvdXQgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgX3RoaXMudGljayA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gX3RoaXMuZ2FtZS51cGRhdGUoX3RoaXMudGljayk7XG5cbiAgICAgICAgLy8gX3RoaXMudGltZU91dElEID0gd2luZG93LnNldFRpbWVvdXQoc3RlcFRpbWVvdXQsIF90aGlzLmdhbWUudGltZS50aW1lVG9DYWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBTdGFydHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBydW5uaW5nIG9yIHNldFRpbWVvdXQgaWYgdW5hdmFpbGFibGUgaW4gYnJvd3NlclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lI3N0YXJ0XG4gICAgKi9cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5mb3JjZVNldFRpbWVPdXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dChzdGVwVGltZW91dCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzU2V0VGltZU91dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBTdG9wcyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gcnVubmluZy5cbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdG9wXG4gICAgKi9cbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5pc1NldFRpbWVPdXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXRJRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lT3V0SUQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcblxufVxuXG5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcbnZhciBFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBFdmVudEJpbmRpbmcgPSBmdW5jdGlvbiAoZGlzcGF0Y2hlciwgdHlwZSlcbntcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfSURMRTtcbiAgICB0aGlzLmFjdGl2ZSA9IFtdO1xufTtcblxuRXZlbnRCaW5kaW5nLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50QmluZGluZztcblxuRXZlbnRCaW5kaW5nLnByb3RvdHlwZSA9IHtcblxuICAgIHRvdGFsOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgIT09IENPTlNULkxJU1RFTkVSX1JFTU9WSU5HKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvdGFsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLmNhbGxiYWNrID09PSBjYWxsYmFjaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0SW5kZXg6IGZ1bmN0aW9uIChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgaGFzOiBmdW5jdGlvbiAoY2FsbGJhY2spXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0KGNhbGxiYWNrKSk7XG4gICAgfSxcblxuICAgIGFkZDogZnVuY3Rpb24gKGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSlcbiAgICB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0KGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoIWxpc3RlbmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgVGhlIGxpc3RlbmVyIGRvZXNuJ3QgZXhpc3QsIHNvIGNyZWF0ZSBvbmVcbiAgICAgICAgICAgIGxpc3RlbmVyID0gRXZlbnRMaXN0ZW5lcih0aGlzLnR5cGUsIGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgTGlzdGVuZXIgYWxyZWFkeSBleGlzdHMsIGFib3J0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9JRExFKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgVGhlIERpc3BhdGNoZXIgaXNuJ3QgZG9pbmcgYW55dGhpbmcsIHNvIHdlIGRvbid0IG5lZWQgYSBwZW5kaW5nIHN0YXRlXG4gICAgICAgICAgICBsaXN0ZW5lci5zdGF0ZSA9IENPTlNULkxJU1RFTkVSX0FDVElWRTtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmUucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNvcnQodGhpcy5zb3J0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIEFkZCBpdCB0byB0aGUgbGlzdCwgYnV0IGtlZXAgdGhlIHN0YXRlIGFzIHBlbmRpbmcuXG4gICAgICAgICAgICAvLyAgVGhlIGNhbGwgdG8gJ3RpZHknIHdpbGwgc29ydCBpdCBvdXQgYXQgdGhlIGVuZCBvZiB0aGUgZGlzcGF0Y2guXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzb3J0SGFuZGxlcjogZnVuY3Rpb24gKGxpc3RlbmVyQSwgbGlzdGVuZXJCKVxuICAgIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyQi5wcmlvcml0eSA8IGxpc3RlbmVyQS5wcmlvcml0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyQi5wcmlvcml0eSA+IGxpc3RlbmVyQS5wcmlvcml0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uIChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0lETEUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGUgRGlzcGF0Y2hlciBpc24ndCBkb2luZyBhbnl0aGluZywgc28gd2UgY2FuIHJlbW92ZSByaWdodCBhd2F5XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0SW5kZXgoY2FsbGJhY2spO1xuXG4gICAgICAgICAgICBpZiAoaSAhPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFRoZSBEaXNwYXRjaGVyIGlzIHdvcmtpbmcsIHNvIHdlIGZsYWcgdGhlIGxpc3RlbmVyIGZvciByZW1vdmFsIGF0IHRoZSBlbmRcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0KGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnN0YXRlID0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDT05TVC5ESVNQQVRDSEVSX0lETEUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlIFxcJ0V2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaFxcJyBvbiBcXCcnICsgdGhpcy50eXBlICsgJ1xcJzogVGhlIGV2ZW50IGlzIGFscmVhZHkgYmVpbmcgZGlzcGF0Y2hlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZS5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGlzIHdhcyBhIHZhbGlkIGRpc3BhdGNoIGNhbGwsIHdlIGp1c3QgaGFkIG5vdGhpbmcgdG8gZG8gLi4uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORztcblxuICAgICAgICB2YXIgbGlzdGVuZXI7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmFjdGl2ZVtpXTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnN0YXRlICE9PSBDT05TVC5MSVNURU5FUl9BQ1RJVkUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwodGhpcy5kaXNwYXRjaGVyLCBldmVudCk7XG5cbiAgICAgICAgICAgIC8vICBIYXMgdGhlIGNhbGxiYWNrIGNoYW5nZWQgdGhlIHN0YXRlIG9mIHRoaXMgYmluZGluZz9cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDT05TVC5ESVNQQVRDSEVSX0RJU1BBVENISU5HKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBZdXAhIExldCdzIGJyZWFrIG91dFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgV2FzIGl0IGEgJ29uY2UnIGxpc3RlbmVyP1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuc3RhdGUgPSBDT05TVC5MSVNURU5FUl9SRU1PVklORztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIEhhcyB0aGUgZXZlbnQgYmVlbiBoYWx0ZWQgYnkgdGhlIGNhbGxiYWNrP1xuICAgICAgICAgICAgaWYgKCFldmVudC5fcHJvcGFnYXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBCcmVhayBvdXQsIGEgbGlzdGVuZXIgaGFzIGNhbGxlZCBFdmVudC5zdG9wUHJvcGFnYXRpb25cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBEaXNwYXRjaCBvdmVyLCBvciBhYm9ydGVkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX1JFTU9WSU5HKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuXG4gICAgICAgICAgICAvLyAgQWxsIGRvbmUsIHRpZHkgdGhlIGxpc3QgaW4gY2FzZSB0aGVyZSB3ZXJlIGFueSBwZW5kaW5nIGV2ZW50cyBhZGRlZFxuICAgICAgICAgICAgdGhpcy50aWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9ERVNUUk9ZRUQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kZWxldGUodGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBBbGwgZG9uZSwganVzdCBwdXJnZSB0aGUgbGlzdFxuICAgICAgICAgICAgdGhpcy50aWR5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDT05TVC5ESVNQQVRDSEVSX0lETEU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gIFJlbW92ZXMgYWxsIGxpc3RlbmVyc1xuICAgIC8vICBJZiB0aGlzIGlzIGN1cnJlbnRseSBiZWluZyBkaXNwYXRjaGVkIHRoZW4gZG9uJ3QgcmVtb3ZlICdwZW5kaW5nJyBsaXN0ZW5lcnNcbiAgICAvLyAgKGkuZS4gb25lcyB0aGF0IHdlcmUgYWRkZWQgZHVyaW5nIHRoZSBkaXNwYXRjaCksIG9ubHkgYWN0aXZlIG9uZXNcbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9JRExFKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYWN0aXZlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfUEVORElORylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfSURMRTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0aWR5OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGFkZGVkID0gMDtcblxuICAgICAgICB2YXIgaSA9IHRoaXMuYWN0aXZlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZG9cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLnN0YXRlID09PSBDT05TVC5MSVNURU5FUl9SRU1PVklORylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSA9PT0gQ09OU1QuTElTVEVORVJfUEVORElORylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5zdGF0ZSA9PT0gQ09OU1QuTElTVEVORVJfQUNUSVZFO1xuICAgICAgICAgICAgICAgIGFkZGVkKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoaSA+PSAwKTtcblxuICAgICAgICBpZiAoYWRkZWQgPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmFjdGl2ZS5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHlwZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9ERVNUUk9ZRUQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50QmluZGluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2V2ZW50cy9FdmVudEJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2V2ZW50cy9FdmVudEJpbmRpbmcuanMiLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XG5cbnZhciBFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSlcbntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgb25jZTogb25jZSxcbiAgICAgICAgc3RhdGU6IENPTlNULkxJU1RFTkVSX1BFTkRJTkdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudExpc3RlbmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL0V2ZW50TGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2V2ZW50cy9FdmVudExpc3RlbmVyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzJyk7XG5cbi8qKlxuKiBUaGlzIGlzIHRoZSBiYXNlIEdhbWUgT2JqZWN0IGNsYXNzIHRoYXQgeW91IGNhbiB1c2Ugd2hlbiBjcmVhdGluZyB5b3VyIG93biBleHRlbmRlZCBHYW1lIE9iamVjdHMuXG4qIEl0IGhpZGVzIGF3YXkgdGhlICdwcml2YXRlJyBzdHVmZiBhbmQgZXhwb3NlcyBvbmx5IHRoZSB1c2VmdWwgZ2V0dGVycywgc2V0dGVycyBhbmQgcHJvcGVydGllcy5cbipcbiogQGNsYXNzXG4qL1xuXG4vLyAgUGhhc2VyLlRleHR1cmUgYW5kIFBoYXNlci5GcmFtZSBvYmplY3RzIHBhc3NlZCBpbiBoZXJlLCBpbnN0ZWFkIG9mIGxvb2tlZC11cC5cbi8vICBBbGxvd3Mgb3ZlcnJpZGUgZnJvbSBub24tc3RhbmRhcmQgR08gdHlwZXNcblxudmFyIEdhbWVPYmplY3QgPSBmdW5jdGlvbiAoc3RhdGUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBwYXJlbnQpXG57XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcblxuICAgIHRoaXMubmFtZSA9ICcnO1xuXG4gICAgdGhpcy50eXBlID0gMDtcblxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgLy8gIFRleHR1cmUgaXMgZ2xvYmFsbHkgc2hhcmVkIGJldHdlZW4gR2FtZU9iamVjdHMsIG5vdCBzcGVjaWZpYyB0byB0aGlzIG9uZVxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG5cbiAgICAvLyAgRnJhbWUgaXMgZ2xvYmFsbHkgc2hhcmVkIGJldHdlZW4gR2FtZU9iamVjdHMsIG5vdCBzcGVjaWZpYyB0byB0aGlzIG9uZVxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgIC8vICBBbGwgR2FtZU9iamVjdHMgaGF2ZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHMsIGFsd2F5czpcbiAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBDb21wb25lbnQuVHJhbnNmb3JtKHRoaXMsIHgsIHkpO1xuXG4gICAgLy8gIE9wdGlvbmFsPyBNYXliZSBzZXQgb24gYSBwZXIgR08gYmFzaXM/XG4gICAgdGhpcy5kYXRhID0gbmV3IENvbXBvbmVudC5EYXRhKHRoaXMpO1xuXG4gICAgdGhpcy5jb2xvciA9IG5ldyBDb21wb25lbnQuQ29sb3IodGhpcyk7XG5cbiAgICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgZGViYXRhYmxlIHRvIGhhdmUgaW4gdGhpcyBjbGFzc1xuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHRoaXMuc2NhbGVNb2RlID0gQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUO1xuXG4gICAgLy8gIEFsbG93cyB5b3UgdG8gdHVybiBvZmYgYSBHYW1lT2JqZWN0IGZyb20gcmVuZGVyaW5nLCBidXQgc3RpbGwgcmVuZGVyIGl0cyBjaGlsZHJlbiAoaWYgaXQgaGFzIGFueSlcbiAgICAvLyAgTWF5YmUgdGhpcyBzaG91bGQgbW92ZT9cbiAgICAvLyB0aGlzLnNraXBSZW5kZXIgPSAoa2V5ID09PSB1bmRlZmluZWQpO1xuICAgIHRoaXMuc2tpcFJlbmRlciA9IGZhbHNlO1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgIC8vICBFaXRoZXIgbnVsbCwgb3IgdGhlIENoaWxkcmVuIGNvbXBvbmVudFxuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgdGhpcy5leGlzdHMgPSB0cnVlO1xufTtcblxuR2FtZU9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lT2JqZWN0O1xuXG5HYW1lT2JqZWN0LnByb3RvdHlwZSA9IHtcblxuICAgIHByZVVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vICBOT09QXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vICBOT09QXG4gICAgfSxcblxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAgTk9PUFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAgTk9PUFxuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gIE5PT1BcbiAgICB9XG5cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEdhbWVPYmplY3QucHJvdG90eXBlLCB7XG5cbiAgICAvLyAgVHJhbnNmb3JtIGdldHRlcnMgLyBzZXR0ZXJzXG5cbiAgICB4OiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcG9zWDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bvc1ggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9wb3NZO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcG9zWSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgc2NhbGU6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZVg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzY2FsZVk6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBhbmNob3I6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9hbmNob3JYO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5zZXRBbmNob3IodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgYW5jaG9yWDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX2FuY2hvclg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9hbmNob3JYID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBhbmNob3JZOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fYW5jaG9yWTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX2FuY2hvclkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHBpdm90WDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bpdm90WDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bpdm90WCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHBpdm90WToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bpdm90WTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bpdm90WSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGFuZ2xlOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBQaGFzZXIuTWF0aC53cmFwQW5nbGUodGhpcy5yb3RhdGlvbiAqIFBoYXNlci5NYXRoLlJBRF9UT19ERUcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHZhbHVlKSAqIFBoYXNlci5NYXRoLkRFR19UT19SQUQ7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICByb3RhdGlvbjoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uID09PSB2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uZGlydHkgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uICUgUGhhc2VyLk1hdGguUEkyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmNhY2hlLnNyID0gTWF0aC5zaW4odGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5jYWNoZS5jciA9IE1hdGguY29zKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5oYXNMb2NhbFJvdGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5oYXNMb2NhbFJvdGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyAgQ29sb3IgZ2V0dGVycyAvIHNldHRlcnNcblxuICAgIGFscGhhOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLl9hbHBoYTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5hbHBoYSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgYmxlbmRNb2RlOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLl9ibGVuZE1vZGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IuYmxlbmRNb2RlID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0dhbWVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL0dhbWVPYmplY3QuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xudmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XG52YXIgSW1hZ2VXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi9JbWFnZVdlYkdMUmVuZGVyZXInKTtcblxuLyoqXG4qIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxuKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbipcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkltYWdlXG4qIEBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0XG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cbiogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgdGV4dHVyZSB1c2VkIGJ5IHRoZSBJbWFnZSBkdXJpbmcgcmVuZGVyaW5nLiBJdCBjYW4gYmUgYSBzdHJpbmcgd2hpY2ggaXMgYSByZWZlcmVuY2UgdG8gdGhlIENhY2hlIGVudHJ5LCBvciBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEgb3IgUElYSS5UZXh0dXJlLlxuKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiB0aGlzIEltYWdlIGlzIHVzaW5nIHBhcnQgb2YgYSBzcHJpdGUgc2hlZXQgb3IgdGV4dHVyZSBhdGxhcyB5b3UgY2FuIHNwZWNpZnkgdGhlIGV4YWN0IGZyYW1lIHRvIHVzZSBieSBnaXZpbmcgYSBzdHJpbmcgb3IgbnVtZXJpYyBpbmRleC5cbiovXG52YXIgSW1hZ2UgPSBmdW5jdGlvbiAoc3RhdGUsIHgsIHksIGtleSwgZnJhbWUpXG57XG4gICAgdmFyIF90ZXh0dXJlID0gc3RhdGUuZ2FtZS50ZXh0dXJlcy5nZXQoa2V5KTtcbiAgICB2YXIgX2ZyYW1lID0gX3RleHR1cmUuZ2V0KGZyYW1lKTtcblxuICAgIEdhbWVPYmplY3QuY2FsbCh0aGlzLCBzdGF0ZSwgeCwgeSwgX3RleHR1cmUsIF9mcmFtZSk7XG5cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5JTUFHRTtcblxuICAgIHRoaXMucmVuZGVyID0gSW1hZ2VXZWJHTFJlbmRlcmVyO1xufTtcblxuSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHYW1lT2JqZWN0LnByb3RvdHlwZSk7XG5JbWFnZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWFnZTtcblxuLyoqXG4qIEF1dG9tYXRpY2FsbHkgY2FsbGVkIGJ5IFdvcmxkLnByZVVwZGF0ZS5cbipcbiogQG1ldGhvZCBQaGFzZXIuSW1hZ2UjcHJlVXBkYXRlXG4qIEBtZW1iZXJvZiBQaGFzZXIuSW1hZ2VcbiovXG5JbWFnZS5wcm90b3R5cGUucHJlVXBkYXRlID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyAgV291bGQgbGlrZSB0byBnZXQgcmlkIG9mIHRoaXMgc29tZWhvdyAuLi5cbiAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAge1xuICAgICAgICB0aGlzLmNvbG9yLndvcmxkQWxwaGEgPSB0aGlzLnBhcmVudC5jb2xvci53b3JsZEFscGhhO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEltYWdlLnByb3RvdHlwZSwge1xuXG4gICAgd2lkdGg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggKiB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB2YWx1ZSAvIHRoaXMuZnJhbWUucmVhbFdpZHRoO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgaGVpZ2h0OiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVZICogdGhpcy5mcmFtZS5yZWFsSGVpZ2h0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHZhbHVlIC8gdGhpcy5mcmFtZS5yZWFsSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIEltYWdlID0gcmVxdWlyZSgnLi9JbWFnZScpO1xudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XG5cbnZhciBJbWFnZUZhY3RvcnkgPSB7XG5cbiAgICBLRVk6ICdpbWFnZScsXG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBgSW1hZ2VgIG9iamVjdC5cbiAgICAqXG4gICAgKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cbiAgICAqXG4gICAgKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuXG4gICAgKiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5I2ltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5JbWFnZX0gVGhlIG5ld2x5IGNyZWF0ZWQgSW1hZ2Ugb2JqZWN0LlxuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSwgZ3JvdXApXG4gICAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMuc3RhdGU7IH1cblxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VGYWN0b3J5LmFkZCcsIGtleSwgeCwgeSwgZnJhbWUsIGdyb3VwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludG8gU3RhdGUnLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuY2hpbGRyZW4uYWRkKG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfSxcblxuICAgIG1ha2U6IGZ1bmN0aW9uICh4LCB5LCBrZXksIGZyYW1lKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5tYWtlJywga2V5LCB4LCB5LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjdG9yeUNvbnRhaW5lci5yZWdpc3RlcihJbWFnZUZhY3RvcnkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJcbnZhciBJbWFnZVdlYkdMUmVuZGVyZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIHNyYywgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXG57XG4gICAgdmFyIGZyYW1lID0gc3JjLmZyYW1lO1xuICAgIHZhciBhbHBoYSA9IHNyYy5jb2xvci53b3JsZEFscGhhICogMjU1IDw8IDI0O1xuXG4gICAgLy8gIFNraXAgcmVuZGVyaW5nP1xuXG4gICAgaWYgKHNyYy5za2lwUmVuZGVyIHx8ICFzcmMudmlzaWJsZSB8fCBhbHBoYSA9PT0gMCB8fCAhZnJhbWUuY3V0V2lkdGggfHwgIWZyYW1lLmN1dEhlaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmVydHMgPSBzcmMudHJhbnNmb3JtLmdldFZlcnRleERhdGEoaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgIHZhciBpbmRleCA9IHNyYy5mcmFtZS5zb3VyY2UuZ2xUZXh0dXJlSW5kZXg7XG4gICAgdmFyIHRpbnQgPSBzcmMuY29sb3IuX2dsVGludDtcbiAgICB2YXIgYmcgPSBzcmMuY29sb3IuX2dsQmc7XG5cbiAgICByZW5kZXJlci5iYXRjaC5hZGQoZnJhbWUuc291cmNlLCBzcmMuYmxlbmRNb2RlLCB2ZXJ0cywgZnJhbWUudXZzLCBpbmRleCwgYWxwaGEsIHRpbnQsIGJnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VXZWJHTFJlbmRlcmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VXZWJHTFJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgSW5jbHVkZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3Rvcmllc1xuLy9cbi8vICBUaGlzIGZpbGUgc2hvdWxkIGJlIGxpbmtlZCB0byB0aGUgc3BlY2lmaWMgYnVpbGQgb2YgUGhhc2VyLCBpLmUuIFBoYXNlciBOYW5vIHdvbid0IHJlcXVpcmUgYWxsIEdPc1xuXG5yZXF1aXJlKCcuL2ltYWdlL0ltYWdlRmFjdG9yeScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwiXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XG52YXIgU2V0ID0gcmVxdWlyZSgnLi4vc3RydWN0cy9TZXQnKTtcbnZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcbnZhciBFdmVudCA9IHJlcXVpcmUoJy4vZXZlbnRzLycpO1xudmFyIEV2ZW50RGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInKTtcblxudmFyIEJhc2VMb2FkZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vICBUbyBmaW5pc2ggdGhlIGxvYWRlciAuLi5cbiAgICAvLyAgXG4gICAgLy8gIDMpIFByb2dyZXNzIHVwZGF0ZVxuICAgIC8vICA0KSBKU09OIGxvYWRlclxuICAgIC8vICA1KSBYTUwgTG9hZGVyXG4gICAgLy8gIDYpIE11bHRpIEZpbGUgc3VwcG9ydCAoYXRsYXMgKyBkYXRhKVxuICAgIC8vICA3KSBBdGxhcyBMb2FkZXJcblxuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gICAgLy8gIE1vdmUgdG8gYSAnc2V0VVJMJyBtZXRob2Q/XG4gICAgdGhpcy5iYXNlVVJMID0gJyc7XG4gICAgdGhpcy5wYXRoID0gJyc7XG5cbiAgICAvLyAgUmVhZCBmcm9tIEdhbWUgLyBTdGF0ZSBDb25maWdcbiAgICB0aGlzLmVuYWJsZVBhcmFsbGVsID0gdHJ1ZTtcbiAgICB0aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzID0gODtcblxuICAgIC8vICB4aHIgc3BlY2lmaWMgZ2xvYmFsIHNldHRpbmdzIChjYW4gYmUgb3ZlcnJpZGRlbiBvbiBhIHBlci1maWxlIGJhc2lzKVxuICAgIHRoaXMueGhyID0gWEhSU2V0dGluZ3MoKTtcblxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5pbmZsaWdodCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmZhaWxlZCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnF1ZXVlID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTZXQoKTtcblxuICAgIHRoaXMuX3N0YXRlID0gQ09OU1QuTE9BREVSX0lETEU7XG59O1xuXG5CYXNlTG9hZGVyLnByb3RvdHlwZS5jb250cnVjdG9yID0gQmFzZUxvYWRlcjtcblxuQmFzZUxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgICBhZGRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBNdWx0aXBhcnQgZmlsZT9cbiAgICAgICAgaWYgKGZpbGUubXVsdGlwYXJ0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlLmZpbGVBLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgICAgICBmaWxlLmZpbGVCLnBhdGggPSB0aGlzLnBhdGg7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZS5maWxlQSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUuZmlsZUIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZS5wYXRoID0gdGhpcy5wYXRoO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vICBJcyB0aGUgTG9hZGVyIGFjdGl2ZWx5IGxvYWRpbmcgKG9yIHByb2Nlc3NpbmcgbG9hZGVkIGZpbGVzKVxuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9MT0FESU5HIHx8IHRoaXMuX3N0YXRlID09PSBDT05TVC5MT0FERVJfUFJPQ0VTU0lORyk7XG4gICAgfSxcblxuICAgIC8vICBJcyB0aGUgTG9hZGVyIHJlYWR5IHRvIHN0YXJ0IGEgbmV3IGxvYWQ/XG4gICAgaXNSZWFkeTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9JRExFIHx8IHRoaXMuX3N0YXRlID09PSBDT05TVC5MT0FERVJfQ09NUExFVEUgfHwgdGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9GQUlMRUQpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIHN0YXJ0LiBGaWxlcyB0byBsb2FkOicsIHRoaXMubGlzdC5zaXplKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnQuTE9BREVSX1NUQVJUX0VWRU5UKHRoaXMpKTtcblxuICAgICAgICBpZiAodGhpcy5saXN0LnNpemUgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9MT0FESU5HO1xuXG4gICAgICAgICAgICB0aGlzLmZhaWxlZC5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbiAoKVxuICAgIHtcblxuICAgIH0sXG5cbiAgICBwcm9jZXNzTG9hZFF1ZXVlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIgcHJvY2Vzc0xvYWRRdWV1ZScsIHRoaXMubGlzdC5zaXplKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubGlzdC5lYWNoKGZ1bmN0aW9uIChmaWxlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoZmlsZS5zdGF0ZSA9PT0gQ09OU1QuRklMRV9QRU5ESU5HICYmIF90aGlzLmluZmxpZ2h0LnNpemUgPCBfdGhpcy5tYXhQYXJhbGxlbERvd25sb2FkcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQURERUQgVE8gUVVFVUU6JywgZmlsZS5rZXkpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5mbGlnaHQuYWRkKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMubGlzdC5kZWxldGUoZmlsZSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLmluZmxpZ2h0LnNpemUgPT09IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBUZWxscyB0aGUgU2V0IGl0ZXJhdG9yIHRvIGFib3J0XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIC8vICBwcml2YXRlXG4gICAgbG9hZEZpbGU6IGZ1bmN0aW9uIChmaWxlKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0xPQURJTkcnLCBmaWxlLmtleSk7XG5cbiAgICAgICAgLy8gIElmIHRoZSBmaWxlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIGNyb3NzT3JpZ2luIHNldCxcbiAgICAgICAgLy8gIHdlJ2xsIHVzZSB0aGUgTG9hZGVycyAod2hpY2ggaXMgdW5kZWZpbmVkIGJ5IGRlZmF1bHQpXG4gICAgICAgIGlmICghZmlsZS5jcm9zc09yaWdpbilcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZS5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW47XG4gICAgICAgIH1cblxuICAgICAgICBmaWxlLmxvYWQodGhpcy5uZXh0RmlsZS5iaW5kKHRoaXMpLCB0aGlzLmJhc2VVUkwpO1xuICAgIH0sXG5cbiAgICBuZXh0RmlsZTogZnVuY3Rpb24gKHByZXZpb3VzRmlsZSwgc3VjY2VzcylcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMT0FERUQ6JywgcHJldmlvdXNGaWxlLnNyYywgc3VjY2Vzcyk7XG5cbiAgICAgICAgLy8gIE1vdmUgdGhlIGZpbGUgdGhhdCBqdXN0IGxvYWRlZCBmcm9tIHRoZSBpbmZsaWdodCBsaXN0IHRvIHRoZSBxdWV1ZSBvciBmYWlsZWQgU2V0XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkKHByZXZpb3VzRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZhaWxlZC5hZGQocHJldmlvdXNGaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5mbGlnaHQuZGVsZXRlKHByZXZpb3VzRmlsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25leHRGaWxlIC0gc3RpbGwgc29tZXRoaW5nIGluIHRoZSBsaXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmluZmxpZ2h0LnNpemUgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXh0RmlsZSBjYWxsaW5nIGZpbmlzaGVkTG9hZGluZycpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2hlZExvYWRpbmc6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQmFzZUxvYWRlci5maW5pc2hlZExvYWRpbmcgUFJPQ0VTU0lORycsIHRoaXMucXVldWUuc2l6ZSwgJ2ZpbGVzJyk7XG5cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfUFJPQ0VTU0lORztcblxuICAgICAgICB2YXIgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblxuICAgICAgICBzdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnF1ZXVlLmVhY2goZnVuY3Rpb24gKGZpbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGUub25Qcm9jZXNzKF90aGlzLnByb2Nlc3NVcGRhdGUuYmluZChfdGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcHJvY2Vzc1VwZGF0ZTogZnVuY3Rpb24gKGZpbGUpXG4gICAge1xuICAgICAgICBpZiAoZmlsZS5zdGF0ZSA9PT0gQ09OU1QuRklMRV9FUlJPUkVEKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZhaWxlZC5hZGQoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWV1ZS5kZWxldGUoZmlsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucXVldWUuc2l6ZSA9PT0gMCAmJiB0aGlzLl9zdGF0ZSA9PT0gQ09OU1QuTE9BREVSX1BST0NFU1NJTkcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBXZSd2ZSBwcm9jZXNzZWQgYWxsIHRoZSBmaWxlcyB3ZSBsb2FkZWRcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2Vzc0NvbXBsZXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkZXIgQ29tcGxldGUuIExvYWRlZDonLCB0aGlzLnN0b3JhZ2Uuc2l6ZSwgJ0ZhaWxlZDonLCB0aGlzLmZhaWxlZC5zaXplKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzQ2FsbGJhY2spXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9DT01QTEVURTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnQuTE9BREVSX0NPTVBMRVRFX0VWRU5UKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xuICAgICAgICB0aGlzLmZhaWxlZC5jbGVhcigpO1xuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMudGFnID0gJyc7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9JRExFO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9ERVNUUk9ZRUQ7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvQmFzZUxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ2YXIgR2V0VVJMID0gcmVxdWlyZSgnLi9HZXRVUkwnKTtcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcbnZhciBYSFJMb2FkZXIgPSByZXF1aXJlKCcuL1hIUkxvYWRlcicpO1xudmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xuXG52YXIgRmlsZSA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHVybCwgcmVzcG9uc2VUeXBlKVxue1xuICAgIC8vICBmaWxlIHR5cGUgKGltYWdlLCBqc29uLCBldGMpIGZvciBzb3J0aW5nIHdpdGhpbiB0aGUgTG9hZGVyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIC8vICB1bmlxdWUgY2FjaGUga2V5ICh1bmlxdWUgd2l0aGluIGl0cyBmaWxlIHR5cGUpXG4gICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICAvLyAgVGhlIFVSTCBvZiB0aGUgZmlsZSwgbm90IGluY2x1ZGluZyBiYXNlVVJMXG4gICAgdGhpcy51cmwgPSB1cmw7XG5cbiAgICAvLyAgU2V0IHdoZW4gdGhlIExvYWRlciBjYWxscyAnbG9hZCcgb24gdGhpcyBmaWxlXG4gICAgdGhpcy5zcmMgPSAnJztcblxuICAgIHRoaXMueGhyU2V0dGluZ3MgPSBYSFJTZXR0aW5ncyhyZXNwb25zZVR5cGUpO1xuXG4gICAgdGhpcy54aHJMb2FkZXIgPSBudWxsO1xuXG4gICAgdGhpcy5zdGF0ZSA9IENPTlNULkZJTEVfUEVORElORztcblxuICAgIC8vICBTZXQgYnkgb25Qcm9ncmVzcyAob25seSBpZiBsb2FkaW5nIHZpYSBYSFIpXG4gICAgdGhpcy5ieXRlc1RvdGFsID0gMDtcbiAgICB0aGlzLmJ5dGVzTG9hZGVkID0gLTE7XG4gICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSAtMTtcblxuICAgIC8vICBGb3IgQ09ScyBiYXNlZCBsb2FkaW5nLlxuICAgIC8vICBJZiB0aGlzIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBGaWxlIHdpbGwgY2hlY2sgQmFzZUxvYWRlci5jcm9zc09yaWdpbiBhbmQgdXNlIHRoYXQgKGlmIHNldClcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gIFRoZSBhY3R1YWwgcHJvY2Vzc2VkIGZpbGUgZGF0YVxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcblxuICAgIC8vICBNdWx0aXBhcnQgZmlsZT8gKGkuZS4gYW4gYXRsYXMgYW5kIGl0cyBqc29uIHRvZ2V0aGVyKVxuICAgIHRoaXMubXVsdGlwYXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGlua0ZpbGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbn07XG5cbkZpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsZTtcblxuRmlsZS5wcm90b3R5cGUgPSB7XG5cbiAgICByZXNldFhIUjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9ubG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25wcm9ncmVzcyA9IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgLy8gIENhbGxlZCB3aGVuIHRoZSBJbWFnZSBsb2Fkc1xuICAgIC8vICBQcm9ncmVzc0V2ZW50XG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoZXZlbnQpXG4gICAge1xuICAgICAgICB0aGlzLnJlc2V0WEhSKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldFhIUigpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoZXZlbnQpXG4gICAge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ieXRlc0xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICAgICAgICAgIHRoaXMuYnl0ZXNUb3RhbCA9IGV2ZW50LnRvdGFsO1xuXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZSA9IE1hdGgubWluKCh0aGlzLmJ5dGVzTG9hZGVkIC8gdGhpcy5ieXRlc1RvdGFsKSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBlcmNlbnRDb21wbGV0ZSArICclICgnICsgdGhpcy5ieXRlc0xvYWRlZCArICcgYnl0ZXMpJyk7XG4gICAgfSxcblxuICAgIG9uUHJvY2VzczogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkZJTEVfUFJPQ0VTU0lORztcblxuICAgICAgICAvLyAgSWYgb3ZlcnJpZGRlbiBieSBhbm90aGVyIGNsYXNzLCBpdCBtdXN0IGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gZmluaXNoZWQsIHRoZW4gb25Db21wbGV0ZVxuICAgICAgICBjYWxsYmFjayh0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICB9LFxuXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDT05TVC5GSUxFX0NPTVBMRVRFO1xuICAgIH0sXG5cbiAgICAvLyAgQ2FsbGVkIGJ5IHRoZSBMb2FkZXIsIHN0YXJ0cyB0aGUgYWN0dWFsIGZpbGUgZG93bmxvYWRpbmdcbiAgICBsb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2ssIGJhc2VVUkwsIGdsb2JhbFhIUilcbiAgICB7XG4gICAgICAgIGlmIChiYXNlVVJMID09PSB1bmRlZmluZWQpIHsgYmFzZVVSTCA9ICcnOyB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMuc3JjID0gR2V0VVJMKHRoaXMsIGJhc2VVUkwpO1xuXG4gICAgICAgIHRoaXMueGhyTG9hZGVyID0gWEhSTG9hZGVyKHRoaXMsIGdsb2JhbFhIUik7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL0ZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9GaWxlLmpzIiwidmFyIEdldFVSTCA9IGZ1bmN0aW9uIChmaWxlLCBiYXNlVVJMKVxue1xuICAgIGlmICghZmlsZS51cmwpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGZpbGUudXJsLm1hdGNoKC9eKD86YmxvYjp8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfFxcL1xcLykvKSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmaWxlLnVybDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGJhc2VVUkwgKyBmaWxlLnBhdGggKyBmaWxlLnVybDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdldFVSTDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9HZXRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcblxuLy8gIFRha2VzIHR3byBYSFIgT2JqZWN0cyBhbmQgY3JlYXRlcyBhIG5ldyBvYmplY3RcblxuLy8gIFRoZSBuZXcgb2JqZWN0IGlzIGJhc2VkIG9uIGdsb2JhbCBpbml0aWFsbHksIGJ1dCBhbnkgc2V0dGluZyBpblxuLy8gIGxvY2FsIG92ZXJyaWRlcyB0aGUgZ2xvYmFsIHZhbHVlLlxuXG52YXIgTWVyZ2VYSFJTZXR0aW5ncyA9IGZ1bmN0aW9uIChnbG9iYWwsIGxvY2FsKVxue1xuICAgIHZhciBvdXRwdXQgPSAoZ2xvYmFsID09PSB1bmRlZmluZWQpID8gWEhSU2V0dGluZ3MoKSA6IE9iamVjdC5hc3NpZ24oZ2xvYmFsKTtcblxuICAgIGlmIChsb2NhbClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIHNldHRpbmcgaW4gbG9jYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFtzZXR0aW5nXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG91dHB1dFtzZXR0aW5nXSA9IGxvY2FsW3NldHRpbmddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXJnZVhIUlNldHRpbmdzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwidmFyIE1lcmdlWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL01lcmdlWEhSU2V0dGluZ3MnKTtcblxudmFyIFhIUkxvYWRlciA9IGZ1bmN0aW9uIChmaWxlLCBnbG9iYWxYSFJTZXR0aW5ncylcbntcbiAgICB2YXIgY29uZmlnID0gTWVyZ2VYSFJTZXR0aW5ncyhnbG9iYWxYSFJTZXR0aW5ncywgZmlsZS54aHJTZXR0aW5ncyk7XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub3BlbignR0VUJywgZmlsZS5zcmMsIGNvbmZpZy5hc3luYywgY29uZmlnLnVzZXIsIGNvbmZpZy5wYXNzd29yZCk7XG5cbiAgICB4aHIucmVzcG9uc2VUeXBlID0gZmlsZS54aHJTZXR0aW5ncy5yZXNwb25zZVR5cGU7XG4gICAgeGhyLnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGlmIChjb25maWcuaGVhZGVyICYmIGNvbmZpZy5oZWFkZXJWYWx1ZSlcbiAgICB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGNvbmZpZy5oZWFkZXIsIGNvbmZpZy5oZWFkZXJWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKVxuICAgIHtcbiAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpO1xuICAgIH1cblxuICAgIC8vIEFmdGVyIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0LCB0aGUgeGhyLnJlc3BvbnNlIHByb3BlcnR5IHdpbGwgY29udGFpbiB0aGUgcmVxdWVzdGVkIGRhdGEgYXMgYSBET01TdHJpbmcsIEFycmF5QnVmZmVyLCBCbG9iLCBvciBEb2N1bWVudCAoZGVwZW5kaW5nIG9uIHdoYXQgd2FzIHNldCBmb3IgcmVzcG9uc2VUeXBlLilcblxuICAgIHhoci5vbmxvYWQgPSBmaWxlLm9uTG9hZC5iaW5kKGZpbGUpO1xuICAgIHhoci5vbmVycm9yID0gZmlsZS5vbkVycm9yLmJpbmQoZmlsZSk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmaWxlLm9uUHJvZ3Jlc3MuYmluZChmaWxlKTtcblxuICAgIC8vICBUaGlzIGlzIHRoZSBvbmx5IHN0YW5kYXJkIG1ldGhvZCwgdGhlIG9uZXMgYWJvdmUgYXJlIGJyb3dzZXIgYWRkaXRpb25zIChtYXliZSBub3QgdW5pdmVyc2FsPylcbiAgICAvLyB4aHIub25yZWFkeXN0YXRlY2hhbmdlXG5cbiAgICB4aHIuc2VuZCgpO1xuXG4gICAgcmV0dXJuIHhocjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSTG9hZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL1hIUkxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL1hIUkxvYWRlci5qcyIsInZhciBFdmVudCA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cy9FdmVudCcpO1xuXG52YXIgTG9hZGVyQ29tcGxldGVFdmVudCA9IGZ1bmN0aW9uIChsb2FkZXIpXG57XG4gICAgRXZlbnQuY2FsbCh0aGlzLCAnTE9BREVSX0NPTVBMRVRFX0VWRU5UJyk7XG5cbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcbn07XG5cbkxvYWRlckNvbXBsZXRlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xuTG9hZGVyQ29tcGxldGVFdmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMb2FkZXJDb21wbGV0ZUV2ZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlckNvbXBsZXRlRXZlbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZXZlbnRzL0xvYWRlckNvbXBsZXRlRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsInZhciBFdmVudCA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cy9FdmVudCcpO1xuXG52YXIgTG9hZGVyU3RhcnRFdmVudCA9IGZ1bmN0aW9uIChsb2FkZXIpXG57XG4gICAgRXZlbnQuY2FsbCh0aGlzLCAnTE9BREVSX1NUQVJUX0VWRU5UJyk7XG5cbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcbn07XG5cbkxvYWRlclN0YXJ0RXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xuTG9hZGVyU3RhcnRFdmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMb2FkZXJTdGFydEV2ZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlclN0YXJ0RXZlbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9ldmVudHMvTG9hZGVyU3RhcnRFdmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgTE9BREVSX1NUQVJUX0VWRU5UOiByZXF1aXJlKCcuL0xvYWRlclN0YXJ0RXZlbnQnKSxcbiAgICBMT0FERVJfQ09NUExFVEVfRVZFTlQ6IHJlcXVpcmUoJy4vTG9hZGVyQ29tcGxldGVFdmVudCcpXG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZXZlbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwiLyoqXG4qIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZGltZW5zaW9ucyBtYWtlIGEgcG93ZXIgb2YgdHdvIHRleHR1cmUuXG4qIFxuKiBAbWV0aG9kIFBoYXNlci5NYXRoI2lzUG93ZXJPZlR3b1xuKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBUaGUgd2lkdGggdG8gY2hlY2suXG4qIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IHRvIGNoZWNrLlxuKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBhIHBvd2VyIG9mIHR3by5cbiovXG52YXIgSXNQb3dlck9mVHdvID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpXG57XG4gICAgcmV0dXJuICh3aWR0aCA+IDAgJiYgKHdpZHRoICYgKHdpZHRoIC0gMSkpID09PSAwICYmIGhlaWdodCA+IDAgJiYgKGhlaWdodCAmIChoZWlnaHQgLSAxKSkgPT09IDApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJc1Bvd2VyT2ZUd287XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9tYXRoL0lzUG93ZXJPZlR3by5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBjIC0gSW50ZXJuYWwgdmFyLlxuKiBAcHJpdmF0ZVxuKi9cbnZhciBjID0gMTtcblxuLyoqXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMCAtIEludGVybmFsIHZhci5cbiogQHByaXZhdGVcbiovXG52YXIgczAgPSAwO1xuXG4vKipcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMxIC0gSW50ZXJuYWwgdmFyLlxuKiBAcHJpdmF0ZVxuKi9cbnZhciBzMSA9IDA7XG5cbi8qKlxuKiBAcHJvcGVydHkge251bWJlcn0gczIgLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIHMyID0gMDtcblxuLyoqXG4qIEBwcm9wZXJ0eSB7QXJyYXl9IHNpZ24gLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIHNpZ24gPSBbIC0xLCAxIF07XG5cbi8qKlxuKiBQcml2YXRlIHJhbmRvbSBoZWxwZXIuXG4qXG4qIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijcm5kXG4qIEBwcml2YXRlXG4qIEByZXR1cm4ge251bWJlcn1cbiovXG52YXIgcm5kID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBzMCArIGMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuXG4gICAgYyA9IHQgfCAwO1xuICAgIHMwID0gczE7XG4gICAgczEgPSBzMjtcbiAgICBzMiA9IHQgLSBjO1xuXG4gICAgcmV0dXJuIHMyO1xufTtcblxuLyoqXG4qIEludGVybmFsIG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBzZWVkIGhhc2guXG4qXG4qIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaGFzaFxuKiBAcHJpdmF0ZVxuKiBAcGFyYW0ge2FueX0gZGF0YVxuKiBAcmV0dXJuIHtudW1iZXJ9IGhhc2hlZCB2YWx1ZS5cbiovXG52YXIgaGFzaCA9IGZ1bmN0aW9uIChkYXRhKVxue1xuICAgIHZhciBoLCBpLCBuO1xuICAgIG4gPSAweGVmYzgyNDlkO1xuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgICBoIC09IG47XG4gICAgICAgIGggKj0gbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7Ly8gMl4zMlxuICAgIH1cblxuICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOy8vIDJeLTMyXG59O1xuXG5cbnZhciBSYW5kb21EYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKHNlZWRzKVxue1xuICAgIGlmICh0eXBlb2Ygc2VlZHMgPT09ICdzdHJpbmcnKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZShzZWVkcyk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuc293KHNlZWRzKTtcbiAgICB9XG59O1xuXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJhbmRvbURhdGFHZW5lcmF0b3I7XG5cblJhbmRvbURhdGFHZW5lcmF0b3IucHJvdG90eXBlID0ge1xuXG4gICAgLyoqXG4gICAgKiBSZXNldCB0aGUgc2VlZCBvZiB0aGUgcmFuZG9tIGRhdGEgZ2VuZXJhdG9yLlxuICAgICpcbiAgICAqIF9Ob3RlXzogdGhlIHNlZWQgYXJyYXkgaXMgb25seSBwcm9jZXNzZWQgdXAgdG8gdGhlIGZpcnN0IGB1bmRlZmluZWRgIChvciBgbnVsbGApIHZhbHVlLCBzaG91bGQgc3VjaCBiZSBwcmVzZW50LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc293XG4gICAgKiBAcGFyYW0ge2FueVtdfSBzZWVkcyAtIFRoZSBhcnJheSBvZiBzZWVkczogdGhlIGB0b1N0cmluZygpYCBvZiBlYWNoIHZhbHVlIGlzIHVzZWQuXG4gICAgKi9cbiAgICBzb3c6IGZ1bmN0aW9uIChzZWVkcylcbiAgICB7XG4gICAgICAgIC8vIEFsd2F5cyByZXNldCB0byBkZWZhdWx0IHNlZWRcbiAgICAgICAgczAgPSBoYXNoKCcgJyk7XG4gICAgICAgIHMxID0gaGFzaChzMCk7XG4gICAgICAgIHMyID0gaGFzaChzMSk7XG4gICAgICAgIGMgPSAxO1xuXG4gICAgICAgIGlmICghc2VlZHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IGFueSBzZWVkc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZWRzLmxlbmd0aCAmJiAoc2VlZHNbaV0gIT0gbnVsbCk7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlZWQgPSBzZWVkc1tpXTtcblxuICAgICAgICAgICAgczAgLT0gaGFzaChzZWVkKTtcbiAgICAgICAgICAgIHMwICs9IH5+KHMwIDwgMCk7XG4gICAgICAgICAgICBzMSAtPSBoYXNoKHNlZWQpO1xuICAgICAgICAgICAgczEgKz0gfn4oczEgPCAwKTtcbiAgICAgICAgICAgIHMyIC09IGhhc2goc2VlZCk7XG4gICAgICAgICAgICBzMiArPSB+fihzMiA8IDApO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi5cbiAgICAqL1xuICAgIGludGVnZXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAyXjMyXG4gICAgICAgIHJldHVybiBybmQoKSAqIDB4MTAwMDAwMDAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjZnJhY1xuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgKi9cbiAgICBmcmFjOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gMl4tNTNcbiAgICAgICAgcmV0dXJuIHJuZCgpICsgKHJuZCgpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyZWFsXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMl4zMi5cbiAgICAqL1xuICAgIHJlYWw6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VyKCkgKyB0aGlzLmZyYWMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIG1pbiBhbmQgbWF4LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlckluUmFuZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAqL1xuICAgIGludGVnZXJJblJhbmdlOiBmdW5jdGlvbiAobWluLCBtYXgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJlYWxJblJhbmdlKDAsIG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIG1pbiBhbmQgbWF4LlxuICAgICogVGhpcyBtZXRob2QgaXMgYW4gYWxpYXMgZm9yIFJhbmRvbURhdGFHZW5lcmF0b3IuaW50ZWdlckluUmFuZ2UuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNiZXR3ZWVuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgKi9cbiAgICBiZXR3ZWVuOiBmdW5jdGlvbiAobWluLCBtYXgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZShtaW4sIG1heCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcmVhbEluUmFuZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAqL1xuICAgIHJlYWxJblJhbmdlOiBmdW5jdGlvbiAobWluLCBtYXgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5mcmFjKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNub3JtYWxcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMS5cbiAgICAqL1xuICAgIG5vcm1hbDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiAxIC0gKDIgKiB0aGlzLmZyYWMoKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzEzMDgzNjhcbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3V1aWRcbiAgICAqIEByZXR1cm4ge3N0cmluZ30gQSB2YWxpZCBSRkM0MTIyIHZlcnNpb240IElEIGhleCBzdHJpbmdcbiAgICAqL1xuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgYSA9ICcnO1xuICAgICAgICB2YXIgYiA9ICcnO1xuXG4gICAgICAgIGZvciAoYiA9IGEgPSAnJzsgYSsrIDwgMzY7IGIgKz1+YSAlIDUgfCBhICogMyY0ID8gKGFeMTUgPyA4XnRoaXMuZnJhYygpICogKGFeMjAgPyAxNiA6IDQpIDogNCkudG9TdHJpbmcoMTYpIDogJy0nKVxuICAgICAgICB7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIG1lbWJlciBvZiBgYXJyYXlgLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcGlja1xuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cbiAgICAqIEByZXR1cm4ge2FueX0gQSByYW5kb20gbWVtYmVyIG9mIHRoZSBhcnJheS5cbiAgICAqL1xuICAgIHBpY2s6IGZ1bmN0aW9uIChhcnJheSlcbiAgICB7XG4gICAgICAgIHJldHVybiBhcnJheVt0aGlzLmludGVnZXJJblJhbmdlKDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgc2lnbiB0byBiZSB1c2VkIHdpdGggbXVsdGlwbGljYXRpb24gb3BlcmF0b3IuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzaWduXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIG9yICsxLlxuICAgICovXG4gICAgc2lnbjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2soc2lnbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSBtZW1iZXIgb2YgYGFycmF5YCwgZmF2b3JpbmcgdGhlIGVhcmxpZXIgZW50cmllcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3dlaWdodGVkUGlja1xuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cbiAgICAqIEByZXR1cm4ge2FueX0gQSByYW5kb20gbWVtYmVyIG9mIHRoZSBhcnJheS5cbiAgICAqL1xuICAgIHdlaWdodGVkUGljazogZnVuY3Rpb24gKGFycmF5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W35+KE1hdGgucG93KHRoaXMuZnJhYygpLCAyKSAqIChhcnJheS5sZW5ndGggLSAxKSArIDAuNSldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXgsIG9yIGJldHdlZW4gdGhlIGJlZ2lubmluZyBvZiAyMDAwIGFuZCB0aGUgZW5kIG9mIDIwMjAgaWYgbWluIGFuZCBtYXggYXJlbid0IHNwZWNpZmllZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3RpbWVzdGFtcFxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHRpbWVzdGFtcCBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICovXG4gICAgdGltZXN0YW1wOiBmdW5jdGlvbiAobWluLCBtYXgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZShtaW4gfHwgOTQ2Njg0ODAwMDAwLCBtYXggfHwgMTU3Nzg2MjAwMDAwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSBhbmdsZSBiZXR3ZWVuIC0xODAgYW5kIDE4MC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2FuZ2xlXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIC0xODAgYW5kIDE4MC5cbiAgICAqL1xuICAgIGFuZ2xlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZWdlckluUmFuZ2UoLTE4MCwgMTgwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJvdGF0aW9uIGluIHJhZGlhbnMsIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijcm90YXRpb25cbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxuICAgICovXG4gICAgcm90YXRpb246IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZSgtMy4xNDE1OTI2NTM1ODk3OTMsIDMuMTQxNTkyNjUzNTg5NzkzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBHZXRzIG9yIFNldHMgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuIFRoaXMgYWxsb3dzIHlvdSB0byByZXRhaW4gdGhlIHZhbHVlc1xuICAgICogdGhhdCB0aGUgZ2VuZXJhdG9yIGlzIHVzaW5nIGJldHdlZW4gZ2FtZXMsIGkuZS4gaW4gYSBnYW1lIHNhdmUgZmlsZS5cbiAgICAqXG4gICAgKiBUbyBzZWVkIHRoaXMgZ2VuZXJhdG9yIHdpdGggYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIHlvdSBjYW4gcGFzcyBpdCBhcyB0aGVcbiAgICAqIGBzZWVkYCB2YWx1ZSBpbiB5b3VyIGdhbWUgY29uZmlnLCBvciBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5IGFmdGVyIFBoYXNlciBoYXMgYm9vdGVkLlxuICAgICpcbiAgICAqIENhbGwgdGhpcyBtZXRob2Qgd2l0aCBubyBwYXJhbWV0ZXJzIHRvIHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICAqXG4gICAgKiBJZiBwcm92aWRpbmcgYSBzdGF0ZSBpdCBzaG91bGQgbWF0Y2ggdGhlIHNhbWUgZm9ybWF0IHRoYXQgdGhpcyBtZXRob2RcbiAgICAqIHJldHVybnMsIHdoaWNoIGlzIGEgc3RyaW5nIHdpdGggYSBoZWFkZXIgYCFybmRgIGZvbGxvd2VkIGJ5IHRoZSBgY2AsXG4gICAgKiBgczBgLCBgczFgIGFuZCBgczJgIHZhbHVlcyByZXNwZWN0aXZlbHksIGVhY2ggY29tbWEtZGVsaW1pdGVkLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc3RhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdIC0gR2VuZXJhdG9yIHN0YXRlIHRvIGJlIHNldC5cbiAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci5cbiAgICAqL1xuICAgIHN0YXRlOiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAnc3RyaW5nJyAmJiBzdGF0ZS5tYXRjaCgvXiFybmQvKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICBjID0gcGFyc2VGbG9hdChzdGF0ZVsxXSk7XG4gICAgICAgICAgICBzMCA9IHBhcnNlRmxvYXQoc3RhdGVbMl0pO1xuICAgICAgICAgICAgczEgPSBwYXJzZUZsb2F0KHN0YXRlWzNdKTtcbiAgICAgICAgICAgIHMyID0gcGFyc2VGbG9hdChzdGF0ZVs0XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gWyAnIXJuZCcsIGMsIHMwLCBzMSwgczIgXS5qb2luKCcsJyk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbURhdGFHZW5lcmF0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxuKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoXG4qL1xuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcbntcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmdW4gLyosIHRoaXNBcmcgKi8pXG4gICAge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZnVuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9BcnJheS5mb3JFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxuKi9cbmlmICghQXJyYXkuaXNBcnJheSlcbntcbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKGFyZylcbiAgICB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8vIEVTNiBNYXRoLnRydW5jIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC90cnVuY1xuaWYgKCFNYXRoLnRydW5jKSB7XG4gICAgTWF0aC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPCAwID8gTWF0aC5jZWlsKHgpIDogTWF0aC5mbG9vcih4KTtcbiAgICB9O1xufVxuXG4vKipcbiogQSBwb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiovXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG5cbiAgICAvKiBqc2hpbnQgZnJlZXplOiBmYWxzZSAqL1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XG5cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gYm91bmQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IHRoaXMgOiB0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm91bmQucHJvdG90eXBlID0gKGZ1bmN0aW9uIEYocHJvdG8pIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvdG8pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGpzaGludCBzdXBlcm5ldzogdHJ1ZSAqL1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkodGFyZ2V0LnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG4vKipcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxuKi9cbmlmICghQXJyYXkuaXNBcnJheSlcbntcbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKGFyZylcbiAgICB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xufVxuXG4vKipcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxuKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoXG4qL1xuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcbntcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGZ1biAvKiwgdGhpc0FyZyAqLylcbiAgICB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgIGlmICh0aGlzID09PSB2b2lkIDAgfHwgdGhpcyA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICBpZiAodHlwZW9mIGZ1biAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4qIExvdy1idWRnZXQgRmxvYXQzMkFycmF5IGtub2NrLW9mZiwgc3VpdGFibGUgZm9yIHVzZSB3aXRoIFAyLmpzIGluIElFOVxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xuKiBDYW1lcm9uIEZvYWxlIChodHRwOi8vd3d3LmtpYmlidS5jb20pXG4qL1xuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxue1xuICAgIHZhciBDaGVhcEFycmF5ID0gZnVuY3Rpb24odHlwZSlcbiAgICB7XG4gICAgICAgIHZhciBwcm90byA9IG5ldyBBcnJheSgpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZihhcmcpID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBcnJheS5jYWxsKHRoaXMsIGFyZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmcubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IGFyZ1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93W3R5cGVdLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICB3aW5kb3dbdHlwZV0uY29uc3RydWN0b3IgPSB3aW5kb3dbdHlwZV07XG4gICAgfTtcblxuICAgIENoZWFwQXJyYXkoJ0Zsb2F0MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBDaGVhcEFycmF5KCdVaW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBDaGVhcEFycmF5KCdJbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxufVxuXG4vKipcbiAqIEFsc28gZml4IGZvciB0aGUgYWJzZW50IGNvbnNvbGUgaW4gSUU5XG4gKi9cbmlmICghd2luZG93LmNvbnNvbGUpXG57XG4gICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB3aW5kb3cuY29uc29sZS5sb2cgPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XG4gICAgd2luZG93LmNvbnNvbGUud2FybiA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcbn1cblxuLyoqXG4gKiBwZXJmb3JtYW5jZS5ub3dcbiAqL1xuKGZ1bmN0aW9uKCl7XG5cbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xuICB9XG4gIFxuICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH0pO1xuXG4gIGlmIChcIm5vd1wiIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA9PSBmYWxzZSlcbiAge1xuICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xuICAgIFxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XG4gICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XG4gICAgfVxuXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpe1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBub3dPZmZzZXQ7XG4gICAgfVxuICB9XG5cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXG5pZiAoIU1hdGgudHJ1bmMpIHtcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuXG4vKipcbiogTG93LWJ1ZGdldCBGbG9hdDMyQXJyYXkga25vY2stb2ZmLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUDIuanMgaW4gSUU5XG4qIFNvdXJjZTogaHR0cDovL3d3dy5odG1sNWdhbWVkZXZzLmNvbS90b3BpYy81OTg4LXBoYXNlci0xMi1pZTkvXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcbiovXG5pZiAodHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwib2JqZWN0XCIpXG57XG4gICAgdmFyIENoZWFwQXJyYXkgPSBmdW5jdGlvbih0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgICAgIHdpbmRvd1t0eXBlXSA9IGZ1bmN0aW9uKGFyZykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKGFyZykgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gYXJnW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgIHdpbmRvd1t0eXBlXS5jb25zdHJ1Y3RvciA9IHdpbmRvd1t0eXBlXTtcbiAgICB9O1xuXG4gICAgQ2hlYXBBcnJheSgnRmxvYXQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ0ludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnQXJyYXlCdWZmZXInKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvVWludDMyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcbiAqL1xuaWYgKCF3aW5kb3cuY29uc29sZSlcbntcbiAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2NvbnNvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuICogcGVyZm9ybWFuY2Uubm93XG4gKi9cbihmdW5jdGlvbigpe1xuXG4gIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93ID09IGZhbHNlKSB7XG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UgPSB7fTtcbiAgfVxuICBcbiAgRGF0ZS5ub3cgPSAoRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkgeyAgLy8gdGhhbmtzIElFOFxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9KTtcblxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXG4gIHtcbiAgICB2YXIgbm93T2Zmc2V0ID0gRGF0ZS5ub3coKTtcbiAgICBcbiAgICBpZiAocGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpe1xuICAgICAgbm93T2Zmc2V0ID0gcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxuICAgIH1cblxuICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiBub3coKXtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xuICAgIH1cbiAgfVxuXG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL3BlcmZvcm1hbmNlLm5vdy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8vIFJlZmVyZW5jZXM6XG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTU3OTY3MVxuLy8gaHR0cDovL3VwZGF0ZXMuaHRtbDVyb2Nrcy5jb20vMjAxMi8wNS9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUtQVBJLW5vdy13aXRoLXN1Yi1taWxsaXNlY29uZC1wcmVjaXNpb25cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3RpbWhhbGwvNDA3ODYxNFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL3RyZWUvbWFzdGVyL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblxuLy8gRXhwZWN0ZWQgdG8gYmUgdXNlZCB3aXRoIEJyb3dzZXJmaXlcbi8vIEJyb3dzZXJpZnkgYXV0b21hdGljYWxseSBkZXRlY3RzIHRoZSB1c2Ugb2YgYGdsb2JhbGAgYW5kIHBhc3NlcyB0aGVcbi8vIGNvcnJlY3QgcmVmZXJlbmNlIG9mIGBnbG9iYWxgLCBgc2VsZmAsIGFuZCBmaW5hbGx5IGB3aW5kb3dgXG5cbi8vIERhdGUubm93XG5pZiAoIShEYXRlLm5vdyAmJiBEYXRlLnByb3RvdHlwZS5nZXRUaW1lKSkge1xuICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfTtcbn1cblxuLy8gcGVyZm9ybWFuY2Uubm93XG5pZiAoIShnbG9iYWwucGVyZm9ybWFuY2UgJiYgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdykpIHtcbiAgICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIWdsb2JhbC5wZXJmb3JtYW5jZSkge1xuICAgICAgICBnbG9iYWwucGVyZm9ybWFuY2UgPSB7fTtcbiAgICB9XG4gICAgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfTtcbn1cblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG52YXIgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuXG5mb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIWdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xufVxuXG5pZiAoIWdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCksXG4gICAgICAgICAgICBkZWxheSA9IDE2ICsgbGFzdFRpbWUgLSBjdXJyZW50VGltZTtcblxuICAgICAgICBpZiAoZGVsYXkgPCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH07XG59XG5cbmlmICghZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIFNpbmdsZVRleHR1cmVCYXRjaCA9IHJlcXVpcmUoJy4vYmF0Y2hlcy9TaW5nbGVUZXh0dXJlQmF0Y2gnKTtcbnZhciBNdWx0aVRleHR1cmVCYXRjaCA9IHJlcXVpcmUoJy4vYmF0Y2hlcy9NdWx0aVRleHR1cmVCYXRjaCcpO1xuXG4vKipcbiogTWFuYWdlcyB0aGUgZGlmZmVyZW50IFdlYkdMIFNwcml0ZSBCYXRjaGVzLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlJlbmRlcmVyLkNhbnZhc1xuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEdhbWUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKi9cbnZhciBCYXRjaE1hbmFnZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGJhdGNoU2l6ZSlcbntcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIHRoaXMuY3VycmVudEJhdGNoID0gbnVsbDtcbiAgICB0aGlzLnNwcml0ZUJhdGNoID0gbnVsbDtcblxuICAgIHRoaXMuc2luZ2xlVGV4dHVyZUJhdGNoID0gbmV3IFNpbmdsZVRleHR1cmVCYXRjaCh0aGlzLCBiYXRjaFNpemUpO1xuICAgIHRoaXMubXVsdGlUZXh0dXJlQmF0Y2ggPSBuZXcgTXVsdGlUZXh0dXJlQmF0Y2godGhpcywgYmF0Y2hTaXplKTtcblxuICAgIC8vIHRoaXMucGl4ZWxCYXRjaCA9IG5ldyBCYXRjaC5QaXhlbCh0aGlzLCBiYXRjaFNpemUpO1xuICAgIC8vIHRoaXMuZnhCYXRjaCA9IG5ldyBCYXRjaC5GWCh0aGlzLCBiYXRjaFNpemUpO1xufTtcblxuQmF0Y2hNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJhdGNoTWFuYWdlcjtcblxuQmF0Y2hNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgICAgICB0aGlzLnNpbmdsZVRleHR1cmVCYXRjaC5pbml0KCk7XG4gICAgICAgIHRoaXMubXVsdGlUZXh0dXJlQmF0Y2guaW5pdCgpO1xuXG4gICAgICAgIC8vIHRoaXMucGl4ZWxCYXRjaC5pbml0KCk7XG4gICAgICAgIC8vIHRoaXMuZnhCYXRjaC5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIubXVsdGlUZXh0dXJlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaCA9IHRoaXMubXVsdGlUZXh0dXJlQmF0Y2g7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoID0gdGhpcy5tdWx0aVRleHR1cmVCYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJhdGNoID0gdGhpcy5zaW5nbGVUZXh0dXJlQmF0Y2g7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoID0gdGhpcy5zaW5nbGVUZXh0dXJlQmF0Y2g7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2guc3RvcCgpO1xuICAgIH0sXG5cbiAgICBzZXRCYXRjaDogZnVuY3Rpb24gKG5ld0JhdGNoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJhdGNoLnR5cGUgPT09IG5ld0JhdGNoLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBGbHVzaCB3aGF0ZXZlciB3YXMgaW4gdGhlIGN1cnJlbnQgYmF0Y2ggKGlmIGFueXRoaW5nKVxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5mbHVzaCgpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhdGNoID0gbmV3QmF0Y2g7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2guc3RhcnQodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8vICBBZGQgYSBuZXcgZW50cnkgaW50byB0aGUgY3VycmVudCBzcHJpdGUgYmF0Y2hcbiAgICBhZGQ6IGZ1bmN0aW9uIChzb3VyY2UsIGJsZW5kTW9kZSwgdmVydHMsIHV2cywgdGV4dHVyZUluZGV4LCBhbHBoYSwgdGludENvbG9ycywgYmdDb2xvcnMpXG4gICAge1xuICAgICAgICAvLyAgU2V0IHRoZSBjdXJyZW50IGJhdGNoIChpZiBkaWZmZXJlbnQgZnJvbSB0aGlzIG9uZSlcbiAgICAgICAgdmFyIGhhc0ZsdXNoZWQgPSB0aGlzLnNldEJhdGNoKHRoaXMuc3ByaXRlQmF0Y2gpO1xuXG4gICAgICAgIC8vICBDaGVjayBCYXRjaCBTaXplIGFuZCBmbHVzaCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKCFoYXNGbHVzaGVkICYmIHRoaXMuc3ByaXRlQmF0Y2guc2l6ZSA+PSB0aGlzLnNwcml0ZUJhdGNoLm1heFNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guZmx1c2goKTtcblxuICAgICAgICAgICAgaGFzRmx1c2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzb3VyY2UuZ2xMYXN0VXNlZCA9IHRoaXMucmVuZGVyZXIuc3RhcnRUaW1lO1xuXG4gICAgICAgIC8vICBEb2VzIHRoaXMgVGV4dHVyZVNvdXJjZSBuZWVkIHVwZGF0aW5nP1xuICAgICAgICBpZiAoc291cmNlLmdsRGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZShzb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIERvZXMgdGhlIGJhdGNoIG5lZWQgdG8gYWN0aXZhdGUgYSBuZXcgdGV4dHVyZT9cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudGV4dHVyZUFycmF5W3NvdXJjZS5nbFRleHR1cmVJbmRleF0gIT09IHNvdXJjZSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldEN1cnJlbnRUZXh0dXJlIHRvJywgc291cmNlLmdsVGV4dHVyZUluZGV4KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNvdXJjZS5pbWFnZS5jdXJyZW50U3JjKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRleHR1cmUoc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBCbGVuZCBNb2RlP1xuICAgICAgICBpZiAoYmxlbmRNb2RlICE9PSB0aGlzLnJlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghaGFzRmx1c2hlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLmZsdXNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QmxlbmRNb2RlKGJsZW5kTW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwcml0ZUJhdGNoLmFkZCh2ZXJ0cywgdXZzLCB0ZXh0dXJlSW5kZXgsIGFscGhhLCB0aW50Q29sb3JzLCBiZ0NvbG9ycyk7XG4gICAgfSxcblxuICAgIGFkZEN1c3RvbVNoYWRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vICBUT0RPXG4gICAgfSxcblxuICAgIGFkZEZYOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gIFRPRE9cbiAgICB9LFxuXG4gICAgYWRkUGl4ZWw6IGZ1bmN0aW9uICh4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIGNvbG9yKVxuICAgIHtcbiAgICAgICAgdmFyIGhhc0ZsdXNoZWQgPSB0aGlzLnNldEJhdGNoKHRoaXMucGl4ZWxCYXRjaCk7XG5cbiAgICAgICAgLy8gIENoZWNrIEJhdGNoIFNpemUgYW5kIGZsdXNoIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIWhhc0ZsdXNoZWQgJiYgdGhpcy5waXhlbEJhdGNoLnNpemUgPj0gdGhpcy5waXhlbEJhdGNoLm1heFNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGl4ZWxCYXRjaC5mbHVzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waXhlbEJhdGNoLmFkZCh4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIGNvbG9yKTtcbiAgICB9LFxuXG4gICAgc2V0Q3VycmVudFRleHR1cmU6IGZ1bmN0aW9uIChzb3VyY2UpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhdGNoLmZsdXNoKCk7XG5cbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHNvdXJjZS5nbFRleHR1cmVJbmRleCk7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgc291cmNlLmdsVGV4dHVyZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci50ZXh0dXJlQXJyYXlbc291cmNlLmdsVGV4dHVyZUluZGV4XSA9IHNvdXJjZTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuc2luZ2xlVGV4dHVyZUJhdGNoLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhdGNoTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL0JhdGNoTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVuZGVyZXIvd2ViZ2wvQmF0Y2hNYW5hZ2VyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBhdXRob3IgICAgICAgTWF0IEdyb3ZlcyAoQERvb3JtYXQyMylcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogTmV3IHZlcnNpb24gb2YgUElYSS5XZWJHTFNoYWRlck1hbmFnZXJcbipcbiogQGNsYXNzIFBoYXNlci5SZW5kZXJlci5DYW52YXNcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBHYW1lIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG52YXIgU2hhZGVyTWFuYWdlciA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIHRoaXMuY3VycmVudFNoYWRlciA9IG51bGw7XG5cbn07XG5cblNoYWRlck1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2hhZGVyTWFuYWdlcjtcblxuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgfSxcblxuICAgIC8qXG4gICAgc2V0QXR0cmliczogZnVuY3Rpb24gKGF0dHJpYnMpXG4gICAge1xuICAgICAgICAvLyByZXNldCB0ZW1wIHN0YXRlXG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRlbXBBdHRyaWJTdGF0ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50ZW1wQXR0cmliU3RhdGVbaV0gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgbmV3IGF0dHJpYnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGF0dHJpYnMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJJZCA9IGF0dHJpYnNbaV07XG4gICAgICAgICAgICB0aGlzLnRlbXBBdHRyaWJTdGF0ZVthdHRyaWJJZF0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYXR0cmliU3RhdGUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYlN0YXRlW2ldICE9PSB0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYlN0YXRlW2ldID0gdGhpcy50ZW1wQXR0cmliU3RhdGVbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wQXR0cmliU3RhdGVbaV0pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgICovXG5cbiAgICBzZXRTaGFkZXI6IGZ1bmN0aW9uIChwcm9ncmFtKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoYWRlciA9PT0gcHJvZ3JhbSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAgVGVsbCB0aGUgY3VycmVudCBzaGFkZXIgaXQgaXMgYmVpbmcgdW5ib3VuZD9cblxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBwcm9ncmFtO1xuXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnMoc2hhZGVyLmF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuXG4gICAgICAgIC8vIHRoaXMuYXR0cmliU3RhdGUgPSBbXTtcbiAgICAgICAgLy8gdGhpcy50ZW1wQXR0cmliU3RhdGUgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5zdGFjayA9IFtdO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNoYWRlciA9IG51bGw7XG5cbiAgICAgICAgLy8gdGhpcy5wcmltaXRpdmVTaGFkZXIuZGVzdHJveSgpO1xuICAgICAgICAvLyB0aGlzLmNvbXBsZXhQcmltaXRpdmVTaGFkZXIuZGVzdHJveSgpO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRTaGFkZXIuZGVzdHJveSgpO1xuICAgICAgICAvLyB0aGlzLmZhc3RTaGFkZXIuZGVzdHJveSgpO1xuICAgICAgICAvLyB0aGlzLnN0cmlwU2hhZGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL1NoYWRlck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAYXV0aG9yICAgICAgIE1hdCBHcm92ZXMgKEBEb29ybWF0MjMpXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcbnZhciBDcmVhdGVFbXB0eVRleHR1cmUgPSByZXF1aXJlKCcuL3V0aWxzL0NyZWF0ZUVtcHR5VGV4dHVyZScpO1xudmFyIFF1YWRGQk8gPSByZXF1aXJlKCcuL3V0aWxzL1F1YWRGQk8nKTtcbnZhciBCYXRjaE1hbmFnZXIgPSByZXF1aXJlKCcuL0JhdGNoTWFuYWdlcicpO1xudmFyIFNoYWRlck1hbmFnZXIgPSByZXF1aXJlKCcuL1NoYWRlck1hbmFnZXInKTtcblxuLyoqXG4qIEEgV2ViZ0wgYmFzZWQgcmVuZGVyZXIuXG4qXG4qIEBjbGFzcyBQaGFzZXIuUmVuZGVyZXIuV2ViR0xcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBHYW1lIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG52YXIgV2ViR0xSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBHYW1lLlxuICAgICovXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMudHlwZSA9IENPTlNULldFQkdMO1xuXG4gICAgLy8gIFJlYWQgYWxsIHRoZSBmb2xsb3dpbmcgZnJvbSBnYW1lIGNvbmZpZ1xuICAgIHRoaXMuY2xlYXJCZWZvcmVSZW5kZXIgPSB0cnVlO1xuXG4gICAgdGhpcy50cmFuc3BhcmVudCA9IGZhbHNlO1xuXG4gICAgdGhpcy5hdXRvUmVzaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXNlcnZlRHJhd2luZ0J1ZmZlciA9IGZhbHNlO1xuXG4gICAgdGhpcy53aWR0aCA9IGdhbWUuY29uZmlnLndpZHRoICogZ2FtZS5jb25maWcucmVzb2x1dGlvbjtcblxuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5jb25maWcuaGVpZ2h0ICogZ2FtZS5jb25maWcucmVzb2x1dGlvbjtcblxuICAgIHRoaXMucmVzb2x1dGlvbiA9IGdhbWUuY29uZmlnLnJlc29sdXRpb247XG5cbiAgICB0aGlzLmNsaXBVbml0WCA9IDIgLyB0aGlzLndpZHRoO1xuXG4gICAgdGhpcy5jbGlwVW5pdFkgPSAyIC8gdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnZpZXcgPSBnYW1lLmNhbnZhcztcblxuICAgIC8vIHRoaXMuc3RlbmNpbEJ1ZmZlckxpbWl0ID0gNjtcblxuICAgIHRoaXMubXVsdGlUZXh0dXJlID0gZmFsc2U7XG5cbiAgICB0aGlzLmV4dGVuc2lvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSBfY29udGV4dE9wdGlvbnNcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgIHRoaXMuY29udGV4dE9wdGlvbnMgPSB7XG4gICAgICAgIGFscGhhOiB0aGlzLnRyYW5zcGFyZW50LFxuICAgICAgICBhbnRpYWxpYXM6IGdhbWUuYW50aWFsaWFzLFxuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRoaXMudHJhbnNwYXJlbnQgJiYgdGhpcy50cmFuc3BhcmVudCAhPT0gJ25vdE11bHRpcGxpZWQnLFxuICAgICAgICBzdGVuY2lsOiB0cnVlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRoaXMucHJlc2VydmVEcmF3aW5nQnVmZmVyXG4gICAgfTtcbiAgICAgKi9cblxuICAgIHRoaXMuY29udGV4dE9wdGlvbnMgPSB7XG4gICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogdHJ1ZSxcbiAgICAgICAgc3RlbmNpbDogdHJ1ZSxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLnByb2plY3Rpb24gPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIHRoaXMub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB0aGlzLnNoYWRlck1hbmFnZXIgPSBuZXcgU2hhZGVyTWFuYWdlcih0aGlzKTtcbiAgICB0aGlzLmJhdGNoID0gbmV3IEJhdGNoTWFuYWdlcih0aGlzLCA0MDAwKTtcblxuICAgIC8vIHRoaXMuZmlsdGVyTWFuYWdlciA9IG5ldyBQaGFzZXIuUmVuZGVyZXIuV2ViR0wuRmlsdGVyTWFuYWdlcih0aGlzKTtcbiAgICAvLyB0aGlzLnN0ZW5jaWxNYW5hZ2VyID0gbmV3IFBoYXNlci5SZW5kZXJlci5XZWJHTC5TdGVuY2lsTWFuYWdlcih0aGlzKTtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuXG4gICAgdGhpcy5lbXB0eVRleHR1cmUgPSBudWxsO1xuXG4gICAgdGhpcy50ZXh0dXJlQXJyYXkgPSBbXTtcblxuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IC0xO1xuICAgIHRoaXMuY3VycmVudFRleHR1cmVTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFNoYWRlciA9IG51bGw7XG5cbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXTtcblxuICAgIHRoaXMuZmxpcFkgPSAxO1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuZW5kVGltZSA9IDA7XG4gICAgdGhpcy5kcmF3Q291bnQgPSAwO1xuXG4gICAgdGhpcy5jb250ZXh0TG9zdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZmJFcnJvcnMgPSB7XG4gICAgICAgIDM2MDU0OiAnSW5jb21wbGV0ZSBhdHRhY2htZW50JyxcbiAgICAgICAgMzYwNTU6ICdNaXNzaW5nIGF0dGFjaG1lbnQnLFxuICAgICAgICAzNjA1NzogJ0luY29tcGxldGUgZGltZW5zaW9ucycsXG4gICAgICAgIDM2MDYxOiAnRnJhbWVidWZmZXIgdW5zdXBwb3J0ZWQnXG4gICAgfTtcblxuICAgIHRoaXMuaW5pdCgpO1xufTtcblxuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTFJlbmRlcmVyO1xuXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZSA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmdsID0gdGhpcy52aWV3LmdldENvbnRleHQoJ3dlYmdsJywgdGhpcy5jb250ZXh0T3B0aW9ucykgfHwgdGhpcy52aWV3LmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIHRoaXMuY29udGV4dE9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghdGhpcy5nbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TG9zdCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYkdMLiBUcnkgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlci4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgdGhpcy5tYXhUZXh0dXJlcyA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4VGV4dHVyZXMgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubXVsdGlUZXh0dXJlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU11bHRpRW1wdHlUZXh0dXJlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbXB0eVRleHR1cmUgPSBDcmVhdGVFbXB0eVRleHR1cmUodGhpcy5nbCwgMSwgMSwgMCwgMCk7XG5cbiAgICAgICAgZ2wuZGlzYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgZ2wuZGlzYWJsZShnbC5DVUxMX0ZBQ0UpO1xuICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuXG4gICAgICAgICAvLyBUcmFuc3BhcmVudFxuICAgICAgICAvLyBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vICBCbGFja1xuICAgICAgICBnbC5jbGVhckNvbG9yKDEsIDAsIDAsIDEpO1xuXG4gICAgICAgIHRoaXMuc2hhZGVyTWFuYWdlci5pbml0KCk7XG4gICAgICAgIHRoaXMuYmF0Y2guaW5pdCgpO1xuXG4gICAgICAgIC8vIHRoaXMuZmlsdGVyTWFuYWdlci5pbml0KCk7XG4gICAgICAgIC8vIHRoaXMuc3RlbmNpbE1hbmFnZXIuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBMb2FkIFdlYkdMIGV4dGVuc2lvblxuICAgICAgICB0aGlzLmV4dGVuc2lvbnMuY29tcHJlc3Npb24gPSB7fTtcblxuICAgICAgICB2YXIgZXRjMSA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEnKSB8fCBnbC5nZXRFeHRlbnNpb24oJ1dFQktJVF9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMScpO1xuICAgICAgICB2YXIgcHZydGMgPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpIHx8IGdsLmdldEV4dGVuc2lvbignV0VCS0lUX1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpO1xuICAgICAgICB2YXIgczN0YyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGMnKSB8fCBnbC5nZXRFeHRlbnNpb24oJ1dFQktJVF9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xuXG4gICAgICAgIGlmIChldGMxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnMuY29tcHJlc3Npb24uRVRDMSA9IGV0YzE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHZydGMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5jb21wcmVzc2lvbi5QVlJUQyA9IHB2cnRjO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHMzdGMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5jb21wcmVzc2lvbi5TM1RDID0gczN0YztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBNYXAgQmxlbmQgTW9kZXNcblxuICAgICAgICB2YXIgYWRkID0gWyBnbC5TUkNfQUxQSEEsIGdsLkRTVF9BTFBIQSBdO1xuICAgICAgICB2YXIgbm9ybWFsID0gWyBnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEgXTtcbiAgICAgICAgdmFyIG11bHRpcGx5ID0gWyBnbC5EU1RfQ09MT1IsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEgXTtcbiAgICAgICAgdmFyIHNjcmVlbiA9IFsgZ2wuU1JDX0FMUEhBLCBnbC5PTkUgXTtcblxuICAgICAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXG4gICAgICAgICAgICBub3JtYWwsIGFkZCwgbXVsdGlwbHksIHNjcmVlbiwgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsLCBub3JtYWwsIG5vcm1hbCwgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsLCBub3JtYWwsIG5vcm1hbCwgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsLCBub3JtYWwsIG5vcm1hbCwgbm9ybWFsXG4gICAgICAgIF07XG4gICAgfSxcblxuICAgIC8vICBCaW5kIGVtcHR5IG11bHRpLXRleHR1cmVzIHRvIGF2b2lkIFdlYkdMIHNwYW1cblxuICAgIGNyZWF0ZU11bHRpRW1wdHlUZXh0dXJlczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm1heFRleHR1cmVzID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4VGV4dHVyZXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlQXJyYXlbaV0gPSBDcmVhdGVFbXB0eVRleHR1cmUodGhpcy5nbCwgMSwgMSwgMCwgaSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZW5hYmxlTXVsdGlUZXh0dXJlU3VwcG9ydDogZnVuY3Rpb24gKHRleHR1cmVBcnJheSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm1heFRleHR1cmVzID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm11bHRpVGV4dHVyZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5iYXRjaC5zcHJpdGVCYXRjaCA9IHRoaXMuYmF0Y2gubXVsdGlUZXh0dXJlQmF0Y2g7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dHVyZUFycmF5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIGluZGV4IDAgaXMgcmVzZXJ2ZWQ/XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHR1cmVBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuZ2FtZS50ZXh0dXJlcy5nZXQodGV4dHVyZUFycmF5W2ldKTtcblxuICAgICAgICAgICAgICAgIGluZGV4ID0gdGV4dHVyZS5zZXRUZXh0dXJlSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc2FibGVNdWx0aVRleHR1cmVTdXBwb3J0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5tdWx0aVRleHR1cmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJhdGNoLnNwcml0ZUJhdGNoID0gdGhpcy5iYXRjaC5zaW5nbGVUZXh0dXJlQmF0Y2g7XG4gICAgfSxcblxuICAgIHJlc2l6ZTogZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpXG4gICAge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5nYW1lLmNvbmZpZy5yZXNvbHV0aW9uO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHJlcztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiByZXM7XG5cbiAgICAgICAgdGhpcy52aWV3LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy52aWV3LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9SZXNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5zdHlsZS53aWR0aCA9ICh0aGlzLndpZHRoIC8gcmVzKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc3R5bGUuaGVpZ2h0ID0gKHRoaXMuaGVpZ2h0IC8gcmVzKSArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmNsaXBVbml0WCA9IDIgLyB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmNsaXBVbml0WSA9IDIgLyB0aGlzLmhlaWdodDtcblxuICAgICAgICB0aGlzLnByb2plY3Rpb24ueCA9ICh0aGlzLndpZHRoIC8gMikgLyByZXM7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbi55ID0gLSh0aGlzLmhlaWdodCAvIDIpIC8gcmVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBTdGF0ZS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgcmVuZGVyXG4gICAgICogQHBhcmFtIHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRvIGJlIHJlbmRlcmVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSAtIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiB0aW1lIHRoYXQgaGFzbid0IGJlZW4gc2ltdWxhdGVkIHlldCwgZGl2aWRlZFxuICAgICAqICAgYnkgdGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgd2lsbCBiZSBzaW11bGF0ZWQgdGhlIG5leHQgdGltZSB1cGRhdGUoKVxuICAgICAqICAgcnVucy4gVXNlZnVsIGZvciBpbnRlcnBvbGF0aW5nIGZyYW1lcy5cbiAgICAgKi9cbiAgICByZW5kZXI6IGZ1bmN0aW9uIChzdGF0ZSwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnJWMgcmVuZGVyIHN0YXJ0ICcsICdjb2xvcjogI2ZmZmZmZjsgYmFja2dyb3VuZDogIzAwZmYwMDsnKTtcblxuICAgICAgICAvLyAgTm8gcG9pbnQgcmVuZGVyaW5nIGlmIG91ciBjb250ZXh0IGhhcyBiZWVuIGJsb3duIHVwIVxuICAgICAgICBpZiAodGhpcy5jb250ZXh0TG9zdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIEFkZCBQcmUtcmVuZGVyIGhvb2tcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICB2YXIgZmJvID0gc3RhdGUuc3lzLmZibztcblxuICAgICAgICBmYm8uYWN0aXZhdGUoKTtcblxuICAgICAgICAvLyAgY2xlYXIgaXMgbmVlZGVkIGZvciB0aGUgRkJPLCBvdGhlcndpc2UgY29ycnVwdGlvbiAuLi5cbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICAgICAgdGhpcy5zZXRCbGVuZE1vZGUoQ09OU1QuYmxlbmRNb2Rlcy5OT1JNQUwpO1xuXG4gICAgICAgIHRoaXMuZHJhd0NvdW50ID0gMDtcblxuICAgICAgICB0aGlzLmJhdGNoLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gIENvdWxkIG1vdmUgdG8gdGhlIFN0YXRlIFN5c3RlbXMgb3IgTWFpbkxvb3BcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnJlbmRlckNoaWxkcmVuKHRoaXMsIHN0YXRlLCBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XG5cbiAgICAgICAgdGhpcy5iYXRjaC5zdG9wKCk7XG5cbiAgICAgICAgLy8gIENhbGwgc3RhdGUucmVuZGVyIGhlcmUsIHNvIHdlIGNhbiBkbyBzb21lIGV4dHJhIHNoaXp6bGUgb24gdGhlIHRvcFxuICAgICAgICAvLyAgTWF5YmUgcGFzcyBpbiB0aGUgRkJPIHRleHR1cmUgdG9vP1xuXG4gICAgICAgIGZiby5yZW5kZXIobnVsbCk7XG5cbiAgICAgICAgLy8gIFVuYmluZCB0aGUgZmJvIHRleHR1cmUgYW5kIHJlcGxhY2UgaXQgd2l0aCBhbiBlbXB0eSB0ZXh0dXJlLlxuICAgICAgICAvLyAgSWYgd2UgZm9yZ2V0IHRoaXMgd2UgY29ycnVwdCB0aGUgbWFpbiBjb250ZXh0IHRleHR1cmUhXG4gICAgICAgIC8vICBvciBnZXQgYFJFTkRFUiBXQVJOSU5HOiB0aGVyZSBpcyBubyB0ZXh0dXJlIGJvdW5kIHRvIHRoZSB1bml0IDBgIHNwYW0gaW4gdGhlIGNvbnNvbGVcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5lbXB0eVRleHR1cmUpO1xuXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJyVjIHJlbmRlciBlbmQgJywgJ2NvbG9yOiAjZmZmZmZmOyBiYWNrZ3JvdW5kOiAjZmYwMDAwOycpO1xuXG4gICAgICAgIC8vICBSZXNldCBiYWNrIHRvIGRlZmF1bHRzXG4gICAgICAgIC8vIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKTtcbiAgICAgICAgLy8gZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcblxuICAgICAgICAvLyAgQWRkIFBvc3QtcmVuZGVyIGhvb2tcbiAgICB9LFxuXG4gICAgY2xpcFg6IGZ1bmN0aW9uICh4KVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNsaXBVbml0WCAqIHgpIC0gMTtcbiAgICB9LFxuXG4gICAgY2xpcFk6IGZ1bmN0aW9uICh5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEgLSAodGhpcy5jbGlwVW5pdFkgKiB5KTtcbiAgICB9LFxuXG4gICAgZ2V0VmVydGljZXNGcm9tUmVjdDogZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAge1xuICAgICAgICAvLyAtMS4wLCAtMS4wLCAvLyAwID0gYm90dG9tLWxlZnRcbiAgICAgICAgLy8gMS4wLCAtMS4wLCAgLy8gMSA9IGJvdHRvbS1yaWdodFxuICAgICAgICAvLyAtMS4wLCAxLjAsICAvLyAyID0gdG9wLWxlZnRcbiAgICAgICAgLy8gMS4wLCAxLjAgICAgLy8gMyA9IHRvcC1yaWdodFxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAvLyAgYm90dG9tLWxlZnRcbiAgICAgICAgICAgIHRoaXMuY2xpcFgoeCksIHRoaXMuY2xpcFkoeSArIGhlaWdodCksXG5cbiAgICAgICAgICAgIC8vICBib3R0b20tcmlnaHRcbiAgICAgICAgICAgIHRoaXMuY2xpcFgoeCArIHdpZHRoKSwgdGhpcy5jbGlwWSh5ICsgaGVpZ2h0KSxcblxuICAgICAgICAgICAgLy8gIHRvcC1sZWZ0XG4gICAgICAgICAgICB0aGlzLmNsaXBYKHgpLCB0aGlzLmNsaXBZKHkpLFxuXG4gICAgICAgICAgICAvLyAgdG9wLXJpZ2h0XG4gICAgICAgICAgICB0aGlzLmNsaXBYKHggKyB3aWR0aCksIHRoaXMuY2xpcFkoeSlcbiAgICAgICAgXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIHRoZSBiYXNlIHRleHR1cmUgZnJvbSB0aGUgR1BVLCB1c2VmdWwgZm9yIG1hbmFnaW5nIHJlc291cmNlcyBvbiB0aGUgR1BVLlxuICAgICogQSB0ZXh0dXJlIGlzIHN0aWxsIDEwMCUgdXNhYmxlIGFuZCB3aWxsIHNpbXBseSBiZSByZS11cGxvYWRlZCBpZiB0aGVyZSBpcyBhIHNwcml0ZSBvbiBzY3JlZW4gdGhhdCBpcyB1c2luZyBpdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHVubG9hZFRleHR1cmVcbiAgICAqL1xuICAgIHVubG9hZFRleHR1cmU6IGZ1bmN0aW9uICh0ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICB2YXIgZ2xUZXh0dXJlID0gdGV4dHVyZS5fZ2xUZXh0dXJlO1xuXG4gICAgICAgIGlmIChnbCAmJiBnbFRleHR1cmUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLmRlbGV0ZVRleHR1cmUoZ2xUZXh0dXJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHR1cmUuX2dsVGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRleHR1cmUuX2RpcnR5ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vICBUYWtlcyBhIFRleHR1cmVTb3VyY2Ugb2JqZWN0XG4gICAgdXBkYXRlVGV4dHVyZTogZnVuY3Rpb24gKHNvdXJjZSlcbiAgICB7XG4gICAgICAgIGlmIChzb3VyY2UuY29tcHJlc3Npb25BbGdvcml0aG0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvbXByZXNzZWRUZXh0dXJlKHNvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIGlmICghc291cmNlLmdsVGV4dHVyZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlLmdsVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVUZXh0dXJlJywgc291cmNlLmdsVGV4dHVyZUluZGV4KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc291cmNlLmltYWdlLmN1cnJlbnRTcmMpO1xuXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyBzb3VyY2UuZ2xUZXh0dXJlSW5kZXgpO1xuXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHNvdXJjZS5nbFRleHR1cmUpO1xuXG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgc291cmNlLnByZW11bHRpcGxpZWRBbHBoYSk7XG5cbiAgICAgICAgLy8gIFRocm93cyBhIHdhcm5pbmcgaW4gRmlyZWZveDogV2ViR0w6IHRleEltYWdlMkQ6IENob3NlbiBmb3JtYXQvdHlwZSBpbmN1cmVkIGFuIGV4cGVuc2l2ZSByZWZvcm1hdDogMHgxOTA4LzB4MTQwMVxuICAgICAgICAvLyAgQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy85MTA5XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgc291cmNlLmltYWdlKTtcblxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgc291cmNlLnNjYWxlTW9kZSA9PT0gQ09OU1Quc2NhbGVNb2Rlcy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcblxuICAgICAgICBpZiAoc291cmNlLm1pcG1hcCAmJiBzb3VyY2UuaXNQb3dlck9mMilcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHNvdXJjZS5zY2FsZU1vZGUgPT09IENPTlNULnNjYWxlTW9kZXMuTElORUFSID8gZ2wuTElORUFSX01JUE1BUF9MSU5FQVIgOiBnbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNUKTtcbiAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHNvdXJjZS5zY2FsZU1vZGUgPT09IENPTlNULnNjYWxlTW9kZXMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlLmlzUG93ZXJPZjIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvdXJjZS5nbERpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8qXG4gICAgdXBkYXRlQ29tcHJlc3NlZFRleHR1cmU6IGZ1bmN0aW9uICh0ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgaWYgKCF0ZXh0dXJlLmhhc0xvYWRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgdmFyIHRleHR1cmVNZXRhRGF0YSA9IHRleHR1cmUuc291cmNlO1xuXG4gICAgICAgIGlmICghdGV4dHVyZS5fZ2xUZXh0dXJlcylcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dHVyZS5fZ2xUZXh0dXJlcyA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXh0dXJlLnRleHR1cmVJbmRleCk7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5fZ2xUZXh0dXJlcyk7XG5cbiAgICAgICAgZ2wuY29tcHJlc3NlZFRleEltYWdlMkQoXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhRGF0YS5nbEV4dGVuc2lvbkZvcm1hdCxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhRGF0YS53aWR0aCxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhRGF0YS5oZWlnaHQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGV4dHVyZU1ldGFEYXRhLnRleHR1cmVEYXRhXG4gICAgICAgICk7XG5cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIHRleHR1cmUuc2NhbGVNb2RlID09PSBQaGFzZXIuc2NhbGVNb2Rlcy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcblxuICAgICAgICBpZiAodGV4dHVyZS5taXBtYXAgJiYgUGhhc2VyLk1hdGguaXNQb3dlck9mVHdvKHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0KSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHRleHR1cmUuc2NhbGVNb2RlID09PSBQaGFzZXIuc2NhbGVNb2Rlcy5MSU5FQVIgPyBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUiA6IGdsLk5FQVJFU1RfTUlQTUFQX05FQVJFU1QpO1xuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGV4dHVyZS5zY2FsZU1vZGUgPT09IFBoYXNlci5zY2FsZU1vZGVzLkxJTkVBUiA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0ZXh0dXJlLl9wb3dlck9mMilcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dHVyZS5fZGlydHkgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgICovXG5cbiAgICAvLyAgQmxlbmQgTW9kZSBNYW5hZ2VyXG5cbiAgICBzZXRCbGVuZE1vZGU6IGZ1bmN0aW9uIChuZXdCbGVuZE1vZGUpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmxlbmRNb2RlID09PSBuZXdCbGVuZE1vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGJsZW5kTW9kZVdlYkdMID0gdGhpcy5ibGVuZE1vZGVzW25ld0JsZW5kTW9kZV07XG5cbiAgICAgICAgaWYgKGJsZW5kTW9kZVdlYkdMKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSBuZXdCbGVuZE1vZGU7XG4gICAgXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyhibGVuZE1vZGVXZWJHTFswXSwgYmxlbmRNb2RlV2ViR0xbMV0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyAgV2ViR0wgTWFzayBNYW5hZ2VyXG5cbiAgICBwdXNoTWFzazogZnVuY3Rpb24gKG1hc2tEYXRhKVxuICAgIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICBpZiAobWFza0RhdGEuZGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFBJWEkuV2ViR0xHcmFwaGljcy51cGRhdGVHcmFwaGljcyhtYXNrRGF0YSwgZ2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hc2tEYXRhLl93ZWJHTCA9PT0gdW5kZWZpbmVkIHx8IG1hc2tEYXRhLl93ZWJHTC5kYXRhID09PSB1bmRlZmluZWQgfHwgbWFza0RhdGEuX3dlYkdMLmRhdGEubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0ZW5jaWxNYW5hZ2VyLnB1c2hTdGVuY2lsKG1hc2tEYXRhLCBtYXNrRGF0YS5fd2ViR0wuZGF0YVswXSk7XG4gICAgfSxcblxuICAgIHBvcE1hc2s6IGZ1bmN0aW9uIChtYXNrRGF0YSlcbiAgICB7XG4gICAgICAgIGlmIChtYXNrRGF0YS5fd2ViR0wgPT09IHVuZGVmaW5lZCB8fCBtYXNrRGF0YS5fd2ViR0wuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG1hc2tEYXRhLl93ZWJHTC5kYXRhLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGVuY2lsTWFuYWdlci5wb3BTdGVuY2lsKG1hc2tEYXRhLCBtYXNrRGF0YS5fd2ViR0wuZGF0YVswXSk7XG4gICAgfSxcblxuICAgIC8vICBTaGFkZXIgVXRpbHNcblxuICAgIC8vICBQSVhJLkNvbXBpbGVWZXJ0ZXhTaGFkZXJcbiAgICBjb21waWxlVmVydGV4U2hhZGVyOiBmdW5jdGlvbiAoc3JjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZVNoYWRlcihzcmMsIHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgfSxcblxuICAgIC8vICBQSVhJLkNvbXBpbGVGcmFnbWVudFNoYWRlclxuICAgIGNvbXBpbGVGcmFnbWVudFNoYWRlcjogZnVuY3Rpb24gKHNyYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVTaGFkZXIoc3JjLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgfSxcblxuICAgIC8vICBQSVhJLl9Db21waWxlU2hhZGVyXG4gICAgY29tcGlsZVNoYWRlcjogZnVuY3Rpb24gKHNyYywgdHlwZSlcbiAgICB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYyA9IHNyYy5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzcmMpO1xuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgICBpZiAoIXRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcbiAgICB9LFxuXG4gICAgLy8gIFBJWEkuY29tcGlsZVByb2dyYW1cbiAgICBjb21waWxlUHJvZ3JhbTogZnVuY3Rpb24gKHZlcnRleFNyYywgZnJhZ21lbnRTcmMpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuY29tcGlsZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U3JjKTtcbiAgICAgICAgdmFyIHZlcnRleFNoYWRlciA9IHRoaXMuY29tcGlsZVZlcnRleFNoYWRlcih2ZXJ0ZXhTcmMpO1xuXG4gICAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGluaXRpYWxpemUgc2hhZGVyczogVmVydGV4ICYgRnJhZ21lbnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlcnRleFNyYy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmcmFnbWVudFNyYy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgICB9LFxuXG4gICAgZGVsZXRlUHJvZ3JhbTogZnVuY3Rpb24gKHByb2dyYW0pXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuXG4gICAgY3JlYXRlRkJPOiBmdW5jdGlvbiAocGFyZW50LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgLy8gICBTdG9yZSBpbiBhIGxvY2FsIGxpc3Qgc28gd2UgY2FuIHVwZGF0ZSBzaXplIGlmIHRoZSBjYW52YXMgc2l6ZSBjaGFuZ2VzP1xuICAgICAgICByZXR1cm4gbmV3IFF1YWRGQk8odGhpcywgcGFyZW50LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNoYWRlck1hbmFnZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJhdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5tYXNrTWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5zaGFkZXJNYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5iYXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMubWFza01hbmFnZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbmRlclNlc3Npb24gPSBudWxsO1xuXG4gICAgICAgIC8vIFBoYXNlci5DYW52YXNQb29sLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViR0xSZW5kZXJlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL1dlYkdMUmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlbmRlcmVyL3dlYmdsL1dlYkdMUmVuZGVyZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQmFzZUJhdGNoID0gcmVxdWlyZSgnLi9CYXNlQmF0Y2gnKTtcblxuLyoqXG4qIFN0YW5kYXJkIEltYWdlIGFuZCBTcHJpdGUgU2hhZGVyLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlJlbmRlcmVyLldlYkdMLkJhdGNoLkltYWdlXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5SZW5kZXJlci5XZWJHTH0gcmVuZGVyZXIgLSBUaGUgV2ViR0wgUmVuZGVyZXIuXG4qL1xudmFyIE11bHRpVGV4dHVyZUJhdGNoID0gZnVuY3Rpb24gKG1hbmFnZXIsIGJhdGNoU2l6ZSlcbntcbiAgICAvLyAgVmVydGV4IERhdGEgU2l6ZSBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyB0b2dldGhlcjpcbiAgICAvL1xuICAgIC8vICBQb3NpdGlvbiAodmVjMikgPSA0ICogMiA9IDggYnl0ZXNcbiAgICAvLyAgVVYgKHZlYzIpID0gNCAqIDIgPSA4IGJ5dGVzXG4gICAgLy8gIFRleHR1cmUgSW5kZXggKGZsb2F0KSA9IDQgYnl0ZXNcbiAgICAvLyAgVGludCBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xuICAgIC8vICBCRyBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xuICAgIC8vXG4gICAgLy8gIFRvdGFsOiAyOCBieXRlcyAocGVyIHZlcnQpICogNCAoNCB2ZXJ0cyBwZXIgcXVhZCkgKD0gMTEyIGJ5dGVzKSAqIG1heFNpemUgKHVzdWFsbHkgMjAwMCkgPSAyMjQga2lsb2J5dGVzIHNlbnQgdG8gdGhlIEdQVSBldmVyeSBmcmFtZVxuXG4gICAgdmFyIHZlcnRTaXplID0gKDQgKiAyKSArICg0ICogMikgKyAoNCkgKyAoNCkgKyAoNCk7XG5cbiAgICBCYXNlQmF0Y2guY2FsbCh0aGlzLCBtYW5hZ2VyLCBiYXRjaFNpemUsIHZlcnRTaXplKTtcblxuICAgIHRoaXMudHlwZSA9IDI7XG5cbiAgICAvLyAgVmlldyBvbiB0aGUgdmVydGljZXMgYXMgYSBGbG9hdDMyQXJyYXlcbiAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyk7XG5cbiAgICAvLyAgVmlldyBvbiB0aGUgdmVydGljZXMgYXMgYSBVaW50MzJBcnJheVxuICAgIHRoaXMuY29sb3JzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmVydGljZXMpO1xuXG4gICAgLy8gIEF0dHJpYnV0ZXMgYW5kIFVuaWZvcm1zIHNwZWNpZmljIHRvIHRoaXMgQmF0Y2ggU2hhZGVyXG5cbiAgICAvLyAgQHR5cGUge0dMaW50fVxuICAgIHRoaXMuYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgLy8gIEB0eXBlIHtHTGludH1cbiAgICB0aGlzLmFUZXh0dXJlQ29vcmQ7XG5cbiAgICAvLyAgQHR5cGUge0dMaW50fVxuICAgIHRoaXMuYVRleHR1cmVJbmRleDtcblxuICAgIC8vICBAdHlwZSB7R0xpbnR9XG4gICAgdGhpcy5hVGludENvbG9yO1xuXG4gICAgLy8gIEB0eXBlIHtHTGludH1cbiAgICB0aGlzLmFCZ0NvbG9yO1xuXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cbiAgICB0aGlzLnVTYW1wbGVyO1xuXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cbiAgICB0aGlzLnByb2plY3Rpb25WZWN0b3I7XG5cbiAgICAvLyAgQHR5cGUge1dlYkdMVW5pZm9ybUxvY2F0aW9ufVxuICAgIHRoaXMub2Zmc2V0VmVjdG9yO1xufTtcblxuTXVsdGlUZXh0dXJlQmF0Y2gucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQmF0Y2gucHJvdG90eXBlKTtcblxuTXVsdGlUZXh0dXJlQmF0Y2gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTXVsdGlUZXh0dXJlQmF0Y2g7XG5cbk11bHRpVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgLy8gIE91ciBzdGF0aWMgaW5kZXggYnVmZmVyLCBjYWxjdWxhdGVkIG9uY2UgYXQgdGhlIHN0YXJ0IG9mIG91ciBnYW1lXG5cbiAgICAvLyAgVGhpcyBjb250YWlucyB0aGUgaW5kaWNlcyBkYXRhIGZvciB0aGUgcXVhZHMuXG4gICAgLy9cbiAgICAvLyAgQSBxdWFkIGlzIG1hZGUgdXAgb2YgMiB0cmlhbmdsZXMgKEEgYW5kIEIgaW4gdGhlIGltYWdlIGJlbG93KVxuICAgIC8vXG4gICAgLy8gIDAgPSBUb3AgTGVmdFxuICAgIC8vICAxID0gVG9wIFJpZ2h0XG4gICAgLy8gIDIgPSBCb3R0b20gUmlnaHRcbiAgICAvLyAgMyA9IEJvdHRvbSBMZWZ0XG4gICAgLy9cbiAgICAvLyAgMC0tLS0xXG4gICAgLy8gIHxcXCAgQXxcbiAgICAvLyAgfCBcXCAgfFxuICAgIC8vICB8ICBcXCB8XG4gICAgLy8gIHwgQiBcXHxcbiAgICAvLyAgfCAgICBcXFxuICAgIC8vICAzLS0tLTJcbiAgICAvL1xuICAgIC8vICBCZWNhdXNlIHRyaWFuZ2xlcyBBIGFuZCBCIHNoYXJlIDIgcG9pbnRzICgwIGFuZCAyKSB0aGUgdmVydGV4IGJ1ZmZlciBvbmx5IHN0b3Jlc1xuICAgIC8vICA0IHNldHMgb2YgZGF0YSAodG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQgYW5kIGJvdHRvbS1yaWdodCksIHdoaWNoIGlzIHdoeVxuICAgIC8vICB0aGUgaW5kaWNlcyBvZmZzZXRzIHVzZXMgdGhlIGogKz0gNCBpdGVyYXRpb24uIEluZGljZXMgYXJyYXkgaGFzIHRvIGNvbnRhaW4gM1xuICAgIC8vICBlbnRyaWVzIGZvciBldmVyeSB0cmlhbmdsZSAoc28gNiBmb3IgZXZlcnkgcXVhZCksIGJ1dCBvdXIgdmVydGV4IGRhdGEgY29tcGFjdHNcbiAgICAvLyAgdGhhdCBkb3duLCBhcyB3ZSBkb24ndCB3YW50IHRvIGZpbGwgaXQgd2l0aCBsb2FkcyBvZiBEVVBMSUNBVEUgZGF0YSwgc28gdGhlXG4gICAgLy8gIGluZGljZXMgYXJyYXkgaXMgYSBsb29rLXVwIHRhYmxlLCB0ZWxsaW5nIFdlYkdMIHdoZXJlIGluIHRoZSB2ZXJ0ZXggYnVmZmVyIHRvIGxvb2tcbiAgICAvLyAgZm9yIHRoYXQgdHJpYW5nbGVzIGluZGljZSBkYXRhLlxuXG4gICAgLy8gIGJhdGNoU2l6ZSAqIHZlcnRTaXplID0gMjAwMCAqIDYgKGJlY2F1c2Ugd2Ugc3RvcmUgNiBwaWVjZXMgb2YgdmVydGV4IGRhdGEgcGVyIHRyaWFuZ2xlKVxuICAgIC8vICBhbmQgdXAgdG8gYSBtYXhpbXVtIG9mIDIwMDAgZW50cmllcyBpbiB0aGUgYmF0Y2hcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8ICh0aGlzLm1heFNpemUgKiB0aGlzLnZlcnRTaXplKTsgaSArPSA2LCBqICs9IDQpXG4gICAge1xuICAgICAgICAvLyAgVHJpYW5nbGUgMVxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDBdID0gaiArIDA7ICAgIC8vICBUb3AgTGVmdFxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDFdID0gaiArIDE7ICAgIC8vICBUb3AgUmlnaHRcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAyXSA9IGogKyAyOyAgICAvLyAgQm90dG9tIFJpZ2h0XG5cbiAgICAgICAgLy8gIFRyaWFuZ2xlIDJcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAzXSA9IGogKyAwOyAgICAvLyAgVG9wIExlZnRcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA0XSA9IGogKyAyOyAgICAvLyAgQm90dG9tIFJpZ2h0XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNV0gPSBqICsgMzsgICAgLy8gIEJvdHRvbSBMZWZ0XG4gICAgfVxuXG4gICAgLy8gIENyZWF0ZSBpbmRpY2VzIGJ1ZmZlclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8vICBCaW5kIGl0XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLmluZGljZXMgYXJyYXkpXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvLyAgQ3JlYXRlIFZlcnRleCBEYXRhIGJ1ZmZlclxuICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICAvLyAgQmluZCBpdFxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG5cbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLnZlcnRpY2VzIGFycmF5KVxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRpY2VzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgLy8gIENyZWF0ZSB0aGUgc2hhZGVyXG5cbiAgICB0aGlzLnZlcnRleFNyYyA9IFtcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxuICAgICAgICAnYXR0cmlidXRlIGZsb2F0IGFUZXh0dXJlSW5kZXg7JyxcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFUaW50Q29sb3I7JyxcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFCZ0NvbG9yOycsXG5cbiAgICAgICAgJ3VuaWZvcm0gdmVjMiBwcm9qZWN0aW9uVmVjdG9yOycsXG4gICAgICAgICd1bmlmb3JtIHZlYzIgb2Zmc2V0VmVjdG9yOycsXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdlRpbnRDb2xvcjsnLFxuICAgICAgICAndmFyeWluZyB2ZWM0IHZCZ0NvbG9yOycsXG4gICAgICAgICd2YXJ5aW5nIGZsb2F0IHZUZXh0dXJlSW5kZXg7JyxcblxuICAgICAgICAnY29uc3QgdmVjMiBjZW50ZXIgPSB2ZWMyKC0xLjAsIDEuMCk7JyxcblxuICAgICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxuICAgICAgICAnICAgaWYgKGFUZXh0dXJlSW5kZXggPiAwLjApIGdsX1Bvc2l0aW9uID0gdmVjNCgwLjApOycsXG4gICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKChhVmVydGV4UG9zaXRpb24gKyBvZmZzZXRWZWN0b3IpIC8gcHJvamVjdGlvblZlY3RvcikgKyBjZW50ZXIsIDAuMCwgMS4wKTsnLFxuICAgICAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JywgLy8gcGFzcyB0aGUgdGV4dHVyZSBjb29yZGluYXRlIHRvIHRoZSBmcmFnbWVudCBzaGFkZXIsIHRoZSBHUFUgd2lsbCBpbnRlcnBvbGF0ZSB0aGUgcG9pbnRzXG4gICAgICAgICcgICB2VGludENvbG9yID0gdmVjNChhVGludENvbG9yLnJnYiAqIGFUaW50Q29sb3IuYSwgYVRpbnRDb2xvci5hKTsnLFxuICAgICAgICAnICAgdkJnQ29sb3IgPSBhQmdDb2xvcjsnLFxuICAgICAgICAnICAgdlRleHR1cmVJbmRleCA9IGFUZXh0dXJlSW5kZXg7JyxcbiAgICAgICAgJ30nXG4gICAgXTtcblxuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBbXG4gICAgICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLCAvLyB0aGUgdGV4dHVyZSBjb29yZHMgcGFzc2VkIGluIGZyb20gdGhlIHZlcnRleCBzaGFkZXJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2VGludENvbG9yOycsIC8vICB0aGUgY29sb3IgdmFsdWUgcGFzc2VkIGluIGZyb20gdGhlIHZlcnRleCBzaGFkZXIgKHRleHR1cmUgY29sb3IgKyBhbHBoYSArIHRpbnQpXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdkJnQ29sb3I7JywgLy8gIHRoZSBiZyBjb2xvciB2YWx1ZSBwYXNzZWQgaW4gZnJvbSB0aGUgdmVydGV4IHNoYWRlclxuICAgICAgICAndmFyeWluZyBmbG9hdCB2VGV4dHVyZUluZGV4OycsXG5cbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyQXJyYXlbJyArIHRoaXMucmVuZGVyZXIubWF4VGV4dHVyZXMgKyAnXTsnLFxuXG4gICAgICAgICdjb25zdCB2ZWM0IFBJTksgPSB2ZWM0KDEuMCwgMC4wLCAxLjAsIDEuMCk7JyxcblxuICAgICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxuICAgICAgICAnICAgdmVjNCBwaXhlbDsnLFxuXG4gICAgICAgICcgICBpZiAodlRleHR1cmVJbmRleCA9PSAwLjApJyxcbiAgICAgICAgJyAgIHsnLFxuICAgICAgICAnICAgICAgIHBpeGVsID0gdGV4dHVyZTJEKHVTYW1wbGVyQXJyYXlbMF0sIHZUZXh0dXJlQ29vcmQpOycsXG4gICAgICAgICcgICB9JyxcbiAgICAgICAgJy8vIElGRUxTRUJMT0NLJywgLy8gc3BlY2lhbCB0YWcgdXNlZCB0byBpbnNlcnQgdGhlIG11bHRpLXRleHR1cmUgaWYgZWxzZSBibG9jay4gRG8gbm90IGVkaXQgb3IgcmVtb3ZlLlxuICAgICAgICAnICAgZWxzZScsXG4gICAgICAgICcgICB7JyxcbiAgICAgICAgJyAgICAgICBwaXhlbCA9IFBJTks7JyxcbiAgICAgICAgJyAgIH0nLFxuXG4gICAgICAgICcgICBwaXhlbCAqPSB2VGludENvbG9yOycsXG4gICAgICAgIC8vICcgICBpZiAocGl4ZWwuYSA9PSAwLjApIHBpeGVsID0gdkJnQ29sb3I7JywgLy8gaWYgdGV4dHVyZSBhbHBoYSBpcyB6ZXJvLCB1c2UgdGhlIGJnIGNvbG9yXG4gICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSBwaXhlbDsnLFxuICAgICAgICAnfSdcbiAgICBdO1xuXG4gICAgdmFyIGJsb2NrID0gW107XG4gICAgdmFyIHNwbGljZVBvaW50ID0gMDtcblxuICAgIC8vICBCdWlsZCB0aGUgZWxzZSBpZiBibG9ja1xuICAgIGZvciAodmFyIHQgPSAxOyB0IDwgdGhpcy5yZW5kZXJlci5tYXhUZXh0dXJlczsgdCsrKVxuICAgIHtcbiAgICAgICAgYmxvY2sucHVzaCgnICAgZWxzZSBpZiAodlRleHR1cmVJbmRleCA9PSAnICsgdCArICcuMCknKTtcbiAgICAgICAgYmxvY2sucHVzaCgnICAgeycpO1xuICAgICAgICBibG9jay5wdXNoKCcgICAgICAgcGl4ZWwgPSB0ZXh0dXJlMkQodVNhbXBsZXJBcnJheVsnICsgdCArICddLCB2VGV4dHVyZUNvb3JkKTsnKTtcbiAgICAgICAgYmxvY2sucHVzaCgnICAgfScpO1xuICAgIH1cblxuICAgIC8vICBQYXJzZSB0aGUgZnJhZ21lbnQgc3JjIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZnJhZ21lbnRTcmMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAodGhpcy5mcmFnbWVudFNyY1tpXSA9PT0gJy8vIElGRUxTRUJMT0NLJylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFN0b3JlIHRoZSBpbmRleCBhdCB3aGljaCB3ZSBuZWVkIHRvIGluc2VydCB0aGUgaWYgZWxzZSBibG9ja1xuICAgICAgICAgICAgc3BsaWNlUG9pbnQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgU3RvcmUgdGhlIGVuZCBwYXJ0IG9mIHRoZSBzaGFkZXJcbiAgICB2YXIgc2hhZGVyRW5kID0gdGhpcy5mcmFnbWVudFNyYy5zcGxpY2Uoc3BsaWNlUG9pbnQpO1xuXG4gICAgLy8gIFN0aXRjaCBpdCBiYWNrIHRvZ2V0aGVyIGFnYWluXG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IHRoaXMuZnJhZ21lbnRTcmMuY29uY2F0KGJsb2NrLCBzaGFkZXJFbmQpO1xuXG4gICAgLy8gIENvbXBpbGUgdGhlIFNoYWRlclxuICAgIHRoaXMucHJvZ3JhbSA9IHRoaXMucmVuZGVyZXIuY29tcGlsZVByb2dyYW0odGhpcy52ZXJ0ZXhTcmMsIHRoaXMuZnJhZ21lbnRTcmMpO1xuXG4gICAgLy8gIEJpbmQgZW1wdHkgbXVsdGktdGV4dHVyZXMgdG8gYXZvaWQgV2ViR0wgc3BhbVxuXG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuXG4gICAgdmFyIGluZGljZXMgPSBbXTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVyLm1heFRleHR1cmVzOyBpKyspXG4gICAge1xuICAgICAgICBpbmRpY2VzLnB1c2goaSk7XG4gICAgfVxuXG4gICAgdGhpcy51U2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd1U2FtcGxlckFycmF5WzBdJyk7XG5cbiAgICBnbC51bmlmb3JtMWl2KHRoaXMudVNhbXBsZXIsIGluZGljZXMpO1xufTtcblxuTXVsdGlUZXh0dXJlQmF0Y2gucHJvdG90eXBlLmJpbmRTaGFkZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ011bHRpVGV4dHVyZSBiaW5kU2hhZGVyJyk7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIHZhciB2ZXJ0U2l6ZSA9IHRoaXMudmVydFNpemU7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgLy8gIEdldCBhbmQgc3RvcmUgdGhlIGF0dHJpYnV0ZXNcblxuICAgIC8vICB2ZXJ0ZXggcG9zaXRpb25cbiAgICB0aGlzLmFWZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAvLyAgdGV4dHVyZSBjb29yZGluYXRlXG4gICAgdGhpcy5hVGV4dHVyZUNvb3JkID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmQnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFUZXh0dXJlQ29vcmQpO1xuXG4gICAgLy8gIHRleHR1cmUgaW5kZXhcbiAgICB0aGlzLmFUZXh0dXJlSW5kZXggPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVRleHR1cmVJbmRleCcpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRleHR1cmVJbmRleCk7XG5cbiAgICAvLyAgdGludCAvIHBpeGVsIGNvbG9yXG4gICAgdGhpcy5hVGludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUaW50Q29sb3InKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFUaW50Q29sb3IpO1xuXG4gICAgLy8gIGJhY2tncm91bmQgcGl4ZWwgY29sb3JcbiAgICB0aGlzLmFCZ0NvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FCZ0NvbG9yJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hQmdDb2xvcik7XG5cbiAgICAvLyAgVGhlIHByb2plY3Rpb24gdmVjdG9yIChtaWRkbGUgb2YgdGhlIGdhbWUgd29ybGQpXG4gICAgdGhpcy5wcm9qZWN0aW9uVmVjdG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdwcm9qZWN0aW9uVmVjdG9yJyk7XG5cbiAgICAvLyAgVGhlIG9mZnNldCB2ZWN0b3IgKGNhbWVyYSBzaGFrZSlcbiAgICB0aGlzLm9mZnNldFZlY3RvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnb2Zmc2V0VmVjdG9yJyk7XG5cbiAgICAvLyAgVGhlIFRleHR1cmUgU2FtcGxlclxuICAgIHRoaXMudVNhbXBsZXIgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndVNhbXBsZXJBcnJheVswXScpO1xuXG4gICAgLy8gIFNldCB0aGUgcHJvamVjdGlvbiB2ZWN0b3IuIERlZmF1bHRzIHRvIHRoZSBtaWRkbGUgb2YgdGhlIEdhbWUgV29ybGQsIG9uIG5lZ2F0aXZlIHkuXG4gICAgLy8gIEkuZS4gaWYgdGhlIHdvcmxkIGlzIDgwMHg2MDAgdGhlbiB0aGUgcHJvamVjdGlvbiB2ZWN0b3IgaXMgNDAwIHggLTMwMFxuICAgIGdsLnVuaWZvcm0yZih0aGlzLnByb2plY3Rpb25WZWN0b3IsIHRoaXMucmVuZGVyZXIucHJvamVjdGlvbi54LCB0aGlzLnJlbmRlcmVyLnByb2plY3Rpb24ueSk7XG5cbiAgICAvLyAgU2V0IHRoZSBvZmZzZXQgdmVjdG9yLlxuICAgIGdsLnVuaWZvcm0yZih0aGlzLm9mZnNldFZlY3RvciwgdGhpcy5yZW5kZXJlci5vZmZzZXQueCwgdGhpcy5yZW5kZXJlci5vZmZzZXQueSk7XG5cbiAgICAvLyAgVGhlIFZlcnRleCBQb3NpdGlvbiAoeC95KVxuICAgIC8vICAyIEZMT0FUUywgMiAqIDQgPSA4IGJ5dGVzLiBJbmRleCBwb3M6IDAgdG8gN1xuICAgIC8vICBmaW5hbCBhcmd1bWVudCA9IHRoZSBvZmZzZXQgd2l0aGluIHRoZSB2ZXJ0ZXggaW5wdXRcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIHZlcnRTaXplLCAwKTtcblxuICAgIC8vICBUaGUgVGV4dHVyZSBDb29yZGluYXRlICh1dngvdXZ5KVxuICAgIC8vICAyIEZMT0FUUywgMiAqIDQgPSA4IGJ5dGVzLiBJbmRleCBwb3M6IDggdG8gMTVcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCB2ZXJ0U2l6ZSwgOCk7XG5cbiAgICAvLyAgVGV4dHVyZSBJbmRleFxuICAgIC8vICAxIEZMT0FULCA0IGJ5dGVzLiBJbmRleCBwb3M6IDE2IHRvIDE5XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUZXh0dXJlSW5kZXgsIDEsIGdsLkZMT0FULCBmYWxzZSwgdmVydFNpemUsIDE2KTtcblxuICAgIC8vICBUaW50IGNvbG9yXG4gICAgLy8gIDQgVU5TSUdORUQgQllURVMsIDQgYnl0ZXMuIEluZGV4IHBvczogMjAgdG8gMjNcbiAgICAvLyAgQXR0cmlidXRlcyB3aWxsIGJlIGludGVycHJldGVkIGFzIHVuc2lnbmVkIGJ5dGVzIGFuZCBub3JtYWxpemVkXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUaW50Q29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHZlcnRTaXplLCAyMCk7XG5cbiAgICAvLyAgQmFja2dyb3VuZCBDb2xvclxuICAgIC8vICA0IFVOU0lHTkVEIEJZVEVTLCA0IGJ5dGVzLiBJbmRleCBwb3M6IDI0IHRvIDI3XG4gICAgLy8gIEF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hQmdDb2xvciwgNCwgZ2wuVU5TSUdORURfQllURSwgdHJ1ZSwgdmVydFNpemUsIDI0KTtcbn07XG5cbk11bHRpVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVydHMsIHV2cywgdGV4dHVyZUluZGV4LCBhbHBoYSwgdGludENvbG9ycywgYmdDb2xvcnMpXG57XG4gICAgLy8gIFRoZXNlIGFyZSBUeXBlZEFycmF5IFZpZXdzIGludG8gdGhlIHZlcnRpY2VzIEFycmF5QnVmZmVyXG4gICAgdmFyIGNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgIHZhciBwb3NpdGlvbnMgPSB0aGlzLnBvc2l0aW9ucztcblxuICAgIHZhciBpID0gdGhpcy5faTtcblxuICAgIC8vICBUb3AgTGVmdCB2ZXJ0ICh4eSwgdXYsIGNvbG9yKVxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueDA7XG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MDtcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy54MDtcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy55MDtcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcbiAgICBjb2xvcnNbaSsrXSA9IHRpbnRDb2xvcnMudG9wTGVmdCArIGFscGhhO1xuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMudG9wTGVmdDtcblxuICAgIC8vICBUb3AgUmlnaHQgdmVydCAoeHksIHV2LCBjb2xvcilcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngxO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTE7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDE7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTE7XG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLnRvcFJpZ2h0ICsgYWxwaGE7XG4gICAgY29sb3JzW2krK10gPSBiZ0NvbG9ycy50b3BSaWdodDtcblxuICAgIC8vICBCb3R0b20gUmlnaHQgdmVydCAoeHksIHV2LCBjb2xvcilcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngyO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTI7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDI7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTI7XG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLmJvdHRvbVJpZ2h0ICsgYWxwaGE7XG4gICAgY29sb3JzW2krK10gPSBiZ0NvbG9ycy5ib3R0b21SaWdodDtcblxuICAgIC8vICBCb3R0b20gTGVmdCB2ZXJ0ICh4eSwgdXYsIGNvbG9yKVxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueDM7XG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MztcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy54MztcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy55MztcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcbiAgICBjb2xvcnNbaSsrXSA9IHRpbnRDb2xvcnMuYm90dG9tTGVmdCArIGFscGhhO1xuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMuYm90dG9tTGVmdDtcblxuICAgIHRoaXMuX2kgPSBpO1xuXG4gICAgdGhpcy5zaXplKys7XG59O1xuXG5NdWx0aVRleHR1cmVCYXRjaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy52ZXJ0aWNlcyA9IG51bGw7XG4gICAgdGhpcy5pbmRpY2VzID0gbnVsbDtcbiAgICB0aGlzLnZpZXcgPSBudWxsO1xuXG4gICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlUZXh0dXJlQmF0Y2g7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL2JhdGNoZXMvTXVsdGlUZXh0dXJlQmF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlbmRlcmVyL3dlYmdsL2JhdGNoZXMvTXVsdGlUZXh0dXJlQmF0Y2guanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQmFzZUJhdGNoID0gcmVxdWlyZSgnLi9CYXNlQmF0Y2gnKTtcblxuLyoqXG4qIFN0YW5kYXJkIEltYWdlIGFuZCBTcHJpdGUgU2hhZGVyLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlJlbmRlcmVyLldlYkdMLkJhdGNoLlNpbmdsZVRleHR1cmVcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLlJlbmRlcmVyLldlYkdMfSByZW5kZXJlciAtIFRoZSBXZWJHTCBSZW5kZXJlci5cbiovXG52YXIgU2luZ2xlVGV4dHVyZUJhdGNoID0gZnVuY3Rpb24gKG1hbmFnZXIsIGJhdGNoU2l6ZSlcbntcbiAgICAvLyAgVmVydGV4IERhdGEgU2l6ZSBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyB0b2dldGhlcjpcbiAgICAvL1xuICAgIC8vICBQb3NpdGlvbiAodmVjMikgPSA0ICogMiA9IDggYnl0ZXNcbiAgICAvLyAgVVYgKHZlYzIpID0gNCAqIDIgPSA4IGJ5dGVzXG4gICAgLy8gIFRleHR1cmUgSW5kZXggKGZsb2F0KSA9IDQgYnl0ZXNcbiAgICAvLyAgVGludCBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xuICAgIC8vICBCRyBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xuICAgIC8vXG4gICAgLy8gIFRvdGFsOiAyOCBieXRlcyAocGVyIHZlcnQpICogNCAoNCB2ZXJ0cyBwZXIgcXVhZCkgKD0gMTEyIGJ5dGVzKSAqIG1heFNpemUgKHVzdWFsbHkgMjAwMCkgPSAyMjQga2lsb2J5dGVzIHNlbnQgdG8gdGhlIEdQVSBldmVyeSBmcmFtZVxuXG4gICAgdmFyIHZlcnRTaXplID0gKDQgKiAyKSArICg0ICogMikgKyAoNCkgKyAoNCkgKyAoNCk7XG5cbiAgICBCYXNlQmF0Y2guY2FsbCh0aGlzLCBtYW5hZ2VyLCBiYXRjaFNpemUsIHZlcnRTaXplKTtcblxuICAgIHRoaXMudHlwZSA9IDE7XG5cbiAgICAvLyAgVmlldyBvbiB0aGUgdmVydGljZXMgYXMgYSBGbG9hdDMyQXJyYXlcbiAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyk7XG5cbiAgICAvLyAgVmlldyBvbiB0aGUgdmVydGljZXMgYXMgYSBVaW50MzJBcnJheVxuICAgIHRoaXMuY29sb3JzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmVydGljZXMpO1xuXG4gICAgLy8gIEF0dHJpYnV0ZXMgYW5kIFVuaWZvcm1zIHNwZWNpZmljIHRvIHRoaXMgQmF0Y2ggU2hhZGVyXG5cbiAgICAvLyAgQHR5cGUge0dMaW50fVxuICAgIHRoaXMuYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgLy8gIEB0eXBlIHtHTGludH1cbiAgICB0aGlzLmFUZXh0dXJlQ29vcmQ7XG5cbiAgICAvLyAgQHR5cGUge0dMaW50fVxuICAgIHRoaXMuYVRleHR1cmVJbmRleDtcblxuICAgIC8vICBAdHlwZSB7R0xpbnR9XG4gICAgdGhpcy5hVGludENvbG9yO1xuXG4gICAgLy8gIEB0eXBlIHtHTGludH1cbiAgICB0aGlzLmFCZ0NvbG9yO1xuXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cbiAgICB0aGlzLnVTYW1wbGVyO1xuXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cbiAgICB0aGlzLnByb2plY3Rpb25WZWN0b3I7XG5cbiAgICAvLyAgQHR5cGUge1dlYkdMVW5pZm9ybUxvY2F0aW9ufVxuICAgIHRoaXMub2Zmc2V0VmVjdG9yO1xufTtcblxuU2luZ2xlVGV4dHVyZUJhdGNoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUJhdGNoLnByb3RvdHlwZSk7XG5cblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaW5nbGVUZXh0dXJlQmF0Y2g7XG5cblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICB0aGlzLnZlcnRleFNyYyA9IFtcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxuICAgICAgICAnYXR0cmlidXRlIGZsb2F0IGFUZXh0dXJlSW5kZXg7JyxcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFUaW50Q29sb3I7JyxcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFCZ0NvbG9yOycsXG5cbiAgICAgICAgJ3VuaWZvcm0gdmVjMiBwcm9qZWN0aW9uVmVjdG9yOycsXG4gICAgICAgICd1bmlmb3JtIHZlYzIgb2Zmc2V0VmVjdG9yOycsXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdlRpbnRDb2xvcjsnLFxuICAgICAgICAndmFyeWluZyB2ZWM0IHZCZ0NvbG9yOycsXG4gICAgICAgICd2YXJ5aW5nIGZsb2F0IHZUZXh0dXJlSW5kZXg7JyxcblxuICAgICAgICAnY29uc3QgdmVjMiBjZW50ZXIgPSB2ZWMyKC0xLjAsIDEuMCk7JyxcblxuICAgICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxuICAgICAgICAnICAgaWYgKGFUZXh0dXJlSW5kZXggPiAwLjApIGdsX1Bvc2l0aW9uID0gdmVjNCgwLjApOycsXG4gICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKChhVmVydGV4UG9zaXRpb24gKyBvZmZzZXRWZWN0b3IpIC8gcHJvamVjdGlvblZlY3RvcikgKyBjZW50ZXIsIDAuMCwgMS4wKTsnLFxuICAgICAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JywgLy8gcGFzcyB0aGUgdGV4dHVyZSBjb29yZGluYXRlIHRvIHRoZSBmcmFnbWVudCBzaGFkZXIsIHRoZSBHUFUgd2lsbCBpbnRlcnBvbGF0ZSB0aGUgcG9pbnRzXG4gICAgICAgICcgICB2VGludENvbG9yID0gdmVjNChhVGludENvbG9yLnJnYiAqIGFUaW50Q29sb3IuYSwgYVRpbnRDb2xvci5hKTsnLCAvLyBwcmUtbXVsdGlwbHkgdGhlIGFscGhhIChhbGwgdGV4dHVyZXMgYXJlIHByZS1tdWx0aXBsaWVkKVxuICAgICAgICAnICAgdkJnQ29sb3IgPSBhQmdDb2xvcjsnLFxuICAgICAgICAnICAgdlRleHR1cmVJbmRleCA9IGFUZXh0dXJlSW5kZXg7JyxcbiAgICAgICAgJ30nXG4gICAgXTtcblxuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBbXG4gICAgICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLCAvLyB0aGUgdGV4dHVyZSBjb29yZHMgcGFzc2VkIGluIGZyb20gdGhlIHZlcnRleCBzaGFkZXJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2VGludENvbG9yOycsIC8vICB0aGUgY29sb3IgdmFsdWUgcGFzc2VkIGluIGZyb20gdGhlIHZlcnRleCBzaGFkZXIgKHRleHR1cmUgY29sb3IgKyBhbHBoYSArIHRpbnQpXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdkJnQ29sb3I7JywgLy8gIHRoZSBiZyBjb2xvciB2YWx1ZSBwYXNzZWQgaW4gZnJvbSB0aGUgdmVydGV4IHNoYWRlclxuICAgICAgICAndmFyeWluZyBmbG9hdCB2VGV4dHVyZUluZGV4OycsXG5cbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsIC8vIG91ciB0ZXh0dXJlXG5cbiAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcbiAgICAgICAgJyAgIHZlYzQgcGl4ZWwgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpICogdlRpbnRDb2xvcjsnLCAvLyBnZXQgdGhlIGNvbG9yIGZyb20gdGhlIHRleHR1cmVcbiAgICAgICAgLy8gJyAgIGlmIChwaXhlbC5hID09IDAuMCkgcGl4ZWwgPSB2QmdDb2xvcjsnLCAvLyBpZiB0ZXh0dXJlIGFscGhhIGlzIHplcm8sIHVzZSB0aGUgYmcgY29sb3JcbiAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHBpeGVsOycsXG4gICAgICAgICd9J1xuICAgIF07XG5cbiAgICAvLyAgQ29tcGlsZSB0aGUgU2hhZGVyXG4gICAgdGhpcy5wcm9ncmFtID0gdGhpcy5yZW5kZXJlci5jb21waWxlUHJvZ3JhbSh0aGlzLnZlcnRleFNyYywgdGhpcy5mcmFnbWVudFNyYyk7XG5cbiAgICAvLyAgT3VyIHN0YXRpYyBpbmRleCBidWZmZXIsIGNhbGN1bGF0ZWQgb25jZSBhdCB0aGUgc3RhcnQgb2Ygb3VyIGdhbWVcblxuICAgIC8vICBUaGlzIGNvbnRhaW5zIHRoZSBpbmRpY2VzIGRhdGEgZm9yIHRoZSBxdWFkcy5cbiAgICAvL1xuICAgIC8vICBBIHF1YWQgaXMgbWFkZSB1cCBvZiAyIHRyaWFuZ2xlcyAoQSBhbmQgQiBpbiB0aGUgaW1hZ2UgYmVsb3cpXG4gICAgLy9cbiAgICAvLyAgMCA9IFRvcCBMZWZ0XG4gICAgLy8gIDEgPSBUb3AgUmlnaHRcbiAgICAvLyAgMiA9IEJvdHRvbSBSaWdodFxuICAgIC8vICAzID0gQm90dG9tIExlZnRcbiAgICAvL1xuICAgIC8vICAwLS0tLTFcbiAgICAvLyAgfFxcICBBfFxuICAgIC8vICB8IFxcICB8XG4gICAgLy8gIHwgIFxcIHxcbiAgICAvLyAgfCBCIFxcfFxuICAgIC8vICB8ICAgIFxcXG4gICAgLy8gIDMtLS0tMlxuICAgIC8vXG4gICAgLy8gIEJlY2F1c2UgdHJpYW5nbGVzIEEgYW5kIEIgc2hhcmUgMiBwb2ludHMgKDAgYW5kIDIpIHRoZSB2ZXJ0ZXggYnVmZmVyIG9ubHkgc3RvcmVzXG4gICAgLy8gIDQgc2V0cyBvZiBkYXRhICh0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCBhbmQgYm90dG9tLXJpZ2h0KSwgd2hpY2ggaXMgd2h5XG4gICAgLy8gIHRoZSBpbmRpY2VzIG9mZnNldHMgdXNlcyB0aGUgaiArPSA0IGl0ZXJhdGlvbi4gSW5kaWNlcyBhcnJheSBoYXMgdG8gY29udGFpbiAzXG4gICAgLy8gIGVudHJpZXMgZm9yIGV2ZXJ5IHRyaWFuZ2xlIChzbyA2IGZvciBldmVyeSBxdWFkKSwgYnV0IG91ciB2ZXJ0ZXggZGF0YSBjb21wYWN0c1xuICAgIC8vICB0aGF0IGRvd24sIGFzIHdlIGRvbid0IHdhbnQgdG8gZmlsbCBpdCB3aXRoIGxvYWRzIG9mIERVUExJQ0FURSBkYXRhLCBzbyB0aGVcbiAgICAvLyAgaW5kaWNlcyBhcnJheSBpcyBhIGxvb2stdXAgdGFibGUsIHRlbGxpbmcgV2ViR0wgd2hlcmUgaW4gdGhlIHZlcnRleCBidWZmZXIgdG8gbG9va1xuICAgIC8vICBmb3IgdGhhdCB0cmlhbmdsZXMgaW5kaWNlIGRhdGEuXG5cbiAgICAvLyAgYmF0Y2hTaXplICogdmVydFNpemUgPSAyMDAwICogNiAoYmVjYXVzZSB3ZSBzdG9yZSA2IHBpZWNlcyBvZiB2ZXJ0ZXggZGF0YSBwZXIgdHJpYW5nbGUpXG4gICAgLy8gIGFuZCB1cCB0byBhIG1heGltdW0gb2YgMjAwMCBlbnRyaWVzIGluIHRoZSBiYXRjaFxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgKHRoaXMubWF4U2l6ZSAqIHRoaXMudmVydFNpemUpOyBpICs9IDYsIGogKz0gNClcbiAgICB7XG4gICAgICAgIC8vICBUcmlhbmdsZSAxXG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMF0gPSBqICsgMDsgICAgLy8gIFRvcCBMZWZ0XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMV0gPSBqICsgMTsgICAgLy8gIFRvcCBSaWdodFxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDJdID0gaiArIDI7ICAgIC8vICBCb3R0b20gUmlnaHRcblxuICAgICAgICAvLyAgVHJpYW5nbGUgMlxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDNdID0gaiArIDA7ICAgIC8vICBUb3AgTGVmdFxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDRdID0gaiArIDI7ICAgIC8vICBCb3R0b20gUmlnaHRcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA1XSA9IGogKyAzOyAgICAvLyAgQm90dG9tIExlZnRcbiAgICB9XG5cbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgLy8gIENyZWF0ZSBpbmRpY2VzIGJ1ZmZlclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8vICBCaW5kIGl0XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLmluZGljZXMgYXJyYXkpXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvLyAgQ3JlYXRlIFZlcnRleCBEYXRhIGJ1ZmZlclxuICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICAvLyAgQmluZCBpdFxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG5cbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLnZlcnRpY2VzIGFycmF5KVxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRpY2VzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG59O1xuXG5TaW5nbGVUZXh0dXJlQmF0Y2gucHJvdG90eXBlLmJpbmRTaGFkZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgdmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG4gICAgdmFyIHZlcnRTaXplID0gdGhpcy52ZXJ0U2l6ZTtcblxuICAgIC8vICBTZXQgU2hhZGVyXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICAvLyAgR2V0IGFuZCBzdG9yZSB0aGUgYXR0cmlidXRlc1xuXG4gICAgLy8gIHZlcnRleCBwb3NpdGlvblxuICAgIHRoaXMuYVZlcnRleFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVZlcnRleFBvc2l0aW9uKTtcblxuICAgIC8vICB0ZXh0dXJlIGNvb3JkaW5hdGVcbiAgICB0aGlzLmFUZXh0dXJlQ29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVRleHR1cmVDb29yZCcpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRleHR1cmVDb29yZCk7XG5cbiAgICAvLyAgdGV4dHVyZSBpbmRleFxuICAgIHRoaXMuYVRleHR1cmVJbmRleCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVGV4dHVyZUluZGV4Jyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUluZGV4KTtcblxuICAgIC8vICB0aW50IC8gcGl4ZWwgY29sb3JcbiAgICB0aGlzLmFUaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVRpbnRDb2xvcicpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRpbnRDb2xvcik7XG5cbiAgICAvLyAgYmFja2dyb3VuZCBwaXhlbCBjb2xvclxuICAgIHRoaXMuYUJnQ29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYUJnQ29sb3InKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFCZ0NvbG9yKTtcblxuICAgIC8vICBUaGUgcHJvamVjdGlvbiB2ZWN0b3IgKG1pZGRsZSBvZiB0aGUgZ2FtZSB3b3JsZClcbiAgICB0aGlzLnByb2plY3Rpb25WZWN0b3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3Byb2plY3Rpb25WZWN0b3InKTtcblxuICAgIC8vICBUaGUgb2Zmc2V0IHZlY3RvciAoY2FtZXJhIHNoYWtlKVxuICAgIHRoaXMub2Zmc2V0VmVjdG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdvZmZzZXRWZWN0b3InKTtcblxuICAgIC8vICBUaGUgVGV4dHVyZSBTYW1wbGVyXG4gICAgdGhpcy51U2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd1U2FtcGxlcicpO1xuXG4gICAgLy8gIFNldCB0aGUgcHJvamVjdGlvbiB2ZWN0b3IuIERlZmF1bHRzIHRvIHRoZSBtaWRkbGUgb2YgdGhlIEdhbWUgV29ybGQsIG9uIG5lZ2F0aXZlIHkuXG4gICAgLy8gIEkuZS4gaWYgdGhlIHdvcmxkIGlzIDgwMHg2MDAgdGhlbiB0aGUgcHJvamVjdGlvbiB2ZWN0b3IgaXMgNDAwIHggLTMwMFxuICAgIGdsLnVuaWZvcm0yZih0aGlzLnByb2plY3Rpb25WZWN0b3IsIHRoaXMucmVuZGVyZXIucHJvamVjdGlvbi54LCB0aGlzLnJlbmRlcmVyLnByb2plY3Rpb24ueSk7XG5cbiAgICAvLyAgU2V0IHRoZSBvZmZzZXQgdmVjdG9yLlxuICAgIGdsLnVuaWZvcm0yZih0aGlzLm9mZnNldFZlY3RvciwgdGhpcy5yZW5kZXJlci5vZmZzZXQueCwgdGhpcy5yZW5kZXJlci5vZmZzZXQueSk7XG5cbiAgICAvLyAgVGhlIFZlcnRleCBQb3NpdGlvbiAoeC95KVxuICAgIC8vICAyIEZMT0FUUywgMiAqIDQgPSA4IGJ5dGVzLiBJbmRleCBwb3M6IDAgdG8gN1xuICAgIC8vICBmaW5hbCBhcmd1bWVudCA9IHRoZSBvZmZzZXQgd2l0aGluIHRoZSB2ZXJ0ZXggaW5wdXRcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIHZlcnRTaXplLCAwKTtcblxuICAgIC8vICBUaGUgVGV4dHVyZSBDb29yZGluYXRlICh1dngvdXZ5KVxuICAgIC8vICAyIEZMT0FUUywgMiAqIDQgPSA4IGJ5dGVzLiBJbmRleCBwb3M6IDggdG8gMTVcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCB2ZXJ0U2l6ZSwgOCk7XG5cbiAgICAvLyAgVGV4dHVyZSBJbmRleFxuICAgIC8vICAxIEZMT0FULCA0IGJ5dGVzLiBJbmRleCBwb3M6IDE2IHRvIDE5XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUZXh0dXJlSW5kZXgsIDEsIGdsLkZMT0FULCBmYWxzZSwgdmVydFNpemUsIDE2KTtcblxuICAgIC8vICBUaW50IGNvbG9yXG4gICAgLy8gIDQgVU5TSUdORUQgQllURVMsIDQgYnl0ZXMuIEluZGV4IHBvczogMjAgdG8gMjNcbiAgICAvLyAgQXR0cmlidXRlcyB3aWxsIGJlIGludGVycHJldGVkIGFzIHVuc2lnbmVkIGJ5dGVzIGFuZCBub3JtYWxpemVkXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUaW50Q29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHZlcnRTaXplLCAyMCk7XG5cbiAgICAvLyAgQmFja2dyb3VuZCBDb2xvclxuICAgIC8vICA0IFVOU0lHTkVEIEJZVEVTLCA0IGJ5dGVzLiBJbmRleCBwb3M6IDI0IHRvIDI3XG4gICAgLy8gIEF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hQmdDb2xvciwgNCwgZ2wuVU5TSUdORURfQllURSwgdHJ1ZSwgdmVydFNpemUsIDI0KTtcbn07XG5cblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlcnRzLCB1dnMsIHRleHR1cmVJbmRleCwgYWxwaGEsIHRpbnRDb2xvcnMsIGJnQ29sb3JzKVxue1xuICAgIC8vICBUaGVzZSBhcmUgVHlwZWRBcnJheSBWaWV3cyBpbnRvIHRoZSB2ZXJ0aWNlcyBBcnJheUJ1ZmZlclxuICAgIHZhciBjb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICB2YXIgcG9zaXRpb25zID0gdGhpcy5wb3NpdGlvbnM7XG5cbiAgICB2YXIgaSA9IHRoaXMuX2k7XG5cbiAgICAvLyAgVG9wIExlZnQgdmVydCAoeHksIHV2LCBjb2xvcilcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngwO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTA7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDA7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTA7XG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLnRvcExlZnQgKyBhbHBoYTtcbiAgICBjb2xvcnNbaSsrXSA9IGJnQ29sb3JzLnRvcExlZnQ7XG5cbiAgICAvLyAgVG9wIFJpZ2h0IHZlcnQgKHh5LCB1diwgY29sb3IpXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy54MTtcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLnkxO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngxO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLnkxO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdGV4dHVyZUluZGV4O1xuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy50b3BSaWdodCArIGFscGhhO1xuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMudG9wUmlnaHQ7XG5cbiAgICAvLyAgQm90dG9tIFJpZ2h0IHZlcnQgKHh5LCB1diwgY29sb3IpXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy54MjtcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLnkyO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngyO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLnkyO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdGV4dHVyZUluZGV4O1xuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy5ib3R0b21SaWdodCArIGFscGhhO1xuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMuYm90dG9tUmlnaHQ7XG5cbiAgICAvLyAgQm90dG9tIExlZnQgdmVydCAoeHksIHV2LCBjb2xvcilcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngzO1xuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTM7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDM7XG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTM7XG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLmJvdHRvbUxlZnQgKyBhbHBoYTtcbiAgICBjb2xvcnNbaSsrXSA9IGJnQ29sb3JzLmJvdHRvbUxlZnQ7XG5cbiAgICB0aGlzLl9pID0gaTtcblxuICAgIHRoaXMuc2l6ZSsrO1xufTtcblxuU2luZ2xlVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLnZlcnRpY2VzID0gbnVsbDtcbiAgICB0aGlzLmluZGljZXMgPSBudWxsO1xuICAgIHRoaXMudmlldyA9IG51bGw7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVZlcnRleFBvc2l0aW9uKTtcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUNvb3JkKTtcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUluZGV4KTtcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGludENvbG9yKTtcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hQmdDb2xvcik7XG5cbiAgICBnbC5kZWxldGVCdWZmZXIodGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmluZGV4QnVmZmVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIHRoaXMubWFuYWdlciA9IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZVRleHR1cmVCYXRjaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlbmRlcmVyL3dlYmdsL2JhdGNoZXMvU2luZ2xlVGV4dHVyZUJhdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL1NpbmdsZVRleHR1cmVCYXRjaC5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBDcmVhdGVFbXB0eVRleHR1cmUgPSByZXF1aXJlKCcuL0NyZWF0ZUVtcHR5VGV4dHVyZScpO1xuXG4vKipcbiogRnJhbWUgQnVmZmVyIE9iamVjdCB3aXRoIGRyYXdpbmcgcXVhZCArIHNoYWRlclxuKlxuKiBAY2xhc3MgUGhhc2VyLlJlbmRlcmVyLkNhbnZhc1xuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEdhbWUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKi9cbnZhciBRdWFkRkJPID0gZnVuY3Rpb24gKHJlbmRlcmVyLCBwYXJlbnQsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmdsID0gcmVuZGVyZXIuZ2w7XG5cbiAgICB0aGlzLl94ID0geDtcbiAgICB0aGlzLl95ID0geTtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMudGV4dHVyZUluZGV4ID0gMDtcblxuICAgIHRoaXMuY2xpcFggPSBmdW5jdGlvbiAoeClcbiAgICB7XG4gICAgICAgIHJldHVybiAocmVuZGVyZXIuY2xpcFVuaXRYICogeCkgLSAxO1xuICAgIH07XG5cbiAgICB0aGlzLmNsaXBZID0gZnVuY3Rpb24gKHkpXG4gICAge1xuICAgICAgICByZXR1cm4gMSAtIChyZW5kZXJlci5jbGlwVW5pdFkgKiB5KTtcbiAgICB9O1xuXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXI7XG4gICAgdGhpcy5pbmRleEJ1ZmZlcjtcbiAgICB0aGlzLnRleHR1cmVCdWZmZXI7XG5cbiAgICB0aGlzLnZlcnRpY2VzO1xuXG4gICAgdGhpcy50ZXh0dXJlO1xuICAgIHRoaXMucmVuZGVyQnVmZmVyO1xuICAgIHRoaXMuZnJhbWVCdWZmZXI7XG5cbiAgICB0aGlzLnByb2dyYW07XG4gICAgdGhpcy5hVmVydGV4UG9zaXRpb247XG4gICAgdGhpcy5hVGV4dHVyZUNvb3JkO1xuXG4gICAgdGhpcy5fbm9ybWFsO1xuICAgIHRoaXMuX3R3aXJsO1xuXG4gICAgdGhpcy5pbml0KCk7XG59O1xuXG5RdWFkRkJPLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFF1YWRGQk87XG5cblF1YWRGQk8ucHJvdG90eXBlID0ge1xuXG4gICAgaW5pdDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgLy8gIEFuIEZCTyBxdWFkIGlzIG1hZGUgdXAgb2YgMiB0cmlhbmdsZXMgKEEgYW5kIEIgaW4gdGhlIGltYWdlIGJlbG93KVxuICAgICAgICAvL1xuICAgICAgICAvLyAgMCA9IEJvdHRvbSBMZWZ0ICgtMSwgLTEpXG4gICAgICAgIC8vICAxID0gQm90dG9tIFJpZ2h0ICgxLCAtMSlcbiAgICAgICAgLy8gIDIgPSBUb3AgTGVmdCAoLTEsIDEpXG4gICAgICAgIC8vICAzID0gVG9wIFJpZ2h0ICgxLCAxKVxuICAgICAgICAvL1xuICAgICAgICAvLyAgMi0tLS0zXG4gICAgICAgIC8vICB8XFwgIEJ8XG4gICAgICAgIC8vICB8IFxcICB8XG4gICAgICAgIC8vICB8ICBcXCB8XG4gICAgICAgIC8vICB8IEEgXFx8XG4gICAgICAgIC8vICB8ICAgIFxcXG4gICAgICAgIC8vICAwLS0tLTFcblxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KFsgMCwgMSwgMiwgMiwgMSwgMyBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcblxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKCk7XG5cbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGljZXMsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnRleHR1cmVCdWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEgXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgICAgICAvLyAgQ3JlYXRlIGEgdGV4dHVyZSBmb3Igb3VyIGNvbG9yIGJ1ZmZlclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBDcmVhdGVFbXB0eVRleHR1cmUoZ2wsIHdpZHRoLCBoZWlnaHQsIDAsIDApO1xuXG4gICAgICAgIC8vICBUaGUgRkJPJ3MgZGVwdGggYnVmZmVyXG4gICAgICAgIHRoaXMucmVuZGVyQnVmZmVyID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnJlbmRlckJ1ZmZlcik7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9DT01QT05FTlQxNiwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlLCAwKTtcblxuICAgICAgICAvLyAgTWF5IG5lZWQgdG8gb3B0aW9uYWxseSBiZTogZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBnbC5ERVBUSF9BVFRBQ0hNRU5ULCBnbC5SRU5ERVJCVUZGRVIsIHRoaXMucmVuZGVyQnVmZmVyKTtcblxuICAgICAgICB2YXIgZmJTdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcblxuICAgICAgICBpZiAoZmJTdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcignRnJhbWVCdWZmZXIgRXJyb3I6ICcsIHRoaXMucmVuZGVyZXIuX2ZiRXJyb3JzW2ZiU3RhdHVzXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZVNoYWRlcigpO1xuICAgIH0sXG5cbiAgICAvLyAgVGhpcyB3aG9sZSBmdW5jdGlvbiBvdWdodCB0byBiZSBzcGxpdCBvdXQgaW50byB0aGUgU2hhZGVyIE1hbmFnZXJcbiAgICAvLyAgICBzbyB0aGV5IGNhbiBlYXNpbHkgY2hhbmdlIHRoZSBzaGFkZXIgYmVpbmcgdXNlZCBmb3IgYW4gRkJPLlxuICAgIC8vICBUaGlzIGNsYXNzIHdpbGwgaGF2ZSB0byBleHBvc2UgdGhvc2Ugc2hhZGVyIGF0dHJpYnMgdGhvdWdoLlxuICAgIGNyZWF0ZVNoYWRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vICBDcmVhdGUgdGhlIHF1YWQgc2hhZGVyXG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICB2YXIgdmVydGV4U3JjID0gW1xuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAgICAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVZlcnRleFBvc2l0aW9uLCAwLjAsIDEuMCk7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBmcmFnbWVudFNyYyA9IFtcbiAgICAgICAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIGZsb2F0IHRpbWU7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkKTsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIHR3aXJsRnJhZ21lbnRTcmMgPSBbXG4gICAgICAgICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCB0aW1lOycsXG5cbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuXG4gICAgICAgICAgICAnY29uc3QgZmxvYXQgcmFkaXVzID0gMC41OycsXG4gICAgICAgICAgICAnY29uc3QgZmxvYXQgYW5nbGUgPSA1LjA7JyxcbiAgICAgICAgICAgICdjb25zdCB2ZWMyIG9mZnNldCA9IHZlYzIoMC41LCAwLjUpOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAgICAgICAnICAgdmVjMiBjb29yZCA9IHZUZXh0dXJlQ29vcmQgLSBvZmZzZXQ7JyxcbiAgICAgICAgICAgICcgICBmbG9hdCBkaXN0YW5jZSA9IGxlbmd0aChjb29yZCk7JyxcblxuICAgICAgICAgICAgJyAgIGlmIChkaXN0YW5jZSA8IHJhZGl1cykgeycsXG4gICAgICAgICAgICAnICAgICAgIGZsb2F0IHJhdGlvID0gKHJhZGl1cyAtIGRpc3RhbmNlKSAvIHJhZGl1czsnLFxuICAgICAgICAgICAgJyAgICAgICBmbG9hdCBhbmdsZU1vZCA9IHJhdGlvICogcmF0aW8gKiBhbmdsZTsnLFxuICAgICAgICAgICAgJyAgICAgICBmbG9hdCBzID0gc2luKGFuZ2xlTW9kKTsnLFxuICAgICAgICAgICAgJyAgICAgICBmbG9hdCBjID0gY29zKGFuZ2xlTW9kKTsnLFxuICAgICAgICAgICAgJyAgICAgICBjb29yZCA9IHZlYzIoY29vcmQueCAqIGMgLSBjb29yZC55ICogcywgY29vcmQueCAqIHMgKyBjb29yZC55ICogYyk7JyxcbiAgICAgICAgICAgICcgICB9JyxcblxuICAgICAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgY29vcmQgKyBvZmZzZXQpOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgcGxhc21hRnJhZ21lbnRTcmMgPSBbXG5cbiAgICAgICAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIGZsb2F0IHRpbWU7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG5cbiAgICAgICAgICAgICcvLyBPbGRza29vbCBwbGFzbSBzaGFkZXIuIChjKSBWaWN0b3IgS29yc3VuLCBiaXRla2FzQGdtYWlsLmNvbTsgMTk5Ni0yMDEzLicsXG4gICAgICAgICAgICAnLy8nLFxuICAgICAgICAgICAgJy8vIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgQ0MgTGljZW5zZS4nLFxuXG4gICAgICAgICAgICAnLy8tLS0tLS0tLS0tLS0tLS0tJyxcbiAgICAgICAgICAgICdjb25zdCBpbnQgcHMgPSAyOyAvLyB1c2UgdmFsdWVzID4gMS4uMTAgZm9yIG9sZHNrb29sJyxcbiAgICAgICAgICAgICdjb25zdCB2ZWMyIHJlc29sdXRpb24gPSB2ZWMyKDEyODAuMCwgNzIwLjApOycsXG4gICAgICAgICAgICAnLy8tLS0tLS0tLS0tLS0tLS0tJyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcblxuICAgICAgICAgICAgJ2Zsb2F0IHggPSBnbF9GcmFnQ29vcmQueCAvIHJlc29sdXRpb24ueCAqIDEyODAuMDsnLFxuICAgICAgICAgICAgJ2Zsb2F0IHkgPSBnbF9GcmFnQ29vcmQueSAvIHJlc29sdXRpb24ueSAqIDcyMC4wOycsXG5cbiAgICAgICAgICAgICdpZiAocHMgPiAwKScsXG4gICAgICAgICAgICAneycsXG4gICAgICAgICAgICAneCA9IGZsb2F0KGludCh4IC8gZmxvYXQocHMpKSAqIHBzKTsnLFxuICAgICAgICAgICAgJ3kgPSBmbG9hdChpbnQoeSAvIGZsb2F0KHBzKSkgKiBwcyk7JyxcbiAgICAgICAgICAgICd9JyxcblxuICAgICAgICAgICAgJ2Zsb2F0IG1vdjAgPSB4K3krc2luKHRpbWUpKjEwLitzaW4oeC85MC4pKjcwLit0aW1lKjIuOycsXG4gICAgICAgICAgICAnZmxvYXQgbW92MSA9IChtb3YwIC8gNS4gKyBzaW4obW92MCAvIDMwLikpLyAxMC4gKyB0aW1lICogMy47JyxcbiAgICAgICAgICAgICdmbG9hdCBtb3YyID0gbW92MSArIHNpbihtb3YxKSo1LiArIHRpbWUqMS4wOycsXG4gICAgICAgICAgICAnZmxvYXQgY2wxID0gc2luKHNpbihtb3YxLzQuICsgdGltZSkrbW92MSk7JyxcbiAgICAgICAgICAgICdmbG9hdCBjMSA9IGNsMSArbW92Mi8yLi1tb3YxLW1vdjIrdGltZTsnLFxuICAgICAgICAgICAgJ2Zsb2F0IGMyID0gc2luKGMxK3Npbihtb3YwLzEwMC4rdGltZSkrc2luKHkvNTcuK3RpbWUvNTAuKStzaW4oKHgreSkvMjAwLikqMi4pOycsXG4gICAgICAgICAgICAnZmxvYXQgYzMgPSBhYnMoc2luKGMyK2NvcygobW92MSttb3YyK2MyKSAvIDEwLikrY29zKChtb3YyKSAvIDEwLikrc2luKHgvODAuKSkpOycsXG5cbiAgICAgICAgICAgICdmbG9hdCBkYyA9IGZsb2F0KDE2LXBzKTsnLFxuXG4gICAgICAgICAgICAnaWYgKHBzID4gMCknLFxuICAgICAgICAgICAgJ3snLFxuICAgICAgICAgICAgJ2NsMSA9IGZsb2F0KGludChjbDEqZGMpKS9kYzsnLFxuICAgICAgICAgICAgJ2MyID0gZmxvYXQoaW50KGMyKmRjKSkvZGM7JyxcbiAgICAgICAgICAgICdjMyA9IGZsb2F0KGludChjMypkYykpL2RjOycsXG4gICAgICAgICAgICAnfScsXG5cbiAgICAgICAgICAgICdnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsMSwgYzIsIGMzLCAxLjApOycsXG5cbiAgICAgICAgICAgICd9J1xuICAgICAgICBdO1xuXG5cbiAgICAgICAgLy8gIFRoaXMgY29tcGlsZXMsIGF0dGFjaGVzIGFuZCBsaW5rcyB0aGUgc2hhZGVyXG4gICAgICAgIHRoaXMuX25vcm1hbCA9IHRoaXMucmVuZGVyZXIuY29tcGlsZVByb2dyYW0odmVydGV4U3JjLCBmcmFnbWVudFNyYyk7XG4gICAgICAgIC8vIHRoaXMuX3R3aXJsID0gdGhpcy5yZW5kZXJlci5jb21waWxlUHJvZ3JhbSh2ZXJ0ZXhTcmMsIHR3aXJsRnJhZ21lbnRTcmMpO1xuICAgICAgICB0aGlzLl90d2lybCA9IHRoaXMucmVuZGVyZXIuY29tcGlsZVByb2dyYW0odmVydGV4U3JjLCBwbGFzbWFGcmFnbWVudFNyYyk7XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5fbm9ybWFsO1xuXG4gICAgICAgIHRoaXMuYVZlcnRleFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMuYVRleHR1cmVDb29yZCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmQnKTtcbiAgICB9LFxuXG4gICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gMDsgfVxuICAgICAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSAwOyB9XG5cbiAgICAgICAgaWYgKHggIT09IHRoaXMuX3ggfHwgeSAhPT0gdGhpcy5feSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgICAgICB0aGlzLl95ID0geTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldFNpemU6IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB1bmRlZmluZWQpIHsgd2lkdGggPSB0aGlzLnJlbmRlcmVyLndpZHRoOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgeyBoZWlnaHQgPSB0aGlzLnJlbmRlcmVyLmhlaWdodDsgfVxuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5fd2lkdGggfHwgaGVpZ2h0ICE9PSB0aGlzLl9oZWlnaHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmVydHMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVWZXJ0czogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciB4ID0gdGhpcy5feDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLl95O1xuXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xuXG4gICAgICAgIC8vICBCb3R0b20gTGVmdFxuICAgICAgICB0aGlzLnZlcnRpY2VzWzBdID0gdGhpcy5jbGlwWCh4KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1sxXSA9IHRoaXMuY2xpcFkoeSArIGhlaWdodCk7XG5cbiAgICAgICAgLy8gIEJvdHRvbSBSaWdodFxuICAgICAgICB0aGlzLnZlcnRpY2VzWzJdID0gdGhpcy5jbGlwWCh4ICsgd2lkdGgpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzWzNdID0gdGhpcy5jbGlwWSh5ICsgaGVpZ2h0KTtcblxuICAgICAgICAvLyAgVG9wIExlZnRcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s0XSA9IHRoaXMuY2xpcFgoeCk7XG4gICAgICAgIHRoaXMudmVydGljZXNbNV0gPSB0aGlzLmNsaXBZKHkpO1xuXG4gICAgICAgIC8vICBUb3AgUmlnaHRcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s2XSA9IHRoaXMuY2xpcFgoeCArIHdpZHRoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s3XSA9IHRoaXMuY2xpcFkoeSk7XG4gICAgfSxcblxuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xuXG4gICAgICAgIC8vICBGQk8gdGV4dHVyZXMgYWx3YXlzIHVzZSBpbmRleCB6ZXJvXG4gICAgICAgIHRoaXMucmVuZGVyZXIudGV4dHVyZUFycmF5WzBdID0gdGhpcy50ZXh0dXJlO1xuICAgIH0sXG5cbiAgICBiaW5kU2hhZGVyOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgICAgIGdsLnVuaWZvcm0xaShnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VTYW1wbGVyJyksIDApO1xuICAgICAgICBnbC51bmlmb3JtMWYoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd0aW1lJyksIHRoaXMucGFyZW50LnN5cy5tYWlubG9vcC5mcmFtZURlbHRhKTtcblxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFUZXh0dXJlQ29vcmQpO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmVydGljZXMpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnRleHR1cmVCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gIGRlc3RpbmF0aW9uQnVmZmVyIE1VU1QgYmUgc2V0LCBldmVuIGlmIGp1c3QgdG8gJ251bGwnXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoZGVzdGluYXRpb25CdWZmZXIpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIC8vICBTZXQgdGhlIGZyYW1lYnVmZmVyIHRvIHJlbmRlciB0b1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGRlc3RpbmF0aW9uQnVmZmVyKTtcblxuICAgICAgICAvLyAgQmluZCB0aGUgdGV4dHVyZSB3ZSByZW5kZXJlZCB0bywgZm9yIHJlYWRpbmcsIGFsd2F5cyBURVhUVVJFMFxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcblxuICAgICAgICAvLyAgVGhlIHNoYWRlciB0aGF0IHdpbGwgcmVhZCBmcm9tIHRoZSBmYm8gdGV4dHVyZVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcih0aGlzLnByb2dyYW0pKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJpbmRTaGFkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDYsIGdsLlVOU0lHTkVEX1NIT1JULCAwKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmRyYXdDb3VudCsrO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcblxuICAgICAgICAvLyAgVE9ETyFcblxuICAgIH1cblxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUXVhZEZCTy5wcm90b3R5cGUsIHtcblxuICAgIHg6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5feClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl94ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgeToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl95KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3aWR0aDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fd2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBoZWlnaHQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9oZWlnaHQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YWRGQk87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC91dGlscy9RdWFkRkJPLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC91dGlscy9RdWFkRkJPLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncycpO1xudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcblxuLyoqXG4qIEEgQmFzZSBTdGF0ZSBDbGFzcy5cbipcbiogQGNsYXNzIFBoYXNlci5TdGF0ZVxuKiBAY29uc3RydWN0b3JcbiovXG52YXIgU3RhdGUgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIC8vICBUaGUgcHJvcGVydGllcyBhIFN0YXRlICptdXN0KiBoYXZlLCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIHdpdGhvdXQgYnJlYWtpbmcgaXQ6XG5cbiAgICB0aGlzLmdhbWUgPSBudWxsO1xuXG4gICAgLy8gIE1heWJlIGp1c3QgYW4gb2JqZWN0PyBEb2Vzbid0IGhhdmUgdG8gaW5zdGFudGlhdGUgSSBkb24ndCB0aGluayAuLi5cbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMsIGNvbmZpZyk7XG5cbiAgICB0aGlzLnN5cyA9IG5ldyBTeXN0ZW1zKHRoaXMsIGNvbmZpZyk7XG5cbiAgICAvLyAgUmVmZXJlbmNlIHRvIHN5cy5jaGlsZHJlbiwgc2V0IGR1cmluZyBzeXMuaW5pdCBvbmx5XG4gICAgdGhpcy5jaGlsZHJlbjtcbn07XG5cblN0YXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXRlO1xuXG5TdGF0ZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9LFxuXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgfSxcblxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcbiAgICBwb3N0VXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9LFxuXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1N0YXRlLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBOT09QID0gcmVxdWlyZSgnLi4vdXRpbHMvTk9PUCcpO1xudmFyIFN0YXRlID0gcmVxdWlyZSgnLi9TdGF0ZScpO1xudmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncycpO1xudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XG4vLyB2YXIgTG9hZGVyRXZlbnQgPSByZXF1aXJlKCcuLi9sb2FkZXIvZXZlbnRzLycpO1xuXG4vKipcbiogVGhlIFN0YXRlIE1hbmFnZXIgaXMgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcsIHNldHRpbmcgdXAgYW5kIHN3aXRjaGluZyBnYW1lIHN0YXRlcy5cbipcbiogQGNsYXNzIFBoYXNlci5TdGF0ZU1hbmFnZXJcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG52YXIgU3RhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKGdhbWUsIHN0YXRlQ29uZmlnKVxue1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAvLyAgRXZlcnl0aGluZyBrZXB0IGluIGhlcmVcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuXG4gICAgLy8gIE9ubHkgYWN0aXZlIHN0YXRlcyBhcmUga2VwdCBpbiBoZXJlXG4gICAgdGhpcy5hY3RpdmUgPSBbXTtcblxuICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcblxuICAgIGlmIChzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlQ29uZmlnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZUNvbmZpZy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGkgPT09IDAgcGFydCBqdXN0IHN0YXJ0cyB0aGUgZmlyc3QgU3RhdGUgZ2l2ZW5cbiAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZ1tpXSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiAoaSA9PT0gMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmcucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlQ29uZmlnLFxuICAgICAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5TdGF0ZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGVNYW5hZ2VyO1xuXG5TdGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgLyoqXG4gICAgKiBUaGUgQm9vdCBoYW5kbGVyIGlzIGNhbGxlZCBieSBQaGFzZXIuR2FtZSB3aGVuIGl0IGZpcnN0IHN0YXJ0cyB1cC5cbiAgICAqIFRoZSByZW5kZXJlciBpcyBhdmFpbGFibGUgYnkgbm93LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlN0YXRlTWFuYWdlciNib290XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgYm9vdDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblBhdXNlLmFkZCh0aGlzLnBhdXNlLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5nYW1lLm9uUmVzdW1lLmFkZCh0aGlzLnJlc3VtZSwgdGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9wZW5kaW5nW2ldO1xuXG4gICAgICAgICAgICB0aGlzLmFkZChlbnRyeS5rZXksIGVudHJ5LnN0YXRlLCBlbnRyeS5hdXRvU3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIENsZWFyIHRoZSBwZW5kaW5nIGxpc3RcbiAgICAgICAgdGhpcy5fcGVuZGluZyA9IFtdO1xuICAgIH0sXG5cbiAgICBnZXRLZXk6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnKVxuICAgIHtcbiAgICAgICAgaWYgKCFrZXkpIHsga2V5ID0gJ2RlZmF1bHQnOyB9XG5cbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleSA9IHN0YXRlQ29uZmlnLnNldHRpbmdzLmtleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnICYmIHN0YXRlQ29uZmlnLmhhc093blByb3BlcnR5KCdrZXknKSlcbiAgICAgICAge1xuICAgICAgICAgICAga2V5ID0gc3RhdGVDb25maWcua2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIEJ5IHRoaXMgcG9pbnQgaXQncyBlaXRoZXIgJ2RlZmF1bHQnIG9yIGV4dHJhY3RlZCBmcm9tIHRoZSBTdGF0ZVxuXG4gICAgICAgIGlmICh0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGEgU3RhdGUgd2l0aCBkdXBsaWNhdGUga2V5OiAnICsga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBBZGRzIGEgbmV3IFN0YXRlIGludG8gdGhlIFN0YXRlTWFuYWdlci4gWW91IG11c3QgZ2l2ZSBlYWNoIFN0YXRlIGEgdW5pcXVlIGtleSBieSB3aGljaCB5b3UnbGwgaWRlbnRpZnkgaXQuXG4gICAgKiBUaGUgU3RhdGUgY2FuIGJlIGVpdGhlciBhIFBoYXNlci5TdGF0ZSBvYmplY3QgKG9yIGFuIG9iamVjdCB0aGF0IGV4dGVuZHMgaXQpLCBhIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0IG9yIGEgZnVuY3Rpb24uXG4gICAgKiBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuIGEgbmV3IHN0YXRlIG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgYnkgY2FsbGluZyBpdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5TdGF0ZU1hbmFnZXIjYWRkXG4gICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQSB1bmlxdWUga2V5IHlvdSB1c2UgdG8gcmVmZXJlbmNlIHRoaXMgc3RhdGUsIGkuZS4gXCJNYWluTWVudVwiLCBcIkxldmVsMVwiLlxuICAgICogQHBhcmFtIHtQaGFzZXIuU3RhdGV8b2JqZWN0fGZ1bmN0aW9ufSBzdGF0ZSAgLSBUaGUgc3RhdGUgeW91IHdhbnQgdG8gc3dpdGNoIHRvLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYXV0b1N0YXJ0PWZhbHNlXSAgLSBJZiB0cnVlIHRoZSBTdGF0ZSB3aWxsIGJlIHN0YXJ0ZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYWRkaW5nIGl0LlxuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZywgYXV0b1N0YXJ0KVxuICAgIHtcbiAgICAgICAgaWYgKGF1dG9TdGFydCA9PT0gdW5kZWZpbmVkKSB7IGF1dG9TdGFydCA9IGZhbHNlOyB9XG5cbiAgICAgICAgLy8gIGlmIG5vdCBib290ZWQsIHRoZW4gcHV0IHN0YXRlIGludG8gYSBob2xkaW5nIHBhdHRlcm5cbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuaXNCb290ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmcucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX3BlbmRpbmcubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZyxcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IGF1dG9TdGFydFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIgbm90IHlldCBib290ZWQsIGFkZGluZyB0byBsaXN0JywgdGhpcy5fcGVuZGluZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSB0aGlzLmdldEtleShrZXksIHN0YXRlQ29uZmlnKTtcblxuICAgICAgICB2YXIgbmV3U3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gaW5zdGFuY2UnLCBrZXkpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlKGtleSwgc3RhdGVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gb2JqZWN0Jywga2V5KTtcblxuICAgICAgICAgICAgc3RhdGVDb25maWcua2V5ID0ga2V5O1xuXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tT2JqZWN0KGtleSwgc3RhdGVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBmdW5jdGlvbicsIGtleSk7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZUZyb21GdW5jdGlvbihrZXksIHN0YXRlQ29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMua2V5c1trZXldID0gbmV3U3RhdGU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZXMucHVzaChuZXdTdGF0ZSk7XG5cbiAgICAgICAgaWYgKGF1dG9TdGFydCB8fCBuZXdTdGF0ZS5zZXR0aW5ncy5hY3RpdmUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuaXNCb290ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3RhdGVGcm9tSW5zdGFuY2U6IGZ1bmN0aW9uIChrZXksIG5ld1N0YXRlKVxuICAgIHtcbiAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBuZXdTdGF0ZS5zZXR0aW5ncy5rZXkgPSBrZXk7XG5cbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3RhdGVGcm9tT2JqZWN0OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBTdGF0ZShzdGF0ZUNvbmZpZyk7XG5cbiAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dXBDYWxsYmFja3MobmV3U3RhdGUsIHN0YXRlQ29uZmlnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb246IGZ1bmN0aW9uIChrZXksIHN0YXRlKVxuICAgIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gbmV3IHN0YXRlKCk7XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlIGluc3RhbmNlb2YgU3RhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlKGtleSwgbmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MobmV3U3RhdGUsIGtleSk7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMgPSBuZXcgU3lzdGVtcyhuZXdTdGF0ZSk7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICBEZWZhdWx0IHJlcXVpcmVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dXBDYWxsYmFja3MobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldHVwQ2FsbGJhY2tzOiBmdW5jdGlvbiAobmV3U3RhdGUsIHN0YXRlQ29uZmlnKVxuICAgIHtcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHsgc3RhdGVDb25maWcgPSBuZXdTdGF0ZTsgfVxuXG4gICAgICAgIC8vICBFeHRyYWN0IGNhbGxiYWNrcyBvciBzZXQgTk9PUFxuXG4gICAgICAgIG5ld1N0YXRlLmluaXQgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ2luaXQnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUucHJlbG9hZCA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlbG9hZCcsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS5jcmVhdGUgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ2NyZWF0ZScsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS5zaHV0ZG93biA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAnc2h1dGRvd24nLCBOT09QKTtcblxuICAgICAgICBuZXdTdGF0ZS5wcmVVcGRhdGUgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3ByZVVwZGF0ZScsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS51cGRhdGUgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3VwZGF0ZScsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS5wb3N0VXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwb3N0VXBkYXRlJywgTk9PUCk7XG4gICAgICAgIG5ld1N0YXRlLnJlbmRlciA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncmVuZGVyJywgTk9PUCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0sXG5cbiAgICBjcmVhdGVTdGF0ZUZyYW1lQnVmZmVyOiBmdW5jdGlvbiAobmV3U3RhdGUpXG4gICAge1xuICAgICAgICB2YXIgeCA9IG5ld1N0YXRlLnNldHRpbmdzLng7XG4gICAgICAgIHZhciB5ID0gbmV3U3RhdGUuc2V0dGluZ3MueTtcblxuICAgICAgICBpZiAobmV3U3RhdGUuc2V0dGluZ3Mud2lkdGggPT09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aCA9IHRoaXMuZ2FtZS5jb25maWcud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID09PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGggPSBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodDtcblxuICAgICAgICBuZXdTdGF0ZS5zeXMuZmJvID0gdGhpcy5nYW1lLnJlbmRlcmVyLmNyZWF0ZUZCTyhuZXdTdGF0ZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoa2V5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZUluZGV4OiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5kZXhPZihzdGF0ZSk7XG4gICAgfSxcblxuICAgIGdldEFjdGl2ZVN0YXRlSW5kZXg6IGZ1bmN0aW9uIChzdGF0ZSlcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlW2ldLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG5cbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcblxuICAgICAgICByZXR1cm4gKHN0YXRlICYmIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZS5pbmRleE9mKHN0YXRlKSAhPT0gLTEpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyIG5vdCB5ZXQgYm9vdGVkLCBzZXR0aW5nIGF1dG9TdGFydCBvbiBwZW5kaW5nIGxpc3QnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3BlbmRpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkua2V5ID09PSBrZXkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5hdXRvU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xuXG4gICAgICAgIGlmIChzdGF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIEFscmVhZHkgc3RhcnRlZD8gTm90aGluZyBtb3JlIHRvIGRvIGhlcmUgLi4uXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZShrZXkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gICsgYXJndW1lbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5pdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pbml0LmNhbGwoc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdGUucHJlbG9hZCAmJiBzdGF0ZS5zeXMubG9hZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubG9hZC5yZXNldCgpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUucHJlbG9hZC5jYWxsKHN0YXRlLCB0aGlzLmdhbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gIElzIHRoZSBsb2FkZXIgZW1wdHk/XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN5cy5sb2FkLmxpc3Quc2l6ZSA9PT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgU3RhcnQgdGhlIGxvYWRlciBnb2luZyBhcyB3ZSBoYXZlIHNvbWV0aGluZyBpbiB0aGUgcXVldWVcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubG9hZC5ldmVudHMub25jZSgnTE9BREVSX0NPTVBMRVRFX0VWRU5UJywgdGhpcy5sb2FkQ29tcGxldGUuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gIE5vIHByZWxvYWQ/IFRoZW4gdGhlcmUgd2FzIG5vdGhpbmcgdG8gbG9hZCBlaXRoZXJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxvYWRDb21wbGV0ZTogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZXZlbnQubG9hZGVyLnN0YXRlO1xuXG4gICAgICAgIC8vICBNYWtlIHN1cmUgdG8gZG8gbG9hZC11cGRhdGUgb25lIGxhc3QgdGltZSBiZWZvcmUgc3RhdGUgaXMgc2V0IHRvIF9jcmVhdGVkXG5cbiAgICAgICAgLy8gIFN0b3AgZG9pbmcgdGhpcyAuLi5cbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KCdsb2FkVXBkYXRlJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlLmxvYWRVcGRhdGUuY2FsbChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcbiAgICB9LFxuXG4gICAgc3RhcnRDcmVhdGU6IGZ1bmN0aW9uIChzdGF0ZSlcbiAgICB7XG4gICAgICAgIGlmIChzdGF0ZS5jcmVhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlLmNyZWF0ZS5jYWxsKHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBJbnNlcnQgYXQgdGhlIGNvcnJlY3QgaW5kZXgsIG9yIGl0IGp1c3QgYWxsIGdvZXMgd3JvbmcgOilcblxuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0U3RhdGVJbmRleChzdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUucHVzaCh7IGluZGV4OiBpLCBzdGF0ZTogc3RhdGUgfSk7XG5cbiAgICAgICAgLy8gIFNvcnQgdGhlICdhY3RpdmUnIGFycmF5IGJhc2VkIG9uIHRoZSBpbmRleCBwcm9wZXJ0eVxuICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcblxuICAgICAgICBzdGF0ZS5zeXMudXBkYXRlcy5ydW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgcGF1c2U6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZVN0YXRlSW5kZXgoa2V5KTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xuXG4gICAgICAgICAgICBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRTdGF0ZXMuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc29ydFN0YXRlczogZnVuY3Rpb24gKHN0YXRlQSwgc3RhdGVCKVxuICAgIHtcbiAgICAgICAgLy8gIFNvcnQgZGVzY2VuZGluZ1xuICAgICAgICBpZiAoc3RhdGVBLmluZGV4IDwgc3RhdGVCLmluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGVBLmluZGV4ID4gc3RhdGVCLmluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vICBTZWUgaWYgd2UgY2FuIHJlZHVjZSB0aGlzIGRvd24gdG8ganVzdCB1cGRhdGUgYW5kIHJlbmRlclxuXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3lzLm1haW5sb29wLnJ1bm5pbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLm1haW5sb29wLnN0ZXAodGltZXN0YW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgIHByZVVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnByZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5wcmVVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcblxuICAgICAgICAgICAgLy8gIEludm9rZSBTdGF0ZSBNYWluIExvb3AgaGVyZSAtIHVwZGF0aW5nIGFsbCBvZiBpdHMgc3lzdGVtcyAodHdlZW5zLCBwaHlzaWNzLCBldGMpXG5cbiAgICAgICAgICAgIC8vICBUaGlzIHNob3VsZG4ndCBiZSBjYWxsZWQgaWYgdGhlIFN0YXRlIGlzIHN0aWxsIGxvYWRpbmdcbiAgICAgICAgICAgIC8vICBIYXZlIGEgU3RhdGUuU1RBVFVTIGNvbnN0IGluIHRoZSBTZXR0aW5ncywgZGljdGF0aW5nIHdoYXQgaXMgZ29pbmcgb25cblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXS5wb3N0VXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnBvc3RVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcblxuICAgICAgICAgICAgLy8gIENhbiBwdXQgYWxsIGtpbmRzIG9mIG90aGVyIGNoZWNrcyBpbiBoZXJlLCBsaWtlIE1haW5Mb29wLCBGUFMsIGV0Yy5cbiAgICAgICAgICAgIGlmICghc3RhdGUuc2V0dGluZ3MudmlzaWJsZSB8fCBzdGF0ZS5zeXMuY29sb3IuYWxwaGEgPT09IDAgfHwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIucmVuZGVyKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgKi9cblxuICAgIHJlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAocmVuZGVyZXIsIHN0YXRlLCBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSlcbiAgICB7XG4gICAgICAgIC8vICBQb3B1bGF0ZXMgdGhlIGRpc3BsYXkgbGlzdFxuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKHJlbmRlcmVyLCBjaGlsZCwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N0YXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGVNYW5hZ2VyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XG5cbi8qKlxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgcXVpY2sgd2F5IHRvIGNyZWF0ZSBtYW55IGNvbW1vbiBnYW1lIG9iamVjdHMuIFRoZSBGYWN0b3J5IGlzIG93bmVkIGJ5IHRoZSBTdGF0ZS5cbipcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG5cbnZhciBHYW1lT2JqZWN0RmFjdG9yeSA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHN0YXRlOiBudWxsXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKHN0YXRlKVxue1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBHYW1lT2JqZWN0RmFjdG9yeSBpbnN0YW5jZSBmb3IgU3RhdGUnKTtcblxuICAgIEdhbWVPYmplY3RGYWN0b3J5LnN0YXRlID0gc3RhdGU7XG5cbiAgICAvLyAgIExvYWQgdGhlIGZhY3RvcmllcyBpbnRvIHRoaXMgT2JqZWN0XG5cbiAgICByZXR1cm4gRmFjdG9yeUNvbnRhaW5lci5sb2FkKEdhbWVPYmplY3RGYWN0b3J5LCB0cnVlKTtcblxuICAgIC8vIHJldHVybiBHYW1lT2JqZWN0RmFjdG9yeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsInZhciBCYXNlTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vbG9hZGVyL0Jhc2VMb2FkZXInKTtcbnZhciBJbWFnZUxvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlJyk7XG5cbnZhciBMb2FkZXIgPSBmdW5jdGlvbiAoc3RhdGUpXG57XG4gICAgQmFzZUxvYWRlci5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuTG9hZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUxvYWRlci5wcm90b3R5cGUpO1xuTG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlcjtcblxuTG9hZGVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uIChrZXksIHVybClcbntcbiAgICB2YXIgZmlsZSA9IG5ldyBJbWFnZUxvYWRlcihrZXksIHVybCwgdGhpcy5wYXRoKTtcblxuICAgIHRoaXMuYWRkRmlsZShmaWxlKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuTG9hZGVyLnByb3RvdHlwZS5wcm9jZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vICBBbGwgb2YgdGhlIGZpbGVzIGhhdmUgbG9hZGVkLiBOb3cgdG8gcHV0IHRoZW0gaW50byB0aGUgQ2FjaGUuXG5cbiAgICBpZiAodGhpcy5zdG9yYWdlLnNpemUgPiAwKVxuICAgIHtcbiAgICAgICAgdmFyIHRleHR1cmVzID0gdGhpcy5zdGF0ZS5zeXMudGV4dHVyZXM7XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLmVhY2goZnVuY3Rpb24gKGZpbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZXMuYWRkSW1hZ2UoZmlsZS5rZXksIGZpbGUuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vLyBNeSB0aGFua3MgdG8gSXNhYWMgU3VraW4gZm9yIGNyZWF0aW5nIE1haW5Mb29wLmpzLCBvbiB3aGljaCBsb3RzIG9mIHRoaXMgaXMgYmFzZWQuXG5cbnZhciBNYWluTG9vcCA9IGZ1bmN0aW9uIChzdGF0ZSwgZnJhbWVyYXRlKVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlXG4gICAgKi9cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cbiAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICAvLyBUaGUgYW1vdW50IG9mIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gc2ltdWxhdGUgZWFjaCB0aW1lIHVwZGF0ZSgpIHJ1bnMuXG4gICAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyBmcmFtZXJhdGU7XG5cbiAgICB0aGlzLnBoeXNpY3NTdGVwID0gMSAvIGZyYW1lcmF0ZTtcblxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXG4gICAgLy8gU2VlIHRoZSBjb21tZW50cyBpbnNpZGUgYW5pbWF0ZSgpIGZvciBkZXRhaWxzLlxuICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAvLyBUaGUgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyBvZiB0aGUgbGFzdCB0aW1lIHRoZSBtYWluIGxvb3Agd2FzIHJ1bi5cbiAgICAvLyBVc2VkIHRvIGNvbXB1dGUgdGhlIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIGZyYW1lcy5cbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XG5cbiAgICAvLyBBbiBleHBvbmVudGlhbCBtb3ZpbmcgYXZlcmFnZSBvZiB0aGUgZnJhbWVzIHBlciBzZWNvbmQuXG4gICAgdGhpcy5mcHMgPSA2MDtcblxuICAgIC8vIFRoZSB0aW1lc3RhbXAgKGluIG1pbGxpc2Vjb25kcykgb2YgdGhlIGxhc3QgdGltZSB0aGUgYGZwc2AgbW92aW5nXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cbiAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cbiAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XG4gICAgLy8gcmVsZXZhbnQgaW5zaWRlIG9mIGFuaW1hdGUoKSwgYnV0IGEgcmVmZXJlbmNlIGlzIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0XG4gICAgLy8gdGhpcyB2YXJpYWJsZSBpcyBub3QgbWFya2VkIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24gZXZlcnkgdGltZSB0aGUgbWFpblxuICAgIC8vIGxvb3AgcnVucy5cbiAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcblxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxuICAgIC8vIGZyYW1lIHdhcyBleGVjdXRlZCBiZWZvcmUgYW5vdGhlciBmcmFtZSBjYW4gYmUgZXhlY3V0ZWQuIFRoZVxuICAgIC8vIG11bHRpcGxpY2F0aXZlIGludmVyc2UgY2FwcyB0aGUgRlBTICh0aGUgZGVmYXVsdCBvZiB6ZXJvIG1lYW5zIHRoZXJlIGlzXG4gICAgLy8gbm8gY2FwKS5cbiAgICB0aGlzLm1pbkZyYW1lRGVsYXkgPSAwO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcbiAgICAvLyB3YXMgY2FsbGVkIGhhcyBub3QgYmVlbiBmb2xsb3dlZCBieSBhIGNhbGwgdG8gYE1haW5Mb29wLnN0b3AoKWAuIFRoaXMgaXNcbiAgICAvLyBkaWZmZXJlbnQgdGhhbiBgcnVubmluZ2AgYmVjYXVzZSB0aGVyZSBpcyBhIGRlbGF5IG9mIGEgZmV3IG1pbGxpc2Vjb25kc1xuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJydW5uaW5nLlwiIFRoaXMgZGVsYXkgaXMgZHVlIHRvIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGZyYW1lLlxuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gV2hldGhlciB0aGUgc2ltdWxhdGlvbiBoYXMgZmFsbGVuIHRvbyBmYXIgYmVoaW5kIHJlYWwgdGltZS5cbiAgICAvLyBTcGVjaWZpY2FsbHksIGBwYW5pY2Agd2lsbCBiZSBzZXQgdG8gYHRydWVgIGlmIHRvbyBtYW55IHVwZGF0ZXMgb2NjdXIgaW5cbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcbiAgICAvLyBoZWxkIGV4dGVybmFsbHkgc28gdGhhdCB0aGlzIHZhcmlhYmxlIGlzIG5vdCBtYXJrZWQgZm9yIGdhcmJhZ2VcbiAgICAvLyBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW4gbG9vcCBydW5zLlxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcbn07XG5cbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xuXG5NYWluTG9vcC5wcm90b3R5cGUgPSB7XG5cbiAgICBzZXRNYXhGUFM6IGZ1bmN0aW9uIChmcHMpXG4gICAge1xuICAgICAgICBpZiAoZnBzID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TWF4RlBTOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XG4gICAgfSxcblxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBvbGRGcmFtZURlbHRhID0gdGhpcy5mcmFtZURlbHRhO1xuXG4gICAgICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XG4gICAgfSxcblxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcbiAgICB7XG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XG4gICAgICAgIC8vIGBNYWluTG9vcC5zZXRNYXhBbGxvd2VkRlBTKClgKS5cbiAgICAgICAgaWYgKHRpbWVzdGFtcCA8IHRoaXMubGFzdEZyYW1lVGltZU1zICsgdGhpcy5taW5GcmFtZURlbGF5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcmFtZURlbHRhIGlzIHRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuXG4gICAgICAgIC8vIHNpbXVsYXRlZCB5ZXQuIEFkZCB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBmcmFtZS4gV2UgbmVlZCB0byB0cmFjayB0b3RhbFxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcbiAgICAgICAgLy8gbGFzdCBmcmFtZSkgYmVjYXVzZSBub3QgYWxsIGFjdHVhbGx5IGVsYXBzZWQgdGltZSBpcyBndWFyYW50ZWVkIHRvIGJlXG4gICAgICAgIC8vIHNpbXVsYXRlZCBlYWNoIGZyYW1lLiBTZWUgdGhlIGNvbW1lbnRzIGJlbG93IGZvciBkZXRhaWxzLlxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gdGltZXN0YW1wO1xuXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXG5cbiAgICAgICAgLy8gIEhlcmUgd2UnbGwgbmVlZCB0byBydW4gdGhpbmdzIGxpa2UgdHdlZW4udXBkYXRlLCBpbnB1dC51cGRhdGUsIGV0Yy5cbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZXN0aW1hdGUgb2YgdGhlIGZyYW1lIHJhdGUsIGBmcHNgLiBFdmVyeSBzZWNvbmQsIHRoZSBudW1iZXJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXG4gICAgICAgIC8vIG1vdmluZyBhdmVyYWdlIG9mIGFsbCBmcmFtZXMgcGVyIHNlY29uZCwgd2l0aCBhbiBhbHBoYSBvZiAwLjI1LiBUaGlzXG4gICAgICAgIC8vIG1lYW5zIHRoYXQgbW9yZSByZWNlbnQgc2Vjb25kcyBhZmZlY3QgdGhlIGVzdGltYXRlZCBmcmFtZSByYXRlIG1vcmUgdGhhblxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxuICAgICAgICBpZiAodGltZXN0YW1wID4gdGhpcy5sYXN0RnBzVXBkYXRlICsgMTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGNvbnN0YW50cyBpbmxpbmUgaXMgb2theSBoZXJlLlxuICAgICAgICAgICAgdGhpcy5mcHMgPSAwLjI1ICogdGhpcy5mcmFtZXNUaGlzU2Vjb25kICsgMC43NSAqIHRoaXMuZnBzO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kKys7XG5cbiAgICAgICAgdGhpcy5udW1VcGRhdGVTdGVwcyA9IDA7XG5cbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmZyYW1lRGVsdGEgPj0gc3RlcClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy50aW1lc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgICAgICBpZiAoKyt0aGlzLm51bVVwZGF0ZVN0ZXBzID49IDI0MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmljID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZXR0aW5ncy52aXNpYmxlICYmIHRoaXMuc3RhdGUuc3lzLmNvbG9yLmFscGhhICE9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIucmVuZGVyKHRoaXMuc3RhdGUsIHRoaXMuZnJhbWVEZWx0YSAvIHRoaXMudGltZXN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUnVuIGFueSB1cGRhdGVzIHRoYXQgYXJlIG5vdCBkZXBlbmRlbnQgb24gdGltZSBpbiB0aGUgc2ltdWxhdGlvbi5cbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuZW5kKHRoaXMuZnBzLCB0aGlzLnBhbmljKTtcblxuICAgICAgICB0aGlzLnBhbmljID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodGltZXN0ZXApXG4gICAge1xuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGUodGltZXN0ZXApO1xuXG4gICAgICAgIHZhciBjO1xuICAgICAgICB2YXIgY2hpbGQ7XG5cbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSh0aW1lc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgRGV2IGxldmVsIGNhbGxiYWNrXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKHRpbWVzdGVwKTtcblxuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUodGltZXN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAqL1xuXG4gICAgc3RvcDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpbkxvb3A7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL01haW5Mb29wLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogRGlydHkhIE1hbmFnZXJcbipcbiogQGNsYXNzXG4qL1xudmFyIFVwZGF0ZU1hbmFnZXIgPSBmdW5jdGlvbiAoc3RhdGUpXG57XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcblxuICAgIHRoaXMubGlzdCA9IFtdO1xuXG4gICAgLy8gdGhpcy5pID0gMTtcblxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIFxuICAgIHRoaXMucHJvY2Vzc2VkID0gMDtcbn07XG5cblVwZGF0ZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVXBkYXRlTWFuYWdlcjtcblxuVXBkYXRlTWFuYWdlci5wcm90b3R5cGUgPSB7XG5cbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaSwgJ1VwZGF0ZU1hbmFnZXIuc3RvcCcsIHRoaXMucHJvY2Vzc2VkKTtcblxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcblxuICAgICAgICAvLyB0aGlzLmkrKztcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbiA9IHRoaXMubGlzdC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbiA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pLCAnVXBkYXRlTWFuYWdlci5zdGFydCcsIGxlbik7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBCZWNhdXNlIGl0IG1heSBoYXZlIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgKGFzIGEgY2hpbGQgb2YgYW5vdGhlciBUcmFuc2Zvcm0gdGhhdCB3YXMgdXBkYXRlZClcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0gJiYgdGhpcy5saXN0W2ldLl9kaXJ0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGQ6IGZ1bmN0aW9uICh0cmFuc2Zvcm0pXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVcGRhdGVNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9VcGRhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLnZhbHVlcyA9IFtdO1xufTtcblxuU2V0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldDtcblxuU2V0LnByb3RvdHlwZSA9IHtcblxuICAgIGFkZDogZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVsZXRlOiBmdW5jdGlvbiAodmFsdWUpXG4gICAge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sodGhpcy52YWx1ZXNbaV0pID09PSBmYWxzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMudmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgfSxcblxuICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAodmFsdWUpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpID4gLTEpO1xuICAgIH0sXG5cbiAgICB1bmlvbjogZnVuY3Rpb24gKHNldClcbiAgICB7XG4gICAgICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgc2V0LnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1NldDtcbiAgICB9LFxuXG4gICAgaW50ZXJzZWN0OiBmdW5jdGlvbiAoc2V0KVxuICAgIHtcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNldC5jb250YWlucyh2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdTZXQ7XG4gICAgfSxcblxuICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uIChzZXQpXG4gICAge1xuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXNldC5jb250YWlucyh2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdTZXQ7XG4gICAgfVxuXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTZXQucHJvdG90eXBlLCB7XG5cbiAgICBzaXplOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGggPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdHJ1Y3RzL1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIEEgRnJhbWUgaXMgYSBzZWN0aW9uIG9mIGEgVGV4dHVyZS5cbipcbiogQ2FsbGVkIFRleHR1cmVGcmFtZSBkdXJpbmcgaW50ZWdyYXRpb24sIHdpbGwgcmVuYW1lIHRvIEZyYW1lIGxhdGVyLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVGcmFtZVxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuVGV4dHVyZX0gdGV4dHVyZSAtIFRoZSBUZXh0dXJlIHRoaXMgRnJhbWUgYmVsb25ncyB0by5cbiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgdW5pcXVlICh3aXRoaW4gdGhlIFRleHR1cmUpIG5hbWUgb2YgdGhpcyBGcmFtZS5cbiogQHBhcmFtIHtudW1iZXJ9IHggLSBYIHBvc2l0aW9uIG9mIHRoZSBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXG4qIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBwb3NpdGlvbiBvZiB0aGUgZnJhbWUgd2l0aGluIHRoZSBUZXh0dXJlLlxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBXaWR0aCBvZiB0aGUgZnJhbWUgd2l0aGluIHRoZSBUZXh0dXJlLlxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXG4qL1xudmFyIEZyYW1lID0gZnVuY3Rpb24gKHRleHR1cmUsIG5hbWUsIHNvdXJjZUluZGV4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVGV4dHVyZX0gdGV4dHVyZSAtIFRoZSBUZXh0dXJlIHRoaXMgZnJhbWUgYmVsb25ncyB0by5cbiAgICAqL1xuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhpcyBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXG4gICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgdGhpcy5zb3VyY2UgPSB0ZXh0dXJlLnNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICB0aGlzLnNvdXJjZUluZGV4ID0gc291cmNlSW5kZXg7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdXRYIC0gWCBwb3NpdGlvbiB3aXRoaW4gdGhlIHNvdXJjZSBpbWFnZSB0byBjdXQgZnJvbS5cbiAgICAqL1xuICAgIHRoaXMuY3V0WCA9IHg7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdXRZIC0gWSBwb3NpdGlvbiB3aXRoaW4gdGhlIHNvdXJjZSBpbWFnZSB0byBjdXQgZnJvbS5cbiAgICAqL1xuICAgIHRoaXMuY3V0WSA9IHk7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdXRXaWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgYXJlYSBpbiB0aGUgc291cmNlIGltYWdlIHRvIGN1dC5cbiAgICAqL1xuICAgIHRoaXMuY3V0V2lkdGggPSB3aWR0aDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGN1dEhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGFyZWEgaW4gdGhlIHNvdXJjZSBpbWFnZSB0byBjdXQuXG4gICAgKi9cbiAgICB0aGlzLmN1dEhlaWdodCA9IGhlaWdodDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHggLSBUaGUgWCByZW5kZXJpbmcgb2Zmc2V0IG9mIHRoaXMgRnJhbWUsIHRha2luZyB0cmltIGludG8gYWNjb3VudC5cbiAgICAqL1xuICAgIHRoaXMueCA9IDA7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IC0gVGhlIFkgcmVuZGVyaW5nIG9mZnNldCBvZiB0aGlzIEZyYW1lLCB0YWtpbmcgdHJpbSBpbnRvIGFjY291bnQuXG4gICAgKi9cbiAgICB0aGlzLnkgPSAwO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggLSBUaGUgcmVuZGVyaW5nIHdpZHRoIG9mIHRoaXMgRnJhbWUsIHRha2luZyB0cmltIGludG8gYWNjb3VudC5cbiAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCAtIFRoZSByZW5kZXJpbmcgaGVpZ2h0IG9mIHRoaXMgRnJhbWUsIHRha2luZyB0cmltIGludG8gYWNjb3VudC5cbiAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLyoqXG4gICAgKiBJcyB0aGlzIGZyYW1lIGlzIHJvdGF0ZWQgb3Igbm90IGluIHRoZSBUZXh0dXJlP1xuICAgICogUm90YXRpb24gYWxsb3dzIHlvdSB0byB1c2Ugcm90YXRlZCBmcmFtZXMgaW4gdGV4dHVyZSBhdGxhcyBwYWNraW5nLlxuICAgICogSXQgaGFzIG5vdGhpbmcgdG8gZG8gd2l0aCBTcHJpdGUgcm90YXRpb24uXG4gICAgKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSByb3RhdGVkXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdGhpcy5yb3RhdGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIElzIHRoaXMgYSB0aWxpbmcgdGV4dHVyZT8gQXMgdXNlZCBieSB0aGUgbGlrZXMgb2YgYSBUaWxpbmdTcHJpdGUuXG4gICAgKiBUT0RPOiBUcnkgYW5kIHJlbW92ZSB0aGlzLCBpdCBzaG91bGRuJ3QgYmUgaGVyZVxuICAgICpcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNUaWxpbmdcbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB0aGlzLmlzVGlsaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIFRoaXMgd2lsbCBsZXQgYSByZW5kZXJlciBrbm93IHRoYXQgYSB0aW50ZWQgcGFyZW50IGhhcyB1cGRhdGVkIGl0cyB0ZXh0dXJlLlxuICAgICogVE9ETzogVHJ5IGFuZCByZW1vdmUgdGhpcywgaXQgc2hvdWxkbid0IGJlIGhlcmVcbiAgICAqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlcXVpcmVzUmVUaW50XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdGhpcy5yZXF1aXJlc1JlVGludCA9IGZhbHNlO1xuXG4gICAgLy8gIE92ZXItcmlkZXMgdGhlIFJlbmRlcmVyIHNldHRpbmc/IC0xID0gdXNlIFJlbmRlcmVyIFNldHRpbmcsIDAgPSBObyByb3VuZGluZywgMSA9IFJvdW5kXG4gICAgdGhpcy5hdXRvUm91bmQgPSAtMTtcblxuICAgIC8qKlxuICAgICogVGhlIHVuLW1vZGlmaWVkIHNvdXJjZSBmcmFtZSwgdHJpbSBhbmQgVVYgZGF0YS5cbiAgICAqXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHByb3BlcnR5IHtvYmplY3R9IGRhdGFcbiAgICAqL1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgY3V0OiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIHc6IHdpZHRoLFxuICAgICAgICAgICAgaDogaGVpZ2h0LFxuICAgICAgICAgICAgcjogeCArIHdpZHRoLFxuICAgICAgICAgICAgYjogeSArIGhlaWdodFxuICAgICAgICB9LFxuICAgICAgICB0cmltOiBmYWxzZSxcbiAgICAgICAgc291cmNlU2l6ZToge1xuICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgICAgICBoOiBoZWlnaHRcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlU291cmNlU2l6ZToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3OiB3aWR0aCxcbiAgICAgICAgICAgIGg6IGhlaWdodFxuICAgICAgICB9LFxuICAgICAgICB1dnM6IHtcbiAgICAgICAgICAgIHgwOiAwLFxuICAgICAgICAgICAgeTA6IDAsXG4gICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IDAsXG4gICAgICAgICAgICB5MjogMCxcbiAgICAgICAgICAgIHgzOiAwLFxuICAgICAgICAgICAgeTM6IDBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVVWcygpO1xufTtcblxuRnJhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRnJhbWU7XG5cbkZyYW1lLnByb3RvdHlwZSA9IHtcblxuICAgIC8qKlxuICAgICogSWYgdGhlIGZyYW1lIHdhcyB0cmltbWVkIHdoZW4gYWRkZWQgdG8gdGhlIFRleHR1cmUgQXRsYXMsIHRoaXMgcmVjb3JkcyB0aGUgdHJpbSBhbmQgc291cmNlIGRhdGEuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuVGV4dHVyZUZyYW1lI3NldFRyaW1cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhY3R1YWxXaWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgZnJhbWUgYmVmb3JlIGJlaW5nIHRyaW1tZWQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYWN0dWFsSGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgZnJhbWUgYmVmb3JlIGJlaW5nIHRyaW1tZWQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdFggLSBUaGUgZGVzdGluYXRpb24gWCBwb3NpdGlvbiBvZiB0aGUgdHJpbW1lZCBmcmFtZSBmb3IgZGlzcGxheS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0WSAtIFRoZSBkZXN0aW5hdGlvbiBZIHBvc2l0aW9uIG9mIHRoZSB0cmltbWVkIGZyYW1lIGZvciBkaXNwbGF5LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RXaWR0aCAtIFRoZSBkZXN0aW5hdGlvbiB3aWR0aCBvZiB0aGUgdHJpbW1lZCBmcmFtZSBmb3IgZGlzcGxheS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0SGVpZ2h0IC0gVGhlIGRlc3RpbmF0aW9uIGhlaWdodCBvZiB0aGUgdHJpbW1lZCBmcmFtZSBmb3IgZGlzcGxheS5cbiAgICAqL1xuICAgIHNldFRyaW06IGZ1bmN0aW9uIChhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0LCBkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodClcbiAgICB7XG4gICAgICAgIC8vICBTdG9yZSBhY3R1YWwgdmFsdWVzXG5cbiAgICAgICAgdGhpcy5kYXRhLnRyaW0gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGF0YS5zb3VyY2VTaXplLncgPSBhY3R1YWxXaWR0aDtcbiAgICAgICAgdGhpcy5kYXRhLnNvdXJjZVNpemUuaCA9IGFjdHVhbEhlaWdodDtcblxuICAgICAgICB0aGlzLmRhdGEuc3ByaXRlU291cmNlU2l6ZS54ID0gZGVzdFg7XG4gICAgICAgIHRoaXMuZGF0YS5zcHJpdGVTb3VyY2VTaXplLnkgPSBkZXN0WTtcbiAgICAgICAgdGhpcy5kYXRhLnNwcml0ZVNvdXJjZVNpemUudyA9IGRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5kYXRhLnNwcml0ZVNvdXJjZVNpemUuaCA9IGRlc3RIZWlnaHQ7XG5cbiAgICAgICAgLy8gIEFkanVzdCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMueCA9IGRlc3RYO1xuICAgICAgICB0aGlzLnkgPSBkZXN0WTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkZXN0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMudXBkYXRlVVZzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgV2ViR0wgVVYgY2FjaGUuXG4gICAgKlxuICAgICogQG1ldGhvZCB1cGRhdGVVVnNcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICB1cGRhdGVVVnM6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgdHcgPSB0aGlzLnNvdXJjZS53aWR0aDtcbiAgICAgICAgdmFyIHRoID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xuICAgICAgICB2YXIgdXZzID0gdGhpcy5kYXRhLnV2cztcbiAgICAgICAgXG4gICAgICAgIHV2cy54MCA9IHRoaXMuY3V0WCAvIHR3O1xuICAgICAgICB1dnMueTAgPSB0aGlzLmN1dFkgLyB0aDtcblxuICAgICAgICB1dnMueDEgPSAodGhpcy5jdXRYICsgdGhpcy5jdXRXaWR0aCkgLyB0dztcbiAgICAgICAgdXZzLnkxID0gdGhpcy5jdXRZIC8gdGg7XG5cbiAgICAgICAgdXZzLngyID0gKHRoaXMuY3V0WCArIHRoaXMuY3V0V2lkdGgpIC8gdHc7XG4gICAgICAgIHV2cy55MiA9ICh0aGlzLmN1dFkgKyB0aGlzLmN1dEhlaWdodCkgLyB0aDtcblxuICAgICAgICB1dnMueDMgPSB0aGlzLmN1dFggLyB0dztcbiAgICAgICAgdXZzLnkzID0gKHRoaXMuY3V0WSArIHRoaXMuY3V0SGVpZ2h0KSAvIHRoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFVwZGF0ZXMgdGhlIGludGVybmFsIFdlYkdMIFVWIGNhY2hlLlxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlVVZzSW52ZXJ0ZWRcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICB1cGRhdGVVVnNJbnZlcnRlZDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciB0dyA9IHRoaXMuc291cmNlLndpZHRoO1xuICAgICAgICB2YXIgdGggPSB0aGlzLnNvdXJjZS5oZWlnaHQ7XG4gICAgICAgIHZhciB1dnMgPSB0aGlzLmRhdGEudXZzO1xuICAgICAgICBcbiAgICAgICAgdXZzLngwID0gdGhpcy5jdXRYIC8gdHc7XG4gICAgICAgIHV2cy55MCA9IHRoaXMuY3V0WSAvIHRoO1xuXG4gICAgICAgIHV2cy54MSA9ICh0aGlzLmN1dFggKyB0aGlzLmN1dEhlaWdodCkgLyB0dztcbiAgICAgICAgdXZzLnkxID0gdGhpcy5jdXRZIC8gdGg7XG5cbiAgICAgICAgdXZzLngyID0gKHRoaXMuY3V0WCArIHRoaXMuY3V0SGVpZ2h0KSAvIHR3O1xuICAgICAgICB1dnMueTIgPSAodGhpcy5jdXRZICsgdGhpcy5jdXRXaWR0aCkgLyB0aDtcblxuICAgICAgICB1dnMueDMgPSB0aGlzLmN1dFggLyB0dztcbiAgICAgICAgdXZzLnkzID0gKHRoaXMuY3V0WSArIHRoaXMuY3V0V2lkdGgpIC8gdGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNsb25lOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGNsb25lID0gbmV3IFBoYXNlci5UZXh0dXJlRnJhbWUodGhpcy50ZXh0dXJlLCB0aGlzLm5hbWUsIHRoaXMuc291cmNlSW5kZXgpO1xuXG4gICAgICAgIGNsb25lLmN1dFggPSB0aGlzLmN1dFg7XG4gICAgICAgIGNsb25lLmN1dFkgPSB0aGlzLmN1dFk7XG4gICAgICAgIGNsb25lLmN1dFdpZHRoID0gdGhpcy5jdXRXaWR0aDtcbiAgICAgICAgY2xvbmUuY3V0SGVpZ2h0ID0gdGhpcy5jdXRIZWlnaHQ7XG5cbiAgICAgICAgY2xvbmUueCA9IHRoaXMueDtcbiAgICAgICAgY2xvbmUueSA9IHRoaXMueTtcbiAgICAgICAgY2xvbmUud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjbG9uZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICBjbG9uZS5yb3RhdGVkID0gdGhpcy5yb3RhdGVkO1xuXG4gICAgICAgIGNsb25lLmRhdGEgPSBQaGFzZXIuVXRpbHMuZXh0ZW5kKHRydWUsIGNsb25lLmRhdGEsIHRoaXMuZGF0YSk7XG5cbiAgICAgICAgY2xvbmUudXBkYXRlVVZzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9XG5cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEZyYW1lLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgKiBUaGUgd2lkdGggb2YgdGhlIEZyYW1lIGluIGl0cyB1bi10cmltbWVkLCB1bi1wYWRkZWQgc3RhdGUsIGFzIHByZXBhcmVkIGluIHRoZSBhcnQgcGFja2FnZSxcbiAgICAqIGJlZm9yZSBiZWluZyBwYWNrZWQuXG4gICAgKlxuICAgICogQG5hbWUgUGhhc2VyLlRleHR1cmVGcmFtZSNyZWFsV2lkdGhcbiAgICAqIEBwcm9wZXJ0eSB7YW55fSByZWFsV2lkdGhcbiAgICAqL1xuICAgIHJlYWxXaWR0aDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnNvdXJjZVNpemUudztcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICogVGhlIGhlaWdodCBvZiB0aGUgRnJhbWUgaW4gaXRzIHVuLXRyaW1tZWQsIHVuLXBhZGRlZCBzdGF0ZSwgYXMgcHJlcGFyZWQgaW4gdGhlIGFydCBwYWNrYWdlLFxuICAgICogYmVmb3JlIGJlaW5nIHBhY2tlZC5cbiAgICAqXG4gICAgKiBAbmFtZSBQaGFzZXIuVGV4dHVyZUZyYW1lI3JlYWxIZWlnaHRcbiAgICAqIEBwcm9wZXJ0eSB7YW55fSByZWFsSGVpZ2h0XG4gICAgKi9cbiAgICByZWFsSGVpZ2h0OiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlU2l6ZS5oO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBVVnNcbiAgICAqXG4gICAgKiBAbmFtZSBQaGFzZXIuVGV4dHVyZUZyYW1lI3V2c1xuICAgICogQHByb3BlcnR5IHtPYmplY3R9IHV2c1xuICAgICovXG4gICAgdXZzOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudXZzO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBGcmFtZSA9IHJlcXVpcmUoJy4vRnJhbWUnKTtcbnZhciBUZXh0dXJlU291cmNlID0gcmVxdWlyZSgnLi9UZXh0dXJlU291cmNlJyk7XG5cbi8qKlxuKiBBIFRleHR1cmUgY29uc2lzdHMgb2YgYSBzb3VyY2UsIHVzdWFsbHkgYW4gSW1hZ2UgZnJvbSB0aGUgQ2FjaGUsIG9yIGEgQ2FudmFzLCBhbmQgYSBjb2xsZWN0aW9uXG4qIG9mIEZyYW1lcy4gVGhlIEZyYW1lcyByZXByZXNlbnQgdGhlIGRpZmZlcmVudCBhcmVhcyBvZiB0aGUgVGV4dHVyZS4gRm9yIGV4YW1wbGUgYSB0ZXh0dXJlIGF0bGFzXG4qIG1heSBoYXZlIG1hbnkgRnJhbWVzLCBvbmUgZm9yIGVhY2ggZWxlbWVudCB3aXRoaW4gdGhlIGF0bGFzLiBXaGVyZS1hcyBhIHNpbmdsZSBpbWFnZSB3b3VsZCBoYXZlXG4qIGp1c3Qgb25lIGZyYW1lLCB0aGF0IGVuY29tcGFzc2VzIHRoZSB3aG9sZSBpbWFnZS5cbipcbiogVGV4dHVyZXMgYXJlIG1hbmFnZWQgYnkgdGhlIGdsb2JhbCBUZXh0dXJlTWFuYWdlci4gVGhpcyBpcyBhIHNpbmdsZXRvbiBjbGFzcyB0aGF0IGlzXG4qIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhbmQgZGVsaXZlcmluZyBUZXh0dXJlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBGcmFtZXMgdG8gR2FtZSBPYmplY3RzLlxuKlxuKiBTcHJpdGVzIGFuZCBvdGhlciBHYW1lIE9iamVjdHMgZ2V0IHRoZSB0ZXh0dXJlIGRhdGEgdGhleSBuZWVkIGZyb20gdGhlIFRleHR1cmVNYW5hZ2VyLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7b2JqZWN0fSBzb3VyY2VcbiogQHBhcmFtIHtudW1iZXJ9IHNjYWxlTW9kZVxuKi9cbnZhciBUZXh0dXJlID0gZnVuY3Rpb24gKG1hbmFnZXIsIGtleSwgc291cmNlKVxue1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlKSlcbiAgICB7XG4gICAgICAgIHNvdXJjZSA9IFsgc291cmNlIF07XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICAvKipcbiAgICAqIFRoZSBzb3VyY2UgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZS5cbiAgICAqIFVzdWFsbHkgYW4gSW1hZ2UsIGJ1dCBjYW4gYWxzbyBiZSBhIENhbnZhcy5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgc291cmNlXG4gICAgKiBAdHlwZSBhcnJheVxuICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBbXTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtvYmplY3R9IGZyYW1lcyAtIEZyYW1lc1xuICAgICovXG4gICAgdGhpcy5mcmFtZXMgPSB7fTtcblxuICAgIHRoaXMuZnJhbWVUb3RhbCA9IDA7XG5cbiAgICAvLyAgTG9hZCB0aGUgU291cmNlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3VyY2UucHVzaChuZXcgVGV4dHVyZVNvdXJjZSh0aGlzLCBzb3VyY2VbaV0pKTtcbiAgICB9XG59O1xuXG5UZXh0dXJlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRleHR1cmU7XG5cblRleHR1cmUucHJvdG90eXBlID0ge1xuXG4gICAgYWRkOiBmdW5jdGlvbiAobmFtZSwgc291cmNlSW5kZXgsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAge1xuICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUodGhpcywgbmFtZSwgc291cmNlSW5kZXgsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuZnJhbWVzW25hbWVdID0gZnJhbWU7XG5cbiAgICAgICAgdGhpcy5mcmFtZVRvdGFsKys7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKVxuICAgIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBudWxsIHx8IHRoaXMuZnJhbWVUb3RhbCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZSA9ICdfX0JBU0UnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZXNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFmcmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBUZXh0dXJlLmZyYW1lIGZvdW5kIHdpdGggbmFtZSAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0VGV4dHVyZUluZGV4OiBmdW5jdGlvbiAoaW5kZXgpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc291cmNlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVtpXS5nbFRleHR1cmVJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvdXJjZVtpXS5pbWFnZS5jdXJyZW50U3JjLCAnaW5kZXggPSAnLCBpbmRleCk7XG5cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRGVzdHJveXMgdGhpcyBiYXNlIHRleHR1cmVcbiAgICAqXG4gICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAgTmVlZCB0byBpdGVyYXRlIHRob3VnaCB0aGUgVGV4dHVyZVNvdXJjZXMsIGFuZCB1bmxvYWQgZWFjaCBvbmVcbiAgICAgICAgLy8gIHRoZW4gY2xlYXIgb3V0IHRoZSBmcmFtZXNcblxuICAgICAgICAvKlxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFBoYXNlci5DYW52YXNQb29sLnJlbW92ZUJ5Q2FudmFzKHRoaXMuc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICAgICAgKi9cbiAgICB9XG5cbn07XG5cbi8qKlxuKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgYmFzZSB0ZXh0dXJlIGZyb20gdGhlIGdpdmVuIGNhbnZhcyBlbGVtZW50LlxuKlxuKiBAc3RhdGljXG4qIEBtZXRob2QgZnJvbUNhbnZhc1xuKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCBzb3VyY2Ugb2YgdGhlIHRleHR1cmVcbiogQHBhcmFtIHNjYWxlTW9kZSB7TnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fVBoYXNlci5zY2FsZU1vZGVze3svY3Jvc3NMaW5rfX0gZm9yIHBvc3NpYmxlIHZhbHVlc1xuKiBAcmV0dXJuIHtCYXNlVGV4dHVyZX1cblBoYXNlci5UZXh0dXJlLmZyb21DYW52YXMgPSBmdW5jdGlvbiAoY2FudmFzLCBzY2FsZU1vZGUpXG57XG4gICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGNhbnZhcy5oZWlnaHQgPT09IDApXG4gICAge1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBoYXNlci5UZXh0dXJlKGNhbnZhcywgc2NhbGVNb2RlKTtcbn07XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZXh0dXJlcy9UZXh0dXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90ZXh0dXJlcy9UZXh0dXJlLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIFBhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xudmFyIFRleHR1cmUgPSByZXF1aXJlKCcuL1RleHR1cmUnKTtcblxuLyoqXG4qIFRleHR1cmVzIGFyZSBtYW5hZ2VkIGJ5IHRoZSBnbG9iYWwgVGV4dHVyZU1hbmFnZXIuIFRoaXMgaXMgYSBzaW5nbGV0b24gY2xhc3MgdGhhdCBpc1xuKiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgYW5kIGRlbGl2ZXJpbmcgVGV4dHVyZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgRnJhbWVzIHRvIEdhbWUgT2JqZWN0cy5cbipcbiogU3ByaXRlcyBhbmQgb3RoZXIgR2FtZSBPYmplY3RzIGdldCB0aGUgdGV4dHVyZSBkYXRhIHRoZXkgbmVlZCBmcm9tIHRoZSBUZXh0dXJlTWFuYWdlci5cbipcbiogQWNjZXNzIGl0IHZpYSBgc3RhdGUudGV4dHVyZXNgLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVNYW5hZ2VyXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lXG4qL1xudmFyIFRleHR1cmVNYW5hZ2VyID0gZnVuY3Rpb24gKGdhbWUpXG57XG4gICAgLy8gIFJlcXVpcmVkPyBSZW1vdmUgaWYgbm90XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMubGlzdCA9IHt9O1xufTtcblxuVGV4dHVyZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dHVyZU1hbmFnZXI7XG5cblRleHR1cmVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIGFkZEltYWdlOiBmdW5jdGlvbiAoa2V5LCBzb3VyY2UpXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlKGtleSwgc291cmNlKTtcbiAgICAgICAgXG4gICAgICAgIFBhcnNlci5JbWFnZSh0ZXh0dXJlLCAwKTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9LFxuXG4gICAgYWRkQ2FudmFzOiBmdW5jdGlvbiAoa2V5LCBzb3VyY2UpXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlKGtleSwgc291cmNlKTtcbiAgICAgICAgXG4gICAgICAgIFBhcnNlci5DYW52YXModGV4dHVyZSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfSxcblxuICAgIGFkZEF0bGFzSlNPTkFycmF5OiBmdW5jdGlvbiAoa2V5LCBzb3VyY2UsIGRhdGEpXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlKGtleSwgc291cmNlKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFBhcnNlci5KU09OQXJyYXkodGV4dHVyZSwgaSwgZGF0YVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBQYXJzZXIuSlNPTkFycmF5KHRleHR1cmUsIDAsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfSxcblxuICAgIGFkZEF0bGFzSlNPTkhhc2g6IGZ1bmN0aW9uIChrZXksIHNvdXJjZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUGFyc2VyLkpTT05IYXNoKHRleHR1cmUsIGksIGRhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgUGFyc2VyLkpTT05IYXNoKHRleHR1cmUsIDAsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfSxcblxuICAgIGFkZFNwcml0ZVNoZWV0OiBmdW5jdGlvbiAoa2V5LCBzb3VyY2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgbWFyZ2luLCBzcGFjaW5nKVxuICAgIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZShrZXksIHNvdXJjZSk7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gdGV4dHVyZS5zb3VyY2VbMF0ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0ZXh0dXJlLnNvdXJjZVswXS5oZWlnaHQ7XG5cbiAgICAgICAgUGFyc2VyLlNwcml0ZVNoZWV0KHRleHR1cmUsIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgbWFyZ2luLCBzcGFjaW5nKTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9LFxuXG4gICAgYWRkU3ByaXRlU2hlZXRGcm9tQXRsYXM6IGZ1bmN0aW9uIChrZXksIGF0bGFzS2V5LCBhdGxhc0ZyYW1lLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIG1hcmdpbiwgc3BhY2luZylcbiAgICB7XG4gICAgICAgIHZhciBhdGxhcyA9IHRoaXMuZ2V0KGF0bGFzS2V5KTtcbiAgICAgICAgdmFyIHNoZWV0ID0gYXRsYXMuZ2V0KGF0bGFzRnJhbWUpO1xuXG4gICAgICAgIGlmIChzaGVldClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZShrZXksIHNoZWV0LnNvdXJjZS5pbWFnZSk7XG5cbiAgICAgICAgICAgIFBhcnNlci5TcHJpdGVTaGVldCh0ZXh0dXJlLCAwLCBzaGVldC5jdXRYLCBzaGVldC5jdXRZLCBzaGVldC5jdXRXaWR0aCwgc2hlZXQuY3V0SGVpZ2h0LCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIG1hcmdpbiwgc3BhY2luZyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZEF0bGFzU3RhcmxpbmdYTUw6IGZ1bmN0aW9uIChrZXksIHNvdXJjZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUGFyc2VyLlN0YXJsaW5nWE1MKHRleHR1cmUsIGksIGRhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgUGFyc2VyLlN0YXJsaW5nWE1MKHRleHR1cmUsIDAsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfSxcblxuICAgIGFkZEF0bGFzUHl4ZWw6IGZ1bmN0aW9uIChrZXksIHNvdXJjZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUGFyc2VyLlB5eGVsKHRleHR1cmUsIGksIGRhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgUGFyc2VyLlB5eGVsKHRleHR1cmUsIDAsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGtleSwgc291cmNlKVxuICAgIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLCBrZXksIHNvdXJjZSk7XG5cbiAgICAgICAgdGhpcy5saXN0W2tleV0gPSB0ZXh0dXJlO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuXG4gICAgfSxcblxuICAgIGV4aXN0czogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5saXN0Lmhhc093blByb3BlcnR5KGtleSkpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHsga2V5ID0gJ19fREVGQVVMVCc7IH1cblxuICAgICAgICBpZiAodGhpcy5saXN0W2tleV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3Rba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbJ19fTUlTU0lORyddO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb25lRnJhbWU6IGZ1bmN0aW9uIChrZXksIGZyYW1lKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFtrZXldKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W2tleV0uZ2V0KGZyYW1lKS5jbG9uZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldEZyYW1lOiBmdW5jdGlvbiAoa2V5LCBmcmFtZSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFtrZXldLmdldChmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0VGV4dHVyZTogZnVuY3Rpb24gKGdhbWVPYmplY3QsIGtleSwgZnJhbWUpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5saXN0W2tleV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3QudGV4dHVyZSA9IHRoaXMubGlzdFtrZXldO1xuICAgICAgICAgICAgZ2FtZU9iamVjdC5mcmFtZSA9IGdhbWVPYmplY3QudGV4dHVyZS5nZXQoZnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUGFzc2VzIGFsbCBUZXh0dXJlcyB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suXG4gICAgKlxuICAgICogQG1ldGhvZCBlYWNoXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFt0aGlzQXJnXSAtIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgKiBAcGFyYW0gey4uLip9IFthcmd1bWVudHNdIC0gQWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2ssIGFmdGVyIHRoZSBjaGlsZC5cbiAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZylcbiAgICB7XG4gICAgICAgIHZhciBhcmdzID0gWyBudWxsIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgdGV4dHVyZSBpbiB0aGlzLmxpc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB0aGlzLmxpc3RbdGV4dHVyZV07XG5cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvVGV4dHVyZU1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RleHR1cmVzL1RleHR1cmVNYW5hZ2VyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBJc1Bvd2VyT2ZUd28gPSByZXF1aXJlKCcuLi9tYXRoL0lzUG93ZXJPZlR3bycpO1xuXG4vKipcbipcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlU291cmNlXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge29iamVjdH0gc291cmNlXG4qIEBwYXJhbSB7bnVtYmVyfSBzY2FsZU1vZGVcbiovXG52YXIgVGV4dHVyZVNvdXJjZSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBzb3VyY2UpXG57XG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcblxuICAgIHRoaXMuaW1hZ2UgPSBzb3VyY2U7XG5cbiAgICB0aGlzLmNvbXByZXNzaW9uQWxnb3JpdGhtID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogVGhlIFJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUuXG4gICAgKlxuICAgICogQHByb3BlcnR5IHJlc29sdXRpb25cbiAgICAqIEB0eXBlIE51bWJlclxuICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gMTtcbiAgICBcbiAgICAvKipcbiAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dHVyZS5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgd2lkdGhcbiAgICAqIEB0eXBlIE51bWJlclxuICAgICogQHJlYWRPbmx5XG4gICAgKi9cbiAgICB0aGlzLndpZHRoID0gc291cmNlLm5hdHVyYWxXaWR0aCB8fCBzb3VyY2Uud2lkdGggfHwgMDtcblxuICAgIC8qKlxuICAgICogVGhlIGhlaWdodCBvZiB0aGUgVGV4dHVyZS5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgaGVpZ2h0XG4gICAgKiBAdHlwZSBOdW1iZXJcbiAgICAqIEByZWFkT25seVxuICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBzb3VyY2UubmF0dXJhbEhlaWdodCB8fCBzb3VyY2UuaGVpZ2h0IHx8IDA7XG5cbiAgICAvKipcbiAgICAqIFRoZSBzY2FsZSBtb2RlIHRvIGFwcGx5IHdoZW4gc2NhbGluZyB0aGlzIHRleHR1cmUuXG4gICAgKiBORUFSRVNUIG9yIERFRkFVTFRcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgc2NhbGVNb2RlXG4gICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICogQGRlZmF1bHQgUGhhc2VyLnNjYWxlTW9kZXMuREVGQVVMVDtcbiAgICAqL1xuICAgIHRoaXMuc2NhbGVNb2RlID0gQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUO1xuICAgIC8vIHRoaXMuc2NhbGVNb2RlID0gQ09OU1Quc2NhbGVNb2Rlcy5ORUFSRVNUO1xuXG4gICAgLyoqXG4gICAgKiBDb250cm9scyBpZiBSR0IgY2hhbm5lbHMgc2hvdWxkIGJlIHByZS1tdWx0aXBsaWVkIGJ5IEFscGhhICAoV2ViR0wgb25seSlcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgcHJlbXVsdGlwbGllZEFscGhhXG4gICAgKiBAdHlwZSBCb29sZWFuXG4gICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgKi9cbiAgICB0aGlzLnByZW11bHRpcGxpZWRBbHBoYSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgYSBtaXBtYXAgb2YgdGhpcyB0ZXh0dXJlIG5lZWRzIHRvIGJlIGdlbmVyYXRlZC4gVGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIHRoZSB0ZXh0dXJlIGlzIHVzZWRcbiAgICAqIEFsc28gdGhlIHRleHR1cmUgbXVzdCBiZSBhIHBvd2VyIG9mIHR3byBzaXplIHRvIHdvcmtcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgbWlwbWFwXG4gICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAqL1xuICAgIHRoaXMubWlwbWFwID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIEEgQmFzZVRleHR1cmUgY2FuIGJlIHNldCB0byBza2lwIHRoZSByZW5kZXJpbmcgcGhhc2UgaW4gdGhlIFdlYkdMIFNwcml0ZSBCYXRjaC5cbiAgICAqXG4gICAgKiBZb3UgbWF5IHdhbnQgdG8gZG8gdGhpcyBpZiB5b3UgaGF2ZSBhIHBhcmVudCBTcHJpdGUgd2l0aCBubyB2aXNpYmxlIHRleHR1cmUgKGkuZS4gdXNlcyB0aGUgaW50ZXJuYWwgYF9fZGVmYXVsdGAgdGV4dHVyZSlcbiAgICAqIHRoYXQgaGFzIGNoaWxkcmVuIHRoYXQgeW91IGRvIHdhbnQgdG8gcmVuZGVyLCB3aXRob3V0IGNhdXNpbmcgYSBiYXRjaCBmbHVzaCBpbiB0aGUgcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgcmVuZGVyYWJsZVxuICAgICogQHR5cGUgQm9vbGVhblxuICAgICovXG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IGlzUG93ZXJPZjJcbiAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAqL1xuICAgIHRoaXMuaXNQb3dlck9mMiA9IElzUG93ZXJPZlR3byh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSBnbFRleHR1cmVcbiAgICAqL1xuICAgIHRoaXMuZ2xUZXh0dXJlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogVGhlIG11bHRpIHRleHR1cmUgYmF0Y2hpbmcgaW5kZXggbnVtYmVyLlxuICAgICogQHByb3BlcnR5IGdsVGV4dHVyZUluZGV4XG4gICAgKiBAdHlwZSBOdW1iZXJcbiAgICAqL1xuICAgIHRoaXMuZ2xUZXh0dXJlSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgKiBUaGUgdGltZXN0YW1wIHdoZW4gdGhpcyB0ZXh0dXJlIHdhcyBsYXN0IHVzZWQgYnkgdGhlIFdlYkdMIHJlbmRlcmVyLlxuICAgICogQ2FuIGJlIHVzZWQgdG8gcHVyZ2Ugb3V0ICdkZWFkJyB0ZXh0dXJlcyBmcm9tIEdQVSBtZW1vcnkuXG4gICAgKiBAcHJvcGVydHkgZ2xMYXN0VXNlZFxuICAgICogQHR5cGUgTnVtYmVyXG4gICAgKi9cbiAgICB0aGlzLmdsTGFzdFVzZWQgPSAwO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkgZ2xEaXJ0eVxuICAgICovXG4gICAgdGhpcy5nbERpcnR5ID0gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL1RleHR1cmVTb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RleHR1cmVzL1RleHR1cmVTb3VyY2UuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogUGFyc2UgYSBTcHJpdGUgU2hlZXQgYW5kIGV4dHJhY3RzIHRoZSBmcmFtZSBkYXRhIGZyb20gaXQuXG4qXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZVBhcnNlci5JbWFnZVxuKiBAc3RhdGljXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXG4qIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBGcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUgdGhhdCB0aGUgU3ByaXRlIFNoZWV0IGlzIHN0b3JlZCBpbi5cbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXG4qL1xudmFyIENhbnZhc1RleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgpXG57XG4gICAgdmFyIHNvdXJjZSA9IHRleHR1cmUuc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgIHRleHR1cmUuYWRkKCdfX0JBU0UnLCBzb3VyY2VJbmRleCwgMCwgMCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0KTtcblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNUZXh0dXJlUGFyc2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvcGFyc2Vycy9DYW52YXNUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogUGFyc2UgYSBTcHJpdGUgU2hlZXQgYW5kIGV4dHJhY3RzIHRoZSBmcmFtZSBkYXRhIGZyb20gaXQuXG4qXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZVBhcnNlci5JbWFnZVxuKiBAc3RhdGljXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXG4qIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBGcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUgdGhhdCB0aGUgU3ByaXRlIFNoZWV0IGlzIHN0b3JlZCBpbi5cbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXG4qL1xudmFyIEltYWdlVGV4dHVyZVBhcnNlciA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBzb3VyY2VJbmRleClcbntcbiAgICB2YXIgc291cmNlID0gdGV4dHVyZS5zb3VyY2Vbc291cmNlSW5kZXhdO1xuXG4gICAgdGV4dHVyZS5hZGQoJ19fQkFTRScsIHNvdXJjZUluZGV4LCAwLCAwLCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlVGV4dHVyZVBhcnNlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvSW1hZ2VUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogUGFyc2VzIGEgSlNPTiBBcnJheSBhbmQgZXh0cmFjdHMgdGhlIGZyYW1lIGRhdGEgZnJvbSBpdC5cbipcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLkpTT05BcnJheVxuKiBAc3RhdGljXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXG4qIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gVGhlIEpTT04gZGF0YSBmcm9tIHRoZSBUZXh0dXJlIEF0bGFzLiBNdXN0IGJlIGluIEFycmF5IGZvcm1hdC5cbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXG4qL1xudmFyIEpTT05BcnJheVRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgsIGpzb24pXG57XG4gICAgLy8gIE1hbGZvcm1lZD9cbiAgICBpZiAoIWpzb25bJ2ZyYW1lcyddKVxuICAgIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFRleHR1cmUgQXRsYXMgSlNPTiBBcnJheSBnaXZlbiwgbWlzc2luZyBcXCdmcmFtZXNcXCcgYXJyYXknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vICBCeSB0aGlzIHN0YWdlIGZyYW1lcyBpcyBhIGZ1bGx5IHBhcnNlZCBhcnJheVxuICAgIHZhciBmcmFtZXMgPSBqc29uWydmcmFtZXMnXTtcbiAgICB2YXIgbmV3RnJhbWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBzcmMgPSBmcmFtZXNbaV07XG5cbiAgICAgICAgLy8gIFRoZSBmcmFtZSB2YWx1ZXMgYXJlIHRoZSBleGFjdCBjb29yZGluYXRlcyB0byBjdXQgdGhlIGZyYW1lIG91dCBvZiB0aGUgYXRsYXMgZnJvbVxuICAgICAgICBuZXdGcmFtZSA9IHRleHR1cmUuYWRkKHNyYy5maWxlbmFtZSwgc291cmNlSW5kZXgsIHNyYy5mcmFtZS54LCBzcmMuZnJhbWUueSwgc3JjLmZyYW1lLncsIHNyYy5mcmFtZS5oKTtcblxuICAgICAgICAvLyAgVGhlc2UgYXJlIHRoZSBvcmlnaW5hbCAobm9uLXRyaW1tZWQpIHNwcml0ZSB2YWx1ZXNcbiAgICAgICAgaWYgKHNyYy50cmltbWVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdGcmFtZS5zZXRUcmltKFxuICAgICAgICAgICAgICAgIHNyYy5zb3VyY2VTaXplLncsXG4gICAgICAgICAgICAgICAgc3JjLnNvdXJjZVNpemUuaCxcbiAgICAgICAgICAgICAgICBzcmMuc3ByaXRlU291cmNlU2l6ZS54LFxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLnksXG4gICAgICAgICAgICAgICAgc3JjLnNwcml0ZVNvdXJjZVNpemUudyxcbiAgICAgICAgICAgICAgICBzcmMuc3ByaXRlU291cmNlU2l6ZS5oXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNyYy5yb3RhdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdGcmFtZS5yb3RhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU09OQXJyYXlUZXh0dXJlUGFyc2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvcGFyc2Vycy9KU09OQXJyYXlUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogUGFyc2VzIGEgSlNPTiBBcnJheSBhbmQgZXh0cmFjdHMgdGhlIGZyYW1lIGRhdGEgZnJvbSBpdC5cbipcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLkpTT05BcnJheVxuKiBAc3RhdGljXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXG4qIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gVGhlIEpTT04gZGF0YSBmcm9tIHRoZSBUZXh0dXJlIEF0bGFzLiBNdXN0IGJlIGluIEpTT04gSGFzaCBmb3JtYXQuXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxuKi9cbnZhciBKU09OSGFzaFRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgsIGpzb24pXG57XG4gICAgLy8gIE1hbGZvcm1lZD9cbiAgICBpZiAoIWpzb25bJ2ZyYW1lcyddKVxuICAgIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFRleHR1cmUgQXRsYXMgSlNPTiBIYXNoIGdpdmVuLCBtaXNzaW5nIFxcJ2ZyYW1lc1xcJyBPYmplY3QnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vICBCeSB0aGlzIHN0YWdlIGZyYW1lcyBpcyBhIGZ1bGx5IHBhcnNlZCBPYmplY3RcbiAgICB2YXIgZnJhbWVzID0ganNvblsnZnJhbWVzJ107XG4gICAgdmFyIG5ld0ZyYW1lO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGZyYW1lcylcbiAgICB7XG4gICAgICAgIHZhciBzcmMgPSBmcmFtZXNba2V5XTtcblxuICAgICAgICAvLyAgVGhlIGZyYW1lIHZhbHVlcyBhcmUgdGhlIGV4YWN0IGNvb3JkaW5hdGVzIHRvIGN1dCB0aGUgZnJhbWUgb3V0IG9mIHRoZSBhdGxhcyBmcm9tXG4gICAgICAgIG5ld0ZyYW1lID0gdGV4dHVyZS5hZGQoa2V5LCBzb3VyY2VJbmRleCwgc3JjLmZyYW1lLngsIHNyYy5mcmFtZS55LCBzcmMuZnJhbWUudywgc3JjLmZyYW1lLmgpO1xuXG4gICAgICAgIC8vICBUaGVzZSBhcmUgdGhlIG9yaWdpbmFsIChub24tdHJpbW1lZCkgc3ByaXRlIHZhbHVlc1xuICAgICAgICBpZiAoc3JjLnRyaW1tZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld0ZyYW1lLnNldFRyaW0oXG4gICAgICAgICAgICAgICAgc3JjLnNvdXJjZVNpemUudyxcbiAgICAgICAgICAgICAgICBzcmMuc291cmNlU2l6ZS5oLFxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLngsXG4gICAgICAgICAgICAgICAgc3JjLnNwcml0ZVNvdXJjZVNpemUueSxcbiAgICAgICAgICAgICAgICBzcmMuc3ByaXRlU291cmNlU2l6ZS53LFxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLmhcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3JjLnJvdGF0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld0ZyYW1lLnJvdGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05IYXNoVGV4dHVyZVBhcnNlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvSlNPTkhhc2hUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogUGFyc2VzIGEgUHl4ZWwgSlNPTiBGaWxlIGFuZCBleHRyYWN0cyB0aGUgZnJhbWUgZGF0YSBmcm9tIGl0LlxuKlxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVQYXJzZXIuSlNPTkFycmF5XG4qIEBzdGF0aWNcbiogQHBhcmFtIHtQaGFzZXIuVGV4dHVyZX0gdGV4dHVyZSAtIFRoZSBwYXJlbnQgVGV4dHVyZS5cbiogQHBhcmFtIHtvYmplY3R9IGpzb24gLSBUaGUgSlNPTiBkYXRhIGZyb20gdGhlIFRleHR1cmUgQXRsYXMuIE11c3QgYmUgaW4gUHl4ZWwgSlNPTiBmb3JtYXQuXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxuKi9cbnZhciBQeXhlbFRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwganNvbilcbntcbiAgICAvLyAgTWFsZm9ybWVkPyBUaGVyZSBhcmUgYSBmZXcga2V5cyB0byBjaGVjayBoZXJlLlxuICAgIHZhciBzaWduYXR1cmUgPSBbICdsYXllcnMnLCAndGlsZXdpZHRoJywgJ3RpbGVoZWlnaHQnLCAndGlsZXN3aWRlJywgJ3RpbGVzaGlnaCcgXTtcblxuICAgIHNpZ25hdHVyZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICBpZiAoIWpzb25ba2V5XSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdQaGFzZXIuQW5pbWF0aW9uUGFyc2VyLkpTT05EYXRhUHl4ZWw6IEludmFsaWQgUHl4ZWwgVGlsZW1hcCBKU09OIGdpdmVuLCBtaXNzaW5nIFwiJyArIGtleSArICdcIiBrZXkuJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRm9yIHRoaXMgcHVycG9zZSwgSSBvbmx5IGNhcmUgYWJvdXQgcGFyc2luZyB0aWxlbWFwcyB3aXRoIGEgc2luZ2xlIGxheWVyLlxuICAgIGlmIChqc29uWydsYXllcnMnXS5sZW5ndGggIT09IDEpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ1BoYXNlci5BbmltYXRpb25QYXJzZXIuSlNPTkRhdGFQeXhlbDogVG9vIG1hbnkgbGF5ZXJzLCB0aGlzIHBhcnNlciBvbmx5IHN1cHBvcnRzIGZsYXQgVGlsZW1hcHMuJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBuZXcgUGhhc2VyLkZyYW1lRGF0YSgpO1xuXG4gICAgdmFyIHRpbGVoZWlnaHQgPSBqc29uWyd0aWxlaGVpZ2h0J107XG4gICAgdmFyIHRpbGV3aWR0aCA9IGpzb25bJ3RpbGV3aWR0aCddO1xuXG4gICAgdmFyIGZyYW1lcyA9IGpzb25bJ2xheWVycyddWzBdWyd0aWxlcyddO1xuICAgIHZhciBuZXdGcmFtZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgbmV3RnJhbWUgPSBkYXRhLmFkZEZyYW1lKG5ldyBQaGFzZXIuRnJhbWUoXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZnJhbWVzW2ldLngsXG4gICAgICAgICAgICBmcmFtZXNbaV0ueSxcbiAgICAgICAgICAgIHRpbGV3aWR0aCxcbiAgICAgICAgICAgIHRpbGVoZWlnaHQsXG4gICAgICAgICAgICBcImZyYW1lX1wiICsgaSAgLy8gTm8gbmFtZXMgYXJlIGluY2x1ZGVkIGluIHB5eGVsIHRpbGVtYXAgZGF0YS5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgLy8gTm8gdHJpbSBkYXRhIGlzIGluY2x1ZGVkLlxuICAgICAgICBuZXdGcmFtZS5zZXRUcmltKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHl4ZWxUZXh0dXJlUGFyc2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvcGFyc2Vycy9QeXhlbFRleHR1cmVQYXJzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBQYXJzZSBhIFNwcml0ZSBTaGVldCBhbmQgZXh0cmFjdHMgdGhlIGZyYW1lIGRhdGEgZnJvbSBpdC5cbipcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLlNwcml0ZVNoZWV0XG4qIEBzdGF0aWNcbiogQHBhcmFtIHtQaGFzZXIuVGV4dHVyZX0gdGV4dHVyZSAtIFRoZSBwYXJlbnQgVGV4dHVyZS5cbiogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIEZyYW1lIHdpdGhpbiB0aGUgVGV4dHVyZSB0aGF0IHRoZSBTcHJpdGUgU2hlZXQgaXMgc3RvcmVkIGluLlxuKiBAcGFyYW0ge251bWJlcn0gZnJhbWVXaWR0aCAtIFRoZSBmaXhlZCB3aWR0aCBvZiBlYWNoIGZyYW1lLlxuKiBAcGFyYW0ge251bWJlcn0gZnJhbWVIZWlnaHQgLSBUaGUgZml4ZWQgaGVpZ2h0IG9mIGVhY2ggZnJhbWUuXG4qIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRGcmFtZT0wXSAtIFNraXAgYSBudW1iZXIgb2YgZnJhbWVzLiBVc2VmdWwgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgc3ByaXRlIHNoZWV0cyBpbiBvbmUgVGV4dHVyZS5cbiogQHBhcmFtIHtudW1iZXJ9IFtlbmRGcmFtZT0tMV0gLSBUaGUgdG90YWwgbnVtYmVyIG9mIGZyYW1lcyB0byBleHRyYWN0IGZyb20gdGhlIFNwcml0ZSBTaGVldC4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgLTEgbWVhbnMgXCJleHRyYWN0IGFsbCBmcmFtZXNcIi5cbiogQHBhcmFtIHtudW1iZXJ9IFttYXJnaW49MF0gLSBJZiB0aGUgZnJhbWVzIGhhdmUgYmVlbiBkcmF3biB3aXRoIGEgbWFyZ2luLCBzcGVjaWZ5IHRoZSBhbW91bnQgaGVyZS5cbiogQHBhcmFtIHtudW1iZXJ9IFtzcGFjaW5nPTBdIC0gSWYgdGhlIGZyYW1lcyBoYXZlIGJlZW4gZHJhd24gd2l0aCBzcGFjaW5nIGJldHdlZW4gdGhlbSwgc3BlY2lmeSB0aGUgYW1vdW50IGhlcmUuXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxuKi9cbnZhciBTcHJpdGVTaGVldFRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgbWFyZ2luLCBzcGFjaW5nKVxue1xuICAgIGlmIChzdGFydEZyYW1lID09PSB1bmRlZmluZWQpIHsgc3RhcnRGcmFtZSA9IDA7IH1cbiAgICBpZiAoZW5kRnJhbWUgPT09IHVuZGVmaW5lZCkgeyBlbmRGcmFtZSA9IC0xOyB9XG4gICAgaWYgKG1hcmdpbiA9PT0gdW5kZWZpbmVkKSB7IG1hcmdpbiA9IDA7IH1cbiAgICBpZiAoc3BhY2luZyA9PT0gdW5kZWZpbmVkKSB7IHNwYWNpbmcgPSAwOyB9XG5cbiAgICB2YXIgcm93ID0gTWF0aC5mbG9vcigod2lkdGggLSBtYXJnaW4pIC8gKGZyYW1lV2lkdGggKyBzcGFjaW5nKSk7XG4gICAgdmFyIGNvbHVtbiA9IE1hdGguZmxvb3IoKGhlaWdodCAtIG1hcmdpbikgLyAoZnJhbWVIZWlnaHQgKyBzcGFjaW5nKSk7XG4gICAgdmFyIHRvdGFsID0gcm93ICogY29sdW1uO1xuXG4gICAgaWYgKHN0YXJ0RnJhbWUgPiB0b3RhbCB8fCBzdGFydEZyYW1lIDwgLXRvdGFsKVxuICAgIHtcbiAgICAgICAgc3RhcnRGcmFtZSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0RnJhbWUgPCAwKVxuICAgIHtcbiAgICAgICAgLy8gIEFsbG93IG5lZ2F0aXZlIHNraXBmcmFtZXMuXG4gICAgICAgIHN0YXJ0RnJhbWUgPSB0b3RhbCArIHN0YXJ0RnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKGVuZEZyYW1lICE9PSAtMSlcbiAgICB7XG4gICAgICAgIHRvdGFsID0gc3RhcnRGcmFtZSArIChlbmRGcmFtZSArIDEpO1xuICAgIH1cblxuICAgIHZhciBmeCA9IG1hcmdpbjtcbiAgICB2YXIgZnkgPSBtYXJnaW47XG4gICAgdmFyIGF4ID0gMDtcbiAgICB2YXIgYXkgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKVxuICAgIHtcbiAgICAgICAgYXggPSAwO1xuICAgICAgICBheSA9IDA7XG5cbiAgICAgICAgdmFyIHcgPSBmeCArIGZyYW1lV2lkdGg7XG4gICAgICAgIHZhciBoID0gZnkgKyBmcmFtZUhlaWdodDtcblxuICAgICAgICBpZiAodyA+IHdpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBheCA9IHcgLSB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoID4gaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICBheSA9IGggLSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0dXJlLmFkZChpLCBzb3VyY2VJbmRleCwgeCArIGZ4LCB5ICsgZnksIGZyYW1lV2lkdGggLSBheCwgZnJhbWVIZWlnaHQgLSBheSk7XG5cbiAgICAgICAgZnggKz0gZnJhbWVXaWR0aCArIHNwYWNpbmc7XG5cbiAgICAgICAgaWYgKGZ4ICsgZnJhbWVXaWR0aCA+IHdpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBmeCA9IG1hcmdpbjtcbiAgICAgICAgICAgIGZ5ICs9IGZyYW1lSGVpZ2h0ICsgc3BhY2luZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVTaGVldFRleHR1cmVQYXJzZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZXh0dXJlcy9wYXJzZXJzL1Nwcml0ZVNoZWV0VGV4dHVyZVBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIFBhcnNlcyB0aGUgWE1MIGFuZCBleHRyYWN0cyB0aGUgZnJhbWUgZGF0YSBmcm9tIGl0LlxuKlxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVQYXJzZXIuU3RhcmxpbmdYTUxcbiogQHN0YXRpY1xuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHBhcmVudCBUZXh0dXJlLlxuKiBAcGFyYW0ge29iamVjdH0geG1sIC0gVGhlIFhNTCBkYXRhIGZyb20gdGhlIFRleHR1cmUgQXRsYXMuIE11c3QgYmUgaW4gU3RhcmxpbmcgWE1MIGZvcm1hdC5cbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXG4qL1xudmFyIFN0YXJsaW5nWE1MVGV4dHVyZVBhcnNlciA9IGZ1bmN0aW9uICh0ZXh0dXJlLCB4bWwpXG57XG4gICAgLy8gIE1hbGZvcm1lZD9cbiAgICBpZiAoIXhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVGV4dHVyZUF0bGFzJykpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJQaGFzZXIuQW5pbWF0aW9uUGFyc2VyLlhNTERhdGE6IEludmFsaWQgVGV4dHVyZSBBdGxhcyBYTUwgZ2l2ZW4sIG1pc3NpbmcgPFRleHR1cmVBdGxhcz4gdGFnXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gIExldCdzIGNyZWF0ZSBzb21lIGZyYW1lcyB0aGVuXG4gICAgdmFyIGRhdGEgPSBuZXcgUGhhc2VyLkZyYW1lRGF0YSgpO1xuICAgIHZhciBmcmFtZXMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1N1YlRleHR1cmUnKTtcbiAgICB2YXIgbmV3RnJhbWU7XG5cbiAgICB2YXIgbmFtZTtcbiAgICB2YXIgZnJhbWU7XG4gICAgdmFyIHg7XG4gICAgdmFyIHk7XG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG4gICAgdmFyIGZyYW1lWDtcbiAgICB2YXIgZnJhbWVZO1xuICAgIHZhciBmcmFtZVdpZHRoO1xuICAgIHZhciBmcmFtZUhlaWdodDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgZnJhbWUgPSBmcmFtZXNbaV0uYXR0cmlidXRlcztcblxuICAgICAgICBuYW1lID0gZnJhbWUubmFtZS52YWx1ZTtcbiAgICAgICAgeCA9IHBhcnNlSW50KGZyYW1lLngudmFsdWUsIDEwKTtcbiAgICAgICAgeSA9IHBhcnNlSW50KGZyYW1lLnkudmFsdWUsIDEwKTtcbiAgICAgICAgd2lkdGggPSBwYXJzZUludChmcmFtZS53aWR0aC52YWx1ZSwgMTApO1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUludChmcmFtZS5oZWlnaHQudmFsdWUsIDEwKTtcblxuICAgICAgICBmcmFtZVggPSBudWxsO1xuICAgICAgICBmcmFtZVkgPSBudWxsO1xuXG4gICAgICAgIGlmIChmcmFtZS5mcmFtZVgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZyYW1lWCA9IE1hdGguYWJzKHBhcnNlSW50KGZyYW1lLmZyYW1lWC52YWx1ZSwgMTApKTtcbiAgICAgICAgICAgIGZyYW1lWSA9IE1hdGguYWJzKHBhcnNlSW50KGZyYW1lLmZyYW1lWS52YWx1ZSwgMTApKTtcbiAgICAgICAgICAgIGZyYW1lV2lkdGggPSBwYXJzZUludChmcmFtZS5mcmFtZVdpZHRoLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICBmcmFtZUhlaWdodCA9IHBhcnNlSW50KGZyYW1lLmZyYW1lSGVpZ2h0LnZhbHVlLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdGcmFtZSA9IGRhdGEuYWRkRnJhbWUobmV3IFBoYXNlci5GcmFtZShpLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBuYW1lKSk7XG5cbiAgICAgICAgLy8gIFRyaW1tZWQ/XG4gICAgICAgIGlmIChmcmFtZVggIT09IG51bGwgfHwgZnJhbWVZICE9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdGcmFtZS5zZXRUcmltKHRydWUsIHdpZHRoLCBoZWlnaHQsIGZyYW1lWCwgZnJhbWVZLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFybGluZ1hNTFRleHR1cmVQYXJzZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZXh0dXJlcy9wYXJzZXJzL1N0YXJsaW5nWE1MVGV4dHVyZVBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDYW52YXM6IHJlcXVpcmUoJy4vQ2FudmFzVGV4dHVyZVBhcnNlcicpLFxuICAgIEltYWdlOiByZXF1aXJlKCcuL0ltYWdlVGV4dHVyZVBhcnNlcicpLFxuICAgIFNwcml0ZVNoZWV0OiByZXF1aXJlKCcuL1Nwcml0ZVNoZWV0VGV4dHVyZVBhcnNlcicpLFxuICAgIEpTT05BcnJheTogcmVxdWlyZSgnLi9KU09OQXJyYXlUZXh0dXJlUGFyc2VyJyksXG4gICAgSlNPTkhhc2g6IHJlcXVpcmUoJy4vSlNPTkhhc2hUZXh0dXJlUGFyc2VyJyksXG4gICAgU3RhcmxpbmdYTUw6IHJlcXVpcmUoJy4vU3RhcmxpbmdYTUxUZXh0dXJlUGFyc2VyJyksXG4gICAgUHl4ZWw6IHJlcXVpcmUoJy4vUHl4ZWxUZXh0dXJlUGFyc2VyJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZXh0dXJlcy9wYXJzZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90ZXh0dXJlcy9wYXJzZXJzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9yaWNoL0RvY3VtZW50cy9waGFzZXIvdjMvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BoYXNlci5qcyIsInJlcXVpcmUoJy4vcG9seWZpbGxzJyk7XG5cbnZhciBib290ID0gcmVxdWlyZSgnLi9ib290Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm9vdDtcblxuZ2xvYmFsLlBoYXNlciA9IGJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9waGFzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=