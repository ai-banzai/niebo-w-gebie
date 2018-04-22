webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/img/bg-cta.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-cta.36ddbb2de498313fdacd.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/bg-light.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-light.d5afe236bb6175e4d572.png";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/css/new-age.min.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Start Bootstrap - New Age v3.3.7 (http://startbootstrap.com/template-overviews/new-age)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n.heading-font {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\n.body-font {\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif';\n}\n\n.alt-font {\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif';\n}\n\na {\n  transition: all 0.35s;\n  color: #fdcc52;\n}\n\na:hover,\na:focus {\n  color: #fcbd20;\n}\n\nhr {\n  max-width: 100px;\n  margin: 25px auto 0;\n  border-width: 1px;\n  border-color: rgba(34, 34, 34, 0.1);\n}\n\nhr.light {\n  border-color: white;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\n.navbar-default {\n  background-color: white;\n  border-color: rgba(34, 34, 34, 0.05);\n  transition: all 0.35s;\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\n.navbar-default .navbar-header .navbar-brand {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n  color: #fdcc52;\n}\n\n.navbar-default .navbar-header .navbar-brand:hover,\n.navbar-default .navbar-header .navbar-brand:focus {\n  color: #fcbd20;\n}\n\n.navbar-default .navbar-header .navbar-toggle {\n  font-size: 12px;\n  color: #222222;\n  padding: 8px 10px;\n}\n\n.navbar-default .nav > li > a {\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 11px;\n}\n\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:focus {\n  color: #222222;\n}\n\n.navbar-default .nav > li > a:hover,\n.navbar-default .nav > li > a:focus:hover {\n  color: #fdcc52;\n}\n\n.navbar-default .nav > li.active > a,\n.navbar-default .nav > li.active > a:focus {\n  color: #fdcc52 !important;\n  background-color: transparent;\n}\n\n.navbar-default .nav > li.active > a:hover,\n.navbar-default .nav > li.active > a:focus:hover {\n  background-color: transparent;\n}\n\n@media (min-width: 768px) {\n  .navbar-default {\n    background-color: transparent;\n    border-color: transparent;\n  }\n\n  .navbar-default .navbar-header .navbar-brand {\n    color: rgba(255, 255, 255, 0.7);\n  }\n\n  .navbar-default .navbar-header .navbar-brand:hover,\n  .navbar-default .navbar-header .navbar-brand:focus {\n    color: white;\n  }\n\n  .navbar-default .nav > li > a,\n  .navbar-default .nav > li > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n  }\n\n  .navbar-default .nav > li > a:hover,\n  .navbar-default .nav > li > a:focus:hover {\n    color: white;\n  }\n\n  .navbar-default.affix {\n    background-color: white;\n    border-color: rgba(34, 34, 34, 0.1);\n  }\n\n  .navbar-default.affix .navbar-header .navbar-brand {\n    color: #222222;\n  }\n\n  .navbar-default.affix .navbar-header .navbar-brand:hover,\n  .navbar-default.affix .navbar-header .navbar-brand:focus {\n    color: #fdcc52;\n  }\n\n  .navbar-default.affix .nav > li > a,\n  .navbar-default.affix .nav > li > a:focus {\n    color: #222222;\n  }\n\n  .navbar-default.affix .nav > li > a:hover,\n  .navbar-default.affix .nav > li > a:focus:hover {\n    color: #fdcc52;\n  }\n}\n\nheader {\n  position: relative;\n  width: 100%;\n  min-height: auto;\n  overflow-y: hidden;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg-light.png")) + "), #141414;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg-light.png")) + "), linear-gradient(to left, #293030, #73b2e6);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: white;\n}\n\nheader .header-content {\n  text-align: center;\n  padding: 150px 0 50px;\n  position: relative;\n}\n\nheader .header-content .header-content-inner {\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n}\n\nheader .header-content .header-content-inner h1 {\n  margin-top: 0;\n  margin-bottom: 30px;\n  font-size: 30px;\n}\n\nheader .header-content .header-content-inner .list-badges {\n  margin-bottom: 25px;\n}\n\nheader .header-content .header-content-inner .list-badges img {\n  height: 50px;\n  margin-bottom: 25px;\n}\n\nheader .device-container {\n  max-width: 300px;\n  margin: 0 auto 100px;\n}\n\nheader .device-container .screen img {\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  header {\n    min-height: 100%;\n  }\n\n  header .header-content {\n    text-align: left;\n    padding: 0;\n    height: 100vh;\n  }\n\n  header .header-content .header-content-inner {\n    max-width: none;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  header .header-content .header-content-inner h1 {\n    font-size: 35px;\n  }\n\n  header .device-container {\n    max-width: none;\n    max-height: calc(0vh);\n    margin: 100px auto 0;\n  }\n}\n\n@media (min-width: 992px) {\n  header .header-content .header-content-inner h1 {\n    font-size: 50px;\n  }\n}\n\nsection {\n  padding: 100px 0;\n}\n\nsection h2 {\n  font-size: 50px;\n}\n\nsection.download {\n  padding: 150px 0;\n  position: relative;\n}\n\nsection.download h2 {\n  margin-top: 0;\n  font-size: 50px;\n}\n\nsection.download .badges .badge-link {\n  display: block;\n  margin-bottom: 25px;\n}\n\nsection.download .badges .badge-link:last-child {\n  margin-bottom: 0;\n}\n\nsection.download .badges .badge-link img {\n  height: 60px;\n}\n\n@media (min-width: 768px) {\n  section.download .badges .badge-link {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  section.download h2 {\n    font-size: 70px;\n  }\n}\n\nsection.features .section-heading {\n  margin-bottom: 100px;\n}\n\nsection.features .section-heading h2 {\n  margin-top: 0;\n}\n\nsection.features .section-heading p {\n  margin-bottom: 0;\n}\n\nsection.features .device-container,\nsection.features .feature-item {\n  max-width: 300px;\n  margin: 0 auto;\n}\n\nsection.features .device-container {\n  margin-bottom: 100px;\n}\n\n@media (min-width: 992px) {\n  section.features .device-container {\n    margin-bottom: 0;\n  }\n}\n\nsection.features .feature-item {\n  text-align: center;\n  margin-bottom: 100px;\n}\n\nsection.features .feature-item h3 {\n  font-size: 30px;\n}\n\nsection.features .feature-item i {\n  font-size: 80px;\n  background: linear-gradient(to left, #7b4397, #dc2430);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n@media (min-width: 992px) {\n  section.features .device-container,\n  section.features .feature-item {\n    max-width: none;\n  }\n}\n\nsection.cta {\n  position: relative;\n  background-size: cover;\n  -o-background-size: cover;\n  background-position: center;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg-cta.jpg")) + ");\n  padding: 250px 0;\n}\n\nsection.cta .cta-content {\n  position: relative;\n  z-index: 1;\n}\n\nsection.cta .cta-content h2 {\n  margin-top: 0;\n  margin-bottom: 25px;\n  color: white;\n  max-width: 450px;\n  font-size: 50px;\n}\n\n@media (min-width: 768px) {\n  section.cta .cta-content h2 {\n    font-size: 80px;\n  }\n}\n\nsection.cta .overlay {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nsection.contact {\n  text-align: center;\n}\n\nsection.contact h2 {\n  margin-top: 0;\n  margin-bottom: 25px;\n}\n\nsection.contact h2 i {\n  color: #dd4b39;\n}\n\nsection.contact ul.list-social {\n  margin-bottom: 0;\n}\n\nsection.contact ul.list-social li a {\n  display: block;\n  height: 80px;\n  width: 80px;\n  line-height: 80px;\n  font-size: 40px;\n  border-radius: 100%;\n  color: white;\n}\n\nsection.contact ul.list-social li.social-twitter a {\n  background-color: #1da1f2;\n}\n\nsection.contact ul.list-social li.social-twitter a:hover {\n  background-color: #0d95e8;\n}\n\nsection.contact ul.list-social li.social-facebook a {\n  background-color: #3b5998;\n}\n\nsection.contact ul.list-social li.social-facebook a:hover {\n  background-color: #344e86;\n}\n\nsection.contact ul.list-social li.social-google-plus a {\n  background-color: #dd4b39;\n}\n\nsection.contact ul.list-social li.social-google-plus a:hover {\n  background-color: #d73925;\n}\n\nfooter {\n  background-color: #222222;\n  padding: 25px 0;\n  color: rgba(255, 255, 255, 0.3);\n  text-align: center;\n}\n\nfooter p {\n  font-size: 12px;\n  margin: 0;\n}\n\nfooter ul {\n  margin-bottom: 0;\n}\n\nfooter ul li a {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.3);\n}\n\nfooter ul li a:hover,\nfooter ul li a:focus,\nfooter ul li a:active,\nfooter ul li a.active {\n  text-decoration: none;\n}\n\n.bg-primary {\n  background: #141414;\n\n}\n\n.text-primary {\n  color: #fdcc52;\n}\n\n.no-gutter > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.btn-outline {\n  color: white;\n  border-color: white;\n  border: 1px solid;\n}\n\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active,\n.btn-outline.active {\n  color: white;\n  background-color: #fdcc52;\n  border-color: #fdcc52;\n}\n\n.btn {\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border-radius: 300px;\n}\n\n.btn-xl {\n  padding: 15px 45px;\n  font-size: 11px;\n}\n\n::-moz-selection {\n  color: white;\n  text-shadow: none;\n  background: #222222;\n}\n\n::selection {\n  color: white;\n  text-shadow: none;\n  background: #222222;\n}\n\nimg::-moz-selection {\n  color: white;\n  background: transparent;\n}\n\nimg::selection {\n  color: white;\n  background: transparent;\n}\n\nimg::-moz-selection {\n  color: white;\n  background: transparent;\n}\n\nbody {\n  webkit-tap-highlight-color: #222222;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/css/new-age.min.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[1]);
//# sourceMappingURL=styles.bundle.js.map