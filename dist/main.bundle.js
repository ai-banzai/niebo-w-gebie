webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main-nav></main-nav>\n\n<page-header></page-header>\n\n<page-menu></page-menu>\n\n<!-- <page-download></page-download> -->\n\n<!-- <page-features></page-features> -->\n\n<!-- <page-cta></page-cta> -->\n\n<page-contact></page-contact>\n\n<page-footer></page-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Zamów';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 100
        });
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 50
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__ = __webpack_require__("../../../../../src/app/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_header_page_header_component__ = __webpack_require__("../../../../../src/app/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_download_page_download_component__ = __webpack_require__("../../../../../src/app/page-download/page-download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_features_page_features_component__ = __webpack_require__("../../../../../src/app/page-features/page-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_cta_page_cta_component__ = __webpack_require__("../../../../../src/app/page-cta/page-cta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_contact_page_contact_component__ = __webpack_require__("../../../../../src/app/page-contact/page-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_footer_page_footer_component__ = __webpack_require__("../../../../../src/app/page-footer/page-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_menu_page_menu_component__ = __webpack_require__("../../../../../src/app/page-menu/page-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__["a" /* MainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_download_page_download_component__["a" /* PageDownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_features_page_features_component__["a" /* PageFeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_cta_page_cta_component__["a" /* PageCtaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_contact_page_contact_component__["a" /* PageContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_footer_page_footer_component__["a" /* PageFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_menu_page_menu_component__["a" /* PageMenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n              data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n      </button>\n      <a pageScroll class=\"navbar-brand page-scroll\" href=\"#page-top\">{{ title }}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a pageScroll class=\"page-scroll\" href=\"#menu\">Menu</a>\n        </li>\n        <!-- <li>\n          <a pageScroll class=\"page-scroll\" href=\"#features\">Features</a>\n        </li> -->\n        <li>\n          <a pageScroll class=\"page-scroll\" href=\"#contact\">Kontakt</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
        this.title = "Zamów";
    }
    MainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-nav',
            template: __webpack_require__("../../../../../src/app/main-nav/main-nav.component.html")
        })
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-contact/page-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact bg-primary\">\n  <h3>My Google Maps Demo</h3>\n      <div id=\"map\"></div>\n      <script>\n        function initMap() {\n          var uluru = {lat: -25.363, lng: 131.044};\n          var map = new google.maps.Map(document.getElementById('map'), {\n            zoom: 4,\n            center: uluru\n          });\n          var marker = new google.maps.Marker({\n            position: uluru,\n            map: map\n          });\n        }\n      </script>\n      <script async defer\n      src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAp7Du8u0PNxuX7ZiY3b4WPVIrcTMJ87Y8&callback=initMap\">\n      </script>\n\n\n  <div class=\"container\">\n    <h2>We <i class=\"fa fa-heart\"></i> new friends!</h2>\n    <ul class=\"list-inline list-social\">\n      <li class=\"social-twitter\">\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      </li>\n      <li class=\"social-facebook\">\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      </li>\n      <li class=\"social-google-plus\">\n        <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-contact/page-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageContactComponent = /** @class */ (function () {
    function PageContactComponent() {
    }
    PageContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',
            template: __webpack_require__("../../../../../src/app/page-contact/page-contact.component.html")
        })
    ], PageContactComponent);
    return PageContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-cta/page-cta.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cta\">\n  <div class=\"cta-content\">\n    <div class=\"container\">\n      <h2>Stop waiting.<br>Start building.</h2>\n      <a pageScroll href=\"#contact\" class=\"btn btn-outline btn-xl page-scroll\">Let's Get Started!</a>\n    </div>\n  </div>\n  <div class=\"overlay\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-cta/page-cta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCtaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageCtaComponent = /** @class */ (function () {
    function PageCtaComponent() {
    }
    PageCtaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cta',
            template: __webpack_require__("../../../../../src/app/page-cta/page-cta.component.html")
        })
    ], PageCtaComponent);
    return PageCtaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-download/page-download.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"download\" class=\"download bg-primary text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <h2 class=\"section-heading\">Discover what all the buzz is about!</h2>\n        <p>Our app is available on any mobile device! Download now to get started!</p>\n        <div class=\"badges\">\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/google-play-badge.svg\" alt=\"\"></a>\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/app-store-badge.svg\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-download/page-download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageDownloadComponent = /** @class */ (function () {
    function PageDownloadComponent() {
    }
    PageDownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-download',
            template: __webpack_require__("../../../../../src/app/page-download/page-download.component.html")
        })
    ], PageDownloadComponent);
    return PageDownloadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-features/page-features.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"features\" class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"section-heading\">\n          <h2>Unlimited Features, Unlimited Fun</h2>\n          <p class=\"text-muted\">Check out what you can do with this app theme!</p>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"device-container\">\n          <div class=\"device-mockup iphone6_plus portrait white\">\n            <div class=\"device\">\n              <div class=\"screen\">\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"assets/img/demo-screen-1.jpg\" class=\"img-responsive\" alt=\"\"></div>\n              <div class=\"button\">\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-screen-smartphone text-primary\"></i>\n                <h3>Device Mockups</h3>\n                <p class=\"text-muted\">Ready to use HTML/CSS device mockups, no Photoshop required!</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-camera text-primary\"></i>\n                <h3>Flexible Use</h3>\n                <p class=\"text-muted\">Put an image, video, animation, or anything else in the screen!</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-present text-primary\"></i>\n                <h3>Free to Use</h3>\n                <p class=\"text-muted\">As always, this theme is free to download and use for any purpose!</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-lock-open text-primary\"></i>\n                <h3>Open Source</h3>\n                <p class=\"text-muted\">Since this theme is MIT licensed, you can use it commercially!</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-features/page-features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageFeaturesComponent = /** @class */ (function () {
    function PageFeaturesComponent() {
    }
    PageFeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-features',
            template: __webpack_require__("../../../../../src/app/page-features/page-features.component.html")
        })
    ], PageFeaturesComponent);
    return PageFeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-footer/page-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <p>&copy; 2016 Start Bootstrap. All Rights Reserved.</p>\n    <ul class=\"list-inline\">\n      <li>\n        <a href=\"#\">Privacy</a>\n      </li>\n      <li>\n        <a href=\"#\">Terms</a>\n      </li>\n      <li>\n        <a href=\"#\">FAQ</a>\n      </li>\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/page-footer/page-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-footer',
            template: __webpack_require__("../../../../../src/app/page-footer/page-footer.component.html")
        })
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <div class=\"header-content\">\n          <div class=\"header-content-inner\">\n            <h1>Dostawa na telefon oraz catering, przepyszne urozmaicone dania!</h1>\n            <a pageScroll href=\"#menu\" class=\"btn btn-outline btn-xl page-scroll\">Zobacz Menu!</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"device-container\">\n\n\n                            <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"assets/img/logo.png\" class=\"img-responsive\" alt=\"\">\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',
            template: __webpack_require__("../../../../../src/app/page-header/page-header.component.html")
        })
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-menu/page-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"menu\" class=\"menu bg-primary text-center\">\n\n        <img src=\"assets/img/menu.jpg\" alt=\"\">\n        <!-- <h2 class=\"section-heading\">Discover what all the buzz is about!</h2>\n        <p>Our app is available on any mobile device! Download now to get started!</p>\n        <div class=\"badges\">\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/google-play-badge.svg\" alt=\"\"></a>\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/app-store-badge.svg\" alt=\"\"></a> -->\n\n  \n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-menu/page-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageMenuComponent = /** @class */ (function () {
    function PageMenuComponent() {
    }
    PageMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',
            template: __webpack_require__("../../../../../src/app/page-menu/page-menu.component.html")
        })
    ], PageMenuComponent);
    return PageMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);


















/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map