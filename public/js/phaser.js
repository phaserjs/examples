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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var CanvasPool = __webpack_require__(7);

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
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(1);
var GetObjectValue = __webpack_require__(4);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var GameObjectFactory = __webpack_require__(40);
var GameObjectCreator = __webpack_require__(39);
var MainLoop = __webpack_require__(41);
var UpdateManager = __webpack_require__(42);

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

        // this.load = new Phaser.Loader(this.state);
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
        // this.state.load = this.load;
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
/* 10 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  Doing this makes it available under Phaser.Game
    Game: __webpack_require__(16)

};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(34);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(33);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(10);
var GetObjectValue = __webpack_require__(4);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CanvasPool = __webpack_require__(7);
var Features = __webpack_require__(6);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(17);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Device = __webpack_require__(22);
var Config = __webpack_require__(13);
var DebugHeader = __webpack_require__(15);
var CreateRenderer = __webpack_require__(14);
var RequestAnimationFrame = __webpack_require__(24);
var DOMContentLoaded = __webpack_require__(23);
var RandomDataGenerator = __webpack_require__(28);
var StateManager = __webpack_require__(38);
var FactoryContainer = __webpack_require__(3);

//  Require all of the Game Object Factories into the FactoryContainer
__webpack_require__ (27);

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

    window.game = this;
};

Game.prototype.constructor = Game;

Game.prototype = {

    boot: function ()
    {
        this.isBooted = true;

        this.config.preBoot();

        //  Probably move ...
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
/* 17 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '3411e4e0-b647-11e6-bc8f-775864c00ec7'
};
module.exports = CHECKSUM;

/***/ },
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(0);
var Browser = __webpack_require__(2);
var Features = __webpack_require__(6);
var Input = __webpack_require__(20);
var Audio = __webpack_require__(18);
var Video = __webpack_require__(21);
var Fullscreen = __webpack_require__(19);

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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(25);
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

//  Include all of the Game Object Factories

__webpack_require__ (26);


/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(8);
var Systems = __webpack_require__(9);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(10);
var State = __webpack_require__(37);
var Settings = __webpack_require__(8);
var Systems = __webpack_require__(9);
var GetObjectValue = __webpack_require__(4);

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
                state.sys.load.reset(true);

                state.preload.call(state, this.game);

                //  Is the loader empty?
                if (state.sys.load.totalQueuedFiles() === 0 && state.sys.load.totalQueuedPacks() === 0)
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(12);

var boot = __webpack_require__(11);

module.exports = boot;

global.Phaser = boot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZjExNDAyNzQzNWYyMDQ0MTA2NSIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9PUy5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL09TLmpzIiwid2VicGFjazovLy8uLi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vZ2FtZW9iamVjdHMvRmFjdG9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL0ZlYXR1cmVzLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0ZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uLi9kb20vQ2FudmFzUG9vbC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbS9DYW52YXNQb29sLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9TeXN0ZW1zLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3lzdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi4vdXRpbHMvTk9PUC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9Db25maWcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vYm9vdC9DcmVhdGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jvb3QvQ3JlYXRlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2Jvb3QvRGVidWdIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ib290L0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NoZWNrc3VtLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RldmljZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy9zcmMvZGV2aWNlL1ZpZGVvLmpzIiwid2VicGFjazovLy8uLi9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kZXZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwid2VicGFjazovLy9zcmMvZG9tL0RPTUNvbnRlbnRMb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL2RvbS9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovLy8uLi9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL2dhbWVvYmplY3RzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvZ2FtZW9iamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL21hdGgvcmFuZG9tLWRhdGEtZ2VuZXJhdG9yL1JhbmRvbURhdGFHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9BcnJheS5mb3JFYWNoLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvQXJyYXkuaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL0Z1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9NYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvVWludDMyQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3BvbHlmaWxscy9jb25zb2xlLmpzIiwid2VicGFjazovLy8uLi9wb2x5ZmlsbHMvcGVyZm9ybWFuY2Uubm93LmpzIiwid2VicGFjazovLy9zcmMvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdGF0ZS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzIiwid2VicGFjazovLy9zcmMvc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vc3RhdGUvc3lzdGVtcy9HYW1lT2JqZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0YXRlL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvTWFpbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0YXRlL3N5c3RlbXMvVXBkYXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vZDovd2FtcC93d3cvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9zcmMvcGhhc2VyLmpzIiwid2VicGFjazovLy8uLi9waGFzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsK0NDQUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEdBQUcsdUJBQXVCLE9BQU87QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3JRQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN2REEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTyxzR0FBc0c7QUFDOUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FFNUtBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYSxFQUFFOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNsQkEsU0NBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxjQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7O0FBRUE7Ozs7Ozs7QUV2Q0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLHdCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHdCQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxFREFBO0FBQ0Esb0JDQUEsbUJEQUEsQ0NBQSxFREFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBRS9IQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsVUNBQSxtQkRBQSxDQ0FBLEVEQUE7O0FBRUE7Ozs7Ozs7QUVMQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7QURDQSxtQkNBQSxDREFBLEVDQUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsWUNBQSxtQkRBQSxDQ0FBLENEQUE7QUFDQSxXQ0FBLG1CREFBLENDQUEsRURBQTtBQUNBLHFCQ0FBLG1CREFBLENDQUEsQ0RBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7O0FBRTVDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FFOURBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGlCQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxDREFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FFOUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxZQ0FBLG1CREFBLENDQUEsQ0RBQTtBQUNBLGVDQUEsbUJEQUEsQ0NBQSxF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Q0FBc0MsbUJBQW1COztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDBC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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNoRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs4Q0NuTHRDLG1CQ0FBLENEQUEsRUNBQTs7QUFFQSxXREFBLG1CQ0FBLENEQUEsRUNBQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwaGFzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlBoYXNlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQaGFzZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGhhc2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2YxMTQwMjc0MzVmMjA0NDEwNjUiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvT1MuanMiLCJ2YXIgT1MgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVza3RvcCAtIElzIHJ1bm5pbmcgb24gYSBkZXNrdG9wP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGRlc2t0b3A6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHdlYkFwcCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgYXMgYSBXZWJBcHAsIGkuZS4gd2l0aGluIGEgV2ViVmlld1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdlYkFwcDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaU9TIC0gSXMgcnVubmluZyBvbiBpT1M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaU9TOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGlPU1ZlcnNpb24gLSBJZiBydW5uaW5nIGluIGlPUyB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaU9TVmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpUGhvbmUgLSBJcyBydW5uaW5nIG9uIGlQaG9uZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBpUGhvbmU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlQYWQgLSBJcyBydW5uaW5nIG9uIGlQYWQ/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaVBhZDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlMgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIENvY29vbkpTP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNvY29vbkpTOiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29jb29uSlNBcHAgLSBJcyB0aGlzIGdhbWUgcnVubmluZyB3aXRoIENvY29vbkpTLkFwcD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjb2Nvb25KU0FwcDogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvcmRvdmEgLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEFwYWNoZSBDb3Jkb3ZhP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNvcmRvdmE6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLmpzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG5vZGU6IGZhbHNlLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBub2RlV2Via2l0IC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciBOb2RlLVdlYmtpdD9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBub2RlV2Via2l0OiBmYWxzZSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWxlY3Ryb24gLSBJcyB0aGUgZ2FtZSBydW5uaW5nIHVuZGVyIEdpdEh1YiBFbGVjdHJvbj9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlbGVjdHJvbjogZmFsc2UsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVqZWN0YSAtIElzIHRoZSBnYW1lIHJ1bm5pbmcgdW5kZXIgRWplY3RhP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGVqZWN0YTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY3Jvc3N3YWxrIC0gSXMgdGhlIGdhbWUgcnVubmluZyB1bmRlciB0aGUgSW50ZWwgQ3Jvc3N3YWxrIFhESz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjcm9zc3dhbGs6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFuZHJvaWQgLSBJcyBydW5uaW5nIG9uIGFuZHJvaWQ/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgYW5kcm9pZDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2hyb21lT1MgLSBJcyBydW5uaW5nIG9uIGNocm9tZU9TP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGNocm9tZU9TOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsaW51eCAtIElzIHJ1bm5pbmcgb24gbGludXg/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbGludXg6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1hY09TIC0gSXMgcnVubmluZyBvbiBtYWNPUz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBtYWNPUzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2luZG93cyAtIElzIHJ1bm5pbmcgb24gd2luZG93cz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3aW5kb3dzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3aW5kb3dzUGhvbmUgLSBJcyBydW5uaW5nIG9uIGEgV2luZG93cyBQaG9uZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3aW5kb3dzUGhvbmU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpdGEgLSBJcyBydW5uaW5nIG9uIGEgUGxheVN0YXRpb24gVml0YT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB2aXRhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBraW5kbGUgLSBJcyBydW5uaW5nIG9uIGFuIEFtYXpvbiBLaW5kbGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAga2luZGxlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBpeGVsUmF0aW8gLSBQaXhlbFJhdGlvIG9mIHRoZSBob3N0IGRldmljZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBwaXhlbFJhdGlvOiAxXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIGlmICgvV2luZG93cy8udGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mud2luZG93cyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvTWFjIE9TLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5tYWNPUyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvTGludXgvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmxpbnV4ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5hbmRyb2lkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9pUFthb11kfGlQaG9uZS9pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmlPUyA9IHRydWU7XHJcbiAgICAgICAgKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspLyk7XHJcbiAgICAgICAgT1MuaU9TVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL0tpbmRsZS8udGVzdCh1YSkgfHwgKC9cXGJLRltBLVpdW0EtWl0rLykudGVzdCh1YSkgfHwgKC9TaWxrLipNb2JpbGUgU2FmYXJpLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgT1Mua2luZGxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIE5PVCBkZXRlY3QgZWFybHkgZ2VuZXJhdGlvbnMgb2YgS2luZGxlIEZpcmUsIEkgdGhpbmsgdGhlcmUgaXMgbm8gcmVsaWFibGUgd2F5Li4uXHJcbiAgICAgICAgLy8gRS5nLiBcIk1vemlsbGEvNS4wIChNYWNpbnRvc2g7IFU7IEludGVsIE1hYyBPUyBYIDEwXzZfMzsgZW4tdXM7IFNpbGsvMS4xLjAtODApIEFwcGxlV2ViS2l0LzUzMy4xNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNS4wIFNhZmFyaS81MzMuMTYgU2lsay1BY2NlbGVyYXRlZD10cnVlXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9Dck9TLy50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5jaHJvbWVPUyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL1BsYXlzdGF0aW9uIFZpdGEvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy52aXRhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHVhKSB8fCAoL0lFTW9iaWxlL2kpLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmFuZHJvaWQgPSBmYWxzZTtcclxuICAgICAgICBPUy5pT1MgPSBmYWxzZTtcclxuICAgICAgICBPUy5tYWNPUyA9IGZhbHNlO1xyXG4gICAgICAgIE9TLndpbmRvd3MgPSB0cnVlO1xyXG4gICAgICAgIE9TLndpbmRvd3NQaG9uZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpbGsgPSAoL1NpbGsvKS50ZXN0KHVhKTtcclxuXHJcbiAgICBpZiAoT1Mud2luZG93cyB8fCBPUy5tYWNPUyB8fCAoT1MubGludXggJiYgIXNpbGspIHx8IE9TLmNocm9tZU9TKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmRlc2t0b3AgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBXaW5kb3dzIFBob25lIC8gVGFibGUgcmVzZXRcclxuICAgIGlmIChPUy53aW5kb3dzUGhvbmUgfHwgKCgvV2luZG93cyBOVC9pLnRlc3QodWEpKSAmJiAoL1RvdWNoL2kudGVzdCh1YSkpKSlcclxuICAgIHtcclxuICAgICAgICBPUy5kZXNrdG9wID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIFdlYkFwcCBtb2RlIGluIGlPU1xyXG4gICAgaWYgKG5hdmlnYXRvci5zdGFuZGFsb25lKVxyXG4gICAge1xyXG4gICAgICAgIE9TLndlYkFwcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh3aW5kb3cuY29yZG92YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIE9TLmNvcmRvdmEgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT09ICd1bmRlZmluZWQnKSlcclxuICAgIHtcclxuICAgICAgICBPUy5ub2RlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKE9TLm5vZGUgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnKVxyXG4gICAge1xyXG4gICAgICAgIE9TLm5vZGVXZWJraXQgPSAhIXByb2Nlc3MudmVyc2lvbnNbJ25vZGUtd2Via2l0J107XHJcbiAgICAgICAgXHJcbiAgICAgICAgT1MuZWxlY3Ryb24gPSAhIXByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChuYXZpZ2F0b3IuaXNDb2Nvb25KUylcclxuICAgIHtcclxuICAgICAgICBPUy5jb2Nvb25KUyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT1MuY29jb29uSlNBcHAgPSAodHlwZW9mIENvY29vbkpTICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9TLmNvY29vbkpTQXBwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cuZWplY3RhICE9PSB1bmRlZmluZWQpXHJcbiAgICB7XHJcbiAgICAgICAgT1MuZWplY3RhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKC9Dcm9zc3dhbGsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBPUy5jcm9zc3dhbGsgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIE9TLmlQaG9uZSA9IHVhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBob25lJykgIT09IC0xO1xyXG4gICAgT1MuaVBhZCA9IHVhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaXBhZCcpICE9PSAtMTtcclxuXHJcbiAgICBPUy5waXhlbFJhdGlvID0gd2luZG93WydkZXZpY2VQaXhlbFJhdGlvJ10gfHwgMTtcclxuXHJcbiAgICByZXR1cm4gT1M7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvT1MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENPTlNUID0ge1xyXG5cclxuICAgIFZFUlNJT046ICczLjAuMCcsXHJcblxyXG4gICAgQVVUTzogMCxcclxuICAgIENBTlZBUzogMSxcclxuICAgIFdFQkdMOiAyLFxyXG5cclxuICAgIHN0YXRlOiB7XHJcblxyXG4gICAgICAgIFBFTkRJTkc6IDAsXHJcbiAgICAgICAgSU5TVEFMTEVEOiAxLFxyXG5cclxuICAgICAgICBCT09UOiAwLFxyXG4gICAgICAgIElOSVQ6IDEsXHJcbiAgICAgICAgUFJFTE9BRDogMixcclxuICAgICAgICBDUkVBVEU6IDMsXHJcbiAgICAgICAgVVBEQVRFOiA0LFxyXG4gICAgICAgIFJFTkRFUjogNSxcclxuICAgICAgICBTSFVURE9XTjogNlxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYmxlbmRNb2Rlczoge1xyXG5cclxuICAgICAgICBOT1JNQUw6IDAsXHJcbiAgICAgICAgQUREOiAxLFxyXG4gICAgICAgIE1VTFRJUExZOiAyLFxyXG4gICAgICAgIFNDUkVFTjogMyxcclxuICAgICAgICBPVkVSTEFZOiA0LFxyXG4gICAgICAgIERBUktFTjogNSxcclxuICAgICAgICBMSUdIVEVOOiA2LFxyXG4gICAgICAgIENPTE9SX0RPREdFOiA3LFxyXG4gICAgICAgIENPTE9SX0JVUk46IDgsXHJcbiAgICAgICAgSEFSRF9MSUdIVDogOSxcclxuICAgICAgICBTT0ZUX0xJR0hUOiAxMCxcclxuICAgICAgICBESUZGRVJFTkNFOiAxMSxcclxuICAgICAgICBFWENMVVNJT046IDEyLFxyXG4gICAgICAgIEhVRTogMTMsXHJcbiAgICAgICAgU0FUVVJBVElPTjogMTQsXHJcbiAgICAgICAgQ09MT1I6IDE1LFxyXG4gICAgICAgIExVTUlOT1NJVFk6IDE2XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzY2FsZU1vZGVzOiB7XHJcblxyXG4gICAgICAgIERFRkFVTFQ6IDAsXHJcbiAgICAgICAgTElORUFSOiAwLFxyXG4gICAgICAgIE5FQVJFU1Q6IDFcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDT05TVDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29uc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG5cclxudmFyIEJyb3dzZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXJvcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIEFyb3JhLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGFyb3JhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBjaHJvbWUgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIENocm9tZS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjaHJvbWU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gY2hyb21lVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gQ2hyb21lIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjaHJvbWVWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGVwaXBoYW55IC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiBFcGlwaGFueS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlcGlwaGFueTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlyZWZveCAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gRmlyZWZveC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaXJlZm94OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGZpcmVmb3hWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBGaXJlZm94IHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaXJlZm94VmVyc2lvbjogMCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtb2JpbGVTYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE1vYmlsZSBTYWZhcmkuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbW9iaWxlU2FmYXJpOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBpZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaWU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gaWVWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIEJleW9uZCBJRTEwIHlvdSBzaG91bGQgdXNlIERldmljZS50cmlkZW50IGFuZCBEZXZpY2UudHJpZGVudFZlcnNpb24uXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaWVWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pZG9yaSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWlkb3JpLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1pZG9yaTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3BlcmEgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIE9wZXJhLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG9wZXJhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzYWZhcmkgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGluIFNhZmFyaS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBzYWZhcmk6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FmYXJpVmVyc2lvbiAtIElmIHJ1bm5pbmcgaW4gU2FmYXJpIHRoaXMgd2lsbCBjb250YWluIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBzYWZhcmlWZXJzaW9uOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRyaWRlbnQgLSBTZXQgdG8gdHJ1ZSBpZiBydW5uaW5nIGEgVHJpZGVudCB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIChJRTExKylcclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0cmlkZW50OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRyaWRlbnRWZXJzaW9uIC0gSWYgcnVubmluZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSB0aGlzIHdpbGwgY29udGFpbiB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIuIFNlZSB7QGxpbmsgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL21zNTM3NTAzKHY9dnMuODUpLmFzcHh9XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdHJpZGVudFZlcnNpb246IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZWRnZSAtIFNldCB0byB0cnVlIGlmIHJ1bm5pbmcgaW4gTWljcm9zb2Z0IEVkZ2UgYnJvd3Nlci5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBlZGdlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzaWxrIC0gU2V0IHRvIHRydWUgaWYgcnVubmluZyBpbiB0aGUgU2lsayBicm93c2VyIChhcyB1c2VkIG9uIHRoZSBBbWF6b24gS2luZGxlKVxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHNpbGs6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKVxyXG57XHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIGlmICgoL0Fyb3JhLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5hcm9yYSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvRWRnZVxcL1xcZCsvLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZWRnZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL0Nocm9tZVxcLyhcXGQrKS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5jaHJvbWUgPSB0cnVlO1xyXG4gICAgICAgIEJyb3dzZXIuY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9FcGlwaGFueS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZXBpcGhhbnkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9GaXJlZm94XFxEKyhcXGQrKS8pLnRlc3QodWEpKVxyXG4gICAge1xyXG4gICAgICAgIEJyb3dzZXIuZmlyZWZveCA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9BcHBsZVdlYktpdC8pLnRlc3QodWEpICYmIE9TLmlPUylcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLm1vYmlsZVNhZmFyaSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL01TSUUgKFxcZCtcXC5cXGQrKTsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLmllID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLmllVmVyc2lvbiA9IHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9NaWRvcmkvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLm1pZG9yaSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL09wZXJhLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5vcGVyYSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoL1NhZmFyaS8pLnRlc3QodWEpICYmICFPUy53aW5kb3dzUGhvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5zYWZhcmkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKC9UcmlkZW50XFwvKFxcZCtcXC5cXGQrKSguKilydjooXFxkK1xcLlxcZCspLykudGVzdCh1YSkpXHJcbiAgICB7XHJcbiAgICAgICAgQnJvd3Nlci5pZSA9IHRydWU7XHJcbiAgICAgICAgQnJvd3Nlci50cmlkZW50ID0gdHJ1ZTtcclxuICAgICAgICBCcm93c2VyLnRyaWRlbnRWZXJzaW9uID0gcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCk7XHJcbiAgICAgICAgQnJvd3Nlci5pZVZlcnNpb24gPSBwYXJzZUludChSZWdFeHAuJDMsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgU2lsayBnZXRzIGl0cyBvd24gaWYgY2xhdXNlIGJlY2F1c2UgaXRzIHVhIGFsc28gY29udGFpbnMgJ1NhZmFyaSdcclxuICAgIGlmICgoL1NpbGsvKS50ZXN0KHVhKSlcclxuICAgIHtcclxuICAgICAgICBCcm93c2VyLnNpbGsgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBCcm93c2VyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL0Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0Jyb3dzZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgZ2xvYmFsIGxldmVsIGNvbnRhaW5lciBvZiBGYWN0b3J5IGluc3RhbmNlcy5cclxuKiBGYWN0b3JpZXMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB3aXRoIHRoaXMgY29udGFpbmVyICh3aGVuIHJlcXVpcmVkKVxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcblxyXG52YXIgZmFjdG9yaWVzID0ge307XHJcblxyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKCdGYWN0b3J5Q29udGFpbmVyIGlzIGFsaXZlJyk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uIChmYWN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChmYWN0b3JpZXMuaGFzT3duUHJvcGVydHkoZmFjdG9yeS5LRVkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgcmVnaXN0ZXJlZCcsIGZhY3RvcnkuS0VZKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFR5cGUoZmFjdG9yeS5LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nJywgZmFjdG9yeS5LRVkpO1xyXG5cclxuICAgICAgICBmYWN0b3JpZXNbZmFjdG9yeS5LRVldID0ge1xyXG4gICAgICAgICAgICBhZGQ6IGZhY3RvcnkuYWRkLFxyXG4gICAgICAgICAgICBtYWtlOiBmYWN0b3J5Lm1ha2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmFjdG9yeTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFjdG9yaWVzW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uIChkZXN0LCBpc0ZhY3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgZmFjdG9yeSBpbiBmYWN0b3JpZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmFjdG9yaWVzLmhhc093blByb3BlcnR5KGZhY3RvcnkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZycsIGZhY3RvcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlc3RbZmFjdG9yeV0gPSAoaXNGYWN0b3J5KSA/IGZhY3Rvcmllc1tmYWN0b3J5XS5hZGQgOiBmYWN0b3JpZXNbZmFjdG9yeV0ubWFrZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGYWN0b3J5Q29udGFpbmVyKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gIFNvdXJjZSBvYmplY3RcclxuLy8gIFRoZSBrZXkgYXMgYSBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIGtleXMsIGkuZS4gJ2Jhbm5lcicsIG9yICdiYW5uZXIuaGlkZUJhbm5lcidcclxuLy8gIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RcclxuXHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IGZ1bmN0aW9uIChzb3VyY2UsIGtleSwgZGVmYXVsdFZhbHVlKVxyXG57XHJcbiAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSlcclxuICAgIHtcclxuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnQgPSBzb3VyY2U7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgICAgICAvLyAgVXNlIGZvciBsb29wIGhlcmUgc28gd2UgY2FuIGJyZWFrIGVhcmx5XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNPd25Qcm9wZXJ0eShrZXlzW2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gIFllcyBpdCBoYXMgYSBrZXkgcHJvcGVydHksIGxldCdzIGNhcnJ5IG9uIGRvd25cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyZW50W2tleXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudFtrZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSA/IHNvdXJjZVtrZXldIDogZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2V0T2JqZWN0VmFsdWU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3V0aWxzL0dldE9iamVjdFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG52YXIgQ2FudmFzUG9vbCA9IHJlcXVpcmUoJy4uL2RvbS9DYW52YXNQb29sJyk7XHJcblxyXG52YXIgRmVhdHVyZXMgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2FudmFzIC0gSXMgY2FudmFzIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXM6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkgez9ib29sZWFufSBjYW52YXNCaXRCbHRTaGlmdCAtIFRydWUgaWYgY2FudmFzIHN1cHBvcnRzIGEgJ2NvcHknIGJpdGJsdCBvbnRvIGl0c2VsZiB3aGVuIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHJlZ2lvbnMgb3ZlcmxhcC5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBjYW52YXNCaXRCbHRTaGlmdDogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJHTCAtIElzIHdlYkdMIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3ZWJHTDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmlsZSAtIElzIGZpbGUgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGZpbGU6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGVTeXN0ZW0gLSBJcyBmaWxlU3lzdGVtIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBmaWxlU3lzdGVtOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBsb2NhbFN0b3JhZ2UgLSBJcyBsb2NhbFN0b3JhZ2UgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGxvY2FsU3RvcmFnZTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd29ya2VyIC0gSXMgd29ya2VyIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB3b3JrZXI6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHBvaW50ZXJMb2NrIC0gSXMgUG9pbnRlciBMb2NrIGF2YWlsYWJsZT9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBwb2ludGVyTG9jazogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdmlicmF0aW9uIC0gRG9lcyB0aGUgZGV2aWNlIHN1cHBvcnQgdGhlIFZpYnJhdGlvbiBBUEk/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdmlicmF0aW9uOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBnZXRVc2VyTWVkaWEgLSBEb2VzIHRoZSBkZXZpY2Ugc3VwcG9ydCB0aGUgZ2V0VXNlck1lZGlhIEFQST9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBnZXRVc2VyTWVkaWE6IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIC0gSXMgdGhlIGRldmljZSBiaWcgb3IgbGl0dGxlIGVuZGlhbj8gKG9ubHkgZGV0ZWN0ZWQgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWRBcnJheXMpXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbGl0dGxlRW5kaWFuOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBzdXBwb3J0MzJiaXQgLSBEb2VzIHRoZSBkZXZpY2UgY29udGV4dCBzdXBwb3J0IDMyYml0IHBpeGVsIG1hbmlwdWxhdGlvbiB1c2luZyBhcnJheSBidWZmZXIgdmlld3M/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgc3VwcG9ydDMyYml0OiBmYWxzZVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4qIENoZWNrIExpdHRsZSBvciBCaWcgRW5kaWFuIHN5c3RlbS5cclxuKlxyXG4qIEBhdXRob3IgTWF0dCBEZXNMYXVyaWVycyAoQG1hdHRkZXNsKVxyXG4qL1xyXG5mdW5jdGlvbiBjaGVja0lzTGl0dGxlRW5kaWFuICgpXHJcbntcclxuICAgIHZhciBhID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG4gICAgdmFyIGIgPSBuZXcgVWludDhBcnJheShhKTtcclxuICAgIHZhciBjID0gbmV3IFVpbnQzMkFycmF5KGEpO1xyXG5cclxuICAgIGJbMF0gPSAweGExO1xyXG4gICAgYlsxXSA9IDB4YjI7XHJcbiAgICBiWzJdID0gMHhjMztcclxuICAgIGJbM10gPSAweGQ0O1xyXG5cclxuICAgIGlmIChjWzBdID09PSAweGQ0YzNiMmExKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjWzBdID09PSAweGExYjJjM2Q0KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyAgQ291bGQgbm90IGRldGVybWluZSBlbmRpYW5uZXNzXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0ZlYXR1cmVzLmluaXQnKTtcclxuXHJcbiAgICBGZWF0dXJlcy5jYW52YXMgPSAhIXdpbmRvd1snQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJ10gfHwgT1MuY29jb29uSlM7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgRmVhdHVyZXMubG9jYWxTdG9yYWdlID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcilcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy5sb2NhbFN0b3JhZ2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5maWxlID0gISF3aW5kb3dbJ0ZpbGUnXSAmJiAhIXdpbmRvd1snRmlsZVJlYWRlciddICYmICEhd2luZG93WydGaWxlTGlzdCddICYmICEhd2luZG93WydCbG9iJ107XHJcbiAgICBGZWF0dXJlcy5maWxlU3lzdGVtID0gISF3aW5kb3dbJ3JlcXVlc3RGaWxlU3lzdGVtJ107XHJcblxyXG4gICAgdmFyIGlzVWludDggPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgdGVzdFdlYkdMID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpZiAod2luZG93WydXZWJHTFJlbmRlcmluZ0NvbnRleHQnXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGVXZWJHTCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoT1MuY29jb29uSlMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnNjcmVlbmNhbnZhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhbnZhczJEID0gQ2FudmFzUG9vbC5jcmVhdGUyRCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4MkQgPSBjYW52YXMyRC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBDYW4ndCBiZSBkb25lIG9uIGEgd2ViZ2wgY29udGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gY3R4MkQuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICogVGVzdCB0byBzZWUgaWYgSW1hZ2VEYXRhIHVzZXMgQ2FudmFzUGl4ZWxBcnJheSBvciBVaW50OENsYW1wZWRBcnJheS5cclxuICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICogQGF1dGhvciBNYXR0IERlc0xhdXJpZXJzIChAbWF0dGRlc2wpXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaXNVaW50OCA9IGltYWdlLmRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNQb29sLnJlbW92ZShjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzUG9vbC5yZW1vdmUoY2FudmFzMkQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoY3R4ICE9PSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgRmVhdHVyZXMud2ViR0wgPSB0ZXN0V2ViR0woKTtcclxuXHJcbiAgICBGZWF0dXJlcy53b3JrZXIgPSAhIXdpbmRvd1snV29ya2VyJ107XHJcblxyXG4gICAgRmVhdHVyZXMucG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5vR2V0VXNlck1lZGlhO1xyXG5cclxuICAgIHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XHJcblxyXG4gICAgRmVhdHVyZXMuZ2V0VXNlck1lZGlhID0gRmVhdHVyZXMuZ2V0VXNlck1lZGlhICYmICEhbmF2aWdhdG9yLmdldFVzZXJNZWRpYSAmJiAhIXdpbmRvdy5VUkw7XHJcblxyXG4gICAgLy8gT2xkZXIgdmVyc2lvbnMgb2YgZmlyZWZveCAoPCAyMSkgYXBwYXJlbnRseSBjbGFpbSBzdXBwb3J0IGJ1dCB1c2VyIG1lZGlhIGRvZXMgbm90IGFjdHVhbGx5IHdvcmtcclxuICAgIGlmIChCcm93c2VyLmZpcmVmb3ggJiYgQnJvd3Nlci5maXJlZm94VmVyc2lvbiA8IDIxKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmdldFVzZXJNZWRpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4Y2x1ZGVzIGlPUyB2ZXJzaW9ucyBhcyB0aGV5IGdlbmVyYWxseSB3cmFwIFVJV2ViVmlldyAoZWcuIFNhZmFyaSBXZWJLaXQpIGFuZCBpdFxyXG4gICAgLy8gaXMgc2FmZXIgdG8gbm90IHRyeSBhbmQgdXNlIHRoZSBmYXN0IGNvcHktb3ZlciBtZXRob2QuXHJcbiAgICBpZiAoIU9TLmlPUyAmJiAoQnJvd3Nlci5pZSB8fCBCcm93c2VyLmZpcmVmb3ggfHwgQnJvd3Nlci5jaHJvbWUpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLbm93biBub3QgdG8gd29ya1xyXG4gICAgaWYgKEJyb3dzZXIuc2FmYXJpIHx8IEJyb3dzZXIubW9iaWxlU2FmYXJpKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmNhbnZhc0JpdEJsdFNoaWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdG9yLnZpYnJhdGUgPSBuYXZpZ2F0b3IudmlicmF0ZSB8fCBuYXZpZ2F0b3Iud2Via2l0VmlicmF0ZSB8fCBuYXZpZ2F0b3IubW96VmlicmF0ZSB8fCBuYXZpZ2F0b3IubXNWaWJyYXRlO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IudmlicmF0ZSlcclxuICAgIHtcclxuICAgICAgICBGZWF0dXJlcy52aWJyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAge1xyXG4gICAgICAgIEZlYXR1cmVzLmxpdHRsZUVuZGlhbiA9IGNoZWNrSXNMaXR0bGVFbmRpYW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBGZWF0dXJlcy5zdXBwb3J0MzJiaXQgPSAoXHJcbiAgICAgICAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBGZWF0dXJlcy5saXR0bGVFbmRpYW4gIT09IG51bGwgJiZcclxuICAgICAgICBpc1VpbnQ4XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBGZWF0dXJlcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9GZWF0dXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvRmVhdHVyZXMuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwb29sIGludG8gd2hpY2ggdGhlIGNhbnZhcyBlbGVtZW50cyBhcmUgcGxhY2VkLlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgcG9vbFxyXG4gKiBAdHlwZSBBcnJheVxyXG4gKi9cclxudmFyIHBvb2wgPSBbXTtcclxuXHJcbi8vICBUaGlzIHNpbmdsZXRvbiBpcyBpbnN0YW50aWF0ZWQgYXMgc29vbiBhcyBQaGFzZXIgbG9hZHMsXHJcbi8vICBiZWZvcmUgYSBQaGFzZXIuR2FtZSBpbnN0YW5jZSBoYXMgZXZlbiBiZWVuIGNyZWF0ZWQuXHJcbi8vICBXaGljaCBtZWFucyBhbGwgaW5zdGFuY2VzIG9mIFBoYXNlciBHYW1lcyBvbiB0aGUgc2FtZSBwYWdlXHJcbi8vICBjYW4gc2hhcmUgdGhlIG9uZSBzaW5nbGUgcG9vbFxyXG5cclxuLyoqXHJcbiogVGhlIENhbnZhc1Bvb2wgaXMgYSBnbG9iYWwgc3RhdGljIG9iamVjdCwgdGhhdCBhbGxvd3MgUGhhc2VyIHRvIHJlY3ljbGUgYW5kIHBvb2wgQ2FudmFzIERPTSBlbGVtZW50cy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuQ2FudmFzUG9vbFxyXG4qIEBzdGF0aWNcclxuKi9cclxudmFyIENhbnZhc1Bvb2wgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlcyBhIG5ldyBDYW52YXMgRE9NIGVsZW1lbnQsIG9yIHB1bGxzIG9uZSBmcm9tIHRoZSBwb29sIGlmIGZyZWUuXHJcbiAgICAqIFxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmNyZWF0ZVxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBwYXJhbSB7YW55fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gVGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgKi9cclxuICAgIHZhciBjcmVhdGUgPSBmdW5jdGlvbiAocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCB0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkKSB7IHdpZHRoID0gMTsgfVxyXG4gICAgICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgeyBoZWlnaHQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkgeyB0eXBlID0gQ09OU1QuQ0FOVkFTOyB9XHJcblxyXG4gICAgICAgIHZhciBjYW52YXM7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGZpcnN0KHR5cGUpO1xyXG5cclxuICAgICAgICBpZiAoY29udGFpbmVyID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wuY3JlYXRlIG5ldycpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcG9vbC5wdXNoKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzUG9vbC5jcmVhdGUgZXhpc3RpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250YWluZXIuY2FudmFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjcmVhdGUyRCA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULkNBTlZBUyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjcmVhdGVXZWJHTCA9IGZ1bmN0aW9uIChwYXJlbnQsIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIENPTlNULldFQkdMKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGZpcnN0IGZyZWUgY2FudmFzIGluZGV4IGZyb20gdGhlIHBvb2wuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0Rmlyc3RcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICAgIHZhciBmaXJzdCA9IGZ1bmN0aW9uICh0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHsgdHlwZSA9IENPTlNULkNBTlZBUzsgfVxyXG5cclxuICAgICAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyLnBhcmVudCAmJiBjb250YWluZXIudHlwZSA9PT0gdHlwZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIExvb2tzIHVwIGEgY2FudmFzIGJhc2VkIG9uIGl0cyBwYXJlbnQsIGFuZCBpZiBmb3VuZCBwdXRzIGl0IGJhY2sgaW4gdGhlIHBvb2wsIGZyZWVpbmcgaXQgdXAgZm9yIHJlLXVzZS5cclxuICAgICogVGhlIGNhbnZhcyBoYXMgaXRzIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHRvIDEsIGFuZCBpdHMgcGFyZW50IGF0dHJpYnV0ZSBudWxsZWQuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wucmVtb3ZlXHJcbiAgICAqIEBwYXJhbSB7YW55fEhUTUxDYW52YXNFbGVtZW50fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9mIHRoZSBjYW52YXMgZWxlbWVudC5cclxuICAgICovXHJcbiAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKHBhcmVudClcclxuICAgIHtcclxuICAgICAgICAvLyAgQ2hlY2sgdG8gc2VlIGlmIHRoZSBwYXJlbnQgaXMgYSBjYW52YXMgb2JqZWN0XHJcbiAgICAgICAgdmFyIGlzQ2FudmFzID0gcGFyZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIHBvb2wuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKChpc0NhbnZhcyAmJiBjb250YWluZXIuY2FudmFzID09PSBwYXJlbnQpIHx8ICghaXNDYW52YXMgJiYgY29udGFpbmVyLnBhcmVudCA9PT0gcGFyZW50KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbnZhc1Bvb2wucmVtb3ZlIGZvdW5kIGFuZCByZW1vdmVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jYW52YXMud2lkdGggPSAxO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNhbnZhcy5oZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdXNlZCBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqIFxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkNhbnZhc1Bvb2wuZ2V0VG90YWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGluLXVzZSAocGFyZW50ZWQpIGNhbnZhcyBlbGVtZW50cyBpbiB0aGUgcG9vbC5cclxuICAgICovXHJcbiAgICB2YXIgdG90YWwgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjID0gMDtcclxuXHJcbiAgICAgICAgcG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIGZyZWUgY2FudmFzIGVsZW1lbnRzIGluIHRoZSBwb29sLlxyXG4gICAgKiBcclxuICAgICogQHN0YXRpY1xyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5DYW52YXNQb29sLmdldEZyZWVcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGZyZWUgKHVuLXBhcmVudGVkKSBjYW52YXMgZWxlbWVudHMgaW4gdGhlIHBvb2wuXHJcbiAgICAqL1xyXG4gICAgdmFyIGZyZWUgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwb29sLmxlbmd0aCAtIHRvdGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlOiBjcmVhdGUsXHJcbiAgICAgICAgY3JlYXRlMkQ6IGNyZWF0ZTJELFxyXG4gICAgICAgIGNyZWF0ZVdlYkdMOiBjcmVhdGVXZWJHTCxcclxuICAgICAgICBmaXJzdDogZmlyc3QsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmUsXHJcbiAgICAgICAgdG90YWw6IHRvdGFsLFxyXG4gICAgICAgIGZyZWU6IGZyZWUsXHJcbiAgICAgICAgcG9vbDogcG9vbFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vICBJZiB3ZSBleHBvcnQgdGhlIGNhbGxlZCBmdW5jdGlvbiBoZXJlLCBpdCdsbCBvbmx5IGJlIGludm9rZWQgb25jZSAobm90IGV2ZXJ5IHRpbWUgaXQncyByZXF1aXJlZCkuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzUG9vbCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kb20vQ2FudmFzUG9vbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kb20vQ2FudmFzUG9vbC5qcyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XHJcblxyXG52YXIgU2V0dGluZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIGNvbmZpZylcclxue1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKVxyXG4gICAge1xyXG4gICAgICAgIGNvbmZpZyA9IHsga2V5OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBQYXNzIHRoZSAnaGFzT3duUHJvcGVydHknIGNoZWNrc1xyXG4gICAgICAgIGNvbmZpZyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTsgLy8gIERvIHdlIGFjdHVhbGx5IG5lZWQgdGhpcyByZWZlcmVuY2U/IFRoaXMgY291bGQganVzdCBiZSBhIHByb3BlcnR5IGJ1Y2tldFxyXG5cclxuICAgIHRoaXMuc3RhdHVzID0gQ09OU1Quc3RhdGUuUEVORElORztcclxuXHJcbiAgICAvLyAgV2hpY2ggcGFydCBvZiB0aGlzIFN0YXRlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQ/XHJcbiAgICAvLyAgcHJlbG9hZCwgY3JlYXRlLCB1cGRhdGUsIHNodXRkb3duLCBldGNcclxuICAgIHRoaXMub3AgPSBDT05TVC5zdGF0ZS5CT09UO1xyXG5cclxuICAgIHRoaXMua2V5ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAna2V5JywgJycpO1xyXG4gICAgdGhpcy5hY3RpdmUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdhY3RpdmUnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnZpc2libGUgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd2aXNpYmxlJywgdHJ1ZSk7XHJcbiAgICB0aGlzLnNjYWxlTW9kZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3NjYWxlTW9kZScsIENPTlNULnNjYWxlTW9kZXMuREVGQVVMVCk7XHJcbiAgICB0aGlzLmZwcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2ZwcycsIDYwKTtcclxuICAgIHRoaXMueCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3gnLCAwKTtcclxuICAgIHRoaXMueSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3knLCAwKTtcclxuXHJcbiAgICAvLyAgLTEgbWVhbnMgdGhlIFN0YXRlIE1hbmFnZXIgd2lsbCBzZXQgaXQgdG8gYmUgdGhlIEdhbWUgZGltZW5zaW9uc1xyXG4gICAgdGhpcy53aWR0aCA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3dpZHRoJywgLTEpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdoZWlnaHQnLCAtMSk7XHJcbn07XHJcblxyXG4vLyAgVW5sZXNzIHdlIGFkZCBzb21lIGFjdHVhbCBmdW5jdGlvbnMgaW4gaGVyZSwgd2UnbGwgbWFrZSB0aGlzIGp1c3QgcmV0dXJuIGFuIE9iamVjdCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlXHJcblNldHRpbmdzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldHRpbmdzO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RhdGUvU2V0dGluZ3MuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgR2FtZU9iamVjdEZhY3RvcnkgPSByZXF1aXJlKCcuL3N5c3RlbXMvR2FtZU9iamVjdEZhY3RvcnknKTtcclxudmFyIEdhbWVPYmplY3RDcmVhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yJyk7XHJcbnZhciBNYWluTG9vcCA9IHJlcXVpcmUoJy4vc3lzdGVtcy9NYWluTG9vcCcpO1xyXG52YXIgVXBkYXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vc3lzdGVtcy9VcGRhdGVNYW5hZ2VyJyk7XHJcblxyXG52YXIgU3lzdGVtcyA9IGZ1bmN0aW9uIChzdGF0ZSwgY29uZmlnKVxyXG57XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgLy8gIFN0YXRlIHNwZWNpZmljIG1hbmFnZXJzIChGYWN0b3J5LCBUd2VlbnMsIExvYWRlciwgUGh5c2ljcywgZXRjKVxyXG4gICAgdGhpcy5hZGQ7XHJcbiAgICB0aGlzLm1ha2U7XHJcbiAgICB0aGlzLmlucHV0O1xyXG4gICAgdGhpcy5sb2FkO1xyXG4gICAgdGhpcy50d2VlbnM7XHJcbiAgICB0aGlzLm1haW5sb29wO1xyXG4gICAgdGhpcy51cGRhdGVzO1xyXG5cclxuICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXHJcbiAgICB0aGlzLmNhbWVyYTtcclxuICAgIHRoaXMuY2hpbGRyZW47XHJcbiAgICB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5kYXRhO1xyXG4gICAgdGhpcy5mYm87XHJcbiAgICB0aGlzLnRpbWU7XHJcbiAgICB0aGlzLnRyYW5zZm9ybTtcclxufTtcclxuXHJcblN5c3RlbXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtcztcclxuXHJcblN5c3RlbXMucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlLlN5c3RlbXMuaW5pdCcpO1xyXG5cclxuICAgICAgICAvLyAgU3RhdGUgc3BlY2lmaWMgbWFuYWdlcnMgKEZhY3RvcnksIFR3ZWVucywgTG9hZGVyLCBQaHlzaWNzLCBldGMpXHJcblxyXG4gICAgICAgIC8vICBBbGwgdGhlc2UgdG8gYmUgc2V0IGJ5IGEgU3RhdGUgQ29uZmlnIHBhY2thZ2VcclxuXHJcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYWtlID0gR2FtZU9iamVjdENyZWF0b3IodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5tYWlubG9vcCA9IG5ldyBNYWluTG9vcCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnNldHRpbmdzLmZwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVzID0gbmV3IFVwZGF0ZU1hbmFnZXIodGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZCA9IG5ldyBQaGFzZXIuTG9hZGVyKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMudHdlZW5zID0gbmV3IFBoYXNlci5Ud2Vlbk1hbmFnZXIodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IG5ldyBQaGFzZXIuU3RhdGUuSW5wdXQodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzID0gbmV3IFBoYXNlci5QaHlzaWNzLkFyY2FkZSh0aGlzLnN0YXRlLCA4MDAsIDYwMCk7XHJcblxyXG4gICAgICAgIC8vICBTdGF0ZSBzcGVjaWZpYyBwcm9wZXJ0aWVzICh0cmFuc2Zvcm0sIGRhdGEsIGNoaWxkcmVuLCBldGMpXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEgPSBuZXcgUGhhc2VyLkNhbWVyYSh0aGlzLnN0YXRlLCAwLCAwLCA4MDAsIDYwMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGlsZHJlbiA9IG5ldyBQaGFzZXIuQ29tcG9uZW50LkNoaWxkcmVuKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMuY29sb3IgPSBuZXcgUGhhc2VyLkNvbXBvbmVudC5Db2xvcih0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyB0aGlzLmRhdGEgPSBuZXcgUGhhc2VyLkNvbXBvbmVudC5EYXRhKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMudHJhbnNmb3JtID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xyXG5cclxuICAgICAgICAvLyAgQm9vdFxyXG5cclxuICAgICAgICAvLyB0aGlzLmlucHV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gIERlZmF1bHRzXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkID0gdGhpcy5hZGQ7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5sb2FkID0gdGhpcy5sb2FkO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNhbWVyYSA9IHRoaXMuY2FtZXJhO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuaW5wdXQgPSB0aGlzLmlucHV0O1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUudHJhbnNmb3JtID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3RhdGUgPSB0aGlzLnN0YXRlLmdhbWUuc3RhdGU7XHJcblxyXG4gICAgICAgIC8vICBIZXJlIHdlIGNhbiBjaGVjayB3aGljaCBTeXN0ZW1zIHRvIGluc3RhbGwgYXMgcHJvcGVydGllcyBpbnRvIHRoZSBTdGF0ZSBvYmplY3RcclxuICAgICAgICAvLyAgKGRlZmF1bHQgc3lzdGVtcyBhbHdheXMgZXhpc3QgaW4gaGVyZSwgcmVnYXJkbGVzcylcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICAgICAgdmFyIHQgPSB0eXBlb2YgY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAodCAhPT0gJ29iamVjdCcgfHwgKHQgPT09ICdvYmplY3QnICYmICF0Lmhhc093blByb3BlcnR5KCdzeXN0ZW1zJykpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICAvLyB0aGlzLmtleSA9IChjb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKSA/IGNvbmZpZy5rZXkgOiAnJztcclxuICAgIH0sXHJcblxyXG4gICAgYmVnaW46IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGZyYW1lRGVsdGEpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwLCBwaHlzaWNzU3RlcClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnR3ZWVucy51cGRhdGUodGltZXN0ZXApO1xyXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy5wcmVVcGRhdGUocGh5c2ljc1N0ZXApO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmVSZW5kZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmQ6IGZ1bmN0aW9uIChmcHMsIHBhbmljKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwYW5pYylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgcGF0dGVybiBpbnRyb2R1Y2VzIG5vbi1kZXRlcm1pbmlzdGljIGJlaGF2aW9yLCBidXQgaW4gdGhpcyBjYXNlXHJcbiAgICAgICAgICAgIC8vIGl0J3MgYmV0dGVyIHRoYW4gdGhlIGFsdGVybmF0aXZlICh0aGUgYXBwbGljYXRpb24gd291bGQgbG9vayBsaWtlIGl0XHJcbiAgICAgICAgICAgIC8vIHdhcyBydW5uaW5nIHZlcnkgcXVpY2tseSB1bnRpbCB0aGUgc2ltdWxhdGlvbiBjYXVnaHQgdXAgdG8gcmVhbFxyXG4gICAgICAgICAgICAvLyB0aW1lKS5cclxuICAgICAgICAgICAgdmFyIGRpc2NhcmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubWFpbmxvb3AucmVzZXRGcmFtZURlbHRhKCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYWluIGxvb3AgcGFuaWNrZWQsIHByb2JhYmx5IGJlY2F1c2UgdGhlIGJyb3dzZXIgdGFiIHdhcyBwdXQgaW4gdGhlIGJhY2tncm91bmQuIERpc2NhcmRpbmcgJyArIGRpc2NhcmRlZFRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTeXN0ZW1zO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9TeXN0ZW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0YXRlL1N5c3RlbXMuanMiLCJcclxudmFyIE5PT1AgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvLyAgTk9PUCAoTm8gT3BlcmF0aW9uKSBDYWxsYmFja1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOT09QO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi91dGlscy9OT09QLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICAvLyAgRG9pbmcgdGhpcyBtYWtlcyBpdCBhdmFpbGFibGUgdW5kZXIgUGhhc2VyLkdhbWVcclxuICAgIEdhbWU6IHJlcXVpcmUoJy4vR2FtZScpXHJcblxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L2luZGV4LmpzIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcG9seWZpbGxzL2luZGV4LmpzIiwicmVxdWlyZSgnLi9BcnJheS5mb3JFYWNoJyk7XHJcbnJlcXVpcmUoJy4vQXJyYXkuaXNBcnJheScpO1xyXG5yZXF1aXJlKCcuL2NvbnNvbGUnKTtcclxucmVxdWlyZSgnLi9GdW5jdGlvbi5iaW5kJyk7XHJcbnJlcXVpcmUoJy4vTWF0aC50cnVuYycpO1xyXG5yZXF1aXJlKCcuL3BlcmZvcm1hbmNlLm5vdycpO1xyXG5yZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xyXG5yZXF1aXJlKCcuL1VpbnQzMkFycmF5Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIE5PT1AgPSByZXF1aXJlKCcuLi91dGlscy9OT09QJyk7XHJcbnZhciBHZXRPYmplY3RWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL0dldE9iamVjdFZhbHVlJyk7XHJcblxyXG52YXIgZGVmYXVsdEJhbm5lckNvbG9yID0gW1xyXG4gICAgJyNmZjAwMDAnLFxyXG4gICAgJyNmZmZmMDAnLFxyXG4gICAgJyMwMGZmMDAnLFxyXG4gICAgJyMwMGZmZmYnLFxyXG4gICAgJyMwMDAwMDAnXHJcbl07XHJcblxyXG52YXIgZGVmYXVsdEJhbm5lclRleHRDb2xvciA9ICcjZmZmZmZmJztcclxuXHJcbmZ1bmN0aW9uIENvbmZpZyAoY29uZmlnKVxyXG57XHJcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHsgY29uZmlnID0ge307IH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnd2lkdGgnLCAxMDI0KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnaGVpZ2h0JywgNzY4KTtcclxuXHJcbiAgICB0aGlzLnJlc29sdXRpb24gPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdyZXNvbHV0aW9uJywgMSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJUeXBlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHlwZScsIENPTlNULkFVVE8pO1xyXG5cclxuICAgIHRoaXMucGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGFyZW50JywgbnVsbCk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhcycsIG51bGwpO1xyXG4gICAgdGhpcy5jYW52YXNTdHlsZSA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2NhbnZhc1N0eWxlJywgbnVsbCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZUNvbmZpZyA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3N0YXRlJywgbnVsbCk7XHJcblxyXG4gICAgdGhpcy5zZWVkID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnc2VlZCcsIFsgKERhdGUubm93KCkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpIF0pO1xyXG5cclxuICAgIHRoaXMuZ2FtZVRpdGxlID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndGl0bGUnLCAnJyk7XHJcbiAgICB0aGlzLmdhbWVVUkwgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICd1cmwnLCAnaHR0cDovL3BoYXNlci5pbycpO1xyXG4gICAgdGhpcy5nYW1lVmVyc2lvbiA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ3ZlcnNpb24nLCAnJyk7XHJcblxyXG4gICAgLy8gIElmIHlvdSBkbzogeyBiYW5uZXI6IGZhbHNlIH0gaXQgd29uJ3QgZGlzcGxheSBhbnkgYmFubmVyIGF0IGFsbFxyXG4gICAgdGhpcy5oaWRlQmFubmVyID0gKEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lcicsIGZhbHNlKSA9PT0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuaGlkZVBoYXNlciA9IEdldE9iamVjdFZhbHVlKGNvbmZpZywgJ2Jhbm5lci5oaWRlUGhhc2VyJywgZmFsc2UpO1xyXG4gICAgdGhpcy5iYW5uZXJUZXh0Q29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIudGV4dCcsIGRlZmF1bHRCYW5uZXJUZXh0Q29sb3IpO1xyXG4gICAgdGhpcy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdiYW5uZXIuYmFja2dyb3VuZCcsIGRlZmF1bHRCYW5uZXJDb2xvcik7XHJcbiAgIFxyXG4gICAgdGhpcy5mb3JjZVNldFRpbWVPdXQgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdmb3JjZVNldFRpbWVPdXQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAndHJhbnNwYXJlbnQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnBpeGVsQXJ0ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAncGl4ZWxBcnQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gIENhbGxiYWNrc1xyXG4gICAgdGhpcy5wcmVCb290ID0gR2V0T2JqZWN0VmFsdWUoY29uZmlnLCAnY2FsbGJhY2tzLnByZUJvb3QnLCBOT09QKTtcclxuICAgIHRoaXMucG9zdEJvb3QgPSBHZXRPYmplY3RWYWx1ZShjb25maWcsICdjYWxsYmFja3MucG9zdEJvb3QnLCBOT09QKTtcclxuXHJcbn1cclxuXHJcbkNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25maWc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYm9vdC9Db25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvQ29uZmlnLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIENhbnZhc1Bvb2wgPSByZXF1aXJlKCcuLi9kb20vQ2FudmFzUG9vbCcpO1xyXG52YXIgRmVhdHVyZXMgPSByZXF1aXJlKCcuLi9kZXZpY2UvRmVhdHVyZXMnKTtcclxuXHJcbi8qKlxyXG4qIENoZWNrcyBpZiB0aGUgZGV2aWNlIGlzIGNhcGFibGUgb2YgdXNpbmcgdGhlIHJlcXVlc3RlZCByZW5kZXJlciBhbmQgc2V0cyBpdCB1cCBvciBhbiBhbHRlcm5hdGl2ZSBpZiBub3QuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5HYW1lI3NldFVwUmVuZGVyZXJcclxuKiBAcHJvdGVjdGVkXHJcbiovXHJcbnZhciBDcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XHJcblxyXG4gICAgLy8gIEdhbWUgZWl0aGVyIHJlcXVlc3RlZCBDYW52YXMsXHJcbiAgICAvLyAgb3IgcmVxdWVzdGVkIEFVVE8gb3IgV0VCR0wgYnV0IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpdCwgc28gZmFsbCBiYWNrIHRvIENhbnZhc1xyXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlID09PSBDT05TVC5DQU5WQVMgfHwgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBDT05TVC5DQU5WQVMgJiYgIUZlYXR1cmVzLndlYkdMKSlcclxuICAgIHtcclxuICAgICAgICBpZiAoRmVhdHVyZXMuY2FudmFzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIFRoZXkgcmVxdWVzdGVkIENhbnZhcyBhbmQgdGhlaXIgYnJvd3NlciBzdXBwb3J0cyBpdFxyXG4gICAgICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULkNBTlZBUztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIENhbnZhcyBvciBXZWJHTCBjb250ZXh0LCBhYm9ydGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIEdhbWUgcmVxdWVzdGVkIFdlYkdMIGFuZCBicm93c2VyIHNheXMgaXQgc3VwcG9ydHMgaXRcclxuICAgICAgICBjb25maWcucmVuZGVyVHlwZSA9IENPTlNULldFQkdMO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBEb2VzIHRoZSBnYW1lIGNvbmZpZyBwcm92aWRlIGl0cyBvd24gY2FudmFzIGVsZW1lbnQgdG8gdXNlP1xyXG4gICAgaWYgKGNvbmZpZy5jYW52YXMpXHJcbiAgICB7XHJcbiAgICAgICAgZ2FtZS5jYW52YXMgPSBjb25maWcuY2FudmFzO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzID0gQ2FudmFzUG9vbC5jcmVhdGUoZ2FtZSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0LCBjb25maWcucmVuZGVyVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIERvZXMgdGhlIGdhbWUgY29uZmlnIHByb3ZpZGUgc29tZSBjYW52YXMgY3NzIHN0eWxlcyB0byB1c2U/XHJcbiAgICBpZiAoY29uZmlnLmNhbnZhc1N0eWxlKVxyXG4gICAge1xyXG4gICAgICAgIGdhbWUuY2FudmFzLnN0eWxlID0gY29uZmlnLmNhbnZhc1N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBDcmVhdGUgdGhlIHJlbmRlcmVyXHJcbiAgICBpZiAoY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBXRUJHTCBSZW5kZXJlcicpO1xyXG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLldlYkdMKHRoaXMpO1xyXG4gICAgICAgIC8vIGdhbWUuY29udGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIENhbnZhcyBSZW5kZXJlcicpO1xyXG4gICAgICAgIC8vIGdhbWUucmVuZGVyZXIgPSBuZXcgUGhhc2VyLlJlbmRlcmVyLkNhbnZhcyh0aGlzKTtcclxuICAgICAgICAvLyBnYW1lLmNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJUeXBlICE9PSBQaGFzZXIuSEVBRExFU1MpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUGhhc2VyLkNhbnZhcy5hZGRUb0RPTSh0aGlzLmNhbnZhcywgdGhpcy5wYXJlbnQsIGZhbHNlKTtcclxuICAgICAgICAvLyBQaGFzZXIuQ2FudmFzLnNldFRvdWNoQWN0aW9uKHRoaXMuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZVJlbmRlcmVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0NyZWF0ZVJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0NyZWF0ZVJlbmRlcmVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcclxudmFyIENIRUNLU1VNID0gcmVxdWlyZSgnLi4vY2hlY2tzdW0nKTtcclxuXHJcbnZhciBEZWJ1Z0hlYWRlciA9IGZ1bmN0aW9uIChnYW1lKVxyXG57XHJcbiAgICB2YXIgY29uZmlnID0gZ2FtZS5jb25maWc7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5oaWRlQmFubmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVuZGVyVHlwZSA9IChjb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuQ0FOVkFTKSA/ICdDYW52YXMnIDogJ1dlYkdMJztcclxuXHJcbiAgICB2YXIgaWUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIWllKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjID0gJyc7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbY107XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxhc3RDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5iYW5uZXJCYWNrZ3JvdW5kQ29sb3IuZm9yRWFjaChmdW5jdGlvbihjb2xvcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnJWMgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKCdiYWNrZ3JvdW5kOiAnICsgY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RDb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgaW5qZWN0IHRoZSB0ZXh0IGNvbG9yXHJcbiAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9ICdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgbGFzdENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjID0gYy5jb25jYXQoJyVjICcpO1xyXG5cclxuICAgICAgICAgICAgYXJncy5wdXNoKCdjb2xvcjogJyArIGNvbmZpZy5iYW5uZXJUZXh0Q29sb3IgKyAnOyBiYWNrZ3JvdW5kOiAnICsgY29uZmlnLmJhbm5lckJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVVJMIGxpbmsgYmFja2dyb3VuZCBjb2xvciAoYWx3YXlzIHdoaXRlKVxyXG4gICAgICAgIGFyZ3MucHVzaCgnYmFja2dyb3VuZDogI2ZmZicpO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmdhbWVUaXRsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdChjb25maWcuZ2FtZVRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZVZlcnNpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnIHYnICsgY29uZmlnLmdhbWVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KCcgLyAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuaGlkZVBoYXNlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGMgPSBjLmNvbmNhdCgnUGhhc2VyIHYnICsgQ09OU1QuVkVSU0lPTiArICcgKCcgKyByZW5kZXJUeXBlICsgJyknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGMgPSBjLmNvbmNhdCgnICVjICcgKyBjb25maWcuZ2FtZVVSTCk7XHJcblxyXG4gICAgICAgIC8vICBJbmplY3QgdGhlIG5ldyBzdHJpbmcgYmFjayBpbnRvIHRoZSBhcmdzIGFycmF5XHJcbiAgICAgICAgYXJnc1swXSA9IGM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2luZG93Wydjb25zb2xlJ10pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BoYXNlciB2JyArIENPTlNULlZFUlNJT04gKyAnIC8gaHR0cDovL3BoYXNlci5pbycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEtlZXAgdGhpcyBkdXJpbmcgZGV2IGJ1aWxkIG9ubHlcclxuICAgIGNvbnNvbGUubG9nKENIRUNLU1VNLmJ1aWxkKTtcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERlYnVnSGVhZGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0RlYnVnSGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ib290L0RlYnVnSGVhZGVyLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIERldmljZSA9IHJlcXVpcmUoJy4uL2RldmljZScpO1xyXG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9Db25maWcnKTtcclxudmFyIERlYnVnSGVhZGVyID0gcmVxdWlyZSgnLi9EZWJ1Z0hlYWRlcicpO1xyXG52YXIgQ3JlYXRlUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NyZWF0ZVJlbmRlcmVyJyk7XHJcbnZhciBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCcuLi9kb20vUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XHJcbnZhciBET01Db250ZW50TG9hZGVkID0gcmVxdWlyZSgnLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQnKTtcclxudmFyIFJhbmRvbURhdGFHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yJyk7XHJcbnZhciBTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuLi9zdGF0ZS9TdGF0ZU1hbmFnZXInKTtcclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG4vLyAgUmVxdWlyZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3RvcmllcyBpbnRvIHRoZSBGYWN0b3J5Q29udGFpbmVyXHJcbnJlcXVpcmUgKCcuLi9nYW1lb2JqZWN0cy8nKTtcclxuXHJcbnZhciBHYW1lID0gZnVuY3Rpb24gKGNvbmZpZylcclxue1xyXG4gICAgdGhpcy5jb25maWcgPSBuZXcgQ29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgLy8gIERlY2lkZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHNob3VsZCBiZSBHYW1lIHByb3BlcnRpZXMsIG9yIHBsYWNlZCBlbHNld2hlcmUgLi4uXHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ3xIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIEdhbWVzIERPTSBwYXJlbnQuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgdGhpcy5pc0Jvb3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lfSByYWYgLSBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgdGhlIGNvcmUgZ2FtZSBsb29wIHZpYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb3Igc2V0VGltZW91dFxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgdGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5UZXh0dXJlTWFuYWdlcn0gdGV4dHVyZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBUZXh0dXJlIE1hbmFnZXIuXHJcbiAgICAqL1xyXG4gICAgdGhpcy50ZXh0dXJlcyA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlVwZGF0ZU1hbmFnZXJ9IHVwZGF0ZXMgLSBSZWZlcmVuY2UgdG8gdGhlIFBoYXNlciBVcGRhdGUgTWFuYWdlci5cclxuICAgICovXHJcbiAgICB0aGlzLnVwZGF0ZXMgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5DYWNoZX0gY2FjaGUgLSBSZWZlcmVuY2UgdG8gdGhlIGFzc2V0cyBjYWNoZS5cclxuICAgICovXHJcbiAgICB0aGlzLmNhY2hlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtQaGFzZXIuSW5wdXR9IGlucHV0IC0gUmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBtYW5hZ2VyXHJcbiAgICAqL1xyXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlTWFuYWdlcn0gc3RhdGUgLSBUaGUgU3RhdGVNYW5hZ2VyLiBQaGFzZXIgaW5zdGFuY2Ugc3BlY2lmaWMuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZU1hbmFnZXIodGhpcywgdGhpcy5jb25maWcuc3RhdGVDb25maWcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5EZXZpY2V9IGRldmljZSAtIENvbnRhaW5zIGRldmljZSBpbmZvcm1hdGlvbiBhbmQgY2FwYWJpbGl0aWVzIChzaW5nbGV0b24pXHJcbiAgICAqL1xyXG4gICAgdGhpcy5kZXZpY2UgPSBEZXZpY2U7XHJcblxyXG4gICAgLy8gIE1vcmUgdGhpcyBzb21ld2hlcmUgZWxzZT8gTWF0aCBwZXJoYXBzPyBEb2Vzbid0IG5lZWQgdG8gYmUgYSBHYW1lIGxldmVsIHN5c3RlbS5cclxuICAgIHRoaXMucm5kO1xyXG5cclxuICAgIC8vICBXYWl0IGZvciB0aGUgRE9NIFJlYWR5IGV2ZW50LCB0aGVuIGNhbGwgYm9vdC5cclxuICAgIERPTUNvbnRlbnRMb2FkZWQodGhpcy5ib290LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5nYW1lID0gdGhpcztcclxufTtcclxuXHJcbkdhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZTtcclxuXHJcbkdhbWUucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc0Jvb3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnByZUJvb3QoKTtcclxuXHJcbiAgICAgICAgLy8gIFByb2JhYmx5IG1vdmUgLi4uXHJcbiAgICAgICAgdGhpcy5ybmQgPSBuZXcgUmFuZG9tRGF0YUdlbmVyYXRvcih0aGlzLmNvbmZpZy5zZWVkKTtcclxuXHJcbiAgICAgICAgRGVidWdIZWFkZXIodGhpcyk7XHJcblxyXG4gICAgICAgIENyZWF0ZVJlbmRlcmVyKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmJvb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZy5wb3N0Qm9vdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJhZi5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyAgdGltZXN0YW1wID0gRE9NSGlnaFJlc1RpbWVTdGFtcFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodGltZXN0YW1wKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zdGVwKHRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ib290L0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Jvb3QvR2FtZS5qcyIsInZhciBDSEVDS1NVTSA9IHtcbmJ1aWxkOiAnMzQxMWU0ZTAtYjY0Ny0xMWU2LWJjOGYtNzc1ODY0YzAwZWM3J1xufTtcbm1vZHVsZS5leHBvcnRzID0gQ0hFQ0tTVU07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY2hlY2tzdW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxuXHJcbnZhciBBdWRpbyA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBhdWRpb0RhdGEgLSBBcmUgQXVkaW8gdGFncyBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgYXVkaW9EYXRhOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJBdWRpbyAtIElzIHRoZSBXZWJBdWRpbyBBUEkgYXZhaWxhYmxlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdlYkF1ZGlvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvZ2cgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBvZ2cgZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgb2dnOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvcHVzIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgb3B1cyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBvcHVzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtcDMgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBtcDMgZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbXAzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3YXYgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3YXYgZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2F2OiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQ2FuIHRoaXMgZGV2aWNlIHBsYXkgbTRhIGZpbGVzP1xyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG00YSAtIFRydWUgaWYgdGhpcyBkZXZpY2UgY2FuIHBsYXkgbTRhIGZpbGVzLlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG00YTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2VibSAtIENhbiB0aGlzIGRldmljZSBwbGF5IHdlYm0gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgd2VibTogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZG9sYnkgLSBDYW4gdGhpcyBkZXZpY2UgcGxheSBFQy0zIERvbGJ5IERpZ2l0YWwgUGx1cyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBkb2xieTogZmFsc2VcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIEF1ZGlvLmF1ZGlvRGF0YSA9ICEhKHdpbmRvd1snQXVkaW8nXSk7XHJcbiAgICBBdWRpby53ZWJBdWRpbyA9ICEhKHdpbmRvd1snQXVkaW9Db250ZXh0J10gfHwgd2luZG93Wyd3ZWJraXRBdWRpb0NvbnRleHQnXSk7XHJcblxyXG4gICAgdmFyIGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9ICEhYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlO1xyXG5cclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ub2dnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJvcHVzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpIHx8IGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vb3B1czsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby5vcHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdWRpby5tcDMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgTWltZXR5cGVzIGFjY2VwdGVkOlxyXG4gICAgICAgICAgICAvLyAgZGV2ZWxvcGVyLm1vemlsbGEub3JnL0VuL01lZGlhX2Zvcm1hdHNfc3VwcG9ydGVkX2J5X3RoZV9hdWRpb19hbmRfdmlkZW9fZWxlbWVudHNcclxuICAgICAgICAgICAgLy8gIGJpdC5seS9pcGhvbmVvc2NvZGVjc1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9FbGVtZW50LmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLndhdiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGF1ZGlvRWxlbWVudC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvLm00YSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXVkaW8ud2VibSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDtjb2RlY3M9XCJlYy0zXCInKSAhPT0gJycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChCcm93c2VyLmVkZ2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW8uZG9sYnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQnJvd3Nlci5zYWZhcmkgJiYgQnJvd3Nlci5zYWZhcmlWZXJzaW9uID49IDkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgvTWFjIE9TIFggKFxcZCspXyhcXGQrKS8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFqb3IgPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbm9yID0gcGFyc2VJbnQoUmVnRXhwLiQyLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1ham9yID09PSAxMCAmJiBtaW5vciA+PSAxMSkgfHwgbWFqb3IgPiAxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW8uZG9sYnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBdWRpbztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2RldmljZS9BdWRpby5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0F1ZGlvLmpzIiwidmFyIE9TID0gcmVxdWlyZSgnLi9PUycpO1xyXG52YXIgQnJvd3NlciA9IHJlcXVpcmUoJy4vQnJvd3NlcicpO1xyXG5cclxudmFyIEZ1bGxzY3JlZW4gPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXZhaWxhYmxlIC0gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBGdWxsIFNjcmVlbiBBUEk/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHJlcXVlc3QgLSBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgRnVsbCBTY3JlZW4gQVBJIHRoaXMgaG9sZHMgdGhlIGNhbGwgeW91IG5lZWQgdG8gdXNlIHRvIGFjdGl2YXRlIGl0LlxyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHJlcXVlc3Q6ICcnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge3N0cmluZ30gY2FuY2VsIC0gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEZ1bGwgU2NyZWVuIEFQSSB0aGlzIGhvbGRzIHRoZSBjYWxsIHlvdSBuZWVkIHRvIHVzZSB0byBjYW5jZWwgaXQuXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgY2FuY2VsOiAnJyxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBrZXlib2FyZCAtIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCBhY2Nlc3MgdG8gdGhlIEtleWJvYXJkIGR1cmluZyBGdWxsIFNjcmVlbiBtb2RlP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGtleWJvYXJkOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4qIENoZWNrcyBmb3Igc3VwcG9ydCBvZiB0aGUgRnVsbCBTY3JlZW4gQVBJLlxyXG4qL1xyXG5mdW5jdGlvbiBpbml0ICgpXHJcbntcclxuICAgIHZhciBmcyA9IFtcclxuICAgICAgICAncmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdyZXF1ZXN0RnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAnbXNSZXF1ZXN0RnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbW96UmVxdWVzdEZ1bGxzY3JlZW4nXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBpZiAoZWxlbWVudFtmc1tpXV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGdWxsc2NyZWVuLmF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIEZ1bGxzY3JlZW4ucmVxdWVzdCA9IGZzW2ldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNmcyA9IFtcclxuICAgICAgICAnY2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ2V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAnbXNDYW5jZWxGdWxsU2NyZWVuJyxcclxuICAgICAgICAnbXNFeGl0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ21vekNhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICdtb3pFeGl0RnVsbHNjcmVlbidcclxuICAgIF07XHJcblxyXG4gICAgaWYgKEZ1bGxzY3JlZW4uYXZhaWxhYmxlKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2ZzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50W2Nmc1tpXV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEZ1bGxzY3JlZW4uY2FuY2VsID0gY2ZzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIEtleWJvYXJkIElucHV0P1xyXG4gICAgaWYgKHdpbmRvd1snRWxlbWVudCddICYmIEVsZW1lbnRbJ0FMTE9XX0tFWUJPQVJEX0lOUFVUJ10pXHJcbiAgICB7XHJcbiAgICAgICAgRnVsbHNjcmVlbi5rZXlib2FyZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEZ1bGxzY3JlZW47XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvRnVsbHNjcmVlbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGV2aWNlL0Z1bGxzY3JlZW4uanMiLCJ2YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcblxyXG52YXIgSW5wdXQgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdG91Y2ggLSBJcyB0b3VjaCBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdG91Y2g6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IG1zcG9pbnRlciAtIElzIG1zcG9pbnRlciBhdmFpbGFibGU/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgbXNwb2ludGVyOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHs/c3RyaW5nfSB3aGVlbFR5cGUgLSBUaGUgbmV3ZXN0IHR5cGUgb2YgV2hlZWwvU2Nyb2xsIGV2ZW50IHN1cHBvcnRlZDogJ3doZWVsJywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnXHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICB3aGVlbEV2ZW50OiBudWxsXHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCAod2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID49IDEpKVxyXG4gICAge1xyXG4gICAgICAgIElucHV0LnRvdWNoID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpXHJcbiAgICB7XHJcbiAgICAgICAgSW5wdXQubXNwb2ludGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIU9TLmNvY29vbkpTKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvd2hlZWxcclxuICAgICAgICBpZiAoJ29ud2hlZWwnIGluIHdpbmRvdyB8fCAoQnJvd3Nlci5pZSAmJiAnV2hlZWxFdmVudCcgaW4gd2luZG93KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIERPTTMgV2hlZWwgRXZlbnQ6IEZGIDE3KywgSUUgOSssIENocm9tZSAzMSssIFNhZmFyaSA3K1xyXG4gICAgICAgICAgICBJbnB1dC53aGVlbEV2ZW50ID0gJ3doZWVsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoJ29ubW91c2V3aGVlbCcgaW4gd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTm9uLUZGIGxlZ2FjeTogSUUgNi05LCBDaHJvbWUgMS0zMSwgU2FmYXJpIDUtNy5cclxuICAgICAgICAgICAgSW5wdXQud2hlZWxFdmVudCA9ICdtb3VzZXdoZWVsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoQnJvd3Nlci5maXJlZm94ICYmICdNb3VzZVNjcm9sbEV2ZW50JyBpbiB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBGRiBwcmlvciB0byAxNy4gVGhpcyBzaG91bGQgcHJvYmFibHkgYmUgc2NydWJiZWQuXHJcbiAgICAgICAgICAgIElucHV0LndoZWVsRXZlbnQgPSAnRE9NTW91c2VTY3JvbGwnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW5wdXQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvSW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9JbnB1dC5qcyIsInZhciBPUyA9IHJlcXVpcmUoJy4vT1MnKTtcclxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL0Jyb3dzZXInKTtcclxuXHJcbnZhciBWaWRlbyA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBvZ2dWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IG9nZyB2aWRlbyBmaWxlcz9cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICBvZ2dWaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaDI2NFZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaDI2NCBtcDQgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgaDI2NFZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSBtcDRWaWRlbyAtIENhbiB0aGlzIGRldmljZSBwbGF5IGgyNjQgbXA0IHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIG1wNFZpZGVvOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtib29sZWFufSB3ZWJtVmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB3ZWJtIHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIHdlYm1WaWRlbzogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdnA5VmlkZW8gLSBDYW4gdGhpcyBkZXZpY2UgcGxheSB2cDkgdmlkZW8gZmlsZXM/XHJcbiAgICAqIEBkZWZhdWx0XHJcbiAgICAqL1xyXG4gICAgdnA5VmlkZW86IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGhsc1ZpZGVvIC0gQ2FuIHRoaXMgZGV2aWNlIHBsYXkgaGxzIHZpZGVvIGZpbGVzP1xyXG4gICAgKiBAZGVmYXVsdFxyXG4gICAgKi9cclxuICAgIGhsc1ZpZGVvOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKClcclxue1xyXG4gICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICB2YXIgcmVzdWx0ID0gISF2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGU7XHJcblxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWRlby5vZ2dWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFdpdGhvdXQgUXVpY2tUaW1lLCB0aGlzIHZhbHVlIHdpbGwgYmUgYHVuZGVmaW5lZGAuIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTQ2XHJcbiAgICAgICAgICAgICAgICBWaWRlby5oMjY0VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVmlkZW8ubXA0VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDgsIHZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlkZW8ud2VibVZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA5XCInKS5yZXBsYWNlKC9ebm8kLywgJycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWRlby52cDlWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQuY2FuUGxheVR5cGUoJ2FwcGxpY2F0aW9uL3gtbXBlZ1VSTDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZGVvLmhsc1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBOb3RoaW5nIHRvIGRvXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFZpZGVvO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZGV2aWNlL1ZpZGVvLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXZpY2UvVmlkZW8uanMiLCIvLyAgVGhpcyBzaW5nbGV0b24gaXMgaW5zdGFudGlhdGVkIGFzIHNvb24gYXMgUGhhc2VyIGxvYWRzLFxyXG4vLyAgYmVmb3JlIGEgUGhhc2VyLkdhbWUgaW5zdGFuY2UgaGFzIGV2ZW4gYmVlbiBjcmVhdGVkLlxyXG4vLyAgV2hpY2ggbWVhbnMgYWxsIGluc3RhbmNlcyBvZiBQaGFzZXIgR2FtZXMgY2FuIHNoYXJlIGl0LFxyXG4vLyAgd2l0aG91dCBoYXZpbmcgdG8gcmUtcG9sbCB0aGUgZGV2aWNlIGFsbCBvdmVyIGFnYWluXHJcblxyXG52YXIgT1MgPSByZXF1aXJlKCcuL09TJyk7XHJcbnZhciBCcm93c2VyID0gcmVxdWlyZSgnLi9Ccm93c2VyJyk7XHJcbnZhciBGZWF0dXJlcyA9IHJlcXVpcmUoJy4vRmVhdHVyZXMnKTtcclxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xyXG52YXIgQXVkaW8gPSByZXF1aXJlKCcuL0F1ZGlvJyk7XHJcbnZhciBWaWRlbyA9IHJlcXVpcmUoJy4vVmlkZW8nKTtcclxudmFyIEZ1bGxzY3JlZW4gPSByZXF1aXJlKCcuL0Z1bGxzY3JlZW4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIE9TOiBPUyxcclxuICAgIEJyb3dzZXI6IEJyb3dzZXIsXHJcbiAgICBGZWF0dXJlczogRmVhdHVyZXMsXHJcbiAgICBJbnB1dDogSW5wdXQsXHJcbiAgICBBdWRpbzogQXVkaW8sXHJcbiAgICBWaWRlbzogVmlkZW8sXHJcbiAgICBGdWxsc2NyZWVuOiBGdWxsc2NyZWVuXHJcblxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9kZXZpY2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RldmljZS9pbmRleC5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBPUyA9IHJlcXVpcmUoJy4uL2RldmljZS9PUycpO1xyXG5cclxudmFyIGlzQm9vdGVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBET01Db250ZW50TG9hZGVkIChjYWxsYmFjaylcclxue1xyXG4gICAgaWYgKGlzQm9vdGVkKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKVxyXG4gICAge1xyXG4gICAgICAgIGlzQm9vdGVkID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoZWNrID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICBpc0Jvb3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgY2hlY2ssIHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVjaywgMjApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoT1MuY29yZG92YSAmJiAhT1MuY29jb29uSlMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFJlZi4gaHR0cDovL2RvY3MucGhvbmVnYXAuY29tL2VuLzMuNS4wL2NvcmRvdmFfZXZlbnRzX2V2ZW50cy5tZC5odG1sI2RldmljZXJlYWR5XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjaGVjaywgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVjaywgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRE9NQ29udGVudExvYWRlZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL0RPTUNvbnRlbnRMb2FkZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RvbS9ET01Db250ZW50TG9hZGVkLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQWJzdHJhY3RzIGF3YXkgdGhlIHVzZSBvZiBSQUYgb3Igc2V0VGltZU91dCBmb3IgdGhlIGNvcmUgZ2FtZSB1cGRhdGUgbG9vcC5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlU2V0VGltZU91dD1mYWxzZV0gLSBUZWxsIFBoYXNlciB0byB1c2Ugc2V0VGltZU91dCBldmVuIGlmIHJhZiBpcyBhdmFpbGFibGUuXHJcbiovXHJcbmZ1bmN0aW9uIFJlcXVlc3RBbmltYXRpb25GcmFtZSAoZ2FtZSlcclxue1xyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBUaGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuICAgICovXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzUnVubmluZyAtIHRydWUgaWYgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlzIHJ1bm5pbmcsIG90aGVyd2lzZSBmYWxzZS5cclxuICAgICogQGRlZmF1bHRcclxuICAgICovXHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudGljayA9IDA7XHJcblxyXG4gICAgdmFyIHZlbmRvcnMgPSBbXHJcbiAgICAgICAgJ21zJyxcclxuICAgICAgICAnbW96JyxcclxuICAgICAgICAnd2Via2l0JyxcclxuICAgICAgICAnbydcclxuICAgIF07XHJcblxyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzU2V0VGltZU91dCAgLSBUcnVlIGlmIHRoZSBicm93c2VyIGlzIHVzaW5nIHNldFRpbWVvdXQgaW5zdGVhZCBvZiByQWYuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5pc1NldFRpbWVPdXQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVPdXRJRCAtIFRoZSBjYWxsYmFjayBzZXRUaW1lb3V0IG9yIHJBZiBjYWxsYmFjayBJRCB1c2VkIHdoZW4gY2FsbGluZyBjYW5jZWwuXHJcbiAgICAqL1xyXG4gICAgdGhpcy50aW1lT3V0SUQgPSBudWxsO1xyXG5cclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy8gIHRpbWVzdGFtcCA9IERPTUhpZ2hSZXNUaW1lU3RhbXBcclxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICBfdGhpcy50aWNrID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICBfdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBfdGhpcy5nYW1lLnVwZGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RlcFRpbWVvdXQgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIF90aGlzLnRpY2sgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAvLyBfdGhpcy5nYW1lLnVwZGF0ZShfdGhpcy50aWNrKTtcclxuXHJcbiAgICAgICAgLy8gX3RoaXMudGltZU91dElEID0gd2luZG93LnNldFRpbWVvdXQoc3RlcFRpbWVvdXQsIF90aGlzLmdhbWUudGltZS50aW1lVG9DYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFN0YXJ0cyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHJ1bm5pbmcgb3Igc2V0VGltZW91dCBpZiB1bmF2YWlsYWJsZSBpbiBicm93c2VyXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdGFydFxyXG4gICAgKi9cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcuZm9yY2VTZXRUaW1lT3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NldFRpbWVPdXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lT3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dChzdGVwVGltZW91dCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTZXRUaW1lT3V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICogU3RvcHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIHJ1bm5pbmcuXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJlcXVlc3RBbmltYXRpb25GcmFtZSNzdG9wXHJcbiAgICAqL1xyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1NldFRpbWVPdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lT3V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblJlcXVlc3RBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZG9tL1JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXHJcbiogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLkdhbWVPYmplY3QuSW1hZ2VcclxuKiBAZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdFxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4qIEBwYXJhbSB7c3RyaW5nfSBba2V5XSAtIFRoZSB0ZXh0dXJlIHVzZWQgYnkgdGhlIEltYWdlIGR1cmluZyByZW5kZXJpbmcuIEl0IGNhbiBiZSBhIHN0cmluZyB3aGljaCBpcyBhIHJlZmVyZW5jZSB0byB0aGUgQ2FjaGUgZW50cnksIG9yIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSBvciBQSVhJLlRleHR1cmUuXHJcbiogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgdGhpcyBJbWFnZSBpcyB1c2luZyBwYXJ0IG9mIGEgc3ByaXRlIHNoZWV0IG9yIHRleHR1cmUgYXRsYXMgeW91IGNhbiBzcGVjaWZ5IHRoZSBleGFjdCBmcmFtZSB0byB1c2UgYnkgZ2l2aW5nIGEgc3RyaW5nIG9yIG51bWVyaWMgaW5kZXguXHJcbiovXHJcbnZhciBJbWFnZSA9IGZ1bmN0aW9uIChzdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSwgbmFtZSlcclxue1xyXG4gICAgLypcclxuICAgIHZhciBfdGV4dHVyZSA9IHN0YXRlLmdhbWUudGV4dHVyZXMuZ2V0KGtleSk7XHJcbiAgICB2YXIgX2ZyYW1lID0gX3RleHR1cmUuZ2V0KGZyYW1lKTtcclxuXHJcbiAgICBQaGFzZXIuR2FtZU9iamVjdC5jYWxsKHRoaXMsIHN0YXRlLCB4LCB5LCBfdGV4dHVyZSwgX2ZyYW1lKTtcclxuXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMudHlwZSA9IFBoYXNlci5JTUFHRTtcclxuICAgICovXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xyXG5cclxuXHJcbi8vIEltYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdhbWVPYmplY3QucHJvdG90eXBlKTtcclxuLy8gSW1hZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW1hZ2U7XHJcblxyXG4vKipcclxuKiBBdXRvbWF0aWNhbGx5IGNhbGxlZCBieSBXb3JsZC5wcmVVcGRhdGUuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5JbWFnZSNwcmVVcGRhdGVcclxuKiBAbWVtYmVyb2YgUGhhc2VyLkltYWdlXHJcblBoYXNlci5HYW1lT2JqZWN0LkltYWdlLnByb3RvdHlwZS5wcmVVcGRhdGUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICAvLyAgV291bGQgbGlrZSB0byBnZXQgcmlkIG9mIHRoaXMgc29tZWhvdyAuLi5cclxuICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbG9yLndvcmxkQWxwaGEgPSB0aGlzLnBhcmVudC5jb2xvci53b3JsZEFscGhhO1xyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuLypcclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSW1hZ2UucHJvdG90eXBlLCB7XHJcblxyXG4gICAgd2lkdGg6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVggKiB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdmFsdWUgLyB0aGlzLmZyYW1lLnJlYWxXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBoZWlnaHQ6IHtcclxuXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLl9zY2FsZVkgKiB0aGlzLmZyYW1lLnJlYWxIZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHZhbHVlIC8gdGhpcy5mcmFtZS5yZWFsSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuKi9cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBJbWFnZSA9IHJlcXVpcmUoJy4vSW1hZ2UnKTtcclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG52YXIgSW1hZ2VGYWN0b3J5ID0ge1xyXG5cclxuICAgIEtFWTogJ2ltYWdlJyxcclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxyXG4gICAgKlxyXG4gICAgKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cclxuICAgICpcclxuICAgICogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLlxyXG4gICAgKiBUaGlzIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGxvZ29zLCBiYWNrZ3JvdW5kcywgc2ltcGxlIGJ1dHRvbnMgYW5kIG90aGVyIG5vbi1TcHJpdGUgZ3JhcGhpY3MuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3QuRmFjdG9yeSNpbWFnZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEltYWdlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIEltYWdlIG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuSW1hZ2V9IFRoZSBuZXdseSBjcmVhdGVkIEltYWdlIG9iamVjdC5cclxuICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICh4LCB5LCBrZXksIGZyYW1lLCBncm91cClcclxuICAgIHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMuc3RhdGU7IH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlRmFjdG9yeS5hZGQnLCBrZXksIHgsIHksIGZyYW1lLCBncm91cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludG8gU3RhdGUnLCB0aGlzLnN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGdyb3VwLmNoaWxkcmVuLmFkZChuZXcgSW1hZ2UodGhpcy5zdGF0ZSwgeCwgeSwga2V5LCBmcmFtZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBtYWtlOiBmdW5jdGlvbiAoeCwgeSwga2V5LCBmcmFtZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VGYWN0b3J5Lm1ha2UnLCBrZXksIHgsIHksIGZyYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLnN0YXRlLCB4LCB5LCBrZXksIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZhY3RvcnlDb250YWluZXIucmVnaXN0ZXIoSW1hZ2VGYWN0b3J5KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZ2FtZW9iamVjdHMvaW1hZ2UvSW1hZ2VGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbWFnZS9JbWFnZUZhY3RvcnkuanMiLCIvLyAgSW5jbHVkZSBhbGwgb2YgdGhlIEdhbWUgT2JqZWN0IEZhY3Rvcmllc1xyXG5cclxucmVxdWlyZSAoJy4vaW1hZ2UvSW1hZ2VGYWN0b3J5Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2dhbWVvYmplY3RzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nYW1lb2JqZWN0cy9pbmRleC5qcyIsIi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBjIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBjID0gMTtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7bnVtYmVyfSBzMCAtIEludGVybmFsIHZhci5cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG52YXIgczAgPSAwO1xyXG5cclxuLyoqXHJcbiogQHByb3BlcnR5IHtudW1iZXJ9IHMxIC0gSW50ZXJuYWwgdmFyLlxyXG4qIEBwcml2YXRlXHJcbiovXHJcbnZhciBzMSA9IDA7XHJcblxyXG4vKipcclxuKiBAcHJvcGVydHkge251bWJlcn0gczIgLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHMyID0gMDtcclxuXHJcbi8qKlxyXG4qIEBwcm9wZXJ0eSB7QXJyYXl9IHNpZ24gLSBJbnRlcm5hbCB2YXIuXHJcbiogQHByaXZhdGVcclxuKi9cclxudmFyIHNpZ24gPSBbIC0xLCAxIF07XHJcblxyXG4vKipcclxuKiBQcml2YXRlIHJhbmRvbSBoZWxwZXIuXHJcbipcclxuKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JuZFxyXG4qIEBwcml2YXRlXHJcbiogQHJldHVybiB7bnVtYmVyfVxyXG4qL1xyXG52YXIgcm5kID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgdmFyIHQgPSAyMDkxNjM5ICogczAgKyBjICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcclxuXHJcbiAgICBjID0gdCB8IDA7XHJcbiAgICBzMCA9IHMxO1xyXG4gICAgczEgPSBzMjtcclxuICAgIHMyID0gdCAtIGM7XHJcblxyXG4gICAgcmV0dXJuIHMyO1xyXG59O1xyXG5cclxuLyoqXHJcbiogSW50ZXJuYWwgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlZWQgaGFzaC5cclxuKlxyXG4qIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaGFzaFxyXG4qIEBwcml2YXRlXHJcbiogQHBhcmFtIHthbnl9IGRhdGFcclxuKiBAcmV0dXJuIHtudW1iZXJ9IGhhc2hlZCB2YWx1ZS5cclxuKi9cclxudmFyIGhhc2ggPSBmdW5jdGlvbiAoZGF0YSlcclxue1xyXG4gICAgdmFyIGgsIGksIG47XHJcbiAgICBuID0gMHhlZmM4MjQ5ZDtcclxuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xyXG4gICAgICAgIG4gPSBoID4+PiAwO1xyXG4gICAgICAgIGggLT0gbjtcclxuICAgICAgICBoICo9IG47XHJcbiAgICAgICAgbiA9IGggPj4+IDA7XHJcbiAgICAgICAgaCAtPSBuO1xyXG4gICAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOy8vIDJeMzJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsvLyAyXi0zMlxyXG59O1xyXG5cclxuXHJcbnZhciBSYW5kb21EYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKHNlZWRzKVxyXG57XHJcbiAgICBpZiAodHlwZW9mIHNlZWRzID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlKHNlZWRzKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvdyhzZWVkcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJhbmRvbURhdGFHZW5lcmF0b3I7XHJcblxyXG5SYW5kb21EYXRhR2VuZXJhdG9yLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogUmVzZXQgdGhlIHNlZWQgb2YgdGhlIHJhbmRvbSBkYXRhIGdlbmVyYXRvci5cclxuICAgICpcclxuICAgICogX05vdGVfOiB0aGUgc2VlZCBhcnJheSBpcyBvbmx5IHByb2Nlc3NlZCB1cCB0byB0aGUgZmlyc3QgYHVuZGVmaW5lZGAgKG9yIGBudWxsYCkgdmFsdWUsIHNob3VsZCBzdWNoIGJlIHByZXNlbnQuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3Ijc293XHJcbiAgICAqIEBwYXJhbSB7YW55W119IHNlZWRzIC0gVGhlIGFycmF5IG9mIHNlZWRzOiB0aGUgYHRvU3RyaW5nKClgIG9mIGVhY2ggdmFsdWUgaXMgdXNlZC5cclxuICAgICovXHJcbiAgICBzb3c6IGZ1bmN0aW9uIChzZWVkcylcclxuICAgIHtcclxuICAgICAgICAvLyBBbHdheXMgcmVzZXQgdG8gZGVmYXVsdCBzZWVkXHJcbiAgICAgICAgczAgPSBoYXNoKCcgJyk7XHJcbiAgICAgICAgczEgPSBoYXNoKHMwKTtcclxuICAgICAgICBzMiA9IGhhc2goczEpO1xyXG4gICAgICAgIGMgPSAxO1xyXG5cclxuICAgICAgICBpZiAoIXNlZWRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgYW55IHNlZWRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWVkcy5sZW5ndGggJiYgKHNlZWRzW2ldICE9IG51bGwpOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VlZCA9IHNlZWRzW2ldO1xyXG5cclxuICAgICAgICAgICAgczAgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczAgKz0gfn4oczAgPCAwKTtcclxuICAgICAgICAgICAgczEgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczEgKz0gfn4oczEgPCAwKTtcclxuICAgICAgICAgICAgczIgLT0gaGFzaChzZWVkKTtcclxuICAgICAgICAgICAgczIgKz0gfn4oczIgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNpbnRlZ2VyXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICAvLyAyXjMyXHJcbiAgICAgICAgcmV0dXJuIHJuZCgpICogMHgxMDAwMDAwMDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNmcmFjXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgIGZyYWM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMl4tNTNcclxuICAgICAgICByZXR1cm4gcm5kKCkgKyAocm5kKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAyXjMyLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JlYWxcclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kIDJeMzIuXHJcbiAgICAqL1xyXG4gICAgcmVhbDogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VyKCkgKyB0aGlzLmZyYWMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjaW50ZWdlckluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICBpbnRlZ2VySW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmVhbEluUmFuZ2UoMCwgbWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYW5kIGluY2x1ZGluZyBtaW4gYW5kIG1heC5cclxuICAgICogVGhpcyBtZXRob2QgaXMgYW4gYWxpYXMgZm9yIFJhbmRvbURhdGFHZW5lcmF0b3IuaW50ZWdlckluUmFuZ2UuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjYmV0d2VlblxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxyXG4gICAgKi9cclxuICAgIGJldHdlZW46IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlZ2VySW5SYW5nZShtaW4sIG1heCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcmVhbEluUmFuZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICByZWFsSW5SYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYWMoKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSByZWFsIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI25vcm1hbFxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIHJlYWwgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEuXHJcbiAgICAqL1xyXG4gICAgbm9ybWFsOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAxIC0gKDIgKiB0aGlzLmZyYWMoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgdmFsaWQgUkZDNDEyMiB2ZXJzaW9uNCBJRCBoZXggc3RyaW5nIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTMwODM2OFxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3V1aWRcclxuICAgICogQHJldHVybiB7c3RyaW5nfSBBIHZhbGlkIFJGQzQxMjIgdmVyc2lvbjQgSUQgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGEgPSAnJztcclxuICAgICAgICB2YXIgYiA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGIgPSBhID0gJyc7IGErKyA8IDM2OyBiICs9fmEgJSA1IHwgYSAqIDMmNCA/IChhXjE1ID8gOF50aGlzLmZyYWMoKSAqIChhXjIwID8gMTYgOiA0KSA6IDQpLnRvU3RyaW5nKDE2KSA6ICctJylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gbWVtYmVyIG9mIGBhcnJheWAuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLlJhbmRvbURhdGFHZW5lcmF0b3IjcGlja1xyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFuIEFycmF5IHRvIHBpY2sgYSByYW5kb20gbWVtYmVyIG9mLlxyXG4gICAgKiBAcmV0dXJuIHthbnl9IEEgcmFuZG9tIG1lbWJlciBvZiB0aGUgYXJyYXkuXHJcbiAgICAqL1xyXG4gICAgcGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt0aGlzLmludGVnZXJJblJhbmdlKDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzaWduIHRvIGJlIHVzZWQgd2l0aCBtdWx0aXBsaWNhdGlvbiBvcGVyYXRvci5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciNzaWduXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgb3IgKzEuXHJcbiAgICAqL1xyXG4gICAgc2lnbjogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrKHNpZ24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogUmV0dXJucyBhIHJhbmRvbSBtZW1iZXIgb2YgYGFycmF5YCwgZmF2b3JpbmcgdGhlIGVhcmxpZXIgZW50cmllcy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN3ZWlnaHRlZFBpY2tcclxuICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBBbiBBcnJheSB0byBwaWNrIGEgcmFuZG9tIG1lbWJlciBvZi5cclxuICAgICogQHJldHVybiB7YW55fSBBIHJhbmRvbSBtZW1iZXIgb2YgdGhlIGFycmF5LlxyXG4gICAgKi9cclxuICAgIHdlaWdodGVkUGljazogZnVuY3Rpb24gKGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhcnJheVt+fihNYXRoLnBvdyh0aGlzLmZyYWMoKSwgMikgKiAoYXJyYXkubGVuZ3RoIC0gMSkgKyAwLjUpXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSByYW5kb20gdGltZXN0YW1wIGJldHdlZW4gbWluIGFuZCBtYXgsIG9yIGJldHdlZW4gdGhlIGJlZ2lubmluZyBvZiAyMDAwIGFuZCB0aGUgZW5kIG9mIDIwMjAgaWYgbWluIGFuZCBtYXggYXJlbid0IHNwZWNpZmllZC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuUmFuZG9tRGF0YUdlbmVyYXRvciN0aW1lc3RhbXBcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSB0aW1lc3RhbXAgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICAgICovXHJcbiAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uIChtaW4sIG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsSW5SYW5nZShtaW4gfHwgOTQ2Njg0ODAwMDAwLCBtYXggfHwgMTU3Nzg2MjAwMDAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIGFuZ2xlIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI2FuZ2xlXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTE4MCBhbmQgMTgwLlxyXG4gICAgKi9cclxuICAgIGFuZ2xlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVnZXJJblJhbmdlKC0xODAsIDE4MCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgcmFuZG9tIHJvdGF0aW9uIGluIHJhZGlhbnMsIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3JvdGF0aW9uXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gLTMuMTQxIGFuZCAzLjE0MVxyXG4gICAgKi9cclxuICAgIHJvdGF0aW9uOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxJblJhbmdlKC0zLjE0MTU5MjY1MzU4OTc5MywgMy4xNDE1OTI2NTM1ODk3OTMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBvciBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLiBUaGlzIGFsbG93cyB5b3UgdG8gcmV0YWluIHRoZSB2YWx1ZXNcclxuICAgICogdGhhdCB0aGUgZ2VuZXJhdG9yIGlzIHVzaW5nIGJldHdlZW4gZ2FtZXMsIGkuZS4gaW4gYSBnYW1lIHNhdmUgZmlsZS5cclxuICAgICpcclxuICAgICogVG8gc2VlZCB0aGlzIGdlbmVyYXRvciB3aXRoIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSB5b3UgY2FuIHBhc3MgaXQgYXMgdGhlXHJcbiAgICAqIGBzZWVkYCB2YWx1ZSBpbiB5b3VyIGdhbWUgY29uZmlnLCBvciBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5IGFmdGVyIFBoYXNlciBoYXMgYm9vdGVkLlxyXG4gICAgKlxyXG4gICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdpdGggbm8gcGFyYW1ldGVycyB0byByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICAqXHJcbiAgICAqIElmIHByb3ZpZGluZyBhIHN0YXRlIGl0IHNob3VsZCBtYXRjaCB0aGUgc2FtZSBmb3JtYXQgdGhhdCB0aGlzIG1ldGhvZFxyXG4gICAgKiByZXR1cm5zLCB3aGljaCBpcyBhIHN0cmluZyB3aXRoIGEgaGVhZGVyIGAhcm5kYCBmb2xsb3dlZCBieSB0aGUgYGNgLFxyXG4gICAgKiBgczBgLCBgczFgIGFuZCBgczJgIHZhbHVlcyByZXNwZWN0aXZlbHksIGVhY2ggY29tbWEtZGVsaW1pdGVkLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5SYW5kb21EYXRhR2VuZXJhdG9yI3N0YXRlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdIC0gR2VuZXJhdG9yIHN0YXRlIHRvIGJlIHNldC5cclxuICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gICAgKi9cclxuICAgIHN0YXRlOiBmdW5jdGlvbiAoc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3N0cmluZycgJiYgc3RhdGUubWF0Y2goL14hcm5kLykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICBjID0gcGFyc2VGbG9hdChzdGF0ZVsxXSk7XHJcbiAgICAgICAgICAgIHMwID0gcGFyc2VGbG9hdChzdGF0ZVsyXSk7XHJcbiAgICAgICAgICAgIHMxID0gcGFyc2VGbG9hdChzdGF0ZVszXSk7XHJcbiAgICAgICAgICAgIHMyID0gcGFyc2VGbG9hdChzdGF0ZVs0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gWyAnIXJuZCcsIGMsIHMwLCBzMSwgczIgXS5qb2luKCcsJyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21EYXRhR2VuZXJhdG9yO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9tYXRoL3JhbmRvbS1kYXRhLWdlbmVyYXRvci9SYW5kb21EYXRhR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZnVuIC8qLCB0aGlzQXJnICovKVxyXG4gICAge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XHJcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZ1biAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9BcnJheS5mb3JFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuaXNBcnJheVxyXG4qL1xyXG5pZiAoIUFycmF5LmlzQXJyYXkpXHJcbntcclxuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL0FycmF5LmlzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vLyBFUzYgTWF0aC50cnVuYyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmNcclxuaWYgKCFNYXRoLnRydW5jKSB7XHJcbiAgICBNYXRoLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMCA/IE1hdGguY2VpbCh4KSA6IE1hdGguZmxvb3IoeCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG4qL1xyXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XHJcblxyXG4gICAgLyoganNoaW50IGZyZWV6ZTogZmFsc2UgKi9cclxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYm91bmRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IHRoaXMgOiB0aGlzQXJnLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm91bmQucHJvdG90eXBlID0gKGZ1bmN0aW9uIEYocHJvdG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm90bylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBqc2hpbnQgc3VwZXJuZXc6IHRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKHRhcmdldC5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG4vKipcclxuKiBBIHBvbHlmaWxsIGZvciBBcnJheS5pc0FycmF5XHJcbiovXHJcbmlmICghQXJyYXkuaXNBcnJheSlcclxue1xyXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiogQSBwb2x5ZmlsbCBmb3IgQXJyYXkuZm9yRWFjaFxyXG4qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2hcclxuKi9cclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZm9yRWFjaClcclxue1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihmdW4gLyosIHRoaXNBcmcgKi8pXHJcbiAgICB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzID09PSB2b2lkIDAgfHwgdGhpcyA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuLmNhbGwodGhpc0FyZywgdFtpXSwgaSwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxyXG4vKipcclxuICogQWxzbyBmaXggZm9yIHRoZSBhYnNlbnQgY29uc29sZSBpbiBJRTlcclxuICovXHJcbmlmICghd2luZG93LmNvbnNvbGUpXHJcbntcclxuICAgIHdpbmRvdy5jb25zb2xlID0ge307XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2cgPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbiAgICB3aW5kb3cuY29uc29sZS53YXJuID0gd2luZG93LmNvbnNvbGUuYXNzZXJ0ID0gZnVuY3Rpb24oKXt9O1xyXG59XHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9GdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gRVM2IE1hdGgudHJ1bmMgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jXHJcbmlmICghTWF0aC50cnVuYykge1xyXG4gICAgTWF0aC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAgPyBNYXRoLmNlaWwoeCkgOiBNYXRoLmZsb29yKHgpO1xyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wb2x5ZmlsbHMvTWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcblxyXG4vKipcclxuKiBMb3ctYnVkZ2V0IEZsb2F0MzJBcnJheSBrbm9jay1vZmYsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQMi5qcyBpbiBJRTlcclxuKiBTb3VyY2U6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNTk4OC1waGFzZXItMTItaWU5L1xyXG4qIENhbWVyb24gRm9hbGUgKGh0dHA6Ly93d3cua2liaWJ1LmNvbSlcclxuKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cuVWludDMyQXJyYXkgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LlVpbnQzMkFycmF5ICE9PSBcIm9iamVjdFwiKVxyXG57XHJcbiAgICB2YXIgQ2hlYXBBcnJheSA9IGZ1bmN0aW9uKHR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IEFycmF5KCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0gPSBmdW5jdGlvbihhcmcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnKSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBhcmc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuY2FsbCh0aGlzLCBhcmcubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGFyZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhcmdbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3dbdHlwZV0ucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgICAgd2luZG93W3R5cGVdLmNvbnN0cnVjdG9yID0gd2luZG93W3R5cGVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBDaGVhcEFycmF5KCdGbG9hdDMyQXJyYXknKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICBDaGVhcEFycmF5KCdVaW50MzJBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ1VpbnQxNkFycmF5Jyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgQ2hlYXBBcnJheSgnSW50MTZBcnJheScpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIENoZWFwQXJyYXkoJ0FycmF5QnVmZmVyJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9VaW50MzJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBBbHNvIGZpeCBmb3IgdGhlIGFic2VudCBjb25zb2xlIGluIElFOVxyXG4gKi9cclxuaWYgKCF3aW5kb3cuY29uc29sZSlcclxue1xyXG4gICAgd2luZG93LmNvbnNvbGUgPSB7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9IHdpbmRvdy5jb25zb2xlLmFzc2VydCA9IGZ1bmN0aW9uKCl7fTtcclxuICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSB3aW5kb3cuY29uc29sZS5hc3NlcnQgPSBmdW5jdGlvbigpe307XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcG9seWZpbGxzL2NvbnNvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuICogcGVyZm9ybWFuY2Uubm93XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHsgIC8vIHRoYW5rcyBJRThcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT0gZmFsc2UpXHJcbiAge1xyXG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XHJcbiAgICBcclxuICAgIGlmIChwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCl7XHJcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9wZXJmb3JtYW5jZS5ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvLyBSZWZlcmVuY2VzOlxyXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNTc5NjcxXHJcbi8vIGh0dHA6Ly91cGRhdGVzLmh0bWw1cm9ja3MuY29tLzIwMTIvMDUvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLUFQSS1ub3ctd2l0aC1zdWItbWlsbGlzZWNvbmQtcHJlY2lzaW9uXHJcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3RpbWhhbGwvNDA3ODYxNFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvdHJlZS9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cclxuLy8gRXhwZWN0ZWQgdG8gYmUgdXNlZCB3aXRoIEJyb3dzZXJmaXlcclxuLy8gQnJvd3NlcmlmeSBhdXRvbWF0aWNhbGx5IGRldGVjdHMgdGhlIHVzZSBvZiBgZ2xvYmFsYCBhbmQgcGFzc2VzIHRoZVxyXG4vLyBjb3JyZWN0IHJlZmVyZW5jZSBvZiBgZ2xvYmFsYCwgYHNlbGZgLCBhbmQgZmluYWxseSBgd2luZG93YFxyXG5cclxuLy8gRGF0ZS5ub3dcclxuaWYgKCEoRGF0ZS5ub3cgJiYgRGF0ZS5wcm90b3R5cGUuZ2V0VGltZSkpIHtcclxuICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIHBlcmZvcm1hbmNlLm5vd1xyXG5pZiAoIShnbG9iYWwucGVyZm9ybWFuY2UgJiYgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdykpIHtcclxuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKCFnbG9iYWwucGVyZm9ybWFuY2UpIHtcclxuICAgICAgICBnbG9iYWwucGVyZm9ybWFuY2UgPSB7fTtcclxuICAgIH1cclxuICAgIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxudmFyIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cclxuZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFt2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcclxuICAgICAgICBnbG9iYWxbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxufVxyXG5cclxuaWYgKCFnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBkZWxheSA9IDE2ICsgbGFzdFRpbWUgLSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xyXG4gICAgICAgICAgICBkZWxheSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socGVyZm9ybWFuY2Uubm93KCkpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmlmICghZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MnKTtcclxudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcclxuXHJcbi8qKlxyXG4qIEEgQmFzZSBTdGF0ZSBDbGFzcy5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuU3RhdGVcclxuKiBAY29uc3RydWN0b3JcclxuKi9cclxudmFyIFN0YXRlID0gZnVuY3Rpb24gKGNvbmZpZylcclxue1xyXG4gICAgLy8gIFRoZSBwcm9wZXJ0aWVzIGEgU3RhdGUgKm11c3QqIGhhdmUsIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgd2l0aG91dCBicmVha2luZyBpdDpcclxuXHJcbiAgICB0aGlzLmdhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vICBNYXliZSBqdXN0IGFuIG9iamVjdD8gRG9lc24ndCBoYXZlIHRvIGluc3RhbnRpYXRlIEkgZG9uJ3QgdGhpbmsgLi4uXHJcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMsIGNvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5zeXMgPSBuZXcgU3lzdGVtcyh0aGlzLCBjb25maWcpO1xyXG5cclxuICAgIC8vICBSZWZlcmVuY2UgdG8gc3lzLmNoaWxkcmVuLCBzZXQgZHVyaW5nIHN5cy5pbml0IG9ubHlcclxuICAgIHRoaXMuY2hpbGRyZW47XHJcbn07XHJcblxyXG5TdGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGF0ZTtcclxuXHJcblN0YXRlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvLyAgQ2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBvd24gU3RhdGVzXHJcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICBDYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIG93biBTdGF0ZXNcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgcG9zdFVwZGF0ZTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIENhbiBiZSBvdmVycmlkZGVuIGJ5IHlvdXIgb3duIFN0YXRlc1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0YXRlL1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZS5qcyIsIi8qKlxyXG4qIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiogQGNvcHlyaWdodCAgICAyMDE2IFBob3RvbiBTdG9ybSBMdGQuXHJcbiogQGxpY2Vuc2UgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9saWNlbnNlLnR4dHxNSVQgTGljZW5zZX1cclxuKi9cclxuXHJcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XHJcbnZhciBOT09QID0gcmVxdWlyZSgnLi4vdXRpbHMvTk9PUCcpO1xyXG52YXIgU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XHJcbnZhciBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MnKTtcclxudmFyIFN5c3RlbXMgPSByZXF1aXJlKCcuL1N5c3RlbXMnKTtcclxudmFyIEdldE9iamVjdFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvR2V0T2JqZWN0VmFsdWUnKTtcclxuXHJcbi8qKlxyXG4qIFRoZSBTdGF0ZSBNYW5hZ2VyIGlzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nLCBzZXR0aW5nIHVwIGFuZCBzd2l0Y2hpbmcgZ2FtZSBzdGF0ZXMuXHJcbipcclxuKiBAY2xhc3MgUGhhc2VyLlN0YXRlTWFuYWdlclxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgZ2FtZS5cclxuKi9cclxudmFyIFN0YXRlTWFuYWdlciA9IGZ1bmN0aW9uIChnYW1lLCBzdGF0ZUNvbmZpZylcclxue1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuXHJcbiAgICAvLyAgRXZlcnl0aGluZyBrZXB0IGluIGhlcmVcclxuICAgIHRoaXMua2V5cyA9IHt9O1xyXG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvLyAgT25seSBhY3RpdmUgc3RhdGVzIGFyZSBrZXB0IGluIGhlcmVcclxuICAgIHRoaXMuYWN0aXZlID0gW107XHJcblxyXG4gICAgdGhpcy5fcGVuZGluZyA9IFtdO1xyXG5cclxuICAgIGlmIChzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZUNvbmZpZykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlQ29uZmlnLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgVGhlIGkgPT09IDAgcGFydCBqdXN0IHN0YXJ0cyB0aGUgZmlyc3QgU3RhdGUgZ2l2ZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlQ29uZmlnW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogKGkgPT09IDApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZUNvbmZpZyxcclxuICAgICAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5TdGF0ZU1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RhdGVNYW5hZ2VyO1xyXG5cclxuU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogVGhlIEJvb3QgaGFuZGxlciBpcyBjYWxsZWQgYnkgUGhhc2VyLkdhbWUgd2hlbiBpdCBmaXJzdCBzdGFydHMgdXAuXHJcbiAgICAqIFRoZSByZW5kZXJlciBpcyBhdmFpbGFibGUgYnkgbm93LlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5TdGF0ZU1hbmFnZXIjYm9vdFxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIGJvb3Q6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLm9uUGF1c2UuYWRkKHRoaXMucGF1c2UsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5vblJlc3VtZS5hZGQodGhpcy5yZXN1bWUsIHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmJvb3QnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9wZW5kaW5nLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fcGVuZGluZ1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGVudHJ5LmtleSwgZW50cnkuc3RhdGUsIGVudHJ5LmF1dG9TdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgQ2xlYXIgdGhlIHBlbmRpbmcgbGlzdFxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiAoa2V5LCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoIWtleSkgeyBrZXkgPSAnZGVmYXVsdCc7IH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXkgPSBzdGF0ZUNvbmZpZy5zZXR0aW5ncy5rZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzdGF0ZUNvbmZpZyA9PT0gJ29iamVjdCcgJiYgc3RhdGVDb25maWcuaGFzT3duUHJvcGVydHkoJ2tleScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gc3RhdGVDb25maWcua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEJ5IHRoaXMgcG9pbnQgaXQncyBlaXRoZXIgJ2RlZmF1bHQnIG9yIGV4dHJhY3RlZCBmcm9tIHRoZSBTdGF0ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgYSBTdGF0ZSB3aXRoIGR1cGxpY2F0ZSBrZXk6ICcgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFkZHMgYSBuZXcgU3RhdGUgaW50byB0aGUgU3RhdGVNYW5hZ2VyLiBZb3UgbXVzdCBnaXZlIGVhY2ggU3RhdGUgYSB1bmlxdWUga2V5IGJ5IHdoaWNoIHlvdSdsbCBpZGVudGlmeSBpdC5cclxuICAgICogVGhlIFN0YXRlIGNhbiBiZSBlaXRoZXIgYSBQaGFzZXIuU3RhdGUgb2JqZWN0IChvciBhbiBvYmplY3QgdGhhdCBleHRlbmRzIGl0KSwgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCBvciBhIGZ1bmN0aW9uLlxyXG4gICAgKiBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuIGEgbmV3IHN0YXRlIG9iamVjdCB3aWxsIGJlIGNyZWF0ZWQgYnkgY2FsbGluZyBpdC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuU3RhdGVNYW5hZ2VyI2FkZFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQSB1bmlxdWUga2V5IHlvdSB1c2UgdG8gcmVmZXJlbmNlIHRoaXMgc3RhdGUsIGkuZS4gXCJNYWluTWVudVwiLCBcIkxldmVsMVwiLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5TdGF0ZXxvYmplY3R8ZnVuY3Rpb259IHN0YXRlICAtIFRoZSBzdGF0ZSB5b3Ugd2FudCB0byBzd2l0Y2ggdG8uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TdGFydD1mYWxzZV0gIC0gSWYgdHJ1ZSB0aGUgU3RhdGUgd2lsbCBiZSBzdGFydGVkIGltbWVkaWF0ZWx5IGFmdGVyIGFkZGluZyBpdC5cclxuICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnLCBhdXRvU3RhcnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCA9PT0gdW5kZWZpbmVkKSB7IGF1dG9TdGFydCA9IGZhbHNlOyB9XHJcblxyXG4gICAgICAgIC8vICBpZiBub3QgYm9vdGVkLCB0aGVuIHB1dCBzdGF0ZSBpbnRvIGEgaG9sZGluZyBwYXR0ZXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuaXNCb290ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX3BlbmRpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVDb25maWcsXHJcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IGF1dG9TdGFydFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZU1hbmFnZXIgbm90IHlldCBib290ZWQsIGFkZGluZyB0byBsaXN0JywgdGhpcy5fcGVuZGluZy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5ID0gdGhpcy5nZXRLZXkoa2V5LCBzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdTdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlQ29uZmlnIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdGVNYW5hZ2VyLmFkZCBmcm9tIGluc3RhbmNlJywga2V5KTtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbUluc3RhbmNlKGtleSwgc3RhdGVDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RhdGVDb25maWcgPT09ICdvYmplY3QnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBvYmplY3QnLCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGVDb25maWcua2V5ID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlRnJvbU9iamVjdChrZXksIHN0YXRlQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHN0YXRlQ29uZmlnID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlci5hZGQgZnJvbSBmdW5jdGlvbicsIGtleSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVGcm9tRnVuY3Rpb24oa2V5LCBzdGF0ZUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IG5ld1N0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcy5wdXNoKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9TdGFydCB8fCBuZXdTdGF0ZS5zZXR0aW5ncy5hY3RpdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydC5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlU3RhdGVGcm9tSW5zdGFuY2U6IGZ1bmN0aW9uIChrZXksIG5ld1N0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLmtleSA9IGtleTtcclxuXHJcbiAgICAgICAgbmV3U3RhdGUuc3lzLmluaXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXRlRnJhbWVCdWZmZXIobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyb21PYmplY3Q6IGZ1bmN0aW9uIChrZXksIHN0YXRlQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IG5ldyBTdGF0ZShzdGF0ZUNvbmZpZyk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLmdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnN5cy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29uZmlnLnJlbmRlclR5cGUgPT09IENPTlNULldFQkdMKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGF0ZUZyYW1lQnVmZmVyKG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHVwQ2FsbGJhY2tzKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVN0YXRlRnJvbUZ1bmN0aW9uOiBmdW5jdGlvbiAoa2V5LCBzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgc3RhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlIGluc3RhbmNlb2YgU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUZyb21JbnN0YW5jZShrZXksIG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuXHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKG5ld1N0YXRlLCBrZXkpO1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMgPSBuZXcgU3lzdGVtcyhuZXdTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zeXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb25maWcucmVuZGVyVHlwZSA9PT0gQ09OU1QuV0VCR0wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhdGVGcmFtZUJ1ZmZlcihuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICBEZWZhdWx0IHJlcXVpcmVkIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR1cENhbGxiYWNrcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR1cENhbGxiYWNrczogZnVuY3Rpb24gKG5ld1N0YXRlLCBzdGF0ZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RhdGVDb25maWcgPT09IHVuZGVmaW5lZCkgeyBzdGF0ZUNvbmZpZyA9IG5ld1N0YXRlOyB9XHJcblxyXG4gICAgICAgIC8vICBFeHRyYWN0IGNhbGxiYWNrcyBvciBzZXQgTk9PUFxyXG5cclxuICAgICAgICBuZXdTdGF0ZS5pbml0ID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdpbml0JywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucHJlbG9hZCA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlbG9hZCcsIE5PT1ApO1xyXG4gICAgICAgIG5ld1N0YXRlLmNyZWF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAnY3JlYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUuc2h1dGRvd24gPSBHZXRPYmplY3RWYWx1ZShzdGF0ZUNvbmZpZywgJ3NodXRkb3duJywgTk9PUCk7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLnByZVVwZGF0ZSA9IEdldE9iamVjdFZhbHVlKHN0YXRlQ29uZmlnLCAncHJlVXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUudXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICd1cGRhdGUnLCBOT09QKTtcclxuICAgICAgICBuZXdTdGF0ZS5wb3N0VXBkYXRlID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdwb3N0VXBkYXRlJywgTk9PUCk7XHJcbiAgICAgICAgbmV3U3RhdGUucmVuZGVyID0gR2V0T2JqZWN0VmFsdWUoc3RhdGVDb25maWcsICdyZW5kZXInLCBOT09QKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTdGF0ZUZyYW1lQnVmZmVyOiBmdW5jdGlvbiAobmV3U3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS5zZXR0aW5ncy54O1xyXG4gICAgICAgIHZhciB5ID0gbmV3U3RhdGUuc2V0dGluZ3MueTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnNldHRpbmdzLndpZHRoID0gdGhpcy5nYW1lLmNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZS5zZXR0aW5ncy5oZWlnaHQgPT09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBuZXdTdGF0ZS5zZXR0aW5ncy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gbmV3U3RhdGUuc2V0dGluZ3MuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBuZXdTdGF0ZS5zeXMuZmJvID0gdGhpcy5nYW1lLnJlbmRlcmVyLmNyZWF0ZUZCTyhuZXdTdGF0ZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWN0aXZlU3RhdGVJbmRleDogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVbaV0uc3RhdGUgPT09IHN0YXRlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHN0YXRlICYmIHN0YXRlLnNldHRpbmdzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZS5pbmRleE9mKHN0YXRlKSAhPT0gLTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICAvLyAgaWYgbm90IGJvb3RlZCwgdGhlbiBwdXQgc3RhdGUgaW50byBhIGhvbGRpbmcgcGF0dGVyblxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmlzQm9vdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXRlTWFuYWdlciBub3QgeWV0IGJvb3RlZCwgc2V0dGluZyBhdXRvU3RhcnQgb24gcGVuZGluZyBsaXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3BlbmRpbmcubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX3BlbmRpbmdbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmF1dG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEFscmVhZHkgc3RhcnRlZD8gTm90aGluZyBtb3JlIHRvIGRvIGhlcmUgLi4uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKGtleSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuc2V0dGluZ3MuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICArIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5pdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaW5pdC5jYWxsKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnByZWxvYWQgJiYgc3RhdGUuc3lzLmxvYWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5sb2FkLnJlc2V0KHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnByZWxvYWQuY2FsbChzdGF0ZSwgdGhpcy5nYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgSXMgdGhlIGxvYWRlciBlbXB0eT9cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zeXMubG9hZC50b3RhbFF1ZXVlZEZpbGVzKCkgPT09IDAgJiYgc3RhdGUuc3lzLmxvYWQudG90YWxRdWV1ZWRQYWNrcygpID09PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbXB0eSBxdWV1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHN0YXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBTdGFydCB0aGUgbG9hZGVyIGdvaW5nIGFzIHdlIGhhdmUgc29tZXRoaW5nIGluIHRoZSBxdWV1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLmxvYWRDb21wbGV0ZSwgdGhpcywgMCwgc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zeXMubG9hZC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHByZWxvYWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgTm8gcHJlbG9hZD8gVGhlbiB0aGVyZSB3YXMgbm90aGluZyB0byBsb2FkIGVpdGhlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENyZWF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkQ29tcGxldGU6IGZ1bmN0aW9uIChzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZENvbXBsZXRlJyk7XHJcblxyXG4gICAgICAgIC8vICBNYWtlIHN1cmUgdG8gZG8gbG9hZC11cGRhdGUgb25lIGxhc3QgdGltZSBiZWZvcmUgc3RhdGUgaXMgc2V0IHRvIF9jcmVhdGVkXHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eSgnbG9hZFVwZGF0ZScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUubG9hZFVwZGF0ZS5jYWxsKHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGUoc3RhdGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydENyZWF0ZTogZnVuY3Rpb24gKHN0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGF0ZS5jcmVhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZS5jcmVhdGUuY2FsbChzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgSW5zZXJ0IGF0IHRoZSBjb3JyZWN0IGluZGV4LCBvciBpdCBqdXN0IGFsbCBnb2VzIHdyb25nIDopXHJcblxyXG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRTdGF0ZUluZGV4KHN0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUucHVzaCh7IGluZGV4OiBpLCBzdGF0ZTogc3RhdGUgfSk7XHJcblxyXG4gICAgICAgIC8vICBTb3J0IHRoZSAnYWN0aXZlJyBhcnJheSBiYXNlZCBvbiB0aGUgaW5kZXggcHJvcGVydHlcclxuICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgc3RhdGUuc3lzLnVwZGF0ZXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXVzZTogZnVuY3Rpb24gKGtleSlcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZVN0YXRlSW5kZXgoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKGtleSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zZXR0aW5ncy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5zb3J0KHRoaXMuc29ydFN0YXRlcy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNvcnRTdGF0ZXM6IGZ1bmN0aW9uIChzdGF0ZUEsIHN0YXRlQilcclxuICAgIHtcclxuICAgICAgICAvLyAgU29ydCBkZXNjZW5kaW5nXHJcbiAgICAgICAgaWYgKHN0YXRlQS5pbmRleCA8IHN0YXRlQi5pbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVBLmluZGV4ID4gc3RhdGVCLmluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gIFNlZSBpZiB3ZSBjYW4gcmVkdWNlIHRoaXMgZG93biB0byBqdXN0IHVwZGF0ZSBhbmQgcmVuZGVyXHJcblxyXG4gICAgc3RlcDogZnVuY3Rpb24gKHRpbWVzdGFtcClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5hY3RpdmVbaV0uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3lzLm1haW5sb29wLnJ1bm5pbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN5cy5tYWlubG9vcC5zdGVwKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qXHJcbiAgICBwcmVVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucHJlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnByZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmFjdGl2ZVtpXS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vICBJbnZva2UgU3RhdGUgTWFpbiBMb29wIGhlcmUgLSB1cGRhdGluZyBhbGwgb2YgaXRzIHN5c3RlbXMgKHR3ZWVucywgcGh5c2ljcywgZXRjKVxyXG5cclxuICAgICAgICAgICAgLy8gIFRoaXMgc2hvdWxkbid0IGJlIGNhbGxlZCBpZiB0aGUgU3RhdGUgaXMgc3RpbGwgbG9hZGluZ1xyXG4gICAgICAgICAgICAvLyAgSGF2ZSBhIFN0YXRlLlNUQVRVUyBjb25zdCBpbiB0aGUgU2V0dGluZ3MsIGRpY3RhdGluZyB3aGF0IGlzIGdvaW5nIG9uXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3RVcGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3lzLmNoaWxkcmVuLmxpc3RbY10ucG9zdFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5wb3N0VXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuYWN0aXZlW2ldLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgLy8gIENhbiBwdXQgYWxsIGtpbmRzIG9mIG90aGVyIGNoZWNrcyBpbiBoZXJlLCBsaWtlIE1haW5Mb29wLCBGUFMsIGV0Yy5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZXR0aW5ncy52aXNpYmxlIHx8IHN0YXRlLnN5cy5jb2xvci5hbHBoYSA9PT0gMCB8fCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIucmVuZGVyKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKi9cclxuXHJcbiAgICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKHJlbmRlcmVyLCBzdGF0ZSwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gIFBvcHVsYXRlcyB0aGUgZGlzcGxheSBsaXN0XHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBzdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHN0YXRlLnN5cy5jaGlsZHJlbi5saXN0W2NdO1xyXG5cclxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKHJlbmRlcmVyLCBjaGlsZCwgaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9TdGF0ZU1hbmFnZXIuanMiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG52YXIgRmFjdG9yeUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2dhbWVvYmplY3RzL0ZhY3RvcnlDb250YWluZXInKTtcclxuXHJcbi8qKlxyXG4qIFRoZSBHYW1lT2JqZWN0IEZhY3RvcnkgaXMgYSBxdWljayB3YXkgdG8gY3JlYXRlIG1hbnkgY29tbW9uIGdhbWUgb2JqZWN0cy4gVGhlIEZhY3RvcnkgaXMgb3duZWQgYnkgdGhlIFN0YXRlLlxyXG4qXHJcbiogQGNsYXNzIFBoYXNlci5HYW1lT2JqZWN0LkZhY3RvcnlcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXHJcbiovXHJcblxyXG52YXIgR2FtZU9iamVjdENyZWF0b3IgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLlN0YXRlfSBzdGF0ZSAtIFRoZSBTdGF0ZSB0aGF0IG93bnMgdGhpcyBGYWN0b3J5XHJcbiAgICAqIEBwcm90ZWN0ZWRcclxuICAgICovXHJcbiAgICBzdGF0ZTogbnVsbFxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKHN0YXRlKVxyXG57XHJcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgR2FtZU9iamVjdENyZWF0b3IgaW5zdGFuY2UgZm9yIFN0YXRlJywgc3RhdGUpO1xyXG5cclxuICAgIEdhbWVPYmplY3RDcmVhdG9yLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxyXG5cclxuICAgIEZhY3RvcnlDb250YWluZXIubG9hZChHYW1lT2JqZWN0Q3JlYXRvciwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiBHYW1lT2JqZWN0Q3JlYXRvcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RDcmVhdG9yLmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxudmFyIEZhY3RvcnlDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9nYW1lb2JqZWN0cy9GYWN0b3J5Q29udGFpbmVyJyk7XHJcblxyXG4vKipcclxuKiBUaGUgR2FtZU9iamVjdCBGYWN0b3J5IGlzIGEgcXVpY2sgd2F5IHRvIGNyZWF0ZSBtYW55IGNvbW1vbiBnYW1lIG9iamVjdHMuIFRoZSBGYWN0b3J5IGlzIG93bmVkIGJ5IHRoZSBTdGF0ZS5cclxuKlxyXG4qIEBjbGFzcyBQaGFzZXIuR2FtZU9iamVjdC5GYWN0b3J5XHJcbiogQGNvbnN0cnVjdG9yXHJcbiogQHBhcmFtIHtQaGFzZXIuR2FtZX0gZ2FtZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgcnVubmluZyBnYW1lLlxyXG4qL1xyXG5cclxudmFyIEdhbWVPYmplY3RGYWN0b3J5ID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGUgLSBUaGUgU3RhdGUgdGhhdCBvd25zIHRoaXMgRmFjdG9yeVxyXG4gICAgKiBAcHJvdGVjdGVkXHJcbiAgICAqL1xyXG4gICAgc3RhdGU6IG51bGxcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0IChzdGF0ZSlcclxue1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIEdhbWVPYmplY3RGYWN0b3J5IGluc3RhbmNlIGZvciBTdGF0ZScpO1xyXG5cclxuICAgIEdhbWVPYmplY3RGYWN0b3J5LnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLy8gICBMb2FkIHRoZSBmYWN0b3JpZXMgaW50byB0aGlzIE9iamVjdFxyXG5cclxuICAgIHJldHVybiBGYWN0b3J5Q29udGFpbmVyLmxvYWQoR2FtZU9iamVjdEZhY3RvcnksIHRydWUpO1xyXG5cclxuICAgIC8vIHJldHVybiBHYW1lT2JqZWN0RmFjdG9yeTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdGF0ZS9zeXN0ZW1zL0dhbWVPYmplY3RGYWN0b3J5LmpzIiwiLyoqXHJcbiogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuKiBAY29weXJpZ2h0ICAgIDIwMTYgUGhvdG9uIFN0b3JtIEx0ZC5cclxuKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4qL1xyXG5cclxuLy8gTXkgdGhhbmtzIHRvIElzYWFjIFN1a2luIGZvciBjcmVhdGluZyBNYWluTG9vcC5qcywgb24gd2hpY2ggbG90cyBvZiB0aGlzIGlzIGJhc2VkLlxyXG5cclxudmFyIE1haW5Mb29wID0gZnVuY3Rpb24gKHN0YXRlLCBmcmFtZXJhdGUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgKiBAcHJvcGVydHkge1BoYXNlci5TdGF0ZX0gc3RhdGVcclxuICAgICovXHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBwcm9wZXJ0eSB7UGhhc2VyLkdhbWV9IGdhbWUgLSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IHJ1bm5pbmcgR2FtZS5cclxuICAgICovXHJcbiAgICB0aGlzLmdhbWUgPSBzdGF0ZS5nYW1lO1xyXG5cclxuICAgIC8vIFRoZSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0byBzaW11bGF0ZSBlYWNoIHRpbWUgdXBkYXRlKCkgcnVucy5cclxuICAgIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIHRoaXMucGh5c2ljc1N0ZXAgPSAxIC8gZnJhbWVyYXRlO1xyXG5cclxuICAgIC8vIFRoZSBjdW11bGF0aXZlIGFtb3VudCBvZiBpbi1hcHAgdGltZSB0aGF0IGhhc24ndCBiZWVuIHNpbXVsYXRlZCB5ZXQuXHJcbiAgICAvLyBTZWUgdGhlIGNvbW1lbnRzIGluc2lkZSBhbmltYXRlKCkgZm9yIGRldGFpbHMuXHJcbiAgICB0aGlzLmZyYW1lRGVsdGEgPSAwO1xyXG5cclxuICAgIC8vIFRoZSB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzIG9mIHRoZSBsYXN0IHRpbWUgdGhlIG1haW4gbG9vcCB3YXMgcnVuLlxyXG4gICAgLy8gVXNlZCB0byBjb21wdXRlIHRoZSB0aW1lIGVsYXBzZWQgYmV0d2VlbiBmcmFtZXMuXHJcbiAgICB0aGlzLmxhc3RGcmFtZVRpbWVNcyA9IDA7XHJcblxyXG4gICAgLy8gQW4gZXhwb25lbnRpYWwgbW92aW5nIGF2ZXJhZ2Ugb2YgdGhlIGZyYW1lcyBwZXIgc2Vjb25kLlxyXG4gICAgdGhpcy5mcHMgPSA2MDtcclxuXHJcbiAgICAvLyBUaGUgdGltZXN0YW1wIChpbiBtaWxsaXNlY29uZHMpIG9mIHRoZSBsYXN0IHRpbWUgdGhlIGBmcHNgIG1vdmluZ1xyXG4gICAgLy8gYXZlcmFnZSB3YXMgdXBkYXRlZC5cclxuICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBmcmFtZXMgZGVsaXZlcmVkIGluIHRoZSBjdXJyZW50IHNlY29uZC5cclxuICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB1cGRhdGUoKSBpcyBjYWxsZWQgaW4gYSBnaXZlbiBmcmFtZS4gVGhpcyBpcyBvbmx5XHJcbiAgICAvLyByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXMgaGVsZCBleHRlcm5hbGx5IHNvIHRoYXRcclxuICAgIC8vIHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uIGV2ZXJ5IHRpbWUgdGhlIG1haW5cclxuICAgIC8vIGxvb3AgcnVucy5cclxuICAgIHRoaXMubnVtVXBkYXRlU3RlcHMgPSAwO1xyXG5cclxuICAgIC8vIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IG11c3QgcGFzcyBzaW5jZSB0aGUgbGFzdFxyXG4gICAgLy8gZnJhbWUgd2FzIGV4ZWN1dGVkIGJlZm9yZSBhbm90aGVyIGZyYW1lIGNhbiBiZSBleGVjdXRlZC4gVGhlXHJcbiAgICAvLyBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlIGNhcHMgdGhlIEZQUyAodGhlIGRlZmF1bHQgb2YgemVybyBtZWFucyB0aGVyZSBpc1xyXG4gICAgLy8gbm8gY2FwKS5cclxuICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDA7XHJcblxyXG4gICAgLy8gV2hldGhlciB0aGUgbWFpbiBsb29wIGlzIHJ1bm5pbmcuXHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBgdHJ1ZWAgaWYgYE1haW5Mb29wLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZCBhbmQgdGhlIG1vc3QgcmVjZW50IHRpbWUgaXRcclxuICAgIC8vIHdhcyBjYWxsZWQgaGFzIG5vdCBiZWVuIGZvbGxvd2VkIGJ5IGEgY2FsbCB0byBgTWFpbkxvb3Auc3RvcCgpYC4gVGhpcyBpc1xyXG4gICAgLy8gZGlmZmVyZW50IHRoYW4gYHJ1bm5pbmdgIGJlY2F1c2UgdGhlcmUgaXMgYSBkZWxheSBvZiBhIGZldyBtaWxsaXNlY29uZHNcclxuICAgIC8vIGFmdGVyIGBNYWluTG9vcC5zdGFydCgpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhcHBsaWNhdGlvbiBpcyBjb25zaWRlcmVkXHJcbiAgICAvLyBcInJ1bm5pbmcuXCIgVGhpcyBkZWxheSBpcyBkdWUgdG8gd2FpdGluZyBmb3IgdGhlIG5leHQgZnJhbWUuXHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBXaGV0aGVyIHRoZSBzaW11bGF0aW9uIGhhcyBmYWxsZW4gdG9vIGZhciBiZWhpbmQgcmVhbCB0aW1lLlxyXG4gICAgLy8gU3BlY2lmaWNhbGx5LCBgcGFuaWNgIHdpbGwgYmUgc2V0IHRvIGB0cnVlYCBpZiB0b28gbWFueSB1cGRhdGVzIG9jY3VyIGluXHJcbiAgICAvLyBvbmUgZnJhbWUuIFRoaXMgaXMgb25seSByZWxldmFudCBpbnNpZGUgb2YgYW5pbWF0ZSgpLCBidXQgYSByZWZlcmVuY2UgaXNcclxuICAgIC8vIGhlbGQgZXh0ZXJuYWxseSBzbyB0aGF0IHRoaXMgdmFyaWFibGUgaXMgbm90IG1hcmtlZCBmb3IgZ2FyYmFnZVxyXG4gICAgLy8gY29sbGVjdGlvbiBldmVyeSB0aW1lIHRoZSBtYWluIGxvb3AgcnVucy5cclxuICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcclxufTtcclxuXHJcbk1haW5Mb29wLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1haW5Mb29wO1xyXG5cclxuTWFpbkxvb3AucHJvdG90eXBlID0ge1xyXG5cclxuICAgIHNldE1heEZQUzogZnVuY3Rpb24gKGZwcylcclxuICAgIHtcclxuICAgICAgICBpZiAoZnBzID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRnJhbWVEZWxheSA9IDEwMDAgLyBmcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNYXhGUFM6IGZ1bmN0aW9uICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDAgLyB0aGlzLm1pbkZyYW1lRGVsYXk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0RnJhbWVEZWx0YTogZnVuY3Rpb24gKClcclxuICAgIHtcclxuICAgICAgICB2YXIgb2xkRnJhbWVEZWx0YSA9IHRoaXMuZnJhbWVEZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbHRhID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9sZEZyYW1lRGVsdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0RnBzVXBkYXRlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICB0aW1lc3RhbXAgPSBET01IaWdoUmVzVGltZVN0YW1wXHJcbiAgICBzdGVwOiBmdW5jdGlvbiAodGltZXN0YW1wKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFRocm90dGxlIHRoZSBmcmFtZSByYXRlIChpZiBtaW5GcmFtZURlbGF5IGlzIHNldCB0byBhIG5vbi16ZXJvIHZhbHVlIGJ5XHJcbiAgICAgICAgLy8gYE1haW5Mb29wLnNldE1heEFsbG93ZWRGUFMoKWApLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPCB0aGlzLmxhc3RGcmFtZVRpbWVNcyArIHRoaXMubWluRnJhbWVEZWxheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyYW1lRGVsdGEgaXMgdGhlIGN1bXVsYXRpdmUgYW1vdW50IG9mIGluLWFwcCB0aW1lIHRoYXQgaGFzbid0IGJlZW5cclxuICAgICAgICAvLyBzaW11bGF0ZWQgeWV0LiBBZGQgdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgZnJhbWUuIFdlIG5lZWQgdG8gdHJhY2sgdG90YWxcclxuICAgICAgICAvLyBub3QteWV0LXNpbXVsYXRlZCB0aW1lIChhcyBvcHBvc2VkIHRvIGp1c3QgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGVcclxuICAgICAgICAvLyBsYXN0IGZyYW1lKSBiZWNhdXNlIG5vdCBhbGwgYWN0dWFsbHkgZWxhcHNlZCB0aW1lIGlzIGd1YXJhbnRlZWQgdG8gYmVcclxuICAgICAgICAvLyBzaW11bGF0ZWQgZWFjaCBmcmFtZS4gU2VlIHRoZSBjb21tZW50cyBiZWxvdyBmb3IgZGV0YWlscy5cclxuICAgICAgICB0aGlzLmZyYW1lRGVsdGEgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0RnJhbWVUaW1lTXM7XHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lTXMgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgIC8vIFJ1biBhbnkgdXBkYXRlcyB0aGF0IGFyZSBub3QgZGVwZW5kZW50IG9uIHRpbWUgaW4gdGhlIHNpbXVsYXRpb24uXHJcblxyXG4gICAgICAgIC8vICBIZXJlIHdlJ2xsIG5lZWQgdG8gcnVuIHRoaW5ncyBsaWtlIHR3ZWVuLnVwZGF0ZSwgaW5wdXQudXBkYXRlLCBldGMuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zeXMuYmVnaW4odGltZXN0YW1wLCB0aGlzLmZyYW1lRGVsdGEpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGVzdGltYXRlIG9mIHRoZSBmcmFtZSByYXRlLCBgZnBzYC4gRXZlcnkgc2Vjb25kLCB0aGUgbnVtYmVyXHJcbiAgICAgICAgLy8gb2YgZnJhbWVzIHRoYXQgb2NjdXJyZWQgaW4gdGhhdCBzZWNvbmQgYXJlIGluY2x1ZGVkIGluIGFuIGV4cG9uZW50aWFsXHJcbiAgICAgICAgLy8gbW92aW5nIGF2ZXJhZ2Ugb2YgYWxsIGZyYW1lcyBwZXIgc2Vjb25kLCB3aXRoIGFuIGFscGhhIG9mIDAuMjUuIFRoaXNcclxuICAgICAgICAvLyBtZWFucyB0aGF0IG1vcmUgcmVjZW50IHNlY29uZHMgYWZmZWN0IHRoZSBlc3RpbWF0ZWQgZnJhbWUgcmF0ZSBtb3JlIHRoYW5cclxuICAgICAgICAvLyBvbGRlciBzZWNvbmRzLlxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPiB0aGlzLmxhc3RGcHNVcGRhdGUgKyAxMDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IGV4cG9uZW50aWFsIG1vdmluZyBhdmVyYWdlIHdpdGggYW4gYWxwaGEgb2YgMC4yNS5cclxuICAgICAgICAgICAgLy8gVXNpbmcgY29uc3RhbnRzIGlubGluZSBpcyBva2F5IGhlcmUuXHJcbiAgICAgICAgICAgIHRoaXMuZnBzID0gMC4yNSAqIHRoaXMuZnJhbWVzVGhpc1NlY29uZCArIDAuNzUgKiB0aGlzLmZwcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZwc1VwZGF0ZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNUaGlzU2Vjb25kID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzVGhpc1NlY29uZCsrO1xyXG5cclxuICAgICAgICB0aGlzLm51bVVwZGF0ZVN0ZXBzID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5mcmFtZURlbHRhID49IHN0ZXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLnRpbWVzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZShzdGVwLCB0aGlzLnBoeXNpY3NTdGVwKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZXhpc3RzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZShzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIERldiBsZXZlbCBjYWxsYmFja1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZShzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVEZWx0YSAtPSB0aGlzLnRpbWVzdGVwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5udW1VcGRhdGVTdGVwcyA+PSAyNDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnByZVJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnN5cy51cGRhdGVzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNldHRpbmdzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5zeXMuY29sb3IuYWxwaGEgIT09IDAgJiYgdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YXRlLCB0aGlzLmZyYW1lRGVsdGEgLyB0aGlzLnRpbWVzdGVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZXMuc3RvcCgpO1xyXG5cclxuICAgICAgICAvLyBSdW4gYW55IHVwZGF0ZXMgdGhhdCBhcmUgbm90IGRlcGVuZGVudCBvbiB0aW1lIGluIHRoZSBzaW11bGF0aW9uLlxyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLmVuZCh0aGlzLmZwcywgdGhpcy5wYW5pYyk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuaWMgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHRpbWVzdGVwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc3lzLnVwZGF0ZSh0aW1lc3RlcCk7XHJcblxyXG4gICAgICAgIHZhciBjO1xyXG4gICAgICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBEZXYgbGV2ZWwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aW1lc3RlcCk7XHJcblxyXG4gICAgICAgIGZvciAoYyA9IDA7IGMgPCB0aGlzLnN0YXRlLnN5cy5jaGlsZHJlbi5saXN0Lmxlbmd0aDsgYysrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zdGF0ZS5zeXMuY2hpbGRyZW4ubGlzdFtjXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5leGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZSh0aW1lc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKi9cclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Mb29wO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdGF0ZS9zeXN0ZW1zL01haW5Mb29wLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBAYXV0aG9yICAgICAgIFJpY2hhcmQgRGF2ZXkgPHJpY2hAcGhvdG9uc3Rvcm0uY29tPlxyXG4qIEBjb3B5cmlnaHQgICAgMjAxNiBQaG90b24gU3Rvcm0gTHRkLlxyXG4qIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiovXHJcblxyXG4vKipcclxuKiBEaXJ0eSEgTWFuYWdlclxyXG4qXHJcbiogQGNsYXNzXHJcbiovXHJcbnZhciBVcGRhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKHN0YXRlKVxyXG57XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5nYW1lID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuXHJcbiAgICAvLyB0aGlzLmkgPSAxO1xyXG5cclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLnByb2Nlc3NlZCA9IDA7XHJcbn07XHJcblxyXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZGF0ZU1hbmFnZXI7XHJcblxyXG5VcGRhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pLCAnVXBkYXRlTWFuYWdlci5zdG9wJywgdGhpcy5wcm9jZXNzZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pKys7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMubGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChsZW4gPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmksICdVcGRhdGVNYW5hZ2VyLnN0YXJ0JywgbGVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEJlY2F1c2UgaXQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCAoYXMgYSBjaGlsZCBvZiBhbm90aGVyIFRyYW5zZm9ybSB0aGF0IHdhcyB1cGRhdGVkKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldICYmIHRoaXMubGlzdFtpXS5fZGlydHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VkKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKHRyYW5zZm9ybSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXBkYXRlTWFuYWdlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3RhdGUvc3lzdGVtcy9VcGRhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZDovd2FtcC93d3cvcGhhc2VyL3YzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJudWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9waGFzZXIuanMiLCJyZXF1aXJlKCcuL3BvbHlmaWxscycpO1xyXG5cclxudmFyIGJvb3QgPSByZXF1aXJlKCcuL2Jvb3QnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYm9vdDtcclxuXHJcbmdsb2JhbC5QaGFzZXIgPSBib290O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9waGFzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=