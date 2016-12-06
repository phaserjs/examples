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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var EventBinding = __webpack_require__(31);

var EventDispatcher = function ()
{
    this.bindings = {};
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

    dispatch: function (event)
    {
        var binding;

        if (Array.isArray(event))
        {
            for (var i = 0; i < event.length; i++)
            {
                binding = this.getBinding(event[i].type);

                if (binding)
                {
                    return binding.dispatch(event[i]);
                }
            }
        }
        else
        {
            binding = this.getBinding(event.type);

            if (binding)
            {
                return binding.dispatch(event);
            }
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
        //  What would it do any differently to deleteAll?
    }

};

module.exports = EventDispatcher;


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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

// var FILE_CONST = require('../const');
var File = __webpack_require__(37);

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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(10);
var GameObjectFactory = __webpack_require__(55);
var GameObjectCreator = __webpack_require__(54);
var Loader = __webpack_require__(56);
var MainLoop = __webpack_require__(57);
var UpdateManager = __webpack_require__(58);

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
/* 16 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(22),

    Event: __webpack_require__(9),
    EventDispatcher: __webpack_require__(10),

    Loader: {
        ImageFile: __webpack_require__(13)
    }

};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(49);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(48);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(16);
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(23);

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(28);
var Config = __webpack_require__(19);
var DebugHeader = __webpack_require__(21);
var CreateRenderer = __webpack_require__(20);
var RequestAnimationFrame = __webpack_require__(30);
var DOMContentLoaded = __webpack_require__(29);
var RandomDataGenerator = __webpack_require__(43);
var StateManager = __webpack_require__(53);
var FactoryContainer = __webpack_require__(3);
var GameObjects = __webpack_require__ (35);

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
/* 23 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '8271a1a0-bb58-11e6-92c7-1bf1ec33cb5b'
};
module.exports = CHECKSUM;

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(7);
var Input = __webpack_require__(26);
var Audio = __webpack_require__(24);
var Video = __webpack_require__(27);
var Fullscreen = __webpack_require__(25);

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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(11);
var EventListener = __webpack_require__(32);

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
            return true;
        }

        this.state = CONST.DISPATCHER_DISPATCHING;

        console.dir(this.active);

        console.log('Dispatching', this.active.length, 'listeners');

        var listener;

        event.reset(this.dispatcher);

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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(33);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//  
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__ (34);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {


var FILE_CONST = __webpack_require__(12);
var Set = __webpack_require__(59);
var XHRSettings = __webpack_require__(4);
var Events = __webpack_require__(42);

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

        this.state.sys.events.dispatch(new Events.LOADER_START_EVENT(this));

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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(38);
var FILE_CONST = __webpack_require__(12);
var XHRLoader = __webpack_require__(40);
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
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(39);

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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(9);

var LoaderStartEvent = function (loader)
{
    Event.call(this);

    this.loader = loader;
};

LoaderStartEvent.prototype = Object.create(Event.prototype);
LoaderStartEvent.prototype.constructor = LoaderStartEvent;

module.exports = LoaderStartEvent;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(41)

};


/***/ },
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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


/***/ },
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(14);
var Systems = __webpack_require__(15);

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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(16);
var State = __webpack_require__(52);
var Settings = __webpack_require__(14);
var Systems = __webpack_require__(15);
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
/* 54 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var BaseLoader = __webpack_require__(36);
var ImageLoader = __webpack_require__(13);

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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(18);

var boot = __webpack_require__(17);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYzYzYTE4MzIxNTllZDhiZWJlMCIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL09TLmpzIiwid2VicGFjazovLy8uLi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2NvbnN0LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TeXN0ZW1zLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi4vdXRpbHMvTk9PUC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvRGVidWdIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NoZWNrc3VtLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9FdmVudEJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ldmVudHMvRXZlbnRCaW5kaW5nLmpzIiwid2VicGFjazovLy8uLi9ldmVudHMvRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vc3JjL2V2ZW50cy9FdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy9zcmMvZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvQmFzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9CYXNlTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9GaWxlLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvR2V0VVJMLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvWEhSTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbWF0aC9yYW5kb20tZGF0YS1nZW5lcmF0b3IvUmFuZG9tRGF0YUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9BcnJheS5pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvRnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL01hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9NYWluTG9vcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9VcGRhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9zdHJ1Y3RzL1NldC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3JpY2gvRG9jdW1lbnRzL3BoYXNlci92My9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3BoYXNlci5qcyIsIndlYnBhY2s6Ly8vLi4vcGhhc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLCtDQ0FBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxHQUFHLHVCQUF1QixPQUFPO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyUUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FDdkRBLFNDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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QVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXJPQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QyxtQ0FBbUMsWUFBWTtBQUMvQyxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBRXhMQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDM0JBLG1CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHFDQUFxQyxjQUFjOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHFDQUFxQyxjQUFjOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUV0S0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNaQTtBQUNBLFdDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRWxDQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLHFCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsc0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esd0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esd0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsYUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxlQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLG9CQ0FBLG1CREFBLENDQUEsRURBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUV0SUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLFVDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBLFdDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0EsbUJDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVaQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxXQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHFCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7O0FBRTVDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FFOURBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFOUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUM1SEEsWUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxvQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFalJBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsZ0JDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGNBQWM7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBRWxIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBLGtCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBRTFCQSx1QkNBQSxt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QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLHlCQUF5Qjs7QUFFbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU1aUJBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSx1QkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRXZDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsdUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUV2Q0EsaUJDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esa0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVoQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIseUNBQXlDO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHlDQUF5QztBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzFQQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7Ozs7Ozs7QUNySEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs4Q0NuTHRDLG1CQ0FBLENEQUEsRUNBQTs7QUFFQSxXREFBLG1CQ0FBLENEQUEsRUNBQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwaGFzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlBoYXNlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQaGFzZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGM2M2ExODMyMTU5ZWQ4YmViZTAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvT1MuanMiLCJ2YXIgT1MgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVza3RvcCAtIElzIHJ1bm5pbmcgb24gYSBkZXNrdG9wP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGRlc2t0b3A6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkFwcCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYXMgYSBXZWJBcHAsIGkuZS4gd2l0aGluIGEgV2ViVmlld1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYkFwcDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaU9TIC0gSXMgcnVubmluZyBvbiBpT1M/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaU9TOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGlPU1ZlcnNpb24gLSBJZiBydW5uaW5nIGluIGlPUyB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaU9TVmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpUGhvbmUgLSBJcyBydW5uaW5nIG9uIGlQaG9uZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpUGhvbmU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQYWQgLSBJcyBydW5uaW5nIG9uIGlQYWQ/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaVBhZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlMgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIENvY29vbkpTP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNvY29vbkpTOiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlNBcHAgLSBJcyB0aGlzIGdhbWUgcnVubmluZyB3aXRoIENvY29vbkpTLkFwcD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjb2Nvb25KU0FwcDogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvcmRvdmEgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEFwYWNoZSBDb3Jkb3ZhP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNvcmRvdmE6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLmpzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG5vZGU6IGZhbHNlLFxuICAgIFxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlV2Via2l0IC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLVdlYmtpdD9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBub2RlV2Via2l0OiBmYWxzZSxcbiAgICBcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWxlY3Ryb24gLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEdpdEh1YiBFbGVjdHJvbj9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBlbGVjdHJvbjogZmFsc2UsXG4gICAgXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVqZWN0YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgRWplY3RhP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGVqZWN0YTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY3Jvc3N3YWxrIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciB0aGUgSW50ZWwgQ3Jvc3N3YWxrIFhESz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBjcm9zc3dhbGs6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFuZHJvaWQgLSBJcyBydW5uaW5nIG9uIGFuZHJvaWQ/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgYW5kcm9pZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lT1MgLSBJcyBydW5uaW5nIG9uIGNocm9tZU9TP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNocm9tZU9TOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsaW51eCAtIElzIHJ1bm5pbmcgb24gbGludXg/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbGludXg6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1hY09TIC0gSXMgcnVubmluZyBvbiBtYWNPUz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtYWNPUzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2luZG93cyAtIElzIHJ1bm5pbmcgb24gd2luZG93cz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3aW5kb3dzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzUGhvbmUgLSBJcyBydW5uaW5nIG9uIGEgV2luZG93cyBQaG9uZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB3aW5kb3dzUGhvbmU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpdGEgLSBJcyBydW5uaW5nIG9uIGEgUGxheVN0YXRpb24gVml0YT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB2aXRhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBraW5kbGUgLSBJcyBydW5uaW5nIG9uIGFuIEFtYXpvbiBLaW5kbGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAga2luZGxlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBpeGVsUmF0aW8gLSBQaXhlbFJhdGlvIG9mIHRoZSBob3N0IGRldmljZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBwaXhlbFJhdGlvOiAxXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgaWYgKC9XaW5kb3dzLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvTWFjIE9TLy50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLm1hY09TID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0xpbnV4Ly50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmxpbnV4ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuYW5kcm9pZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9pUFthb11kfGlQaG9uZS9pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuaU9TID0gdHJ1ZTtcbiAgICAgICAgKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspLyk7XG4gICAgICAgIE9TLmlPU1ZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL0tpbmRsZS8udGVzdCh1YSkgfHwgKC9cXGJLRltBLVpdW0EtWl0rLykudGVzdCh1YSkgfHwgKC9TaWxrLipNb2JpbGUgU2FmYXJpLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5raW5kbGUgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBOT1QgZGV0ZWN0IGVhcmx5IGdlbmVyYXRpb25zIG9mIEtpbmRsZSBGaXJlLCBJIHRoaW5rIHRoZXJlIGlzIG5vIHJlbGlhYmxlIHdheS4uLlxuICAgICAgICAvLyBFLmcuIFwiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgVTsgSW50ZWwgTWFjIE9TIFggMTBfNl8zOyBlbi11czsgU2lsay8xLjEuMC04MCkgQXBwbGVXZWJLaXQvNTMzLjE2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi81LjAgU2FmYXJpLzUzMy4xNiBTaWxrLUFjY2VsZXJhdGVkPXRydWVcIlxuICAgIH1cbiAgICBlbHNlIGlmICgvQ3JPUy8udGVzdCh1YSkpXG4gICAge1xuICAgICAgICBPUy5jaHJvbWVPUyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCgvUGxheXN0YXRpb24gVml0YS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1Mudml0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKC9XaW5kb3dzIFBob25lL2kudGVzdCh1YSkgfHwgKC9JRU1vYmlsZS9pKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIE9TLmFuZHJvaWQgPSBmYWxzZTtcbiAgICAgICAgT1MuaU9TID0gZmFsc2U7XG4gICAgICAgIE9TLm1hY09TID0gZmFsc2U7XG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xuICAgICAgICBPUy53aW5kb3dzUGhvbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzaWxrID0gKC9TaWxrLykudGVzdCh1YSk7XG5cbiAgICBpZiAoT1Mud2luZG93cyB8fCBPUy5tYWNPUyB8fCAoT1MubGludXggJiYgIXNpbGspIHx8IE9TLmNocm9tZU9TKVxuICAgIHtcbiAgICAgICAgT1MuZGVza3RvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gIFdpbmRvd3MgUGhvbmUgLyBUYWJsZSByZXNldFxuICAgIGlmIChPUy53aW5kb3dzUGhvbmUgfHwgKCgvV2luZG93cyBOVC9pLnRlc3QodWEpKSAmJiAoL1RvdWNoL2kudGVzdCh1YSkpKSlcbiAgICB7XG4gICAgICAgIE9TLmRlc2t0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAgV2ViQXBwIG1vZGUgaW4gaU9TXG4gICAgaWYgKG5hdmlnYXRvci5zdGFuZGFsb25lKVxuICAgIHtcbiAgICAgICAgT1Mud2ViQXBwID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICBPUy5jb3Jkb3ZhID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlICE9PSAndW5kZWZpbmVkJykpXG4gICAge1xuICAgICAgICBPUy5ub2RlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKE9TLm5vZGUgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnKVxuICAgIHtcbiAgICAgICAgT1Mubm9kZVdlYmtpdCA9ICEhcHJvY2Vzcy52ZXJzaW9uc1snbm9kZS13ZWJraXQnXTtcbiAgICAgICAgXG4gICAgICAgIE9TLmVsZWN0cm9uID0gISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uO1xuICAgIH1cbiAgICBcbiAgICBpZiAobmF2aWdhdG9yLmlzQ29jb29uSlMpXG4gICAge1xuICAgICAgICBPUy5jb2Nvb25KUyA9IHRydWU7XG5cbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIE9TLmNvY29vbkpTQXBwID0gKHR5cGVvZiBDb2Nvb25KUyAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcilcbiAgICAgICAge1xuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZWplY3RhICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICBPUy5lamVjdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgoL0Nyb3Nzd2Fsay8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgT1MuY3Jvc3N3YWxrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBPUy5pUGhvbmUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2lwaG9uZScpICE9PSAtMTtcbiAgICBPUy5pUGFkID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpcGFkJykgIT09IC0xO1xuXG4gICAgT1MucGl4ZWxSYXRpbyA9IHdpbmRvd1snZGV2aWNlUGl4ZWxSYXRpbyddIHx8IDE7XG5cbiAgICByZXR1cm4gT1M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL09TLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDT05TVCA9IHtcblxuICAgIFZFUlNJT046ICczLjAuMCcsXG5cbiAgICBBVVRPOiAwLFxuICAgIENBTlZBUzogMSxcbiAgICBXRUJHTDogMixcblxuICAgIHN0YXRlOiB7XG5cbiAgICAgICAgUEVORElORzogMCxcbiAgICAgICAgSU5TVEFMTEVEOiAxLFxuXG4gICAgICAgIEJPT1Q6IDAsXG4gICAgICAgIElOSVQ6IDEsXG4gICAgICAgIFBSRUxPQUQ6IDIsXG4gICAgICAgIENSRUFURTogMyxcbiAgICAgICAgVVBEQVRFOiA0LFxuICAgICAgICBSRU5ERVI6IDUsXG4gICAgICAgIFNIVVRET1dOOiA2XG5cbiAgICB9LFxuXG4gICAgYmxlbmRNb2Rlczoge1xuXG4gICAgICAgIE5PUk1BTDogMCxcbiAgICAgICAgQUREOiAxLFxuICAgICAgICBNVUxUSVBMWTogMixcbiAgICAgICAgU0NSRUVOOiAzLFxuICAgICAgICBPVkVSTEFZOiA0LFxuICAgICAgICBEQVJLRU46IDUsXG4gICAgICAgIExJR0hURU46IDYsXG4gICAgICAgIENPTE9SX0RPREdFOiA3LFxuICAgICAgICBDT0xPUl9CVVJOOiA4LFxuICAgICAgICBIQVJEX0xJR0hUOiA5LFxuICAgICAgICBTT0ZUX0xJR0hUOiAxMCxcbiAgICAgICAgRElGRkVSRU5DRTogMTEsXG4gICAgICAgIEVYQ0xVU0lPTjogMTIsXG4gICAgICAgIEhVRTogMTMsXG4gICAgICAgIFNBVFVSQVRJT046IDE0LFxuICAgICAgICBDT0xPUjogMTUsXG4gICAgICAgIExVTUlOT1NJVFk6IDE2XG5cbiAgICB9LFxuXG4gICAgc2NhbGVNb2Rlczoge1xuXG4gICAgICAgIERFRkFVTFQ6IDAsXG4gICAgICAgIExJTkVBUjogMCxcbiAgICAgICAgTkVBUkVTVDogMVxuXG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENPTlNUO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xuXG52YXIgQnJvd3NlciA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhcm9yYSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gQXJvcmEuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgYXJvcmE6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNocm9tZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gQ2hyb21lLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNocm9tZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjaHJvbWVWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBDaHJvbWUgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNocm9tZVZlcnNpb246IDAsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXBpcGhhbnkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEVwaXBoYW55LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGVwaXBoYW55OiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaXJlZm94IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBGaXJlZm94LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGZpcmVmb3g6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gZmlyZWZveFZlcnNpb24gLSBJZiBydW5uaW5nIGluIEZpcmVmb3ggdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGZpcmVmb3hWZXJzaW9uOiAwLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1vYmlsZVNhZmFyaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTW9iaWxlIFNhZmFyaS5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtb2JpbGVTYWZhcmk6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGllIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3Jlci5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpZVZlcnNpb24gLSBJZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci4gQmV5b25kIElFMTAgeW91IHNob3VsZCB1c2UgRGV2aWNlLnRyaWRlbnQgYW5kIERldmljZS50cmlkZW50VmVyc2lvbi5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBpZVZlcnNpb246IDAsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbWlkb3JpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNaWRvcmkuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbWlkb3JpOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvcGVyYSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gT3BlcmEuXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgb3BlcmE6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNhZmFyaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gU2FmYXJpLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHNhZmFyaTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYWZhcmlWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBTYWZhcmkgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHNhZmFyaVZlcnNpb246IDAsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdHJpZGVudCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYSBUcmlkZW50IHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgKElFMTErKVxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRyaWRlbnQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gdHJpZGVudFZlcnNpb24gLSBJZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyIDExIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci4gU2VlIHtAbGluayBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvbXM1Mzc1MDModj12cy44NSkuYXNweH1cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB0cmlkZW50VmVyc2lvbjogMCxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlZGdlIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNaWNyb3NvZnQgRWRnZSBicm93c2VyLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGVkZ2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNpbGsgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIHRoZSBTaWxrIGJyb3dzZXIgKGFzIHVzZWQgb24gdGhlIEFtYXpvbiBLaW5kbGUpXG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgc2lsazogZmFsc2VcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICBpZiAoKC9Bcm9yYS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5hcm9yYSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9FZGdlXFwvXFxkKy8udGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmVkZ2UgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL0Nocm9tZVxcLyhcXGQrKS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXG4gICAge1xuICAgICAgICBCcm93c2VyLmNocm9tZSA9IHRydWU7XG4gICAgICAgIEJyb3dzZXIuY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL0VwaXBoYW55LykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLmVwaXBoYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9GaXJlZm94XFxEKyhcXGQrKS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5maXJlZm94ID0gdHJ1ZTtcbiAgICAgICAgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL0FwcGxlV2ViS2l0LykudGVzdCh1YSkgJiYgT1MuaU9TKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5tb2JpbGVTYWZhcmkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL01TSUUgKFxcZCtcXC5cXGQrKTsvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuaWUgPSB0cnVlO1xuICAgICAgICBCcm93c2VyLmllVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL01pZG9yaS8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5taWRvcmkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL09wZXJhLykudGVzdCh1YSkpXG4gICAge1xuICAgICAgICBCcm93c2VyLm9wZXJhID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKC9TYWZhcmkvKS50ZXN0KHVhKSAmJiAhT1Mud2luZG93c1Bob25lKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5zYWZhcmkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgoL1RyaWRlbnRcXC8oXFxkK1xcLlxcZCspKC4qKXJ2OihcXGQrXFwuXFxkKykvKS50ZXN0KHVhKSlcbiAgICB7XG4gICAgICAgIEJyb3dzZXIuaWUgPSB0cnVlO1xuICAgICAgICBCcm93c2VyLnRyaWRlbnQgPSB0cnVlO1xuICAgICAgICBCcm93c2VyLnRyaWRlbnRWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XG4gICAgICAgIEJyb3dzZXIuaWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQzLCAxMCk7XG4gICAgfVxuXG4gICAgLy8gIFNpbGsgZ2V0cyBpdHMgb3duIGlmIGNsYXVzZSBiZWNhdXNlIGl0cyB1YSBhbHNvIGNvbnRhaW5zICdTYWZhcmknXG4gICAgaWYgKCgvU2lsay8pLnRlc3QodWEpKVxuICAgIHtcbiAgICAgICAgQnJvd3Nlci5zaWxrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJvd3Nlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvQnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgZ2xvYmFsIGxldmVsIGNvbnRhaW5lciBvZiBGYWN0b3J5IGluc3RhbmNlcy5cbiogRmFjdG9yaWVzIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCB0aGlzIGNvbnRhaW5lciAod2hlbiByZXF1aXJlZClcbipcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiovXG5cbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIEZhY3RvcnlDb250YWluZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnNvbGUubG9nKCdGYWN0b3J5Q29udGFpbmVyIGlzIGFsaXZlJyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGZhY3RvcnkpXG4gICAge1xuICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkuS0VZKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgcmVnaXN0ZXJlZCcsIGZhY3RvcnkuS0VZKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZShmYWN0b3J5LktFWSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcnLCBmYWN0b3J5LktFWSk7XG5cbiAgICAgICAgZmFjdG9yaWVzW2ZhY3RvcnkuS0VZXSA9IHtcbiAgICAgICAgICAgIGFkZDogZmFjdG9yeS5hZGQsXG4gICAgICAgICAgICBtYWtlOiBmYWN0b3J5Lm1ha2VcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWN0b3JpZXNba2V5XTtcbiAgICB9O1xuXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24gKGRlc3QsIGlzRmFjdG9yeSlcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGZhY3RvcnkgaW4gZmFjdG9yaWVzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkaW5nJywgZmFjdG9yeSk7XG5cbiAgICAgICAgICAgICAgICBkZXN0W2ZhY3RvcnldID0gKGlzRmFjdG9yeSkgPyBmYWN0b3JpZXNbZmFjdG9yeV0uYWRkIDogZmFjdG9yaWVzW2ZhY3RvcnldLm1ha2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY3RvcnlDb250YWluZXIoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIENyZWF0ZXMgYW4gWEhSU2V0dGluZ3MgT2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcblxudmFyIFhIUlNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3BvbnNlVHlwZSwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkLCB0aW1lb3V0KVxue1xuICAgIGlmIChyZXNwb25zZVR5cGUgPT09IHVuZGVmaW5lZCkgeyByZXNwb25zZVR5cGUgPSAnJzsgfVxuICAgIGlmIChhc3luYyA9PT0gdW5kZWZpbmVkKSB7IGFzeW5jID0gdHJ1ZTsgfVxuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHsgdXNlciA9ICcnOyB9XG4gICAgaWYgKHBhc3N3b3JkID09PSB1bmRlZmluZWQpIHsgcGFzc3dvcmQgPSAnJzsgfVxuICAgIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHsgdGltZW91dCA9IDA7IH1cblxuICAgIC8vIEJlZm9yZSBzZW5kaW5nIGEgcmVxdWVzdCwgc2V0IHRoZSB4aHIucmVzcG9uc2VUeXBlIHRvIFwidGV4dFwiLCBcbiAgICAvLyBcImFycmF5YnVmZmVyXCIsIFwiYmxvYlwiLCBvciBcImRvY3VtZW50XCIsIGRlcGVuZGluZyBvbiB5b3VyIGRhdGEgbmVlZHMuIFxuICAgIC8vIE5vdGUsIHNldHRpbmcgeGhyLnJlc3BvbnNlVHlwZSA9ICcnIChvciBvbWl0dGluZykgd2lsbCBkZWZhdWx0IHRoZSByZXNwb25zZSB0byBcInRleHRcIi5cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLy8gIElnbm9yZWQgYnkgdGhlIExvYWRlciwgb25seSB1c2VkIGJ5IEZpbGUuXG4gICAgICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlLFxuXG4gICAgICAgIGFzeW5jOiBhc3luYyxcblxuICAgICAgICAvLyAgY3JlZGVudGlhbHNcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuXG4gICAgICAgIC8vICB0aW1lb3V0IGluIG1zICgwID0gbm8gdGltZW91dClcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcblxuICAgICAgICAvLyAgc2V0UmVxdWVzdEhlYWRlclxuICAgICAgICBoZWFkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyVmFsdWU6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyAgb3ZlcnJpZGVNaW1lVHlwZVxuICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiB1bmRlZmluZWRcblxuICAgIH07XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUlNldHRpbmdzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICBTb3VyY2Ugb2JqZWN0XG4vLyAgVGhlIGtleSBhcyBhIHN0cmluZywgb3IgYW4gYXJyYXkgb2Yga2V5cywgaS5lLiAnYmFubmVyJywgb3IgJ2Jhbm5lci5oaWRlQmFubmVyJ1xuLy8gIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RcblxudmFyIEdldE9iamVjdFZhbHVlID0gZnVuY3Rpb24gKHNvdXJjZSwga2V5LCBkZWZhdWx0VmFsdWUpXG57XG4gICAgaWYgKGtleS5pbmRleE9mKCcuJykpXG4gICAge1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IHNvdXJjZTtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgIC8vICBVc2UgZm9yIGxvb3AgaGVyZSBzbyB3ZSBjYW4gYnJlYWsgZWFybHlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocGFyZW50Lmhhc093blByb3BlcnR5KGtleXNbaV0pKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICBZZXMgaXQgaGFzIGEga2V5IHByb3BlcnR5LCBsZXQncyBjYXJyeSBvbiBkb3duXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJlbnRba2V5c1tpXV07XG5cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnRba2V5c1tpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHJldHVybiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgPyBzb3VyY2Vba2V5XSA6IGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0T2JqZWN0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XG5cbnZhciBGZWF0dXJlcyA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjYW52YXMgLSBJcyBjYW52YXMgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNhbnZhczogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7P2Jvb2xlYW59IGNhbnZhc0JpdEJsdFNoaWZ0IC0gVHJ1ZSBpZiBjYW52YXMgc3VwcG9ydHMgYSAnY29weScgYml0Ymx0IG9udG8gaXRzZWxmIHdoZW4gdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gcmVnaW9ucyBvdmVybGFwLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNhbnZhc0JpdEJsdFNoaWZ0OiBudWxsLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkdMIC0gSXMgd2ViR0wgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYkdMOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaWxlIC0gSXMgZmlsZSBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZmlsZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlsZVN5c3RlbSAtIElzIGZpbGVTeXN0ZW0gYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGZpbGVTeXN0ZW06IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvY2FsU3RvcmFnZSAtIElzIGxvY2FsU3RvcmFnZSBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbG9jYWxTdG9yYWdlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3b3JrZXIgLSBJcyB3b3JrZXIgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdvcmtlcjogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcG9pbnRlckxvY2sgLSBJcyBQb2ludGVyIExvY2sgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHBvaW50ZXJMb2NrOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB2aWJyYXRpb24gLSBEb2VzIHRoZSBkZXZpY2Ugc3VwcG9ydCB0aGUgVmlicmF0aW9uIEFQST9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB2aWJyYXRpb246IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGdldFVzZXJNZWRpYSAtIERvZXMgdGhlIGRldmljZSBzdXBwb3J0IHRoZSBnZXRVc2VyTWVkaWEgQVBJP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGdldFVzZXJNZWRpYTogdHJ1ZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsaXR0bGVFbmRpYW4gLSBJcyB0aGUgZGV2aWNlIGJpZyBvciBsaXR0bGUgZW5kaWFuPyAob25seSBkZXRlY3RlZCBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBUeXBlZEFycmF5cylcbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBsaXR0bGVFbmRpYW46IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHN1cHBvcnQzMmJpdCAtIERvZXMgdGhlIGRldmljZSBjb250ZXh0IHN1cHBvcnQgMzJiaXQgcGl4ZWwgbWFuaXB1bGF0aW9uIHVzaW5nIGFycmF5IGJ1ZmZlciB2aWV3cz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBzdXBwb3J0MzJiaXQ6IGZhbHNlXG5cbn07XG5cbi8qKlxuKiBDaGVjayBMaXR0bGUgb3IgQmlnIEVuZGlhbiBzeXN0ZW0uXG4qXG4qIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxuKi9cbmZ1bmN0aW9uIGNoZWNrSXNMaXR0bGVFbmRpYW4gKClcbntcbiAgICB2YXIgYSA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcbiAgICB2YXIgYiA9IG5ldyBVaW50OEFycmF5KGEpO1xuICAgIHZhciBjID0gbmV3IFVpbnQzMkFycmF5KGEpO1xuXG4gICAgYlswXSA9IDB4YTE7XG4gICAgYlsxXSA9IDB4YjI7XG4gICAgYlsyXSA9IDB4YzM7XG4gICAgYlszXSA9IDB4ZDQ7XG5cbiAgICBpZiAoY1swXSA9PT0gMHhkNGMzYjJhMSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjWzBdID09PSAweGExYjJjM2Q0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyAgQ291bGQgbm90IGRldGVybWluZSBlbmRpYW5uZXNzXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlcy5pbml0Jyk7XG5cbiAgICBGZWF0dXJlcy5jYW52YXMgPSAhIXdpbmRvd1snQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJ10gfHwgT1MuY29jb29uSlM7XG5cbiAgICB0cnlcbiAgICB7XG4gICAgICAgIEZlYXR1cmVzLmxvY2FsU3RvcmFnZSA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW07XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcilcbiAgICB7XG4gICAgICAgIEZlYXR1cmVzLmxvY2FsU3RvcmFnZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEZlYXR1cmVzLmZpbGUgPSAhIXdpbmRvd1snRmlsZSddICYmICEhd2luZG93WydGaWxlUmVhZGVyJ10gJiYgISF3aW5kb3dbJ0ZpbGVMaXN0J10gJiYgISF3aW5kb3dbJ0Jsb2InXTtcbiAgICBGZWF0dXJlcy5maWxlU3lzdGVtID0gISF3aW5kb3dbJ3JlcXVlc3RGaWxlU3lzdGVtJ107XG5cbiAgICB2YXIgaXNVaW50OCA9IGZhbHNlO1xuXG4gICAgdmFyIHRlc3RXZWJHTCA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAod2luZG93WydXZWJHTFJlbmRlcmluZ0NvbnRleHQnXSlcbiAgICAgICAge1xuICAgICAgICAgICAgdHJ5XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IENhbnZhc1Bvb2wuY3JlYXRlV2ViR0wodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoT1MuY29jb29uSlMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuc2NyZWVuY2FudmFzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuICAgICAgICAgICAgICAgIHZhciBjYW52YXMyRCA9IENhbnZhc1Bvb2wuY3JlYXRlMkQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4MkQgPSBjYW52YXMyRC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gIENhbid0IGJlIGRvbmUgb24gYSB3ZWJnbCBjb250ZXh0XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gY3R4MkQuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogVGVzdCB0byBzZWUgaWYgSW1hZ2VEYXRhIHVzZXMgQ2FudmFzUGl4ZWxBcnJheSBvciBVaW50OENsYW1wZWRBcnJheS5cbiAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgKiBAYXV0aG9yIE1hdHQgRGVzTGF1cmllcnMgKEBtYXR0ZGVzbClcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlzVWludDggPSBpbWFnZS5kYXRhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXk7XG5cbiAgICAgICAgICAgICAgICBDYW52YXNQb29sLnJlbW92ZShjYW52YXMpO1xuICAgICAgICAgICAgICAgIENhbnZhc1Bvb2wucmVtb3ZlKGNhbnZhczJEKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoY3R4ICE9PSBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBGZWF0dXJlcy53ZWJHTCA9IHRlc3RXZWJHTCgpO1xuXG4gICAgRmVhdHVyZXMud29ya2VyID0gISF3aW5kb3dbJ1dvcmtlciddO1xuXG4gICAgRmVhdHVyZXMucG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcblxuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm9HZXRVc2VyTWVkaWE7XG5cbiAgICB3aW5kb3cuVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5tb3pVUkwgfHwgd2luZG93Lm1zVVJMO1xuXG4gICAgRmVhdHVyZXMuZ2V0VXNlck1lZGlhID0gRmVhdHVyZXMuZ2V0VXNlck1lZGlhICYmICEhbmF2aWdhdG9yLmdldFVzZXJNZWRpYSAmJiAhIXdpbmRvdy5VUkw7XG5cbiAgICAvLyBPbGRlciB2ZXJzaW9ucyBvZiBmaXJlZm94ICg8IDIxKSBhcHBhcmVudGx5IGNsYWltIHN1cHBvcnQgYnV0IHVzZXIgbWVkaWEgZG9lcyBub3QgYWN0dWFsbHkgd29ya1xuICAgIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA8IDIxKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMuZ2V0VXNlck1lZGlhID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRXhjbHVkZXMgaU9TIHZlcnNpb25zIGFzIHRoZXkgZ2VuZXJhbGx5IHdyYXAgVUlXZWJWaWV3IChlZy4gU2FmYXJpIFdlYktpdCkgYW5kIGl0XG4gICAgLy8gaXMgc2FmZXIgdG8gbm90IHRyeSBhbmQgdXNlIHRoZSBmYXN0IGNvcHktb3ZlciBtZXRob2QuXG4gICAgaWYgKCFPUy5pT1MgJiYgKEJyb3dzZXIuaWUgfHwgQnJvd3Nlci5maXJlZm94IHx8IEJyb3dzZXIuY2hyb21lKSlcbiAgICB7XG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBLbm93biBub3QgdG8gd29ya1xuICAgIGlmIChCcm93c2VyLnNhZmFyaSB8fCBCcm93c2VyLm1vYmlsZVNhZmFyaSlcbiAgICB7XG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmF2aWdhdG9yLnZpYnJhdGUgPSBuYXZpZ2F0b3IudmlicmF0ZSB8fCBuYXZpZ2F0b3Iud2Via2l0VmlicmF0ZSB8fCBuYXZpZ2F0b3IubW96VmlicmF0ZSB8fCBuYXZpZ2F0b3IubXNWaWJyYXRlO1xuXG4gICAgaWYgKG5hdmlnYXRvci52aWJyYXRlKVxuICAgIHtcbiAgICAgICAgRmVhdHVyZXMudmlicmF0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIEZlYXR1cmVzLmxpdHRsZUVuZGlhbiA9IGNoZWNrSXNMaXR0bGVFbmRpYW4oKTtcbiAgICB9XG5cbiAgICBGZWF0dXJlcy5zdXBwb3J0MzJiaXQgPSAoXG4gICAgICAgIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgRmVhdHVyZXMubGl0dGxlRW5kaWFuICE9PSBudWxsICYmXG4gICAgICAgIGlzVWludDhcbiAgICApO1xuXG4gICAgcmV0dXJuIEZlYXR1cmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GZWF0dXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBwb29sIGludG8gd2hpY2ggdGhlIGNhbnZhcyBlbGVtZW50cyBhcmUgcGxhY2VkLlxuICpcbiAqIEBwcm9wZXJ0eSBwb29sXG4gKiBAdHlwZSBBcnJheVxuICovXG52YXIgcG9vbCA9IFtdO1xuXG4vLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxuLy8gIGJlZm9yZSBhIFBoYXNlci5HYW1lIGluc3RhbmNlIGhhcyBldmVuIGJlZW4gY3JlYXRlZC5cbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBvbiB0aGUgc2FtZSBwYWdlXG4vLyAgY2FuIHNoYXJlIHRoZSBvbmUgc2luZ2xlIHBvb2xcblxuLyoqXG4qIFRoZSBDYW52YXNQb29sIGlzIGEgZ2xvYmFsIHN0YXRpYyBvYmplY3QsIHRoYXQgYWxsb3dzIFBoYXNlciB0byByZWN5Y2xlIGFuZCBwb29sIENhbnZhcyBET00gZWxlbWVudHMuXG4qXG4qIEBjbGFzcyBQaGFzZXIuQ2FudmFzUG9vbFxuKiBAc3RhdGljXG4qL1xudmFyIENhbnZhc1Bvb2wgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBDYW52YXMgRE9NIGVsZW1lbnQsIG9yIHB1bGxzIG9uZSBmcm9tIHRoZSBwb29sIGlmIGZyZWUuXG4gICAgKiBcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuY3JlYXRlXG4gICAgKiBAc3RhdGljXG4gICAgKiBAcGFyYW0ge2FueX0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IFRoZSBjYW52YXMgZWxlbWVudC5cbiAgICAqL1xuICAgIHZhciBjcmVhdGUgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCB0eXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB1bmRlZmluZWQpIHsgd2lkdGggPSAxOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgeyBoZWlnaHQgPSAxOyB9XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxuXG4gICAgICAgIHZhciBjYW52YXM7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBmaXJzdCh0eXBlKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5jcmVhdGUgbmV3Jyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHBvb2wucHVzaChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIGV4aXN0aW5nJyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgICAgIGNhbnZhcyA9IGNvbnRhaW5lci5jYW52YXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZTJEID0gZnVuY3Rpb24gKHBhcmVudCwgd2lkdGgsIGhlaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5DQU5WQVMpO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlV2ViR0wgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULldFQkdMKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBmaXJzdCBmcmVlIGNhbnZhcyBpbmRleCBmcm9tIHRoZSBwb29sLlxuICAgICogXG4gICAgKiBAc3RhdGljXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZpcnN0XG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgKi9cbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxuXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5wYXJlbnQgJiYgY29udGFpbmVyLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogTG9va3MgdXAgYSBjYW52YXMgYmFzZWQgb24gaXRzIHBhcmVudCwgYW5kIGlmIGZvdW5kIHB1dHMgaXQgYmFjayBpbiB0aGUgcG9vbCwgZnJlZWluZyBpdCB1cCBmb3IgcmUtdXNlLlxuICAgICogVGhlIGNhbnZhcyBoYXMgaXRzIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHRvIDEsIGFuZCBpdHMgcGFyZW50IGF0dHJpYnV0ZSBudWxsZWQuXG4gICAgKiBcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlXG4gICAgKiBAcGFyYW0ge2FueXxIVE1MQ2FudmFzRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXG4gICAgKi9cbiAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKHBhcmVudClcbiAgICB7XG4gICAgICAgIC8vICBDaGVjayB0byBzZWUgaWYgdGhlIHBhcmVudCBpcyBhIGNhbnZhcyBvYmplY3RcbiAgICAgICAgdmFyIGlzQ2FudmFzID0gcGFyZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoaXNDYW52YXMgJiYgY29udGFpbmVyLmNhbnZhcyA9PT0gcGFyZW50KSB8fCAoIWlzQ2FudmFzICYmIGNvbnRhaW5lci5wYXJlbnQgPT09IHBhcmVudCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wucmVtb3ZlIGZvdW5kIGFuZCByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy5oZWlnaHQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdXNlZCBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXG4gICAgKiBcbiAgICAqIEBzdGF0aWNcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0VG90YWxcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpbi11c2UgKHBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXG4gICAgKi9cbiAgICB2YXIgdG90YWwgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdmFyIGMgPSAwO1xuXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiBmcmVlIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqIFxuICAgICogQHN0YXRpY1xuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5nZXRGcmVlXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgZnJlZSAodW4tcGFyZW50ZWQpIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cbiAgICAqL1xuICAgIHZhciBmcmVlID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiBwb29sLmxlbmd0aCAtIHRvdGFsKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgICAgICBjcmVhdGUyRDogY3JlYXRlMkQsXG4gICAgICAgIGNyZWF0ZVdlYkdMOiBjcmVhdGVXZWJHTCxcbiAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgICBmcmVlOiBmcmVlLFxuICAgICAgICBwb29sOiBwb29sXG4gICAgfTtcbn07XG5cbi8vICBJZiB3ZSBleHBvcnQgdGhlIGNhbGxlZCBmdW5jdGlvbiBoZXJlLCBpdCdsbCBvbmx5IGJlIGludm9rZWQgb25jZSAobm90IGV2ZXJ5IHRpbWUgaXQncyByZXF1aXJlZCkuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1Bvb2woKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9DYW52YXNQb29sLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RvbS9DYW52YXNQb29sLmpzIiwidmFyIEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpXG57XG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIHRoaXMudGFyZ2V0O1xuXG4gICAgdGhpcy5fcHJvcGFnYXRlID0gdHJ1ZTtcbn07XG5cbkV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50O1xuXG5FdmVudC5wcm90b3R5cGUgPSB7XG5cbiAgICByZXNldDogZnVuY3Rpb24gKHRhcmdldClcbiAgICB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZSA9IGZhbHNlO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2V2ZW50cy9FdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRCaW5kaW5nID0gcmVxdWlyZSgnLi9FdmVudEJpbmRpbmcnKTtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xufTtcblxuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RGlzcGF0Y2hlcjtcblxuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSA9IHtcblxuICAgIGdldEJpbmRpbmc6IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuYmluZGluZ3MuaGFzT3duUHJvcGVydHkodHlwZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3R5cGVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZUJpbmRpbmc6IGZ1bmN0aW9uICh0eXBlKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldEJpbmRpbmcodHlwZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbdHlwZV0gPSBuZXcgRXZlbnRCaW5kaW5nKHRoaXMsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbdHlwZV07XG4gICAgfSxcblxuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB1bmRlZmluZWQpIHsgcHJpb3JpdHkgPSAwOyB9XG5cbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodHlwZSk7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcuYWRkKGxpc3RlbmVyLCBwcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG9uY2U6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgcHJpb3JpdHkpXG4gICAge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgeyBwcmlvcml0eSA9IDA7IH1cblxuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh0eXBlKTtcblxuICAgICAgICBpZiAoYmluZGluZylcbiAgICAgICAge1xuICAgICAgICAgICAgYmluZGluZy5hZGQobGlzdGVuZXIsIHByaW9yaXR5LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcilcbiAgICB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy5oYXMobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRvdGFsOiBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy50b3RhbCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vICBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgIC8vICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBsaXN0ZW5lciByZWdpc3RlcmVkIHdpdGggdGhlIEV2ZW50RGlzcGF0Y2hlciwgYSBjYWxsIHRvIHRoaXMgbWV0aG9kIGhhcyBubyBlZmZlY3QuXG4gICAgb2ZmOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpXG4gICAge1xuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcblxuICAgICAgICBpZiAoYmluZGluZylcbiAgICAgICAge1xuICAgICAgICAgICAgYmluZGluZy5yZW1vdmUobGlzdGVuZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoZXZlbnQpXG4gICAge1xuICAgICAgICB2YXIgYmluZGluZztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyhldmVudFtpXS50eXBlKTtcblxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuZGlzcGF0Y2goZXZlbnRbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcoZXZlbnQudHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmRpc3BhdGNoKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyAgUmVtb3ZlcyBhbGwgbGlzdGVuZXJzLCBidXQgcmV0YWlucyB0aGUgZXZlbnQgdHlwZSBlbnRyaWVzXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAodHlwZSlcbiAgICB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gdGhpcy5nZXRCaW5kaW5nKHR5cGUpO1xuXG4gICAgICAgIGlmIChiaW5kaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRlbGV0ZTogZnVuY3Rpb24gKHR5cGUpXG4gICAge1xuICAgICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0eXBlKTtcblxuICAgICAgICBpZiAoYmluZGluZylcbiAgICAgICAge1xuICAgICAgICAgICAgYmluZGluZy5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW3R5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRlbGV0ZUFsbDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGJpbmRpbmcgaW4gdGhpcy5iaW5kaW5ncylcbiAgICAgICAge1xuICAgICAgICAgICAgYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAgV2hhdCB3b3VsZCBpdCBkbyBhbnkgZGlmZmVyZW50bHkgdG8gZGVsZXRlQWxsP1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudERpc3BhdGNoZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwidmFyIEVWRU5UX0NPTlNUID0ge1xuXG4gICAgRElTUEFUQ0hFUl9JRExFOiAwLFxuICAgIERJU1BBVENIRVJfRElTUEFUQ0hJTkc6IDEsXG4gICAgRElTUEFUQ0hFUl9SRU1PVklORzogMixcbiAgICBESVNQQVRDSEVSX0RFU1RST1lFRDogMyxcblxuICAgIExJU1RFTkVSX1BFTkRJTkc6IDQsXG4gICAgTElTVEVORVJfQUNUSVZFOiA1LFxuICAgIExJU1RFTkVSX1JFTU9WSU5HOiA2XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVZFTlRfQ09OU1Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBGSUxFX0NPTlNUID0ge1xuXG4gICAgUEVORElORzogMCwgICAgICAvLyBmaWxlIGlzIGluIHRoZSBsb2FkIHF1ZXVlIGJ1dCBub3QgeWV0IHN0YXJ0ZWRcbiAgICBMT0FESU5HOiAxLCAgICAgIC8vIGZpbGUgaGFzIGJlZW4gc3RhcnRlZCB0byBsb2FkIGJ5IHRoZSBsb2FkZXIgKG9uTG9hZCBjYWxsZWQpXG4gICAgTE9BREVEOiAyLCAgICAgICAvLyBmaWxlIGhhcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5LCBhd2FpdGluZyBwcm9jZXNzaW5nXG4gICAgRkFJTEVEOiAzLCAgICAgICAvLyBmaWxlIGZhaWxlZCB0byBsb2FkXG4gICAgUFJPQ0VTU0lORzogNCwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxuICAgIENPTVBMRVRFOiA1LCAgICAgLy8gZmlsZSBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZ1xuICAgIERFU1RST1lFRDogNiAgICAgLy8gZmlsZSBoYXMgYmVlbiBkZXN0cm95ZWRcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGSUxFX0NPTlNUO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB2YXIgRklMRV9DT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgRmlsZSA9IHJlcXVpcmUoJy4uL0ZpbGUnKTtcblxuLy8gIERpZmZlcmVudCBpbWFnZXMgYmFzZWQgb24gZGV2aWNlLXBpeGVsIHJhdGlvXG4vLyAgQW5kIG1heWJlIG9uIHNjcmVlbiByZXNvbHV0aW9uIGJyZWFrcG9pbnRzXG5cbi8vICAyIG9wdGlvbnMgLSBjYW4gZWl0aGVyIHJldHVybiB0aGUgRmlsZSBvYmplY3QsIHNvIHRoZXkgY2FuIGxpc3RlbiB0byBpdCBzcGVjaWZpY2FsbHlcbi8vICBPciBjYW4gcmV0dXJuIHRoZSBMb2FkZXIsIHNvIHRoZXkgY2FuIGNoYWluIGNhbGxzP1xuXG52YXIgSW1hZ2VGaWxlID0gZnVuY3Rpb24gKGtleSwgdXJsLCBwYXRoKVxue1xuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHsgcGF0aCA9ICcnOyB9XG5cbiAgICBpZiAoIWtleSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUud2FybignTG9hZGVyOiBZb3UgdHJpZWQgdG8gbG9hZCBhbiBJbWFnZSwgYnV0IG5vIGtleSB3YXMgZ2l2ZW4nKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF1cmwpXG4gICAge1xuICAgICAgICB1cmwgPSBwYXRoICsga2V5ICsgJy5wbmcnO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB1cmwgPSBwYXRoLmNvbmNhdCh1cmwpO1xuICAgIH1cblxuICAgIHZhciBmaWxlID0gbmV3IEZpbGUoJ2ltYWdlJywga2V5LCB1cmwsICdhcnJheWJ1ZmZlcicpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlRmlsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgR2V0T2JqZWN0VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9HZXRPYmplY3RWYWx1ZScpO1xuXG52YXIgU2V0dGluZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgICBjb25maWcgPSB7IGtleTogY29uZmlnIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgICAgLy8gIFBhc3MgdGhlICdoYXNPd25Qcm9wZXJ0eScgY2hlY2tzXG4gICAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTsgLy8gIERvIHdlIGFjdHVhbGx5IG5lZWQgdGhpcyByZWZlcmVuY2U/IFRoaXMgY291bGQganVzdCBiZSBhIHByb3BlcnR5IGJ1Y2tldFxuXG4gICAgdGhpcy5zdGF0dXMgPSBDT05TVC5zdGF0ZS5QRU5ESU5HO1xuXG4gICAgLy8gIFdoaWNoIHBhcnQgb2YgdGhpcyBTdGF0ZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkP1xuICAgIC8vICBwcmVsb2FkLCBjcmVhdGUsIHVwZGF0ZSwgc2h1dGRvd24sIGV0Y1xuICAgIHRoaXMub3AgPSBDT05TVC5zdGF0ZS5CT09UO1xuXG4gICAgdGhpcy5rZXkgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdrZXknLCAnJyk7XG4gICAgdGhpcy5hY3RpdmUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdhY3RpdmUnLCBmYWxzZSk7XG4gICAgdGhpcy52aXNpYmxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmlzaWJsZScsIHRydWUpO1xuICAgIHRoaXMuc2NhbGVNb2RlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2NhbGVNb2RlJywgQ09OU1Quc2NhbGVNb2Rlcy5ERUZBVUxUKTtcbiAgICB0aGlzLmZwcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZwcycsIDYwKTtcbiAgICB0aGlzLnggPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd4JywgMCk7XG4gICAgdGhpcy55ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAneScsIDApO1xuXG4gICAgLy8gIC0xIG1lYW5zIHRoZSBTdGF0ZSBNYW5hZ2VyIHdpbGwgc2V0IGl0IHRvIGJlIHRoZSBHYW1lIGRpbWVuc2lvbnNcbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAtMSk7XG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCAtMSk7XG59O1xuXG4vLyAgVW5sZXNzIHdlIGFkZCBzb21lIGFjdHVhbCBmdW5jdGlvbnMgaW4gaGVyZSwgd2UnbGwgbWFrZSB0aGlzIGp1c3QgcmV0dXJuIGFuIE9iamVjdCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlXG5TZXR0aW5ncy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXR0aW5ncztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1NldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TZXR0aW5ncy5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBFdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJyk7XG52YXIgR2FtZU9iamVjdEZhY3RvcnkgPSByZXF1aXJlKCcuL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnknKTtcbnZhciBHYW1lT2JqZWN0Q3JlYXRvciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvcicpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9Mb2FkZXInKTtcbnZhciBNYWluTG9vcCA9IHJlcXVpcmUoJy4vc3lzdGVtcy9NYWluTG9vcCcpO1xudmFyIFVwZGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuL3N5c3RlbXMvVXBkYXRlTWFuYWdlcicpO1xuXG52YXIgU3lzdGVtcyA9IGZ1bmN0aW9uIChzdGF0ZSwgY29uZmlnKVxue1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5ldmVudHM7XG5cbiAgICAvLyAgU3RhdGUgc3BlY2lmaWMgbWFuYWdlcnMgKEZhY3RvcnksIFR3ZWVucywgTG9hZGVyLCBQaHlzaWNzLCBldGMpXG4gICAgdGhpcy5hZGQ7XG4gICAgdGhpcy5tYWtlO1xuICAgIHRoaXMuaW5wdXQ7XG4gICAgdGhpcy5sb2FkO1xuICAgIHRoaXMudHdlZW5zO1xuICAgIHRoaXMubWFpbmxvb3A7XG4gICAgdGhpcy51cGRhdGVzO1xuXG4gICAgLy8gIFN0YXRlIHNwZWNpZmljIHByb3BlcnRpZXMgKHRyYW5zZm9ybSwgZGF0YSwgY2hpbGRyZW4sIGV0YylcbiAgICB0aGlzLmNhbWVyYTtcbiAgICB0aGlzLmNoaWxkcmVuO1xuICAgIHRoaXMuY29sb3I7XG4gICAgdGhpcy5kYXRhO1xuICAgIHRoaXMuZmJvO1xuICAgIHRoaXMudGltZTtcbiAgICB0aGlzLnRyYW5zZm9ybTtcbn07XG5cblN5c3RlbXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtcztcblxuU3lzdGVtcy5wcm90b3R5cGUgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlLlN5c3RlbXMuaW5pdCcpO1xuXG4gICAgICAgIC8vICBBbGwgb2YgdGhlIHN5c3RlbXMgY2FuIHVzZSB0aGUgU3RhdGUgbGV2ZWwgRXZlbnREaXNwYXRjaGVyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcbiAgICAgICAgLy8gIEFsbCB0aGVzZSB0byBiZSBzZXQgYnkgYSBTdGF0ZSBDb25maWcgcGFja2FnZVxuXG4gICAgICAgIHRoaXMuYWRkID0gbmV3IEdhbWVPYmplY3RGYWN0b3J5KHRoaXMuc3RhdGUpO1xuICAgICAgICAvLyB0aGlzLm1ha2UgPSBHYW1lT2JqZWN0Q3JlYXRvcih0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5tYWlubG9vcCA9IG5ldyBNYWluTG9vcCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnNldHRpbmdzLmZwcyk7XG4gICAgICAgIHRoaXMudXBkYXRlcyA9IG5ldyBVcGRhdGVNYW5hZ2VyKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLmxvYWQgPSBuZXcgTG9hZGVyKHRoaXMuc3RhdGUpO1xuXG4gICAgICAgIC8vIHRoaXMudHdlZW5zID0gbmV3IFBoYXNlci5Ud2Vlbk1hbmFnZXIodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMuaW5wdXQgPSBuZXcgUGhhc2VyLlN0YXRlLklucHV0KHRoaXMuc3RhdGUpO1xuICAgICAgICAvLyB0aGlzLnBoeXNpY3MgPSBuZXcgUGhhc2VyLlBoeXNpY3MuQXJjYWRlKHRoaXMuc3RhdGUsIDgwMCwgNjAwKTtcblxuICAgICAgICAvLyAgU3RhdGUgc3BlY2lmaWMgcHJvcGVydGllcyAodHJhbnNmb3JtLCBkYXRhLCBjaGlsZHJlbiwgZXRjKVxuICAgICAgICAvLyB0aGlzLmNhbWVyYSA9IG5ldyBQaGFzZXIuQ2FtZXJhKHRoaXMuc3RhdGUsIDAsIDAsIDgwMCwgNjAwKTtcbiAgICAgICAgLy8gdGhpcy5jaGlsZHJlbiA9IG5ldyBQaGFzZXIuQ29tcG9uZW50LkNoaWxkcmVuKHRoaXMuc3RhdGUpO1xuICAgICAgICAvLyB0aGlzLmNvbG9yID0gbmV3IFBoYXNlci5Db21wb25lbnQuQ29sb3IodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YSA9IG5ldyBQaGFzZXIuQ29tcG9uZW50LkRhdGEodGhpcy5zdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMudHJhbnNmb3JtID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xuXG4gICAgICAgIC8vICBCb290XG5cbiAgICAgICAgLy8gdGhpcy5pbnB1dC5pbml0KCk7XG5cbiAgICAgICAgLy8gIERlZmF1bHRzXG5cbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMgPSB0aGlzLmV2ZW50cztcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGQgPSB0aGlzLmFkZDtcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkID0gdGhpcy5sb2FkO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jYW1lcmEgPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQ7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUudHJhbnNmb3JtID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0YXRlID0gdGhpcy5zdGF0ZS5nYW1lLnN0YXRlO1xuXG4gICAgICAgIC8vICBIZXJlIHdlIGNhbiBjaGVjayB3aGljaCBTeXN0ZW1zIHRvIGluc3RhbGwgYXMgcHJvcGVydGllcyBpbnRvIHRoZSBTdGF0ZSBvYmplY3RcbiAgICAgICAgLy8gIChkZWZhdWx0IHN5c3RlbXMgYWx3YXlzIGV4aXN0IGluIGhlcmUsIHJlZ2FyZGxlc3MpXG5cbiAgICAgICAgLypcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICB2YXIgdCA9IHR5cGVvZiBjb25maWc7XG5cbiAgICAgICAgaWYgKHQgIT09ICdvYmplY3QnIHx8ICh0ID09PSAnb2JqZWN0JyAmJiAhdC5oYXNPd25Qcm9wZXJ0eSgnc3lzdGVtcycpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgLy8gdGhpcy5rZXkgPSAoY29uZmlnLmhhc093blByb3BlcnR5KCdrZXknKSkgPyBjb25maWcua2V5IDogJyc7XG4gICAgfSxcblxuICAgIGJlZ2luOiBmdW5jdGlvbiAodGltZXN0YW1wLCBmcmFtZURlbHRhKVxuICAgIHtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodGltZXN0ZXAsIHBoeXNpY3NTdGVwKVxuICAgIHtcbiAgICAgICAgLy8gdGhpcy50d2VlbnMudXBkYXRlKHRpbWVzdGVwKTtcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzLnByZVVwZGF0ZShwaHlzaWNzU3RlcCk7XG4gICAgfSxcblxuICAgIHByZVJlbmRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgZW5kOiBmdW5jdGlvbiAoZnBzLCBwYW5pYylcbiAgICB7XG4gICAgICAgIGlmIChwYW5pYylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gVGhpcyBwYXR0ZXJuIGludHJvZHVjZXMgbm9uLWRldGVybWluaXN0aWMgYmVoYXZpb3IsIGJ1dCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgIC8vIGl0J3MgYmV0dGVyIHRoYW4gdGhlIGFsdGVybmF0aXZlICh0aGUgYXBwbGljYXRpb24gd291bGQgbG9vayBsaWtlIGl0XG4gICAgICAgICAgICAvLyB3YXMgcnVubmluZyB2ZXJ5IHF1aWNrbHkgdW50aWwgdGhlIHNpbXVsYXRpb24gY2F1Z2h0IHVwIHRvIHJlYWxcbiAgICAgICAgICAgIC8vIHRpbWUpLlxuICAgICAgICAgICAgdmFyIGRpc2NhcmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubWFpbmxvb3AucmVzZXRGcmFtZURlbHRhKCkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01haW4gbG9vcCBwYW5pY2tlZCwgcHJvYmFibHkgYmVjYXVzZSB0aGUgYnJvd3NlciB0YWIgd2FzIHB1dCBpbiB0aGUgYmFja2dyb3VuZC4gRGlzY2FyZGluZyAnICsgZGlzY2FyZGVkVGltZSArICdtcycpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5c3RlbXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TeXN0ZW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TeXN0ZW1zLmpzIiwiXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gIE5PT1AgKE5vIE9wZXJhdGlvbikgQ2FsbGJhY2tcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTk9PUDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL05PT1AuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gIERvaW5nIHRoaXMgbWFrZXMgaXQgYXZhaWxhYmxlIHVuZGVyIFBoYXNlci5HYW1lXG4gICAgR2FtZTogcmVxdWlyZSgnLi9HYW1lJyksXG5cbiAgICBFdmVudDogcmVxdWlyZSgnLi4vZXZlbnRzL0V2ZW50JyksXG4gICAgRXZlbnREaXNwYXRjaGVyOiByZXF1aXJlKCcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJyksXG5cbiAgICBMb2FkZXI6IHtcbiAgICAgICAgSW1hZ2VGaWxlOiByZXF1aXJlKCcuLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpXG4gICAgfVxuXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9pbmRleC5qcyIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BvbHlmaWxscy9pbmRleC5qcyIsInJlcXVpcmUoJy4vQXJyYXkuZm9yRWFjaCcpO1xucmVxdWlyZSgnLi9BcnJheS5pc0FycmF5Jyk7XG5yZXF1aXJlKCcuL2NvbnNvbGUnKTtcbnJlcXVpcmUoJy4vRnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi9NYXRoLnRydW5jJyk7XG5yZXF1aXJlKCcuL3BlcmZvcm1hbmNlLm5vdycpO1xucmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcbnJlcXVpcmUoJy4vVWludDMyQXJyYXknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBOT09QID0gcmVxdWlyZSgnLi4vdXRpbHMvTk9PUCcpO1xudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcblxudmFyIGRlZmF1bHRCYW5uZXJDb2xvciA9IFtcbiAgICAnI2ZmMDAwMCcsXG4gICAgJyNmZmZmMDAnLFxuICAgICcjMDBmZjAwJyxcbiAgICAnIzAwZmZmZicsXG4gICAgJyMwMDAwMDAnXG5dO1xuXG52YXIgZGVmYXVsdEJhbm5lclRleHRDb2xvciA9ICcjZmZmZmZmJztcblxuZnVuY3Rpb24gQ29uZmlnIChjb25maWcpXG57XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7IGNvbmZpZyA9IHt9OyB9XG5cbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAxMDI0KTtcbiAgICB0aGlzLmhlaWdodCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2hlaWdodCcsIDc2OCk7XG5cbiAgICB0aGlzLnJlc29sdXRpb24gPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdyZXNvbHV0aW9uJywgMSk7XG5cbiAgICB0aGlzLnJlbmRlclR5cGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd0eXBlJywgQ09OU1QuQVVUTyk7XG5cbiAgICB0aGlzLnBhcmVudCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3BhcmVudCcsIG51bGwpO1xuICAgIHRoaXMuY2FudmFzID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FudmFzJywgbnVsbCk7XG4gICAgdGhpcy5jYW52YXNTdHlsZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhc1N0eWxlJywgbnVsbCk7XG5cbiAgICB0aGlzLnN0YXRlQ29uZmlnID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc3RhdGUnLCBudWxsKTtcblxuICAgIHRoaXMuc2VlZCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3NlZWQnLCBbIChEYXRlLm5vdygpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKSBdKTtcblxuICAgIHRoaXMuZ2FtZVRpdGxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndGl0bGUnLCAnJyk7XG4gICAgdGhpcy5nYW1lVVJMID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndXJsJywgJ2h0dHA6Ly9waGFzZXIuaW8nKTtcbiAgICB0aGlzLmdhbWVWZXJzaW9uID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndmVyc2lvbicsICcnKTtcblxuICAgIC8vICBJZiB5b3UgZG86IHsgYmFubmVyOiBmYWxzZSB9IGl0IHdvbid0IGRpc3BsYXkgYW55IGJhbm5lciBhdCBhbGxcbiAgICB0aGlzLmhpZGVCYW5uZXIgPSAoR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnYmFubmVyJywgZmFsc2UpID09PSBmYWxzZSk7XG5cbiAgICB0aGlzLmhpZGVQaGFzZXIgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuaGlkZVBoYXNlcicsIGZhbHNlKTtcbiAgICB0aGlzLmJhbm5lclRleHRDb2xvciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci50ZXh0JywgZGVmYXVsdEJhbm5lclRleHRDb2xvcik7XG4gICAgdGhpcy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuYmFja2dyb3VuZCcsIGRlZmF1bHRCYW5uZXJDb2xvcik7XG4gICBcbiAgICB0aGlzLmZvcmNlU2V0VGltZU91dCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZvcmNlU2V0VGltZU91dCcsIGZhbHNlKTtcbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHJhbnNwYXJlbnQnLCBmYWxzZSk7XG4gICAgdGhpcy5waXhlbEFydCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3BpeGVsQXJ0JywgZmFsc2UpO1xuXG4gICAgLy8gIENhbGxiYWNrc1xuICAgIHRoaXMucHJlQm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wcmVCb290JywgTk9PUCk7XG4gICAgdGhpcy5wb3N0Qm9vdCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbGxiYWNrcy5wb3N0Qm9vdCcsIE5PT1ApO1xuXG59XG5cbkNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25maWc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9Db25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvQ29uZmlnLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcbnZhciBDYW52YXNQb29sID0gcmVxdWlyZSgnLi4vZG9tL0NhbnZhc1Bvb2wnKTtcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4uL2RldmljZS9GZWF0dXJlcycpO1xuXG4vKipcbiogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgaXMgY2FwYWJsZSBvZiB1c2luZyB0aGUgcmVxdWVzdGVkIHJlbmRlcmVyIGFuZCBzZXRzIGl0IHVwIG9yIGFuIGFsdGVybmF0aXZlIGlmIG5vdC5cbipcbiogQG1ldGhvZCBQaGFzZXIuR2FtZSNzZXRVcFJlbmRlcmVyXG4qIEBwcm90ZWN0ZWRcbiovXG52YXIgQ3JlYXRlUmVuZGVyZXIgPSBmdW5jdGlvbiAoZ2FtZSlcbntcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XG5cbiAgICAvLyAgR2FtZSBlaXRoZXIgcmVxdWVzdGVkIENhbnZhcyxcbiAgICAvLyAgb3IgcmVxdWVzdGVkIEFVVE8gb3IgV0VCR0wgYnV0IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpdCwgc28gZmFsbCBiYWNrIHRvIENhbnZhc1xuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuQ0FOVkFTIHx8IChjb25maWcucmVuZGVyVHlwZSAhPT0gQ09OU1QuQ0FOVkFTICYmICFGZWF0dXJlcy53ZWJHTCkpXG4gICAge1xuICAgICAgICBpZiAoRmVhdHVyZXMuY2FudmFzKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgVGhleSByZXF1ZXN0ZWQgQ2FudmFzIGFuZCB0aGVpciBicm93c2VyIHN1cHBvcnRzIGl0XG4gICAgICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULkNBTlZBUztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBDYW52YXMgb3IgV2ViR0wgY29udGV4dCwgYWJvcnRpbmcuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy8gIEdhbWUgcmVxdWVzdGVkIFdlYkdMIGFuZCBicm93c2VyIHNheXMgaXQgc3VwcG9ydHMgaXRcbiAgICAgICAgY29uZmlnLnJlbmRlclR5cGUgPSBDT05TVC5XRUJHTDtcbiAgICB9XG5cbiAgICAvLyAgRG9lcyB0aGUgZ2FtZSBjb25maWcgcHJvdmlkZSBpdHMgb3duIGNhbnZhcyBlbGVtZW50IHRvIHVzZT9cbiAgICBpZiAoY29uZmlnLmNhbnZhcylcbiAgICB7XG4gICAgICAgIGdhbWUuY2FudmFzID0gY29uZmlnLmNhbnZhcztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBDYW52YXNQb29sLmNyZWF0ZShnYW1lLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQsIGNvbmZpZy5yZW5kZXJUeXBlKTtcbiAgICB9XG5cbiAgICAvLyAgRG9lcyB0aGUgZ2FtZSBjb25maWcgcHJvdmlkZSBzb21lIGNhbnZhcyBjc3Mgc3R5bGVzIHRvIHVzZT9cbiAgICBpZiAoY29uZmlnLmNhbnZhc1N0eWxlKVxuICAgIHtcbiAgICAgICAgZ2FtZS5jYW52YXMuc3R5bGUgPSBjb25maWcuY2FudmFzU3R5bGU7XG4gICAgfVxuXG4gICAgLy8gIENyZWF0ZSB0aGUgcmVuZGVyZXJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIFdFQkdMIFJlbmRlcmVyJyk7XG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLldlYkdMKHRoaXMpO1xuICAgICAgICAvLyBnYW1lLmNvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgQ2FudmFzIFJlbmRlcmVyJyk7XG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLkNhbnZhcyh0aGlzKTtcbiAgICAgICAgLy8gZ2FtZS5jb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcucmVuZGVyVHlwZSAhPT0gUGhhc2VyLkhFQURMRVNTKVxuICAgIHtcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5hZGRUb0RPTSh0aGlzLmNhbnZhcywgdGhpcy5wYXJlbnQsIGZhbHNlKTtcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5zZXRUb3VjaEFjdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZVJlbmRlcmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG52YXIgQ0hFQ0tTVU0gPSByZXF1aXJlKCcuLi9jaGVja3N1bScpO1xuXG52YXIgRGVidWdIZWFkZXIgPSBmdW5jdGlvbiAoZ2FtZSlcbntcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmhpZGVCYW5uZXIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlbmRlclR5cGUgPSAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULkNBTlZBUykgPyAnQ2FudmFzJyA6ICdXZWJHTCc7XG5cbiAgICB2YXIgaWUgPSBmYWxzZTtcblxuICAgIGlmICghaWUpXG4gICAge1xuICAgICAgICB2YXIgYyA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IFtjXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuYmFubmVyQmFja2dyb3VuZENvbG9yKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxhc3RDb2xvcjtcblxuICAgICAgICAgICAgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvci5mb3JFYWNoKGZ1bmN0aW9uKGNvbG9yKSB7XG5cbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyVjICcpO1xuXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAnICsgY29sb3IpO1xuXG4gICAgICAgICAgICAgICAgbGFzdENvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAgaW5qZWN0IHRoZSB0ZXh0IGNvbG9yXG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSAnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGxhc3RDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XG5cbiAgICAgICAgICAgIGFyZ3MucHVzaCgnY29sb3I6ICcgKyBjb25maWcuYmFubmVyVGV4dENvbG9yICsgJzsgYmFja2dyb3VuZDogJyArIGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIFVSTCBsaW5rIGJhY2tncm91bmQgY29sb3IgKGFsd2F5cyB3aGl0ZSlcbiAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAjZmZmJyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5nYW1lVGl0bGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdChjb25maWcuZ2FtZVRpdGxlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZy5nYW1lVmVyc2lvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjID0gYy5jb25jYXQoJyB2JyArIGNvbmZpZy5nYW1lVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCcgLyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29uZmlnLmhpZGVQaGFzZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgKCcgKyByZW5kZXJUeXBlICsgJyknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMgPSBjLmNvbmNhdCgnICVjICcgKyBjb25maWcuZ2FtZVVSTCk7XG5cbiAgICAgICAgLy8gIEluamVjdCB0aGUgbmV3IHN0cmluZyBiYWNrIGludG8gdGhlIGFyZ3MgYXJyYXlcbiAgICAgICAgYXJnc1swXSA9IGM7XG5cbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd1snY29uc29sZSddKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BoYXNlciB2JyArIENPTlNULlZFUlNJT04gKyAnIC8gaHR0cDovL3BoYXNlci5pbycpO1xuICAgIH1cblxuICAgIC8vIEtlZXAgdGhpcyBkdXJpbmcgZGV2IGJ1aWxkIG9ubHlcbiAgICBjb25zb2xlLmxvZyhDSEVDS1NVTS5idWlsZCk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVidWdIZWFkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0RlYnVnSGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIERldmljZSA9IHJlcXVpcmUoJy4uL2RldmljZScpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vQ29uZmlnJyk7XG52YXIgRGVidWdIZWFkZXIgPSByZXF1aXJlKCcuL0RlYnVnSGVhZGVyJyk7XG52YXIgQ3JlYXRlUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NyZWF0ZVJlbmRlcmVyJyk7XG52YXIgUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZSgnLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xudmFyIERPTUNvbnRlbnRMb2FkZWQgPSByZXF1aXJlKCcuLi9kb20vRE9NQ29udGVudExvYWRlZCcpO1xudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yJyk7XG52YXIgU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vc3RhdGUvU3RhdGVNYW5hZ2VyJyk7XG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcbnZhciBHYW1lT2JqZWN0cyA9IHJlcXVpcmUgKCcuLi9nYW1lb2JqZWN0cy8nKTtcblxudmFyIEdhbWUgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIHRoaXMuY29uZmlnID0gbmV3IENvbmZpZyhjb25maWcpO1xuXG4gICAgLy8gIERlY2lkZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHNob3VsZCBiZSBHYW1lIHByb3BlcnRpZXMsIG9yIHBsYWNlZCBlbHNld2hlcmUgLi4uXG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtzdHJpbmd8SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBHYW1lcyBET00gcGFyZW50LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5pc0Jvb3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZX0gcmFmIC0gQXV0b21hdGljYWxseSBoYW5kbGVzIHRoZSBjb3JlIGdhbWUgbG9vcCB2aWEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9yIHNldFRpbWVvdXRcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHRoaXMucmFmID0gbmV3IFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuVGV4dHVyZU1hbmFnZXJ9IHRleHR1cmVzIC0gUmVmZXJlbmNlIHRvIHRoZSBQaGFzZXIgVGV4dHVyZSBNYW5hZ2VyLlxuICAgICovXG4gICAgdGhpcy50ZXh0dXJlcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlVwZGF0ZU1hbmFnZXJ9IHVwZGF0ZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBVcGRhdGUgTWFuYWdlci5cbiAgICAqL1xuICAgIHRoaXMudXBkYXRlcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkNhY2hlfSBjYWNoZSAtIFJlZmVyZW5jZSB0byB0aGUgYXNzZXRzIGNhY2hlLlxuICAgICovXG4gICAgdGhpcy5jYWNoZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLklucHV0fSBpbnB1dCAtIFJlZmVyZW5jZSB0byB0aGUgaW5wdXQgbWFuYWdlclxuICAgICovXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlTWFuYWdlcn0gc3RhdGUgLSBUaGUgU3RhdGVNYW5hZ2VyLiBQaGFzZXIgaW5zdGFuY2Ugc3BlY2lmaWMuXG4gICAgKi9cbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzLCB0aGlzLmNvbmZpZy5zdGF0ZUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkRldmljZX0gZGV2aWNlIC0gQ29udGFpbnMgZGV2aWNlIGluZm9ybWF0aW9uIGFuZCBjYXBhYmlsaXRpZXMgKHNpbmdsZXRvbilcbiAgICAqL1xuICAgIHRoaXMuZGV2aWNlID0gRGV2aWNlO1xuXG4gICAgLy8gIE1vcmUgdGhpcyBzb21ld2hlcmUgZWxzZT8gTWF0aCBwZXJoYXBzPyBEb2Vzbid0IG5lZWQgdG8gYmUgYSBHYW1lIGxldmVsIHN5c3RlbS5cbiAgICB0aGlzLnJuZDtcblxuICAgIC8vICBXYWl0IGZvciB0aGUgRE9NIFJlYWR5IGV2ZW50LCB0aGVuIGNhbGwgYm9vdC5cbiAgICBET01Db250ZW50TG9hZGVkKHRoaXMuYm9vdC5iaW5kKHRoaXMpKTtcblxuICAgIC8vICBGb3IgZGVidWdnaW5nIG9ubHlcbiAgICB3aW5kb3cuZ2FtZSA9IHRoaXM7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdhbWU7XG5cbkdhbWUucHJvdG90eXBlID0ge1xuXG4gICAgYm9vdDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuaXNCb290ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLnByZUJvb3QoKTtcblxuICAgICAgICAvLyAgUHJvYmFibHkgbW92ZSB3aXRoaW4gTWF0aFxuICAgICAgICB0aGlzLnJuZCA9IG5ldyBSYW5kb21EYXRhR2VuZXJhdG9yKHRoaXMuY29uZmlnLnNlZWQpO1xuXG4gICAgICAgIERlYnVnSGVhZGVyKHRoaXMpO1xuXG4gICAgICAgIENyZWF0ZVJlbmRlcmVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYm9vdCgpO1xuXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmNvbmZpZy5wb3N0Qm9vdCgpO1xuXG4gICAgICAgIHRoaXMucmFmLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodGltZXN0YW1wKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGltZXN0YW1wKTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zdGVwKHRpbWVzdGFtcCk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvR2FtZS5qcyIsInZhciBDSEVDS1NVTSA9IHtcbmJ1aWxkOiAnODI3MWExYTAtYmI1OC0xMWU2LTkyYzctMWJmMWVjMzNjYjViJ1xufTtcbm1vZHVsZS5leHBvcnRzID0gQ0hFQ0tTVU07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY2hlY2tzdW0uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG5cbnZhciBBdWRpbyA9IHtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdWRpb0RhdGEgLSBBcmUgQXVkaW8gdGFncyBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgYXVkaW9EYXRhOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJBdWRpbyAtIElzIHRoZSBXZWJBdWRpbyBBUEkgYXZhaWxhYmxlP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYkF1ZGlvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvZ2cgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvZ2cgZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgb2dnOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvcHVzIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb3B1cyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBvcHVzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtcDMgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBtcDMgZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbXAzOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3YXYgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3YXYgZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2F2OiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQ2FuIHRoaXMgZGV2aWNlIHBsYXkgbTRhIGZpbGVzP1xuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtNGEgLSBUcnVlIGlmIHRoaXMgZGV2aWNlIGNhbiBwbGF5IG00YSBmaWxlcy5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBtNGE6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYm0gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3ZWJtIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHdlYm06IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbGJ5IC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgRUMtMyBEb2xieSBEaWdpdGFsIFBsdXMgZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgZG9sYnk6IGZhbHNlXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICBBdWRpby5hdWRpb0RhdGEgPSAhISh3aW5kb3dbJ0F1ZGlvJ10pO1xuICAgIEF1ZGlvLndlYkF1ZGlvID0gISEod2luZG93WydBdWRpb0NvbnRleHQnXSB8fCB3aW5kb3dbJ3dlYmtpdEF1ZGlvQ29udGV4dCddKTtcblxuICAgIHZhciBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuXG4gICAgdmFyIHJlc3VsdCA9ICEhYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlO1xuXG4gICAgdHJ5XG4gICAge1xuICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby5vZ2cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cIm9wdXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vcHVzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ub3B1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby5tcDMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgTWltZXR5cGVzIGFjY2VwdGVkOlxuICAgICAgICAgICAgLy8gIGRldmVsb3Blci5tb3ppbGxhLm9yZy9Fbi9NZWRpYV9mb3JtYXRzX3N1cHBvcnRlZF9ieV90aGVfYXVkaW9fYW5kX3ZpZGVvX2VsZW1lbnRzXG4gICAgICAgICAgICAvLyAgYml0Lmx5L2lwaG9uZW9zY29kZWNzXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ud2F2ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdWRpby5tNGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXVkaW8ud2VibSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDtjb2RlY3M9XCJlYy0zXCInKSAhPT0gJycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKEJyb3dzZXIuZWRnZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvLmRvbGJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQnJvd3Nlci5zYWZhcmkgJiYgQnJvd3Nlci5zYWZhcmlWZXJzaW9uID49IDkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKC9NYWMgT1MgWCAoXFxkKylfKFxcZCspLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1ham9yID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlub3IgPSBwYXJzZUludChSZWdFeHAuJDIsIDEwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtYWpvciA9PT0gMTAgJiYgbWlub3IgPj0gMTEpIHx8IG1ham9yID4gMTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW8uZG9sYnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKVxuICAgIHtcbiAgICAgICAgLy8gIE5vdGhpbmcgdG8gZG8gaGVyZVxuICAgIH1cblxuICAgIHJldHVybiBBdWRpbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvQXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9BdWRpby5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XG5cbnZhciBGdWxsc2NyZWVuID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF2YWlsYWJsZSAtIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCB0aGUgRnVsbCBTY3JlZW4gQVBJP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGF2YWlsYWJsZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXF1ZXN0IC0gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEZ1bGwgU2NyZWVuIEFQSSB0aGlzIGhvbGRzIHRoZSBjYWxsIHlvdSBuZWVkIHRvIHVzZSB0byBhY3RpdmF0ZSBpdC5cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICByZXF1ZXN0OiAnJyxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNhbmNlbCAtIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBGdWxsIFNjcmVlbiBBUEkgdGhpcyBob2xkcyB0aGUgY2FsbCB5b3UgbmVlZCB0byB1c2UgdG8gY2FuY2VsIGl0LlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIGNhbmNlbDogJycsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0ga2V5Ym9hcmQgLSBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgYWNjZXNzIHRvIHRoZSBLZXlib2FyZCBkdXJpbmcgRnVsbCBTY3JlZW4gbW9kZT9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBrZXlib2FyZDogZmFsc2VcblxufTtcblxuLyoqXG4qIENoZWNrcyBmb3Igc3VwcG9ydCBvZiB0aGUgRnVsbCBTY3JlZW4gQVBJLlxuKi9cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICB2YXIgZnMgPSBbXG4gICAgICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICdyZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgJ21zUmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAnbW96UmVxdWVzdEZ1bGxzY3JlZW4nXG4gICAgXTtcblxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYgKGVsZW1lbnRbZnNbaV1dKVxuICAgICAgICB7XG4gICAgICAgICAgICBGdWxsc2NyZWVuLmF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBGdWxsc2NyZWVuLnJlcXVlc3QgPSBmc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNmcyA9IFtcbiAgICAgICAgJ2NhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAnZXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICdtc0NhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgJ21vekV4aXRGdWxsc2NyZWVuJ1xuICAgIF07XG5cbiAgICBpZiAoRnVsbHNjcmVlbi5hdmFpbGFibGUpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNmcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50W2Nmc1tpXV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5jYW5jZWwgPSBjZnNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgS2V5Ym9hcmQgSW5wdXQ/XG4gICAgaWYgKHdpbmRvd1snRWxlbWVudCddICYmIEVsZW1lbnRbJ0FMTE9XX0tFWUJPQVJEX0lOUFVUJ10pXG4gICAge1xuICAgICAgICBGdWxsc2NyZWVuLmtleWJvYXJkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gRnVsbHNjcmVlbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvRnVsbHNjcmVlbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xuXG52YXIgSW5wdXQgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdG91Y2ggLSBJcyB0b3VjaCBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgdG91Y2g6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1zcG9pbnRlciAtIElzIG1zcG9pbnRlciBhdmFpbGFibGU/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbXNwb2ludGVyOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHs/c3RyaW5nfSB3aGVlbFR5cGUgLSBUaGUgbmV3ZXN0IHR5cGUgb2YgV2hlZWwvU2Nyb2xsIGV2ZW50IHN1cHBvcnRlZDogJ3doZWVsJywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnXG4gICAgKiBAZGVmYXVsdFxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICAgd2hlZWxFdmVudDogbnVsbFxuICAgIFxufTtcblxuZnVuY3Rpb24gaW5pdCAoKVxue1xuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgKHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAxKSlcbiAgICB7XG4gICAgICAgIElucHV0LnRvdWNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpXG4gICAge1xuICAgICAgICBJbnB1dC5tc3BvaW50ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghT1MuY29jb29uSlMpXG4gICAge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXG4gICAgICAgIGlmICgnb253aGVlbCcgaW4gd2luZG93IHx8IChCcm93c2VyLmllICYmICdXaGVlbEV2ZW50JyBpbiB3aW5kb3cpKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBET00zIFdoZWVsIEV2ZW50OiBGRiAxNyssIElFIDkrLCBDaHJvbWUgMzErLCBTYWZhcmkgNytcbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnd2hlZWwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCdvbm1vdXNld2hlZWwnIGluIHdpbmRvdylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gTm9uLUZGIGxlZ2FjeTogSUUgNi05LCBDaHJvbWUgMS0zMSwgU2FmYXJpIDUtNy5cbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnbW91c2V3aGVlbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQnJvd3Nlci5maXJlZm94ICYmICdNb3VzZVNjcm9sbEV2ZW50JyBpbiB3aW5kb3cpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIEZGIHByaW9yIHRvIDE3LiBUaGlzIHNob3VsZCBwcm9iYWJseSBiZSBzY3J1YmJlZC5cbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnRE9NTW91c2VTY3JvbGwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIElucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9JbnB1dC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0lucHV0LmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcblxudmFyIFZpZGVvID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZ1ZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb2dnIHZpZGVvIGZpbGVzP1xuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIG9nZ1ZpZGVvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBoMjY0VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBoMjY0IG1wNCB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICBoMjY0VmlkZW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wNFZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaDI2NCBtcDQgdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgbXA0VmlkZW86IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYm1WaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdlYm0gdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgd2VibVZpZGVvOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB2cDlWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHZwOSB2aWRlbyBmaWxlcz9cbiAgICAqIEBkZWZhdWx0XG4gICAgKi9cbiAgICB2cDlWaWRlbzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaGxzVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBobHMgdmlkZW8gZmlsZXM/XG4gICAgKiBAZGVmYXVsdFxuICAgICovXG4gICAgaGxzVmlkZW86IGZhbHNlXG5cbn07XG5cbmZ1bmN0aW9uIGluaXQgKClcbntcbiAgICB2YXIgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2YXIgcmVzdWx0ID0gISF2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGU7XG5cbiAgICB0cnlcbiAgICB7XG4gICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFZpZGVvLm9nZ1ZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBXaXRob3V0IFF1aWNrVGltZSwgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLiBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzU0NlxuICAgICAgICAgICAgICAgIFZpZGVvLmgyNjRWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgVmlkZW8ubXA0VmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDgsIHZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBWaWRlby53ZWJtVmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDlcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVmlkZW8udnA5VmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCdhcHBsaWNhdGlvbi94LW1wZWdVUkw7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFZpZGVvLmhsc1ZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSlcbiAgICB7XG4gICAgICAgIC8vICBOb3RoaW5nIHRvIGRvXG4gICAgfVxuXG4gICAgcmV0dXJuIFZpZGVvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9WaWRlby5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL1ZpZGVvLmpzIiwiLy8gIFRoaXMgc2luZ2xldG9uIGlzIGluc3RhbnRpYXRlZCBhcyBzb29uIGFzIFBoYXNlciBsb2Fkcyxcbi8vICBiZWZvcmUgYSBQaGFzZXIuR2FtZSBpbnN0YW5jZSBoYXMgZXZlbiBiZWVuIGNyZWF0ZWQuXG4vLyAgV2hpY2ggbWVhbnMgYWxsIGluc3RhbmNlcyBvZiBQaGFzZXIgR2FtZXMgY2FuIHNoYXJlIGl0LFxuLy8gIHdpdGhvdXQgaGF2aW5nIHRvIHJlLXBvbGwgdGhlIGRldmljZSBhbGwgb3ZlciBhZ2FpblxuXG52YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xudmFyIEZlYXR1cmVzID0gcmVxdWlyZSgnLi9GZWF0dXJlcycpO1xudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xudmFyIEF1ZGlvID0gcmVxdWlyZSgnLi9BdWRpbycpO1xudmFyIFZpZGVvID0gcmVxdWlyZSgnLi9WaWRlbycpO1xudmFyIEZ1bGxzY3JlZW4gPSByZXF1aXJlKCcuL0Z1bGxzY3JlZW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBPUzogT1MsXG4gICAgQnJvd3NlcjogQnJvd3NlcixcbiAgICBGZWF0dXJlczogRmVhdHVyZXMsXG4gICAgSW5wdXQ6IElucHV0LFxuICAgIEF1ZGlvOiBBdWRpbyxcbiAgICBWaWRlbzogVmlkZW8sXG4gICAgRnVsbHNjcmVlbjogRnVsbHNjcmVlblxuXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvaW5kZXguanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgT1MgPSByZXF1aXJlKCcuLi9kZXZpY2UvT1MnKTtcblxudmFyIGlzQm9vdGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIERPTUNvbnRlbnRMb2FkZWQgKGNhbGxiYWNrKVxue1xuICAgIGlmIChpc0Jvb3RlZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKVxuICAgIHtcbiAgICAgICAgaXNCb290ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoZWNrID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlzQm9vdGVkID0gdHJ1ZTtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGNoZWNrLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoZWNrLCB0cnVlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2ssIDIwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoT1MuY29yZG92YSAmJiAhT1MuY29jb29uSlMpXG4gICAge1xuICAgICAgICAvLyAgUmVmLiBodHRwOi8vZG9jcy5waG9uZWdhcC5jb20vZW4vMy41LjAvY29yZG92YV9ldmVudHNfZXZlbnRzLm1kLmh0bWwjZGV2aWNlcmVhZHlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjaGVjaywgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hlY2ssIHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoZWNrLCB0cnVlKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NQ29udGVudExvYWRlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RvbS9ET01Db250ZW50TG9hZGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kb20vRE9NQ29udGVudExvYWRlZC5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBYnN0cmFjdHMgYXdheSB0aGUgdXNlIG9mIFJBRiBvciBzZXRUaW1lT3V0IGZvciB0aGUgY29yZSBnYW1lIHVwZGF0ZSBsb29wLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZVxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZVNldFRpbWVPdXQ9ZmFsc2VdIC0gVGVsbCBQaGFzZXIgdG8gdXNlIHNldFRpbWVPdXQgZXZlbiBpZiByYWYgaXMgYXZhaWxhYmxlLlxuKi9cbmZ1bmN0aW9uIFJlcXVlc3RBbmltYXRpb25GcmFtZSAoZ2FtZSlcbntcbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBUaGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cbiAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNSdW5uaW5nIC0gdHJ1ZSBpZiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaXMgcnVubmluZywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICogQGRlZmF1bHRcbiAgICAqL1xuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnRpY2sgPSAwO1xuXG4gICAgdmFyIHZlbmRvcnMgPSBbXG4gICAgICAgICdtcycsXG4gICAgICAgICdtb3onLFxuICAgICAgICAnd2Via2l0JyxcbiAgICAgICAgJ28nXG4gICAgXTtcblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7IHgrKylcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNTZXRUaW1lT3V0ICAtIFRydWUgaWYgdGhlIGJyb3dzZXIgaXMgdXNpbmcgc2V0VGltZW91dCBpbnN0ZWFkIG9mIHJBZi5cbiAgICAqL1xuICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lT3V0SUQgLSBUaGUgY2FsbGJhY2sgc2V0VGltZW91dCBvciByQWYgY2FsbGJhY2sgSUQgdXNlZCB3aGVuIGNhbGxpbmcgY2FuY2VsLlxuICAgICovXG4gICAgdGhpcy50aW1lT3V0SUQgPSBudWxsO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKVxuICAgIHtcbiAgICAgICAgX3RoaXMudGljayA9IHRpbWVzdGFtcDtcblxuICAgICAgICBfdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICAgIF90aGlzLmdhbWUudXBkYXRlKHRpbWVzdGFtcCk7XG4gICAgfTtcblxuICAgIHZhciBzdGVwVGltZW91dCA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBfdGhpcy50aWNrID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBfdGhpcy5nYW1lLnVwZGF0ZShfdGhpcy50aWNrKTtcblxuICAgICAgICAvLyBfdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dChzdGVwVGltZW91dCwgX3RoaXMuZ2FtZS50aW1lLnRpbWVUb0NhbGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIFN0YXJ0cyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHJ1bm5pbmcgb3Igc2V0VGltZW91dCBpZiB1bmF2YWlsYWJsZSBpbiBicm93c2VyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWUjc3RhcnRcbiAgICAqL1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLmZvcmNlU2V0VGltZU91dClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pc1NldFRpbWVPdXQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5zZXRUaW1lb3V0KHN0ZXBUaW1lb3V0LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMudGltZU91dElEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIFN0b3BzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBydW5uaW5nLlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lI3N0b3BcbiAgICAqL1xuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2V0VGltZU91dClcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dElEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVPdXRJRCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuXG59XG5cblJlcXVlc3RBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xudmFyIEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIEV2ZW50QmluZGluZyA9IGZ1bmN0aW9uIChkaXNwYXRjaGVyLCB0eXBlKVxue1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9JRExFO1xuICAgIHRoaXMuYWN0aXZlID0gW107XG59O1xuXG5FdmVudEJpbmRpbmcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnRCaW5kaW5nO1xuXG5FdmVudEJpbmRpbmcucHJvdG90eXBlID0ge1xuXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB2YXIgdG90YWwgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG90YWwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoY2FsbGJhY2spXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uY2FsbGJhY2sgPT09IGNhbGxiYWNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRJbmRleDogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlW2ldLmNhbGxiYWNrID09PSBjYWxsYmFjaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uIChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXQoY2FsbGJhY2spKTtcbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHByaW9yaXR5LCBvbmNlKVxuICAgIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXQoY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICghbGlzdGVuZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGUgbGlzdGVuZXIgZG9lc24ndCBleGlzdCwgc28gY3JlYXRlIG9uZVxuICAgICAgICAgICAgbGlzdGVuZXIgPSBFdmVudExpc3RlbmVyKHRoaXMudHlwZSwgY2FsbGJhY2ssIHByaW9yaXR5LCBvbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBMaXN0ZW5lciBhbHJlYWR5IGV4aXN0cywgYWJvcnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0lETEUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBUaGUgRGlzcGF0Y2hlciBpc24ndCBkb2luZyBhbnl0aGluZywgc28gd2UgZG9uJ3QgbmVlZCBhIHBlbmRpbmcgc3RhdGVcbiAgICAgICAgICAgIGxpc3RlbmVyLnN0YXRlID0gQ09OU1QuTElTVEVORVJfQUNUSVZFO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0RJU1BBVENISU5HKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgQWRkIGl0IHRvIHRoZSBsaXN0LCBidXQga2VlcCB0aGUgc3RhdGUgYXMgcGVuZGluZy5cbiAgICAgICAgICAgIC8vICBUaGUgY2FsbCB0byAndGlkeScgd2lsbCBzb3J0IGl0IG91dCBhdCB0aGUgZW5kIG9mIHRoZSBkaXNwYXRjaC5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNvcnRIYW5kbGVyOiBmdW5jdGlvbiAobGlzdGVuZXJBLCBsaXN0ZW5lckIpXG4gICAge1xuICAgICAgICBpZiAobGlzdGVuZXJCLnByaW9yaXR5IDwgbGlzdGVuZXJBLnByaW9yaXR5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGlzdGVuZXJCLnByaW9yaXR5ID4gbGlzdGVuZXJBLnByaW9yaXR5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFRoZSBEaXNwYXRjaGVyIGlzbid0IGRvaW5nIGFueXRoaW5nLCBzbyB3ZSBjYW4gcmVtb3ZlIHJpZ2h0IGF3YXlcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5nZXRJbmRleChjYWxsYmFjayk7XG5cbiAgICAgICAgICAgIGlmIChpICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBDT05TVC5ESVNQQVRDSEVSX0RJU1BBVENISU5HKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgVGhlIERpc3BhdGNoZXIgaXMgd29ya2luZywgc28gd2UgZmxhZyB0aGUgbGlzdGVuZXIgZm9yIHJlbW92YWwgYXQgdGhlIGVuZFxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXQoY2FsbGJhY2spO1xuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuc3RhdGUgPSBDT05TVC5MSVNURU5FUl9SRU1PVklORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGV2ZW50KVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgXFwnRXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoXFwnIG9uIFxcJycgKyB0aGlzLnR5cGUgKyAnXFwnOiBUaGUgZXZlbnQgaXMgYWxyZWFkeSBiZWluZyBkaXNwYXRjaGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIFRoaXMgd2FzIGEgdmFsaWQgZGlzcGF0Y2ggY2FsbCwgd2UganVzdCBoYWQgbm90aGluZyB0byBkbyAuLi5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfRElTUEFUQ0hJTkc7XG5cbiAgICAgICAgY29uc29sZS5kaXIodGhpcy5hY3RpdmUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaXNwYXRjaGluZycsIHRoaXMuYWN0aXZlLmxlbmd0aCwgJ2xpc3RlbmVycycpO1xuXG4gICAgICAgIHZhciBsaXN0ZW5lcjtcblxuICAgICAgICBldmVudC5yZXNldCh0aGlzLmRpc3BhdGNoZXIpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5hY3RpdmVbaV07XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5zdGF0ZSAhPT0gQ09OU1QuTElTVEVORVJfQUNUSVZFKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKHRoaXMuZGlzcGF0Y2hlciwgZXZlbnQpO1xuXG4gICAgICAgICAgICAvLyAgSGFzIHRoZSBjYWxsYmFjayBjaGFuZ2VkIHRoZSBzdGF0ZSBvZiB0aGlzIGJpbmRpbmc/XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ09OU1QuRElTUEFUQ0hFUl9ESVNQQVRDSElORylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgWXVwISBMZXQncyBicmVhayBvdXRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIFdhcyBpdCBhICdvbmNlJyBsaXN0ZW5lcj9cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vbmNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnN0YXRlID0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICBIYXMgdGhlIGV2ZW50IGJlZW4gaGFsdGVkIGJ5IHRoZSBjYWxsYmFjaz9cbiAgICAgICAgICAgIGlmICghZXZlbnQuX3Byb3BhZ2F0ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgQnJlYWsgb3V0LCBhIGxpc3RlbmVyIGhhcyBjYWxsZWQgRXZlbnQuc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgRGlzcGF0Y2ggb3Zlciwgb3IgYWJvcnRlZFxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ09OU1QuRElTUEFUQ0hFUl9SRU1PVklORylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGwoKTtcblxuICAgICAgICAgICAgLy8gIEFsbCBkb25lLCB0aWR5IHRoZSBsaXN0IGluIGNhc2UgdGhlcmUgd2VyZSBhbnkgcGVuZGluZyBldmVudHMgYWRkZWRcbiAgICAgICAgICAgIHRoaXMudGlkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfREVTVFJPWUVEKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGVsZXRlKHRoaXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgQWxsIGRvbmUsIGp1c3QgcHVyZ2UgdGhlIGxpc3RcbiAgICAgICAgICAgIHRoaXMudGlkeSgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ09OU1QuRElTUEFUQ0hFUl9JRExFO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vICBSZW1vdmVzIGFsbCBsaXN0ZW5lcnNcbiAgICAvLyAgSWYgdGhpcyBpcyBjdXJyZW50bHkgYmVpbmcgZGlzcGF0Y2hlZCB0aGVuIGRvbid0IHJlbW92ZSAncGVuZGluZycgbGlzdGVuZXJzXG4gICAgLy8gIChpLmUuIG9uZXMgdGhhdCB3ZXJlIGFkZGVkIGR1cmluZyB0aGUgZGlzcGF0Y2gpLCBvbmx5IGFjdGl2ZSBvbmVzXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENPTlNULkRJU1BBVENIRVJfSURMRSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgIT09IENPTlNULkxJU1RFTkVSX1BFTkRJTkcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDT05TVC5ESVNQQVRDSEVSX0lETEU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGlkeTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBhZGRlZCA9IDA7XG5cbiAgICAgICAgdmFyIGkgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGRvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVtpXS5zdGF0ZSA9PT0gQ09OU1QuTElTVEVORVJfUkVNT1ZJTkcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IENPTlNULkxJU1RFTkVSX1BFTkRJTkcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IENPTlNULkxJU1RFTkVSX0FDVElWRTtcbiAgICAgICAgICAgICAgICBhZGRlZCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGkgPj0gMCk7XG5cbiAgICAgICAgaWYgKGFkZGVkID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc29ydCh0aGlzLnNvcnRIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5hY3RpdmUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENPTlNULkRJU1BBVENIRVJfREVTVFJPWUVEO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEJpbmRpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnRCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvRXZlbnRCaW5kaW5nLmpzIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xuXG52YXIgRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaywgcHJpb3JpdHksIG9uY2UpXG57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIG9uY2U6IG9uY2UsXG4gICAgICAgIHN0YXRlOiBDT05TVC5MSVNURU5FUl9QRU5ESU5HXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXN0ZW5lcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2V2ZW50cy9FdmVudExpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvRXZlbnRMaXN0ZW5lci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cbiogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXG4qXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5JbWFnZVxuKiBAZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdFxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4qIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cbiogQHBhcmFtIHtzdHJpbmd9IFtrZXldIC0gVGhlIHRleHR1cmUgdXNlZCBieSB0aGUgSW1hZ2UgZHVyaW5nIHJlbmRlcmluZy4gSXQgY2FuIGJlIGEgc3RyaW5nIHdoaWNoIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBDYWNoZSBlbnRyeSwgb3IgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhIG9yIFBJWEkuVGV4dHVyZS5cbiogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgdGhpcyBJbWFnZSBpcyB1c2luZyBwYXJ0IG9mIGEgc3ByaXRlIHNoZWV0IG9yIHRleHR1cmUgYXRsYXMgeW91IGNhbiBzcGVjaWZ5IHRoZSBleGFjdCBmcmFtZSB0byB1c2UgYnkgZ2l2aW5nIGEgc3RyaW5nIG9yIG51bWVyaWMgaW5kZXguXG4qL1xudmFyIEltYWdlID0gZnVuY3Rpb24gKHN0YXRlLCB4LCB5LCBrZXksIGZyYW1lLCBuYW1lKVxue1xuICAgIC8qXG4gICAgdmFyIF90ZXh0dXJlID0gc3RhdGUuZ2FtZS50ZXh0dXJlcy5nZXQoa2V5KTtcbiAgICB2YXIgX2ZyYW1lID0gX3RleHR1cmUuZ2V0KGZyYW1lKTtcblxuICAgIFBoYXNlci5HYW1lT2JqZWN0LmNhbGwodGhpcywgc3RhdGUsIHgsIHksIF90ZXh0dXJlLCBfZnJhbWUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIHRoaXMudHlwZSA9IFBoYXNlci5JTUFHRTtcbiAgICAqL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZTtcblxuXG4vLyBJbWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5HYW1lT2JqZWN0LnByb3RvdHlwZSk7XG4vLyBJbWFnZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWFnZTtcblxuLyoqXG4qIEF1dG9tYXRpY2FsbHkgY2FsbGVkIGJ5IFdvcmxkLnByZVVwZGF0ZS5cbipcbiogQG1ldGhvZCBQaGFzZXIuSW1hZ2UjcHJlVXBkYXRlXG4qIEBtZW1iZXJvZiBQaGFzZXIuSW1hZ2VcblBoYXNlci5HYW1lT2JqZWN0LkltYWdlLnByb3RvdHlwZS5wcmVVcGRhdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vICBXb3VsZCBsaWtlIHRvIGdldCByaWQgb2YgdGhpcyBzb21laG93IC4uLlxuICAgIGlmICh0aGlzLnBhcmVudClcbiAgICB7XG4gICAgICAgIHRoaXMuY29sb3Iud29ybGRBbHBoYSA9IHRoaXMucGFyZW50LmNvbG9yLndvcmxkQWxwaGE7XG4gICAgfVxufTtcbiovXG5cbi8qXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhJbWFnZS5wcm90b3R5cGUsIHtcblxuICAgIHdpZHRoOiB7XG5cbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5fc2NhbGVYICogdGhpcy5mcmFtZS5yZWFsV2lkdGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdmFsdWUgLyB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGhlaWdodDoge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3NjYWxlWSAqIHRoaXMuZnJhbWUucmVhbEhlaWdodDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB2YWx1ZSAvIHRoaXMuZnJhbWUucmVhbEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59KTtcbiovXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxudmFyIEltYWdlID0gcmVxdWlyZSgnLi9JbWFnZScpO1xudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XG5cbnZhciBJbWFnZUZhY3RvcnkgPSB7XG5cbiAgICBLRVk6ICdpbWFnZScsXG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBgSW1hZ2VgIG9iamVjdC5cbiAgICAqXG4gICAgKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cbiAgICAqXG4gICAgKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuXG4gICAgKiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5I2ltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5JbWFnZX0gVGhlIG5ld2x5IGNyZWF0ZWQgSW1hZ2Ugb2JqZWN0LlxuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSwgZ3JvdXApXG4gICAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMuc3RhdGU7IH1cblxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VGYWN0b3J5LmFkZCcsIGtleSwgeCwgeSwgZnJhbWUsIGdyb3VwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludG8gU3RhdGUnLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICAvLyByZXR1cm4gZ3JvdXAuY2hpbGRyZW4uYWRkKG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfSxcblxuICAgIG1ha2U6IGZ1bmN0aW9uICh4LCB5LCBrZXksIGZyYW1lKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5tYWtlJywga2V5LCB4LCB5LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjdG9yeUNvbnRhaW5lci5yZWdpc3RlcihJbWFnZUZhY3RvcnkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCIvLyAgSW5jbHVkZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3Rvcmllc1xuLy8gIFxuLy8gIFRoaXMgZmlsZSBzaG91bGQgYmUgbGlua2VkIHRvIHRoZSBzcGVjaWZpYyBidWlsZCBvZiBQaGFzZXIsIGkuZS4gUGhhc2VyIE5hbm8gd29uJ3QgcmVxdWlyZSBhbGwgR09zXG5cbnJlcXVpcmUgKCcuL2ltYWdlL0ltYWdlRmFjdG9yeScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwiXG52YXIgRklMRV9DT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcbnZhciBTZXQgPSByZXF1aXJlKCcuLi9zdHJ1Y3RzL1NldCcpO1xudmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLycpO1xuXG52YXIgQmFzZUxvYWRlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gIFRvIGZpbmlzaCB0aGUgbG9hZGVyIC4uLlxuICAgIC8vICBcbiAgICAvLyAgMSkgSW1hZ2UgVGFnIGxvYWRlclxuICAgIC8vICAyKSBFdmVudHMgKG9yIFNpZ25hbHM/KSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzXG4gICAgLy8gIDMpIFByb2dyZXNzIHVwZGF0ZVxuICAgIC8vICA0KSBKU09OIGxvYWRlclxuICAgIC8vICA1KSBYTUwgTG9hZGVyXG4gICAgLy8gIDYpIE11bHRpIEZpbGUgc3VwcG9ydCAoYXRsYXMgKyBkYXRhKVxuICAgIC8vICA3KSBBdGxhcyBMb2FkZXJcblxuXG4gICAgLy8gIE1vdmUgdG8gYSAnc2V0VVJMJyBtZXRob2Q/XG4gICAgdGhpcy5iYXNlVVJMID0gJyc7XG4gICAgdGhpcy5wYXRoID0gJyc7XG5cbiAgICAvLyAgUmVhZCBmcm9tIEdhbWUgLyBTdGF0ZSBDb25maWdcbiAgICB0aGlzLmVuYWJsZVBhcmFsbGVsID0gdHJ1ZTtcbiAgICB0aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzID0gODtcblxuICAgIC8vICB4aHIgc3BlY2lmaWMgZ2xvYmFsIHNldHRpbmdzIChjYW4gYmUgb3ZlcnJpZGRlbiBvbiBhIHBlci1maWxlIGJhc2lzKVxuICAgIHRoaXMueGhyID0gWEhSU2V0dGluZ3MoKTtcblxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5pbmZsaWdodCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmZhaWxlZCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnF1ZXVlID0gbmV3IFNldCgpO1xuXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFNldCgpO1xuXG4gICAgdGhpcy5fc3RhdGUgPSAnUEVORElORyc7XG59O1xuXG5CYXNlTG9hZGVyLnByb3RvdHlwZS5jb250cnVjdG9yID0gQmFzZUxvYWRlcjtcblxuQmFzZUxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgICBhZGRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBNdWx0aXBhcnQgZmlsZT9cbiAgICAgICAgaWYgKGZpbGUubXVsdGlwYXJ0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlLmZpbGVBLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgICAgICBmaWxlLmZpbGVCLnBhdGggPSB0aGlzLnBhdGg7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoZmlsZS5maWxlQSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUuZmlsZUIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZS5wYXRoID0gdGhpcy5wYXRoO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vICBJcyB0aGUgTG9hZGVyIGFjdGl2ZWx5IGxvYWRpbmcgKG9yIHByb2Nlc3NpbmcgbG9hZGVkIGZpbGVzKVxuICAgIGlzTG9hZGluZzogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09ICdMT0FESU5HJyB8fCB0aGlzLl9zdGF0ZSA9PT0gJ1BST0NFU1NJTkcnKTtcbiAgICB9LFxuXG4gICAgLy8gIElzIHRoZSBMb2FkZXIgcmVhZHkgdG8gc3RhcnQgYSBuZXcgbG9hZD9cbiAgICBpc1JlYWR5OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zdGF0ZSA9PT0gJ1BFTkRJTkcnIHx8IHRoaXMuX3N0YXRlID09PSAnQ09NUExFVEUnIHx8IHRoaXMuX3N0YXRlID09PSAnRkFJTEVEJyk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIgc3RhcnQuIEZpbGVzIHRvIGxvYWQ6JywgdGhpcy5saXN0LnNpemUpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnRzLkxPQURFUl9TVEFSVF9FVkVOVCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IExPQURJTkc7XG5cbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmluZmxpZ2h0LmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9hZFF1ZXVlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlUHJvZ3Jlc3M6IGZ1bmN0aW9uICgpXG4gICAge1xuXG4gICAgfSxcblxuICAgIHByb2Nlc3NMb2FkUXVldWU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQmFzZUxvYWRlciBwcm9jZXNzTG9hZFF1ZXVlJywgdGhpcy5saXN0LnNpemUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5saXN0LmVhY2goZnVuY3Rpb24gKGZpbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFX0NPTlNULlBFTkRJTkcgJiYgX3RoaXMuaW5mbGlnaHQuc2l6ZSA8IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBRERFRCBUTyBRVUVVRTonLCBmaWxlLmtleSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5pbmZsaWdodC5hZGQoZmlsZSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0LmRlbGV0ZShmaWxlKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRGaWxlKGZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXMuaW5mbGlnaHQuc2l6ZSA9PT0gX3RoaXMubWF4UGFyYWxsZWxEb3dubG9hZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gIFRlbGxzIHRoZSBTZXQgaXRlcmF0b3IgdG8gYWJvcnRcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgLy8gIHByaXZhdGVcbiAgICBsb2FkRmlsZTogZnVuY3Rpb24gKGZpbGUpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORycsIGZpbGUua2V5KTtcblxuICAgICAgICAvLyAgSWYgdGhlIGZpbGUgZG9lc24ndCBoYXZlIGl0cyBvd24gY3Jvc3NPcmlnaW4gc2V0LFxuICAgICAgICAvLyAgd2UnbGwgdXNlIHRoZSBMb2FkZXJzICh3aGljaCBpcyB1bmRlZmluZWQgYnkgZGVmYXVsdClcbiAgICAgICAgaWYgKCFmaWxlLmNyb3NzT3JpZ2luKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbGUubG9hZCh0aGlzLm5leHRGaWxlLmJpbmQodGhpcyksIHRoaXMuYmFzZVVSTCk7XG4gICAgfSxcblxuICAgIG5leHRGaWxlOiBmdW5jdGlvbiAocHJldmlvdXNGaWxlLCBzdWNjZXNzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xPQURFRDonLCBwcmV2aW91c0ZpbGUuc3JjLCBzdWNjZXNzKTtcblxuICAgICAgICAvLyAgTW92ZSB0aGUgZmlsZSB0aGF0IGp1c3QgbG9hZGVkIGZyb20gdGhlIGluZmxpZ2h0IGxpc3QgdG8gdGhlIHF1ZXVlIG9yIGZhaWxlZCBTZXRcblxuICAgICAgICBpZiAoc3VjY2VzcylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5hZGQocHJldmlvdXNGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmFkZChwcmV2aW91c0ZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmZsaWdodC5kZWxldGUocHJldmlvdXNGaWxlKTtcblxuICAgICAgICBpZiAodGhpcy5saXN0LnNpemUgPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV4dEZpbGUgLSBzdGlsbCBzb21ldGhpbmcgaW4gdGhlIGxpc3QnKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5mbGlnaHQuc2l6ZSA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHRGaWxlIGNhbGxpbmcgZmluaXNoZWRMb2FkaW5nJyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaGVkTG9hZGluZzogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyLmZpbmlzaGVkTG9hZGluZyBQUk9DRVNTSU5HJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdQUk9DRVNTSU5HJztcblxuICAgICAgICB2YXIgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblxuICAgICAgICBzdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gIFRoaXMgY291bGQgYmUgUHJvbWlzZSBiYXNlZCBhcyB3ZWxsLCBhbGxvd2luZyBmb3IgYXN5bmMgcHJvY2Vzc2luZ1xuXG4gICAgICAgIHRoaXMucXVldWUuZWFjaChmdW5jdGlvbiAoZmlsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZS5vblByb2Nlc3MoKTtcblxuICAgICAgICAgICAgLy8gIFRoZSBGaWxlIHNwZWNpZmljIHByb2Nlc3MgaGFuZGxlciBoYXMgcnVuXG4gICAgICAgICAgICAvLyAgTm93IHJ1biBhbnkgY3VzdG9tIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKGZpbGUucHJvY2Vzc0NhbGxiYWNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGUucHJvY2Vzc0NhbGxiYWNrKGZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWxlLm9uQ29tcGxldGUoKTtcblxuICAgICAgICAgICAgc3RvcmFnZS5hZGQoZmlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xuICAgICAgICB0aGlzLmluZmxpZ2h0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnTG9hZGVyIENvbXBsZXRlLiBMb2FkZWQ6Jywgc3RvcmFnZS5zaXplLCAnRmFpbGVkOicsIHRoaXMuZmFpbGVkLnNpemUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIENPTVBMRVRFJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdDT01QTEVURSc7XG5cbiAgICAgICAgLy8gIERpc3BhdGNoICdvbiBjb21wbGV0ZScgc2lnbmFscyBub3dcbiAgICB9LFxuXG4gICAgZ2V0TG9hZGVkRmlsZXMgKGdyb3VwID0gJycsIG91dHB1dCA9IFtdKSB7XG5cbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuXG4gICAgICAgIC8vICBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIGZpbGVzIHRoYXQgaGF2ZSBzdGF0ZSA9IENPTVBMRVRFICh3aGljaCBtZWFucyBsb2FkZWQgKyBwcm9jZXNzZWQpXG5cbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLnN0b3JhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFLkNPTVBMRVRFICYmIGZpbGUudGFnID09PSBncm91cCAmJiAodHlwZSAhPT0gJycgJiYgZmlsZS50eXBlID09PSB0eXBlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG5cbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xuICAgICAgICB0aGlzLmZhaWxlZC5jbGVhcigpO1xuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMudGFnID0gJyc7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcblxuICAgICAgICB0aGlzLnN0YXRlID0gJ1BFTkRJTkcnO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ0RFU1RST1lFRCc7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvQmFzZUxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ2YXIgR2V0VVJMID0gcmVxdWlyZSgnLi9HZXRVUkwnKTtcbnZhciBGSUxFX0NPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xudmFyIFhIUkxvYWRlciA9IHJlcXVpcmUoJy4vWEhSTG9hZGVyJyk7XG52YXIgWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL1hIUlNldHRpbmdzJyk7XG5cbnZhciBGaWxlID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgdXJsLCByZXNwb25zZVR5cGUpXG57XG4gICAgLy8gIGZpbGUgdHlwZSAoaW1hZ2UsIGpzb24sIGV0YykgZm9yIHNvcnRpbmcgd2l0aGluIHRoZSBMb2FkZXJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgLy8gIHVuaXF1ZSBjYWNoZSBrZXkgKHVuaXF1ZSB3aXRoaW4gaXRzIGZpbGUgdHlwZSlcbiAgICB0aGlzLmtleSA9IGtleTtcblxuICAgIC8vICBUaGUgVVJMIG9mIHRoZSBmaWxlLCBub3QgaW5jbHVkaW5nIGJhc2VVUkxcbiAgICB0aGlzLnVybCA9IHVybDtcblxuICAgIC8vICBTZXQgd2hlbiB0aGUgTG9hZGVyIGNhbGxzICdsb2FkJyBvbiB0aGlzIGZpbGVcbiAgICB0aGlzLnNyYyA9ICcnO1xuXG4gICAgdGhpcy54aHJTZXR0aW5ncyA9IFhIUlNldHRpbmdzKHJlc3BvbnNlVHlwZSk7XG5cbiAgICB0aGlzLnhockxvYWRlciA9IG51bGw7XG5cbiAgICB0aGlzLnN0YXRlID0gRklMRV9DT05TVC5QRU5ESU5HO1xuXG4gICAgLy8gIFNldCBieSBvblByb2dyZXNzIChpZiBsb2FkaW5nIHZpYSBYSFIpXG4gICAgdGhpcy5ieXRlc1RvdGFsID0gMDtcbiAgICB0aGlzLmJ5dGVzTG9hZGVkID0gLTE7XG4gICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSAtMTtcblxuICAgIC8vICBGb3IgQ09ScyBiYXNlZCBsb2FkaW5nLlxuICAgIC8vICBJZiB0aGlzIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBGaWxlIHdpbGwgY2hlY2sgQmFzZUxvYWRlci5jcm9zc09yaWdpbiBhbmQgdXNlIHRoYXQgKGlmIHNldClcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gIFRoZSBhY3R1YWwgcHJvY2Vzc2VkIGZpbGUgZGF0YVxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcblxuICAgIC8vICBNdWx0aXBhcnQgZmlsZT8gKGkuZS4gYW4gYXRsYXMgYW5kIGl0cyBqc29uKVxuICAgIHRoaXMubXVsdGlwYXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGlua0ZpbGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbn07XG5cbkZpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsZTtcblxuRmlsZS5wcm90b3R5cGUgPSB7XG5cbiAgICByZXNldFhIUjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9ubG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy54aHJMb2FkZXIub25wcm9ncmVzcyA9IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgLy8gIENhbGxlZCB3aGVuIHRoZSBJbWFnZSBsb2Fkc1xuICAgIC8vICBQcm9ncmVzc0V2ZW50XG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoZXZlbnQpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9hZGVkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgICAvLyB0aGlzLm9uU3RhdGVDaGFuZ2UoTE9BRElORyk7XG5cbiAgICAgICAgdGhpcy5yZXNldFhIUigpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChldmVudClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBlcnJvcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFhIUigpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoZXZlbnQpXG4gICAge1xuICAgICAgICB0aGlzLmJ5dGVzTG9hZGVkID0gZXZlbnQubG9hZGVkO1xuICAgICAgICB0aGlzLmJ5dGVzVG90YWwgPSBldmVudC50b3RhbDtcblxuICAgICAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZSA9IE1hdGgubWluKCh0aGlzLmJ5dGVzTG9hZGVkIC8gdGhpcy5ieXRlc1RvdGFsKSwgMSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZXJjZW50Q29tcGxldGUgKyAnJSAoJyArIHRoaXMuYnl0ZXNMb2FkZWQgKyAnIGJ5dGVzKScpO1xuICAgIH0sXG5cbiAgICBvblByb2Nlc3M6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygncHJvY2VzcyB0aGUgaW1hZ2UnKTtcbiAgICB9LFxuXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBjb21wbGV0ZWQgYW5kIGFkZGVkIHRvIHRoZSBsb2FkZXIgc3RvcmUnKTtcbiAgICB9LFxuXG4gICAgLy8gIENhbGxlZCBieSB0aGUgTG9hZGVyLCBzdGFydHMgdGhlIGFjdHVhbCBmaWxlIGRvd25sb2FkaW5nXG4gICAgbG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrLCBiYXNlVVJMLCBnbG9iYWxYSFIpXG4gICAge1xuICAgICAgICBpZiAoYmFzZVVSTCA9PT0gdW5kZWZpbmVkKSB7IGJhc2VVUkwgPSAnJzsgfVxuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgICAgICB0aGlzLnNyYyA9IEdldFVSTCh0aGlzLCBiYXNlVVJMKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORzInLCB0aGlzLnNyYyk7XG5cbiAgICAgICAgdGhpcy54aHJMb2FkZXIgPSBYSFJMb2FkZXIodGhpcywgZ2xvYmFsWEhSKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvRmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL0ZpbGUuanMiLCJ2YXIgR2V0VVJMID0gZnVuY3Rpb24gKGZpbGUsIGJhc2VVUkwpXG57XG4gICAgaWYgKCFmaWxlLnVybClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS51cmwubWF0Y2goL14oPzpibG9iOnxkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98XFwvXFwvKS8pKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZpbGUudXJsO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm4gYmFzZVVSTCArIGZpbGUucGF0aCArIGZpbGUudXJsO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0VVJMO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL0dldFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xuXG4vLyAgVGFrZXMgdHdvIFhIUiBPYmplY3RzIGFuZCBjcmVhdGVzIGEgbmV3IG9iamVjdFxuXG4vLyAgVGhlIG5ldyBvYmplY3QgaXMgYmFzZWQgb24gZ2xvYmFsIGluaXRpYWxseSwgYnV0IGFueSBzZXR0aW5nIGluXG4vLyAgbG9jYWwgb3ZlcnJpZGVzIHRoZSBnbG9iYWwgdmFsdWUuXG5cbnZhciBNZXJnZVhIUlNldHRpbmdzID0gZnVuY3Rpb24gKGdsb2JhbCwgbG9jYWwpXG57XG4gICAgdmFyIG91dHB1dCA9IChnbG9iYWwgPT09IHVuZGVmaW5lZCkgPyBYSFJTZXR0aW5ncygpIDogT2JqZWN0LmFzc2lnbihnbG9iYWwpO1xuXG4gICAgaWYgKGxvY2FsKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgc2V0dGluZyBpbiBsb2NhbClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGxvY2FsW3NldHRpbmddICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W3NldHRpbmddID0gbG9jYWxbc2V0dGluZ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lcmdlWEhSU2V0dGluZ3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvTWVyZ2VYSFJTZXR0aW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanMiLCJ2YXIgTWVyZ2VYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vTWVyZ2VYSFJTZXR0aW5ncycpO1xuXG52YXIgWEhSTG9hZGVyID0gZnVuY3Rpb24gKGZpbGUsIGdsb2JhbFhIUlNldHRpbmdzKVxue1xuICAgIHZhciBjb25maWcgPSBNZXJnZVhIUlNldHRpbmdzKGdsb2JhbFhIUlNldHRpbmdzLCBmaWxlLnhoclNldHRpbmdzKTtcblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlLnNyYywgY29uZmlnLmFzeW5jLCBjb25maWcudXNlciwgY29uZmlnLnBhc3N3b3JkKTtcblxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBmaWxlLnhoclNldHRpbmdzLnJlc3BvbnNlVHlwZTtcbiAgICB4aHIudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgaWYgKGNvbmZpZy5oZWFkZXIgJiYgY29uZmlnLmhlYWRlclZhbHVlKVxuICAgIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoY29uZmlnLmhlYWRlciwgY29uZmlnLmhlYWRlclZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpXG4gICAge1xuICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShjb25maWcub3ZlcnJpZGVNaW1lVHlwZSk7XG4gICAgfVxuXG4gICAgLy8gQWZ0ZXIgYSBzdWNjZXNzZnVsIHJlcXVlc3QsIHRoZSB4aHIucmVzcG9uc2UgcHJvcGVydHkgd2lsbCBjb250YWluIHRoZSByZXF1ZXN0ZWQgZGF0YSBhcyBhIERPTVN0cmluZywgQXJyYXlCdWZmZXIsIEJsb2IsIG9yIERvY3VtZW50IChkZXBlbmRpbmcgb24gd2hhdCB3YXMgc2V0IGZvciByZXNwb25zZVR5cGUuKVxuXG4gICAgeGhyLm9ubG9hZCA9IGZpbGUub25Mb2FkLmJpbmQoZmlsZSk7XG4gICAgeGhyLm9uZXJyb3IgPSBmaWxlLm9uRXJyb3IuYmluZChmaWxlKTtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZpbGUub25Qcm9ncmVzcy5iaW5kKGZpbGUpO1xuXG4gICAgLy8gIFRoaXMgaXMgdGhlIG9ubHkgc3RhbmRhcmQgbWV0aG9kLCB0aGUgb25lcyBhYm92ZSBhcmUgYnJvd3NlciBhZGRpdGlvbnMgKG1heWJlIG5vdCB1bml2ZXJzYWw/KVxuICAgIC8vIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2VcblxuICAgIHhoci5zZW5kKCk7XG5cbiAgICByZXR1cm4geGhyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBYSFJMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvWEhSTG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvWEhSTG9hZGVyLmpzIiwidmFyIEV2ZW50ID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzL0V2ZW50Jyk7XG5cbnZhciBMb2FkZXJTdGFydEV2ZW50ID0gZnVuY3Rpb24gKGxvYWRlcilcbntcbiAgICBFdmVudC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG59O1xuXG5Mb2FkZXJTdGFydEV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTtcbkxvYWRlclN0YXJ0RXZlbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTG9hZGVyU3RhcnRFdmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXJTdGFydEV2ZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIExPQURFUl9TVEFSVF9FVkVOVDogcmVxdWlyZSgnLi9Mb2FkZXJTdGFydEV2ZW50JylcblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9ldmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9ldmVudHMvaW5kZXguanMiLCIvKipcbiogQHByb3BlcnR5IHtudW1iZXJ9IGMgLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIGMgPSAxO1xuXG4vKipcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMwIC0gSW50ZXJuYWwgdmFyLlxuKiBAcHJpdmF0ZVxuKi9cbnZhciBzMCA9IDA7XG5cbi8qKlxuKiBAcHJvcGVydHkge251bWJlcn0gczEgLSBJbnRlcm5hbCB2YXIuXG4qIEBwcml2YXRlXG4qL1xudmFyIHMxID0gMDtcblxuLyoqXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMiAtIEludGVybmFsIHZhci5cbiogQHByaXZhdGVcbiovXG52YXIgczIgPSAwO1xuXG4vKipcbiogQHByb3BlcnR5IHtBcnJheX0gc2lnbiAtIEludGVybmFsIHZhci5cbiogQHByaXZhdGVcbiovXG52YXIgc2lnbiA9IFsgLTEsIDEgXTtcblxuLyoqXG4qIFByaXZhdGUgcmFuZG9tIGhlbHBlci5cbipcbiogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNybmRcbiogQHByaXZhdGVcbiogQHJldHVybiB7bnVtYmVyfVxuKi9cbnZhciBybmQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciB0ID0gMjA5MTYzOSAqIHMwICsgYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG5cbiAgICBjID0gdCB8IDA7XG4gICAgczAgPSBzMTtcbiAgICBzMSA9IHMyO1xuICAgIHMyID0gdCAtIGM7XG5cbiAgICByZXR1cm4gczI7XG59O1xuXG4vKipcbiogSW50ZXJuYWwgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlZWQgaGFzaC5cbipcbiogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNoYXNoXG4qIEBwcml2YXRlXG4qIEBwYXJhbSB7YW55fSBkYXRhXG4qIEByZXR1cm4ge251bWJlcn0gaGFzaGVkIHZhbHVlLlxuKi9cbnZhciBoYXNoID0gZnVuY3Rpb24gKGRhdGEpXG57XG4gICAgdmFyIGgsIGksIG47XG4gICAgbiA9IDB4ZWZjODI0OWQ7XG4gICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsvLyAyXjMyXG4gICAgfVxuXG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7Ly8gMl4tMzJcbn07XG5cblxudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSBmdW5jdGlvbiAoc2VlZHMpXG57XG4gICAgaWYgKHR5cGVvZiBzZWVkcyA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgICB0aGlzLnN0YXRlKHNlZWRzKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3coc2VlZHMpO1xuICAgIH1cbn07XG5cblJhbmRvbURhdGFHZW5lcmF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmFuZG9tRGF0YUdlbmVyYXRvcjtcblxuUmFuZG9tRGF0YUdlbmVyYXRvci5wcm90b3R5cGUgPSB7XG5cbiAgICAvKipcbiAgICAqIFJlc2V0IHRoZSBzZWVkIG9mIHRoZSByYW5kb20gZGF0YSBnZW5lcmF0b3IuXG4gICAgKlxuICAgICogX05vdGVfOiB0aGUgc2VlZCBhcnJheSBpcyBvbmx5IHByb2Nlc3NlZCB1cCB0byB0aGUgZmlyc3QgYHVuZGVmaW5lZGAgKG9yIGBudWxsYCkgdmFsdWUsIHNob3VsZCBzdWNoIGJlIHByZXNlbnQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzb3dcbiAgICAqIEBwYXJhbSB7YW55W119IHNlZWRzIC0gVGhlIGFycmF5IG9mIHNlZWRzOiB0aGUgYHRvU3RyaW5nKClgIG9mIGVhY2ggdmFsdWUgaXMgdXNlZC5cbiAgICAqL1xuICAgIHNvdzogZnVuY3Rpb24gKHNlZWRzKVxuICAgIHtcbiAgICAgICAgLy8gQWx3YXlzIHJlc2V0IHRvIGRlZmF1bHQgc2VlZFxuICAgICAgICBzMCA9IGhhc2goJyAnKTtcbiAgICAgICAgczEgPSBoYXNoKHMwKTtcbiAgICAgICAgczIgPSBoYXNoKHMxKTtcbiAgICAgICAgYyA9IDE7XG5cbiAgICAgICAgaWYgKCFzZWVkcylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgYW55IHNlZWRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VlZHMubGVuZ3RoICYmIChzZWVkc1tpXSAhPSBudWxsKTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VlZCA9IHNlZWRzW2ldO1xuXG4gICAgICAgICAgICBzMCAtPSBoYXNoKHNlZWQpO1xuICAgICAgICAgICAgczAgKz0gfn4oczAgPCAwKTtcbiAgICAgICAgICAgIHMxIC09IGhhc2goc2VlZCk7XG4gICAgICAgICAgICBzMSArPSB+fihzMSA8IDApO1xuICAgICAgICAgICAgczIgLT0gaGFzaChzZWVkKTtcbiAgICAgICAgICAgIHMyICs9IH5+KHMyIDwgMCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxuICAgICovXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIC8vIDJeMzJcbiAgICAgICAgcmV0dXJuIHJuZCgpICogMHgxMDAwMDAwMDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNmcmFjXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICAqL1xuICAgIGZyYWM6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyAyXi01M1xuICAgICAgICByZXR1cm4gcm5kKCkgKyAocm5kKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMl4zMi5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxuICAgICovXG4gICAgcmVhbDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXIoKSArIHRoaXMuZnJhYygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VySW5SYW5nZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICovXG4gICAgaW50ZWdlckluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmVhbEluUmFuZ2UoMCwgbWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXG4gICAgKiBUaGlzIG1ldGhvZCBpcyBhbiBhbGlhcyBmb3IgUmFuZG9tRGF0YUdlbmVyYXRvci5pbnRlZ2VySW5SYW5nZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2JldHdlZW5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAqL1xuICAgIGJldHdlZW46IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXJJblJhbmdlKG1pbiwgbWF4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyZWFsSW5SYW5nZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICovXG4gICAgcmVhbEluUmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyYWMoKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI25vcm1hbFxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxuICAgICovXG4gICAgbm9ybWFsOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEgLSAoMiAqIHRoaXMuZnJhYygpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgdmFsaWQgUkZDNDEyMiB2ZXJzaW9uNCBJRCBoZXggc3RyaW5nIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTMwODM2OFxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjdXVpZFxuICAgICogQHJldHVybiB7c3RyaW5nfSBBIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZ1xuICAgICovXG4gICAgdXVpZDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBhID0gJyc7XG4gICAgICAgIHZhciBiID0gJyc7XG5cbiAgICAgICAgZm9yIChiID0gYSA9ICcnOyBhKysgPCAzNjsgYiArPX5hICUgNSB8IGEgKiAzJjQgPyAoYV4xNSA/IDhedGhpcy5mcmFjKCkgKiAoYV4yMCA/IDE2IDogNCkgOiA0KS50b1N0cmluZygxNikgOiAnLScpXG4gICAgICAgIHtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNwaWNrXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxuICAgICovXG4gICAgcGljazogZnVuY3Rpb24gKGFycmF5KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W3RoaXMuaW50ZWdlckluUmFuZ2UoMCwgYXJyYXkubGVuZ3RoIC0gMSldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSBzaWduIHRvIGJlIHVzZWQgd2l0aCBtdWx0aXBsaWNhdGlvbiBvcGVyYXRvci5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3NpZ25cbiAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgb3IgKzEuXG4gICAgKi9cbiAgICBzaWduOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGljayhzaWduKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIG1lbWJlciBvZiBgYXJyYXlgLCBmYXZvcmluZyB0aGUgZWFybGllciBlbnRyaWVzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijd2VpZ2h0ZWRQaWNrXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxuICAgICovXG4gICAgd2VpZ2h0ZWRQaWNrOiBmdW5jdGlvbiAoYXJyYXkpXG4gICAge1xuICAgICAgICByZXR1cm4gYXJyYXlbfn4oTWF0aC5wb3codGhpcy5mcmFjKCksIDIpICogKGFycmF5Lmxlbmd0aCAtIDEpICsgMC41KV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJhbmRvbSB0aW1lc3RhbXAgYmV0d2VlbiBtaW4gYW5kIG1heCwgb3IgYmV0d2VlbiB0aGUgYmVnaW5uaW5nIG9mIDIwMDAgYW5kIHRoZSBlbmQgb2YgMjAyMCBpZiBtaW4gYW5kIG1heCBhcmVuJ3Qgc3BlY2lmaWVkLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjdGltZXN0YW1wXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgKi9cbiAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uIChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKG1pbiB8fCA5NDY2ODQ4MDAwMDAsIG1heCB8fCAxNTc3ODYyMDAwMDAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGFuZ2xlIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjYW5nbGVcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxuICAgICovXG4gICAgYW5nbGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZSgtMTgwLCAxODApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSByYW5kb20gcm90YXRpb24gaW4gcmFkaWFucywgYmV0d2VlbiAtMy4xNDEgYW5kIDMuMTQxXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNyb3RhdGlvblxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAtMy4xNDEgYW5kIDMuMTQxXG4gICAgKi9cbiAgICByb3RhdGlvbjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKC0zLjE0MTU5MjY1MzU4OTc5MywgMy4xNDE1OTI2NTM1ODk3OTMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEdldHMgb3IgU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci4gVGhpcyBhbGxvd3MgeW91IHRvIHJldGFpbiB0aGUgdmFsdWVzXG4gICAgKiB0aGF0IHRoZSBnZW5lcmF0b3IgaXMgdXNpbmcgYmV0d2VlbiBnYW1lcywgaS5lLiBpbiBhIGdhbWUgc2F2ZSBmaWxlLlxuICAgICpcbiAgICAqIFRvIHNlZWQgdGhpcyBnZW5lcmF0b3Igd2l0aCBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgeW91IGNhbiBwYXNzIGl0IGFzIHRoZVxuICAgICogYHNlZWRgIHZhbHVlIGluIHlvdXIgZ2FtZSBjb25maWcsIG9yIGNhbGwgdGhpcyBtZXRob2QgZGlyZWN0bHkgYWZ0ZXIgUGhhc2VyIGhhcyBib290ZWQuXG4gICAgKlxuICAgICogQ2FsbCB0aGlzIG1ldGhvZCB3aXRoIG5vIHBhcmFtZXRlcnMgdG8gcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICpcbiAgICAqIElmIHByb3ZpZGluZyBhIHN0YXRlIGl0IHNob3VsZCBtYXRjaCB0aGUgc2FtZSBmb3JtYXQgdGhhdCB0aGlzIG1ldGhvZFxuICAgICogcmV0dXJucywgd2hpY2ggaXMgYSBzdHJpbmcgd2l0aCBhIGhlYWRlciBgIXJuZGAgZm9sbG93ZWQgYnkgdGhlIGBjYCxcbiAgICAqIGBzMGAsIGBzMWAgYW5kIGBzMmAgdmFsdWVzIHJlc3BlY3RpdmVseSwgZWFjaCBjb21tYS1kZWxpbWl0ZWQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzdGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV0gLSBHZW5lcmF0b3Igc3RhdGUgdG8gYmUgc2V0LlxuICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICAgICovXG4gICAgc3RhdGU6IGZ1bmN0aW9uIChzdGF0ZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdzdHJpbmcnICYmIHN0YXRlLm1hdGNoKC9eIXJuZC8pKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIGMgPSBwYXJzZUZsb2F0KHN0YXRlWzFdKTtcbiAgICAgICAgICAgIHMwID0gcGFyc2VGbG9hdChzdGF0ZVsyXSk7XG4gICAgICAgICAgICBzMSA9IHBhcnNlRmxvYXQoc3RhdGVbM10pO1xuICAgICAgICAgICAgczIgPSBwYXJzZUZsb2F0KHN0YXRlWzRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbICchcm5kJywgYywgczAsIHMxLCBzMiBdLmpvaW4oJywnKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tRGF0YUdlbmVyYXRvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL21hdGgvcmFuZG9tLWRhdGEtZ2VuZXJhdG9yL1JhbmRvbURhdGFHZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5mb3JFYWNoXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcbiovXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKVxue1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc0FyZyAqLylcbiAgICB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICBpZiAodGhpcyA9PT0gdm9pZCAwIHx8IHRoaXMgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmZvckVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XG4qL1xuaWYgKCFBcnJheS5pc0FycmF5KVxue1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvQXJyYXkuaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXG5pZiAoIU1hdGgudHJ1bmMpIHtcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xuICAgIH07XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuKi9cbmlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcblxuICAgIC8qIGpzaGludCBmcmVlemU6IGZhbHNlICovXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMsIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGJvdW5kQXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHkodGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gdGhpcyA6IHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib3VuZC5wcm90b3R5cGUgPSAoZnVuY3Rpb24gRihwcm90bykge1xuICAgICAgICAgICAgICAgIGlmIChwcm90bylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEYpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLyoganNoaW50IHN1cGVybmV3OiB0cnVlICovXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSh0YXJnZXQucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XG4qL1xuaWYgKCFBcnJheS5pc0FycmF5KVxue1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbi8qKlxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5mb3JFYWNoXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcbiovXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mb3JFYWNoKVxue1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oZnVuIC8qLCB0aGlzQXJnICovKVxuICAgIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZnVuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiogTG93LWJ1ZGdldCBGbG9hdDMyQXJyYXkga25vY2stb2ZmLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUDIuanMgaW4gSUU5XG4qIFNvdXJjZTogaHR0cDovL3d3dy5odG1sNWdhbWVkZXZzLmNvbS90b3BpYy81OTg4LXBoYXNlci0xMi1pZTkvXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcbiovXG5pZiAodHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwib2JqZWN0XCIpXG57XG4gICAgdmFyIENoZWFwQXJyYXkgPSBmdW5jdGlvbih0eXBlKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgICAgIHdpbmRvd1t0eXBlXSA9IGZ1bmN0aW9uKGFyZykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKGFyZykgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEFycmF5LmNhbGwodGhpcywgYXJnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gYXJnW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgIHdpbmRvd1t0eXBlXS5jb25zdHJ1Y3RvciA9IHdpbmRvd1t0eXBlXTtcbiAgICB9O1xuXG4gICAgQ2hlYXBBcnJheSgnRmxvYXQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQzMkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIENoZWFwQXJyYXkoJ0ludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnQXJyYXlCdWZmZXInKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG59XG5cbi8qKlxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcbiAqL1xuaWYgKCF3aW5kb3cuY29uc29sZSlcbntcbiAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xufVxuXG4vKipcbiAqIHBlcmZvcm1hbmNlLm5vd1xuICovXG4oZnVuY3Rpb24oKXtcblxuICBpZiAoXCJwZXJmb3JtYW5jZVwiIGluIHdpbmRvdyA9PSBmYWxzZSkge1xuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XG4gIH1cbiAgXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfSk7XG5cbiAgaWYgKFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlID09IGZhbHNlKVxuICB7XG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XG4gICAgXG4gICAgaWYgKHBlcmZvcm1hbmNlLnRpbWluZyAmJiBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KXtcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcbiAgICB9XG5cbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIG5vd09mZnNldDtcbiAgICB9XG4gIH1cblxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vLyBFUzYgTWF0aC50cnVuYyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmNcbmlmICghTWF0aC50cnVuYykge1xuICAgIE1hdGgudHJ1bmMgPSBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gICAgICAgIHJldHVybiB4IDwgMCA/IE1hdGguY2VpbCh4KSA6IE1hdGguZmxvb3IoeCk7XG4gICAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9NYXRoLnRydW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG5cbi8qKlxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcbiogU291cmNlOiBodHRwOi8vd3d3Lmh0bWw1Z2FtZWRldnMuY29tL3RvcGljLzU5ODgtcGhhc2VyLTEyLWllOS9cbiogQ2FtZXJvbiBGb2FsZSAoaHR0cDovL3d3dy5raWJpYnUuY29tKVxuKi9cbmlmICh0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdy5VaW50MzJBcnJheSAhPT0gXCJvYmplY3RcIilcbntcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXG4gICAge1xuICAgICAgICB2YXIgcHJvdG8gPSBuZXcgQXJyYXkoKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICAgICAgd2luZG93W3R5cGVdID0gZnVuY3Rpb24oYXJnKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBcnJheS5jYWxsKHRoaXMsIGFyZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gYXJnLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvd1t0eXBlXS5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xuICAgIH07XG5cbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnVWludDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnVWludDE2QXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBDaGVhcEFycmF5KCdBcnJheUJ1ZmZlcicpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4gKiBBbHNvIGZpeCBmb3IgdGhlIGFic2VudCBjb25zb2xlIGluIElFOVxuICovXG5pZiAoIXdpbmRvdy5jb25zb2xlKVxue1xuICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgd2luZG93LmNvbnNvbGUubG9nID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xuICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvY29uc29sZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4gKiBwZXJmb3JtYW5jZS5ub3dcbiAqL1xuKGZ1bmN0aW9uKCl7XG5cbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xuICB9XG4gIFxuICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH0pO1xuXG4gIGlmIChcIm5vd1wiIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA9PSBmYWxzZSlcbiAge1xuICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xuICAgIFxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XG4gICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XG4gICAgfVxuXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpe1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBub3dPZmZzZXQ7XG4gICAgfVxuICB9XG5cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcGVyZm9ybWFuY2Uubm93LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLy8gUmVmZXJlbmNlczpcbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNTc5NjcxXG4vLyBodHRwOi8vdXBkYXRlcy5odG1sNXJvY2tzLmNvbS8yMDEyLzA1L3JlcXVlc3RBbmltYXRpb25GcmFtZS1BUEktbm93LXdpdGgtc3ViLW1pbGxpc2Vjb25kLXByZWNpc2lvblxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vdGltaGFsbC80MDc4NjE0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvdHJlZS9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuXG4vLyBFeHBlY3RlZCB0byBiZSB1c2VkIHdpdGggQnJvd3NlcmZpeVxuLy8gQnJvd3NlcmlmeSBhdXRvbWF0aWNhbGx5IGRldGVjdHMgdGhlIHVzZSBvZiBgZ2xvYmFsYCBhbmQgcGFzc2VzIHRoZVxuLy8gY29ycmVjdCByZWZlcmVuY2Ugb2YgYGdsb2JhbGAsIGBzZWxmYCwgYW5kIGZpbmFsbHkgYHdpbmRvd2BcblxuLy8gRGF0ZS5ub3dcbmlmICghKERhdGUubm93ICYmIERhdGUucHJvdG90eXBlLmdldFRpbWUpKSB7XG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xufVxuXG4vLyBwZXJmb3JtYW5jZS5ub3dcbmlmICghKGdsb2JhbC5wZXJmb3JtYW5jZSAmJiBnbG9iYWwucGVyZm9ybWFuY2Uubm93KSkge1xuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICghZ2xvYmFsLnBlcmZvcm1hbmNlKSB7XG4gICAgICAgIGdsb2JhbC5wZXJmb3JtYW5jZSA9IHt9O1xuICAgIH1cbiAgICBnbG9iYWwucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9O1xufVxuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbnZhciBsYXN0VGltZSA9IERhdGUubm93KCk7XG52YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG5cbmZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgZ2xvYmFsW3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG59XG5cbmlmICghZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRlbGF5ID0gMTYgKyBsYXN0VGltZSAtIGN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGlmIChkZWxheSA8IDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY2FsbGJhY2socGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfTtcbn1cblxuaWYgKCFnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xuXG4vKipcbiogQSBCYXNlIFN0YXRlIENsYXNzLlxuKlxuKiBAY2xhc3MgUGhhc2VyLlN0YXRlXG4qIEBjb25zdHJ1Y3RvclxuKi9cbnZhciBTdGF0ZSA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgLy8gIFRoZSBwcm9wZXJ0aWVzIGEgU3RhdGUgKm11c3QqIGhhdmUsIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgd2l0aG91dCBicmVha2luZyBpdDpcblxuICAgIHRoaXMuZ2FtZSA9IG51bGw7XG5cbiAgICAvLyAgTWF5YmUganVzdCBhbiBvYmplY3Q/IERvZXNuJ3QgaGF2ZSB0byBpbnN0YW50aWF0ZSBJIGRvbid0IHRoaW5rIC4uLlxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcywgY29uZmlnKTtcblxuICAgIHRoaXMuc3lzID0gbmV3IFN5c3RlbXModGhpcywgY29uZmlnKTtcblxuICAgIC8vICBSZWZlcmVuY2UgdG8gc3lzLmNoaWxkcmVuLCBzZXQgZHVyaW5nIHN5cy5pbml0IG9ubHlcbiAgICB0aGlzLmNoaWxkcmVuO1xufTtcblxuU3RhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGU7XG5cblN0YXRlLnByb3RvdHlwZSA9IHtcblxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgIH0sXG5cbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9LFxuXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgIH0sXG5cbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3RhdGUuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XG52YXIgU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzJyk7XG52YXIgU3lzdGVtcyA9IHJlcXVpcmUoJy4vU3lzdGVtcycpO1xudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcblxuLyoqXG4qIFRoZSBTdGF0ZSBNYW5hZ2VyIGlzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nLCBzZXR0aW5nIHVwIGFuZCBzd2l0Y2hpbmcgZ2FtZSBzdGF0ZXMuXG4qXG4qIEBjbGFzcyBQaGFzZXIuU3RhdGVNYW5hZ2VyXG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qL1xudmFyIFN0YXRlTWFuYWdlciA9IGZ1bmN0aW9uIChnYW1lLCBzdGF0ZUNvbmZpZylcbntcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgLy8gIEV2ZXJ5dGhpbmcga2VwdCBpbiBoZXJlXG4gICAgdGhpcy5rZXlzID0ge307XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcblxuICAgIC8vICBPbmx5IGFjdGl2ZSBzdGF0ZXMgYXJlIGtlcHQgaW4gaGVyZVxuICAgIHRoaXMuYWN0aXZlID0gW107XG5cbiAgICB0aGlzLl9wZW5kaW5nID0gW107XG5cbiAgICBpZiAoc3RhdGVDb25maWcpXG4gICAge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZUNvbmZpZykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVDb25maWcubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gIFRoZSBpID09PSAwIHBhcnQganVzdCBzdGFydHMgdGhlIGZpcnN0IFN0YXRlIGdpdmVuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWdbaV0sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogKGkgPT09IDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZyxcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXRlTWFuYWdlcjtcblxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qKlxuICAgICogVGhlIEJvb3QgaGFuZGxlciBpcyBjYWxsZWQgYnkgUGhhc2VyLkdhbWUgd2hlbiBpdCBmaXJzdCBzdGFydHMgdXAuXG4gICAgKiBUaGUgcmVuZGVyZXIgaXMgYXZhaWxhYmxlIGJ5IG5vdy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5TdGF0ZU1hbmFnZXIjYm9vdFxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICAvLyB0aGlzLmdhbWUub25QYXVzZS5hZGQodGhpcy5wYXVzZSwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblJlc3VtZS5hZGQodGhpcy5yZXN1bWUsIHRoaXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYm9vdCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fcGVuZGluZ1tpXTtcblxuICAgICAgICAgICAgdGhpcy5hZGQoZW50cnkua2V5LCBlbnRyeS5zdGF0ZSwgZW50cnkuYXV0b1N0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBDbGVhciB0aGUgcGVuZGluZyBsaXN0XG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcbiAgICB9LFxuXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmICgha2V5KSB7IGtleSA9ICdkZWZhdWx0JzsgfVxuXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBrZXkgPSBzdGF0ZUNvbmZpZy5zZXR0aW5ncy5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnb2JqZWN0JyAmJiBzdGF0ZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgna2V5JykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleSA9IHN0YXRlQ29uZmlnLmtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBCeSB0aGlzIHBvaW50IGl0J3MgZWl0aGVyICdkZWZhdWx0JyBvciBleHRyYWN0ZWQgZnJvbSB0aGUgU3RhdGVcblxuICAgICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBhIFN0YXRlIHdpdGggZHVwbGljYXRlIGtleTogJyArIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQWRkcyBhIG5ldyBTdGF0ZSBpbnRvIHRoZSBTdGF0ZU1hbmFnZXIuIFlvdSBtdXN0IGdpdmUgZWFjaCBTdGF0ZSBhIHVuaXF1ZSBrZXkgYnkgd2hpY2ggeW91J2xsIGlkZW50aWZ5IGl0LlxuICAgICogVGhlIFN0YXRlIGNhbiBiZSBlaXRoZXIgYSBQaGFzZXIuU3RhdGUgb2JqZWN0IChvciBhbiBvYmplY3QgdGhhdCBleHRlbmRzIGl0KSwgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCBvciBhIGZ1bmN0aW9uLlxuICAgICogSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiBhIG5ldyBzdGF0ZSBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkIGJ5IGNhbGxpbmcgaXQuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2FkZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEEgdW5pcXVlIGtleSB5b3UgdXNlIHRvIHJlZmVyZW5jZSB0aGlzIHN0YXRlLCBpLmUuIFwiTWFpbk1lbnVcIiwgXCJMZXZlbDFcIi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLlN0YXRlfG9iamVjdHxmdW5jdGlvbn0gc3RhdGUgIC0gVGhlIHN0YXRlIHlvdSB3YW50IHRvIHN3aXRjaCB0by5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TdGFydD1mYWxzZV0gIC0gSWYgdHJ1ZSB0aGUgU3RhdGUgd2lsbCBiZSBzdGFydGVkIGltbWVkaWF0ZWx5IGFmdGVyIGFkZGluZyBpdC5cbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKGtleSwgc3RhdGVDb25maWcsIGF1dG9TdGFydClcbiAgICB7XG4gICAgICAgIGlmIChhdXRvU3RhcnQgPT09IHVuZGVmaW5lZCkgeyBhdXRvU3RhcnQgPSBmYWxzZTsgfVxuXG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9wZW5kaW5nLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXG4gICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiBhdXRvU3RhcnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyIG5vdCB5ZXQgYm9vdGVkLCBhZGRpbmcgdG8gbGlzdCcsIHRoaXMuX3BlbmRpbmcubGVuZ3RoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0gdGhpcy5nZXRLZXkoa2V5LCBzdGF0ZUNvbmZpZyk7XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIGluc3RhbmNlJywga2V5KTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIHN0YXRlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIG9iamVjdCcsIGtleSk7XG5cbiAgICAgICAgICAgIHN0YXRlQ29uZmlnLmtleSA9IGtleTtcblxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbU9iamVjdChrZXksIHN0YXRlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIuYWRkIGZyb20gZnVuY3Rpb24nLCBrZXkpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb24oa2V5LCBzdGF0ZUNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IG5ld1N0YXRlO1xuXG4gICAgICAgIHRoaXMuc3RhdGVzLnB1c2gobmV3U3RhdGUpO1xuXG4gICAgICAgIGlmIChhdXRvU3RhcnQgfHwgbmV3U3RhdGUuc2V0dGluZ3MuYWN0aXZlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlzQm9vdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlOiBmdW5jdGlvbiAoa2V5LCBuZXdTdGF0ZSlcbiAgICB7XG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3Mua2V5ID0ga2V5O1xuXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbU9iamVjdDogZnVuY3Rpb24gKGtleSwgc3RhdGVDb25maWcpXG4gICAge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgU3RhdGUoc3RhdGVDb25maWcpO1xuXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZSlcbiAgICB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBzdGF0ZSgpO1xuXG4gICAgICAgIGlmIChuZXdTdGF0ZSBpbnN0YW5jZW9mIFN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKG5ld1N0YXRlLCBrZXkpO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3lzID0gbmV3IFN5c3RlbXMobmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5XRUJHTClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgRGVmYXVsdCByZXF1aXJlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXR1cENhbGxiYWNrczogZnVuY3Rpb24gKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmIChzdGF0ZUNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7IHN0YXRlQ29uZmlnID0gbmV3U3RhdGU7IH1cblxuICAgICAgICAvLyAgRXh0cmFjdCBjYWxsYmFja3Mgb3Igc2V0IE5PT1BcblxuICAgICAgICBuZXdTdGF0ZS5pbml0ID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdpbml0JywgTk9PUCk7XG4gICAgICAgIG5ld1N0YXRlLnByZWxvYWQgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3ByZWxvYWQnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUuY3JlYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdjcmVhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUuc2h1dGRvd24gPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3NodXRkb3duJywgTk9PUCk7XG5cbiAgICAgICAgbmV3U3RhdGUucHJlVXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwcmVVcGRhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUudXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICd1cGRhdGUnLCBOT09QKTtcbiAgICAgICAgbmV3U3RhdGUucG9zdFVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncG9zdFVwZGF0ZScsIE5PT1ApO1xuICAgICAgICBuZXdTdGF0ZS5yZW5kZXIgPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3JlbmRlcicsIE5PT1ApO1xuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcjogZnVuY3Rpb24gKG5ld1N0YXRlKVxuICAgIHtcbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS5zZXR0aW5ncy54O1xuICAgICAgICB2YXIgeSA9IG5ld1N0YXRlLnNldHRpbmdzLnk7XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID09PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3Mud2lkdGggPSB0aGlzLmdhbWUuY29uZmlnLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodCA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmhlaWdodCA9IHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZHRoID0gbmV3U3RhdGUuc2V0dGluZ3Mud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBuZXdTdGF0ZS5zZXR0aW5ncy5oZWlnaHQ7XG5cbiAgICAgICAgLy8gbmV3U3RhdGUuc3lzLmZibyA9IHRoaXMuZ2FtZS5yZW5kZXJlci5jcmVhdGVGQk8obmV3U3RhdGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcbiAgICB9LFxuXG4gICAgZ2V0U3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpO1xuICAgIH0sXG5cbiAgICBnZXRBY3RpdmVTdGF0ZUluZGV4OiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVtpXS5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9LFxuXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIChzdGF0ZSAmJiBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUuaW5kZXhPZihzdGF0ZSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChrZXkpXG4gICAge1xuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5pc0Jvb3RlZClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlciBub3QgeWV0IGJvb3RlZCwgc2V0dGluZyBhdXRvU3RhcnQgb24gcGVuZGluZyBsaXN0Jyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGVuZGluZy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9wZW5kaW5nW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuYXV0b1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcblxuICAgICAgICBpZiAoc3RhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vICBBbHJlYWR5IHN0YXJ0ZWQ/IE5vdGhpbmcgbW9yZSB0byBkbyBoZXJlIC4uLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoa2V5KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vICArIGFyZ3VtZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlLmluaXQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaW5pdC5jYWxsKHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlLnByZWxvYWQgJiYgc3RhdGUuc3lzLmxvYWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQucmVzZXQoKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLnByZWxvYWQuY2FsbChzdGF0ZSwgdGhpcy5nYW1lKTtcblxuICAgICAgICAgICAgICAgIC8vICBJcyB0aGUgbG9hZGVyIGVtcHR5P1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubG9hZC5saXN0LnNpemUgPT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wdHkgcXVldWUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENyZWF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHN0YXJ0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIFN0YXJ0IHRoZSBsb2FkZXIgZ29pbmcgYXMgd2UgaGF2ZSBzb21ldGhpbmcgaW4gdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLmxvYWRDb21wbGV0ZSwgdGhpcywgMCwgc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkJyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgTm8gcHJlbG9hZD8gVGhlbiB0aGVyZSB3YXMgbm90aGluZyB0byBsb2FkIGVpdGhlclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZENvbXBsZXRlOiBmdW5jdGlvbiAoc3RhdGUpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZENvbXBsZXRlJyk7XG5cbiAgICAgICAgLy8gIE1ha2Ugc3VyZSB0byBkbyBsb2FkLXVwZGF0ZSBvbmUgbGFzdCB0aW1lIGJlZm9yZSBzdGF0ZSBpcyBzZXQgdG8gX2NyZWF0ZWRcblxuICAgICAgICAvLyAgU3RvcCBkb2luZyB0aGlzIC4uLlxuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoJ2xvYWRVcGRhdGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUubG9hZFVwZGF0ZS5jYWxsKHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xuICAgIH0sXG5cbiAgICBzdGFydENyZWF0ZTogZnVuY3Rpb24gKHN0YXRlKVxuICAgIHtcbiAgICAgICAgaWYgKHN0YXRlLmNyZWF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUuY3JlYXRlLmNhbGwoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIEluc2VydCBhdCB0aGUgY29ycmVjdCBpbmRleCwgb3IgaXQganVzdCBhbGwgZ29lcyB3cm9uZyA6KVxuXG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRTdGF0ZUluZGV4KHN0YXRlKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKHsgaW5kZXg6IGksIHN0YXRlOiBzdGF0ZSB9KTtcblxuICAgICAgICAvLyAgU29ydCB0aGUgJ2FjdGl2ZScgYXJyYXkgYmFzZWQgb24gdGhlIGluZGV4IHByb3BlcnR5XG4gICAgICAgIHRoaXMuYWN0aXZlLnNvcnQodGhpcy5zb3J0U3RhdGVzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHN0YXRlLnN5cy51cGRhdGVzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICBwYXVzZTogZnVuY3Rpb24gKGtleSlcbiAgICB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0QWN0aXZlU3RhdGVJbmRleChrZXkpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XG5cbiAgICAgICAgICAgIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzb3J0U3RhdGVzOiBmdW5jdGlvbiAoc3RhdGVBLCBzdGF0ZUIpXG4gICAge1xuICAgICAgICAvLyAgU29ydCBkZXNjZW5kaW5nXG4gICAgICAgIGlmIChzdGF0ZUEuaW5kZXggPCBzdGF0ZUIuaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZUEuaW5kZXggPiBzdGF0ZUIuaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gIFNlZSBpZiB3ZSBjYW4gcmVkdWNlIHRoaXMgZG93biB0byBqdXN0IHVwZGF0ZSBhbmQgcmVuZGVyXG5cbiAgICBzdGVwOiBmdW5jdGlvbiAodGltZXN0YW1wKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubWFpbmxvb3AucnVubmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubWFpbmxvb3Auc3RlcCh0aW1lc3RhbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgcHJlVXBkYXRlOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucHJlVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnByZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICAvLyAgSW52b2tlIFN0YXRlIE1haW4gTG9vcCBoZXJlIC0gdXBkYXRpbmcgYWxsIG9mIGl0cyBzeXN0ZW1zICh0d2VlbnMsIHBoeXNpY3MsIGV0YylcblxuICAgICAgICAgICAgLy8gIFRoaXMgc2hvdWxkbid0IGJlIGNhbGxlZCBpZiB0aGUgU3RhdGUgaXMgc3RpbGwgbG9hZGluZ1xuICAgICAgICAgICAgLy8gIEhhdmUgYSBTdGF0ZS5TVEFUVVMgY29uc3QgaW4gdGhlIFNldHRpbmdzLCBkaWN0YXRpbmcgd2hhdCBpcyBnb2luZyBvblxuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcG9zdFVwZGF0ZTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdLnBvc3RVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUucG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xuXG4gICAgICAgICAgICAvLyAgQ2FuIHB1dCBhbGwga2luZHMgb2Ygb3RoZXIgY2hlY2tzIGluIGhlcmUsIGxpa2UgTWFpbkxvb3AsIEZQUywgZXRjLlxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZXR0aW5ncy52aXNpYmxlIHx8IHN0YXRlLnN5cy5jb2xvci5hbHBoYSA9PT0gMCB8fCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5yZW5kZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAqL1xuXG4gICAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIChyZW5kZXJlciwgc3RhdGUsIGludGVycG9sYXRpb25QZXJjZW50YWdlKVxuICAgIHtcbiAgICAgICAgLy8gIFBvcHVsYXRlcyB0aGUgZGlzcGxheSBsaXN0XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIocmVuZGVyZXIsIGNoaWxkLCBpbnRlcnBvbGF0aW9uUGVyY2VudGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcblxuLyoqXG4qIFRoZSBHYW1lT2JqZWN0IEZhY3RvcnkgaXMgYSBxdWljayB3YXkgdG8gY3JlYXRlIG1hbnkgY29tbW9uIGdhbWUgb2JqZWN0cy4gVGhlIEZhY3RvcnkgaXMgb3duZWQgYnkgdGhlIFN0YXRlLlxuKlxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeVxuKiBAY29uc3RydWN0b3JcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxuKi9cblxudmFyIEdhbWVPYmplY3RDcmVhdG9yID0ge1xuXG4gICAgLyoqXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxuICAgICogQHByb3RlY3RlZFxuICAgICovXG4gICAgc3RhdGU6IG51bGxcblxufTtcblxuZnVuY3Rpb24gaW5pdCAoc3RhdGUpXG57XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RDcmVhdG9yIGluc3RhbmNlIGZvciBTdGF0ZScsIHN0YXRlKTtcblxuICAgIEdhbWVPYmplY3RDcmVhdG9yLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvLyAgIExvYWQgdGhlIGZhY3RvcmllcyBpbnRvIHRoaXMgT2JqZWN0XG5cbiAgICBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdENyZWF0b3IsIGZhbHNlKTtcblxuICAgIHJldHVybiBHYW1lT2JqZWN0Q3JlYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIi8qKlxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cbiovXG5cbnZhciBGYWN0b3J5Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lcicpO1xuXG4vKipcbiogVGhlIEdhbWVPYmplY3QgRmFjdG9yeSBpcyBhIHF1aWNrIHdheSB0byBjcmVhdGUgbWFueSBjb21tb24gZ2FtZSBvYmplY3RzLiBUaGUgRmFjdG9yeSBpcyBvd25lZCBieSB0aGUgU3RhdGUuXG4qXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XG4qIEBjb25zdHJ1Y3RvclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4qL1xuXG52YXIgR2FtZU9iamVjdEZhY3RvcnkgPSB7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlfSBzdGF0ZSAtIFRoZSBTdGF0ZSB0aGF0IG93bnMgdGhpcyBGYWN0b3J5XG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgICBzdGF0ZTogbnVsbFxuXG59O1xuXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcbntcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgR2FtZU9iamVjdEZhY3RvcnkgaW5zdGFuY2UgZm9yIFN0YXRlJyk7XG5cbiAgICBHYW1lT2JqZWN0RmFjdG9yeS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxuXG4gICAgcmV0dXJuIEZhY3RvcnlDb250YWluZXIubG9hZChHYW1lT2JqZWN0RmFjdG9yeSwgdHJ1ZSk7XG5cbiAgICAvLyByZXR1cm4gR2FtZU9iamVjdEZhY3Rvcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ2YXIgQmFzZUxvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2xvYWRlci9CYXNlTG9hZGVyJyk7XG52YXIgSW1hZ2VMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpO1xuXG52YXIgTG9hZGVyID0gZnVuY3Rpb24gKHN0YXRlKVxue1xuICAgIEJhc2VMb2FkZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlIC0gVGhlIFN0YXRlIHRoYXQgb3ducyB0aGlzIEZhY3RvcnlcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxufTtcblxuTG9hZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUxvYWRlci5wcm90b3R5cGUpO1xuTG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlcjtcblxuTG9hZGVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uIChrZXksIHVybClcbntcbiAgICB2YXIgZmlsZSA9IEltYWdlTG9hZGVyKGtleSwgdXJsLCB0aGlzLnBhdGgpO1xuXG4gICAgY29uc29sZS5sb2coJ0xvYWRlci5pbWFnZScpO1xuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuXG4gICAgdGhpcy5hZGRGaWxlKGZpbGUpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanMiLCIvKipcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XG4qL1xuXG4vLyBNeSB0aGFua3MgdG8gSXNhYWMgU3VraW4gZm9yIGNyZWF0aW5nIE1haW5Mb29wLmpzLCBvbiB3aGljaCBsb3RzIG9mIHRoaXMgaXMgYmFzZWQuXG5cbnZhciBNYWluTG9vcCA9IGZ1bmN0aW9uIChzdGF0ZSwgZnJhbWVyYXRlKVxue1xuICAgIC8qKlxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuU3RhdGV9IHN0YXRlXG4gICAgKi9cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvKipcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cbiAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICAvLyBUaGUgYW1vdW50IG9mIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gc2ltdWxhdGUgZWFjaCB0aW1lIHVwZGF0ZSgpIHJ1bnMuXG4gICAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyBmcmFtZXJhdGU7XG5cbiAgICB0aGlzLnBoeXNpY3NTdGVwID0gMSAvIGZyYW1lcmF0ZTtcblxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXG4gICAgLy8gU2VlIHRoZSBjb21tZW50cyBpbnNpZGUgYW5pbWF0ZSgpIGZvciBkZXRhaWxzLlxuICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAvLyBUaGUgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyBvZiB0aGUgbGFzdCB0aW1lIHRoZSBtYWluIGxvb3Agd2FzIHJ1bi5cbiAgICAvLyBVc2VkIHRvIGNvbXB1dGUgdGhlIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIGZyYW1lcy5cbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XG5cbiAgICAvLyBBbiBleHBvbmVudGlhbCBtb3ZpbmcgYXZlcmFnZSBvZiB0aGUgZnJhbWVzIHBlciBzZWNvbmQuXG4gICAgdGhpcy5mcHMgPSA2MDtcblxuICAgIC8vIFRoZSB0aW1lc3RhbXAgKGluIG1pbGxpc2Vjb25kcykgb2YgdGhlIGxhc3QgdGltZSB0aGUgYGZwc2AgbW92aW5nXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cbiAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cbiAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XG4gICAgLy8gcmVsZXZhbnQgaW5zaWRlIG9mIGFuaW1hdGUoKSwgYnV0IGEgcmVmZXJlbmNlIGlzIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0XG4gICAgLy8gdGhpcyB2YXJpYWJsZSBpcyBub3QgbWFya2VkIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24gZXZlcnkgdGltZSB0aGUgbWFpblxuICAgIC8vIGxvb3AgcnVucy5cbiAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcblxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxuICAgIC8vIGZyYW1lIHdhcyBleGVjdXRlZCBiZWZvcmUgYW5vdGhlciBmcmFtZSBjYW4gYmUgZXhlY3V0ZWQuIFRoZVxuICAgIC8vIG11bHRpcGxpY2F0aXZlIGludmVyc2UgY2FwcyB0aGUgRlBTICh0aGUgZGVmYXVsdCBvZiB6ZXJvIG1lYW5zIHRoZXJlIGlzXG4gICAgLy8gbm8gY2FwKS5cbiAgICB0aGlzLm1pbkZyYW1lRGVsYXkgPSAwO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcbiAgICAvLyB3YXMgY2FsbGVkIGhhcyBub3QgYmVlbiBmb2xsb3dlZCBieSBhIGNhbGwgdG8gYE1haW5Mb29wLnN0b3AoKWAuIFRoaXMgaXNcbiAgICAvLyBkaWZmZXJlbnQgdGhhbiBgcnVubmluZ2AgYmVjYXVzZSB0aGVyZSBpcyBhIGRlbGF5IG9mIGEgZmV3IG1pbGxpc2Vjb25kc1xuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJydW5uaW5nLlwiIFRoaXMgZGVsYXkgaXMgZHVlIHRvIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGZyYW1lLlxuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gV2hldGhlciB0aGUgc2ltdWxhdGlvbiBoYXMgZmFsbGVuIHRvbyBmYXIgYmVoaW5kIHJlYWwgdGltZS5cbiAgICAvLyBTcGVjaWZpY2FsbHksIGBwYW5pY2Agd2lsbCBiZSBzZXQgdG8gYHRydWVgIGlmIHRvbyBtYW55IHVwZGF0ZXMgb2NjdXIgaW5cbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcbiAgICAvLyBoZWxkIGV4dGVybmFsbHkgc28gdGhhdCB0aGlzIHZhcmlhYmxlIGlzIG5vdCBtYXJrZWQgZm9yIGdhcmJhZ2VcbiAgICAvLyBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW4gbG9vcCBydW5zLlxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcbn07XG5cbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xuXG5NYWluTG9vcC5wcm90b3R5cGUgPSB7XG5cbiAgICBzZXRNYXhGUFM6IGZ1bmN0aW9uIChmcHMpXG4gICAge1xuICAgICAgICBpZiAoZnBzID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TWF4RlBTOiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XG4gICAgfSxcblxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHZhciBvbGRGcmFtZURlbHRhID0gdGhpcy5mcmFtZURlbHRhO1xuXG4gICAgICAgIHRoaXMuZnJhbWVEZWx0YSA9IDA7XG5cbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XG4gICAgfSxcblxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcbiAgICB7XG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XG4gICAgICAgIC8vIGBNYWluTG9vcC5zZXRNYXhBbGxvd2VkRlBTKClgKS5cbiAgICAgICAgaWYgKHRpbWVzdGFtcCA8IHRoaXMubGFzdEZyYW1lVGltZU1zICsgdGhpcy5taW5GcmFtZURlbGF5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcmFtZURlbHRhIGlzIHRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuXG4gICAgICAgIC8vIHNpbXVsYXRlZCB5ZXQuIEFkZCB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBmcmFtZS4gV2UgbmVlZCB0byB0cmFjayB0b3RhbFxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcbiAgICAgICAgLy8gbGFzdCBmcmFtZSkgYmVjYXVzZSBub3QgYWxsIGFjdHVhbGx5IGVsYXBzZWQgdGltZSBpcyBndWFyYW50ZWVkIHRvIGJlXG4gICAgICAgIC8vIHNpbXVsYXRlZCBlYWNoIGZyYW1lLiBTZWUgdGhlIGNvbW1lbnRzIGJlbG93IGZvciBkZXRhaWxzLlxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZU1zID0gdGltZXN0YW1wO1xuXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXG5cbiAgICAgICAgLy8gIEhlcmUgd2UnbGwgbmVlZCB0byBydW4gdGhpbmdzIGxpa2UgdHdlZW4udXBkYXRlLCBpbnB1dC51cGRhdGUsIGV0Yy5cbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZXN0aW1hdGUgb2YgdGhlIGZyYW1lIHJhdGUsIGBmcHNgLiBFdmVyeSBzZWNvbmQsIHRoZSBudW1iZXJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXG4gICAgICAgIC8vIG1vdmluZyBhdmVyYWdlIG9mIGFsbCBmcmFtZXMgcGVyIHNlY29uZCwgd2l0aCBhbiBhbHBoYSBvZiAwLjI1LiBUaGlzXG4gICAgICAgIC8vIG1lYW5zIHRoYXQgbW9yZSByZWNlbnQgc2Vjb25kcyBhZmZlY3QgdGhlIGVzdGltYXRlZCBmcmFtZSByYXRlIG1vcmUgdGhhblxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxuICAgICAgICBpZiAodGltZXN0YW1wID4gdGhpcy5sYXN0RnBzVXBkYXRlICsgMTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGNvbnN0YW50cyBpbmxpbmUgaXMgb2theSBoZXJlLlxuICAgICAgICAgICAgdGhpcy5mcHMgPSAwLjI1ICogdGhpcy5mcmFtZXNUaGlzU2Vjb25kICsgMC43NSAqIHRoaXMuZnBzO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RGcHNVcGRhdGUgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lc1RoaXNTZWNvbmQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kKys7XG5cbiAgICAgICAgdGhpcy5udW1VcGRhdGVTdGVwcyA9IDA7XG5cbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmZyYW1lRGVsdGEgPj0gc3RlcClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy50aW1lc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xuXG4gICAgICAgICAgICBpZiAoKyt0aGlzLm51bVVwZGF0ZVN0ZXBzID49IDI0MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmljID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZXR0aW5ncy52aXNpYmxlICYmIHRoaXMuc3RhdGUuc3lzLmNvbG9yLmFscGhhICE9PSAwICYmIHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YXRlLCB0aGlzLmZyYW1lRGVsdGEgLyB0aGlzLnRpbWVzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmVuZCh0aGlzLmZwcywgdGhpcy5wYW5pYyk7XG5cbiAgICAgICAgdGhpcy5wYW5pYyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKlxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMudXBkYXRlKHRpbWVzdGVwKTtcblxuICAgICAgICB2YXIgYztcbiAgICAgICAgdmFyIGNoaWxkO1xuXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLmV4aXN0cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUodGltZXN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aW1lc3RlcCk7XG5cbiAgICAgICAgZm9yIChjID0gMDsgYyA8IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3QubGVuZ3RoOyBjKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY107XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKHRpbWVzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgKi9cblxuICAgIHN0b3A6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Mb29wO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9NYWluTG9vcC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxuKi9cblxuLyoqXG4qIERpcnR5ISBNYW5hZ2VyXG4qXG4qIEBjbGFzc1xuKi9cbnZhciBVcGRhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKHN0YXRlKVxue1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcblxuICAgIC8vIHRoaXMuaSA9IDE7XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnByb2Nlc3NlZCA9IDA7XG59O1xuXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZGF0ZU1hbmFnZXI7XG5cblVwZGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgc3RvcDogZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmksICdVcGRhdGVNYW5hZ2VyLnN0b3AnLCB0aGlzLnByb2Nlc3NlZCk7XG5cbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XG5cbiAgICAgICAgLy8gdGhpcy5pKys7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsZW4gPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaSwgJ1VwZGF0ZU1hbmFnZXIuc3RhcnQnLCBsZW4pO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyAgQmVjYXVzZSBpdCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkIChhcyBhIGNoaWxkIG9mIGFub3RoZXIgVHJhbnNmb3JtIHRoYXQgd2FzIHVwZGF0ZWQpXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldICYmIHRoaXMubGlzdFtpXS5fZGlydHkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbiAodHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXBkYXRlTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbn07XG5cblNldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXQ7XG5cblNldC5wcm90b3R5cGUgPSB7XG5cbiAgICBhZGQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlbGV0ZTogZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjayh0aGlzLnZhbHVlc1tpXSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICB0aGlzLnZhbHVlcy5sZW5ndGggPSAwO1xuICAgIH0sXG5cbiAgICBjb250YWluczogZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA+IC0xKTtcbiAgICB9LFxuXG4gICAgdW5pb246IGZ1bmN0aW9uIChzZXQpXG4gICAge1xuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHNldC52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdTZXQ7XG4gICAgfSxcblxuICAgIGludGVyc2VjdDogZnVuY3Rpb24gKHNldClcbiAgICB7XG4gICAgICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChzZXQuY29udGFpbnModmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3U2V0O1xuICAgIH0sXG5cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiAoc2V0KVxuICAgIHtcbiAgICAgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFzZXQuY29udGFpbnModmFsdWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1NldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3U2V0O1xuICAgIH1cblxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU2V0LnByb3RvdHlwZSwge1xuXG4gICAgc2l6ZToge1xuXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RydWN0cy9TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvcmljaC9Eb2N1bWVudHMvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9waGFzZXIuanMiLCJyZXF1aXJlKCcuL3BvbHlmaWxscycpO1xuXG52YXIgYm9vdCA9IHJlcXVpcmUoJy4vYm9vdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb3Q7XG5cbmdsb2JhbC5QaGFzZXIgPSBib290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcGhhc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9