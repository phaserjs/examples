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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)))

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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var CanvasPool = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

var FILE_CONST = {

    PENDING: 0,      // file is in the load queue but not yet started
    LOADING: 1,      // file has been started to load by the loader (onLoad called)
    LOADED: 2,       // file has loaded successfully, awaiting processing
    FAILED: 3,       // file failed to load
    PROCESSING: 4,   // file is being processed (onProcess callback)
    COMPLETE: 5,     // file has finished processing
    DESTROYED: 6     // file has been destroyed

};

module.exports = FILE_CONST;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

// var FILE_CONST = require('../const');
var File = __webpack_require__(32);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(1);
var GetObjectValue = __webpack_require__(5);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var GameObjectFactory = __webpack_require__(48);
var GameObjectCreator = __webpack_require__(47);
var Loader = __webpack_require__(49);
var MainLoop = __webpack_require__(50);
var UpdateManager = __webpack_require__(51);

var Systems = function (state, config)
{
    this.state = state;

    this.config = config;

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
/* 13 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(19),

    Loader: {
        ImageFile: __webpack_require__(10)
    }

};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(42);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(41);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(13);
var GetObjectValue = __webpack_require__(5);

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CanvasPool = __webpack_require__(8);
var Features = __webpack_require__(7);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(20);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(25);
var Config = __webpack_require__(16);
var DebugHeader = __webpack_require__(18);
var CreateRenderer = __webpack_require__(17);
var RequestAnimationFrame = __webpack_require__(27);
var DOMContentLoaded = __webpack_require__(26);
var RandomDataGenerator = __webpack_require__(36);
var StateManager = __webpack_require__(46);
var FactoryContainer = __webpack_require__(3);
var GameObjects = __webpack_require__ (30);

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
/* 20 */
/***/ function(module, exports) {

var CHECKSUM = {
build: 'e8302980-b761-11e6-808f-8dff22c5f4af'
};
module.exports = CHECKSUM;

/***/ },
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(7);
var Input = __webpack_require__(23);
var Audio = __webpack_require__(21);
var Video = __webpack_require__(24);
var Fullscreen = __webpack_require__(22);

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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(28);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//  
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__ (29);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {


var FILE_CONST = __webpack_require__(9);
var Set = __webpack_require__(52);
var XHRSettings = __webpack_require__(4);

var BaseLoader = function ()
{
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

    this._state = 'PENDING';
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

            file.fileA.tag = this.tag;
            file.fileB.tag = this.tag;

            this.list.add(file.fileA);
            this.list.add(file.fileB);
        }
        else
        {
            file.path = this.path;
            // file.tag = this.tag;

            this.list.add(file);
        }

        return this;
    },

    //  Is the Loader actively loading (or processing loaded files)
    isLoading: function ()
    {
        return (this._state === 'LOADING' || this._state === 'PROCESSING');
    },

    //  Is the Loader ready to start a new load?
    isReady: function ()
    {
        return (this._state === 'PENDING' || this._state === 'COMPLETE' || this._state === 'FAILED');
    },

    start: function ()
    {
        console.log('BaseLoader start. Files to load:', this.list.size);

        if (!this.isReady())
        {
            return;
        }

        if (this.list.size === 0)
        {
            this.finishedLoading();
        }
        else
        {
            // this.state = LOADING;

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
        console.log('BaseLoader processLoadQueue', this.list.size);

        var _this = this;

        this.list.each(function (file)
        {
            if (file.state === FILE_CONST.PENDING && _this.inflight.size < _this.maxParallelDownloads)
            {
                console.log('ADDED TO QUEUE:', file.key);

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
        console.log('LOADING', file.key);

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
        console.log('LOADED:', previousFile.src, success);

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
            console.log('nextFile - still something in the list');
            this.processLoadQueue();
        }
        else if (this.inflight.size === 0)
        {
            console.log('nextFile calling finishedLoading');
            this.finishedLoading();
        }
    },

    finishedLoading: function ()
    {
        console.log('BaseLoader.finishedLoading PROCESSING');

        this.state = 'PROCESSING';

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

        console.log('Loader Complete. Loaded:', storage.size, 'Failed:', this.failed.size);

        console.log('BaseLoader COMPLETE');

        this.state = 'COMPLETE';

        //  Dispatch 'on complete' signals now
    },

    /*
    getLoadedFilesByType (type, group = '', output = []) {

        //  Return an array of all files that have state = COMPLETE (which means loaded + processed)

        for (let file of this.storage)
        {
            if (file.state === FILE.COMPLETE && file.tag === group && file.type === type)
            {
                output.push(file);
            }
        }

        return output;

    },

    getLoadedFiles (group = '', output = []) {

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
    */

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

        this.state = 'PENDING';
    },

    destroy: function ()
    {
        this.reset();
        this.state = 'DESTROYED';
    }

};

module.exports = BaseLoader;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(33);
var FILE_CONST = __webpack_require__(9);
var XHRLoader = __webpack_require__(35);
var XHRSettings = __webpack_require__(4);

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

    this.state = FILE_CONST.PENDING;

    //  Set by onProgress
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var XHRSettings = __webpack_require__(4);

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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(34);

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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(11);
var Systems = __webpack_require__(12);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(13);
var State = __webpack_require__(45);
var Settings = __webpack_require__(11);
var Systems = __webpack_require__(12);
var GetObjectValue = __webpack_require__(5);

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

        console.log('StateManager.boot');

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

            console.log('StateManager not yet booted, adding to list', this._pending.length);

            return;
        }

        key = this.getKey(key, stateConfig);

        var newState;

        if (stateConfig instanceof State)
        {
            console.log('StateManager.add from instance', key);
            newState = this.createStateFromInstance(key, stateConfig);
        }
        else if (typeof stateConfig === 'object')
        {
            console.log('StateManager.add from object', key);

            stateConfig.key = key;

            newState = this.createStateFromObject(key, stateConfig);
        }
        else if (typeof stateConfig === 'function')
        {
            console.log('StateManager.add from function', key);

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
            console.log('StateManager not yet booted, setting autoStart on pending list');

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
                    console.log('empty queue');
                    this.startCreate(state);
                }
                else
                {
                    console.log('load start');

                    //  Start the loader going as we have something in the queue
                    // state.load.onLoadComplete.addOnce(this.loadComplete, this, 0, state);

                    state.sys.load.start();
                }
            }
            else
            {
                console.log('no preload');

                //  No preload? Then there was nothing to load either
                this.startCreate(state);
            }

        }
    },

    loadComplete: function (state)
    {
        console.log('loadComplete');

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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var BaseLoader = __webpack_require__(31);
var ImageLoader = __webpack_require__(10);

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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(15);

var boot = __webpack_require__(14);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYjFkMDIzMzEzYTI0YjBkYzdjZiIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL09TLmpzIiwid2VicGFjazovLy8uLi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2ZpbGV0eXBlcy9JbWFnZUZpbGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3V0aWxzL05PT1AuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvcG9seWZpbGxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9EZWJ1Z0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy9zcmMvYm9vdC9HYW1lLmpzIiwid2VicGFjazovLy8uLi9jaGVja3N1bS5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0F1ZGlvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0F1ZGlvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9WaWRlby5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9WaWRlby5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy8uLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy9zcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvQmFzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9CYXNlTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9GaWxlLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvR2V0VVJMLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvWEhSTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9BcnJheS5pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL01hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9NYWluTG9vcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9VcGRhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9zdHJ1Y3RzL1NldC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3JpY2gvRG9jdW1lbnRzL3BoYXNlci92My9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3BoYXNlci5qcyIsIndlYnBhY2s6Ly8vLi4vcGhhc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLCtDQ0FBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxHQUFHLHVCQUF1QixPQUFPO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyUUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FDdkRBLFNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU8sc0dBQXNHO0FBQzlIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRTVLQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hELDhCQUE4QixjQUFjO0FBQzVDLDZCQUE2QixXQUFXO0FBQ3hDLGlDQUFpQyxlQUFlO0FBQ2hELGdDQUFnQyxhQUFhOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhLEVBQUU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ2xCQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXJPQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QyxtQ0FBbUMsWUFBWTtBQUMvQyxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBRXhMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ1pBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFbENBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFdkNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSx3QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx3QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxhQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esb0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBRWhJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsVUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQSxtQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQTs7QUFFQTs7Ozs7OztBRVRBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFdDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTs7QUFFNUM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU5REE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU5RUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUUzRkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsYUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxrQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSw0QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSwwQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxtQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxrQkNBQSxtQkRBQSxFQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUVySEE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7OztBQ0hBLFNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELDZFQUE2RTtBQUNqSTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCwwQ0FBMEM7QUFDaEc7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRTFJQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFM0ZBLFNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRTdEQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFeEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFlDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBRXZCQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVyREE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFEQUFxRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLHdFQUF3RTtBQUN0RixjQUFjLGNBQWM7QUFDNUIsY0FBYyxhQUFhO0FBQzNCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9COztBQUV0RDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRWhEQTtBQUNBO0FBQ0E7O0FDRUEsbUJEQUEsRUNBQSxFREFBOzs7Ozs7OztBRUhBLGlCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFdFJBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZ0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGNBQWM7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBRWxIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBLGtCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBRTFCQSx1QkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXJDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQUk7QUFDZCxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUEsOENBQThDO0FBQzlDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHdDQUF3QztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsZUFBZSxJQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsZUFBZSxJQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNuVkE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7OztBQ3ZMRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUI7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7OztBQy9CRCw4Q0NBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxxREFBcUQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV4REE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxZQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsY0NBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLDZCQUE2QjtBQUMzQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0NBQXdDLHdCQUF3Qjs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwwQkFBMEIseUJBQXlCOztBQUVuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUEsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUEsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRTVpQkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLHVCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFdkNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQSxpQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxrQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRWhDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7OztBQ3JIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7OzhDQ25MdEMsbUJDQUEsQ0RBQSxFQ0FBOztBQUVBLFdEQUEsbUJDQUEsQ0RBQSxFQ0FBOztBQUVBOztBQUVBIiwiZmlsZSI6InBoYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUGhhc2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBoYXNlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQaGFzZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYjFkMDIzMzEzYTI0YjBkYzdjZiIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9PUy5qcyIsInZhciBPUyA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBkZXNrdG9wIC0gSXMgcnVubmluZyBvbiBhIGRlc2t0b3A/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZGVza3RvcDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViQXBwIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBhcyBhIFdlYkFwcCwgaS5lLiB3aXRoaW4gYSBXZWJWaWV3XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2ViQXBwOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpT1MgLSBJcyBydW5uaW5nIG9uIGlPUz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpT1M6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gaU9TVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gaU9TIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpT1NWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQaG9uZSAtIElzIHJ1bm5pbmcgb24gaVBob25lP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGlQaG9uZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaVBhZCAtIElzIHJ1bm5pbmcgb24gaVBhZD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpUGFkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjb2Nvb25KUyAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgQ29jb29uSlM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY29jb29uSlM6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjb2Nvb25KU0FwcCAtIElzIHRoaXMgZ2FtZSBydW5uaW5nIHdpdGggQ29jb29uSlMuQXBwP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNvY29vbkpTQXBwOiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29yZG92YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgQXBhY2hlIENvcmRvdmE/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY29yZG92YTogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZGUgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIE5vZGUuanM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbm9kZTogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG5vZGVXZWJraXQgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIE5vZGUtV2Via2l0P1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG5vZGVXZWJraXQ6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlbGVjdHJvbiAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgR2l0SHViIEVsZWN0cm9uP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGVsZWN0cm9uOiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWplY3RhIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBFamVjdGE/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZWplY3RhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjcm9zc3dhbGsgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIHRoZSBJbnRlbCBDcm9zc3dhbGsgWERLP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNyb3Nzd2FsazogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYW5kcm9pZCAtIElzIHJ1bm5pbmcgb24gYW5kcm9pZD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBhbmRyb2lkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjaHJvbWVPUyAtIElzIHJ1bm5pbmcgb24gY2hyb21lT1M/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2hyb21lT1M6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpbnV4IC0gSXMgcnVubmluZyBvbiBsaW51eD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBsaW51eDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbWFjT1MgLSBJcyBydW5uaW5nIG9uIG1hY09TP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1hY09TOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzIC0gSXMgcnVubmluZyBvbiB3aW5kb3dzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdpbmRvd3M6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdpbmRvd3NQaG9uZSAtIElzIHJ1bm5pbmcgb24gYSBXaW5kb3dzIFBob25lP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdpbmRvd3NQaG9uZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdml0YSAtIElzIHJ1bm5pbmcgb24gYSBQbGF5U3RhdGlvbiBWaXRhP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHZpdGE6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGtpbmRsZSAtIElzIHJ1bm5pbmcgb24gYW4gQW1hem9uIEtpbmRsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBraW5kbGU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gcGl4ZWxSYXRpbyAtIFBpeGVsUmF0aW8gb2YgdGhlIGhvc3QgZGV2aWNlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHBpeGVsUmF0aW86IDFcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICBpZiAoL1dpbmRvd3MvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1Mud2luZG93cyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9NYWMgT1MvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MubWFjT1MgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvTGludXgvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MubGludXggPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5hbmRyb2lkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL2lQW2FvXWR8aVBob25lL2kudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5pT1MgPSB0cnVlO1xuICAgICAgICAobmF2aWdhdG9yLmFwcFZlcnNpb24pLm1hdGNoKC9PUyAoXFxkKykvKTtcbiAgICAgICAgT1MuaU9TVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmICgvS2luZGxlLy50ZXN0KHVhKSB8fCAoL1xcYktGW0EtWl1bQS1aXSsvKS50ZXN0KHVhKSB8fCAoL1NpbGsuKk1vYmlsZSBTYWZhcmkvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmtpbmRsZSA9IHRydWU7XG5cbiAgICAgICAgLy8gVGhpcyB3aWxsIE5PVCBkZXRlY3QgZWFybHkgZ2VuZXJhdGlvbnMgb2YgS2luZGxlIEZpcmUsIEkgdGhpbmsgdGhlcmUgaXMgbm8gcmVsaWFibGUgd2F5Li4uXG4gICAgICAgIC8vIEUuZy4gXCJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBVOyBJbnRlbCBNYWMgT1MgWCAxMF82XzM7IGVuLXVzOyBTaWxrLzEuMS4wLTgwKSBBcHBsZVdlYktpdC81MzMuMTYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzUuMCBTYWZhcmkvNTMzLjE2IFNpbGstQWNjZWxlcmF0ZWQ9dHJ1ZVwiXG4gICAgfVxuICAgIGVsc2UgaWYgKC9Dck9TLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmNocm9tZU9TID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9QbGF5c3RhdGlvbiBWaXRhLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy52aXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHVhKSB8fCAoL0lFTW9iaWxlL2kpLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuYW5kcm9pZCA9IGZhbHNlO1xuICAgICAgICBPUy5pT1MgPSBmYWxzZTtcbiAgICAgICAgT1MubWFjT1MgPSBmYWxzZTtcbiAgICAgICAgT1Mud2luZG93cyA9IHRydWU7XG4gICAgICAgIE9TLndpbmRvd3NQaG9uZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNpbGsgPSAoL1NpbGsvKS50ZXN0KHVhKTtcblxuICAgIGlmIChPUy53aW5kb3dzIHx8IE9TLm1hY09TIHx8IChPUy5saW51eCAmJiAhc2lsaykgfHwgT1MuY2hyb21lT1MpXG4gICAge1xuICAgICAgICBPUy5kZXNrdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAgV2luZG93cyBQaG9uZSAvIFRhYmxlIHJlc2V0XG4gICAgaWYgKE9TLndpbmRvd3NQaG9uZSB8fCAoKC9XaW5kb3dzIE5UL2kudGVzdCh1YSkpICYmICgvVG91Y2gvaS50ZXN0KHVhKSkpKVxuICAgIHtcbiAgICAgICAgT1MuZGVza3RvcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vICBXZWJBcHAgbW9kZSBpbiBpT1NcbiAgICBpZiAobmF2aWdhdG9yLnN0YW5kYWxvbmUpXG4gICAge1xuICAgICAgICBPUy53ZWJBcHAgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAod2luZG93LmNvcmRvdmEgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIE9TLmNvcmRvdmEgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT09ICd1bmRlZmluZWQnKSlcbiAgICB7XG4gICAgICAgIE9TLm5vZGUgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoT1Mubm9kZSAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyA9PT0gJ29iamVjdCcpXG4gICAge1xuICAgICAgICBPUy5ub2RlV2Via2l0ID0gISFwcm9jZXNzLnZlcnNpb25zWydub2RlLXdlYmtpdCddO1xuICAgICAgICBcbiAgICAgICAgT1MuZWxlY3Ryb24gPSAhIXByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb247XG4gICAgfVxuICAgIFxuICAgIGlmIChuYXZpZ2F0b3IuaXNDb2Nvb25KUylcbiAgICB7XG4gICAgICAgIE9TLmNvY29vbkpTID0gdHJ1ZTtcblxuICAgICAgICB0cnlcbiAgICAgICAge1xuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSAodHlwZW9mIENvY29vbkpTICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKVxuICAgICAgICB7XG4gICAgICAgICAgICBPUy5jb2Nvb25KU0FwcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5lamVjdGEgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIE9TLmVqZWN0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCgvQ3Jvc3N3YWxrLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5jcm9zc3dhbGsgPSB0cnVlO1xuICAgIH1cblxuICAgIE9TLmlQaG9uZSA9IHVhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBob25lJykgIT09IC0xO1xuICAgIE9TLmlQYWQgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2lwYWQnKSAhPT0gLTE7XG5cbiAgICBPUy5waXhlbFJhdGlvID0gd2luZG93WydkZXZpY2VQaXhlbFJhdGlvJ10gfHwgMTtcblxuICAgIHJldHVybiBPUztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvT1MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0ge1xuXG4gICAgVkVSU0lPTjogJzMuMC4wJyxcblxuICAgIEFVVE86IDAsXG4gICAgQ0FOVkFTOiAxLFxuICAgIFdFQkdMOiAyLFxuXG4gICAgc3RhdGU6IHtcblxuICAgICAgICBQRU5ESU5HOiAwLFxuICAgICAgICBJTlNUQUxMRUQ6IDEsXG5cbiAgICAgICAgQk9PVDogMCxcbiAgICAgICAgSU5JVDogMSxcbiAgICAgICAgUFJFTE9BRDogMixcbiAgICAgICAgQ1JFQVRFOiAzLFxuICAgICAgICBVUERBVEU6IDQsXG4gICAgICAgIFJFTkRFUjogNSxcbiAgICAgICAgU0hVVERPV046IDZcblxuICAgIH0sXG5cbiAgICBibGVuZE1vZGVzOiB7XG5cbiAgICAgICAgTk9STUFMOiAwLFxuICAgICAgICBBREQ6IDEsXG4gICAgICAgIE1VTFRJUExZOiAyLFxuICAgICAgICBTQ1JFRU46IDMsXG4gICAgICAgIE9WRVJMQVk6IDQsXG4gICAgICAgIERBUktFTjogNSxcbiAgICAgICAgTElHSFRFTjogNixcbiAgICAgICAgQ09MT1JfRE9ER0U6IDcsXG4gICAgICAgIENPTE9SX0JVUk46IDgsXG4gICAgICAgIEhBUkRfTElHSFQ6IDksXG4gICAgICAgIFNPRlRfTElHSFQ6IDEwLFxuICAgICAgICBESUZGRVJFTkNFOiAxMSxcbiAgICAgICAgRVhDTFVTSU9OOiAxMixcbiAgICAgICAgSFVFOiAxMyxcbiAgICAgICAgU0FUVVJBVElPTjogMTQsXG4gICAgICAgIENPTE9SOiAxNSxcbiAgICAgICAgTFVNSU5PU0lUWTogMTZcblxuICAgIH0sXG5cbiAgICBzY2FsZU1vZGVzOiB7XG5cbiAgICAgICAgREVGQVVMVDogMCxcbiAgICAgICAgTElORUFSOiAwLFxuICAgICAgICBORUFSRVNUOiAxXG5cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ09OU1Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb25zdC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG5cbnZhciBCcm93c2VyID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFyb3JhIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBBcm9yYS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBhcm9yYTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBDaHJvbWUuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2hyb21lOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGNocm9tZVZlcnNpb24gLSBJZiBydW5uaW5nIGluIENocm9tZSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2hyb21lVmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlcGlwaGFueSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gRXBpcGhhbnkuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZXBpcGhhbnk6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpcmVmb3ggLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEZpcmVmb3guXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZmlyZWZveDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaXJlZm94VmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gRmlyZWZveCB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZmlyZWZveFZlcnNpb246IDAsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbW9iaWxlU2FmYXJpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNb2JpbGUgU2FmYXJpLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG1vYmlsZVNhZmFyaTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaWUgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGllOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGllVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLiBCZXlvbmQgSUUxMCB5b3Ugc2hvdWxkIHVzZSBEZXZpY2UudHJpZGVudCBhbmQgRGV2aWNlLnRyaWRlbnRWZXJzaW9uLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGllVmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtaWRvcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1pZG9yaS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtaWRvcmk6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wZXJhIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBPcGVyYS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBvcGVyYTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2FmYXJpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBTYWZhcmkuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgc2FmYXJpOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhZmFyaVZlcnNpb24gLSBJZiBydW5uaW5nIGluIFNhZmFyaSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgc2FmYXJpVmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB0cmlkZW50IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBhIFRyaWRlbnQgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciAoSUUxMSspXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdHJpZGVudDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0cmlkZW50VmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLiBTZWUge0BsaW5rIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9tczUzNzUwMyh2PXZzLjg1KS5hc3B4fVxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRyaWRlbnRWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVkZ2UgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1pY3Jvc29mdCBFZGdlIGJyb3dzZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZWRnZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2lsayAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gdGhlIFNpbGsgYnJvd3NlciAoYXMgdXNlZCBvbiB0aGUgQW1hem9uIEtpbmRsZSlcbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBzaWxrOiBmYWxzZVxuXG59O1xuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIGlmICgoL0Fyb3JhLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmFyb3JhID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0VkZ2VcXC9cXGQrLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuZWRnZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvQ2hyb21lXFwvKFxcZCspLykudGVzdCh1YSkgJiYgIU9TLndpbmRvd3NQaG9uZSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuY2hyb21lID0gdHJ1ZTtcbiAgICAgICAgQnJvd3Nlci5jaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvRXBpcGhhbnkvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuZXBpcGhhbnkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL0ZpcmVmb3hcXEQrKFxcZCspLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmZpcmVmb3ggPSB0cnVlO1xuICAgICAgICBCcm93c2VyLmZpcmVmb3hWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvQXBwbGVXZWJLaXQvKS50ZXN0KHVhKSAmJiBPUy5pT1MpXG4gICAge1xuICAgICAgICBCcm93c2VyLm1vYmlsZVNhZmFyaSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvTVNJRSAoXFxkK1xcLlxcZCspOy8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5pZSA9IHRydWU7XG4gICAgICAgIEJyb3dzZXIuaWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvTWlkb3JpLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLm1pZG9yaSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvT3BlcmEvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIub3BlcmEgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL1NhZmFyaS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXG4gICAge1xuICAgICAgICBCcm93c2VyLnNhZmFyaSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvVHJpZGVudFxcLyhcXGQrXFwuXFxkKykoLiopcnY6KFxcZCtcXC5cXGQrKS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5pZSA9IHRydWU7XG4gICAgICAgIEJyb3dzZXIudHJpZGVudCA9IHRydWU7XG4gICAgICAgIEJyb3dzZXIudHJpZGVudFZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICAgICAgQnJvd3Nlci5pZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDMsIDEwKTtcbiAgICB9XG5cbiAgICAvLyAgU2lsayBnZXRzIGl0cyBvd24gaWYgY2xhdXNlIGJlY2F1c2UgaXRzIHVhIGFsc28gY29udGFpbnMgJ1NhZmFyaSdcbiAgICBpZiAoKC9TaWxrLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLnNpbGsgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBCcm93c2VyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9Ccm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9Ccm93c2VyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIFRoZSBHYW1lT2JqZWN0IEZhY3RvcnkgaXMgYSBnbG9iYWwgbGV2ZWwgY29udGFpbmVyIG9mIEZhY3RvcnkgaW5zdGFuY2VzLlxuKiBGYWN0b3JpZXMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB3aXRoIHRoaXMgY29udGFpbmVyICh3aGVuIHJlcXVpcmVkKVxuKlxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeVxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKi9cblxudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc29sZS5sb2coJ0ZhY3RvcnlDb250YWluZXIgaXMgYWxpdmUnKTtcblxuICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZmFjdG9yeSlcbiAgICB7XG4gICAgICAgIGlmIChmYWN0b3JpZXMuaGFzT3duUHJvcGVydHkoZmFjdG9yeS5LRVkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSByZWdpc3RlcmVkJywgZmFjdG9yeS5LRVkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlKGZhY3RvcnkuS0VZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmluZycsIGZhY3RvcnkuS0VZKTtcblxuICAgICAgICBmYWN0b3JpZXNbZmFjdG9yeS5LRVldID0ge1xuICAgICAgICAgICAgYWRkOiBmYWN0b3J5LmFkZCxcbiAgICAgICAgICAgIG1ha2U6IGZhY3RvcnkubWFrZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgIH07XG5cbiAgICB0aGlzLmdldFR5cGUgPSBmdW5jdGlvbiAoa2V5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcmllc1trZXldO1xuICAgIH07XG5cbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbiAoZGVzdCwgaXNGYWN0b3J5KVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgZmFjdG9yeSBpbiBmYWN0b3JpZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmYWN0b3JpZXMuaGFzT3duUHJvcGVydHkoZmFjdG9yeSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0xvYWRpbmcnLCBmYWN0b3J5KTtcblxuICAgICAgICAgICAgICAgIGRlc3RbZmFjdG9yeV0gPSAoaXNGYWN0b3J5KSA/IGZhY3Rvcmllc1tmYWN0b3J5XS5hZGQgOiBmYWN0b3JpZXNbZmFjdG9yeV0ubWFrZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjdG9yeUNvbnRhaW5lcigpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgQ3JlYXRlcyBhbiBYSFJTZXR0aW5ncyBPYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlc1xuXG52YXIgWEhSU2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzcG9uc2VUeXBlLCBhc3luYywgdXNlciwgcGFzc3dvcmQsIHRpbWVvdXQpXG57XG4gICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkKSB7IHJlc3BvbnNlVHlwZSA9ICcnOyB9XG4gICAgaWYgKGFzeW5jID09PSB1bmRlZmluZWQpIHsgYXN5bmMgPSB0cnVlOyB9XG4gICAgaWYgKHVzZXIgPT09IHVuZGVmaW5lZCkgeyB1c2VyID0gJyc7IH1cbiAgICBpZiAocGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyBwYXNzd29yZCA9ICcnOyB9XG4gICAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkgeyB0aW1lb3V0ID0gMDsgfVxuXG4gICAgLy8gQmVmb3JlIHNlbmRpbmcgYSByZXF1ZXN0LCBzZXQgdGhlIHhoci5yZXNwb25zZVR5cGUgdG8gXCJ0ZXh0XCIsIFxuICAgIC8vIFwiYXJyYXlidWZmZXJcIiwgXCJibG9iXCIsIG9yIFwiZG9jdW1lbnRcIiwgZGVwZW5kaW5nIG9uIHlvdXIgZGF0YSBuZWVkcy4gXG4gICAgLy8gTm90ZSwgc2V0dGluZyB4aHIucmVzcG9uc2VUeXBlID0gJycgKG9yIG9taXR0aW5nKSB3aWxsIGRlZmF1bHQgdGhlIHJlc3BvbnNlIHRvIFwidGV4dFwiLlxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvLyAgSWdub3JlZCBieSB0aGUgTG9hZGVyLCBvbmx5IHVzZWQgYnkgRmlsZS5cbiAgICAgICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGUsXG5cbiAgICAgICAgYXN5bmM6IGFzeW5jLFxuXG4gICAgICAgIC8vICBjcmVkZW50aWFsc1xuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG5cbiAgICAgICAgLy8gIHRpbWVvdXQgaW4gbXMgKDAgPSBubyB0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuXG4gICAgICAgIC8vICBzZXRSZXF1ZXN0SGVhZGVyXG4gICAgICAgIGhlYWRlcjogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJWYWx1ZTogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vICBvdmVycmlkZU1pbWVUeXBlXG4gICAgICAgIG92ZXJyaWRlTWltZVR5cGU6IHVuZGVmaW5lZFxuXG4gICAgfTtcbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSU2V0dGluZ3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIFNvdXJjZSBvYmplY3Rcbi8vICBUaGUga2V5IGFzIGEgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBrZXlzLCBpLmUuICdiYW5uZXInLCBvciAnYmFubmVyLmhpZGVCYW5uZXInXG4vLyAgVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlIGlmIHRoZSBrZXkgZG9lc24ndCBleGlzdFxuXG52YXIgR2V0T2JqZWN0VmFsdWUgPSBmdW5jdGlvbiAoc291cmNlLCBrZXksIGRlZmF1bHRWYWx1ZSlcbntcbiAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSlcbiAgICB7XG4gICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgcGFyZW50ID0gc291cmNlO1xuICAgICAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgLy8gIFVzZSBmb3IgbG9vcCBoZXJlIHNvIHdlIGNhbiBicmVhayBlYXJseVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzT3duUHJvcGVydHkoa2V5c1tpXSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gIFllcyBpdCBoYXMgYSBrZXkgcHJvcGVydHksIGxldCdzIGNhcnJ5IG9uIGRvd25cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmVudFtrZXlzW2ldXTtcblxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSA/IHNvdXJjZVtrZXldIDogZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHZXRPYmplY3RWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL0dldE9iamVjdFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcbnZhciBDYW52YXNQb29sID0gcmVxdWlyZSgnLi4vZG9tL0NhbnZhc1Bvb2wnKTtcblxudmFyIEZlYXR1cmVzID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNhbnZhcyAtIElzIGNhbnZhcyBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2FudmFzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHs/Ym9vbGVhbn0gY2FudmFzQml0Qmx0U2hpZnQgLSBUcnVlIGlmIGNhbnZhcyBzdXBwb3J0cyBhICdjb3B5JyBiaXRibHQgb250byBpdHNlbGYgd2hlbiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiByZWdpb25zIG92ZXJsYXAuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2FudmFzQml0Qmx0U2hpZnQ6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViR0wgLSBJcyB3ZWJHTCBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2ViR0w6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGUgLSBJcyBmaWxlIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBmaWxlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaWxlU3lzdGVtIC0gSXMgZmlsZVN5c3RlbSBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZmlsZVN5c3RlbTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9jYWxTdG9yYWdlIC0gSXMgbG9jYWxTdG9yYWdlIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBsb2NhbFN0b3JhZ2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdvcmtlciAtIElzIHdvcmtlciBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd29ya2VyOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBwb2ludGVyTG9jayAtIElzIFBvaW50ZXIgTG9jayBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgcG9pbnRlckxvY2s6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpYnJhdGlvbiAtIERvZXMgdGhlIGRldmljZSBzdXBwb3J0IHRoZSBWaWJyYXRpb24gQVBJP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHZpYnJhdGlvbjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZ2V0VXNlck1lZGlhIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIGdldFVzZXJNZWRpYSBBUEk/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZ2V0VXNlck1lZGlhOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiAtIElzIHRoZSBkZXZpY2UgYmlnIG9yIGxpdHRsZSBlbmRpYW4/IChvbmx5IGRldGVjdGVkIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIFR5cGVkQXJyYXlzKVxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGxpdHRsZUVuZGlhbjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VwcG9ydDMyYml0IC0gRG9lcyB0aGUgZGV2aWNlIGNvbnRleHQgc3VwcG9ydCAzMmJpdCBwaXhlbCBtYW5pcHVsYXRpb24gdXNpbmcgYXJyYXkgYnVmZmVyIHZpZXdzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHN1cHBvcnQzMmJpdDogZmFsc2VcblxufTtcblxuLyoqXG4qIENoZWNrIExpdHRsZSBvciBCaWcgRW5kaWFuIHN5c3RlbS5cbipcbiogQGF1dGhvciBNYXR0IERlc0xhdXJpZXJzIChAbWF0dGRlc2wpXG4qL1xuZnVuY3Rpb24gY2hlY2tJc0xpdHRsZUVuZGlhbiAoKVxue1xuICAgIHZhciBhID0gbmV3IEFycmF5QnVmZmVyKDQpO1xuICAgIHZhciBiID0gbmV3IFVpbnQ4QXJyYXkoYSk7XG4gICAgdmFyIGMgPSBuZXcgVWludDMyQXJyYXkoYSk7XG5cbiAgICBiWzBdID0gMHhhMTtcbiAgICBiWzFdID0gMHhiMjtcbiAgICBiWzJdID0gMHhjMztcbiAgICBiWzNdID0gMHhkNDtcblxuICAgIGlmIChjWzBdID09PSAweGQ0YzNiMmExKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNbMF0gPT09IDB4YTFiMmMzZDQpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vICBDb3VsZCBub3QgZGV0ZXJtaW5lIGVuZGlhbm5lc3NcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgY29uc29sZS5sb2coJ0ZlYXR1cmVzLmluaXQnKTtcblxuICAgIEZlYXR1cmVzLmNhbnZhcyA9ICEhd2luZG93WydDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQnXSB8fCBPUy5jb2Nvb25KUztcblxuICAgIHRyeVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgRmVhdHVyZXMuZmlsZSA9ICEhd2luZG93WydGaWxlJ10gJiYgISF3aW5kb3dbJ0ZpbGVSZWFkZXInXSAmJiAhIXdpbmRvd1snRmlsZUxpc3QnXSAmJiAhIXdpbmRvd1snQmxvYiddO1xuICAgIEZlYXR1cmVzLmZpbGVTeXN0ZW0gPSAhIXdpbmRvd1sncmVxdWVzdEZpbGVTeXN0ZW0nXTtcblxuICAgIHZhciBpc1VpbnQ4ID0gZmFsc2U7XG5cbiAgICB2YXIgdGVzdFdlYkdMID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICh3aW5kb3dbJ1dlYkdMUmVuZGVyaW5nQ29udGV4dCddKVxuICAgICAgICB7XG4gICAgICAgICAgICB0cnlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGVXZWJHTCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmIChPUy5jb2Nvb25KUylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zY3JlZW5jYW52YXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhczJEID0gQ2FudmFzUG9vbC5jcmVhdGUyRCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIHZhciBjdHgyRCA9IGNhbnZhczJELmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgQ2FuJ3QgYmUgZG9uZSBvbiBhIHdlYmdsIGNvbnRleHRcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBjdHgyRC5jcmVhdGVJbWFnZURhdGEoMSwgMSk7XG4gICAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBUZXN0IHRvIHNlZSBpZiBJbWFnZURhdGEgdXNlcyBDYW52YXNQaXhlbEFycmF5IG9yIFVpbnQ4Q2xhbXBlZEFycmF5LlxuICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAqIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaXNVaW50OCA9IGltYWdlLmRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcblxuICAgICAgICAgICAgICAgIENhbnZhc1Bvb2wucmVtb3ZlKGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzMkQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdHggIT09IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIEZlYXR1cmVzLndlYkdMID0gdGVzdFdlYkdMKCk7XG5cbiAgICBGZWF0dXJlcy53b3JrZXIgPSAhIXdpbmRvd1snV29ya2VyJ107XG5cbiAgICBGZWF0dXJlcy5wb2ludGVyTG9jayA9ICdwb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8ICdtb3pQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8ICd3ZWJraXRQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50O1xuXG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iub0dldFVzZXJNZWRpYTtcblxuICAgIHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XG5cbiAgICBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgPSBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgJiYgISFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhICYmICEhd2luZG93LlVSTDtcblxuICAgIC8vIE9sZGVyIHZlcnNpb25zIG9mIGZpcmVmb3ggKDwgMjEpIGFwcGFyZW50bHkgY2xhaW0gc3VwcG9ydCBidXQgdXNlciBtZWRpYSBkb2VzIG5vdCBhY3R1YWxseSB3b3JrXG4gICAgaWYgKEJyb3dzZXIuZmlyZWZveCAmJiBCcm93c2VyLmZpcmVmb3hWZXJzaW9uIDwgMjEpXG4gICAge1xuICAgICAgICBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFeGNsdWRlcyBpT1MgdmVyc2lvbnMgYXMgdGhleSBnZW5lcmFsbHkgd3JhcCBVSVdlYlZpZXcgKGVnLiBTYWZhcmkgV2ViS2l0KSBhbmQgaXRcbiAgICAvLyBpcyBzYWZlciB0byBub3QgdHJ5IGFuZCB1c2UgdGhlIGZhc3QgY29weS1vdmVyIG1ldGhvZC5cbiAgICBpZiAoIU9TLmlPUyAmJiAoQnJvd3Nlci5pZSB8fCBCcm93c2VyLmZpcmVmb3ggfHwgQnJvd3Nlci5jaHJvbWUpKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMuY2FudmFzQml0Qmx0U2hpZnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEtub3duIG5vdCB0byB3b3JrXG4gICAgaWYgKEJyb3dzZXIuc2FmYXJpIHx8IEJyb3dzZXIubW9iaWxlU2FmYXJpKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMuY2FudmFzQml0Qmx0U2hpZnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0b3IudmlicmF0ZSA9IG5hdmlnYXRvci52aWJyYXRlIHx8IG5hdmlnYXRvci53ZWJraXRWaWJyYXRlIHx8IG5hdmlnYXRvci5tb3pWaWJyYXRlIHx8IG5hdmlnYXRvci5tc1ZpYnJhdGU7XG5cbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpXG4gICAge1xuICAgICAgICBGZWF0dXJlcy52aWJyYXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMubGl0dGxlRW5kaWFuID0gY2hlY2tJc0xpdHRsZUVuZGlhbigpO1xuICAgIH1cblxuICAgIEZlYXR1cmVzLnN1cHBvcnQzMmJpdCA9IChcbiAgICAgICAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gIT09IG51bGwgJiZcbiAgICAgICAgaXNVaW50OFxuICAgICk7XG5cbiAgICByZXR1cm4gRmVhdHVyZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0ZlYXR1cmVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9GZWF0dXJlcy5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIHBvb2wgaW50byB3aGljaCB0aGUgY2FudmFzIGVsZW1lbnRzIGFyZSBwbGFjZWQuXG4gKlxuICogQHByb3BlcnR5IHBvb2xcbiAqIEB0eXBlIEFycmF5XG4gKi9cbnZhciBwb29sID0gW107XG5cbi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXG4vLyAgYmVmb3JlIGEgUGhhc2VyLkdhbWUgaW5zdGFuY2UgaGFzIGV2ZW4gYmVlbiBjcmVhdGVkLlxuLy8gIFdoaWNoIG1lYW5zIGFsbCBpbnN0YW5jZXMgb2YgUGhhc2VyIEdhbWVzIG9uIHRoZSBzYW1lIHBhZ2Vcbi8vICBjYW4gc2hhcmUgdGhlIG9uZSBzaW5nbGUgcG9vbFxuXG4vKipcbiogVGhlIENhbnZhc1Bvb2wgaXMgYSBnbG9iYWwgc3RhdGljIG9iamVjdCwgdGhhdCBhbGxvd3MgUGhhc2VyIHRvIHJlY3ljbGUgYW5kIHBvb2wgQ2FudmFzIERPTSBlbGVtZW50cy5cbipcbiogQGNsYXNzIFBoYXNlci5DYW52YXNQb29sXG4qIEBzdGF0aWNcbiovXG52YXIgQ2FudmFzUG9vbCA9IGZ1bmN0aW9uICgpXG57XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IENhbnZhcyBET00gZWxlbWVudCwgb3IgcHVsbHMgb25lIGZyb20gdGhlIHBvb2wgaWYgZnJlZS5cbiAgICAqIFxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5jcmVhdGVcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBwYXJhbSB7YW55fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gVGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICovXG4gICAgdmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIHR5cGUpXG4gICAge1xuICAgICAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCkgeyB3aWR0aCA9IDE7IH1cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gdW5kZWZpbmVkKSB7IGhlaWdodCA9IDE7IH1cbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkgeyB0eXBlID0gQ09OU1QuQ0FOVkFTOyB9XG5cbiAgICAgICAgdmFyIGNhbnZhcztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGZpcnN0KHR5cGUpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW52YXNQb29sLmNyZWF0ZSBuZXcnKTtcblxuICAgICAgICAgICAgY29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIGNhbnZhczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcG9vbC5wdXNoKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNhbnZhcyA9IGNvbnRhaW5lci5jYW52YXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5jcmVhdGUgZXhpc3RpbmcnKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICAgICAgY2FudmFzID0gY29udGFpbmVyLmNhbnZhcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlMkQgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULkNBTlZBUyk7XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVXZWJHTCA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gY3JlYXRlKHBhcmVudCwgd2lkdGgsIGhlaWdodCwgQ09OU1QuV0VCR0wpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGZpcnN0IGZyZWUgY2FudmFzIGluZGV4IGZyb20gdGhlIHBvb2wuXG4gICAgKiBcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0Rmlyc3RcbiAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAqL1xuICAgIHZhciBmaXJzdCA9IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkgeyB0eXBlID0gQ09OU1QuQ0FOVkFTOyB9XG5cbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyLnBhcmVudCAmJiBjb250YWluZXIudHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBMb29rcyB1cCBhIGNhbnZhcyBiYXNlZCBvbiBpdHMgcGFyZW50LCBhbmQgaWYgZm91bmQgcHV0cyBpdCBiYWNrIGluIHRoZSBwb29sLCBmcmVlaW5nIGl0IHVwIGZvciByZS11c2UuXG4gICAgKiBUaGUgY2FudmFzIGhhcyBpdHMgd2lkdGggYW5kIGhlaWdodCBzZXQgdG8gMSwgYW5kIGl0cyBwYXJlbnQgYXR0cmlidXRlIG51bGxlZC5cbiAgICAqIFxuICAgICogQHN0YXRpY1xuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5yZW1vdmVcbiAgICAqIEBwYXJhbSB7YW55fEhUTUxDYW52YXNFbGVtZW50fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cbiAgICAqL1xuICAgIHZhciByZW1vdmUgPSBmdW5jdGlvbiAocGFyZW50KVxuICAgIHtcbiAgICAgICAgLy8gIENoZWNrIHRvIHNlZSBpZiB0aGUgcGFyZW50IGlzIGEgY2FudmFzIG9iamVjdFxuICAgICAgICB2YXIgaXNDYW52YXMgPSBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgICAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChpc0NhbnZhcyAmJiBjb250YWluZXIuY2FudmFzID09PSBwYXJlbnQpIHx8ICghaXNDYW52YXMgJiYgY29udGFpbmVyLnBhcmVudCA9PT0gcGFyZW50KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5yZW1vdmUgZm91bmQgYW5kIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2FudmFzLndpZHRoID0gMTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2FudmFzLmhlaWdodCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiB1c2VkIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqIFxuICAgICogQHN0YXRpY1xuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5nZXRUb3RhbFxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGluLXVzZSAocGFyZW50ZWQpIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqL1xuICAgIHZhciB0b3RhbCA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgYyA9IDA7XG5cbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIucGFyZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIGZyZWUgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxuICAgICogXG4gICAgKiBAc3RhdGljXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZyZWVcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBmcmVlICh1bi1wYXJlbnRlZCkgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxuICAgICovXG4gICAgdmFyIGZyZWUgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHBvb2wubGVuZ3RoIC0gdG90YWwoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgICAgIGNyZWF0ZTJEOiBjcmVhdGUyRCxcbiAgICAgICAgY3JlYXRlV2ViR0w6IGNyZWF0ZVdlYkdMLFxuICAgICAgICBmaXJzdDogZmlyc3QsXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgIGZyZWU6IGZyZWUsXG4gICAgICAgIHBvb2w6IHBvb2xcbiAgICB9O1xufTtcblxuLy8gIElmIHdlIGV4cG9ydCB0aGUgY2FsbGVkIGZ1bmN0aW9uIGhlcmUsIGl0J2xsIG9ubHkgYmUgaW52b2tlZCBvbmNlIChub3QgZXZlcnkgdGltZSBpdCdzIHJlcXVpcmVkKS5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzUG9vbCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0NhbnZhc1Bvb2wuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ2YXIgRklMRV9DT05TVCA9IHtcblxuICAgIFBFTkRJTkc6IDAsICAgICAgLy8gZmlsZSBpcyBpbiB0aGUgbG9hZCBxdWV1ZSBidXQgbm90IHlldCBzdGFydGVkXG4gICAgTE9BRElORzogMSwgICAgICAvLyBmaWxlIGhhcyBiZWVuIHN0YXJ0ZWQgdG8gbG9hZCBieSB0aGUgbG9hZGVyIChvbkxvYWQgY2FsbGVkKVxuICAgIExPQURFRDogMiwgICAgICAgLy8gZmlsZSBoYXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSwgYXdhaXRpbmcgcHJvY2Vzc2luZ1xuICAgIEZBSUxFRDogMywgICAgICAgLy8gZmlsZSBmYWlsZWQgdG8gbG9hZFxuICAgIFBST0NFU1NJTkc6IDQsICAgLy8gZmlsZSBpcyBiZWluZyBwcm9jZXNzZWQgKG9uUHJvY2VzcyBjYWxsYmFjaylcbiAgICBDT01QTEVURTogNSwgICAgIC8vIGZpbGUgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmdcbiAgICBERVNUUk9ZRUQ6IDYgICAgIC8vIGZpbGUgaGFzIGJlZW4gZGVzdHJveWVkXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRklMRV9DT05TVDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9jb25zdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB2YXIgRklMRV9DT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgRmlsZSA9IHJlcXVpcmUoJy4uL0ZpbGUnKTtcblxuLy8gIERpZmZlcmVudCBpbWFnZXMgYmFzZWQgb24gZGV2aWNlLXBpeGVsIHJhdGlvXG4vLyAgQW5kIG1heWJlIG9uIHNjcmVlbiByZXNvbHV0aW9uIGJyZWFrcG9pbnRzXG5cbi8vICAyIG9wdGlvbnMgLSBjYW4gZWl0aGVyIHJldHVybiB0aGUgRmlsZSBvYmplY3QsIHNvIHRoZXkgY2FuIGxpc3RlbiB0byBpdCBzcGVjaWZpY2FsbHlcbi8vICBPciBjYW4gcmV0dXJuIHRoZSBMb2FkZXIsIHNvIHRoZXkgY2FuIGNoYWluIGNhbGxzP1xuXG52YXIgSW1hZ2VGaWxlID0gZnVuY3Rpb24gKGtleSwgdXJsLCBwYXRoKVxue1xuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHsgcGF0aCA9ICcnOyB9XG5cbiAgICBpZiAoIWtleSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUud2FybignTG9hZGVyOiBZb3UgdHJpZWQgdG8gbG9hZCBhbiBJbWFnZSwgYnV0IG5vIGtleSB3YXMgZ2l2ZW4nKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF1cmwpXG4gICAge1xuICAgICAgICB1cmwgPSBwYXRoICsga2V5ICsgJy5wbmcnO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB1cmwgPSBwYXRoLmNvbmNhdCh1cmwpO1xuICAgIH1cblxuICAgIHZhciBmaWxlID0gbmV3IEZpbGUoJ2ltYWdlJywga2V5LCB1cmwsICdhcnJheWJ1ZmZlcicpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlRmlsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgR2V0T2JqZWN0VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9HZXRPYmplY3RWYWx1ZScpO1xuXG52YXIgU2V0dGluZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgICBjb25maWcgPSB7IGtleTogY29uZmlnIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgICAgLy8gIFBhc3MgdGhlICdoYXNPd25Qcm9wZXJ0eScgY2hlY2tzXG4gICAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTsgLy8gIERvIHdlIGFjdHVhbGx5IG5lZWQgdGhpcyByZWZlcmVuY2U/IFRoaXMgY291bGQganVzdCBiZSBhIHByb3BlcnR5IGJ1Y2tldFxuXG4gICAgdGhpcy5zdGF0dXMgPSBDT05TVC5zdGF0ZS5QRU5ESU5HO1xuXG4gICAgLy8gIFdoaWNoIHBhcnQgb2YgdGhpcyBTdGF0ZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkP1xuICAgIC8vICBwcmVsb2FkLCBjcmVhdGUsIHVwZGF0ZSwgc2h1dGRvd24sIGV0Y1xuICAgIHRoaXMub3AgPSBDT05TVC5zdGF0ZS5CT09UO1xuXG4gICAgdGhpcy5rZXkgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdrZXknLCAnJyk7XG4gICAgdGhpcy5hY3RpdmUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdhY3RpdmUnLCBmYWxzZSk7XG4gICAgdGhpcy52aXNpYmxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmlzaWJsZScsIHRydWUpO1xuICAgIHRoaXMuc2NhbGVNb2RlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2NhbGVNb2RlJywgQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUKTtcbiAgICB0aGlzLmZwcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZwcycsIDYwKTtcbiAgICB0aGlzLnggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd4JywgMCk7XG4gICAgdGhpcy55ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAneScsIDApO1xuXG4gICAgLy8gIC0xIG1lYW5zIHRoZSBTdGF0ZSBNYW5hZ2VyIHdpbGwgc2V0IGl0IHRvIGJlIHRoZSBHYW1lIGRpbWVuc2lvbnNcbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAtMSk7XG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCAtMSk7XG59O1xuXG4vLyAgVW5sZXNzIHdlIGFkZCBzb21lIGFjdHVhbCBmdW5jdGlvbnMgaW4gaGVyZSwgd2UnbGwgbWFrZSB0aGlzIGp1c3QgcmV0dXJuIGFuIE9iamVjdCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlXG5TZXR0aW5ncy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXR0aW5ncztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1NldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBHYW1lT2JqZWN0RmFjdG9yeSA9IHJlcXVpcmUoJy4vc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeScpO1xudmFyIEdhbWVPYmplY3RDcmVhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0xvYWRlcicpO1xudmFyIE1haW5Mb29wID0gcmVxdWlyZSgnLi9zeXN0ZW1zL01haW5Mb29wJyk7XG52YXIgVXBkYXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9VcGRhdGVNYW5hZ2VyJyk7XG5cbnZhciBTeXN0ZW1zID0gZnVuY3Rpb24gKHN0YXRlLCBjb25maWcpXG57XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAvLyAgU3RhdGUgc3BlY2lmaWMgbWFuYWdlcnMgKEZhY3RvcnksIFR3ZWVucywgTG9hZGVyLCBQaHlzaWNzLCBldGMpXG4gICAgdGhpcy5hZGQ7XG4gICAgdGhpcy5tYWtlO1xuICAgIHRoaXMuaW5wdXQ7XG4gICAgdGhpcy5sb2FkO1xuICAgIHRoaXMudHdlZW5zO1xuICAgIHRoaXMubWFpbmxvb3A7XG4gICAgdGhpcy51cGRhdGVzO1xuXG4gICAgLy8gIFN0YXRlIHNwZWNpZmljIHByb3BlcnRpZXMgKHRyYW5zZm9ybSwgZGF0YSwgY2hpbGRyZW4sIGV0YylcbiAgICB0aGlzLmNhbWVyYTtcbiAgICB0aGlzLmNoaWxkcmVuO1xuICAgIHRoaXMuY29sb3I7XG4gICAgdGhpcy5kYXRhO1xuICAgIHRoaXMuZmJvO1xuICAgIHRoaXMudGltZTtcbiAgICB0aGlzLnRyYW5zZm9ybTtcbn07XG5cblN5c3RlbXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtcztcblxuU3lzdGVtcy5wcm90b3R5cGUgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlLlN5c3RlbXMuaW5pdCcpO1xuXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcblxuICAgICAgICAvLyAgQWxsIHRoZXNlIHRvIGJlIHNldCBieSBhIFN0YXRlIENvbmZpZyBwYWNrYWdlXG5cbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMubWFrZSA9IEdhbWVPYmplY3RDcmVhdG9yKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLm1haW5sb29wID0gbmV3IE1haW5Mb29wKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUuc2V0dGluZ3MuZnBzKTtcbiAgICAgICAgdGhpcy51cGRhdGVzID0gbmV3IFVwZGF0ZU1hbmFnZXIodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMubG9hZCA9IG5ldyBMb2FkZXIodGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgLy8gdGhpcy50d2VlbnMgPSBuZXcgUGhhc2VyLlR3ZWVuTWFuYWdlcih0aGlzLnN0YXRlKTtcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IG5ldyBQaGFzZXIuU3RhdGUuSW5wdXQodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMucGh5c2ljcyA9IG5ldyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUodGhpcy5zdGF0ZSwgODAwLCA2MDApO1xuXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhID0gbmV3IFBoYXNlci5DYW1lcmEodGhpcy5zdGF0ZSwgMCwgMCwgODAwLCA2MDApO1xuICAgICAgICAvLyB0aGlzLmNoaWxkcmVuID0gbmV3IFBoYXNlci5Db21wb25lbnQuQ2hpbGRyZW4odGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMuY29sb3IgPSBuZXcgUGhhc2VyLkNvbXBvbmVudC5Db2xvcih0aGlzLnN0YXRlKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gbmV3IFBoYXNlci5Db21wb25lbnQuRGF0YSh0aGlzLnN0YXRlKTtcbiAgICAgICAgLy8gdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XG5cbiAgICAgICAgLy8gIEJvb3RcblxuICAgICAgICAvLyB0aGlzLmlucHV0LmluaXQoKTtcblxuICAgICAgICAvLyAgRGVmYXVsdHNcblxuICAgICAgICB0aGlzLnN0YXRlLmFkZCA9IHRoaXMuYWRkO1xuICAgICAgICB0aGlzLnN0YXRlLmxvYWQgPSB0aGlzLmxvYWQ7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dDtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3RhdGUgPSB0aGlzLnN0YXRlLmdhbWUuc3RhdGU7XG5cbiAgICAgICAgLy8gIEhlcmUgd2UgY2FuIGNoZWNrIHdoaWNoIFN5c3RlbXMgdG8gaW5zdGFsbCBhcyBwcm9wZXJ0aWVzIGludG8gdGhlIFN0YXRlIG9iamVjdFxuICAgICAgICAvLyAgKGRlZmF1bHQgc3lzdGVtcyBhbHdheXMgZXhpc3QgaW4gaGVyZSwgcmVnYXJkbGVzcylcblxuICAgICAgICAvKlxuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIHZhciB0ID0gdHlwZW9mIGNvbmZpZztcblxuICAgICAgICBpZiAodCAhPT0gJ29iamVjdCcgfHwgKHQgPT09ICdvYmplY3QnICYmICF0Lmhhc093blByb3BlcnR5KCdzeXN0ZW1zJykpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAvLyB0aGlzLmtleSA9IChjb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKSA/IGNvbmZpZy5rZXkgOiAnJztcbiAgICB9LFxuXG4gICAgYmVnaW46IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGZyYW1lRGVsdGEpXG4gICAge1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RlcCwgcGh5c2ljc1N0ZXApXG4gICAge1xuICAgICAgICAvLyB0aGlzLnR3ZWVucy51cGRhdGUodGltZXN0ZXApO1xuICAgICAgICAvLyB0aGlzLnBoeXNpY3MucHJlVXBkYXRlKHBoeXNpY3NTdGVwKTtcbiAgICB9LFxuXG4gICAgcHJlUmVuZGVyOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzLnVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBlbmQ6IGZ1bmN0aW9uIChmcHMsIHBhbmljKVxuICAgIHtcbiAgICAgICAgaWYgKHBhbmljKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUaGlzIHBhdHRlcm4gaW50cm9kdWNlcyBub24tZGV0ZXJtaW5pc3RpYyBiZWhhdmlvciwgYnV0IGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgLy8gaXQncyBiZXR0ZXIgdGhhbiB0aGUgYWx0ZXJuYXRpdmUgKHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsb29rIGxpa2UgaXRcbiAgICAgICAgICAgIC8vIHdhcyBydW5uaW5nIHZlcnkgcXVpY2tseSB1bnRpbCB0aGUgc2ltdWxhdGlvbiBjYXVnaHQgdXAgdG8gcmVhbFxuICAgICAgICAgICAgLy8gdGltZSkuXG4gICAgICAgICAgICB2YXIgZGlzY2FyZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy5tYWlubG9vcC5yZXNldEZyYW1lRGVsdGEoKSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWFpbiBsb29wIHBhbmlja2VkLCBwcm9iYWJseSBiZWNhdXNlIHRoZSBicm93c2VyIHRhYiB3YXMgcHV0IGluIHRoZSBiYWNrZ3JvdW5kLiBEaXNjYXJkaW5nICcgKyBkaXNjYXJkZWRUaW1lICsgJ21zJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3lzdGVtcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N5c3RlbXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1N5c3RlbXMuanMiLCJcbnZhciBOT09QID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyAgTk9PUCAoTm8gT3BlcmF0aW9uKSBDYWxsYmFja1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOT09QO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdXRpbHMvTk9PUC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvLyAgRG9pbmcgdGhpcyBtYWtlcyBpdCBhdmFpbGFibGUgdW5kZXIgUGhhc2VyLkdhbWVcbiAgICBHYW1lOiByZXF1aXJlKCcuL0dhbWUnKSxcblxuICAgIExvYWRlcjoge1xuICAgICAgICBJbWFnZUZpbGU6IHJlcXVpcmUoJy4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlJylcbiAgICB9XG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L2luZGV4LmpzIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcG9seWZpbGxzL2luZGV4LmpzIiwicmVxdWlyZSgnLi9BcnJheS5mb3JFYWNoJyk7XG5yZXF1aXJlKCcuL0FycmF5LmlzQXJyYXknKTtcbnJlcXVpcmUoJy4vY29uc29sZScpO1xucmVxdWlyZSgnLi9GdW5jdGlvbi5iaW5kJyk7XG5yZXF1aXJlKCcuL01hdGgudHJ1bmMnKTtcbnJlcXVpcmUoJy4vcGVyZm9ybWFuY2Uubm93Jyk7XG5yZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xucmVxdWlyZSgnLi9VaW50MzJBcnJheScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XG52YXIgR2V0T2JqZWN0VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9HZXRPYmplY3RWYWx1ZScpO1xuXG52YXIgZGVmYXVsdEJhbm5lckNvbG9yID0gW1xuICAgICcjZmYwMDAwJyxcbiAgICAnI2ZmZmYwMCcsXG4gICAgJyMwMGZmMDAnLFxuICAgICcjMDBmZmZmJyxcbiAgICAnIzAwMDAwMCdcbl07XG5cbnZhciBkZWZhdWx0QmFubmVyVGV4dENvbG9yID0gJyNmZmZmZmYnO1xuXG5mdW5jdGlvbiBDb25maWcgKGNvbmZpZylcbntcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHsgY29uZmlnID0ge307IH1cblxuICAgIHRoaXMud2lkdGggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd3aWR0aCcsIDEwMjQpO1xuICAgIHRoaXMuaGVpZ2h0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnaGVpZ2h0JywgNzY4KTtcblxuICAgIHRoaXMucmVzb2x1dGlvbiA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3Jlc29sdXRpb24nLCAxKTtcblxuICAgIHRoaXMucmVuZGVyVHlwZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3R5cGUnLCBDT05TVC5BVVRPKTtcblxuICAgIHRoaXMucGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGFyZW50JywgbnVsbCk7XG4gICAgdGhpcy5jYW52YXMgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdjYW52YXMnLCBudWxsKTtcbiAgICB0aGlzLmNhbnZhc1N0eWxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzU3R5bGUnLCBudWxsKTtcblxuICAgIHRoaXMuc3RhdGVDb25maWcgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdzdGF0ZScsIG51bGwpO1xuXG4gICAgdGhpcy5zZWVkID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2VlZCcsIFsgKERhdGUubm93KCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpIF0pO1xuXG4gICAgdGhpcy5nYW1lVGl0bGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0aXRsZScsICcnKTtcbiAgICB0aGlzLmdhbWVVUkwgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd1cmwnLCAnaHR0cDovL3BoYXNlci5pbycpO1xuICAgIHRoaXMuZ2FtZVZlcnNpb24gPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd2ZXJzaW9uJywgJycpO1xuXG4gICAgLy8gIElmIHlvdSBkbzogeyBiYW5uZXI6IGZhbHNlIH0gaXQgd29uJ3QgZGlzcGxheSBhbnkgYmFubmVyIGF0IGFsbFxuICAgIHRoaXMuaGlkZUJhbm5lciA9IChHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXInLCBmYWxzZSkgPT09IGZhbHNlKTtcblxuICAgIHRoaXMuaGlkZVBoYXNlciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5oaWRlUGhhc2VyJywgZmFsc2UpO1xuICAgIHRoaXMuYmFubmVyVGV4dENvbG9yID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyLnRleHQnLCBkZWZhdWx0QmFubmVyVGV4dENvbG9yKTtcbiAgICB0aGlzLmJhbm5lckJhY2tncm91bmRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5iYWNrZ3JvdW5kJywgZGVmYXVsdEJhbm5lckNvbG9yKTtcbiAgIFxuICAgIHRoaXMuZm9yY2VTZXRUaW1lT3V0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnZm9yY2VTZXRUaW1lT3V0JywgZmFsc2UpO1xuICAgIHRoaXMudHJhbnNwYXJlbnQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0cmFuc3BhcmVudCcsIGZhbHNlKTtcbiAgICB0aGlzLnBpeGVsQXJ0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGl4ZWxBcnQnLCBmYWxzZSk7XG5cbiAgICAvLyAgQ2FsbGJhY2tzXG4gICAgdGhpcy5wcmVCb290ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FsbGJhY2tzLnByZUJvb3QnLCBOT09QKTtcbiAgICB0aGlzLnBvc3RCb290ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FsbGJhY2tzLnBvc3RCb290JywgTk9PUCk7XG5cbn1cblxuQ29uZmlnLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbmZpZztcblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9Db25maWcuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xudmFyIENhbnZhc1Bvb2wgPSByZXF1aXJlKCcuLi9kb20vQ2FudmFzUG9vbCcpO1xudmFyIEZlYXR1cmVzID0gcmVxdWlyZSgnLi4vZGV2aWNlL0ZlYXR1cmVzJyk7XG5cbi8qKlxuKiBDaGVja3MgaWYgdGhlIGRldmljZSBpcyBjYXBhYmxlIG9mIHVzaW5nIHRoZSByZXF1ZXN0ZWQgcmVuZGVyZXIgYW5kIHNldHMgaXQgdXAgb3IgYW4gYWx0ZXJuYXRpdmUgaWYgbm90LlxuKlxuKiBAbWV0aG9kIFBoYXNlci5HYW1lI3NldFVwUmVuZGVyZXJcbiogQHByb3RlY3RlZFxuKi9cbnZhciBDcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxue1xuICAgIHZhciBjb25maWcgPSBnYW1lLmNvbmZpZztcblxuICAgIC8vICBHYW1lIGVpdGhlciByZXF1ZXN0ZWQgQ2FudmFzLFxuICAgIC8vICBvciByZXF1ZXN0ZWQgQVVUTyBvciBXRUJHTCBidXQgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGl0LCBzbyBmYWxsIGJhY2sgdG8gQ2FudmFzXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMgfHwgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBDT05TVC5DQU5WQVMgJiYgIUZlYXR1cmVzLndlYkdMKSlcbiAgICB7XG4gICAgICAgIGlmIChGZWF0dXJlcy5jYW52YXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGV5IHJlcXVlc3RlZCBDYW52YXMgYW5kIHRoZWlyIGJyb3dzZXIgc3VwcG9ydHMgaXRcbiAgICAgICAgICAgIGNvbmZpZy5yZW5kZXJUeXBlID0gQ09OU1QuQ0FOVkFTO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIENhbnZhcyBvciBXZWJHTCBjb250ZXh0LCBhYm9ydGluZy4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyAgR2FtZSByZXF1ZXN0ZWQgV2ViR0wgYW5kIGJyb3dzZXIgc2F5cyBpdCBzdXBwb3J0cyBpdFxuICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULldFQkdMO1xuICAgIH1cblxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIGl0cyBvd24gY2FudmFzIGVsZW1lbnQgdG8gdXNlP1xuICAgIGlmIChjb25maWcuY2FudmFzKVxuICAgIHtcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBjb25maWcuY2FudmFzO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnYW1lLmNhbnZhcyA9IENhbnZhc1Bvb2wuY3JlYXRlKGdhbWUsIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCwgY29uZmlnLnJlbmRlclR5cGUpO1xuICAgIH1cblxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIHNvbWUgY2FudmFzIGNzcyBzdHlsZXMgdG8gdXNlP1xuICAgIGlmIChjb25maWcuY2FudmFzU3R5bGUpXG4gICAge1xuICAgICAgICBnYW1lLmNhbnZhcy5zdHlsZSA9IGNvbmZpZy5jYW52YXNTdHlsZTtcbiAgICB9XG5cbiAgICAvLyAgQ3JlYXRlIHRoZSByZW5kZXJlclxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgV0VCR0wgUmVuZGVyZXInKTtcbiAgICAgICAgLy8gZ2FtZS5yZW5kZXJlciA9IG5ldyBQaGFzZXIuUmVuZGVyZXIuV2ViR0wodGhpcyk7XG4gICAgICAgIC8vIGdhbWUuY29udGV4dCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBDYW52YXMgUmVuZGVyZXInKTtcbiAgICAgICAgLy8gZ2FtZS5yZW5kZXJlciA9IG5ldyBQaGFzZXIuUmVuZGVyZXIuQ2FudmFzKHRoaXMpO1xuICAgICAgICAvLyBnYW1lLmNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBQaGFzZXIuSEVBRExFU1MpXG4gICAge1xuICAgICAgICAvLyBQaGFzZXIuQ2FudmFzLmFkZFRvRE9NKHRoaXMuY2FudmFzLCB0aGlzLnBhcmVudCwgZmFsc2UpO1xuICAgICAgICAvLyBQaGFzZXIuQ2FudmFzLnNldFRvdWNoQWN0aW9uKHRoaXMuY2FudmFzKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRlUmVuZGVyZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NyZWF0ZVJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBDSEVDS1NVTSA9IHJlcXVpcmUoJy4uL2NoZWNrc3VtJyk7XG5cbnZhciBEZWJ1Z0hlYWRlciA9IGZ1bmN0aW9uIChnYW1lKVxue1xuICAgIHZhciBjb25maWcgPSBnYW1lLmNvbmZpZztcblxuICAgIGlmIChjb25maWcuaGlkZUJhbm5lcilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVuZGVyVHlwZSA9IChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuQ0FOVkFTKSA/ICdDYW52YXMnIDogJ1dlYkdMJztcblxuICAgIHZhciBpZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFpZSlcbiAgICB7XG4gICAgICAgIHZhciBjID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gW2NdO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgbGFzdENvbG9yO1xuXG4gICAgICAgICAgICBjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yLmZvckVhY2goZnVuY3Rpb24oY29sb3IpIHtcblxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XG5cbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goJ2JhY2tncm91bmQ6ICcgKyBjb2xvcik7XG5cbiAgICAgICAgICAgICAgICBsYXN0Q29sb3IgPSBjb2xvcjtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vICBpbmplY3QgdGhlIHRleHQgY29sb3JcbiAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9ICdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgbGFzdENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgYyA9IGMuY29uY2F0KCclYyAnKTtcblxuICAgICAgICAgICAgYXJncy5wdXNoKCdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgVVJMIGxpbmsgYmFja2dyb3VuZCBjb2xvciAoYWx3YXlzIHdoaXRlKVxuICAgICAgICBhcmdzLnB1c2goJ2JhY2tncm91bmQ6ICNmZmYnKTtcblxuICAgICAgICBpZiAoY29uZmlnLmdhbWVUaXRsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgYyA9IGMuY29uY2F0KGNvbmZpZy5nYW1lVGl0bGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlnLmdhbWVWZXJzaW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnIHYnICsgY29uZmlnLmdhbWVWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyAvICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcbiAgICAgICAge1xuICAgICAgICAgICAgYyA9IGMuY29uY2F0KCdQaGFzZXIgdicgKyBDT05TVC5WRVJTSU9OICsgJyAoJyArIHJlbmRlclR5cGUgKyAnKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgYyA9IGMuY29uY2F0KCcgJWMgJyArIGNvbmZpZy5nYW1lVVJMKTtcblxuICAgICAgICAvLyAgSW5qZWN0IHRoZSBuZXcgc3RyaW5nIGJhY2sgaW50byB0aGUgYXJncyBhcnJheVxuICAgICAgICBhcmdzWzBdID0gYztcblxuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93Wydjb25zb2xlJ10pXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgLyBodHRwOi8vcGhhc2VyLmlvJyk7XG4gICAgfVxuXG4gICAgLy8gS2VlcCB0aGlzIGR1cmluZyBkZXYgYnVpbGQgb25seVxuICAgIGNvbnNvbGUubG9nKENIRUNLU1VNLmJ1aWxkKTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1Z0hlYWRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvRGVidWdIZWFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvRGVidWdIZWFkZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgRGV2aWNlID0gcmVxdWlyZSgnLi4vZGV2aWNlJyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9Db25maWcnKTtcbnZhciBEZWJ1Z0hlYWRlciA9IHJlcXVpcmUoJy4vRGVidWdIZWFkZXInKTtcbnZhciBDcmVhdGVSZW5kZXJlciA9IHJlcXVpcmUoJy4vQ3JlYXRlUmVuZGVyZXInKTtcbnZhciBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCcuLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG52YXIgRE9NQ29udGVudExvYWRlZCA9IHJlcXVpcmUoJy4uL2RvbS9ET01Db250ZW50TG9hZGVkJyk7XG52YXIgUmFuZG9tRGF0YUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL21hdGgvcmFuZG9tLWRhdGEtZ2VuZXJhdG9yL1JhbmRvbURhdGFHZW5lcmF0b3InKTtcbnZhciBTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuLi9zdGF0ZS9TdGF0ZU1hbmFnZXInKTtcbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xudmFyIEdhbWVPYmplY3RzID0gcmVxdWlyZSAoJy4uL2dhbWVvYmplY3RzLycpO1xuXG52YXIgR2FtZSA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgdGhpcy5jb25maWcgPSBuZXcgQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAvLyAgRGVjaWRlIHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc2hvdWxkIGJlIEdhbWUgcHJvcGVydGllcywgb3IgcGxhY2VkIGVsc2V3aGVyZSAuLi5cblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ3xIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIEdhbWVzIERPTSBwYXJlbnQuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmlzQm9vdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lfSByYWYgLSBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgdGhlIGNvcmUgZ2FtZSBsb29wIHZpYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb3Igc2V0VGltZW91dFxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICAgdGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5UZXh0dXJlTWFuYWdlcn0gdGV4dHVyZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBUZXh0dXJlIE1hbmFnZXIuXG4gICAgKi9cbiAgICB0aGlzLnRleHR1cmVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVXBkYXRlTWFuYWdlcn0gdXBkYXRlcyAtIFJlZmVyZW5jZSB0byB0aGUgUGhhc2VyIFVwZGF0ZSBNYW5hZ2VyLlxuICAgICovXG4gICAgdGhpcy51cGRhdGVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuQ2FjaGV9IGNhY2hlIC0gUmVmZXJlbmNlIHRvIHRoZSBhc3NldHMgY2FjaGUuXG4gICAgKi9cbiAgICB0aGlzLmNhY2hlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuSW5wdXR9IGlucHV0IC0gUmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBtYW5hZ2VyXG4gICAgKi9cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGVNYW5hZ2VyfSBzdGF0ZSAtIFRoZSBTdGF0ZU1hbmFnZXIuIFBoYXNlciBpbnN0YW5jZSBzcGVjaWZpYy5cbiAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMuY29uZmlnLnN0YXRlQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuRGV2aWNlfSBkZXZpY2UgLSBDb250YWlucyBkZXZpY2UgaW5mb3JtYXRpb24gYW5kIGNhcGFiaWxpdGllcyAoc2luZ2xldG9uKVxuICAgICovXG4gICAgdGhpcy5kZXZpY2UgPSBEZXZpY2U7XG5cbiAgICAvLyAgTW9yZSB0aGlzIHNvbWV3aGVyZSBlbHNlPyBNYXRoIHBlcmhhcHM/IERvZXNuJ3QgbmVlZCB0byBiZSBhIEdhbWUgbGV2ZWwgc3lzdGVtLlxuICAgIHRoaXMucm5kO1xuXG4gICAgLy8gIFdhaXQgZm9yIHRoZSBET00gUmVhZHkgZXZlbnQsIHRoZW4gY2FsbCBib290LlxuICAgIERPTUNvbnRlbnRMb2FkZWQodGhpcy5ib290LmJpbmQodGhpcykpO1xuXG4gICAgLy8gIEZvciBkZWJ1Z2dpbmcgb25seVxuICAgIHdpbmRvdy5nYW1lID0gdGhpcztcbn07XG5cbkdhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZTtcblxuR2FtZS5wcm90b3R5cGUgPSB7XG5cbiAgICBib290OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc0Jvb3RlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jb25maWcucHJlQm9vdCgpO1xuXG4gICAgICAgIC8vICBQcm9iYWJseSBtb3ZlIHdpdGhpbiBNYXRoXG4gICAgICAgIHRoaXMucm5kID0gbmV3IFJhbmRvbURhdGFHZW5lcmF0b3IodGhpcy5jb25maWcuc2VlZCk7XG5cbiAgICAgICAgRGVidWdIZWFkZXIodGhpcyk7XG5cbiAgICAgICAgQ3JlYXRlUmVuZGVyZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5ib290KCk7XG5cbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLnBvc3RCb290KCk7XG5cbiAgICAgICAgdGhpcy5yYWYuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RhbXApXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lc3RhbXApO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0ZXAodGltZXN0YW1wKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9HYW1lLmpzIiwidmFyIENIRUNLU1VNID0ge1xuYnVpbGQ6ICdlODMwMjk4MC1iNzYxLTExZTYtODA4Zi04ZGZmMjJjNWY0YWYnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBDSEVDS1NVTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jaGVja3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcblxudmFyIEF1ZGlvID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1ZGlvRGF0YSAtIEFyZSBBdWRpbyB0YWdzIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBhdWRpb0RhdGE6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkF1ZGlvIC0gSXMgdGhlIFdlYkF1ZGlvIEFQSSBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2ViQXVkaW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9nZyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBvZ2c6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdXMgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvcHVzIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG9wdXM6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wMyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG1wMyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtcDM6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdhdiAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdhdiBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3YXY6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBDYW4gdGhpcyBkZXZpY2UgcGxheSBtNGEgZmlsZXM/XG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG00YSAtIFRydWUgaWYgdGhpcyBkZXZpY2UgY2FuIHBsYXkgbTRhIGZpbGVzLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG00YTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2VibSAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdlYm0gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2VibTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZG9sYnkgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBFQy0zIERvbGJ5IERpZ2l0YWwgUGx1cyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBkb2xieTogZmFsc2VcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIEF1ZGlvLmF1ZGlvRGF0YSA9ICEhKHdpbmRvd1snQXVkaW8nXSk7XG4gICAgQXVkaW8ud2ViQXVkaW8gPSAhISh3aW5kb3dbJ0F1ZGlvQ29udGV4dCddIHx8IHdpbmRvd1snd2Via2l0QXVkaW9Db250ZXh0J10pO1xuXG4gICAgdmFyIGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG5cbiAgICB2YXIgcmVzdWx0ID0gISFhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGU7XG5cbiAgICB0cnlcbiAgICB7XG4gICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLm9nZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwib3B1c1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSB8fCBhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29wdXM7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby5vcHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLm1wMyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICBNaW1ldHlwZXMgYWNjZXB0ZWQ6XG4gICAgICAgICAgICAvLyAgZGV2ZWxvcGVyLm1vemlsbGEub3JnL0VuL01lZGlhX2Zvcm1hdHNfc3VwcG9ydGVkX2J5X3RoZV9hdWRpb19hbmRfdmlkZW9fZWxlbWVudHNcbiAgICAgICAgICAgIC8vICBiaXQubHkvaXBob25lb3Njb2RlY3NcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby53YXYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby94LW00YTsnKSB8fCBhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEF1ZGlvLm00YSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby53ZWJtID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0O2NvZGVjcz1cImVjLTNcIicpICE9PSAnJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoQnJvd3Nlci5lZGdlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQXVkaW8uZG9sYnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChCcm93c2VyLnNhZmFyaSAmJiBCcm93c2VyLnNhZmFyaVZlcnNpb24gPj0gOSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoL01hYyBPUyBYIChcXGQrKV8oXFxkKykvKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFqb3IgPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5vciA9IHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1ham9yID09PSAxMCAmJiBtaW5vciA+PSAxMSkgfHwgbWFqb3IgPiAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpXG4gICAge1xuICAgICAgICAvLyAgTm90aGluZyB0byBkbyBoZXJlXG4gICAgfVxuXG4gICAgcmV0dXJuIEF1ZGlvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9BdWRpby5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0F1ZGlvLmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcblxudmFyIEZ1bGxzY3JlZW4gPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXZhaWxhYmxlIC0gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBGdWxsIFNjcmVlbiBBUEk/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgYXZhaWxhYmxlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHJlcXVlc3QgLSBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgRnVsbCBTY3JlZW4gQVBJIHRoaXMgaG9sZHMgdGhlIGNhbGwgeW91IG5lZWQgdG8gdXNlIHRvIGFjdGl2YXRlIGl0LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHJlcXVlc3Q6ICcnLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ30gY2FuY2VsIC0gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEZ1bGwgU2NyZWVuIEFQSSB0aGlzIGhvbGRzIHRoZSBjYWxsIHlvdSBuZWVkIHRvIHVzZSB0byBjYW5jZWwgaXQuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgY2FuY2VsOiAnJyxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBrZXlib2FyZCAtIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCBhY2Nlc3MgdG8gdGhlIEtleWJvYXJkIGR1cmluZyBGdWxsIFNjcmVlbiBtb2RlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGtleWJvYXJkOiBmYWxzZVxuXG59O1xuXG4vKipcbiogQ2hlY2tzIGZvciBzdXBwb3J0IG9mIHRoZSBGdWxsIFNjcmVlbiBBUEkuXG4qL1xuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIHZhciBmcyA9IFtcbiAgICAgICAgJ3JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgJ3JlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAnbXNSZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICdtb3pSZXF1ZXN0RnVsbHNjcmVlbidcbiAgICBdO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAoZWxlbWVudFtmc1tpXV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIEZ1bGxzY3JlZW4uYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIEZ1bGxzY3JlZW4ucmVxdWVzdCA9IGZzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2ZzID0gW1xuICAgICAgICAnY2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICdleGl0RnVsbHNjcmVlbicsXG4gICAgICAgICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgJ21zQ2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgJ21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAnbW96RXhpdEZ1bGxzY3JlZW4nXG4gICAgXTtcblxuICAgIGlmIChGdWxsc2NyZWVuLmF2YWlsYWJsZSlcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2ZzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRbY2ZzW2ldXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLmNhbmNlbCA9IGNmc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICBLZXlib2FyZCBJbnB1dD9cbiAgICBpZiAod2luZG93WydFbGVtZW50J10gJiYgRWxlbWVudFsnQUxMT1dfS0VZQk9BUkRfSU5QVVQnXSlcbiAgICB7XG4gICAgICAgIEZ1bGxzY3JlZW4ua2V5Ym9hcmQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBGdWxsc2NyZWVuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GdWxsc2NyZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG5cbnZhciBJbnB1dCA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB0b3VjaCAtIElzIHRvdWNoIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB0b3VjaDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXNwb2ludGVyIC0gSXMgbXNwb2ludGVyIGF2YWlsYWJsZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtc3BvaW50ZXI6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkgez9zdHJpbmd9IHdoZWVsVHlwZSAtIFRoZSBuZXdlc3QgdHlwZSBvZiBXaGVlbC9TY3JvbGwgZXZlbnQgc3VwcG9ydGVkOiAnd2hlZWwnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCdcbiAgICAqIEBkZWZhdWx0XG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgICB3aGVlbEV2ZW50OiBudWxsXG4gICAgXG59O1xuXG5mdW5jdGlvbiBpbml0ICgpXG57XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCAod2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID49IDEpKVxuICAgIHtcbiAgICAgICAgSW5wdXQudG91Y2ggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZClcbiAgICB7XG4gICAgICAgIElucHV0Lm1zcG9pbnRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFPUy5jb2Nvb25KUylcbiAgICB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvd2hlZWxcbiAgICAgICAgaWYgKCdvbndoZWVsJyBpbiB3aW5kb3cgfHwgKEJyb3dzZXIuaWUgJiYgJ1doZWVsRXZlbnQnIGluIHdpbmRvdykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIERPTTMgV2hlZWwgRXZlbnQ6IEZGIDE3KywgSUUgOSssIENocm9tZSAzMSssIFNhZmFyaSA3K1xuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICd3aGVlbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ29ubW91c2V3aGVlbCcgaW4gd2luZG93KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBOb24tRkYgbGVnYWN5OiBJRSA2LTksIENocm9tZSAxLTMxLCBTYWZhcmkgNS03LlxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICdtb3VzZXdoZWVsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgJ01vdXNlU2Nyb2xsRXZlbnQnIGluIHdpbmRvdylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gRkYgcHJpb3IgdG8gMTcuIFRoaXMgc2hvdWxkIHByb2JhYmx5IGJlIHNjcnViYmVkLlxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICdET01Nb3VzZVNjcm9sbCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvSW5wdXQuanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xuXG52YXIgVmlkZW8gPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb2dnVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvZ2cgdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgb2dnVmlkZW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGgyNjRWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGgyNjQgbXA0IHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGgyNjRWaWRlbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXA0VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBoMjY0IG1wNCB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtcDRWaWRlbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2VibVZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2VibSB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3ZWJtVmlkZW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZwOVZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgdnA5IHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHZwOVZpZGVvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBobHNWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGhscyB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBobHNWaWRlbzogZmFsc2VcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZhciByZXN1bHQgPSAhIXZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZTtcblxuICAgIHRyeVxuICAgIHtcbiAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVmlkZW8ub2dnVmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFdpdGhvdXQgUXVpY2tUaW1lLCB0aGlzIHZhbHVlIHdpbGwgYmUgYHVuZGVmaW5lZGAuIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTQ2XG4gICAgICAgICAgICAgICAgVmlkZW8uaDI2NFZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBWaWRlby5tcDRWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFZpZGVvLndlYm1WaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBWaWRlby52cDlWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2FwcGxpY2F0aW9uL3gtbXBlZ1VSTDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVmlkZW8uaGxzVmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKVxuICAgIHtcbiAgICAgICAgLy8gIE5vdGhpbmcgdG8gZG9cbiAgICB9XG5cbiAgICByZXR1cm4gVmlkZW87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL1ZpZGVvLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvVmlkZW8uanMiLCIvLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxuLy8gIGJlZm9yZSBhIFBoYXNlci5HYW1lIGluc3RhbmNlIGhhcyBldmVuIGJlZW4gY3JlYXRlZC5cbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBjYW4gc2hhcmUgaXQsXG4vLyAgd2l0aG91dCBoYXZpbmcgdG8gcmUtcG9sbCB0aGUgZGV2aWNlIGFsbCBvdmVyIGFnYWluXG5cbnZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG52YXIgRmVhdHVyZXMgPSByZXF1aXJlKCcuL0ZlYXR1cmVzJyk7XG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG52YXIgQXVkaW8gPSByZXF1aXJlKCcuL0F1ZGlvJyk7XG52YXIgVmlkZW8gPSByZXF1aXJlKCcuL1ZpZGVvJyk7XG52YXIgRnVsbHNjcmVlbiA9IHJlcXVpcmUoJy4vRnVsbHNjcmVlbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIE9TOiBPUyxcbiAgICBCcm93c2VyOiBCcm93c2VyLFxuICAgIEZlYXR1cmVzOiBGZWF0dXJlcyxcbiAgICBJbnB1dDogSW5wdXQsXG4gICAgQXVkaW86IEF1ZGlvLFxuICAgIFZpZGVvOiBWaWRlbyxcbiAgICBGdWxsc2NyZWVuOiBGdWxsc2NyZWVuXG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9pbmRleC5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBPUyA9IHJlcXVpcmUoJy4uL2RldmljZS9PUycpO1xuXG52YXIgaXNCb290ZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZCAoY2FsbGJhY2spXG57XG4gICAgaWYgKGlzQm9vdGVkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpXG4gICAge1xuICAgICAgICBpc0Jvb3RlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaXNCb290ZWQgPSB0cnVlO1xuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgY2hlY2ssIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hlY2ssIHRydWUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoZWNrLCB0cnVlKTtcblxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpXG4gICAge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVjaywgMjApO1xuICAgIH1cbiAgICBlbHNlIGlmIChPUy5jb3Jkb3ZhICYmICFPUy5jb2Nvb25KUylcbiAgICB7XG4gICAgICAgIC8vICBSZWYuIGh0dHA6Ly9kb2NzLnBob25lZ2FwLmNvbS9lbi8zLjUuMC9jb3Jkb3ZhX2V2ZW50c19ldmVudHMubWQuaHRtbCNkZXZpY2VyZWFkeVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGNoZWNrLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2ssIHRydWUpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBET01Db250ZW50TG9hZGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIEFic3RyYWN0cyBhd2F5IHRoZSB1c2Ugb2YgUkFGIG9yIHNldFRpbWVPdXQgZm9yIHRoZSBjb3JlIGdhbWUgdXBkYXRlIGxvb3AuXG4qXG4qIEBjbGFzcyBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlU2V0VGltZU91dD1mYWxzZV0gLSBUZWxsIFBoYXNlciB0byB1c2Ugc2V0VGltZU91dCBldmVuIGlmIHJhZiBpcyBhdmFpbGFibGUuXG4qL1xuZnVuY3Rpb24gUmVxdWVzdEFuaW1hdGlvbkZyYW1lIChnYW1lKVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuR2FtZX0gZ2FtZSAtIFRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuICAgICovXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpc1J1bm5pbmcgLSB0cnVlIGlmIFJlcXVlc3RBbmltYXRpb25GcmFtZSBpcyBydW5uaW5nLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgIHRoaXMudGljayA9IDA7XG5cbiAgICB2YXIgdmVuZG9ycyA9IFtcbiAgICAgICAgJ21zJyxcbiAgICAgICAgJ21veicsXG4gICAgICAgICd3ZWJraXQnLFxuICAgICAgICAnbydcbiAgICBdO1xuXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKVxuICAgIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpc1NldFRpbWVPdXQgIC0gVHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyB1c2luZyBzZXRUaW1lb3V0IGluc3RlYWQgb2YgckFmLlxuICAgICovXG4gICAgdGhpcy5pc1NldFRpbWVPdXQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVPdXRJRCAtIFRoZSBjYWxsYmFjayBzZXRUaW1lb3V0IG9yIHJBZiBjYWxsYmFjayBJRCB1c2VkIHdoZW4gY2FsbGluZyBjYW5jZWwuXG4gICAgKi9cbiAgICB0aGlzLnRpbWVPdXRJRCA9IG51bGw7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApXG4gICAge1xuICAgICAgICBfdGhpcy50aWNrID0gdGltZXN0YW1wO1xuXG4gICAgICAgIF90aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgICAgX3RoaXMuZ2FtZS51cGRhdGUodGltZXN0YW1wKTtcbiAgICB9O1xuXG4gICAgdmFyIHN0ZXBUaW1lb3V0ID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIF90aGlzLnRpY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIF90aGlzLmdhbWUudXBkYXRlKF90aGlzLnRpY2spO1xuXG4gICAgICAgIC8vIF90aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5zZXRUaW1lb3V0KHN0ZXBUaW1lb3V0LCBfdGhpcy5nYW1lLnRpbWUudGltZVRvQ2FsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogU3RhcnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcnVubmluZyBvciBzZXRUaW1lb3V0IGlmIHVuYXZhaWxhYmxlIGluIGJyb3dzZXJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdGFydFxuICAgICovXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcuZm9yY2VTZXRUaW1lT3V0KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzU2V0VGltZU91dCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudGltZU91dElEID0gd2luZG93LnNldFRpbWVvdXQoc3RlcFRpbWVvdXQsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pc1NldFRpbWVPdXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogU3RvcHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIHJ1bm5pbmcuXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUjc3RvcFxuICAgICovXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTZXRUaW1lT3V0KVxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0SUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZU91dElEKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gdW5kZWZpbmVkO1xuICAgIH07XG5cbn1cblxuUmVxdWVzdEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vKipcbiogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXG4qIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy4gVGhpcyBtYWtlcyBpdCBwZXJmZWN0IGZvciBsb2dvcywgYmFja2dyb3VuZHMsIHNpbXBsZSBidXR0b25zIGFuZCBvdGhlciBub24tU3ByaXRlIGdyYXBoaWNzLlxuKlxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuSW1hZ2VcbiogQGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4qIEBwYXJhbSB7c3RyaW5nfSBba2V5XSAtIFRoZSB0ZXh0dXJlIHVzZWQgYnkgdGhlIEltYWdlIGR1cmluZyByZW5kZXJpbmcuIEl0IGNhbiBiZSBhIHN0cmluZyB3aGljaCBpcyBhIHJlZmVyZW5jZSB0byB0aGUgQ2FjaGUgZW50cnksIG9yIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSBvciBQSVhJLlRleHR1cmUuXG4qIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIHRoaXMgSW1hZ2UgaXMgdXNpbmcgcGFydCBvZiBhIHNwcml0ZSBzaGVldCBvciB0ZXh0dXJlIGF0bGFzIHlvdSBjYW4gc3BlY2lmeSB0aGUgZXhhY3QgZnJhbWUgdG8gdXNlIGJ5IGdpdmluZyBhIHN0cmluZyBvciBudW1lcmljIGluZGV4LlxuKi9cbnZhciBJbWFnZSA9IGZ1bmN0aW9uIChzdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSwgbmFtZSlcbntcbiAgICAvKlxuICAgIHZhciBfdGV4dHVyZSA9IHN0YXRlLmdhbWUudGV4dHVyZXMuZ2V0KGtleSk7XG4gICAgdmFyIF9mcmFtZSA9IF90ZXh0dXJlLmdldChmcmFtZSk7XG5cbiAgICBQaGFzZXIuR2FtZU9iamVjdC5jYWxsKHRoaXMsIHN0YXRlLCB4LCB5LCBfdGV4dHVyZSwgX2ZyYW1lKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICB0aGlzLnR5cGUgPSBQaGFzZXIuSU1BR0U7XG4gICAgKi9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2U7XG5cblxuLy8gSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR2FtZU9iamVjdC5wcm90b3R5cGUpO1xuLy8gSW1hZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW1hZ2U7XG5cbi8qKlxuKiBBdXRvbWF0aWNhbGx5IGNhbGxlZCBieSBXb3JsZC5wcmVVcGRhdGUuXG4qXG4qIEBtZXRob2QgUGhhc2VyLkltYWdlI3ByZVVwZGF0ZVxuKiBAbWVtYmVyb2YgUGhhc2VyLkltYWdlXG5QaGFzZXIuR2FtZU9iamVjdC5JbWFnZS5wcm90b3R5cGUucHJlVXBkYXRlID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyAgV291bGQgbGlrZSB0byBnZXQgcmlkIG9mIHRoaXMgc29tZWhvdyAuLi5cbiAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAge1xuICAgICAgICB0aGlzLmNvbG9yLndvcmxkQWxwaGEgPSB0aGlzLnBhcmVudC5jb2xvci53b3JsZEFscGhhO1xuICAgIH1cbn07XG4qL1xuXG4vKlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSW1hZ2UucHJvdG90eXBlLCB7XG5cbiAgICB3aWR0aDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3NjYWxlWCAqIHRoaXMuZnJhbWUucmVhbFdpZHRoO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHZhbHVlIC8gdGhpcy5mcmFtZS5yZWFsV2lkdGg7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBoZWlnaHQ6IHtcblxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgKiB0aGlzLmZyYW1lLnJlYWxIZWlnaHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdmFsdWUgLyB0aGlzLmZyYW1lLnJlYWxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG4qL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBJbWFnZSA9IHJlcXVpcmUoJy4vSW1hZ2UnKTtcbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xuXG52YXIgSW1hZ2VGYWN0b3J5ID0ge1xuXG4gICAgS0VZOiAnaW1hZ2UnLFxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgYEltYWdlYCBvYmplY3QuXG4gICAgKlxuICAgICogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXG4gICAgKlxuICAgICogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLlxuICAgICogVGhpcyBtYWtlcyBpdCBwZXJmZWN0IGZvciBsb2dvcywgYmFja2dyb3VuZHMsIHNpbXBsZSBidXR0b25zIGFuZCBvdGhlciBub24tU3ByaXRlIGdyYXBoaWNzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuSW1hZ2V9IFRoZSBuZXdseSBjcmVhdGVkIEltYWdlIG9iamVjdC5cbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKHgsIHksIGtleSwgZnJhbWUsIGdyb3VwKVxuICAgIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnN0YXRlOyB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5hZGQnLCBrZXksIHgsIHksIGZyYW1lLCBncm91cCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnRvIFN0YXRlJywgdGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgLy8gcmV0dXJuIGdyb3VwLmNoaWxkcmVuLmFkZChuZXcgSW1hZ2UodGhpcy5zdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSkpO1xuICAgIH0sXG5cbiAgICBtYWtlOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZUZhY3RvcnkubWFrZScsIGtleSwgeCwgeSwgZnJhbWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2UodGhpcy5zdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY3RvcnlDb250YWluZXIucmVnaXN0ZXIoSW1hZ2VGYWN0b3J5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwiLy8gIEluY2x1ZGUgYWxsIG9mIHRoZSBHYW1lIE9iamVjdCBGYWN0b3JpZXNcbi8vICBcbi8vICBUaGlzIGZpbGUgc2hvdWxkIGJlIGxpbmtlZCB0byB0aGUgc3BlY2lmaWMgYnVpbGQgb2YgUGhhc2VyLCBpLmUuIFBoYXNlciBOYW5vIHdvbid0IHJlcXVpcmUgYWxsIEdPc1xuXG5yZXF1aXJlICgnLi9pbWFnZS9JbWFnZUZhY3RvcnknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIlxudmFyIEZJTEVfQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XG52YXIgU2V0ID0gcmVxdWlyZSgnLi4vc3RydWN0cy9TZXQnKTtcbnZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcblxudmFyIEJhc2VMb2FkZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vICBNb3ZlIHRvIGEgJ3NldFVSTCcgbWV0aG9kP1xuICAgIHRoaXMuYmFzZVVSTCA9ICcnO1xuICAgIHRoaXMucGF0aCA9ICcnO1xuXG4gICAgLy8gIFJlYWQgZnJvbSBHYW1lIC8gU3RhdGUgQ29uZmlnXG4gICAgdGhpcy5lbmFibGVQYXJhbGxlbCA9IHRydWU7XG4gICAgdGhpcy5tYXhQYXJhbGxlbERvd25sb2FkcyA9IDg7XG5cbiAgICAvLyAgeGhyIHNwZWNpZmljIGdsb2JhbCBzZXR0aW5ncyAoY2FuIGJlIG92ZXJyaWRkZW4gb24gYSBwZXItZmlsZSBiYXNpcylcbiAgICB0aGlzLnhociA9IFhIUlNldHRpbmdzKCk7XG5cbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMuaW5mbGlnaHQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5mYWlsZWQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5xdWV1ZSA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2V0KCk7XG5cbiAgICB0aGlzLl9zdGF0ZSA9ICdQRU5ESU5HJztcbn07XG5cbkJhc2VMb2FkZXIucHJvdG90eXBlLmNvbnRydWN0b3IgPSBCYXNlTG9hZGVyO1xuXG5CYXNlTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGFkZEZpbGU6IGZ1bmN0aW9uIChmaWxlKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIE11bHRpcGFydCBmaWxlP1xuICAgICAgICBpZiAoZmlsZS5tdWx0aXBhcnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGUuZmlsZUEucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgICAgIGZpbGUuZmlsZUIucGF0aCA9IHRoaXMucGF0aDtcblxuICAgICAgICAgICAgZmlsZS5maWxlQS50YWcgPSB0aGlzLnRhZztcbiAgICAgICAgICAgIGZpbGUuZmlsZUIudGFnID0gdGhpcy50YWc7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZS5maWxlQSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUuZmlsZUIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZS5wYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICAgICAgLy8gZmlsZS50YWcgPSB0aGlzLnRhZztcblxuICAgICAgICAgICAgdGhpcy5saXN0LmFkZChmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyAgSXMgdGhlIExvYWRlciBhY3RpdmVseSBsb2FkaW5nIChvciBwcm9jZXNzaW5nIGxvYWRlZCBmaWxlcylcbiAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3N0YXRlID09PSAnTE9BRElORycgfHwgdGhpcy5fc3RhdGUgPT09ICdQUk9DRVNTSU5HJyk7XG4gICAgfSxcblxuICAgIC8vICBJcyB0aGUgTG9hZGVyIHJlYWR5IHRvIHN0YXJ0IGEgbmV3IGxvYWQ/XG4gICAgaXNSZWFkeTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09ICdQRU5ESU5HJyB8fCB0aGlzLl9zdGF0ZSA9PT0gJ0NPTVBMRVRFJyB8fCB0aGlzLl9zdGF0ZSA9PT0gJ0ZBSUxFRCcpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIHN0YXJ0LiBGaWxlcyB0byBsb2FkOicsIHRoaXMubGlzdC5zaXplKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5saXN0LnNpemUgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlID0gTE9BRElORztcblxuICAgICAgICAgICAgdGhpcy5mYWlsZWQuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVQcm9ncmVzczogZnVuY3Rpb24gKClcbiAgICB7XG5cbiAgICB9LFxuXG4gICAgcHJvY2Vzc0xvYWRRdWV1ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIHByb2Nlc3NMb2FkUXVldWUnLCB0aGlzLmxpc3Quc2l6ZSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLmxpc3QuZWFjaChmdW5jdGlvbiAoZmlsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGZpbGUuc3RhdGUgPT09IEZJTEVfQ09OU1QuUEVORElORyAmJiBfdGhpcy5pbmZsaWdodC5zaXplIDwgX3RoaXMubWF4UGFyYWxsZWxEb3dubG9hZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FEREVEIFRPIFFVRVVFOicsIGZpbGUua2V5KTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmluZmxpZ2h0LmFkZChmaWxlKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmxpc3QuZGVsZXRlKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZEZpbGUoZmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5pbmZsaWdodC5zaXplID09PSBfdGhpcy5tYXhQYXJhbGxlbERvd25sb2FkcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgVGVsbHMgdGhlIFNldCBpdGVyYXRvciB0byBhYm9ydFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICAvLyAgcHJpdmF0ZVxuICAgIGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FESU5HJywgZmlsZS5rZXkpO1xuXG4gICAgICAgIC8vICBJZiB0aGUgZmlsZSBkb2Vzbid0IGhhdmUgaXRzIG93biBjcm9zc09yaWdpbiBzZXQsXG4gICAgICAgIC8vICB3ZSdsbCB1c2UgdGhlIExvYWRlcnMgKHdoaWNoIGlzIHVuZGVmaW5lZCBieSBkZWZhdWx0KVxuICAgICAgICBpZiAoIWZpbGUuY3Jvc3NPcmlnaW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGUuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsZS5sb2FkKHRoaXMubmV4dEZpbGUuYmluZCh0aGlzKSwgdGhpcy5iYXNlVVJMKTtcbiAgICB9LFxuXG4gICAgbmV4dEZpbGU6IGZ1bmN0aW9uIChwcmV2aW91c0ZpbGUsIHN1Y2Nlc3MpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9BREVEOicsIHByZXZpb3VzRmlsZS5zcmMsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIC8vICBNb3ZlIHRoZSBmaWxlIHRoYXQganVzdCBsb2FkZWQgZnJvbSB0aGUgaW5mbGlnaHQgbGlzdCB0byB0aGUgcXVldWUgb3IgZmFpbGVkIFNldFxuXG4gICAgICAgIGlmIChzdWNjZXNzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmFkZChwcmV2aW91c0ZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5mYWlsZWQuYWRkKHByZXZpb3VzRmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZmxpZ2h0LmRlbGV0ZShwcmV2aW91c0ZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3Quc2l6ZSA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0RmlsZSAtIHN0aWxsIHNvbWV0aGluZyBpbiB0aGUgbGlzdCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9hZFF1ZXVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbmZsaWdodC5zaXplID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV4dEZpbGUgY2FsbGluZyBmaW5pc2hlZExvYWRpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoZWRMb2FkaW5nOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIuZmluaXNoZWRMb2FkaW5nIFBST0NFU1NJTkcnKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gJ1BST0NFU1NJTkcnO1xuXG4gICAgICAgIHZhciBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xuXG4gICAgICAgIHN0b3JhZ2UuY2xlYXIoKTtcblxuICAgICAgICAvLyAgVGhpcyBjb3VsZCBiZSBQcm9taXNlIGJhc2VkIGFzIHdlbGwsIGFsbG93aW5nIGZvciBhc3luYyBwcm9jZXNzaW5nXG5cbiAgICAgICAgdGhpcy5xdWV1ZS5lYWNoKGZ1bmN0aW9uIChmaWxlKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlLm9uUHJvY2VzcygpO1xuXG4gICAgICAgICAgICAvLyAgVGhlIEZpbGUgc3BlY2lmaWMgcHJvY2VzcyBoYW5kbGVyIGhhcyBydW5cbiAgICAgICAgICAgIC8vICBOb3cgcnVuIGFueSBjdXN0b20gY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoZmlsZS5wcm9jZXNzQ2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZS5wcm9jZXNzQ2FsbGJhY2soZmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGUub25Db21wbGV0ZSgpO1xuXG4gICAgICAgICAgICBzdG9yYWdlLmFkZChmaWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkZXIgQ29tcGxldGUuIExvYWRlZDonLCBzdG9yYWdlLnNpemUsICdGYWlsZWQ6JywgdGhpcy5mYWlsZWQuc2l6ZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIgQ09NUExFVEUnKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gJ0NPTVBMRVRFJztcblxuICAgICAgICAvLyAgRGlzcGF0Y2ggJ29uIGNvbXBsZXRlJyBzaWduYWxzIG5vd1xuICAgIH0sXG5cbiAgICAvKlxuICAgIGdldExvYWRlZEZpbGVzQnlUeXBlICh0eXBlLCBncm91cCA9ICcnLCBvdXRwdXQgPSBbXSkge1xuXG4gICAgICAgIC8vICBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIGZpbGVzIHRoYXQgaGF2ZSBzdGF0ZSA9IENPTVBMRVRFICh3aGljaCBtZWFucyBsb2FkZWQgKyBwcm9jZXNzZWQpXG5cbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLnN0b3JhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFLkNPTVBMRVRFICYmIGZpbGUudGFnID09PSBncm91cCAmJiBmaWxlLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuXG4gICAgfSxcblxuICAgIGdldExvYWRlZEZpbGVzIChncm91cCA9ICcnLCBvdXRwdXQgPSBbXSkge1xuXG4gICAgICAgIC8vICBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIGZpbGVzIHRoYXQgaGF2ZSBzdGF0ZSA9IENPTVBMRVRFICh3aGljaCBtZWFucyBsb2FkZWQgKyBwcm9jZXNzZWQpXG5cbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLnN0b3JhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFLkNPTVBMRVRFICYmIGZpbGUudGFnID09PSBncm91cCAmJiAodHlwZSAhPT0gJycgJiYgZmlsZS50eXBlID09PSB0eXBlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG5cbiAgICB9LFxuICAgICovXG5cbiAgICByZXNldDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xuICAgICAgICB0aGlzLmluZmxpZ2h0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmFpbGVkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy50YWcgPSAnJztcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuYmFzZVVSTCA9ICcnO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnUEVORElORyc7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnREVTVFJPWUVEJztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUxvYWRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9CYXNlTG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvQmFzZUxvYWRlci5qcyIsInZhciBHZXRVUkwgPSByZXF1aXJlKCcuL0dldFVSTCcpO1xudmFyIEZJTEVfQ09OU1QgPSByZXF1aXJlKCcuL2NvbnN0Jyk7XG52YXIgWEhSTG9hZGVyID0gcmVxdWlyZSgnLi9YSFJMb2FkZXInKTtcbnZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcblxudmFyIEZpbGUgPSBmdW5jdGlvbiAodHlwZSwga2V5LCB1cmwsIHJlc3BvbnNlVHlwZSlcbntcbiAgICAvLyAgZmlsZSB0eXBlIChpbWFnZSwganNvbiwgZXRjKSBmb3Igc29ydGluZyB3aXRoaW4gdGhlIExvYWRlclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAvLyAgdW5pcXVlIGNhY2hlIGtleSAodW5pcXVlIHdpdGhpbiBpdHMgZmlsZSB0eXBlKVxuICAgIHRoaXMua2V5ID0ga2V5O1xuXG4gICAgLy8gIFRoZSBVUkwgb2YgdGhlIGZpbGUsIG5vdCBpbmNsdWRpbmcgYmFzZVVSTFxuICAgIHRoaXMudXJsID0gdXJsO1xuXG4gICAgLy8gIFNldCB3aGVuIHRoZSBMb2FkZXIgY2FsbHMgJ2xvYWQnIG9uIHRoaXMgZmlsZVxuICAgIHRoaXMuc3JjID0gJyc7XG5cbiAgICB0aGlzLnhoclNldHRpbmdzID0gWEhSU2V0dGluZ3MocmVzcG9uc2VUeXBlKTtcblxuICAgIHRoaXMueGhyTG9hZGVyID0gbnVsbDtcblxuICAgIHRoaXMuc3RhdGUgPSBGSUxFX0NPTlNULlBFTkRJTkc7XG5cbiAgICAvLyAgU2V0IGJ5IG9uUHJvZ3Jlc3NcbiAgICB0aGlzLmJ5dGVzVG90YWwgPSAwO1xuICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSAtMTtcbiAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZSA9IC0xO1xuXG4gICAgLy8gIEZvciBDT1JzIGJhc2VkIGxvYWRpbmcuXG4gICAgLy8gIElmIHRoaXMgaXMgdW5kZWZpbmVkIHRoZW4gdGhlIEZpbGUgd2lsbCBjaGVjayBCYXNlTG9hZGVyLmNyb3NzT3JpZ2luIGFuZCB1c2UgdGhhdCAoaWYgc2V0KVxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyAgVGhlIGFjdHVhbCBwcm9jZXNzZWQgZmlsZSBkYXRhXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gIE11bHRpcGFydCBmaWxlPyAoaS5lLiBhbiBhdGxhcyBhbmQgaXRzIGpzb24pXG4gICAgdGhpcy5tdWx0aXBhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5saW5rRmlsZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xufTtcblxuRmlsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlO1xuXG5GaWxlLnByb3RvdHlwZSA9IHtcblxuICAgIHJlc2V0WEhSOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25sb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnhockxvYWRlci5vbmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnhockxvYWRlci5vbnByb2dyZXNzID0gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICAvLyAgQ2FsbGVkIHdoZW4gdGhlIEltYWdlIGxvYWRzXG4gICAgLy8gIFByb2dyZXNzRXZlbnRcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChldmVudClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2FkZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgICAgIC8vIHRoaXMub25TdGF0ZUNoYW5nZShMT0FESU5HKTtcblxuICAgICAgICB0aGlzLnJlc2V0WEhSKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGVycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgICB0aGlzLnJlc2V0WEhSKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChldmVudClcbiAgICB7XG4gICAgICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSBldmVudC5sb2FkZWQ7XG4gICAgICAgIHRoaXMuYnl0ZXNUb3RhbCA9IGV2ZW50LnRvdGFsO1xuXG4gICAgICAgIHRoaXMucGVyY2VudENvbXBsZXRlID0gTWF0aC5taW4oKHRoaXMuYnl0ZXNMb2FkZWQgLyB0aGlzLmJ5dGVzVG90YWwpLCAxKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcmNlbnRDb21wbGV0ZSArICclICgnICsgdGhpcy5ieXRlc0xvYWRlZCArICcgYnl0ZXMpJyk7XG4gICAgfSxcblxuICAgIG9uUHJvY2VzczogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzIHRoZSBpbWFnZScpO1xuICAgIH0sXG5cbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGNvbXBsZXRlZCBhbmQgYWRkZWQgdG8gdGhlIGxvYWRlciBzdG9yZScpO1xuICAgIH0sXG5cbiAgICAvLyAgQ2FsbGVkIGJ5IHRoZSBMb2FkZXIsIHN0YXJ0cyB0aGUgYWN0dWFsIGZpbGUgZG93bmxvYWRpbmdcbiAgICBsb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2ssIGJhc2VVUkwsIGdsb2JhbFhIUilcbiAgICB7XG4gICAgICAgIGlmIChiYXNlVVJMID09PSB1bmRlZmluZWQpIHsgYmFzZVVSTCA9ICcnOyB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMuc3JjID0gR2V0VVJMKHRoaXMsIGJhc2VVUkwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FESU5HMicsIHRoaXMuc3JjKTtcblxuICAgICAgICB0aGlzLnhockxvYWRlciA9IFhIUkxvYWRlcih0aGlzLCBnbG9iYWxYSFIpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9GaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvRmlsZS5qcyIsInZhciBHZXRVUkwgPSBmdW5jdGlvbiAoZmlsZSwgYmFzZVVSTClcbntcbiAgICBpZiAoIWZpbGUudXJsKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmaWxlLnVybC5tYXRjaCgvXig/OmJsb2I6fGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xcXC9cXC8pLykpXG4gICAge1xuICAgICAgICByZXR1cm4gZmlsZS51cmw7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHJldHVybiBiYXNlVVJMICsgZmlsZS5wYXRoICsgZmlsZS51cmw7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZXRVUkw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvR2V0VVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL1hIUlNldHRpbmdzJyk7XG5cbi8vICBUYWtlcyB0d28gWEhSIE9iamVjdHMgYW5kIGNyZWF0ZXMgYSBuZXcgb2JqZWN0XG5cbi8vICBUaGUgbmV3IG9iamVjdCBpcyBiYXNlZCBvbiBnbG9iYWwgaW5pdGlhbGx5LCBidXQgYW55IHNldHRpbmcgaW5cbi8vICBsb2NhbCBvdmVycmlkZXMgdGhlIGdsb2JhbCB2YWx1ZS5cblxudmFyIE1lcmdlWEhSU2V0dGluZ3MgPSBmdW5jdGlvbiAoZ2xvYmFsLCBsb2NhbClcbntcbiAgICB2YXIgb3V0cHV0ID0gKGdsb2JhbCA9PT0gdW5kZWZpbmVkKSA/IFhIUlNldHRpbmdzKCkgOiBPYmplY3QuYXNzaWduKGdsb2JhbCk7XG5cbiAgICBpZiAobG9jYWwpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBzZXR0aW5nIGluIGxvY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobG9jYWxbc2V0dGluZ10gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbc2V0dGluZ10gPSBsb2NhbFtzZXR0aW5nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVyZ2VYSFJTZXR0aW5ncztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsInZhciBNZXJnZVhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9NZXJnZVhIUlNldHRpbmdzJyk7XG5cbnZhciBYSFJMb2FkZXIgPSBmdW5jdGlvbiAoZmlsZSwgZ2xvYmFsWEhSU2V0dGluZ3MpXG57XG4gICAgdmFyIGNvbmZpZyA9IE1lcmdlWEhSU2V0dGluZ3MoZ2xvYmFsWEhSU2V0dGluZ3MsIGZpbGUueGhyU2V0dGluZ3MpO1xuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUuc3JjLCBjb25maWcuYXN5bmMsIGNvbmZpZy51c2VyLCBjb25maWcucGFzc3dvcmQpO1xuXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IGZpbGUueGhyU2V0dGluZ3MucmVzcG9uc2VUeXBlO1xuICAgIHhoci50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBpZiAoY29uZmlnLmhlYWRlciAmJiBjb25maWcuaGVhZGVyVmFsdWUpXG4gICAge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihjb25maWcuaGVhZGVyLCBjb25maWcuaGVhZGVyVmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3ZlcnJpZGVNaW1lVHlwZSlcbiAgICB7XG4gICAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBhIHN1Y2Nlc3NmdWwgcmVxdWVzdCwgdGhlIHhoci5yZXNwb25zZSBwcm9wZXJ0eSB3aWxsIGNvbnRhaW4gdGhlIHJlcXVlc3RlZCBkYXRhIGFzIGEgRE9NU3RyaW5nLCBBcnJheUJ1ZmZlciwgQmxvYiwgb3IgRG9jdW1lbnQgKGRlcGVuZGluZyBvbiB3aGF0IHdhcyBzZXQgZm9yIHJlc3BvbnNlVHlwZS4pXG5cbiAgICB4aHIub25sb2FkID0gZmlsZS5vbkxvYWQuYmluZChmaWxlKTtcbiAgICB4aHIub25lcnJvciA9IGZpbGUub25FcnJvci5iaW5kKGZpbGUpO1xuICAgIHhoci5vbnByb2dyZXNzID0gZmlsZS5vblByb2dyZXNzLmJpbmQoZmlsZSk7XG5cbiAgICAvLyAgVGhpcyBpcyB0aGUgb25seSBzdGFuZGFyZCBtZXRob2QsIHRoZSBvbmVzIGFib3ZlIGFyZSBicm93c2VyIGFkZGl0aW9ucyAobWF5YmUgbm90IHVuaXZlcnNhbD8pXG4gICAgLy8geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZVxuXG4gICAgeGhyLnNlbmQoKTtcblxuICAgIHJldHVybiB4aHI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUkxvYWRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9YSFJMb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9YSFJMb2FkZXIuanMiLCIvKipcbiogQHByb3BlcnR5IHtudW1iZXJ9IGMgLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIGMgPSAxO1xuXG4vKipcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMwIC0gSW50ZXJuYWwgdmFyLlxuKiBAcHJpdmF0ZVxuKi9cbnZhciBzMCA9IDA7XG5cbi8qKlxuKiBAcHJvcGVydHkge251bWJlcn0gczEgLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIHMxID0gMDtcblxuLyoqXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMiAtIEludGVybmFsIHZhci5cbiogQHByaXZhdGVcbiovXG52YXIgczIgPSAwO1xuXG4vKipcbiogQHByb3BlcnR5IHtBcnJheX0gc2lnbiAtIEludGVybmFsIHZhci5cbiogQHByaXZhdGVcbiovXG52YXIgc2lnbiA9IFsgLTEsIDEgXTtcblxuLyoqXG4qIFByaXZhdGUgcmFuZG9tIGhlbHBlci5cbipcbiogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNybmRcbiogQHByaXZhdGVcbiogQHJldHVybiB7bnVtYmVyfVxuKi9cbnZhciBybmQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciB0ID0gMjA5MTYzOSAqIHMwICsgYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG5cbiAgICBjID0gdCB8IDA7XG4gICAgczAgPSBzMTtcbiAgICBzMSA9IHMyO1xuICAgIHMyID0gdCAtIGM7XG5cbiAgICByZXR1cm4gczI7XG59O1xuXG4vKipcbiogSW50ZXJuYWwgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlZWQgaGFzaC5cbipcbiogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNoYXNoXG4qIEBwcml2YXRlXG4qIEBwYXJhbSB7YW55fSBkYXRhXG4qIEByZXR1cm4ge251bWJlcn0gaGFzaGVkIHZhbHVlLlxuKi9cbnZhciBoYXNoID0gZnVuY3Rpb24gKGRhdGEpXG57XG4gICAgdmFyIGgsIGksIG47XG4gICAgbiA9IDB4ZWZjODI0OWQ7XG4gICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsvLyAyXjMyXG4gICAgfVxuXG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7Ly8gMl4tMzJcbn07XG5cblxudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSBmdW5jdGlvbiAoc2VlZHMpXG57XG4gICAgaWYgKHR5cGVvZiBzZWVkcyA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgICB0aGlzLnN0YXRlKHNlZWRzKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3coc2VlZHMpO1xuICAgIH1cbn07XG5cblJhbmRvbURhdGFHZW5lcmF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmFuZG9tRGF0YUdlbmVyYXRvcjtcblxuUmFuZG9tRGF0YUdlbmVyYXRvci5wcm90b3R5cGUgPSB7XG5cbiAgICAvKipcbiAgICAqIFJlc2V0IHRoZSBzZWVkIG9mIHRoZSByYW5kb20gZGF0YSBnZW5lcmF0b3IuXG4gICAgKlxuICAgICogX05vdGVfOiB0aGUgc2VlZCBhcnJheSBpcyBvbmx5IHByb2Nlc3NlZCB1cCB0byB0aGUgZmlyc3QgYHVuZGVmaW5lZGAgKG9yIGBudWxsYCkgdmFsdWUsIHNob3VsZCBzdWNoIGJlIHByZXNlbnQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzb3dcbiAgICAqIEBwYXJhbSB7YW55W119IHNlZWRzIC0gVGhlIGFycmF5IG9mIHNlZWRzOiB0aGUgYHRvU3RyaW5nKClgIG9mIGVhY2ggdmFsdWUgaXMgdXNlZC5cbiAgICAqL1xuICAgIHNvdzogZnVuY3Rpb24gKHNlZWRzKVxuICAgIHtcbiAgICAgICAgLy8gQWx3YXlzIHJlc2V0IHRvIGRlZmF1bHQgc2VlZFxuICAgICAgICBzMCA9IGhhc2goJyAnKTtcbiAgICAgICAgczEgPSBoYXNoKHMwKTtcbiAgICAgICAgczIgPSBoYXNoKHMxKTtcbiAgICAgICAgYyA9IDE7XG5cbiAgICAgICAgaWYgKCFzZWVkcylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgYW55IHNlZWRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VlZHMubGVuZ3RoICYmIChzZWVkc1tpXSAhPSBudWxsKTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VlZCA9IHNlZWRzW2ldO1xuXG4gICAgICAgICAgICBzMCAtPSBoYXNoKHNlZWQpO1xuICAgICAgICAgICAgczAgKz0gfn4oczAgPCAwKTtcbiAgICAgICAgICAgIHMxIC09IGhhc2goc2VlZCk7XG4gICAgICAgICAgICBzMSArPSB+fihzMSA8IDApO1xuICAgICAgICAgICAgczIgLT0gaGFzaChzZWVkKTtcbiAgICAgICAgICAgIHMyICs9IH5+KHMyIDwgMCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxuICAgICovXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIDJeMzJcbiAgICAgICAgcmV0dXJuIHJuZCgpICogMHgxMDAwMDAwMDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNmcmFjXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICAqL1xuICAgIGZyYWM6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAyXi01M1xuICAgICAgICByZXR1cm4gcm5kKCkgKyAocm5kKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMl4zMi5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxuICAgICovXG4gICAgcmVhbDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXIoKSArIHRoaXMuZnJhYygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VySW5SYW5nZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICovXG4gICAgaW50ZWdlckluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmVhbEluUmFuZ2UoMCwgbWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXG4gICAgKiBUaGlzIG1ldGhvZCBpcyBhbiBhbGlhcyBmb3IgUmFuZG9tRGF0YUdlbmVyYXRvci5pbnRlZ2VySW5SYW5nZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2JldHdlZW5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAqL1xuICAgIGJldHdlZW46IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXJJblJhbmdlKG1pbiwgbWF4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyZWFsSW5SYW5nZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICovXG4gICAgcmVhbEluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyYWMoKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI25vcm1hbFxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxuICAgICovXG4gICAgbm9ybWFsOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEgLSAoMiAqIHRoaXMuZnJhYygpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgdmFsaWQgUkZDNDEyMiB2ZXJzaW9uNCBJRCBoZXggc3RyaW5nIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTMwODM2OFxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjdXVpZFxuICAgICogQHJldHVybiB7c3RyaW5nfSBBIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZ1xuICAgICovXG4gICAgdXVpZDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBhID0gJyc7XG4gICAgICAgIHZhciBiID0gJyc7XG5cbiAgICAgICAgZm9yIChiID0gYSA9ICcnOyBhKysgPCAzNjsgYiArPX5hICUgNSB8IGEgKiAzJjQgPyAoYV4xNSA/IDhedGhpcy5mcmFjKCkgKiAoYV4yMCA/IDE2IDogNCkgOiA0KS50b1N0cmluZygxNikgOiAnLScpXG4gICAgICAgIHtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNwaWNrXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxuICAgICovXG4gICAgcGljazogZnVuY3Rpb24gKGFycmF5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W3RoaXMuaW50ZWdlckluUmFuZ2UoMCwgYXJyYXkubGVuZ3RoIC0gMSldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSBzaWduIHRvIGJlIHVzZWQgd2l0aCBtdWx0aXBsaWNhdGlvbiBvcGVyYXRvci5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3NpZ25cbiAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgb3IgKzEuXG4gICAgKi9cbiAgICBzaWduOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGljayhzaWduKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIG1lbWJlciBvZiBgYXJyYXlgLCBmYXZvcmluZyB0aGUgZWFybGllciBlbnRyaWVzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijd2VpZ2h0ZWRQaWNrXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxuICAgICovXG4gICAgd2VpZ2h0ZWRQaWNrOiBmdW5jdGlvbiAoYXJyYXkpXG4gICAge1xuICAgICAgICByZXR1cm4gYXJyYXlbfn4oTWF0aC5wb3codGhpcy5mcmFjKCksIDIpICogKGFycmF5Lmxlbmd0aCAtIDEpICsgMC41KV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSB0aW1lc3RhbXAgYmV0d2VlbiBtaW4gYW5kIG1heCwgb3IgYmV0d2VlbiB0aGUgYmVnaW5uaW5nIG9mIDIwMDAgYW5kIHRoZSBlbmQgb2YgMjAyMCBpZiBtaW4gYW5kIG1heCBhcmVuJ3Qgc3BlY2lmaWVkLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjdGltZXN0YW1wXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgKi9cbiAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKG1pbiB8fCA5NDY2ODQ4MDAwMDAsIG1heCB8fCAxNTc3ODYyMDAwMDAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGFuZ2xlIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjYW5nbGVcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxuICAgICovXG4gICAgYW5nbGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZSgtMTgwLCAxODApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gcm90YXRpb24gaW4gcmFkaWFucywgYmV0d2VlbiAtMy4xNDEgYW5kIDMuMTQxXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyb3RhdGlvblxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAtMy4xNDEgYW5kIDMuMTQxXG4gICAgKi9cbiAgICByb3RhdGlvbjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKC0zLjE0MTU5MjY1MzU4OTc5MywgMy4xNDE1OTI2NTM1ODk3OTMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEdldHMgb3IgU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci4gVGhpcyBhbGxvd3MgeW91IHRvIHJldGFpbiB0aGUgdmFsdWVzXG4gICAgKiB0aGF0IHRoZSBnZW5lcmF0b3IgaXMgdXNpbmcgYmV0d2VlbiBnYW1lcywgaS5lLiBpbiBhIGdhbWUgc2F2ZSBmaWxlLlxuICAgICpcbiAgICAqIFRvIHNlZWQgdGhpcyBnZW5lcmF0b3Igd2l0aCBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgeW91IGNhbiBwYXNzIGl0IGFzIHRoZVxuICAgICogYHNlZWRgIHZhbHVlIGluIHlvdXIgZ2FtZSBjb25maWcsIG9yIGNhbGwgdGhpcyBtZXRob2QgZGlyZWN0bHkgYWZ0ZXIgUGhhc2VyIGhhcyBib290ZWQuXG4gICAgKlxuICAgICogQ2FsbCB0aGlzIG1ldGhvZCB3aXRoIG5vIHBhcmFtZXRlcnMgdG8gcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICpcbiAgICAqIElmIHByb3ZpZGluZyBhIHN0YXRlIGl0IHNob3VsZCBtYXRjaCB0aGUgc2FtZSBmb3JtYXQgdGhhdCB0aGlzIG1ldGhvZFxuICAgICogcmV0dXJucywgd2hpY2ggaXMgYSBzdHJpbmcgd2l0aCBhIGhlYWRlciBgIXJuZGAgZm9sbG93ZWQgYnkgdGhlIGBjYCxcbiAgICAqIGBzMGAsIGBzMWAgYW5kIGBzMmAgdmFsdWVzIHJlc3BlY3RpdmVseSwgZWFjaCBjb21tYS1kZWxpbWl0ZWQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzdGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV0gLSBHZW5lcmF0b3Igc3RhdGUgdG8gYmUgc2V0LlxuICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICAgICovXG4gICAgc3RhdGU6IGZ1bmN0aW9uIChzdGF0ZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdzdHJpbmcnICYmIHN0YXRlLm1hdGNoKC9eIXJuZC8pKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIGMgPSBwYXJzZUZsb2F0KHN0YXRlWzFdKTtcbiAgICAgICAgICAgIHMwID0gcGFyc2VGbG9hdChzdGF0ZVsyXSk7XG4gICAgICAgICAgICBzMSA9IHBhcnNlRmxvYXQoc3RhdGVbM10pO1xuICAgICAgICAgICAgczIgPSBwYXJzZUZsb2F0KHN0YXRlWzRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbICchcm5kJywgYywgczAsIHMxLCBzMiBdLmpvaW4oJywnKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tRGF0YUdlbmVyYXRvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL21hdGgvcmFuZG9tLWRhdGEtZ2VuZXJhdG9yL1JhbmRvbURhdGFHZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5mb3JFYWNoXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcbiovXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKVxue1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc0FyZyAqLylcbiAgICB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICBpZiAodGhpcyA9PT0gdm9pZCAwIHx8IHRoaXMgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XG4qL1xuaWYgKCFBcnJheS5pc0FycmF5KVxue1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvQXJyYXkuaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXG5pZiAoIU1hdGgudHJ1bmMpIHtcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xuICAgIH07XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuKi9cbmlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcblxuICAgIC8qIGpzaGludCBmcmVlemU6IGZhbHNlICovXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMsIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGJvdW5kQXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHkodGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gdGhpcyA6IHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib3VuZC5wcm90b3R5cGUgPSAoZnVuY3Rpb24gRihwcm90bykge1xuICAgICAgICAgICAgICAgIGlmIChwcm90bylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEYpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLyoganNoaW50IHN1cGVybmV3OiB0cnVlICovXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSh0YXJnZXQucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XG4qL1xuaWYgKCFBcnJheS5pc0FycmF5KVxue1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5mb3JFYWNoXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcbiovXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKVxue1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oZnVuIC8qLCB0aGlzQXJnICovKVxuICAgIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZnVuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiogTG93LWJ1ZGdldCBGbG9hdDMyQXJyYXkga25vY2stb2ZmLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUDIuanMgaW4gSUU5XG4qIFNvdXJjZTogaHR0cDovL3d3dy5odG1sNWdhbWVkZXZzLmNvbS90b3BpYy81OTg4LXBoYXNlci0xMi1pZTkvXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcbiovXG5pZiAodHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwib2JqZWN0XCIpXG57XG4gICAgdmFyIENoZWFwQXJyYXkgPSBmdW5jdGlvbih0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgICAgIHdpbmRvd1t0eXBlXSA9IGZ1bmN0aW9uKGFyZykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKGFyZykgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gYXJnW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgIHdpbmRvd1t0eXBlXS5jb25zdHJ1Y3RvciA9IHdpbmRvd1t0eXBlXTtcbiAgICB9O1xuXG4gICAgQ2hlYXBBcnJheSgnRmxvYXQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ0ludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnQXJyYXlCdWZmZXInKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG59XG5cbi8qKlxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcbiAqL1xuaWYgKCF3aW5kb3cuY29uc29sZSlcbntcbiAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xufVxuXG4vKipcbiAqIHBlcmZvcm1hbmNlLm5vd1xuICovXG4oZnVuY3Rpb24oKXtcblxuICBpZiAoXCJwZXJmb3JtYW5jZVwiIGluIHdpbmRvdyA9PSBmYWxzZSkge1xuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XG4gIH1cbiAgXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfSk7XG5cbiAgaWYgKFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlID09IGZhbHNlKVxuICB7XG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XG4gICAgXG4gICAgaWYgKHBlcmZvcm1hbmNlLnRpbWluZyAmJiBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KXtcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcbiAgICB9XG5cbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIG5vd09mZnNldDtcbiAgICB9XG4gIH1cblxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vLyBFUzYgTWF0aC50cnVuYyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmNcbmlmICghTWF0aC50cnVuYykge1xuICAgIE1hdGgudHJ1bmMgPSBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gICAgICAgIHJldHVybiB4IDwgMCA/IE1hdGguY2VpbCh4KSA6IE1hdGguZmxvb3IoeCk7XG4gICAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9NYXRoLnRydW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG5cbi8qKlxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcbiogU291cmNlOiBodHRwOi8vd3d3Lmh0bWw1Z2FtZWRldnMuY29tL3RvcGljLzU5ODgtcGhhc2VyLTEyLWllOS9cbiogQ2FtZXJvbiBGb2FsZSAoaHR0cDovL3d3dy5raWJpYnUuY29tKVxuKi9cbmlmICh0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJvYmplY3RcIilcbntcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXG4gICAge1xuICAgICAgICB2YXIgcHJvdG8gPSBuZXcgQXJyYXkoKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICAgICAgd2luZG93W3R5cGVdID0gZnVuY3Rpb24oYXJnKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBcnJheS5jYWxsKHRoaXMsIGFyZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvd1t0eXBlXS5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xuICAgIH07XG5cbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnVWludDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnVWludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBDaGVhcEFycmF5KCdBcnJheUJ1ZmZlcicpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4gKiBBbHNvIGZpeCBmb3IgdGhlIGFic2VudCBjb25zb2xlIGluIElFOVxuICovXG5pZiAoIXdpbmRvdy5jb25zb2xlKVxue1xuICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgd2luZG93LmNvbnNvbGUubG9nID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xuICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvY29uc29sZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4gKiBwZXJmb3JtYW5jZS5ub3dcbiAqL1xuKGZ1bmN0aW9uKCl7XG5cbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xuICB9XG4gIFxuICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH0pO1xuXG4gIGlmIChcIm5vd1wiIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA9PSBmYWxzZSlcbiAge1xuICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xuICAgIFxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XG4gICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XG4gICAgfVxuXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpe1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBub3dPZmZzZXQ7XG4gICAgfVxuICB9XG5cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcGVyZm9ybWFuY2Uubm93LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLy8gUmVmZXJlbmNlczpcbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNTc5NjcxXG4vLyBodHRwOi8vdXBkYXRlcy5odG1sNXJvY2tzLmNvbS8yMDEyLzA1L3JlcXVlc3RBbmltYXRpb25GcmFtZS1BUEktbm93LXdpdGgtc3ViLW1pbGxpc2Vjb25kLXByZWNpc2lvblxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vdGltaGFsbC80MDc4NjE0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvdHJlZS9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuXG4vLyBFeHBlY3RlZCB0byBiZSB1c2VkIHdpdGggQnJvd3NlcmZpeVxuLy8gQnJvd3NlcmlmeSBhdXRvbWF0aWNhbGx5IGRldGVjdHMgdGhlIHVzZSBvZiBgZ2xvYmFsYCBhbmQgcGFzc2VzIHRoZVxuLy8gY29ycmVjdCByZWZlcmVuY2Ugb2YgYGdsb2JhbGAsIGBzZWxmYCwgYW5kIGZpbmFsbHkgYHdpbmRvd2BcblxuLy8gRGF0ZS5ub3dcbmlmICghKERhdGUubm93ICYmIERhdGUucHJvdG90eXBlLmdldFRpbWUpKSB7XG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xufVxuXG4vLyBwZXJmb3JtYW5jZS5ub3dcbmlmICghKGdsb2JhbC5wZXJmb3JtYW5jZSAmJiBnbG9iYWwucGVyZm9ybWFuY2Uubm93KSkge1xuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICghZ2xvYmFsLnBlcmZvcm1hbmNlKSB7XG4gICAgICAgIGdsb2JhbC5wZXJmb3JtYW5jZSA9IHt9O1xuICAgIH1cbiAgICBnbG9iYWwucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9O1xufVxuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbnZhciBsYXN0VGltZSA9IERhdGUubm93KCk7XG52YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG5cbmZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgZ2xvYmFsW3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG59XG5cbmlmICghZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRlbGF5ID0gMTYgKyBsYXN0VGltZSAtIGN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGlmIChkZWxheSA8IDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY2FsbGJhY2socGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfTtcbn1cblxuaWYgKCFnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xuXG4vKipcbiogQSBCYXNlIFN0YXRlIENsYXNzLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlN0YXRlXG4qIEBjb25zdHJ1Y3RvclxuKi9cbnZhciBTdGF0ZSA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgLy8gIFRoZSBwcm9wZXJ0aWVzIGEgU3RhdGUgKm11c3QqIGhhdmUsIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgd2l0aG91dCBicmVha2luZyBpdDpcblxuICAgIHRoaXMuZ2FtZSA9IG51bGw7XG5cbiAgICAvLyAgTWF5YmUganVzdCBhbiBvYmplY3Q/IERvZXNuJ3QgaGF2ZSB0byBpbnN0YW50aWF0ZSBJIGRvbid0IHRoaW5rIC4uLlxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcywgY29uZmlnKTtcblxuICAgIHRoaXMuc3lzID0gbmV3IFN5c3RlbXModGhpcywgY29uZmlnKTtcblxuICAgIC8vICBSZWZlcmVuY2UgdG8gc3lzLmNoaWxkcmVuLCBzZXQgZHVyaW5nIHN5cy5pbml0IG9ubHlcbiAgICB0aGlzLmNoaWxkcmVuO1xufTtcblxuU3RhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGU7XG5cblN0YXRlLnByb3RvdHlwZSA9IHtcblxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgIH0sXG5cbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9LFxuXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgIH0sXG5cbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGUuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XG52YXIgU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcblxuLyoqXG4qIFRoZSBTdGF0ZSBNYW5hZ2VyIGlzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nLCBzZXR0aW5nIHVwIGFuZCBzd2l0Y2hpbmcgZ2FtZSBzdGF0ZXMuXG4qXG4qIEBjbGFzcyBQaGFzZXIuU3RhdGVNYW5hZ2VyXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qL1xudmFyIFN0YXRlTWFuYWdlciA9IGZ1bmN0aW9uIChnYW1lLCBzdGF0ZUNvbmZpZylcbntcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgLy8gIEV2ZXJ5dGhpbmcga2VwdCBpbiBoZXJlXG4gICAgdGhpcy5rZXlzID0ge307XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcblxuICAgIC8vICBPbmx5IGFjdGl2ZSBzdGF0ZXMgYXJlIGtlcHQgaW4gaGVyZVxuICAgIHRoaXMuYWN0aXZlID0gW107XG5cbiAgICB0aGlzLl9wZW5kaW5nID0gW107XG5cbiAgICBpZiAoc3RhdGVDb25maWcpXG4gICAge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZUNvbmZpZykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVDb25maWcubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gIFRoZSBpID09PSAwIHBhcnQganVzdCBzdGFydHMgdGhlIGZpcnN0IFN0YXRlIGdpdmVuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWdbaV0sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogKGkgPT09IDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZyxcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXRlTWFuYWdlcjtcblxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qKlxuICAgICogVGhlIEJvb3QgaGFuZGxlciBpcyBjYWxsZWQgYnkgUGhhc2VyLkdhbWUgd2hlbiBpdCBmaXJzdCBzdGFydHMgdXAuXG4gICAgKiBUaGUgcmVuZGVyZXIgaXMgYXZhaWxhYmxlIGJ5IG5vdy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5TdGF0ZU1hbmFnZXIjYm9vdFxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyB0aGlzLmdhbWUub25QYXVzZS5hZGQodGhpcy5wYXVzZSwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblJlc3VtZS5hZGQodGhpcy5yZXN1bWUsIHRoaXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYm9vdCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fcGVuZGluZ1tpXTtcblxuICAgICAgICAgICAgdGhpcy5hZGQoZW50cnkua2V5LCBlbnRyeS5zdGF0ZSwgZW50cnkuYXV0b1N0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBDbGVhciB0aGUgcGVuZGluZyBsaXN0XG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcbiAgICB9LFxuXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmICgha2V5KSB7IGtleSA9ICdkZWZhdWx0JzsgfVxuXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBrZXkgPSBzdGF0ZUNvbmZpZy5zZXR0aW5ncy5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnb2JqZWN0JyAmJiBzdGF0ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgna2V5JykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleSA9IHN0YXRlQ29uZmlnLmtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBCeSB0aGlzIHBvaW50IGl0J3MgZWl0aGVyICdkZWZhdWx0JyBvciBleHRyYWN0ZWQgZnJvbSB0aGUgU3RhdGVcblxuICAgICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBhIFN0YXRlIHdpdGggZHVwbGljYXRlIGtleTogJyArIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQWRkcyBhIG5ldyBTdGF0ZSBpbnRvIHRoZSBTdGF0ZU1hbmFnZXIuIFlvdSBtdXN0IGdpdmUgZWFjaCBTdGF0ZSBhIHVuaXF1ZSBrZXkgYnkgd2hpY2ggeW91J2xsIGlkZW50aWZ5IGl0LlxuICAgICogVGhlIFN0YXRlIGNhbiBiZSBlaXRoZXIgYSBQaGFzZXIuU3RhdGUgb2JqZWN0IChvciBhbiBvYmplY3QgdGhhdCBleHRlbmRzIGl0KSwgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCBvciBhIGZ1bmN0aW9uLlxuICAgICogSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiBhIG5ldyBzdGF0ZSBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGJ5IGNhbGxpbmcgaXQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2FkZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEEgdW5pcXVlIGtleSB5b3UgdXNlIHRvIHJlZmVyZW5jZSB0aGlzIHN0YXRlLCBpLmUuIFwiTWFpbk1lbnVcIiwgXCJMZXZlbDFcIi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLlN0YXRlfG9iamVjdHxmdW5jdGlvbn0gc3RhdGUgIC0gVGhlIHN0YXRlIHlvdSB3YW50IHRvIHN3aXRjaCB0by5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TdGFydD1mYWxzZV0gIC0gSWYgdHJ1ZSB0aGUgU3RhdGUgd2lsbCBiZSBzdGFydGVkIGltbWVkaWF0ZWx5IGFmdGVyIGFkZGluZyBpdC5cbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKGtleSwgc3RhdGVDb25maWcsIGF1dG9TdGFydClcbiAgICB7XG4gICAgICAgIGlmIChhdXRvU3RhcnQgPT09IHVuZGVmaW5lZCkgeyBhdXRvU3RhcnQgPSBmYWxzZTsgfVxuXG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9wZW5kaW5nLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXG4gICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiBhdXRvU3RhcnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyIG5vdCB5ZXQgYm9vdGVkLCBhZGRpbmcgdG8gbGlzdCcsIHRoaXMuX3BlbmRpbmcubGVuZ3RoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0gdGhpcy5nZXRLZXkoa2V5LCBzdGF0ZUNvbmZpZyk7XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIGluc3RhbmNlJywga2V5KTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIHN0YXRlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIG9iamVjdCcsIGtleSk7XG5cbiAgICAgICAgICAgIHN0YXRlQ29uZmlnLmtleSA9IGtleTtcblxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbU9iamVjdChrZXksIHN0YXRlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gZnVuY3Rpb24nLCBrZXkpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb24oa2V5LCBzdGF0ZUNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IG5ld1N0YXRlO1xuXG4gICAgICAgIHRoaXMuc3RhdGVzLnB1c2gobmV3U3RhdGUpO1xuXG4gICAgICAgIGlmIChhdXRvU3RhcnQgfHwgbmV3U3RhdGUuc2V0dGluZ3MuYWN0aXZlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlzQm9vdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlOiBmdW5jdGlvbiAoa2V5LCBuZXdTdGF0ZSlcbiAgICB7XG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3Mua2V5ID0ga2V5O1xuXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbU9iamVjdDogZnVuY3Rpb24gKGtleSwgc3RhdGVDb25maWcpXG4gICAge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgU3RhdGUoc3RhdGVDb25maWcpO1xuXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZSlcbiAgICB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBzdGF0ZSgpO1xuXG4gICAgICAgIGlmIChuZXdTdGF0ZSBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKG5ld1N0YXRlLCBrZXkpO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3lzID0gbmV3IFN5c3RlbXMobmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgRGVmYXVsdCByZXF1aXJlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXR1cENhbGxiYWNrczogZnVuY3Rpb24gKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7IHN0YXRlQ29uZmlnID0gbmV3U3RhdGU7IH1cblxuICAgICAgICAvLyAgRXh0cmFjdCBjYWxsYmFja3Mgb3Igc2V0IE5PT1BcblxuICAgICAgICBuZXdTdGF0ZS5pbml0ID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdpbml0JywgTk9PUCk7XG4gICAgICAgIG5ld1N0YXRlLnByZWxvYWQgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3ByZWxvYWQnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUuY3JlYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdjcmVhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUuc2h1dGRvd24gPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3NodXRkb3duJywgTk9PUCk7XG5cbiAgICAgICAgbmV3U3RhdGUucHJlVXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwcmVVcGRhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUudXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICd1cGRhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUucG9zdFVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncG9zdFVwZGF0ZScsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS5yZW5kZXIgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3JlbmRlcicsIE5PT1ApO1xuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcjogZnVuY3Rpb24gKG5ld1N0YXRlKVxuICAgIHtcbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS5zZXR0aW5ncy54O1xuICAgICAgICB2YXIgeSA9IG5ld1N0YXRlLnNldHRpbmdzLnk7XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID09PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3Mud2lkdGggPSB0aGlzLmdhbWUuY29uZmlnLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodCA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodCA9IHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZHRoID0gbmV3U3RhdGUuc2V0dGluZ3Mud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBuZXdTdGF0ZS5zZXR0aW5ncy5oZWlnaHQ7XG5cbiAgICAgICAgLy8gbmV3U3RhdGUuc3lzLmZibyA9IHRoaXMuZ2FtZS5yZW5kZXJlci5jcmVhdGVGQk8obmV3U3RhdGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcbiAgICB9LFxuXG4gICAgZ2V0U3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpO1xuICAgIH0sXG5cbiAgICBnZXRBY3RpdmVTdGF0ZUluZGV4OiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVtpXS5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9LFxuXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIChzdGF0ZSAmJiBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUuaW5kZXhPZihzdGF0ZSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5pc0Jvb3RlZClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlciBub3QgeWV0IGJvb3RlZCwgc2V0dGluZyBhdXRvU3RhcnQgb24gcGVuZGluZyBsaXN0Jyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9wZW5kaW5nW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuYXV0b1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcblxuICAgICAgICBpZiAoc3RhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBBbHJlYWR5IHN0YXJ0ZWQ/IE5vdGhpbmcgbW9yZSB0byBkbyBoZXJlIC4uLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoa2V5KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vICArIGFyZ3VtZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlLmluaXQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaW5pdC5jYWxsKHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlLnByZWxvYWQgJiYgc3RhdGUuc3lzLmxvYWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQucmVzZXQoKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLnByZWxvYWQuY2FsbChzdGF0ZSwgdGhpcy5nYW1lKTtcblxuICAgICAgICAgICAgICAgIC8vICBJcyB0aGUgbG9hZGVyIGVtcHR5P1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubG9hZC5saXN0LnNpemUgPT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wdHkgcXVldWUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENyZWF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHN0YXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIFN0YXJ0IHRoZSBsb2FkZXIgZ29pbmcgYXMgd2UgaGF2ZSBzb21ldGhpbmcgaW4gdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLmxvYWRDb21wbGV0ZSwgdGhpcywgMCwgc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkJyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgTm8gcHJlbG9hZD8gVGhlbiB0aGVyZSB3YXMgbm90aGluZyB0byBsb2FkIGVpdGhlclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZENvbXBsZXRlOiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZENvbXBsZXRlJyk7XG5cbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB0byBkbyBsb2FkLXVwZGF0ZSBvbmUgbGFzdCB0aW1lIGJlZm9yZSBzdGF0ZSBpcyBzZXQgdG8gX2NyZWF0ZWRcblxuICAgICAgICAvLyAgU3RvcCBkb2luZyB0aGlzIC4uLlxuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoJ2xvYWRVcGRhdGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUubG9hZFVwZGF0ZS5jYWxsKHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xuICAgIH0sXG5cbiAgICBzdGFydENyZWF0ZTogZnVuY3Rpb24gKHN0YXRlKVxuICAgIHtcbiAgICAgICAgaWYgKHN0YXRlLmNyZWF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUuY3JlYXRlLmNhbGwoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIEluc2VydCBhdCB0aGUgY29ycmVjdCBpbmRleCwgb3IgaXQganVzdCBhbGwgZ29lcyB3cm9uZyA6KVxuXG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRTdGF0ZUluZGV4KHN0YXRlKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKHsgaW5kZXg6IGksIHN0YXRlOiBzdGF0ZSB9KTtcblxuICAgICAgICAvLyAgU29ydCB0aGUgJ2FjdGl2ZScgYXJyYXkgYmFzZWQgb24gdGhlIGluZGV4IHByb3BlcnR5XG4gICAgICAgIHRoaXMuYWN0aXZlLnNvcnQodGhpcy5zb3J0U3RhdGVzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHN0YXRlLnN5cy51cGRhdGVzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICBwYXVzZTogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0QWN0aXZlU3RhdGVJbmRleChrZXkpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XG5cbiAgICAgICAgICAgIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzb3J0U3RhdGVzOiBmdW5jdGlvbiAoc3RhdGVBLCBzdGF0ZUIpXG4gICAge1xuICAgICAgICAvLyAgU29ydCBkZXNjZW5kaW5nXG4gICAgICAgIGlmIChzdGF0ZUEuaW5kZXggPCBzdGF0ZUIuaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZUEuaW5kZXggPiBzdGF0ZUIuaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gIFNlZSBpZiB3ZSBjYW4gcmVkdWNlIHRoaXMgZG93biB0byBqdXN0IHVwZGF0ZSBhbmQgcmVuZGVyXG5cbiAgICBzdGVwOiBmdW5jdGlvbiAodGltZXN0YW1wKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubWFpbmxvb3AucnVubmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RlcCh0aW1lc3RhbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucHJlVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnByZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICAvLyAgSW52b2tlIFN0YXRlIE1haW4gTG9vcCBoZXJlIC0gdXBkYXRpbmcgYWxsIG9mIGl0cyBzeXN0ZW1zICh0d2VlbnMsIHBoeXNpY3MsIGV0YylcblxuICAgICAgICAgICAgLy8gIFRoaXMgc2hvdWxkbid0IGJlIGNhbGxlZCBpZiB0aGUgU3RhdGUgaXMgc3RpbGwgbG9hZGluZ1xuICAgICAgICAgICAgLy8gIEhhdmUgYSBTdGF0ZS5TVEFUVVMgY29uc3QgaW4gdGhlIFNldHRpbmdzLCBkaWN0YXRpbmcgd2hhdCBpcyBnb2luZyBvblxuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcG9zdFVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnBvc3RVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUucG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICAvLyAgQ2FuIHB1dCBhbGwga2luZHMgb2Ygb3RoZXIgY2hlY2tzIGluIGhlcmUsIGxpa2UgTWFpbkxvb3AsIEZQUywgZXRjLlxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZXR0aW5ncy52aXNpYmxlIHx8IHN0YXRlLnN5cy5jb2xvci5hbHBoYSA9PT0gMCB8fCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5yZW5kZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAqL1xuXG4gICAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIChyZW5kZXJlciwgc3RhdGUsIGludGVycG9sYXRpb25QZXJjZW50YWdlKVxuICAgIHtcbiAgICAgICAgLy8gIFBvcHVsYXRlcyB0aGUgZGlzcGxheSBsaXN0XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIocmVuZGVyZXIsIGNoaWxkLCBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcblxuLyoqXG4qIFRoZSBHYW1lT2JqZWN0IEZhY3RvcnkgaXMgYSBxdWljayB3YXkgdG8gY3JlYXRlIG1hbnkgY29tbW9uIGdhbWUgb2JqZWN0cy4gVGhlIEZhY3RvcnkgaXMgb3duZWQgYnkgdGhlIFN0YXRlLlxuKlxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeVxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKi9cblxudmFyIEdhbWVPYmplY3RDcmVhdG9yID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICAgc3RhdGU6IG51bGxcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoc3RhdGUpXG57XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RDcmVhdG9yIGluc3RhbmNlIGZvciBTdGF0ZScsIHN0YXRlKTtcblxuICAgIEdhbWVPYmplY3RDcmVhdG9yLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvLyAgIExvYWQgdGhlIGZhY3RvcmllcyBpbnRvIHRoaXMgT2JqZWN0XG5cbiAgICBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdENyZWF0b3IsIGZhbHNlKTtcblxuICAgIHJldHVybiBHYW1lT2JqZWN0Q3JlYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xuXG4vKipcbiogVGhlIEdhbWVPYmplY3QgRmFjdG9yeSBpcyBhIHF1aWNrIHdheSB0byBjcmVhdGUgbWFueSBjb21tb24gZ2FtZSBvYmplY3RzLiBUaGUgRmFjdG9yeSBpcyBvd25lZCBieSB0aGUgU3RhdGUuXG4qXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qL1xuXG52YXIgR2FtZU9iamVjdEZhY3RvcnkgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlfSBzdGF0ZSAtIFRoZSBTdGF0ZSB0aGF0IG93bnMgdGhpcyBGYWN0b3J5XG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgICBzdGF0ZTogbnVsbFxuXG59O1xuXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcbntcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgR2FtZU9iamVjdEZhY3RvcnkgaW5zdGFuY2UgZm9yIFN0YXRlJyk7XG5cbiAgICBHYW1lT2JqZWN0RmFjdG9yeS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxuXG4gICAgcmV0dXJuIEZhY3RvcnlDb250YWluZXIubG9hZChHYW1lT2JqZWN0RmFjdG9yeSwgdHJ1ZSk7XG5cbiAgICAvLyByZXR1cm4gR2FtZU9iamVjdEZhY3Rvcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ2YXIgQmFzZUxvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2xvYWRlci9CYXNlTG9hZGVyJyk7XG52YXIgSW1hZ2VMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpO1xuXG52YXIgTG9hZGVyID0gZnVuY3Rpb24gKHN0YXRlKVxue1xuICAgIEJhc2VMb2FkZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxufTtcblxuTG9hZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUxvYWRlci5wcm90b3R5cGUpO1xuTG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlcjtcblxuTG9hZGVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uIChrZXksIHVybClcbntcbiAgICB2YXIgZmlsZSA9IEltYWdlTG9hZGVyKGtleSwgdXJsLCB0aGlzLnBhdGgpO1xuXG4gICAgY29uc29sZS5sb2coJ0xvYWRlci5pbWFnZScpO1xuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuXG4gICAgdGhpcy5hZGRGaWxlKGZpbGUpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vLyBNeSB0aGFua3MgdG8gSXNhYWMgU3VraW4gZm9yIGNyZWF0aW5nIE1haW5Mb29wLmpzLCBvbiB3aGljaCBsb3RzIG9mIHRoaXMgaXMgYmFzZWQuXG5cbnZhciBNYWluTG9vcCA9IGZ1bmN0aW9uIChzdGF0ZSwgZnJhbWVyYXRlKVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlXG4gICAgKi9cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cbiAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICAvLyBUaGUgYW1vdW50IG9mIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gc2ltdWxhdGUgZWFjaCB0aW1lIHVwZGF0ZSgpIHJ1bnMuXG4gICAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyBmcmFtZXJhdGU7XG5cbiAgICB0aGlzLnBoeXNpY3NTdGVwID0gMSAvIGZyYW1lcmF0ZTtcblxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXG4gICAgLy8gU2VlIHRoZSBjb21tZW50cyBpbnNpZGUgYW5pbWF0ZSgpIGZvciBkZXRhaWxzLlxuICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAvLyBUaGUgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyBvZiB0aGUgbGFzdCB0aW1lIHRoZSBtYWluIGxvb3Agd2FzIHJ1bi5cbiAgICAvLyBVc2VkIHRvIGNvbXB1dGUgdGhlIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIGZyYW1lcy5cbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XG5cbiAgICAvLyBBbiBleHBvbmVudGlhbCBtb3ZpbmcgYXZlcmFnZSBvZiB0aGUgZnJhbWVzIHBlciBzZWNvbmQuXG4gICAgdGhpcy5mcHMgPSA2MDtcblxuICAgIC8vIFRoZSB0aW1lc3RhbXAgKGluIG1pbGxpc2Vjb25kcykgb2YgdGhlIGxhc3QgdGltZSB0aGUgYGZwc2AgbW92aW5nXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cbiAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cbiAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XG4gICAgLy8gcmVsZXZhbnQgaW5zaWRlIG9mIGFuaW1hdGUoKSwgYnV0IGEgcmVmZXJlbmNlIGlzIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0XG4gICAgLy8gdGhpcyB2YXJpYWJsZSBpcyBub3QgbWFya2VkIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24gZXZlcnkgdGltZSB0aGUgbWFpblxuICAgIC8vIGxvb3AgcnVucy5cbiAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcblxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxuICAgIC8vIGZyYW1lIHdhcyBleGVjdXRlZCBiZWZvcmUgYW5vdGhlciBmcmFtZSBjYW4gYmUgZXhlY3V0ZWQuIFRoZVxuICAgIC8vIG11bHRpcGxpY2F0aXZlIGludmVyc2UgY2FwcyB0aGUgRlBTICh0aGUgZGVmYXVsdCBvZiB6ZXJvIG1lYW5zIHRoZXJlIGlzXG4gICAgLy8gbm8gY2FwKS5cbiAgICB0aGlzLm1pbkZyYW1lRGVsYXkgPSAwO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcbiAgICAvLyB3YXMgY2FsbGVkIGhhcyBub3QgYmVlbiBmb2xsb3dlZCBieSBhIGNhbGwgdG8gYE1haW5Mb29wLnN0b3AoKWAuIFRoaXMgaXNcbiAgICAvLyBkaWZmZXJlbnQgdGhhbiBgcnVubmluZ2AgYmVjYXVzZSB0aGVyZSBpcyBhIGRlbGF5IG9mIGEgZmV3IG1pbGxpc2Vjb25kc1xuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJydW5uaW5nLlwiIFRoaXMgZGVsYXkgaXMgZHVlIHRvIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGZyYW1lLlxuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gV2hldGhlciB0aGUgc2ltdWxhdGlvbiBoYXMgZmFsbGVuIHRvbyBmYXIgYmVoaW5kIHJlYWwgdGltZS5cbiAgICAvLyBTcGVjaWZpY2FsbHksIGBwYW5pY2Agd2lsbCBiZSBzZXQgdG8gYHRydWVgIGlmIHRvbyBtYW55IHVwZGF0ZXMgb2NjdXIgaW5cbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcbiAgICAvLyBoZWxkIGV4dGVybmFsbHkgc28gdGhhdCB0aGlzIHZhcmlhYmxlIGlzIG5vdCBtYXJrZWQgZm9yIGdhcmJhZ2VcbiAgICAvLyBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW4gbG9vcCBydW5zLlxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcbn07XG5cbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xuXG5NYWluTG9vcC5wcm90b3R5cGUgPSB7XG5cbiAgICBzZXRNYXhGUFM6IGZ1bmN0aW9uIChmcHMpXG4gICAge1xuICAgICAgICBpZiAoZnBzID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TWF4RlBTOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XG4gICAgfSxcblxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBvbGRGcmFtZURlbHRhID0gdGhpcy5mcmFtZURlbHRhO1xuXG4gICAgICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XG4gICAgfSxcblxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcbiAgICB7XG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XG4gICAgICAgIC8vIGBNYWluTG9vcC5zZXRNYXhBbGxvd2VkRlBTKClgKS5cbiAgICAgICAgaWYgKHRpbWVzdGFtcCA8IHRoaXMubGFzdEZyYW1lVGltZU1zICsgdGhpcy5taW5GcmFtZURlbGF5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcmFtZURlbHRhIGlzIHRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuXG4gICAgICAgIC8vIHNpbXVsYXRlZCB5ZXQuIEFkZCB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBmcmFtZS4gV2UgbmVlZCB0byB0cmFjayB0b3RhbFxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcbiAgICAgICAgLy8gbGFzdCBmcmFtZSkgYmVjYXVzZSBub3QgYWxsIGFjdHVhbGx5IGVsYXBzZWQgdGltZSBpcyBndWFyYW50ZWVkIHRvIGJlXG4gICAgICAgIC8vIHNpbXVsYXRlZCBlYWNoIGZyYW1lLiBTZWUgdGhlIGNvbW1lbnRzIGJlbG93IGZvciBkZXRhaWxzLlxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gdGltZXN0YW1wO1xuXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXG5cbiAgICAgICAgLy8gIEhlcmUgd2UnbGwgbmVlZCB0byBydW4gdGhpbmdzIGxpa2UgdHdlZW4udXBkYXRlLCBpbnB1dC51cGRhdGUsIGV0Yy5cbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZXN0aW1hdGUgb2YgdGhlIGZyYW1lIHJhdGUsIGBmcHNgLiBFdmVyeSBzZWNvbmQsIHRoZSBudW1iZXJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXG4gICAgICAgIC8vIG1vdmluZyBhdmVyYWdlIG9mIGFsbCBmcmFtZXMgcGVyIHNlY29uZCwgd2l0aCBhbiBhbHBoYSBvZiAwLjI1LiBUaGlzXG4gICAgICAgIC8vIG1lYW5zIHRoYXQgbW9yZSByZWNlbnQgc2Vjb25kcyBhZmZlY3QgdGhlIGVzdGltYXRlZCBmcmFtZSByYXRlIG1vcmUgdGhhblxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxuICAgICAgICBpZiAodGltZXN0YW1wID4gdGhpcy5sYXN0RnBzVXBkYXRlICsgMTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGNvbnN0YW50cyBpbmxpbmUgaXMgb2theSBoZXJlLlxuICAgICAgICAgICAgdGhpcy5mcHMgPSAwLjI1ICogdGhpcy5mcmFtZXNUaGlzU2Vjb25kICsgMC43NSAqIHRoaXMuZnBzO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kKys7XG5cbiAgICAgICAgdGhpcy5udW1VcGRhdGVTdGVwcyA9IDA7XG5cbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmZyYW1lRGVsdGEgPj0gc3RlcClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy50aW1lc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgICAgICBpZiAoKyt0aGlzLm51bVVwZGF0ZVN0ZXBzID49IDI0MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmljID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZXR0aW5ncy52aXNpYmxlICYmIHRoaXMuc3RhdGUuc3lzLmNvbG9yLmFscGhhICE9PSAwICYmIHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YXRlLCB0aGlzLmZyYW1lRGVsdGEgLyB0aGlzLnRpbWVzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmVuZCh0aGlzLmZwcywgdGhpcy5wYW5pYyk7XG5cbiAgICAgICAgdGhpcy5wYW5pYyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKlxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlKHRpbWVzdGVwKTtcblxuICAgICAgICB2YXIgYztcbiAgICAgICAgdmFyIGNoaWxkO1xuXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUodGltZXN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aW1lc3RlcCk7XG5cbiAgICAgICAgZm9yIChjID0gMDsgYyA8IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHRpbWVzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgKi9cblxuICAgIHN0b3A6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Mb29wO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9NYWluTG9vcC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIERpcnR5ISBNYW5hZ2VyXG4qXG4qIEBjbGFzc1xuKi9cbnZhciBVcGRhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKHN0YXRlKVxue1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcblxuICAgIC8vIHRoaXMuaSA9IDE7XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnByb2Nlc3NlZCA9IDA7XG59O1xuXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZGF0ZU1hbmFnZXI7XG5cblVwZGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgc3RvcDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmksICdVcGRhdGVNYW5hZ2VyLnN0b3AnLCB0aGlzLnByb2Nlc3NlZCk7XG5cbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XG5cbiAgICAgICAgLy8gdGhpcy5pKys7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsZW4gPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaSwgJ1VwZGF0ZU1hbmFnZXIuc3RhcnQnLCBsZW4pO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgQmVjYXVzZSBpdCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkIChhcyBhIGNoaWxkIG9mIGFub3RoZXIgVHJhbnNmb3JtIHRoYXQgd2FzIHVwZGF0ZWQpXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldICYmIHRoaXMubGlzdFtpXS5fZGlydHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbiAodHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXBkYXRlTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbn07XG5cblNldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXQ7XG5cblNldC5wcm90b3R5cGUgPSB7XG5cbiAgICBhZGQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlbGV0ZTogZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjayh0aGlzLnZhbHVlc1tpXSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnZhbHVlcy5sZW5ndGggPSAwO1xuICAgIH0sXG5cbiAgICBjb250YWluczogZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA+IC0xKTtcbiAgICB9LFxuXG4gICAgdW5pb246IGZ1bmN0aW9uIChzZXQpXG4gICAge1xuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHNldC52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdTZXQ7XG4gICAgfSxcblxuICAgIGludGVyc2VjdDogZnVuY3Rpb24gKHNldClcbiAgICB7XG4gICAgICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzZXQuY29udGFpbnModmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3U2V0O1xuICAgIH0sXG5cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiAoc2V0KVxuICAgIHtcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFzZXQuY29udGFpbnModmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3U2V0O1xuICAgIH1cblxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU2V0LnByb3RvdHlwZSwge1xuXG4gICAgc2l6ZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RydWN0cy9TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvcmljaC9Eb2N1bWVudHMvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9waGFzZXIuanMiLCJyZXF1aXJlKCcuL3BvbHlmaWxscycpO1xuXG52YXIgYm9vdCA9IHJlcXVpcmUoJy4vYm9vdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb3Q7XG5cbmdsb2JhbC5QaGFzZXIgPSBib290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcGhhc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9