/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./development/js/index.js":
/*!*********************************!*\
  !*** ./development/js/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    data: function data() {\n        return {\n            perPage: 3,\n            currentPage: 1,\n            items: [{ id: 1, first_name: 'Fred', last_name: 'Flintstone' }, { id: 2, first_name: 'Wilma', last_name: 'Flintstone' }, { id: 3, first_name: 'Barney', last_name: 'Rubble' }, { id: 4, first_name: 'Betty', last_name: 'Rubble' }, { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' }, { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' }, { id: 7, first_name: 'The Great', last_name: 'Gazzoo' }, { id: 8, first_name: 'Rockhead', last_name: 'Slate' }, { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }]\n        };\n    },\n\n    computed: {\n        rows: function rows() {\n            return this.items.length;\n        }\n    }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var app = new Vue({\n        el: '#vue-container',\n        data: {\n            currentYear: new Date().getFullYear(),\n            languagesAvailable: ['pl', 'en'],\n            language: 'pl',\n            aboutUs: ['O nas', 'About us'],\n            offer: ['Oferta', 'Offer'],\n            collectionName: [\"Nasze kolekcje\", \"The collections\"],\n            collections: {\n                autumnWinter2019: [\"Jesień Zima 2019\", \"Autumn Winter 2019\"],\n                springSummer2018: [\"Wiosna Lato 2018\", \"Spring Summer 2018\"]\n            },\n\n            storeOutlet: ['Sklep Outlet', 'Outlet Store'],\n            address: ['Informacje kontakowe', 'Contact Info'],\n            cooperation: ['Naszymi g\\u0142\\xF3wnymi odbiorcami s\\u0105 hurtownie, sieci handlowe oraz uznane na \\u015Bwiecie marki obuwnicze.\\n                        Jeste\\u015Bmy w stanie przygotowa\\u0107 obuwie dopasowane do wymaga\\u0144 oraz porzeb naszych klient\\xF3w.\\n                        Jeste\\u015Bmy otwarci na nowe wyzwania oraz proponujemy atrakcyjne warunki wsp\\xF3\\u0142pracy.', 'Our main customers are wholesalers, retail chains and internationally recognized footwear brands.\\n                        \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 We are able to prepare footwear tailored to the requirements and needs of our customers.\\n                        \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 We are open to new challenges and we offer attractive terms of cooperation.', \"WSPÓŁPRACA\", \"Cooperation\"],\n            history: ['Pocz\\u0105tki Firmy \"AGA\" zaczynaj\\u0105 si\\u0119 w 1994 roku, gdzie zaczyna si\\u0119 projektowanie oraz produckaj\\n                        najwy\\u017Cszej jako\\u015Bci obuwia\\n                        damskiego z wysokogatunkowych sk\\xF3r. U\\u017Cywamy najwy\\u017Cszej jako\\u015Bci komponent\\xF3w z ca\\u0142ej Europy mi\\u0119dzy\\n                        innymi pochodzenia Polskiego, Tureckiego, Hiszpa\\u0144skiego oraz W\\u0142oskiego.\\n                        Nasze obuwie cechuje komfort u\\u017Cytkowania, zr\\xF3\\u017Cnicowane wzornictwo ale przede wszystkim wysoka\\n                        jako\\u015B\\u0107 wykonania.', 'The Origin of \"AGA\" begins in 1994, where design and production begin\\n                \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 top quality footwear\\n                \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 women\\'s high-quality leathers. We use the highest quality components from all over Europe between\\n                \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 other Polish, Turkish, Spanish and Italian origin.\\n                \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 Our footwear is characterized by comfort of use, diverse designs but above all high\\n                \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 production quality.', \"Historia\", \"History\"],\n            design: ['Solidne wykonanie oraz przyst\\u0119pna cena produkt\\xF3w, pozwoli\\u0142y zdoby\\u0107 naszej marce\\n            uznanie konsument\\xF3w na rynku Polskim oraz Europejskim (W\\u0119gry, Czechy, S\\u0142owacja, Rosja,\\n            Litwa, Ukraina, Niemcy, Holandia.)', 'Solid workmanship and affordable price of products have allowed us to win our brand\\n            \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 recognition of consumers on the Polish and European market (Hungary, Czech Republic, Slovakia, Russia,\\n            \\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0 Lithuania, Ukraine, Germany, the Netherlands.)', \"Design\", \"Design\"],\n            contact: ['Kontakt', 'Contact'],\n            message: 'Hello Vue!'\n        },\n        created: function created() {\n            language = 'pl';\n        },\n\n        methods: {\n            translate: function translate(word) {\n                if (this.language === 'pl') {\n                    return word[0];\n                } else if (this.language === 'en') {\n                    return word[1];\n                }\n            },\n            translateByIndex: function translateByIndex(word, index) {\n                return word[index];\n            }\n        }\n    });\n    var storeOutlet = $('#store-outlet');\n    AOS.init();\n    navigation();\n    gallery();\n    var hello = function hello(name) {\n        return 'hello ' + name;\n    };\n\n    function gallery() {\n        var galleryBtns = $('#about-us .collection-title.section-title span');\n        var seasons = [\"summer\", \"autumn\", \"winter\", \"spring\"];\n\n        seasons[\"summer\"] = storeOutlet.find('.summer');\n        seasons[\"autumn\"] = storeOutlet.find('.autumn');\n        seasons[\"winter\"] = storeOutlet.find('.winter');\n        seasons[\"spring\"] = storeOutlet.find('.spring');\n        galleryBtns.on('click', function (event) {\n            var season = event.target.parentElement.className.replace('Btn', '');\n            for (var i = 0; i < galleryBtns.length; i++) {\n                galleryBtns[i].children[0].classList.remove('season-active');\n            }\n            event.target.className += \"season-active\";\n\n            switch (season) {\n                case \"summer\":\n                    seasons[\"summer\"].find('.gallery').css('opacity', '1');\n                    seasons[\"autumn\"].find('.gallery').css('opacity', '0');\n                    seasons[\"winter\"].find('.gallery').css('opacity', '0');\n                    seasons[\"spring\"].find('.gallery').css('opacity', '0');\n                    break;\n                case \"autumn\":\n                    seasons[\"summer\"].find('.gallery').css('opacity', '0');\n                    seasons[\"autumn\"].find('.gallery').css('opacity', '1');\n                    seasons[\"winter\"].find('.gallery').css('opacity', '0');\n                    seasons[\"spring\"].find('.gallery').css('opacity', '0');\n                    break;\n                case \"winter\":\n                    seasons[\"summer\"].find('.gallery').css('opacity', '0');\n                    seasons[\"autumn\"].find('.gallery').css('opacity', '0');\n                    seasons[\"winter\"].find('.gallery').css('opacity', '1');\n                    seasons[\"spring\"].find('.gallery').css('opacity', '0');\n                    break;\n                case \"spring\":\n                    seasons[\"summer\"].find('.gallery').css('opacity', '0');\n                    seasons[\"autumn\"].find('.gallery').css('opacity', '0');\n                    seasons[\"winter\"].find('.gallery').css('opacity', '0');\n                    seasons[\"spring\"].find('.gallery').css('opacity', '1');\n                    break;\n            }\n        });\n    }\n    function initMap() {\n        // The location of Uluru\n        var uluru = { lat: -25.344, lng: 131.036 };\n        // The map, centered at Uluru\n        var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });\n        // The marker, positioned at Uluru\n        var marker = new google.maps.Marker({ position: uluru, map: map });\n    }\n    // $('.carousel').carousel({\n    //     interval: 5000\n    // });\n    function navigation() {\n        $(\"#about-us-nav\").click(function () {\n            $([document.documentElement, document.body]).animate({\n                scrollTop: $(\"#about-us\").offset().top\n            }, 2000);\n        });\n        $(\"#offer-nav\").click(function () {\n            $([document.documentElement, document.body]).animate({\n                scrollTop: storeOutlet.offset().top\n            }, 2000);\n        });\n        $(\"#contact-nav\").click(function () {\n            $([document.documentElement, document.body]).animate({\n                scrollTop: $(\"#contact\").offset().top\n            }, 2000);\n        });\n    }\n});\n\n//# sourceURL=webpack:///./development/js/index.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./development/js/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./development/js/index.js */\"./development/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./development/js/index.js?");

/***/ })

/******/ });