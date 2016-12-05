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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

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

var Event = function (type, target)
{
    this.dispatcher;

    this.type = type;

    this.target = target;

    this._propagate = true;
};

Event.prototype.constructor = Event;

Event.prototype = {

    reset: function (dispatcher)
    {
        this.dispatcher = dispatcher;

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
/***/ function(module, exports) {

var EventDispatcher = function ()
{
    this.listeners = {};

    this._state = EventDispatcher.STATE_PENDING;
};

EventDispatcher.STATE_PENDING = 0;
EventDispatcher.STATE_DISPATCHING = 1;
EventDispatcher.STATE_REMOVING_ALL = 2;
EventDispatcher.STATE_DESTROYED = 3;

EventDispatcher.prototype.constructor = EventDispatcher;

EventDispatcher.prototype = {

    //  Private
    add: function (type, listener, priority, isOnce)
    {
        if (this.listeners === undefined)
        {
            //  Has the EventDispatcher been destroyed?
            return;
        }

        // console.log('Add listener', type, listener);

        if (!this.listeners[type])
        {
            this.listeners[type] = [];
        }

        var listeners = this.listeners[type];

        if (this.has(type, listener))
        {
            this.update(type, listener, priority, isOnce);
        }
        else
        {
            listeners.push({ listener: listener, priority: priority, isOnce: isOnce, toRemove: false });
        }

        listeners.sort(this.sortHandler);
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

    update: function (type, listener, priority, isOnce)
    {
        var listeners = this.listeners[type];

        for (var i = 0; i < listeners.length; i++)
        {
            if (listeners[i].listener === listener)
            {
                //  They're trying to add the same listener again, so just update the priority + once
                listeners[i].priority = priority;
                listeners[i].isOnce = isOnce;
            }
        }

    },

    //  Need to test what happens if array is sorted during DISPATCH phase (does it screw it all up?)

    on: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        this.add(type, listener, priority, false);

        return this;
    },

    once: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        this.add(type, listener, priority, true);

        return this;
    },

    total: function (type)
    {
        if (!this.listeners || !this.listeners[type])
        {
            return -1;
        }

        return this.listeners[type].length;
    },

    has: function (type, listener)
    {
        if (!this.listeners || !this.listeners[type])
        {
            return false;
        }

        var listeners = this.listeners[type];

        for (var i = 0; i < listeners.length; i++)
        {
            if (listeners[i].listener === listener)
            {
                return true;
            }
        }

        return false;
    },

    //  Removes an event listener.
    //  If there is no matching listener registered with the EventDispatcher, a call to this method has no effect.
    off: function (type, listener)
    {
        if (!this.listeners || !this.listeners[type])
        {
            return this;
        }

        var listeners = this.listeners[type];

        for (var i = 0; i < listeners.length; i++)
        {
            if (listeners[i].listener === listener)
            {
                if (this._state === EventDispatcher.STATE_DISPATCHING)
                {
                    console.log('Flag listener for removal', type);
                    listeners[i].toRemove = true;
                }
                else
                {
                    console.log('Remove listener', type);
                    listeners.splice(i, 1);
                }

                break;
            }
        }

        return this;
    },

    dispatch: function (event)
    {
        //  Add in a dispatch lock, to stop the dispatcher from being invoked during an event callback

        if (this._state !== EventDispatcher.STATE_PENDING || !this.listeners[event.type])
        {
            return false;
        }

        var listeners = this.listeners[event.type];

        //  This was a valid dispatch call, we just had nothing to do ...
        if (listeners.length === 0)
        {
            return true;
        }

        this._state = EventDispatcher.STATE_DISPATCHING;

        event.reset(this);

        var toRemove = [];

        var entry;
        var entries = listeners.slice();
        // var entries = listeners;

        console.log('Dispatching', entries.length, 'listeners');

        for (var i = 0; i < entries.length; i++)
        {
            entry = entries[i];

            if (entry.toRemove)
            {
                toRemove.push(entry);
                continue;
            }

            //  Add Custom Events
            //  If this adjusts the entries.length for any reason, the reference is still valid
            entry.listener.call(this, event);

            //  Has the callback done something disastrous? Like called removeAll, or nuked the dispatcher?
            if (this._state !== EventDispatcher.STATE_DISPATCHING)
            {
                //  Yup! Let's get out of here ...
                break;
            }

            //  Was a 'once' or was removed during the callback
            if (entry.isOnce || entry.toRemove)
            {
                toRemove.push(entry);
            }

            //  Has the event been halted?
            if (!event._propagate)
            {
                //  Break out, a listener has called Event.stopPropagation
                break;
            }
        }

        if (this._state === EventDispatcher.STATE_REMOVING_ALL)
        {
            this.removeAll();
        }
        else if (this._state === EventDispatcher.STATE_DESTROYED)
        {
            this.destroy();
        }
        else
        {
            //  Anything in the toRemove list?

            console.log('Cleaning out', toRemove.length, 'listeners');

            for (i = 0; i < toRemove.length; i++)
            {
                this.off(event.type, toRemove[i].listener);
            }

            toRemove.length = 0;

            this._state = EventDispatcher.STATE_PENDING;
        }

        return true;
    },

    //  Removes all listeners, but retains the event type entries
    removeAll: function ()
    {
        if (this._state === EventDispatcher.STATE_DISPATCHING)
        {
            this._state = EventDispatcher.STATE_REMOVING_ALL;

            return;
        }

        for (var eventType in this.listeners)
        {
            this.listeners[eventType].length = 0;
        }

        return this;
    },

    destroy: function ()
    {
        if (this._state === EventDispatcher.STATE_DISPATCHING)
        {
            this._state = EventDispatcher.STATE_DESTROYED;

            return;
        }

        for (var eventType in this.listeners)
        {
            this.listeners[eventType].length = 0;

            delete this.listeners[eventType];
        }

        this.listeners = undefined;
    }

};

module.exports = EventDispatcher;


/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// var FILE_CONST = require('../const');
var File = __webpack_require__(34);

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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(10);
var GameObjectFactory = __webpack_require__(52);
var GameObjectCreator = __webpack_require__(51);
var Loader = __webpack_require__(53);
var MainLoop = __webpack_require__(54);
var UpdateManager = __webpack_require__(55);

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
/* 15 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(21),

    Event: __webpack_require__(9),
    EventDispatcher: __webpack_require__(10),

    Loader: {
        ImageFile: __webpack_require__(12)
    }

};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(46);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(45);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(15);
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(22);

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(27);
var Config = __webpack_require__(18);
var DebugHeader = __webpack_require__(20);
var CreateRenderer = __webpack_require__(19);
var RequestAnimationFrame = __webpack_require__(29);
var DOMContentLoaded = __webpack_require__(28);
var RandomDataGenerator = __webpack_require__(40);
var StateManager = __webpack_require__(50);
var FactoryContainer = __webpack_require__(3);
var GameObjects = __webpack_require__ (32);

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
/* 22 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '0b810580-bb0e-11e6-816d-f36f9fbb42b5'
};
module.exports = CHECKSUM;

/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(7);
var Input = __webpack_require__(25);
var Audio = __webpack_require__(23);
var Video = __webpack_require__(26);
var Fullscreen = __webpack_require__(24);

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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(30);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories
//  
//  This file should be linked to the specific build of Phaser, i.e. Phaser Nano won't require all GOs

__webpack_require__ (31);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {


var FILE_CONST = __webpack_require__(11);
var Set = __webpack_require__(56);
var XHRSettings = __webpack_require__(4);
var Events = __webpack_require__(39);

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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(35);
var FILE_CONST = __webpack_require__(11);
var XHRLoader = __webpack_require__(37);
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(36);

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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(38)

};


/***/ },
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(13);
var Systems = __webpack_require__(14);

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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(15);
var State = __webpack_require__(49);
var Settings = __webpack_require__(13);
var Systems = __webpack_require__(14);
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
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var BaseLoader = __webpack_require__(33);
var ImageLoader = __webpack_require__(12);

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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(17);

var boot = __webpack_require__(16);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMGQ5YjVlOGY0MzNmNzhjMjZiZSIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL09TLmpzIiwid2VicGFjazovLy8uLi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2V2ZW50cy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vbG9hZGVyL2NvbnN0LmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TeXN0ZW1zLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi4vdXRpbHMvTk9PUC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvRGVidWdIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NoZWNrc3VtLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvZ2FtZW9iamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9CYXNlTG9hZGVyLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL0Jhc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9GaWxlLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL0ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9HZXRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwid2VicGFjazovLy9zcmMvbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9YSFJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvWEhSTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZXZlbnRzL0xvYWRlclN0YXJ0RXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL2xvYWRlci9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9sb2FkZXIvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvQXJyYXkuZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL1VpbnQzMkFycmF5LmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL3BlcmZvcm1hbmNlLm5vdy5qcyIsIndlYnBhY2s6Ly8vc3JjL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL01haW5Mb29wLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL1VwZGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0cnVjdHMvU2V0LmpzIiwid2VicGFjazovLy9kOi93YW1wL3d3dy9waGFzZXIvdjMvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9waGFzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3BoYXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwrQ0NBQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsR0FBRyx1QkFBdUIsT0FBTztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDclFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ3ZEQSxTQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFR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Q0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVyT0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxJQUFJO0FBQ2xCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsbUNBQW1DLFlBQVk7QUFDL0MsaUNBQWlDLHFCQUFxQjs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUV4TEE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwRUFBMEU7QUFDdEc7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7O0FBRW5EOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7O0FBRW5EOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ25TQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ1pBO0FBQ0EsV0NBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFbENBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFdkNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxzQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx3QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx3QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxhQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esb0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBRXRJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsVUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUEsV0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQSxtQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQTs7QUFFQTs7Ozs7OztBRVpBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTtBRENBLG1CQ0FBLENEQUEsRUNBQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLFdDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EscUJDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTs7QUFFNUM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU5REE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsaUJDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUU5RUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFlDQUEsbUJEQUEsQ0NBQSxDREFBO0FBQ0EsZUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUUzRkE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGFDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0EsYUNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxrQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxxQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSw0QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1QkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSwwQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSxtQkNBQSxtQkRBQSxDQ0FBLEVEQUE7QUFDQSx1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QUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBRWpSQSxhQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGdCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGtCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxjQUFjOztBQUVsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQSxrQkNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUUxQkEsdUJDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUVyQ0EsWUNBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBRVpBOztBQUVBLHdCQ0FBLG1CREFBLEND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O0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCLHlDQUF5QztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIseUNBQXlDO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQix5Q0FBeUM7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUMxUEE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEOzs7Ozs7O0FDckhBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7OENDbkx0QyxtQkNBQSxDREFBLEVDQUE7O0FBRUEsV0RBQSxtQkNBQSxDREFBLEVDQUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGhhc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQaGFzZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBoYXNlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUwZDliNWU4ZjQzM2Y3OGMyNmJlIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL09TLmpzIiwidmFyIE9TID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlc2t0b3AgLSBJcyBydW5uaW5nIG9uIGEgZGVza3RvcD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBkZXNrdG9wOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJBcHAgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGFzIGEgV2ViQXBwLCBpLmUuIHdpdGhpbiBhIFdlYlZpZXdcclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJBcHA6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlPUyAtIElzIHJ1bm5pbmcgb24gaU9TP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGlPUzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpT1NWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBpT1MgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGlPU1ZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaVBob25lIC0gSXMgcnVubmluZyBvbiBpUGhvbmU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaVBob25lOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpUGFkIC0gSXMgcnVubmluZyBvbiBpUGFkP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGlQYWQ6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvY29vbkpTIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBDb2Nvb25KUz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjb2Nvb25KUzogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvY29vbkpTQXBwIC0gSXMgdGhpcyBnYW1lIHJ1bm5pbmcgd2l0aCBDb2Nvb25KUy5BcHA/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY29jb29uSlNBcHA6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjb3Jkb3ZhIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBBcGFjaGUgQ29yZG92YT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjb3Jkb3ZhOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbm9kZSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgTm9kZS5qcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBub2RlOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbm9kZVdlYmtpdCAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgTm9kZS1XZWJraXQ/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbm9kZVdlYmtpdDogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVsZWN0cm9uIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBHaXRIdWIgRWxlY3Ryb24/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZWxlY3Ryb246IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlamVjdGEgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEVqZWN0YT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlamVjdGE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNyb3Nzd2FsayAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgdGhlIEludGVsIENyb3Nzd2FsayBYREs/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY3Jvc3N3YWxrOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhbmRyb2lkIC0gSXMgcnVubmluZyBvbiBhbmRyb2lkP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGFuZHJvaWQ6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNocm9tZU9TIC0gSXMgcnVubmluZyBvbiBjaHJvbWVPUz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjaHJvbWVPUzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGludXggLSBJcyBydW5uaW5nIG9uIGxpbnV4P1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGxpbnV4OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtYWNPUyAtIElzIHJ1bm5pbmcgb24gbWFjT1M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbWFjT1M6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdpbmRvd3MgLSBJcyBydW5uaW5nIG9uIHdpbmRvd3M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2luZG93czogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2luZG93c1Bob25lIC0gSXMgcnVubmluZyBvbiBhIFdpbmRvd3MgUGhvbmU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2luZG93c1Bob25lOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB2aXRhIC0gSXMgcnVubmluZyBvbiBhIFBsYXlTdGF0aW9uIFZpdGE/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdml0YTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0ga2luZGxlIC0gSXMgcnVubmluZyBvbiBhbiBBbWF6b24gS2luZGxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGtpbmRsZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwaXhlbFJhdGlvIC0gUGl4ZWxSYXRpbyBvZiB0aGUgaG9zdCBkZXZpY2U/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgcGl4ZWxSYXRpbzogMVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgICBpZiAoL1dpbmRvd3MvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL01hYyBPUy8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MubWFjT1MgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0xpbnV4Ly50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5saW51eCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuYW5kcm9pZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvaVBbYW9dZHxpUGhvbmUvaS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5pT1MgPSB0cnVlO1xyXG4gICAgICAgIChuYXZpZ2F0b3IuYXBwVmVyc2lvbikubWF0Y2goL09TIChcXGQrKS8pO1xyXG4gICAgICAgIE9TLmlPU1ZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9LaW5kbGUvLnRlc3QodWEpIHx8ICgvXFxiS0ZbQS1aXVtBLVpdKy8pLnRlc3QodWEpIHx8ICgvU2lsay4qTW9iaWxlIFNhZmFyaS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmtpbmRsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBOT1QgZGV0ZWN0IGVhcmx5IGdlbmVyYXRpb25zIG9mIEtpbmRsZSBGaXJlLCBJIHRoaW5rIHRoZXJlIGlzIG5vIHJlbGlhYmxlIHdheS4uLlxyXG4gICAgICAgIC8vIEUuZy4gXCJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBVOyBJbnRlbCBNYWMgT1MgWCAxMF82XzM7IGVuLXVzOyBTaWxrLzEuMS4wLTgwKSBBcHBsZVdlYktpdC81MzMuMTYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzUuMCBTYWZhcmkvNTMzLjE2IFNpbGstQWNjZWxlcmF0ZWQ9dHJ1ZVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvQ3JPUy8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuY2hyb21lT1MgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9QbGF5c3RhdGlvbiBWaXRhLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mudml0YSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9XaW5kb3dzIFBob25lL2kudGVzdCh1YSkgfHwgKC9JRU1vYmlsZS9pKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5hbmRyb2lkID0gZmFsc2U7XHJcbiAgICAgICAgT1MuaU9TID0gZmFsc2U7XHJcbiAgICAgICAgT1MubWFjT1MgPSBmYWxzZTtcclxuICAgICAgICBPUy53aW5kb3dzID0gdHJ1ZTtcclxuICAgICAgICBPUy53aW5kb3dzUGhvbmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzaWxrID0gKC9TaWxrLykudGVzdCh1YSk7XHJcblxyXG4gICAgaWYgKE9TLndpbmRvd3MgfHwgT1MubWFjT1MgfHwgKE9TLmxpbnV4ICYmICFzaWxrKSB8fCBPUy5jaHJvbWVPUylcclxuICAgIHtcclxuICAgICAgICBPUy5kZXNrdG9wID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgV2luZG93cyBQaG9uZSAvIFRhYmxlIHJlc2V0XHJcbiAgICBpZiAoT1Mud2luZG93c1Bob25lIHx8ICgoL1dpbmRvd3MgTlQvaS50ZXN0KHVhKSkgJiYgKC9Ub3VjaC9pLnRlc3QodWEpKSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuZGVza3RvcCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBXZWJBcHAgbW9kZSBpbiBpT1NcclxuICAgIGlmIChuYXZpZ2F0b3Iuc3RhbmRhbG9uZSlcclxuICAgIHtcclxuICAgICAgICBPUy53ZWJBcHAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAod2luZG93LmNvcmRvdmEgIT09IHVuZGVmaW5lZClcclxuICAgIHtcclxuICAgICAgICBPUy5jb3Jkb3ZhID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlICE9PSAndW5kZWZpbmVkJykpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mubm9kZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChPUy5ub2RlICYmIHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zID09PSAnb2JqZWN0JylcclxuICAgIHtcclxuICAgICAgICBPUy5ub2RlV2Via2l0ID0gISFwcm9jZXNzLnZlcnNpb25zWydub2RlLXdlYmtpdCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE9TLmVsZWN0cm9uID0gISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAobmF2aWdhdG9yLmlzQ29jb29uSlMpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuY29jb29uSlMgPSB0cnVlO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9TLmNvY29vbkpTQXBwID0gKHR5cGVvZiBDb2Nvb25KUyAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPUy5jb2Nvb25KU0FwcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmVqZWN0YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmVqZWN0YSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCgvQ3Jvc3N3YWxrLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuY3Jvc3N3YWxrID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPUy5pUGhvbmUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2lwaG9uZScpICE9PSAtMTtcclxuICAgIE9TLmlQYWQgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2lwYWQnKSAhPT0gLTE7XHJcblxyXG4gICAgT1MucGl4ZWxSYXRpbyA9IHdpbmRvd1snZGV2aWNlUGl4ZWxSYXRpbyddIHx8IDE7XHJcblxyXG4gICAgcmV0dXJuIE9TO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL09TLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDT05TVCA9IHtcclxuXHJcbiAgICBWRVJTSU9OOiAnMy4wLjAnLFxyXG5cclxuICAgIEFVVE86IDAsXHJcbiAgICBDQU5WQVM6IDEsXHJcbiAgICBXRUJHTDogMixcclxuXHJcbiAgICBzdGF0ZToge1xyXG5cclxuICAgICAgICBQRU5ESU5HOiAwLFxyXG4gICAgICAgIElOU1RBTExFRDogMSxcclxuXHJcbiAgICAgICAgQk9PVDogMCxcclxuICAgICAgICBJTklUOiAxLFxyXG4gICAgICAgIFBSRUxPQUQ6IDIsXHJcbiAgICAgICAgQ1JFQVRFOiAzLFxyXG4gICAgICAgIFVQREFURTogNCxcclxuICAgICAgICBSRU5ERVI6IDUsXHJcbiAgICAgICAgU0hVVERPV046IDZcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJsZW5kTW9kZXM6IHtcclxuXHJcbiAgICAgICAgTk9STUFMOiAwLFxyXG4gICAgICAgIEFERDogMSxcclxuICAgICAgICBNVUxUSVBMWTogMixcclxuICAgICAgICBTQ1JFRU46IDMsXHJcbiAgICAgICAgT1ZFUkxBWTogNCxcclxuICAgICAgICBEQVJLRU46IDUsXHJcbiAgICAgICAgTElHSFRFTjogNixcclxuICAgICAgICBDT0xPUl9ET0RHRTogNyxcclxuICAgICAgICBDT0xPUl9CVVJOOiA4LFxyXG4gICAgICAgIEhBUkRfTElHSFQ6IDksXHJcbiAgICAgICAgU09GVF9MSUdIVDogMTAsXHJcbiAgICAgICAgRElGRkVSRU5DRTogMTEsXHJcbiAgICAgICAgRVhDTFVTSU9OOiAxMixcclxuICAgICAgICBIVUU6IDEzLFxyXG4gICAgICAgIFNBVFVSQVRJT046IDE0LFxyXG4gICAgICAgIENPTE9SOiAxNSxcclxuICAgICAgICBMVU1JTk9TSVRZOiAxNlxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2NhbGVNb2Rlczoge1xyXG5cclxuICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgIExJTkVBUjogMCxcclxuICAgICAgICBORUFSRVNUOiAxXHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ09OU1Q7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxuXHJcbnZhciBCcm93c2VyID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFyb3JhIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBBcm9yYS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhcm9yYTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBDaHJvbWUuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2hyb21lOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGNocm9tZVZlcnNpb24gLSBJZiBydW5uaW5nIGluIENocm9tZSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2hyb21lVmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBlcGlwaGFueSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gRXBpcGhhbnkuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZXBpcGhhbnk6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpcmVmb3ggLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEZpcmVmb3guXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZmlyZWZveDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaXJlZm94VmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gRmlyZWZveCB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZmlyZWZveFZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbW9iaWxlU2FmYXJpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBNb2JpbGUgU2FmYXJpLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1vYmlsZVNhZmFyaTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaWUgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEludGVybmV0IEV4cGxvcmVyLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGllOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGllVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLiBCZXlvbmQgSUUxMCB5b3Ugc2hvdWxkIHVzZSBEZXZpY2UudHJpZGVudCBhbmQgRGV2aWNlLnRyaWRlbnRWZXJzaW9uLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGllVmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtaWRvcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1pZG9yaS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtaWRvcmk6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wZXJhIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBPcGVyYS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBvcGVyYTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2FmYXJpIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBTYWZhcmkuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc2FmYXJpOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhZmFyaVZlcnNpb24gLSBJZiBydW5uaW5nIGluIFNhZmFyaSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc2FmYXJpVmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB0cmlkZW50IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBhIFRyaWRlbnQgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciAoSUUxMSspXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdHJpZGVudDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0cmlkZW50VmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLiBTZWUge0BsaW5rIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9tczUzNzUwMyh2PXZzLjg1KS5hc3B4fVxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHRyaWRlbnRWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVkZ2UgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1pY3Jvc29mdCBFZGdlIGJyb3dzZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZWRnZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2lsayAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gdGhlIFNpbGsgYnJvd3NlciAoYXMgdXNlZCBvbiB0aGUgQW1hem9uIEtpbmRsZSlcclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBzaWxrOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgICBpZiAoKC9Bcm9yYS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuYXJvcmEgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0VkZ2VcXC9cXGQrLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmVkZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9DaHJvbWVcXC8oXFxkKykvKS50ZXN0KHVhKSAmJiAhT1Mud2luZG93c1Bob25lKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuY2hyb21lID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLmNocm9tZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvRXBpcGhhbnkvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmVwaXBoYW55ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvRmlyZWZveFxcRCsoXFxkKykvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmZpcmVmb3ggPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIuZmlyZWZveFZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvQXBwbGVXZWJLaXQvKS50ZXN0KHVhKSAmJiBPUy5pT1MpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5tb2JpbGVTYWZhcmkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9NU0lFIChcXGQrXFwuXFxkKyk7LykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5pZSA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci5pZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvTWlkb3JpLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5taWRvcmkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9PcGVyYS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIub3BlcmEgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9TYWZhcmkvKS50ZXN0KHVhKSAmJiAhT1Mud2luZG93c1Bob25lKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuc2FmYXJpID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCgvVHJpZGVudFxcLyhcXGQrXFwuXFxkKykoLiopcnY6KFxcZCtcXC5cXGQrKS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuaWUgPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIudHJpZGVudCA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci50cmlkZW50VmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgICAgIEJyb3dzZXIuaWVWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQzLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFNpbGsgZ2V0cyBpdHMgb3duIGlmIGNsYXVzZSBiZWNhdXNlIGl0cyB1YSBhbHNvIGNvbnRhaW5zICdTYWZhcmknXHJcbiAgICBpZiAoKC9TaWxrLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5zaWxrID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQnJvd3NlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9Ccm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9Ccm93c2VyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogVGhlIEdhbWVPYmplY3QgRmFjdG9yeSBpcyBhIGdsb2JhbCBsZXZlbCBjb250YWluZXIgb2YgRmFjdG9yeSBpbnN0YW5jZXMuXHJcbiogRmFjdG9yaWVzIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCB0aGlzIGNvbnRhaW5lciAod2hlbiByZXF1aXJlZClcclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG5cclxudmFyIGZhY3RvcmllcyA9IHt9O1xyXG5cclxudmFyIEZhY3RvcnlDb250YWluZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBjb25zb2xlLmxvZygnRmFjdG9yeUNvbnRhaW5lciBpcyBhbGl2ZScpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZmFjdG9yeSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkuS0VZKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IHJlZ2lzdGVyZWQnLCBmYWN0b3J5LktFWSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlKGZhY3RvcnkuS0VZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmluZycsIGZhY3RvcnkuS0VZKTtcclxuXHJcbiAgICAgICAgZmFjdG9yaWVzW2ZhY3RvcnkuS0VZXSA9IHtcclxuICAgICAgICAgICAgYWRkOiBmYWN0b3J5LmFkZCxcclxuICAgICAgICAgICAgbWFrZTogZmFjdG9yeS5tYWtlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0VHlwZSA9IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZhY3Rvcmllc1trZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbiAoZGVzdCwgaXNGYWN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGZhY3RvcnkgaW4gZmFjdG9yaWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGZhY3Rvcmllcy5oYXNPd25Qcm9wZXJ0eShmYWN0b3J5KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0xvYWRpbmcnLCBmYWN0b3J5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXN0W2ZhY3RvcnldID0gKGlzRmFjdG9yeSkgPyBmYWN0b3JpZXNbZmFjdG9yeV0uYWRkIDogZmFjdG9yaWVzW2ZhY3RvcnldLm1ha2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmFjdG9yeUNvbnRhaW5lcigpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICBDcmVhdGVzIGFuIFhIUlNldHRpbmdzIE9iamVjdCB3aXRoIGRlZmF1bHQgdmFsdWVzXHJcblxyXG52YXIgWEhSU2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzcG9uc2VUeXBlLCBhc3luYywgdXNlciwgcGFzc3dvcmQsIHRpbWVvdXQpXHJcbntcclxuICAgIGlmIChyZXNwb25zZVR5cGUgPT09IHVuZGVmaW5lZCkgeyByZXNwb25zZVR5cGUgPSAnJzsgfVxyXG4gICAgaWYgKGFzeW5jID09PSB1bmRlZmluZWQpIHsgYXN5bmMgPSB0cnVlOyB9XHJcbiAgICBpZiAodXNlciA9PT0gdW5kZWZpbmVkKSB7IHVzZXIgPSAnJzsgfVxyXG4gICAgaWYgKHBhc3N3b3JkID09PSB1bmRlZmluZWQpIHsgcGFzc3dvcmQgPSAnJzsgfVxyXG4gICAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkgeyB0aW1lb3V0ID0gMDsgfVxyXG5cclxuICAgIC8vIEJlZm9yZSBzZW5kaW5nIGEgcmVxdWVzdCwgc2V0IHRoZSB4aHIucmVzcG9uc2VUeXBlIHRvIFwidGV4dFwiLCBcclxuICAgIC8vIFwiYXJyYXlidWZmZXJcIiwgXCJibG9iXCIsIG9yIFwiZG9jdW1lbnRcIiwgZGVwZW5kaW5nIG9uIHlvdXIgZGF0YSBuZWVkcy4gXHJcbiAgICAvLyBOb3RlLCBzZXR0aW5nIHhoci5yZXNwb25zZVR5cGUgPSAnJyAob3Igb21pdHRpbmcpIHdpbGwgZGVmYXVsdCB0aGUgcmVzcG9uc2UgdG8gXCJ0ZXh0XCIuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gIElnbm9yZWQgYnkgdGhlIExvYWRlciwgb25seSB1c2VkIGJ5IEZpbGUuXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGUsXHJcblxyXG4gICAgICAgIGFzeW5jOiBhc3luYyxcclxuXHJcbiAgICAgICAgLy8gIGNyZWRlbnRpYWxzXHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcblxyXG4gICAgICAgIC8vICB0aW1lb3V0IGluIG1zICgwID0gbm8gdGltZW91dClcclxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxyXG5cclxuICAgICAgICAvLyAgc2V0UmVxdWVzdEhlYWRlclxyXG4gICAgICAgIGhlYWRlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIGhlYWRlclZhbHVlOiB1bmRlZmluZWQsXHJcblxyXG4gICAgICAgIC8vICBvdmVycmlkZU1pbWVUeXBlXHJcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogdW5kZWZpbmVkXHJcblxyXG4gICAgfTtcclxuICAgIFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBYSFJTZXR0aW5ncztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL1hIUlNldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICBTb3VyY2Ugb2JqZWN0XHJcbi8vICBUaGUga2V5IGFzIGEgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBrZXlzLCBpLmUuICdiYW5uZXInLCBvciAnYmFubmVyLmhpZGVCYW5uZXInXHJcbi8vICBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0XHJcblxyXG52YXIgR2V0T2JqZWN0VmFsdWUgPSBmdW5jdGlvbiAoc291cmNlLCBrZXksIGRlZmF1bHRWYWx1ZSlcclxue1xyXG4gICAgaWYgKGtleS5pbmRleE9mKCcuJykpXHJcbiAgICB7XHJcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50ID0gc291cmNlO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gIFVzZSBmb3IgbG9vcCBoZXJlIHNvIHdlIGNhbiBicmVhayBlYXJseVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzT3duUHJvcGVydHkoa2V5c1tpXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBZZXMgaXQgaGFzIGEga2V5IHByb3BlcnR5LCBsZXQncyBjYXJyeSBvbiBkb3duXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmVudFtrZXlzW2ldXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnRba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgPyBzb3VyY2Vba2V5XSA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdldE9iamVjdFZhbHVlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi91dGlscy9HZXRPYmplY3RWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxudmFyIENhbnZhc1Bvb2wgPSByZXF1aXJlKCcuLi9kb20vQ2FudmFzUG9vbCcpO1xyXG5cclxudmFyIEZlYXR1cmVzID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNhbnZhcyAtIElzIGNhbnZhcyBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2FudmFzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHs/Ym9vbGVhbn0gY2FudmFzQml0Qmx0U2hpZnQgLSBUcnVlIGlmIGNhbnZhcyBzdXBwb3J0cyBhICdjb3B5JyBiaXRibHQgb250byBpdHNlbGYgd2hlbiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiByZWdpb25zIG92ZXJsYXAuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2FudmFzQml0Qmx0U2hpZnQ6IG51bGwsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViR0wgLSBJcyB3ZWJHTCBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2ViR0w6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGUgLSBJcyBmaWxlIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaWxlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBmaWxlU3lzdGVtIC0gSXMgZmlsZVN5c3RlbSBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZmlsZVN5c3RlbTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9jYWxTdG9yYWdlIC0gSXMgbG9jYWxTdG9yYWdlIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBsb2NhbFN0b3JhZ2U6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdvcmtlciAtIElzIHdvcmtlciBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd29ya2VyOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBwb2ludGVyTG9jayAtIElzIFBvaW50ZXIgTG9jayBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgcG9pbnRlckxvY2s6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpYnJhdGlvbiAtIERvZXMgdGhlIGRldmljZSBzdXBwb3J0IHRoZSBWaWJyYXRpb24gQVBJP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHZpYnJhdGlvbjogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZ2V0VXNlck1lZGlhIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIGdldFVzZXJNZWRpYSBBUEk/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgZ2V0VXNlck1lZGlhOiB0cnVlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiAtIElzIHRoZSBkZXZpY2UgYmlnIG9yIGxpdHRsZSBlbmRpYW4/IChvbmx5IGRldGVjdGVkIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIFR5cGVkQXJyYXlzKVxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGxpdHRsZUVuZGlhbjogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VwcG9ydDMyYml0IC0gRG9lcyB0aGUgZGV2aWNlIGNvbnRleHQgc3VwcG9ydCAzMmJpdCBwaXhlbCBtYW5pcHVsYXRpb24gdXNpbmcgYXJyYXkgYnVmZmVyIHZpZXdzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHN1cHBvcnQzMmJpdDogZmFsc2VcclxuXHJcbn07XHJcblxyXG4vKipcclxuKiBDaGVjayBMaXR0bGUgb3IgQmlnIEVuZGlhbiBzeXN0ZW0uXHJcbipcclxuKiBAYXV0aG9yIE1hdHQgRGVzTGF1cmllcnMgKEBtYXR0ZGVzbClcclxuKi9cclxuZnVuY3Rpb24gY2hlY2tJc0xpdHRsZUVuZGlhbiAoKVxyXG57XHJcbiAgICB2YXIgYSA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcclxuICAgIHZhciBiID0gbmV3IFVpbnQ4QXJyYXkoYSk7XHJcbiAgICB2YXIgYyA9IG5ldyBVaW50MzJBcnJheShhKTtcclxuXHJcbiAgICBiWzBdID0gMHhhMTtcclxuICAgIGJbMV0gPSAweGIyO1xyXG4gICAgYlsyXSA9IDB4YzM7XHJcbiAgICBiWzNdID0gMHhkNDtcclxuXHJcbiAgICBpZiAoY1swXSA9PT0gMHhkNGMzYjJhMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY1swXSA9PT0gMHhhMWIyYzNkNClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIENvdWxkIG5vdCBkZXRlcm1pbmUgZW5kaWFubmVzc1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlcy5pbml0Jyk7XHJcblxyXG4gICAgRmVhdHVyZXMuY2FudmFzID0gISF3aW5kb3dbJ0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCddIHx8IE9TLmNvY29vbkpTO1xyXG5cclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmxvY2FsU3RvcmFnZSA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICB7XHJcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgRmVhdHVyZXMuZmlsZSA9ICEhd2luZG93WydGaWxlJ10gJiYgISF3aW5kb3dbJ0ZpbGVSZWFkZXInXSAmJiAhIXdpbmRvd1snRmlsZUxpc3QnXSAmJiAhIXdpbmRvd1snQmxvYiddO1xyXG4gICAgRmVhdHVyZXMuZmlsZVN5c3RlbSA9ICEhd2luZG93WydyZXF1ZXN0RmlsZVN5c3RlbSddO1xyXG5cclxuICAgIHZhciBpc1VpbnQ4ID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIHRlc3RXZWJHTCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snV2ViR0xSZW5kZXJpbmdDb250ZXh0J10pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IENhbnZhc1Bvb2wuY3JlYXRlV2ViR0wodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKE9TLmNvY29vbkpTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zY3JlZW5jYW52YXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjYW52YXMyRCA9IENhbnZhc1Bvb2wuY3JlYXRlMkQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eDJEID0gY2FudmFzMkQuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgQ2FuJ3QgYmUgZG9uZSBvbiBhIHdlYmdsIGNvbnRleHRcclxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IGN0eDJELmNyZWF0ZUltYWdlRGF0YSgxLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAqIFRlc3QgdG8gc2VlIGlmIEltYWdlRGF0YSB1c2VzIENhbnZhc1BpeGVsQXJyYXkgb3IgVWludDhDbGFtcGVkQXJyYXkuXHJcbiAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAqIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlzVWludDggPSBpbWFnZS5kYXRhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzKTtcclxuICAgICAgICAgICAgICAgIENhbnZhc1Bvb2wucmVtb3ZlKGNhbnZhczJEKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGN0eCAhPT0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIEZlYXR1cmVzLndlYkdMID0gdGVzdFdlYkdMKCk7XHJcblxyXG4gICAgRmVhdHVyZXMud29ya2VyID0gISF3aW5kb3dbJ1dvcmtlciddO1xyXG5cclxuICAgIEZlYXR1cmVzLnBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iub0dldFVzZXJNZWRpYTtcclxuXHJcbiAgICB3aW5kb3cuVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5tb3pVUkwgfHwgd2luZG93Lm1zVVJMO1xyXG5cclxuICAgIEZlYXR1cmVzLmdldFVzZXJNZWRpYSA9IEZlYXR1cmVzLmdldFVzZXJNZWRpYSAmJiAhIW5hdmlnYXRvci5nZXRVc2VyTWVkaWEgJiYgISF3aW5kb3cuVVJMO1xyXG5cclxuICAgIC8vIE9sZGVyIHZlcnNpb25zIG9mIGZpcmVmb3ggKDwgMjEpIGFwcGFyZW50bHkgY2xhaW0gc3VwcG9ydCBidXQgdXNlciBtZWRpYSBkb2VzIG5vdCBhY3R1YWxseSB3b3JrXHJcbiAgICBpZiAoQnJvd3Nlci5maXJlZm94ICYmIEJyb3dzZXIuZmlyZWZveFZlcnNpb24gPCAyMSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5nZXRVc2VyTWVkaWEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGNsdWRlcyBpT1MgdmVyc2lvbnMgYXMgdGhleSBnZW5lcmFsbHkgd3JhcCBVSVdlYlZpZXcgKGVnLiBTYWZhcmkgV2ViS2l0KSBhbmQgaXRcclxuICAgIC8vIGlzIHNhZmVyIHRvIG5vdCB0cnkgYW5kIHVzZSB0aGUgZmFzdCBjb3B5LW92ZXIgbWV0aG9kLlxyXG4gICAgaWYgKCFPUy5pT1MgJiYgKEJyb3dzZXIuaWUgfHwgQnJvd3Nlci5maXJlZm94IHx8IEJyb3dzZXIuY2hyb21lKSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5jYW52YXNCaXRCbHRTaGlmdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gS25vd24gbm90IHRvIHdvcmtcclxuICAgIGlmIChCcm93c2VyLnNhZmFyaSB8fCBCcm93c2VyLm1vYmlsZVNhZmFyaSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5jYW52YXNCaXRCbHRTaGlmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRvci52aWJyYXRlID0gbmF2aWdhdG9yLnZpYnJhdGUgfHwgbmF2aWdhdG9yLndlYmtpdFZpYnJhdGUgfHwgbmF2aWdhdG9yLm1velZpYnJhdGUgfHwgbmF2aWdhdG9yLm1zVmlicmF0ZTtcclxuXHJcbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgRmVhdHVyZXMudmlicmF0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJylcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gPSBjaGVja0lzTGl0dGxlRW5kaWFuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRmVhdHVyZXMuc3VwcG9ydDMyYml0ID0gKFxyXG4gICAgICAgIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgRmVhdHVyZXMubGl0dGxlRW5kaWFuICE9PSBudWxsICYmXHJcbiAgICAgICAgaXNVaW50OFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gRmVhdHVyZXM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvRmVhdHVyZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0ZlYXR1cmVzLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9vbCBpbnRvIHdoaWNoIHRoZSBjYW52YXMgZWxlbWVudHMgYXJlIHBsYWNlZC5cclxuICpcclxuICogQHByb3BlcnR5IHBvb2xcclxuICogQHR5cGUgQXJyYXlcclxuICovXHJcbnZhciBwb29sID0gW107XHJcblxyXG4vLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxyXG4vLyAgYmVmb3JlIGEgUGhhc2VyLkdhbWUgaW5zdGFuY2UgaGFzIGV2ZW4gYmVlbiBjcmVhdGVkLlxyXG4vLyAgV2hpY2ggbWVhbnMgYWxsIGluc3RhbmNlcyBvZiBQaGFzZXIgR2FtZXMgb24gdGhlIHNhbWUgcGFnZVxyXG4vLyAgY2FuIHNoYXJlIHRoZSBvbmUgc2luZ2xlIHBvb2xcclxuXHJcbi8qKlxyXG4qIFRoZSBDYW52YXNQb29sIGlzIGEgZ2xvYmFsIHN0YXRpYyBvYmplY3QsIHRoYXQgYWxsb3dzIFBoYXNlciB0byByZWN5Y2xlIGFuZCBwb29sIENhbnZhcyBET00gZWxlbWVudHMuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLkNhbnZhc1Bvb2xcclxuKiBAc3RhdGljXHJcbiovXHJcbnZhciBDYW52YXNQb29sID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBuZXcgQ2FudmFzIERPTSBlbGVtZW50LCBvciBwdWxscyBvbmUgZnJvbSB0aGUgcG9vbCBpZiBmcmVlLlxyXG4gICAgKiBcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5jcmVhdGVcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAcGFyYW0ge2FueX0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IFRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICovXHJcbiAgICB2YXIgY3JlYXRlID0gZnVuY3Rpb24gKHBhcmVudCwgd2lkdGgsIGhlaWdodCwgdHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCkgeyB3aWR0aCA9IDE7IH1cclxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQpIHsgaGVpZ2h0ID0gMTsgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxyXG5cclxuICAgICAgICB2YXIgY2FudmFzO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBmaXJzdCh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW52YXNQb29sLmNyZWF0ZSBuZXcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgY2FudmFzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHBvb2wucHVzaChjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzID0gY29udGFpbmVyLmNhbnZhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIGV4aXN0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY2FudmFzID0gY29udGFpbmVyLmNhbnZhcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3JlYXRlMkQgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5DQU5WQVMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3JlYXRlV2ViR0wgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGUocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBDT05TVC5XRUJHTCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBmaXJzdCBmcmVlIGNhbnZhcyBpbmRleCBmcm9tIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZpcnN0XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAodHlwZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7IHR5cGUgPSBDT05TVC5DQU5WQVM7IH1cclxuXHJcbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5wYXJlbnQgJiYgY29udGFpbmVyLnR5cGUgPT09IHR5cGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBMb29rcyB1cCBhIGNhbnZhcyBiYXNlZCBvbiBpdHMgcGFyZW50LCBhbmQgaWYgZm91bmQgcHV0cyBpdCBiYWNrIGluIHRoZSBwb29sLCBmcmVlaW5nIGl0IHVwIGZvciByZS11c2UuXHJcbiAgICAqIFRoZSBjYW52YXMgaGFzIGl0cyB3aWR0aCBhbmQgaGVpZ2h0IHNldCB0byAxLCBhbmQgaXRzIHBhcmVudCBhdHRyaWJ1dGUgbnVsbGVkLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLnJlbW92ZVxyXG4gICAgKiBAcGFyYW0ge2FueXxIVE1MQ2FudmFzRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICAgdmFyIHJlbW92ZSA9IGZ1bmN0aW9uIChwYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIENoZWNrIHRvIHNlZSBpZiB0aGUgcGFyZW50IGlzIGEgY2FudmFzIG9iamVjdFxyXG4gICAgICAgIHZhciBpc0NhbnZhcyA9IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgoaXNDYW52YXMgJiYgY29udGFpbmVyLmNhbnZhcyA9PT0gcGFyZW50KSB8fCAoIWlzQ2FudmFzICYmIGNvbnRhaW5lci5wYXJlbnQgPT09IHBhcmVudCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW52YXNQb29sLnJlbW92ZSBmb3VuZCBhbmQgcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2FudmFzLndpZHRoID0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jYW52YXMuaGVpZ2h0ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHVzZWQgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldFRvdGFsXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpbi11c2UgKHBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqL1xyXG4gICAgdmFyIHRvdGFsID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYyA9IDA7XHJcblxyXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiBmcmVlIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cclxuICAgICogXHJcbiAgICAqIEBzdGF0aWNcclxuICAgICogQG1ldGhvZCBQaGFzZXIuQ2FudmFzUG9vbC5nZXRGcmVlXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBmcmVlICh1bi1wYXJlbnRlZCkgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKi9cclxuICAgIHZhciBmcmVlID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcG9vbC5sZW5ndGggLSB0b3RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlLFxyXG4gICAgICAgIGNyZWF0ZTJEOiBjcmVhdGUyRCxcclxuICAgICAgICBjcmVhdGVXZWJHTDogY3JlYXRlV2ViR0wsXHJcbiAgICAgICAgZmlyc3Q6IGZpcnN0LFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxyXG4gICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICBmcmVlOiBmcmVlLFxyXG4gICAgICAgIHBvb2w6IHBvb2xcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyAgSWYgd2UgZXhwb3J0IHRoZSBjYWxsZWQgZnVuY3Rpb24gaGVyZSwgaXQnbGwgb25seSBiZSBpbnZva2VkIG9uY2UgKG5vdCBldmVyeSB0aW1lIGl0J3MgcmVxdWlyZWQpLlxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1Bvb2woKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0NhbnZhc1Bvb2wuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZG9tL0NhbnZhc1Bvb2wuanMiLCJ2YXIgRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgdGFyZ2V0KVxyXG57XHJcbiAgICB0aGlzLmRpc3BhdGNoZXI7XHJcblxyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuXHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuXHJcbiAgICB0aGlzLl9wcm9wYWdhdGUgPSB0cnVlO1xyXG59O1xyXG5cclxuRXZlbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnQ7XHJcblxyXG5FdmVudC5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIChkaXNwYXRjaGVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9wYWdhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ldmVudHMvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50RGlzcGF0Y2hlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHRoaXMubGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBFdmVudERpc3BhdGNoZXIuU1RBVEVfUEVORElORztcclxufTtcclxuXHJcbkV2ZW50RGlzcGF0Y2hlci5TVEFURV9QRU5ESU5HID0gMDtcclxuRXZlbnREaXNwYXRjaGVyLlNUQVRFX0RJU1BBVENISU5HID0gMTtcclxuRXZlbnREaXNwYXRjaGVyLlNUQVRFX1JFTU9WSU5HX0FMTCA9IDI7XHJcbkV2ZW50RGlzcGF0Y2hlci5TVEFURV9ERVNUUk9ZRUQgPSAzO1xyXG5cclxuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RGlzcGF0Y2hlcjtcclxuXHJcbkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgLy8gIFByaXZhdGVcclxuICAgIGFkZDogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSwgaXNPbmNlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEhhcyB0aGUgRXZlbnREaXNwYXRjaGVyIGJlZW4gZGVzdHJveWVkP1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQWRkIGxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3R5cGVdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzKHR5cGUsIGxpc3RlbmVyKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSwgaXNPbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIsIHByaW9yaXR5OiBwcmlvcml0eSwgaXNPbmNlOiBpc09uY2UsIHRvUmVtb3ZlOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVycy5zb3J0KHRoaXMuc29ydEhhbmRsZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzb3J0SGFuZGxlcjogZnVuY3Rpb24gKGxpc3RlbmVyQSwgbGlzdGVuZXJCKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChsaXN0ZW5lckIucHJpb3JpdHkgPCBsaXN0ZW5lckEucHJpb3JpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyQi5wcmlvcml0eSA+IGxpc3RlbmVyQS5wcmlvcml0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSwgaXNPbmNlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFRoZXkncmUgdHJ5aW5nIHRvIGFkZCB0aGUgc2FtZSBsaXN0ZW5lciBhZ2Fpbiwgc28ganVzdCB1cGRhdGUgdGhlIHByaW9yaXR5ICsgb25jZVxyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uaXNPbmNlID0gaXNPbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIE5lZWQgdG8gdGVzdCB3aGF0IGhhcHBlbnMgaWYgYXJyYXkgaXMgc29ydGVkIGR1cmluZyBESVNQQVRDSCBwaGFzZSAoZG9lcyBpdCBzY3JldyBpdCBhbGwgdXA/KVxyXG5cclxuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHByaW9yaXR5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7IHByaW9yaXR5ID0gMDsgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZCh0eXBlLCBsaXN0ZW5lciwgcHJpb3JpdHksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uY2U6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgcHJpb3JpdHkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB1bmRlZmluZWQpIHsgcHJpb3JpdHkgPSAwOyB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkKHR5cGUsIGxpc3RlbmVyLCBwcmlvcml0eSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbDogZnVuY3Rpb24gKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycyB8fCAhdGhpcy5saXN0ZW5lcnNbdHlwZV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnNbdHlwZV0ubGVuZ3RoO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXM6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcilcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzIHx8ICF0aGlzLmxpc3RlbmVyc1t0eXBlXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIuXHJcbiAgICAvLyAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgbGlzdGVuZXIgcmVnaXN0ZXJlZCB3aXRoIHRoZSBFdmVudERpc3BhdGNoZXIsIGEgY2FsbCB0byB0aGlzIG1ldGhvZCBoYXMgbm8gZWZmZWN0LlxyXG4gICAgb2ZmOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycyB8fCAhdGhpcy5saXN0ZW5lcnNbdHlwZV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBFdmVudERpc3BhdGNoZXIuU1RBVEVfRElTUEFUQ0hJTkcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZsYWcgbGlzdGVuZXIgZm9yIHJlbW92YWwnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0udG9SZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgbGlzdGVuZXInLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyAgQWRkIGluIGEgZGlzcGF0Y2ggbG9jaywgdG8gc3RvcCB0aGUgZGlzcGF0Y2hlciBmcm9tIGJlaW5nIGludm9rZWQgZHVyaW5nIGFuIGV2ZW50IGNhbGxiYWNrXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gRXZlbnREaXNwYXRjaGVyLlNUQVRFX1BFTkRJTkcgfHwgIXRoaXMubGlzdGVuZXJzW2V2ZW50LnR5cGVdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xyXG5cclxuICAgICAgICAvLyAgVGhpcyB3YXMgYSB2YWxpZCBkaXNwYXRjaCBjYWxsLCB3ZSBqdXN0IGhhZCBub3RoaW5nIHRvIGRvIC4uLlxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IEV2ZW50RGlzcGF0Y2hlci5TVEFURV9ESVNQQVRDSElORztcclxuXHJcbiAgICAgICAgZXZlbnQucmVzZXQodGhpcyk7XHJcblxyXG4gICAgICAgIHZhciB0b1JlbW92ZSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcclxuICAgICAgICAvLyB2YXIgZW50cmllcyA9IGxpc3RlbmVycztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BhdGNoaW5nJywgZW50cmllcy5sZW5ndGgsICdsaXN0ZW5lcnMnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudHJ5LnRvUmVtb3ZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b1JlbW92ZS5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgQWRkIEN1c3RvbSBFdmVudHNcclxuICAgICAgICAgICAgLy8gIElmIHRoaXMgYWRqdXN0cyB0aGUgZW50cmllcy5sZW5ndGggZm9yIGFueSByZWFzb24sIHRoZSByZWZlcmVuY2UgaXMgc3RpbGwgdmFsaWRcclxuICAgICAgICAgICAgZW50cnkubGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgSGFzIHRoZSBjYWxsYmFjayBkb25lIHNvbWV0aGluZyBkaXNhc3Ryb3VzPyBMaWtlIGNhbGxlZCByZW1vdmVBbGwsIG9yIG51a2VkIHRoZSBkaXNwYXRjaGVyP1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IEV2ZW50RGlzcGF0Y2hlci5TVEFURV9ESVNQQVRDSElORylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFl1cCEgTGV0J3MgZ2V0IG91dCBvZiBoZXJlIC4uLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBXYXMgYSAnb25jZScgb3Igd2FzIHJlbW92ZWQgZHVyaW5nIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaXNPbmNlIHx8IGVudHJ5LnRvUmVtb3ZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b1JlbW92ZS5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIEhhcyB0aGUgZXZlbnQgYmVlbiBoYWx0ZWQ/XHJcbiAgICAgICAgICAgIGlmICghZXZlbnQuX3Byb3BhZ2F0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIEJyZWFrIG91dCwgYSBsaXN0ZW5lciBoYXMgY2FsbGVkIEV2ZW50LnN0b3BQcm9wYWdhdGlvblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gRXZlbnREaXNwYXRjaGVyLlNUQVRFX1JFTU9WSU5HX0FMTClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBFdmVudERpc3BhdGNoZXIuU1RBVEVfREVTVFJPWUVEKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBBbnl0aGluZyBpbiB0aGUgdG9SZW1vdmUgbGlzdD9cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGVhbmluZyBvdXQnLCB0b1JlbW92ZS5sZW5ndGgsICdsaXN0ZW5lcnMnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b1JlbW92ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoZXZlbnQudHlwZSwgdG9SZW1vdmVbaV0ubGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0b1JlbW92ZS5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBFdmVudERpc3BhdGNoZXIuU1RBVEVfUEVORElORztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgUmVtb3ZlcyBhbGwgbGlzdGVuZXJzLCBidXQgcmV0YWlucyB0aGUgZXZlbnQgdHlwZSBlbnRyaWVzXHJcbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBFdmVudERpc3BhdGNoZXIuU1RBVEVfRElTUEFUQ0hJTkcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IEV2ZW50RGlzcGF0Y2hlci5TVEFURV9SRU1PVklOR19BTEw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBldmVudFR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IEV2ZW50RGlzcGF0Y2hlci5TVEFURV9ESVNQQVRDSElORylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRXZlbnREaXNwYXRjaGVyLlNUQVRFX0RFU1RST1lFRDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGV2ZW50VHlwZSBpbiB0aGlzLmxpc3RlbmVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0ubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudERpc3BhdGNoZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBGSUxFX0NPTlNUID0ge1xyXG5cclxuICAgIFBFTkRJTkc6IDAsICAgICAgLy8gZmlsZSBpcyBpbiB0aGUgbG9hZCBxdWV1ZSBidXQgbm90IHlldCBzdGFydGVkXHJcbiAgICBMT0FESU5HOiAxLCAgICAgIC8vIGZpbGUgaGFzIGJlZW4gc3RhcnRlZCB0byBsb2FkIGJ5IHRoZSBsb2FkZXIgKG9uTG9hZCBjYWxsZWQpXHJcbiAgICBMT0FERUQ6IDIsICAgICAgIC8vIGZpbGUgaGFzIGxvYWRlZCBzdWNjZXNzZnVsbHksIGF3YWl0aW5nIHByb2Nlc3NpbmdcclxuICAgIEZBSUxFRDogMywgICAgICAgLy8gZmlsZSBmYWlsZWQgdG8gbG9hZFxyXG4gICAgUFJPQ0VTU0lORzogNCwgICAvLyBmaWxlIGlzIGJlaW5nIHByb2Nlc3NlZCAob25Qcm9jZXNzIGNhbGxiYWNrKVxyXG4gICAgQ09NUExFVEU6IDUsICAgICAvLyBmaWxlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nXHJcbiAgICBERVNUUk9ZRUQ6IDYgICAgIC8vIGZpbGUgaGFzIGJlZW4gZGVzdHJveWVkXHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGSUxFX0NPTlNUO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9sb2FkZXIvY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHZhciBGSUxFX0NPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIEZpbGUgPSByZXF1aXJlKCcuLi9GaWxlJyk7XHJcblxyXG4vLyAgRGlmZmVyZW50IGltYWdlcyBiYXNlZCBvbiBkZXZpY2UtcGl4ZWwgcmF0aW9cclxuLy8gIEFuZCBtYXliZSBvbiBzY3JlZW4gcmVzb2x1dGlvbiBicmVha3BvaW50c1xyXG5cclxuLy8gIDIgb3B0aW9ucyAtIGNhbiBlaXRoZXIgcmV0dXJuIHRoZSBGaWxlIG9iamVjdCwgc28gdGhleSBjYW4gbGlzdGVuIHRvIGl0IHNwZWNpZmljYWxseVxyXG4vLyAgT3IgY2FuIHJldHVybiB0aGUgTG9hZGVyLCBzbyB0aGV5IGNhbiBjaGFpbiBjYWxscz9cclxuXHJcbnZhciBJbWFnZUZpbGUgPSBmdW5jdGlvbiAoa2V5LCB1cmwsIHBhdGgpXHJcbntcclxuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHsgcGF0aCA9ICcnOyB9XHJcblxyXG4gICAgaWYgKCFrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdMb2FkZXI6IFlvdSB0cmllZCB0byBsb2FkIGFuIEltYWdlLCBidXQgbm8ga2V5IHdhcyBnaXZlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgdXJsID0gcGF0aCArIGtleSArICcucG5nJztcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB1cmwgPSBwYXRoLmNvbmNhdCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmaWxlID0gbmV3IEZpbGUoJ2ltYWdlJywga2V5LCB1cmwsICdhcnJheWJ1ZmZlcicpO1xyXG5cclxuICAgIHJldHVybiBmaWxlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZUZpbGU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9maWxldHlwZXMvSW1hZ2VGaWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZS5qcyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XHJcblxyXG52YXIgU2V0dGluZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcclxue1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKVxyXG4gICAge1xyXG4gICAgICAgIGNvbmZpZyA9IHsga2V5OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBQYXNzIHRoZSAnaGFzT3duUHJvcGVydHknIGNoZWNrc1xyXG4gICAgICAgIGNvbmZpZyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTsgLy8gIERvIHdlIGFjdHVhbGx5IG5lZWQgdGhpcyByZWZlcmVuY2U/IFRoaXMgY291bGQganVzdCBiZSBhIHByb3BlcnR5IGJ1Y2tldFxyXG5cclxuICAgIHRoaXMuc3RhdHVzID0gQ09OU1Quc3RhdGUuUEVORElORztcclxuXHJcbiAgICAvLyAgV2hpY2ggcGFydCBvZiB0aGlzIFN0YXRlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQ/XHJcbiAgICAvLyAgcHJlbG9hZCwgY3JlYXRlLCB1cGRhdGUsIHNodXRkb3duLCBldGNcclxuICAgIHRoaXMub3AgPSBDT05TVC5zdGF0ZS5CT09UO1xyXG5cclxuICAgIHRoaXMua2V5ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAna2V5JywgJycpO1xyXG4gICAgdGhpcy5hY3RpdmUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdhY3RpdmUnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnZpc2libGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd2aXNpYmxlJywgdHJ1ZSk7XHJcbiAgICB0aGlzLnNjYWxlTW9kZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3NjYWxlTW9kZScsIENPTlNULnNjYWxlTW9kZXMuREVGQVVMVCk7XHJcbiAgICB0aGlzLmZwcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZwcycsIDYwKTtcclxuICAgIHRoaXMueCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3gnLCAwKTtcclxuICAgIHRoaXMueSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3knLCAwKTtcclxuXHJcbiAgICAvLyAgLTEgbWVhbnMgdGhlIFN0YXRlIE1hbmFnZXIgd2lsbCBzZXQgaXQgdG8gYmUgdGhlIEdhbWUgZGltZW5zaW9uc1xyXG4gICAgdGhpcy53aWR0aCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3dpZHRoJywgLTEpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCAtMSk7XHJcbn07XHJcblxyXG4vLyAgVW5sZXNzIHdlIGFkZCBzb21lIGFjdHVhbCBmdW5jdGlvbnMgaW4gaGVyZSwgd2UnbGwgbWFrZSB0aGlzIGp1c3QgcmV0dXJuIGFuIE9iamVjdCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlXHJcblNldHRpbmdzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldHRpbmdzO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1NldHRpbmdzLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudERpc3BhdGNoZXInKTtcclxudmFyIEdhbWVPYmplY3RGYWN0b3J5ID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5Jyk7XHJcbnZhciBHYW1lT2JqZWN0Q3JlYXRvciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvcicpO1xyXG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0xvYWRlcicpO1xyXG52YXIgTWFpbkxvb3AgPSByZXF1aXJlKCcuL3N5c3RlbXMvTWFpbkxvb3AnKTtcclxudmFyIFVwZGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuL3N5c3RlbXMvVXBkYXRlTWFuYWdlcicpO1xyXG5cclxudmFyIFN5c3RlbXMgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcclxue1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIHRoaXMuZXZlbnRzO1xyXG5cclxuICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBtYW5hZ2VycyAoRmFjdG9yeSwgVHdlZW5zLCBMb2FkZXIsIFBoeXNpY3MsIGV0YylcclxuICAgIHRoaXMuYWRkO1xyXG4gICAgdGhpcy5tYWtlO1xyXG4gICAgdGhpcy5pbnB1dDtcclxuICAgIHRoaXMubG9hZDtcclxuICAgIHRoaXMudHdlZW5zO1xyXG4gICAgdGhpcy5tYWlubG9vcDtcclxuICAgIHRoaXMudXBkYXRlcztcclxuXHJcbiAgICAvLyAgU3RhdGUgc3BlY2lmaWMgcHJvcGVydGllcyAodHJhbnNmb3JtLCBkYXRhLCBjaGlsZHJlbiwgZXRjKVxyXG4gICAgdGhpcy5jYW1lcmE7XHJcbiAgICB0aGlzLmNoaWxkcmVuO1xyXG4gICAgdGhpcy5jb2xvcjtcclxuICAgIHRoaXMuZGF0YTtcclxuICAgIHRoaXMuZmJvO1xyXG4gICAgdGhpcy50aW1lO1xyXG4gICAgdGhpcy50cmFuc2Zvcm07XHJcbn07XHJcblxyXG5TeXN0ZW1zLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5c3RlbXM7XHJcblxyXG5TeXN0ZW1zLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZS5TeXN0ZW1zLmluaXQnKTtcclxuXHJcbiAgICAgICAgLy8gIEFsbCBvZiB0aGUgc3lzdGVtcyBjYW4gdXNlIHRoZSBTdGF0ZSBsZXZlbCBFdmVudERpc3BhdGNoZXJcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICAgICAgLy8gIFN0YXRlIHNwZWNpZmljIG1hbmFnZXJzIChGYWN0b3J5LCBUd2VlbnMsIExvYWRlciwgUGh5c2ljcywgZXRjKVxyXG4gICAgICAgIC8vICBBbGwgdGhlc2UgdG8gYmUgc2V0IGJ5IGEgU3RhdGUgQ29uZmlnIHBhY2thZ2VcclxuXHJcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYWtlID0gR2FtZU9iamVjdENyZWF0b3IodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5tYWlubG9vcCA9IG5ldyBNYWluTG9vcCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnNldHRpbmdzLmZwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVzID0gbmV3IFVwZGF0ZU1hbmFnZXIodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkID0gbmV3IExvYWRlcih0aGlzLnN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50d2VlbnMgPSBuZXcgUGhhc2VyLlR3ZWVuTWFuYWdlcih0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLmlucHV0ID0gbmV3IFBoYXNlci5TdGF0ZS5JbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLnBoeXNpY3MgPSBuZXcgUGhhc2VyLlBoeXNpY3MuQXJjYWRlKHRoaXMuc3RhdGUsIDgwMCwgNjAwKTtcclxuXHJcbiAgICAgICAgLy8gIFN0YXRlIHNwZWNpZmljIHByb3BlcnRpZXMgKHRyYW5zZm9ybSwgZGF0YSwgY2hpbGRyZW4sIGV0YylcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYSA9IG5ldyBQaGFzZXIuQ2FtZXJhKHRoaXMuc3RhdGUsIDAsIDAsIDgwMCwgNjAwKTtcclxuICAgICAgICAvLyB0aGlzLmNoaWxkcmVuID0gbmV3IFBoYXNlci5Db21wb25lbnQuQ2hpbGRyZW4odGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2xvciA9IG5ldyBQaGFzZXIuQ29tcG9uZW50LkNvbG9yKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YSA9IG5ldyBQaGFzZXIuQ29tcG9uZW50LkRhdGEodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XHJcblxyXG4gICAgICAgIC8vICBCb290XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW5wdXQuaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyAgRGVmYXVsdHNcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMgPSB0aGlzLmV2ZW50cztcclxuICAgICAgICB0aGlzLnN0YXRlLmFkZCA9IHRoaXMuYWRkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZCA9IHRoaXMubG9hZDtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dDtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnRyYW5zZm9ybSA9IHRoaXMuY2FtZXJhLnRyYW5zZm9ybTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0YXRlID0gdGhpcy5zdGF0ZS5nYW1lLnN0YXRlO1xyXG5cclxuICAgICAgICAvLyAgSGVyZSB3ZSBjYW4gY2hlY2sgd2hpY2ggU3lzdGVtcyB0byBpbnN0YWxsIGFzIHByb3BlcnRpZXMgaW50byB0aGUgU3RhdGUgb2JqZWN0XHJcbiAgICAgICAgLy8gIChkZWZhdWx0IHN5c3RlbXMgYWx3YXlzIGV4aXN0IGluIGhlcmUsIHJlZ2FyZGxlc3MpXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgICAgIHZhciB0ID0gdHlwZW9mIGNvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHQgIT09ICdvYmplY3QnIHx8ICh0ID09PSAnb2JqZWN0JyAmJiAhdC5oYXNPd25Qcm9wZXJ0eSgnc3lzdGVtcycpKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLy8gdGhpcy5rZXkgPSAoY29uZmlnLmhhc093blByb3BlcnR5KCdrZXknKSkgPyBjb25maWcua2V5IDogJyc7XHJcbiAgICB9LFxyXG5cclxuICAgIGJlZ2luOiBmdW5jdGlvbiAodGltZXN0YW1wLCBmcmFtZURlbHRhKVxyXG4gICAge1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RlcCwgcGh5c2ljc1N0ZXApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy50d2VlbnMudXBkYXRlKHRpbWVzdGVwKTtcclxuICAgICAgICAvLyB0aGlzLnBoeXNpY3MucHJlVXBkYXRlKHBoeXNpY3NTdGVwKTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJlUmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5kOiBmdW5jdGlvbiAoZnBzLCBwYW5pYylcclxuICAgIHtcclxuICAgICAgICBpZiAocGFuaWMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHBhdHRlcm4gaW50cm9kdWNlcyBub24tZGV0ZXJtaW5pc3RpYyBiZWhhdmlvciwgYnV0IGluIHRoaXMgY2FzZVxyXG4gICAgICAgICAgICAvLyBpdCdzIGJldHRlciB0aGFuIHRoZSBhbHRlcm5hdGl2ZSAodGhlIGFwcGxpY2F0aW9uIHdvdWxkIGxvb2sgbGlrZSBpdFxyXG4gICAgICAgICAgICAvLyB3YXMgcnVubmluZyB2ZXJ5IHF1aWNrbHkgdW50aWwgdGhlIHNpbXVsYXRpb24gY2F1Z2h0IHVwIHRvIHJlYWxcclxuICAgICAgICAgICAgLy8gdGltZSkuXHJcbiAgICAgICAgICAgIHZhciBkaXNjYXJkZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm1haW5sb29wLnJlc2V0RnJhbWVEZWx0YSgpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWFpbiBsb29wIHBhbmlja2VkLCBwcm9iYWJseSBiZWNhdXNlIHRoZSBicm93c2VyIHRhYiB3YXMgcHV0IGluIHRoZSBiYWNrZ3JvdW5kLiBEaXNjYXJkaW5nICcgKyBkaXNjYXJkZWRUaW1lICsgJ21zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3lzdGVtcztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3lzdGVtcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU3lzdGVtcy5qcyIsIlxyXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIC8vICBOT09QIChObyBPcGVyYXRpb24pIENhbGxiYWNrXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5PT1A7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL05PT1AuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIC8vICBEb2luZyB0aGlzIG1ha2VzIGl0IGF2YWlsYWJsZSB1bmRlciBQaGFzZXIuR2FtZVxyXG4gICAgR2FtZTogcmVxdWlyZSgnLi9HYW1lJyksXHJcblxyXG4gICAgRXZlbnQ6IHJlcXVpcmUoJy4uL2V2ZW50cy9FdmVudCcpLFxyXG4gICAgRXZlbnREaXNwYXRjaGVyOiByZXF1aXJlKCcuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyJyksXHJcblxyXG4gICAgTG9hZGVyOiB7XHJcbiAgICAgICAgSW1hZ2VGaWxlOiByZXF1aXJlKCcuLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpXHJcbiAgICB9XHJcblxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L2luZGV4LmpzIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcG9seWZpbGxzL2luZGV4LmpzIiwicmVxdWlyZSgnLi9BcnJheS5mb3JFYWNoJyk7XHJcbnJlcXVpcmUoJy4vQXJyYXkuaXNBcnJheScpO1xyXG5yZXF1aXJlKCcuL2NvbnNvbGUnKTtcclxucmVxdWlyZSgnLi9GdW5jdGlvbi5iaW5kJyk7XHJcbnJlcXVpcmUoJy4vTWF0aC50cnVuYycpO1xyXG5yZXF1aXJlKCcuL3BlcmZvcm1hbmNlLm5vdycpO1xyXG5yZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xyXG5yZXF1aXJlKCcuL1VpbnQzMkFycmF5Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XHJcblxyXG52YXIgZGVmYXVsdEJhbm5lckNvbG9yID0gW1xyXG4gICAgJyNmZjAwMDAnLFxyXG4gICAgJyNmZmZmMDAnLFxyXG4gICAgJyMwMGZmMDAnLFxyXG4gICAgJyMwMGZmZmYnLFxyXG4gICAgJyMwMDAwMDAnXHJcbl07XHJcblxyXG52YXIgZGVmYXVsdEJhbm5lclRleHRDb2xvciA9ICcjZmZmZmZmJztcclxuXHJcbmZ1bmN0aW9uIENvbmZpZyAoY29uZmlnKVxyXG57XHJcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHsgY29uZmlnID0ge307IH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAxMDI0KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnaGVpZ2h0JywgNzY4KTtcclxuXHJcbiAgICB0aGlzLnJlc29sdXRpb24gPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdyZXNvbHV0aW9uJywgMSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJUeXBlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHlwZScsIENPTlNULkFVVE8pO1xyXG5cclxuICAgIHRoaXMucGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGFyZW50JywgbnVsbCk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhcycsIG51bGwpO1xyXG4gICAgdGhpcy5jYW52YXNTdHlsZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhc1N0eWxlJywgbnVsbCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZUNvbmZpZyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3N0YXRlJywgbnVsbCk7XHJcblxyXG4gICAgdGhpcy5zZWVkID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2VlZCcsIFsgKERhdGUubm93KCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpIF0pO1xyXG5cclxuICAgIHRoaXMuZ2FtZVRpdGxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndGl0bGUnLCAnJyk7XHJcbiAgICB0aGlzLmdhbWVVUkwgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd1cmwnLCAnaHR0cDovL3BoYXNlci5pbycpO1xyXG4gICAgdGhpcy5nYW1lVmVyc2lvbiA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3ZlcnNpb24nLCAnJyk7XHJcblxyXG4gICAgLy8gIElmIHlvdSBkbzogeyBiYW5uZXI6IGZhbHNlIH0gaXQgd29uJ3QgZGlzcGxheSBhbnkgYmFubmVyIGF0IGFsbFxyXG4gICAgdGhpcy5oaWRlQmFubmVyID0gKEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lcicsIGZhbHNlKSA9PT0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuaGlkZVBoYXNlciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5oaWRlUGhhc2VyJywgZmFsc2UpO1xyXG4gICAgdGhpcy5iYW5uZXJUZXh0Q29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIudGV4dCcsIGRlZmF1bHRCYW5uZXJUZXh0Q29sb3IpO1xyXG4gICAgdGhpcy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuYmFja2dyb3VuZCcsIGRlZmF1bHRCYW5uZXJDb2xvcik7XHJcbiAgIFxyXG4gICAgdGhpcy5mb3JjZVNldFRpbWVPdXQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdmb3JjZVNldFRpbWVPdXQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHJhbnNwYXJlbnQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnBpeGVsQXJ0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGl4ZWxBcnQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gIENhbGxiYWNrc1xyXG4gICAgdGhpcy5wcmVCb290ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FsbGJhY2tzLnByZUJvb3QnLCBOT09QKTtcclxuICAgIHRoaXMucG9zdEJvb3QgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdjYWxsYmFja3MucG9zdEJvb3QnLCBOT09QKTtcclxuXHJcbn1cclxuXHJcbkNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25maWc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9Db25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvQ29uZmlnLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIENhbnZhc1Bvb2wgPSByZXF1aXJlKCcuLi9kb20vQ2FudmFzUG9vbCcpO1xyXG52YXIgRmVhdHVyZXMgPSByZXF1aXJlKCcuLi9kZXZpY2UvRmVhdHVyZXMnKTtcclxuXHJcbi8qKlxyXG4qIENoZWNrcyBpZiB0aGUgZGV2aWNlIGlzIGNhcGFibGUgb2YgdXNpbmcgdGhlIHJlcXVlc3RlZCByZW5kZXJlciBhbmQgc2V0cyBpdCB1cCBvciBhbiBhbHRlcm5hdGl2ZSBpZiBub3QuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5HYW1lI3NldFVwUmVuZGVyZXJcclxuKiBAcHJvdGVjdGVkXHJcbiovXHJcbnZhciBDcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XHJcblxyXG4gICAgLy8gIEdhbWUgZWl0aGVyIHJlcXVlc3RlZCBDYW52YXMsXHJcbiAgICAvLyAgb3IgcmVxdWVzdGVkIEFVVE8gb3IgV0VCR0wgYnV0IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpdCwgc28gZmFsbCBiYWNrIHRvIENhbnZhc1xyXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMgfHwgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBDT05TVC5DQU5WQVMgJiYgIUZlYXR1cmVzLndlYkdMKSlcclxuICAgIHtcclxuICAgICAgICBpZiAoRmVhdHVyZXMuY2FudmFzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZXkgcmVxdWVzdGVkIENhbnZhcyBhbmQgdGhlaXIgYnJvd3NlciBzdXBwb3J0cyBpdFxyXG4gICAgICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULkNBTlZBUztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIENhbnZhcyBvciBXZWJHTCBjb250ZXh0LCBhYm9ydGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIEdhbWUgcmVxdWVzdGVkIFdlYkdMIGFuZCBicm93c2VyIHNheXMgaXQgc3VwcG9ydHMgaXRcclxuICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULldFQkdMO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIGl0cyBvd24gY2FudmFzIGVsZW1lbnQgdG8gdXNlP1xyXG4gICAgaWYgKGNvbmZpZy5jYW52YXMpXHJcbiAgICB7XHJcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBjb25maWcuY2FudmFzO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGUoZ2FtZSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0LCBjb25maWcucmVuZGVyVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIERvZXMgdGhlIGdhbWUgY29uZmlnIHByb3ZpZGUgc29tZSBjYW52YXMgY3NzIHN0eWxlcyB0byB1c2U/XHJcbiAgICBpZiAoY29uZmlnLmNhbnZhc1N0eWxlKVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzLnN0eWxlID0gY29uZmlnLmNhbnZhc1N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBDcmVhdGUgdGhlIHJlbmRlcmVyXHJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBXRUJHTCBSZW5kZXJlcicpO1xyXG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLldlYkdMKHRoaXMpO1xyXG4gICAgICAgIC8vIGdhbWUuY29udGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIENhbnZhcyBSZW5kZXJlcicpO1xyXG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLkNhbnZhcyh0aGlzKTtcclxuICAgICAgICAvLyBnYW1lLmNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBQaGFzZXIuSEVBRExFU1MpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5hZGRUb0RPTSh0aGlzLmNhbnZhcywgdGhpcy5wYXJlbnQsIGZhbHNlKTtcclxuICAgICAgICAvLyBQaGFzZXIuQ2FudmFzLnNldFRvdWNoQWN0aW9uKHRoaXMuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZVJlbmRlcmVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NyZWF0ZVJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIENIRUNLU1VNID0gcmVxdWlyZSgnLi4vY2hlY2tzdW0nKTtcclxuXHJcbnZhciBEZWJ1Z0hlYWRlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5oaWRlQmFubmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVuZGVyVHlwZSA9IChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuQ0FOVkFTKSA/ICdDYW52YXMnIDogJ1dlYkdMJztcclxuXHJcbiAgICB2YXIgaWUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIWllKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjID0gJyc7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbY107XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxhc3RDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IuZm9yRWFjaChmdW5jdGlvbihjb2xvcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAnICsgY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RDb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgaW5qZWN0IHRoZSB0ZXh0IGNvbG9yXHJcbiAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9ICdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgbGFzdENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjID0gYy5jb25jYXQoJyVjICcpO1xyXG5cclxuICAgICAgICAgICAgYXJncy5wdXNoKCdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVVJMIGxpbmsgYmFja2dyb3VuZCBjb2xvciAoYWx3YXlzIHdoaXRlKVxyXG4gICAgICAgIGFyZ3MucHVzaCgnYmFja2dyb3VuZDogI2ZmZicpO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmdhbWVUaXRsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdChjb25maWcuZ2FtZVRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZVZlcnNpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnIHYnICsgY29uZmlnLmdhbWVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCcgLyAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgKCcgKyByZW5kZXJUeXBlICsgJyknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGMgPSBjLmNvbmNhdCgnICVjICcgKyBjb25maWcuZ2FtZVVSTCk7XHJcblxyXG4gICAgICAgIC8vICBJbmplY3QgdGhlIG5ldyBzdHJpbmcgYmFjayBpbnRvIHRoZSBhcmdzIGFycmF5XHJcbiAgICAgICAgYXJnc1swXSA9IGM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2luZG93Wydjb25zb2xlJ10pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BoYXNlciB2JyArIENPTlNULlZFUlNJT04gKyAnIC8gaHR0cDovL3BoYXNlci5pbycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEtlZXAgdGhpcyBkdXJpbmcgZGV2IGJ1aWxkIG9ubHlcclxuICAgIGNvbnNvbGUubG9nKENIRUNLU1VNLmJ1aWxkKTtcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERlYnVnSGVhZGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0RlYnVnSGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIERldmljZSA9IHJlcXVpcmUoJy4uL2RldmljZScpO1xyXG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9Db25maWcnKTtcclxudmFyIERlYnVnSGVhZGVyID0gcmVxdWlyZSgnLi9EZWJ1Z0hlYWRlcicpO1xyXG52YXIgQ3JlYXRlUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NyZWF0ZVJlbmRlcmVyJyk7XHJcbnZhciBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCcuLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XHJcbnZhciBET01Db250ZW50TG9hZGVkID0gcmVxdWlyZSgnLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQnKTtcclxudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yJyk7XHJcbnZhciBTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuLi9zdGF0ZS9TdGF0ZU1hbmFnZXInKTtcclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcbnZhciBHYW1lT2JqZWN0cyA9IHJlcXVpcmUgKCcuLi9nYW1lb2JqZWN0cy8nKTtcclxuXHJcbnZhciBHYW1lID0gZnVuY3Rpb24gKGNvbmZpZylcclxue1xyXG4gICAgdGhpcy5jb25maWcgPSBuZXcgQ29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgLy8gIERlY2lkZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHNob3VsZCBiZSBHYW1lIHByb3BlcnRpZXMsIG9yIHBsYWNlZCBlbHNld2hlcmUgLi4uXHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ3xIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIEdhbWVzIERPTSBwYXJlbnQuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgdGhpcy5pc0Jvb3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lfSByYWYgLSBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgdGhlIGNvcmUgZ2FtZSBsb29wIHZpYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb3Igc2V0VGltZW91dFxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgdGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5UZXh0dXJlTWFuYWdlcn0gdGV4dHVyZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBUZXh0dXJlIE1hbmFnZXIuXHJcbiAgICAqL1xyXG4gICAgdGhpcy50ZXh0dXJlcyA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlVwZGF0ZU1hbmFnZXJ9IHVwZGF0ZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBVcGRhdGUgTWFuYWdlci5cclxuICAgICovXHJcbiAgICB0aGlzLnVwZGF0ZXMgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5DYWNoZX0gY2FjaGUgLSBSZWZlcmVuY2UgdG8gdGhlIGFzc2V0cyBjYWNoZS5cclxuICAgICovXHJcbiAgICB0aGlzLmNhY2hlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuSW5wdXR9IGlucHV0IC0gUmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBtYW5hZ2VyXHJcbiAgICAqL1xyXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlTWFuYWdlcn0gc3RhdGUgLSBUaGUgU3RhdGVNYW5hZ2VyLiBQaGFzZXIgaW5zdGFuY2Ugc3BlY2lmaWMuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZU1hbmFnZXIodGhpcywgdGhpcy5jb25maWcuc3RhdGVDb25maWcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5EZXZpY2V9IGRldmljZSAtIENvbnRhaW5zIGRldmljZSBpbmZvcm1hdGlvbiBhbmQgY2FwYWJpbGl0aWVzIChzaW5nbGV0b24pXHJcbiAgICAqL1xyXG4gICAgdGhpcy5kZXZpY2UgPSBEZXZpY2U7XHJcblxyXG4gICAgLy8gIE1vcmUgdGhpcyBzb21ld2hlcmUgZWxzZT8gTWF0aCBwZXJoYXBzPyBEb2Vzbid0IG5lZWQgdG8gYmUgYSBHYW1lIGxldmVsIHN5c3RlbS5cclxuICAgIHRoaXMucm5kO1xyXG5cclxuICAgIC8vICBXYWl0IGZvciB0aGUgRE9NIFJlYWR5IGV2ZW50LCB0aGVuIGNhbGwgYm9vdC5cclxuICAgIERPTUNvbnRlbnRMb2FkZWQodGhpcy5ib290LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vICBGb3IgZGVidWdnaW5nIG9ubHlcclxuICAgIHdpbmRvdy5nYW1lID0gdGhpcztcclxufTtcclxuXHJcbkdhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZTtcclxuXHJcbkdhbWUucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc0Jvb3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnByZUJvb3QoKTtcclxuXHJcbiAgICAgICAgLy8gIFByb2JhYmx5IG1vdmUgd2l0aGluIE1hdGhcclxuICAgICAgICB0aGlzLnJuZCA9IG5ldyBSYW5kb21EYXRhR2VuZXJhdG9yKHRoaXMuY29uZmlnLnNlZWQpO1xyXG5cclxuICAgICAgICBEZWJ1Z0hlYWRlcih0aGlzKTtcclxuXHJcbiAgICAgICAgQ3JlYXRlUmVuZGVyZXIodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYm9vdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnBvc3RCb290KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmFmLnN0YXJ0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICh0aW1lc3RhbXApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGltZXN0YW1wKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0ZXAodGltZXN0YW1wKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2Jvb3QvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYm9vdC9HYW1lLmpzIiwidmFyIENIRUNLU1VNID0ge1xuYnVpbGQ6ICcwYjgxMDU4MC1iYjBlLTExZTYtODE2ZC1mMzZmOWZiYjQyYjUnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBDSEVDS1NVTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jaGVja3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIEF1ZGlvID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1ZGlvRGF0YSAtIEFyZSBBdWRpbyB0YWdzIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhdWRpb0RhdGE6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkF1ZGlvIC0gSXMgdGhlIFdlYkF1ZGlvIEFQSSBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2ViQXVkaW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9nZyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBvZ2c6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdXMgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvcHVzIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9wdXM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wMyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG1wMyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtcDM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdhdiAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdhdiBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3YXY6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDYW4gdGhpcyBkZXZpY2UgcGxheSBtNGEgZmlsZXM/XHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbTRhIC0gVHJ1ZSBpZiB0aGlzIGRldmljZSBjYW4gcGxheSBtNGEgZmlsZXMuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbTRhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJtIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgd2VibSBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJtOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBkb2xieSAtIENhbiB0aGlzIGRldmljZSBwbGF5IEVDLTMgRG9sYnkgRGlnaXRhbCBQbHVzIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGRvbGJ5OiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgQXVkaW8uYXVkaW9EYXRhID0gISEod2luZG93WydBdWRpbyddKTtcclxuICAgIEF1ZGlvLndlYkF1ZGlvID0gISEod2luZG93WydBdWRpb0NvbnRleHQnXSB8fCB3aW5kb3dbJ3dlYmtpdEF1ZGlvQ29udGV4dCddKTtcclxuXHJcbiAgICB2YXIgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gISFhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGU7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby5vZ2cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cIm9wdXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vcHVzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm9wdXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm1wMyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBNaW1ldHlwZXMgYWNjZXB0ZWQ6XHJcbiAgICAgICAgICAgIC8vICBkZXZlbG9wZXIubW96aWxsYS5vcmcvRW4vTWVkaWFfZm9ybWF0c19zdXBwb3J0ZWRfYnlfdGhlX2F1ZGlvX2FuZF92aWRlb19lbGVtZW50c1xyXG4gICAgICAgICAgICAvLyAgYml0Lmx5L2lwaG9uZW9zY29kZWNzXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ud2F2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ubTRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby53ZWJtID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0O2NvZGVjcz1cImVjLTNcIicpICE9PSAnJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKEJyb3dzZXIuZWRnZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChCcm93c2VyLnNhZmFyaSAmJiBCcm93c2VyLnNhZmFyaVZlcnNpb24gPj0gOSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKC9NYWMgT1MgWCAoXFxkKylfKFxcZCspLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWpvciA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlub3IgPSBwYXJzZUludChSZWdFeHAuJDIsIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWFqb3IgPT09IDEwICYmIG1pbm9yID49IDExKSB8fCBtYWpvciA+IDEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWRpby5kb2xieSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSlcclxuICAgIHtcclxuICAgICAgICAvLyAgTm90aGluZyB0byBkbyBoZXJlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEF1ZGlvO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0F1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvQXVkaW8uanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcblxyXG52YXIgRnVsbHNjcmVlbiA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdmFpbGFibGUgLSBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIEZ1bGwgU2NyZWVuIEFQST9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVxdWVzdCAtIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBGdWxsIFNjcmVlbiBBUEkgdGhpcyBob2xkcyB0aGUgY2FsbCB5b3UgbmVlZCB0byB1c2UgdG8gYWN0aXZhdGUgaXQuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgcmVxdWVzdDogJycsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYW5jZWwgLSBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgRnVsbCBTY3JlZW4gQVBJIHRoaXMgaG9sZHMgdGhlIGNhbGwgeW91IG5lZWQgdG8gdXNlIHRvIGNhbmNlbCBpdC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW5jZWw6ICcnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGtleWJvYXJkIC0gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IGFjY2VzcyB0byB0aGUgS2V5Ym9hcmQgZHVyaW5nIEZ1bGwgU2NyZWVuIG1vZGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAga2V5Ym9hcmQ6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiogQ2hlY2tzIGZvciBzdXBwb3J0IG9mIHRoZSBGdWxsIFNjcmVlbiBBUEkuXHJcbiovXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgdmFyIGZzID0gW1xyXG4gICAgICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ3JlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdtc1JlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtb3pSZXF1ZXN0RnVsbHNjcmVlbidcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlbGVtZW50W2ZzW2ldXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZ1bGxzY3JlZW4uYXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0ID0gZnNbaV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2ZzID0gW1xyXG4gICAgICAgICdjYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnZXhpdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdtc0NhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21vekV4aXRGdWxsc2NyZWVuJ1xyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoRnVsbHNjcmVlbi5hdmFpbGFibGUpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRbY2ZzW2ldXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5jYW5jZWwgPSBjZnNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAgS2V5Ym9hcmQgSW5wdXQ/XHJcbiAgICBpZiAod2luZG93WydFbGVtZW50J10gJiYgRWxlbWVudFsnQUxMT1dfS0VZQk9BUkRfSU5QVVQnXSlcclxuICAgIHtcclxuICAgICAgICBGdWxsc2NyZWVuLmtleWJvYXJkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRnVsbHNjcmVlbjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GdWxsc2NyZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRnVsbHNjcmVlbi5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxuXHJcbnZhciBJbnB1dCA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB0b3VjaCAtIElzIHRvdWNoIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0b3VjaDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbXNwb2ludGVyIC0gSXMgbXNwb2ludGVyIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtc3BvaW50ZXI6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgez9zdHJpbmd9IHdoZWVsVHlwZSAtIFRoZSBuZXdlc3QgdHlwZSBvZiBXaGVlbC9TY3JvbGwgZXZlbnQgc3VwcG9ydGVkOiAnd2hlZWwnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCdcclxuICAgICogQGRlZmF1bHRcclxuICAgICogQHByb3RlY3RlZFxyXG4gICAgKi9cclxuICAgIHdoZWVsRXZlbnQ6IG51bGxcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8ICh3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPj0gMSkpXHJcbiAgICB7XHJcbiAgICAgICAgSW5wdXQudG91Y2ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZClcclxuICAgIHtcclxuICAgICAgICBJbnB1dC5tc3BvaW50ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghT1MuY29jb29uSlMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxyXG4gICAgICAgIGlmICgnb253aGVlbCcgaW4gd2luZG93IHx8IChCcm93c2VyLmllICYmICdXaGVlbEV2ZW50JyBpbiB3aW5kb3cpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gRE9NMyBXaGVlbCBFdmVudDogRkYgMTcrLCBJRSA5KywgQ2hyb21lIDMxKywgU2FmYXJpIDcrXHJcbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnd2hlZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgnb25tb3VzZXdoZWVsJyBpbiB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBOb24tRkYgbGVnYWN5OiBJRSA2LTksIENocm9tZSAxLTMxLCBTYWZhcmkgNS03LlxyXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ21vdXNld2hlZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgJ01vdXNlU2Nyb2xsRXZlbnQnIGluIHdpbmRvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEZGIHByaW9yIHRvIDE3LiBUaGlzIHNob3VsZCBwcm9iYWJseSBiZSBzY3J1YmJlZC5cclxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICdET01Nb3VzZVNjcm9sbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnB1dDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9JbnB1dC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0lucHV0LmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIFZpZGVvID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG9nZ1ZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb2dnIHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9nZ1ZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBoMjY0VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBoMjY0IG1wNCB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBoMjY0VmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1wNFZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaDI2NCBtcDQgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbXA0VmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYm1WaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdlYm0gdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2VibVZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB2cDlWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IHZwOSB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB2cDlWaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaGxzVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBobHMgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaGxzVmlkZW86IGZhbHNlXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgIHZhciByZXN1bHQgPSAhIXZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZTtcclxuXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLm9nZ1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gV2l0aG91dCBRdWlja1RpbWUsIHRoaXMgdmFsdWUgd2lsbCBiZSBgdW5kZWZpbmVkYC4gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy81NDZcclxuICAgICAgICAgICAgICAgIFZpZGVvLmgyNjRWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBWaWRlby5tcDRWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWRlby53ZWJtVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDlcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLnZwOVZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXBwbGljYXRpb24veC1tcGVnVVJMOyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlkZW8uaGxzVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5vdGhpbmcgdG8gZG9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gVmlkZW87XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvVmlkZW8uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9WaWRlby5qcyIsIi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXHJcbi8vICBiZWZvcmUgYSBQaGFzZXIuR2FtZSBpbnN0YW5jZSBoYXMgZXZlbiBiZWVuIGNyZWF0ZWQuXHJcbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBjYW4gc2hhcmUgaXQsXHJcbi8vICB3aXRob3V0IGhhdmluZyB0byByZS1wb2xsIHRoZSBkZXZpY2UgYWxsIG92ZXIgYWdhaW5cclxuXHJcbnZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxudmFyIEZlYXR1cmVzID0gcmVxdWlyZSgnLi9GZWF0dXJlcycpO1xyXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XHJcbnZhciBBdWRpbyA9IHJlcXVpcmUoJy4vQXVkaW8nKTtcclxudmFyIFZpZGVvID0gcmVxdWlyZSgnLi9WaWRlbycpO1xyXG52YXIgRnVsbHNjcmVlbiA9IHJlcXVpcmUoJy4vRnVsbHNjcmVlbicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgT1M6IE9TLFxyXG4gICAgQnJvd3NlcjogQnJvd3NlcixcclxuICAgIEZlYXR1cmVzOiBGZWF0dXJlcyxcclxuICAgIElucHV0OiBJbnB1dCxcclxuICAgIEF1ZGlvOiBBdWRpbyxcclxuICAgIFZpZGVvOiBWaWRlbyxcclxuICAgIEZ1bGxzY3JlZW46IEZ1bGxzY3JlZW5cclxuXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL2luZGV4LmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIE9TID0gcmVxdWlyZSgnLi4vZGV2aWNlL09TJyk7XHJcblxyXG52YXIgaXNCb290ZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIERPTUNvbnRlbnRMb2FkZWQgKGNhbGxiYWNrKVxyXG57XHJcbiAgICBpZiAoaXNCb290ZWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpXHJcbiAgICB7XHJcbiAgICAgICAgaXNCb290ZWQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlzQm9vdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoZWNrLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoZWNrLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrLCAyMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChPUy5jb3Jkb3ZhICYmICFPUy5jb2Nvb25KUylcclxuICAgIHtcclxuICAgICAgICAvLyAgUmVmLiBodHRwOi8vZG9jcy5waG9uZWdhcC5jb20vZW4vMy41LjAvY29yZG92YV9ldmVudHNfZXZlbnRzLm1kLmh0bWwjZGV2aWNlcmVhZHlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGNoZWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoZWNrLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoZWNrLCB0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET01Db250ZW50TG9hZGVkO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vRE9NQ29udGVudExvYWRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBBYnN0cmFjdHMgYXdheSB0aGUgdXNlIG9mIFJBRiBvciBzZXRUaW1lT3V0IGZvciB0aGUgY29yZSBnYW1lIHVwZGF0ZSBsb29wLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiogQHBhcmFtIHtib29sZWFufSBbZm9yY2VTZXRUaW1lT3V0PWZhbHNlXSAtIFRlbGwgUGhhc2VyIHRvIHVzZSBzZXRUaW1lT3V0IGV2ZW4gaWYgcmFmIGlzIGF2YWlsYWJsZS5cclxuKi9cclxuZnVuY3Rpb24gUmVxdWVzdEFuaW1hdGlvbkZyYW1lIChnYW1lKVxyXG57XHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuR2FtZX0gZ2FtZSAtIFRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4gICAgKi9cclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNSdW5uaW5nIC0gdHJ1ZSBpZiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaXMgcnVubmluZywgb3RoZXJ3aXNlIGZhbHNlLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy50aWNrID0gMDtcclxuXHJcbiAgICB2YXIgdmVuZG9ycyA9IFtcclxuICAgICAgICAnbXMnLFxyXG4gICAgICAgICdtb3onLFxyXG4gICAgICAgICd3ZWJraXQnLFxyXG4gICAgICAgICdvJ1xyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyB4KyspXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNTZXRUaW1lT3V0ICAtIFRydWUgaWYgdGhlIGJyb3dzZXIgaXMgdXNpbmcgc2V0VGltZW91dCBpbnN0ZWFkIG9mIHJBZi5cclxuICAgICovXHJcbiAgICB0aGlzLmlzU2V0VGltZU91dCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZU91dElEIC0gVGhlIGNhbGxiYWNrIHNldFRpbWVvdXQgb3IgckFmIGNhbGxiYWNrIElEIHVzZWQgd2hlbiBjYWxsaW5nIGNhbmNlbC5cclxuICAgICovXHJcbiAgICB0aGlzLnRpbWVPdXRJRCA9IG51bGw7XHJcblxyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvLyAgdGltZXN0YW1wID0gRE9NSGlnaFJlc1RpbWVTdGFtcFxyXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKVxyXG4gICAge1xyXG4gICAgICAgIF90aGlzLnRpY2sgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgIF90aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblxyXG4gICAgICAgIF90aGlzLmdhbWUudXBkYXRlKHRpbWVzdGFtcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdGVwVGltZW91dCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgX3RoaXMudGljayA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIC8vIF90aGlzLmdhbWUudXBkYXRlKF90aGlzLnRpY2spO1xyXG5cclxuICAgICAgICAvLyBfdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dChzdGVwVGltZW91dCwgX3RoaXMuZ2FtZS50aW1lLnRpbWVUb0NhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogU3RhcnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcnVubmluZyBvciBzZXRUaW1lb3V0IGlmIHVuYXZhaWxhYmxlIGluIGJyb3dzZXJcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lI3N0YXJ0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lLmNvbmZpZy5mb3JjZVNldFRpbWVPdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2V0VGltZU91dCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5zZXRUaW1lb3V0KHN0ZXBUaW1lb3V0LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NldFRpbWVPdXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZU91dElEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTdG9wcyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gcnVubmluZy5cclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lI3N0b3BcclxuICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU2V0VGltZU91dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVPdXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuUmVxdWVzdEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cclxuKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5JbWFnZVxyXG4qIEBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cclxuKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiogQHBhcmFtIHtzdHJpbmd9IFtrZXldIC0gVGhlIHRleHR1cmUgdXNlZCBieSB0aGUgSW1hZ2UgZHVyaW5nIHJlbmRlcmluZy4gSXQgY2FuIGJlIGEgc3RyaW5nIHdoaWNoIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBDYWNoZSBlbnRyeSwgb3IgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhIG9yIFBJWEkuVGV4dHVyZS5cclxuKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiB0aGlzIEltYWdlIGlzIHVzaW5nIHBhcnQgb2YgYSBzcHJpdGUgc2hlZXQgb3IgdGV4dHVyZSBhdGxhcyB5b3UgY2FuIHNwZWNpZnkgdGhlIGV4YWN0IGZyYW1lIHRvIHVzZSBieSBnaXZpbmcgYSBzdHJpbmcgb3IgbnVtZXJpYyBpbmRleC5cclxuKi9cclxudmFyIEltYWdlID0gZnVuY3Rpb24gKHN0YXRlLCB4LCB5LCBrZXksIGZyYW1lLCBuYW1lKVxyXG57XHJcbiAgICAvKlxyXG4gICAgdmFyIF90ZXh0dXJlID0gc3RhdGUuZ2FtZS50ZXh0dXJlcy5nZXQoa2V5KTtcclxuICAgIHZhciBfZnJhbWUgPSBfdGV4dHVyZS5nZXQoZnJhbWUpO1xyXG5cclxuICAgIFBoYXNlci5HYW1lT2JqZWN0LmNhbGwodGhpcywgc3RhdGUsIHgsIHksIF90ZXh0dXJlLCBfZnJhbWUpO1xyXG5cclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgdGhpcy50eXBlID0gUGhhc2VyLklNQUdFO1xyXG4gICAgKi9cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW1hZ2U7XHJcblxyXG5cclxuLy8gSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR2FtZU9iamVjdC5wcm90b3R5cGUpO1xyXG4vLyBJbWFnZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWFnZTtcclxuXHJcbi8qKlxyXG4qIEF1dG9tYXRpY2FsbHkgY2FsbGVkIGJ5IFdvcmxkLnByZVVwZGF0ZS5cclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLkltYWdlI3ByZVVwZGF0ZVxyXG4qIEBtZW1iZXJvZiBQaGFzZXIuSW1hZ2VcclxuUGhhc2VyLkdhbWVPYmplY3QuSW1hZ2UucHJvdG90eXBlLnByZVVwZGF0ZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIC8vICBXb3VsZCBsaWtlIHRvIGdldCByaWQgb2YgdGhpcyBzb21laG93IC4uLlxyXG4gICAgaWYgKHRoaXMucGFyZW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29sb3Iud29ybGRBbHBoYSA9IHRoaXMucGFyZW50LmNvbG9yLndvcmxkQWxwaGE7XHJcbiAgICB9XHJcbn07XHJcbiovXHJcblxyXG4vKlxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhJbWFnZS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICB3aWR0aDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3NjYWxlWCAqIHRoaXMuZnJhbWUucmVhbFdpZHRoO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB2YWx1ZSAvIHRoaXMuZnJhbWUucmVhbFdpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGhlaWdodDoge1xyXG5cclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0uX3NjYWxlWSAqIHRoaXMuZnJhbWUucmVhbEhlaWdodDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdmFsdWUgLyB0aGlzLmZyYW1lLnJlYWxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG4qL1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEltYWdlID0gcmVxdWlyZSgnLi9JbWFnZScpO1xyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcclxuXHJcbnZhciBJbWFnZUZhY3RvcnkgPSB7XHJcblxyXG4gICAgS0VZOiAnaW1hZ2UnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBuZXcgYEltYWdlYCBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxyXG4gICAgKlxyXG4gICAgKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuXHJcbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5I2ltYWdlXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXHJcbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5JbWFnZX0gVGhlIG5ld2x5IGNyZWF0ZWQgSW1hZ2Ugb2JqZWN0LlxyXG4gICAgKi9cclxuICAgIGFkZDogZnVuY3Rpb24gKHgsIHksIGtleSwgZnJhbWUsIGdyb3VwKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy5zdGF0ZTsgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VGYWN0b3J5LmFkZCcsIGtleSwgeCwgeSwgZnJhbWUsIGdyb3VwKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW50byBTdGF0ZScsIHRoaXMuc3RhdGUpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gZ3JvdXAuY2hpbGRyZW4uYWRkKG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG1ha2U6IGZ1bmN0aW9uICh4LCB5LCBrZXksIGZyYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZUZhY3RvcnkubWFrZScsIGtleSwgeCwgeSwgZnJhbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEltYWdlKHRoaXMuc3RhdGUsIHgsIHksIGtleSwgZnJhbWUpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmFjdG9yeUNvbnRhaW5lci5yZWdpc3RlcihJbWFnZUZhY3RvcnkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlRmFjdG9yeS5qcyIsIi8vICBJbmNsdWRlIGFsbCBvZiB0aGUgR2FtZSBPYmplY3QgRmFjdG9yaWVzXHJcbi8vICBcclxuLy8gIFRoaXMgZmlsZSBzaG91bGQgYmUgbGlua2VkIHRvIHRoZSBzcGVjaWZpYyBidWlsZCBvZiBQaGFzZXIsIGkuZS4gUGhhc2VyIE5hbm8gd29uJ3QgcmVxdWlyZSBhbGwgR09zXHJcblxyXG5yZXF1aXJlICgnLi9pbWFnZS9JbWFnZUZhY3RvcnknKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dhbWVvYmplY3RzL2luZGV4LmpzIiwiXHJcbnZhciBGSUxFX0NPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xyXG52YXIgU2V0ID0gcmVxdWlyZSgnLi4vc3RydWN0cy9TZXQnKTtcclxudmFyIFhIUlNldHRpbmdzID0gcmVxdWlyZSgnLi9YSFJTZXR0aW5ncycpO1xyXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMvJyk7XHJcblxyXG52YXIgQmFzZUxvYWRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIC8vICBUbyBmaW5pc2ggdGhlIGxvYWRlciAuLi5cclxuICAgIC8vICBcclxuICAgIC8vICAxKSBJbWFnZSBUYWcgbG9hZGVyXHJcbiAgICAvLyAgMikgRXZlbnRzIChvciBTaWduYWxzPykgZm9yIHRoZSB2YXJpb3VzIHN0YWdlc1xyXG4gICAgLy8gIDMpIFByb2dyZXNzIHVwZGF0ZVxyXG4gICAgLy8gIDQpIEpTT04gbG9hZGVyXHJcbiAgICAvLyAgNSkgWE1MIExvYWRlclxyXG4gICAgLy8gIDYpIE11bHRpIEZpbGUgc3VwcG9ydCAoYXRsYXMgKyBkYXRhKVxyXG4gICAgLy8gIDcpIEF0bGFzIExvYWRlclxyXG5cclxuXHJcbiAgICAvLyAgTW92ZSB0byBhICdzZXRVUkwnIG1ldGhvZD9cclxuICAgIHRoaXMuYmFzZVVSTCA9ICcnO1xyXG4gICAgdGhpcy5wYXRoID0gJyc7XHJcblxyXG4gICAgLy8gIFJlYWQgZnJvbSBHYW1lIC8gU3RhdGUgQ29uZmlnXHJcbiAgICB0aGlzLmVuYWJsZVBhcmFsbGVsID0gdHJ1ZTtcclxuICAgIHRoaXMubWF4UGFyYWxsZWxEb3dubG9hZHMgPSA4O1xyXG5cclxuICAgIC8vICB4aHIgc3BlY2lmaWMgZ2xvYmFsIHNldHRpbmdzIChjYW4gYmUgb3ZlcnJpZGRlbiBvbiBhIHBlci1maWxlIGJhc2lzKVxyXG4gICAgdGhpcy54aHIgPSBYSFJTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5pbmZsaWdodCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuZmFpbGVkID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5xdWV1ZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSAnUEVORElORyc7XHJcbn07XHJcblxyXG5CYXNlTG9hZGVyLnByb3RvdHlwZS5jb250cnVjdG9yID0gQmFzZUxvYWRlcjtcclxuXHJcbkJhc2VMb2FkZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGFkZEZpbGU6IGZ1bmN0aW9uIChmaWxlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgTXVsdGlwYXJ0IGZpbGU/XHJcbiAgICAgICAgaWYgKGZpbGUubXVsdGlwYXJ0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmlsZS5maWxlQS5wYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgICAgICBmaWxlLmZpbGVCLnBhdGggPSB0aGlzLnBhdGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUuZmlsZUEpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUuZmlsZUIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLnBhdGggPSB0aGlzLnBhdGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGZpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBJcyB0aGUgTG9hZGVyIGFjdGl2ZWx5IGxvYWRpbmcgKG9yIHByb2Nlc3NpbmcgbG9hZGVkIGZpbGVzKVxyXG4gICAgaXNMb2FkaW5nOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fc3RhdGUgPT09ICdMT0FESU5HJyB8fCB0aGlzLl9zdGF0ZSA9PT0gJ1BST0NFU1NJTkcnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIElzIHRoZSBMb2FkZXIgcmVhZHkgdG8gc3RhcnQgYSBuZXcgbG9hZD9cclxuICAgIGlzUmVhZHk6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zdGF0ZSA9PT0gJ1BFTkRJTkcnIHx8IHRoaXMuX3N0YXRlID09PSAnQ09NUExFVEUnIHx8IHRoaXMuX3N0YXRlID09PSAnRkFJTEVEJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIHN0YXJ0LiBGaWxlcyB0byBsb2FkOicsIHRoaXMubGlzdC5zaXplKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmV2ZW50cy5kaXNwYXRjaChuZXcgRXZlbnRzLkxPQURFUl9TVEFSVF9FVkVOVCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpc3Quc2l6ZSA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUgPSBMT0FESU5HO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mYWlsZWQuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZsaWdodC5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcHJvY2Vzc0xvYWRRdWV1ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmFzZUxvYWRlciBwcm9jZXNzTG9hZFF1ZXVlJywgdGhpcy5saXN0LnNpemUpO1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QuZWFjaChmdW5jdGlvbiAoZmlsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFX0NPTlNULlBFTkRJTkcgJiYgX3RoaXMuaW5mbGlnaHQuc2l6ZSA8IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQURERUQgVE8gUVVFVUU6JywgZmlsZS5rZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLmluZmxpZ2h0LmFkZChmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0LmRlbGV0ZShmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF90aGlzLmluZmxpZ2h0LnNpemUgPT09IF90aGlzLm1heFBhcmFsbGVsRG93bmxvYWRzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGVsbHMgdGhlIFNldCBpdGVyYXRvciB0byBhYm9ydFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHByaXZhdGVcclxuICAgIGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORycsIGZpbGUua2V5KTtcclxuXHJcbiAgICAgICAgLy8gIElmIHRoZSBmaWxlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIGNyb3NzT3JpZ2luIHNldCxcclxuICAgICAgICAvLyAgd2UnbGwgdXNlIHRoZSBMb2FkZXJzICh3aGljaCBpcyB1bmRlZmluZWQgYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAoIWZpbGUuY3Jvc3NPcmlnaW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbGUubG9hZCh0aGlzLm5leHRGaWxlLmJpbmQodGhpcyksIHRoaXMuYmFzZVVSTCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRGaWxlOiBmdW5jdGlvbiAocHJldmlvdXNGaWxlLCBzdWNjZXNzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FERUQ6JywgcHJldmlvdXNGaWxlLnNyYywgc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgIC8vICBNb3ZlIHRoZSBmaWxlIHRoYXQganVzdCBsb2FkZWQgZnJvbSB0aGUgaW5mbGlnaHQgbGlzdCB0byB0aGUgcXVldWUgb3IgZmFpbGVkIFNldFxyXG5cclxuICAgICAgICBpZiAoc3VjY2VzcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkKHByZXZpb3VzRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkLmFkZChwcmV2aW91c0ZpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbmZsaWdodC5kZWxldGUocHJldmlvdXNGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0RmlsZSAtIHN0aWxsIHNvbWV0aGluZyBpbiB0aGUgbGlzdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbmZsaWdodC5zaXplID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHRGaWxlIGNhbGxpbmcgZmluaXNoZWRMb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2hlZExvYWRpbmc6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VMb2FkZXIuZmluaXNoZWRMb2FkaW5nIFBST0NFU1NJTkcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdQUk9DRVNTSU5HJztcclxuXHJcbiAgICAgICAgdmFyIHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gIFRoaXMgY291bGQgYmUgUHJvbWlzZSBiYXNlZCBhcyB3ZWxsLCBhbGxvd2luZyBmb3IgYXN5bmMgcHJvY2Vzc2luZ1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXVlLmVhY2goZnVuY3Rpb24gKGZpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxlLm9uUHJvY2VzcygpO1xyXG5cclxuICAgICAgICAgICAgLy8gIFRoZSBGaWxlIHNwZWNpZmljIHByb2Nlc3MgaGFuZGxlciBoYXMgcnVuXHJcbiAgICAgICAgICAgIC8vICBOb3cgcnVuIGFueSBjdXN0b20gY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIGlmIChmaWxlLnByb2Nlc3NDYWxsYmFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5wcm9jZXNzQ2FsbGJhY2soZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpbGUub25Db21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgc3RvcmFnZS5hZGQoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaW5mbGlnaHQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkZXIgQ29tcGxldGUuIExvYWRlZDonLCBzdG9yYWdlLnNpemUsICdGYWlsZWQ6JywgdGhpcy5mYWlsZWQuc2l6ZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlTG9hZGVyIENPTVBMRVRFJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnQ09NUExFVEUnO1xyXG5cclxuICAgICAgICAvLyAgRGlzcGF0Y2ggJ29uIGNvbXBsZXRlJyBzaWduYWxzIG5vd1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRMb2FkZWRGaWxlcyAoZ3JvdXAgPSAnJywgb3V0cHV0ID0gW10pIHtcclxuXHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG5cclxuICAgICAgICAvLyAgUmV0dXJuIGFuIGFycmF5IG9mIGFsbCBmaWxlcyB0aGF0IGhhdmUgc3RhdGUgPSBDT01QTEVURSAod2hpY2ggbWVhbnMgbG9hZGVkICsgcHJvY2Vzc2VkKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHRoaXMuc3RvcmFnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnN0YXRlID09PSBGSUxFLkNPTVBMRVRFICYmIGZpbGUudGFnID09PSBncm91cCAmJiAodHlwZSAhPT0gJycgJiYgZmlsZS50eXBlID09PSB0eXBlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmluZmxpZ2h0LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5mYWlsZWQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFnID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnUEVORElORyc7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnREVTVFJPWUVEJztcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VMb2FkZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9CYXNlTG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2FkZXIvQmFzZUxvYWRlci5qcyIsInZhciBHZXRVUkwgPSByZXF1aXJlKCcuL0dldFVSTCcpO1xyXG52YXIgRklMRV9DT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcclxudmFyIFhIUkxvYWRlciA9IHJlcXVpcmUoJy4vWEhSTG9hZGVyJyk7XHJcbnZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcclxuXHJcbnZhciBGaWxlID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgdXJsLCByZXNwb25zZVR5cGUpXHJcbntcclxuICAgIC8vICBmaWxlIHR5cGUgKGltYWdlLCBqc29uLCBldGMpIGZvciBzb3J0aW5nIHdpdGhpbiB0aGUgTG9hZGVyXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIC8vICB1bmlxdWUgY2FjaGUga2V5ICh1bmlxdWUgd2l0aGluIGl0cyBmaWxlIHR5cGUpXHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuXHJcbiAgICAvLyAgVGhlIFVSTCBvZiB0aGUgZmlsZSwgbm90IGluY2x1ZGluZyBiYXNlVVJMXHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuXHJcbiAgICAvLyAgU2V0IHdoZW4gdGhlIExvYWRlciBjYWxscyAnbG9hZCcgb24gdGhpcyBmaWxlXHJcbiAgICB0aGlzLnNyYyA9ICcnO1xyXG5cclxuICAgIHRoaXMueGhyU2V0dGluZ3MgPSBYSFJTZXR0aW5ncyhyZXNwb25zZVR5cGUpO1xyXG5cclxuICAgIHRoaXMueGhyTG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gRklMRV9DT05TVC5QRU5ESU5HO1xyXG5cclxuICAgIC8vICBTZXQgYnkgb25Qcm9ncmVzcyAoaWYgbG9hZGluZyB2aWEgWEhSKVxyXG4gICAgdGhpcy5ieXRlc1RvdGFsID0gMDtcclxuICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSAtMTtcclxuICAgIHRoaXMucGVyY2VudENvbXBsZXRlID0gLTE7XHJcblxyXG4gICAgLy8gIEZvciBDT1JzIGJhc2VkIGxvYWRpbmcuXHJcbiAgICAvLyAgSWYgdGhpcyBpcyB1bmRlZmluZWQgdGhlbiB0aGUgRmlsZSB3aWxsIGNoZWNrIEJhc2VMb2FkZXIuY3Jvc3NPcmlnaW4gYW5kIHVzZSB0aGF0IChpZiBzZXQpXHJcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8vICBUaGUgYWN0dWFsIHByb2Nlc3NlZCBmaWxlIGRhdGFcclxuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyAgTXVsdGlwYXJ0IGZpbGU/IChpLmUuIGFuIGF0bGFzIGFuZCBpdHMganNvbilcclxuICAgIHRoaXMubXVsdGlwYXJ0ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5saW5rRmlsZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcclxufTtcclxuXHJcbkZpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsZTtcclxuXHJcbkZpbGUucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHJlc2V0WEhSOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9ubG9hZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnhockxvYWRlci5vbmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMueGhyTG9hZGVyLm9ucHJvZ3Jlc3MgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYWxsZWQgd2hlbiB0aGUgSW1hZ2UgbG9hZHNcclxuICAgIC8vICBQcm9ncmVzc0V2ZW50XHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChldmVudClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9hZGVkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm9uU3RhdGVDaGFuZ2UoTE9BRElORyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRYSFIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBlcnJvcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFhIUigpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMsIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSBldmVudC5sb2FkZWQ7XHJcbiAgICAgICAgdGhpcy5ieXRlc1RvdGFsID0gZXZlbnQudG90YWw7XHJcblxyXG4gICAgICAgIHRoaXMucGVyY2VudENvbXBsZXRlID0gTWF0aC5taW4oKHRoaXMuYnl0ZXNMb2FkZWQgLyB0aGlzLmJ5dGVzVG90YWwpLCAxKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZXJjZW50Q29tcGxldGUgKyAnJSAoJyArIHRoaXMuYnl0ZXNMb2FkZWQgKyAnIGJ5dGVzKScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblByb2Nlc3M6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2Nlc3MgdGhlIGltYWdlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGNvbXBsZXRlZCBhbmQgYWRkZWQgdG8gdGhlIGxvYWRlciBzdG9yZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgQ2FsbGVkIGJ5IHRoZSBMb2FkZXIsIHN0YXJ0cyB0aGUgYWN0dWFsIGZpbGUgZG93bmxvYWRpbmdcclxuICAgIGxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgYmFzZVVSTCwgZ2xvYmFsWEhSKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChiYXNlVVJMID09PSB1bmRlZmluZWQpIHsgYmFzZVVSTCA9ICcnOyB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5zcmMgPSBHZXRVUkwodGhpcywgYmFzZVVSTCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FESU5HMicsIHRoaXMuc3JjKTtcclxuXHJcbiAgICAgICAgdGhpcy54aHJMb2FkZXIgPSBYSFJMb2FkZXIodGhpcywgZ2xvYmFsWEhSKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL0ZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9GaWxlLmpzIiwidmFyIEdldFVSTCA9IGZ1bmN0aW9uIChmaWxlLCBiYXNlVVJMKVxyXG57XHJcbiAgICBpZiAoIWZpbGUudXJsKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsZS51cmwubWF0Y2goL14oPzpibG9iOnxkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98XFwvXFwvKS8pKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmaWxlLnVybDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYmFzZVVSTCArIGZpbGUucGF0aCArIGZpbGUudXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHZXRVUkw7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9HZXRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBYSFJTZXR0aW5ncyA9IHJlcXVpcmUoJy4vWEhSU2V0dGluZ3MnKTtcclxuXHJcbi8vICBUYWtlcyB0d28gWEhSIE9iamVjdHMgYW5kIGNyZWF0ZXMgYSBuZXcgb2JqZWN0XHJcblxyXG4vLyAgVGhlIG5ldyBvYmplY3QgaXMgYmFzZWQgb24gZ2xvYmFsIGluaXRpYWxseSwgYnV0IGFueSBzZXR0aW5nIGluXHJcbi8vICBsb2NhbCBvdmVycmlkZXMgdGhlIGdsb2JhbCB2YWx1ZS5cclxuXHJcbnZhciBNZXJnZVhIUlNldHRpbmdzID0gZnVuY3Rpb24gKGdsb2JhbCwgbG9jYWwpXHJcbntcclxuICAgIHZhciBvdXRwdXQgPSAoZ2xvYmFsID09PSB1bmRlZmluZWQpID8gWEhSU2V0dGluZ3MoKSA6IE9iamVjdC5hc3NpZ24oZ2xvYmFsKTtcclxuXHJcbiAgICBpZiAobG9jYWwpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgc2V0dGluZyBpbiBsb2NhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFtzZXR0aW5nXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbc2V0dGluZ10gPSBsb2NhbFtzZXR0aW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVyZ2VYSFJTZXR0aW5ncztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL01lcmdlWEhSU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9NZXJnZVhIUlNldHRpbmdzLmpzIiwidmFyIE1lcmdlWEhSU2V0dGluZ3MgPSByZXF1aXJlKCcuL01lcmdlWEhSU2V0dGluZ3MnKTtcclxuXHJcbnZhciBYSFJMb2FkZXIgPSBmdW5jdGlvbiAoZmlsZSwgZ2xvYmFsWEhSU2V0dGluZ3MpXHJcbntcclxuICAgIHZhciBjb25maWcgPSBNZXJnZVhIUlNldHRpbmdzKGdsb2JhbFhIUlNldHRpbmdzLCBmaWxlLnhoclNldHRpbmdzKTtcclxuXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUuc3JjLCBjb25maWcuYXN5bmMsIGNvbmZpZy51c2VyLCBjb25maWcucGFzc3dvcmQpO1xyXG5cclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBmaWxlLnhoclNldHRpbmdzLnJlc3BvbnNlVHlwZTtcclxuICAgIHhoci50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5oZWFkZXIgJiYgY29uZmlnLmhlYWRlclZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGNvbmZpZy5oZWFkZXIsIGNvbmZpZy5oZWFkZXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKVxyXG4gICAge1xyXG4gICAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKGNvbmZpZy5vdmVycmlkZU1pbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZnRlciBhIHN1Y2Nlc3NmdWwgcmVxdWVzdCwgdGhlIHhoci5yZXNwb25zZSBwcm9wZXJ0eSB3aWxsIGNvbnRhaW4gdGhlIHJlcXVlc3RlZCBkYXRhIGFzIGEgRE9NU3RyaW5nLCBBcnJheUJ1ZmZlciwgQmxvYiwgb3IgRG9jdW1lbnQgKGRlcGVuZGluZyBvbiB3aGF0IHdhcyBzZXQgZm9yIHJlc3BvbnNlVHlwZS4pXHJcblxyXG4gICAgeGhyLm9ubG9hZCA9IGZpbGUub25Mb2FkLmJpbmQoZmlsZSk7XHJcbiAgICB4aHIub25lcnJvciA9IGZpbGUub25FcnJvci5iaW5kKGZpbGUpO1xyXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmaWxlLm9uUHJvZ3Jlc3MuYmluZChmaWxlKTtcclxuXHJcbiAgICAvLyAgVGhpcyBpcyB0aGUgb25seSBzdGFuZGFyZCBtZXRob2QsIHRoZSBvbmVzIGFib3ZlIGFyZSBicm93c2VyIGFkZGl0aW9ucyAobWF5YmUgbm90IHVuaXZlcnNhbD8pXHJcbiAgICAvLyB4aHIub25yZWFkeXN0YXRlY2hhbmdlXHJcblxyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4geGhyO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBYSFJMb2FkZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9YSFJMb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRlci9YSFJMb2FkZXIuanMiLCJ2YXIgRXZlbnQgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMvRXZlbnQnKTtcclxuXHJcbnZhciBMb2FkZXJTdGFydEV2ZW50ID0gZnVuY3Rpb24gKGxvYWRlcilcclxue1xyXG4gICAgRXZlbnQuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxufTtcclxuXHJcbkxvYWRlclN0YXJ0RXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xyXG5Mb2FkZXJTdGFydEV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlclN0YXJ0RXZlbnQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlclN0YXJ0RXZlbnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvYWRlci9ldmVudHMvTG9hZGVyU3RhcnRFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL2V2ZW50cy9Mb2FkZXJTdGFydEV2ZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgTE9BREVSX1NUQVJUX0VWRU5UOiByZXF1aXJlKCcuL0xvYWRlclN0YXJ0RXZlbnQnKVxyXG5cclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbG9hZGVyL2V2ZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9hZGVyL2V2ZW50cy9pbmRleC5qcyIsIi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBjIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBjID0gMTtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMCAtIEludGVybmFsIHZhci5cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG52YXIgczAgPSAwO1xyXG5cclxuLyoqXHJcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMxIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBzMSA9IDA7XHJcblxyXG4vKipcclxuKiBAcHJvcGVydHkge251bWJlcn0gczIgLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHMyID0gMDtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7QXJyYXl9IHNpZ24gLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHNpZ24gPSBbIC0xLCAxIF07XHJcblxyXG4vKipcclxuKiBQcml2YXRlIHJhbmRvbSBoZWxwZXIuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JuZFxyXG4qIEBwcml2YXRlXHJcbiogQHJldHVybiB7bnVtYmVyfVxyXG4qL1xyXG52YXIgcm5kID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdmFyIHQgPSAyMDkxNjM5ICogczAgKyBjICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcclxuXHJcbiAgICBjID0gdCB8IDA7XHJcbiAgICBzMCA9IHMxO1xyXG4gICAgczEgPSBzMjtcclxuICAgIHMyID0gdCAtIGM7XHJcblxyXG4gICAgcmV0dXJuIHMyO1xyXG59O1xyXG5cclxuLyoqXHJcbiogSW50ZXJuYWwgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlZWQgaGFzaC5cclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaGFzaFxyXG4qIEBwcml2YXRlXHJcbiogQHBhcmFtIHthbnl9IGRhdGFcclxuKiBAcmV0dXJuIHtudW1iZXJ9IGhhc2hlZCB2YWx1ZS5cclxuKi9cclxudmFyIGhhc2ggPSBmdW5jdGlvbiAoZGF0YSlcclxue1xyXG4gICAgdmFyIGgsIGksIG47XHJcbiAgICBuID0gMHhlZmM4MjQ5ZDtcclxuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xyXG4gICAgICAgIG4gPSBoID4+PiAwO1xyXG4gICAgICAgIGggLT0gbjtcclxuICAgICAgICBoICo9IG47XHJcbiAgICAgICAgbiA9IGggPj4+IDA7XHJcbiAgICAgICAgaCAtPSBuO1xyXG4gICAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOy8vIDJeMzJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsvLyAyXi0zMlxyXG59O1xyXG5cclxuXHJcbnZhciBSYW5kb21EYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKHNlZWRzKVxyXG57XHJcbiAgICBpZiAodHlwZW9mIHNlZWRzID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlKHNlZWRzKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvdyhzZWVkcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJhbmRvbURhdGFHZW5lcmF0b3I7XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogUmVzZXQgdGhlIHNlZWQgb2YgdGhlIHJhbmRvbSBkYXRhIGdlbmVyYXRvci5cclxuICAgICpcclxuICAgICogX05vdGVfOiB0aGUgc2VlZCBhcnJheSBpcyBvbmx5IHByb2Nlc3NlZCB1cCB0byB0aGUgZmlyc3QgYHVuZGVmaW5lZGAgKG9yIGBudWxsYCkgdmFsdWUsIHNob3VsZCBzdWNoIGJlIHByZXNlbnQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc293XHJcbiAgICAqIEBwYXJhbSB7YW55W119IHNlZWRzIC0gVGhlIGFycmF5IG9mIHNlZWRzOiB0aGUgYHRvU3RyaW5nKClgIG9mIGVhY2ggdmFsdWUgaXMgdXNlZC5cclxuICAgICovXHJcbiAgICBzb3c6IGZ1bmN0aW9uIChzZWVkcylcclxuICAgIHtcclxuICAgICAgICAvLyBBbHdheXMgcmVzZXQgdG8gZGVmYXVsdCBzZWVkXHJcbiAgICAgICAgczAgPSBoYXNoKCcgJyk7XHJcbiAgICAgICAgczEgPSBoYXNoKHMwKTtcclxuICAgICAgICBzMiA9IGhhc2goczEpO1xyXG4gICAgICAgIGMgPSAxO1xyXG5cclxuICAgICAgICBpZiAoIXNlZWRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgYW55IHNlZWRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWVkcy5sZW5ndGggJiYgKHNlZWRzW2ldICE9IG51bGwpOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VlZCA9IHNlZWRzW2ldO1xyXG5cclxuICAgICAgICAgICAgczAgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczAgKz0gfn4oczAgPCAwKTtcclxuICAgICAgICAgICAgczEgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczEgKz0gfn4oczEgPCAwKTtcclxuICAgICAgICAgICAgczIgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczIgKz0gfn4oczIgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VyXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyAyXjMyXHJcbiAgICAgICAgcmV0dXJuIHJuZCgpICogMHgxMDAwMDAwMDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNmcmFjXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgIGZyYWM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMl4tNTNcclxuICAgICAgICByZXR1cm4gcm5kKCkgKyAocm5kKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgcmVhbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VyKCkgKyB0aGlzLmZyYWMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlckluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICBpbnRlZ2VySW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmVhbEluUmFuZ2UoMCwgbWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYW5kIGluY2x1ZGluZyBtaW4gYW5kIG1heC5cclxuICAgICogVGhpcyBtZXRob2QgaXMgYW4gYWxpYXMgZm9yIFJhbmRvbURhdGFHZW5lcmF0b3IuaW50ZWdlckluUmFuZ2UuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjYmV0d2VlblxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxyXG4gICAgKi9cclxuICAgIGJldHdlZW46IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZShtaW4sIG1heCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcmVhbEluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICByZWFsSW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYWMoKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI25vcm1hbFxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEuXHJcbiAgICAqL1xyXG4gICAgbm9ybWFsOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAxIC0gKDIgKiB0aGlzLmZyYWMoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgdmFsaWQgUkZDNDEyMiB2ZXJzaW9uNCBJRCBoZXggc3RyaW5nIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTMwODM2OFxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3V1aWRcclxuICAgICogQHJldHVybiB7c3RyaW5nfSBBIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGEgPSAnJztcclxuICAgICAgICB2YXIgYiA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGIgPSBhID0gJyc7IGErKyA8IDM2OyBiICs9fmEgJSA1IHwgYSAqIDMmNCA/IChhXjE1ID8gOF50aGlzLmZyYWMoKSAqIChhXjIwID8gMTYgOiA0KSA6IDQpLnRvU3RyaW5nKDE2KSA6ICctJylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcGlja1xyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxyXG4gICAgKiBAcmV0dXJuIHthbnl9IEEgcmFuZG9tIG1lbWJlciBvZiB0aGUgYXJyYXkuXHJcbiAgICAqL1xyXG4gICAgcGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt0aGlzLmludGVnZXJJblJhbmdlKDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzaWduIHRvIGJlIHVzZWQgd2l0aCBtdWx0aXBsaWNhdGlvbiBvcGVyYXRvci5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzaWduXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgb3IgKzEuXHJcbiAgICAqL1xyXG4gICAgc2lnbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrKHNpZ24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBtZW1iZXIgb2YgYGFycmF5YCwgZmF2b3JpbmcgdGhlIGVhcmxpZXIgZW50cmllcy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN3ZWlnaHRlZFBpY2tcclxuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cclxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxyXG4gICAgKi9cclxuICAgIHdlaWdodGVkUGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt+fihNYXRoLnBvdyh0aGlzLmZyYWMoKSwgMikgKiAoYXJyYXkubGVuZ3RoIC0gMSkgKyAwLjUpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXgsIG9yIGJldHdlZW4gdGhlIGJlZ2lubmluZyBvZiAyMDAwIGFuZCB0aGUgZW5kIG9mIDIwMjAgaWYgbWluIGFuZCBtYXggYXJlbid0IHNwZWNpZmllZC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN0aW1lc3RhbXBcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSB0aW1lc3RhbXAgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZShtaW4gfHwgOTQ2Njg0ODAwMDAwLCBtYXggfHwgMTU3Nzg2MjAwMDAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGFuZ2xlIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2FuZ2xlXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKi9cclxuICAgIGFuZ2xlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXJJblJhbmdlKC0xODAsIDE4MCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJvdGF0aW9uIGluIHJhZGlhbnMsIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JvdGF0aW9uXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKi9cclxuICAgIHJvdGF0aW9uOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKC0zLjE0MTU5MjY1MzU4OTc5MywgMy4xNDE1OTI2NTM1ODk3OTMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBvciBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLiBUaGlzIGFsbG93cyB5b3UgdG8gcmV0YWluIHRoZSB2YWx1ZXNcclxuICAgICogdGhhdCB0aGUgZ2VuZXJhdG9yIGlzIHVzaW5nIGJldHdlZW4gZ2FtZXMsIGkuZS4gaW4gYSBnYW1lIHNhdmUgZmlsZS5cclxuICAgICpcclxuICAgICogVG8gc2VlZCB0aGlzIGdlbmVyYXRvciB3aXRoIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSB5b3UgY2FuIHBhc3MgaXQgYXMgdGhlXHJcbiAgICAqIGBzZWVkYCB2YWx1ZSBpbiB5b3VyIGdhbWUgY29uZmlnLCBvciBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5IGFmdGVyIFBoYXNlciBoYXMgYm9vdGVkLlxyXG4gICAgKlxyXG4gICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdpdGggbm8gcGFyYW1ldGVycyB0byByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICAqXHJcbiAgICAqIElmIHByb3ZpZGluZyBhIHN0YXRlIGl0IHNob3VsZCBtYXRjaCB0aGUgc2FtZSBmb3JtYXQgdGhhdCB0aGlzIG1ldGhvZFxyXG4gICAgKiByZXR1cm5zLCB3aGljaCBpcyBhIHN0cmluZyB3aXRoIGEgaGVhZGVyIGAhcm5kYCBmb2xsb3dlZCBieSB0aGUgYGNgLFxyXG4gICAgKiBgczBgLCBgczFgIGFuZCBgczJgIHZhbHVlcyByZXNwZWN0aXZlbHksIGVhY2ggY29tbWEtZGVsaW1pdGVkLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3N0YXRlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdIC0gR2VuZXJhdG9yIHN0YXRlIHRvIGJlIHNldC5cclxuICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gICAgKi9cclxuICAgIHN0YXRlOiBmdW5jdGlvbiAoc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3N0cmluZycgJiYgc3RhdGUubWF0Y2goL14hcm5kLykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICBjID0gcGFyc2VGbG9hdChzdGF0ZVsxXSk7XHJcbiAgICAgICAgICAgIHMwID0gcGFyc2VGbG9hdChzdGF0ZVsyXSk7XHJcbiAgICAgICAgICAgIHMxID0gcGFyc2VGbG9hdChzdGF0ZVszXSk7XHJcbiAgICAgICAgICAgIHMyID0gcGFyc2VGbG9hdChzdGF0ZVs0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gWyAnIXJuZCcsIGMsIHMwLCBzMSwgczIgXS5qb2luKCcsJyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21EYXRhR2VuZXJhdG9yO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZnVuIC8qLCB0aGlzQXJnICovKVxyXG4gICAge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XHJcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZ1biAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9BcnJheS5mb3JFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxyXG4qL1xyXG5pZiAoIUFycmF5LmlzQXJyYXkpXHJcbntcclxuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vLyBFUzYgTWF0aC50cnVuYyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmNcclxuaWYgKCFNYXRoLnRydW5jKSB7XHJcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMCA/IE1hdGguY2VpbCh4KSA6IE1hdGguZmxvb3IoeCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG4qL1xyXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XHJcblxyXG4gICAgLyoganNoaW50IGZyZWV6ZTogZmFsc2UgKi9cclxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYm91bmRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IHRoaXMgOiB0aGlzQXJnLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm91bmQucHJvdG90eXBlID0gKGZ1bmN0aW9uIEYocHJvdG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm90bylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBqc2hpbnQgc3VwZXJuZXc6IHRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKHRhcmdldC5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XHJcbiovXHJcbmlmICghQXJyYXkuaXNBcnJheSlcclxue1xyXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihmdW4gLyosIHRoaXNBcmcgKi8pXHJcbiAgICB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzID09PSB2b2lkIDAgfHwgdGhpcyA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxyXG4vKipcclxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcclxuICovXHJcbmlmICghd2luZG93LmNvbnNvbGUpXHJcbntcclxuICAgIHdpbmRvdy5jb25zb2xlID0ge307XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2cgPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xyXG59XHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXHJcbmlmICghTWF0aC50cnVuYykge1xyXG4gICAgTWF0aC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBBbHNvIGZpeCBmb3IgdGhlIGFic2VudCBjb25zb2xlIGluIElFOVxyXG4gKi9cclxuaWYgKCF3aW5kb3cuY29uc29sZSlcclxue1xyXG4gICAgd2luZG93LmNvbnNvbGUgPSB7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2NvbnNvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvLyBSZWZlcmVuY2VzOlxyXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNTc5NjcxXHJcbi8vIGh0dHA6Ly91cGRhdGVzLmh0bWw1cm9ja3MuY29tLzIwMTIvMDUvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLUFQSS1ub3ctd2l0aC1zdWItbWlsbGlzZWNvbmQtcHJlY2lzaW9uXHJcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3RpbWhhbGwvNDA3ODYxNFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvdHJlZS9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cclxuLy8gRXhwZWN0ZWQgdG8gYmUgdXNlZCB3aXRoIEJyb3dzZXJmaXlcclxuLy8gQnJvd3NlcmlmeSBhdXRvbWF0aWNhbGx5IGRldGVjdHMgdGhlIHVzZSBvZiBgZ2xvYmFsYCBhbmQgcGFzc2VzIHRoZVxyXG4vLyBjb3JyZWN0IHJlZmVyZW5jZSBvZiBgZ2xvYmFsYCwgYHNlbGZgLCBhbmQgZmluYWxseSBgd2luZG93YFxyXG5cclxuLy8gRGF0ZS5ub3dcclxuaWYgKCEoRGF0ZS5ub3cgJiYgRGF0ZS5wcm90b3R5cGUuZ2V0VGltZSkpIHtcclxuICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIHBlcmZvcm1hbmNlLm5vd1xyXG5pZiAoIShnbG9iYWwucGVyZm9ybWFuY2UgJiYgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdykpIHtcclxuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKCFnbG9iYWwucGVyZm9ybWFuY2UpIHtcclxuICAgICAgICBnbG9iYWwucGVyZm9ybWFuY2UgPSB7fTtcclxuICAgIH1cclxuICAgIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxudmFyIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cclxuZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcclxuICAgICAgICBnbG9iYWxbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxufVxyXG5cclxuaWYgKCFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBkZWxheSA9IDE2ICsgbGFzdFRpbWUgLSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xyXG4gICAgICAgICAgICBkZWxheSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socGVyZm9ybWFuY2Uubm93KCkpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmlmICghZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MnKTtcclxudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcclxuXHJcbi8qKlxyXG4qIEEgQmFzZSBTdGF0ZSBDbGFzcy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuU3RhdGVcclxuKiBAY29uc3RydWN0b3JcclxuKi9cclxudmFyIFN0YXRlID0gZnVuY3Rpb24gKGNvbmZpZylcclxue1xyXG4gICAgLy8gIFRoZSBwcm9wZXJ0aWVzIGEgU3RhdGUgKm11c3QqIGhhdmUsIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgd2l0aG91dCBicmVha2luZyBpdDpcclxuXHJcbiAgICB0aGlzLmdhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vICBNYXliZSBqdXN0IGFuIG9iamVjdD8gRG9lc24ndCBoYXZlIHRvIGluc3RhbnRpYXRlIEkgZG9uJ3QgdGhpbmsgLi4uXHJcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMsIGNvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5zeXMgPSBuZXcgU3lzdGVtcyh0aGlzLCBjb25maWcpO1xyXG5cclxuICAgIC8vICBSZWZlcmVuY2UgdG8gc3lzLmNoaWxkcmVuLCBzZXQgZHVyaW5nIHN5cy5pbml0IG9ubHlcclxuICAgIHRoaXMuY2hpbGRyZW47XHJcbn07XHJcblxyXG5TdGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGF0ZTtcclxuXHJcblN0YXRlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXHJcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgcG9zdFVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZS5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBOT09QID0gcmVxdWlyZSgnLi4vdXRpbHMvTk9PUCcpO1xyXG52YXIgU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XHJcbnZhciBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MnKTtcclxudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcclxudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcclxuXHJcbi8qKlxyXG4qIFRoZSBTdGF0ZSBNYW5hZ2VyIGlzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nLCBzZXR0aW5nIHVwIGFuZCBzd2l0Y2hpbmcgZ2FtZSBzdGF0ZXMuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlN0YXRlTWFuYWdlclxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKi9cclxudmFyIFN0YXRlTWFuYWdlciA9IGZ1bmN0aW9uIChnYW1lLCBzdGF0ZUNvbmZpZylcclxue1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuXHJcbiAgICAvLyAgRXZlcnl0aGluZyBrZXB0IGluIGhlcmVcclxuICAgIHRoaXMua2V5cyA9IHt9O1xyXG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvLyAgT25seSBhY3RpdmUgc3RhdGVzIGFyZSBrZXB0IGluIGhlcmVcclxuICAgIHRoaXMuYWN0aXZlID0gW107XHJcblxyXG4gICAgdGhpcy5fcGVuZGluZyA9IFtdO1xyXG5cclxuICAgIGlmIChzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZUNvbmZpZykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlQ29uZmlnLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGkgPT09IDAgcGFydCBqdXN0IHN0YXJ0cyB0aGUgZmlyc3QgU3RhdGUgZ2l2ZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlQ29uZmlnW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogKGkgPT09IDApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZyxcclxuICAgICAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5TdGF0ZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGVNYW5hZ2VyO1xyXG5cclxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogVGhlIEJvb3QgaGFuZGxlciBpcyBjYWxsZWQgYnkgUGhhc2VyLkdhbWUgd2hlbiBpdCBmaXJzdCBzdGFydHMgdXAuXHJcbiAgICAqIFRoZSByZW5kZXJlciBpcyBhdmFpbGFibGUgYnkgbm93LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5TdGF0ZU1hbmFnZXIjYm9vdFxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLm9uUGF1c2UuYWRkKHRoaXMucGF1c2UsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblJlc3VtZS5hZGQodGhpcy5yZXN1bWUsIHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmJvb3QnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fcGVuZGluZ1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGVudHJ5LmtleSwgZW50cnkuc3RhdGUsIGVudHJ5LmF1dG9TdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgQ2xlYXIgdGhlIHBlbmRpbmcgbGlzdFxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoIWtleSkgeyBrZXkgPSAnZGVmYXVsdCc7IH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXkgPSBzdGF0ZUNvbmZpZy5zZXR0aW5ncy5rZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ29iamVjdCcgJiYgc3RhdGVDb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gc3RhdGVDb25maWcua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEJ5IHRoaXMgcG9pbnQgaXQncyBlaXRoZXIgJ2RlZmF1bHQnIG9yIGV4dHJhY3RlZCBmcm9tIHRoZSBTdGF0ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgYSBTdGF0ZSB3aXRoIGR1cGxpY2F0ZSBrZXk6ICcgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFkZHMgYSBuZXcgU3RhdGUgaW50byB0aGUgU3RhdGVNYW5hZ2VyLiBZb3UgbXVzdCBnaXZlIGVhY2ggU3RhdGUgYSB1bmlxdWUga2V5IGJ5IHdoaWNoIHlvdSdsbCBpZGVudGlmeSBpdC5cclxuICAgICogVGhlIFN0YXRlIGNhbiBiZSBlaXRoZXIgYSBQaGFzZXIuU3RhdGUgb2JqZWN0IChvciBhbiBvYmplY3QgdGhhdCBleHRlbmRzIGl0KSwgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCBvciBhIGZ1bmN0aW9uLlxyXG4gICAgKiBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuIGEgbmV3IHN0YXRlIG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgYnkgY2FsbGluZyBpdC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2FkZFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQSB1bmlxdWUga2V5IHlvdSB1c2UgdG8gcmVmZXJlbmNlIHRoaXMgc3RhdGUsIGkuZS4gXCJNYWluTWVudVwiLCBcIkxldmVsMVwiLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5TdGF0ZXxvYmplY3R8ZnVuY3Rpb259IHN0YXRlICAtIFRoZSBzdGF0ZSB5b3Ugd2FudCB0byBzd2l0Y2ggdG8uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TdGFydD1mYWxzZV0gIC0gSWYgdHJ1ZSB0aGUgU3RhdGUgd2lsbCBiZSBzdGFydGVkIGltbWVkaWF0ZWx5IGFmdGVyIGFkZGluZyBpdC5cclxuICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnLCBhdXRvU3RhcnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCA9PT0gdW5kZWZpbmVkKSB7IGF1dG9TdGFydCA9IGZhbHNlOyB9XHJcblxyXG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuaXNCb290ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX3BlbmRpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXHJcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IGF1dG9TdGFydFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIgbm90IHlldCBib290ZWQsIGFkZGluZyB0byBsaXN0JywgdGhpcy5fcGVuZGluZy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5ID0gdGhpcy5nZXRLZXkoa2V5LCBzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdTdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIGluc3RhbmNlJywga2V5KTtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlKGtleSwgc3RhdGVDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBvYmplY3QnLCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGVDb25maWcua2V5ID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbU9iamVjdChrZXksIHN0YXRlQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBmdW5jdGlvbicsIGtleSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb24oa2V5LCBzdGF0ZUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IG5ld1N0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcy5wdXNoKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCB8fCBuZXdTdGF0ZS5zZXR0aW5ncy5hY3RpdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydC5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlU3RhdGVGcm9tSW5zdGFuY2U6IGZ1bmN0aW9uIChrZXksIG5ld1N0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmtleSA9IGtleTtcclxuXHJcbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyb21PYmplY3Q6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBTdGF0ZShzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgc3RhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuXHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKG5ld1N0YXRlLCBrZXkpO1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMgPSBuZXcgU3lzdGVtcyhuZXdTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBEZWZhdWx0IHJlcXVpcmVkIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR1cENhbGxiYWNrcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR1cENhbGxiYWNrczogZnVuY3Rpb24gKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhdGVDb25maWcgPT09IHVuZGVmaW5lZCkgeyBzdGF0ZUNvbmZpZyA9IG5ld1N0YXRlOyB9XHJcblxyXG4gICAgICAgIC8vICBFeHRyYWN0IGNhbGxiYWNrcyBvciBzZXQgTk9PUFxyXG5cclxuICAgICAgICBuZXdTdGF0ZS5pbml0ID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdpbml0JywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucHJlbG9hZCA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlbG9hZCcsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLmNyZWF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAnY3JlYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUuc2h1dGRvd24gPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3NodXRkb3duJywgTk9PUCk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnByZVVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlVXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUudXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICd1cGRhdGUnLCBOT09QKTtcclxuICAgICAgICBuZXdTdGF0ZS5wb3N0VXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwb3N0VXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucmVuZGVyID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdyZW5kZXInLCBOT09QKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyYW1lQnVmZmVyOiBmdW5jdGlvbiAobmV3U3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS5zZXR0aW5ncy54O1xyXG4gICAgICAgIHZhciB5ID0gbmV3U3RhdGUuc2V0dGluZ3MueTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID0gdGhpcy5nYW1lLmNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZS5zZXR0aW5ncy5oZWlnaHQgPT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBuZXdTdGF0ZS5zeXMuZmJvID0gdGhpcy5nYW1lLnJlbmRlcmVyLmNyZWF0ZUZCTyhuZXdTdGF0ZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWN0aXZlU3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IHN0YXRlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHN0YXRlICYmIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZS5pbmRleE9mKHN0YXRlKSAhPT0gLTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlciBub3QgeWV0IGJvb3RlZCwgc2V0dGluZyBhdXRvU3RhcnQgb24gcGVuZGluZyBsaXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3BlbmRpbmcubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3BlbmRpbmdbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmF1dG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEFscmVhZHkgc3RhcnRlZD8gTm90aGluZyBtb3JlIHRvIGRvIGhlcmUgLi4uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKGtleSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICArIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5pdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaW5pdC5jYWxsKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnByZWxvYWQgJiYgc3RhdGUuc3lzLmxvYWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJlbG9hZC5jYWxsKHN0YXRlLCB0aGlzLmdhbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBJcyB0aGUgbG9hZGVyIGVtcHR5P1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN5cy5sb2FkLmxpc3Quc2l6ZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wdHkgcXVldWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q3JlYXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZCBzdGFydCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgU3RhcnQgdGhlIGxvYWRlciBnb2luZyBhcyB3ZSBoYXZlIHNvbWV0aGluZyBpbiB0aGUgcXVldWVcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5sb2FkQ29tcGxldGUsIHRoaXMsIDAsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzLmxvYWQuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIE5vIHByZWxvYWQ/IFRoZW4gdGhlcmUgd2FzIG5vdGhpbmcgdG8gbG9hZCBlaXRoZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZENvbXBsZXRlOiBmdW5jdGlvbiAoc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRDb21wbGV0ZScpO1xyXG5cclxuICAgICAgICAvLyAgTWFrZSBzdXJlIHRvIGRvIGxvYWQtdXBkYXRlIG9uZSBsYXN0IHRpbWUgYmVmb3JlIHN0YXRlIGlzIHNldCB0byBfY3JlYXRlZFxyXG5cclxuICAgICAgICAvLyAgU3RvcCBkb2luZyB0aGlzIC4uLlxyXG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eSgnbG9hZFVwZGF0ZScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUubG9hZFVwZGF0ZS5jYWxsKHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydENyZWF0ZTogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGF0ZS5jcmVhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZS5jcmVhdGUuY2FsbChzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgSW5zZXJ0IGF0IHRoZSBjb3JyZWN0IGluZGV4LCBvciBpdCBqdXN0IGFsbCBnb2VzIHdyb25nIDopXHJcblxyXG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRTdGF0ZUluZGV4KHN0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUucHVzaCh7IGluZGV4OiBpLCBzdGF0ZTogc3RhdGUgfSk7XHJcblxyXG4gICAgICAgIC8vICBTb3J0IHRoZSAnYWN0aXZlJyBhcnJheSBiYXNlZCBvbiB0aGUgaW5kZXggcHJvcGVydHlcclxuICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgc3RhdGUuc3lzLnVwZGF0ZXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXVzZTogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZVN0YXRlSW5kZXgoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNvcnRTdGF0ZXM6IGZ1bmN0aW9uIChzdGF0ZUEsIHN0YXRlQilcclxuICAgIHtcclxuICAgICAgICAvLyAgU29ydCBkZXNjZW5kaW5nXHJcbiAgICAgICAgaWYgKHN0YXRlQS5pbmRleCA8IHN0YXRlQi5pbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVBLmluZGV4ID4gc3RhdGVCLmluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFNlZSBpZiB3ZSBjYW4gcmVkdWNlIHRoaXMgZG93biB0byBqdXN0IHVwZGF0ZSBhbmQgcmVuZGVyXHJcblxyXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3lzLm1haW5sb29wLnJ1bm5pbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGVwKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qXHJcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucHJlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnByZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICBJbnZva2UgU3RhdGUgTWFpbiBMb29wIGhlcmUgLSB1cGRhdGluZyBhbGwgb2YgaXRzIHN5c3RlbXMgKHR3ZWVucywgcGh5c2ljcywgZXRjKVxyXG5cclxuICAgICAgICAgICAgLy8gIFRoaXMgc2hvdWxkbid0IGJlIGNhbGxlZCBpZiB0aGUgU3RhdGUgaXMgc3RpbGwgbG9hZGluZ1xyXG4gICAgICAgICAgICAvLyAgSGF2ZSBhIFN0YXRlLlNUQVRVUyBjb25zdCBpbiB0aGUgU2V0dGluZ3MsIGRpY3RhdGluZyB3aGF0IGlzIGdvaW5nIG9uXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucG9zdFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5wb3N0VXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgLy8gIENhbiBwdXQgYWxsIGtpbmRzIG9mIG90aGVyIGNoZWNrcyBpbiBoZXJlLCBsaWtlIE1haW5Mb29wLCBGUFMsIGV0Yy5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZXR0aW5ncy52aXNpYmxlIHx8IHN0YXRlLnN5cy5jb2xvci5hbHBoYSA9PT0gMCB8fCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIucmVuZGVyKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKi9cclxuXHJcbiAgICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKHJlbmRlcmVyLCBzdGF0ZSwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFBvcHVsYXRlcyB0aGUgZGlzcGxheSBsaXN0XHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xyXG5cclxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKHJlbmRlcmVyLCBjaGlsZCwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcclxuXHJcbi8qKlxyXG4qIFRoZSBHYW1lT2JqZWN0IEZhY3RvcnkgaXMgYSBxdWljayB3YXkgdG8gY3JlYXRlIG1hbnkgY29tbW9uIGdhbWUgb2JqZWN0cy4gVGhlIEZhY3RvcnkgaXMgb3duZWQgYnkgdGhlIFN0YXRlLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcblxyXG52YXIgR2FtZU9iamVjdENyZWF0b3IgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlfSBzdGF0ZSAtIFRoZSBTdGF0ZSB0aGF0IG93bnMgdGhpcyBGYWN0b3J5XHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICBzdGF0ZTogbnVsbFxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKHN0YXRlKVxyXG57XHJcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgR2FtZU9iamVjdENyZWF0b3IgaW5zdGFuY2UgZm9yIFN0YXRlJywgc3RhdGUpO1xyXG5cclxuICAgIEdhbWVPYmplY3RDcmVhdG9yLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxyXG5cclxuICAgIEZhY3RvcnlDb250YWluZXIubG9hZChHYW1lT2JqZWN0Q3JlYXRvciwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiBHYW1lT2JqZWN0Q3JlYXRvcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgcXVpY2sgd2F5IHRvIGNyZWF0ZSBtYW55IGNvbW1vbiBnYW1lIG9iamVjdHMuIFRoZSBGYWN0b3J5IGlzIG93bmVkIGJ5IHRoZSBTdGF0ZS5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG5cclxudmFyIEdhbWVPYmplY3RGYWN0b3J5ID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgc3RhdGU6IG51bGxcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RGYWN0b3J5IGluc3RhbmNlIGZvciBTdGF0ZScpO1xyXG5cclxuICAgIEdhbWVPYmplY3RGYWN0b3J5LnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxyXG5cclxuICAgIHJldHVybiBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdEZhY3RvcnksIHRydWUpO1xyXG5cclxuICAgIC8vIHJldHVybiBHYW1lT2JqZWN0RmFjdG9yeTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwidmFyIEJhc2VMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9sb2FkZXIvQmFzZUxvYWRlcicpO1xyXG52YXIgSW1hZ2VMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9sb2FkZXIvZmlsZXR5cGVzL0ltYWdlRmlsZScpO1xyXG5cclxudmFyIExvYWRlciA9IGZ1bmN0aW9uIChzdGF0ZSlcclxue1xyXG4gICAgQmFzZUxvYWRlci5jYWxsKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxufTtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VMb2FkZXIucHJvdG90eXBlKTtcclxuTG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlcjtcclxuXHJcbkxvYWRlci5wcm90b3R5cGUuaW1hZ2UgPSBmdW5jdGlvbiAoa2V5LCB1cmwpXHJcbntcclxuICAgIHZhciBmaWxlID0gSW1hZ2VMb2FkZXIoa2V5LCB1cmwsIHRoaXMucGF0aCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0xvYWRlci5pbWFnZScpO1xyXG4gICAgY29uc29sZS5sb2coZmlsZSk7XHJcblxyXG4gICAgdGhpcy5hZGRGaWxlKGZpbGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9Mb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL3N5c3RlbXMvTG9hZGVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gTXkgdGhhbmtzIHRvIElzYWFjIFN1a2luIGZvciBjcmVhdGluZyBNYWluTG9vcC5qcywgb24gd2hpY2ggbG90cyBvZiB0aGlzIGlzIGJhc2VkLlxyXG5cclxudmFyIE1haW5Mb29wID0gZnVuY3Rpb24gKHN0YXRlLCBmcmFtZXJhdGUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGVcclxuICAgICovXHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cclxuICAgICovXHJcbiAgICB0aGlzLmdhbWUgPSBzdGF0ZS5nYW1lO1xyXG5cclxuICAgIC8vIFRoZSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0byBzaW11bGF0ZSBlYWNoIHRpbWUgdXBkYXRlKCkgcnVucy5cclxuICAgIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIHRoaXMucGh5c2ljc1N0ZXAgPSAxIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXHJcbiAgICAvLyBTZWUgdGhlIGNvbW1lbnRzIGluc2lkZSBhbmltYXRlKCkgZm9yIGRldGFpbHMuXHJcbiAgICB0aGlzLmZyYW1lRGVsdGEgPSAwO1xyXG5cclxuICAgIC8vIFRoZSB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzIG9mIHRoZSBsYXN0IHRpbWUgdGhlIG1haW4gbG9vcCB3YXMgcnVuLlxyXG4gICAgLy8gVXNlZCB0byBjb21wdXRlIHRoZSB0aW1lIGVsYXBzZWQgYmV0d2VlbiBmcmFtZXMuXHJcbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XHJcblxyXG4gICAgLy8gQW4gZXhwb25lbnRpYWwgbW92aW5nIGF2ZXJhZ2Ugb2YgdGhlIGZyYW1lcyBwZXIgc2Vjb25kLlxyXG4gICAgdGhpcy5mcHMgPSA2MDtcclxuXHJcbiAgICAvLyBUaGUgdGltZXN0YW1wIChpbiBtaWxsaXNlY29uZHMpIG9mIHRoZSBsYXN0IHRpbWUgdGhlIGBmcHNgIG1vdmluZ1xyXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cclxuICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cclxuICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XHJcbiAgICAvLyByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXMgaGVsZCBleHRlcm5hbGx5IHNvIHRoYXRcclxuICAgIC8vIHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW5cclxuICAgIC8vIGxvb3AgcnVucy5cclxuICAgIHRoaXMubnVtVXBkYXRlU3RlcHMgPSAwO1xyXG5cclxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxyXG4gICAgLy8gZnJhbWUgd2FzIGV4ZWN1dGVkIGJlZm9yZSBhbm90aGVyIGZyYW1lIGNhbiBiZSBleGVjdXRlZC4gVGhlXHJcbiAgICAvLyBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlIGNhcHMgdGhlIEZQUyAodGhlIGRlZmF1bHQgb2YgemVybyBtZWFucyB0aGVyZSBpc1xyXG4gICAgLy8gbm8gY2FwKS5cclxuICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDA7XHJcblxyXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcclxuICAgIC8vIHdhcyBjYWxsZWQgaGFzIG5vdCBiZWVuIGZvbGxvd2VkIGJ5IGEgY2FsbCB0byBgTWFpbkxvb3Auc3RvcCgpYC4gVGhpcyBpc1xyXG4gICAgLy8gZGlmZmVyZW50IHRoYW4gYHJ1bm5pbmdgIGJlY2F1c2UgdGhlcmUgaXMgYSBkZWxheSBvZiBhIGZldyBtaWxsaXNlY29uZHNcclxuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXHJcbiAgICAvLyBcInJ1bm5pbmcuXCIgVGhpcyBkZWxheSBpcyBkdWUgdG8gd2FpdGluZyBmb3IgdGhlIG5leHQgZnJhbWUuXHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBXaGV0aGVyIHRoZSBzaW11bGF0aW9uIGhhcyBmYWxsZW4gdG9vIGZhciBiZWhpbmQgcmVhbCB0aW1lLlxyXG4gICAgLy8gU3BlY2lmaWNhbGx5LCBgcGFuaWNgIHdpbGwgYmUgc2V0IHRvIGB0cnVlYCBpZiB0b28gbWFueSB1cGRhdGVzIG9jY3VyIGluXHJcbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcclxuICAgIC8vIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0IHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZVxyXG4gICAgLy8gY29sbGVjdGlvbiBldmVyeSB0aW1lIHRoZSBtYWluIGxvb3AgcnVucy5cclxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcclxufTtcclxuXHJcbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xyXG5cclxuTWFpbkxvb3AucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHNldE1heEZQUzogZnVuY3Rpb24gKGZwcylcclxuICAgIHtcclxuICAgICAgICBpZiAoZnBzID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNYXhGUFM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgb2xkRnJhbWVEZWx0YSA9IHRoaXMuZnJhbWVEZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbHRhID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0RnBzVXBkYXRlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXHJcbiAgICBzdGVwOiBmdW5jdGlvbiAodGltZXN0YW1wKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XHJcbiAgICAgICAgLy8gYE1haW5Mb29wLnNldE1heEFsbG93ZWRGUFMoKWApLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPCB0aGlzLmxhc3RGcmFtZVRpbWVNcyArIHRoaXMubWluRnJhbWVEZWxheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyYW1lRGVsdGEgaXMgdGhlIGN1bXVsYXRpdmUgYW1vdW50IG9mIGluLWFwcCB0aW1lIHRoYXQgaGFzbid0IGJlZW5cclxuICAgICAgICAvLyBzaW11bGF0ZWQgeWV0LiBBZGQgdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgZnJhbWUuIFdlIG5lZWQgdG8gdHJhY2sgdG90YWxcclxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcclxuICAgICAgICAvLyBsYXN0IGZyYW1lKSBiZWNhdXNlIG5vdCBhbGwgYWN0dWFsbHkgZWxhcHNlZCB0aW1lIGlzIGd1YXJhbnRlZWQgdG8gYmVcclxuICAgICAgICAvLyBzaW11bGF0ZWQgZWFjaCBmcmFtZS4gU2VlIHRoZSBjb21tZW50cyBiZWxvdyBmb3IgZGV0YWlscy5cclxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXHJcblxyXG4gICAgICAgIC8vICBIZXJlIHdlJ2xsIG5lZWQgdG8gcnVuIHRoaW5ncyBsaWtlIHR3ZWVuLnVwZGF0ZSwgaW5wdXQudXBkYXRlLCBldGMuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGVzdGltYXRlIG9mIHRoZSBmcmFtZSByYXRlLCBgZnBzYC4gRXZlcnkgc2Vjb25kLCB0aGUgbnVtYmVyXHJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXHJcbiAgICAgICAgLy8gbW92aW5nIGF2ZXJhZ2Ugb2YgYWxsIGZyYW1lcyBwZXIgc2Vjb25kLCB3aXRoIGFuIGFscGhhIG9mIDAuMjUuIFRoaXNcclxuICAgICAgICAvLyBtZWFucyB0aGF0IG1vcmUgcmVjZW50IHNlY29uZHMgYWZmZWN0IHRoZSBlc3RpbWF0ZWQgZnJhbWUgcmF0ZSBtb3JlIHRoYW5cclxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPiB0aGlzLmxhc3RGcHNVcGRhdGUgKyAxMDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cclxuICAgICAgICAgICAgLy8gVXNpbmcgY29uc3RhbnRzIGlubGluZSBpcyBva2F5IGhlcmUuXHJcbiAgICAgICAgICAgIHRoaXMuZnBzID0gMC4yNSAqIHRoaXMuZnJhbWVzVGhpc1NlY29uZCArIDAuNzUgKiB0aGlzLmZwcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCsrO1xyXG5cclxuICAgICAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5mcmFtZURlbHRhID49IHN0ZXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLnRpbWVzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZShzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZShzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5udW1VcGRhdGVTdGVwcyA+PSAyNDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNldHRpbmdzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5zeXMuY29sb3IuYWxwaGEgIT09IDAgJiYgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YXRlLCB0aGlzLmZyYW1lRGVsdGEgLyB0aGlzLnRpbWVzdGVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RvcCgpO1xyXG5cclxuICAgICAgICAvLyBSdW4gYW55IHVwZGF0ZXMgdGhhdCBhcmUgbm90IGRlcGVuZGVudCBvbiB0aW1lIGluIHRoZSBzaW11bGF0aW9uLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmVuZCh0aGlzLmZwcywgdGhpcy5wYW5pYyk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZSh0aW1lc3RlcCk7XHJcblxyXG4gICAgICAgIHZhciBjO1xyXG4gICAgICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBEZXYgbGV2ZWwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aW1lc3RlcCk7XHJcblxyXG4gICAgICAgIGZvciAoYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKi9cclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Mb29wO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL01haW5Mb29wLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBEaXJ0eSEgTWFuYWdlclxyXG4qXHJcbiogQGNsYXNzXHJcbiovXHJcbnZhciBVcGRhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKHN0YXRlKVxyXG57XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuXHJcbiAgICAvLyB0aGlzLmkgPSAxO1xyXG5cclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLnByb2Nlc3NlZCA9IDA7XHJcbn07XHJcblxyXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZGF0ZU1hbmFnZXI7XHJcblxyXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pLCAnVXBkYXRlTWFuYWdlci5zdG9wJywgdGhpcy5wcm9jZXNzZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pKys7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMubGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChsZW4gPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmksICdVcGRhdGVNYW5hZ2VyLnN0YXJ0JywgbGVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEJlY2F1c2UgaXQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCAoYXMgYSBjaGlsZCBvZiBhbm90aGVyIFRyYW5zZm9ybSB0aGF0IHdhcyB1cGRhdGVkKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldICYmIHRoaXMubGlzdFtpXS5fZGlydHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKHRyYW5zZm9ybSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXBkYXRlTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9VcGRhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcclxufTtcclxuXHJcblNldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTZXQ7XHJcblxyXG5TZXQucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZTogZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPiAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sodGhpcy52YWx1ZXNbaV0pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMubGVuZ3RoID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgY29udGFpbnM6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpID4gLTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmlvbjogZnVuY3Rpb24gKHNldClcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICBzZXQudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U2V0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTZXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGludGVyc2VjdDogZnVuY3Rpb24gKHNldClcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChzZXQuY29udGFpbnModmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZXQuYWRkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiAoc2V0KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCFzZXQuY29udGFpbnModmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZXQuYWRkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2V0O1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNldC5wcm90b3R5cGUsIHtcclxuXHJcbiAgICBzaXplOiB7XHJcblxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0cnVjdHMvU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZDovd2FtcC93d3cvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9waGFzZXIuanMiLCJyZXF1aXJlKCcuL3BvbHlmaWxscycpO1xyXG5cclxudmFyIGJvb3QgPSByZXF1aXJlKCcuL2Jvb3QnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYm9vdDtcclxuXHJcbmdsb2JhbC5QaGFzZXIgPSBib290O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9waGFzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=