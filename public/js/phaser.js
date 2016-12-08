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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

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
    FILE_WAITING_LINKFILE: 10,   // file is being processed (onProcess callback)
    FILE_ERRORED: 11,   // file is being processed (onProcess callback)
    FILE_COMPLETE: 12,     // file has finished processing
    FILE_DESTROYED: 13,     // file has been destroyed

    TEXTURE_ATLAS_JSON_ARRAY: 20,
    TEXTURE_ATLAS_JSON_HASH: 21

};

module.exports = FILE_CONST;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Children: __webpack_require__(30),
    Color: __webpack_require__(31),
    Data: __webpack_require__(32),
    Transform: __webpack_require__(33)

};


/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var EventBinding = __webpack_require__(42);

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(15);

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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(1);
var Browser = __webpack_require__(2);
var CanvasPool = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(50);
var CONST = __webpack_require__(3);
var XHRLoader = __webpack_require__(52);
var XHRSettings = __webpack_require__(8);

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
    this.linkFile = undefined;
    this.linkType = '';

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

        this.onComplete();

        callback(this);
    },

    onComplete: function ()
    {
        if (this.linkFile)
        {
            if (this.linkFile.state === CONST.FILE_WAITING_LINKFILE)
            {
                //  The linkfile has finished processing, and is waiting for this file, so let's do them both
                this.state = CONST.FILE_COMPLETE;
                this.linkFile.state = CONST.FILE_COMPLETE;
            }
            else
            {
                //  The linkfile still hasn't finished loading and/or processing yet
                this.state = CONST.FILE_WAITING_LINKFILE;
            }
        }
        else
        {
            this.state = CONST.FILE_COMPLETE;
        }
    },

    //  Called by the Loader, starts the actual file downloading
    load: function (callback, baseURL, globalXHR)
    {
        if (baseURL === undefined) { baseURL = ''; }

        this.callback = callback;

        this.src = GetURL(this, baseURL);

        if (this.src.indexOf('data:') === 0)
        {
            console.log('Local data URI');
        }
        else
        {
            this.xhrLoader = XHRLoader(this, globalXHR);
        }
    }
};

module.exports = File;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(15);

var JSONFile = function (key, url, path)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.json\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.json';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'json', key, url, 'text');
};

JSONFile.prototype = Object.create(File.prototype);
JSONFile.prototype.constructor = JSONFile;

JSONFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = JSON.parse(this.xhrLoader.responseText);

    this.onComplete();

    callback(this);
};

module.exports = JSONFile;


/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(0);
var GetObjectValue = __webpack_require__(10);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(6);
var GameObjectFactory = __webpack_require__(75);
// var GameObjectCreator = require('./systems/GameObjectCreator');
var Loader = __webpack_require__(76);
var MainLoop = __webpack_require__(77);
var UpdateManager = __webpack_require__(78);
var Component = __webpack_require__(4);
var Camera = __webpack_require__(28);

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
        this.state.textures = this.textures;



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
/* 21 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(27),

    Event: __webpack_require__(5),
    EventDispatcher: __webpack_require__(6),

    Loader: {
        ImageFile: __webpack_require__(9)
    }

};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(64);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(63);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var NOOP = __webpack_require__(21);
var GetObjectValue = __webpack_require__(10);

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CanvasPool = __webpack_require__(13);
var Features = __webpack_require__(12);
var WebGLRenderer = __webpack_require__(69);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CHECKSUM = __webpack_require__(29);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(38);
var Config = __webpack_require__(24);
var DebugHeader = __webpack_require__(26);
var CreateRenderer = __webpack_require__(25);
var RequestAnimationFrame = __webpack_require__(41);
var DOMContentLoaded = __webpack_require__(40);
var RandomDataGenerator = __webpack_require__(58);
var StateManager = __webpack_require__(74);
var FactoryContainer = __webpack_require__(7);
var GameObjects = __webpack_require__(48);
var TextureManager = __webpack_require__ (82);
var AddToDOM = __webpack_require__(39);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Component = __webpack_require__(4);

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
/* 29 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '9354db50-bd64-11e6-b222-331fc2fa5bec'
};
module.exports = CHECKSUM;

/***/ },
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(1);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(12);
var Input = __webpack_require__(36);
var Audio = __webpack_require__(34);
var Video = __webpack_require__(37);
var Fullscreen = __webpack_require__(35);

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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(14);
var EventListener = __webpack_require__(43);

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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(14);

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var Component = __webpack_require__(4);

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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var GameObject = __webpack_require__(44);
var ImageWebGLRenderer = __webpack_require__(47);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(45);
var FactoryContainer = __webpack_require__(7);

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

        // console.log('ImageFactory.add', key, x, y, frame, group);
        // console.log('into State', this.state);

        return group.children.add(new Image(this.state, x, y, key, frame));
    },

    make: function (x, y, key, frame)
    {
        // console.log('ImageFactory.make', key, x, y, frame);

        return new Image(this.state, x, y, key, frame);
    }

};

module.exports = FactoryContainer.register(ImageFactory);


/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__(46);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var Set = __webpack_require__(79);
var XHRSettings = __webpack_require__(8);
var Event = __webpack_require__(55);
var EventDispatcher = __webpack_require__(6);

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
    this.maxParallelDownloads = 4;

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
        if (file.linkFile)
        {
            var fileA = file;
            var fileB = file.linkFile;

            fileA.path = this.path;
            fileB.path = this.path;

            this.list.add(fileA);
            this.list.add(fileB);
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
        console.log('BaseLoader start. Files to load:', this.list.size);

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

            this.queue.debug = true;

            this.updateProgress();

            this.processLoadQueue();
        }
    },

    updateProgress: function ()
    {

    },

    processLoadQueue: function ()
    {
        // console.log('======== BaseLoader processLoadQueue');
        // console.log('List size', this.list.size);
        // console.log(this.inflight.size, 'items still in flight. Can load another', (this.maxParallelDownloads - this.inflight.size));

        var _this = this;

        this.list.each(function (file)
        {
            if (file.state === CONST.FILE_PENDING && _this.inflight.size < _this.maxParallelDownloads)
            {
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
        // console.log('---> BaseLoader.finishedLoading PROCESSING', this.queue.size, 'files');

        this._state = CONST.LOADER_PROCESSING;

        this.storage.clear();

        var _this = this;

        this.queue.each(function (file)
        {
            // console.log('%c Calling process on ' + file.key, 'color: #000000; background: #ffff00;');

            file.onProcess(_this.processUpdate.bind(_this));
        });
    },

    //  Called automatically by the File when it has finished processing
    processUpdate: function (file)
    {
        // console.log('-> processUpdate', file.key, file.state);

        //  This file has failed to load, so move it to the failed Set
        if (file.state === CONST.FILE_ERRORED)
        {
            this.failed.add(file);

            if (file.linkFile)
            {
                this.queue.delete(file.linkFile);
            }

            return this.removeFromQueue(file);
        }

        //  If we got here, then the file loaded

        //  Special handling for multi-part files

        if (file.linkFile)
        {
            if (file.state === CONST.FILE_COMPLETE && file.linkFile.state === CONST.FILE_COMPLETE)
            {
                //  Partner has loaded, so add them both to Storage

                this.storage.add({ type: file.linkType, fileA: file, fileB: file.linkFile });

                this.queue.delete(file.linkFile);

                this.removeFromQueue(file);
            }
        }
        else
        {
            this.storage.add(file);

            this.removeFromQueue(file);
        }
    },

    removeFromQueue: function (file)
    {
        this.queue.delete(file);

        if (this.queue.size === 0 && this._state === CONST.LOADER_PROCESSING)
        {
            //  We've processed all the files we loaded
            this.processComplete();
        }
    },

    processComplete: function ()
    {
        console.log('Loader Complete. Loaded:', this.storage.size, 'Failed:', this.failed.size);

        this.list.clear();
        this.inflight.clear();
        this.queue.clear();

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
/* 50 */
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
        return baseURL + file.url;
    }
};

module.exports = GetURL;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var XHRSettings = __webpack_require__(8);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(51);

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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(5);

var LoaderCompleteEvent = function (loader)
{
    Event.call(this, 'LOADER_COMPLETE_EVENT');

    this.loader = loader;
};

LoaderCompleteEvent.prototype = Object.create(Event.prototype);
LoaderCompleteEvent.prototype.constructor = LoaderCompleteEvent;

module.exports = LoaderCompleteEvent;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(5);

var LoaderStartEvent = function (loader)
{
    Event.call(this, 'LOADER_START_EVENT');

    this.loader = loader;
};

LoaderStartEvent.prototype = Object.create(Event.prototype);
LoaderStartEvent.prototype.constructor = LoaderStartEvent;

module.exports = LoaderStartEvent;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(54),
    LOADER_COMPLETE_EVENT: __webpack_require__(53)

};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var ImageFile = __webpack_require__(9);
var JSONFile = __webpack_require__(16);

var AtlasJSONFile = function (key, textureURL, atlasURL, path)
{
    var image = new ImageFile(key, textureURL, path);
    var data = new JSONFile(key, atlasURL, path);

    //  Link them together
    image.linkFile = data;
    data.linkFile = image;

    //  Set the type
    image.linkType = 'atlasjson';
    data.linkType = 'atlasjson';

    return image;
};

module.exports = AtlasJSONFile;


/***/ },
/* 57 */
/***/ function(module, exports) {

/**
* Checks if the given dimensions make a power of two texture.
* 
* @method Phaser.Math#isPowerOfTwo
* @param {number} width - The width to check.
* @param {number} height - The height to check.
* @return {boolean} True if the width and height are a power of two.
*/
var IsSizePowerOfTwo = function (width, height)
{
    return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
};

module.exports = IsSizePowerOfTwo;


/***/ },
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var SingleTextureBatch = __webpack_require__(71);
var MultiTextureBatch = __webpack_require__(70);

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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Mat Groves (@Doormat23)
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var CreateEmptyTexture = __webpack_require__(18);
var QuadFBO = __webpack_require__(72);
var BatchManager = __webpack_require__(67);
var ShaderManager = __webpack_require__(68);

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var BaseBatch = __webpack_require__(17);

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var BaseBatch = __webpack_require__(17);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CreateEmptyTexture = __webpack_require__(18);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(19);
var Systems = __webpack_require__(20);

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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var NOOP = __webpack_require__(21);
var State = __webpack_require__(73);
var Settings = __webpack_require__(19);
var Systems = __webpack_require__(20);
var GetObjectValue = __webpack_require__(10);
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var FactoryContainer = __webpack_require__(7);

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(3);
var BaseLoader = __webpack_require__(49);
var ImageFile = __webpack_require__(9);
var JSONFile = __webpack_require__(16);
var AtlasJSONFile = __webpack_require__(56);
var NumberArray = __webpack_require__(92);

var Loader = function (state)
{
    BaseLoader.call(this);

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    this.state = state;

    this._multilist = {};
};

Loader.prototype = Object.create(BaseLoader.prototype);
Loader.prototype.constructor = Loader;

Loader.prototype.image = function (key, url)
{
    var file = new ImageFile(key, url, this.path);

    this.addFile(file);

    return this;
};

Loader.prototype.json = function (key, url)
{
    var file = new JSONFile(key, url, this.path);

    this.addFile(file);

    return this;
};

Loader.prototype.atlas = function (key, textureURL, atlasURL)
{
    var file = new AtlasJSONFile(key, textureURL, atlasURL, this.path);

    this.addFile(file);

    return this;
};

Loader.prototype.multiatlas = function (key, textureURLs, atlasURLs)
{
    if (typeof textureURLs === 'number')
    {
        var total = textureURLs;

        textureURLs = NumberArray(0, total, key + '-', '.png');
        atlasURLs = NumberArray(0, total, key + '-', '.json');
    }
    else
    {
        if (!Array.isArray(textureURLs))
        {
            textureURLs = [ textureURLs ];
        }

        if (!Array.isArray(atlasURLs))
        {
            atlasURLs = [ atlasURLs ];
        }
    }

    var i = 0;
    var multiKey;

    this._multilist[key] = [];

    for (i = 0; i < textureURLs.length; i++)
    {
        multiKey = '_MA_IMG_' + key + '_' + i.toString();

        this.addFile(new ImageFile(multiKey, textureURLs[i], this.path));

        this._multilist[key].push(multiKey);
    }

    for (i = 0; i < atlasURLs.length; i++)
    {
        multiKey = '_MA_JSON_' + key + '_' + i.toString();

        this.addFile(new JSONFile(multiKey, atlasURLs[i], this.path));

        this._multilist[key].push(multiKey);
    }
};

//  The Loader has finished
Loader.prototype.processCallback = function ()
{
    if (this.storage.size === 0)
    {
        return;
    }

    //  The global Texture Manager
    var textures = this.state.sys.textures;

    //  Process multiatlas groups first

    var file;

    for (var key in this._multilist)
    {
        var data = [];
        var images = [];
        var keys = this._multilist[key];

        for (var i = 0; i < keys.length; i++)
        {
            file = this.storage.get('key', keys[i]);

            if (file)
            {
                if (file.type === 'image')
                {
                    images.push(file.data);
                }
                else if (file.type === 'json')
                {
                    data.push(file.data);
                }

                this.storage.delete(file);
            }
        }

        //  Do we have everything needed?
        if (images.length + data.length === keys.length)
        {
            //  Yup, add them to the Texture Manager

            //  Is the data JSON Hash or JSON Array?
            if (Array.isArray(data[0].frames))
            {
                textures.addAtlasJSONArray(key, images, data);
            }
            else
            {
                textures.addAtlasJSONHash(key, images, data);
            }
        }
    }

    this.storage.each(function (file)
    {
        if (file.type === 'image')
        {
            textures.addImage(file.key, file.data);
        }
        else if (file.type === 'atlasjson')
        {
            var fileA = file.fileA;
            var fileB = file.fileB;

            if (fileA.type === 'image')
            {
                textures.addAtlas(fileA.key, fileA.data, fileB.data);
            }
            else
            {
                textures.addAtlas(fileB.key, fileB.data, fileA.data);
            }
        }
        else if (file.type === 'json')
        {
            // console.dir(file.data);
        }
    });

    this.storage.clear();
};

module.exports = Loader;


/***/ },
/* 77 */
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
/* 78 */
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
/* 79 */
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

    dump: function ()
    {
        console.group('Set');

        for (var i = 0; i < this.values.length; i++)
        {
            var entry = this.values[i];
            console.log(entry);
        }

        console.groupEnd();
    },

    get: function (property, value)
    {
        for (var i = 0; i < this.values.length; i++)
        {
            var entry = this.values[i];

            if (entry[property] === value)
            {
                return entry;
            }
        }
    },

    //  For when you know this Set will be modified during the iteration
    each: function (callback)
    {
        var temp = this.values.slice();

        for (var i = 0; i < temp.length; i++)
        {
            if (callback(temp[i]) === false)
            {
                break;
            }
        }
    },

    //  For when you absolutely know this Set won't be modified during the iteration
    iterate: function (callback)
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Frame = __webpack_require__(80);
var TextureSource = __webpack_require__(83);

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

            return this.frames['__BASE'];
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Parser = __webpack_require__(91);
var Texture = __webpack_require__(81);

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

    addAtlas: function (key, source, data)
    {
        //  Is it a Hash or an Array?

        if (Array.isArray(data.frames))
        {
            return this.addAtlasJSONArray(key, source, data);
        }
        else
        {
            return this.addAtlasJSONHash(key, source, data);
        }
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(0);
var IsSizePowerOfTwo = __webpack_require__(57);

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
    this.isPowerOf2 = IsSizePowerOfTwo(this.width, this.height);

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
/* 84 */
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
/* 85 */
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
/* 86 */
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

    //  Add in a __BASE entry (for the entire atlas)
    var source = texture.source[sourceIndex];
    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

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
/* 87 */
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

    //  Add in a __BASE entry (for the entire atlas)
    var source = texture.source[sourceIndex];
    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

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
/* 88 */
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
/* 89 */
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
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {


module.exports = {
    Canvas: __webpack_require__(84),
    Image: __webpack_require__(85),
    SpriteSheet: __webpack_require__(89),
    JSONArray: __webpack_require__(86),
    JSONHash: __webpack_require__(87),
    StarlingXML: __webpack_require__(90),
    Pyxel: __webpack_require__(88)
};


/***/ },
/* 92 */
/***/ function(module, exports) {

/**
* Create an array representing the range of numbers (usually integers), between, and inclusive of,
* the given `start` and `end` arguments. For example:
*
* `var array = numberArray(2, 4); // array = [2, 3, 4]`
* `var array = numberArray(0, 9); // array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
* 
* This is equivalent to `numberArrayStep(start, end, 1)`.
* 
* You can optionally provide a prefix and / or suffix string. If given the array will contain
* strings, not integers. For example:
* 
* `var array = numberArray(1, 4, 'Level '); // array = ["Level 1", "Level 2", "Level 3", "Level 4"]`
* `var array = numberArray(5, 7, 'HD-', '.png'); // array = ["HD-5.png", "HD-6.png", "HD-7.png"]`
*
* @method Phaser.ArrayUtils#numberArray
* @param {number} start - The minimum value the array starts with.
* @param {number} end - The maximum value the array contains.
* @param {string} [prefix] - Optional prefix to place before the number. If provided the array will contain strings, not integers.
* @param {string} [suffix] - Optional suffix to place after the number. If provided the array will contain strings, not integers.
* @return {number[]|string[]} The array of number values, or strings if a prefix or suffix was provided.
*/
var NumberArray = function (start, end, prefix, suffix)
{
    var result = [];

    for (var i = start; i <= end; i++)
    {
        if (prefix || suffix)
        {
            var key = (prefix) ? prefix + i.toString() : i.toString();

            if (suffix)
            {
                key = key.concat(suffix);
            }

            result.push(key);
        }
        else
        {
            result.push(i);
        }
    }

    return result;
};

module.exports = NumberArray;


/***/ },
/* 93 */
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(23);

var boot = __webpack_require__(22);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZjlhNWRlNWVmMWM2MWNiNzQ5MyIsIndlYnBhY2s6Ly8vLi4vY29uc3QuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvT1MuanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2NvbnN0LmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50LmpzIiwid2VicGFjazovLy8uLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy9zcmMvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0ZpbGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2ZpbGV0eXBlcy9KU09ORmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9maWxldHlwZXMvSlNPTkZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL2JhdGNoZXMvQmFzZUJhdGNoLmpzIiwid2VicGFjazovLy8uLi9yZW5kZXJlci93ZWJnbC91dGlscy9DcmVhdGVFbXB0eVRleHR1cmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC91dGlscy9DcmVhdGVFbXB0eVRleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TeXN0ZW1zLmpzIiwid2VicGFjazovLy8uLi91dGlscy9OT09QLmpzIiwid2VicGFjazovLy8uLi9ib290L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL3BvbHlmaWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ib290L0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9EZWJ1Z0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvRGVidWdIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvR2FtZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi4vY2FtZXJhL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NhbWVyYS9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4uL2NoZWNrc3VtLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL0NoaWxkcmVuLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL0NvbG9yLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9BZGRUb0RPTS5qcyIsIndlYnBhY2s6Ly8vLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vc3JjL2V2ZW50cy9FdmVudEJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9FdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy9zcmMvZXZlbnRzL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlV2ViR0xSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvQmFzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL0dldFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9YSFJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2ZpbGV0eXBlcy9BdGxhc0pTT05GaWxlLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2ZpbGV0eXBlcy9BdGxhc0pTT05GaWxlLmpzIiwid2VicGFjazovLy8uLi9tYXRoL3BvdzIvSXNTaXplUG93ZXJPZlR3by5qcyIsIndlYnBhY2s6Ly8vLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9BcnJheS5pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL01hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9yZW5kZXJlci93ZWJnbC9CYXRjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9CYXRjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL1NoYWRlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlbmRlcmVyL3dlYmdsL1dlYkdMUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9XZWJHTFJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL011bHRpVGV4dHVyZUJhdGNoLmpzIiwid2VicGFjazovLy9zcmMvcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9NdWx0aVRleHR1cmVCYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9TaW5nbGVUZXh0dXJlQmF0Y2guanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL1NpbmdsZVRleHR1cmVCYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcmVuZGVyZXIvd2ViZ2wvdXRpbHMvUXVhZEZCTy5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlbmRlcmVyL3dlYmdsL3V0aWxzL1F1YWRGQk8uanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvTWFpbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RydWN0cy9TZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL0ZyYW1lLmpzIiwid2VicGFjazovLy8uLi90ZXh0dXJlcy9UZXh0dXJlLmpzIiwid2VicGFjazovLy9zcmMvdGV4dHVyZXMvVGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvVGV4dHVyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy90ZXh0dXJlcy9UZXh0dXJlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvVGV4dHVyZVNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3RleHR1cmVzL1RleHR1cmVTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvQ2FudmFzVGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9JbWFnZVRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvSlNPTkFycmF5VGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9KU09OSGFzaFRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvUHl4ZWxUZXh0dXJlUGFyc2VyLmpzIiwid2VicGFjazovLy8uLi90ZXh0dXJlcy9wYXJzZXJzL1Nwcml0ZVNoZWV0VGV4dHVyZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGV4dHVyZXMvcGFyc2Vycy9TdGFybGluZ1hNTFRleHR1cmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RleHR1cmVzL3BhcnNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90ZXh0dXJlcy9wYXJzZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi91dGlscy9hcnJheS9OdW1iZXJBcnJheS5qcyIsIndlYnBhY2s6Ly8vZDovd2FtcC93d3cvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9zcmMvcGhhc2VyLmpzIiwid2VicGFjazovLy8uLi9waGFzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FDekRBLCtDQ0FBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxHQUFHLHVCQUF1QixPQUFPO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyUUEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTyxzR0FBc0c7QUFDOUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFNUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN2QkE7O0FBRUEsY0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxXQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLFVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7Ozs7Ozs7QUVQQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDM0JBLG1CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRXpOQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hELDhCQUE4QixjQUFjO0FBQzVDLDZCQUE2QixXQUFXO0FBQ3hDLGlDQUFpQyxlQUFlO0FBQ2hELGdDQUFnQyxhQUFhOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUN0Q0EsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxXQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFM0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDdENBOztBQUVBO0FBQ0EsaUJBQWlCLGFBQWEsRUFBRTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDbEJBLFNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFck9BO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsSUFBSTtBQUNsQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLG1DQUFtQyxZQUFZO0FBQy9DLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FFeExBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ2JBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxnQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxrQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsY0FBYzs7QUFFbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FFdElBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixXQUFXOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzdKQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUV0QkEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qjs7QUFFdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUV2Q0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLHNCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLHdCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBO0FBQ0EsYUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGdCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGFDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBRWpJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsVUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUEsV0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQSxtQkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQTs7QUFFQTs7Ozs7OztBRVpBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENE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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtB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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEOzs7Ozs7O0FDdllBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDhCQUE4QixPQUFPOztBQUVyQztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsOEJBQThCLE9BQU87O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDhCQUE4QixPQUFPOztBQUVyQztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsOEJBQThCLE9BQU87O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7Ozs7Ozs7QUN2N0JBLFNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsY0NB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QkFBaUI7QUFDakI7O0FBRUEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVyREE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFEQUFxRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzVIQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFclFBLFlDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FFYkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZ0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGLHFCQUFxQjs7QUFFckc7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHlEQUF5RDs7QUFFM0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSx5QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG1CQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQscUJBQXFCOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlEQUF5RCxxQkFBcUI7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUVscEJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxnQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmOztBQUVBLGVBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRS9VQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEseUJDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBRXhjQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV4REE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsNkJBQTZCO0FBQzNDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1COztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLHlCQUF5Qjs7QUFFbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV2aUJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGdCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esb0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOzs7Ozs7O0FFdExBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBRTFIQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLE9BQU87QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLE9BQU87QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLE9BQU87QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QixVQUFVLE9BQU87QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7OENDbkx0QyxtQkNBQSxDREFBLEVDQUE7O0FBRUEsV0RBQSxtQkNBQSxDREFBLEVDQUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGhhc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQaGFzZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBoYXNlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRmOWE1ZGU1ZWYxYzYxY2I3NDkzIiwidmFyIENPTlNUID0ge1xyXG5cclxuICAgIFZFUlNJT046ICczLjAuMCcsXHJcblxyXG4gICAgQVVUTzogMCxcclxuICAgIENBTlZBUzogMSxcclxuICAgIFdFQkdMOiAyLFxyXG5cclxuICAgIElNQUdFOiAyMCxcclxuXHJcbiAgICBzdGF0ZToge1xyXG5cclxuICAgICAgICBQRU5ESU5HOiAwLFxyXG4gICAgICAgIElOU1RBTExFRDogMSxcclxuXHJcbiAgICAgICAgQk9PVDogMCxcclxuICAgICAgICBJTklUOiAxLFxyXG4gICAgICAgIFBSRUxPQUQ6IDIsXHJcbiAgICAgICAgQ1JFQVRFOiAzLFxyXG4gICAgICAgIFVQREFURTogNCxcclxuICAgICAgICBSRU5ERVI6IDUsXHJcbiAgICAgICAgU0hVVERPV046IDZcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJsZW5kTW9kZXM6IHtcclxuXHJcbiAgICAgICAgTk9STUFMOiAwLFxyXG4gICAgICAgIEFERDogMSxcclxuICAgICAgICBNVUxUSVBMWTogMixcclxuICAgICAgICBTQ1JFRU46IDMsXHJcbiAgICAgICAgT1ZFUkxBWTogNCxcclxuICAgICAgICBEQVJLRU46IDUsXHJcbiAgICAgICAgTElHSFRFTjogNixcclxuICAgICAgICBDT0xPUl9ET0RHRTogNyxcclxuICAgICAgICBDT0xPUl9CVVJOOiA4LFxyXG4gICAgICAgIEhBUkRfTElHSFQ6IDksXHJcbiAgICAgICAgU09GVF9MSUdIVDogMTAsXHJcbiAgICAgICAgRElGRkVSRU5DRTogMTEsXHJcbiAgICAgICAgRVhDTFVTSU9OOiAxMixcclxuICAgICAgICBIVUU6IDEzLFxyXG4gICAgICAgIFNBVFVSQVRJT046IDE0LFxyXG4gICAgICAgIENPTE9SOiAxNSxcclxuICAgICAgICBMVU1JTk9TSVRZOiAxNlxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2NhbGVNb2Rlczoge1xyXG5cclxuICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgIExJTkVBUjogMCxcclxuICAgICAgICBORUFSRVNUOiAxXHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ09OU1Q7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9PUy5qcyIsInZhciBPUyA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBkZXNrdG9wIC0gSXMgcnVubmluZyBvbiBhIGRlc2t0b3A/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZGVza3RvcDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViQXBwIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBhcyBhIFdlYkFwcCwgaS5lLiB3aXRoaW4gYSBXZWJWaWV3XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2ViQXBwOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpT1MgLSBJcyBydW5uaW5nIG9uIGlPUz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpT1M6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gaU9TVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gaU9TIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpT1NWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQaG9uZSAtIElzIHJ1bm5pbmcgb24gaVBob25lP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGlQaG9uZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaVBhZCAtIElzIHJ1bm5pbmcgb24gaVBhZD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpUGFkOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjb2Nvb25KUyAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgQ29jb29uSlM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY29jb29uSlM6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjb2Nvb25KU0FwcCAtIElzIHRoaXMgZ2FtZSBydW5uaW5nIHdpdGggQ29jb29uSlMuQXBwP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNvY29vbkpTQXBwOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29yZG92YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgQXBhY2hlIENvcmRvdmE/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY29yZG92YTogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZGUgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIE5vZGUuanM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbm9kZTogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZGVXZWJraXQgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIE5vZGUtV2Via2l0P1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG5vZGVXZWJraXQ6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlbGVjdHJvbiAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgR2l0SHViIEVsZWN0cm9uP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGVsZWN0cm9uOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWplY3RhIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBFamVjdGE/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZWplY3RhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjcm9zc3dhbGsgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIHRoZSBJbnRlbCBDcm9zc3dhbGsgWERLP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNyb3Nzd2FsazogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYW5kcm9pZCAtIElzIHJ1bm5pbmcgb24gYW5kcm9pZD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhbmRyb2lkOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjaHJvbWVPUyAtIElzIHJ1bm5pbmcgb24gY2hyb21lT1M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2hyb21lT1M6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpbnV4IC0gSXMgcnVubmluZyBvbiBsaW51eD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBsaW51eDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbWFjT1MgLSBJcyBydW5uaW5nIG9uIG1hY09TP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1hY09TOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzIC0gSXMgcnVubmluZyBvbiB3aW5kb3dzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdpbmRvd3M6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdpbmRvd3NQaG9uZSAtIElzIHJ1bm5pbmcgb24gYSBXaW5kb3dzIFBob25lP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdpbmRvd3NQaG9uZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdml0YSAtIElzIHJ1bm5pbmcgb24gYSBQbGF5U3RhdGlvbiBWaXRhP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHZpdGE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGtpbmRsZSAtIElzIHJ1bm5pbmcgb24gYW4gQW1hem9uIEtpbmRsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBraW5kbGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gcGl4ZWxSYXRpbyAtIFBpeGVsUmF0aW8gb2YgdGhlIGhvc3QgZGV2aWNlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHBpeGVsUmF0aW86IDFcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4gICAgaWYgKC9XaW5kb3dzLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy53aW5kb3dzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9NYWMgT1MvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLm1hY09TID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9MaW51eC8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MubGludXggPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmFuZHJvaWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL2lQW2FvXWR8aVBob25lL2kudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuaU9TID0gdHJ1ZTtcclxuICAgICAgICAobmF2aWdhdG9yLmFwcFZlcnNpb24pLm1hdGNoKC9PUyAoXFxkKykvKTtcclxuICAgICAgICBPUy5pT1NWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvS2luZGxlLy50ZXN0KHVhKSB8fCAoL1xcYktGW0EtWl1bQS1aXSsvKS50ZXN0KHVhKSB8fCAoL1NpbGsuKk1vYmlsZSBTYWZhcmkvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5raW5kbGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUaGlzIHdpbGwgTk9UIGRldGVjdCBlYXJseSBnZW5lcmF0aW9ucyBvZiBLaW5kbGUgRmlyZSwgSSB0aGluayB0aGVyZSBpcyBubyByZWxpYWJsZSB3YXkuLi5cclxuICAgICAgICAvLyBFLmcuIFwiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgVTsgSW50ZWwgTWFjIE9TIFggMTBfNl8zOyBlbi11czsgU2lsay8xLjEuMC04MCkgQXBwbGVXZWJLaXQvNTMzLjE2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi81LjAgU2FmYXJpLzUzMy4xNiBTaWxrLUFjY2VsZXJhdGVkPXRydWVcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0NyT1MvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmNocm9tZU9TID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvUGxheXN0YXRpb24gVml0YS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLnZpdGEgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgvV2luZG93cyBQaG9uZS9pLnRlc3QodWEpIHx8ICgvSUVNb2JpbGUvaSkudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuYW5kcm9pZCA9IGZhbHNlO1xyXG4gICAgICAgIE9TLmlPUyA9IGZhbHNlO1xyXG4gICAgICAgIE9TLm1hY09TID0gZmFsc2U7XHJcbiAgICAgICAgT1Mud2luZG93cyA9IHRydWU7XHJcbiAgICAgICAgT1Mud2luZG93c1Bob25lID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2lsayA9ICgvU2lsay8pLnRlc3QodWEpO1xyXG5cclxuICAgIGlmIChPUy53aW5kb3dzIHx8IE9TLm1hY09TIHx8IChPUy5saW51eCAmJiAhc2lsaykgfHwgT1MuY2hyb21lT1MpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuZGVza3RvcCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFdpbmRvd3MgUGhvbmUgLyBUYWJsZSByZXNldFxyXG4gICAgaWYgKE9TLndpbmRvd3NQaG9uZSB8fCAoKC9XaW5kb3dzIE5UL2kudGVzdCh1YSkpICYmICgvVG91Y2gvaS50ZXN0KHVhKSkpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmRlc2t0b3AgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgV2ViQXBwIG1vZGUgaW4gaU9TXHJcbiAgICBpZiAobmF2aWdhdG9yLnN0YW5kYWxvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mud2ViQXBwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICE9PSB1bmRlZmluZWQpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuY29yZG92YSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICgodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPT0gJ3VuZGVmaW5lZCcpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLm5vZGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoT1Mubm9kZSAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyA9PT0gJ29iamVjdCcpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mubm9kZVdlYmtpdCA9ICEhcHJvY2Vzcy52ZXJzaW9uc1snbm9kZS13ZWJraXQnXTtcclxuICAgICAgICBcclxuICAgICAgICBPUy5lbGVjdHJvbiA9ICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG5hdmlnYXRvci5pc0NvY29vbkpTKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmNvY29vbkpTID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPUy5jb2Nvb25KU0FwcCA9ICh0eXBlb2YgQ29jb29uSlMgIT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5lamVjdGEgIT09IHVuZGVmaW5lZClcclxuICAgIHtcclxuICAgICAgICBPUy5lamVjdGEgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoL0Nyb3Nzd2Fsay8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmNyb3Nzd2FsayA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgT1MuaVBob25lID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpcGhvbmUnKSAhPT0gLTE7XHJcbiAgICBPUy5pUGFkID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpcGFkJykgIT09IC0xO1xyXG5cclxuICAgIE9TLnBpeGVsUmF0aW8gPSB3aW5kb3dbJ2RldmljZVBpeGVsUmF0aW8nXSB8fCAxO1xyXG5cclxuICAgIHJldHVybiBPUztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9PUy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcblxyXG52YXIgQnJvd3NlciA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhcm9yYSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gQXJvcmEuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgYXJvcmE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNocm9tZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gQ2hyb21lLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNocm9tZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjaHJvbWVWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBDaHJvbWUgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNocm9tZVZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXBpcGhhbnkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEVwaXBoYW55LlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGVwaXBoYW55OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaXJlZm94IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBGaXJlZm94LlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGZpcmVmb3g6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gZmlyZWZveFZlcnNpb24gLSBJZiBydW5uaW5nIGluIEZpcmVmb3ggdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGZpcmVmb3hWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1vYmlsZVNhZmFyaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTW9iaWxlIFNhZmFyaS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtb2JpbGVTYWZhcmk6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGllIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3Jlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpZVZlcnNpb24gLSBJZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci4gQmV5b25kIElFMTAgeW91IHNob3VsZCB1c2UgRGV2aWNlLnRyaWRlbnQgYW5kIERldmljZS50cmlkZW50VmVyc2lvbi5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpZVZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbWlkb3JpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNaWRvcmkuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbWlkb3JpOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvcGVyYSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gT3BlcmEuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgb3BlcmE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNhZmFyaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gU2FmYXJpLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHNhZmFyaTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYWZhcmlWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBTYWZhcmkgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHNhZmFyaVZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdHJpZGVudCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYSBUcmlkZW50IHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgKElFMTErKVxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHRyaWRlbnQ6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gdHJpZGVudFZlcnNpb24gLSBJZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyIDExIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci4gU2VlIHtAbGluayBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvbXM1Mzc1MDModj12cy44NSkuYXNweH1cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0cmlkZW50VmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlZGdlIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNaWNyb3NvZnQgRWRnZSBicm93c2VyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGVkZ2U6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNpbGsgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIHRoZSBTaWxrIGJyb3dzZXIgKGFzIHVzZWQgb24gdGhlIEFtYXpvbiBLaW5kbGUpXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc2lsazogZmFsc2VcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4gICAgaWYgKCgvQXJvcmEvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmFyb3JhID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9FZGdlXFwvXFxkKy8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5lZGdlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvQ2hyb21lXFwvKFxcZCspLykudGVzdCh1YSkgJiYgIU9TLndpbmRvd3NQaG9uZSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmNocm9tZSA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci5jaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL0VwaXBoYW55LykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5lcGlwaGFueSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL0ZpcmVmb3hcXEQrKFxcZCspLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5maXJlZm94ID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLmZpcmVmb3hWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL0FwcGxlV2ViS2l0LykudGVzdCh1YSkgJiYgT1MuaU9TKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIubW9iaWxlU2FmYXJpID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvTVNJRSAoXFxkK1xcLlxcZCspOy8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuaWUgPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIuaWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL01pZG9yaS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIubWlkb3JpID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvT3BlcmEvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLm9wZXJhID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvU2FmYXJpLykudGVzdCh1YSkgJiYgIU9TLndpbmRvd3NQaG9uZSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLnNhZmFyaSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL1RyaWRlbnRcXC8oXFxkK1xcLlxcZCspKC4qKXJ2OihcXGQrXFwuXFxkKykvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmllID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLnRyaWRlbnQgPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIudHJpZGVudFZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgICAgICBCcm93c2VyLmllVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMywgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBTaWxrIGdldHMgaXRzIG93biBpZiBjbGF1c2UgYmVjYXVzZSBpdHMgdWEgYWxzbyBjb250YWlucyAnU2FmYXJpJ1xyXG4gICAgaWYgKCgvU2lsay8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuc2lsayA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJyb3dzZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvQnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvQnJvd3Nlci5qcyIsInZhciBGSUxFX0NPTlNUID0ge1xyXG5cclxuICAgIExPQURFUl9JRExFOiAwLFxyXG4gICAgTE9BREVSX0xPQURJTkc6IDEsXHJcbiAgICBMT0FERVJfUFJPQ0VTU0lORzogMixcclxuICAgIExPQURFUl9DT01QTEVURTogMyxcclxuICAgIExPQURFUl9ERVNUUk9ZRUQ6IDQsXHJcblxyXG4gICAgRklMRV9QRU5ESU5HOiA1LCAgICAgIC8vIGZpbGUgaXMgaW4gdGhlIGxvYWQgcXVldWUgYnV0IG5vdCB5ZXQgc3RhcnRlZFxyXG4gICAgRklMRV9MT0FESU5HOiA2LCAgICAgIC8vIGZpbGUgaGFzIGJlZW4gc3RhcnRlZCB0byBsb2FkIGJ5IHRoZSBsb2FkZXIgKG9uTG9hZCBjYWxsZWQpXHJcbiAgICBGSUxFX0xPQURFRDogNywgICAgICAgLy8gZmlsZSBoYXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSwgYXdhaXRpbmcgcHJvY2Vzc2luZ1xyXG4gICAgRklMRV9GQUlMRUQ6IDgsICAgICAgIC8vIGZpbGUgZmFpbGVkIHRvIGxvYWRcclxuICAgIEZJTEVfUFJPQ0VTU0lORzogOSwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxyXG4gICAgRklMRV9XQUlUSU5HX0xJTktGSUxFOiAxMCwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxyXG4gICAgRklMRV9FUlJPUkVEOiAxMSwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxyXG4gICAgRklMRV9DT01QTEVURTogMTIsICAgICAvLyBmaWxlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nXHJcbiAgICBGSUxFX0RFU1RST1lFRDogMTMsICAgICAvLyBmaWxlIGhhcyBiZWVuIGRlc3Ryb3llZFxyXG5cclxuICAgIFRFWFRVUkVfQVRMQVNfSlNPTl9BUlJBWTogMjAsXHJcbiAgICBURVhUVVJFX0FUTEFTX0pTT05fSEFTSDogMjFcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZJTEVfQ09OU1Q7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9jb25zdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBDaGlsZHJlbjogcmVxdWlyZSgnLi9DaGlsZHJlbicpLFxyXG4gICAgQ29sb3I6IHJlcXVpcmUoJy4vQ29sb3InKSxcclxuICAgIERhdGE6IHJlcXVpcmUoJy4vRGF0YScpLFxyXG4gICAgVHJhbnNmb3JtOiByZXF1aXJlKCcuL1RyYW5zZm9ybScpXHJcblxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ2YXIgRXZlbnQgPSBmdW5jdGlvbiAodHlwZSlcclxue1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuXHJcbiAgICB0aGlzLnRhcmdldDtcclxuXHJcbiAgICB0aGlzLl9wcm9wYWdhdGUgPSB0cnVlO1xyXG59O1xyXG5cclxuRXZlbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnQ7XHJcblxyXG5FdmVudC5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9wYWdhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50QmluZGluZyA9IHJlcXVpcmUoJy4vRXZlbnRCaW5kaW5nJyk7XHJcblxyXG52YXIgRXZlbnREaXNwYXRjaGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xyXG4gICAgdGhpcy5maWx0ZXJzID0gW107XHJcbiAgICB0aGlzLmhhc0ZpbHRlcnMgPSBmYWxzZTtcclxufTtcclxuXHJcbkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudERpc3BhdGNoZXI7XHJcblxyXG5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGdldEJpbmRpbmc6IGZ1bmN0aW9uICh0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmJpbmRpbmdzLmhhc093blByb3BlcnR5KHR5cGUpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbdHlwZV07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVCaW5kaW5nOiBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0QmluZGluZyh0eXBlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbdHlwZV0gPSBuZXcgRXZlbnRCaW5kaW5nKHRoaXMsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbdHlwZV07XHJcbiAgICB9LFxyXG5cclxuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHByaW9yaXR5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7IHByaW9yaXR5ID0gMDsgfVxyXG5cclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLmFkZChsaXN0ZW5lciwgcHJpb3JpdHksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbmNlOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHByaW9yaXR5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7IHByaW9yaXR5ID0gMDsgfVxyXG5cclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLmFkZChsaXN0ZW5lciwgcHJpb3JpdHksIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBBZGQgYSBjYWxsYmFjayB0aGF0IGlzIG5vdGlmaWVkIGV2ZXJ5IHRpbWUgdGhpcyBFdmVudERpc3BhdGNoZXIgZGlzcGF0Y2hlcyBhbiBldmVudFxyXG4gICAgLy8gIG5vIG1hdHRlciB3aGF0IHRoZSBldmVudCB0eXBlIGlzLiBGaWx0ZXJzIGFyZSBpbnZva2VkIGZpcnN0LCBiZWZvcmUgYW55IGJpbmRpbmdzLFxyXG4gICAgLy8gIGFuZCBjYW4gc3RvcCBldmVudHMgaWYgdGhleSB3aXNoIChpbiB3aGljaCBjYXNlIHRoZXknbGwgbmV2ZXIgcmVhY2ggdGhlIGJpbmRpbmdzKVxyXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmZpbHRlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIGlmIChpID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBBZGQgdGhlIGZpbHRlclxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBSZW1vdmUgdGhlIGZpbHRlclxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhc0ZpbHRlcnMgPSAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgaGFzOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChiaW5kaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuaGFzKGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG90YWw6IGZ1bmN0aW9uICh0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xyXG5cclxuICAgICAgICBpZiAoYmluZGluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLnRvdGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lci5cclxuICAgIC8vICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBsaXN0ZW5lciByZWdpc3RlcmVkIHdpdGggdGhlIEV2ZW50RGlzcGF0Y2hlciwgYSBjYWxsIHRvIHRoaXMgbWV0aG9kIGhhcyBubyBlZmZlY3QuXHJcbiAgICBvZmY6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcilcclxuICAgIHtcclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLnJlbW92ZShsaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgX2Rpc3BhdGNoSGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnJlc2V0KHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgUGFzcyB0aGUgZXZlbnQgdGhyb3VnaCB0aGUgZmlsdGVycyBmaXJzdFxyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXJzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbHRlcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tpXS5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgRGlkIHRoZSBmaWx0ZXIga2lsbCB0aGUgZXZlbnQ/IElmIHNvLCB3ZSBjYW4gYWJvcnQgbm93XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Ll9wcm9wYWdhdGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyhldmVudC50eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hIYW5kbGVyKGV2ZW50W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFJlbW92ZXMgYWxsIGxpc3RlbmVycywgYnV0IHJldGFpbnMgdGhlIGV2ZW50IHR5cGUgZW50cmllc1xyXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZUFsbEZpbHRlcnM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuaGFzRmlsdGVycyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlOiBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGJpbmRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW3R5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZUFsbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBiaW5kaW5nIGluIHRoaXMuYmluZGluZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsRmlsdGVycygpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnREaXNwYXRjaGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgZ2xvYmFsIGxldmVsIGNvbnRhaW5lciBvZiBGYWN0b3J5IGluc3RhbmNlcy5cclxuKiBGYWN0b3JpZXMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB3aXRoIHRoaXMgY29udGFpbmVyICh3aGVuIHJlcXVpcmVkKVxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcblxyXG52YXIgZmFjdG9yaWVzID0ge307XHJcblxyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIC8vIGNvbnNvbGUubG9nKCdGYWN0b3J5Q29udGFpbmVyIGlzIGFsaXZlJyk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uIChmYWN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChmYWN0b3JpZXMuaGFzT3duUHJvcGVydHkoZmFjdG9yeS5LRVkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FscmVhZHkgcmVnaXN0ZXJlZCcsIGZhY3RvcnkuS0VZKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFR5cGUoZmFjdG9yeS5LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nJywgZmFjdG9yeS5LRVkpO1xyXG5cclxuICAgICAgICBmYWN0b3JpZXNbZmFjdG9yeS5LRVldID0ge1xyXG4gICAgICAgICAgICBhZGQ6IGZhY3RvcnkuYWRkLFxyXG4gICAgICAgICAgICBtYWtlOiBmYWN0b3J5Lm1ha2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmFjdG9yeTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFjdG9yaWVzW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uIChkZXN0LCBpc0ZhY3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgZmFjdG9yeSBpbiBmYWN0b3JpZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZycsIGZhY3RvcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlc3RbZmFjdG9yeV0gPSAoaXNGYWN0b3J5KSA/IGZhY3Rvcmllc1tmYWN0b3J5XS5hZGQgOiBmYWN0b3JpZXNbZmFjdG9yeV0ubWFrZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGYWN0b3J5Q29udGFpbmVyKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIENyZWF0ZXMgYW4gWEhSU2V0dGluZ3MgT2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHJcbnZhciBYSFJTZXR0aW5ncyA9IGZ1bmN0aW9uIChyZXNwb25zZVR5cGUsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCwgdGltZW91dClcclxue1xyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkKSB7IHJlc3BvbnNlVHlwZSA9ICcnOyB9XHJcbiAgICBpZiAoYXN5bmMgPT09IHVuZGVmaW5lZCkgeyBhc3luYyA9IHRydWU7IH1cclxuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHsgdXNlciA9ICcnOyB9XHJcbiAgICBpZiAocGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyBwYXNzd29yZCA9ICcnOyB9XHJcbiAgICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7IHRpbWVvdXQgPSAwOyB9XHJcblxyXG4gICAgLy8gQmVmb3JlIHNlbmRpbmcgYSByZXF1ZXN0LCBzZXQgdGhlIHhoci5yZXNwb25zZVR5cGUgdG8gXCJ0ZXh0XCIsIFxyXG4gICAgLy8gXCJhcnJheWJ1ZmZlclwiLCBcImJsb2JcIiwgb3IgXCJkb2N1bWVudFwiLCBkZXBlbmRpbmcgb24geW91ciBkYXRhIG5lZWRzLiBcclxuICAgIC8vIE5vdGUsIHNldHRpbmcgeGhyLnJlc3BvbnNlVHlwZSA9ICcnIChvciBvbWl0dGluZykgd2lsbCBkZWZhdWx0IHRoZSByZXNwb25zZSB0byBcInRleHRcIi5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgSWdub3JlZCBieSB0aGUgTG9hZGVyLCBvbmx5IHVzZWQgYnkgRmlsZS5cclxuICAgICAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcclxuXHJcbiAgICAgICAgYXN5bmM6IGFzeW5jLFxyXG5cclxuICAgICAgICAvLyAgY3JlZGVudGlhbHNcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuXHJcbiAgICAgICAgLy8gIHRpbWVvdXQgaW4gbXMgKDAgPSBubyB0aW1lb3V0KVxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcblxyXG4gICAgICAgIC8vICBzZXRSZXF1ZXN0SGVhZGVyXHJcbiAgICAgICAgaGVhZGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaGVhZGVyVmFsdWU6IHVuZGVmaW5lZCxcclxuXHJcbiAgICAgICAgLy8gIG92ZXJyaWRlTWltZVR5cGVcclxuICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiB1bmRlZmluZWRcclxuXHJcbiAgICB9O1xyXG4gICAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFhIUlNldHRpbmdzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBGaWxlID0gcmVxdWlyZSgnLi4vRmlsZScpO1xyXG5cclxudmFyIEltYWdlRmlsZSA9IGZ1bmN0aW9uIChrZXksIHVybCwgcGF0aClcclxue1xyXG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgeyBwYXRoID0gJyc7IH1cclxuXHJcbiAgICBpZiAoIWtleSlcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNhbGxpbmcgXFwnTG9hZGVyLmltYWdlXFwnIGludmFsaWQga2V5IHByb3ZpZGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHVybCA9IHBhdGggKyBrZXkgKyAnLnBuZyc7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdXJsID0gcGF0aC5jb25jYXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBGaWxlLmNhbGwodGhpcywgJ2ltYWdlJywga2V5LCB1cmwsICdibG9iJyk7XHJcbn07XHJcblxyXG5JbWFnZUZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGaWxlLnByb3RvdHlwZSk7XHJcbkltYWdlRmlsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWFnZUZpbGU7XHJcblxyXG5JbWFnZUZpbGUucHJvdG90eXBlLm9uUHJvY2VzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaylcclxue1xyXG4gICAgdGhpcy5zdGF0ZSA9IENPTlNULkZJTEVfUFJPQ0VTU0lORztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICB0aGlzLmRhdGEuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xyXG5cclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5kYXRhLm9ubG9hZCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChfdGhpcy5kYXRhLnNyYyk7XHJcblxyXG4gICAgICAgIF90aGlzLm9uQ29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX3RoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRhdGEub25lcnJvciA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChfdGhpcy5kYXRhLnNyYyk7XHJcblxyXG4gICAgICAgIF90aGlzLnN0YXRlID0gQ09OU1QuRklMRV9FUlJPUkVEO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhfdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGF0YS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMueGhyTG9hZGVyLnJlc3BvbnNlKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VGaWxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIi8vICBTb3VyY2Ugb2JqZWN0XHJcbi8vICBUaGUga2V5IGFzIGEgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBrZXlzLCBpLmUuICdiYW5uZXInLCBvciAnYmFubmVyLmhpZGVCYW5uZXInXHJcbi8vICBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0XHJcblxyXG52YXIgR2V0T2JqZWN0VmFsdWUgPSBmdW5jdGlvbiAoc291cmNlLCBrZXksIGRlZmF1bHRWYWx1ZSlcclxue1xyXG4gICAgaWYgKGtleS5pbmRleE9mKCcuJykpXHJcbiAgICB7XHJcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50ID0gc291cmNlO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gIFVzZSBmb3IgbG9vcCBoZXJlIHNvIHdlIGNhbiBicmVhayBlYXJseVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzT3duUHJvcGVydHkoa2V5c1tpXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBZZXMgaXQgaGFzIGEga2V5IHByb3BlcnR5LCBsZXQncyBjYXJyeSBvbiBkb3duXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmVudFtrZXlzW2ldXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnRba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgPyBzb3VyY2Vba2V5XSA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdldE9iamVjdFZhbHVlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XHJcblxyXG52YXIgRmVhdHVyZXMgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2FudmFzIC0gSXMgY2FudmFzIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgez9ib29sZWFufSBjYW52YXNCaXRCbHRTaGlmdCAtIFRydWUgaWYgY2FudmFzIHN1cHBvcnRzIGEgJ2NvcHknIGJpdGJsdCBvbnRvIGl0c2VsZiB3aGVuIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHJlZ2lvbnMgb3ZlcmxhcC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXNCaXRCbHRTaGlmdDogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJHTCAtIElzIHdlYkdMIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJHTDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlsZSAtIElzIGZpbGUgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGZpbGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGVTeXN0ZW0gLSBJcyBmaWxlU3lzdGVtIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaWxlU3lzdGVtOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsb2NhbFN0b3JhZ2UgLSBJcyBsb2NhbFN0b3JhZ2UgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGxvY2FsU3RvcmFnZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd29ya2VyIC0gSXMgd29ya2VyIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3b3JrZXI6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHBvaW50ZXJMb2NrIC0gSXMgUG9pbnRlciBMb2NrIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBwb2ludGVyTG9jazogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdmlicmF0aW9uIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIFZpYnJhdGlvbiBBUEk/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdmlicmF0aW9uOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBnZXRVc2VyTWVkaWEgLSBEb2VzIHRoZSBkZXZpY2Ugc3VwcG9ydCB0aGUgZ2V0VXNlck1lZGlhIEFQST9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBnZXRVc2VyTWVkaWE6IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIC0gSXMgdGhlIGRldmljZSBiaWcgb3IgbGl0dGxlIGVuZGlhbj8gKG9ubHkgZGV0ZWN0ZWQgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWRBcnJheXMpXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbGl0dGxlRW5kaWFuOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzdXBwb3J0MzJiaXQgLSBEb2VzIHRoZSBkZXZpY2UgY29udGV4dCBzdXBwb3J0IDMyYml0IHBpeGVsIG1hbmlwdWxhdGlvbiB1c2luZyBhcnJheSBidWZmZXIgdmlld3M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc3VwcG9ydDMyYml0OiBmYWxzZVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4qIENoZWNrIExpdHRsZSBvciBCaWcgRW5kaWFuIHN5c3RlbS5cclxuKlxyXG4qIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxyXG4qL1xyXG5mdW5jdGlvbiBjaGVja0lzTGl0dGxlRW5kaWFuICgpXHJcbntcclxuICAgIHZhciBhID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG4gICAgdmFyIGIgPSBuZXcgVWludDhBcnJheShhKTtcclxuICAgIHZhciBjID0gbmV3IFVpbnQzMkFycmF5KGEpO1xyXG5cclxuICAgIGJbMF0gPSAweGExO1xyXG4gICAgYlsxXSA9IDB4YjI7XHJcbiAgICBiWzJdID0gMHhjMztcclxuICAgIGJbM10gPSAweGQ0O1xyXG5cclxuICAgIGlmIChjWzBdID09PSAweGQ0YzNiMmExKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjWzBdID09PSAweGExYjJjM2Q0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyAgQ291bGQgbm90IGRldGVybWluZSBlbmRpYW5uZXNzXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0ZlYXR1cmVzLmluaXQnKTtcclxuXHJcbiAgICBGZWF0dXJlcy5jYW52YXMgPSAhIXdpbmRvd1snQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJ10gfHwgT1MuY29jb29uSlM7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcilcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5sb2NhbFN0b3JhZ2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5maWxlID0gISF3aW5kb3dbJ0ZpbGUnXSAmJiAhIXdpbmRvd1snRmlsZVJlYWRlciddICYmICEhd2luZG93WydGaWxlTGlzdCddICYmICEhd2luZG93WydCbG9iJ107XHJcbiAgICBGZWF0dXJlcy5maWxlU3lzdGVtID0gISF3aW5kb3dbJ3JlcXVlc3RGaWxlU3lzdGVtJ107XHJcblxyXG4gICAgdmFyIGlzVWludDggPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgdGVzdFdlYkdMID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAod2luZG93WydXZWJHTFJlbmRlcmluZ0NvbnRleHQnXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGVXZWJHTCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoT1MuY29jb29uSlMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnNjcmVlbmNhbnZhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhczJEID0gQ2FudmFzUG9vbC5jcmVhdGUyRCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4MkQgPSBjYW52YXMyRC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBDYW4ndCBiZSBkb25lIG9uIGEgd2ViZ2wgY29udGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gY3R4MkQuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICogVGVzdCB0byBzZWUgaWYgSW1hZ2VEYXRhIHVzZXMgQ2FudmFzUGl4ZWxBcnJheSBvciBVaW50OENsYW1wZWRBcnJheS5cclxuICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICogQGF1dGhvciBNYXR0IERlc0xhdXJpZXJzIChAbWF0dGRlc2wpXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaXNVaW50OCA9IGltYWdlLmRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNQb29sLnJlbW92ZShjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzMkQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoY3R4ICE9PSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgRmVhdHVyZXMud2ViR0wgPSB0ZXN0V2ViR0woKTtcclxuXHJcbiAgICBGZWF0dXJlcy53b3JrZXIgPSAhIXdpbmRvd1snV29ya2VyJ107XHJcblxyXG4gICAgRmVhdHVyZXMucG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5vR2V0VXNlck1lZGlhO1xyXG5cclxuICAgIHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XHJcblxyXG4gICAgRmVhdHVyZXMuZ2V0VXNlck1lZGlhID0gRmVhdHVyZXMuZ2V0VXNlck1lZGlhICYmICEhbmF2aWdhdG9yLmdldFVzZXJNZWRpYSAmJiAhIXdpbmRvdy5VUkw7XHJcblxyXG4gICAgLy8gT2xkZXIgdmVyc2lvbnMgb2YgZmlyZWZveCAoPCAyMSkgYXBwYXJlbnRseSBjbGFpbSBzdXBwb3J0IGJ1dCB1c2VyIG1lZGlhIGRvZXMgbm90IGFjdHVhbGx5IHdvcmtcclxuICAgIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA8IDIxKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmdldFVzZXJNZWRpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4Y2x1ZGVzIGlPUyB2ZXJzaW9ucyBhcyB0aGV5IGdlbmVyYWxseSB3cmFwIFVJV2ViVmlldyAoZWcuIFNhZmFyaSBXZWJLaXQpIGFuZCBpdFxyXG4gICAgLy8gaXMgc2FmZXIgdG8gbm90IHRyeSBhbmQgdXNlIHRoZSBmYXN0IGNvcHktb3ZlciBtZXRob2QuXHJcbiAgICBpZiAoIU9TLmlPUyAmJiAoQnJvd3Nlci5pZSB8fCBCcm93c2VyLmZpcmVmb3ggfHwgQnJvd3Nlci5jaHJvbWUpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLbm93biBub3QgdG8gd29ya1xyXG4gICAgaWYgKEJyb3dzZXIuc2FmYXJpIHx8IEJyb3dzZXIubW9iaWxlU2FmYXJpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdG9yLnZpYnJhdGUgPSBuYXZpZ2F0b3IudmlicmF0ZSB8fCBuYXZpZ2F0b3Iud2Via2l0VmlicmF0ZSB8fCBuYXZpZ2F0b3IubW96VmlicmF0ZSB8fCBuYXZpZ2F0b3IubXNWaWJyYXRlO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IudmlicmF0ZSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy52aWJyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmxpdHRsZUVuZGlhbiA9IGNoZWNrSXNMaXR0bGVFbmRpYW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5zdXBwb3J0MzJiaXQgPSAoXHJcbiAgICAgICAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gIT09IG51bGwgJiZcclxuICAgICAgICBpc1VpbnQ4XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBGZWF0dXJlcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GZWF0dXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0ZlYXR1cmVzLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9vbCBpbnRvIHdoaWNoIHRoZSBjYW52YXMgZWxlbWVudHMgYXJlIHBsYWNlZC5cclxuICpcclxuICogQHByb3BlcnR5IHBvb2xcclxuICogQHR5cGUgQXJyYXlcclxuICovXHJcbnZhciBwb29sID0gW107XHJcblxyXG4vLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxyXG4vLyAgYmVmb3JlIGEgUGhhc2VyLkdhbWUgaW5zdGFuY2UgaGFzIGV2ZW4gYmVlbiBjcmVhdGVkLlxyXG4vLyAgV2hpY2ggbWVhbnMgYWxsIGluc3RhbmNlcyBvZiBQaGFzZXIgR2FtZXMgb24gdGhlIHNhbWUgcGFnZVxyXG4vLyAgY2FuIHNoYXJlIHRoZSBvbmUgc2luZ2xlIHBvb2xcclxuXHJcbi8qKlxyXG4qIFRoZSBDYW52YXNQb29sIGlzIGEgZ2xvYmFsIHN0YXRpYyBvYmplY3QsIHRoYXQgYWxsb3dzIFBoYXNlciB0byByZWN5Y2xlIGFuZCBwb29sIENhbnZhcyBET00gZWxlbWVudHMuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLkNhbnZhc1Bvb2xcclxuKiBAc3RhdGljXHJcbiovXHJcbnZhciBDYW52YXNQb29sID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBuZXcgQ2FudmFzIERPTSBlbGVtZW50LCBvciBwdWxscyBvbmUgZnJvbSB0aGUgcG9vbCBpZiBmcmVlLlxyXG4gICAgKiBcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5jcmVhdGVcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAcGFyYW0ge2FueX0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IFRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICovXHJcbiAgICB2YXIgY3JlYXRlID0gZnVuY3Rpb24gKHBhcmVudCwgd2lkdGgsIGhlaWdodCwgdHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCkgeyB3aWR0aCA9IDE7IH1cclxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQpIHsgaGVpZ2h0ID0gMTsgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxyXG5cclxuICAgICAgICB2YXIgY2FudmFzO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBmaXJzdCh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW52YXNQb29sLmNyZWF0ZSBuZXcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgY2FudmFzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHBvb2wucHVzaChjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzID0gY29udGFpbmVyLmNhbnZhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIGV4aXN0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY2FudmFzID0gY29udGFpbmVyLmNhbnZhcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3JlYXRlMkQgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5DQU5WQVMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3JlYXRlV2ViR0wgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5XRUJHTCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBmaXJzdCBmcmVlIGNhbnZhcyBpbmRleCBmcm9tIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZpcnN0XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7IHR5cGUgPSBDT05TVC5DQU5WQVM7IH1cclxuXHJcbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5wYXJlbnQgJiYgY29udGFpbmVyLnR5cGUgPT09IHR5cGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBMb29rcyB1cCBhIGNhbnZhcyBiYXNlZCBvbiBpdHMgcGFyZW50LCBhbmQgaWYgZm91bmQgcHV0cyBpdCBiYWNrIGluIHRoZSBwb29sLCBmcmVlaW5nIGl0IHVwIGZvciByZS11c2UuXHJcbiAgICAqIFRoZSBjYW52YXMgaGFzIGl0cyB3aWR0aCBhbmQgaGVpZ2h0IHNldCB0byAxLCBhbmQgaXRzIHBhcmVudCBhdHRyaWJ1dGUgbnVsbGVkLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLnJlbW92ZVxyXG4gICAgKiBAcGFyYW0ge2FueXxIVE1MQ2FudmFzRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICAgdmFyIHJlbW92ZSA9IGZ1bmN0aW9uIChwYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIENoZWNrIHRvIHNlZSBpZiB0aGUgcGFyZW50IGlzIGEgY2FudmFzIG9iamVjdFxyXG4gICAgICAgIHZhciBpc0NhbnZhcyA9IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgoaXNDYW52YXMgJiYgY29udGFpbmVyLmNhbnZhcyA9PT0gcGFyZW50KSB8fCAoIWlzQ2FudmFzICYmIGNvbnRhaW5lci5wYXJlbnQgPT09IHBhcmVudCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW52YXNQb29sLnJlbW92ZSBmb3VuZCBhbmQgcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2FudmFzLndpZHRoID0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jYW52YXMuaGVpZ2h0ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHVzZWQgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldFRvdGFsXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpbi11c2UgKHBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqL1xyXG4gICAgdmFyIHRvdGFsID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYyA9IDA7XHJcblxyXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiBmcmVlIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cclxuICAgICogXHJcbiAgICAqIEBzdGF0aWNcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5nZXRGcmVlXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBmcmVlICh1bi1wYXJlbnRlZCkgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKi9cclxuICAgIHZhciBmcmVlID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcG9vbC5sZW5ndGggLSB0b3RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlLFxyXG4gICAgICAgIGNyZWF0ZTJEOiBjcmVhdGUyRCxcclxuICAgICAgICBjcmVhdGVXZWJHTDogY3JlYXRlV2ViR0wsXHJcbiAgICAgICAgZmlyc3Q6IGZpcnN0LFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxyXG4gICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICBmcmVlOiBmcmVlLFxyXG4gICAgICAgIHBvb2w6IHBvb2xcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyAgSWYgd2UgZXhwb3J0IHRoZSBjYWxsZWQgZnVuY3Rpb24gaGVyZSwgaXQnbGwgb25seSBiZSBpbnZva2VkIG9uY2UgKG5vdCBldmVyeSB0aW1lIGl0J3MgcmVxdWlyZWQpLlxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1Bvb2woKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0NhbnZhc1Bvb2wuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RvbS9DYW52YXNQb29sLmpzIiwidmFyIEVWRU5UX0NPTlNUID0ge1xyXG5cclxuICAgIERJU1BBVENIRVJfSURMRTogMCxcclxuICAgIERJU1BBVENIRVJfRElTUEFUQ0hJTkc6IDEsXHJcbiAgICBESVNQQVRDSEVSX1JFTU9WSU5HOiAyLFxyXG4gICAgRElTUEFUQ0hFUl9ERVNUUk9ZRUQ6IDMsXHJcblxyXG4gICAgTElTVEVORVJfUEVORElORzogNCxcclxuICAgIExJU1RFTkVSX0FDVElWRTogNSxcclxuICAgIExJU1RFTkVSX1JFTU9WSU5HOiA2XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFVkVOVF9DT05TVDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZXZlbnRzL2NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR2V0VVJMID0gcmVxdWlyZSgnLi9HZXRVUkwnKTtcclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xyXG52YXIgWEhSTG9hZGVyID0gcmVxdWlyZSgnLi9YSFJMb2FkZXInKTtcclxudmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xyXG5cclxudmFyIEZpbGUgPSBmdW5jdGlvbiAodHlwZSwga2V5LCB1cmwsIHJlc3BvbnNlVHlwZSlcclxue1xyXG4gICAgLy8gIGZpbGUgdHlwZSAoaW1hZ2UsIGpzb24sIGV0YykgZm9yIHNvcnRpbmcgd2l0aGluIHRoZSBMb2FkZXJcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgLy8gIHVuaXF1ZSBjYWNoZSBrZXkgKHVuaXF1ZSB3aXRoaW4gaXRzIGZpbGUgdHlwZSlcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgIC8vICBUaGUgVVJMIG9mIHRoZSBmaWxlLCBub3QgaW5jbHVkaW5nIGJhc2VVUkxcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG5cclxuICAgIC8vICBTZXQgd2hlbiB0aGUgTG9hZGVyIGNhbGxzICdsb2FkJyBvbiB0aGlzIGZpbGVcclxuICAgIHRoaXMuc3JjID0gJyc7XHJcblxyXG4gICAgdGhpcy54aHJTZXR0aW5ncyA9IFhIUlNldHRpbmdzKHJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgdGhpcy54aHJMb2FkZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBDT05TVC5GSUxFX1BFTkRJTkc7XHJcblxyXG4gICAgLy8gIFNldCBieSBvblByb2dyZXNzIChvbmx5IGlmIGxvYWRpbmcgdmlhIFhIUilcclxuICAgIHRoaXMuYnl0ZXNUb3RhbCA9IDA7XHJcbiAgICB0aGlzLmJ5dGVzTG9hZGVkID0gLTE7XHJcbiAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZSA9IC0xO1xyXG5cclxuICAgIC8vICBGb3IgQ09ScyBiYXNlZCBsb2FkaW5nLlxyXG4gICAgLy8gIElmIHRoaXMgaXMgdW5kZWZpbmVkIHRoZW4gdGhlIEZpbGUgd2lsbCBjaGVjayBCYXNlTG9hZGVyLmNyb3NzT3JpZ2luIGFuZCB1c2UgdGhhdCAoaWYgc2V0KVxyXG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyAgVGhlIGFjdHVhbCBwcm9jZXNzZWQgZmlsZSBkYXRhXHJcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gIE11bHRpcGFydCBmaWxlPyAoaS5lLiBhbiBhdGxhcyBhbmQgaXRzIGpzb24gdG9nZXRoZXIpXHJcbiAgICB0aGlzLmxpbmtGaWxlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5saW5rVHlwZSA9ICcnO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xyXG59O1xyXG5cclxuRmlsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlO1xyXG5cclxuRmlsZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgcmVzZXRYSFI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25sb2FkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9uZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25wcm9ncmVzcyA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbGxlZCB3aGVuIHRoZSBJbWFnZSBsb2Fkc1xyXG4gICAgLy8gIFByb2dyZXNzRXZlbnRcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzZXRYSFIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzZXRYSFIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChldmVudClcclxuICAgIHtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSBldmVudC5sb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZXNUb3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSBNYXRoLm1pbigodGhpcy5ieXRlc0xvYWRlZCAvIHRoaXMuYnl0ZXNUb3RhbCksIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wZXJjZW50Q29tcGxldGUgKyAnJSAoJyArIHRoaXMuYnl0ZXNMb2FkZWQgKyAnIGJ5dGVzKScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblByb2Nlc3M6IGZ1bmN0aW9uIChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRklMRV9QUk9DRVNTSU5HO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlua0ZpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saW5rRmlsZS5zdGF0ZSA9PT0gQ09OU1QuRklMRV9XQUlUSU5HX0xJTktGSUxFKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGxpbmtmaWxlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nLCBhbmQgaXMgd2FpdGluZyBmb3IgdGhpcyBmaWxlLCBzbyBsZXQncyBkbyB0aGVtIGJvdGhcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDT05TVC5GSUxFX0NPTVBMRVRFO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rRmlsZS5zdGF0ZSA9IENPTlNULkZJTEVfQ09NUExFVEU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGxpbmtmaWxlIHN0aWxsIGhhc24ndCBmaW5pc2hlZCBsb2FkaW5nIGFuZC9vciBwcm9jZXNzaW5nIHlldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkZJTEVfV0FJVElOR19MSU5LRklMRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRklMRV9DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYWxsZWQgYnkgdGhlIExvYWRlciwgc3RhcnRzIHRoZSBhY3R1YWwgZmlsZSBkb3dubG9hZGluZ1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrLCBiYXNlVVJMLCBnbG9iYWxYSFIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGJhc2VVUkwgPT09IHVuZGVmaW5lZCkgeyBiYXNlVVJMID0gJyc7IH1cclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnNyYyA9IEdldFVSTCh0aGlzLCBiYXNlVVJMKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3JjLmluZGV4T2YoJ2RhdGE6JykgPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9jYWwgZGF0YSBVUkknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54aHJMb2FkZXIgPSBYSFJMb2FkZXIodGhpcywgZ2xvYmFsWEhSKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9GaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvRmlsZS5qcyIsIlxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgRmlsZSA9IHJlcXVpcmUoJy4uL0ZpbGUnKTtcclxuXHJcbnZhciBKU09ORmlsZSA9IGZ1bmN0aW9uIChrZXksIHVybCwgcGF0aClcclxue1xyXG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgeyBwYXRoID0gJyc7IH1cclxuXHJcbiAgICBpZiAoIWtleSlcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNhbGxpbmcgXFwnTG9hZGVyLmpzb25cXCcgaW52YWxpZCBrZXkgcHJvdmlkZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgdXJsID0gcGF0aCArIGtleSArICcuanNvbic7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdXJsID0gcGF0aC5jb25jYXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBGaWxlLmNhbGwodGhpcywgJ2pzb24nLCBrZXksIHVybCwgJ3RleHQnKTtcclxufTtcclxuXHJcbkpTT05GaWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRmlsZS5wcm90b3R5cGUpO1xyXG5KU09ORmlsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKU09ORmlsZTtcclxuXHJcbkpTT05GaWxlLnByb3RvdHlwZS5vblByb2Nlc3MgPSBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbntcclxuICAgIHRoaXMuc3RhdGUgPSBDT05TVC5GSUxFX1BST0NFU1NJTkc7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZSh0aGlzLnhockxvYWRlci5yZXNwb25zZVRleHQpO1xyXG5cclxuICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG5cclxuICAgIGNhbGxiYWNrKHRoaXMpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKU09ORmlsZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2ZpbGV0eXBlcy9KU09ORmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL2ZpbGV0eXBlcy9KU09ORmlsZS5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qXHJcbipcclxuKiBAY2xhc3MgQmFzZUJhdGNoXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuUmVuZGVyZXIuV2ViR0x9IHJlbmRlcmVyIC0gVGhlIFdlYkdMIFJlbmRlcmVyLlxyXG4qL1xyXG52YXIgQmFzZUJhdGNoID0gZnVuY3Rpb24gKG1hbmFnZXIsIGJhdGNoU2l6ZSwgdmVydFNpemUpXHJcbntcclxuICAgIHRoaXMuYmF0Y2hNYW5hZ2VyID0gbWFuYWdlcjtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbWFuYWdlci5yZW5kZXJlcjtcclxuXHJcbiAgICB0aGlzLmdsID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAwO1xyXG5cclxuICAgIC8vICBUb3RhbCBudW1iZXIgb2Ygb2JqZWN0cyB3ZSdsbCBiYXRjaCBiZWZvcmUgZmx1c2hpbmcgYW5kIHJlbmRlcmluZ1xyXG4gICAgLy8gIEludGVnZXJcclxuICAgIHRoaXMubWF4U2l6ZSA9IGJhdGNoU2l6ZTtcclxuXHJcbiAgICAvLyAgSW50ZWdlclxyXG4gICAgdGhpcy5oYWxmU2l6ZSA9IE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMik7XHJcblxyXG4gICAgLy8gIEludGVnZXJcclxuICAgIHRoaXMudmVydFNpemUgPSB2ZXJ0U2l6ZTtcclxuXHJcbiAgICAvLyAgKiA0IGJlY2F1c2UgdGhlcmUgYXJlIDQgdmVydHMgcGVyIGJhdGNoIGVudHJ5IChlYWNoIGNvcm5lciBvZiB0aGUgcXVhZClcclxuICAgIHZhciBudW1WZXJ0cyA9IHRoaXMudmVydFNpemUgKiB0aGlzLm1heFNpemUgKiA0O1xyXG5cclxuICAgIC8vICBBcnJheUJ1ZmZlclxyXG4gICAgLy8gIFRoaXMgZGF0YSBpcyB3aGF0IGNoYW5nZXMgZXZlcnkgZnJhbWUsIHBvcHVsYXRlZCBieSB0aGUgZ2FtZSBvYmplY3RzXHJcbiAgICAvLyAgcGFzc2VkIGluLiBUaGVyZSBhcmUgb2Z0ZW4gdmlld3MgaW50byBpdCAocG9zaXRpb24sIGNvbG9yLCBldGMpXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEFycmF5QnVmZmVyKG51bVZlcnRzKTtcclxuXHJcbiAgICAvLyAgTnVtYmVyIG9mIHRvdGFsIHF1YWRzIGFsbG93ZWQgaW4gdGhlIGJhdGNoICogNlxyXG4gICAgLy8gIDYgYmVjYXVzZSB0aGVyZSBhcmUgMiB0cmlhbmdsZXMgcGVyIHF1YWQsIGFuZCBlYWNoIHRyaWFuZ2xlIGhhcyAzIGluZGljZXNcclxuICAgIC8vICBUaGlzIFR5cGVkIEFycmF5IGlzIHNldCBpbiB0aGUgYnVpbGQgbWV0aG9kIG9mIHRoZSBleHRlbmRlZCBjbGFzcywgYW5kIHRoZW5cclxuICAgIC8vICBkb2Vzbid0IGNoYW5nZSBhZ2FpbiAoaXQncyBwb3B1bGF0ZWQganVzdCBvbmNlKVxyXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KHRoaXMubWF4U2l6ZSAqIDYpO1xyXG5cclxuICAgIC8vICBQb3B1bGF0ZWQgYnkgdGhlIGZsdXNoIG9wZXJhdGlvbiB3aGVuIHRoZSBiYXRjaCBpcyA8IDUwJSBvZiB0aGUgbWF4IHNpemVcclxuICAgIHRoaXMudmlldyA9IG51bGw7XHJcblxyXG4gICAgLy8gIEludGVnZXJcclxuICAgIHRoaXMuc2l6ZSA9IDA7XHJcblxyXG4gICAgLy8gIEJvb2xlYW5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFdlYkdMIHByb2dyYW0uXHJcbiAgICAgKiBAcHJvcGVydHkgcHJvZ3JhbVxyXG4gICAgICogQHR5cGUgV2ViR0xQcm9ncmFtXHJcbiAgICAgKi9cclxuICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSBEZWZhdWx0IFZlcnRleCBzaGFkZXIgc291cmNlLlxyXG4gICAgKlxyXG4gICAgKiBAcHJvcGVydHkgZGVmYXVsdFZlcnRleFNyY1xyXG4gICAgKiBAdHlwZSBBcnJheVxyXG4gICAgKi9cclxuICAgIHRoaXMudmVydGV4U3JjID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnJhZ21lbnQgc2hhZGVyLlxyXG4gICAgICogQHByb3BlcnR5IGZyYWdtZW50U3JjXHJcbiAgICAgKiBAdHlwZSBBcnJheVxyXG4gICAgKi9cclxuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBbXTtcclxuXHJcbiAgICAvLyAgIFdlYkdMQnVmZmVyXHJcbiAgICB0aGlzLmluZGV4QnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICAvLyAgIFdlYkdMQnVmZmVyXHJcbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG51bGw7XHJcblxyXG4gICAgLy8gIEludGVybmFsIGluZGV4IGNvdW50XHJcbiAgICAvLyAgSW50ZWdlclxyXG4gICAgdGhpcy5faSA9IDA7XHJcbn07XHJcblxyXG5CYXNlQmF0Y2gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUJhdGNoO1xyXG5cclxuQmFzZUJhdGNoLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gMDtcclxuXHJcbiAgICAgICAgLy8gIFdlIG9ubHkgbmVlZCB0byBkbyB0aGlzIGlmIHRoaXMgYmF0Y2ggaXNuJ3QgdGhlIGN1cnJlbnQgb25lXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHRoaXMucHJvZ3JhbSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRTaGFkZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmRpcnR5IHx8IGZvcmNlKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5iaW5kU2hhZGVyKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgY3VzdG9tIEJhdGNoIHByb2Nlc3NvcnNcclxuICAgIGZsdXNoOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUgPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICAvLyAgVXBsb2FkIHRoZSB2ZXJ0ZXggZGF0YSB0byB0aGUgR1BVIC0gaXMgdGhpcyBjaGVhcGVyIChvdmVyYWxsKSB0aGFuIGNyZWF0aW5nIGEgbmV3IFR5cGVkQXJyYXkgdmlldz9cclxuICAgICAgICAvLyAgVGhlIHRyYWRlb2ZmIGlzIHNlbmRpbmcgMjI0S0Igb2YgZGF0YSB0byB0aGUgR1BVIGV2ZXJ5IGZyYW1lLCBldmVuIGlmIG1vc3Qgb2YgaXQgaXMgZW1wdHkgc2hvdWxkIHRoZVxyXG4gICAgICAgIC8vICBiYXRjaCBiZSBvbmx5IHNsaWdodGx5IHBvcHVsYXRlZCwgdnMuIHRoZSBjcmVhdGlvbiBvZiBhIG5ldyBUeXBlZEFycmF5IHZpZXcgYW5kIGl0cyBjb3JyZXNwb25kaW5nIGdjIGV2ZXJ5IGZyYW1lLlxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaXplID4gdGhpcy5oYWxmU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnZlcnRpY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMucG9zaXRpb25zLnN1YmFycmF5KDAsIHRoaXMuc2l6ZSAqIHRoaXMudmVydFNpemUpO1xyXG5cclxuICAgICAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCB0aGlzLnNpemUgKiA2LCBnbC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZHJhd0NvdW50Kys7XHJcblxyXG4gICAgICAgIC8vICBSZXNldCB0aGUgYmF0Y2hcclxuICAgICAgICB0aGlzLnNpemUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pID0gMDtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VCYXRjaDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9CYXNlQmF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0Jyk7XHJcblxyXG52YXIgQ3JlYXRlRW1wdHlUZXh0dXJlID0gZnVuY3Rpb24gKGdsLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZU1vZGUsIHRleHR1cmVJbmRleClcclxue1xyXG4gICAgdmFyIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICB2YXIgZ2xTY2FsZU1vZGUgPSAoc2NhbGVNb2RlID09PSBDT05TVC5zY2FsZU1vZGVzLkxJTkVBUikgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xyXG5cclxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXh0dXJlSW5kZXgpO1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcblxyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAvLyAgV2UnbGwgcmVhZCBmcm9tIHRoaXMgdGV4dHVyZSwgYnV0IGl0IHdvbid0IGhhdmUgbWlwbWFwcywgc28gdHVybiB0aGVtIG9mZjpcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbFNjYWxlTW9kZSk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2xTY2FsZU1vZGUpO1xyXG5cclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZUVtcHR5VGV4dHVyZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVuZGVyZXIvd2ViZ2wvdXRpbHMvQ3JlYXRlRW1wdHlUZXh0dXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC91dGlscy9DcmVhdGVFbXB0eVRleHR1cmUuanMiLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgR2V0T2JqZWN0VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9HZXRPYmplY3RWYWx1ZScpO1xyXG5cclxudmFyIFNldHRpbmdzID0gZnVuY3Rpb24gKHN0YXRlLCBjb25maWcpXHJcbntcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICBjb25maWcgPSB7IGtleTogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcgPT09IHVuZGVmaW5lZClcclxuICAgIHtcclxuICAgICAgICAvLyAgUGFzcyB0aGUgJ2hhc093blByb3BlcnR5JyBjaGVja3NcclxuICAgICAgICBjb25maWcgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7IC8vICBEbyB3ZSBhY3R1YWxseSBuZWVkIHRoaXMgcmVmZXJlbmNlPyBUaGlzIGNvdWxkIGp1c3QgYmUgYSBwcm9wZXJ0eSBidWNrZXRcclxuXHJcbiAgICB0aGlzLnN0YXR1cyA9IENPTlNULnN0YXRlLlBFTkRJTkc7XHJcblxyXG4gICAgLy8gIFdoaWNoIHBhcnQgb2YgdGhpcyBTdGF0ZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkP1xyXG4gICAgLy8gIHByZWxvYWQsIGNyZWF0ZSwgdXBkYXRlLCBzaHV0ZG93biwgZXRjXHJcbiAgICB0aGlzLm9wID0gQ09OU1Quc3RhdGUuQk9PVDtcclxuXHJcbiAgICB0aGlzLmtleSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2tleScsICcnKTtcclxuICAgIHRoaXMuYWN0aXZlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYWN0aXZlJywgZmFsc2UpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmlzaWJsZScsIHRydWUpO1xyXG4gICAgdGhpcy5zY2FsZU1vZGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdzY2FsZU1vZGUnLCBDT05TVC5zY2FsZU1vZGVzLkRFRkFVTFQpO1xyXG4gICAgdGhpcy5mcHMgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdmcHMnLCA2MCk7XHJcbiAgICB0aGlzLnggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd4JywgMCk7XHJcbiAgICB0aGlzLnkgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd5JywgMCk7XHJcblxyXG4gICAgLy8gIC0xIG1lYW5zIHRoZSBTdGF0ZSBNYW5hZ2VyIHdpbGwgc2V0IGl0IHRvIGJlIHRoZSBHYW1lIGRpbWVuc2lvbnNcclxuICAgIHRoaXMud2lkdGggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd3aWR0aCcsIC0xKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnaGVpZ2h0JywgLTEpO1xyXG59O1xyXG5cclxuLy8gIFVubGVzcyB3ZSBhZGQgc29tZSBhY3R1YWwgZnVuY3Rpb25zIGluIGhlcmUsIHdlJ2xsIG1ha2UgdGhpcyBqdXN0IHJldHVybiBhbiBPYmplY3QgaW5zdGVhZCBvZiBhbiBpbnN0YW5jZVxyXG5TZXR0aW5ncy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXR0aW5ncztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3M7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1NldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBFdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJyk7XHJcbnZhciBHYW1lT2JqZWN0RmFjdG9yeSA9IHJlcXVpcmUoJy4vc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeScpO1xyXG4vLyB2YXIgR2FtZU9iamVjdENyZWF0b3IgPSByZXF1aXJlKCcuL3N5c3RlbXMvR2FtZU9iamVjdENyZWF0b3InKTtcclxudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9Mb2FkZXInKTtcclxudmFyIE1haW5Mb29wID0gcmVxdWlyZSgnLi9zeXN0ZW1zL01haW5Mb29wJyk7XHJcbnZhciBVcGRhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9zeXN0ZW1zL1VwZGF0ZU1hbmFnZXInKTtcclxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMnKTtcclxudmFyIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYS9DYW1lcmEnKTtcclxuXHJcbnZhciBTeXN0ZW1zID0gZnVuY3Rpb24gKHN0YXRlLCBjb25maWcpXHJcbntcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICB0aGlzLmV2ZW50cztcclxuXHJcbiAgICAvLyAgUmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgR2FtZSBsZXZlbCBUZXh0dXJlTWFuYWdlci5cclxuICAgIHRoaXMudGV4dHVyZXM7XHJcblxyXG4gICAgLy8gIFN0YXRlIHNwZWNpZmljIG1hbmFnZXJzIChGYWN0b3J5LCBUd2VlbnMsIExvYWRlciwgUGh5c2ljcywgZXRjKVxyXG4gICAgdGhpcy5hZGQ7XHJcbiAgICB0aGlzLm1ha2U7XHJcbiAgICB0aGlzLmlucHV0O1xyXG4gICAgdGhpcy5sb2FkO1xyXG4gICAgdGhpcy50d2VlbnM7XHJcbiAgICB0aGlzLm1haW5sb29wO1xyXG4gICAgdGhpcy51cGRhdGVzO1xyXG5cclxuICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXHJcbiAgICB0aGlzLmNhbWVyYTtcclxuICAgIHRoaXMuY2hpbGRyZW47XHJcbiAgICB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5kYXRhO1xyXG4gICAgdGhpcy5mYm87XHJcbiAgICB0aGlzLnRpbWU7XHJcbiAgICB0aGlzLnRyYW5zZm9ybTtcclxufTtcclxuXHJcblN5c3RlbXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtcztcclxuXHJcblN5c3RlbXMucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlLlN5c3RlbXMuaW5pdCcpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gdGhpcy5zdGF0ZS5nYW1lLnRleHR1cmVzO1xyXG5cclxuICAgICAgICAvLyAgQWxsIG9mIHRoZSBzeXN0ZW1zIGNhbiB1c2UgdGhlIFN0YXRlIGxldmVsIEV2ZW50RGlzcGF0Y2hlciwgb3IgdGhlaXIgb3duXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcclxuICAgICAgICAvLyAgQWxsIHRoZXNlIHRvIGJlIHNldCBieSBhIFN0YXRlIENvbmZpZyBwYWNrYWdlXHJcblxyXG4gICAgICAgIHRoaXMuYWRkID0gbmV3IEdhbWVPYmplY3RGYWN0b3J5KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMubWFrZSA9IEdhbWVPYmplY3RDcmVhdG9yKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIHRoaXMubWFpbmxvb3AgPSBuZXcgTWFpbkxvb3AodGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS5zZXR0aW5ncy5mcHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlcyA9IG5ldyBVcGRhdGVNYW5hZ2VyKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIHRoaXMubG9hZCA9IG5ldyBMb2FkZXIodGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHdlZW5zID0gbmV3IFBoYXNlci5Ud2Vlbk1hbmFnZXIodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IG5ldyBQaGFzZXIuU3RhdGUuSW5wdXQodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzID0gbmV3IFBoYXNlci5QaHlzaWNzLkFyY2FkZSh0aGlzLnN0YXRlLCA4MDAsIDYwMCk7XHJcblxyXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuc3RhdGUsIDAsIDAsIDgwMCwgNjAwKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IENvbXBvbmVudC5DaGlsZHJlbih0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IENvbXBvbmVudC5Db2xvcih0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQ29tcG9uZW50LkRhdGEodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XHJcblxyXG4gICAgICAgIC8vICBCb290XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW5wdXQuaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyAgRGVmYXVsdHNcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMgPSB0aGlzLmV2ZW50cztcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZCA9IHRoaXMuYWRkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZCA9IHRoaXMubG9hZDtcclxuICAgICAgICB0aGlzLnN0YXRlLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybSA9IHRoaXMuY2FtZXJhLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRleHR1cmVzID0gdGhpcy50ZXh0dXJlcztcclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dDtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0YXRlID0gdGhpcy5zdGF0ZS5nYW1lLnN0YXRlO1xyXG5cclxuICAgICAgICAvLyAgSGVyZSB3ZSBjYW4gY2hlY2sgd2hpY2ggU3lzdGVtcyB0byBpbnN0YWxsIGFzIHByb3BlcnRpZXMgaW50byB0aGUgU3RhdGUgb2JqZWN0XHJcbiAgICAgICAgLy8gIChkZWZhdWx0IHN5c3RlbXMgYWx3YXlzIGV4aXN0IGluIGhlcmUsIHJlZ2FyZGxlc3MpXHJcbiAgICB9LFxyXG5cclxuICAgIGJlZ2luOiBmdW5jdGlvbiAodGltZXN0YW1wLCBmcmFtZURlbHRhKVxyXG4gICAge1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RlcCwgcGh5c2ljc1N0ZXApXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIHByZVJlbmRlcjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgZW5kOiBmdW5jdGlvbiAoZnBzLCBwYW5pYylcclxuICAgIHtcclxuICAgICAgICBpZiAocGFuaWMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHBhdHRlcm4gaW50cm9kdWNlcyBub24tZGV0ZXJtaW5pc3RpYyBiZWhhdmlvciwgYnV0IGluIHRoaXMgY2FzZVxyXG4gICAgICAgICAgICAvLyBpdCdzIGJldHRlciB0aGFuIHRoZSBhbHRlcm5hdGl2ZSAodGhlIGFwcGxpY2F0aW9uIHdvdWxkIGxvb2sgbGlrZSBpdFxyXG4gICAgICAgICAgICAvLyB3YXMgcnVubmluZyB2ZXJ5IHF1aWNrbHkgdW50aWwgdGhlIHNpbXVsYXRpb24gY2F1Z2h0IHVwIHRvIHJlYWxcclxuICAgICAgICAgICAgLy8gdGltZSkuXHJcbiAgICAgICAgICAgIHZhciBkaXNjYXJkZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm1haW5sb29wLnJlc2V0RnJhbWVEZWx0YSgpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWFpbiBsb29wIHBhbmlja2VkLCBwcm9iYWJseSBiZWNhdXNlIHRoZSBicm93c2VyIHRhYiB3YXMgcHV0IGluIHRoZSBiYWNrZ3JvdW5kLiBEaXNjYXJkaW5nICcgKyBkaXNjYXJkZWRUaW1lICsgJ21zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTeXN0ZW1zO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TeXN0ZW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TeXN0ZW1zLmpzIiwiXHJcbnZhciBOT09QID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgLy8gIE5PT1AgKE5vIE9wZXJhdGlvbikgQ2FsbGJhY2tcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTk9PUDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdXRpbHMvTk9PUC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgLy8gIERvaW5nIHRoaXMgbWFrZXMgaXQgYXZhaWxhYmxlIHVuZGVyIFBoYXNlci5HYW1lXHJcbiAgICBHYW1lOiByZXF1aXJlKCcuL0dhbWUnKSxcclxuXHJcbiAgICBFdmVudDogcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50JyksXHJcbiAgICBFdmVudERpc3BhdGNoZXI6IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInKSxcclxuXHJcbiAgICBMb2FkZXI6IHtcclxuICAgICAgICBJbWFnZUZpbGU6IHJlcXVpcmUoJy4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlJylcclxuICAgIH1cclxuXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvaW5kZXguanMiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCJyZXF1aXJlKCcuL0FycmF5LmZvckVhY2gnKTtcclxucmVxdWlyZSgnLi9BcnJheS5pc0FycmF5Jyk7XHJcbnJlcXVpcmUoJy4vY29uc29sZScpO1xyXG5yZXF1aXJlKCcuL0Z1bmN0aW9uLmJpbmQnKTtcclxucmVxdWlyZSgnLi9NYXRoLnRydW5jJyk7XHJcbnJlcXVpcmUoJy4vcGVyZm9ybWFuY2Uubm93Jyk7XHJcbnJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XHJcbnJlcXVpcmUoJy4vVWludDMyQXJyYXknKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgTk9PUCA9IHJlcXVpcmUoJy4uL3V0aWxzL05PT1AnKTtcclxudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcclxuXHJcbnZhciBkZWZhdWx0QmFubmVyQ29sb3IgPSBbXHJcbiAgICAnI2ZmMDAwMCcsXHJcbiAgICAnI2ZmZmYwMCcsXHJcbiAgICAnIzAwZmYwMCcsXHJcbiAgICAnIzAwZmZmZicsXHJcbiAgICAnIzAwMDAwMCdcclxuXTtcclxuXHJcbnZhciBkZWZhdWx0QmFubmVyVGV4dENvbG9yID0gJyNmZmZmZmYnO1xyXG5cclxuZnVuY3Rpb24gQ29uZmlnIChjb25maWcpXHJcbntcclxuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkgeyBjb25maWcgPSB7fTsgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd3aWR0aCcsIDEwMjQpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCA3NjgpO1xyXG5cclxuICAgIHRoaXMucmVzb2x1dGlvbiA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3Jlc29sdXRpb24nLCAxKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlclR5cGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0eXBlJywgQ09OU1QuQVVUTyk7XHJcblxyXG4gICAgdGhpcy5wYXJlbnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdwYXJlbnQnLCBudWxsKTtcclxuICAgIHRoaXMuY2FudmFzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzJywgbnVsbCk7XHJcbiAgICB0aGlzLmNhbnZhc1N0eWxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzU3R5bGUnLCBudWxsKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlQ29uZmlnID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc3RhdGUnLCBudWxsKTtcclxuXHJcbiAgICB0aGlzLnNlZWQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdzZWVkJywgWyAoRGF0ZS5ub3coKSAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCkgXSk7XHJcblxyXG4gICAgdGhpcy5nYW1lVGl0bGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0aXRsZScsICcnKTtcclxuICAgIHRoaXMuZ2FtZVVSTCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3VybCcsICdodHRwOi8vcGhhc2VyLmlvJyk7XHJcbiAgICB0aGlzLmdhbWVWZXJzaW9uID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmVyc2lvbicsICcnKTtcclxuXHJcbiAgICAvLyAgSWYgeW91IGRvOiB7IGJhbm5lcjogZmFsc2UgfSBpdCB3b24ndCBkaXNwbGF5IGFueSBiYW5uZXIgYXQgYWxsXHJcbiAgICB0aGlzLmhpZGVCYW5uZXIgPSAoR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyJywgZmFsc2UpID09PSBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5oaWRlUGhhc2VyID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyLmhpZGVQaGFzZXInLCBmYWxzZSk7XHJcbiAgICB0aGlzLmJhbm5lclRleHRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci50ZXh0JywgZGVmYXVsdEJhbm5lclRleHRDb2xvcik7XHJcbiAgICB0aGlzLmJhbm5lckJhY2tncm91bmRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5iYWNrZ3JvdW5kJywgZGVmYXVsdEJhbm5lckNvbG9yKTtcclxuICAgXHJcbiAgICB0aGlzLmZvcmNlU2V0VGltZU91dCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZvcmNlU2V0VGltZU91dCcsIGZhbHNlKTtcclxuICAgIHRoaXMudHJhbnNwYXJlbnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0cmFuc3BhcmVudCcsIGZhbHNlKTtcclxuICAgIHRoaXMucGl4ZWxBcnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdwaXhlbEFydCcsIGZhbHNlKTtcclxuXHJcbiAgICAvLyAgQ2FsbGJhY2tzXHJcbiAgICB0aGlzLnByZUJvb3QgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdjYWxsYmFja3MucHJlQm9vdCcsIE5PT1ApO1xyXG4gICAgdGhpcy5wb3N0Qm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wb3N0Qm9vdCcsIE5PT1ApO1xyXG5cclxufVxyXG5cclxuQ29uZmlnLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbmZpZztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9Db25maWcuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XHJcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4uL2RldmljZS9GZWF0dXJlcycpO1xyXG52YXIgV2ViR0xSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3dlYmdsL1dlYkdMUmVuZGVyZXInKTtcclxuXHJcbi8qKlxyXG4qIENoZWNrcyBpZiB0aGUgZGV2aWNlIGlzIGNhcGFibGUgb2YgdXNpbmcgdGhlIHJlcXVlc3RlZCByZW5kZXJlciBhbmQgc2V0cyBpdCB1cCBvciBhbiBhbHRlcm5hdGl2ZSBpZiBub3QuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5HYW1lI3NldFVwUmVuZGVyZXJcclxuKiBAcHJvdGVjdGVkXHJcbiovXHJcbnZhciBDcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XHJcblxyXG4gICAgLy8gIEdhbWUgZWl0aGVyIHJlcXVlc3RlZCBDYW52YXMsXHJcbiAgICAvLyAgb3IgcmVxdWVzdGVkIEFVVE8gb3IgV0VCR0wgYnV0IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpdCwgc28gZmFsbCBiYWNrIHRvIENhbnZhc1xyXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMgfHwgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBDT05TVC5DQU5WQVMgJiYgIUZlYXR1cmVzLndlYkdMKSlcclxuICAgIHtcclxuICAgICAgICBpZiAoRmVhdHVyZXMuY2FudmFzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZXkgcmVxdWVzdGVkIENhbnZhcyBhbmQgdGhlaXIgYnJvd3NlciBzdXBwb3J0cyBpdFxyXG4gICAgICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULkNBTlZBUztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIENhbnZhcyBvciBXZWJHTCBjb250ZXh0LCBhYm9ydGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIEdhbWUgcmVxdWVzdGVkIFdlYkdMIGFuZCBicm93c2VyIHNheXMgaXQgc3VwcG9ydHMgaXRcclxuICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULldFQkdMO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIGl0cyBvd24gY2FudmFzIGVsZW1lbnQgdG8gdXNlP1xyXG4gICAgaWYgKGNvbmZpZy5jYW52YXMpXHJcbiAgICB7XHJcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBjb25maWcuY2FudmFzO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGUoZ2FtZSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0LCBjb25maWcucmVuZGVyVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIERvZXMgdGhlIGdhbWUgY29uZmlnIHByb3ZpZGUgc29tZSBjYW52YXMgY3NzIHN0eWxlcyB0byB1c2U/XHJcbiAgICBpZiAoY29uZmlnLmNhbnZhc1N0eWxlKVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzLnN0eWxlID0gY29uZmlnLmNhbnZhc1N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBDcmVhdGUgdGhlIHJlbmRlcmVyXHJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBXRUJHTCBSZW5kZXJlcicpO1xyXG4gICAgICAgIGdhbWUucmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcihnYW1lKTtcclxuICAgICAgICBnYW1lLmNvbnRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBDYW52YXMgUmVuZGVyZXInKTtcclxuICAgICAgICAvLyBnYW1lLnJlbmRlcmVyID0gbmV3IFBoYXNlci5SZW5kZXJlci5DYW52YXModGhpcyk7XHJcbiAgICAgICAgLy8gZ2FtZS5jb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSAhPT0gUGhhc2VyLkhFQURMRVNTKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFBoYXNlci5DYW52YXMuYWRkVG9ET00odGhpcy5jYW52YXMsIHRoaXMucGFyZW50LCBmYWxzZSk7XHJcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5zZXRUb3VjaEFjdGlvbih0aGlzLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGVSZW5kZXJlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBDSEVDS1NVTSA9IHJlcXVpcmUoJy4uL2NoZWNrc3VtJyk7XHJcblxyXG52YXIgRGVidWdIZWFkZXIgPSBmdW5jdGlvbiAoZ2FtZSlcclxue1xyXG4gICAgdmFyIGNvbmZpZyA9IGdhbWUuY29uZmlnO1xyXG5cclxuICAgIGlmIChjb25maWcuaGlkZUJhbm5lcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlbmRlclR5cGUgPSAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULkNBTlZBUykgPyAnQ2FudmFzJyA6ICdXZWJHTCc7XHJcblxyXG4gICAgdmFyIGllID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCFpZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgYyA9ICcnO1xyXG4gICAgICAgIHZhciBhcmdzID0gW2NdO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsYXN0Q29sb3I7XHJcblxyXG4gICAgICAgICAgICBjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yLmZvckVhY2goZnVuY3Rpb24oY29sb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyVjICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCgnYmFja2dyb3VuZDogJyArIGNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Q29sb3IgPSBjb2xvcjtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gIGluamVjdCB0aGUgdGV4dCBjb2xvclxyXG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSAnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGxhc3RDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYyA9IGMuY29uY2F0KCclYyAnKTtcclxuXHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCgnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIFVSTCBsaW5rIGJhY2tncm91bmQgY29sb3IgKGFsd2F5cyB3aGl0ZSlcclxuICAgICAgICBhcmdzLnB1c2goJ2JhY2tncm91bmQ6ICNmZmYnKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5nYW1lVGl0bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjID0gYy5jb25jYXQoY29uZmlnLmdhbWVUaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmdhbWVWZXJzaW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyB2JyArIGNvbmZpZy5nYW1lVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnIC8gJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjID0gYy5jb25jYXQoJ1BoYXNlciB2JyArIENPTlNULlZFUlNJT04gKyAnICgnICsgcmVuZGVyVHlwZSArICcpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjID0gYy5jb25jYXQoJyAlYyAnICsgY29uZmlnLmdhbWVVUkwpO1xyXG5cclxuICAgICAgICAvLyAgSW5qZWN0IHRoZSBuZXcgc3RyaW5nIGJhY2sgaW50byB0aGUgYXJncyBhcnJheVxyXG4gICAgICAgIGFyZ3NbMF0gPSBjO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpbmRvd1snY29uc29sZSddKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQaGFzZXIgdicgKyBDT05TVC5WRVJTSU9OICsgJyAvIGh0dHA6Ly9waGFzZXIuaW8nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLZWVwIHRoaXMgZHVyaW5nIGRldiBidWlsZCBvbmx5XHJcbiAgICBjb25zb2xlLmxvZyhDSEVDS1NVTS5idWlsZCk7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1Z0hlYWRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9EZWJ1Z0hlYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9EZWJ1Z0hlYWRlci5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBEZXZpY2UgPSByZXF1aXJlKCcuLi9kZXZpY2UnKTtcclxudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vQ29uZmlnJyk7XHJcbnZhciBEZWJ1Z0hlYWRlciA9IHJlcXVpcmUoJy4vRGVidWdIZWFkZXInKTtcclxudmFyIENyZWF0ZVJlbmRlcmVyID0gcmVxdWlyZSgnLi9DcmVhdGVSZW5kZXJlcicpO1xyXG52YXIgUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZSgnLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xyXG52YXIgRE9NQ29udGVudExvYWRlZCA9IHJlcXVpcmUoJy4uL2RvbS9ET01Db250ZW50TG9hZGVkJyk7XHJcbnZhciBSYW5kb21EYXRhR2VuZXJhdG9yID0gcmVxdWlyZSgnLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvcicpO1xyXG52YXIgU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vc3RhdGUvU3RhdGVNYW5hZ2VyJyk7XHJcbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xyXG52YXIgR2FtZU9iamVjdHMgPSByZXF1aXJlKCcuLi9nYW1lb2JqZWN0cy8nKTtcclxudmFyIFRleHR1cmVNYW5hZ2VyID0gcmVxdWlyZSAoJy4uL3RleHR1cmVzL1RleHR1cmVNYW5hZ2VyJyk7XHJcbnZhciBBZGRUb0RPTSA9IHJlcXVpcmUoJy4uL2RvbS9BZGRUb0RPTScpO1xyXG5cclxudmFyIEdhbWUgPSBmdW5jdGlvbiAoY29uZmlnKVxyXG57XHJcbiAgICB0aGlzLmNvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcclxuXHJcbiAgICAvLyAgRGVjaWRlIHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc2hvdWxkIGJlIEdhbWUgcHJvcGVydGllcywgb3IgcGxhY2VkIGVsc2V3aGVyZSAuLi5cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfEhUTUxFbGVtZW50fSBwYXJlbnQgLSBUaGUgR2FtZXMgRE9NIHBhcmVudC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICB0aGlzLmlzQm9vdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWV9IHJhZiAtIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB0aGUgY29yZSBnYW1lIGxvb3AgdmlhIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvciBzZXRUaW1lb3V0XHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICB0aGlzLnJhZiA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlRleHR1cmVNYW5hZ2VyfSB0ZXh0dXJlcyAtIFJlZmVyZW5jZSB0byB0aGUgUGhhc2VyIFRleHR1cmUgTWFuYWdlci5cclxuICAgICovXHJcbiAgICB0aGlzLnRleHR1cmVzID0gbmV3IFRleHR1cmVNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5VcGRhdGVNYW5hZ2VyfSB1cGRhdGVzIC0gUmVmZXJlbmNlIHRvIHRoZSBQaGFzZXIgVXBkYXRlIE1hbmFnZXIuXHJcbiAgICAqL1xyXG4gICAgdGhpcy51cGRhdGVzID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuQ2FjaGV9IGNhY2hlIC0gUmVmZXJlbmNlIHRvIHRoZSBhc3NldHMgY2FjaGUuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5jYWNoZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLklucHV0fSBpbnB1dCAtIFJlZmVyZW5jZSB0byB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgKi9cclxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZU1hbmFnZXJ9IHN0YXRlIC0gVGhlIFN0YXRlTWFuYWdlci4gUGhhc2VyIGluc3RhbmNlIHNwZWNpZmljLlxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMuY29uZmlnLnN0YXRlQ29uZmlnKTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuRGV2aWNlfSBkZXZpY2UgLSBDb250YWlucyBkZXZpY2UgaW5mb3JtYXRpb24gYW5kIGNhcGFiaWxpdGllcyAoc2luZ2xldG9uKVxyXG4gICAgKi9cclxuICAgIHRoaXMuZGV2aWNlID0gRGV2aWNlO1xyXG5cclxuICAgIC8vICBNb3JlIHRoaXMgc29tZXdoZXJlIGVsc2U/IE1hdGggcGVyaGFwcz8gRG9lc24ndCBuZWVkIHRvIGJlIGEgR2FtZSBsZXZlbCBzeXN0ZW0uXHJcbiAgICB0aGlzLnJuZDtcclxuXHJcbiAgICAvLyAgV2FpdCBmb3IgdGhlIERPTSBSZWFkeSBldmVudCwgdGhlbiBjYWxsIGJvb3QuXHJcbiAgICBET01Db250ZW50TG9hZGVkKHRoaXMuYm9vdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyAgRm9yIGRlYnVnZ2luZyBvbmx5XHJcbiAgICB3aW5kb3cuZ2FtZSA9IHRoaXM7XHJcbn07XHJcblxyXG5HYW1lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdhbWU7XHJcblxyXG5HYW1lLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBib290OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNCb290ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZy5wcmVCb290KCk7XHJcblxyXG4gICAgICAgIC8vICBQcm9iYWJseSBtb3ZlIHdpdGhpbiBNYXRoXHJcbiAgICAgICAgdGhpcy5ybmQgPSBuZXcgUmFuZG9tRGF0YUdlbmVyYXRvcih0aGlzLmNvbmZpZy5zZWVkKTtcclxuXHJcbiAgICAgICAgRGVidWdIZWFkZXIodGhpcyk7XHJcblxyXG4gICAgICAgIENyZWF0ZVJlbmRlcmVyKHRoaXMpO1xyXG5cclxuICAgICAgICBBZGRUb0RPTSh0aGlzLmNhbnZhcywgdGhpcy5jb25maWcucGFyZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ib290KCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcucG9zdEJvb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWYuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnN0ZXAodGltZXN0YW1wKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9HYW1lLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMnKTtcclxuXHJcbi8qKlxyXG4qIEEgQ2FtZXJhIGlzIHlvdXIgdmlldyBpbnRvIHRoZSBnYW1lIHdvcmxkLiBJdCBoYXMgYSBwb3NpdGlvbiBhbmQgc2l6ZSBhbmQgcmVuZGVycyBvbmx5IHRob3NlIG9iamVjdHMgd2l0aGluIGl0cyBmaWVsZCBvZiB2aWV3LlxyXG4qIFRoZSBnYW1lIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIHNpbmdsZSBTdGFnZSBzaXplZCBjYW1lcmEgb24gYm9vdC4gTW92ZSB0aGUgY2FtZXJhIGFyb3VuZCB0aGUgd29ybGQgd2l0aCBQaGFzZXIuQ2FtZXJhLngveVxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5DYW1lcmFcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gR2FtZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IGlkIC0gTm90IGJlaW5nIHVzZWQgYXQgdGhlIG1vbWVudCwgd2lsbCBiZSB3aGVuIFBoYXNlciBzdXBwb3J0cyBtdWx0aXBsZSBjYW1lcmFcclxuKiBAcGFyYW0ge251bWJlcn0geCAtIFBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgb24gdGhlIFggYXhpc1xyXG4qIEBwYXJhbSB7bnVtYmVyfSB5IC0gUG9zaXRpb24gb2YgdGhlIGNhbWVyYSBvbiB0aGUgWSBheGlzXHJcbiogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSB2aWV3IHJlY3RhbmdsZVxyXG4qIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSB2aWV3IHJlY3RhbmdsZVxyXG4qL1xyXG52YXIgQ2FtZXJhID0gZnVuY3Rpb24gKHN0YXRlLCB4LCB5LCB2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhdGUgdGhhdCB0aGlzIENhbWVyYSBiZWxvbmdzIHRvLiBBIENhbWVyYSBjYW4gb25seSBiZWxvbmcgdG8gb25lIFN0YXRlLCBhbmQgYSBTdGF0ZSBvbmx5XHJcbiAgICAgKiBoYXMgb25lIENhbWVyYS5cclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIEdhbWUuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydFdpZHRoO1xyXG5cclxuICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBDb21wb25lbnQuVHJhbnNmb3JtKHRoaXMsIHgsIHkpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaGUgQ2FtZXJhIGlzIGJvdW5kIHRvIHRoaXMgUmVjdGFuZ2xlIGFuZCBjYW5ub3QgbW92ZSBvdXRzaWRlIG9mIGl0LiBCeSBkZWZhdWx0IGl0IGlzIGVuYWJsZWQgYW5kIHNldCB0byB0aGUgc2l6ZSBvZiB0aGUgV29ybGQuXHJcbiAgICAqIFRoZSBSZWN0YW5nbGUgY2FuIGJlIGxvY2F0ZWQgYW55d2hlcmUgaW4gdGhlIHdvcmxkIGFuZCB1cGRhdGVkIGFzIG9mdGVuIGFzIHlvdSBsaWtlLiBJZiB5b3UgZG9uJ3Qgd2lzaCB0aGUgQ2FtZXJhIHRvIGJlIGJvdW5kXHJcbiAgICAqIGF0IGFsbCB0aGVuIHNldCB0aGlzIHRvIG51bGwuIFRoZSB2YWx1ZXMgY2FuIGJlIGFueXRoaW5nIGFuZCBhcmUgaW4gV29ybGQgY29vcmRpbmF0ZXMsIHdpdGggMCwwIGJlaW5nIHRoZSB0b3AtbGVmdCBvZiB0aGUgd29ybGQuXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlJlY3RhbmdsZX0gYm91bmRzIC0gVGhlIFJlY3RhbmdsZSBpbiB3aGljaCB0aGUgQ2FtZXJhIGlzIGJvdW5kZWQuIFNldCB0byBudWxsIHRvIGFsbG93IGZvciBtb3ZlbWVudCBhbnl3aGVyZS5cclxuICAgICovXHJcbiAgICAvLyB0aGlzLmJvdW5kcyA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vIHRoaXMuYm91bmRzID0gbmV3IFBoYXNlci5DaXJjbGUoeCwgeSlcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdExpbWl0IC0gV2hldGhlciB0aGlzIGNhbWVyYSBpcyBmbHVzaCB3aXRoIHRoZSBXb3JsZCBCb3VuZHMgb3Igbm90LlxyXG4gICAgKi9cclxuICAgIHRoaXMuYXRMaW1pdCA9IHsgeDogZmFsc2UsIHk6IGZhbHNlIH07XHJcbn07XHJcblxyXG5DYW1lcmEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2FtZXJhO1xyXG5cclxuQ2FtZXJhLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogTWV0aG9kIGNhbGxlZCB0byBlbnN1cmUgdGhlIGNhbWVyYSBkb2Vzbid0IHZlbnR1cmUgb3V0c2lkZSBvZiB0aGUgZ2FtZSB3b3JsZC5cclxuICAgICogQ2FsbGVkIGF1dG9tYXRpY2FsbHkgYnkgQ2FtZXJhLnVwZGF0ZS5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FtZXJhI2NoZWNrQm91bmRzXHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICBjaGVja0JvdW5kczogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF0TGltaXQueCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXRMaW1pdC55ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHZhciB2eCA9IHRoaXMudmlldy54ICsgdGhpcy5fc2hha2UueDtcclxuICAgICAgICAvLyB2YXIgdncgPSB0aGlzLnZpZXcucmlnaHQgKyB0aGlzLl9zaGFrZS54O1xyXG4gICAgICAgIC8vIHZhciB2eSA9IHRoaXMudmlldy55ICsgdGhpcy5fc2hha2UueTtcclxuICAgICAgICAvLyB2YXIgdmggPSB0aGlzLnZpZXcuYm90dG9tICsgdGhpcy5fc2hha2UueTtcclxuXHJcbiAgICAgICAgdmFyIHZ4ID0gdGhpcy54O1xyXG4gICAgICAgIHZhciB2dyA9IHRoaXMueCArIHRoaXMudmlld3BvcnRXaWR0aDtcclxuICAgICAgICB2YXIgdnkgPSB0aGlzLnk7XHJcbiAgICAgICAgdmFyIHZoID0gdGhpcy55ICsgdGhpcy52aWV3cG9ydEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB3ZSBkaWRuJ3QgZ28gb3V0c2lkZSB0aGUgY2FtZXJhcyBib3VuZHNcclxuICAgICAgICBpZiAodnggPD0gdGhpcy5ib3VuZHMueCAqIHRoaXMuc2NhbGUueClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRMaW1pdC54ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnggPSB0aGlzLmJvdW5kcy54ICogdGhpcy5zY2FsZS54O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9zaGFrZS5zaGFrZUJvdW5kcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFRoZSBjYW1lcmEgaXMgdXAgYWdhaW5zdCB0aGUgYm91bmRzLCBzbyByZXNldCB0aGUgc2hha2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWtlLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodncgPj0gdGhpcy5ib3VuZHMucmlnaHQgKiB0aGlzLnNjYWxlLngpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmF0TGltaXQueCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy54ID0gKHRoaXMuYm91bmRzLnJpZ2h0ICogdGhpcy5zY2FsZS54KSAtIHRoaXMud2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3NoYWtlLnNoYWtlQm91bmRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGNhbWVyYSBpcyB1cCBhZ2FpbnN0IHRoZSBib3VuZHMsIHNvIHJlc2V0IHRoZSBzaGFrZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hha2UueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2eSA8PSB0aGlzLmJvdW5kcy50b3AgKiB0aGlzLnNjYWxlLnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmF0TGltaXQueSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy55ID0gdGhpcy5ib3VuZHMudG9wICogdGhpcy5zY2FsZS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9zaGFrZS5zaGFrZUJvdW5kcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFRoZSBjYW1lcmEgaXMgdXAgYWdhaW5zdCB0aGUgYm91bmRzLCBzbyByZXNldCB0aGUgc2hha2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWtlLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmggPj0gdGhpcy5ib3VuZHMuYm90dG9tICogdGhpcy5zY2FsZS55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hdExpbWl0LnkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcueSA9ICh0aGlzLmJvdW5kcy5ib3R0b20gKiB0aGlzLnNjYWxlLnkpIC0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3NoYWtlLnNoYWtlQm91bmRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGNhbWVyYSBpcyB1cCBhZ2FpbnN0IHRoZSBib3VuZHMsIHNvIHJlc2V0IHRoZSBzaGFrZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hha2UueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENhbWVyYS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAvLyAgVHJhbnNmb3JtIGdldHRlcnMgLyBzZXR0ZXJzXHJcblxyXG4gICAgeDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bvc1g7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcG9zWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgeToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bvc1k7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcG9zWSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9wb3NYICsgKHRoaXMudmlld3BvcnRXaWR0aCAqIHRoaXMudHJhbnNmb3JtLl9zY2FsZVgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJvdHRvbToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3Bvc1kgKyAodGhpcy52aWV3cG9ydEhlaWdodCAqIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNjYWxlOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3NjYWxlWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fc2NhbGVZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzY2FsZVg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzY2FsZVk6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fc2NhbGVZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwaXZvdFg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9waXZvdFg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcGl2b3RYID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwaXZvdFk6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9waXZvdFk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fcGl2b3RZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlQ2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhbmdsZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHRoaXMucm90YXRpb24gKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBQaGFzZXIuTWF0aC53cmFwQW5nbGUodmFsdWUpICogUGhhc2VyLk1hdGguREVHX1RPX1JBRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByb3RhdGlvbjoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbiA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybS5fcm90YXRpb24gJSBQaGFzZXIuTWF0aC5QSTIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmNhY2hlLnNyID0gTWF0aC5zaW4odGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmNhY2hlLmNyID0gTWF0aC5jb3ModGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5oYXNMb2NhbFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmhhc0xvY2FsUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jYW1lcmEvQ2FtZXJhLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jYW1lcmEvQ2FtZXJhLmpzIiwidmFyIENIRUNLU1VNID0ge1xuYnVpbGQ6ICc5MzU0ZGI1MC1iZDY0LTExZTYtYjIyMi0zMzFmYzJmYTViZWMnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBDSEVDS1NVTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jaGVja3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogVGhlIENoaWxkcmVuIENvbXBvbmVudCBmZWF0dXJlcyBxdWljayBhY2Nlc3MgdG8gR3JvdXAgc29ydGluZyByZWxhdGVkIG1ldGhvZHMuXHJcbipcclxuKiBAY2xhc3NcclxuKi9cclxudmFyIENoaWxkcmVuID0gZnVuY3Rpb24gKGdhbWVPYmplY3QpXHJcbntcclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcblxyXG4gICAgLy8gIFRoZSBvYmplY3RzIHRoYXQgYmVsb25nIHRvIHRoaXMgY29sbGVjdGlvbi5cclxuICAgIC8vICBUaGUgZXF1aXZhbGVudCBvZiB0aGUgb2xkIGBTcHJpdGUuY2hpbGRyZW5gIGFycmF5LlxyXG4gICAgdGhpcy5saXN0ID0gW107XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbn07XHJcblxyXG5DaGlsZHJlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZHJlbjtcclxuXHJcbkNoaWxkcmVuLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uIChjaGlsZCwgc2tpcFRyYW5zZm9ybSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc2tpcFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7IHNraXBUcmFuc2Zvcm0gPSBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnLS0tPicsIHRoaXMuZ2FtZU9iamVjdC5uYW1lLCAnYWRkcyBuZXcgY2hpbGQ6JywgY2hpbGQubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnQgPT09IHRoaXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2hpbGRyZW4uYWRkIDEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGlsZC5wYXJlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2hpbGRyZW4uYWRkIDInKTtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50LmNoaWxkcmVuLnJlbW92ZShjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzLmdhbWVPYmplY3Q7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGNoaWxkKTtcclxuXHJcbiAgICAgICAgaWYgKCFza2lwVHJhbnNmb3JtICYmIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0gJiYgY2hpbGQudHJhbnNmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lT2JqZWN0Lm5hbWUsICdhZGRzIHRyYW5zZm9ybSBmcm9tJywgY2hpbGQubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uYWRkKGNoaWxkLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLSBlbmQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRBdDogZnVuY3Rpb24gKGNoaWxkLCBpbmRleCwgc2tpcFRyYW5zZm9ybSlcclxuICAgIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgeyBpbmRleCA9IDA7IH1cclxuICAgICAgICBpZiAoc2tpcFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7IHNraXBUcmFuc2Zvcm0gPSBmYWxzZTsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLmxpc3QubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50LmNoaWxkcmVuLnJlbW92ZShjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNraXBUcmFuc2Zvcm0gJiYgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybSAmJiBjaGlsZC50cmFuc2Zvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLmFkZChjaGlsZC50cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkTXVsdGlwbGU6IGZ1bmN0aW9uIChjaGlsZHJlbiwgc2tpcFRyYW5zZm9ybSlcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjaGlsZHJlbltpXSwgc2tpcFRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QXQ6IGZ1bmN0aW9uIChpbmRleClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SW5kZXg6IGZ1bmN0aW9uIChjaGlsZClcclxuICAgIHtcclxuICAgICAgICAvLyAgUmV0dXJuIC0xIGlmIGdpdmVuIGNoaWxkIGlzbid0IGEgY2hpbGQgb2YgdGhpcyBwYXJlbnRcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmluZGV4T2YoY2hpbGQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgZmlyc3QgaXRlbSBmcm9tIHRoZSBzZXQgYmFzZWQgb24gdGhlIHByb3BlcnR5IHN0cmljdGx5IGVxdWFsaW5nIHRoZSB2YWx1ZSBnaXZlbi5cclxuICAgICogUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQXJyYXlTZXQjZ2V0QnlLZXlcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIGNoZWNrIGFnYWluc3QgdGhlIHZhbHVlLlxyXG4gICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2sgaWYgdGhlIHByb3BlcnR5IHN0cmljdGx5IGVxdWFscy5cclxuICAgICogQHJldHVybiB7YW55fSBUaGUgaXRlbSB0aGF0IHdhcyBmb3VuZCwgb3IgbnVsbCBpZiBub3RoaW5nIG1hdGNoZWQuXHJcbiAgICAqL1xyXG4gICAgZ2V0QnlLZXk6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldW3Byb3BlcnR5XSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogU2VhcmNoZXMgdGhlIEdyb3VwIGZvciB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYSBjaGlsZCB3aXRoIHRoZSBgbmFtZWBcclxuICAgICogcHJvcGVydHkgbWF0Y2hpbmcgdGhlIGdpdmVuIGFyZ3VtZW50LiBTaG91bGQgbW9yZSB0aGFuIG9uZSBjaGlsZCBoYXZlXHJcbiAgICAqIHRoZSBzYW1lIG5hbWUgb25seSB0aGUgZmlyc3QgaW5zdGFuY2UgaXMgcmV0dXJuZWQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdyb3VwI2dldEJ5TmFtZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAqIEByZXR1cm4ge2FueX0gVGhlIGZpcnN0IGNoaWxkIHdpdGggYSBtYXRjaGluZyBuYW1lLCBvciBudWxsIGlmIG5vbmUgd2VyZSBmb3VuZC5cclxuICAgICovXHJcbiAgICBnZXRCeU5hbWU6IGZ1bmN0aW9uIChuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5S2V5KCduYW1lJywgbmFtZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGNoaWxkIGZyb20gdGhlIGdyb3VwLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNnZXRSYW5kb21cclxuICAgICogQHBhcmFtIHtpbnRlZ2VyfSBbc3RhcnRJbmRleD0wXSAtIE9mZnNldCBmcm9tIHRoZSBmcm9udCBvZiB0aGUgZ3JvdXAgKGxvd2VzdCBjaGlsZCkuXHJcbiAgICAqIEBwYXJhbSB7aW50ZWdlcn0gW2xlbmd0aD0odG8gdG9wKV0gLSBSZXN0cmljdGlvbiBvbiB0aGUgbnVtYmVyIG9mIHZhbHVlcyB5b3Ugd2FudCB0byByYW5kb21seSBzZWxlY3QgZnJvbS5cclxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBjaGlsZCBvZiB0aGlzIEdyb3VwLlxyXG4gICAgKi9cclxuICAgIGdldFJhbmRvbTogZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGxlbmd0aClcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7IGxlbmd0aCA9IHRoaXMubGlzdC5sZW5ndGg7IH1cclxuXHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBsZW5ndGggPiB0aGlzLmxpc3QubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSBzdGFydEluZGV4ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFtyYW5kb21JbmRleF07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFsbCBjaGlsZHJlbiBpbiB0aGlzIEdyb3VwLlxyXG4gICAgKlxyXG4gICAgKiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhIG1hdGNoaW5nIGNyaXRlcmlhIHVzaW5nIHRoZSBgcHJvcGVydHlgIGFuZCBgdmFsdWVgIGFyZ3VtZW50cy5cclxuICAgICpcclxuICAgICogRm9yIGV4YW1wbGU6IGBnZXRBbGwoJ2V4aXN0cycsIHRydWUpYCB3b3VsZCByZXR1cm4gb25seSBjaGlsZHJlbiB0aGF0IGhhdmUgdGhlaXIgZXhpc3RzIHByb3BlcnR5IHNldC5cclxuICAgICpcclxuICAgICogT3B0aW9uYWxseSB5b3UgY2FuIHNwZWNpZnkgYSBzdGFydCBhbmQgZW5kIGluZGV4LiBGb3IgZXhhbXBsZSBpZiB0aGlzIEdyb3VwIGhhZCAxMDAgY2hpbGRyZW4sXHJcbiAgICAqIGFuZCB5b3Ugc2V0IGBzdGFydEluZGV4YCB0byAwIGFuZCBgZW5kSW5kZXhgIHRvIDUwLCBpdCB3b3VsZCByZXR1cm4gbWF0Y2hlcyBmcm9tIG9ubHlcclxuICAgICogdGhlIGZpcnN0IDUwIGNoaWxkcmVuIGluIHRoZSBHcm91cC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjZ2V0QWxsXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydHldIC0gQW4gb3B0aW9uYWwgcHJvcGVydHkgdG8gdGVzdCBhZ2FpbnN0IHRoZSB2YWx1ZSBhcmd1bWVudC5cclxuICAgICogQHBhcmFtIHthbnl9IFt2YWx1ZV0gLSBJZiBwcm9wZXJ0eSBpcyBzZXQgdGhlbiBDaGlsZC5wcm9wZXJ0eSBtdXN0IHN0cmljdGx5IGVxdWFsIHRoaXMgdmFsdWUgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdHMuXHJcbiAgICAqIEBwYXJhbSB7aW50ZWdlcn0gW3N0YXJ0SW5kZXg9MF0gLSBUaGUgZmlyc3QgY2hpbGQgaW5kZXggdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLlxyXG4gICAgKiBAcGFyYW0ge2ludGVnZXJ9IFtlbmRJbmRleF0gLSBUaGUgbGFzdCBjaGlsZCBpbmRleCB0byBzZWFyY2ggdXAgdW50aWwuXHJcbiAgICAqIEByZXR1cm4ge2FueX0gQSByYW5kb20gZXhpc3RpbmcgY2hpbGQgb2YgdGhpcyBHcm91cC5cclxuICAgICovXHJcbiAgICBnZXRBbGw6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGFydEluZGV4ID09PSB1bmRlZmluZWQpIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgICAgICBpZiAoZW5kSW5kZXggPT09IHVuZGVmaW5lZCkgeyBlbmRJbmRleCA9IHRoaXMubGlzdC5sZW5ndGg7IH1cclxuXHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmxpc3RbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZFtwcm9wZXJ0eV0gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0sXHJcblxyXG4gICAgc3dhcDogZnVuY3Rpb24gKGNoaWxkMSwgY2hpbGQyKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChjaGlsZDEgPT09IGNoaWxkMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbmRleDEgPSB0aGlzLmdldEluZGV4KGNoaWxkMSk7XHJcbiAgICAgICAgdmFyIGluZGV4MiA9IHRoaXMuZ2V0SW5kZXgoY2hpbGQyKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4MSA8IDAgfHwgaW5kZXgyIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4uc3dhcDogU3VwcGxpZWQgb2JqZWN0cyBtdXN0IGJlIGNoaWxkcmVuIG9mIHRoZSBzYW1lIHBhcmVudCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0W2luZGV4MV0gPSBjaGlsZDI7XHJcbiAgICAgICAgdGhpcy5saXN0W2luZGV4Ml0gPSBjaGlsZDE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICAgd2FzIHNldEluZGV4XHJcbiAgICBtb3ZlVG86IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuZ2V0SW5kZXgoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5saXN0Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4ubW92ZVRvOiBUaGUgc3VwcGxpZWQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIFJlbW92ZVxyXG4gICAgICAgIHRoaXMubGlzdC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gIEFkZCBpbiBuZXcgbG9jYXRpb25cclxuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoY2hpbGQsIHNraXBUcmFuc2Zvcm0pXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNraXBUcmFuc2Zvcm0gJiYgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybSAmJiBjaGlsZC50cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0ucmVtb3ZlKGNoaWxkLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVBdDogZnVuY3Rpb24gKGluZGV4LCBza2lwVHJhbnNmb3JtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMubGlzdFtpbmRleF07XHJcblxyXG4gICAgICAgIGlmIChjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2tpcFRyYW5zZm9ybSAmJiB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtICYmIGNoaWxkLnRyYW5zZm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5yZW1vdmUoY2hpbGQudHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVCZXR3ZWVuOiBmdW5jdGlvbiAoYmVnaW5JbmRleCwgZW5kSW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGJlZ2luSW5kZXggPT09IHVuZGVmaW5lZCkgeyBiZWdpbkluZGV4ID0gMDsgfVxyXG4gICAgICAgIGlmIChlbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7IGVuZEluZGV4ID0gdGhpcy5saXN0Lmxlbmd0aDsgfVxyXG5cclxuICAgICAgICB2YXIgcmFuZ2UgPSBlbmRJbmRleCAtIGJlZ2luSW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChyYW5nZSA+IDAgJiYgcmFuZ2UgPD0gZW5kSW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlZCA9IHRoaXMubGlzdC5zcGxpY2UoYmVnaW5JbmRleCwgcmFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVkW2ldLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJhbmdlID09PSAwICYmIHRoaXMubGlzdC5sZW5ndGggPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4ucmVtb3ZlQmV0d2VlbjogUmFuZ2UgRXJyb3IsIG51bWVyaWMgdmFsdWVzIGFyZSBvdXRzaWRlIHRoZSBhY2NlcHRhYmxlIHJhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmVtb3ZlcyBhbGwgdGhlIGl0ZW1zLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5BcnJheVNldCNyZW1vdmVBbGxcclxuICAgICovXHJcbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxpc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5saXN0W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2hlY2sgdG8gc2VlIGlmIHRoZSBnaXZlbiBjaGlsZCBpcyBhIGNoaWxkIG9mIHRoaXMgb2JqZWN0LCBhdCBhbnkgZGVwdGggKHJlY3Vyc2l2ZWx5IHNjYW5zIHVwIHRoZSB0cmVlKVxyXG4gICAgY29udGFpbnM6IGZ1bmN0aW9uIChjaGlsZClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGlsZC5wYXJlbnQgPT09IHRoaXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnMoY2hpbGQucGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBCcmluZ3MgdGhlIGdpdmVuIGNoaWxkIHRvIHRoZSB0b3Agb2YgdGhpcyBncm91cCBzbyBpdCByZW5kZXJzIGFib3ZlIGFsbCBvdGhlciBjaGlsZHJlbi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjYnJpbmdUb1RvcFxyXG4gICAgKiBAcGFyYW0ge2FueX0gY2hpbGQgLSBUaGUgY2hpbGQgdG8gYnJpbmcgdG8gdGhlIHRvcCBvZiB0aGlzIGdyb3VwLlxyXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBtb3ZlZC5cclxuICAgICovXHJcbiAgICBicmluZ1RvVG9wOiBmdW5jdGlvbiAoY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudCA9PT0gdGhpcyAmJiB0aGlzLmdldEluZGV4KGNoaWxkKSA8IHRoaXMubGlzdC5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGNoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNlbmRzIHRoZSBnaXZlbiBjaGlsZCB0byB0aGUgYm90dG9tIG9mIHRoaXMgZ3JvdXAgc28gaXQgcmVuZGVycyBiZWxvdyBhbGwgb3RoZXIgY2hpbGRyZW4uXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdyb3VwI3NlbmRUb0JhY2tcclxuICAgICogQHBhcmFtIHthbnl9IGNoaWxkIC0gVGhlIGNoaWxkIHRvIHNlbmQgdG8gdGhlIGJvdHRvbSBvZiB0aGlzIGdyb3VwLlxyXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBtb3ZlZC5cclxuICAgICovXHJcbiAgICBzZW5kVG9CYWNrOiBmdW5jdGlvbiAoY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudCA9PT0gdGhpcyAmJiB0aGlzLmdldEluZGV4KGNoaWxkKSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQXQoY2hpbGQsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogTW92ZXMgdGhlIGdpdmVuIGNoaWxkIHVwIG9uZSBwbGFjZSBpbiB0aGlzIGdyb3VwIHVubGVzcyBpdCdzIGFscmVhZHkgYXQgdGhlIHRvcC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjbW92ZVVwXHJcbiAgICAqIEBwYXJhbSB7YW55fSBjaGlsZCAtIFRoZSBjaGlsZCB0byBtb3ZlIHVwIGluIHRoZSBncm91cC5cclxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgbW92ZWQuXHJcbiAgICAqL1xyXG4gICAgbW92ZVVwOiBmdW5jdGlvbiAoY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldEluZGV4KGNoaWxkKTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT09IC0xICYmIGEgPCB0aGlzLmxpc3QubGVuZ3RoIC0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBiID0gdGhpcy5nZXRBdChhICsgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2FwKGNoaWxkLCBiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogTW92ZXMgdGhlIGdpdmVuIGNoaWxkIGRvd24gb25lIHBsYWNlIGluIHRoaXMgZ3JvdXAgdW5sZXNzIGl0J3MgYWxyZWFkeSBhdCB0aGUgYm90dG9tLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNtb3ZlRG93blxyXG4gICAgKiBAcGFyYW0ge2FueX0gY2hpbGQgLSBUaGUgY2hpbGQgdG8gbW92ZSBkb3duIGluIHRoZSBncm91cC5cclxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgbW92ZWQuXHJcbiAgICAqL1xyXG4gICAgbW92ZURvd246IGZ1bmN0aW9uIChjaGlsZClcclxuICAgIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0SW5kZXgoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoYSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0QXQoYSAtIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dhcChjaGlsZCwgYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldmVyc2VzIGFsbCBjaGlsZHJlbiBpbiB0aGlzIGdyb3VwLlxyXG4gICAgKlxyXG4gICAgKiBUaGlzIG9wZXJhdGlvbiBhcHBsaWVzIG9ubHkgdG8gaW1tZWRpYXRlIGNoaWxkcmVuIGFuZCBkb2VzIG5vdCBwcm9wYWdhdGUgdG8gc3ViZ3JvdXBzLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNyZXZlcnNlXHJcbiAgICAqL1xyXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgc2h1ZmZsZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5saXN0Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICB2YXIgdGVtcCA9IHRoaXMubGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5saXN0W2ldID0gdGhpcy5saXN0W2pdO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3Rbal0gPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXBsYWNlcyBhIGNoaWxkIG9mIHRoaXMgR3JvdXAgd2l0aCB0aGUgZ2l2ZW4gbmV3Q2hpbGQuIFRoZSBuZXdDaGlsZCBjYW5ub3QgYmUgYSBtZW1iZXIgb2YgdGhpcyBHcm91cC5cclxuICAgICpcclxuICAgICogSWYgYEdyb3VwLmVuYWJsZUJvZHlgIGlzIHNldCwgdGhlbiBhIHBoeXNpY3MgYm9keSB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlIG9iamVjdCwgc28gbG9uZyBhcyBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cclxuICAgICpcclxuICAgICogSWYgYEdyb3VwLmlucHV0RW5hYmxlQ2hpbGRyZW5gIGlzIHNldCwgdGhlbiBhbiBJbnB1dCBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBvbiB0aGUgb2JqZWN0LCBzbyBsb25nIGFzIG9uZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5Hcm91cCNyZXBsYWNlXHJcbiAgICAqIEBwYXJhbSB7YW55fSBvbGRDaGlsZCAtIFRoZSBjaGlsZCBpbiB0aGlzIGdyb3VwIHRoYXQgd2lsbCBiZSByZXBsYWNlZC5cclxuICAgICogQHBhcmFtIHthbnl9IG5ld0NoaWxkIC0gVGhlIGNoaWxkIHRvIGJlIGluc2VydGVkIGludG8gdGhpcyBncm91cC5cclxuICAgICogQHJldHVybiB7YW55fSBSZXR1cm5zIHRoZSBvbGRDaGlsZCB0aGF0IHdhcyByZXBsYWNlZCB3aXRoaW4gdGhpcyBncm91cC5cclxuICAgICovXHJcbiAgICByZXBsYWNlOiBmdW5jdGlvbiAob2xkQ2hpbGQsIG5ld0NoaWxkLCBza2lwVHJhbnNmb3JtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXgob2xkQ2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50LnJlbW92ZShuZXdDaGlsZCwgc2tpcFRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG9sZENoaWxkLCBza2lwVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQXQobmV3Q2hpbGQsIGluZGV4LCBza2lwVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBTd2FwcyBhIGNoaWxkIGZyb20gYW5vdGhlciBwYXJlbnQsIHdpdGggb25lIGZyb20gdGhpcyBwYXJlbnQuXHJcbiAgICAvLyAgY2hpbGQxID0gdGhlIGNoaWxkIG9mIFRISVMgcGFyZW50XHJcbiAgICAvLyAgY2hpbGQyID0gdGhlIGNoaWxkIG9mIHRoZSBPVEhFUiBwYXJlbnRcclxuICAgIGV4Y2hhbmdlOiBmdW5jdGlvbiAoY2hpbGQxLCBjaGlsZDIsIHNraXBUcmFuc2Zvcm0pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNoaWxkMSA9PT0gY2hpbGQyIHx8IGNoaWxkMS5wYXJlbnQgPT09IGNoaWxkMi5wYXJlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGFyZW50Q2hpbGRyZW4gPSBjaGlsZDIucGFyZW50LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXgxID0gdGhpcy5nZXRJbmRleChjaGlsZDEpO1xyXG4gICAgICAgIHZhciBpbmRleDIgPSBwYXJlbnRDaGlsZHJlbi5nZXRJbmRleChjaGlsZDIpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXgxIDwgMCB8fCBpbmRleDIgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbi5zd2FwOiBTdXBwbGllZCBvYmplY3RzIG11c3QgYmUgY2hpbGRyZW4gb2YgcGFyZW50cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmUoY2hpbGQxLCBza2lwVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgcGFyZW50Q2hpbGRyZW4ucmVtb3ZlKGNoaWxkMiwgc2tpcFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQXQoY2hpbGQyLCBpbmRleDEsIHNraXBUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICBwYXJlbnRDaGlsZHJlbi5hZGRBdChjaGlsZDEsIGluZGV4Miwgc2tpcFRyYW5zZm9ybSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDaGVja3MgZm9yIHRoZSBpdGVtIHdpdGhpbiB0aGlzIGxpc3QuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkFycmF5U2V0I2V4aXN0c1xyXG4gICAgKiBAcGFyYW0ge2FueX0gaXRlbSAtIFRoZSBlbGVtZW50IHRvIGdldCB0aGUgbGlzdCBpbmRleCBmb3IuXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGl0ZW0gaXMgZm91bmQgaW4gdGhlIGxpc3QsIG90aGVyd2lzZSBmYWxzZS5cclxuICAgICovXHJcbiAgICBleGlzdHM6IGZ1bmN0aW9uIChjaGlsZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMubGlzdC5pbmRleE9mKGNoaWxkKSA+IC0xKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBrZXlgIHRvIHRoZSBnaXZlbiB2YWx1ZSBvbiBhbGwgbWVtYmVycyBvZiB0aGlzIGxpc3QuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkFycmF5U2V0I3NldEFsbFxyXG4gICAgKiBAcGFyYW0ge2FueX0ga2V5IC0gVGhlIHByb3BlcnR5IG9mIHRoZSBpdGVtIHRvIHNldC5cclxuICAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldCB0aGUgcHJvcGVydHkgdG8uXHJcbiAgICAqL1xyXG4gICAgc2V0QWxsOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpXVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBQYXNzZXMgYWxsIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiBjYWxsYmFjay5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBlYWNoXHJcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXHJcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbdGhpc0FyZ10gLSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxyXG4gICAgKiBAcGFyYW0gey4uLip9IFthcmd1bWVudHNdIC0gQWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2ssIGFmdGVyIHRoZSBjaGlsZC5cclxuICAgICovXHJcbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbIG51bGwgXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhcmdzWzBdID0gdGhpcy5saXN0W2ldO1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzQXJnLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBNb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSB0aGlzIEdyb3VwIHRvIHRoZSBHcm91cCBnaXZlbi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR3JvdXAjbW92ZUFsbFxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gZ3JvdXAgLSBUaGUgbmV3IEdyb3VwIHRvIHdoaWNoIHRoZSBjaGlsZHJlbiB3aWxsIGJlIG1vdmVkIHRvLlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdIC0gSWYgdHJ1ZSB0aGUgY2hpbGRyZW4gd2lsbCBub3QgZGlzcGF0Y2ggdGhlIGBvbkFkZGVkVG9Hcm91cGAgZXZlbnQgZm9yIHRoZSBuZXcgR3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIEdyb3VwIHRvIHdoaWNoIGFsbCB0aGUgY2hpbGRyZW4gd2VyZSBtb3ZlZC5cclxuICAgICovXHJcbiAgICByZXBhcmVudDogZnVuY3Rpb24gKG5ld1BhcmVudClcclxuICAgIHtcclxuICAgICAgICBpZiAobmV3UGFyZW50ICE9PSB0aGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMucmVtb3ZlKHRoaXMubGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3UGFyZW50LmFkZChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hpbGRyZW4ucHJvdG90eXBlLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gYW5kIHJlc2V0cyB0aGUgY3Vyc29yIHRvIHRoZSBzdGFydC5cclxuICAgICpcclxuICAgICogQG5hbWUgUGhhc2VyLkFycmF5U2V0I2ZpcnN0XHJcbiAgICAqIEBwcm9wZXJ0eSB7YW55fSBmaXJzdFxyXG4gICAgKi9cclxuICAgIGxlbmd0aDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZmlyc3QgaXRlbSBhbmQgcmVzZXRzIHRoZSBjdXJzb3IgdG8gdGhlIHN0YXJ0LlxyXG4gICAgKlxyXG4gICAgKiBAbmFtZSBQaGFzZXIuQXJyYXlTZXQjZmlyc3RcclxuICAgICogQHByb3BlcnR5IHthbnl9IGZpcnN0XHJcbiAgICAqL1xyXG4gICAgZmlyc3Q6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsYXN0IGl0ZW0gYW5kIHJlc2V0cyB0aGUgY3Vyc29yIHRvIHRoZSBlbmQuXHJcbiAgICAqXHJcbiAgICAqIEBuYW1lIFBoYXNlci5BcnJheVNldCNsYXN0XHJcbiAgICAqIEBwcm9wZXJ0eSB7YW55fSBsYXN0XHJcbiAgICAqL1xyXG4gICAgbGFzdDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmxpc3QubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3RoaXMucG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyB0aGUgdGhlIG5leHQgaXRlbSAoYmFzZWQgb24gdGhlIGN1cnNvcikgYW5kIGFkdmFuY2VzIHRoZSBjdXJzb3IuXHJcbiAgICAqXHJcbiAgICAqIEBuYW1lIFBoYXNlci5BcnJheVNldCNuZXh0XHJcbiAgICAqIEBwcm9wZXJ0eSB7YW55fSBuZXh0XHJcbiAgICAqL1xyXG4gICAgbmV4dDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMubGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24rKztcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3RoaXMucG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyB0aGUgdGhlIHByZXZpb3VzIGl0ZW0gKGJhc2VkIG9uIHRoZSBjdXJzb3IpIGFuZCByZXRyZWF0cyB0aGUgY3Vyc29yLlxyXG4gICAgKlxyXG4gICAgKiBAbmFtZSBQaGFzZXIuQXJyYXlTZXQjcHJldmlvdXNcclxuICAgICogQHByb3BlcnR5IHthbnl9IHByZXZpb3VzXHJcbiAgICAqL1xyXG4gICAgcHJldmlvdXM6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLS07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt0aGlzLnBvc2l0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZHJlbjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29tcG9uZW50cy9DaGlsZHJlbi5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogVGhlIENvbG9yIENvbXBvbmVudCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgdGhlIGFscGhhLCBibGVuZCBtb2RlLCB0aW50IGFuZCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiogb2YgYSBHYW1lIE9iamVjdC5cclxuKlxyXG4qIEBjbGFzc1xyXG4qL1xyXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdClcclxue1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gZ2FtZU9iamVjdC5zdGF0ZTtcclxuXHJcbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2FscGhhID0gMTtcclxuICAgIHRoaXMuX3dvcmxkQWxwaGEgPSAxO1xyXG5cclxuICAgIHRoaXMuX2JsZW5kTW9kZSA9IDA7XHJcblxyXG4gICAgdGhpcy5fdGludCA9IHsgdG9wTGVmdDogMHhmZmZmZmYsIHRvcFJpZ2h0OiAweGZmZmZmZiwgYm90dG9tTGVmdDogMHhmZmZmZmYsIGJvdHRvbVJpZ2h0OiAweGZmZmZmZiB9O1xyXG4gICAgdGhpcy5fZ2xUaW50ID0geyB0b3BMZWZ0OiAxNjc3NzIxNSwgdG9wUmlnaHQ6IDE2Nzc3MjE1LCBib3R0b21MZWZ0OiAxNjc3NzIxNSwgYm90dG9tUmlnaHQ6IDE2Nzc3MjE1IH07XHJcbiAgICB0aGlzLl9oYXNUaW50ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gIEJldHdlZW4gMCBhbmQgMjU1XHJcbiAgICB0aGlzLl9yID0gMDtcclxuICAgIHRoaXMuX2cgPSAwO1xyXG4gICAgdGhpcy5fYiA9IDA7XHJcblxyXG4gICAgLy8gIEJldHdlZW4gMCBhbmQgMVxyXG4gICAgdGhpcy5fYSA9IDE7XHJcblxyXG4gICAgLy8gIFN0cmluZyB2ZXJzaW9uIG9mIFJHQkFcclxuICAgIHRoaXMuX3JnYmEgPSAnJztcclxuXHJcbiAgICAvLyAgMzItYml0IHZlcnNpb24gb2YgQVJHQlxyXG4gICAgdGhpcy5fZ2xCZyA9IDA7XHJcblxyXG4gICAgdGhpcy5faGFzQmFja2dyb3VuZCA9IGZhbHNlO1xyXG59O1xyXG5cclxuQ29sb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29sb3I7XHJcblxyXG5Db2xvci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgc2V0QmFja2dyb3VuZDogZnVuY3Rpb24gKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fZ2xCZyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9yID0gcmVkO1xyXG4gICAgICAgICAgICB0aGlzLl9nID0gKGdyZWVuKSA/IGdyZWVuIDogMDtcclxuICAgICAgICAgICAgdGhpcy5fYiA9IChibHVlKSA/IGJsdWUgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLl9hID0gKGFscGhhKSA/IGFscGhhIDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhclRpbnQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRUaW50KDB4ZmZmZmZmKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFzVGludCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRUaW50OiBmdW5jdGlvbiAodG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIGJvdHRvbVJpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0b3BSaWdodCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9wUmlnaHQgPSB0b3BMZWZ0O1xyXG4gICAgICAgICAgICBib3R0b21MZWZ0ID0gdG9wTGVmdDtcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSB0b3BMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW50VG9wTGVmdCA9IHRvcExlZnQ7XHJcbiAgICAgICAgdGhpcy50aW50VG9wUmlnaHQgPSB0b3BSaWdodDtcclxuICAgICAgICB0aGlzLnRpbnRCb3R0b21MZWZ0ID0gYm90dG9tTGVmdDtcclxuICAgICAgICB0aGlzLnRpbnRCb3R0b21SaWdodCA9IGJvdHRvbVJpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLl9oYXNUaW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYWxsZWQgYnkgdGhlIERpcnR5IE1hbmFnZXJcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faGFzQmFja2dyb3VuZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYmEgPSAncmdiYSgnICsgdGhpcy5fciArICcsJyArIHRoaXMuX2cgKyAnLCcgKyB0aGlzLl9iICsgJywnICsgdGhpcy5fYSArICcpJztcclxuICAgICAgICAgICAgdGhpcy5fZ2xCZyA9IHRoaXMuZ2V0Q29sb3IzMih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBUaW50IG11bHRzP1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Q29sb3I6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlID4+IDE2KSArICh2YWx1ZSAmIDB4ZmYwMCkgKyAoKHZhbHVlICYgMHhmZikgPDwgMTYpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDb2xvcjMyOiBmdW5jdGlvbiAociwgZywgYiwgYSlcclxuICAgIHtcclxuICAgICAgICBhICo9IDI1NTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgoYSA8PCAyNCkgfCAoYiA8PCAxNikgfCAoZyA8PCA4KSB8IHIpID4+PiAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdGludCA9IFtdO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbG9yLnByb3RvdHlwZSwge1xyXG5cclxuICAgIGRpcnR5OiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJ0eTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLmFkZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdGludFRvcExlZnQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQudG9wTGVmdDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbnQudG9wTGVmdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRpbnQudG9wTGVmdCA9IHRoaXMuZ2V0Q29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0aW50VG9wUmlnaHQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQudG9wUmlnaHQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90aW50LnRvcFJpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVGludC50b3BSaWdodCA9IHRoaXMuZ2V0Q29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0aW50Qm90dG9tTGVmdDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGludC5ib3R0b21MZWZ0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdGludC5ib3R0b21MZWZ0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVGludC5ib3R0b21MZWZ0ID0gdGhpcy5nZXRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHRpbnRCb3R0b21SaWdodDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGludC5ib3R0b21SaWdodDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbnQuYm90dG9tUmlnaHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZ2xUaW50LmJvdHRvbVJpZ2h0ID0gdGhpcy5nZXRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHRpbnQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbnQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbnQodmFsdWUsIHZhbHVlLCB2YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFscGhhOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbHBoYTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fYWxwaGEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FscGhhID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJsZW5kTW9kZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxlbmRNb2RlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9ibGVuZE1vZGUgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxNilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxlbmRNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHdvcmxkQWxwaGE6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkQWxwaGE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl93b3JsZEFscGhhID0gdGhpcy5fYWxwaGEgKiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBiYWNrZ3JvdW5kQWxwaGE6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2E7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2EpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2EgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZWQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3IgPSB2YWx1ZSB8IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNCYWNrZ3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ3JlZW46IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2c7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2cpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2cgPSB2YWx1ZSB8IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNCYWNrZ3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYmx1ZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYiA9IHZhbHVlIHwgMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0JhY2tncm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb21wb25lbnRzL0NvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBUaGUgRGF0YSBDb21wb25lbnQgZmVhdHVyZXMgYSBtZWFucyB0byBzdG9yZSBwaWVjZXMgb2YgZGF0YSBzcGVjaWZpYyB0byBhIEdhbWUgT2JqZWN0LFxyXG4qIHNlYXJjaCBpdCwgcXVlcnkgaXQsIGFuZCByZXRyaWV2ZSBpdC5cclxuKlxyXG4qIEBjbGFzc1xyXG4qL1xyXG52YXIgRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQpXHJcbntcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgIHRoaXMubGlzdCA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2JlZm9yZUNhbGxiYWNrcyA9IHt9O1xyXG4gICAgdGhpcy5fYWZ0ZXJDYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9mcm96ZW4gPSBmYWxzZTtcclxufTtcclxuXHJcbkRhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YTtcclxuXHJcbkRhdGEucHJvdG90eXBlID0ge1xyXG5cclxuICAgIC8vICBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5LCBvciB1bmRlZmluZWQgaWYgaXQgZG9lc24ndCBleGlzdC5cclxuICAgIGdldDogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0W2tleV07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFsbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5saXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0c1trZXldID0gdGhpcy5saXN0W2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH0sXHJcblxyXG4gICAgcXVlcnk6IGZ1bmN0aW9uIChzZWFyY2gpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChrZXkubWF0Y2goc2VhcmNoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c1trZXldID0gdGhpcy5saXN0W2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Zyb3plbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpc3RlbmVyO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIC8vICBJZiB0aGVyZSBpcyBhICdiZWZvcmUnIGNhbGxiYWNrLCB0aGVuIGNoZWNrIGl0IGZvciBhIHJlc3VsdFxyXG4gICAgICAgIGlmICh0aGlzLl9iZWZvcmVDYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5fYmVmb3JlQ2FsbGJhY2tzW2tleV07XHJcblxyXG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKGxpc3RlbmVyLnNjb3BlLCB0aGlzLnBhcmVudCwga2V5LCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0W2tleV0gPSBkYXRhO1xyXG5cclxuICAgICAgICAvLyAgSWYgdGhlcmUgaXMgYSAnYWZ0ZXInIGNhbGxiYWNrLCB0aGVuIGNoZWNrIGl0IGZvciBhIHJlc3VsdFxyXG4gICAgICAgIGlmICh0aGlzLl9hZnRlckNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLl9hZnRlckNhbGxiYWNrc1trZXldO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgdGhpcy5wYXJlbnQsIGtleSwgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtrZXldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgYmVmb3JlOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaywgc2NvcGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgUmVtb3ZlIGVudHJ5XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9iZWZvcmVDYWxsYmFja3Nba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQ2FsbGJhY2tzW2tleV0gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgc2NvcGU6IHNjb3BlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhZnRlcjogZnVuY3Rpb24gKGtleSwgY2FsbGJhY2ssIHNjb3BlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFJlbW92ZSBlbnRyeVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYWZ0ZXJDYWxsYmFja3Nba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJDYWxsYmFja3Nba2V5XSA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBzY29wZTogc2NvcGUgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBQYXNzZXMgYWxsIGRhdGEgZW50cmllcyB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suIFN0b3JlcyB0aGUgcmVzdWx0IG9mIHRoZSBjYWxsYmFjay5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBlYWNoXHJcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXHJcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIC0gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cclxuICAgICogQHBhcmFtIHsuLi4qfSBbYXJndW1lbnRzXSAtIEFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLCBhZnRlciB0aGUgZ2FtZSBvYmplY3QsIGtleSwgYW5kIGRhdGEuXHJcbiAgICAqL1xyXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrLCBzY29wZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgYXJncyA9IFsgdGhpcy5wYXJlbnQsIG51bGwsIHVuZGVmaW5lZCBdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFyZ3NbMV0gPSBrZXk7XHJcbiAgICAgICAgICAgIGFyZ3NbMl0gPSB0aGlzLmxpc3Rba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlOiBmdW5jdGlvbiAoZGF0YSwgb3ZlcndyaXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChvdmVyd3JpdGUgPT09IHVuZGVmaW5lZCkgeyBvdmVyd3JpdGUgPSB0cnVlOyB9XHJcblxyXG4gICAgICAgIC8vICBNZXJnZSBkYXRhIGZyb20gYW5vdGhlciBjb21wb25lbnQgaW50byB0aGlzIG9uZVxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZSB8fCAoIW92ZXJ3cml0ZSAmJiAhdGhpcy5oYXMoa2V5KSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtrZXldID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5fZnJvemVuICYmIHRoaXMuaGFzKGtleSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0W2tleV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyhrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLl9iZWZvcmVDYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9iZWZvcmVDYWxsYmFja3Nba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hZnRlckNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FmdGVyQ2FsbGJhY2tzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgR2V0cyB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuICdrZXknLCBkZWxldGVzIGl0IGZyb20gdGhpcyBEYXRhIHN0b3JlLCB0aGVuIHJldHVybnMgaXQuXHJcbiAgICBwb3A6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZnJvemVuICYmIHRoaXMuaGFzKGtleSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5saXN0W2tleV07XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0W2tleV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyhrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhczogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxpc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0W2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9iZWZvcmVDYWxsYmFja3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYmVmb3JlQ2FsbGJhY2tzW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9hZnRlckNhbGxiYWNrcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hZnRlckNhbGxiYWNrc1trZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZnJvemVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRGF0YS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAvKipcclxuICAgICogRnJlZXplIHRoaXMgRGF0YSBjb21wb25lbnQsIHNvIG5vIGNoYW5nZXMgY2FuIGJlIHdyaXR0ZW4gdG8gaXQuXHJcbiAgICAqXHJcbiAgICAqIEBuYW1lIGZyZWV6ZVxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZyZWV6ZVxyXG4gICAgKi9cclxuICAgIGZyZWV6ZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJvemVuO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZnJvemVuID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjb3VudDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5saXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W2tleV0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF0YTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29tcG9uZW50cy9EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiAyRCBUcmFuc2Zvcm1hdGlvbiBDb21wb25lbnQuXHJcbipcclxuKiBAY2xhc3NcclxuKi9cclxudmFyIFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0LCB4LCB5LCBzY2FsZVgsIHNjYWxlWSlcclxue1xyXG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gMDsgfVxyXG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gMDsgfVxyXG4gICAgaWYgKHNjYWxlWCA9PT0gdW5kZWZpbmVkKSB7IHNjYWxlWCA9IDE7IH1cclxuICAgIGlmIChzY2FsZVkgPT09IHVuZGVmaW5lZCkgeyBzY2FsZVkgPSAxOyB9XHJcblxyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gKGdhbWVPYmplY3Quc3RhdGUpID8gZ2FtZU9iamVjdC5zdGF0ZSA6IGdhbWVPYmplY3QucGFyZW50LnN0YXRlO1xyXG5cclxuICAgIHRoaXMuZ2FtZSA9IHRoaXMuc3RhdGUuZ2FtZTtcclxuXHJcbiAgICAvLyAgTG9jYWwgVHJhbnNmb3JtXHJcbiAgICAvLyAgYSA9IHNjYWxlIFhcclxuICAgIC8vICBiID0gc2hlYXIgWVxyXG4gICAgLy8gIGMgPSBzaGVhciBYXHJcbiAgICAvLyAgZCA9IHNjYWxlIFlcclxuICAgIC8vICB0eCAvIHR5ID0gdHJhbnNsYXRpb25cclxuICAgIC8vIHRoaXMubG9jYWwgPSB7IGE6IHNjYWxlWCwgYjogMCwgYzogMCwgZDogc2NhbGVZLCB0eDogeCwgdHk6IHkgfTtcclxuXHJcbiAgICAvLyAgV29ybGQgVHJhbnNmb3JtXHJcbiAgICB0aGlzLndvcmxkID0geyBhOiBzY2FsZVgsIGI6IDAsIGM6IDAsIGQ6IHNjYWxlWSwgdHg6IHgsIHR5OiB5IH07XHJcblxyXG4gICAgdGhpcy5vbGQgPSB7IGE6IHNjYWxlWCwgYjogMCwgYzogMCwgZDogc2NhbGVZLCB0eDogeCwgdHk6IHkgfTtcclxuXHJcbiAgICAvLyAgQ2FjaGVkIFRyYW5zZm9ybSBDYWxjdWxhdGlvbnNcclxuICAgIHRoaXMuY2FjaGUgPSB7IGE6IDEsIGI6IDAsIGM6IDAsIGQ6IDEsIHNyOiAwLCBjcjogMCB9O1xyXG5cclxuICAgIC8vICBHTCBWZXJ0ZXggRGF0YVxyXG4gICAgdGhpcy5nbFZlcnRleHREYXRhID0geyB4MDogMCwgeTA6IDAsIHgxOiAwLCB5MTogMCwgeDI6IDAsIHkyOiAwLCB4MzogMCwgeTM6IDAgfTtcclxuXHJcbiAgICB0aGlzLmltbWVkaWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmhhc0xvY2FsUm90YXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgUHJpdmF0ZSB2YWx1ZSBob2xkZXJzLCBhY2Nlc3NlZCB2aWEgdGhlIGdldHRlcnMgYW5kIHNldHRlcnNcclxuICAgIHRoaXMuX3Bvc1ggPSB4O1xyXG4gICAgdGhpcy5fcG9zWSA9IHk7XHJcbiAgICB0aGlzLl9zY2FsZVggPSBzY2FsZVg7XHJcbiAgICB0aGlzLl9zY2FsZVkgPSBzY2FsZVk7XHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9waXZvdFggPSAwO1xyXG4gICAgdGhpcy5fcGl2b3RZID0gMDtcclxuICAgIHRoaXMuX2FuY2hvclggPSAwO1xyXG4gICAgdGhpcy5fYW5jaG9yWSA9IDA7XHJcblxyXG4gICAgdGhpcy5fd29ybGRSb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLl93b3JsZFNjYWxlWCA9IHNjYWxlWDtcclxuICAgIHRoaXMuX3dvcmxkU2NhbGVZID0gc2NhbGVZO1xyXG5cclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2RpcnR5VmVydGV4ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLmFkZCh0aGlzKTtcclxuXHJcbiAgICAvLyAgVGhlIHBhcmVudCBUcmFuc2Zvcm0gKE5PVCB0aGUgcGFyZW50IEdhbWVPYmplY3QsIGFsdGhvdWdoIHZlcnkgb2Z0ZW4gdGhleSBhcmUgcmVsYXRlZClcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLyAgQW55IGNoaWxkIFRyYW5zZm9ybXMgb2YgdGhpcyBvbmUgLSBub3RlIHRoYXQgdGhleSBkb24ndCBoYXZlIHRvIGJlbG9uZyB0byBHYW1lIE9iamVjdHNcclxuICAgIC8vICB0aGF0IGFyZSBjaGlsZHJlbiBvZiB0aGUgb3duZXIgb2YgdGhpcyBUcmFuc2Zvcm1cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxufTtcclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm07XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKGNoaWxkKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEF0KGNoaWxkLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZEF0OiBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIC8vICBJbnZhbGlkIGNoaWxkP1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcyB8fCBjaGlsZC5wYXJlbnQgPT09IHRoaXMgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBjaGlsZCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgQ2hpbGQgYWxyZWFkeSBwYXJlbnRlZD8gUmVtb3ZlIGl0XHJcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIEludmFsaWQgY2hpbGQ/XHJcbiAgICAgICAgaWYgKGNoaWxkID09PSB0aGlzIHx8IGNoaWxkLnBhcmVudCAhPT0gdGhpcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVBdDogZnVuY3Rpb24gKGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIC8vICBWYWxpZCBpbmRleD9cclxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkWzBdKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFswXS5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlSW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmludGVycG9sYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW5jSW50ZXJwb2xhdGlvbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzeW5jSW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHZhciBvbGQgPSB0aGlzLm9sZDtcclxuICAgICAgICB2YXIgd29ybGQgPSB0aGlzLndvcmxkO1xyXG5cclxuICAgICAgICBvbGQuYSA9IHdvcmxkLmE7XHJcbiAgICAgICAgb2xkLmIgPSB3b3JsZC5iO1xyXG4gICAgICAgIG9sZC5jID0gd29ybGQuYztcclxuICAgICAgICBvbGQuZCA9IHdvcmxkLmQ7XHJcbiAgICAgICAgb2xkLnR4ID0gd29ybGQudHg7XHJcbiAgICAgICAgb2xkLnR5ID0gd29ybGQudHk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2FibGVJbnRlcnBvbGF0aW9uOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICh4LCB5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IHg7IH1cclxuXHJcbiAgICAgICAgdGhpcy5fcG9zWCA9IHg7XHJcbiAgICAgICAgdGhpcy5fcG9zWSA9IHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTY2FsZTogZnVuY3Rpb24gKHgsIHkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0geDsgfVxyXG5cclxuICAgICAgICB0aGlzLl9zY2FsZVggPSB4O1xyXG4gICAgICAgIHRoaXMuX3NjYWxlWSA9IHk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UGl2b3Q6IGZ1bmN0aW9uICh4LCB5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IHg7IH1cclxuXHJcbiAgICAgICAgdGhpcy5fcGl2b3RYID0geDtcclxuICAgICAgICB0aGlzLl9waXZvdFkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0QW5jaG9yOiBmdW5jdGlvbiAoeCwgeSlcclxuICAgIHtcclxuICAgICAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSB4OyB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FuY2hvclggPSB4O1xyXG4gICAgICAgIHRoaXMuX2FuY2hvclkgPSB5O1xyXG5cclxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Um90YXRpb246IGZ1bmN0aW9uIChyb3RhdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgVXBkYXRlcyB0aGUgVHJhbnNmb3JtLndvcmxkIG9iamVjdCwgcmVhZHkgZm9yIHJlbmRlcmluZ1xyXG4gICAgLy8gIEFzc3VtaW5nIHRoaXMgVHJhbnNmb3JtIGlzIGEgcm9vdCBub2RlIChpLmUuIG5vIHRyYW5zZm9ybSBwYXJlbnQpXHJcbiAgICB1cGRhdGVGcm9tUm9vdDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgb2xkID0gdGhpcy5vbGQ7XHJcbiAgICAgICAgdmFyIHdvcmxkID0gdGhpcy53b3JsZDtcclxuXHJcbiAgICAgICAgb2xkLmEgPSB3b3JsZC5hO1xyXG4gICAgICAgIG9sZC5iID0gd29ybGQuYjtcclxuICAgICAgICBvbGQuYyA9IHdvcmxkLmM7XHJcbiAgICAgICAgb2xkLmQgPSB3b3JsZC5kO1xyXG4gICAgICAgIG9sZC50eCA9IHdvcmxkLnR4O1xyXG4gICAgICAgIG9sZC50eSA9IHdvcmxkLnR5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNMb2NhbFJvdGF0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnVHJhbnNmb3JtLnVwZGF0ZUZyb21Sb290Jyk7XHJcblxyXG4gICAgICAgICAgICB3b3JsZC5hID0gdGhpcy5jYWNoZS5hO1xyXG4gICAgICAgICAgICB3b3JsZC5iID0gdGhpcy5jYWNoZS5iO1xyXG4gICAgICAgICAgICB3b3JsZC5jID0gdGhpcy5jYWNoZS5jO1xyXG4gICAgICAgICAgICB3b3JsZC5kID0gdGhpcy5jYWNoZS5kO1xyXG4gICAgICAgICAgICB3b3JsZC50eCA9IHRoaXMuX3Bvc1ggLSAoKHRoaXMuX3Bpdm90WCAqIHRoaXMuY2FjaGUuYSkgKyAodGhpcy5fcGl2b3RZICogdGhpcy5jYWNoZS5jKSk7XHJcbiAgICAgICAgICAgIHdvcmxkLnR5ID0gdGhpcy5fcG9zWSAtICgodGhpcy5fcGl2b3RYICogdGhpcy5jYWNoZS5iKSArICh0aGlzLl9waXZvdFkgKiB0aGlzLmNhY2hlLmQpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkUm90YXRpb24gPSBNYXRoLmF0YW4yKC10aGlzLmNhY2hlLmMsIHRoaXMuY2FjaGUuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJ1RyYW5zZm9ybS51cGRhdGVGcm9tUm9vdCBGQVNUJyk7XHJcblxyXG4gICAgICAgICAgICB3b3JsZC5hID0gdGhpcy5fc2NhbGVYO1xyXG4gICAgICAgICAgICB3b3JsZC5iID0gMDtcclxuICAgICAgICAgICAgd29ybGQuYyA9IDA7XHJcbiAgICAgICAgICAgIHdvcmxkLmQgPSB0aGlzLl9zY2FsZVk7XHJcbiAgICAgICAgICAgIHdvcmxkLnR4ID0gdGhpcy5fcG9zWCAtICh0aGlzLl9waXZvdFggKiB0aGlzLl9zY2FsZVgpO1xyXG4gICAgICAgICAgICB3b3JsZC50eSA9IHRoaXMuX3Bvc1kgLSAodGhpcy5fcGl2b3RZICogdGhpcy5fc2NhbGVZKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkUm90YXRpb24gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZVggPSB0aGlzLl9zY2FsZVg7XHJcbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZVkgPSB0aGlzLl9zY2FsZVk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVGcm9tUGFyZW50OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBvbGQgPSB0aGlzLm9sZDtcclxuICAgICAgICB2YXIgd29ybGQgPSB0aGlzLndvcmxkO1xyXG5cclxuICAgICAgICBvbGQuYSA9IHdvcmxkLmE7XHJcbiAgICAgICAgb2xkLmIgPSB3b3JsZC5iO1xyXG4gICAgICAgIG9sZC5jID0gd29ybGQuYztcclxuICAgICAgICBvbGQuZCA9IHdvcmxkLmQ7XHJcbiAgICAgICAgb2xkLnR4ID0gd29ybGQudHg7XHJcbiAgICAgICAgb2xkLnR5ID0gd29ybGQudHk7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudC53b3JsZDtcclxuICAgICAgICB2YXIgdHggPSAwO1xyXG4gICAgICAgIHZhciB0eSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0xvY2FsUm90YXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICdUcmFuc2Zvcm0udXBkYXRlRnJvbVBhcmVudCcsIHRoaXMucGFyZW50Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmNhY2hlLmE7XHJcbiAgICAgICAgICAgIHZhciBiID0gdGhpcy5jYWNoZS5iO1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2FjaGUuYztcclxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmNhY2hlLmQ7XHJcblxyXG4gICAgICAgICAgICB0eCA9IHRoaXMuX3Bvc1ggLSAoKHRoaXMuX3Bpdm90WCAqIGEpICsgKHRoaXMuX3Bpdm90WSAqIGMpKTtcclxuICAgICAgICAgICAgdHkgPSB0aGlzLl9wb3NZIC0gKCh0aGlzLl9waXZvdFggKiBiKSArICh0aGlzLl9waXZvdFkgKiBkKSk7XHJcblxyXG4gICAgICAgICAgICB3b3JsZC5hID0gKGEgKiBwYXJlbnQuYSkgKyAoYiAqIHBhcmVudC5jKTtcclxuICAgICAgICAgICAgd29ybGQuYiA9IChhICogcGFyZW50LmIpICsgKGIgKiBwYXJlbnQuZCk7XHJcbiAgICAgICAgICAgIHdvcmxkLmMgPSAoYyAqIHBhcmVudC5hKSArIChkICogcGFyZW50LmMpO1xyXG4gICAgICAgICAgICB3b3JsZC5kID0gKGMgKiBwYXJlbnQuYikgKyAoZCAqIHBhcmVudC5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnVHJhbnNmb3JtLnVwZGF0ZUZyb21QYXJlbnQgRkFTVCcsIHRoaXMucGFyZW50Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdHggPSB0aGlzLl9wb3NYIC0gKHRoaXMuX3Bpdm90WCAqIHRoaXMuX3NjYWxlWCk7XHJcbiAgICAgICAgICAgIHR5ID0gdGhpcy5fcG9zWSAtICh0aGlzLl9waXZvdFkgKiB0aGlzLl9zY2FsZVkpO1xyXG5cclxuICAgICAgICAgICAgd29ybGQuYSA9IHRoaXMuX3NjYWxlWCAqIHBhcmVudC5hO1xyXG4gICAgICAgICAgICB3b3JsZC5iID0gdGhpcy5fc2NhbGVYICogcGFyZW50LmI7XHJcbiAgICAgICAgICAgIHdvcmxkLmMgPSB0aGlzLl9zY2FsZVkgKiBwYXJlbnQuYztcclxuICAgICAgICAgICAgd29ybGQuZCA9IHRoaXMuX3NjYWxlWSAqIHBhcmVudC5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd29ybGRSb3RhdGlvbiA9IE1hdGguYXRhbjIoLXRoaXMud29ybGQuYywgdGhpcy53b3JsZC5kKTtcclxuXHJcbiAgICAgICAgd29ybGQudHggPSAodHggKiBwYXJlbnQuYSkgKyAodHkgKiBwYXJlbnQuYykgKyBwYXJlbnQudHg7XHJcbiAgICAgICAgd29ybGQudHkgPSAodHggKiBwYXJlbnQuYikgKyAodHkgKiBwYXJlbnQuZCkgKyBwYXJlbnQudHk7XHJcblxyXG4gICAgICAgIHRoaXMuX3dvcmxkU2NhbGVYID0gdGhpcy5fc2NhbGVYICogTWF0aC5zcXJ0KCh3b3JsZC5hICogd29ybGQuYSkgKyAod29ybGQuYyAqIHdvcmxkLmMpKTtcclxuICAgICAgICB0aGlzLl93b3JsZFNjYWxlWSA9IHRoaXMuX3NjYWxlWSAqIE1hdGguc3FydCgod29ybGQuYiAqIHdvcmxkLmIpICsgKHdvcmxkLmQgKiB3b3JsZC5kKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVBbmNlc3RvcnM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnVHJhbnNmb3JtLnVwZGF0ZUFuY2VzdG9ycycpO1xyXG5cclxuICAgICAgICAvLyAgTm8gcGFyZW50PyBUaGVuIGp1c3QgdXBkYXRlIHRoZSBjaGlsZHJlbiBhbmQgbGVhdmUsIG91ciBqb2IgaXMgZG9uZVxyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICd1cGRhdGVBbmNlc3RvcnMgaGFzIG5vIHBhcmVudCBUcmFuc2Zvcm0nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnJvbVJvb3QoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCAnc3RhcnQgdXBkYXRlQW5jZXN0b3JzIHdoaWxlJyk7XHJcblxyXG4gICAgICAgIC8vICBHZXRzIGFsbCBwYXJlbnQgbm9kZXMsIHN0YXJ0aW5nIGZyb20gdGhpcyBUcmFuc2Zvcm0uXHJcbiAgICAgICAgLy8gIFRoZW4gdXBkYXRlcyBmcm9tIHRoZSB0b3AsIGRvd24sIGJ1dCBvbmx5IG9uIHRoZSBhbmNlc3RvcnMsXHJcbiAgICAgICAgLy8gIG5vdCBhbnkgb3RoZXIgY2hpbGRyZW4gLSB3aWxsIGdpdmUgdXMgYWNjdXJhdGUgd29ybGRYIGV0YyBwcm9wZXJ0aWVzXHJcblxyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgdmFyIG5vZGVzID0gW107XHJcblxyXG4gICAgICAgIGRvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChub2RlKTtcclxuXHJcbiAgICAgICAgLy8gIFdlJ3ZlIGdvdCBhbGwgdGhlIGFuY2VzdG9ycyBpbiB0aGUgJ25vZGVzJyBhcnJheSwgbGV0J3MgbG9vcCBpdFxyXG5cclxuICAgICAgICB3aGlsZSAobm9kZXMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGVzLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnVwZGF0ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5vZGUudXBkYXRlRnJvbVJvb3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEJ5IHRoaXMgcG9pbnQgYWxsIG9mIHRoaXMgVHJhbnNmb3JtcyBhbmNlc3RvcnMgaGF2ZSBiZWVuXHJcbiAgICAgICAgLy8gIHVwZGF0ZWQsIGluIHRoZSBjb3JyZWN0IG9yZGVyLCBzbyB3ZSBjYW4gbm93IGRvIHRoaXMgb25lXHJcbiAgICAgICAgLy8gIGFuZCBhbnkgb2YgaXRzIGNoaWxkcmVuIHRvb1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDaGlsZHJlbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICdUcmFuc2Zvcm0udXBkYXRlQ2hpbGRyZW4nKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUZyb21EaXJ0eVBhcmVudDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsICdpcyB1cGRhdGVGcm9tRGlydHlQYXJlbnQnLCB0aGlzLnBhcmVudC5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tUGFyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGVGcm9tRGlydHlQYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kaXJ0eVZlcnRleCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHRoaXMgVHJhbnNmb3JtIGlzIGRpcnR5XHJcbiAgICAgICAgLy8gIHNvIHdlIG5lZWQgdG8gdXBkYXRlIGl0IGZyb20gaXRzIHBhcmVudFxyXG4gICAgICAgIC8vICBhbmQgdGhlbiBmb3JjZSB0aGUgdXBkYXRlIHRvIGFsbCBjaGlsZHJlblxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGcm9tUm9vdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobGVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGVGcm9tRGlydHlQYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kaXJ0eVZlcnRleCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUNhY2hlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FjaGUuYSA9IHRoaXMuY2FjaGUuY3IgKiB0aGlzLl9zY2FsZVg7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5iID0gdGhpcy5jYWNoZS5zciAqIHRoaXMuX3NjYWxlWDtcclxuICAgICAgICB0aGlzLmNhY2hlLmMgPSAtdGhpcy5jYWNoZS5zciAqIHRoaXMuX3NjYWxlWTtcclxuICAgICAgICB0aGlzLmNhY2hlLmQgPSB0aGlzLmNhY2hlLmNyICogdGhpcy5fc2NhbGVZO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVWZXJ0ZXhEYXRhOiBmdW5jdGlvbiAoaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVPYmplY3QuZnJhbWUgfHwgKCF0aGlzLl9kaXJ0eVZlcnRleCAmJiAhdGhpcy5pbnRlcnBvbGF0ZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmdhbWVPYmplY3QuZnJhbWU7XHJcblxyXG4gICAgICAgIHZhciB3MDtcclxuICAgICAgICB2YXIgaDA7XHJcbiAgICAgICAgdmFyIHcxO1xyXG4gICAgICAgIHZhciBoMTtcclxuXHJcbiAgICAgICAgaWYgKGZyYW1lLmRhdGEudHJpbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBJZiB0aGUgc3ByaXRlIGlzIHRyaW1tZWQsIGFkZCB0aGUgZXh0cmEgc3BhY2UgYmVmb3JlIHRyYW5zZm9ybWluZ1xyXG4gICAgICAgICAgICB3MSA9IGZyYW1lLnggLSAodGhpcy5fYW5jaG9yWCAqIGZyYW1lLndpZHRoKTtcclxuICAgICAgICAgICAgdzAgPSB3MSArIGZyYW1lLmN1dFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaDEgPSBmcmFtZS55IC0gKHRoaXMuX2FuY2hvclkgKiBmcmFtZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBoMCA9IGgxICsgZnJhbWUuY3V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB3MCA9IGZyYW1lLndpZHRoICogKDEgLSB0aGlzLl9hbmNob3JYKTtcclxuICAgICAgICAgICAgLy8gdzEgPSBmcmFtZS53aWR0aCAqIC10aGlzLl9hbmNob3JYO1xyXG5cclxuICAgICAgICAgICAgLy8gaDAgPSBmcmFtZS5oZWlnaHQgKiAoMSAtIHRoaXMuX2FuY2hvclkpO1xyXG4gICAgICAgICAgICAvLyBoMSA9IGZyYW1lLmhlaWdodCAqIC10aGlzLl9hbmNob3JZO1xyXG5cclxuICAgICAgICAgICAgdzAgPSBmcmFtZS5jdXRXaWR0aCAqICgxIC0gdGhpcy5fYW5jaG9yWCk7XHJcbiAgICAgICAgICAgIHcxID0gZnJhbWUuY3V0V2lkdGggKiAtdGhpcy5fYW5jaG9yWDtcclxuXHJcbiAgICAgICAgICAgIGgwID0gZnJhbWUuY3V0SGVpZ2h0ICogKDEgLSB0aGlzLl9hbmNob3JZKTtcclxuICAgICAgICAgICAgaDEgPSBmcmFtZS5jdXRIZWlnaHQgKiAtdGhpcy5fYW5jaG9yWTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXNvbHV0aW9uID0gZnJhbWUuc291cmNlLnJlc29sdXRpb247XHJcblxyXG4gICAgICAgIHZhciB3dCA9IHRoaXMud29ybGQ7XHJcblxyXG4gICAgICAgIHZhciBhID0gd3QuYSAvIHJlc29sdXRpb247XHJcbiAgICAgICAgdmFyIGIgPSB3dC5iIC8gcmVzb2x1dGlvbjtcclxuICAgICAgICB2YXIgYyA9IHd0LmMgLyByZXNvbHV0aW9uO1xyXG4gICAgICAgIHZhciBkID0gd3QuZCAvIHJlc29sdXRpb247XHJcbiAgICAgICAgdmFyIHR4ID0gd3QudHg7XHJcbiAgICAgICAgdmFyIHR5ID0gd3QudHk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmludGVycG9sYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMub2xkO1xyXG5cclxuICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGUgd2l0aCB0aGUgbGFzdCBwb3NpdGlvbiB0byByZWR1Y2Ugc3R1dHRlcmluZy5cclxuICAgICAgICAgICAgYSA9IG9sZC5hICsgKChhIC0gb2xkLmEpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBiID0gb2xkLmIgKyAoKGIgLSBvbGQuYikgKiBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIGMgPSBvbGQuYyArICgoYyAtIG9sZC5jKSAqIGludGVycG9sYXRpb25QZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgZCA9IG9sZC5kICsgKChkIC0gb2xkLmQpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB0eCA9IG9sZC50eCArICgodHggLSBvbGQudHgpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB0eSA9IG9sZC50eSArICgodHkgLSBvbGQudHkpICogaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdGF0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB2YXIgY3cgPSBmcmFtZS5jdXRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGNoID0gZnJhbWUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgYTAgPSBhO1xyXG4gICAgICAgICAgICB2YXIgYjAgPSBiO1xyXG4gICAgICAgICAgICB2YXIgYzAgPSBjO1xyXG4gICAgICAgICAgICB2YXIgZDAgPSBkO1xyXG4gICAgICAgICAgICB2YXIgX3cxID0gdzE7XHJcbiAgICAgICAgICAgIHZhciBfdzAgPSB3MDtcclxuXHJcbiAgICAgICAgICAgIC8vICBPZmZzZXQgYmVmb3JlIHJvdGF0aW5nXHJcbiAgICAgICAgICAgIHR4ID0gKHd0LmMgKiBjaCkgKyB0eDtcclxuICAgICAgICAgICAgdHkgPSAod3QuZCAqIGNoKSArIHR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gIFJvdGF0ZSBtYXRyaXggYnkgOTAgZGVncmVlcyB3aXRoIHByZWNhbGMgdmFsdWVzIGZvciBzaW5lIGFuZCBjb3NpbmUgb2YgcmFkKDkwKVxyXG4gICAgICAgICAgICBhID0gKGEwICogNi4xMjMyMzM5OTU3MzY3NjZlLTE3KSArIC1jMDtcclxuICAgICAgICAgICAgYiA9IChiMCAqIDYuMTIzMjMzOTk1NzM2NzY2ZS0xNykgKyAtZDA7XHJcbiAgICAgICAgICAgIGMgPSBhMCArIChjMCAqIDYuMTIzMjMzOTk1NzM2NzY2ZS0xNyk7XHJcbiAgICAgICAgICAgIGQgPSBiMCArIChkMCAqIDYuMTIzMjMzOTk1NzM2NzY2ZS0xNyk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgVVYgY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgZnJhbWUudXBkYXRlVVZzSW52ZXJ0ZWQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJvdGF0ZSBkaW1lbnNpb25zXHJcbiAgICAgICAgICAgIHcwID0gaDA7XHJcbiAgICAgICAgICAgIHcxID0gaDE7XHJcbiAgICAgICAgICAgIGgwID0gX3cwO1xyXG4gICAgICAgICAgICBoMSA9IF93MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmcmFtZS5hdXRvUm91bmQgPT09IDEgfHwgKGZyYW1lLmF1dG9Sb3VuZCA9PT0gLTEgJiYgdGhpcy5nYW1lLnJlbmRlcmVyLnJvdW5kUGl4ZWxzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR4IHw9IDA7XHJcbiAgICAgICAgICAgIHR5IHw9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdmVydCA9IHRoaXMuZ2xWZXJ0ZXh0RGF0YTtcclxuXHJcbiAgICAgICAgLy8gIFRvcCBMZWZ0IFZlcnRcclxuICAgICAgICB2ZXJ0LngwID0gKGEgKiB3MSkgKyAoYyAqIGgxKSArIHR4O1xyXG4gICAgICAgIHZlcnQueTAgPSAoZCAqIGgxKSArIChiICogdzEpICsgdHk7XHJcblxyXG4gICAgICAgIC8vICBUb3AgUmlnaHQgVmVydFxyXG4gICAgICAgIHZlcnQueDEgPSAoYSAqIHcwKSArIChjICogaDEpICsgdHg7XHJcbiAgICAgICAgdmVydC55MSA9IChkICogaDEpICsgKGIgKiB3MCkgKyB0eTtcclxuXHJcbiAgICAgICAgLy8gIEJvdHRvbSBSaWdodCBWZXJ0XHJcbiAgICAgICAgdmVydC54MiA9IChhICogdzApICsgKGMgKiBoMCkgKyB0eDtcclxuICAgICAgICB2ZXJ0LnkyID0gKGQgKiBoMCkgKyAoYiAqIHcwKSArIHR5O1xyXG5cclxuICAgICAgICAvLyAgQm90dG9tIExlZnQgVmVydFxyXG4gICAgICAgIHZlcnQueDMgPSAoYSAqIHcxKSArIChjICogaDApICsgdHg7XHJcbiAgICAgICAgdmVydC55MyA9IChkICogaDApICsgKGIgKiB3MSkgKyB0eTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdmVydDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VmVydGV4RGF0YTogZnVuY3Rpb24gKGludGVycG9sYXRpb25QZXJjZW50YWdlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmludGVycG9sYXRlIHx8IHRoaXMuX2RpcnR5VmVydGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0ZXhEYXRhKGludGVycG9sYXRpb25QZXJjZW50YWdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5VmVydGV4ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nbFZlcnRleHREYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9uZVZlcnRleERhdGE6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHNyYyA9IHRoaXMuZ2xWZXJ0ZXh0RGF0YTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDA6IHNyYy54MCxcclxuICAgICAgICAgICAgeTA6IHNyYy55MCxcclxuICAgICAgICAgICAgeDE6IHNyYy54MSxcclxuICAgICAgICAgICAgeTE6IHNyYy55MSxcclxuICAgICAgICAgICAgeDI6IHNyYy54MixcclxuICAgICAgICAgICAgeTI6IHNyYy55MixcclxuICAgICAgICAgICAgeDM6IHNyYy54MyxcclxuICAgICAgICAgICAgeTM6IHNyYy55M1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhUcmFuc2Zvcm0ucHJvdG90eXBlLCB7XHJcblxyXG4gICAgLy8gIFRyYW5zZm9ybSBnZXR0ZXJzIC8gc2V0dGVyc1xyXG5cclxuICAgIHg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc1g7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NYID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHk6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc1k7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNjYWxlOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY2FsZVg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2FsZVggPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2NhbGVZID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNjYWxlWDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGVYO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NhbGVYID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNjYWxlWToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGVZO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NhbGVZID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFuY2hvcjoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yWDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5jaG9yKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhbmNob3JYOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JYO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhbmNob3JZOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JZO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yWSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwaXZvdFg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bpdm90WDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bpdm90WCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBpdm90WToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGl2b3RZO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcGl2b3RZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYW5nbGU6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBoYXNlci5NYXRoLndyYXBBbmdsZSh0aGlzLnJvdGF0aW9uICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHZhbHVlKSAqIFBoYXNlci5NYXRoLkRFR19UT19SQUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcm90YXRpb246IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvdGF0aW9uID09PSB2YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3RhdGlvbiAlIFBoYXNlci5NYXRoLlBJMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5zciA9IE1hdGguc2luKHRoaXMuX3JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUuY3IgPSBNYXRoLmNvcyh0aGlzLl9yb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0xvY2FsUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNMb2NhbFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgU2V0cyB0aGlzICpjb21wb25lbnQqIGFzIGJlaW5nIGRpcnR5XHJcbiAgICBkaXJ0eToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlydHkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbW1lZGlhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eVZlcnRleCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuYWRkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgR0xPQkFMIHJlYWQtb25seSBwcm9wZXJ0aWVzIGZyb20gaGVyZSBvblxyXG4gICAgLy8gIE5lZWQgKmFsbCogcGFyZW50cyB0YWtlbiBpbnRvIGFjY291bnQgdG8gZ2V0IHRoZSBjb3JyZWN0IHZhbHVlc1xyXG5cclxuICAgIG5hbWU6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdhbWVPYmplY3QpID8gdGhpcy5nYW1lT2JqZWN0Lm5hbWUgOiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB3b3JsZFJvdGF0aW9uOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ybGRSb3RhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB3b3JsZFNjYWxlWDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFuY2VzdG9ycygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkU2NhbGVYO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHdvcmxkU2NhbGVZOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ybGRTY2FsZVk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgd29ybGRYOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5jZXN0b3JzKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53b3JsZC50eDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB3b3JsZFk6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmNlc3RvcnMoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmxkLnR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb21wb25lbnRzL1RyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIEF1ZGlvID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1ZGlvRGF0YSAtIEFyZSBBdWRpbyB0YWdzIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhdWRpb0RhdGE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkF1ZGlvIC0gSXMgdGhlIFdlYkF1ZGlvIEFQSSBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2ViQXVkaW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9nZyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBvZ2c6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdXMgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvcHVzIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9wdXM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wMyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG1wMyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtcDM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdhdiAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdhdiBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3YXY6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDYW4gdGhpcyBkZXZpY2UgcGxheSBtNGEgZmlsZXM/XHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbTRhIC0gVHJ1ZSBpZiB0aGlzIGRldmljZSBjYW4gcGxheSBtNGEgZmlsZXMuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbTRhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJtIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2VibSBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJtOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBkb2xieSAtIENhbiB0aGlzIGRldmljZSBwbGF5IEVDLTMgRG9sYnkgRGlnaXRhbCBQbHVzIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGRvbGJ5OiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgQXVkaW8uYXVkaW9EYXRhID0gISEod2luZG93WydBdWRpbyddKTtcclxuICAgIEF1ZGlvLndlYkF1ZGlvID0gISEod2luZG93WydBdWRpb0NvbnRleHQnXSB8fCB3aW5kb3dbJ3dlYmtpdEF1ZGlvQ29udGV4dCddKTtcclxuXHJcbiAgICB2YXIgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gISFhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGU7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby5vZ2cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cIm9wdXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vcHVzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm9wdXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm1wMyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBNaW1ldHlwZXMgYWNjZXB0ZWQ6XHJcbiAgICAgICAgICAgIC8vICBkZXZlbG9wZXIubW96aWxsYS5vcmcvRW4vTWVkaWFfZm9ybWF0c19zdXBwb3J0ZWRfYnlfdGhlX2F1ZGlvX2FuZF92aWRlb19lbGVtZW50c1xyXG4gICAgICAgICAgICAvLyAgYml0Lmx5L2lwaG9uZW9zY29kZWNzXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ud2F2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ubTRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby53ZWJtID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0O2NvZGVjcz1cImVjLTNcIicpICE9PSAnJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKEJyb3dzZXIuZWRnZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChCcm93c2VyLnNhZmFyaSAmJiBCcm93c2VyLnNhZmFyaVZlcnNpb24gPj0gOSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKC9NYWMgT1MgWCAoXFxkKylfKFxcZCspLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWpvciA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlub3IgPSBwYXJzZUludChSZWdFeHAuJDIsIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWFqb3IgPT09IDEwICYmIG1pbm9yID49IDExKSB8fCBtYWpvciA+IDEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSlcclxuICAgIHtcclxuICAgICAgICAvLyAgTm90aGluZyB0byBkbyBoZXJlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEF1ZGlvO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0F1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvQXVkaW8uanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcblxyXG52YXIgRnVsbHNjcmVlbiA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdmFpbGFibGUgLSBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIEZ1bGwgU2NyZWVuIEFQST9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVxdWVzdCAtIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBGdWxsIFNjcmVlbiBBUEkgdGhpcyBob2xkcyB0aGUgY2FsbCB5b3UgbmVlZCB0byB1c2UgdG8gYWN0aXZhdGUgaXQuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgcmVxdWVzdDogJycsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYW5jZWwgLSBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgRnVsbCBTY3JlZW4gQVBJIHRoaXMgaG9sZHMgdGhlIGNhbGwgeW91IG5lZWQgdG8gdXNlIHRvIGNhbmNlbCBpdC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW5jZWw6ICcnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGtleWJvYXJkIC0gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IGFjY2VzcyB0byB0aGUgS2V5Ym9hcmQgZHVyaW5nIEZ1bGwgU2NyZWVuIG1vZGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAga2V5Ym9hcmQ6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiogQ2hlY2tzIGZvciBzdXBwb3J0IG9mIHRoZSBGdWxsIFNjcmVlbiBBUEkuXHJcbiovXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgdmFyIGZzID0gW1xyXG4gICAgICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ3JlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdtc1JlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtb3pSZXF1ZXN0RnVsbHNjcmVlbidcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlbGVtZW50W2ZzW2ldXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZ1bGxzY3JlZW4uYXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0ID0gZnNbaV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2ZzID0gW1xyXG4gICAgICAgICdjYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnZXhpdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdtc0NhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21vekV4aXRGdWxsc2NyZWVuJ1xyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoRnVsbHNjcmVlbi5hdmFpbGFibGUpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRbY2ZzW2ldXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5jYW5jZWwgPSBjZnNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAgS2V5Ym9hcmQgSW5wdXQ/XHJcbiAgICBpZiAod2luZG93WydFbGVtZW50J10gJiYgRWxlbWVudFsnQUxMT1dfS0VZQk9BUkRfSU5QVVQnXSlcclxuICAgIHtcclxuICAgICAgICBGdWxsc2NyZWVuLmtleWJvYXJkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRnVsbHNjcmVlbjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GdWxsc2NyZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxuXHJcbnZhciBJbnB1dCA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB0b3VjaCAtIElzIHRvdWNoIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0b3VjaDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXNwb2ludGVyIC0gSXMgbXNwb2ludGVyIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtc3BvaW50ZXI6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgez9zdHJpbmd9IHdoZWVsVHlwZSAtIFRoZSBuZXdlc3QgdHlwZSBvZiBXaGVlbC9TY3JvbGwgZXZlbnQgc3VwcG9ydGVkOiAnd2hlZWwnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCdcclxuICAgICogQGRlZmF1bHRcclxuICAgICogQHByb3RlY3RlZFxyXG4gICAgKi9cclxuICAgIHdoZWVsRXZlbnQ6IG51bGxcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8ICh3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPj0gMSkpXHJcbiAgICB7XHJcbiAgICAgICAgSW5wdXQudG91Y2ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZClcclxuICAgIHtcclxuICAgICAgICBJbnB1dC5tc3BvaW50ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghT1MuY29jb29uSlMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxyXG4gICAgICAgIGlmICgnb253aGVlbCcgaW4gd2luZG93IHx8IChCcm93c2VyLmllICYmICdXaGVlbEV2ZW50JyBpbiB3aW5kb3cpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gRE9NMyBXaGVlbCBFdmVudDogRkYgMTcrLCBJRSA5KywgQ2hyb21lIDMxKywgU2FmYXJpIDcrXHJcbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnd2hlZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgnb25tb3VzZXdoZWVsJyBpbiB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBOb24tRkYgbGVnYWN5OiBJRSA2LTksIENocm9tZSAxLTMxLCBTYWZhcmkgNS03LlxyXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ21vdXNld2hlZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgJ01vdXNlU2Nyb2xsRXZlbnQnIGluIHdpbmRvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEZGIHByaW9yIHRvIDE3LiBUaGlzIHNob3VsZCBwcm9iYWJseSBiZSBzY3J1YmJlZC5cclxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICdET01Nb3VzZVNjcm9sbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnB1dDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9JbnB1dC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0lucHV0LmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIFZpZGVvID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZ1ZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb2dnIHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9nZ1ZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBoMjY0VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBoMjY0IG1wNCB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBoMjY0VmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wNFZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaDI2NCBtcDQgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbXA0VmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYm1WaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdlYm0gdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2VibVZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB2cDlWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHZwOSB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB2cDlWaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaGxzVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBobHMgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaGxzVmlkZW86IGZhbHNlXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgIHZhciByZXN1bHQgPSAhIXZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZTtcclxuXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLm9nZ1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gV2l0aG91dCBRdWlja1RpbWUsIHRoaXMgdmFsdWUgd2lsbCBiZSBgdW5kZWZpbmVkYC4gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy81NDZcclxuICAgICAgICAgICAgICAgIFZpZGVvLmgyNjRWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBWaWRlby5tcDRWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWRlby53ZWJtVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDlcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLnZwOVZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXBwbGljYXRpb24veC1tcGVnVVJMOyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlkZW8uaGxzVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5vdGhpbmcgdG8gZG9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gVmlkZW87XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvVmlkZW8uanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9WaWRlby5qcyIsIi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXHJcbi8vICBiZWZvcmUgYSBQaGFzZXIuR2FtZSBpbnN0YW5jZSBoYXMgZXZlbiBiZWVuIGNyZWF0ZWQuXHJcbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBjYW4gc2hhcmUgaXQsXHJcbi8vICB3aXRob3V0IGhhdmluZyB0byByZS1wb2xsIHRoZSBkZXZpY2UgYWxsIG92ZXIgYWdhaW5cclxuXHJcbnZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxudmFyIEZlYXR1cmVzID0gcmVxdWlyZSgnLi9GZWF0dXJlcycpO1xyXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XHJcbnZhciBBdWRpbyA9IHJlcXVpcmUoJy4vQXVkaW8nKTtcclxudmFyIFZpZGVvID0gcmVxdWlyZSgnLi9WaWRlbycpO1xyXG52YXIgRnVsbHNjcmVlbiA9IHJlcXVpcmUoJy4vRnVsbHNjcmVlbicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgT1M6IE9TLFxyXG4gICAgQnJvd3NlcjogQnJvd3NlcixcclxuICAgIEZlYXR1cmVzOiBGZWF0dXJlcyxcclxuICAgIElucHV0OiBJbnB1dCxcclxuICAgIEF1ZGlvOiBBdWRpbyxcclxuICAgIFZpZGVvOiBWaWRlbyxcclxuICAgIEZ1bGxzY3JlZW46IEZ1bGxzY3JlZW5cclxuXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL2luZGV4LmpzIiwiZnVuY3Rpb24gQWRkVG9ET00gKGVsZW1lbnQsIHBhcmVudCwgb3ZlcmZsb3dIaWRkZW4pXHJcbntcclxuICAgIGlmIChvdmVyZmxvd0hpZGRlbiA9PT0gdW5kZWZpbmVkKSB7IG92ZXJmbG93SGlkZGVuID0gdHJ1ZTsgfVxyXG5cclxuICAgIHZhciB0YXJnZXQ7XHJcblxyXG4gICAgaWYgKHBhcmVudClcclxuICAgIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgSG9wZWZ1bGx5IGFuIGVsZW1lbnQgSURcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ29iamVjdCcgJiYgcGFyZW50Lm5vZGVUeXBlID09PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFF1aWNrIHRlc3QgZm9yIGEgSFRNTGVsZW1lbnRcclxuICAgICAgICAgICAgdGFyZ2V0ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAgRmFsbGJhY2ssIGNvdmVycyBhbiBpbnZhbGlkIElEIGFuZCBhIG5vbiBIVE1MZWxlbWVudCBvYmplY3RcclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG92ZXJmbG93SGlkZGVuICYmIHRhcmdldC5zdHlsZSlcclxuICAgIHtcclxuICAgICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFkZFRvRE9NO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vQWRkVG9ET00uanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBPUyA9IHJlcXVpcmUoJy4uL2RldmljZS9PUycpO1xyXG5cclxudmFyIGlzQm9vdGVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBET01Db250ZW50TG9hZGVkIChjYWxsYmFjaylcclxue1xyXG4gICAgaWYgKGlzQm9vdGVkKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKVxyXG4gICAge1xyXG4gICAgICAgIGlzQm9vdGVkID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoZWNrID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpc0Jvb3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgY2hlY2ssIHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVjaywgMjApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoT1MuY29yZG92YSAmJiAhT1MuY29jb29uSlMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFJlZi4gaHR0cDovL2RvY3MucGhvbmVnYXAuY29tL2VuLzMuNS4wL2NvcmRvdmFfZXZlbnRzX2V2ZW50cy5tZC5odG1sI2RldmljZXJlYWR5XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjaGVjaywgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRE9NQ29udGVudExvYWRlZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQWJzdHJhY3RzIGF3YXkgdGhlIHVzZSBvZiBSQUYgb3Igc2V0VGltZU91dCBmb3IgdGhlIGNvcmUgZ2FtZSB1cGRhdGUgbG9vcC5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlU2V0VGltZU91dD1mYWxzZV0gLSBUZWxsIFBoYXNlciB0byB1c2Ugc2V0VGltZU91dCBldmVuIGlmIHJhZiBpcyBhdmFpbGFibGUuXHJcbiovXHJcbmZ1bmN0aW9uIFJlcXVlc3RBbmltYXRpb25GcmFtZSAoZ2FtZSlcclxue1xyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBUaGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuICAgICovXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzUnVubmluZyAtIHRydWUgaWYgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlzIHJ1bm5pbmcsIG90aGVyd2lzZSBmYWxzZS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudGljayA9IDA7XHJcblxyXG4gICAgdmFyIHZlbmRvcnMgPSBbXHJcbiAgICAgICAgJ21zJyxcclxuICAgICAgICAnbW96JyxcclxuICAgICAgICAnd2Via2l0JyxcclxuICAgICAgICAnbydcclxuICAgIF07XHJcblxyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzU2V0VGltZU91dCAgLSBUcnVlIGlmIHRoZSBicm93c2VyIGlzIHVzaW5nIHNldFRpbWVvdXQgaW5zdGVhZCBvZiByQWYuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5pc1NldFRpbWVPdXQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVPdXRJRCAtIFRoZSBjYWxsYmFjayBzZXRUaW1lb3V0IG9yIHJBZiBjYWxsYmFjayBJRCB1c2VkIHdoZW4gY2FsbGluZyBjYW5jZWwuXHJcbiAgICAqL1xyXG4gICAgdGhpcy50aW1lT3V0SUQgPSBudWxsO1xyXG5cclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcclxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICBfdGhpcy50aWNrID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICBfdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBfdGhpcy5nYW1lLnVwZGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RlcFRpbWVvdXQgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIF90aGlzLnRpY2sgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAvLyBfdGhpcy5nYW1lLnVwZGF0ZShfdGhpcy50aWNrKTtcclxuXHJcbiAgICAgICAgLy8gX3RoaXMudGltZU91dElEID0gd2luZG93LnNldFRpbWVvdXQoc3RlcFRpbWVvdXQsIF90aGlzLmdhbWUudGltZS50aW1lVG9DYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFN0YXJ0cyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHJ1bm5pbmcgb3Igc2V0VGltZW91dCBpZiB1bmF2YWlsYWJsZSBpbiBicm93c2VyXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdGFydFxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcuZm9yY2VTZXRUaW1lT3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NldFRpbWVPdXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dChzdGVwVGltZW91dCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogU3RvcHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIHJ1bm5pbmcuXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdG9wXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1NldFRpbWVPdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lT3V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblJlcXVlc3RBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xyXG52YXIgRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vRXZlbnRMaXN0ZW5lcicpO1xyXG5cclxudmFyIEV2ZW50QmluZGluZyA9IGZ1bmN0aW9uIChkaXNwYXRjaGVyLCB0eXBlKVxyXG57XHJcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuc3RhdGUgPSBDT05TVC5ESVNQQVRDSEVSX0lETEU7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IFtdO1xyXG59O1xyXG5cclxuRXZlbnRCaW5kaW5nLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50QmluZGluZztcclxuXHJcbkV2ZW50QmluZGluZy5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SW5kZXg6IGZ1bmN0aW9uIChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLmNhbGxiYWNrID09PSBjYWxsYmFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXM6IGZ1bmN0aW9uIChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0KGNhbGxiYWNrKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKGNhbGxiYWNrLCBwcmlvcml0eSwgb25jZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIGlmICghbGlzdGVuZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgVGhlIGxpc3RlbmVyIGRvZXNuJ3QgZXhpc3QsIHNvIGNyZWF0ZSBvbmVcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBFdmVudExpc3RlbmVyKHRoaXMudHlwZSwgY2FsbGJhY2ssIHByaW9yaXR5LCBvbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIExpc3RlbmVyIGFscmVhZHkgZXhpc3RzLCBhYm9ydFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9JRExFKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZSBEaXNwYXRjaGVyIGlzbid0IGRvaW5nIGFueXRoaW5nLCBzbyB3ZSBkb24ndCBuZWVkIGEgcGVuZGluZyBzdGF0ZVxyXG4gICAgICAgICAgICBsaXN0ZW5lci5zdGF0ZSA9IENPTlNULkxJU1RFTkVSX0FDVElWRTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBBZGQgaXQgdG8gdGhlIGxpc3QsIGJ1dCBrZWVwIHRoZSBzdGF0ZSBhcyBwZW5kaW5nLlxyXG4gICAgICAgICAgICAvLyAgVGhlIGNhbGwgdG8gJ3RpZHknIHdpbGwgc29ydCBpdCBvdXQgYXQgdGhlIGVuZCBvZiB0aGUgZGlzcGF0Y2guXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc29ydEhhbmRsZXI6IGZ1bmN0aW9uIChsaXN0ZW5lckEsIGxpc3RlbmVyQilcclxuICAgIHtcclxuICAgICAgICBpZiAobGlzdGVuZXJCLnByaW9yaXR5IDwgbGlzdGVuZXJBLnByaW9yaXR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsaXN0ZW5lckIucHJpb3JpdHkgPiBsaXN0ZW5lckEucHJpb3JpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9JRExFKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZSBEaXNwYXRjaGVyIGlzbid0IGRvaW5nIGFueXRoaW5nLCBzbyB3ZSBjYW4gcmVtb3ZlIHJpZ2h0IGF3YXlcclxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLmdldEluZGV4KGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpICE9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBUaGUgRGlzcGF0Y2hlciBpcyB3b3JraW5nLCBzbyB3ZSBmbGFnIHRoZSBsaXN0ZW5lciBmb3IgcmVtb3ZhbCBhdCB0aGUgZW5kXHJcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0KGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuc3RhdGUgPSBDT05TVC5MSVNURU5FUl9SRU1PVklORztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ09OU1QuRElTUEFUQ0hFUl9JRExFKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgXFwnRXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoXFwnIG9uIFxcJycgKyB0aGlzLnR5cGUgKyAnXFwnOiBUaGUgZXZlbnQgaXMgYWxyZWFkeSBiZWluZyBkaXNwYXRjaGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZS5sZW5ndGggPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgVGhpcyB3YXMgYSB2YWxpZCBkaXNwYXRjaCBjYWxsLCB3ZSBqdXN0IGhhZCBub3RoaW5nIHRvIGRvIC4uLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORztcclxuXHJcbiAgICAgICAgdmFyIGxpc3RlbmVyO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmFjdGl2ZVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfQUNUSVZFKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbCh0aGlzLmRpc3BhdGNoZXIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vICBIYXMgdGhlIGNhbGxiYWNrIGNoYW5nZWQgdGhlIHN0YXRlIG9mIHRoaXMgYmluZGluZz9cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENPTlNULkRJU1BBVENIRVJfRElTUEFUQ0hJTkcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBZdXAhIExldCdzIGJyZWFrIG91dFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBXYXMgaXQgYSAnb25jZScgbGlzdGVuZXI/XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vbmNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5zdGF0ZSA9IENPTlNULkxJU1RFTkVSX1JFTU9WSU5HO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgSGFzIHRoZSBldmVudCBiZWVuIGhhbHRlZCBieSB0aGUgY2FsbGJhY2s/XHJcbiAgICAgICAgICAgIGlmICghZXZlbnQuX3Byb3BhZ2F0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIEJyZWFrIG91dCwgYSBsaXN0ZW5lciBoYXMgY2FsbGVkIEV2ZW50LnN0b3BQcm9wYWdhdGlvblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBEaXNwYXRjaCBvdmVyLCBvciBhYm9ydGVkXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfUkVNT1ZJTkcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEFsbCBkb25lLCB0aWR5IHRoZSBsaXN0IGluIGNhc2UgdGhlcmUgd2VyZSBhbnkgcGVuZGluZyBldmVudHMgYWRkZWRcclxuICAgICAgICAgICAgdGhpcy50aWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfREVTVFJPWUVEKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRlbGV0ZSh0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWxsIGRvbmUsIGp1c3QgcHVyZ2UgdGhlIGxpc3RcclxuICAgICAgICAgICAgdGhpcy50aWR5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9JRExFO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFJlbW92ZXMgYWxsIGxpc3RlbmVyc1xyXG4gICAgLy8gIElmIHRoaXMgaXMgY3VycmVudGx5IGJlaW5nIGRpc3BhdGNoZWQgdGhlbiBkb24ndCByZW1vdmUgJ3BlbmRpbmcnIGxpc3RlbmVyc1xyXG4gICAgLy8gIChpLmUuIG9uZXMgdGhhdCB3ZXJlIGFkZGVkIGR1cmluZyB0aGUgZGlzcGF0Y2gpLCBvbmx5IGFjdGl2ZSBvbmVzXHJcbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLnN0YXRlICE9PSBDT05TVC5MSVNURU5FUl9QRU5ESU5HKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9JRExFO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdGlkeTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYWRkZWQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgaSA9IHRoaXMuYWN0aXZlLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGRvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IENPTlNULkxJU1RFTkVSX1JFTU9WSU5HKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IENPTlNULkxJU1RFTkVSX1BFTkRJTkcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnN0YXRlID09PSBDT05TVC5MSVNURU5FUl9BQ1RJVkU7XHJcbiAgICAgICAgICAgICAgICBhZGRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChpID49IDApO1xyXG5cclxuICAgICAgICBpZiAoYWRkZWQgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfREVTVFJPWUVEO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnRCaW5kaW5nO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnRCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvRXZlbnRCaW5kaW5nLmpzIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xyXG5cclxudmFyIEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHByaW9yaXR5LCBvbmNlKVxyXG57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgICAgICBvbmNlOiBvbmNlLFxyXG4gICAgICAgIHN0YXRlOiBDT05TVC5MSVNURU5FUl9QRU5ESU5HXHJcbiAgICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudExpc3RlbmVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnRMaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZXZlbnRzL0V2ZW50TGlzdGVuZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cycpO1xyXG5cclxuLyoqXHJcbiogVGhpcyBpcyB0aGUgYmFzZSBHYW1lIE9iamVjdCBjbGFzcyB0aGF0IHlvdSBjYW4gdXNlIHdoZW4gY3JlYXRpbmcgeW91ciBvd24gZXh0ZW5kZWQgR2FtZSBPYmplY3RzLlxyXG4qIEl0IGhpZGVzIGF3YXkgdGhlICdwcml2YXRlJyBzdHVmZiBhbmQgZXhwb3NlcyBvbmx5IHRoZSB1c2VmdWwgZ2V0dGVycywgc2V0dGVycyBhbmQgcHJvcGVydGllcy5cclxuKlxyXG4qIEBjbGFzc1xyXG4qL1xyXG5cclxuLy8gIFBoYXNlci5UZXh0dXJlIGFuZCBQaGFzZXIuRnJhbWUgb2JqZWN0cyBwYXNzZWQgaW4gaGVyZSwgaW5zdGVhZCBvZiBsb29rZWQtdXAuXHJcbi8vICBBbGxvd3Mgb3ZlcnJpZGUgZnJvbSBub24tc3RhbmRhcmQgR08gdHlwZXNcclxuXHJcbnZhciBHYW1lT2JqZWN0ID0gZnVuY3Rpb24gKHN0YXRlLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgcGFyZW50KVxyXG57XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgICB0aGlzLm5hbWUgPSAnJztcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAwO1xyXG5cclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgIC8vICBUZXh0dXJlIGlzIGdsb2JhbGx5IHNoYXJlZCBiZXR3ZWVuIEdhbWVPYmplY3RzLCBub3Qgc3BlY2lmaWMgdG8gdGhpcyBvbmVcclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcblxyXG4gICAgLy8gIEZyYW1lIGlzIGdsb2JhbGx5IHNoYXJlZCBiZXR3ZWVuIEdhbWVPYmplY3RzLCBub3Qgc3BlY2lmaWMgdG8gdGhpcyBvbmVcclxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcclxuXHJcbiAgICAvLyAgQWxsIEdhbWVPYmplY3RzIGhhdmUgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzLCBhbHdheXM6XHJcbiAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBDb21wb25lbnQuVHJhbnNmb3JtKHRoaXMsIHgsIHkpO1xyXG5cclxuICAgIC8vICBPcHRpb25hbD8gTWF5YmUgc2V0IG9uIGEgcGVyIEdPIGJhc2lzP1xyXG4gICAgdGhpcy5kYXRhID0gbmV3IENvbXBvbmVudC5EYXRhKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY29sb3IgPSBuZXcgQ29tcG9uZW50LkNvbG9yKHRoaXMpO1xyXG5cclxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgZGViYXRhYmxlIHRvIGhhdmUgaW4gdGhpcyBjbGFzc1xyXG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgdGhpcy5zY2FsZU1vZGUgPSBDT05TVC5zY2FsZU1vZGVzLkRFRkFVTFQ7XHJcblxyXG4gICAgLy8gIEFsbG93cyB5b3UgdG8gdHVybiBvZmYgYSBHYW1lT2JqZWN0IGZyb20gcmVuZGVyaW5nLCBidXQgc3RpbGwgcmVuZGVyIGl0cyBjaGlsZHJlbiAoaWYgaXQgaGFzIGFueSlcclxuICAgIC8vICBNYXliZSB0aGlzIHNob3VsZCBtb3ZlP1xyXG4gICAgLy8gdGhpcy5za2lwUmVuZGVyID0gKGtleSA9PT0gdW5kZWZpbmVkKTtcclxuICAgIHRoaXMuc2tpcFJlbmRlciA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgLy8gIEVpdGhlciBudWxsLCBvciB0aGUgQ2hpbGRyZW4gY29tcG9uZW50XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmV4aXN0cyA9IHRydWU7XHJcbn07XHJcblxyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdhbWVPYmplY3Q7XHJcblxyXG5HYW1lT2JqZWN0LnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5PT1BcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBOT09QXHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5PT1BcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBOT09QXHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5PT1BcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhHYW1lT2JqZWN0LnByb3RvdHlwZSwge1xyXG5cclxuICAgIC8vICBUcmFuc2Zvcm0gZ2V0dGVycyAvIHNldHRlcnNcclxuXHJcbiAgICB4OiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcG9zWDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9wb3NYID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB5OiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcG9zWTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9wb3NZID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzY2FsZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3NjYWxlWDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3NjYWxlWSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2NhbGVYOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3NjYWxlWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2NhbGVZOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVZO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3NjYWxlWSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYW5jaG9yOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fYW5jaG9yWDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnNldEFuY2hvcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYW5jaG9yWDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX2FuY2hvclg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fYW5jaG9yWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYW5jaG9yWToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX2FuY2hvclk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5fYW5jaG9yWSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGl2b3RYOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcGl2b3RYO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bpdm90WCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGl2b3RZOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fcGl2b3RZO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uX3Bpdm90WSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYW5nbGU6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBoYXNlci5NYXRoLndyYXBBbmdsZSh0aGlzLnJvdGF0aW9uICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gUGhhc2VyLk1hdGgud3JhcEFuZ2xlKHZhbHVlKSAqIFBoYXNlci5NYXRoLkRFR19UT19SQUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcm90YXRpb246IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybS5fcm90YXRpb24gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0uX3JvdGF0aW9uICUgUGhhc2VyLk1hdGguUEkyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5jYWNoZS5zciA9IE1hdGguc2luKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5jYWNoZS5jciA9IE1hdGguY29zKHRoaXMudHJhbnNmb3JtLl9yb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS51cGRhdGVDYWNoZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaGFzTG9jYWxSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5oYXNMb2NhbFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ29sb3IgZ2V0dGVycyAvIHNldHRlcnNcclxuXHJcbiAgICBhbHBoYToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5fYWxwaGE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLmFscGhhID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYmxlbmRNb2RlOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLl9ibGVuZE1vZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLmJsZW5kTW9kZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZU9iamVjdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvR2FtZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZ2FtZW9iamVjdHMvR2FtZU9iamVjdC5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XHJcbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG52YXIgSW1hZ2VXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi9JbWFnZVdlYkdMUmVuZGVyZXInKTtcclxuXHJcbi8qKlxyXG4qIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxyXG4qIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy4gVGhpcyBtYWtlcyBpdCBwZXJmZWN0IGZvciBsb2dvcywgYmFja2dyb3VuZHMsIHNpbXBsZSBidXR0b25zIGFuZCBvdGhlciBub24tU3ByaXRlIGdyYXBoaWNzLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkltYWdlXHJcbiogQGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4qIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cclxuKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgdGV4dHVyZSB1c2VkIGJ5IHRoZSBJbWFnZSBkdXJpbmcgcmVuZGVyaW5nLiBJdCBjYW4gYmUgYSBzdHJpbmcgd2hpY2ggaXMgYSByZWZlcmVuY2UgdG8gdGhlIENhY2hlIGVudHJ5LCBvciBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEgb3IgUElYSS5UZXh0dXJlLlxyXG4qIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIHRoaXMgSW1hZ2UgaXMgdXNpbmcgcGFydCBvZiBhIHNwcml0ZSBzaGVldCBvciB0ZXh0dXJlIGF0bGFzIHlvdSBjYW4gc3BlY2lmeSB0aGUgZXhhY3QgZnJhbWUgdG8gdXNlIGJ5IGdpdmluZyBhIHN0cmluZyBvciBudW1lcmljIGluZGV4LlxyXG4qL1xyXG52YXIgSW1hZ2UgPSBmdW5jdGlvbiAoc3RhdGUsIHgsIHksIGtleSwgZnJhbWUpXHJcbntcclxuICAgIHZhciBfdGV4dHVyZSA9IHN0YXRlLmdhbWUudGV4dHVyZXMuZ2V0KGtleSk7XHJcbiAgICB2YXIgX2ZyYW1lID0gX3RleHR1cmUuZ2V0KGZyYW1lKTtcclxuXHJcbiAgICBHYW1lT2JqZWN0LmNhbGwodGhpcywgc3RhdGUsIHgsIHksIF90ZXh0dXJlLCBfZnJhbWUpO1xyXG5cclxuICAgIHRoaXMudHlwZSA9IENPTlNULklNQUdFO1xyXG5cclxuICAgIHRoaXMucmVuZGVyID0gSW1hZ2VXZWJHTFJlbmRlcmVyO1xyXG59O1xyXG5cclxuSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHYW1lT2JqZWN0LnByb3RvdHlwZSk7XHJcbkltYWdlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEltYWdlO1xyXG5cclxuLyoqXHJcbiogQXV0b21hdGljYWxseSBjYWxsZWQgYnkgV29ybGQucHJlVXBkYXRlLlxyXG4qXHJcbiogQG1ldGhvZCBQaGFzZXIuSW1hZ2UjcHJlVXBkYXRlXHJcbiogQG1lbWJlcm9mIFBoYXNlci5JbWFnZVxyXG4qL1xyXG5JbWFnZS5wcm90b3R5cGUucHJlVXBkYXRlID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgLy8gIFdvdWxkIGxpa2UgdG8gZ2V0IHJpZCBvZiB0aGlzIHNvbWVob3cgLi4uXHJcbiAgICBpZiAodGhpcy5wYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2xvci53b3JsZEFscGhhID0gdGhpcy5wYXJlbnQuY29sb3Iud29ybGRBbHBoYTtcclxuICAgIH1cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEltYWdlLnByb3RvdHlwZSwge1xyXG5cclxuICAgIHdpZHRoOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYICogdGhpcy5mcmFtZS5yZWFsV2lkdGg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHZhbHVlIC8gdGhpcy5mcmFtZS5yZWFsV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaGVpZ2h0OiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVZICogdGhpcy5mcmFtZS5yZWFsSGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB2YWx1ZSAvIHRoaXMuZnJhbWUucmVhbEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgSW1hZ2UgPSByZXF1aXJlKCcuL0ltYWdlJyk7XHJcbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xyXG5cclxudmFyIEltYWdlRmFjdG9yeSA9IHtcclxuXHJcbiAgICBLRVk6ICdpbWFnZScsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIG5ldyBgSW1hZ2VgIG9iamVjdC5cclxuICAgICpcclxuICAgICogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXHJcbiAgICAqXHJcbiAgICAqIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy5cclxuICAgICogVGhpcyBtYWtlcyBpdCBwZXJmZWN0IGZvciBsb2dvcywgYmFja2dyb3VuZHMsIHNpbXBsZSBidXR0b25zIGFuZCBvdGhlciBub24tU3ByaXRlIGdyYXBoaWNzLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnkjaW1hZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cclxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cclxuICAgICogQHJldHVybiB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICAgYWRkOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSwgZ3JvdXApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnN0YXRlOyB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJbWFnZUZhY3RvcnkuYWRkJywga2V5LCB4LCB5LCBmcmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnRvIFN0YXRlJywgdGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBncm91cC5jaGlsZHJlbi5hZGQobmV3IEltYWdlKHRoaXMuc3RhdGUsIHgsIHksIGtleSwgZnJhbWUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgbWFrZTogZnVuY3Rpb24gKHgsIHksIGtleSwgZnJhbWUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5tYWtlJywga2V5LCB4LCB5LCBmcmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2UodGhpcy5zdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGYWN0b3J5Q29udGFpbmVyLnJlZ2lzdGVyKEltYWdlRmFjdG9yeSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwiXHJcbnZhciBJbWFnZVdlYkdMUmVuZGVyZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIHNyYywgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXHJcbntcclxuICAgIHZhciBmcmFtZSA9IHNyYy5mcmFtZTtcclxuICAgIHZhciBhbHBoYSA9IHNyYy5jb2xvci53b3JsZEFscGhhICogMjU1IDw8IDI0O1xyXG5cclxuICAgIC8vICBTa2lwIHJlbmRlcmluZz9cclxuXHJcbiAgICBpZiAoc3JjLnNraXBSZW5kZXIgfHwgIXNyYy52aXNpYmxlIHx8IGFscGhhID09PSAwIHx8ICFmcmFtZS5jdXRXaWR0aCB8fCAhZnJhbWUuY3V0SGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdmVydHMgPSBzcmMudHJhbnNmb3JtLmdldFZlcnRleERhdGEoaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgdmFyIGluZGV4ID0gc3JjLmZyYW1lLnNvdXJjZS5nbFRleHR1cmVJbmRleDtcclxuICAgIHZhciB0aW50ID0gc3JjLmNvbG9yLl9nbFRpbnQ7XHJcbiAgICB2YXIgYmcgPSBzcmMuY29sb3IuX2dsQmc7XHJcblxyXG4gICAgcmVuZGVyZXIuYmF0Y2guYWRkKGZyYW1lLnNvdXJjZSwgc3JjLmJsZW5kTW9kZSwgdmVydHMsIGZyYW1lLnV2cywgaW5kZXgsIGFscGhhLCB0aW50LCBiZyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlV2ViR0xSZW5kZXJlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VXZWJHTFJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgSW5jbHVkZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3Rvcmllc1xyXG4vL1xyXG4vLyAgVGhpcyBmaWxlIHNob3VsZCBiZSBsaW5rZWQgdG8gdGhlIHNwZWNpZmljIGJ1aWxkIG9mIFBoYXNlciwgaS5lLiBQaGFzZXIgTmFubyB3b24ndCByZXF1aXJlIGFsbCBHT3NcclxuXHJcbnJlcXVpcmUoJy4vaW1hZ2UvSW1hZ2VGYWN0b3J5Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIlxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XHJcbnZhciBTZXQgPSByZXF1aXJlKCcuLi9zdHJ1Y3RzL1NldCcpO1xyXG52YXIgWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL1hIUlNldHRpbmdzJyk7XHJcbnZhciBFdmVudCA9IHJlcXVpcmUoJy4vZXZlbnRzLycpO1xyXG52YXIgRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlcicpO1xyXG5cclxudmFyIEJhc2VMb2FkZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvLyAgVG8gZmluaXNoIHRoZSBsb2FkZXIgLi4uXHJcbiAgICAvLyAgXHJcbiAgICAvLyAgMykgUHJvZ3Jlc3MgdXBkYXRlXHJcbiAgICAvLyAgNCkgSlNPTiBsb2FkZXJcclxuICAgIC8vICA1KSBYTUwgTG9hZGVyXHJcbiAgICAvLyAgNikgTXVsdGkgRmlsZSBzdXBwb3J0IChhdGxhcyArIGRhdGEpXHJcbiAgICAvLyAgNykgQXRsYXMgTG9hZGVyXHJcblxyXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgLy8gIE1vdmUgdG8gYSAnc2V0VVJMJyBtZXRob2Q/XHJcbiAgICB0aGlzLmJhc2VVUkwgPSAnJztcclxuICAgIHRoaXMucGF0aCA9ICcnO1xyXG5cclxuICAgIC8vICBSZWFkIGZyb20gR2FtZSAvIFN0YXRlIENvbmZpZ1xyXG4gICAgdGhpcy5lbmFibGVQYXJhbGxlbCA9IHRydWU7XHJcbiAgICB0aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzID0gNDtcclxuXHJcbiAgICAvLyAgeGhyIHNwZWNpZmljIGdsb2JhbCBzZXR0aW5ncyAoY2FuIGJlIG92ZXJyaWRkZW4gb24gYSBwZXItZmlsZSBiYXNpcylcclxuICAgIHRoaXMueGhyID0gWEhSU2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuaW5mbGlnaHQgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLmZhaWxlZCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMucXVldWUgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfSURMRTtcclxufTtcclxuXHJcbkJhc2VMb2FkZXIucHJvdG90eXBlLmNvbnRydWN0b3IgPSBCYXNlTG9hZGVyO1xyXG5cclxuQmFzZUxvYWRlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgYWRkRmlsZTogZnVuY3Rpb24gKGZpbGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBNdWx0aXBhcnQgZmlsZT9cclxuICAgICAgICBpZiAoZmlsZS5saW5rRmlsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlQSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHZhciBmaWxlQiA9IGZpbGUubGlua0ZpbGU7XHJcblxyXG4gICAgICAgICAgICBmaWxlQS5wYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgICAgICBmaWxlQi5wYXRoID0gdGhpcy5wYXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LmFkZChmaWxlQSk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZUIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLnBhdGggPSB0aGlzLnBhdGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBJcyB0aGUgTG9hZGVyIGFjdGl2ZWx5IGxvYWRpbmcgKG9yIHByb2Nlc3NpbmcgbG9hZGVkIGZpbGVzKVxyXG4gICAgaXNMb2FkaW5nOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9MT0FESU5HIHx8IHRoaXMuX3N0YXRlID09PSBDT05TVC5MT0FERVJfUFJPQ0VTU0lORyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBJcyB0aGUgTG9hZGVyIHJlYWR5IHRvIHN0YXJ0IGEgbmV3IGxvYWQ/XHJcbiAgICBpc1JlYWR5OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9JRExFIHx8IHRoaXMuX3N0YXRlID09PSBDT05TVC5MT0FERVJfQ09NUExFVEUgfHwgdGhpcy5fc3RhdGUgPT09IENPTlNULkxPQURFUl9GQUlMRUQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmFzZUxvYWRlciBzdGFydC4gRmlsZXMgdG8gbG9hZDonLCB0aGlzLmxpc3Quc2l6ZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnQuTE9BREVSX1NUQVJUX0VWRU5UKHRoaXMpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfTE9BRElORztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5kZWJ1ZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcHJvY2Vzc0xvYWRRdWV1ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT0gQmFzZUxvYWRlciBwcm9jZXNzTG9hZFF1ZXVlJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0xpc3Qgc2l6ZScsIHRoaXMubGlzdC5zaXplKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluZmxpZ2h0LnNpemUsICdpdGVtcyBzdGlsbCBpbiBmbGlnaHQuIENhbiBsb2FkIGFub3RoZXInLCAodGhpcy5tYXhQYXJhbGxlbERvd25sb2FkcyAtIHRoaXMuaW5mbGlnaHQuc2l6ZSkpO1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QuZWFjaChmdW5jdGlvbiAoZmlsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBDT05TVC5GSUxFX1BFTkRJTkcgJiYgX3RoaXMuaW5mbGlnaHQuc2l6ZSA8IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmZsaWdodC5hZGQoZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMubGlzdC5kZWxldGUoZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZEZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pbmZsaWdodC5zaXplID09PSBfdGhpcy5tYXhQYXJhbGxlbERvd25sb2FkcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFRlbGxzIHRoZSBTZXQgaXRlcmF0b3IgdG8gYWJvcnRcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHByaXZhdGVcclxuICAgIGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTE9BRElORycsIGZpbGUua2V5KTtcclxuXHJcbiAgICAgICAgLy8gIElmIHRoZSBmaWxlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIGNyb3NzT3JpZ2luIHNldCxcclxuICAgICAgICAvLyAgd2UnbGwgdXNlIHRoZSBMb2FkZXJzICh3aGljaCBpcyB1bmRlZmluZWQgYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAoIWZpbGUuY3Jvc3NPcmlnaW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbGUubG9hZCh0aGlzLm5leHRGaWxlLmJpbmQodGhpcyksIHRoaXMuYmFzZVVSTCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRGaWxlOiBmdW5jdGlvbiAocHJldmlvdXNGaWxlLCBzdWNjZXNzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdMT0FERUQ6JywgcHJldmlvdXNGaWxlLnNyYywgc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgIC8vICBNb3ZlIHRoZSBmaWxlIHRoYXQganVzdCBsb2FkZWQgZnJvbSB0aGUgaW5mbGlnaHQgbGlzdCB0byB0aGUgcXVldWUgb3IgZmFpbGVkIFNldFxyXG5cclxuICAgICAgICBpZiAoc3VjY2VzcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkKHByZXZpb3VzRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmFkZChwcmV2aW91c0ZpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbmZsaWdodC5kZWxldGUocHJldmlvdXNGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXh0RmlsZSAtIHN0aWxsIHNvbWV0aGluZyBpbiB0aGUgbGlzdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbmZsaWdodC5zaXplID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25leHRGaWxlIGNhbGxpbmcgZmluaXNoZWRMb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2hlZExvYWRpbmc6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLT4gQmFzZUxvYWRlci5maW5pc2hlZExvYWRpbmcgUFJPQ0VTU0lORycsIHRoaXMucXVldWUuc2l6ZSwgJ2ZpbGVzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ09OU1QuTE9BREVSX1BST0NFU1NJTkc7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXVlLmVhY2goZnVuY3Rpb24gKGZpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnJWMgQ2FsbGluZyBwcm9jZXNzIG9uICcgKyBmaWxlLmtleSwgJ2NvbG9yOiAjMDAwMDAwOyBiYWNrZ3JvdW5kOiAjZmZmZjAwOycpO1xyXG5cclxuICAgICAgICAgICAgZmlsZS5vblByb2Nlc3MoX3RoaXMucHJvY2Vzc1VwZGF0ZS5iaW5kKF90aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYWxsZWQgYXV0b21hdGljYWxseSBieSB0aGUgRmlsZSB3aGVuIGl0IGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nXHJcbiAgICBwcm9jZXNzVXBkYXRlOiBmdW5jdGlvbiAoZmlsZSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnLT4gcHJvY2Vzc1VwZGF0ZScsIGZpbGUua2V5LCBmaWxlLnN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gIFRoaXMgZmlsZSBoYXMgZmFpbGVkIHRvIGxvYWQsIHNvIG1vdmUgaXQgdG8gdGhlIGZhaWxlZCBTZXRcclxuICAgICAgICBpZiAoZmlsZS5zdGF0ZSA9PT0gQ09OU1QuRklMRV9FUlJPUkVEKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsZWQuYWRkKGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGUubGlua0ZpbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWUuZGVsZXRlKGZpbGUubGlua0ZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVGcm9tUXVldWUoZmlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgSWYgd2UgZ290IGhlcmUsIHRoZW4gdGhlIGZpbGUgbG9hZGVkXHJcblxyXG4gICAgICAgIC8vICBTcGVjaWFsIGhhbmRsaW5nIGZvciBtdWx0aS1wYXJ0IGZpbGVzXHJcblxyXG4gICAgICAgIGlmIChmaWxlLmxpbmtGaWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGZpbGUuc3RhdGUgPT09IENPTlNULkZJTEVfQ09NUExFVEUgJiYgZmlsZS5saW5rRmlsZS5zdGF0ZSA9PT0gQ09OU1QuRklMRV9DT01QTEVURSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFBhcnRuZXIgaGFzIGxvYWRlZCwgc28gYWRkIHRoZW0gYm90aCB0byBTdG9yYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFkZCh7IHR5cGU6IGZpbGUubGlua1R5cGUsIGZpbGVBOiBmaWxlLCBmaWxlQjogZmlsZS5saW5rRmlsZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLmRlbGV0ZShmaWxlLmxpbmtGaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21RdWV1ZShmaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkKGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUXVldWUoZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVGcm9tUXVldWU6IGZ1bmN0aW9uIChmaWxlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucXVldWUuZGVsZXRlKGZpbGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5xdWV1ZS5zaXplID09PSAwICYmIHRoaXMuX3N0YXRlID09PSBDT05TVC5MT0FERVJfUFJPQ0VTU0lORylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSd2ZSBwcm9jZXNzZWQgYWxsIHRoZSBmaWxlcyB3ZSBsb2FkZWRcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3NDb21wbGV0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9hZGVyIENvbXBsZXRlLiBMb2FkZWQ6JywgdGhpcy5zdG9yYWdlLnNpemUsICdGYWlsZWQ6JywgdGhpcy5mYWlsZWQuc2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NDYWxsYmFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENPTlNULkxPQURFUl9DT01QTEVURTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMuZGlzcGF0Y2gobmV3IEV2ZW50LkxPQURFUl9DT01QTEVURV9FVkVOVCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmZhaWxlZC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWcgPSAnJztcclxuICAgICAgICB0aGlzLnBhdGggPSAnJztcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfSURMRTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDT05TVC5MT0FERVJfREVTVFJPWUVEO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzZUxvYWRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL0Jhc2VMb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9CYXNlTG9hZGVyLmpzIiwidmFyIEdldFVSTCA9IGZ1bmN0aW9uIChmaWxlLCBiYXNlVVJMKVxyXG57XHJcbiAgICBpZiAoIWZpbGUudXJsKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsZS51cmwubWF0Y2goL14oPzpibG9iOnxkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98XFwvXFwvKS8pKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmaWxlLnVybDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYmFzZVVSTCArIGZpbGUudXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHZXRVUkw7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9HZXRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcclxuXHJcbi8vICBUYWtlcyB0d28gWEhSIE9iamVjdHMgYW5kIGNyZWF0ZXMgYSBuZXcgb2JqZWN0XHJcblxyXG4vLyAgVGhlIG5ldyBvYmplY3QgaXMgYmFzZWQgb24gZ2xvYmFsIGluaXRpYWxseSwgYnV0IGFueSBzZXR0aW5nIGluXHJcbi8vICBsb2NhbCBvdmVycmlkZXMgdGhlIGdsb2JhbCB2YWx1ZS5cclxuXHJcbnZhciBNZXJnZVhIUlNldHRpbmdzID0gZnVuY3Rpb24gKGdsb2JhbCwgbG9jYWwpXHJcbntcclxuICAgIHZhciBvdXRwdXQgPSAoZ2xvYmFsID09PSB1bmRlZmluZWQpID8gWEhSU2V0dGluZ3MoKSA6IE9iamVjdC5hc3NpZ24oZ2xvYmFsKTtcclxuXHJcbiAgICBpZiAobG9jYWwpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgc2V0dGluZyBpbiBsb2NhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFtzZXR0aW5nXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbc2V0dGluZ10gPSBsb2NhbFtzZXR0aW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVyZ2VYSFJTZXR0aW5ncztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwidmFyIE1lcmdlWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL01lcmdlWEhSU2V0dGluZ3MnKTtcclxuXHJcbnZhciBYSFJMb2FkZXIgPSBmdW5jdGlvbiAoZmlsZSwgZ2xvYmFsWEhSU2V0dGluZ3MpXHJcbntcclxuICAgIHZhciBjb25maWcgPSBNZXJnZVhIUlNldHRpbmdzKGdsb2JhbFhIUlNldHRpbmdzLCBmaWxlLnhoclNldHRpbmdzKTtcclxuXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUuc3JjLCBjb25maWcuYXN5bmMsIGNvbmZpZy51c2VyLCBjb25maWcucGFzc3dvcmQpO1xyXG5cclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBmaWxlLnhoclNldHRpbmdzLnJlc3BvbnNlVHlwZTtcclxuICAgIHhoci50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5oZWFkZXIgJiYgY29uZmlnLmhlYWRlclZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGNvbmZpZy5oZWFkZXIsIGNvbmZpZy5oZWFkZXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKVxyXG4gICAge1xyXG4gICAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZnRlciBhIHN1Y2Nlc3NmdWwgcmVxdWVzdCwgdGhlIHhoci5yZXNwb25zZSBwcm9wZXJ0eSB3aWxsIGNvbnRhaW4gdGhlIHJlcXVlc3RlZCBkYXRhIGFzIGEgRE9NU3RyaW5nLCBBcnJheUJ1ZmZlciwgQmxvYiwgb3IgRG9jdW1lbnQgKGRlcGVuZGluZyBvbiB3aGF0IHdhcyBzZXQgZm9yIHJlc3BvbnNlVHlwZS4pXHJcblxyXG4gICAgeGhyLm9ubG9hZCA9IGZpbGUub25Mb2FkLmJpbmQoZmlsZSk7XHJcbiAgICB4aHIub25lcnJvciA9IGZpbGUub25FcnJvci5iaW5kKGZpbGUpO1xyXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmaWxlLm9uUHJvZ3Jlc3MuYmluZChmaWxlKTtcclxuXHJcbiAgICAvLyAgVGhpcyBpcyB0aGUgb25seSBzdGFuZGFyZCBtZXRob2QsIHRoZSBvbmVzIGFib3ZlIGFyZSBicm93c2VyIGFkZGl0aW9ucyAobWF5YmUgbm90IHVuaXZlcnNhbD8pXHJcbiAgICAvLyB4aHIub25yZWFkeXN0YXRlY2hhbmdlXHJcblxyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4geGhyO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBYSFJMb2FkZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9YSFJMb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9YSFJMb2FkZXIuanMiLCJ2YXIgRXZlbnQgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMvRXZlbnQnKTtcclxuXHJcbnZhciBMb2FkZXJDb21wbGV0ZUV2ZW50ID0gZnVuY3Rpb24gKGxvYWRlcilcclxue1xyXG4gICAgRXZlbnQuY2FsbCh0aGlzLCAnTE9BREVSX0NPTVBMRVRFX0VWRU5UJyk7XHJcblxyXG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbn07XHJcblxyXG5Mb2FkZXJDb21wbGV0ZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTtcclxuTG9hZGVyQ29tcGxldGVFdmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMb2FkZXJDb21wbGV0ZUV2ZW50O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXJDb21wbGV0ZUV2ZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZXZlbnRzL0xvYWRlckNvbXBsZXRlRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9ldmVudHMvTG9hZGVyQ29tcGxldGVFdmVudC5qcyIsInZhciBFdmVudCA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cy9FdmVudCcpO1xyXG5cclxudmFyIExvYWRlclN0YXJ0RXZlbnQgPSBmdW5jdGlvbiAobG9hZGVyKVxyXG57XHJcbiAgICBFdmVudC5jYWxsKHRoaXMsICdMT0FERVJfU1RBUlRfRVZFTlQnKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxufTtcclxuXHJcbkxvYWRlclN0YXJ0RXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xyXG5Mb2FkZXJTdGFydEV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlclN0YXJ0RXZlbnQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlclN0YXJ0RXZlbnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9ldmVudHMvTG9hZGVyU3RhcnRFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgTE9BREVSX1NUQVJUX0VWRU5UOiByZXF1aXJlKCcuL0xvYWRlclN0YXJ0RXZlbnQnKSxcclxuICAgIExPQURFUl9DT01QTEVURV9FVkVOVDogcmVxdWlyZSgnLi9Mb2FkZXJDb21wbGV0ZUV2ZW50JylcclxuXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9ldmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9ldmVudHMvaW5kZXguanMiLCJ2YXIgSW1hZ2VGaWxlID0gcmVxdWlyZSgnLi9JbWFnZUZpbGUuanMnKTtcclxudmFyIEpTT05GaWxlID0gcmVxdWlyZSgnLi9KU09ORmlsZS5qcycpO1xyXG5cclxudmFyIEF0bGFzSlNPTkZpbGUgPSBmdW5jdGlvbiAoa2V5LCB0ZXh0dXJlVVJMLCBhdGxhc1VSTCwgcGF0aClcclxue1xyXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlRmlsZShrZXksIHRleHR1cmVVUkwsIHBhdGgpO1xyXG4gICAgdmFyIGRhdGEgPSBuZXcgSlNPTkZpbGUoa2V5LCBhdGxhc1VSTCwgcGF0aCk7XHJcblxyXG4gICAgLy8gIExpbmsgdGhlbSB0b2dldGhlclxyXG4gICAgaW1hZ2UubGlua0ZpbGUgPSBkYXRhO1xyXG4gICAgZGF0YS5saW5rRmlsZSA9IGltYWdlO1xyXG5cclxuICAgIC8vICBTZXQgdGhlIHR5cGVcclxuICAgIGltYWdlLmxpbmtUeXBlID0gJ2F0bGFzanNvbic7XHJcbiAgICBkYXRhLmxpbmtUeXBlID0gJ2F0bGFzanNvbic7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBdGxhc0pTT05GaWxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvZmlsZXR5cGVzL0F0bGFzSlNPTkZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9maWxldHlwZXMvQXRsYXNKU09ORmlsZS5qcyIsIi8qKlxyXG4qIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZGltZW5zaW9ucyBtYWtlIGEgcG93ZXIgb2YgdHdvIHRleHR1cmUuXHJcbiogXHJcbiogQG1ldGhvZCBQaGFzZXIuTWF0aCNpc1Bvd2VyT2ZUd29cclxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBUaGUgd2lkdGggdG8gY2hlY2suXHJcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgdG8gY2hlY2suXHJcbiogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgYSBwb3dlciBvZiB0d28uXHJcbiovXHJcbnZhciBJc1NpemVQb3dlck9mVHdvID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpXHJcbntcclxuICAgIHJldHVybiAod2lkdGggPiAwICYmICh3aWR0aCAmICh3aWR0aCAtIDEpKSA9PT0gMCAmJiBoZWlnaHQgPiAwICYmIChoZWlnaHQgJiAoaGVpZ2h0IC0gMSkpID09PSAwKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXNTaXplUG93ZXJPZlR3bztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbWF0aC9wb3cyL0lzU2l6ZVBvd2VyT2ZUd28uanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBjIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBjID0gMTtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMCAtIEludGVybmFsIHZhci5cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG52YXIgczAgPSAwO1xyXG5cclxuLyoqXHJcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMxIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBzMSA9IDA7XHJcblxyXG4vKipcclxuKiBAcHJvcGVydHkge251bWJlcn0gczIgLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHMyID0gMDtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7QXJyYXl9IHNpZ24gLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHNpZ24gPSBbIC0xLCAxIF07XHJcblxyXG4vKipcclxuKiBQcml2YXRlIHJhbmRvbSBoZWxwZXIuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JuZFxyXG4qIEBwcml2YXRlXHJcbiogQHJldHVybiB7bnVtYmVyfVxyXG4qL1xyXG52YXIgcm5kID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdmFyIHQgPSAyMDkxNjM5ICogczAgKyBjICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcclxuXHJcbiAgICBjID0gdCB8IDA7XHJcbiAgICBzMCA9IHMxO1xyXG4gICAgczEgPSBzMjtcclxuICAgIHMyID0gdCAtIGM7XHJcblxyXG4gICAgcmV0dXJuIHMyO1xyXG59O1xyXG5cclxuLyoqXHJcbiogSW50ZXJuYWwgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlZWQgaGFzaC5cclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaGFzaFxyXG4qIEBwcml2YXRlXHJcbiogQHBhcmFtIHthbnl9IGRhdGFcclxuKiBAcmV0dXJuIHtudW1iZXJ9IGhhc2hlZCB2YWx1ZS5cclxuKi9cclxudmFyIGhhc2ggPSBmdW5jdGlvbiAoZGF0YSlcclxue1xyXG4gICAgdmFyIGgsIGksIG47XHJcbiAgICBuID0gMHhlZmM4MjQ5ZDtcclxuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xyXG4gICAgICAgIG4gPSBoID4+PiAwO1xyXG4gICAgICAgIGggLT0gbjtcclxuICAgICAgICBoICo9IG47XHJcbiAgICAgICAgbiA9IGggPj4+IDA7XHJcbiAgICAgICAgaCAtPSBuO1xyXG4gICAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOy8vIDJeMzJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsvLyAyXi0zMlxyXG59O1xyXG5cclxuXHJcbnZhciBSYW5kb21EYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKHNlZWRzKVxyXG57XHJcbiAgICBpZiAodHlwZW9mIHNlZWRzID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlKHNlZWRzKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvdyhzZWVkcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJhbmRvbURhdGFHZW5lcmF0b3I7XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogUmVzZXQgdGhlIHNlZWQgb2YgdGhlIHJhbmRvbSBkYXRhIGdlbmVyYXRvci5cclxuICAgICpcclxuICAgICogX05vdGVfOiB0aGUgc2VlZCBhcnJheSBpcyBvbmx5IHByb2Nlc3NlZCB1cCB0byB0aGUgZmlyc3QgYHVuZGVmaW5lZGAgKG9yIGBudWxsYCkgdmFsdWUsIHNob3VsZCBzdWNoIGJlIHByZXNlbnQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc293XHJcbiAgICAqIEBwYXJhbSB7YW55W119IHNlZWRzIC0gVGhlIGFycmF5IG9mIHNlZWRzOiB0aGUgYHRvU3RyaW5nKClgIG9mIGVhY2ggdmFsdWUgaXMgdXNlZC5cclxuICAgICovXHJcbiAgICBzb3c6IGZ1bmN0aW9uIChzZWVkcylcclxuICAgIHtcclxuICAgICAgICAvLyBBbHdheXMgcmVzZXQgdG8gZGVmYXVsdCBzZWVkXHJcbiAgICAgICAgczAgPSBoYXNoKCcgJyk7XHJcbiAgICAgICAgczEgPSBoYXNoKHMwKTtcclxuICAgICAgICBzMiA9IGhhc2goczEpO1xyXG4gICAgICAgIGMgPSAxO1xyXG5cclxuICAgICAgICBpZiAoIXNlZWRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgYW55IHNlZWRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWVkcy5sZW5ndGggJiYgKHNlZWRzW2ldICE9IG51bGwpOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VlZCA9IHNlZWRzW2ldO1xyXG5cclxuICAgICAgICAgICAgczAgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczAgKz0gfn4oczAgPCAwKTtcclxuICAgICAgICAgICAgczEgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczEgKz0gfn4oczEgPCAwKTtcclxuICAgICAgICAgICAgczIgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczIgKz0gfn4oczIgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VyXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyAyXjMyXHJcbiAgICAgICAgcmV0dXJuIHJuZCgpICogMHgxMDAwMDAwMDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNmcmFjXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgIGZyYWM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMl4tNTNcclxuICAgICAgICByZXR1cm4gcm5kKCkgKyAocm5kKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgcmVhbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VyKCkgKyB0aGlzLmZyYWMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlckluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICBpbnRlZ2VySW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmVhbEluUmFuZ2UoMCwgbWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYW5kIGluY2x1ZGluZyBtaW4gYW5kIG1heC5cclxuICAgICogVGhpcyBtZXRob2QgaXMgYW4gYWxpYXMgZm9yIFJhbmRvbURhdGFHZW5lcmF0b3IuaW50ZWdlckluUmFuZ2UuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjYmV0d2VlblxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxyXG4gICAgKi9cclxuICAgIGJldHdlZW46IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZShtaW4sIG1heCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcmVhbEluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICByZWFsSW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYWMoKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI25vcm1hbFxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEuXHJcbiAgICAqL1xyXG4gICAgbm9ybWFsOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAxIC0gKDIgKiB0aGlzLmZyYWMoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgdmFsaWQgUkZDNDEyMiB2ZXJzaW9uNCBJRCBoZXggc3RyaW5nIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTMwODM2OFxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3V1aWRcclxuICAgICogQHJldHVybiB7c3RyaW5nfSBBIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGEgPSAnJztcclxuICAgICAgICB2YXIgYiA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGIgPSBhID0gJyc7IGErKyA8IDM2OyBiICs9fmEgJSA1IHwgYSAqIDMmNCA/IChhXjE1ID8gOF50aGlzLmZyYWMoKSAqIChhXjIwID8gMTYgOiA0KSA6IDQpLnRvU3RyaW5nKDE2KSA6ICctJylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcGlja1xyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxyXG4gICAgKiBAcmV0dXJuIHthbnl9IEEgcmFuZG9tIG1lbWJlciBvZiB0aGUgYXJyYXkuXHJcbiAgICAqL1xyXG4gICAgcGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt0aGlzLmludGVnZXJJblJhbmdlKDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzaWduIHRvIGJlIHVzZWQgd2l0aCBtdWx0aXBsaWNhdGlvbiBvcGVyYXRvci5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzaWduXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgb3IgKzEuXHJcbiAgICAqL1xyXG4gICAgc2lnbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrKHNpZ24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBtZW1iZXIgb2YgYGFycmF5YCwgZmF2b3JpbmcgdGhlIGVhcmxpZXIgZW50cmllcy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN3ZWlnaHRlZFBpY2tcclxuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cclxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxyXG4gICAgKi9cclxuICAgIHdlaWdodGVkUGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt+fihNYXRoLnBvdyh0aGlzLmZyYWMoKSwgMikgKiAoYXJyYXkubGVuZ3RoIC0gMSkgKyAwLjUpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXgsIG9yIGJldHdlZW4gdGhlIGJlZ2lubmluZyBvZiAyMDAwIGFuZCB0aGUgZW5kIG9mIDIwMjAgaWYgbWluIGFuZCBtYXggYXJlbid0IHNwZWNpZmllZC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN0aW1lc3RhbXBcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSB0aW1lc3RhbXAgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZShtaW4gfHwgOTQ2Njg0ODAwMDAwLCBtYXggfHwgMTU3Nzg2MjAwMDAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGFuZ2xlIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2FuZ2xlXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKi9cclxuICAgIGFuZ2xlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXJJblJhbmdlKC0xODAsIDE4MCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJvdGF0aW9uIGluIHJhZGlhbnMsIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JvdGF0aW9uXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKi9cclxuICAgIHJvdGF0aW9uOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKC0zLjE0MTU5MjY1MzU4OTc5MywgMy4xNDE1OTI2NTM1ODk3OTMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBvciBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLiBUaGlzIGFsbG93cyB5b3UgdG8gcmV0YWluIHRoZSB2YWx1ZXNcclxuICAgICogdGhhdCB0aGUgZ2VuZXJhdG9yIGlzIHVzaW5nIGJldHdlZW4gZ2FtZXMsIGkuZS4gaW4gYSBnYW1lIHNhdmUgZmlsZS5cclxuICAgICpcclxuICAgICogVG8gc2VlZCB0aGlzIGdlbmVyYXRvciB3aXRoIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSB5b3UgY2FuIHBhc3MgaXQgYXMgdGhlXHJcbiAgICAqIGBzZWVkYCB2YWx1ZSBpbiB5b3VyIGdhbWUgY29uZmlnLCBvciBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5IGFmdGVyIFBoYXNlciBoYXMgYm9vdGVkLlxyXG4gICAgKlxyXG4gICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdpdGggbm8gcGFyYW1ldGVycyB0byByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICAqXHJcbiAgICAqIElmIHByb3ZpZGluZyBhIHN0YXRlIGl0IHNob3VsZCBtYXRjaCB0aGUgc2FtZSBmb3JtYXQgdGhhdCB0aGlzIG1ldGhvZFxyXG4gICAgKiByZXR1cm5zLCB3aGljaCBpcyBhIHN0cmluZyB3aXRoIGEgaGVhZGVyIGAhcm5kYCBmb2xsb3dlZCBieSB0aGUgYGNgLFxyXG4gICAgKiBgczBgLCBgczFgIGFuZCBgczJgIHZhbHVlcyByZXNwZWN0aXZlbHksIGVhY2ggY29tbWEtZGVsaW1pdGVkLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3N0YXRlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdIC0gR2VuZXJhdG9yIHN0YXRlIHRvIGJlIHNldC5cclxuICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gICAgKi9cclxuICAgIHN0YXRlOiBmdW5jdGlvbiAoc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3N0cmluZycgJiYgc3RhdGUubWF0Y2goL14hcm5kLykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICBjID0gcGFyc2VGbG9hdChzdGF0ZVsxXSk7XHJcbiAgICAgICAgICAgIHMwID0gcGFyc2VGbG9hdChzdGF0ZVsyXSk7XHJcbiAgICAgICAgICAgIHMxID0gcGFyc2VGbG9hdChzdGF0ZVszXSk7XHJcbiAgICAgICAgICAgIHMyID0gcGFyc2VGbG9hdChzdGF0ZVs0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gWyAnIXJuZCcsIGMsIHMwLCBzMSwgczIgXS5qb2luKCcsJyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21EYXRhR2VuZXJhdG9yO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZnVuIC8qLCB0aGlzQXJnICovKVxyXG4gICAge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XHJcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZ1biAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9BcnJheS5mb3JFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxyXG4qL1xyXG5pZiAoIUFycmF5LmlzQXJyYXkpXHJcbntcclxuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vLyBFUzYgTWF0aC50cnVuYyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmNcclxuaWYgKCFNYXRoLnRydW5jKSB7XHJcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMCA/IE1hdGguY2VpbCh4KSA6IE1hdGguZmxvb3IoeCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG4qL1xyXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XHJcblxyXG4gICAgLyoganNoaW50IGZyZWV6ZTogZmFsc2UgKi9cclxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYm91bmRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IHRoaXMgOiB0aGlzQXJnLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm91bmQucHJvdG90eXBlID0gKGZ1bmN0aW9uIEYocHJvdG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm90bylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBqc2hpbnQgc3VwZXJuZXc6IHRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKHRhcmdldC5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XHJcbiovXHJcbmlmICghQXJyYXkuaXNBcnJheSlcclxue1xyXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihmdW4gLyosIHRoaXNBcmcgKi8pXHJcbiAgICB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzID09PSB2b2lkIDAgfHwgdGhpcyA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxyXG4vKipcclxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcclxuICovXHJcbmlmICghd2luZG93LmNvbnNvbGUpXHJcbntcclxuICAgIHdpbmRvdy5jb25zb2xlID0ge307XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2cgPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xyXG59XHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXHJcbmlmICghTWF0aC50cnVuYykge1xyXG4gICAgTWF0aC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBBbHNvIGZpeCBmb3IgdGhlIGFic2VudCBjb25zb2xlIGluIElFOVxyXG4gKi9cclxuaWYgKCF3aW5kb3cuY29uc29sZSlcclxue1xyXG4gICAgd2luZG93LmNvbnNvbGUgPSB7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2NvbnNvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvLyBSZWZlcmVuY2VzOlxyXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNTc5NjcxXHJcbi8vIGh0dHA6Ly91cGRhdGVzLmh0bWw1cm9ja3MuY29tLzIwMTIvMDUvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLUFQSS1ub3ctd2l0aC1zdWItbWlsbGlzZWNvbmQtcHJlY2lzaW9uXHJcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3RpbWhhbGwvNDA3ODYxNFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvdHJlZS9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cclxuLy8gRXhwZWN0ZWQgdG8gYmUgdXNlZCB3aXRoIEJyb3dzZXJmaXlcclxuLy8gQnJvd3NlcmlmeSBhdXRvbWF0aWNhbGx5IGRldGVjdHMgdGhlIHVzZSBvZiBgZ2xvYmFsYCBhbmQgcGFzc2VzIHRoZVxyXG4vLyBjb3JyZWN0IHJlZmVyZW5jZSBvZiBgZ2xvYmFsYCwgYHNlbGZgLCBhbmQgZmluYWxseSBgd2luZG93YFxyXG5cclxuLy8gRGF0ZS5ub3dcclxuaWYgKCEoRGF0ZS5ub3cgJiYgRGF0ZS5wcm90b3R5cGUuZ2V0VGltZSkpIHtcclxuICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIHBlcmZvcm1hbmNlLm5vd1xyXG5pZiAoIShnbG9iYWwucGVyZm9ybWFuY2UgJiYgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdykpIHtcclxuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKCFnbG9iYWwucGVyZm9ybWFuY2UpIHtcclxuICAgICAgICBnbG9iYWwucGVyZm9ybWFuY2UgPSB7fTtcclxuICAgIH1cclxuICAgIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxudmFyIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cclxuZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcclxuICAgICAgICBnbG9iYWxbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxufVxyXG5cclxuaWYgKCFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBkZWxheSA9IDE2ICsgbGFzdFRpbWUgLSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xyXG4gICAgICAgICAgICBkZWxheSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socGVyZm9ybWFuY2Uubm93KCkpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmlmICghZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBTaW5nbGVUZXh0dXJlQmF0Y2ggPSByZXF1aXJlKCcuL2JhdGNoZXMvU2luZ2xlVGV4dHVyZUJhdGNoJyk7XHJcbnZhciBNdWx0aVRleHR1cmVCYXRjaCA9IHJlcXVpcmUoJy4vYmF0Y2hlcy9NdWx0aVRleHR1cmVCYXRjaCcpO1xyXG5cclxuLyoqXHJcbiogTWFuYWdlcyB0aGUgZGlmZmVyZW50IFdlYkdMIFNwcml0ZSBCYXRjaGVzLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5SZW5kZXJlci5DYW52YXNcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gR2FtZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcbnZhciBCYXRjaE1hbmFnZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGJhdGNoU2l6ZSlcclxue1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuICAgIHRoaXMuZ2wgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY3VycmVudEJhdGNoID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaXRlQmF0Y2ggPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2luZ2xlVGV4dHVyZUJhdGNoID0gbmV3IFNpbmdsZVRleHR1cmVCYXRjaCh0aGlzLCBiYXRjaFNpemUpO1xyXG4gICAgdGhpcy5tdWx0aVRleHR1cmVCYXRjaCA9IG5ldyBNdWx0aVRleHR1cmVCYXRjaCh0aGlzLCBiYXRjaFNpemUpO1xyXG5cclxuICAgIC8vIHRoaXMucGl4ZWxCYXRjaCA9IG5ldyBCYXRjaC5QaXhlbCh0aGlzLCBiYXRjaFNpemUpO1xyXG4gICAgLy8gdGhpcy5meEJhdGNoID0gbmV3IEJhdGNoLkZYKHRoaXMsIGJhdGNoU2l6ZSk7XHJcbn07XHJcblxyXG5CYXRjaE1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmF0Y2hNYW5hZ2VyO1xyXG5cclxuQmF0Y2hNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xyXG5cclxuICAgICAgICB0aGlzLnNpbmdsZVRleHR1cmVCYXRjaC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5tdWx0aVRleHR1cmVCYXRjaC5pbml0KCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucGl4ZWxCYXRjaC5pbml0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5meEJhdGNoLmluaXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIubXVsdGlUZXh0dXJlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2ggPSB0aGlzLm11bHRpVGV4dHVyZUJhdGNoO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUJhdGNoID0gdGhpcy5tdWx0aVRleHR1cmVCYXRjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2ggPSB0aGlzLnNpbmdsZVRleHR1cmVCYXRjaDtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaCA9IHRoaXMuc2luZ2xlVGV4dHVyZUJhdGNoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2guc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5zdG9wKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEJhdGNoOiBmdW5jdGlvbiAobmV3QmF0Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJhdGNoLnR5cGUgPT09IG5ld0JhdGNoLnR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgRmx1c2ggd2hhdGV2ZXIgd2FzIGluIHRoZSBjdXJyZW50IGJhdGNoIChpZiBhbnl0aGluZylcclxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5mbHVzaCgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaCA9IG5ld0JhdGNoO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5zdGFydCh0cnVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBBZGQgYSBuZXcgZW50cnkgaW50byB0aGUgY3VycmVudCBzcHJpdGUgYmF0Y2hcclxuICAgIGFkZDogZnVuY3Rpb24gKHNvdXJjZSwgYmxlbmRNb2RlLCB2ZXJ0cywgdXZzLCB0ZXh0dXJlSW5kZXgsIGFscGhhLCB0aW50Q29sb3JzLCBiZ0NvbG9ycylcclxuICAgIHtcclxuICAgICAgICAvLyAgU2V0IHRoZSBjdXJyZW50IGJhdGNoIChpZiBkaWZmZXJlbnQgZnJvbSB0aGlzIG9uZSlcclxuICAgICAgICB2YXIgaGFzRmx1c2hlZCA9IHRoaXMuc2V0QmF0Y2godGhpcy5zcHJpdGVCYXRjaCk7XHJcblxyXG4gICAgICAgIC8vICBDaGVjayBCYXRjaCBTaXplIGFuZCBmbHVzaCBpZiBuZWVkZWRcclxuICAgICAgICBpZiAoIWhhc0ZsdXNoZWQgJiYgdGhpcy5zcHJpdGVCYXRjaC5zaXplID49IHRoaXMuc3ByaXRlQmF0Y2gubWF4U2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQmF0Y2guZmx1c2goKTtcclxuXHJcbiAgICAgICAgICAgIGhhc0ZsdXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291cmNlLmdsTGFzdFVzZWQgPSB0aGlzLnJlbmRlcmVyLnN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgLy8gIERvZXMgdGhpcyBUZXh0dXJlU291cmNlIG5lZWQgdXBkYXRpbmc/XHJcbiAgICAgICAgaWYgKHNvdXJjZS5nbERpcnR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgRG9lcyB0aGUgYmF0Y2ggbmVlZCB0byBhY3RpdmF0ZSBhIG5ldyB0ZXh0dXJlP1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnRleHR1cmVBcnJheVtzb3VyY2UuZ2xUZXh0dXJlSW5kZXhdICE9PSBzb3VyY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0Q3VycmVudFRleHR1cmUgdG8nLCBzb3VyY2UuZ2xUZXh0dXJlSW5kZXgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2UuaW1hZ2UuY3VycmVudFNyYyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRleHR1cmUoc291cmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBCbGVuZCBNb2RlP1xyXG4gICAgICAgIGlmIChibGVuZE1vZGUgIT09IHRoaXMucmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghaGFzRmx1c2hlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5mbHVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEJsZW5kTW9kZShibGVuZE1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVCYXRjaC5hZGQodmVydHMsIHV2cywgdGV4dHVyZUluZGV4LCBhbHBoYSwgdGludENvbG9ycywgYmdDb2xvcnMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRDdXN0b21TaGFkZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFRPRE9cclxuICAgIH0sXHJcblxyXG4gICAgYWRkRlg6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFRPRE9cclxuICAgIH0sXHJcblxyXG4gICAgYWRkUGl4ZWw6IGZ1bmN0aW9uICh4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIGNvbG9yKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBoYXNGbHVzaGVkID0gdGhpcy5zZXRCYXRjaCh0aGlzLnBpeGVsQmF0Y2gpO1xyXG5cclxuICAgICAgICAvLyAgQ2hlY2sgQmF0Y2ggU2l6ZSBhbmQgZmx1c2ggaWYgbmVlZGVkXHJcbiAgICAgICAgaWYgKCFoYXNGbHVzaGVkICYmIHRoaXMucGl4ZWxCYXRjaC5zaXplID49IHRoaXMucGl4ZWxCYXRjaC5tYXhTaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5waXhlbEJhdGNoLmZsdXNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBpeGVsQmF0Y2guYWRkKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgY29sb3IpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRDdXJyZW50VGV4dHVyZTogZnVuY3Rpb24gKHNvdXJjZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRCYXRjaC5mbHVzaCgpO1xyXG5cclxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgc291cmNlLmdsVGV4dHVyZUluZGV4KTtcclxuXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgc291cmNlLmdsVGV4dHVyZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIudGV4dHVyZUFycmF5W3NvdXJjZS5nbFRleHR1cmVJbmRleF0gPSBzb3VyY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVUZXh0dXJlQmF0Y2guZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdsID0gbnVsbDtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhdGNoTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVuZGVyZXIvd2ViZ2wvQmF0Y2hNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC9CYXRjaE1hbmFnZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBhdXRob3IgICAgICAgTWF0IEdyb3ZlcyAoQERvb3JtYXQyMylcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogTmV3IHZlcnNpb24gb2YgUElYSS5XZWJHTFNoYWRlck1hbmFnZXJcclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVuZGVyZXIuQ2FudmFzXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEdhbWUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG52YXIgU2hhZGVyTWFuYWdlciA9IGZ1bmN0aW9uIChyZW5kZXJlcilcclxue1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuICAgIHRoaXMuZ2wgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFNoYWRlciA9IG51bGw7XHJcblxyXG59O1xyXG5cclxuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaGFkZXJNYW5hZ2VyO1xyXG5cclxuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgIHNldEF0dHJpYnM6IGZ1bmN0aW9uIChhdHRyaWJzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlc2V0IHRlbXAgc3RhdGVcclxuICAgICAgICB2YXIgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudGVtcEF0dHJpYlN0YXRlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wQXR0cmliU3RhdGVbaV0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgbmV3IGF0dHJpYnNcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXR0cmlicy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhdHRyaWJJZCA9IGF0dHJpYnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlW2F0dHJpYklkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJTdGF0ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYlN0YXRlW2ldICE9PSB0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJTdGF0ZVtpXSA9IHRoaXMudGVtcEF0dHJpYlN0YXRlW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICovXHJcblxyXG4gICAgc2V0U2hhZGVyOiBmdW5jdGlvbiAocHJvZ3JhbSlcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hhZGVyID09PSBwcm9ncmFtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyAgVGVsbCB0aGUgY3VycmVudCBzaGFkZXIgaXQgaXMgYmVpbmcgdW5ib3VuZD9cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2hhZGVyID0gcHJvZ3JhbTtcclxuXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnMoc2hhZGVyLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdsID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hdHRyaWJTdGF0ZSA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMudGVtcEF0dHJpYlN0YXRlID0gW107XHJcbiAgICAgICAgLy8gdGhpcy5zdGFjayA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnByaW1pdGl2ZVNoYWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gdGhpcy5jb21wbGV4UHJpbWl0aXZlU2hhZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB0aGlzLmRlZmF1bHRTaGFkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZmFzdFNoYWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdHJpcFNoYWRlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXJNYW5hZ2VyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC9TaGFkZXJNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBhdXRob3IgICAgICAgTWF0IEdyb3ZlcyAoQERvb3JtYXQyMylcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcclxudmFyIENyZWF0ZUVtcHR5VGV4dHVyZSA9IHJlcXVpcmUoJy4vdXRpbHMvQ3JlYXRlRW1wdHlUZXh0dXJlJyk7XHJcbnZhciBRdWFkRkJPID0gcmVxdWlyZSgnLi91dGlscy9RdWFkRkJPJyk7XHJcbnZhciBCYXRjaE1hbmFnZXIgPSByZXF1aXJlKCcuL0JhdGNoTWFuYWdlcicpO1xyXG52YXIgU2hhZGVyTWFuYWdlciA9IHJlcXVpcmUoJy4vU2hhZGVyTWFuYWdlcicpO1xyXG5cclxuLyoqXHJcbiogQSBXZWJnTCBiYXNlZCByZW5kZXJlci5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVuZGVyZXIuV2ViR0xcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gR2FtZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcbnZhciBXZWJHTFJlbmRlcmVyID0gZnVuY3Rpb24gKGdhbWUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIEdhbWUuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSBDT05TVC5XRUJHTDtcclxuXHJcbiAgICAvLyAgUmVhZCBhbGwgdGhlIGZvbGxvd2luZyBmcm9tIGdhbWUgY29uZmlnXHJcbiAgICB0aGlzLmNsZWFyQmVmb3JlUmVuZGVyID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hdXRvUmVzaXplID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gZ2FtZS5jb25maWcud2lkdGggKiBnYW1lLmNvbmZpZy5yZXNvbHV0aW9uO1xyXG5cclxuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5jb25maWcuaGVpZ2h0ICogZ2FtZS5jb25maWcucmVzb2x1dGlvbjtcclxuXHJcbiAgICB0aGlzLnJlc29sdXRpb24gPSBnYW1lLmNvbmZpZy5yZXNvbHV0aW9uO1xyXG5cclxuICAgIHRoaXMuY2xpcFVuaXRYID0gMiAvIHRoaXMud2lkdGg7XHJcblxyXG4gICAgdGhpcy5jbGlwVW5pdFkgPSAyIC8gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy52aWV3ID0gZ2FtZS5jYW52YXM7XHJcblxyXG4gICAgLy8gdGhpcy5zdGVuY2lsQnVmZmVyTGltaXQgPSA2O1xyXG5cclxuICAgIHRoaXMubXVsdGlUZXh0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5leHRlbnNpb25zID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkgX2NvbnRleHRPcHRpb25zXHJcbiAgICAgKiBAdHlwZSBPYmplY3RcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICB0aGlzLmNvbnRleHRPcHRpb25zID0ge1xyXG4gICAgICAgIGFscGhhOiB0aGlzLnRyYW5zcGFyZW50LFxyXG4gICAgICAgIGFudGlhbGlhczogZ2FtZS5hbnRpYWxpYXMsXHJcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiB0aGlzLnRyYW5zcGFyZW50ICYmIHRoaXMudHJhbnNwYXJlbnQgIT09ICdub3RNdWx0aXBsaWVkJyxcclxuICAgICAgICBzdGVuY2lsOiB0cnVlLFxyXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdGhpcy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXJcclxuICAgIH07XHJcbiAgICAgKi9cclxuXHJcbiAgICB0aGlzLmNvbnRleHRPcHRpb25zID0ge1xyXG4gICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRydWUsXHJcbiAgICAgICAgc3RlbmNpbDogdHJ1ZSxcclxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucHJvamVjdGlvbiA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIHRoaXMub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgdGhpcy5zaGFkZXJNYW5hZ2VyID0gbmV3IFNoYWRlck1hbmFnZXIodGhpcyk7XHJcbiAgICB0aGlzLmJhdGNoID0gbmV3IEJhdGNoTWFuYWdlcih0aGlzLCA0MDAwKTtcclxuXHJcbiAgICAvLyB0aGlzLmZpbHRlck1hbmFnZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLldlYkdMLkZpbHRlck1hbmFnZXIodGhpcyk7XHJcbiAgICAvLyB0aGlzLnN0ZW5jaWxNYW5hZ2VyID0gbmV3IFBoYXNlci5SZW5kZXJlci5XZWJHTC5TdGVuY2lsTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICB0aGlzLmdsID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmVtcHR5VGV4dHVyZSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlQXJyYXkgPSBbXTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSAtMTtcclxuICAgIHRoaXMuY3VycmVudFRleHR1cmVTb3VyY2UgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50U2hhZGVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZsaXBZID0gMTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5kcmF3Q291bnQgPSAwO1xyXG5cclxuICAgIHRoaXMuY29udGV4dExvc3QgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9mYkVycm9ycyA9IHtcclxuICAgICAgICAzNjA1NDogJ0luY29tcGxldGUgYXR0YWNobWVudCcsXHJcbiAgICAgICAgMzYwNTU6ICdNaXNzaW5nIGF0dGFjaG1lbnQnLFxyXG4gICAgICAgIDM2MDU3OiAnSW5jb21wbGV0ZSBkaW1lbnNpb25zJyxcclxuICAgICAgICAzNjA2MTogJ0ZyYW1lYnVmZmVyIHVuc3VwcG9ydGVkJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufTtcclxuXHJcbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2ViR0xSZW5kZXJlcjtcclxuXHJcbldlYkdMUmVuZGVyZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbCA9IHRoaXMudmlldy5nZXRDb250ZXh0KCd3ZWJnbCcsIHRoaXMuY29udGV4dE9wdGlvbnMpIHx8IHRoaXMudmlldy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCB0aGlzLmNvbnRleHRPcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0TG9zdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViR0wuIFRyeSB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgICAgdGhpcy5tYXhUZXh0dXJlcyA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1heFRleHR1cmVzID09PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aVRleHR1cmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNdWx0aUVtcHR5VGV4dHVyZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW1wdHlUZXh0dXJlID0gQ3JlYXRlRW1wdHlUZXh0dXJlKHRoaXMuZ2wsIDEsIDEsIDAsIDApO1xyXG5cclxuICAgICAgICBnbC5kaXNhYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIGdsLmRpc2FibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG5cclxuICAgICAgICAgLy8gVHJhbnNwYXJlbnRcclxuICAgICAgICAvLyBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyAgQmxhY2tcclxuICAgICAgICBnbC5jbGVhckNvbG9yKDEsIDAsIDAsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRlck1hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYmF0Y2guaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZpbHRlck1hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RlbmNpbE1hbmFnZXIuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIExvYWQgV2ViR0wgZXh0ZW5zaW9uXHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zLmNvbXByZXNzaW9uID0ge307XHJcblxyXG4gICAgICAgIHZhciBldGMxID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMScpIHx8IGdsLmdldEV4dGVuc2lvbignV0VCS0lUX1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9ldGMxJyk7XHJcbiAgICAgICAgdmFyIHB2cnRjID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGMnKSB8fCBnbC5nZXRFeHRlbnNpb24oJ1dFQktJVF9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGMnKTtcclxuICAgICAgICB2YXIgczN0YyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGMnKSB8fCBnbC5nZXRFeHRlbnNpb24oJ1dFQktJVF9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xyXG5cclxuICAgICAgICBpZiAoZXRjMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5jb21wcmVzc2lvbi5FVEMxID0gZXRjMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwdnJ0YylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucy5jb21wcmVzc2lvbi5QVlJUQyA9IHB2cnRjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHMzdGMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnMuY29tcHJlc3Npb24uUzNUQyA9IHMzdGM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgTWFwIEJsZW5kIE1vZGVzXHJcblxyXG4gICAgICAgIHZhciBhZGQgPSBbIGdsLlNSQ19BTFBIQSwgZ2wuRFNUX0FMUEhBIF07XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IFsgZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBIF07XHJcbiAgICAgICAgdmFyIG11bHRpcGx5ID0gWyBnbC5EU1RfQ09MT1IsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEgXTtcclxuICAgICAgICB2YXIgc2NyZWVuID0gWyBnbC5TUkNfQUxQSEEsIGdsLk9ORSBdO1xyXG5cclxuICAgICAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXHJcbiAgICAgICAgICAgIG5vcm1hbCwgYWRkLCBtdWx0aXBseSwgc2NyZWVuLCBub3JtYWwsXHJcbiAgICAgICAgICAgIG5vcm1hbCwgbm9ybWFsLCBub3JtYWwsIG5vcm1hbCxcclxuICAgICAgICAgICAgbm9ybWFsLCBub3JtYWwsIG5vcm1hbCwgbm9ybWFsLFxyXG4gICAgICAgICAgICBub3JtYWwsIG5vcm1hbCwgbm9ybWFsLCBub3JtYWxcclxuICAgICAgICBdO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQmluZCBlbXB0eSBtdWx0aS10ZXh0dXJlcyB0byBhdm9pZCBXZWJHTCBzcGFtXHJcblxyXG4gICAgY3JlYXRlTXVsdGlFbXB0eVRleHR1cmVzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm1heFRleHR1cmVzID09PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heFRleHR1cmVzOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVBcnJheVtpXSA9IENyZWF0ZUVtcHR5VGV4dHVyZSh0aGlzLmdsLCAxLCAxLCAwLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVuYWJsZU11bHRpVGV4dHVyZVN1cHBvcnQ6IGZ1bmN0aW9uICh0ZXh0dXJlQXJyYXkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4VGV4dHVyZXMgPT09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm11bHRpVGV4dHVyZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmF0Y2guc3ByaXRlQmF0Y2ggPSB0aGlzLmJhdGNoLm11bHRpVGV4dHVyZUJhdGNoO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0dXJlQXJyYXkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIGluZGV4IDAgaXMgcmVzZXJ2ZWQ/XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHR1cmVBcnJheS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmdhbWUudGV4dHVyZXMuZ2V0KHRleHR1cmVBcnJheVtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0ZXh0dXJlLnNldFRleHR1cmVJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2FibGVNdWx0aVRleHR1cmVTdXBwb3J0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXVsdGlUZXh0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuYmF0Y2guc3ByaXRlQmF0Y2ggPSB0aGlzLmJhdGNoLnNpbmdsZVRleHR1cmVCYXRjaDtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzaXplOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcclxuICAgIHtcclxuICAgICAgICB2YXIgcmVzID0gdGhpcy5nYW1lLmNvbmZpZy5yZXNvbHV0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggKiByZXM7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiByZXM7XHJcblxyXG4gICAgICAgIHRoaXMudmlldy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy52aWV3LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdXRvUmVzaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnN0eWxlLndpZHRoID0gKHRoaXMud2lkdGggLyByZXMpICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy52aWV3LnN0eWxlLmhlaWdodCA9ICh0aGlzLmhlaWdodCAvIHJlcykgKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xpcFVuaXRYID0gMiAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jbGlwVW5pdFkgPSAyIC8gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdGlvbi54ID0gKHRoaXMud2lkdGggLyAyKSAvIHJlcztcclxuICAgICAgICB0aGlzLnByb2plY3Rpb24ueSA9IC0odGhpcy5oZWlnaHQgLyAyKSAvIHJlcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJzIHRoZSBTdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIHJlbmRlclxyXG4gICAgICogQHBhcmFtIHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRvIGJlIHJlbmRlcmVkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGludGVycG9sYXRpb25QZXJjZW50YWdlIC0gVGhlIGN1bXVsYXRpdmUgYW1vdW50IG9mIHRpbWUgdGhhdCBoYXNuJ3QgYmVlbiBzaW11bGF0ZWQgeWV0LCBkaXZpZGVkXHJcbiAgICAgKiAgIGJ5IHRoZSBhbW91bnQgb2YgdGltZSB0aGF0IHdpbGwgYmUgc2ltdWxhdGVkIHRoZSBuZXh0IHRpbWUgdXBkYXRlKClcclxuICAgICAqICAgcnVucy4gVXNlZnVsIGZvciBpbnRlcnBvbGF0aW5nIGZyYW1lcy5cclxuICAgICAqL1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoc3RhdGUsIGludGVycG9sYXRpb25QZXJjZW50YWdlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCclYyByZW5kZXIgc3RhcnQgJywgJ2NvbG9yOiAjZmZmZmZmOyBiYWNrZ3JvdW5kOiAjMDBmZjAwOycpO1xyXG5cclxuICAgICAgICAvLyAgTm8gcG9pbnQgcmVuZGVyaW5nIGlmIG91ciBjb250ZXh0IGhhcyBiZWVuIGJsb3duIHVwIVxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRMb3N0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEFkZCBQcmUtcmVuZGVyIGhvb2tcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICB2YXIgZmJvID0gc3RhdGUuc3lzLmZibztcclxuXHJcbiAgICAgICAgZmJvLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIC8vICBjbGVhciBpcyBuZWVkZWQgZm9yIHRoZSBGQk8sIG90aGVyd2lzZSBjb3JydXB0aW9uIC4uLlxyXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEJsZW5kTW9kZShDT05TVC5ibGVuZE1vZGVzLk5PUk1BTCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0NvdW50ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5iYXRjaC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyAgQ291bGQgbW92ZSB0byB0aGUgU3RhdGUgU3lzdGVtcyBvciBNYWluTG9vcFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5yZW5kZXJDaGlsZHJlbih0aGlzLCBzdGF0ZSwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmJhdGNoLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy8gIENhbGwgc3RhdGUucmVuZGVyIGhlcmUsIHNvIHdlIGNhbiBkbyBzb21lIGV4dHJhIHNoaXp6bGUgb24gdGhlIHRvcFxyXG4gICAgICAgIC8vICBNYXliZSBwYXNzIGluIHRoZSBGQk8gdGV4dHVyZSB0b28/XHJcblxyXG4gICAgICAgIGZiby5yZW5kZXIobnVsbCk7XHJcblxyXG4gICAgICAgIC8vICBVbmJpbmQgdGhlIGZibyB0ZXh0dXJlIGFuZCByZXBsYWNlIGl0IHdpdGggYW4gZW1wdHkgdGV4dHVyZS5cclxuICAgICAgICAvLyAgSWYgd2UgZm9yZ2V0IHRoaXMgd2UgY29ycnVwdCB0aGUgbWFpbiBjb250ZXh0IHRleHR1cmUhXHJcbiAgICAgICAgLy8gIG9yIGdldCBgUkVOREVSIFdBUk5JTkc6IHRoZXJlIGlzIG5vIHRleHR1cmUgYm91bmQgdG8gdGhlIHVuaXQgMGAgc3BhbSBpbiB0aGUgY29uc29sZVxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuZW1wdHlUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJyVjIHJlbmRlciBlbmQgJywgJ2NvbG9yOiAjZmZmZmZmOyBiYWNrZ3JvdW5kOiAjZmYwMDAwOycpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgYmFjayB0byBkZWZhdWx0c1xyXG4gICAgICAgIC8vIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKTtcclxuICAgICAgICAvLyBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgICAvLyAgQWRkIFBvc3QtcmVuZGVyIGhvb2tcclxuICAgIH0sXHJcblxyXG4gICAgY2xpcFg6IGZ1bmN0aW9uICh4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jbGlwVW5pdFggKiB4KSAtIDE7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsaXBZOiBmdW5jdGlvbiAoeSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gMSAtICh0aGlzLmNsaXBVbml0WSAqIHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRWZXJ0aWNlc0Zyb21SZWN0OiBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodClcclxuICAgIHtcclxuICAgICAgICAvLyAtMS4wLCAtMS4wLCAvLyAwID0gYm90dG9tLWxlZnRcclxuICAgICAgICAvLyAxLjAsIC0xLjAsICAvLyAxID0gYm90dG9tLXJpZ2h0XHJcbiAgICAgICAgLy8gLTEuMCwgMS4wLCAgLy8gMiA9IHRvcC1sZWZ0XHJcbiAgICAgICAgLy8gMS4wLCAxLjAgICAgLy8gMyA9IHRvcC1yaWdodFxyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAvLyAgYm90dG9tLWxlZnRcclxuICAgICAgICAgICAgdGhpcy5jbGlwWCh4KSwgdGhpcy5jbGlwWSh5ICsgaGVpZ2h0KSxcclxuXHJcbiAgICAgICAgICAgIC8vICBib3R0b20tcmlnaHRcclxuICAgICAgICAgICAgdGhpcy5jbGlwWCh4ICsgd2lkdGgpLCB0aGlzLmNsaXBZKHkgKyBoZWlnaHQpLFxyXG5cclxuICAgICAgICAgICAgLy8gIHRvcC1sZWZ0XHJcbiAgICAgICAgICAgIHRoaXMuY2xpcFgoeCksIHRoaXMuY2xpcFkoeSksXHJcblxyXG4gICAgICAgICAgICAvLyAgdG9wLXJpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMuY2xpcFgoeCArIHdpZHRoKSwgdGhpcy5jbGlwWSh5KVxyXG4gICAgICAgIF07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW1vdmVzIHRoZSBiYXNlIHRleHR1cmUgZnJvbSB0aGUgR1BVLCB1c2VmdWwgZm9yIG1hbmFnaW5nIHJlc291cmNlcyBvbiB0aGUgR1BVLlxyXG4gICAgKiBBIHRleHR1cmUgaXMgc3RpbGwgMTAwJSB1c2FibGUgYW5kIHdpbGwgc2ltcGx5IGJlIHJlLXVwbG9hZGVkIGlmIHRoZXJlIGlzIGEgc3ByaXRlIG9uIHNjcmVlbiB0aGF0IGlzIHVzaW5nIGl0LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIHVubG9hZFRleHR1cmVcclxuICAgICovXHJcbiAgICB1bmxvYWRUZXh0dXJlOiBmdW5jdGlvbiAodGV4dHVyZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICB2YXIgZ2xUZXh0dXJlID0gdGV4dHVyZS5fZ2xUZXh0dXJlO1xyXG5cclxuICAgICAgICBpZiAoZ2wgJiYgZ2xUZXh0dXJlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZShnbFRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dHVyZS5fZ2xUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICB0ZXh0dXJlLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgVGFrZXMgYSBUZXh0dXJlU291cmNlIG9iamVjdFxyXG4gICAgdXBkYXRlVGV4dHVyZTogZnVuY3Rpb24gKHNvdXJjZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc291cmNlLmNvbXByZXNzaW9uQWxnb3JpdGhtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQ29tcHJlc3NlZFRleHR1cmUoc291cmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAgIGlmICghc291cmNlLmdsVGV4dHVyZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5nbFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlVGV4dHVyZScsIHNvdXJjZS5nbFRleHR1cmVJbmRleCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc291cmNlLmltYWdlLmN1cnJlbnRTcmMpO1xyXG5cclxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgc291cmNlLmdsVGV4dHVyZUluZGV4KTtcclxuXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgc291cmNlLmdsVGV4dHVyZSk7XHJcblxyXG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgc291cmNlLnByZW11bHRpcGxpZWRBbHBoYSk7XHJcblxyXG4gICAgICAgIC8vICBUaHJvd3MgYSB3YXJuaW5nIGluIEZpcmVmb3g6IFdlYkdMOiB0ZXhJbWFnZTJEOiBDaG9zZW4gZm9ybWF0L3R5cGUgaW5jdXJlZCBhbiBleHBlbnNpdmUgcmVmb3JtYXQ6IDB4MTkwOC8weDE0MDFcclxuICAgICAgICAvLyAgQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy85MTA5XHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBzb3VyY2UuaW1hZ2UpO1xyXG5cclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgc291cmNlLnNjYWxlTW9kZSA9PT0gQ09OU1Quc2NhbGVNb2Rlcy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcclxuXHJcbiAgICAgICAgaWYgKHNvdXJjZS5taXBtYXAgJiYgc291cmNlLmlzUG93ZXJPZjIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgc291cmNlLnNjYWxlTW9kZSA9PT0gQ09OU1Quc2NhbGVNb2Rlcy5MSU5FQVIgPyBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUiA6IGdsLk5FQVJFU1RfTUlQTUFQX05FQVJFU1QpO1xyXG4gICAgICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHNvdXJjZS5zY2FsZU1vZGUgPT09IENPTlNULnNjYWxlTW9kZXMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc291cmNlLmlzUG93ZXJPZjIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5SRVBFQVQpO1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2UuZ2xEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgIHVwZGF0ZUNvbXByZXNzZWRUZXh0dXJlOiBmdW5jdGlvbiAodGV4dHVyZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRleHR1cmUuaGFzTG9hZGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcclxuICAgICAgICB2YXIgdGV4dHVyZU1ldGFEYXRhID0gdGV4dHVyZS5zb3VyY2U7XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZS5fZ2xUZXh0dXJlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHR1cmUuX2dsVGV4dHVyZXMgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZS50ZXh0dXJlSW5kZXgpO1xyXG5cclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzKTtcclxuXHJcbiAgICAgICAgZ2wuY29tcHJlc3NlZFRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVNZXRhRGF0YS5nbEV4dGVuc2lvbkZvcm1hdCxcclxuICAgICAgICAgICAgdGV4dHVyZU1ldGFEYXRhLndpZHRoLFxyXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YURhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YURhdGEudGV4dHVyZURhdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGV4dHVyZS5zY2FsZU1vZGUgPT09IFBoYXNlci5zY2FsZU1vZGVzLkxJTkVBUiA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QpO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZS5taXBtYXAgJiYgUGhhc2VyLk1hdGguaXNQb3dlck9mVHdvKHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0ZXh0dXJlLnNjYWxlTW9kZSA9PT0gUGhhc2VyLnNjYWxlTW9kZXMuTElORUFSID8gZ2wuTElORUFSX01JUE1BUF9MSU5FQVIgOiBnbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNUKTtcclxuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0ZXh0dXJlLnNjYWxlTW9kZSA9PT0gUGhhc2VyLnNjYWxlTW9kZXMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRleHR1cmUuX3Bvd2VyT2YyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5SRVBFQVQpO1xyXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dHVyZS5fZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgKi9cclxuXHJcbiAgICAvLyAgQmxlbmQgTW9kZSBNYW5hZ2VyXHJcblxyXG4gICAgc2V0QmxlbmRNb2RlOiBmdW5jdGlvbiAobmV3QmxlbmRNb2RlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPT09IG5ld0JsZW5kTW9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGJsZW5kTW9kZVdlYkdMID0gdGhpcy5ibGVuZE1vZGVzW25ld0JsZW5kTW9kZV07XHJcblxyXG4gICAgICAgIGlmIChibGVuZE1vZGVXZWJHTClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IG5ld0JsZW5kTW9kZTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyhibGVuZE1vZGVXZWJHTFswXSwgYmxlbmRNb2RlV2ViR0xbMV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBXZWJHTCBNYXNrIE1hbmFnZXJcclxuXHJcbiAgICBwdXNoTWFzazogZnVuY3Rpb24gKG1hc2tEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAgIGlmIChtYXNrRGF0YS5kaXJ0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFBJWEkuV2ViR0xHcmFwaGljcy51cGRhdGVHcmFwaGljcyhtYXNrRGF0YSwgZ2wpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hc2tEYXRhLl93ZWJHTCA9PT0gdW5kZWZpbmVkIHx8IG1hc2tEYXRhLl93ZWJHTC5kYXRhID09PSB1bmRlZmluZWQgfHwgbWFza0RhdGEuX3dlYkdMLmRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVuY2lsTWFuYWdlci5wdXNoU3RlbmNpbChtYXNrRGF0YSwgbWFza0RhdGEuX3dlYkdMLmRhdGFbMF0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3BNYXNrOiBmdW5jdGlvbiAobWFza0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG1hc2tEYXRhLl93ZWJHTCA9PT0gdW5kZWZpbmVkIHx8IG1hc2tEYXRhLl93ZWJHTC5kYXRhID09PSB1bmRlZmluZWQgfHwgbWFza0RhdGEuX3dlYkdMLmRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVuY2lsTWFuYWdlci5wb3BTdGVuY2lsKG1hc2tEYXRhLCBtYXNrRGF0YS5fd2ViR0wuZGF0YVswXSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBTaGFkZXIgVXRpbHNcclxuXHJcbiAgICAvLyAgUElYSS5Db21waWxlVmVydGV4U2hhZGVyXHJcbiAgICBjb21waWxlVmVydGV4U2hhZGVyOiBmdW5jdGlvbiAoc3JjKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVTaGFkZXIoc3JjLCB0aGlzLmdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgUElYSS5Db21waWxlRnJhZ21lbnRTaGFkZXJcclxuICAgIGNvbXBpbGVGcmFnbWVudFNoYWRlcjogZnVuY3Rpb24gKHNyYylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlU2hhZGVyKHNyYywgdGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgUElYSS5fQ29tcGlsZVNoYWRlclxyXG4gICAgY29tcGlsZVNoYWRlcjogZnVuY3Rpb24gKHNyYywgdHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3JjID0gc3JjLmpvaW4oJ1xcbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3JjKTtcclxuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBQSVhJLmNvbXBpbGVQcm9ncmFtXHJcbiAgICBjb21waWxlUHJvZ3JhbTogZnVuY3Rpb24gKHZlcnRleFNyYywgZnJhZ21lbnRTcmMpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jb21waWxlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTcmMpO1xyXG4gICAgICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNvbXBpbGVWZXJ0ZXhTaGFkZXIodmVydGV4U3JjKTtcclxuXHJcbiAgICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBzaGFkZXJzOiBWZXJ0ZXggJiBGcmFnbWVudCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2ZXJ0ZXhTcmMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmcmFnbWVudFNyYy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlUHJvZ3JhbTogZnVuY3Rpb24gKHByb2dyYW0pXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjcmVhdGVGQk86IGZ1bmN0aW9uIChwYXJlbnQsIHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gICBTdG9yZSBpbiBhIGxvY2FsIGxpc3Qgc28gd2UgY2FuIHVwZGF0ZSBzaXplIGlmIHRoZSBjYW52YXMgc2l6ZSBjaGFuZ2VzP1xyXG4gICAgICAgIHJldHVybiBuZXcgUXVhZEZCTyh0aGlzLCBwYXJlbnQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRlck1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYmF0Y2guZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubWFza01hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZGVyTWFuYWdlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYXRjaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tYXNrTWFuYWdlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5nbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTZXNzaW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV2ViR0xSZW5kZXJlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVuZGVyZXIvd2ViZ2wvV2ViR0xSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVuZGVyZXIvd2ViZ2wvV2ViR0xSZW5kZXJlci5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBCYXNlQmF0Y2ggPSByZXF1aXJlKCcuL0Jhc2VCYXRjaCcpO1xyXG5cclxuLyoqXHJcbiogU3RhbmRhcmQgSW1hZ2UgYW5kIFNwcml0ZSBTaGFkZXIuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlJlbmRlcmVyLldlYkdMLkJhdGNoLkltYWdlXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuUmVuZGVyZXIuV2ViR0x9IHJlbmRlcmVyIC0gVGhlIFdlYkdMIFJlbmRlcmVyLlxyXG4qL1xyXG52YXIgTXVsdGlUZXh0dXJlQmF0Y2ggPSBmdW5jdGlvbiAobWFuYWdlciwgYmF0Y2hTaXplKVxyXG57XHJcbiAgICAvLyAgVmVydGV4IERhdGEgU2l6ZSBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyB0b2dldGhlcjpcclxuICAgIC8vXHJcbiAgICAvLyAgUG9zaXRpb24gKHZlYzIpID0gNCAqIDIgPSA4IGJ5dGVzXHJcbiAgICAvLyAgVVYgKHZlYzIpID0gNCAqIDIgPSA4IGJ5dGVzXHJcbiAgICAvLyAgVGV4dHVyZSBJbmRleCAoZmxvYXQpID0gNCBieXRlc1xyXG4gICAgLy8gIFRpbnQgQ29sb3IgKGZsb2F0KSA9IDQgYnl0ZXNcclxuICAgIC8vICBCRyBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xyXG4gICAgLy9cclxuICAgIC8vICBUb3RhbDogMjggYnl0ZXMgKHBlciB2ZXJ0KSAqIDQgKDQgdmVydHMgcGVyIHF1YWQpICg9IDExMiBieXRlcykgKiBtYXhTaXplICh1c3VhbGx5IDIwMDApID0gMjI0IGtpbG9ieXRlcyBzZW50IHRvIHRoZSBHUFUgZXZlcnkgZnJhbWVcclxuXHJcbiAgICB2YXIgdmVydFNpemUgPSAoNCAqIDIpICsgKDQgKiAyKSArICg0KSArICg0KSArICg0KTtcclxuXHJcbiAgICBCYXNlQmF0Y2guY2FsbCh0aGlzLCBtYW5hZ2VyLCBiYXRjaFNpemUsIHZlcnRTaXplKTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAyO1xyXG5cclxuICAgIC8vICBWaWV3IG9uIHRoZSB2ZXJ0aWNlcyBhcyBhIEZsb2F0MzJBcnJheVxyXG4gICAgdGhpcy5wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG5cclxuICAgIC8vICBWaWV3IG9uIHRoZSB2ZXJ0aWNlcyBhcyBhIFVpbnQzMkFycmF5XHJcbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLnZlcnRpY2VzKTtcclxuXHJcbiAgICAvLyAgQXR0cmlidXRlcyBhbmQgVW5pZm9ybXMgc3BlY2lmaWMgdG8gdGhpcyBCYXRjaCBTaGFkZXJcclxuXHJcbiAgICAvLyAgQHR5cGUge0dMaW50fVxyXG4gICAgdGhpcy5hVmVydGV4UG9zaXRpb247XHJcblxyXG4gICAgLy8gIEB0eXBlIHtHTGludH1cclxuICAgIHRoaXMuYVRleHR1cmVDb29yZDtcclxuXHJcbiAgICAvLyAgQHR5cGUge0dMaW50fVxyXG4gICAgdGhpcy5hVGV4dHVyZUluZGV4O1xyXG5cclxuICAgIC8vICBAdHlwZSB7R0xpbnR9XHJcbiAgICB0aGlzLmFUaW50Q29sb3I7XHJcblxyXG4gICAgLy8gIEB0eXBlIHtHTGludH1cclxuICAgIHRoaXMuYUJnQ29sb3I7XHJcblxyXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cclxuICAgIHRoaXMudVNhbXBsZXI7XHJcblxyXG4gICAgLy8gIEB0eXBlIHtXZWJHTFVuaWZvcm1Mb2NhdGlvbn1cclxuICAgIHRoaXMucHJvamVjdGlvblZlY3RvcjtcclxuXHJcbiAgICAvLyAgQHR5cGUge1dlYkdMVW5pZm9ybUxvY2F0aW9ufVxyXG4gICAgdGhpcy5vZmZzZXRWZWN0b3I7XHJcbn07XHJcblxyXG5NdWx0aVRleHR1cmVCYXRjaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VCYXRjaC5wcm90b3R5cGUpO1xyXG5cclxuTXVsdGlUZXh0dXJlQmF0Y2gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTXVsdGlUZXh0dXJlQmF0Y2g7XHJcblxyXG5NdWx0aVRleHR1cmVCYXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XHJcblxyXG4gICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgIC8vICBPdXIgc3RhdGljIGluZGV4IGJ1ZmZlciwgY2FsY3VsYXRlZCBvbmNlIGF0IHRoZSBzdGFydCBvZiBvdXIgZ2FtZVxyXG5cclxuICAgIC8vICBUaGlzIGNvbnRhaW5zIHRoZSBpbmRpY2VzIGRhdGEgZm9yIHRoZSBxdWFkcy5cclxuICAgIC8vXHJcbiAgICAvLyAgQSBxdWFkIGlzIG1hZGUgdXAgb2YgMiB0cmlhbmdsZXMgKEEgYW5kIEIgaW4gdGhlIGltYWdlIGJlbG93KVxyXG4gICAgLy9cclxuICAgIC8vICAwID0gVG9wIExlZnRcclxuICAgIC8vICAxID0gVG9wIFJpZ2h0XHJcbiAgICAvLyAgMiA9IEJvdHRvbSBSaWdodFxyXG4gICAgLy8gIDMgPSBCb3R0b20gTGVmdFxyXG4gICAgLy9cclxuICAgIC8vICAwLS0tLTFcclxuICAgIC8vICB8XFwgIEF8XHJcbiAgICAvLyAgfCBcXCAgfFxyXG4gICAgLy8gIHwgIFxcIHxcclxuICAgIC8vICB8IEIgXFx8XHJcbiAgICAvLyAgfCAgICBcXFxyXG4gICAgLy8gIDMtLS0tMlxyXG4gICAgLy9cclxuICAgIC8vICBCZWNhdXNlIHRyaWFuZ2xlcyBBIGFuZCBCIHNoYXJlIDIgcG9pbnRzICgwIGFuZCAyKSB0aGUgdmVydGV4IGJ1ZmZlciBvbmx5IHN0b3Jlc1xyXG4gICAgLy8gIDQgc2V0cyBvZiBkYXRhICh0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCBhbmQgYm90dG9tLXJpZ2h0KSwgd2hpY2ggaXMgd2h5XHJcbiAgICAvLyAgdGhlIGluZGljZXMgb2Zmc2V0cyB1c2VzIHRoZSBqICs9IDQgaXRlcmF0aW9uLiBJbmRpY2VzIGFycmF5IGhhcyB0byBjb250YWluIDNcclxuICAgIC8vICBlbnRyaWVzIGZvciBldmVyeSB0cmlhbmdsZSAoc28gNiBmb3IgZXZlcnkgcXVhZCksIGJ1dCBvdXIgdmVydGV4IGRhdGEgY29tcGFjdHNcclxuICAgIC8vICB0aGF0IGRvd24sIGFzIHdlIGRvbid0IHdhbnQgdG8gZmlsbCBpdCB3aXRoIGxvYWRzIG9mIERVUExJQ0FURSBkYXRhLCBzbyB0aGVcclxuICAgIC8vICBpbmRpY2VzIGFycmF5IGlzIGEgbG9vay11cCB0YWJsZSwgdGVsbGluZyBXZWJHTCB3aGVyZSBpbiB0aGUgdmVydGV4IGJ1ZmZlciB0byBsb29rXHJcbiAgICAvLyAgZm9yIHRoYXQgdHJpYW5nbGVzIGluZGljZSBkYXRhLlxyXG5cclxuICAgIC8vICBiYXRjaFNpemUgKiB2ZXJ0U2l6ZSA9IDIwMDAgKiA2IChiZWNhdXNlIHdlIHN0b3JlIDYgcGllY2VzIG9mIHZlcnRleCBkYXRhIHBlciB0cmlhbmdsZSlcclxuICAgIC8vICBhbmQgdXAgdG8gYSBtYXhpbXVtIG9mIDIwMDAgZW50cmllcyBpbiB0aGUgYmF0Y2hcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCAodGhpcy5tYXhTaXplICogdGhpcy52ZXJ0U2l6ZSk7IGkgKz0gNiwgaiArPSA0KVxyXG4gICAge1xyXG4gICAgICAgIC8vICBUcmlhbmdsZSAxXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAwXSA9IGogKyAwOyAgICAvLyAgVG9wIExlZnRcclxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDFdID0gaiArIDE7ICAgIC8vICBUb3AgUmlnaHRcclxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDJdID0gaiArIDI7ICAgIC8vICBCb3R0b20gUmlnaHRcclxuXHJcbiAgICAgICAgLy8gIFRyaWFuZ2xlIDJcclxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDNdID0gaiArIDA7ICAgIC8vICBUb3AgTGVmdFxyXG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNF0gPSBqICsgMjsgICAgLy8gIEJvdHRvbSBSaWdodFxyXG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNV0gPSBqICsgMzsgICAgLy8gIEJvdHRvbSBMZWZ0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIENyZWF0ZSBpbmRpY2VzIGJ1ZmZlclxyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuICAgIC8vICBCaW5kIGl0XHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcclxuXHJcbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLmluZGljZXMgYXJyYXkpXHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAvLyAgQ3JlYXRlIFZlcnRleCBEYXRhIGJ1ZmZlclxyXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcbiAgICAvLyAgQmluZCBpdFxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLnZlcnRpY2VzIGFycmF5KVxyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGljZXMsIGdsLkRZTkFNSUNfRFJBVyk7XHJcblxyXG4gICAgLy8gIENyZWF0ZSB0aGUgc2hhZGVyXHJcblxyXG4gICAgdGhpcy52ZXJ0ZXhTcmMgPSBbXHJcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxyXG4gICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkOycsXHJcbiAgICAgICAgJ2F0dHJpYnV0ZSBmbG9hdCBhVGV4dHVyZUluZGV4OycsXHJcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFUaW50Q29sb3I7JyxcclxuICAgICAgICAnYXR0cmlidXRlIHZlYzQgYUJnQ29sb3I7JyxcclxuXHJcbiAgICAgICAgJ3VuaWZvcm0gdmVjMiBwcm9qZWN0aW9uVmVjdG9yOycsXHJcbiAgICAgICAgJ3VuaWZvcm0gdmVjMiBvZmZzZXRWZWN0b3I7JyxcclxuXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2VGludENvbG9yOycsXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2QmdDb2xvcjsnLFxyXG4gICAgICAgICd2YXJ5aW5nIGZsb2F0IHZUZXh0dXJlSW5kZXg7JyxcclxuXHJcbiAgICAgICAgJ2NvbnN0IHZlYzIgY2VudGVyID0gdmVjMigtMS4wLCAxLjApOycsXHJcblxyXG4gICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXHJcbiAgICAgICAgJyAgIGlmIChhVGV4dHVyZUluZGV4ID4gMC4wKSBnbF9Qb3NpdGlvbiA9IHZlYzQoMC4wKTsnLFxyXG4gICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKChhVmVydGV4UG9zaXRpb24gKyBvZmZzZXRWZWN0b3IpIC8gcHJvamVjdGlvblZlY3RvcikgKyBjZW50ZXIsIDAuMCwgMS4wKTsnLFxyXG4gICAgICAgICcgICB2VGV4dHVyZUNvb3JkID0gYVRleHR1cmVDb29yZDsnLCAvLyBwYXNzIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGUgdG8gdGhlIGZyYWdtZW50IHNoYWRlciwgdGhlIEdQVSB3aWxsIGludGVycG9sYXRlIHRoZSBwb2ludHNcclxuICAgICAgICAnICAgdlRpbnRDb2xvciA9IHZlYzQoYVRpbnRDb2xvci5yZ2IgKiBhVGludENvbG9yLmEsIGFUaW50Q29sb3IuYSk7JyxcclxuICAgICAgICAnICAgdkJnQ29sb3IgPSBhQmdDb2xvcjsnLFxyXG4gICAgICAgICcgICB2VGV4dHVyZUluZGV4ID0gYVRleHR1cmVJbmRleDsnLFxyXG4gICAgICAgICd9J1xyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLmZyYWdtZW50U3JjID0gW1xyXG4gICAgICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxyXG5cclxuICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JywgLy8gdGhlIHRleHR1cmUgY29vcmRzIHBhc3NlZCBpbiBmcm9tIHRoZSB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2VGludENvbG9yOycsIC8vICB0aGUgY29sb3IgdmFsdWUgcGFzc2VkIGluIGZyb20gdGhlIHZlcnRleCBzaGFkZXIgKHRleHR1cmUgY29sb3IgKyBhbHBoYSArIHRpbnQpXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2QmdDb2xvcjsnLCAvLyAgdGhlIGJnIGNvbG9yIHZhbHVlIHBhc3NlZCBpbiBmcm9tIHRoZSB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgICAgJ3ZhcnlpbmcgZmxvYXQgdlRleHR1cmVJbmRleDsnLFxyXG5cclxuICAgICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXJBcnJheVsnICsgdGhpcy5yZW5kZXJlci5tYXhUZXh0dXJlcyArICddOycsXHJcblxyXG4gICAgICAgICdjb25zdCB2ZWM0IFBJTksgPSB2ZWM0KDEuMCwgMC4wLCAxLjAsIDEuMCk7JyxcclxuXHJcbiAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcclxuICAgICAgICAnICAgdmVjNCBwaXhlbDsnLFxyXG5cclxuICAgICAgICAnICAgaWYgKHZUZXh0dXJlSW5kZXggPT0gMC4wKScsXHJcbiAgICAgICAgJyAgIHsnLFxyXG4gICAgICAgICcgICAgICAgcGl4ZWwgPSB0ZXh0dXJlMkQodVNhbXBsZXJBcnJheVswXSwgdlRleHR1cmVDb29yZCk7JyxcclxuICAgICAgICAnICAgfScsXHJcbiAgICAgICAgJy8vIElGRUxTRUJMT0NLJywgLy8gc3BlY2lhbCB0YWcgdXNlZCB0byBpbnNlcnQgdGhlIG11bHRpLXRleHR1cmUgaWYgZWxzZSBibG9jay4gRG8gbm90IGVkaXQgb3IgcmVtb3ZlLlxyXG4gICAgICAgICcgICBlbHNlJyxcclxuICAgICAgICAnICAgeycsXHJcbiAgICAgICAgJyAgICAgICBwaXhlbCA9IFBJTks7JyxcclxuICAgICAgICAnICAgfScsXHJcblxyXG4gICAgICAgICcgICBwaXhlbCAqPSB2VGludENvbG9yOycsXHJcbiAgICAgICAgLy8gJyAgIGlmIChwaXhlbC5hID09IDAuMCkgcGl4ZWwgPSB2QmdDb2xvcjsnLCAvLyBpZiB0ZXh0dXJlIGFscGhhIGlzIHplcm8sIHVzZSB0aGUgYmcgY29sb3JcclxuICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gcGl4ZWw7JyxcclxuICAgICAgICAnfSdcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGJsb2NrID0gW107XHJcbiAgICB2YXIgc3BsaWNlUG9pbnQgPSAwO1xyXG5cclxuICAgIC8vICBCdWlsZCB0aGUgZWxzZSBpZiBibG9ja1xyXG4gICAgZm9yICh2YXIgdCA9IDE7IHQgPCB0aGlzLnJlbmRlcmVyLm1heFRleHR1cmVzOyB0KyspXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2sucHVzaCgnICAgZWxzZSBpZiAodlRleHR1cmVJbmRleCA9PSAnICsgdCArICcuMCknKTtcclxuICAgICAgICBibG9jay5wdXNoKCcgICB7Jyk7XHJcbiAgICAgICAgYmxvY2sucHVzaCgnICAgICAgIHBpeGVsID0gdGV4dHVyZTJEKHVTYW1wbGVyQXJyYXlbJyArIHQgKyAnXSwgdlRleHR1cmVDb29yZCk7Jyk7XHJcbiAgICAgICAgYmxvY2sucHVzaCgnICAgfScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBQYXJzZSB0aGUgZnJhZ21lbnQgc3JjIGFycmF5XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5mcmFnbWVudFNyYy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFnbWVudFNyY1tpXSA9PT0gJy8vIElGRUxTRUJMT0NLJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBTdG9yZSB0aGUgaW5kZXggYXQgd2hpY2ggd2UgbmVlZCB0byBpbnNlcnQgdGhlIGlmIGVsc2UgYmxvY2tcclxuICAgICAgICAgICAgc3BsaWNlUG9pbnQgPSBpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFN0b3JlIHRoZSBlbmQgcGFydCBvZiB0aGUgc2hhZGVyXHJcbiAgICB2YXIgc2hhZGVyRW5kID0gdGhpcy5mcmFnbWVudFNyYy5zcGxpY2Uoc3BsaWNlUG9pbnQpO1xyXG5cclxuICAgIC8vICBTdGl0Y2ggaXQgYmFjayB0b2dldGhlciBhZ2FpblxyXG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IHRoaXMuZnJhZ21lbnRTcmMuY29uY2F0KGJsb2NrLCBzaGFkZXJFbmQpO1xyXG5cclxuICAgIC8vICBDb21waWxlIHRoZSBTaGFkZXJcclxuICAgIHRoaXMucHJvZ3JhbSA9IHRoaXMucmVuZGVyZXIuY29tcGlsZVByb2dyYW0odGhpcy52ZXJ0ZXhTcmMsIHRoaXMuZnJhZ21lbnRTcmMpO1xyXG5cclxuICAgIC8vICBCaW5kIGVtcHR5IG11bHRpLXRleHR1cmVzIHRvIGF2b2lkIFdlYkdMIHNwYW1cclxuXHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgdmFyIGluZGljZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlci5tYXhUZXh0dXJlczsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGluZGljZXMucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3VTYW1wbGVyQXJyYXlbMF0nKTtcclxuXHJcbiAgICBnbC51bmlmb3JtMWl2KHRoaXMudVNhbXBsZXIsIGluZGljZXMpO1xyXG59O1xyXG5cclxuTXVsdGlUZXh0dXJlQmF0Y2gucHJvdG90eXBlLmJpbmRTaGFkZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnTXVsdGlUZXh0dXJlIGJpbmRTaGFkZXInKTtcclxuXHJcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG4gICAgdmFyIHZlcnRTaXplID0gdGhpcy52ZXJ0U2l6ZTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XHJcblxyXG4gICAgLy8gIEdldCBhbmQgc3RvcmUgdGhlIGF0dHJpYnV0ZXNcclxuXHJcbiAgICAvLyAgdmVydGV4IHBvc2l0aW9uXHJcbiAgICB0aGlzLmFWZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVZlcnRleFBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyAgdGV4dHVyZSBjb29yZGluYXRlXHJcbiAgICB0aGlzLmFUZXh0dXJlQ29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVRleHR1cmVDb29yZCcpO1xyXG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUNvb3JkKTtcclxuXHJcbiAgICAvLyAgdGV4dHVyZSBpbmRleFxyXG4gICAgdGhpcy5hVGV4dHVyZUluZGV4ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUZXh0dXJlSW5kZXgnKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRleHR1cmVJbmRleCk7XHJcblxyXG4gICAgLy8gIHRpbnQgLyBwaXhlbCBjb2xvclxyXG4gICAgdGhpcy5hVGludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUaW50Q29sb3InKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRpbnRDb2xvcik7XHJcblxyXG4gICAgLy8gIGJhY2tncm91bmQgcGl4ZWwgY29sb3JcclxuICAgIHRoaXMuYUJnQ29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYUJnQ29sb3InKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYUJnQ29sb3IpO1xyXG5cclxuICAgIC8vICBUaGUgcHJvamVjdGlvbiB2ZWN0b3IgKG1pZGRsZSBvZiB0aGUgZ2FtZSB3b3JsZClcclxuICAgIHRoaXMucHJvamVjdGlvblZlY3RvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAncHJvamVjdGlvblZlY3RvcicpO1xyXG5cclxuICAgIC8vICBUaGUgb2Zmc2V0IHZlY3RvciAoY2FtZXJhIHNoYWtlKVxyXG4gICAgdGhpcy5vZmZzZXRWZWN0b3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ29mZnNldFZlY3RvcicpO1xyXG5cclxuICAgIC8vICBUaGUgVGV4dHVyZSBTYW1wbGVyXHJcbiAgICB0aGlzLnVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3VTYW1wbGVyQXJyYXlbMF0nKTtcclxuXHJcbiAgICAvLyAgU2V0IHRoZSBwcm9qZWN0aW9uIHZlY3Rvci4gRGVmYXVsdHMgdG8gdGhlIG1pZGRsZSBvZiB0aGUgR2FtZSBXb3JsZCwgb24gbmVnYXRpdmUgeS5cclxuICAgIC8vICBJLmUuIGlmIHRoZSB3b3JsZCBpcyA4MDB4NjAwIHRoZW4gdGhlIHByb2plY3Rpb24gdmVjdG9yIGlzIDQwMCB4IC0zMDBcclxuICAgIGdsLnVuaWZvcm0yZih0aGlzLnByb2plY3Rpb25WZWN0b3IsIHRoaXMucmVuZGVyZXIucHJvamVjdGlvbi54LCB0aGlzLnJlbmRlcmVyLnByb2plY3Rpb24ueSk7XHJcblxyXG4gICAgLy8gIFNldCB0aGUgb2Zmc2V0IHZlY3Rvci5cclxuICAgIGdsLnVuaWZvcm0yZih0aGlzLm9mZnNldFZlY3RvciwgdGhpcy5yZW5kZXJlci5vZmZzZXQueCwgdGhpcy5yZW5kZXJlci5vZmZzZXQueSk7XHJcblxyXG4gICAgLy8gIFRoZSBWZXJ0ZXggUG9zaXRpb24gKHgveSlcclxuICAgIC8vICAyIEZMT0FUUywgMiAqIDQgPSA4IGJ5dGVzLiBJbmRleCBwb3M6IDAgdG8gN1xyXG4gICAgLy8gIGZpbmFsIGFyZ3VtZW50ID0gdGhlIG9mZnNldCB3aXRoaW4gdGhlIHZlcnRleCBpbnB1dFxyXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCB2ZXJ0U2l6ZSwgMCk7XHJcblxyXG4gICAgLy8gIFRoZSBUZXh0dXJlIENvb3JkaW5hdGUgKHV2eC91dnkpXHJcbiAgICAvLyAgMiBGTE9BVFMsIDIgKiA0ID0gOCBieXRlcy4gSW5kZXggcG9zOiA4IHRvIDE1XHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCB2ZXJ0U2l6ZSwgOCk7XHJcblxyXG4gICAgLy8gIFRleHR1cmUgSW5kZXhcclxuICAgIC8vICAxIEZMT0FULCA0IGJ5dGVzLiBJbmRleCBwb3M6IDE2IHRvIDE5XHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYVRleHR1cmVJbmRleCwgMSwgZ2wuRkxPQVQsIGZhbHNlLCB2ZXJ0U2l6ZSwgMTYpO1xyXG5cclxuICAgIC8vICBUaW50IGNvbG9yXHJcbiAgICAvLyAgNCBVTlNJR05FRCBCWVRFUywgNCBieXRlcy4gSW5kZXggcG9zOiAyMCB0byAyM1xyXG4gICAgLy8gIEF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxyXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUaW50Q29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHZlcnRTaXplLCAyMCk7XHJcblxyXG4gICAgLy8gIEJhY2tncm91bmQgQ29sb3JcclxuICAgIC8vICA0IFVOU0lHTkVEIEJZVEVTLCA0IGJ5dGVzLiBJbmRleCBwb3M6IDI0IHRvIDI3XHJcbiAgICAvLyAgQXR0cmlidXRlcyB3aWxsIGJlIGludGVycHJldGVkIGFzIHVuc2lnbmVkIGJ5dGVzIGFuZCBub3JtYWxpemVkXHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYUJnQ29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHZlcnRTaXplLCAyNCk7XHJcbn07XHJcblxyXG5NdWx0aVRleHR1cmVCYXRjaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlcnRzLCB1dnMsIHRleHR1cmVJbmRleCwgYWxwaGEsIHRpbnRDb2xvcnMsIGJnQ29sb3JzKVxyXG57XHJcbiAgICAvLyAgVGhlc2UgYXJlIFR5cGVkQXJyYXkgVmlld3MgaW50byB0aGUgdmVydGljZXMgQXJyYXlCdWZmZXJcclxuICAgIHZhciBjb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgIHZhciBwb3NpdGlvbnMgPSB0aGlzLnBvc2l0aW9ucztcclxuXHJcbiAgICB2YXIgaSA9IHRoaXMuX2k7XHJcblxyXG4gICAgLy8gIFRvcCBMZWZ0IHZlcnQgKHh5LCB1diwgY29sb3IpXHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngwO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MDtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngwO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTA7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcclxuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy50b3BMZWZ0ICsgYWxwaGE7XHJcbiAgICBjb2xvcnNbaSsrXSA9IGJnQ29sb3JzLnRvcExlZnQ7XHJcblxyXG4gICAgLy8gIFRvcCBSaWdodCB2ZXJ0ICh4eSwgdXYsIGNvbG9yKVxyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy54MTtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTE7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy54MTtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLnkxO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XHJcbiAgICBjb2xvcnNbaSsrXSA9IHRpbnRDb2xvcnMudG9wUmlnaHQgKyBhbHBoYTtcclxuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMudG9wUmlnaHQ7XHJcblxyXG4gICAgLy8gIEJvdHRvbSBSaWdodCB2ZXJ0ICh4eSwgdXYsIGNvbG9yKVxyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy54MjtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueTI7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy54MjtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLnkyO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB0ZXh0dXJlSW5kZXg7XHJcbiAgICBjb2xvcnNbaSsrXSA9IHRpbnRDb2xvcnMuYm90dG9tUmlnaHQgKyBhbHBoYTtcclxuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMuYm90dG9tUmlnaHQ7XHJcblxyXG4gICAgLy8gIEJvdHRvbSBMZWZ0IHZlcnQgKHh5LCB1diwgY29sb3IpXHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngzO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MztcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngzO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTM7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcclxuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy5ib3R0b21MZWZ0ICsgYWxwaGE7XHJcbiAgICBjb2xvcnNbaSsrXSA9IGJnQ29sb3JzLmJvdHRvbUxlZnQ7XHJcblxyXG4gICAgdGhpcy5faSA9IGk7XHJcblxyXG4gICAgdGhpcy5zaXplKys7XHJcbn07XHJcblxyXG5NdWx0aVRleHR1cmVCYXRjaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMudmVydGljZXMgPSBudWxsO1xyXG4gICAgdGhpcy5pbmRpY2VzID0gbnVsbDtcclxuICAgIHRoaXMudmlldyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5pbmRleEJ1ZmZlcik7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXVsdGlUZXh0dXJlQmF0Y2g7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL011bHRpVGV4dHVyZUJhdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL011bHRpVGV4dHVyZUJhdGNoLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEJhc2VCYXRjaCA9IHJlcXVpcmUoJy4vQmFzZUJhdGNoJyk7XHJcblxyXG4vKipcclxuKiBTdGFuZGFyZCBJbWFnZSBhbmQgU3ByaXRlIFNoYWRlci5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVuZGVyZXIuV2ViR0wuQmF0Y2guU2luZ2xlVGV4dHVyZVxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLlJlbmRlcmVyLldlYkdMfSByZW5kZXJlciAtIFRoZSBXZWJHTCBSZW5kZXJlci5cclxuKi9cclxudmFyIFNpbmdsZVRleHR1cmVCYXRjaCA9IGZ1bmN0aW9uIChtYW5hZ2VyLCBiYXRjaFNpemUpXHJcbntcclxuICAgIC8vICBWZXJ0ZXggRGF0YSBTaXplIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIHRvZ2V0aGVyOlxyXG4gICAgLy9cclxuICAgIC8vICBQb3NpdGlvbiAodmVjMikgPSA0ICogMiA9IDggYnl0ZXNcclxuICAgIC8vICBVViAodmVjMikgPSA0ICogMiA9IDggYnl0ZXNcclxuICAgIC8vICBUZXh0dXJlIEluZGV4IChmbG9hdCkgPSA0IGJ5dGVzXHJcbiAgICAvLyAgVGludCBDb2xvciAoZmxvYXQpID0gNCBieXRlc1xyXG4gICAgLy8gIEJHIENvbG9yIChmbG9hdCkgPSA0IGJ5dGVzXHJcbiAgICAvL1xyXG4gICAgLy8gIFRvdGFsOiAyOCBieXRlcyAocGVyIHZlcnQpICogNCAoNCB2ZXJ0cyBwZXIgcXVhZCkgKD0gMTEyIGJ5dGVzKSAqIG1heFNpemUgKHVzdWFsbHkgMjAwMCkgPSAyMjQga2lsb2J5dGVzIHNlbnQgdG8gdGhlIEdQVSBldmVyeSBmcmFtZVxyXG5cclxuICAgIHZhciB2ZXJ0U2l6ZSA9ICg0ICogMikgKyAoNCAqIDIpICsgKDQpICsgKDQpICsgKDQpO1xyXG5cclxuICAgIEJhc2VCYXRjaC5jYWxsKHRoaXMsIG1hbmFnZXIsIGJhdGNoU2l6ZSwgdmVydFNpemUpO1xyXG5cclxuICAgIHRoaXMudHlwZSA9IDE7XHJcblxyXG4gICAgLy8gIFZpZXcgb24gdGhlIHZlcnRpY2VzIGFzIGEgRmxvYXQzMkFycmF5XHJcbiAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyk7XHJcblxyXG4gICAgLy8gIFZpZXcgb24gdGhlIHZlcnRpY2VzIGFzIGEgVWludDMyQXJyYXlcclxuICAgIHRoaXMuY29sb3JzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG5cclxuICAgIC8vICBBdHRyaWJ1dGVzIGFuZCBVbmlmb3JtcyBzcGVjaWZpYyB0byB0aGlzIEJhdGNoIFNoYWRlclxyXG5cclxuICAgIC8vICBAdHlwZSB7R0xpbnR9XHJcbiAgICB0aGlzLmFWZXJ0ZXhQb3NpdGlvbjtcclxuXHJcbiAgICAvLyAgQHR5cGUge0dMaW50fVxyXG4gICAgdGhpcy5hVGV4dHVyZUNvb3JkO1xyXG5cclxuICAgIC8vICBAdHlwZSB7R0xpbnR9XHJcbiAgICB0aGlzLmFUZXh0dXJlSW5kZXg7XHJcblxyXG4gICAgLy8gIEB0eXBlIHtHTGludH1cclxuICAgIHRoaXMuYVRpbnRDb2xvcjtcclxuXHJcbiAgICAvLyAgQHR5cGUge0dMaW50fVxyXG4gICAgdGhpcy5hQmdDb2xvcjtcclxuXHJcbiAgICAvLyAgQHR5cGUge1dlYkdMVW5pZm9ybUxvY2F0aW9ufVxyXG4gICAgdGhpcy51U2FtcGxlcjtcclxuXHJcbiAgICAvLyAgQHR5cGUge1dlYkdMVW5pZm9ybUxvY2F0aW9ufVxyXG4gICAgdGhpcy5wcm9qZWN0aW9uVmVjdG9yO1xyXG5cclxuICAgIC8vICBAdHlwZSB7V2ViR0xVbmlmb3JtTG9jYXRpb259XHJcbiAgICB0aGlzLm9mZnNldFZlY3RvcjtcclxufTtcclxuXHJcblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VCYXRjaC5wcm90b3R5cGUpO1xyXG5cclxuU2luZ2xlVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNpbmdsZVRleHR1cmVCYXRjaDtcclxuXHJcblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xyXG5cclxuICAgIHRoaXMudmVydGV4U3JjID0gW1xyXG4gICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcclxuICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxyXG4gICAgICAgICdhdHRyaWJ1dGUgZmxvYXQgYVRleHR1cmVJbmRleDsnLFxyXG4gICAgICAgICdhdHRyaWJ1dGUgdmVjNCBhVGludENvbG9yOycsXHJcbiAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFCZ0NvbG9yOycsXHJcblxyXG4gICAgICAgICd1bmlmb3JtIHZlYzIgcHJvamVjdGlvblZlY3RvcjsnLFxyXG4gICAgICAgICd1bmlmb3JtIHZlYzIgb2Zmc2V0VmVjdG9yOycsXHJcblxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdlRpbnRDb2xvcjsnLFxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdkJnQ29sb3I7JyxcclxuICAgICAgICAndmFyeWluZyBmbG9hdCB2VGV4dHVyZUluZGV4OycsXHJcblxyXG4gICAgICAgICdjb25zdCB2ZWMyIGNlbnRlciA9IHZlYzIoLTEuMCwgMS4wKTsnLFxyXG5cclxuICAgICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxyXG4gICAgICAgICcgICBpZiAoYVRleHR1cmVJbmRleCA+IDAuMCkgZ2xfUG9zaXRpb24gPSB2ZWM0KDAuMCk7JyxcclxuICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCgoYVZlcnRleFBvc2l0aW9uICsgb2Zmc2V0VmVjdG9yKSAvIHByb2plY3Rpb25WZWN0b3IpICsgY2VudGVyLCAwLjAsIDEuMCk7JyxcclxuICAgICAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JywgLy8gcGFzcyB0aGUgdGV4dHVyZSBjb29yZGluYXRlIHRvIHRoZSBmcmFnbWVudCBzaGFkZXIsIHRoZSBHUFUgd2lsbCBpbnRlcnBvbGF0ZSB0aGUgcG9pbnRzXHJcbiAgICAgICAgJyAgIHZUaW50Q29sb3IgPSB2ZWM0KGFUaW50Q29sb3IucmdiICogYVRpbnRDb2xvci5hLCBhVGludENvbG9yLmEpOycsIC8vIHByZS1tdWx0aXBseSB0aGUgYWxwaGEgKGFsbCB0ZXh0dXJlcyBhcmUgcHJlLW11bHRpcGxpZWQpXHJcbiAgICAgICAgJyAgIHZCZ0NvbG9yID0gYUJnQ29sb3I7JyxcclxuICAgICAgICAnICAgdlRleHR1cmVJbmRleCA9IGFUZXh0dXJlSW5kZXg7JyxcclxuICAgICAgICAnfSdcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IFtcclxuICAgICAgICAncHJlY2lzaW9uIGxvd3AgZmxvYXQ7JyxcclxuXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsIC8vIHRoZSB0ZXh0dXJlIGNvb3JkcyBwYXNzZWQgaW4gZnJvbSB0aGUgdmVydGV4IHNoYWRlclxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdlRpbnRDb2xvcjsnLCAvLyAgdGhlIGNvbG9yIHZhbHVlIHBhc3NlZCBpbiBmcm9tIHRoZSB2ZXJ0ZXggc2hhZGVyICh0ZXh0dXJlIGNvbG9yICsgYWxwaGEgKyB0aW50KVxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzQgdkJnQ29sb3I7JywgLy8gIHRoZSBiZyBjb2xvciB2YWx1ZSBwYXNzZWQgaW4gZnJvbSB0aGUgdmVydGV4IHNoYWRlclxyXG4gICAgICAgICd2YXJ5aW5nIGZsb2F0IHZUZXh0dXJlSW5kZXg7JyxcclxuXHJcbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsIC8vIG91ciB0ZXh0dXJlXHJcblxyXG4gICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXHJcbiAgICAgICAgJyAgIHZlYzQgcGl4ZWwgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpICogdlRpbnRDb2xvcjsnLCAvLyBnZXQgdGhlIGNvbG9yIGZyb20gdGhlIHRleHR1cmVcclxuICAgICAgICAvLyAnICAgaWYgKHBpeGVsLmEgPT0gMC4wKSBwaXhlbCA9IHZCZ0NvbG9yOycsIC8vIGlmIHRleHR1cmUgYWxwaGEgaXMgemVybywgdXNlIHRoZSBiZyBjb2xvclxyXG4gICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSBwaXhlbDsnLFxyXG4gICAgICAgICd9J1xyXG4gICAgXTtcclxuXHJcbiAgICAvLyAgQ29tcGlsZSB0aGUgU2hhZGVyXHJcbiAgICB0aGlzLnByb2dyYW0gPSB0aGlzLnJlbmRlcmVyLmNvbXBpbGVQcm9ncmFtKHRoaXMudmVydGV4U3JjLCB0aGlzLmZyYWdtZW50U3JjKTtcclxuXHJcbiAgICAvLyAgT3VyIHN0YXRpYyBpbmRleCBidWZmZXIsIGNhbGN1bGF0ZWQgb25jZSBhdCB0aGUgc3RhcnQgb2Ygb3VyIGdhbWVcclxuXHJcbiAgICAvLyAgVGhpcyBjb250YWlucyB0aGUgaW5kaWNlcyBkYXRhIGZvciB0aGUgcXVhZHMuXHJcbiAgICAvL1xyXG4gICAgLy8gIEEgcXVhZCBpcyBtYWRlIHVwIG9mIDIgdHJpYW5nbGVzIChBIGFuZCBCIGluIHRoZSBpbWFnZSBiZWxvdylcclxuICAgIC8vXHJcbiAgICAvLyAgMCA9IFRvcCBMZWZ0XHJcbiAgICAvLyAgMSA9IFRvcCBSaWdodFxyXG4gICAgLy8gIDIgPSBCb3R0b20gUmlnaHRcclxuICAgIC8vICAzID0gQm90dG9tIExlZnRcclxuICAgIC8vXHJcbiAgICAvLyAgMC0tLS0xXHJcbiAgICAvLyAgfFxcICBBfFxyXG4gICAgLy8gIHwgXFwgIHxcclxuICAgIC8vICB8ICBcXCB8XHJcbiAgICAvLyAgfCBCIFxcfFxyXG4gICAgLy8gIHwgICAgXFxcclxuICAgIC8vICAzLS0tLTJcclxuICAgIC8vXHJcbiAgICAvLyAgQmVjYXVzZSB0cmlhbmdsZXMgQSBhbmQgQiBzaGFyZSAyIHBvaW50cyAoMCBhbmQgMikgdGhlIHZlcnRleCBidWZmZXIgb25seSBzdG9yZXNcclxuICAgIC8vICA0IHNldHMgb2YgZGF0YSAodG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQgYW5kIGJvdHRvbS1yaWdodCksIHdoaWNoIGlzIHdoeVxyXG4gICAgLy8gIHRoZSBpbmRpY2VzIG9mZnNldHMgdXNlcyB0aGUgaiArPSA0IGl0ZXJhdGlvbi4gSW5kaWNlcyBhcnJheSBoYXMgdG8gY29udGFpbiAzXHJcbiAgICAvLyAgZW50cmllcyBmb3IgZXZlcnkgdHJpYW5nbGUgKHNvIDYgZm9yIGV2ZXJ5IHF1YWQpLCBidXQgb3VyIHZlcnRleCBkYXRhIGNvbXBhY3RzXHJcbiAgICAvLyAgdGhhdCBkb3duLCBhcyB3ZSBkb24ndCB3YW50IHRvIGZpbGwgaXQgd2l0aCBsb2FkcyBvZiBEVVBMSUNBVEUgZGF0YSwgc28gdGhlXHJcbiAgICAvLyAgaW5kaWNlcyBhcnJheSBpcyBhIGxvb2stdXAgdGFibGUsIHRlbGxpbmcgV2ViR0wgd2hlcmUgaW4gdGhlIHZlcnRleCBidWZmZXIgdG8gbG9va1xyXG4gICAgLy8gIGZvciB0aGF0IHRyaWFuZ2xlcyBpbmRpY2UgZGF0YS5cclxuXHJcbiAgICAvLyAgYmF0Y2hTaXplICogdmVydFNpemUgPSAyMDAwICogNiAoYmVjYXVzZSB3ZSBzdG9yZSA2IHBpZWNlcyBvZiB2ZXJ0ZXggZGF0YSBwZXIgdHJpYW5nbGUpXHJcbiAgICAvLyAgYW5kIHVwIHRvIGEgbWF4aW11bSBvZiAyMDAwIGVudHJpZXMgaW4gdGhlIGJhdGNoXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgKHRoaXMubWF4U2l6ZSAqIHRoaXMudmVydFNpemUpOyBpICs9IDYsIGogKz0gNClcclxuICAgIHtcclxuICAgICAgICAvLyAgVHJpYW5nbGUgMVxyXG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMF0gPSBqICsgMDsgICAgLy8gIFRvcCBMZWZ0XHJcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAxXSA9IGogKyAxOyAgICAvLyAgVG9wIFJpZ2h0XHJcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAyXSA9IGogKyAyOyAgICAvLyAgQm90dG9tIFJpZ2h0XHJcblxyXG4gICAgICAgIC8vICBUcmlhbmdsZSAyXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAzXSA9IGogKyAwOyAgICAvLyAgVG9wIExlZnRcclxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDRdID0gaiArIDI7ICAgIC8vICBCb3R0b20gUmlnaHRcclxuICAgICAgICB0aGlzLmluZGljZXNbaSArIDVdID0gaiArIDM7ICAgIC8vICBCb3R0b20gTGVmdFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgLy8gIENyZWF0ZSBpbmRpY2VzIGJ1ZmZlclxyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuICAgIC8vICBCaW5kIGl0XHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcclxuXHJcbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLmluZGljZXMgYXJyYXkpXHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAvLyAgQ3JlYXRlIFZlcnRleCBEYXRhIGJ1ZmZlclxyXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcbiAgICAvLyAgQmluZCBpdFxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAvLyAgU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIGJ1ZmZlciBkYXRhICh0aGlzLnZlcnRpY2VzIGFycmF5KVxyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGljZXMsIGdsLkRZTkFNSUNfRFJBVyk7XHJcblxyXG59O1xyXG5cclxuU2luZ2xlVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5iaW5kU2hhZGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcclxuICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xyXG4gICAgdmFyIHZlcnRTaXplID0gdGhpcy52ZXJ0U2l6ZTtcclxuXHJcbiAgICAvLyAgU2V0IFNoYWRlclxyXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XHJcblxyXG4gICAgLy8gIEdldCBhbmQgc3RvcmUgdGhlIGF0dHJpYnV0ZXNcclxuXHJcbiAgICAvLyAgdmVydGV4IHBvc2l0aW9uXHJcbiAgICB0aGlzLmFWZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVZlcnRleFBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyAgdGV4dHVyZSBjb29yZGluYXRlXHJcbiAgICB0aGlzLmFUZXh0dXJlQ29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVRleHR1cmVDb29yZCcpO1xyXG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUNvb3JkKTtcclxuXHJcbiAgICAvLyAgdGV4dHVyZSBpbmRleFxyXG4gICAgdGhpcy5hVGV4dHVyZUluZGV4ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUZXh0dXJlSW5kZXgnKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRleHR1cmVJbmRleCk7XHJcblxyXG4gICAgLy8gIHRpbnQgLyBwaXhlbCBjb2xvclxyXG4gICAgdGhpcy5hVGludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FUaW50Q29sb3InKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRpbnRDb2xvcik7XHJcblxyXG4gICAgLy8gIGJhY2tncm91bmQgcGl4ZWwgY29sb3JcclxuICAgIHRoaXMuYUJnQ29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYUJnQ29sb3InKTtcclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYUJnQ29sb3IpO1xyXG5cclxuICAgIC8vICBUaGUgcHJvamVjdGlvbiB2ZWN0b3IgKG1pZGRsZSBvZiB0aGUgZ2FtZSB3b3JsZClcclxuICAgIHRoaXMucHJvamVjdGlvblZlY3RvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAncHJvamVjdGlvblZlY3RvcicpO1xyXG5cclxuICAgIC8vICBUaGUgb2Zmc2V0IHZlY3RvciAoY2FtZXJhIHNoYWtlKVxyXG4gICAgdGhpcy5vZmZzZXRWZWN0b3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ29mZnNldFZlY3RvcicpO1xyXG5cclxuICAgIC8vICBUaGUgVGV4dHVyZSBTYW1wbGVyXHJcbiAgICB0aGlzLnVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3VTYW1wbGVyJyk7XHJcblxyXG4gICAgLy8gIFNldCB0aGUgcHJvamVjdGlvbiB2ZWN0b3IuIERlZmF1bHRzIHRvIHRoZSBtaWRkbGUgb2YgdGhlIEdhbWUgV29ybGQsIG9uIG5lZ2F0aXZlIHkuXHJcbiAgICAvLyAgSS5lLiBpZiB0aGUgd29ybGQgaXMgODAweDYwMCB0aGVuIHRoZSBwcm9qZWN0aW9uIHZlY3RvciBpcyA0MDAgeCAtMzAwXHJcbiAgICBnbC51bmlmb3JtMmYodGhpcy5wcm9qZWN0aW9uVmVjdG9yLCB0aGlzLnJlbmRlcmVyLnByb2plY3Rpb24ueCwgdGhpcy5yZW5kZXJlci5wcm9qZWN0aW9uLnkpO1xyXG5cclxuICAgIC8vICBTZXQgdGhlIG9mZnNldCB2ZWN0b3IuXHJcbiAgICBnbC51bmlmb3JtMmYodGhpcy5vZmZzZXRWZWN0b3IsIHRoaXMucmVuZGVyZXIub2Zmc2V0LngsIHRoaXMucmVuZGVyZXIub2Zmc2V0LnkpO1xyXG5cclxuICAgIC8vICBUaGUgVmVydGV4IFBvc2l0aW9uICh4L3kpXHJcbiAgICAvLyAgMiBGTE9BVFMsIDIgKiA0ID0gOCBieXRlcy4gSW5kZXggcG9zOiAwIHRvIDdcclxuICAgIC8vICBmaW5hbCBhcmd1bWVudCA9IHRoZSBvZmZzZXQgd2l0aGluIHRoZSB2ZXJ0ZXggaW5wdXRcclxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgdmVydFNpemUsIDApO1xyXG5cclxuICAgIC8vICBUaGUgVGV4dHVyZSBDb29yZGluYXRlICh1dngvdXZ5KVxyXG4gICAgLy8gIDIgRkxPQVRTLCAyICogNCA9IDggYnl0ZXMuIEluZGV4IHBvczogOCB0byAxNVxyXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUZXh0dXJlQ29vcmQsIDIsIGdsLkZMT0FULCBmYWxzZSwgdmVydFNpemUsIDgpO1xyXG5cclxuICAgIC8vICBUZXh0dXJlIEluZGV4XHJcbiAgICAvLyAgMSBGTE9BVCwgNCBieXRlcy4gSW5kZXggcG9zOiAxNiB0byAxOVxyXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFUZXh0dXJlSW5kZXgsIDEsIGdsLkZMT0FULCBmYWxzZSwgdmVydFNpemUsIDE2KTtcclxuXHJcbiAgICAvLyAgVGludCBjb2xvclxyXG4gICAgLy8gIDQgVU5TSUdORUQgQllURVMsIDQgYnl0ZXMuIEluZGV4IHBvczogMjAgdG8gMjNcclxuICAgIC8vICBBdHRyaWJ1dGVzIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgdW5zaWduZWQgYnl0ZXMgYW5kIG5vcm1hbGl6ZWRcclxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hVGludENvbG9yLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCB2ZXJ0U2l6ZSwgMjApO1xyXG5cclxuICAgIC8vICBCYWNrZ3JvdW5kIENvbG9yXHJcbiAgICAvLyAgNCBVTlNJR05FRCBCWVRFUywgNCBieXRlcy4gSW5kZXggcG9zOiAyNCB0byAyN1xyXG4gICAgLy8gIEF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxyXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmFCZ0NvbG9yLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCB2ZXJ0U2l6ZSwgMjQpO1xyXG59O1xyXG5cclxuU2luZ2xlVGV4dHVyZUJhdGNoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVydHMsIHV2cywgdGV4dHVyZUluZGV4LCBhbHBoYSwgdGludENvbG9ycywgYmdDb2xvcnMpXHJcbntcclxuICAgIC8vICBUaGVzZSBhcmUgVHlwZWRBcnJheSBWaWV3cyBpbnRvIHRoZSB2ZXJ0aWNlcyBBcnJheUJ1ZmZlclxyXG4gICAgdmFyIGNvbG9ycyA9IHRoaXMuY29sb3JzO1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IHRoaXMucG9zaXRpb25zO1xyXG5cclxuICAgIHZhciBpID0gdGhpcy5faTtcclxuXHJcbiAgICAvLyAgVG9wIExlZnQgdmVydCAoeHksIHV2LCBjb2xvcilcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueDA7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLnkwO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDA7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy55MDtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdGV4dHVyZUluZGV4O1xyXG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLnRvcExlZnQgKyBhbHBoYTtcclxuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMudG9wTGVmdDtcclxuXHJcbiAgICAvLyAgVG9wIFJpZ2h0IHZlcnQgKHh5LCB1diwgY29sb3IpXHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngxO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MTtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngxO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTE7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcclxuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy50b3BSaWdodCArIGFscGhhO1xyXG4gICAgY29sb3JzW2krK10gPSBiZ0NvbG9ycy50b3BSaWdodDtcclxuXHJcbiAgICAvLyAgQm90dG9tIFJpZ2h0IHZlcnQgKHh5LCB1diwgY29sb3IpXHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLngyO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB2ZXJ0cy55MjtcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdXZzLngyO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueTI7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHRleHR1cmVJbmRleDtcclxuICAgIGNvbG9yc1tpKytdID0gdGludENvbG9ycy5ib3R0b21SaWdodCArIGFscGhhO1xyXG4gICAgY29sb3JzW2krK10gPSBiZ0NvbG9ycy5ib3R0b21SaWdodDtcclxuXHJcbiAgICAvLyAgQm90dG9tIExlZnQgdmVydCAoeHksIHV2LCBjb2xvcilcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdmVydHMueDM7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHZlcnRzLnkzO1xyXG4gICAgcG9zaXRpb25zW2krK10gPSB1dnMueDM7XHJcbiAgICBwb3NpdGlvbnNbaSsrXSA9IHV2cy55MztcclxuICAgIHBvc2l0aW9uc1tpKytdID0gdGV4dHVyZUluZGV4O1xyXG4gICAgY29sb3JzW2krK10gPSB0aW50Q29sb3JzLmJvdHRvbUxlZnQgKyBhbHBoYTtcclxuICAgIGNvbG9yc1tpKytdID0gYmdDb2xvcnMuYm90dG9tTGVmdDtcclxuXHJcbiAgICB0aGlzLl9pID0gaTtcclxuXHJcbiAgICB0aGlzLnNpemUrKztcclxufTtcclxuXHJcblNpbmdsZVRleHR1cmVCYXRjaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMudmVydGljZXMgPSBudWxsO1xyXG4gICAgdGhpcy5pbmRpY2VzID0gbnVsbDtcclxuICAgIHRoaXMudmlldyA9IG51bGw7XHJcblxyXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVmVydGV4UG9zaXRpb24pO1xyXG4gICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYVRleHR1cmVDb29yZCk7XHJcbiAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUluZGV4KTtcclxuICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFUaW50Q29sb3IpO1xyXG4gICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYUJnQ29sb3IpO1xyXG5cclxuICAgIGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5pbmRleEJ1ZmZlcik7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2luZ2xlVGV4dHVyZUJhdGNoO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC9iYXRjaGVzL1NpbmdsZVRleHR1cmVCYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVuZGVyZXIvd2ViZ2wvYmF0Y2hlcy9TaW5nbGVUZXh0dXJlQmF0Y2guanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ3JlYXRlRW1wdHlUZXh0dXJlID0gcmVxdWlyZSgnLi9DcmVhdGVFbXB0eVRleHR1cmUnKTtcclxuXHJcbi8qKlxyXG4qIEZyYW1lIEJ1ZmZlciBPYmplY3Qgd2l0aCBkcmF3aW5nIHF1YWQgKyBzaGFkZXJcclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVuZGVyZXIuQ2FudmFzXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEdhbWUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG52YXIgUXVhZEZCTyA9IGZ1bmN0aW9uIChyZW5kZXJlciwgcGFyZW50LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxyXG57XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgdGhpcy5nbCA9IHJlbmRlcmVyLmdsO1xyXG5cclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMudGV4dHVyZUluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLmNsaXBYID0gZnVuY3Rpb24gKHgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChyZW5kZXJlci5jbGlwVW5pdFggKiB4KSAtIDE7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2xpcFkgPSBmdW5jdGlvbiAoeSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gMSAtIChyZW5kZXJlci5jbGlwVW5pdFkgKiB5KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXI7XHJcbiAgICB0aGlzLmluZGV4QnVmZmVyO1xyXG4gICAgdGhpcy50ZXh0dXJlQnVmZmVyO1xyXG5cclxuICAgIHRoaXMudmVydGljZXM7XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlO1xyXG4gICAgdGhpcy5yZW5kZXJCdWZmZXI7XHJcbiAgICB0aGlzLmZyYW1lQnVmZmVyO1xyXG5cclxuICAgIHRoaXMucHJvZ3JhbTtcclxuICAgIHRoaXMuYVZlcnRleFBvc2l0aW9uO1xyXG4gICAgdGhpcy5hVGV4dHVyZUNvb3JkO1xyXG5cclxuICAgIHRoaXMuX25vcm1hbDtcclxuICAgIHRoaXMuX3R3aXJsO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59O1xyXG5cclxuUXVhZEZCTy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBRdWFkRkJPO1xyXG5cclxuUXVhZEZCTy5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICAvLyAgQW4gRkJPIHF1YWQgaXMgbWFkZSB1cCBvZiAyIHRyaWFuZ2xlcyAoQSBhbmQgQiBpbiB0aGUgaW1hZ2UgYmVsb3cpXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgMCA9IEJvdHRvbSBMZWZ0ICgtMSwgLTEpXHJcbiAgICAgICAgLy8gIDEgPSBCb3R0b20gUmlnaHQgKDEsIC0xKVxyXG4gICAgICAgIC8vICAyID0gVG9wIExlZnQgKC0xLCAxKVxyXG4gICAgICAgIC8vICAzID0gVG9wIFJpZ2h0ICgxLCAxKVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gIDItLS0tM1xyXG4gICAgICAgIC8vICB8XFwgIEJ8XHJcbiAgICAgICAgLy8gIHwgXFwgIHxcclxuICAgICAgICAvLyAgfCAgXFwgfFxyXG4gICAgICAgIC8vICB8IEEgXFx8XHJcbiAgICAgICAgLy8gIHwgICAgXFxcclxuICAgICAgICAvLyAgMC0tLS0xXHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMucmVuZGVyZXIud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMucmVuZGVyZXIuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KFsgMCwgMSwgMiwgMiwgMSwgMyBdKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xyXG5cclxuICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGljZXMsIGdsLkRZTkFNSUNfRFJBVyk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dHVyZUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnRleHR1cmVCdWZmZXIpO1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSBdKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICAvLyAgQ3JlYXRlIGEgdGV4dHVyZSBmb3Igb3VyIGNvbG9yIGJ1ZmZlclxyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IENyZWF0ZUVtcHR5VGV4dHVyZShnbCwgd2lkdGgsIGhlaWdodCwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vICBUaGUgRkJPJ3MgZGVwdGggYnVmZmVyXHJcbiAgICAgICAgdGhpcy5yZW5kZXJCdWZmZXIgPSBnbC5jcmVhdGVSZW5kZXJidWZmZXIoKTtcclxuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9DT01QT05FTlQxNiwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUsIDApO1xyXG5cclxuICAgICAgICAvLyAgTWF5IG5lZWQgdG8gb3B0aW9uYWxseSBiZTogZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGdsLkRFUFRIX0FUVEFDSE1FTlQsIGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cclxuICAgICAgICB2YXIgZmJTdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuXHJcbiAgICAgICAgaWYgKGZiU3RhdHVzICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKCdGcmFtZUJ1ZmZlciBFcnJvcjogJywgdGhpcy5yZW5kZXJlci5fZmJFcnJvcnNbZmJTdGF0dXNdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hhZGVyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBUaGlzIHdob2xlIGZ1bmN0aW9uIG91Z2h0IHRvIGJlIHNwbGl0IG91dCBpbnRvIHRoZSBTaGFkZXIgTWFuYWdlclxyXG4gICAgLy8gICAgc28gdGhleSBjYW4gZWFzaWx5IGNoYW5nZSB0aGUgc2hhZGVyIGJlaW5nIHVzZWQgZm9yIGFuIEZCTy5cclxuICAgIC8vICBUaGlzIGNsYXNzIHdpbGwgaGF2ZSB0byBleHBvc2UgdGhvc2Ugc2hhZGVyIGF0dHJpYnMgdGhvdWdoLlxyXG4gICAgY3JlYXRlU2hhZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBDcmVhdGUgdGhlIHF1YWQgc2hhZGVyXHJcblxyXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAgIHZhciB2ZXJ0ZXhTcmMgPSBbXHJcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcclxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7JyxcclxuXHJcbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxyXG5cclxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcclxuICAgICAgICAgICAgJyAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4dHVyZUNvb3JkOycsXHJcbiAgICAgICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVZlcnRleFBvc2l0aW9uLCAwLjAsIDEuMCk7JyxcclxuICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdmFyIGZyYWdtZW50U3JjID0gW1xyXG4gICAgICAgICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyxcclxuXHJcbiAgICAgICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxyXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCB0aW1lOycsXHJcblxyXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcclxuXHJcbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXHJcbiAgICAgICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpOycsXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHZhciB0d2lybEZyYWdtZW50U3JjID0gW1xyXG4gICAgICAgICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyxcclxuXHJcbiAgICAgICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxyXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCB0aW1lOycsXHJcblxyXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcclxuXHJcbiAgICAgICAgICAgICdjb25zdCBmbG9hdCByYWRpdXMgPSAwLjU7JyxcclxuICAgICAgICAgICAgJ2NvbnN0IGZsb2F0IGFuZ2xlID0gNS4wOycsXHJcbiAgICAgICAgICAgICdjb25zdCB2ZWMyIG9mZnNldCA9IHZlYzIoMC41LCAwLjUpOycsXHJcblxyXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxyXG4gICAgICAgICAgICAnICAgdmVjMiBjb29yZCA9IHZUZXh0dXJlQ29vcmQgLSBvZmZzZXQ7JyxcclxuICAgICAgICAgICAgJyAgIGZsb2F0IGRpc3RhbmNlID0gbGVuZ3RoKGNvb3JkKTsnLFxyXG5cclxuICAgICAgICAgICAgJyAgIGlmIChkaXN0YW5jZSA8IHJhZGl1cykgeycsXHJcbiAgICAgICAgICAgICcgICAgICAgZmxvYXQgcmF0aW8gPSAocmFkaXVzIC0gZGlzdGFuY2UpIC8gcmFkaXVzOycsXHJcbiAgICAgICAgICAgICcgICAgICAgZmxvYXQgYW5nbGVNb2QgPSByYXRpbyAqIHJhdGlvICogYW5nbGU7JyxcclxuICAgICAgICAgICAgJyAgICAgICBmbG9hdCBzID0gc2luKGFuZ2xlTW9kKTsnLFxyXG4gICAgICAgICAgICAnICAgICAgIGZsb2F0IGMgPSBjb3MoYW5nbGVNb2QpOycsXHJcbiAgICAgICAgICAgICcgICAgICAgY29vcmQgPSB2ZWMyKGNvb3JkLnggKiBjIC0gY29vcmQueSAqIHMsIGNvb3JkLnggKiBzICsgY29vcmQueSAqIGMpOycsXHJcbiAgICAgICAgICAgICcgICB9JyxcclxuXHJcbiAgICAgICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIGNvb3JkICsgb2Zmc2V0KTsnLFxyXG4gICAgICAgICAgICAnfSdcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB2YXIgcGxhc21hRnJhZ21lbnRTcmMgPSBbXHJcblxyXG4gICAgICAgICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyxcclxuXHJcbiAgICAgICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxyXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCB0aW1lOycsXHJcblxyXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcclxuXHJcbiAgICAgICAgICAgICcvLyBPbGRza29vbCBwbGFzbSBzaGFkZXIuIChjKSBWaWN0b3IgS29yc3VuLCBiaXRla2FzQGdtYWlsLmNvbTsgMTk5Ni0yMDEzLicsXHJcbiAgICAgICAgICAgICcvLycsXHJcbiAgICAgICAgICAgICcvLyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIENDIExpY2Vuc2UuJyxcclxuXHJcbiAgICAgICAgICAgICcvLy0tLS0tLS0tLS0tLS0tLS0nLFxyXG4gICAgICAgICAgICAnY29uc3QgaW50IHBzID0gMjsgLy8gdXNlIHZhbHVlcyA+IDEuLjEwIGZvciBvbGRza29vbCcsXHJcbiAgICAgICAgICAgICdjb25zdCB2ZWMyIHJlc29sdXRpb24gPSB2ZWMyKDEyODAuMCwgNzIwLjApOycsXHJcbiAgICAgICAgICAgICcvLy0tLS0tLS0tLS0tLS0tLS0nLFxyXG5cclxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcclxuXHJcbiAgICAgICAgICAgICdmbG9hdCB4ID0gZ2xfRnJhZ0Nvb3JkLnggLyByZXNvbHV0aW9uLnggKiAxMjgwLjA7JyxcclxuICAgICAgICAgICAgJ2Zsb2F0IHkgPSBnbF9GcmFnQ29vcmQueSAvIHJlc29sdXRpb24ueSAqIDcyMC4wOycsXHJcblxyXG4gICAgICAgICAgICAnaWYgKHBzID4gMCknLFxyXG4gICAgICAgICAgICAneycsXHJcbiAgICAgICAgICAgICd4ID0gZmxvYXQoaW50KHggLyBmbG9hdChwcykpICogcHMpOycsXHJcbiAgICAgICAgICAgICd5ID0gZmxvYXQoaW50KHkgLyBmbG9hdChwcykpICogcHMpOycsXHJcbiAgICAgICAgICAgICd9JyxcclxuXHJcbiAgICAgICAgICAgICdmbG9hdCBtb3YwID0geCt5K3Npbih0aW1lKSoxMC4rc2luKHgvOTAuKSo3MC4rdGltZSoyLjsnLFxyXG4gICAgICAgICAgICAnZmxvYXQgbW92MSA9IChtb3YwIC8gNS4gKyBzaW4obW92MCAvIDMwLikpLyAxMC4gKyB0aW1lICogMy47JyxcclxuICAgICAgICAgICAgJ2Zsb2F0IG1vdjIgPSBtb3YxICsgc2luKG1vdjEpKjUuICsgdGltZSoxLjA7JyxcclxuICAgICAgICAgICAgJ2Zsb2F0IGNsMSA9IHNpbihzaW4obW92MS80LiArIHRpbWUpK21vdjEpOycsXHJcbiAgICAgICAgICAgICdmbG9hdCBjMSA9IGNsMSArbW92Mi8yLi1tb3YxLW1vdjIrdGltZTsnLFxyXG4gICAgICAgICAgICAnZmxvYXQgYzIgPSBzaW4oYzErc2luKG1vdjAvMTAwLit0aW1lKStzaW4oeS81Ny4rdGltZS81MC4pK3NpbigoeCt5KS8yMDAuKSoyLik7JyxcclxuICAgICAgICAgICAgJ2Zsb2F0IGMzID0gYWJzKHNpbihjMitjb3MoKG1vdjErbW92MitjMikgLyAxMC4pK2NvcygobW92MikgLyAxMC4pK3Npbih4LzgwLikpKTsnLFxyXG5cclxuICAgICAgICAgICAgJ2Zsb2F0IGRjID0gZmxvYXQoMTYtcHMpOycsXHJcblxyXG4gICAgICAgICAgICAnaWYgKHBzID4gMCknLFxyXG4gICAgICAgICAgICAneycsXHJcbiAgICAgICAgICAgICdjbDEgPSBmbG9hdChpbnQoY2wxKmRjKSkvZGM7JyxcclxuICAgICAgICAgICAgJ2MyID0gZmxvYXQoaW50KGMyKmRjKSkvZGM7JyxcclxuICAgICAgICAgICAgJ2MzID0gZmxvYXQoaW50KGMzKmRjKSkvZGM7JyxcclxuICAgICAgICAgICAgJ30nLFxyXG5cclxuICAgICAgICAgICAgJ2dsX0ZyYWdDb2xvciA9IHZlYzQoY2wxLCBjMiwgYzMsIDEuMCk7JyxcclxuXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICAvLyAgVGhpcyBjb21waWxlcywgYXR0YWNoZXMgYW5kIGxpbmtzIHRoZSBzaGFkZXJcclxuICAgICAgICB0aGlzLl9ub3JtYWwgPSB0aGlzLnJlbmRlcmVyLmNvbXBpbGVQcm9ncmFtKHZlcnRleFNyYywgZnJhZ21lbnRTcmMpO1xyXG4gICAgICAgIC8vIHRoaXMuX3R3aXJsID0gdGhpcy5yZW5kZXJlci5jb21waWxlUHJvZ3JhbSh2ZXJ0ZXhTcmMsIHR3aXJsRnJhZ21lbnRTcmMpO1xyXG4gICAgICAgIHRoaXMuX3R3aXJsID0gdGhpcy5yZW5kZXJlci5jb21waWxlUHJvZ3JhbSh2ZXJ0ZXhTcmMsIHBsYXNtYUZyYWdtZW50U3JjKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5fbm9ybWFsO1xyXG5cclxuICAgICAgICB0aGlzLmFWZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpO1xyXG4gICAgICAgIHRoaXMuYVRleHR1cmVDb29yZCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmQnKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICh4LCB5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSAwOyB9XHJcblxyXG4gICAgICAgIGlmICh4ICE9PSB0aGlzLl94IHx8IHkgIT09IHRoaXMuX3kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl94ID0geDtcclxuICAgICAgICAgICAgdGhpcy5feSA9IHk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTaXplOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcclxuICAgIHtcclxuICAgICAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCkgeyB3aWR0aCA9IHRoaXMucmVuZGVyZXIud2lkdGg7IH1cclxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQpIHsgaGVpZ2h0ID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7IH1cclxuXHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLl93aWR0aCB8fCBoZWlnaHQgIT09IHRoaXMuX2hlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmVydHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVZlcnRzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5feDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMuX3k7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vICBCb3R0b20gTGVmdFxyXG4gICAgICAgIHRoaXMudmVydGljZXNbMF0gPSB0aGlzLmNsaXBYKHgpO1xyXG4gICAgICAgIHRoaXMudmVydGljZXNbMV0gPSB0aGlzLmNsaXBZKHkgKyBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyAgQm90dG9tIFJpZ2h0XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1syXSA9IHRoaXMuY2xpcFgoeCArIHdpZHRoKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzWzNdID0gdGhpcy5jbGlwWSh5ICsgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gIFRvcCBMZWZ0XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s0XSA9IHRoaXMuY2xpcFgoeCk7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s1XSA9IHRoaXMuY2xpcFkoeSk7XHJcblxyXG4gICAgICAgIC8vICBUb3AgUmlnaHRcclxuICAgICAgICB0aGlzLnZlcnRpY2VzWzZdID0gdGhpcy5jbGlwWCh4ICsgd2lkdGgpO1xyXG4gICAgICAgIHRoaXMudmVydGljZXNbN10gPSB0aGlzLmNsaXBZKHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG5cclxuICAgICAgICAvLyAgRkJPIHRleHR1cmVzIGFsd2F5cyB1c2UgaW5kZXggemVyb1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIudGV4dHVyZUFycmF5WzBdID0gdGhpcy50ZXh0dXJlO1xyXG4gICAgfSxcclxuXHJcbiAgICBiaW5kU2hhZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xyXG5cclxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICBnbC51bmlmb3JtMWkoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1U2FtcGxlcicpLCAwKTtcclxuICAgICAgICBnbC51bmlmb3JtMWYoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd0aW1lJyksIHRoaXMucGFyZW50LnN5cy5tYWlubG9vcC5mcmFtZURlbHRhKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hVGV4dHVyZUNvb3JkKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmFWZXJ0ZXhQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmVydGljZXMpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnRleHR1cmVCdWZmZXIpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hVGV4dHVyZUNvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgZGVzdGluYXRpb25CdWZmZXIgTVVTVCBiZSBzZXQsIGV2ZW4gaWYganVzdCB0byAnbnVsbCdcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGRlc3RpbmF0aW9uQnVmZmVyKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAgIC8vICBTZXQgdGhlIGZyYW1lYnVmZmVyIHRvIHJlbmRlciB0b1xyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZGVzdGluYXRpb25CdWZmZXIpO1xyXG5cclxuICAgICAgICAvLyAgQmluZCB0aGUgdGV4dHVyZSB3ZSByZW5kZXJlZCB0bywgZm9yIHJlYWRpbmcsIGFsd2F5cyBURVhUVVJFMFxyXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XHJcblxyXG4gICAgICAgIC8vICBUaGUgc2hhZGVyIHRoYXQgd2lsbCByZWFkIGZyb20gdGhlIGZibyB0ZXh0dXJlXHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIodGhpcy5wcm9ncmFtKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZFNoYWRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XHJcblxyXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDYsIGdsLlVOU0lHTkVEX1NIT1JULCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kcmF3Q291bnQrKztcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgLy8gIFRPRE8hXHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFF1YWRGQk8ucHJvdG90eXBlLCB7XHJcblxyXG4gICAgeDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5feClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgeToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5feSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgd2lkdGg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl93aWR0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmVydHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGhlaWdodDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9oZWlnaHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWFkRkJPO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZW5kZXJlci93ZWJnbC91dGlscy9RdWFkRkJPLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZW5kZXJlci93ZWJnbC91dGlscy9RdWFkRkJPLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncycpO1xyXG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xyXG5cclxuLyoqXHJcbiogQSBCYXNlIFN0YXRlIENsYXNzLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5TdGF0ZVxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qL1xyXG52YXIgU3RhdGUgPSBmdW5jdGlvbiAoY29uZmlnKVxyXG57XHJcbiAgICAvLyAgVGhlIHByb3BlcnRpZXMgYSBTdGF0ZSAqbXVzdCogaGF2ZSwgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCB3aXRob3V0IGJyZWFraW5nIGl0OlxyXG5cclxuICAgIHRoaXMuZ2FtZSA9IG51bGw7XHJcblxyXG4gICAgLy8gIE1heWJlIGp1c3QgYW4gb2JqZWN0PyBEb2Vzbid0IGhhdmUgdG8gaW5zdGFudGlhdGUgSSBkb24ndCB0aGluayAuLi5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcywgY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLnN5cyA9IG5ldyBTeXN0ZW1zKHRoaXMsIGNvbmZpZyk7XHJcblxyXG4gICAgLy8gIFJlZmVyZW5jZSB0byBzeXMuY2hpbGRyZW4sIHNldCBkdXJpbmcgc3lzLmluaXQgb25seVxyXG4gICAgdGhpcy5jaGlsZHJlbjtcclxufTtcclxuXHJcblN0YXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXRlO1xyXG5cclxuU3RhdGUucHJvdG90eXBlID0ge1xyXG5cclxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcclxuICAgIHByZVVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXHJcbiAgICBwb3N0VXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1N0YXRlLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XHJcbnZhciBTdGF0ZSA9IHJlcXVpcmUoJy4vU3RhdGUnKTtcclxudmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncycpO1xyXG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xyXG52YXIgR2V0T2JqZWN0VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9HZXRPYmplY3RWYWx1ZScpO1xyXG4vLyB2YXIgTG9hZGVyRXZlbnQgPSByZXF1aXJlKCcuLi9sb2FkZXIvZXZlbnRzLycpO1xyXG5cclxuLyoqXHJcbiogVGhlIFN0YXRlIE1hbmFnZXIgaXMgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcsIHNldHRpbmcgdXAgYW5kIHN3aXRjaGluZyBnYW1lIHN0YXRlcy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuU3RhdGVNYW5hZ2VyXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG52YXIgU3RhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKGdhbWUsIHN0YXRlQ29uZmlnKVxyXG57XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG5cclxuICAgIC8vICBFdmVyeXRoaW5nIGtlcHQgaW4gaGVyZVxyXG4gICAgdGhpcy5rZXlzID0ge307XHJcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG5cclxuICAgIC8vICBPbmx5IGFjdGl2ZSBzdGF0ZXMgYXJlIGtlcHQgaW4gaGVyZVxyXG4gICAgdGhpcy5hY3RpdmUgPSBbXTtcclxuXHJcbiAgICB0aGlzLl9wZW5kaW5nID0gW107XHJcblxyXG4gICAgaWYgKHN0YXRlQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlQ29uZmlnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVDb25maWcubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBUaGUgaSA9PT0gMCBwYXJ0IGp1c3Qgc3RhcnRzIHRoZSBmaXJzdCBTdGF0ZSBnaXZlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWdbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiAoaSA9PT0gMClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlQ29uZmlnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblN0YXRlTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGF0ZU1hbmFnZXI7XHJcblxyXG5TdGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaGUgQm9vdCBoYW5kbGVyIGlzIGNhbGxlZCBieSBQaGFzZXIuR2FtZSB3aGVuIGl0IGZpcnN0IHN0YXJ0cyB1cC5cclxuICAgICogVGhlIHJlbmRlcmVyIGlzIGF2YWlsYWJsZSBieSBub3cuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlN0YXRlTWFuYWdlciNib290XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgYm9vdDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLmdhbWUub25QYXVzZS5hZGQodGhpcy5wYXVzZSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLm9uUmVzdW1lLmFkZCh0aGlzLnJlc3VtZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3BlbmRpbmdbaV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZChlbnRyeS5rZXksIGVudHJ5LnN0YXRlLCBlbnRyeS5hdXRvU3RhcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIENsZWFyIHRoZSBwZW5kaW5nIGxpc3RcclxuICAgICAgICB0aGlzLl9wZW5kaW5nID0gW107XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEtleTogZnVuY3Rpb24gKGtleSwgc3RhdGVDb25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHsga2V5ID0gJ2RlZmF1bHQnOyB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gc3RhdGVDb25maWcuc2V0dGluZ3Mua2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnICYmIHN0YXRlQ29uZmlnLmhhc093blByb3BlcnR5KCdrZXknKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleSA9IHN0YXRlQ29uZmlnLmtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBCeSB0aGlzIHBvaW50IGl0J3MgZWl0aGVyICdkZWZhdWx0JyBvciBleHRyYWN0ZWQgZnJvbSB0aGUgU3RhdGVcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGEgU3RhdGUgd2l0aCBkdXBsaWNhdGUga2V5OiAnICsga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIGEgbmV3IFN0YXRlIGludG8gdGhlIFN0YXRlTWFuYWdlci4gWW91IG11c3QgZ2l2ZSBlYWNoIFN0YXRlIGEgdW5pcXVlIGtleSBieSB3aGljaCB5b3UnbGwgaWRlbnRpZnkgaXQuXHJcbiAgICAqIFRoZSBTdGF0ZSBjYW4gYmUgZWl0aGVyIGEgUGhhc2VyLlN0YXRlIG9iamVjdCAob3IgYW4gb2JqZWN0IHRoYXQgZXh0ZW5kcyBpdCksIGEgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3Qgb3IgYSBmdW5jdGlvbi5cclxuICAgICogSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiBhIG5ldyBzdGF0ZSBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGJ5IGNhbGxpbmcgaXQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlN0YXRlTWFuYWdlciNhZGRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEEgdW5pcXVlIGtleSB5b3UgdXNlIHRvIHJlZmVyZW5jZSB0aGlzIHN0YXRlLCBpLmUuIFwiTWFpbk1lbnVcIiwgXCJMZXZlbDFcIi5cclxuICAgICogQHBhcmFtIHtQaGFzZXIuU3RhdGV8b2JqZWN0fGZ1bmN0aW9ufSBzdGF0ZSAgLSBUaGUgc3RhdGUgeW91IHdhbnQgdG8gc3dpdGNoIHRvLlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthdXRvU3RhcnQ9ZmFsc2VdICAtIElmIHRydWUgdGhlIFN0YXRlIHdpbGwgYmUgc3RhcnRlZCBpbW1lZGlhdGVseSBhZnRlciBhZGRpbmcgaXQuXHJcbiAgICAqL1xyXG4gICAgYWRkOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZywgYXV0b1N0YXJ0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChhdXRvU3RhcnQgPT09IHVuZGVmaW5lZCkgeyBhdXRvU3RhcnQgPSBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9wZW5kaW5nLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlQ29uZmlnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiBhdXRvU3RhcnRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyIG5vdCB5ZXQgYm9vdGVkLCBhZGRpbmcgdG8gbGlzdCcsIHRoaXMuX3BlbmRpbmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuZ2V0S2V5KGtleSwgc3RhdGVDb25maWcpO1xyXG5cclxuICAgICAgICB2YXIgbmV3U3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBpbnN0YW5jZScsIGtleSk7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIHN0YXRlQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnb2JqZWN0JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gb2JqZWN0Jywga2V5KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlQ29uZmlnLmtleSA9IGtleTtcclxuXHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZUZyb21PYmplY3Qoa2V5LCBzdGF0ZUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gZnVuY3Rpb24nLCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uKGtleSwgc3RhdGVDb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBuZXdTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZXMucHVzaChuZXdTdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdXRvU3RhcnQgfHwgbmV3U3RhdGUuc2V0dGluZ3MuYWN0aXZlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5pc0Jvb3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlOiBmdW5jdGlvbiAoa2V5LCBuZXdTdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBuZXdTdGF0ZS5nYW1lID0gdGhpcy5nYW1lO1xyXG5cclxuICAgICAgICBuZXdTdGF0ZS5zZXR0aW5ncy5rZXkgPSBrZXk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlU3RhdGVGcm9tT2JqZWN0OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgU3RhdGUoc3RhdGVDb25maWcpO1xyXG5cclxuICAgICAgICBuZXdTdGF0ZS5nYW1lID0gdGhpcy5nYW1lO1xyXG5cclxuICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR1cENhbGxiYWNrcyhuZXdTdGF0ZSwgc3RhdGVDb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyb21GdW5jdGlvbjogZnVuY3Rpb24gKGtleSwgc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gbmV3IHN0YXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZSBpbnN0YW5jZW9mIFN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVGcm9tSW5zdGFuY2Uoa2V5LCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyhuZXdTdGF0ZSwga2V5KTtcclxuICAgICAgICAgICAgbmV3U3RhdGUuc3lzID0gbmV3IFN5c3RlbXMobmV3U3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgRGVmYXVsdCByZXF1aXJlZCBmdW5jdGlvbnNcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dXBDYWxsYmFja3MobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0dXBDYWxsYmFja3M6IGZ1bmN0aW9uIChuZXdTdGF0ZSwgc3RhdGVDb25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHsgc3RhdGVDb25maWcgPSBuZXdTdGF0ZTsgfVxyXG5cclxuICAgICAgICAvLyAgRXh0cmFjdCBjYWxsYmFja3Mgb3Igc2V0IE5PT1BcclxuXHJcbiAgICAgICAgbmV3U3RhdGUuaW5pdCA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAnaW5pdCcsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLnByZWxvYWQgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3ByZWxvYWQnLCBOT09QKTtcclxuICAgICAgICBuZXdTdGF0ZS5jcmVhdGUgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ2NyZWF0ZScsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLnNodXRkb3duID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdzaHV0ZG93bicsIE5PT1ApO1xyXG5cclxuICAgICAgICBuZXdTdGF0ZS5wcmVVcGRhdGUgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3ByZVVwZGF0ZScsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLnVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAndXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucG9zdFVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncG9zdFVwZGF0ZScsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLnJlbmRlciA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncmVuZGVyJywgTk9PUCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcjogZnVuY3Rpb24gKG5ld1N0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB4ID0gbmV3U3RhdGUuc2V0dGluZ3MueDtcclxuICAgICAgICB2YXIgeSA9IG5ld1N0YXRlLnNldHRpbmdzLnk7XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aCA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aCA9IHRoaXMuZ2FtZS5jb25maWcud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodCA9IHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gbmV3U3RhdGUuc2V0dGluZ3Mud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodDtcclxuXHJcbiAgICAgICAgbmV3U3RhdGUuc3lzLmZibyA9IHRoaXMuZ2FtZS5yZW5kZXJlci5jcmVhdGVGQk8obmV3U3RhdGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXRlSW5kZXg6IGZ1bmN0aW9uIChzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5kZXhPZihzdGF0ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFjdGl2ZVN0YXRlSW5kZXg6IGZ1bmN0aW9uIChzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLnN0YXRlID09PSBzdGF0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlW2ldLmluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzQWN0aXZlOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChzdGF0ZSAmJiBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUuaW5kZXhPZihzdGF0ZSkgIT09IC0xKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIGlmIG5vdCBib290ZWQsIHRoZW4gcHV0IHN0YXRlIGludG8gYSBob2xkaW5nIHBhdHRlcm5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5pc0Jvb3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIgbm90IHlldCBib290ZWQsIHNldHRpbmcgYXV0b1N0YXJ0IG9uIHBlbmRpbmcgbGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9wZW5kaW5nW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5rZXkgPT09IGtleSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5hdXRvU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBBbHJlYWR5IHN0YXJ0ZWQ/IE5vdGhpbmcgbW9yZSB0byBkbyBoZXJlIC4uLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZShrZXkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyAgKyBhcmd1bWVudHNcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmluaXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmluaXQuY2FsbChzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wcmVsb2FkICYmIHN0YXRlLnN5cy5sb2FkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubG9hZC5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnByZWxvYWQuY2FsbChzdGF0ZSwgdGhpcy5nYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgSXMgdGhlIGxvYWRlciBlbXB0eT9cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubG9hZC5saXN0LnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENyZWF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFN0YXJ0IHRoZSBsb2FkZXIgZ29pbmcgYXMgd2UgaGF2ZSBzb21ldGhpbmcgaW4gdGhlIHF1ZXVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLmV2ZW50cy5vbmNlKCdMT0FERVJfQ09NUExFVEVfRVZFTlQnLCB0aGlzLmxvYWRDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBObyBwcmVsb2FkPyBUaGVuIHRoZXJlIHdhcyBub3RoaW5nIHRvIGxvYWQgZWl0aGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRDb21wbGV0ZTogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGV2ZW50LmxvYWRlci5zdGF0ZTtcclxuXHJcbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB0byBkbyBsb2FkLXVwZGF0ZSBvbmUgbGFzdCB0aW1lIGJlZm9yZSBzdGF0ZSBpcyBzZXQgdG8gX2NyZWF0ZWRcclxuXHJcbiAgICAgICAgLy8gIFN0b3AgZG9pbmcgdGhpcyAuLi5cclxuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoJ2xvYWRVcGRhdGUnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvYWRVcGRhdGUuY2FsbChzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnRDcmVhdGU6IGZ1bmN0aW9uIChzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhdGUuY3JlYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUuY3JlYXRlLmNhbGwoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEluc2VydCBhdCB0aGUgY29ycmVjdCBpbmRleCwgb3IgaXQganVzdCBhbGwgZ29lcyB3cm9uZyA6KVxyXG5cclxuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0U3RhdGVJbmRleChzdGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlLnB1c2goeyBpbmRleDogaSwgc3RhdGU6IHN0YXRlIH0pO1xyXG5cclxuICAgICAgICAvLyAgU29ydCB0aGUgJ2FjdGl2ZScgYXJyYXkgYmFzZWQgb24gdGhlIGluZGV4IHByb3BlcnR5XHJcbiAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRTdGF0ZXMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnN5cy51cGRhdGVzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGF1c2U6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVTdGF0ZUluZGV4KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRTdGF0ZXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzb3J0U3RhdGVzOiBmdW5jdGlvbiAoc3RhdGVBLCBzdGF0ZUIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFNvcnQgZGVzY2VuZGluZ1xyXG4gICAgICAgIGlmIChzdGF0ZUEuaW5kZXggPCBzdGF0ZUIuaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlQS5pbmRleCA+IHN0YXRlQi5pbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBTZWUgaWYgd2UgY2FuIHJlZHVjZSB0aGlzIGRvd24gdG8ganVzdCB1cGRhdGUgYW5kIHJlbmRlclxyXG5cclxuICAgIHN0ZXA6IGZ1bmN0aW9uICh0aW1lc3RhbXApXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN5cy5tYWlubG9vcC5ydW5uaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RlcCh0aW1lc3RhbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKlxyXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnByZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5wcmVVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAvLyAgSW52b2tlIFN0YXRlIE1haW4gTG9vcCBoZXJlIC0gdXBkYXRpbmcgYWxsIG9mIGl0cyBzeXN0ZW1zICh0d2VlbnMsIHBoeXNpY3MsIGV0YylcclxuXHJcbiAgICAgICAgICAgIC8vICBUaGlzIHNob3VsZG4ndCBiZSBjYWxsZWQgaWYgdGhlIFN0YXRlIGlzIHN0aWxsIGxvYWRpbmdcclxuICAgICAgICAgICAgLy8gIEhhdmUgYSBTdGF0ZS5TVEFUVVMgY29uc3QgaW4gdGhlIFNldHRpbmdzLCBkaWN0YXRpbmcgd2hhdCBpcyBnb2luZyBvblxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwb3N0VXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnBvc3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUucG9zdFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICBDYW4gcHV0IGFsbCBraW5kcyBvZiBvdGhlciBjaGVja3MgaW4gaGVyZSwgbGlrZSBNYWluTG9vcCwgRlBTLCBldGMuXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuc2V0dGluZ3MudmlzaWJsZSB8fCBzdGF0ZS5zeXMuY29sb3IuYWxwaGEgPT09IDAgfHwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcihzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICovXHJcblxyXG4gICAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIChyZW5kZXJlciwgc3RhdGUsIGludGVycG9sYXRpb25QZXJjZW50YWdlKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBQb3B1bGF0ZXMgdGhlIGRpc3BsYXkgbGlzdFxyXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihyZW5kZXJlciwgY2hpbGQsIGludGVycG9sYXRpb25QZXJjZW50YWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZU1hbmFnZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N0YXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGVNYW5hZ2VyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgcXVpY2sgd2F5IHRvIGNyZWF0ZSBtYW55IGNvbW1vbiBnYW1lIG9iamVjdHMuIFRoZSBGYWN0b3J5IGlzIG93bmVkIGJ5IHRoZSBTdGF0ZS5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG5cclxudmFyIEdhbWVPYmplY3RGYWN0b3J5ID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgc3RhdGU6IG51bGxcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RGYWN0b3J5IGluc3RhbmNlIGZvciBTdGF0ZScpO1xyXG5cclxuICAgIEdhbWVPYmplY3RGYWN0b3J5LnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxyXG5cclxuICAgIHJldHVybiBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdEZhY3RvcnksIHRydWUpO1xyXG5cclxuICAgIC8vIHJldHVybiBHYW1lT2JqZWN0RmFjdG9yeTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vbG9hZGVyL2NvbnN0Jyk7XHJcbnZhciBCYXNlTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vbG9hZGVyL0Jhc2VMb2FkZXInKTtcclxudmFyIEltYWdlRmlsZSA9IHJlcXVpcmUoJy4uLy4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlJyk7XHJcbnZhciBKU09ORmlsZSA9IHJlcXVpcmUoJy4uLy4uL2xvYWRlci9maWxldHlwZXMvSlNPTkZpbGUnKTtcclxudmFyIEF0bGFzSlNPTkZpbGUgPSByZXF1aXJlKCcuLi8uLi9sb2FkZXIvZmlsZXR5cGVzL0F0bGFzSlNPTkZpbGUnKTtcclxudmFyIE51bWJlckFycmF5ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXJyYXkvTnVtYmVyQXJyYXknKTtcclxuXHJcbnZhciBMb2FkZXIgPSBmdW5jdGlvbiAoc3RhdGUpXHJcbntcclxuICAgIEJhc2VMb2FkZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcclxuICAgICogQHByb3RlY3RlZFxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLl9tdWx0aWxpc3QgPSB7fTtcclxufTtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VMb2FkZXIucHJvdG90eXBlKTtcclxuTG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlcjtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUuaW1hZ2UgPSBmdW5jdGlvbiAoa2V5LCB1cmwpXHJcbntcclxuICAgIHZhciBmaWxlID0gbmV3IEltYWdlRmlsZShrZXksIHVybCwgdGhpcy5wYXRoKTtcclxuXHJcbiAgICB0aGlzLmFkZEZpbGUoZmlsZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5Mb2FkZXIucHJvdG90eXBlLmpzb24gPSBmdW5jdGlvbiAoa2V5LCB1cmwpXHJcbntcclxuICAgIHZhciBmaWxlID0gbmV3IEpTT05GaWxlKGtleSwgdXJsLCB0aGlzLnBhdGgpO1xyXG5cclxuICAgIHRoaXMuYWRkRmlsZShmaWxlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUuYXRsYXMgPSBmdW5jdGlvbiAoa2V5LCB0ZXh0dXJlVVJMLCBhdGxhc1VSTClcclxue1xyXG4gICAgdmFyIGZpbGUgPSBuZXcgQXRsYXNKU09ORmlsZShrZXksIHRleHR1cmVVUkwsIGF0bGFzVVJMLCB0aGlzLnBhdGgpO1xyXG5cclxuICAgIHRoaXMuYWRkRmlsZShmaWxlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUubXVsdGlhdGxhcyA9IGZ1bmN0aW9uIChrZXksIHRleHR1cmVVUkxzLCBhdGxhc1VSTHMpXHJcbntcclxuICAgIGlmICh0eXBlb2YgdGV4dHVyZVVSTHMgPT09ICdudW1iZXInKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IHRleHR1cmVVUkxzO1xyXG5cclxuICAgICAgICB0ZXh0dXJlVVJMcyA9IE51bWJlckFycmF5KDAsIHRvdGFsLCBrZXkgKyAnLScsICcucG5nJyk7XHJcbiAgICAgICAgYXRsYXNVUkxzID0gTnVtYmVyQXJyYXkoMCwgdG90YWwsIGtleSArICctJywgJy5qc29uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRleHR1cmVVUkxzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHR1cmVVUkxzID0gWyB0ZXh0dXJlVVJMcyBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGF0bGFzVVJMcykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdGxhc1VSTHMgPSBbIGF0bGFzVVJMcyBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB2YXIgbXVsdGlLZXk7XHJcblxyXG4gICAgdGhpcy5fbXVsdGlsaXN0W2tleV0gPSBbXTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGV4dHVyZVVSTHMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbXVsdGlLZXkgPSAnX01BX0lNR18nICsga2V5ICsgJ18nICsgaS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEZpbGUobmV3IEltYWdlRmlsZShtdWx0aUtleSwgdGV4dHVyZVVSTHNbaV0sIHRoaXMucGF0aCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9tdWx0aWxpc3Rba2V5XS5wdXNoKG11bHRpS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXRsYXNVUkxzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIG11bHRpS2V5ID0gJ19NQV9KU09OXycgKyBrZXkgKyAnXycgKyBpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRmlsZShuZXcgSlNPTkZpbGUobXVsdGlLZXksIGF0bGFzVVJMc1tpXSwgdGhpcy5wYXRoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX211bHRpbGlzdFtrZXldLnB1c2gobXVsdGlLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gIFRoZSBMb2FkZXIgaGFzIGZpbmlzaGVkXHJcbkxvYWRlci5wcm90b3R5cGUucHJvY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgaWYgKHRoaXMuc3RvcmFnZS5zaXplID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgVGhlIGdsb2JhbCBUZXh0dXJlIE1hbmFnZXJcclxuICAgIHZhciB0ZXh0dXJlcyA9IHRoaXMuc3RhdGUuc3lzLnRleHR1cmVzO1xyXG5cclxuICAgIC8vICBQcm9jZXNzIG11bHRpYXRsYXMgZ3JvdXBzIGZpcnN0XHJcblxyXG4gICAgdmFyIGZpbGU7XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuX211bHRpbGlzdClcclxuICAgIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgIHZhciBpbWFnZXMgPSBbXTtcclxuICAgICAgICB2YXIga2V5cyA9IHRoaXMuX211bHRpbGlzdFtrZXldO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlID0gdGhpcy5zdG9yYWdlLmdldCgna2V5Jywga2V5c1tpXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMucHVzaChmaWxlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsZS50eXBlID09PSAnanNvbicpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGZpbGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZShmaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIERvIHdlIGhhdmUgZXZlcnl0aGluZyBuZWVkZWQ/XHJcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggKyBkYXRhLmxlbmd0aCA9PT0ga2V5cy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgWXVwLCBhZGQgdGhlbSB0byB0aGUgVGV4dHVyZSBNYW5hZ2VyXHJcblxyXG4gICAgICAgICAgICAvLyAgSXMgdGhlIGRhdGEgSlNPTiBIYXNoIG9yIEpTT04gQXJyYXk/XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbMF0uZnJhbWVzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZXMuYWRkQXRsYXNKU09OQXJyYXkoa2V5LCBpbWFnZXMsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZXMuYWRkQXRsYXNKU09OSGFzaChrZXksIGltYWdlcywgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdG9yYWdlLmVhY2goZnVuY3Rpb24gKGZpbGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHR1cmVzLmFkZEltYWdlKGZpbGUua2V5LCBmaWxlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdhdGxhc2pzb24nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVBID0gZmlsZS5maWxlQTtcclxuICAgICAgICAgICAgdmFyIGZpbGVCID0gZmlsZS5maWxlQjtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlQS50eXBlID09PSAnaW1hZ2UnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlcy5hZGRBdGxhcyhmaWxlQS5rZXksIGZpbGVBLmRhdGEsIGZpbGVCLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZXMuYWRkQXRsYXMoZmlsZUIua2V5LCBmaWxlQi5kYXRhLCBmaWxlQS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdqc29uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGZpbGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gTXkgdGhhbmtzIHRvIElzYWFjIFN1a2luIGZvciBjcmVhdGluZyBNYWluTG9vcC5qcywgb24gd2hpY2ggbG90cyBvZiB0aGlzIGlzIGJhc2VkLlxyXG5cclxudmFyIE1haW5Mb29wID0gZnVuY3Rpb24gKHN0YXRlLCBmcmFtZXJhdGUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGVcclxuICAgICovXHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cclxuICAgICovXHJcbiAgICB0aGlzLmdhbWUgPSBzdGF0ZS5nYW1lO1xyXG5cclxuICAgIC8vIFRoZSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0byBzaW11bGF0ZSBlYWNoIHRpbWUgdXBkYXRlKCkgcnVucy5cclxuICAgIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIHRoaXMucGh5c2ljc1N0ZXAgPSAxIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXHJcbiAgICAvLyBTZWUgdGhlIGNvbW1lbnRzIGluc2lkZSBhbmltYXRlKCkgZm9yIGRldGFpbHMuXHJcbiAgICB0aGlzLmZyYW1lRGVsdGEgPSAwO1xyXG5cclxuICAgIC8vIFRoZSB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzIG9mIHRoZSBsYXN0IHRpbWUgdGhlIG1haW4gbG9vcCB3YXMgcnVuLlxyXG4gICAgLy8gVXNlZCB0byBjb21wdXRlIHRoZSB0aW1lIGVsYXBzZWQgYmV0d2VlbiBmcmFtZXMuXHJcbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XHJcblxyXG4gICAgLy8gQW4gZXhwb25lbnRpYWwgbW92aW5nIGF2ZXJhZ2Ugb2YgdGhlIGZyYW1lcyBwZXIgc2Vjb25kLlxyXG4gICAgdGhpcy5mcHMgPSA2MDtcclxuXHJcbiAgICAvLyBUaGUgdGltZXN0YW1wIChpbiBtaWxsaXNlY29uZHMpIG9mIHRoZSBsYXN0IHRpbWUgdGhlIGBmcHNgIG1vdmluZ1xyXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cclxuICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cclxuICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XHJcbiAgICAvLyByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXMgaGVsZCBleHRlcm5hbGx5IHNvIHRoYXRcclxuICAgIC8vIHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW5cclxuICAgIC8vIGxvb3AgcnVucy5cclxuICAgIHRoaXMubnVtVXBkYXRlU3RlcHMgPSAwO1xyXG5cclxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxyXG4gICAgLy8gZnJhbWUgd2FzIGV4ZWN1dGVkIGJlZm9yZSBhbm90aGVyIGZyYW1lIGNhbiBiZSBleGVjdXRlZC4gVGhlXHJcbiAgICAvLyBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlIGNhcHMgdGhlIEZQUyAodGhlIGRlZmF1bHQgb2YgemVybyBtZWFucyB0aGVyZSBpc1xyXG4gICAgLy8gbm8gY2FwKS5cclxuICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDA7XHJcblxyXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcclxuICAgIC8vIHdhcyBjYWxsZWQgaGFzIG5vdCBiZWVuIGZvbGxvd2VkIGJ5IGEgY2FsbCB0byBgTWFpbkxvb3Auc3RvcCgpYC4gVGhpcyBpc1xyXG4gICAgLy8gZGlmZmVyZW50IHRoYW4gYHJ1bm5pbmdgIGJlY2F1c2UgdGhlcmUgaXMgYSBkZWxheSBvZiBhIGZldyBtaWxsaXNlY29uZHNcclxuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXHJcbiAgICAvLyBcInJ1bm5pbmcuXCIgVGhpcyBkZWxheSBpcyBkdWUgdG8gd2FpdGluZyBmb3IgdGhlIG5leHQgZnJhbWUuXHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBXaGV0aGVyIHRoZSBzaW11bGF0aW9uIGhhcyBmYWxsZW4gdG9vIGZhciBiZWhpbmQgcmVhbCB0aW1lLlxyXG4gICAgLy8gU3BlY2lmaWNhbGx5LCBgcGFuaWNgIHdpbGwgYmUgc2V0IHRvIGB0cnVlYCBpZiB0b28gbWFueSB1cGRhdGVzIG9jY3VyIGluXHJcbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcclxuICAgIC8vIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0IHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZVxyXG4gICAgLy8gY29sbGVjdGlvbiBldmVyeSB0aW1lIHRoZSBtYWluIGxvb3AgcnVucy5cclxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcclxufTtcclxuXHJcbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xyXG5cclxuTWFpbkxvb3AucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHNldE1heEZQUzogZnVuY3Rpb24gKGZwcylcclxuICAgIHtcclxuICAgICAgICBpZiAoZnBzID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNYXhGUFM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgb2xkRnJhbWVEZWx0YSA9IHRoaXMuZnJhbWVEZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbHRhID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0RnBzVXBkYXRlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXHJcbiAgICBzdGVwOiBmdW5jdGlvbiAodGltZXN0YW1wKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XHJcbiAgICAgICAgLy8gYE1haW5Mb29wLnNldE1heEFsbG93ZWRGUFMoKWApLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPCB0aGlzLmxhc3RGcmFtZVRpbWVNcyArIHRoaXMubWluRnJhbWVEZWxheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyYW1lRGVsdGEgaXMgdGhlIGN1bXVsYXRpdmUgYW1vdW50IG9mIGluLWFwcCB0aW1lIHRoYXQgaGFzbid0IGJlZW5cclxuICAgICAgICAvLyBzaW11bGF0ZWQgeWV0LiBBZGQgdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgZnJhbWUuIFdlIG5lZWQgdG8gdHJhY2sgdG90YWxcclxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcclxuICAgICAgICAvLyBsYXN0IGZyYW1lKSBiZWNhdXNlIG5vdCBhbGwgYWN0dWFsbHkgZWxhcHNlZCB0aW1lIGlzIGd1YXJhbnRlZWQgdG8gYmVcclxuICAgICAgICAvLyBzaW11bGF0ZWQgZWFjaCBmcmFtZS4gU2VlIHRoZSBjb21tZW50cyBiZWxvdyBmb3IgZGV0YWlscy5cclxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXHJcblxyXG4gICAgICAgIC8vICBIZXJlIHdlJ2xsIG5lZWQgdG8gcnVuIHRoaW5ncyBsaWtlIHR3ZWVuLnVwZGF0ZSwgaW5wdXQudXBkYXRlLCBldGMuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGVzdGltYXRlIG9mIHRoZSBmcmFtZSByYXRlLCBgZnBzYC4gRXZlcnkgc2Vjb25kLCB0aGUgbnVtYmVyXHJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXHJcbiAgICAgICAgLy8gbW92aW5nIGF2ZXJhZ2Ugb2YgYWxsIGZyYW1lcyBwZXIgc2Vjb25kLCB3aXRoIGFuIGFscGhhIG9mIDAuMjUuIFRoaXNcclxuICAgICAgICAvLyBtZWFucyB0aGF0IG1vcmUgcmVjZW50IHNlY29uZHMgYWZmZWN0IHRoZSBlc3RpbWF0ZWQgZnJhbWUgcmF0ZSBtb3JlIHRoYW5cclxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPiB0aGlzLmxhc3RGcHNVcGRhdGUgKyAxMDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cclxuICAgICAgICAgICAgLy8gVXNpbmcgY29uc3RhbnRzIGlubGluZSBpcyBva2F5IGhlcmUuXHJcbiAgICAgICAgICAgIHRoaXMuZnBzID0gMC4yNSAqIHRoaXMuZnJhbWVzVGhpc1NlY29uZCArIDAuNzUgKiB0aGlzLmZwcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCsrO1xyXG5cclxuICAgICAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5mcmFtZURlbHRhID49IHN0ZXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLnRpbWVzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZShzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZShzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5udW1VcGRhdGVTdGVwcyA+PSAyNDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNldHRpbmdzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5zeXMuY29sb3IuYWxwaGEgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIucmVuZGVyKHRoaXMuc3RhdGUsIHRoaXMuZnJhbWVEZWx0YSAvIHRoaXMudGltZXN0ZXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuZW5kKHRoaXMuZnBzLCB0aGlzLnBhbmljKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5pYyA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKlxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodGltZXN0ZXApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlKHRpbWVzdGVwKTtcclxuXHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgdmFyIGNoaWxkO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHRpbWVzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKHRpbWVzdGVwKTtcclxuXHJcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHRpbWVzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAqL1xyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWFpbkxvb3A7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvTWFpbkxvb3AuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qIERpcnR5ISBNYW5hZ2VyXHJcbipcclxuKiBAY2xhc3NcclxuKi9cclxudmFyIFVwZGF0ZU1hbmFnZXIgPSBmdW5jdGlvbiAoc3RhdGUpXHJcbntcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLmdhbWUgPSBzdGF0ZS5nYW1lO1xyXG5cclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG5cclxuICAgIC8vIHRoaXMuaSA9IDE7XHJcblxyXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHRoaXMucHJvY2Vzc2VkID0gMDtcclxufTtcclxuXHJcblVwZGF0ZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVXBkYXRlTWFuYWdlcjtcclxuXHJcblVwZGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmksICdVcGRhdGVNYW5hZ2VyLnN0b3AnLCB0aGlzLnByb2Nlc3NlZCk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmkrKztcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5saXN0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGxlbiA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaSwgJ1VwZGF0ZU1hbmFnZXIuc3RhcnQnLCBsZW4pO1xyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQmVjYXVzZSBpdCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkIChhcyBhIGNoaWxkIG9mIGFub3RoZXIgVHJhbnNmb3JtIHRoYXQgd2FzIHVwZGF0ZWQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0gJiYgdGhpcy5saXN0W2ldLl9kaXJ0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpXS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWRkOiBmdW5jdGlvbiAodHJhbnNmb3JtKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVcGRhdGVNYW5hZ2VyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL1VwZGF0ZU1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICB0aGlzLnZhbHVlcyA9IFtdO1xyXG59O1xyXG5cclxuU2V0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldDtcclxuXHJcblNldC5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgYWRkOiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlOiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGR1bXA6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCgnU2V0Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQ6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudmFsdWVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudHJ5W3Byb3BlcnR5XSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIEZvciB3aGVuIHlvdSBrbm93IHRoaXMgU2V0IHdpbGwgYmUgbW9kaWZpZWQgZHVyaW5nIHRoZSBpdGVyYXRpb25cclxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgdGVtcCA9IHRoaXMudmFsdWVzLnNsaWNlKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayh0ZW1wW2ldKSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgRm9yIHdoZW4geW91IGFic29sdXRlbHkga25vdyB0aGlzIFNldCB3b24ndCBiZSBtb2RpZmllZCBkdXJpbmcgdGhlIGl0ZXJhdGlvblxyXG4gICAgaXRlcmF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sodGhpcy52YWx1ZXNbaV0pID09PSBmYWxzZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA+IC0xKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5pb246IGZ1bmN0aW9uIChzZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgc2V0LnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbnRlcnNlY3Q6IGZ1bmN0aW9uIChzZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc2V0LmNvbnRhaW5zKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NldDtcclxuICAgIH0sXHJcblxyXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gKHNldClcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghc2V0LmNvbnRhaW5zKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NldDtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTZXQucHJvdG90eXBlLCB7XHJcblxyXG4gICAgc2l6ZToge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdHJ1Y3RzL1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBGcmFtZSBpcyBhIHNlY3Rpb24gb2YgYSBUZXh0dXJlLlxyXG4qXHJcbiogQ2FsbGVkIFRleHR1cmVGcmFtZSBkdXJpbmcgaW50ZWdyYXRpb24sIHdpbGwgcmVuYW1lIHRvIEZyYW1lIGxhdGVyLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlRnJhbWVcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIFRleHR1cmUgdGhpcyBGcmFtZSBiZWxvbmdzIHRvLlxyXG4qIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIHVuaXF1ZSAod2l0aGluIHRoZSBUZXh0dXJlKSBuYW1lIG9mIHRoaXMgRnJhbWUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IHggLSBYIHBvc2l0aW9uIG9mIHRoZSBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIHBvc2l0aW9uIG9mIHRoZSBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggb2YgdGhlIGZyYW1lIHdpdGhpbiB0aGUgVGV4dHVyZS5cclxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSBmcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUuXHJcbiovXHJcbnZhciBGcmFtZSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBuYW1lLCBzb3VyY2VJbmRleCwgeCwgeSwgd2lkdGgsIGhlaWdodClcclxue1xyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgVGV4dHVyZSB0aGlzIGZyYW1lIGJlbG9uZ3MgdG8uXHJcbiAgICAqL1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGlzIGZyYW1lIHdpdGhpbiB0aGUgVGV4dHVyZS5cclxuICAgICovXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gdGV4dHVyZS5zb3VyY2Vbc291cmNlSW5kZXhdO1xyXG5cclxuICAgIHRoaXMuc291cmNlSW5kZXggPSBzb3VyY2VJbmRleDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGN1dFggLSBYIHBvc2l0aW9uIHdpdGhpbiB0aGUgc291cmNlIGltYWdlIHRvIGN1dCBmcm9tLlxyXG4gICAgKi9cclxuICAgIHRoaXMuY3V0WCA9IHg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdXRZIC0gWSBwb3NpdGlvbiB3aXRoaW4gdGhlIHNvdXJjZSBpbWFnZSB0byBjdXQgZnJvbS5cclxuICAgICovXHJcbiAgICB0aGlzLmN1dFkgPSB5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gY3V0V2lkdGggLSBUaGUgd2lkdGggb2YgdGhlIGFyZWEgaW4gdGhlIHNvdXJjZSBpbWFnZSB0byBjdXQuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5jdXRXaWR0aCA9IHdpZHRoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gY3V0SGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgYXJlYSBpbiB0aGUgc291cmNlIGltYWdlIHRvIGN1dC5cclxuICAgICovXHJcbiAgICB0aGlzLmN1dEhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHggLSBUaGUgWCByZW5kZXJpbmcgb2Zmc2V0IG9mIHRoaXMgRnJhbWUsIHRha2luZyB0cmltIGludG8gYWNjb3VudC5cclxuICAgICovXHJcbiAgICB0aGlzLnggPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0geSAtIFRoZSBZIHJlbmRlcmluZyBvZmZzZXQgb2YgdGhpcyBGcmFtZSwgdGFraW5nIHRyaW0gaW50byBhY2NvdW50LlxyXG4gICAgKi9cclxuICAgIHRoaXMueSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCAtIFRoZSByZW5kZXJpbmcgd2lkdGggb2YgdGhpcyBGcmFtZSwgdGFraW5nIHRyaW0gaW50byBhY2NvdW50LlxyXG4gICAgKi9cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCAtIFRoZSByZW5kZXJpbmcgaGVpZ2h0IG9mIHRoaXMgRnJhbWUsIHRha2luZyB0cmltIGludG8gYWNjb3VudC5cclxuICAgICovXHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICogSXMgdGhpcyBmcmFtZSBpcyByb3RhdGVkIG9yIG5vdCBpbiB0aGUgVGV4dHVyZT9cclxuICAgICogUm90YXRpb24gYWxsb3dzIHlvdSB0byB1c2Ugcm90YXRlZCBmcmFtZXMgaW4gdGV4dHVyZSBhdGxhcyBwYWNraW5nLlxyXG4gICAgKiBJdCBoYXMgbm90aGluZyB0byBkbyB3aXRoIFNwcml0ZSByb3RhdGlvbi5cclxuICAgICpcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSByb3RhdGVkXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5yb3RhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIElzIHRoaXMgYSB0aWxpbmcgdGV4dHVyZT8gQXMgdXNlZCBieSB0aGUgbGlrZXMgb2YgYSBUaWxpbmdTcHJpdGUuXHJcbiAgICAqIFRPRE86IFRyeSBhbmQgcmVtb3ZlIHRoaXMsIGl0IHNob3VsZG4ndCBiZSBoZXJlXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNUaWxpbmdcclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0aGlzLmlzVGlsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoaXMgd2lsbCBsZXQgYSByZW5kZXJlciBrbm93IHRoYXQgYSB0aW50ZWQgcGFyZW50IGhhcyB1cGRhdGVkIGl0cyB0ZXh0dXJlLlxyXG4gICAgKiBUT0RPOiBUcnkgYW5kIHJlbW92ZSB0aGlzLCBpdCBzaG91bGRuJ3QgYmUgaGVyZVxyXG4gICAgKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlcXVpcmVzUmVUaW50XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5yZXF1aXJlc1JlVGludCA9IGZhbHNlO1xyXG5cclxuICAgIC8vICBPdmVyLXJpZGVzIHRoZSBSZW5kZXJlciBzZXR0aW5nPyAtMSA9IHVzZSBSZW5kZXJlciBTZXR0aW5nLCAwID0gTm8gcm91bmRpbmcsIDEgPSBSb3VuZFxyXG4gICAgdGhpcy5hdXRvUm91bmQgPSAtMTtcclxuXHJcbiAgICAvKipcclxuICAgICogVGhlIHVuLW1vZGlmaWVkIHNvdXJjZSBmcmFtZSwgdHJpbSBhbmQgVVYgZGF0YS5cclxuICAgICpcclxuICAgICogQHByaXZhdGVcclxuICAgICogQHByb3BlcnR5IHtvYmplY3R9IGRhdGFcclxuICAgICovXHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgY3V0OiB7XHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgIHc6IHdpZHRoLFxyXG4gICAgICAgICAgICBoOiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHI6IHggKyB3aWR0aCxcclxuICAgICAgICAgICAgYjogeSArIGhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpbTogZmFsc2UsXHJcbiAgICAgICAgc291cmNlU2l6ZToge1xyXG4gICAgICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICAgICAgaDogaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVTb3VyY2VTaXplOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHc6IHdpZHRoLFxyXG4gICAgICAgICAgICBoOiBoZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHV2czoge1xyXG4gICAgICAgICAgICB4MDogMCxcclxuICAgICAgICAgICAgeTA6IDAsXHJcbiAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgeDI6IDAsXHJcbiAgICAgICAgICAgIHkyOiAwLFxyXG4gICAgICAgICAgICB4MzogMCxcclxuICAgICAgICAgICAgeTM6IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlVVZzKCk7XHJcbn07XHJcblxyXG5GcmFtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGcmFtZTtcclxuXHJcbkZyYW1lLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogSWYgdGhlIGZyYW1lIHdhcyB0cmltbWVkIHdoZW4gYWRkZWQgdG8gdGhlIFRleHR1cmUgQXRsYXMsIHRoaXMgcmVjb3JkcyB0aGUgdHJpbSBhbmQgc291cmNlIGRhdGEuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlRleHR1cmVGcmFtZSNzZXRUcmltXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhY3R1YWxXaWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgZnJhbWUgYmVmb3JlIGJlaW5nIHRyaW1tZWQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhY3R1YWxIZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBmcmFtZSBiZWZvcmUgYmVpbmcgdHJpbW1lZC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RYIC0gVGhlIGRlc3RpbmF0aW9uIFggcG9zaXRpb24gb2YgdGhlIHRyaW1tZWQgZnJhbWUgZm9yIGRpc3BsYXkuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0WSAtIFRoZSBkZXN0aW5hdGlvbiBZIHBvc2l0aW9uIG9mIHRoZSB0cmltbWVkIGZyYW1lIGZvciBkaXNwbGF5LlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdFdpZHRoIC0gVGhlIGRlc3RpbmF0aW9uIHdpZHRoIG9mIHRoZSB0cmltbWVkIGZyYW1lIGZvciBkaXNwbGF5LlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdEhlaWdodCAtIFRoZSBkZXN0aW5hdGlvbiBoZWlnaHQgb2YgdGhlIHRyaW1tZWQgZnJhbWUgZm9yIGRpc3BsYXkuXHJcbiAgICAqL1xyXG4gICAgc2V0VHJpbTogZnVuY3Rpb24gKGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQsIGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIC8vICBTdG9yZSBhY3R1YWwgdmFsdWVzXHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS50cmltID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNvdXJjZVNpemUudyA9IGFjdHVhbFdpZHRoO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zb3VyY2VTaXplLmggPSBhY3R1YWxIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5zcHJpdGVTb3VyY2VTaXplLnggPSBkZXN0WDtcclxuICAgICAgICB0aGlzLmRhdGEuc3ByaXRlU291cmNlU2l6ZS55ID0gZGVzdFk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNwcml0ZVNvdXJjZVNpemUudyA9IGRlc3RXaWR0aDtcclxuICAgICAgICB0aGlzLmRhdGEuc3ByaXRlU291cmNlU2l6ZS5oID0gZGVzdEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gIEFkanVzdCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy54ID0gZGVzdFg7XHJcbiAgICAgICAgdGhpcy55ID0gZGVzdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRlc3RXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRlc3RIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVVZzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgV2ViR0wgVVYgY2FjaGUuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgdXBkYXRlVVZzXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgdXBkYXRlVVZzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0dyA9IHRoaXMuc291cmNlLndpZHRoO1xyXG4gICAgICAgIHZhciB0aCA9IHRoaXMuc291cmNlLmhlaWdodDtcclxuICAgICAgICB2YXIgdXZzID0gdGhpcy5kYXRhLnV2cztcclxuICAgICAgICBcclxuICAgICAgICB1dnMueDAgPSB0aGlzLmN1dFggLyB0dztcclxuICAgICAgICB1dnMueTAgPSB0aGlzLmN1dFkgLyB0aDtcclxuXHJcbiAgICAgICAgdXZzLngxID0gKHRoaXMuY3V0WCArIHRoaXMuY3V0V2lkdGgpIC8gdHc7XHJcbiAgICAgICAgdXZzLnkxID0gdGhpcy5jdXRZIC8gdGg7XHJcblxyXG4gICAgICAgIHV2cy54MiA9ICh0aGlzLmN1dFggKyB0aGlzLmN1dFdpZHRoKSAvIHR3O1xyXG4gICAgICAgIHV2cy55MiA9ICh0aGlzLmN1dFkgKyB0aGlzLmN1dEhlaWdodCkgLyB0aDtcclxuXHJcbiAgICAgICAgdXZzLngzID0gdGhpcy5jdXRYIC8gdHc7XHJcbiAgICAgICAgdXZzLnkzID0gKHRoaXMuY3V0WSArIHRoaXMuY3V0SGVpZ2h0KSAvIHRoO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFVwZGF0ZXMgdGhlIGludGVybmFsIFdlYkdMIFVWIGNhY2hlLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIHVwZGF0ZVVWc0ludmVydGVkXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgdXBkYXRlVVZzSW52ZXJ0ZWQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHR3ID0gdGhpcy5zb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgdmFyIHRoID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgIHZhciB1dnMgPSB0aGlzLmRhdGEudXZzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHV2cy54MCA9IHRoaXMuY3V0WCAvIHR3O1xyXG4gICAgICAgIHV2cy55MCA9IHRoaXMuY3V0WSAvIHRoO1xyXG5cclxuICAgICAgICB1dnMueDEgPSAodGhpcy5jdXRYICsgdGhpcy5jdXRIZWlnaHQpIC8gdHc7XHJcbiAgICAgICAgdXZzLnkxID0gdGhpcy5jdXRZIC8gdGg7XHJcblxyXG4gICAgICAgIHV2cy54MiA9ICh0aGlzLmN1dFggKyB0aGlzLmN1dEhlaWdodCkgLyB0dztcclxuICAgICAgICB1dnMueTIgPSAodGhpcy5jdXRZICsgdGhpcy5jdXRXaWR0aCkgLyB0aDtcclxuXHJcbiAgICAgICAgdXZzLngzID0gdGhpcy5jdXRYIC8gdHc7XHJcbiAgICAgICAgdXZzLnkzID0gKHRoaXMuY3V0WSArIHRoaXMuY3V0V2lkdGgpIC8gdGg7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9uZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgUGhhc2VyLlRleHR1cmVGcmFtZSh0aGlzLnRleHR1cmUsIHRoaXMubmFtZSwgdGhpcy5zb3VyY2VJbmRleCk7XHJcblxyXG4gICAgICAgIGNsb25lLmN1dFggPSB0aGlzLmN1dFg7XHJcbiAgICAgICAgY2xvbmUuY3V0WSA9IHRoaXMuY3V0WTtcclxuICAgICAgICBjbG9uZS5jdXRXaWR0aCA9IHRoaXMuY3V0V2lkdGg7XHJcbiAgICAgICAgY2xvbmUuY3V0SGVpZ2h0ID0gdGhpcy5jdXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNsb25lLnggPSB0aGlzLng7XHJcbiAgICAgICAgY2xvbmUueSA9IHRoaXMueTtcclxuICAgICAgICBjbG9uZS53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgY2xvbmUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNsb25lLnJvdGF0ZWQgPSB0aGlzLnJvdGF0ZWQ7XHJcblxyXG4gICAgICAgIGNsb25lLmRhdGEgPSBQaGFzZXIuVXRpbHMuZXh0ZW5kKHRydWUsIGNsb25lLmRhdGEsIHRoaXMuZGF0YSk7XHJcblxyXG4gICAgICAgIGNsb25lLnVwZGF0ZVVWcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRnJhbWUucHJvdG90eXBlLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSB3aWR0aCBvZiB0aGUgRnJhbWUgaW4gaXRzIHVuLXRyaW1tZWQsIHVuLXBhZGRlZCBzdGF0ZSwgYXMgcHJlcGFyZWQgaW4gdGhlIGFydCBwYWNrYWdlLFxyXG4gICAgKiBiZWZvcmUgYmVpbmcgcGFja2VkLlxyXG4gICAgKlxyXG4gICAgKiBAbmFtZSBQaGFzZXIuVGV4dHVyZUZyYW1lI3JlYWxXaWR0aFxyXG4gICAgKiBAcHJvcGVydHkge2FueX0gcmVhbFdpZHRoXHJcbiAgICAqL1xyXG4gICAgcmVhbFdpZHRoOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlU2l6ZS53O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBGcmFtZSBpbiBpdHMgdW4tdHJpbW1lZCwgdW4tcGFkZGVkIHN0YXRlLCBhcyBwcmVwYXJlZCBpbiB0aGUgYXJ0IHBhY2thZ2UsXHJcbiAgICAqIGJlZm9yZSBiZWluZyBwYWNrZWQuXHJcbiAgICAqXHJcbiAgICAqIEBuYW1lIFBoYXNlci5UZXh0dXJlRnJhbWUjcmVhbEhlaWdodFxyXG4gICAgKiBAcHJvcGVydHkge2FueX0gcmVhbEhlaWdodFxyXG4gICAgKi9cclxuICAgIHJlYWxIZWlnaHQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2VTaXplLmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFVWc1xyXG4gICAgKlxyXG4gICAgKiBAbmFtZSBQaGFzZXIuVGV4dHVyZUZyYW1lI3V2c1xyXG4gICAgKiBAcHJvcGVydHkge09iamVjdH0gdXZzXHJcbiAgICAqL1xyXG4gICAgdXZzOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudXZzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL0ZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgRnJhbWUgPSByZXF1aXJlKCcuL0ZyYW1lJyk7XHJcbnZhciBUZXh0dXJlU291cmNlID0gcmVxdWlyZSgnLi9UZXh0dXJlU291cmNlJyk7XHJcblxyXG4vKipcclxuKiBBIFRleHR1cmUgY29uc2lzdHMgb2YgYSBzb3VyY2UsIHVzdWFsbHkgYW4gSW1hZ2UgZnJvbSB0aGUgQ2FjaGUsIG9yIGEgQ2FudmFzLCBhbmQgYSBjb2xsZWN0aW9uXHJcbiogb2YgRnJhbWVzLiBUaGUgRnJhbWVzIHJlcHJlc2VudCB0aGUgZGlmZmVyZW50IGFyZWFzIG9mIHRoZSBUZXh0dXJlLiBGb3IgZXhhbXBsZSBhIHRleHR1cmUgYXRsYXNcclxuKiBtYXkgaGF2ZSBtYW55IEZyYW1lcywgb25lIGZvciBlYWNoIGVsZW1lbnQgd2l0aGluIHRoZSBhdGxhcy4gV2hlcmUtYXMgYSBzaW5nbGUgaW1hZ2Ugd291bGQgaGF2ZVxyXG4qIGp1c3Qgb25lIGZyYW1lLCB0aGF0IGVuY29tcGFzc2VzIHRoZSB3aG9sZSBpbWFnZS5cclxuKlxyXG4qIFRleHR1cmVzIGFyZSBtYW5hZ2VkIGJ5IHRoZSBnbG9iYWwgVGV4dHVyZU1hbmFnZXIuIFRoaXMgaXMgYSBzaW5nbGV0b24gY2xhc3MgdGhhdCBpc1xyXG4qIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhbmQgZGVsaXZlcmluZyBUZXh0dXJlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBGcmFtZXMgdG8gR2FtZSBPYmplY3RzLlxyXG4qXHJcbiogU3ByaXRlcyBhbmQgb3RoZXIgR2FtZSBPYmplY3RzIGdldCB0aGUgdGV4dHVyZSBkYXRhIHRoZXkgbmVlZCBmcm9tIHRoZSBUZXh0dXJlTWFuYWdlci5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZVxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7b2JqZWN0fSBzb3VyY2VcclxuKiBAcGFyYW0ge251bWJlcn0gc2NhbGVNb2RlXHJcbiovXHJcbnZhciBUZXh0dXJlID0gZnVuY3Rpb24gKG1hbmFnZXIsIGtleSwgc291cmNlKVxyXG57XHJcbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2UpKVxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZSA9IFsgc291cmNlIF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSBzb3VyY2UgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZS5cclxuICAgICogVXN1YWxseSBhbiBJbWFnZSwgYnV0IGNhbiBhbHNvIGJlIGEgQ2FudmFzLlxyXG4gICAgKlxyXG4gICAgKiBAcHJvcGVydHkgc291cmNlXHJcbiAgICAqIEB0eXBlIGFycmF5XHJcbiAgICAqL1xyXG4gICAgdGhpcy5zb3VyY2UgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtvYmplY3R9IGZyYW1lcyAtIEZyYW1lc1xyXG4gICAgKi9cclxuICAgIHRoaXMuZnJhbWVzID0ge307XHJcblxyXG4gICAgdGhpcy5mcmFtZVRvdGFsID0gMDtcclxuXHJcbiAgICAvLyAgTG9hZCB0aGUgU291cmNlc1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucHVzaChuZXcgVGV4dHVyZVNvdXJjZSh0aGlzLCBzb3VyY2VbaV0pKTtcclxuICAgIH1cclxufTtcclxuXHJcblRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dHVyZTtcclxuXHJcblRleHR1cmUucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKG5hbWUsIHNvdXJjZUluZGV4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLCBuYW1lLCBzb3VyY2VJbmRleCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzW25hbWVdID0gZnJhbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVUb3RhbCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldDogZnVuY3Rpb24gKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBudWxsIHx8IHRoaXMuZnJhbWVUb3RhbCA9PT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgPSAnX19CQVNFJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuZnJhbWVzW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWZyYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBUZXh0dXJlLmZyYW1lIGZvdW5kIHdpdGggbmFtZSAnICsgbmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mcmFtZXNbJ19fQkFTRSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRUZXh0dXJlSW5kZXg6IGZ1bmN0aW9uIChpbmRleClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc291cmNlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VbaV0uZ2xUZXh0dXJlSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc291cmNlW2ldLmltYWdlLmN1cnJlbnRTcmMsICdpbmRleCA9ICcsIGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBEZXN0cm95cyB0aGlzIGJhc2UgdGV4dHVyZVxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgICovXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBOZWVkIHRvIGl0ZXJhdGUgdGhvdWdoIHRoZSBUZXh0dXJlU291cmNlcywgYW5kIHVubG9hZCBlYWNoIG9uZVxyXG4gICAgICAgIC8vICB0aGVuIGNsZWFyIG91dCB0aGUgZnJhbWVzXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlQnlDYW52YXModGhpcy5zb3VyY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xyXG4gICAgICAgICovXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGJhc2UgdGV4dHVyZSBmcm9tIHRoZSBnaXZlbiBjYW52YXMgZWxlbWVudC5cclxuKlxyXG4qIEBzdGF0aWNcclxuKiBAbWV0aG9kIGZyb21DYW52YXNcclxuKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCBzb3VyY2Ugb2YgdGhlIHRleHR1cmVcclxuKiBAcGFyYW0gc2NhbGVNb2RlIHtOdW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19UGhhc2VyLnNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXHJcbiogQHJldHVybiB7QmFzZVRleHR1cmV9XHJcblBoYXNlci5UZXh0dXJlLmZyb21DYW52YXMgPSBmdW5jdGlvbiAoY2FudmFzLCBzY2FsZU1vZGUpXHJcbntcclxuICAgIGlmIChjYW52YXMud2lkdGggPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FudmFzLmhlaWdodCA9PT0gMClcclxuICAgIHtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFBoYXNlci5UZXh0dXJlKGNhbnZhcywgc2NhbGVNb2RlKTtcclxufTtcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvVGV4dHVyZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdGV4dHVyZXMvVGV4dHVyZS5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcclxudmFyIFRleHR1cmUgPSByZXF1aXJlKCcuL1RleHR1cmUnKTtcclxuXHJcbi8qKlxyXG4qIFRleHR1cmVzIGFyZSBtYW5hZ2VkIGJ5IHRoZSBnbG9iYWwgVGV4dHVyZU1hbmFnZXIuIFRoaXMgaXMgYSBzaW5nbGV0b24gY2xhc3MgdGhhdCBpc1xyXG4qIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhbmQgZGVsaXZlcmluZyBUZXh0dXJlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBGcmFtZXMgdG8gR2FtZSBPYmplY3RzLlxyXG4qXHJcbiogU3ByaXRlcyBhbmQgb3RoZXIgR2FtZSBPYmplY3RzIGdldCB0aGUgdGV4dHVyZSBkYXRhIHRoZXkgbmVlZCBmcm9tIHRoZSBUZXh0dXJlTWFuYWdlci5cclxuKlxyXG4qIEFjY2VzcyBpdCB2aWEgYHN0YXRlLnRleHR1cmVzYC5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZU1hbmFnZXJcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lXHJcbiovXHJcbnZhciBUZXh0dXJlTWFuYWdlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICAvLyAgUmVxdWlyZWQ/IFJlbW92ZSBpZiBub3RcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcblxyXG4gICAgdGhpcy5saXN0ID0ge307XHJcbn07XHJcblxyXG5UZXh0dXJlTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0dXJlTWFuYWdlcjtcclxuXHJcblRleHR1cmVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBhZGRJbWFnZTogZnVuY3Rpb24gKGtleSwgc291cmNlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFBhcnNlci5JbWFnZSh0ZXh0dXJlLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZENhbnZhczogZnVuY3Rpb24gKGtleSwgc291cmNlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFBhcnNlci5DYW52YXModGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRBdGxhczogZnVuY3Rpb24gKGtleSwgc291cmNlLCBkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBJcyBpdCBhIEhhc2ggb3IgYW4gQXJyYXk/XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZnJhbWVzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEF0bGFzSlNPTkFycmF5KGtleSwgc291cmNlLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkQXRsYXNKU09OSGFzaChrZXksIHNvdXJjZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRBdGxhc0pTT05BcnJheTogZnVuY3Rpb24gKGtleSwgc291cmNlLCBkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFyc2VyLkpTT05BcnJheSh0ZXh0dXJlLCBpLCBkYXRhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQYXJzZXIuSlNPTkFycmF5KHRleHR1cmUsIDAsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZEF0bGFzSlNPTkhhc2g6IGZ1bmN0aW9uIChrZXksIHNvdXJjZSwgZGF0YSlcclxuICAgIHtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlKGtleSwgc291cmNlKTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhcnNlci5KU09OSGFzaCh0ZXh0dXJlLCBpLCBkYXRhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQYXJzZXIuSlNPTkhhc2godGV4dHVyZSwgMCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkU3ByaXRlU2hlZXQ6IGZ1bmN0aW9uIChrZXksIHNvdXJjZSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIHN0YXJ0RnJhbWUsIGVuZEZyYW1lLCBtYXJnaW4sIHNwYWNpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZShrZXksIHNvdXJjZSk7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRleHR1cmUuc291cmNlWzBdLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0ZXh0dXJlLnNvdXJjZVswXS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIFBhcnNlci5TcHJpdGVTaGVldCh0ZXh0dXJlLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIG1hcmdpbiwgc3BhY2luZyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRTcHJpdGVTaGVldEZyb21BdGxhczogZnVuY3Rpb24gKGtleSwgYXRsYXNLZXksIGF0bGFzRnJhbWUsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgbWFyZ2luLCBzcGFjaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhdGxhcyA9IHRoaXMuZ2V0KGF0bGFzS2V5KTtcclxuICAgICAgICB2YXIgc2hlZXQgPSBhdGxhcy5nZXQoYXRsYXNGcmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChzaGVldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzaGVldC5zb3VyY2UuaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgUGFyc2VyLlNwcml0ZVNoZWV0KHRleHR1cmUsIDAsIHNoZWV0LmN1dFgsIHNoZWV0LmN1dFksIHNoZWV0LmN1dFdpZHRoLCBzaGVldC5jdXRIZWlnaHQsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgbWFyZ2luLCBzcGFjaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWRkQXRsYXNTdGFybGluZ1hNTDogZnVuY3Rpb24gKGtleSwgc291cmNlLCBkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGUoa2V5LCBzb3VyY2UpO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFyc2VyLlN0YXJsaW5nWE1MKHRleHR1cmUsIGksIGRhdGFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBhcnNlci5TdGFybGluZ1hNTCh0ZXh0dXJlLCAwLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRBdGxhc1B5eGVsOiBmdW5jdGlvbiAoa2V5LCBzb3VyY2UsIGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZShrZXksIHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYXJzZXIuUHl4ZWwodGV4dHVyZSwgaSwgZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUGFyc2VyLlB5eGVsKHRleHR1cmUsIDAsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGtleSwgc291cmNlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcywga2V5LCBzb3VyY2UpO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3Rba2V5XSA9IHRleHR1cmU7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZXhpc3RzOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5saXN0Lmhhc093blByb3BlcnR5KGtleSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7IGtleSA9ICdfX0RFRkFVTFQnOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3Rba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFsnX19NSVNTSU5HJ107XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbG9uZUZyYW1lOiBmdW5jdGlvbiAoa2V5LCBmcmFtZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0W2tleV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W2tleV0uZ2V0KGZyYW1lKS5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RnJhbWU6IGZ1bmN0aW9uIChrZXksIGZyYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3Rba2V5XS5nZXQoZnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0VGV4dHVyZTogZnVuY3Rpb24gKGdhbWVPYmplY3QsIGtleSwgZnJhbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFtrZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC50ZXh0dXJlID0gdGhpcy5saXN0W2tleV07XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZnJhbWUgPSBnYW1lT2JqZWN0LnRleHR1cmUuZ2V0KGZyYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUGFzc2VzIGFsbCBUZXh0dXJlcyB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgZWFjaFxyXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gW3RoaXNBcmddIC0gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cclxuICAgICogQHBhcmFtIHsuLi4qfSBbYXJndW1lbnRzXSAtIEFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLCBhZnRlciB0aGUgY2hpbGQuXHJcbiAgICAqL1xyXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhcmdzID0gWyBudWxsIF07XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciB0ZXh0dXJlIGluIHRoaXMubGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB0aGlzLmxpc3RbdGV4dHVyZV07XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzQXJnLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvVGV4dHVyZU1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RleHR1cmVzL1RleHR1cmVNYW5hZ2VyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIElzU2l6ZVBvd2VyT2ZUd28gPSByZXF1aXJlKCcuLi9tYXRoL3BvdzIvSXNTaXplUG93ZXJPZlR3bycpO1xyXG5cclxuLyoqXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVTb3VyY2VcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge29iamVjdH0gc291cmNlXHJcbiogQHBhcmFtIHtudW1iZXJ9IHNjYWxlTW9kZVxyXG4qL1xyXG52YXIgVGV4dHVyZVNvdXJjZSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBzb3VyY2UpXHJcbntcclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IHNvdXJjZTtcclxuXHJcbiAgICB0aGlzLmNvbXByZXNzaW9uQWxnb3JpdGhtID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogVGhlIFJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUuXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSByZXNvbHV0aW9uXHJcbiAgICAqIEB0eXBlIE51bWJlclxyXG4gICAgKi9cclxuICAgIHRoaXMucmVzb2x1dGlvbiA9IDE7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHR1cmUuXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSB3aWR0aFxyXG4gICAgKiBAdHlwZSBOdW1iZXJcclxuICAgICogQHJlYWRPbmx5XHJcbiAgICAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHNvdXJjZS5uYXR1cmFsV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIFRleHR1cmUuXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSBoZWlnaHRcclxuICAgICogQHR5cGUgTnVtYmVyXHJcbiAgICAqIEByZWFkT25seVxyXG4gICAgKi9cclxuICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaGUgc2NhbGUgbW9kZSB0byBhcHBseSB3aGVuIHNjYWxpbmcgdGhpcyB0ZXh0dXJlLlxyXG4gICAgKiBORUFSRVNUIG9yIERFRkFVTFRcclxuICAgICpcclxuICAgICogQHByb3BlcnR5IHNjYWxlTW9kZVxyXG4gICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgKiBAZGVmYXVsdCBQaGFzZXIuc2NhbGVNb2Rlcy5ERUZBVUxUO1xyXG4gICAgKi9cclxuICAgIHRoaXMuc2NhbGVNb2RlID0gQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUO1xyXG4gICAgLy8gdGhpcy5zY2FsZU1vZGUgPSBDT05TVC5zY2FsZU1vZGVzLk5FQVJFU1Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENvbnRyb2xzIGlmIFJHQiBjaGFubmVscyBzaG91bGQgYmUgcHJlLW11bHRpcGxpZWQgYnkgQWxwaGEgIChXZWJHTCBvbmx5KVxyXG4gICAgKlxyXG4gICAgKiBAcHJvcGVydHkgcHJlbXVsdGlwbGllZEFscGhhXHJcbiAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgKi9cclxuICAgIHRoaXMucHJlbXVsdGlwbGllZEFscGhhID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiBhIG1pcG1hcCBvZiB0aGlzIHRleHR1cmUgbmVlZHMgdG8gYmUgZ2VuZXJhdGVkLiBUaGlzIHZhbHVlIG5lZWRzIHRvIGJlIHNldCBiZWZvcmUgdGhlIHRleHR1cmUgaXMgdXNlZFxyXG4gICAgKiBBbHNvIHRoZSB0ZXh0dXJlIG11c3QgYmUgYSBwb3dlciBvZiB0d28gc2l6ZSB0byB3b3JrXHJcbiAgICAqXHJcbiAgICAqIEBwcm9wZXJ0eSBtaXBtYXBcclxuICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAqL1xyXG4gICAgdGhpcy5taXBtYXAgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQSBCYXNlVGV4dHVyZSBjYW4gYmUgc2V0IHRvIHNraXAgdGhlIHJlbmRlcmluZyBwaGFzZSBpbiB0aGUgV2ViR0wgU3ByaXRlIEJhdGNoLlxyXG4gICAgKlxyXG4gICAgKiBZb3UgbWF5IHdhbnQgdG8gZG8gdGhpcyBpZiB5b3UgaGF2ZSBhIHBhcmVudCBTcHJpdGUgd2l0aCBubyB2aXNpYmxlIHRleHR1cmUgKGkuZS4gdXNlcyB0aGUgaW50ZXJuYWwgYF9fZGVmYXVsdGAgdGV4dHVyZSlcclxuICAgICogdGhhdCBoYXMgY2hpbGRyZW4gdGhhdCB5b3UgZG8gd2FudCB0byByZW5kZXIsIHdpdGhvdXQgY2F1c2luZyBhIGJhdGNoIGZsdXNoIGluIHRoZSBwcm9jZXNzLlxyXG4gICAgKlxyXG4gICAgKiBAcHJvcGVydHkgcmVuZGVyYWJsZVxyXG4gICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IGlzUG93ZXJPZjJcclxuICAgICogQHR5cGUgYm9vbGVhblxyXG4gICAgKi9cclxuICAgIHRoaXMuaXNQb3dlck9mMiA9IElzU2l6ZVBvd2VyT2ZUd28odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgZ2xUZXh0dXJlXHJcbiAgICAqL1xyXG4gICAgdGhpcy5nbFRleHR1cmUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUaGUgbXVsdGkgdGV4dHVyZSBiYXRjaGluZyBpbmRleCBudW1iZXIuXHJcbiAgICAqIEBwcm9wZXJ0eSBnbFRleHR1cmVJbmRleFxyXG4gICAgKiBAdHlwZSBOdW1iZXJcclxuICAgICovXHJcbiAgICB0aGlzLmdsVGV4dHVyZUluZGV4ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICogVGhlIHRpbWVzdGFtcCB3aGVuIHRoaXMgdGV4dHVyZSB3YXMgbGFzdCB1c2VkIGJ5IHRoZSBXZWJHTCByZW5kZXJlci5cclxuICAgICogQ2FuIGJlIHVzZWQgdG8gcHVyZ2Ugb3V0ICdkZWFkJyB0ZXh0dXJlcyBmcm9tIEdQVSBtZW1vcnkuXHJcbiAgICAqIEBwcm9wZXJ0eSBnbExhc3RVc2VkXHJcbiAgICAqIEB0eXBlIE51bWJlclxyXG4gICAgKi9cclxuICAgIHRoaXMuZ2xMYXN0VXNlZCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSBnbERpcnR5XHJcbiAgICAqL1xyXG4gICAgdGhpcy5nbERpcnR5ID0gdHJ1ZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNvdXJjZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvVGV4dHVyZVNvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdGV4dHVyZXMvVGV4dHVyZVNvdXJjZS5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4qIFBhcnNlIGEgU3ByaXRlIFNoZWV0IGFuZCBleHRyYWN0cyB0aGUgZnJhbWUgZGF0YSBmcm9tIGl0LlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLkltYWdlXHJcbiogQHN0YXRpY1xyXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXHJcbiogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIEZyYW1lIHdpdGhpbiB0aGUgVGV4dHVyZSB0aGF0IHRoZSBTcHJpdGUgU2hlZXQgaXMgc3RvcmVkIGluLlxyXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxyXG4qL1xyXG52YXIgQ2FudmFzVGV4dHVyZVBhcnNlciA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBzb3VyY2VJbmRleClcclxue1xyXG4gICAgdmFyIHNvdXJjZSA9IHRleHR1cmUuc291cmNlW3NvdXJjZUluZGV4XTtcclxuXHJcbiAgICB0ZXh0dXJlLmFkZCgnX19CQVNFJywgc291cmNlSW5kZXgsIDAsIDAsIHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1RleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvQ2FudmFzVGV4dHVyZVBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogUGFyc2UgYSBTcHJpdGUgU2hlZXQgYW5kIGV4dHJhY3RzIHRoZSBmcmFtZSBkYXRhIGZyb20gaXQuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVQYXJzZXIuSW1hZ2VcclxuKiBAc3RhdGljXHJcbiogQHBhcmFtIHtQaGFzZXIuVGV4dHVyZX0gdGV4dHVyZSAtIFRoZSBwYXJlbnQgVGV4dHVyZS5cclxuKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgRnJhbWUgd2l0aGluIHRoZSBUZXh0dXJlIHRoYXQgdGhlIFNwcml0ZSBTaGVldCBpcyBzdG9yZWQgaW4uXHJcbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXHJcbiovXHJcbnZhciBJbWFnZVRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgpXHJcbntcclxuICAgIHZhciBzb3VyY2UgPSB0ZXh0dXJlLnNvdXJjZVtzb3VyY2VJbmRleF07XHJcblxyXG4gICAgdGV4dHVyZS5hZGQoJ19fQkFTRScsIHNvdXJjZUluZGV4LCAwLCAwLCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZVRleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvSW1hZ2VUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBQYXJzZXMgYSBKU09OIEFycmF5IGFuZCBleHRyYWN0cyB0aGUgZnJhbWUgZGF0YSBmcm9tIGl0LlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLkpTT05BcnJheVxyXG4qIEBzdGF0aWNcclxuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHBhcmVudCBUZXh0dXJlLlxyXG4qIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gVGhlIEpTT04gZGF0YSBmcm9tIHRoZSBUZXh0dXJlIEF0bGFzLiBNdXN0IGJlIGluIEFycmF5IGZvcm1hdC5cclxuKiBAcmV0dXJuIHtQaGFzZXIuRnJhbWVEYXRhfSBBIEZyYW1lRGF0YSBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyc2VkIGZyYW1lcy5cclxuKi9cclxudmFyIEpTT05BcnJheVRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgsIGpzb24pXHJcbntcclxuICAgIC8vICBNYWxmb3JtZWQ/XHJcbiAgICBpZiAoIWpzb25bJ2ZyYW1lcyddKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBUZXh0dXJlIEF0bGFzIEpTT04gQXJyYXkgZ2l2ZW4sIG1pc3NpbmcgXFwnZnJhbWVzXFwnIGFycmF5Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBBZGQgaW4gYSBfX0JBU0UgZW50cnkgKGZvciB0aGUgZW50aXJlIGF0bGFzKVxyXG4gICAgdmFyIHNvdXJjZSA9IHRleHR1cmUuc291cmNlW3NvdXJjZUluZGV4XTtcclxuICAgIHRleHR1cmUuYWRkKCdfX0JBU0UnLCBzb3VyY2VJbmRleCwgMCwgMCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0KTtcclxuXHJcbiAgICAvLyAgQnkgdGhpcyBzdGFnZSBmcmFtZXMgaXMgYSBmdWxseSBwYXJzZWQgYXJyYXlcclxuICAgIHZhciBmcmFtZXMgPSBqc29uWydmcmFtZXMnXTtcclxuICAgIHZhciBuZXdGcmFtZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgc3JjID0gZnJhbWVzW2ldO1xyXG5cclxuICAgICAgICAvLyAgVGhlIGZyYW1lIHZhbHVlcyBhcmUgdGhlIGV4YWN0IGNvb3JkaW5hdGVzIHRvIGN1dCB0aGUgZnJhbWUgb3V0IG9mIHRoZSBhdGxhcyBmcm9tXHJcbiAgICAgICAgbmV3RnJhbWUgPSB0ZXh0dXJlLmFkZChzcmMuZmlsZW5hbWUsIHNvdXJjZUluZGV4LCBzcmMuZnJhbWUueCwgc3JjLmZyYW1lLnksIHNyYy5mcmFtZS53LCBzcmMuZnJhbWUuaCk7XHJcblxyXG4gICAgICAgIC8vICBUaGVzZSBhcmUgdGhlIG9yaWdpbmFsIChub24tdHJpbW1lZCkgc3ByaXRlIHZhbHVlc1xyXG4gICAgICAgIGlmIChzcmMudHJpbW1lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0ZyYW1lLnNldFRyaW0oXHJcbiAgICAgICAgICAgICAgICBzcmMuc291cmNlU2l6ZS53LFxyXG4gICAgICAgICAgICAgICAgc3JjLnNvdXJjZVNpemUuaCxcclxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLngsXHJcbiAgICAgICAgICAgICAgICBzcmMuc3ByaXRlU291cmNlU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgc3JjLnNwcml0ZVNvdXJjZVNpemUudyxcclxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLmhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzcmMucm90YXRlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0ZyYW1lLnJvdGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlNPTkFycmF5VGV4dHVyZVBhcnNlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvcGFyc2Vycy9KU09OQXJyYXlUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBQYXJzZXMgYSBKU09OIEFycmF5IGFuZCBleHRyYWN0cyB0aGUgZnJhbWUgZGF0YSBmcm9tIGl0LlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5UZXh0dXJlUGFyc2VyLkpTT05BcnJheVxyXG4qIEBzdGF0aWNcclxuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHBhcmVudCBUZXh0dXJlLlxyXG4qIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gVGhlIEpTT04gZGF0YSBmcm9tIHRoZSBUZXh0dXJlIEF0bGFzLiBNdXN0IGJlIGluIEpTT04gSGFzaCBmb3JtYXQuXHJcbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXHJcbiovXHJcbnZhciBKU09OSGFzaFRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwgc291cmNlSW5kZXgsIGpzb24pXHJcbntcclxuICAgIC8vICBNYWxmb3JtZWQ/XHJcbiAgICBpZiAoIWpzb25bJ2ZyYW1lcyddKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBUZXh0dXJlIEF0bGFzIEpTT04gSGFzaCBnaXZlbiwgbWlzc2luZyBcXCdmcmFtZXNcXCcgT2JqZWN0Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBBZGQgaW4gYSBfX0JBU0UgZW50cnkgKGZvciB0aGUgZW50aXJlIGF0bGFzKVxyXG4gICAgdmFyIHNvdXJjZSA9IHRleHR1cmUuc291cmNlW3NvdXJjZUluZGV4XTtcclxuICAgIHRleHR1cmUuYWRkKCdfX0JBU0UnLCBzb3VyY2VJbmRleCwgMCwgMCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0KTtcclxuXHJcbiAgICAvLyAgQnkgdGhpcyBzdGFnZSBmcmFtZXMgaXMgYSBmdWxseSBwYXJzZWQgT2JqZWN0XHJcbiAgICB2YXIgZnJhbWVzID0ganNvblsnZnJhbWVzJ107XHJcbiAgICB2YXIgbmV3RnJhbWU7XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGZyYW1lcylcclxuICAgIHtcclxuICAgICAgICB2YXIgc3JjID0gZnJhbWVzW2tleV07XHJcblxyXG4gICAgICAgIC8vICBUaGUgZnJhbWUgdmFsdWVzIGFyZSB0aGUgZXhhY3QgY29vcmRpbmF0ZXMgdG8gY3V0IHRoZSBmcmFtZSBvdXQgb2YgdGhlIGF0bGFzIGZyb21cclxuICAgICAgICBuZXdGcmFtZSA9IHRleHR1cmUuYWRkKGtleSwgc291cmNlSW5kZXgsIHNyYy5mcmFtZS54LCBzcmMuZnJhbWUueSwgc3JjLmZyYW1lLncsIHNyYy5mcmFtZS5oKTtcclxuXHJcbiAgICAgICAgLy8gIFRoZXNlIGFyZSB0aGUgb3JpZ2luYWwgKG5vbi10cmltbWVkKSBzcHJpdGUgdmFsdWVzXHJcbiAgICAgICAgaWYgKHNyYy50cmltbWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3RnJhbWUuc2V0VHJpbShcclxuICAgICAgICAgICAgICAgIHNyYy5zb3VyY2VTaXplLncsXHJcbiAgICAgICAgICAgICAgICBzcmMuc291cmNlU2l6ZS5oLFxyXG4gICAgICAgICAgICAgICAgc3JjLnNwcml0ZVNvdXJjZVNpemUueCxcclxuICAgICAgICAgICAgICAgIHNyYy5zcHJpdGVTb3VyY2VTaXplLnksXHJcbiAgICAgICAgICAgICAgICBzcmMuc3ByaXRlU291cmNlU2l6ZS53LFxyXG4gICAgICAgICAgICAgICAgc3JjLnNwcml0ZVNvdXJjZVNpemUuaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNyYy5yb3RhdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3RnJhbWUucm90YXRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKU09OSGFzaFRleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvSlNPTkhhc2hUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBQYXJzZXMgYSBQeXhlbCBKU09OIEZpbGUgYW5kIGV4dHJhY3RzIHRoZSBmcmFtZSBkYXRhIGZyb20gaXQuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlRleHR1cmVQYXJzZXIuSlNPTkFycmF5XHJcbiogQHN0YXRpY1xyXG4qIEBwYXJhbSB7UGhhc2VyLlRleHR1cmV9IHRleHR1cmUgLSBUaGUgcGFyZW50IFRleHR1cmUuXHJcbiogQHBhcmFtIHtvYmplY3R9IGpzb24gLSBUaGUgSlNPTiBkYXRhIGZyb20gdGhlIFRleHR1cmUgQXRsYXMuIE11c3QgYmUgaW4gUHl4ZWwgSlNPTiBmb3JtYXQuXHJcbiogQHJldHVybiB7UGhhc2VyLkZyYW1lRGF0YX0gQSBGcmFtZURhdGEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBmcmFtZXMuXHJcbiovXHJcbnZhciBQeXhlbFRleHR1cmVQYXJzZXIgPSBmdW5jdGlvbiAodGV4dHVyZSwganNvbilcclxue1xyXG4gICAgLy8gIE1hbGZvcm1lZD8gVGhlcmUgYXJlIGEgZmV3IGtleXMgdG8gY2hlY2sgaGVyZS5cclxuICAgIHZhciBzaWduYXR1cmUgPSBbICdsYXllcnMnLCAndGlsZXdpZHRoJywgJ3RpbGVoZWlnaHQnLCAndGlsZXN3aWRlJywgJ3RpbGVzaGlnaCcgXTtcclxuXHJcbiAgICBzaWduYXR1cmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICghanNvbltrZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdQaGFzZXIuQW5pbWF0aW9uUGFyc2VyLkpTT05EYXRhUHl4ZWw6IEludmFsaWQgUHl4ZWwgVGlsZW1hcCBKU09OIGdpdmVuLCBtaXNzaW5nIFwiJyArIGtleSArICdcIiBrZXkuJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRm9yIHRoaXMgcHVycG9zZSwgSSBvbmx5IGNhcmUgYWJvdXQgcGFyc2luZyB0aWxlbWFwcyB3aXRoIGEgc2luZ2xlIGxheWVyLlxyXG4gICAgaWYgKGpzb25bJ2xheWVycyddLmxlbmd0aCAhPT0gMSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ1BoYXNlci5BbmltYXRpb25QYXJzZXIuSlNPTkRhdGFQeXhlbDogVG9vIG1hbnkgbGF5ZXJzLCB0aGlzIHBhcnNlciBvbmx5IHN1cHBvcnRzIGZsYXQgVGlsZW1hcHMuJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gbmV3IFBoYXNlci5GcmFtZURhdGEoKTtcclxuXHJcbiAgICB2YXIgdGlsZWhlaWdodCA9IGpzb25bJ3RpbGVoZWlnaHQnXTtcclxuICAgIHZhciB0aWxld2lkdGggPSBqc29uWyd0aWxld2lkdGgnXTtcclxuXHJcbiAgICB2YXIgZnJhbWVzID0ganNvblsnbGF5ZXJzJ11bMF1bJ3RpbGVzJ107XHJcbiAgICB2YXIgbmV3RnJhbWU7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbmV3RnJhbWUgPSBkYXRhLmFkZEZyYW1lKG5ldyBQaGFzZXIuRnJhbWUoXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIGZyYW1lc1tpXS54LFxyXG4gICAgICAgICAgICBmcmFtZXNbaV0ueSxcclxuICAgICAgICAgICAgdGlsZXdpZHRoLFxyXG4gICAgICAgICAgICB0aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICBcImZyYW1lX1wiICsgaSAgLy8gTm8gbmFtZXMgYXJlIGluY2x1ZGVkIGluIHB5eGVsIHRpbGVtYXAgZGF0YS5cclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gTm8gdHJpbSBkYXRhIGlzIGluY2x1ZGVkLlxyXG4gICAgICAgIG5ld0ZyYW1lLnNldFRyaW0oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQeXhlbFRleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvUHl4ZWxUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBQYXJzZSBhIFNwcml0ZSBTaGVldCBhbmQgZXh0cmFjdHMgdGhlIGZyYW1lIGRhdGEgZnJvbSBpdC5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZVBhcnNlci5TcHJpdGVTaGVldFxyXG4qIEBzdGF0aWNcclxuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHBhcmVudCBUZXh0dXJlLlxyXG4qIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBGcmFtZSB3aXRoaW4gdGhlIFRleHR1cmUgdGhhdCB0aGUgU3ByaXRlIFNoZWV0IGlzIHN0b3JlZCBpbi5cclxuKiBAcGFyYW0ge251bWJlcn0gZnJhbWVXaWR0aCAtIFRoZSBmaXhlZCB3aWR0aCBvZiBlYWNoIGZyYW1lLlxyXG4qIEBwYXJhbSB7bnVtYmVyfSBmcmFtZUhlaWdodCAtIFRoZSBmaXhlZCBoZWlnaHQgb2YgZWFjaCBmcmFtZS5cclxuKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0RnJhbWU9MF0gLSBTa2lwIGEgbnVtYmVyIG9mIGZyYW1lcy4gVXNlZnVsIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHNwcml0ZSBzaGVldHMgaW4gb25lIFRleHR1cmUuXHJcbiogQHBhcmFtIHtudW1iZXJ9IFtlbmRGcmFtZT0tMV0gLSBUaGUgdG90YWwgbnVtYmVyIG9mIGZyYW1lcyB0byBleHRyYWN0IGZyb20gdGhlIFNwcml0ZSBTaGVldC4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgLTEgbWVhbnMgXCJleHRyYWN0IGFsbCBmcmFtZXNcIi5cclxuKiBAcGFyYW0ge251bWJlcn0gW21hcmdpbj0wXSAtIElmIHRoZSBmcmFtZXMgaGF2ZSBiZWVuIGRyYXduIHdpdGggYSBtYXJnaW4sIHNwZWNpZnkgdGhlIGFtb3VudCBoZXJlLlxyXG4qIEBwYXJhbSB7bnVtYmVyfSBbc3BhY2luZz0wXSAtIElmIHRoZSBmcmFtZXMgaGF2ZSBiZWVuIGRyYXduIHdpdGggc3BhY2luZyBiZXR3ZWVuIHRoZW0sIHNwZWNpZnkgdGhlIGFtb3VudCBoZXJlLlxyXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxyXG4qL1xyXG52YXIgU3ByaXRlU2hlZXRUZXh0dXJlUGFyc2VyID0gZnVuY3Rpb24gKHRleHR1cmUsIHNvdXJjZUluZGV4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIG1hcmdpbiwgc3BhY2luZylcclxue1xyXG4gICAgaWYgKHN0YXJ0RnJhbWUgPT09IHVuZGVmaW5lZCkgeyBzdGFydEZyYW1lID0gMDsgfVxyXG4gICAgaWYgKGVuZEZyYW1lID09PSB1bmRlZmluZWQpIHsgZW5kRnJhbWUgPSAtMTsgfVxyXG4gICAgaWYgKG1hcmdpbiA9PT0gdW5kZWZpbmVkKSB7IG1hcmdpbiA9IDA7IH1cclxuICAgIGlmIChzcGFjaW5nID09PSB1bmRlZmluZWQpIHsgc3BhY2luZyA9IDA7IH1cclxuXHJcbiAgICB2YXIgcm93ID0gTWF0aC5mbG9vcigod2lkdGggLSBtYXJnaW4pIC8gKGZyYW1lV2lkdGggKyBzcGFjaW5nKSk7XHJcbiAgICB2YXIgY29sdW1uID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gbWFyZ2luKSAvIChmcmFtZUhlaWdodCArIHNwYWNpbmcpKTtcclxuICAgIHZhciB0b3RhbCA9IHJvdyAqIGNvbHVtbjtcclxuXHJcbiAgICBpZiAoc3RhcnRGcmFtZSA+IHRvdGFsIHx8IHN0YXJ0RnJhbWUgPCAtdG90YWwpXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnRGcmFtZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXJ0RnJhbWUgPCAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBBbGxvdyBuZWdhdGl2ZSBza2lwZnJhbWVzLlxyXG4gICAgICAgIHN0YXJ0RnJhbWUgPSB0b3RhbCArIHN0YXJ0RnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVuZEZyYW1lICE9PSAtMSlcclxuICAgIHtcclxuICAgICAgICB0b3RhbCA9IHN0YXJ0RnJhbWUgKyAoZW5kRnJhbWUgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZnggPSBtYXJnaW47XHJcbiAgICB2YXIgZnkgPSBtYXJnaW47XHJcbiAgICB2YXIgYXggPSAwO1xyXG4gICAgdmFyIGF5ID0gMDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgYXggPSAwO1xyXG4gICAgICAgIGF5ID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHcgPSBmeCArIGZyYW1lV2lkdGg7XHJcbiAgICAgICAgdmFyIGggPSBmeSArIGZyYW1lSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodyA+IHdpZHRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXggPSB3IC0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaCA+IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF5ID0gaCAtIGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHR1cmUuYWRkKGksIHNvdXJjZUluZGV4LCB4ICsgZngsIHkgKyBmeSwgZnJhbWVXaWR0aCAtIGF4LCBmcmFtZUhlaWdodCAtIGF5KTtcclxuXHJcbiAgICAgICAgZnggKz0gZnJhbWVXaWR0aCArIHNwYWNpbmc7XHJcblxyXG4gICAgICAgIGlmIChmeCArIGZyYW1lV2lkdGggPiB3aWR0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZ4ID0gbWFyZ2luO1xyXG4gICAgICAgICAgICBmeSArPSBmcmFtZUhlaWdodCArIHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVTaGVldFRleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvU3ByaXRlU2hlZXRUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBQYXJzZXMgdGhlIFhNTCBhbmQgZXh0cmFjdHMgdGhlIGZyYW1lIGRhdGEgZnJvbSBpdC5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuVGV4dHVyZVBhcnNlci5TdGFybGluZ1hNTFxyXG4qIEBzdGF0aWNcclxuKiBAcGFyYW0ge1BoYXNlci5UZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHBhcmVudCBUZXh0dXJlLlxyXG4qIEBwYXJhbSB7b2JqZWN0fSB4bWwgLSBUaGUgWE1MIGRhdGEgZnJvbSB0aGUgVGV4dHVyZSBBdGxhcy4gTXVzdCBiZSBpbiBTdGFybGluZyBYTUwgZm9ybWF0LlxyXG4qIEByZXR1cm4ge1BoYXNlci5GcmFtZURhdGF9IEEgRnJhbWVEYXRhIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJzZWQgZnJhbWVzLlxyXG4qL1xyXG52YXIgU3RhcmxpbmdYTUxUZXh0dXJlUGFyc2VyID0gZnVuY3Rpb24gKHRleHR1cmUsIHhtbClcclxue1xyXG4gICAgLy8gIE1hbGZvcm1lZD9cclxuICAgIGlmICgheG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUZXh0dXJlQXRsYXMnKSlcclxuICAgIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJQaGFzZXIuQW5pbWF0aW9uUGFyc2VyLlhNTERhdGE6IEludmFsaWQgVGV4dHVyZSBBdGxhcyBYTUwgZ2l2ZW4sIG1pc3NpbmcgPFRleHR1cmVBdGxhcz4gdGFnXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgTGV0J3MgY3JlYXRlIHNvbWUgZnJhbWVzIHRoZW5cclxuICAgIHZhciBkYXRhID0gbmV3IFBoYXNlci5GcmFtZURhdGEoKTtcclxuICAgIHZhciBmcmFtZXMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1N1YlRleHR1cmUnKTtcclxuICAgIHZhciBuZXdGcmFtZTtcclxuXHJcbiAgICB2YXIgbmFtZTtcclxuICAgIHZhciBmcmFtZTtcclxuICAgIHZhciB4O1xyXG4gICAgdmFyIHk7XHJcbiAgICB2YXIgd2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0O1xyXG4gICAgdmFyIGZyYW1lWDtcclxuICAgIHZhciBmcmFtZVk7XHJcbiAgICB2YXIgZnJhbWVXaWR0aDtcclxuICAgIHZhciBmcmFtZUhlaWdodDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBmcmFtZSA9IGZyYW1lc1tpXS5hdHRyaWJ1dGVzO1xyXG5cclxuICAgICAgICBuYW1lID0gZnJhbWUubmFtZS52YWx1ZTtcclxuICAgICAgICB4ID0gcGFyc2VJbnQoZnJhbWUueC52YWx1ZSwgMTApO1xyXG4gICAgICAgIHkgPSBwYXJzZUludChmcmFtZS55LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgd2lkdGggPSBwYXJzZUludChmcmFtZS53aWR0aC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGZyYW1lLmhlaWdodC52YWx1ZSwgMTApO1xyXG5cclxuICAgICAgICBmcmFtZVggPSBudWxsO1xyXG4gICAgICAgIGZyYW1lWSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChmcmFtZS5mcmFtZVgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmcmFtZVggPSBNYXRoLmFicyhwYXJzZUludChmcmFtZS5mcmFtZVgudmFsdWUsIDEwKSk7XHJcbiAgICAgICAgICAgIGZyYW1lWSA9IE1hdGguYWJzKHBhcnNlSW50KGZyYW1lLmZyYW1lWS52YWx1ZSwgMTApKTtcclxuICAgICAgICAgICAgZnJhbWVXaWR0aCA9IHBhcnNlSW50KGZyYW1lLmZyYW1lV2lkdGgudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBwYXJzZUludChmcmFtZS5mcmFtZUhlaWdodC52YWx1ZSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3RnJhbWUgPSBkYXRhLmFkZEZyYW1lKG5ldyBQaGFzZXIuRnJhbWUoaSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyAgVHJpbW1lZD9cclxuICAgICAgICBpZiAoZnJhbWVYICE9PSBudWxsIHx8IGZyYW1lWSAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0ZyYW1lLnNldFRyaW0odHJ1ZSwgd2lkdGgsIGhlaWdodCwgZnJhbWVYLCBmcmFtZVksIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdGFybGluZ1hNTFRleHR1cmVQYXJzZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3RleHR1cmVzL3BhcnNlcnMvU3RhcmxpbmdYTUxUZXh0dXJlUGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBDYW52YXM6IHJlcXVpcmUoJy4vQ2FudmFzVGV4dHVyZVBhcnNlcicpLFxyXG4gICAgSW1hZ2U6IHJlcXVpcmUoJy4vSW1hZ2VUZXh0dXJlUGFyc2VyJyksXHJcbiAgICBTcHJpdGVTaGVldDogcmVxdWlyZSgnLi9TcHJpdGVTaGVldFRleHR1cmVQYXJzZXInKSxcclxuICAgIEpTT05BcnJheTogcmVxdWlyZSgnLi9KU09OQXJyYXlUZXh0dXJlUGFyc2VyJyksXHJcbiAgICBKU09OSGFzaDogcmVxdWlyZSgnLi9KU09OSGFzaFRleHR1cmVQYXJzZXInKSxcclxuICAgIFN0YXJsaW5nWE1MOiByZXF1aXJlKCcuL1N0YXJsaW5nWE1MVGV4dHVyZVBhcnNlcicpLFxyXG4gICAgUHl4ZWw6IHJlcXVpcmUoJy4vUHl4ZWxUZXh0dXJlUGFyc2VyJylcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGV4dHVyZXMvcGFyc2Vycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdGV4dHVyZXMvcGFyc2Vycy9pbmRleC5qcyIsIi8qKlxyXG4qIENyZWF0ZSBhbiBhcnJheSByZXByZXNlbnRpbmcgdGhlIHJhbmdlIG9mIG51bWJlcnMgKHVzdWFsbHkgaW50ZWdlcnMpLCBiZXR3ZWVuLCBhbmQgaW5jbHVzaXZlIG9mLFxyXG4qIHRoZSBnaXZlbiBgc3RhcnRgIGFuZCBgZW5kYCBhcmd1bWVudHMuIEZvciBleGFtcGxlOlxyXG4qXHJcbiogYHZhciBhcnJheSA9IG51bWJlckFycmF5KDIsIDQpOyAvLyBhcnJheSA9IFsyLCAzLCA0XWBcclxuKiBgdmFyIGFycmF5ID0gbnVtYmVyQXJyYXkoMCwgOSk7IC8vIGFycmF5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldYFxyXG4qIFxyXG4qIFRoaXMgaXMgZXF1aXZhbGVudCB0byBgbnVtYmVyQXJyYXlTdGVwKHN0YXJ0LCBlbmQsIDEpYC5cclxuKiBcclxuKiBZb3UgY2FuIG9wdGlvbmFsbHkgcHJvdmlkZSBhIHByZWZpeCBhbmQgLyBvciBzdWZmaXggc3RyaW5nLiBJZiBnaXZlbiB0aGUgYXJyYXkgd2lsbCBjb250YWluXHJcbiogc3RyaW5ncywgbm90IGludGVnZXJzLiBGb3IgZXhhbXBsZTpcclxuKiBcclxuKiBgdmFyIGFycmF5ID0gbnVtYmVyQXJyYXkoMSwgNCwgJ0xldmVsICcpOyAvLyBhcnJheSA9IFtcIkxldmVsIDFcIiwgXCJMZXZlbCAyXCIsIFwiTGV2ZWwgM1wiLCBcIkxldmVsIDRcIl1gXHJcbiogYHZhciBhcnJheSA9IG51bWJlckFycmF5KDUsIDcsICdIRC0nLCAnLnBuZycpOyAvLyBhcnJheSA9IFtcIkhELTUucG5nXCIsIFwiSEQtNi5wbmdcIiwgXCJIRC03LnBuZ1wiXWBcclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLkFycmF5VXRpbHMjbnVtYmVyQXJyYXlcclxuKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgbWluaW11bSB2YWx1ZSB0aGUgYXJyYXkgc3RhcnRzIHdpdGguXHJcbiogQHBhcmFtIHtudW1iZXJ9IGVuZCAtIFRoZSBtYXhpbXVtIHZhbHVlIHRoZSBhcnJheSBjb250YWlucy5cclxuKiBAcGFyYW0ge3N0cmluZ30gW3ByZWZpeF0gLSBPcHRpb25hbCBwcmVmaXggdG8gcGxhY2UgYmVmb3JlIHRoZSBudW1iZXIuIElmIHByb3ZpZGVkIHRoZSBhcnJheSB3aWxsIGNvbnRhaW4gc3RyaW5ncywgbm90IGludGVnZXJzLlxyXG4qIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSAtIE9wdGlvbmFsIHN1ZmZpeCB0byBwbGFjZSBhZnRlciB0aGUgbnVtYmVyLiBJZiBwcm92aWRlZCB0aGUgYXJyYXkgd2lsbCBjb250YWluIHN0cmluZ3MsIG5vdCBpbnRlZ2Vycy5cclxuKiBAcmV0dXJuIHtudW1iZXJbXXxzdHJpbmdbXX0gVGhlIGFycmF5IG9mIG51bWJlciB2YWx1ZXMsIG9yIHN0cmluZ3MgaWYgYSBwcmVmaXggb3Igc3VmZml4IHdhcyBwcm92aWRlZC5cclxuKi9cclxudmFyIE51bWJlckFycmF5ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHByZWZpeCwgc3VmZml4KVxyXG57XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IChwcmVmaXgpID8gcHJlZml4ICsgaS50b1N0cmluZygpIDogaS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1ZmZpeClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LmNvbmNhdChzdWZmaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyQXJyYXk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL2FycmF5L051bWJlckFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZDovd2FtcC93d3cvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9waGFzZXIuanMiLCJyZXF1aXJlKCcuL3BvbHlmaWxscycpO1xyXG5cclxudmFyIGJvb3QgPSByZXF1aXJlKCcuL2Jvb3QnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYm9vdDtcclxuXHJcbmdsb2JhbC5QaGFzZXIgPSBib290O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9waGFzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=