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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(21);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(48);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(22);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /**
     * @return {!MDCRippleFoundation}
     * @override
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }

    /** @override */

  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * MDCTabScrollerAnimation contains the values required for animating from the
 * current scroll position to the new scroll position. The "finalScrollPosition"
 * value represents the new scroll position while the "scrollDelta" value is the
 * corresponding transformation that is applied to the scroll content. Together,
 * they create the animation by first updating the scroll value then applying
 * the transformation and animating the transition. Both pieces are necessary
 * for the scroll animation to work. The values are used as-is by the tab
 * scroller animation method, ensuring that all logic for determining scroll
 * position or transformation is abstracted away from the animation method.
 * @typedef {{finalScrollPosition: number, scrollDelta: number}}
 */
var MDCTabScrollerAnimation = void 0;

/**
 * MDCTabScrollerHorizontalEdges represents the left and right edges of the
 * scroll content. These values vary depending on how scrolling in RTL is
 * implemented by the browser. One value is always 0 and one value is always
 * the max scrollable value as either a positive or negative integer.
 * @typedef {{left: number, right: number}}
 */
var MDCTabScrollerHorizontalEdges = void 0;

/**
 * Adapter for MDC Tab Scroller.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabScrollerAdapter = function () {
  function MDCTabScrollerAdapter() {
    _classCallCheck(this, MDCTabScrollerAdapter);
  }

  _createClass(MDCTabScrollerAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Adds the given className to the scroll area element.
     * @param {string} className The className to add
     */

  }, {
    key: "addScrollAreaClass",
    value: function addScrollAreaClass(className) {}

    /**
     * Returns whether the event target matches given className.
     * @param {EventTarget} evtTarget The event target
     * @param {string} selector The selector to check
     * @return {boolean}
     */

  }, {
    key: "eventTargetMatchesSelector",
    value: function eventTargetMatchesSelector(evtTarget, selector) {}

    /**
     * Sets a style property of the area element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollAreaStyleProperty",
    value: function setScrollAreaStyleProperty(propName, value) {}

    /**
     * Sets a style property of the content element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollContentStyleProperty",
    value: function setScrollContentStyleProperty(propName, value) {}

    /**
     * Returns the scroll content element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getScrollContentStyleValue",
    value: function getScrollContentStyleValue(propertyName) {}

    /**
     * Sets the scrollLeft value of the scroll area element to the passed value.
     * @param {number} scrollLeft The new scrollLeft value
     */

  }, {
    key: "setScrollAreaScrollLeft",
    value: function setScrollAreaScrollLeft(scrollLeft) {}

    /**
     * Returns the scrollLeft value of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaScrollLeft",
    value: function getScrollAreaScrollLeft() {}

    /**
     * Returns the offsetWidth of the scroll content element.
     * @return {number}
     */

  }, {
    key: "getScrollContentOffsetWidth",
    value: function getScrollContentOffsetWidth() {}

    /**
     * Returns the offsetWitdth of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaOffsetWidth",
    value: function getScrollAreaOffsetWidth() {}

    /**
     * Returns the bounding client rect of the scroll area element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollAreaClientRect",
    value: function computeScrollAreaClientRect() {}

    /**
     * Returns the bounding client rect of the scroll content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollContentClientRect",
    value: function computeScrollContentClientRect() {}

    /**
     * Returns the height of the browser's horizontal scrollbars (in px).
     * @return {number}
     */

  }, {
    key: "computeHorizontalScrollbarHeight",
    value: function computeHorizontalScrollbarHeight() {}
  }]);

  return MDCTabScrollerAdapter;
}();

exports.MDCTabScrollerAnimation = MDCTabScrollerAnimation;
exports.MDCTabScrollerHorizontalEdges = MDCTabScrollerHorizontalEdges;
exports.MDCTabScrollerAdapter = MDCTabScrollerAdapter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTopAppBarAdapter = function () {
  function MDCTopAppBarAdapter() {
    _classCallCheck(this, MDCTopAppBarAdapter);
  }

  _createClass(MDCTopAppBarAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns true if the root Element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the specified inline style property on the root Element to the given value.
     * @param {string} property
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(property, value) {}

    /**
     * Gets the height of the top app bar.
     * @return {number}
     */

  }, {
    key: "getTopAppBarHeight",
    value: function getTopAppBarHeight() {}

    /**
     * Registers an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerNavigationIconInteractionHandler",
    value: function registerNavigationIconInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterNavigationIconInteractionHandler",
    value: function deregisterNavigationIconInteractionHandler(type, handler) {}

    /**
     * Emits an event when the navigation icon is clicked.
     */

  }, {
    key: "notifyNavigationIconClicked",
    value: function notifyNavigationIconClicked() {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerScrollHandler",
    value: function registerScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterScrollHandler",
    value: function deregisterScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /** @return {number} */

  }, {
    key: "getViewportScrollY",
    value: function getViewportScrollY() {}

    /** @return {number} */

  }, {
    key: "getTotalActionItems",
    value: function getTotalActionItems() {}
  }]);

  return MDCTopAppBarAdapter;
}();

exports.default = MDCTopAppBarAdapter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
};

/** @enum {number} */
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};

/** @enum {string} */
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

exports.strings = strings;
exports.cssClasses = cssClasses;
exports.numbers = numbers;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = function Data(data) {
    _classCallCheck(this, Data);

    data.listeners = { 'set': [] };
    var p = new Proxy(data, {
        set: function set(target, key, value) {
            target[key] = value;
            target.listeners['set'].forEach(function (listener) {
                listener({
                    variable: key,
                    value: value
                });
            });

            return true;
        }
    });

    p.addEventListener = function (type, listener) {
        data.listeners[type].push(listener);
    };

    // initialize one more time to call 'set' methods for all listeners
    // used to e.g. update responsive GUI elements

    var _loop = function _loop(key) {
        setTimeout(function () {
            return p[key] = p[key];
        });
    };

    for (var key in p) {
        _loop(key);
    }
    return p;
};

var variables = new Data({
    temperature: 273.15,
    volume: 22.40,
    pressure: 1,
    moles0: 1,
    moles1: 0,
    moles2: 0,
    species0: "Ar",
    species1: "Xe",
    species2: "He",
    listeners: []
});

var options = new Data({
    trail: false,
    lineChart: true // if true show relationship between variables, if false show histogram of speeds
});

exports.variables = variables;
exports.options = options;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * MDCTabDimensions provides details about the left and right edges of the Tab
 * root element and the Tab content element. These values are used to determine
 * the visual position of the Tab with respect it's parent container.
 * @typedef {{rootLeft: number, rootRight: number, contentLeft: number, contentRight: number}}
 */
var MDCTabDimensions = void 0;

/**
 * Adapter for MDC Tab.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabAdapter = function () {
  function MDCTabAdapter() {
    _classCallCheck(this, MDCTabAdapter);
  }

  _createClass(MDCTabAdapter, [{
    key: "registerEventHandler",

    /**
     * Registers an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */
    value: function registerEventHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterEventHandler",
    value: function deregisterEventHandler(evtType, handler) {}

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns whether the root element has the given className.
     * @param {string} className The className to remove
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the given attrName of the root element to the given value.
     * @param {string} attr The attribute name to set
     * @param {string} value The value so give the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Activates the indicator element.
     * @param {!ClientRect=} previousIndicatorClientRect The client rect of the previously activated indicator
     */

  }, {
    key: "activateIndicator",
    value: function activateIndicator(previousIndicatorClientRect) {}

    /** Deactivates the indicator. */

  }, {
    key: "deactivateIndicator",
    value: function deactivateIndicator() {}

    /**
     * Returns the client rect of the indicator.
     * @return {!ClientRect}
     */

  }, {
    key: "computeIndicatorClientRect",
    value: function computeIndicatorClientRect() {}

    /**
     * Emits the MDCTab:interacted event for use by parent components
     */

  }, {
    key: "notifyInteracted",
    value: function notifyInteracted() {}

    /**
     * Returns the offsetLeft value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetLeft",
    value: function getOffsetLeft() {}

    /**
     * Returns the offsetWidth value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {}

    /**
     * Returns the offsetLeft of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetLeft",
    value: function getContentOffsetLeft() {}

    /**
     * Returns the offsetWidth of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetWidth",
    value: function getContentOffsetWidth() {}

    /**
     * Applies focus to the root element
     */

  }, {
    key: "focus",
    value: function focus() {}
  }]);

  return MDCTabAdapter;
}();

exports.MDCTabDimensions = MDCTabDimensions;
exports.MDCTabAdapter = MDCTabAdapter;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/* eslint-disable no-unused-vars */


var _adapter = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * @abstract
 */
var MDCTabScrollerRTL = function () {
  /** @param {!MDCTabScrollerAdapter} adapter */
  function MDCTabScrollerRTL(adapter) {
    _classCallCheck(this, MDCTabScrollerRTL);

    /** @private */
    this.adapter_ = adapter;
  }

  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */


  _createClass(MDCTabScrollerRTL, [{
    key: 'getScrollPositionRTL',
    value: function getScrollPositionRTL(translateX) {}

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {}

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {}

    /**
     * @param {number} scrollX The current scrollX position
     * @param {number} translateX The current translateX position
     * @return {number}
     * @abstract
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {}
  }]);

  return MDCTabScrollerRTL;
}();

exports.default = MDCTabScrollerRTL;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelectionControl = exports.MDCSelectionControlState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */

var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

exports.MDCSelectionControlState = MDCSelectionControlState;
exports.MDCSelectionControl = MDCSelectionControl;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(5);

var _adapter = __webpack_require__(4);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */
var MDCTopAppBarBaseFoundation = function (_MDCFoundation) {
  _inherits(MDCTopAppBarBaseFoundation, _MDCFoundation);

  _createClass(MDCTopAppBarBaseFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /**
     * {@see MDCTopAppBarAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTopAppBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTopAppBarAdapter} */{
          hasClass: function hasClass() /* className: string */{},
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setStyle: function setStyle() /* property: string, value: string */{},
          getTopAppBarHeight: function getTopAppBarHeight() {},
          registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
          registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
          deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          getViewportScrollY: function getViewportScrollY() {
            return (/* number */0
            );
          },
          getTotalActionItems: function getTotalActionItems() {
            return (/* number */0
            );
          }
        }
      );
    }

    /**
     * @param {!MDCTopAppBarAdapter} adapter
     */

  }]);

  function MDCTopAppBarBaseFoundation( /** @type {!MDCTopAppBarAdapter} */adapter) {
    _classCallCheck(this, MDCTopAppBarBaseFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTopAppBarBaseFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarBaseFoundation)).call(this, Object.assign(MDCTopAppBarBaseFoundation.defaultAdapter, adapter)));

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };
    return _this;
  }

  _createClass(MDCTopAppBarBaseFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }]);

  return MDCTopAppBarBaseFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarBaseFoundation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearData = exports.updateHistogram = exports.addData = undefined;

var _data = __webpack_require__(6);

var chart;
var currentXVar, currentYVar;

var vars = {
    "pressure": {
        name: "Pressure",
        units: "atm"
    },
    "volume": {
        name: "Volume",
        units: "L"
    },
    "temperature": {
        name: "Temperature",
        units: "K"
    },
    "moles0": {
        name: "Moles of Species X",
        units: "mol"
    },
    "moles1": {
        name: "Moles of Species Y",
        units: "mol"
    },
    "moles2": {
        name: "Moles of Species Z",
        units: "mol"
    }
};

_data.options.addEventListener('set', function (evt) {
    if (evt.variable == "lineChart") {
        if (evt.value) {
            initChart("line");
        } else {
            initChart("bar");
        }
    }
});

function initChart(type) {
    var ctx = document.getElementById("chart").getContext("2d");
    if (type == "line") {
        chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'scatter',

            // The data for our dataset
            data: {
                datasets: [{
                    borderColor: '#F9AA33',
                    data: [],
                    showLine: true,
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                }]
            },

            // Configuration options go here
            options: {
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: ""
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: ""
                        }
                    }]
                }
            }
        });
    } else if (type == "bar") {
        chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: new Array(50),
                datasets: [{}, {}, {}]
            },
            // Configuration options go here
            options: {
                tooltips: {
                    enabled: false
                },
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0,
                        stacked: true,
                        display: true,
                        ticks: {
                            display: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "log Speed"
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        display: true,

                        scaleLabel: {
                            display: true,
                            labelString: "Frequency"
                        },
                        ticks: {
                            min: 0,
                            max: 20,
                            callback: function callback(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }]
                }
            }
        });
    }
    chart.update();
}

function updateHistogram(data) {
    chart.data.datasets = data;
    chart.update();
}

function addData(xVar, yVar, data) {

    // Clear data if one of the vars has changed
    if (currentXVar != xVar || currentYVar != yVar) {
        clearData();
        currentXVar = xVar;
        currentYVar = yVar;
    }
    chart.options.scales.xAxes[0].scaleLabel.labelString = vars[xVar].name + " (" + vars[xVar].units + ")";
    chart.options.scales.yAxes[0].scaleLabel.labelString = vars[yVar].name + " (" + vars[yVar].units + ")";

    chart.data.datasets.forEach(function (dataset) {
        if (!dataset.data.filter(function (d) {
            return Math.abs(d.x - data.x) < .02;
        }).length) {
            dataset.data.push(data);
            dataset.data.sort(function (a, b) {
                return a.x - b.x;
            });
        }
    });
    chart.update();
}

function clearData() {
    chart.data.datasets.forEach(function (dataset) {
        dataset.data = [];
    });
    chart.update();
    chart.options.scales.xAxes[0].scaleLabel.labelString = "";
    chart.options.scales.yAxes[0].scaleLabel.labelString = "";
}

exports.addData = addData;
exports.updateHistogram = updateHistogram;
exports.clearData = clearData;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(23);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @extends {MDCFoundation<!MDCTabIndicatorAdapter>}
 * @abstract
 */
var MDCTabIndicatorFoundation = function (_MDCFoundation) {
  _inherits(MDCTabIndicatorFoundation, _MDCFoundation);

  _createClass(MDCTabIndicatorFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * @see MDCTabIndicatorAdapter for typing information
     * @return {!MDCTabIndicatorAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabIndicatorAdapter} */{
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          computeContentClientRect: function computeContentClientRect() {},
          setContentStyleProperty: function setContentStyleProperty() {}
        }
      );
    }

    /** @param {!MDCTabIndicatorAdapter} adapter */

  }]);

  function MDCTabIndicatorFoundation(adapter) {
    _classCallCheck(this, MDCTabIndicatorFoundation);

    return _possibleConstructorReturn(this, (MDCTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCTabIndicatorFoundation)).call(this, Object.assign(MDCTabIndicatorFoundation.defaultAdapter, adapter)));
  }

  /** @return {!ClientRect} */


  _createClass(MDCTabIndicatorFoundation, [{
    key: 'computeContentClientRect',
    value: function computeContentClientRect() {
      return this.adapter_.computeContentClientRect();
    }

    /**
     * Activates the indicator
     * @param {!ClientRect=} previousIndicatorClientRect
     * @abstract
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {} // eslint-disable-line no-unused-vars

    /** @abstract */

  }, {
    key: 'deactivate',
    value: function deactivate() {}
  }]);

  return MDCTabIndicatorFoundation;
}(_foundation2.default);

exports.default = MDCTabIndicatorFoundation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCChipInteractionEventType = exports.MDCChipFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(28);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCChipAdapter>}
 * @final
 */
var MDCChipFoundation = function (_MDCFoundation) {
  _inherits(MDCChipFoundation, _MDCFoundation);

  _createClass(MDCChipFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCChipAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCChipAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCChipAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          addClassToLeadingIcon: function addClassToLeadingIcon() {},
          removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {},
          eventTargetHasClass: function eventTargetHasClass() {},
          notifyInteraction: function notifyInteraction() {},
          notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {},
          notifyRemoval: function notifyRemoval() {},
          getComputedStyleValue: function getComputedStyleValue() {},
          setStyleProperty: function setStyleProperty() {}
        }
      );
    }

    /**
     * @param {!MDCChipAdapter} adapter
     */

  }]);

  function MDCChipFoundation(adapter) {
    _classCallCheck(this, MDCChipFoundation);

    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     * @private {boolean}
     * */
    var _this = _possibleConstructorReturn(this, (MDCChipFoundation.__proto__ || Object.getPrototypeOf(MDCChipFoundation)).call(this, Object.assign(MDCChipFoundation.defaultAdapter, adapter)));

    _this.shouldRemoveOnTrailingIconClick_ = true;
    return _this;
  }

  /**
   * @return {boolean}
   */


  _createClass(MDCChipFoundation, [{
    key: 'isSelected',
    value: function isSelected() {
      return this.adapter_.hasClass(_constants.cssClasses.SELECTED);
    }

    /**
     * @param {boolean} selected
     */

  }, {
    key: 'setSelected',
    value: function setSelected(selected) {
      if (selected) {
        this.adapter_.addClass(_constants.cssClasses.SELECTED);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.SELECTED);
      }
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'getShouldRemoveOnTrailingIconClick',
    value: function getShouldRemoveOnTrailingIconClick() {
      return this.shouldRemoveOnTrailingIconClick_;
    }

    /**
     * @param {boolean} shouldRemove
     */

  }, {
    key: 'setShouldRemoveOnTrailingIconClick',
    value: function setShouldRemoveOnTrailingIconClick(shouldRemove) {
      this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    }

    /**
     * Begins the exit animation which leads to removal of the chip.
     */

  }, {
    key: 'beginExit',
    value: function beginExit() {
      this.adapter_.addClass(_constants.cssClasses.CHIP_EXIT);
    }

    /**
     * Handles an interaction event on the root element.
     * @param {!Event} evt
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction(evt) {
      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifyInteraction();
      }
    }

    /**
     * Handles a transition end event on the root element.
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      var _this2 = this;

      // Handle transition end event on the chip when it is about to be removed.
      if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, _constants.cssClasses.CHIP_EXIT)) {
        if (evt.propertyName === 'width') {
          this.adapter_.notifyRemoval();
        } else if (evt.propertyName === 'opacity') {
          // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
          var chipWidth = this.adapter_.getComputedStyleValue('width');

          // On the next frame (once we get the computed width), explicitly set the chip's width
          // to its current pixel width, so we aren't transitioning out of 'auto'.
          requestAnimationFrame(function () {
            _this2.adapter_.setStyleProperty('width', chipWidth);

            // To mitigate jitter, start transitioning padding and margin before width.
            _this2.adapter_.setStyleProperty('padding', '0');
            _this2.adapter_.setStyleProperty('margin', '0');

            // On the next frame (once width is explicitly set), transition width to 0.
            requestAnimationFrame(function () {
              _this2.adapter_.setStyleProperty('width', '0');
            });
          });
        }
        return;
      }

      // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
      if (evt.propertyName !== 'opacity') {
        return;
      }
      if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, _constants.cssClasses.LEADING_ICON) && this.adapter_.hasClass(_constants.cssClasses.SELECTED)) {
        this.adapter_.addClassToLeadingIcon(_constants.cssClasses.HIDDEN_LEADING_ICON);
      } else if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, _constants.cssClasses.CHECKMARK) && !this.adapter_.hasClass(_constants.cssClasses.SELECTED)) {
        this.adapter_.removeClassFromLeadingIcon(_constants.cssClasses.HIDDEN_LEADING_ICON);
      }
    }

    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     * @param {!Event} evt
     */

  }, {
    key: 'handleTrailingIconInteraction',
    value: function handleTrailingIconInteraction(evt) {
      evt.stopPropagation();
      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifyTrailingIconInteraction();
        if (this.shouldRemoveOnTrailingIconClick_) {
          this.beginExit();
        }
      }
    }
  }]);

  return MDCChipFoundation;
}(_foundation2.default);

/**
 * @typedef {{
 *   detail: {
 *     chip: {foundation: !MDCChipFoundation},
 *   },
 *   bubbles: boolean,
 * }}
 */


var MDCChipInteractionEventType = void 0;

exports.MDCChipFoundation = MDCChipFoundation;
exports.MDCChipInteractionEventType = MDCChipInteractionEventType;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _particle = __webpack_require__(16);

var _data = __webpack_require__(6);

var _chart = __webpack_require__(11);

var _util = __webpack_require__(17);

var canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext('2d');

var padding = 20;
var cylinder = {
    width: 640,
    height: 360
};
var k = Math.min((document.body.clientHeight - document.getElementById("controls-card").clientHeight - 2 * padding) / cylinder.height, (document.body.offsetWidth - 2 * padding) / cylinder.width);
var transform = {
    s: k,
    tx: document.body.clientWidth / 2,
    ty: document.getElementById("controls-card").clientHeight + 1 * padding + cylinder.height * k / 2
};

var percentVolume = void 0,
    particles = [[], [], []];
var walls = {};

function init() {
    updateVolume();
    updateMoles();
    updateTemperature();
}

init();
ctx = document.querySelector("#canvas").getContext("2d");
setInterval(tick, 1000 / 60);
drawLoop();

_data.options.addEventListener('set', function (evt) {
    if (evt.variable == "trail") {
        if (evt.value) {
            applyTrail();
        } else {
            for (var i = 0; i < 3; i++) {
                if (particles[i].length) {
                    particles[i][0].trail(0);
                }
            }
        }
    }
});

_data.variables.addEventListener('set', function (evt) {
    switch (evt.variable) {
        case "temperature":
            updateTemperature();
            break;
        case "moles0":
            updateMoles(0);
            break;
        case "moles1":
            updateMoles(1);
            break;
        case "moles2":
            updateMoles(2);
            break;
        case "species0":
            updateSpecies(0, evt.value);
            break;
        case "species1":
            updateSpecies(1, evt.value);
            break;
        case "species2":
            updateSpecies(2, evt.value);
            break;
        case "volume":
            updateVolume();
            break;
    }
});

function tick() {
    var particlesFlat = particles.reduce(function (acc, val) {
        return acc.concat(val);
    }, []);
    var ke = 0;
    for (var i = 0; i < particlesFlat.length; i++) {
        particlesFlat[i].update();
        for (var j = i + 1; j < particlesFlat.length; j++) {
            particlesFlat[i].checkStaticCollide(particlesFlat[j]);
            particlesFlat[i].checkDynamicCollide(particlesFlat[j]);
        }
        particlesFlat[i].checkWallCollide(walls);

        ke += particlesFlat[i].mass * particlesFlat[i].speed() * particlesFlat[i].speed() * _particle.Particle.speedMultiplier * _particle.Particle.speedMultiplier;
    }

    // histogram stuff
    if (!_data.options.lineChart) {
        var datasets = [];
        for (var _i = 0; _i < 3; _i++) {
            if (particles[_i].length) {
                var n = 50;
                var bg = (0, _util.hex2rgba)(particles[_i][0].color, 0.5);
                var dataset = {
                    data: new Array(n),
                    backgroundColor: bg
                };
                dataset.data.fill(0);
                for (var p in particles[_i]) {
                    dataset.data[Math.round(15 * Math.log(1 + particles[_i][p].speed() * _particle.Particle.speedMultiplier)).clamp(0, n - 1)]++;
                }
                datasets.push(dataset);
            }
        }
        (0, _chart.updateHistogram)(datasets);
    }
}

function drawLoop() {
    draw();
    requestAnimationFrame(drawLoop);
}

function draw() {

    ctx.resetTransform();
    ctx.clear();
    ctx.scale(transform.s, transform.s);
    ctx.translate(transform.tx / transform.s, transform.ty / transform.s);

    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--mdc-theme-surface");
    var wallWidth = 8;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "rgba(0,0,0,.38)";
    ctx.rect((-cylinder.width >> 1) - wallWidth, (-cylinder.height >> 1) - wallWidth, cylinder.width + wallWidth * 2, cylinder.height + wallWidth * 2);
    ctx.rect(walls.left, walls.top, walls.right - walls.left, walls.bottom - walls.top);
    ctx.fill('evenodd');
    ctx.shadowBlur = 0;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--mdc-theme-background");

    var particlesFlat = particles.reduce(function (acc, val) {
        return acc.concat(val);
    }, []);
    for (var i = 0; i < particlesFlat.length; i++) {
        particlesFlat[i].render(ctx);
    }
}

function updateWalls() {
    walls = {
        left: -cylinder.width / 2,
        top: -cylinder.height / 2,
        right: cylinder.width / 2,
        bottom: cylinder.height / 2
    };
    walls.left += (walls.right - walls.left) * (1 - percentVolume);
    walls.width = function () {
        return walls.right - walls.left;
    }();
    walls.height = function () {
        return walls.bottom - walls.top;
    }();
}

function updateTemperature() {
    _particle.Particle.speedMultiplier = Math.sqrt(_data.variables.temperature);
}

function updateMoles(i) {
    function updateMoles(i, n, e) {
        var nParticles = Math.round(n * 10);
        if (n > 0) {
            nParticles = Math.max(1, nParticles);
        }
        var diff = particles[i].length - nParticles;
        if (diff > 0) {
            for (var j = 0; j < diff; j++) {
                var p = particles[i].pop();
                if (p.trailArray) {
                    // if the user had a trail showing, transfer trail to another particle
                    applyTrail();
                }
            }
        } else if (diff < 0) {
            for (var _j = 0; _j > diff; _j--) {
                particles[i].push(new _particle.Particle(walls.left + Math.random() * walls.width, Math.random() * walls.height + walls.top, e));
            }
        }
    }

    if (i == 0) {
        updateMoles(0, _data.variables.moles0, _data.variables.species0);
    } else if (i == 1) {
        updateMoles(1, _data.variables.moles1, _data.variables.species1);
    } else if (i == 2) {
        updateMoles(2, _data.variables.moles2, _data.variables.species2);
    } else {
        updateMoles(0, _data.variables.moles0, _data.variables.species0);
        updateMoles(1, _data.variables.moles1, _data.variables.species1);
        updateMoles(2, _data.variables.moles2, _data.variables.species2);
    }

    // var particlesPerMole = 10;
    // var diff = particles[0].length - Math.ceil(data[0].moles * particlesPerMole);
    // if (diff >= 0.5) {
    //     for (var i = 0; i < diff; i++) {
    //         particles[0].pop();
    //     }
    // } else if (diff <= -0.5) {
    //     for (var i = 0; i > diff; i--) {
    //         addParticle(0);
    //     }
    // }
}

function updateSpecies(i, sp) {
    if (particles[i].length && particles[i][0].species != sp) {
        for (var j = 0; j < particles[i].length; j++) {
            particles[i][j].setSpecies(sp);
        }
    }
}

function updateVolume() {
    var maxVolume = 40;
    percentVolume = _data.variables.volume / maxVolume;
    updateWalls();
}

// Picks a particle to have a trail.
function applyTrail() {
    for (var i = 0; i < 3; i++) {
        if (particles[i].length) {
            particles[i][0].trail(512);
            break;
        }
    }
}

var draggin = false;
var lastPos = [];

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

canvas.addEventListener('mousedown', function (event) {
    return dragStart(event);
});
canvas.addEventListener('touchstart', function (event) {
    return dragStart(event);
});
document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragStart(event) {
    draggin = true;
    document.addEventListener('selectstart', disableSelect);
    if (event instanceof MouseEvent) {
        lastPos[0] = event.clientX;
        lastPos[1] = event.clientY;
    } else if (event instanceof TouchEvent) {
        lastPos[0] = event.touches[0].clientX;
        lastPos[1] = event.touches[0].clientY;
    }
}

function dragEnd() {
    draggin = false;
    document.removeEventListener('selectstart', disableSelect);
}

function drag(event) {
    if (event instanceof MouseEvent) {
        if (draggin && event.buttons == 1) {
            transform.tx += event.clientX - lastPos[0];
            transform.ty += event.clientY - lastPos[1];
            lastPos[0] = event.clientX;
            lastPos[1] = event.clientY;
        }
    } else if (event instanceof TouchEvent) {
        if (draggin) {
            transform.tx += event.touches[0].clientX - lastPos[0];
            transform.ty += event.touches[0].clientY - lastPos[1];
            lastPos[0] = event.touches[0].clientX;
            lastPos[1] = event.touches[0].clientY;
        }
    }
}

var disableSelect = function disableSelect(event) {
    return event.preventDefault();
};

canvas.addEventListener('mousemove', function (event) {
    return drag(event);
});

canvas.addEventListener('touchmove', function (event) {
    return drag(event);
});

canvas.addEventListener('wheel', function (event) {
    var scale = Math.exp(event.deltaY * 1e-3);
    transform.s *= scale;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Element = exports.Particle = undefined;

var _util = __webpack_require__(17);

var _util2 = __webpack_require__(39);

var _data = __webpack_require__(6);

var muted = false;

var velocityScale = 0.05;
var lengthScale = 0.02;

var Element = {
    He: {
        name: "Helium",
        number: 2,
        radius: 140,
        mass: 4.002602,
        color: "#F9AA33"
    },
    Ne: {
        name: "Neon",
        number: 10,
        radius: 154,
        mass: 20.1797,
        color: "#DD2C00"
    },
    Ar: {
        name: "Argon",
        number: 18,
        radius: 188,
        mass: 39.948,
        color: "#AA00FF"
    },
    Kr: {
        name: "Krypton",
        number: 36,
        radius: 202,
        mass: 83.798,
        color: "#2962FF"
    },
    Xe: {
        name: "Xenon",
        number: 54,
        radius: 216,
        mass: 131.293,
        color: "#40C4FF"
    },
    Rn: {
        name: "Radon",
        number: 86,
        radius: 220,
        mass: 222,
        color: "#344955"
    }

};

function Particle(x, y, species) {

    this.angle = function () {
        return Math.atan2(this.dy, this.dx);
    };

    this.setSpecies = function (sp) {
        this.species = sp;
        this.radius = Element[sp].radius * lengthScale;

        this.dx *= Math.sqrt(this.mass || 1);
        this.dy *= Math.sqrt(this.mass || 1);

        this.mass = Element[sp].mass;

        this.dx /= Math.sqrt(this.mass);
        this.dy /= Math.sqrt(this.mass);

        this.color = Element[sp].color;
    };

    this.setSpecies(species);
    this.x = x;
    this.y = y;

    var a = Math.random() * Math.PI * 2;
    this.dx = (1 + Math.nrand() / 10) * Math.cos(a) * velocityScale * Math.sqrt(_data.variables.temperature / this.mass);
    this.dy = (1 + Math.nrand() / 10) * Math.sin(a) * velocityScale * Math.sqrt(_data.variables.temperature / this.mass);

    this.render = function (ctx) {
        ctx.fillStyle = ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (!(0, _util2.isNullOrUndefined)(this.trailArray)) {
            ctx.beginPath();
            for (var i = this.trailArray.length - 1; i >= 0; i--) {
                if (this.trailArray[i] != null) {
                    ctx.lineTo(this.trailArray[i][0], this.trailArray[i][1]);
                }
                this.trailArray[i] = i > 0 ? this.trailArray[i - 1] : [this.x, this.y];
            }
            ctx.globalAlpha = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    };

    this.trail = function (length) {
        if (!length) {
            if (this.trailArray) {
                delete this.trailArray;
            }
            return;
        }
        if (!this.trailArray && length) {
            this.trailArray = new Array(length);
            this.trailArray.fill(null);
        }
    };

    this.speed = function () {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    };

    this.update = function () {
        this.x += this.dx * Particle.speedMultiplier;
        this.y += this.dy * Particle.speedMultiplier;
    };

    this.checkStaticCollide = function (that) {
        var overlap = this.radius + that.radius - (0, _util.distance)(this, that);
        if (overlap > 0) {
            var theta = Math.atan2(this.y - that.y, this.x - that.x);
            var smaller = this.radius < that.radius ? this : that;
            smaller.x -= overlap * Math.cos(theta);
            smaller.y -= overlap * Math.sin(theta);
        }
    };

    this.checkDynamicCollide = function (that) {
        var thisNextPos = { x: this.x + this.dx * Particle.speedMultiplier, y: this.y + this.dy * Particle.speedMultiplier };
        var thatNextPos = { x: that.x + that.dx * Particle.speedMultiplier, y: that.y + that.dy * Particle.speedMultiplier };
        var overlapNextFrame = this.radius + that.radius - (0, _util.distance)(thisNextPos, thatNextPos);

        if (overlapNextFrame >= 0) {
            var theta1 = this.angle();
            var theta2 = that.angle();
            var phi = Math.atan2(that.y - this.y, that.x - this.x);
            var m1 = this.mass;
            var m2 = that.mass;
            var v1 = this.speed();
            var v2 = that.speed();

            var dx1F = (v1 * Math.cos(theta1 - phi) * (m1 - m2) + 2 * m2 * v2 * Math.cos(theta2 - phi)) / (m1 + m2) * Math.cos(phi) + v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
            var dy1F = (v1 * Math.cos(theta1 - phi) * (m1 - m2) + 2 * m2 * v2 * Math.cos(theta2 - phi)) / (m1 + m2) * Math.sin(phi) + v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
            var dx2F = (v2 * Math.cos(theta2 - phi) * (m2 - m1) + 2 * m1 * v1 * Math.cos(theta1 - phi)) / (m1 + m2) * Math.cos(phi) + v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
            var dy2F = (v2 * Math.cos(theta2 - phi) * (m2 - m1) + 2 * m1 * v1 * Math.cos(theta1 - phi)) / (m1 + m2) * Math.sin(phi) + v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

            this.dx = dx1F;
            this.dy = dy1F;
            that.dx = dx2F;
            that.dy = dy2F;
        }
    };

    this.checkWallCollide = function (walls) {
        if (this.x - this.radius < walls.left) {
            this.x = walls.left + this.radius;
        } else if (this.x + this.radius > walls.right) {
            this.x = walls.right - this.radius;
        }
        if (this.y - this.radius < walls.top) {
            this.y = walls.top + this.radius;
        } else if (this.y + this.radius > walls.bottom) {
            this.y = walls.bottom - this.radius;
        }

        if (this.x - this.radius + this.dx * Particle.speedMultiplier < walls.left || this.x + this.radius + this.dx * Particle.speedMultiplier > walls.right) {
            this.dx *= -1;
            if (!muted) {
                // playNote(this.species, this.speed());
            }
        }
        if (this.y - this.radius + this.dy * Particle.speedMultiplier < walls.top || this.y + this.radius + this.dy * Particle.speedMultiplier > walls.bottom) {
            this.dy *= -1;
            if (!muted) {
                // playNote(this.species, this.speed());
            }
        }
    };
}

exports.Particle = Particle;
exports.Element = Element;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function distance(a, b) {
				var dx = a.x - b.x,
				    dy = a.y - b.y;
				return Math.sqrt(dx * dx + dy * dy);
}

CanvasRenderingContext2D.prototype.clear = function () {
				this.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Number.prototype.clamp = function (min, max) {
				return Math.min(Math.max(this, min), max);
};

Math.nrand = function () {
				var x1, x2, rad, y1;
				do {
								x1 = 2 * this.random() - 1;
								x2 = 2 * this.random() - 1;
								rad = x1 * x1 + x2 * x2;
				} while (rad >= 1 || rad == 0);
				var c = this.sqrt(-2 * Math.log(rad) / rad);
				return x1 * c;
};

function hex2rgba(hex, alpha) {
				var _hex$match$map = hex.match(/\w\w/g).map(function (x) {
								return parseInt(x, 16);
				}),
				    _hex$match$map2 = _slicedToArray(_hex$match$map, 3),
				    r = _hex$match$map2[0],
				    g = _hex$match$map2[1],
				    b = _hex$match$map2[2];

				return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}

exports.distance = distance;
exports.hex2rgba = hex2rgba;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};

/** @enum {string} */
var strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};

/** @enum {number} */
var numbers = {
  PAGE_FACTOR: 4
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCSliderAdapter = function () {
  function MDCSliderAdapter() {
    _classCallCheck(this, MDCSliderAdapter);
  }

  _createClass(MDCSliderAdapter, [{
    key: "hasClass",

    /**
     * Returns true if className exists for the slider Element
     * @param {string} className
     * @return {boolean}
     */
    value: function hasClass(className) {}

    /**
     * Adds a class to the slider Element
     * @param {string} className
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes a class from the slider Element
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns a string if attribute name exists on the slider Element,
     * otherwise returns null
     * @param {string} name
     * @return {?string}
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(name) {}

    /**
     * Sets attribute name on slider Element to value
     * @param {string} name
     * @param {string} value
     */

  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {}

    /**
     * Removes attribute name from slider Element
     * @param {string} name
     */

  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {}

    /**
     * Returns the bounding client rect for the slider Element
     * @return {?ClientRect}
     */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /**
     * Returns the tab index of the slider Element
     * @return {number}
     */

  }, {
    key: "getTabIndex",
    value: function getTabIndex() {}

    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}

    /**
     * Registers an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerThumbContainerInteractionHandler",
    value: function registerThumbContainerInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterThumbContainerInteractionHandler",
    value: function deregisterThumbContainerInteractionHandler(type, handler) {}

    /**
     * Registers an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerBodyInteractionHandler",
    value: function registerBodyInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterBodyInteractionHandler",
    value: function deregisterBodyInteractionHandler(type, handler) {}

    /**
     * Registers an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * Deregisters an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * Emits a custom event MDCSlider:input from the root
     */

  }, {
    key: "notifyInput",
    value: function notifyInput() {}

    /**
     * Emits a custom event MDCSlider:change from the root
     */

  }, {
    key: "notifyChange",
    value: function notifyChange() {}

    /**
     * Sets a style property of the thumb container element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setThumbContainerStyleProperty",
    value: function setThumbContainerStyleProperty(propertyName, value) {}

    /**
     * Sets a style property of the track element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setTrackStyleProperty",
    value: function setTrackStyleProperty(propertyName, value) {}

    /**
     * Sets the inner text of the pin marker to the passed value
     * @param {number} value
     */

  }, {
    key: "setMarkerValue",
    value: function setMarkerValue(value) {}

    /**
     * Appends the passed number of track markers to the track mark container element
     * @param {number} numMarkers
     */

  }, {
    key: "appendTrackMarkers",
    value: function appendTrackMarkers(numMarkers) {}

    /**
     * Removes all track markers fromt he track mark container element
     */

  }, {
    key: "removeTrackMarkers",
    value: function removeTrackMarkers() {}

    /**
     * Sets a style property of the last track marker to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setLastTrackMarkersStyleProperty",
    value: function setLastTrackMarkersStyleProperty(propertyName, value) {}

    /**
     * Returns true if the root element is RTL, otherwise false
     * @return {boolean}
     */

  }, {
    key: "isRTL",
    value: function isRTL() {}
  }]);

  return MDCSliderAdapter;
}();

exports.default = MDCSliderAdapter;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTabFoundation = exports.MDCTab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(2);

var _index2 = __webpack_require__(50);

var _adapter = __webpack_require__(7);

var _foundation = __webpack_require__(24);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTabFoundation>}
 * @final
 */
var MDCTab = function (_MDCComponent) {
  _inherits(MDCTab, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTab() {
    var _ref;

    _classCallCheck(this, MDCTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTab.__proto__ || Object.getPrototypeOf(MDCTab)).call.apply(_ref, [this].concat(args)));

    _this.ripple_;
    /** @private {?MDCTabIndicator} */
    _this.tabIndicator_;
    /** @private {?Element} */
    _this.content_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTab}
   */


  _createClass(MDCTab, [{
    key: 'initialize',
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
        return new _index.MDCRipple(el, foundation);
      };
      var tabIndicatorFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index2.MDCTabIndicator(el);
      };

      var rippleSurface = this.root_.querySelector(_foundation2.default.strings.RIPPLE_SELECTOR);
      var rippleAdapter = Object.assign(_index.MDCRipple.createAdapter( /** @type {!RippleCapableSurface} */this), {
        addClass: function addClass(className) {
          return rippleSurface.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return rippleSurface.classList.remove(className);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return rippleSurface.style.setProperty(varName, value);
        }
      });
      var rippleFoundation = new _index.MDCRippleFoundation(rippleAdapter);
      this.ripple_ = rippleFactory(this.root_, rippleFoundation);

      var tabIndicatorElement = this.root_.querySelector(_foundation2.default.strings.TAB_INDICATOR_SELECTOR);
      this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);

      this.content_ = this.root_.querySelector(_foundation2.default.strings.CONTENT_SELECTOR);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCTab.prototype.__proto__ || Object.getPrototypeOf(MDCTab.prototype), 'destroy', this).call(this);
    }

    /**
     * @return {!MDCTabFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default(
      /** @type {!MDCTabAdapter} */{
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        registerEventHandler: function registerEventHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        activateIndicator: function activateIndicator(previousIndicatorClientRect) {
          return _this2.tabIndicator_.activate(previousIndicatorClientRect);
        },
        deactivateIndicator: function deactivateIndicator() {
          return _this2.tabIndicator_.deactivate();
        },
        computeIndicatorClientRect: function computeIndicatorClientRect() {
          return _this2.tabIndicator_.computeContentClientRect();
        },
        notifyInteracted: function notifyInteracted() {
          return _this2.emit(_foundation2.default.strings.INTERACTED_EVENT, { tab: _this2 }, true /* bubble */);
        },
        getOffsetLeft: function getOffsetLeft() {
          return _this2.root_.offsetLeft;
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return _this2.content_.offsetLeft;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return _this2.content_.offsetWidth;
        },
        focus: function focus() {
          return _this2.root_.focus();
        }
      });
    }

    /**
     * Getter for the active state of the tab
     * @return {boolean}
     */

  }, {
    key: 'activate',


    /**
     * Activates the tab
     * @param {!ClientRect=} computeIndicatorClientRect
     */
    value: function activate(computeIndicatorClientRect) {
      this.foundation_.activate(computeIndicatorClientRect);
    }

    /**
     * Deactivates the tab
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }

    /**
     * Returns the indicator's client rect
     * @return {!ClientRect}
     */

  }, {
    key: 'computeIndicatorClientRect',
    value: function computeIndicatorClientRect() {
      return this.foundation_.computeIndicatorClientRect();
    }

    /**
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'computeDimensions',
    value: function computeDimensions() {
      return this.foundation_.computeDimensions();
    }
  }, {
    key: 'active',
    get: function get() {
      return this.foundation_.isActive();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTab(root);
    }
  }]);

  return MDCTab;
}(_component2.default);

exports.MDCTab = MDCTab;
exports.MDCTabFoundation = _foundation2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Tab Indicator.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Indicator into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTabIndicatorAdapter = function () {
  function MDCTabIndicatorAdapter() {
    _classCallCheck(this, MDCTabIndicatorAdapter);
  }

  _createClass(MDCTabIndicatorAdapter, [{
    key: "registerEventHandler",

    /**
     * Registers an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */
    value: function registerEventHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterEventHandler",
    value: function deregisterEventHandler(evtType, handler) {}

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns the client rect of the content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeContentClientRect",
    value: function computeContentClientRect() {}

    /**
     * Sets a style property of the content element to the passed value
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setContentStyleProperty",
    value: function setContentStyleProperty(propName, value) {}
  }]);

  return MDCTabIndicatorAdapter;
}();

exports.default = MDCTabIndicatorAdapter;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(7);

var _constants = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCFoundation<!MDCTabAdapter>}
 * @final
 */
var MDCTabFoundation = function (_MDCFoundation) {
  _inherits(MDCTabFoundation, _MDCFoundation);

  _createClass(MDCTabFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * @see MDCTabAdapter for typing information
     * @return {!MDCTabAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabAdapter} */{
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          activateIndicator: function activateIndicator() {},
          deactivateIndicator: function deactivateIndicator() {},
          computeIndicatorClientRect: function computeIndicatorClientRect() {},
          notifyInteracted: function notifyInteracted() {},
          getOffsetLeft: function getOffsetLeft() {},
          getOffsetWidth: function getOffsetWidth() {},
          getContentOffsetLeft: function getContentOffsetLeft() {},
          getContentOffsetWidth: function getContentOffsetWidth() {},
          focus: function focus() {}
        }
      );
    }

    /** @param {!MDCTabAdapter} adapter */

  }]);

  function MDCTabFoundation(adapter) {
    _classCallCheck(this, MDCTabFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCTabFoundation.__proto__ || Object.getPrototypeOf(MDCTabFoundation)).call(this, Object.assign(MDCTabFoundation.defaultAdapter, adapter)));

    _this.handleTransitionEnd_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    /** @private {function(?Event): undefined} */
    _this.handleClick_ = function () {
      return _this.handleClick();
    };
    return _this;
  }

  _createClass(MDCTabFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerEventHandler('click', this.handleClick_);
    }

    /**
     * Handles the "transitionend" event
     * @param {!Event} evt A browser event
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Early exit for ripple
      if (evt.pseudoElement) {
        return;
      }
      this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.removeClass(_constants.cssClasses.ANIMATING_ACTIVATE);
      this.adapter_.removeClass(_constants.cssClasses.ANIMATING_DEACTIVATE);
    }

    /**
     * Handles the "click" event
     */

  }, {
    key: 'handleClick',
    value: function handleClick() {
      // It's up to the parent component to keep track of the active Tab and
      // ensure we don't activate a Tab that's already active.
      this.adapter_.notifyInteracted();
    }

    /**
     * Returns the Tab's active state
     * @return {boolean}
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return this.adapter_.hasClass(_constants.cssClasses.ACTIVE);
    }

    /**
     * Activates the Tab
     * @param {!ClientRect=} previousIndicatorClientRect
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {
      // Early exit
      if (this.isActive()) {
        return;
      }

      this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.addClass(_constants.cssClasses.ANIMATING_ACTIVATE);
      this.adapter_.addClass(_constants.cssClasses.ACTIVE);
      this.adapter_.setAttr(_constants.strings.ARIA_SELECTED, 'true');
      this.adapter_.setAttr(_constants.strings.TABINDEX, '0');
      this.adapter_.activateIndicator(previousIndicatorClientRect);
      this.adapter_.focus();
    }

    /**
     * Deactivates the Tab
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      // Early exit
      if (!this.isActive()) {
        return;
      }

      this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.addClass(_constants.cssClasses.ANIMATING_DEACTIVATE);
      this.adapter_.removeClass(_constants.cssClasses.ACTIVE);
      this.adapter_.setAttr(_constants.strings.ARIA_SELECTED, 'false');
      this.adapter_.setAttr(_constants.strings.TABINDEX, '-1');
      this.adapter_.deactivateIndicator();
    }

    /**
     * Returns the indicator's client rect
     * @return {!ClientRect}
     */

  }, {
    key: 'computeIndicatorClientRect',
    value: function computeIndicatorClientRect() {
      return this.adapter_.computeIndicatorClientRect();
    }

    /**
     * Returns the dimensions of the Tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'computeDimensions',
    value: function computeDimensions() {
      var rootWidth = this.adapter_.getOffsetWidth();
      var rootLeft = this.adapter_.getOffsetLeft();
      var contentWidth = this.adapter_.getContentOffsetWidth();
      var contentLeft = this.adapter_.getContentOffsetLeft();

      return {
        rootLeft: rootLeft,
        rootRight: rootLeft + rootWidth,
        contentLeft: rootLeft + contentLeft,
        contentRight: rootLeft + contentLeft + contentWidth
      };
    }
  }]);

  return MDCTabFoundation;
}(_foundation2.default);

exports.default = MDCTabFoundation;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/** @enum {string} */
var cssClasses = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_TEST: 'mdc-tab-scroller__test',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
};

/** @enum {string} */
var strings = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/* eslint-disable no-unused-vars */


var _adapter = __webpack_require__(7);

var _index = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * Adapter for MDC Tab Bar.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTabBarAdapter = function () {
  function MDCTabBarAdapter() {
    _classCallCheck(this, MDCTabBarAdapter);
  }

  _createClass(MDCTabBarAdapter, [{
    key: 'scrollTo',

    /**
     * Scrolls to the given position
     * @param {number} scrollX The position to scroll to
     */
    value: function scrollTo(scrollX) {}

    /**
     * Increments the current scroll position by the given amount
     * @param {number} scrollXIncrement The amount to increment scroll
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {}

    /**
     * Returns the current scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {}

    /**
     * Returns the width of the scroll content
     * @return {number}
     */

  }, {
    key: 'getScrollContentWidth',
    value: function getScrollContentWidth() {}

    /**
     * Returns the root element's offsetWidth
     * @return {number}
     */

  }, {
    key: 'getOffsetWidth',
    value: function getOffsetWidth() {}

    /**
     * Returns if the Tab Bar language direction is RTL
     * @return {boolean}
     */

  }, {
    key: 'isRTL',
    value: function isRTL() {}

    /**
     * Activates the tab at the given index with the given client rect
     * @param {number} index The index of the tab to activate
     * @param {!ClientRect} clientRect The client rect of the previously active Tab Indicator
     */

  }, {
    key: 'activateTabAtIndex',
    value: function activateTabAtIndex(index, clientRect) {}

    /**
     * Deactivates the tab at the given index
     * @param {number} index The index of the tab to activate
     */

  }, {
    key: 'deactivateTabAtIndex',
    value: function deactivateTabAtIndex(index) {}

    /**
     * Returns the client rect of the tab's indicator
     * @param {number} index The index of the tab
     * @return {!ClientRect}
     */

  }, {
    key: 'getTabIndicatorClientRectAtIndex',
    value: function getTabIndicatorClientRectAtIndex(index) {}

    /**
     * Returns the tab dimensions of the tab at the given index
     * @param {number} index The index of the tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: 'getTabDimensionsAtIndex',
    value: function getTabDimensionsAtIndex(index) {}

    /**
     * Returns the length of the tab list
     * @return {number}
     */

  }, {
    key: 'getTabListLength',
    value: function getTabListLength() {}

    /**
     * Returns the index of the active tab
     * @return {number}
     */

  }, {
    key: 'getActiveTabIndex',
    value: function getActiveTabIndex() {}

    /**
     * Returns the index of the given tab
     * @param {!MDCTab} tab The tab whose index to determin
     * @return {number}
     */

  }, {
    key: 'getIndexOfTab',
    value: function getIndexOfTab(tab) {}

    /**
     * Emits the MDCTabBar:activated event
     * @param {number} index The index of the activated tab
     */

  }, {
    key: 'notifyTabActivated',
    value: function notifyTabActivated(index) {}
  }]);

  return MDCTabBarAdapter;
}();

exports.default = MDCTabBarAdapter;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCChipFoundation = exports.MDCChip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(2);

var _adapter = __webpack_require__(28);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(13);

var _constants = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var INTERACTION_EVENTS = ['click', 'keydown'];

/**
 * @extends {MDCComponent<!MDCChipFoundation>}
 * @final
 */

var MDCChip = function (_MDCComponent) {
  _inherits(MDCChip, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCChip() {
    var _ref;

    _classCallCheck(this, MDCChip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCChip.__proto__ || Object.getPrototypeOf(MDCChip)).call.apply(_ref, [this].concat(args)));

    _this.leadingIcon_;
    /** @private {?Element} */
    _this.trailingIcon_;
    /** @private {!MDCRipple} */
    _this.ripple_;

    /** @private {?function(?Event): undefined} */
    _this.handleInteraction_;
    /** @private {?function(!Event): undefined} */
    _this.handleTransitionEnd_;
    /** @private {function(!Event): undefined} */
    _this.handleTrailingIconInteraction_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChip}
   */


  _createClass(MDCChip, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      this.leadingIcon_ = this.root_.querySelector(_constants.strings.LEADING_ICON_SELECTOR);
      this.trailingIcon_ = this.root_.querySelector(_constants.strings.TRAILING_ICON_SELECTOR);

      // Adjust ripple size for chips with animated growing width. This applies when filter chips without
      // a leading icon are selected, and a leading checkmark will cause the chip width to expand.
      var checkmarkEl = this.root_.querySelector(_constants.strings.CHECKMARK_SELECTOR);
      if (checkmarkEl && !this.leadingIcon_) {
        var adapter = Object.assign(_index.MDCRipple.createAdapter(this), {
          computeBoundingRect: function computeBoundingRect() {
            var height = _this2.root_.getBoundingClientRect().height;
            // The checkmark's width is initially set to 0, so use the checkmark's height as a proxy since the
            // checkmark should always be square.
            var width = _this2.root_.getBoundingClientRect().width + checkmarkEl.getBoundingClientRect().height;
            return { height: height, width: width };
          }
        });
        this.ripple_ = new _index.MDCRipple(this.root_, new _index.MDCRippleFoundation(adapter));
      } else {
        this.ripple_ = new _index.MDCRipple(this.root_);
      }
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this3 = this;

      this.handleInteraction_ = function (evt) {
        return _this3.foundation_.handleInteraction(evt);
      };
      this.handleTransitionEnd_ = function (evt) {
        return _this3.foundation_.handleTransitionEnd(evt);
      };
      this.handleTrailingIconInteraction_ = function (evt) {
        return _this3.foundation_.handleTrailingIconInteraction(evt);
      };

      INTERACTION_EVENTS.forEach(function (evtType) {
        _this3.root_.addEventListener(evtType, _this3.handleInteraction_);
      });
      this.root_.addEventListener('transitionend', this.handleTransitionEnd_);

      if (this.trailingIcon_) {
        INTERACTION_EVENTS.forEach(function (evtType) {
          _this3.trailingIcon_.addEventListener(evtType, _this3.handleTrailingIconInteraction_);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this4 = this;

      this.ripple_.destroy();

      INTERACTION_EVENTS.forEach(function (evtType) {
        _this4.root_.removeEventListener(evtType, _this4.handleInteraction_);
      });
      this.root_.removeEventListener('transitionend', this.handleTransitionEnd_);

      if (this.trailingIcon_) {
        INTERACTION_EVENTS.forEach(function (evtType) {
          _this4.trailingIcon_.removeEventListener(evtType, _this4.handleTrailingIconInteraction_);
        });
      }

      _get(MDCChip.prototype.__proto__ || Object.getPrototypeOf(MDCChip.prototype), 'destroy', this).call(this);
    }

    /**
     * Returns true if the chip is selected.
     * @return {boolean}
     */

  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.foundation_.isSelected();
    }

    /**
     * Begins the exit animation which leads to removal of the chip.
     */

  }, {
    key: 'beginExit',
    value: function beginExit() {
      this.foundation_.beginExit();
    }

    /**
     * @return {!MDCChipFoundation}
     */

  }, {
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCChipFoundation}
     */
    value: function getDefaultFoundation() {
      var _this5 = this;

      return new _foundation.MDCChipFoundation( /** @type {!MDCChipAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this5.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this5.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this5.root_.classList.contains(className);
        },
        addClassToLeadingIcon: function addClassToLeadingIcon(className) {
          if (_this5.leadingIcon_) {
            _this5.leadingIcon_.classList.add(className);
          }
        },
        removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
          if (_this5.leadingIcon_) {
            _this5.leadingIcon_.classList.remove(className);
          }
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        notifyInteraction: function notifyInteraction() {
          return _this5.emit(_constants.strings.INTERACTION_EVENT, { chip: _this5 }, true /* shouldBubble */);
        },
        notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
          return _this5.emit(_constants.strings.TRAILING_ICON_INTERACTION_EVENT, { chip: _this5 }, true /* shouldBubble */);
        },
        notifyRemoval: function notifyRemoval() {
          return _this5.emit(_constants.strings.REMOVAL_EVENT, { chip: _this5, root: _this5.root_ }, true /* shouldBubble */);
        },
        getComputedStyleValue: function getComputedStyleValue(propertyName) {
          return window.getComputedStyle(_this5.root_).getPropertyValue(propertyName);
        },
        setStyleProperty: function setStyleProperty(propertyName, value) {
          return _this5.root_.style.setProperty(propertyName, value);
        }
      }));
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'foundation',
    get: function get() {
      return this.foundation_;
    }

    /**
     * Returns whether a trailing icon click should trigger exit/removal of the chip.
     * @return {boolean}
     */

  }, {
    key: 'shouldRemoveOnTrailingIconClick',
    get: function get() {
      return this.foundation_.getShouldRemoveOnTrailingIconClick();
    }

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     * @param {boolean} shouldRemove
     */
    ,
    set: function set(shouldRemove) {
      return this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCChip(root);
    }
  }]);

  return MDCChip;
}(_component2.default);

exports.MDCChip = MDCChip;
exports.MDCChipFoundation = _foundation.MDCChipFoundation;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Chip.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCChipAdapter = function () {
  function MDCChipAdapter() {
    _classCallCheck(this, MDCChipAdapter);
  }

  _createClass(MDCChipAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns true if the root element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Adds a class to the leading icon element.
     * @param {string} className
     */

  }, {
    key: "addClassToLeadingIcon",
    value: function addClassToLeadingIcon(className) {}

    /**
     * Removes a class from the leading icon element.
     * @param {string} className
     */

  }, {
    key: "removeClassFromLeadingIcon",
    value: function removeClassFromLeadingIcon(className) {}

    /**
     * Returns true if target has className, false otherwise.
     * @param {!EventTarget} target
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "eventTargetHasClass",
    value: function eventTargetHasClass(target, className) {}

    /**
     * Emits a custom "MDCChip:interaction" event denoting the chip has been
     * interacted with (typically on click or keydown).
     */

  }, {
    key: "notifyInteraction",
    value: function notifyInteraction() {}

    /**
     * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
     * interacted with (typically on click or keydown).
     */

  }, {
    key: "notifyTrailingIconInteraction",
    value: function notifyTrailingIconInteraction() {}

    /**
     * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
     */

  }, {
    key: "notifyRemoval",
    value: function notifyRemoval() {}

    /**
     * Returns the computed property value of the given style property on the root element.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getComputedStyleValue",
    value: function getComputedStyleValue(propertyName) {}

    /**
     * Sets the property value of the given style property on the root element.
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setStyleProperty",
    value: function setStyleProperty(propertyName, value) {}
  }]);

  return MDCChipAdapter;
}();

exports.default = MDCChipAdapter;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  INTERACTION_EVENT: 'MDCChip:interaction',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  REMOVAL_EVENT: 'MDCChip:removal',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};

/** @enum {string} */
var cssClasses = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  TRAILING_ICON: 'mdc-chip__icon--trailing',
  SELECTED: 'mdc-chip--selected'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// eslint-disable-next-line no-unused-vars


var _foundation = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Chip Set.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip Set into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCChipSetAdapter = function () {
  function MDCChipSetAdapter() {
    _classCallCheck(this, MDCChipSetAdapter);
  }

  _createClass(MDCChipSetAdapter, [{
    key: 'hasClass',

    /**
     * Returns true if the root element contains the given class name.
     * @param {string} className
     * @return {boolean}
     */
    value: function hasClass(className) {}

    /**
     * Removes the chip object from the chip set.
     * @param {!Object} chip
     */

  }, {
    key: 'removeChip',
    value: function removeChip(chip) {}
  }]);

  return MDCChipSetAdapter;
}();

exports.default = MDCChipSetAdapter;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC List. Provides an interface for managing focus.
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCListAdapter = function () {
  function MDCListAdapter() {
    _classCallCheck(this, MDCListAdapter);
  }

  _createClass(MDCListAdapter, [{
    key: "getListItemCount",

    /** @return {number} */
    value: function getListItemCount() {}

    /**
     * @return {number} */

  }, {
    key: "getFocusedElementIndex",
    value: function getFocusedElementIndex() {}

    /** @param {Element} node */

  }, {
    key: "getListItemIndex",
    value: function getListItemIndex(node) {}

    /**
     * @param {number} index
     * @param {string} attribute
     * @param {string} value
     */

  }, {
    key: "setAttributeForElementIndex",
    value: function setAttributeForElementIndex(index, attribute, value) {}

    /**
     * @param {number} index
     * @param {string} attribute
     */

  }, {
    key: "removeAttributeForElementIndex",
    value: function removeAttributeForElementIndex(index, attribute) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "addClassForElementIndex",
    value: function addClassForElementIndex(index, className) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "removeClassForElementIndex",
    value: function removeClassForElementIndex(index, className) {}

    /**
     * Focuses list item at the index specified.
     * @param {number} index
     */

  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(index) {}

    /**
     * Checks if the provided element is a focusable sub-element.
     * @param {Element} ele
     */

  }, {
    key: "isElementFocusable",
    value: function isElementFocusable(ele) {}

    /**
     * Checks if the provided element is contains the mdc-list-item class.
     * @param {Element} ele
     */

  }, {
    key: "isListItem",
    value: function isListItem(ele) {}

    /**
     * Sets the tabindex to the value specified for all button/a element children of
     * the list item at the index specified.
     * @param {number} listItemIndex
     * @param {number} tabIndexValue
     */

  }, {
    key: "setTabIndexForListItemChildren",
    value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}
  }]);

  return MDCListAdapter;
}();

exports.default = MDCListAdapter;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected'
};

/** @enum {string} */
var strings = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_VERTICAL: 'vertical',
  ARIA_SELECTED: 'aria-selected',
  FOCUSABLE_CHILD_ELEMENTS: 'button:not(:disabled), a',
  ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(34);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(87);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(14);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /**
     * @return {!MDCRippleFoundation}
     * @override
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }

    /** @override */

  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
module.exports = __webpack_require__(37);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);
__webpack_require__(15);
__webpack_require__(11);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(15);

var _chart = __webpack_require__(11);

var _particle = __webpack_require__(16);

var _data = __webpack_require__(6);

var _slider = __webpack_require__(44);

var _tabBar = __webpack_require__(47);

var _iconButton = __webpack_require__(63);

var _chips = __webpack_require__(67);

var _formField = __webpack_require__(71);

var _radio = __webpack_require__(75);

var _list = __webpack_require__(79);

var _index = __webpack_require__(81);

var _switch = __webpack_require__(85);

// TAB BAR \\

var tabs = [];

var tabBar = new _tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
for (var i = 0; i < 3; i++) {
    tabs[i] = document.getElementById('tab-' + i);
}
tabBar.listen('MDCTabBar:activated', function (e) {
    for (var _i = 0; _i < tabBar.tabList_.length; _i++) {
        if (e.detail.index == _i) {
            tabs[_i].style.display = "block";
        } else {
            tabs[_i].style.display = "none";
        }
        for (var slider in varSliders) {
            varSliders[slider].layout();
        }
    }
});

// SLIDERS \\

var varSliders = [];

Array.from(document.getElementsByClassName('var-slider')).forEach(function (element) {
    var slider = new _slider.MDCSlider(element),
        variable = slider.root_.getAttribute('var');

    varSliders[variable] = slider;

    slider.listen('MDCSlider:input', function () {
        var temp = Object.assign({}, _data.variables); // make a copy of 'variables'
        temp[variable] = slider.value;
        recompute(variable, locked, temp); // do calculations on copy
        _data.variables[variable] = temp[variable]; // then output results to 'variables'
        _data.variables[locked] = temp[locked]; // so that the 'set' proxy method isn't called in intermediate steps.
        if (_data.options.lineChart) {
            (0, _chart.addData)(variable, locked, { x: varSliders[variable].value, y: varSliders[locked].value });
        }
    });
});

_data.variables.addEventListener('set', function (evt) {
    if (varLabels[evt.variable] && varSliders[evt.variable]) {
        varLabels[evt.variable].innerText = evt.value.toFixed(2);
        varSliders[evt.variable].value = evt.value;
        varSliders[evt.variable].layout();
    }
    if (evt.variable.startsWith('species') || evt.variable.startsWith('moles')) {
        var n = Number(evt.variable.substring(evt.variable.length - 1));
        var speciesIcon = document.getElementById('species-list').children[n].querySelector('span');
        if (_data.variables["moles" + n] > 0) {
            speciesIcon.style.color = _particle.Element[_data.variables["species" + n]].color;
            speciesIcon.style.opacity = 1;
        } else {
            speciesIcon.style.color = 'var(--mdc-on-surface)';
            speciesIcon.style.opacity = 0.38;
        }
        if (evt.variable.startsWith('species')) {
            speciesIcon.style.fontSize = _particle.Element[_data.variables["species" + n]].radius / 10 + "pt";

            var el = _particle.Element[_data.variables["species" + n]];
            var fields = Array.from(document.querySelectorAll(".species" + n + " .element-label span"));
            fields[0].innerText = '' + el.number;
            fields[1].innerText = '' + el.name;
            fields[2].innerText = 'Radius: ' + el.radius + ' pm';
            fields[3].innerText = 'Mass: ' + el.mass + ' u';

            document.getElementById('species-list').children[n].children[1].setAttribute('element', el.name);

            // make sure all other chips are deselected
            if (document.querySelector('.species' + n + ' .mdc-chip-set .mdc-chip--selected')) {
                Array.from(document.querySelectorAll('.species' + n + ' .mdc-chip-set .mdc-chip--selected')).forEach(function (el) {
                    el.classList.remove("mdc-chip--selected");
                });
            }

            // select chosen chip
            var chipEl = document.querySelector('.species' + n + ' .mdc-chip-set #species-chip-' + _data.variables['species' + n].toLowerCase());
            if (!chipEl.classList.contains("mdc-chip--selected")) {
                chipEl.classList.add("mdc-chip--selected");
            }
        }
    }
});

function recompute(x, y, variables) {
    var P = variables.pressure,
        V = variables.volume,
        n0 = variables.moles0,
        n1 = variables.moles1,
        n2 = variables.moles2,
        R = 0.0821,
        T = variables.temperature;
    var newValue = void 0;
    if (y == "pressure") {
        newValue = (n0 + n1 + n2) * R * T / V;
    } else if (y == "volume") {
        newValue = (n0 + n1 + n2) * R * T / P;
    } else if (y == "moles0") {
        newValue = P * V / R / T - n1 - n2;
    } else if (y == "moles1") {
        newValue = P * V / R / T - n0 - n2;
    } else if (y == "moles2") {
        newValue = P * V / R / T - n0 - n1;
    } else if (y == "temperature") {
        newValue = P * V / (n0 + n1 + n2) / R;
    }

    variables[y] = newValue.clamp(varSliders[y].min, varSliders[y].max);

    if (newValue < varSliders[y].min || newValue > varSliders[y].max) {
        recompute(null, x, variables);
    }
}

// SLIDER LABELS \\

var varLabels = [];

Array.from(document.getElementsByClassName('label')).forEach(function (element) {
    varLabels[element.getAttribute('var')] = element;
});

// LOCK BUTTONS \\

var toggleLockButtons = [];

var locked = document.querySelector('.toggle-lock[aria-pressed="true"]').getAttribute('var');

Array.from(document.getElementsByClassName('toggle-lock')).forEach(function (element) {
    var iconButton = new _iconButton.MDCIconButtonToggle(element);
    toggleLockButtons[iconButton.root_.getAttribute('var')] = iconButton;
    iconButton.listen('MDCIconButtonToggle:change', function () {
        if (iconButton.on) {
            for (var _element in toggleLockButtons) {
                if (toggleLockButtons[_element] == iconButton) {
                    locked = _element;
                    iconButton.root_.setAttribute('disabled', 'true');
                    iconButton.on = true;
                    varSliders[_element].disabled = true;
                } else {
                    toggleLockButtons[_element].root_.removeAttribute('disabled');
                    toggleLockButtons[_element].on = false;
                    varSliders[_element].disabled = false;
                }
            }
        }
    });
});

// RESET BUTTON \\

tabs[0].querySelector('#reset-button').addEventListener('click', function () {
    _data.variables.temperature = 273.15;
    _data.variables.volume = 22.40;
    _data.variables.pressure = 1.00;
    var totalMoles = _data.variables.moles0 + _data.variables.moles1 + _data.variables.moles2;
    _data.variables.moles0 = _data.variables.moles0 / totalMoles;
    _data.variables.moles1 = _data.variables.moles1 / totalMoles;
    _data.variables.moles2 = _data.variables.moles2 / totalMoles;
});

// SPECIES LIST \\

var listEle = document.getElementById('species-list');
var list = new _list.MDCList(listEle);
list.singleSelection = true;
list.listen('click', function (evt) {
    setSpecies(list.foundation_.selectedIndex_);
});
list.listen('keydown', function (evt) {
    setSpecies(list.foundation_.selectedIndex_);
});

var currentSpecies = -1;

function setSpecies(sp) {

    function hide() {
        Array.from(document.getElementsByClassName('gas-options')).forEach(function (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-20px)';
            setTimeout(function () {
                return element.style.display = "none";
            }, 175);
        });
    }
    function show(i) {
        Array.from(document.getElementsByClassName('gas-options')).forEach(function (element) {
            if (element.classList.contains("species" + i)) {
                element.style.display = "block";
                requestAnimationFrame(function () {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0px)';
                });
            }
        });
        varSliders["moles" + i].layout();
    }

    if (currentSpecies != sp) {
        if (sp == -1) {
            hide();
        } else {
            if (currentSpecies == -1) {
                show(sp);
            } else {
                hide();
                setTimeout(function () {
                    return show(sp);
                }, 175);
            }
        }
        currentSpecies = sp;
    }
}

// ELEMENT CHIPS \\

Array.from(document.getElementsByClassName('mdc-chip-set')).forEach(function (chipSetEl) {
    new _chips.MDCChipSet(chipSetEl);
    Array.from(chipSetEl.children).forEach(function (chipEl) {
        chipEl.addEventListener('click', function (evt) {
            // update variables.speciesX
            _data.variables["species" + currentSpecies] = evt.target.innerText.trim();
        });
    });
});

// DISPLAY OPTIONS \\

var trailSwitchEl = document.querySelector('.trail-switch');
var trailSwitch = new _switch.MDCSwitch(trailSwitchEl);
trailSwitchEl.addEventListener('click', function () {
    _data.options.trail = trailSwitch.checked;
});

var darkSwitchEl = document.querySelector('.dark-switch');
var darkSwitch = new _switch.MDCSwitch(darkSwitchEl);
darkSwitchEl.addEventListener('click', function () {
    if (darkSwitch.checked) {
        document.documentElement.style.setProperty("--mdc-theme-primary", "#FFFFFF");
        document.documentElement.style.setProperty("--mdc-theme-on-primary", "#37474f");
        document.documentElement.style.setProperty("--mdc-theme-background", "#212121");
        document.documentElement.style.setProperty("--mdc-theme-surface", "#424242");
        document.documentElement.style.setProperty("--mdc-theme-on-surface", "#FFFFFF");
    } else {
        document.documentElement.style.setProperty("--mdc-theme-primary", "#37474f");
        document.documentElement.style.setProperty("--mdc-theme-on-primary", "#FFFFFF");
        document.documentElement.style.setProperty("--mdc-theme-background", "#F2F2F2");
        document.documentElement.style.setProperty("--mdc-theme-surface", "#FFFFFF");
        document.documentElement.style.setProperty("--mdc-theme-on-surface", "#000000");
    }
});

// CHART PANEL \\

var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _index.MDCTopAppBar(topAppBarElement);

var card = false;

document.getElementById('chart-fab').addEventListener('click', function (evt) {
    var fab = document.getElementById('chart-fab');
    if (!card) {
        if (_data.variables.lineChart) {
            (0, _chart.clearData)();
        }
        card = true;
        fab.style.borderRadius = "0";
        fab.style.backgroundColor = "var(--mdc-theme-surface)";
        fab.style.cursor = "default";
        fab.querySelector(".mdc-fab__icon").style.display = "none";
        fab.querySelector(".mdc-fab__icon").style.opacity = "0";
        fab.querySelector("header").classList.toggle('hidden');
        fab.querySelector("#chart").classList.toggle('hidden');
        fab.querySelector("header").style.opacity = "1";
        fab.querySelector("#chart").style.opacity = "1";

        updateCardSize();
    }
});

window.addEventListener('resize', function (event) {
    if (card) {
        updateCardSize();
    }
});

var chartType = "line";
document.querySelector('#chart-type').addEventListener('click', function (evt) {
    var a = 0,
        flag = false;
    tick();
    function tick() {
        var w = Number(document.getElementById("chart-fab").clientWidth);
        a += Math.PI / 30;
        document.getElementById("chart").style.width = w * Math.cos(a);
        console.log("hello?");
        if (a >= Math.PI / 2) {
            if (!flag) {
                if (chartType == "line") {
                    chartType = "bar";
                    _data.options.lineChart = false;
                    evt.target.innerHTML = "show_chart";
                    document.querySelector("#chart-fab span.mdc-top-app-bar__title").innerHTML = "Particles";
                } else {
                    chartType = "line";
                    _data.options.lineChart = true;
                    evt.target.innerHTML = "bar_chart";
                    document.querySelector("#chart-fab span.mdc-top-app-bar__title").innerHTML = "Relations";
                }
                flag = true;
            }
            document.getElementById("chart").style.width = -w * Math.cos(a);
        }
        if (a <= Math.PI) {
            requestAnimationFrame(tick);
        }
    }
    document.getElementById("chart").style.width = Number(document.getElementById("chart-fab").clientWidth);
});

document.querySelector('#close-chart').addEventListener('click', function (evt) {
    var fab = document.querySelector('#chart-fab');
    fab.style.borderRadius = "50%";
    fab.style.backgroundColor = "var(--mdc-theme-secondary, #F9AA33)";

    fab.style.width = '56px';
    fab.style.height = '56px';
    fab.style.cursor = "pointer";

    fab.querySelector("header").style.opacity = "0";
    fab.querySelector("#chart").style.opacity = "0";

    setTimeout(function () {
        card = false;
        fab.querySelector(".mdc-fab__icon").style.display = "block";
        fab.querySelector("header").classList.toggle('hidden');
        fab.querySelector("#chart").classList.toggle('hidden');
        requestAnimationFrame(function () {
            fab.querySelector(".mdc-fab__icon").style.opacity = 1;
        });
    }, 600);
});

function updateCardSize() {
    var fab = document.getElementById('chart-fab');
    var w = window.innerWidth;
    var h = window.innerHeight - document.getElementById("controls-card").clientHeight;

    if (w * 1.5 < h) {
        // portrait
        fab.style.width = w - parseFloat(window.getComputedStyle(fab).right) * 2 + 'px';
        fab.style.height = fab.style.width;
    } else {
        // landscape
        fab.style.height = Math.min(w / 2 - parseFloat(window.getComputedStyle(fab).right) * 2, h - parseFloat(window.getComputedStyle(fab).bottom) * 2) + 'px';
        fab.style.width = fab.style.height;
    }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }
  return debugs[set];
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};

  array.forEach(function (val, idx) {
    hash[val] = true;
  });

  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(42);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(43);

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40), __webpack_require__(41)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isBuffer(arg) {
  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSlider = exports.MDCSliderFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _constants = __webpack_require__(18);

var _adapter = __webpack_require__(19);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(45);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCSliderFoundation>
 */
var MDCSlider = function (_MDCComponent) {
  _inherits(MDCSlider, _MDCComponent);

  _createClass(MDCSlider, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSlider(root);
    }
  }]);

  function MDCSlider() {
    var _ref;

    _classCallCheck(this, MDCSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCSlider.__proto__ || Object.getPrototypeOf(MDCSlider)).call.apply(_ref, [this].concat(args)));

    _this.thumbContainer_;
    /** @type {?Element} */
    _this.track_;
    /** @type {?Element} */
    _this.pinValueMarker_;
    /** @type {?Element} */
    _this.trackMarkerContainer_;
    return _this;
  }

  /** @return {number} */


  _createClass(MDCSlider, [{
    key: 'initialize',
    value: function initialize() {
      this.thumbContainer_ = this.root_.querySelector(_constants.strings.THUMB_CONTAINER_SELECTOR);
      this.track_ = this.root_.querySelector(_constants.strings.TRACK_SELECTOR);
      this.pinValueMarker_ = this.root_.querySelector(_constants.strings.PIN_VALUE_MARKER_SELECTOR);
      this.trackMarkerContainer_ = this.root_.querySelector(_constants.strings.TRACK_MARKER_CONTAINER_SELECTOR);
    }

    /**
     * @return {!MDCSliderFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default(
      /** @type {!MDCSliderAdapter} */{
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        getAttribute: function getAttribute(name) {
          return _this2.root_.getAttribute(name);
        },
        setAttribute: function setAttribute(name, value) {
          return _this2.root_.setAttribute(name, value);
        },
        removeAttribute: function removeAttribute(name) {
          return _this2.root_.removeAttribute(name);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        getTabIndex: function getTabIndex() {
          return _this2.root_.tabIndex;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          _this2.root_.removeEventListener(type, handler);
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
          _this2.thumbContainer_.addEventListener(type, handler);
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
          _this2.thumbContainer_.removeEventListener(type, handler);
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
          document.body.addEventListener(type, handler);
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
          document.body.removeEventListener(type, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          window.removeEventListener('resize', handler);
        },
        notifyInput: function notifyInput() {
          _this2.emit(_constants.strings.INPUT_EVENT, _this2);
        },
        notifyChange: function notifyChange() {
          _this2.emit(_constants.strings.CHANGE_EVENT, _this2);
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
          _this2.thumbContainer_.style.setProperty(propertyName, value);
        },
        setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
          _this2.track_.style.setProperty(propertyName, value);
        },
        setMarkerValue: function setMarkerValue(value) {
          _this2.pinValueMarker_.innerText = value;
        },
        appendTrackMarkers: function appendTrackMarkers(numMarkers) {
          var frag = document.createDocumentFragment();
          for (var i = 0; i < numMarkers; i++) {
            var marker = document.createElement('div');
            marker.classList.add('mdc-slider__track-marker');
            frag.appendChild(marker);
          }
          _this2.trackMarkerContainer_.appendChild(frag);
        },
        removeTrackMarkers: function removeTrackMarkers() {
          while (_this2.trackMarkerContainer_.firstChild) {
            _this2.trackMarkerContainer_.removeChild(_this2.trackMarkerContainer_.firstChild);
          }
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
          // We remove and append new nodes, thus, the last track marker must be dynamically found.
          var lastTrackMarker = _this2.root_.querySelector(_constants.strings.LAST_TRACK_MARKER_SELECTOR);
          lastTrackMarker.style.setProperty(propertyName, value);
        },
        isRTL: function isRTL() {
          return getComputedStyle(_this2.root_).direction === 'rtl';
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var origValueNow = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUENOW));
      this.min = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMIN)) || this.min;
      this.max = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMAX)) || this.max;
      this.step = parseFloat(this.root_.getAttribute(_constants.strings.STEP_DATA_ATTR)) || this.step;
      this.value = origValueNow || this.value;
      this.disabled = this.root_.hasAttribute(_constants.strings.ARIA_DISABLED) && this.root_.getAttribute(_constants.strings.ARIA_DISABLED) !== 'false';
      this.foundation_.setupTrackMarker();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @param {number=} amount */

  }, {
    key: 'stepUp',
    value: function stepUp() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

      this.value += amount;
    }

    /** @param {number=} amount */

  }, {
    key: 'stepDown',
    value: function stepDown() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

      this.value -= amount;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {number} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {number} */

  }, {
    key: 'min',
    get: function get() {
      return this.foundation_.getMin();
    }

    /** @param {number} min */
    ,
    set: function set(min) {
      this.foundation_.setMin(min);
    }

    /** @return {number} */

  }, {
    key: 'max',
    get: function get() {
      return this.foundation_.getMax();
    }

    /** @param {number} max */
    ,
    set: function set(max) {
      this.foundation_.setMax(max);
    }

    /** @return {number} */

  }, {
    key: 'step',
    get: function get() {
      return this.foundation_.getStep();
    }

    /** @param {number} step */
    ,
    set: function set(step) {
      this.foundation_.setStep(step);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSlider;
}(_component2.default);

exports.MDCSliderFoundation = _foundation2.default;
exports.MDCSlider = MDCSlider;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(18);

var _adapter = __webpack_require__(19);

var _adapter2 = _interopRequireDefault(_adapter);

var _index = __webpack_require__(46);

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/** @enum {string} */
var KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};

/** @enum {string} */
var MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove'
};

var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];

/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */

var MDCSliderFoundation = function (_MDCFoundation) {
  _inherits(MDCSliderFoundation, _MDCFoundation);

  _createClass(MDCSliderFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return {!MDCSliderAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSliderAdapter} */{
          hasClass: function hasClass() {
            return (/* className: string */ /* boolean */false
            );
          },
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getAttribute: function getAttribute() {
            return (/* name: string */ /* string|null */null
            );
          },
          setAttribute: function setAttribute() /* name: string, value: string */{},
          removeAttribute: function removeAttribute() /* name: string */{},
          computeBoundingRect: function computeBoundingRect() {
            return (/* ClientRect */{
                top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0
              }
            );
          },
          getTabIndex: function getTabIndex() {
            return (/* number */0
            );
          },
          registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
          registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
          registerBodyInteractionHandler: function registerBodyInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() /* type: string, handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          notifyInput: function notifyInput() {},
          notifyChange: function notifyChange() {},
          setThumbContainerStyleProperty: function setThumbContainerStyleProperty() /* propertyName: string, value: string */{},
          setTrackStyleProperty: function setTrackStyleProperty() /* propertyName: string, value: string */{},
          setMarkerValue: function setMarkerValue() /* value: number */{},
          appendTrackMarkers: function appendTrackMarkers() /* numMarkers: number */{},
          removeTrackMarkers: function removeTrackMarkers() {},
          setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() /* propertyName: string, value: string */{},
          isRTL: function isRTL() {
            return (/* boolean */false
            );
          }
        }
      );
    }

    /**
     * Creates a new instance of MDCSliderFoundation
     * @param {?MDCSliderAdapter} adapter
     */

  }]);

  function MDCSliderFoundation(adapter) {
    _classCallCheck(this, MDCSliderFoundation);

    /** @private {?ClientRect} */
    var _this = _possibleConstructorReturn(this, (MDCSliderFoundation.__proto__ || Object.getPrototypeOf(MDCSliderFoundation)).call(this, Object.assign(MDCSliderFoundation.defaultAdapter, adapter)));

    _this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    _this.savedTabIndex_ = NaN;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;
    _this.updateUIFrame_ = 0;
    _this.thumbContainerPointerHandler_ = function () {
      _this.handlingThumbTargetEvt_ = true;
    };
    _this.interactionStartHandler_ = function (evt) {
      return _this.handleDown_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };
    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };
    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    return _this;
  }

  _createClass(MDCSliderFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.isDiscrete_ = this.adapter_.hasClass(_constants.cssClasses.IS_DISCRETE);
      this.hasTrackMarker_ = this.adapter_.hasClass(_constants.cssClasses.HAS_TRACK_MARKER);
      DOWN_EVENTS.forEach(function (evtName) {
        return _this2.adapter_.registerInteractionHandler(evtName, _this2.interactionStartHandler_);
      });
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      this.layout();
      // At last step, provide a reasonable default value to discrete slider
      if (this.isDiscrete_ && this.getStep() == 0) {
        this.step_ = 1;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterInteractionHandler(evtName, _this3.interactionStartHandler_);
      });
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'setupTrackMarker',
    value: function setupTrackMarker() {
      if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
        var min = this.getMin();
        var max = this.getMax();
        var step = this.getStep();
        var numMarkers = (max - min) / step;

        // In case distance between max & min is indivisible to step,
        // we place the secondary to last marker proportionally at where thumb
        // could reach and place the last marker at max value
        var indivisible = Math.ceil(numMarkers) !== numMarkers;
        if (indivisible) {
          numMarkers = Math.ceil(numMarkers);
        }

        this.adapter_.removeTrackMarkers();
        this.adapter_.appendTrackMarkers(numMarkers);

        if (indivisible) {
          var lastStepRatio = (max - numMarkers * step) / step + 1;
          var flex = (0, _index.getCorrectPropertyName)(window, 'flex');
          this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
        }
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.rect_ = this.adapter_.computeBoundingRect();
      this.updateUIForCurrentValue_();
    }

    /** @return {number} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value_;
    }

    /** @param {number} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setValue_(value, false);
    }

    /** @return {number} */

  }, {
    key: 'getMax',
    value: function getMax() {
      return this.max_;
    }

    /** @param {number} max */

  }, {
    key: 'setMax',
    value: function setMax(max) {
      if (max < this.min_) {
        throw new Error('Cannot set max to be less than the slider\'s minimum value');
      }
      this.max_ = max;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMAX, String(this.max_));
      this.setupTrackMarker();
    }

    /** @return {number} */

  }, {
    key: 'getMin',
    value: function getMin() {
      return this.min_;
    }

    /** @param {number} min */

  }, {
    key: 'setMin',
    value: function setMin(min) {
      if (min > this.max_) {
        throw new Error('Cannot set min to be greater than the slider\'s maximum value');
      }
      this.min_ = min;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMIN, String(this.min_));
      this.setupTrackMarker();
    }

    /** @return {number} */

  }, {
    key: 'getStep',
    value: function getStep() {
      return this.step_;
    }

    /** @param {number} step */

  }, {
    key: 'setStep',
    value: function setStep(step) {
      if (step < 0) {
        throw new Error('Step cannot be set to a negative number');
      }
      if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
        step = 1;
      }
      this.step_ = step;
      this.setValue_(this.value_, false, true);
      this.setupTrackMarker();
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.disabled_ = disabled;
      this.toggleClass_(_constants.cssClasses.DISABLED, this.disabled_);
      if (this.disabled_) {
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.setAttribute(_constants.strings.ARIA_DISABLED, 'true');
        this.adapter_.removeAttribute('tabindex');
      } else {
        this.adapter_.removeAttribute(_constants.strings.ARIA_DISABLED);
        if (!isNaN(this.savedTabIndex_)) {
          this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
        }
      }
    }

    /**
     * Called when the user starts interacting with the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleDown_',
    value: function handleDown_(evt) {
      var _this4 = this;

      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;
      this.setActive_(true);

      var moveHandler = function moveHandler(evt) {
        _this4.handleMove_(evt);
      };

      // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
      // do not always fire these consistently in pairs.
      // (See https://github.com/material-components/material-components-web/issues/1192)
      var upHandler = function upHandler() {
        _this4.handleUp_();
        _this4.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
        UP_EVENTS.forEach(function (evtName) {
          return _this4.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
        });
      };

      this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach(function (evtName) {
        return _this4.adapter_.registerBodyInteractionHandler(evtName, upHandler);
      });
      this.setValueFromEvt_(evt);
    }

    /**
     * Called when the user moves the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleMove_',
    value: function handleMove_(evt) {
      evt.preventDefault();
      this.setValueFromEvt_(evt);
    }

    /**
     * Called when the user's interaction with the slider ends
     * @private
     */

  }, {
    key: 'handleUp_',
    value: function handleUp_() {
      this.setActive_(false);
      this.adapter_.notifyChange();
    }

    /**
     * Returns the pageX of the event
     * @param {!Event} evt
     * @return {number}
     * @private
     */

  }, {
    key: 'getPageX_',
    value: function getPageX_(evt) {
      if (evt.targetTouches && evt.targetTouches.length > 0) {
        return evt.targetTouches[0].pageX;
      }
      return evt.pageX;
    }

    /**
     * Sets the slider value from an event
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'setValueFromEvt_',
    value: function setValueFromEvt_(evt) {
      var pageX = this.getPageX_(evt);
      var value = this.computeValueFromPageX_(pageX);
      this.setValue_(value, true);
    }

    /**
     * Computes the new value from the pageX position
     * @param {number} pageX
     * @return {number}
     */

  }, {
    key: 'computeValueFromPageX_',
    value: function computeValueFromPageX_(pageX) {
      var max = this.max_,
          min = this.min_;

      var xPos = pageX - this.rect_.left;
      var pctComplete = xPos / this.rect_.width;
      if (this.adapter_.isRTL()) {
        pctComplete = 1 - pctComplete;
      }
      // Fit the percentage complete between the range [min,max]
      // by remapping from [0, 1] to [min, min+(max-min)].
      return min + pctComplete * (max - min);
    }

    /**
     * Handles keydown events
     * @param {!Event} evt
     */

  }, {
    key: 'handleKeydown_',
    value: function handleKeydown_(evt) {
      var keyId = this.getKeyId_(evt);
      var value = this.getValueForKeyId_(keyId);
      if (isNaN(value)) {
        return;
      }

      // Prevent page from scrolling due to key presses that would normally scroll the page
      evt.preventDefault();
      this.adapter_.addClass(_constants.cssClasses.FOCUS);
      this.setValue_(value, true);
      this.adapter_.notifyChange();
    }

    /**
     * Returns the computed name of the event
     * @param {!Event} kbdEvt
     * @return {string}
     */

  }, {
    key: 'getKeyId_',
    value: function getKeyId_(kbdEvt) {
      if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
        return KEY_IDS.ARROW_LEFT;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
        return KEY_IDS.ARROW_RIGHT;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
        return KEY_IDS.ARROW_UP;
      }
      if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
        return KEY_IDS.ARROW_DOWN;
      }
      if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
        return KEY_IDS.HOME;
      }
      if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
        return KEY_IDS.END;
      }
      if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
        return KEY_IDS.PAGE_UP;
      }
      if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
        return KEY_IDS.PAGE_DOWN;
      }

      return '';
    }

    /**
     * Computes the value given a keyboard key ID
     * @param {string} keyId
     * @return {number}
     */

  }, {
    key: 'getValueForKeyId_',
    value: function getValueForKeyId_(keyId) {
      var max = this.max_,
          min = this.min_,
          step = this.step_;

      var delta = step || (max - min) / 100;
      var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
      if (valueNeedsToBeFlipped) {
        delta = -delta;
      }

      switch (keyId) {
        case KEY_IDS.ARROW_LEFT:
        case KEY_IDS.ARROW_DOWN:
          return this.value_ - delta;
        case KEY_IDS.ARROW_RIGHT:
        case KEY_IDS.ARROW_UP:
          return this.value_ + delta;
        case KEY_IDS.HOME:
          return this.min_;
        case KEY_IDS.END:
          return this.max_;
        case KEY_IDS.PAGE_UP:
          return this.value_ + delta * _constants.numbers.PAGE_FACTOR;
        case KEY_IDS.PAGE_DOWN:
          return this.value_ - delta * _constants.numbers.PAGE_FACTOR;
        default:
          return NaN;
      }
    }
  }, {
    key: 'handleFocus_',
    value: function handleFocus_() {
      if (this.preventFocusState_) {
        return;
      }
      this.adapter_.addClass(_constants.cssClasses.FOCUS);
    }
  }, {
    key: 'handleBlur_',
    value: function handleBlur_() {
      this.preventFocusState_ = false;
      this.adapter_.removeClass(_constants.cssClasses.FOCUS);
    }

    /**
     * Sets the value of the slider
     * @param {number} value
     * @param {boolean} shouldFireInput
     * @param {boolean=} force
     */

  }, {
    key: 'setValue_',
    value: function setValue_(value, shouldFireInput) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value === this.value_ && !force) {
        return;
      }

      var min = this.min_,
          max = this.max_;

      var valueSetToBoundary = value === min || value === max;
      if (this.step_ && !valueSetToBoundary) {
        value = this.quantize_(value);
      }
      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }
      this.value_ = value;
      this.adapter_.setAttribute(_constants.strings.ARIA_VALUENOW, String(this.value_));
      this.updateUIForCurrentValue_();

      if (shouldFireInput) {
        this.adapter_.notifyInput();
        if (this.isDiscrete_) {
          this.adapter_.setMarkerValue(value);
        }
      }
    }

    /**
     * Calculates the quantized value
     * @param {number} value
     * @return {number}
     */

  }, {
    key: 'quantize_',
    value: function quantize_(value) {
      var numSteps = Math.round(value / this.step_);
      var quantizedVal = numSteps * this.step_;
      return quantizedVal;
    }
  }, {
    key: 'updateUIForCurrentValue_',
    value: function updateUIForCurrentValue_() {
      var _this5 = this;

      var max = this.max_,
          min = this.min_,
          value = this.value_;

      var pctComplete = (value - min) / (max - min);
      var translatePx = pctComplete * this.rect_.width;
      if (this.adapter_.isRTL()) {
        translatePx = this.rect_.width - translatePx;
      }

      var transformProp = (0, _index.getCorrectPropertyName)(window, 'transform');
      var transitionendEvtName = (0, _index.getCorrectEventName)(window, 'transitionend');

      if (this.inTransit_) {
        var onTransitionEnd = function onTransitionEnd() {
          _this5.setInTransit_(false);
          _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
        };
        this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      }

      this.updateUIFrame_ = requestAnimationFrame(function () {
        // NOTE(traviskaufman): It would be nice to use calc() here,
        // but IE cannot handle calcs in transforms correctly.
        // See: https://goo.gl/NC2itk
        // Also note that the -50% offset is used to center the slider thumb.
        _this5.adapter_.setThumbContainerStyleProperty(transformProp, 'translateX(' + translatePx + 'px) translateX(-50%)');
        _this5.adapter_.setTrackStyleProperty(transformProp, 'scaleX(' + pctComplete + ')');
      });
    }

    /**
     * Toggles the active state of the slider
     * @param {boolean} active
     */

  }, {
    key: 'setActive_',
    value: function setActive_(active) {
      this.active_ = active;
      this.toggleClass_(_constants.cssClasses.ACTIVE, this.active_);
    }

    /**
     * Toggles the inTransit state of the slider
     * @param {boolean} inTransit
     */

  }, {
    key: 'setInTransit_',
    value: function setInTransit_(inTransit) {
      this.inTransit_ = inTransit;
      this.toggleClass_(_constants.cssClasses.IN_TRANSIT, this.inTransit_);
    }

    /**
     * Conditionally adds or removes a class based on shouldBePresent
     * @param {string} className
     * @param {boolean} shouldBePresent
     */

  }, {
    key: 'toggleClass_',
    value: function toggleClass_(className, shouldBePresent) {
      if (shouldBePresent) {
        this.adapter_.addClass(className);
      } else {
        this.adapter_.removeClass(className);
      }
    }
  }]);

  return MDCSliderFoundation;
}(_foundation2.default);

exports.default = MDCSliderFoundation;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

exports.transformStyleProperties = transformStyleProperties;
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTabBarFoundation = exports.MDCTabBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(20);

var _index2 = __webpack_require__(55);

var _adapter = __webpack_require__(26);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(61);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

/**
 * @extends {MDCComponent<!MDCTabBarFoundation>}
 * @final
 */
var MDCTabBar = function (_MDCComponent) {
  _inherits(MDCTabBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTabBar() {
    var _ref;

    _classCallCheck(this, MDCTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Array<!MDCTab>} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabBar.__proto__ || Object.getPrototypeOf(MDCTabBar)).call.apply(_ref, [this].concat(args)));

    _this.tabList_;

    /** @type {(function(!Element): !MDCTab)} */
    _this.tabFactory_;

    /** @private {?MDCTabScroller} */
    _this.tabScroller_;

    /** @type {(function(!Element): !MDCTabScroller)} */
    _this.tabScrollerFactory_;

    /** @private {?function(?Event): undefined} */
    _this.handleTabInteraction_;

    /** @private {?function(?Event): undefined} */
    _this.handleKeyDown_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTabBar}
   */


  _createClass(MDCTabBar, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCTab)=} tabFactory A function which creates a new MDCTab
     * @param {(function(!Element): !MDCTabScroller)=} tabScrollerFactory A function which creates a new MDCTabScroller
     */
    value: function initialize() {
      var _this2 = this;

      var tabFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _index.MDCTab(el);
      };
      var tabScrollerFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index2.MDCTabScroller(el);
      };

      this.tabFactory_ = tabFactory;
      this.tabScrollerFactory_ = tabScrollerFactory;

      var tabElements = [].slice.call(this.root_.querySelectorAll(_foundation2.default.strings.TAB_SELECTOR));
      this.tabList_ = tabElements.map(function (el) {
        return _this2.tabFactory_(el);
      });

      var tabScrollerElement = this.root_.querySelector(_foundation2.default.strings.TAB_SCROLLER_SELECTOR);
      if (tabScrollerElement) {
        this.tabScroller_ = this.tabScrollerFactory_(tabScrollerElement);
      }
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this3 = this;

      this.handleTabInteraction_ = function (evt) {
        return _this3.foundation_.handleTabInteraction(evt);
      };
      this.handleKeyDown_ = function (evt) {
        return _this3.foundation_.handleKeyDown(evt);
      };

      this.root_.addEventListener(_index.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
      this.root_.addEventListener('keydown', this.handleKeyDown_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTabBar.prototype.__proto__ || Object.getPrototypeOf(MDCTabBar.prototype), 'destroy', this).call(this);
      this.root_.removeEventListener(_index.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
      this.root_.removeEventListener('keydown', this.handleKeyDown_);
      this.tabList_.forEach(function (tab) {
        return tab.destroy();
      });
      this.tabScroller_.destroy();
    }

    /**
     * @return {!MDCTabBarFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this4 = this;

      return new _foundation2.default(
      /** @type {!MDCTabBarAdapter} */{
        scrollTo: function scrollTo(scrollX) {
          return _this4.tabScroller_.scrollTo(scrollX);
        },
        incrementScroll: function incrementScroll(scrollXIncrement) {
          return _this4.tabScroller_.incrementScroll(scrollXIncrement);
        },
        getScrollPosition: function getScrollPosition() {
          return _this4.tabScroller_.getScrollPosition();
        },
        getScrollContentWidth: function getScrollContentWidth() {
          return _this4.tabScroller_.getScrollContentWidth();
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this4.root_.offsetWidth;
        },
        isRTL: function isRTL() {
          return window.getComputedStyle(_this4.root_).getPropertyValue('direction') === 'rtl';
        },
        activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
          return _this4.tabList_[index].activate(clientRect);
        },
        deactivateTabAtIndex: function deactivateTabAtIndex(index) {
          return _this4.tabList_[index].deactivate();
        },
        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
          return _this4.tabList_[index].computeIndicatorClientRect();
        },
        getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
          return _this4.tabList_[index].computeDimensions();
        },
        getActiveTabIndex: function getActiveTabIndex() {
          for (var i = 0; i < _this4.tabList_.length; i++) {
            if (_this4.tabList_[i].active) {
              return i;
            }
          }
          return -1;
        },
        getIndexOfTab: function getIndexOfTab(tabToFind) {
          return _this4.tabList_.indexOf(tabToFind);
        },
        getTabListLength: function getTabListLength() {
          return _this4.tabList_.length;
        },
        notifyTabActivated: function notifyTabActivated(index) {
          return _this4.emit(_foundation2.default.strings.TAB_ACTIVATED_EVENT, { index: index }, true);
        }
      });
    }

    /**
     * Activates the tab at the given index
     * @param {number} index The index of the tab
     */

  }, {
    key: 'activateTab',
    value: function activateTab(index) {
      this.foundation_.activateTab(index);
    }

    /**
     * Scrolls the tab at the given index into view
     * @param {number} index THe index of the tab
     */

  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(index) {
      this.foundation_.scrollIntoView(index);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTabBar(root);
    }
  }]);

  return MDCTabBar;
}(_component2.default);

exports.MDCTabBar = MDCTabBar;
exports.MDCTabBarFoundation = _foundation2.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(21);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(49);

var _util = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }

    /** @override */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }

      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var _this16 = this;

      requestAnimationFrame(function () {
        return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this17 = this;

      requestAnimationFrame(function () {
        return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFadingTabIndicatorFoundation = exports.MDCSlidingTabIndicatorFoundation = exports.MDCTabIndicatorFoundation = exports.MDCTabIndicator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(23);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(12);

var _foundation2 = _interopRequireDefault(_foundation);

var _slidingFoundation = __webpack_require__(52);

var _slidingFoundation2 = _interopRequireDefault(_slidingFoundation);

var _fadingFoundation = __webpack_require__(53);

var _fadingFoundation2 = _interopRequireDefault(_fadingFoundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @extends {MDCComponent<!MDCTabIndicatorFoundation>}
 * @final
 */
var MDCTabIndicator = function (_MDCComponent) {
  _inherits(MDCTabIndicator, _MDCComponent);

  _createClass(MDCTabIndicator, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTabIndicator}
     */
    value: function attachTo(root) {
      return new MDCTabIndicator(root);
    }

    /**
     * @param {...?} args
     */

  }]);

  function MDCTabIndicator() {
    var _ref;

    _classCallCheck(this, MDCTabIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabIndicator.__proto__ || Object.getPrototypeOf(MDCTabIndicator)).call.apply(_ref, [this].concat(args)));

    _this.content_;
    return _this;
  }

  _createClass(MDCTabIndicator, [{
    key: 'initialize',
    value: function initialize() {
      this.content_ = this.root_.querySelector(_foundation2.default.strings.CONTENT_SELECTOR);
    }

    /**
     * @return {!ClientRect}
     */

  }, {
    key: 'computeContentClientRect',
    value: function computeContentClientRect() {
      return this.foundation_.computeContentClientRect();
    }

    /**
     * @return {!MDCTabIndicatorFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var adapter = /** @type {!MDCTabIndicatorAdapter} */Object.assign({
        registerEventHandler: function registerEventHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        computeContentClientRect: function computeContentClientRect() {
          return _this2.content_.getBoundingClientRect();
        },
        setContentStyleProperty: function setContentStyleProperty(prop, value) {
          return _this2.content_.style.setProperty(prop, value);
        }
      });

      if (this.root_.classList.contains(_foundation2.default.cssClasses.FADE)) {
        return new _fadingFoundation2.default(adapter);
      }

      // Default to the sliding indicator
      return new _slidingFoundation2.default(adapter);
    }

    /**
     * @param {!ClientRect=} previousIndicatorClientRect
     */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {
      this.foundation_.activate(previousIndicatorClientRect);
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }]);

  return MDCTabIndicator;
}(_component2.default);

exports.MDCTabIndicator = MDCTabIndicator;
exports.MDCTabIndicatorFoundation = _foundation2.default;
exports.MDCSlidingTabIndicatorFoundation = _slidingFoundation2.default;
exports.MDCFadingTabIndicatorFoundation = _fadingFoundation2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/** @enum {string} */
var cssClasses = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  FADING_ACTIVATE: 'mdc-tab-indicator--fading-activate',
  FADING_DEACTIVATE: 'mdc-tab-indicator--fading-deactivate',
  SLIDING_ACTIVATE: 'mdc-tab-indicator--sliding-activate'
};

/** @enum {string} */
var strings = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(12);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */
var MDCSlidingTabIndicatorFoundation = function (_MDCTabIndicatorFound) {
  _inherits(MDCSlidingTabIndicatorFoundation, _MDCTabIndicatorFound);

  /** @param {...?} args */
  function MDCSlidingTabIndicatorFoundation() {
    var _ref;

    _classCallCheck(this, MDCSlidingTabIndicatorFoundation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {function(?Event): undefined} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCSlidingTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCSlidingTabIndicatorFoundation)).call.apply(_ref, [this].concat(args)));

    _this.handleTransitionEnd_ = function () {
      return _this.handleTransitionEnd();
    };
    return _this;
  }

  /** Handles the transitionend event */


  _createClass(MDCSlidingTabIndicatorFoundation, [{
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd() {
      this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.removeClass(_foundation2.default.cssClasses.SLIDING_ACTIVATE);
    }

    /** @param {!ClientRect=} previousIndicatorClientRect */

  }, {
    key: 'activate',
    value: function activate(previousIndicatorClientRect) {
      var _this2 = this;

      this.adapter_.addClass(_foundation2.default.cssClasses.ACTIVE);

      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        return;
      }

      // This animation uses the FLIP approach. You can read more about it at the link below:
      // https://aerotwist.com/blog/flip-your-animations/

      // Calculate the dimensions based on the dimensions of the previous indicator
      var currentClientRect = this.computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      this.adapter_.setContentStyleProperty('transform', 'translateX(' + xPosition + 'px) scaleX(' + widthDelta + ')');

      // Force repaint
      this.computeContentClientRect();

      // Add animating class and remove transformation in a new frame
      requestAnimationFrame(function () {
        _this2.adapter_.addClass(_foundation2.default.cssClasses.SLIDING_ACTIVATE);
        _this2.adapter_.setContentStyleProperty('transform', '');
      });

      this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.removeClass(_foundation2.default.cssClasses.ACTIVE);
      // We remove the animating class in deactivate in case the Tab is deactivated before the animation completes and
      // the "transitionend" handler isn't called.
      this.adapter_.removeClass(_foundation2.default.cssClasses.SLIDING_ACTIVATE);
      this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
    }
  }]);

  return MDCSlidingTabIndicatorFoundation;
}(_foundation2.default);

exports.default = MDCSlidingTabIndicatorFoundation;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(12);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */
var MDCFadingTabIndicatorFoundation = function (_MDCTabIndicatorFound) {
  _inherits(MDCFadingTabIndicatorFoundation, _MDCTabIndicatorFound);

  /** @param {...?} args */
  function MDCFadingTabIndicatorFoundation() {
    var _ref;

    _classCallCheck(this, MDCFadingTabIndicatorFoundation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {function(?Event): undefined} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCFadingTabIndicatorFoundation.__proto__ || Object.getPrototypeOf(MDCFadingTabIndicatorFoundation)).call.apply(_ref, [this].concat(args)));

    _this.handleTransitionEnd_ = function () {
      return _this.handleTransitionEnd();
    };
    return _this;
  }

  /** Handles the transitionend event */


  _createClass(MDCFadingTabIndicatorFoundation, [{
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd() {
      this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.removeClass(_foundation2.default.cssClasses.FADING_ACTIVATE);
      this.adapter_.removeClass(_foundation2.default.cssClasses.FADING_DEACTIVATE);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.addClass(_foundation2.default.cssClasses.FADING_ACTIVATE);
      this.adapter_.addClass(_foundation2.default.cssClasses.ACTIVE);
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
      this.adapter_.addClass(_foundation2.default.cssClasses.FADING_DEACTIVATE);
      this.adapter_.removeClass(_foundation2.default.cssClasses.ACTIVE);
    }
  }]);

  return MDCFadingTabIndicatorFoundation;
}(_foundation2.default);

exports.default = MDCFadingTabIndicatorFoundation;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ACTIVE: 'mdc-tab--active',
  ANIMATING_ACTIVATE: 'mdc-tab--animating-activate',
  ANIMATING_DEACTIVATE: 'mdc-tab--animating-deactivate'
};

/** @enum {string} */
var strings = {
  ARIA_SELECTED: 'aria-selected',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  CONTENT_SELECTOR: '.mdc-tab__content',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
  TABINDEX: 'tabIndex',
  INTERACTED_EVENT: 'MDCTab:interacted'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.MDCTabScrollerFoundation = exports.MDCTabScroller = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(3);

var _foundation = __webpack_require__(56);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(60);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @extends {MDCComponent<!MDCTabScrollerFoundation>}
 * @final
 */
var MDCTabScroller = function (_MDCComponent) {
  _inherits(MDCTabScroller, _MDCComponent);

  _createClass(MDCTabScroller, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTabScroller}
     */
    value: function attachTo(root) {
      return new MDCTabScroller(root);
    }
  }]);

  function MDCTabScroller() {
    var _ref;

    _classCallCheck(this, MDCTabScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTabScroller.__proto__ || Object.getPrototypeOf(MDCTabScroller)).call.apply(_ref, [this].concat(args)));

    _this.content_;

    /** @private {?Element} */
    _this.area_;

    /** @private {?function(?Event): undefined} */
    _this.handleInteraction_;

    /** @private {?function(!Event): undefined} */
    _this.handleTransitionEnd_;
    return _this;
  }

  _createClass(MDCTabScroller, [{
    key: 'initialize',
    value: function initialize() {
      this.area_ = this.root_.querySelector(_foundation2.default.strings.AREA_SELECTOR);
      this.content_ = this.root_.querySelector(_foundation2.default.strings.CONTENT_SELECTOR);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      this.handleInteraction_ = function () {
        return _this2.foundation_.handleInteraction();
      };
      this.handleTransitionEnd_ = function (evt) {
        return _this2.foundation_.handleTransitionEnd(evt);
      };

      this.area_.addEventListener('wheel', this.handleInteraction_);
      this.area_.addEventListener('touchstart', this.handleInteraction_);
      this.area_.addEventListener('pointerdown', this.handleInteraction_);
      this.area_.addEventListener('mousedown', this.handleInteraction_);
      this.area_.addEventListener('keydown', this.handleInteraction_);
      this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTabScroller.prototype.__proto__ || Object.getPrototypeOf(MDCTabScroller.prototype), 'destroy', this).call(this);

      this.area_.removeEventListener('wheel', this.handleInteraction_);
      this.area_.removeEventListener('touchstart', this.handleInteraction_);
      this.area_.removeEventListener('pointerdown', this.handleInteraction_);
      this.area_.removeEventListener('mousedown', this.handleInteraction_);
      this.area_.removeEventListener('keydown', this.handleInteraction_);
      this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    }

    /**
     * @return {!MDCTabScrollerFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      var adapter = /** @type {!MDCTabScrollerAdapter} */{
        eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
          var MATCHES = util.getMatchesProperty(HTMLElement.prototype);
          return evtTarget[MATCHES](selector);
        },
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        addScrollAreaClass: function addScrollAreaClass(className) {
          return _this3.area_.classList.add(className);
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
          return _this3.area_.style.setProperty(prop, value);
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
          return _this3.content_.style.setProperty(prop, value);
        },
        getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
          return window.getComputedStyle(_this3.content_).getPropertyValue(propName);
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
          return _this3.area_.scrollLeft = scrollX;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return _this3.area_.scrollLeft;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return _this3.content_.offsetWidth;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return _this3.area_.offsetWidth;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return _this3.area_.getBoundingClientRect();
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return _this3.content_.getBoundingClientRect();
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
          return util.computeHorizontalScrollbarHeight(document);
        }
      };

      return new _foundation2.default(adapter);
    }

    /**
     * Returns the current visual scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      return this.foundation_.getScrollPosition();
    }

    /**
     * Returns the width of the scroll content
     * @return {number}
     */

  }, {
    key: 'getScrollContentWidth',
    value: function getScrollContentWidth() {
      return this.content_.offsetWidth;
    }

    /**
     * Increments the scroll value by the given amount
     * @param {number} scrollXIncrement The pixel value by which to increment the scroll value
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {
      this.foundation_.incrementScroll(scrollXIncrement);
    }

    /**
     * Scrolls to the given pixel position
     * @param {number} scrollX The pixel value to scroll to
     */

  }, {
    key: 'scrollTo',
    value: function scrollTo(scrollX) {
      this.foundation_.scrollTo(scrollX);
    }
  }]);

  return MDCTabScroller;
}(_component2.default);

exports.MDCTabScroller = MDCTabScroller;
exports.MDCTabScrollerFoundation = _foundation2.default;
exports.util = util;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(25);

var _adapter = __webpack_require__(3);

var _rtlScroller = __webpack_require__(8);

var _rtlScroller2 = _interopRequireDefault(_rtlScroller);

var _rtlDefaultScroller = __webpack_require__(57);

var _rtlDefaultScroller2 = _interopRequireDefault(_rtlDefaultScroller);

var _rtlNegativeScroller = __webpack_require__(58);

var _rtlNegativeScroller2 = _interopRequireDefault(_rtlNegativeScroller);

var _rtlReverseScroller = __webpack_require__(59);

var _rtlReverseScroller2 = _interopRequireDefault(_rtlReverseScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCTabScrollerAdapter>}
 * @final
 */
var MDCTabScrollerFoundation = function (_MDCFoundation) {
  _inherits(MDCTabScrollerFoundation, _MDCFoundation);

  _createClass(MDCTabScrollerFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * @see MDCTabScrollerAdapter for typing information
     * @return {!MDCTabScrollerAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabScrollerAdapter} */{
          eventTargetMatchesSelector: function eventTargetMatchesSelector() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          addScrollAreaClass: function addScrollAreaClass() {},
          setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {},
          setScrollContentStyleProperty: function setScrollContentStyleProperty() {},
          getScrollContentStyleValue: function getScrollContentStyleValue() {},
          setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {},
          getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {},
          getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {},
          getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {},
          computeScrollAreaClientRect: function computeScrollAreaClientRect() {},
          computeScrollContentClientRect: function computeScrollContentClientRect() {},
          computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {}
        }
      );
    }

    /** @param {!MDCTabScrollerAdapter} adapter */

  }]);

  function MDCTabScrollerFoundation(adapter) {
    _classCallCheck(this, MDCTabScrollerFoundation);

    /**
     * This boolean controls whether we should handle the transitionend and interaction events during the animation.
     * @private {boolean}
     */
    var _this = _possibleConstructorReturn(this, (MDCTabScrollerFoundation.__proto__ || Object.getPrototypeOf(MDCTabScrollerFoundation)).call(this, Object.assign(MDCTabScrollerFoundation.defaultAdapter, adapter)));

    _this.isAnimating_ = false;

    /**
     * The MDCTabScrollerRTL instance varies per browser and allows us to encapsulate the peculiar browser behavior
     * of RTL scrolling in it's own class.
     * @private {?MDCTabScrollerRTL}
     */
    _this.rtlScrollerInstance_;
    return _this;
  }

  _createClass(MDCTabScrollerFoundation, [{
    key: 'init',
    value: function init() {
      // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
      // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
      var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
      this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
      this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    }

    /**
     * Computes the current visual scroll position
     * @return {number}
     */

  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      if (this.isRTL_()) {
        return this.computeCurrentScrollPositionRTL_();
      }

      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return scrollLeft - currentTranslateX;
    }

    /**
     * Handles interaction events that occur during transition
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction() {
      // Early exit if we aren't animating
      if (!this.isAnimating_) {
        return;
      }

      // Prevent other event listeners from handling this event
      this.stopScrollAnimation_();
    }

    /**
     * Handles the transitionend event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Early exit if we aren't animating or the event was triggered by a different element.
      if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evt.target, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
        return;
      }

      this.isAnimating_ = false;
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    }

    /**
     * Increment the scroll value by the scrollXIncrement
     * @param {number} scrollXIncrement The value by which to increment the scroll position
     */

  }, {
    key: 'incrementScroll',
    value: function incrementScroll(scrollXIncrement) {
      // Early exit for non-operational increment values
      if (scrollXIncrement === 0) {
        return;
      }

      if (this.isRTL_()) {
        return this.incrementScrollRTL_(scrollXIncrement);
      }

      this.incrementScroll_(scrollXIncrement);
    }

    /**
     * Scrolls to the given scrollX value
     * @param {number} scrollX
     */

  }, {
    key: 'scrollTo',
    value: function scrollTo(scrollX) {
      if (this.isRTL_()) {
        return this.scrollToRTL_(scrollX);
      }

      this.scrollTo_(scrollX);
    }

    /**
     * Returns the appropriate version of the MDCTabScrollerRTL
     * @return {!MDCTabScrollerRTL}
     */

  }, {
    key: 'getRTLScroller',
    value: function getRTLScroller() {
      if (!this.rtlScrollerInstance_) {
        this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
      }

      return this.rtlScrollerInstance_;
    }

    /**
     * Returns the translateX value from a CSS matrix transform function string
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateCurrentTranslateX_',
    value: function calculateCurrentTranslateX_() {
      var transformValue = this.adapter_.getScrollContentStyleValue('transform');
      // Early exit if no transform is present
      if (transformValue === 'none') {
        return 0;
      }

      // The transform value comes back as a matrix transformation in the form
      // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
      // we're going to grab all the parenthesized values, strip out tx, and
      // parse it.
      var results = /\((.+)\)/.exec(transformValue)[1];
      var parts = results.split(',');
      return parseFloat(parts[4]);
    }

    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param {number} scrollX The distance to scroll
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'computeCurrentScrollPositionRTL_',
    value: function computeCurrentScrollPositionRTL_() {
      var translateX = this.calculateCurrentTranslateX_();
      return this.getRTLScroller().getScrollPositionRTL(translateX);
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }

    /**
     * Internal scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: 'scrollTo_',
    value: function scrollTo_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var safeScrollX = this.clampScrollValue_(scrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_( /** @type {!MDCTabScrollerAnimation} */{
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }

    /**
     * Internal RTL scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: 'scrollToRTL_',
    value: function scrollToRTL_(scrollX) {
      var animation = this.getRTLScroller().scrollToRTL(scrollX);
      this.animate_(animation);
    }

    /**
     * Internal increment scroll method
     * @param {number} scrollX The new scroll position increment
     * @private
     */

  }, {
    key: 'incrementScroll_',
    value: function incrementScroll_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var targetScrollX = scrollX + currentScrollX;
      var safeScrollX = this.clampScrollValue_(targetScrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_( /** @type {!MDCTabScrollerAnimation} */{
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }

    /**
     * Internal incremenet scroll RTL method
     * @param {number} scrollX The new scroll position RTL increment
     * @private
     */

  }, {
    key: 'incrementScrollRTL_',
    value: function incrementScrollRTL_(scrollX) {
      var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
      this.animate_(animation);
    }

    /**
     * Animates the tab scrolling
     * @param {!MDCTabScrollerAnimation} animation The animation to apply
     * @private
     */

  }, {
    key: 'animate_',
    value: function animate_(animation) {
      var _this2 = this;

      // Early exit if translateX is 0, which means there's no animation to perform
      if (animation.scrollDelta === 0) {
        return;
      }

      this.stopScrollAnimation_();
      // This animation uses the FLIP approach.
      // Read more here: https://aerotwist.com/blog/flip-your-animations/
      this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(' + animation.scrollDelta + 'px)');
      // Force repaint
      this.adapter_.computeScrollAreaClientRect();

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        _this2.adapter_.setScrollContentStyleProperty('transform', 'none');
      });

      this.isAnimating_ = true;
    }

    /**
     * Stops scroll animation
     * @private
     */

  }, {
    key: 'stopScrollAnimation_',
    value: function stopScrollAnimation_() {
      this.isAnimating_ = false;
      var currentScrollPosition = this.getAnimatingScrollPosition_();
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
      this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    }

    /**
     * Gets the current scroll position during animation
     * @return {number}
     * @private
     */

  }, {
    key: 'getAnimatingScrollPosition_',
    value: function getAnimatingScrollPosition_() {
      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      if (this.isRTL_()) {
        return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
      }

      return scrollLeft - currentTranslateX;
    }

    /**
     * Determines the RTL Scroller to use
     * @return {!MDCTabScrollerRTL}
     * @private
     */

  }, {
    key: 'rtlScrollerFactory_',
    value: function rtlScrollerFactory_() {
      // Browsers have three different implementations of scrollLeft in RTL mode,
      // dependent on the browser. The behavior is based off the max LTR
      // scrollleft value and 0.
      //
      // * Default scrolling in RTL *
      //    - Left-most value: 0
      //    - Right-most value: Max LTR scrollLeft value
      //
      // * Negative scrolling in RTL *
      //    - Left-most value: Negated max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // * Reverse scrolling in RTL *
      //    - Left-most value: Max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // We use those principles below to determine which RTL scrollLeft
      // behavior is implemented in the current browser.
      var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
      var newScrollLeft = this.adapter_.getScrollAreaScrollLeft();

      // If the newScrollLeft value is negative,then we know that the browser has
      // implemented negative RTL scrolling, since all other implementations have
      // only positive values.
      if (newScrollLeft < 0) {
        // Undo the scrollLeft test check
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
        return new _rtlNegativeScroller2.default(this.adapter_);
      }

      var rootClientRect = this.adapter_.computeScrollAreaClientRect();
      var contentClientRect = this.adapter_.computeScrollContentClientRect();
      var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);

      // By calculating the clientRect of the root element and the clientRect of
      // the content element, we can determine how much the scroll value changed
      // when we performed the scrollLeft subtraction above.
      if (rightEdgeDelta === newScrollLeft) {
        return new _rtlReverseScroller2.default(this.adapter_);
      }

      return new _rtlDefaultScroller2.default(this.adapter_);
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isRTL_',
    value: function isRTL_() {
      return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    }
  }]);

  return MDCTabScrollerFoundation;
}(_foundation2.default);

exports.default = MDCTabScrollerFoundation;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rtlScroller = __webpack_require__(8);

var _rtlScroller2 = _interopRequireDefault(_rtlScroller);

var _adapter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
var MDCTabScrollerRTLDefault = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLDefault, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLDefault() {
    _classCallCheck(this, MDCTabScrollerRTLDefault);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLDefault.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLDefault)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLDefault, [{
    key: 'getScrollPositionRTL',

    /**
     * @return {number}
     */
    value: function getScrollPositionRTL() {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();

      var _calculateScrollEdges = this.calculateScrollEdges_(),
          right = _calculateScrollEdges.right;
      // Scroll values on most browsers are ints instead of floats so we round


      return Math.round(right - currentScrollLeft);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var edges = this.calculateScrollEdges_();
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX) {
      return scrollX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
  }]);

  return MDCTabScrollerRTLDefault;
}(_rtlScroller2.default);

exports.default = MDCTabScrollerRTLDefault;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rtlScroller = __webpack_require__(8);

var _rtlScroller2 = _interopRequireDefault(_rtlScroller);

var _adapter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
var MDCTabScrollerRTLNegative = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLNegative, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLNegative() {
    _classCallCheck(this, MDCTabScrollerRTLNegative);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLNegative.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLNegative)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLNegative, [{
    key: 'getScrollPositionRTL',

    /**
     * @param {number} translateX The current translateX position
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return Math.round(translateX - currentScrollLeft);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(-scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @param {number} translateX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX - translateX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: rootWidth - contentWidth,
          right: 0
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.max(Math.min(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLNegative;
}(_rtlScroller2.default);

exports.default = MDCTabScrollerRTLNegative;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rtlScroller = __webpack_require__(8);

var _rtlScroller2 = _interopRequireDefault(_rtlScroller);

var _adapter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
var MDCTabScrollerRTLReverse = function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLReverse, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLReverse() {
    _classCallCheck(this, MDCTabScrollerRTLReverse);

    return _possibleConstructorReturn(this, (MDCTabScrollerRTLReverse.__proto__ || Object.getPrototypeOf(MDCTabScrollerRTLReverse)).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLReverse, [{
    key: 'getScrollPositionRTL',

    /**
     * @param {number} translateX
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      // Scroll values on most browsers are ints instead of floats so we round
      return Math.round(currentScrollLeft - translateX);
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'scrollToRTL',
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: 'incrementScrollRTL',
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
      return (/** @type {!MDCTabScrollerAnimation} */{
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: 'getAnimatingScrollPosition',
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX + translateX;
    }

    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: 'calculateScrollEdges_',
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (/** @type {!MDCTabScrollerHorizontalEdges} */{
          left: contentWidth - rootWidth,
          right: 0
        }
      );
    }

    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: 'clampScrollValue_',
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLReverse;
}(_rtlScroller2.default);

exports.default = MDCTabScrollerRTLReverse;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchesProperty = exports.computeHorizontalScrollbarHeight = undefined;

var _constants = __webpack_require__(25);

/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 * @private {number|undefined}
 */
var horizontalScrollbarHeight_ = void 0;

/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function computeHorizontalScrollbarHeight(documentObj) {
  var shouldCacheResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  var el = documentObj.createElement('div');
  el.classList.add(_constants.cssClasses.SCROLL_TEST);
  documentObj.body.appendChild(el);

  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }
  return horizontalScrollbarHeight;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

exports.computeHorizontalScrollbarHeight = computeHorizontalScrollbarHeight;
exports.getMatchesProperty = getMatchesProperty;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(62);

var _adapter = __webpack_require__(26);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation3 = __webpack_require__(24);

var _foundation4 = _interopRequireDefault(_foundation3);

var _adapter3 = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Licensed under the Apache License, Version 2.0 (the "License")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @type {Set<string>}
 */
var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(_constants.strings.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.END_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.HOME_KEY);

/**
 * @type {Map<number, string>}
 */
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(_constants.numbers.HOME_KEYCODE, _constants.strings.HOME_KEY);
KEYCODE_MAP.set(_constants.numbers.END_KEYCODE, _constants.strings.END_KEY);
KEYCODE_MAP.set(_constants.numbers.ARROW_LEFT_KEYCODE, _constants.strings.ARROW_LEFT_KEY);
KEYCODE_MAP.set(_constants.numbers.ARROW_RIGHT_KEYCODE, _constants.strings.ARROW_RIGHT_KEY);

/**
 * @extends {MDCFoundation<!MDCTabBarAdapter>}
 * @final
 */

var MDCTabBarFoundation = function (_MDCFoundation) {
  _inherits(MDCTabBarFoundation, _MDCFoundation);

  _createClass(MDCTabBarFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /**
     * @see MDCTabBarAdapter for typing information
     * @return {!MDCTabBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTabBarAdapter} */{
          scrollTo: function scrollTo() {},
          incrementScroll: function incrementScroll() {},
          getScrollPosition: function getScrollPosition() {},
          getScrollContentWidth: function getScrollContentWidth() {},
          getOffsetWidth: function getOffsetWidth() {},
          isRTL: function isRTL() {},
          activateTabAtIndex: function activateTabAtIndex() {},
          deactivateTabAtIndex: function deactivateTabAtIndex() {},
          getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {},
          getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {},
          getActiveTabIndex: function getActiveTabIndex() {},
          getIndexOfTab: function getIndexOfTab() {},
          getTabListLength: function getTabListLength() {},
          notifyTabActivated: function notifyTabActivated() {}
        }
      );
    }

    /**
     * @param {!MDCTabBarAdapter} adapter
     * */

  }]);

  function MDCTabBarFoundation(adapter) {
    _classCallCheck(this, MDCTabBarFoundation);

    return _possibleConstructorReturn(this, (MDCTabBarFoundation.__proto__ || Object.getPrototypeOf(MDCTabBarFoundation)).call(this, Object.assign(MDCTabBarFoundation.defaultAdapter, adapter)));
  }

  _createClass(MDCTabBarFoundation, [{
    key: 'init',
    value: function init() {
      var activeIndex = this.adapter_.getActiveTabIndex();
      this.scrollIntoView(activeIndex);
    }

    /**
     * Activates the tab at the given index
     * @param {number} index
     */

  }, {
    key: 'activateTab',
    value: function activateTab(index) {
      var previousActiveIndex = this.adapter_.getActiveTabIndex();
      if (!this.indexIsInRange_(index)) {
        return;
      }

      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
      this.scrollIntoView(index);

      // Only notify the tab activation if the index is different than the previously active index
      if (index !== previousActiveIndex) {
        this.adapter_.notifyTabActivated(index);
      }
    }

    /**
     * Handles the keydown event
     * @param {!Event} evt
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(evt) {
      // Get the key from the event
      var key = this.getKeyFromEvent_(evt);

      // Early exit if the event key isn't one of the keyboard navigation keys
      if (key === undefined) {
        return;
      }

      evt.preventDefault();
      this.activateTabFromKey_(key);
    }

    /**
     * Handles the MDCTab:interacted event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTabInteraction',
    value: function handleTabInteraction(evt) {
      this.activateTab(this.adapter_.getIndexOfTab(evt.detail.tab));
    }

    /**
     * Scrolls the tab at the given index into view
     * @param {number} index The tab index to make visible
     */

  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(index) {
      // Early exit if the index is out of range
      if (!this.indexIsInRange_(index)) {
        return;
      }

      // Always scroll to 0 if scrolling to the 0th index
      if (index === 0) {
        return this.adapter_.scrollTo(0);
      }

      // Always scroll to the max value if scrolling to the Nth index
      // MDCTabScroller.scrollTo() will never scroll past the max possible value
      if (index === this.adapter_.getTabListLength() - 1) {
        return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
      }

      if (this.isRTL_()) {
        return this.scrollIntoViewRTL_(index);
      }

      this.scrollIntoView_(index);
    }

    /**
     * Private method for activating a tab from a key
     * @param {string} key The name of the key
     * @private
     */

  }, {
    key: 'activateTabFromKey_',
    value: function activateTabFromKey_(key) {
      var isRTL = this.isRTL_();
      var maxTabIndex = this.adapter_.getTabListLength() - 1;
      var shouldGoToEnd = key === _constants.strings.END_KEY;
      var shouldDecrement = key === _constants.strings.ARROW_LEFT_KEY && !isRTL || key === _constants.strings.ARROW_RIGHT_KEY && isRTL;
      var shouldIncrement = key === _constants.strings.ARROW_RIGHT_KEY && !isRTL || key === _constants.strings.ARROW_LEFT_KEY && isRTL;
      var tabIndex = this.adapter_.getActiveTabIndex();

      if (shouldGoToEnd) {
        tabIndex = maxTabIndex;
      } else if (shouldDecrement) {
        tabIndex -= 1;
      } else if (shouldIncrement) {
        tabIndex += 1;
      } else {
        tabIndex = 0;
      }

      if (tabIndex < 0) {
        tabIndex = maxTabIndex;
      } else if (tabIndex > maxTabIndex) {
        tabIndex = 0;
      }

      this.activateTab(tabIndex);
    }

    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateScrollIncrement_',
    value: function calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
      var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
      var leftIncrement = relativeContentRight - _constants.numbers.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft + _constants.numbers.EXTRA_SCROLL_AMOUNT;

      if (nextIndex < index) {
        return Math.min(leftIncrement, 0);
      }

      return Math.max(rightIncrement, 0);
    }

    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @param {number} scrollContentWidth The width of the scroll content
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateScrollIncrementRTL_',
    value: function calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
      var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
      var leftIncrement = relativeContentRight + _constants.numbers.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft - _constants.numbers.EXTRA_SCROLL_AMOUNT;

      if (nextIndex > index) {
        return Math.max(leftIncrement, 0);
      }

      return Math.min(rightIncrement, 0);
    }

    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @return {number}
     * @private
     */

  }, {
    key: 'findAdjacentTabIndexClosestToEdge_',
    value: function findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth) {
      /**
       * Tabs are laid out in the Tab Scroller like this:
       *
       *    Scroll Position
       *    +---+
       *    |   |   Bar Width
       *    |   +-----------------------------------+
       *    |   |                                   |
       *    |   V                                   V
       *    |   +-----------------------------------+
       *    V   |             Tab Scroller          |
       *    +------------+--------------+-------------------+
       *    |    Tab     |      Tab     |        Tab        |
       *    +------------+--------------+-------------------+
       *        |                                   |
       *        +-----------------------------------+
       *
       * To determine the next adjacent index, we look at the Tab root left and
       * Tab root right, both relative to the scroll position. If the Tab root
       * left is less than 0, then we know it's out of view to the left. If the
       * Tab root right minus the bar width is greater than 0, we know the Tab is
       * out of view to the right. From there, we either increment or decrement
       * the index.
       */
      var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
      var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
      var relativeRootDelta = relativeRootLeft + relativeRootRight;
      var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
      var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

      if (leftEdgeIsCloser) {
        return index - 1;
      }

      if (rightEdgeIsCloser) {
        return index + 1;
      }

      return -1;
    }

    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @param {number} scrollContentWidth The width of the scroller content
     * @return {number}
     * @private
     */

  }, {
    key: 'findAdjacentTabIndexClosestToEdgeRTL_',
    value: function findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
      var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
      var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
      var rootDelta = rootLeft + rootRight;
      var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
      var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

      if (leftEdgeIsCloser) {
        return index + 1;
      }

      if (rightEdgeIsCloser) {
        return index - 1;
      }

      return -1;
    }

    /**
     * Returns the key associated with a keydown event
     * @param {!Event} evt The keydown event
     * @return {string}
     * @private
     */

  }, {
    key: 'getKeyFromEvent_',
    value: function getKeyFromEvent_(evt) {
      if (ACCEPTABLE_KEYS.has(evt.key)) {
        return evt.key;
      }

      return KEYCODE_MAP.get(evt.keyCode);
    }

    /**
     * Returns whether a given index is inclusively between the ends
     * @param {number} index The index to test
     * @private
     */

  }, {
    key: 'indexIsInRange_',
    value: function indexIsInRange_(index) {
      return index >= 0 && index < this.adapter_.getTabListLength();
    }

    /**
     * Returns the view's RTL property
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isRTL_',
    value: function isRTL_() {
      return this.adapter_.isRTL();
    }

    /**
     * Scrolls the tab at the given index into view for left-to-right useragents
     * @param {number} index The index of the tab to scroll into view
     * @private
     */

  }, {
    key: 'scrollIntoView_',
    value: function scrollIntoView_(index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    }

    /**
     * Scrolls the tab at the given index into view in RTL
     * @param {number} index The tab index to make visible
     * @private
     */

  }, {
    key: 'scrollIntoViewRTL_',
    value: function scrollIntoViewRTL_(index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var scrollWidth = this.adapter_.getScrollContentWidth();
      var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    }
  }]);

  return MDCTabBarFoundation;
}(_foundation2.default);

exports.default = MDCTabBarFoundation;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

/** @enum {string} */
var strings = {
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab',
  END_KEY: 'End',
  HOME_KEY: 'Home',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight'
};

/** @enum {number} */
var numbers = {
  EXTRA_SCROLL_AMOUNT: 20,
  END_KEYCODE: 35,
  HOME_KEYCODE: 36,
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39
};

exports.numbers = numbers;
exports.strings = strings;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCIconButtonToggleFoundation = exports.MDCIconButtonToggle = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _foundation = __webpack_require__(64);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCIconButtonToggleFoundation>}
 */
var MDCIconButtonToggle = function (_MDCComponent) {
  _inherits(MDCIconButtonToggle, _MDCComponent);

  _createClass(MDCIconButtonToggle, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCIconButtonToggle(root);
    }
  }]);

  function MDCIconButtonToggle() {
    var _ref;

    _classCallCheck(this, MDCIconButtonToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCIconButtonToggle.__proto__ || Object.getPrototypeOf(MDCIconButtonToggle)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    /** @private {!Function} */
    _this.handleClick_;
    return _this;
  }

  /** @return {!Element} */


  _createClass(MDCIconButtonToggle, [{
    key: 'initRipple_',


    /**
     * @return {!MDCRipple}
     * @private
     */
    value: function initRipple_() {
      var ripple = new _index.MDCRipple(this.root_);
      ripple.unbounded = true;
      return ripple;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('click', this.handleClick_);
      this.ripple_.destroy();
      _get(MDCIconButtonToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconButtonToggle.prototype), 'destroy', this).call(this);
    }

    /** @return {!MDCIconButtonToggleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.iconEl_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.iconEl_.classList.remove(className);
        },
        setText: function setText(text) {
          return _this2.iconEl_.textContent = text;
        },
        getAttr: function getAttr(name) {
          return _this2.root_.getAttribute(name);
        },
        setAttr: function setAttr(name, value) {
          return _this2.root_.setAttribute(name, value);
        },
        notifyChange: function notifyChange(evtData) {
          return _this2.emit(_foundation2.default.strings.CHANGE_EVENT, evtData);
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
      this.on = this.root_.getAttribute(_foundation2.default.strings.ARIA_PRESSED) === 'true';
      this.root_.addEventListener('click', this.handleClick_);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      this.foundation_.refreshToggleData();
    }
  }, {
    key: 'iconEl_',
    get: function get() {
      var sel = this.root_.dataset['iconInnerSelector'];

      return sel ?
      /** @type {!Element} */this.root_.querySelector(sel) : this.root_;
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'on',
    get: function get() {
      return this.foundation_.isOn();
    }

    /** @param {boolean} isOn */
    ,
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    }
  }]);

  return MDCIconButtonToggle;
}(_component2.default);

exports.MDCIconButtonToggle = MDCIconButtonToggle;
exports.MDCIconButtonToggleFoundation = _foundation2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(65);

var _constants = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCIconButtonToggleAdapter>}
 */
var MDCIconButtonToggleFoundation = function (_MDCFoundation) {
  _inherits(MDCIconButtonToggleFoundation, _MDCFoundation);

  _createClass(MDCIconButtonToggleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setText: function setText() /* text: string */{},
        getAttr: function getAttr() {
          return (/* name: string */ /* string */''
          );
        },
        setAttr: function setAttr() /* name: string, value: string */{},
        notifyChange: function notifyChange() /* evtData: IconButtonToggleEvent */{}
      };
    }
  }]);

  function MDCIconButtonToggleFoundation(adapter) {
    _classCallCheck(this, MDCIconButtonToggleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCIconButtonToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconButtonToggleFoundation)).call(this, Object.assign(MDCIconButtonToggleFoundation.defaultAdapter, adapter)));

    var ARIA_PRESSED = MDCIconButtonToggleFoundation.strings.ARIA_PRESSED;

    /** @private {boolean} */

    _this.on_ = _this.adapter_.getAttr(ARIA_PRESSED) === 'true';

    /** @private {boolean} */
    _this.disabled_ = false;

    /** @private {?IconButtonToggleState} */
    _this.toggleOnData_ = null;

    /** @private {?IconButtonToggleState} */
    _this.toggleOffData_ = null;
    return _this;
  }

  _createClass(MDCIconButtonToggleFoundation, [{
    key: 'init',
    value: function init() {
      this.refreshToggleData();
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      this.toggleOnData_ = {
        label: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_ON_LABEL),
        content: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_ON_CONTENT),
        cssClass: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_ON_CLASS)
      };
      this.toggleOffData_ = {
        label: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_OFF_LABEL),
        content: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_OFF_CONTENT),
        cssClass: this.adapter_.getAttr(_constants.strings.DATA_TOGGLE_OFF_CLASS)
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.toggle();
      var isOn = this.on_;

      this.adapter_.notifyChange( /** @type {!IconButtonToggleEvent} */{ isOn: isOn });
    }

    /** @return {boolean} */

  }, {
    key: 'isOn',
    value: function isOn() {
      return this.on_;
    }

    /** @param {boolean=} isOn */

  }, {
    key: 'toggle',
    value: function toggle() {
      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

      this.on_ = isOn;

      var _MDCIconButtonToggleF = MDCIconButtonToggleFoundation.strings,
          ARIA_LABEL = _MDCIconButtonToggleF.ARIA_LABEL,
          ARIA_PRESSED = _MDCIconButtonToggleF.ARIA_PRESSED;


      this.adapter_.setAttr(ARIA_PRESSED, this.on_.toString());

      var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
          classToRemove = _ref.cssClass;

      if (classToRemove) {
        this.adapter_.removeClass(classToRemove);
      }

      var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
          content = _ref2.content,
          label = _ref2.label,
          cssClass = _ref2.cssClass;

      if (cssClass) {
        this.adapter_.addClass(cssClass);
      }
      if (content) {
        this.adapter_.setText(content);
      }
      if (label) {
        this.adapter_.setAttr(ARIA_LABEL, label);
      }
    }
  }]);

  return MDCIconButtonToggleFoundation;
}(_foundation2.default);

/** @record */


var IconButtonToggleState = function IconButtonToggleState() {
  _classCallCheck(this, IconButtonToggleState);
};

/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */


IconButtonToggleState.prototype.label;

/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */
IconButtonToggleState.prototype.content;

/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */
IconButtonToggleState.prototype.cssClass;

exports.default = MDCIconButtonToggleFoundation;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Button Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

var MDCIconButtonToggleAdapter = function () {
  function MDCIconButtonToggleAdapter() {
    _classCallCheck(this, MDCIconButtonToggleAdapter);
  }

  _createClass(MDCIconButtonToggleAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}

    /** @param {string} text */

  }, {
    key: "setText",
    value: function setText(text) {}

    /**
     * @param {string} name
     * @return {string}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {}

    /**
     * @param {string} name
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {}

    /** @param {!IconButtonToggleEvent} evtData */

  }, {
    key: "notifyChange",
    value: function notifyChange(evtData) {}
  }]);

  return MDCIconButtonToggleAdapter;
}();

/**
 * @typedef {{
 *   isOn: boolean,
 * }}
 */


var IconButtonToggleEvent = void 0;

exports.MDCIconButtonToggleAdapter = MDCIconButtonToggleAdapter;
exports.IconButtonToggleEvent = IconButtonToggleEvent;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-icon-button'
};

/** @enum {string} */
var strings = {
  DATA_TOGGLE_ON_LABEL: 'data-toggle-on-label',
  DATA_TOGGLE_ON_CONTENT: 'data-toggle-on-content',
  DATA_TOGGLE_ON_CLASS: 'data-toggle-on-class',
  DATA_TOGGLE_OFF_LABEL: 'data-toggle-off-label',
  DATA_TOGGLE_OFF_CONTENT: 'data-toggle-off-content',
  DATA_TOGGLE_OFF_CLASS: 'data-toggle-off-class',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconButtonToggle:change'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCChipSet = exports.MDCChipSetFoundation = exports.MDCChip = exports.MDCChipFoundation = undefined;

var _index = __webpack_require__(27);

var _index2 = __webpack_require__(68);

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.MDCChipFoundation = _index.MDCChipFoundation;
exports.MDCChip = _index.MDCChip;
exports.MDCChipSetFoundation = _index2.MDCChipSetFoundation;
exports.MDCChipSet = _index2.MDCChipSet;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCChipSetFoundation = exports.MDCChipSet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(30);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(69);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCChipSetFoundation>}
 * @final
 */
var MDCChipSet = function (_MDCComponent) {
  _inherits(MDCChipSet, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCChipSet() {
    var _ref;

    _classCallCheck(this, MDCChipSet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {!Array<!MDCChip>} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCChipSet.__proto__ || Object.getPrototypeOf(MDCChipSet)).call.apply(_ref, [this].concat(args)));

    _this.chips;
    /** @type {(function(!Element): !MDCChip)} */
    _this.chipFactory_;

    /** @private {?function(?Event): undefined} */
    _this.handleChipInteraction_;
    /** @private {?function(?Event): undefined} */
    _this.handleChipRemoval_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChipSet}
   */


  _createClass(MDCChipSet, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCChip)=} chipFactory A function which
     * creates a new MDCChip.
     */
    value: function initialize() {
      var chipFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _index.MDCChip(el);
      };

      this.chipFactory_ = chipFactory;
      this.chips = this.instantiateChips_(this.chipFactory_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      this.chips.forEach(function (chip) {
        if (chip.isSelected()) {
          _this2.foundation_.select(chip.foundation);
        }
      });

      this.handleChipInteraction_ = function (evt) {
        return _this2.foundation_.handleChipInteraction(evt);
      };
      this.handleChipRemoval_ = function (evt) {
        return _this2.foundation_.handleChipRemoval(evt);
      };
      this.root_.addEventListener(_index.MDCChipFoundation.strings.INTERACTION_EVENT, this.handleChipInteraction_);
      this.root_.addEventListener(_index.MDCChipFoundation.strings.REMOVAL_EVENT, this.handleChipRemoval_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.chips.forEach(function (chip) {
        chip.destroy();
      });

      this.root_.removeEventListener(_index.MDCChipFoundation.strings.INTERACTION_EVENT, this.handleChipInteraction_);
      this.root_.removeEventListener(_index.MDCChipFoundation.strings.REMOVAL_EVENT, this.handleChipRemoval_);

      _get(MDCChipSet.prototype.__proto__ || Object.getPrototypeOf(MDCChipSet.prototype), 'destroy', this).call(this);
    }

    /**
     * Adds a new chip object to the chip set from the given chip element.
     * @param {!Element} chipEl
     */

  }, {
    key: 'addChip',
    value: function addChip(chipEl) {
      this.chips.push(this.chipFactory_(chipEl));
    }

    /**
     * @return {!MDCChipSetFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default( /** @type {!MDCChipSetAdapter} */Object.assign({
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        removeChip: function removeChip(chip) {
          var index = _this3.chips.indexOf(chip);
          _this3.chips.splice(index, 1);
          chip.destroy();
        }
      }));
    }

    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     * @param {(function(!Element): !MDCChip)} chipFactory
     * @return {!Array<!MDCChip>}
     */

  }, {
    key: 'instantiateChips_',
    value: function instantiateChips_(chipFactory) {
      var chipElements = [].slice.call(this.root_.querySelectorAll(_foundation2.default.strings.CHIP_SELECTOR));
      return chipElements.map(function (el) {
        return chipFactory(el);
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCChipSet(root);
    }
  }]);

  return MDCChipSet;
}(_component2.default);

exports.MDCChipSet = MDCChipSet;
exports.MDCChipSetFoundation = _foundation2.default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(30);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation3 = __webpack_require__(13);

var _constants = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// eslint-disable-next-line no-unused-vars


/**
 * @extends {MDCFoundation<!MDCChipSetAdapter>}
 * @final
 */
var MDCChipSetFoundation = function (_MDCFoundation) {
  _inherits(MDCChipSetFoundation, _MDCFoundation);

  _createClass(MDCChipSetFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCChipSetAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCChipSetAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCChipSetAdapter} */{
          hasClass: function hasClass() {},
          removeChip: function removeChip() {}
        }
      );
    }

    /**
     * @param {!MDCChipSetAdapter} adapter
     */

  }]);

  function MDCChipSetFoundation(adapter) {
    _classCallCheck(this, MDCChipSetFoundation);

    /**
     * The selected chips in the set. Only used for choice chip set or filter chip set.
     * @private {!Array<!MDCChipFoundation>}
     */
    var _this = _possibleConstructorReturn(this, (MDCChipSetFoundation.__proto__ || Object.getPrototypeOf(MDCChipSetFoundation)).call(this, Object.assign(MDCChipSetFoundation.defaultAdapter, adapter)));

    _this.selectedChips_ = [];
    return _this;
  }

  /**
   * Selects the given chip. Deselects all other chips if the chip set is of the choice variant.
   * @param {!MDCChipFoundation} chipFoundation
   */


  _createClass(MDCChipSetFoundation, [{
    key: 'select',
    value: function select(chipFoundation) {
      if (this.adapter_.hasClass(_constants.cssClasses.CHOICE)) {
        this.deselectAll_();
      }
      chipFoundation.setSelected(true);
      this.selectedChips_.push(chipFoundation);
    }

    /**
     * Deselects the given chip.
     * @param {!MDCChipFoundation} chipFoundation
     */

  }, {
    key: 'deselect',
    value: function deselect(chipFoundation) {
      var index = this.selectedChips_.indexOf(chipFoundation);
      if (index >= 0) {
        this.selectedChips_.splice(index, 1);
      }
      chipFoundation.setSelected(false);
    }

    /** Deselects all selected chips. */

  }, {
    key: 'deselectAll_',
    value: function deselectAll_() {
      this.selectedChips_.forEach(function (chipFoundation) {
        chipFoundation.setSelected(false);
      });
      this.selectedChips_.length = 0;
    }

    /**
     * Handles a chip interaction event
     * @param {!MDCChipInteractionEventType} evt
     * @private
     */

  }, {
    key: 'handleChipInteraction',
    value: function handleChipInteraction(evt) {
      var chipFoundation = evt.detail.chip.foundation;
      if (this.adapter_.hasClass(_constants.cssClasses.CHOICE) || this.adapter_.hasClass(_constants.cssClasses.FILTER)) {
        if (chipFoundation.isSelected()) {
          this.deselect(chipFoundation);
        } else {
          this.select(chipFoundation);
        }
      }
    }

    /**
     * Handles the event when a chip is removed.
     * @param {!MDCChipInteractionEventType} evt
     * @private
     */

  }, {
    key: 'handleChipRemoval',
    value: function handleChipRemoval(evt) {
      var chip = evt.detail.chip;

      this.deselect(chip.foundation);
      this.adapter_.removeChip(chip);
    }
  }]);

  return MDCChipSetFoundation;
}(_foundation2.default);

exports.default = MDCChipSetFoundation;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  CHIP_SELECTOR: '.mdc-chip'
};

/** @enum {string} */
var cssClasses = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFormFieldFoundation = exports.MDCFormField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _foundation = __webpack_require__(72);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends MDCComponent<!MDCFormFieldFoundation>
 */
var MDCFormField = function (_MDCComponent) {
  _inherits(MDCFormField, _MDCComponent);

  _createClass(MDCFormField, [{
    key: 'input',


    /** @param {?MDCSelectionControl} input */
    set: function set(input) {
      this.input_ = input;
    }

    /** @return {?MDCSelectionControl} */
    ,
    get: function get() {
      return this.input_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCFormField(root);
    }
  }]);

  function MDCFormField() {
    var _ref;

    _classCallCheck(this, MDCFormField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?MDCSelectionControl} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).call.apply(_ref, [this].concat(args)));

    _this.input_;
    return _this;
  }

  /**
   * @return {!Element}
   * @private
   */


  _createClass(MDCFormField, [{
    key: 'getDefaultFoundation',


    /** @return {!MDCFormFieldFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.label_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.label_.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.activate();
          }
        },
        deactivateInputRipple: function deactivateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.deactivate();
          }
        }
      });
    }
  }, {
    key: 'label_',
    get: function get() {
      var LABEL_SELECTOR = _foundation2.default.strings.LABEL_SELECTOR;

      return (/** @type {!Element} */this.root_.querySelector(LABEL_SELECTOR)
      );
    }
  }]);

  return MDCFormField;
}(_component2.default);

exports.MDCFormField = MDCFormField;
exports.MDCFormFieldFoundation = _foundation2.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(73);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCFormFieldAdapter>}
 */
var MDCFormFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return {!MDCFormFieldAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    _classCallCheck(this, MDCFormFieldFoundation);

    /** @private {!EventListener} */
    var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = /** @type {!EventListener} */function () {
      return _this.handleClick_();
    };
    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }

    /** @private */

  }, {
    key: 'handleClick_',
    value: function handleClick_() {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
}(_foundation2.default);

exports.default = MDCFormFieldFoundation;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Form Field. Provides an interface for managing
 * - event handlers
 * - ripple activation
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCFormFieldAdapter = function () {
  function MDCFormFieldAdapter() {
    _classCallCheck(this, MDCFormFieldAdapter);
  }

  _createClass(MDCFormFieldAdapter, [{
    key: "registerInteractionHandler",

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */
    value: function registerInteractionHandler(type, handler) {}

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}
  }, {
    key: "activateInputRipple",
    value: function activateInputRipple() {}
  }, {
    key: "deactivateInputRipple",
    value: function deactivateInputRipple() {}
  }]);

  return MDCFormFieldAdapter;
}();

exports.default = MDCFormFieldAdapter;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-form-field'
};

/** @enum {string} */
var strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRadioFoundation = exports.MDCRadio = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(9);

var _foundation = __webpack_require__(76);

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',


    /** @return {boolean} */
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_index2.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index2.MDCRippleFoundation(adapter);
      return new _index2.MDCRipple(this.root_, foundation);
    }

    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }

    /** @return {!MDCRadioFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(_foundation2.default.strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }]);

  return MDCRadio;
}(_component2.default);

exports.MDCRadio = MDCRadio;
exports.MDCRadioFoundation = _foundation2.default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(9);

var _adapter = __webpack_require__(77);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',


    /** @return {boolean} */
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }

    /** @return {?string} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }

    /** @param {?string} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }

    /**
     * @return {!MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return {!MDCRadioAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCRadioAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{}
        }
      );
    }
  }]);

  return MDCRadioFoundation;
}(_foundation2.default);

exports.default = MDCRadioFoundation;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRadioAdapter = function () {
  function MDCRadioAdapter() {
    _classCallCheck(this, MDCRadioAdapter);
  }

  _createClass(MDCRadioAdapter, [{
    key: 'addClass',

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /** @return {!MDCSelectionControlState} */

  }, {
    key: 'getNativeControl',
    value: function getNativeControl() {}
  }]);

  return MDCRadioAdapter;
}();

exports.default = MDCRadioAdapter;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCListFoundation = exports.MDCList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _foundation = __webpack_require__(80);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(31);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCListFoundation>
 */
var MDCList = function (_MDCComponent) {
  _inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    var _ref;

    _classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Function} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleClick_;
    /** @private {!Function} */
    _this.focusInEventListener_;
    /** @private {!Function} */
    _this.focusOutEventListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  _createClass(MDCList, [{
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('click', this.handleClick_);
      this.root_.removeEventListener('focusin', this.focusInEventListener_);
      this.root_.removeEventListener('focusout', this.focusOutEventListener_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleKeydown_ = this.foundation_.handleKeydown.bind(this.foundation_);
      this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
      this.focusInEventListener_ = this.foundation_.handleFocusIn.bind(this.foundation_);
      this.focusOutEventListener_ = this.foundation_.handleFocusOut.bind(this.foundation_);
      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('focusin', this.focusInEventListener_);
      this.root_.addEventListener('focusout', this.focusOutEventListener_);
      this.layout();
    }
  }, {
    key: 'layout',
    value: function layout() {
      var direction = this.root_.getAttribute(_constants.strings.ARIA_ORIENTATION);
      this.vertical = direction === _constants.strings.ARIA_ORIENTATION_VERTICAL;

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice.call(this.root_.querySelectorAll(_constants.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
    }

    /** @param {boolean} value */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCListFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCListAdapter} */Object.assign({
        getListItemCount: function getListItemCount() {
          return _this2.listElements_.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this2.listElements_.indexOf(document.activeElement);
        },
        getListItemIndex: function getListItemIndex(node) {
          return _this2.listElements_.indexOf(node);
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
          var element = _this2.listElements_[index];
          if (element) {
            element.setAttribute(attr, value);
          }
        },
        removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
          var element = _this2.listElements_[index];
          if (element) {
            element.removeAttribute(attr);
          }
        },
        addClassForElementIndex: function addClassForElementIndex(index, className) {
          var element = _this2.listElements_[index];
          if (element) {
            element.classList.add(className);
          }
        },
        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
          var element = _this2.listElements_[index];
          if (element) {
            element.classList.remove(className);
          }
        },
        isListItem: function isListItem(target) {
          return target.classList.contains(_constants.cssClasses.LIST_ITEM_CLASS);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          var element = _this2.listElements_[index];
          if (element) {
            element.focus();
          }
        },
        isElementFocusable: function isElementFocusable(ele) {
          if (!ele) return false;
          var matches = Element.prototype.matches;
          if (!matches) {
            // IE uses a different name for the same functionality
            matches = Element.prototype.msMatchesSelector;
          }
          return matches.call(ele, _constants.strings.FOCUSABLE_CHILD_ELEMENTS);
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var element = _this2.listElements_[listItemIndex];
          var listItemChildren = [].slice.call(element.querySelectorAll(_constants.strings.FOCUSABLE_CHILD_ELEMENTS));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        }
      }));
    }
  }, {
    key: 'vertical',
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }

    /** @return Array<!Element>*/

  }, {
    key: 'listElements_',
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll(_constants.strings.ENABLED_ITEMS_SELECTOR));
    }

    /** @param {boolean} value */

  }, {
    key: 'wrapFocus',
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }

    /** @param {boolean} isSingleSelectionList */

  }, {
    key: 'singleSelection',
    set: function set(isSingleSelectionList) {
      if (isSingleSelectionList) {
        this.root_.addEventListener('click', this.handleClick_);
      } else {
        this.root_.removeEventListener('click', this.handleClick_);
      }

      this.foundation_.setSingleSelection(isSingleSelectionList);
      var selectedElement = this.root_.querySelector('.mdc-list-item--selected');

      if (selectedElement) {
        this.selectedIndex = this.listElements_.indexOf(selectedElement);
      }
    }

    /** @param {number} index */

  }, {
    key: 'selectedIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCList(root);
    }
  }]);

  return MDCList;
}(_component2.default);

exports.MDCList = MDCList;
exports.MDCListFoundation = _foundation2.default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(31);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

var MDCListFoundation = function (_MDCFoundation) {
  _inherits(MDCListFoundation, _MDCFoundation);

  _createClass(MDCListFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCListAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCListAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCListAdapter} */{
          getListItemCount: function getListItemCount() {},
          getFocusedElementIndex: function getFocusedElementIndex() {},
          getListItemIndex: function getListItemIndex() {},
          setAttributeForElementIndex: function setAttributeForElementIndex() {},
          removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
          addClassForElementIndex: function addClassForElementIndex() {},
          removeClassForElementIndex: function removeClassForElementIndex() {},
          focusItemAtIndex: function focusItemAtIndex() {},
          isElementFocusable: function isElementFocusable() {},
          isListItem: function isListItem() {},
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {}
        }
      );
    }
  }]);

  function MDCListFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCListFoundation} */{};

    _classCallCheck(this, MDCListFoundation);

    /** {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, Object.assign(MDCListFoundation.defaultAdapter, adapter)));

    _this.wrapFocus_ = false;
    /** {boolean} */
    _this.isVertical_ = true;
    /** {boolean} */
    _this.isSingleSelectionList_ = false;
    /** {number} */
    _this.selectedIndex_ = -1;
    return _this;
  }

  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  _createClass(MDCListFoundation, [{
    key: 'setWrapFocus',
    value: function setWrapFocus(value) {
      this.wrapFocus_ = value;
    }

    /**
     * Sets the isVertical_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setVerticalOrientation',
    value: function setVerticalOrientation(value) {
      this.isVertical_ = value;
    }

    /**
     * Sets the isSingleSelectionList_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setSingleSelection',
    value: function setSingleSelection(value) {
      this.isSingleSelectionList_ = value;
    }

    /** @param {number} index */

  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      if (index === this.selectedIndex_) {
        this.adapter_.removeAttributeForElementIndex(this.selectedIndex_, _constants.strings.ARIA_SELECTED);
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);

        // Used to reset the first element to tabindex=0 when deselecting a list item.
        // If already on the first list item, leave tabindex at 0.
        if (this.selectedIndex_ >= 0) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', 0);
        }
        this.selectedIndex_ = -1;
        return;
      }

      if (this.selectedIndex_ >= 0) {
        this.adapter_.removeAttributeForElementIndex(this.selectedIndex_, _constants.strings.ARIA_SELECTED);
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
      }

      if (index >= 0 && this.adapter_.getListItemCount() > index) {
        this.selectedIndex_ = index;
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, _constants.strings.ARIA_SELECTED, true);
        this.adapter_.addClassForElementIndex(this.selectedIndex_, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', 0);

        if (this.selectedIndex_ !== 0) {
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
        }
      }
    }

    /**
     * Focus in handler for the list items.
     * @param evt
     */

  }, {
    key: 'handleFocusIn',
    value: function handleFocusIn(evt) {
      var listItem = this.getListItem_(evt.target);
      if (!listItem) return;

      var listItemIndex = this.adapter_.getListItemIndex(listItem);

      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
      }
    }

    /**
     * Focus out handler for the list items.
     * @param {Event} evt
     */

  }, {
    key: 'handleFocusOut',
    value: function handleFocusOut(evt) {
      var listItem = this.getListItem_(evt.target);
      if (!listItem) return;
      var listItemIndex = this.adapter_.getListItemIndex(listItem);

      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
      }
    }

    /**
     * Key handler for the list.
     * @param {Event} evt
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt) {
      var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
      var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
      var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
      var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
      var isHome = evt.key === 'Home' || evt.keyCode === 36;
      var isEnd = evt.key === 'End' || evt.keyCode === 35;
      var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
      var isSpace = evt.key === 'Space' || evt.keyCode === 32;

      var currentIndex = this.adapter_.getFocusedElementIndex();

      if (currentIndex === -1) {
        currentIndex = this.adapter_.getListItemIndex(this.getListItem_(evt.target));

        if (currentIndex < 0) {
          // If this event doesn't have a mdc-list-item ancestor from the
          // current list (not from a sublist), return early.
          return;
        }
      }

      if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
        this.preventDefaultEvent_(evt);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
        this.preventDefaultEvent_(evt);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent_(evt);
        this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent_(evt);
        this.focusLastElement();
      } else if (this.isSingleSelectionList_ && (isEnter || isSpace)) {
        this.preventDefaultEvent_(evt);
        // Check if the space key was pressed on the list item or a child element.
        if (this.adapter_.isListItem(evt.target)) {
          this.setSelectedIndex(currentIndex);
        }
      }
    }

    /**
     * Click handler for the list.
     */

  }, {
    key: 'handleClick',
    value: function handleClick() {
      var currentIndex = this.adapter_.getFocusedElementIndex();

      if (currentIndex === -1) return;

      this.setSelectedIndex(currentIndex);
    }

    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'preventDefaultEvent_',
    value: function preventDefaultEvent_(evt) {
      var tagName = ('' + evt.target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }

    /**
     * Focuses the next element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusNextElement',
    value: function focusNextElement(index) {
      var count = this.adapter_.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          // Return early because last item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(nextIndex);
    }

    /**
     * Focuses the previous element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusPrevElement',
    value: function focusPrevElement(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter_.getListItemCount() - 1;
        } else {
          // Return early because first item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(prevIndex);
    }
  }, {
    key: 'focusFirstElement',
    value: function focusFirstElement() {
      if (this.adapter_.getListItemCount() > 0) {
        this.adapter_.focusItemAtIndex(0);
      }
    }
  }, {
    key: 'focusLastElement',
    value: function focusLastElement() {
      var lastIndex = this.adapter_.getListItemCount() - 1;
      if (lastIndex >= 0) {
        this.adapter_.focusItemAtIndex(lastIndex);
      }
    }

    /**
     * Utility method to find the first ancestor with the mdc-list-item class.
     * @param {EventTarget} target
     * @return {?Element}
     * @private
     */

  }, {
    key: 'getListItem_',
    value: function getListItem_(target) {
      while (!this.adapter_.isListItem(target)) {
        if (!target.parentElement) return null;
        target = target.parentElement;
      }
      return target;
    }
  }]);

  return MDCListFoundation;
}(_foundation2.default);

exports.default = MDCListFoundation;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCShortTopAppBarFoundation = exports.MDCFixedTopAppBarFoundation = exports.MDCTopAppBarFoundation = exports.MDCTopAppBarBaseFoundation = exports.MDCTopAppBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(4);

var _adapter2 = _interopRequireDefault(_adapter);

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(2);

var _constants = __webpack_require__(5);

var _foundation = __webpack_require__(10);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(82);

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = __webpack_require__(83);

var _foundation6 = _interopRequireDefault(_foundation5);

var _foundation7 = __webpack_require__(84);

var _foundation8 = _interopRequireDefault(_foundation7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTopAppBarBaseFoundation>}
 * @final
 */
var MDCTopAppBar = function (_MDCComponent) {
  _inherits(MDCTopAppBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTopAppBar() {
    var _ref;

    _classCallCheck(this, MDCTopAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTopAppBar.__proto__ || Object.getPrototypeOf(MDCTopAppBar)).call.apply(_ref, [this].concat(args)));

    _this.navIcon_;
    /** @type {?Array<MDCRipple>} */
    _this.iconRipples_;
    return _this;
  }

  _createClass(MDCTopAppBar, [{
    key: 'initialize',
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return _index.MDCRipple.attachTo(el);
      };

      this.navIcon_ = this.root_.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR);

      // Get all icons in the toolbar and instantiate the ripples
      var icons = [].slice.call(this.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));
      if (this.navIcon_) {
        icons.push(this.navIcon_);
      }

      this.iconRipples_ = icons.map(function (icon) {
        var ripple = rippleFactory(icon);
        ripple.unbounded = true;
        return ripple;
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.iconRipples_.forEach(function (iconRipple) {
        return iconRipple.destroy();
      });
      _get(MDCTopAppBar.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBar.prototype), 'destroy', this).call(this);
    }

    /**
     * @param {!Element} root
     * @return {!MDCTopAppBar}
     */

  }, {
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTopAppBarBaseFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      /** @type {!MDCTopAppBarAdapter} */
      var adapter = /** @type {!MDCTopAppBarAdapter} */Object.assign({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(property, value) {
          return _this2.root_.style.setProperty(property, value);
        },
        getTopAppBarHeight: function getTopAppBarHeight() {
          return _this2.root_.clientHeight;
        },
        registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.addEventListener(evtType, handler);
          }
        },
        deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.removeEventListener(evtType, handler);
          }
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {
          _this2.emit(_constants.strings.NAVIGATION_EVENT, {});
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          return window.addEventListener('scroll', handler);
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          return window.removeEventListener('scroll', handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getViewportScrollY: function getViewportScrollY() {
          return window.pageYOffset;
        },
        getTotalActionItems: function getTotalActionItems() {
          return _this2.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
        }
      });

      /** @type {!MDCTopAppBarBaseFoundation} */
      var foundation = void 0;
      if (this.root_.classList.contains(_constants.cssClasses.SHORT_CLASS)) {
        foundation = new _foundation6.default(adapter);
      } else if (this.root_.classList.contains(_constants.cssClasses.FIXED_CLASS)) {
        foundation = new _foundation4.default(adapter);
      } else {
        foundation = new _foundation8.default(adapter);
      }

      return foundation;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTopAppBar(root);
    }
  }]);

  return MDCTopAppBar;
}(_component2.default);

exports.MDCTopAppBar = MDCTopAppBar;
exports.MDCTopAppBarBaseFoundation = _foundation2.default;
exports.MDCTopAppBarFoundation = _foundation8.default;
exports.MDCFixedTopAppBarFoundation = _foundation4.default;
exports.MDCShortTopAppBarFoundation = _foundation6.default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(5);

var _adapter = __webpack_require__(4);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(10);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */
var MDCFixedTopAppBarFoundation = function (_MDCTopAppBarFoundati) {
  _inherits(MDCFixedTopAppBarFoundation, _MDCTopAppBarFoundati);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCFixedTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCFixedTopAppBarFoundation);

    /** State variable for the previous scroll iteration top app bar state */
    var _this = _possibleConstructorReturn(this, (MDCFixedTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation)).call(this, adapter));

    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCFixedTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the modifier class
     * on the fixed top app bar.
     */

  }, {
    key: 'fixedScrollHandler_',
    value: function fixedScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.wasScrolled_) {
          this.adapter_.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = false;
        }
      } else {
        if (!this.wasScrolled_) {
          this.adapter_.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = true;
        }
      }
    }
  }]);

  return MDCFixedTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCFixedTopAppBarFoundation;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(4);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(10);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */
var MDCShortTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCShortTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCShortTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCShortTopAppBarFoundation);

    // State variable for the current top app bar state
    var _this = _possibleConstructorReturn(this, (MDCShortTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation)).call(this, adapter));

    _this.isCollapsed = false;

    _this.scrollHandler_ = function () {
      return _this.shortAppBarScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCShortTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'init', this).call(this);
      var isAlwaysCollapsed = this.adapter_.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);

      if (this.adapter_.getTotalActionItems() > 0) {
        this.adapter_.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
      }

      if (!isAlwaysCollapsed) {
        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.shortAppBarScrollHandler_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the collapsed modifier class
     * on the short top app bar.
     * @private
     */

  }, {
    key: 'shortAppBarScrollHandler_',
    value: function shortAppBarScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.isCollapsed) {
          this.adapter_.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = false;
        }
      } else {
        if (!this.isCollapsed) {
          this.adapter_.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = true;
        }
      }
    }
  }]);

  return MDCShortTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCShortTopAppBarFoundation;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(4);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(10);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */

var MDCTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCTopAppBarFoundation);

    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */
    var _this = _possibleConstructorReturn(this, (MDCTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation)).call(this, adapter));

    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();

    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();

    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */
    _this.wasDocked_ = true;

    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */
    _this.isDockedShowing_ = true;

    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */
    _this.currentAppBarOffsetTop_ = 0;

    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */
    _this.isCurrentlyBeingResized_ = false;

    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */
    _this.resizeThrottleId_ = INITIAL_VALUE;

    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */
    _this.resizeDebounceId_ = INITIAL_VALUE;

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };
    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };
    return _this;
  }

  _createClass(MDCTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.setStyle('top', '');
    }

    /**
     * Function to determine if the DOM needs to update.
     * @return {boolean}
     * @private
     */

  }, {
    key: 'checkForUpdate_',
    value: function checkForUpdate_() {
      var offscreenBoundaryTop = -this.topAppBarHeight_;
      var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
      var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
      var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

      // If it's partially showing, it can't be docked.
      if (partiallyShowing) {
        this.wasDocked_ = false;
      } else {
        // Not previously docked and not partially showing, it's now docked.
        if (!this.wasDocked_) {
          this.wasDocked_ = true;
          return true;
        } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
          this.isDockedShowing_ = hasAnyPixelsOnscreen;
          return true;
        }
      }

      return partiallyShowing;
    }

    /**
     * Function to move the top app bar if needed.
     * @private
     */

  }, {
    key: 'moveTopAppBar_',
    value: function moveTopAppBar_() {
      if (this.checkForUpdate_()) {
        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
        // so the top app bar doesn't show if the window resizes and the new height > the old height.
        var offset = this.currentAppBarOffsetTop_;
        if (Math.abs(offset) >= this.topAppBarHeight_) {
          offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
        }

        this.adapter_.setStyle('top', offset + 'px');
      }
    }

    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @private
     */

  }, {
    key: 'topAppBarScrollHandler_',
    value: function topAppBarScrollHandler_() {
      var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
      var diff = currentScrollPosition - this.lastScrollPosition_;
      this.lastScrollPosition_ = currentScrollPosition;

      // If the window is being resized the lastScrollPosition_ needs to be updated but the
      // current scroll of the top app bar should stay in the same position.
      if (!this.isCurrentlyBeingResized_) {
        this.currentAppBarOffsetTop_ -= diff;

        if (this.currentAppBarOffsetTop_ > 0) {
          this.currentAppBarOffsetTop_ = 0;
        } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
          this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
        }

        this.moveTopAppBar_();
      }
    }

    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @private
     */

  }, {
    key: 'topAppBarResizeHandler_',
    value: function topAppBarResizeHandler_() {
      var _this2 = this;

      // Throttle resize events 10 p/s
      if (!this.resizeThrottleId_) {
        this.resizeThrottleId_ = setTimeout(function () {
          _this2.resizeThrottleId_ = INITIAL_VALUE;
          _this2.throttledResizeHandler_();
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }

      this.isCurrentlyBeingResized_ = true;

      if (this.resizeDebounceId_) {
        clearTimeout(this.resizeDebounceId_);
      }

      this.resizeDebounceId_ = setTimeout(function () {
        _this2.topAppBarScrollHandler_();
        _this2.isCurrentlyBeingResized_ = false;
        _this2.resizeDebounceId_ = INITIAL_VALUE;
      }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     * @private
     */

  }, {
    key: 'throttledResizeHandler_',
    value: function throttledResizeHandler_() {
      var currentHeight = this.adapter_.getTopAppBarHeight();
      if (this.topAppBarHeight_ !== currentHeight) {
        this.wasDocked_ = false;

        // Since the top app bar has a different height depending on the screen width, this
        // will ensure that the top app bar remains in the correct location if
        // completely hidden and a resize makes the top app bar a different height.
        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
        this.topAppBarHeight_ = currentHeight;
      }
      this.topAppBarScrollHandler_();
    }
  }]);

  return MDCTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarFoundation;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSwitch = exports.MDCSwitchFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(86);

var _foundation = __webpack_require__(89);

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = __webpack_require__(33);

var _util = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCSwitchFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCSwitch = function (_MDCComponent) {
  _inherits(MDCSwitch, _MDCComponent);

  _createClass(MDCSwitch, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSwitch(root);
    }
  }]);

  function MDCSwitch() {
    var _ref;

    _classCallCheck(this, MDCSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCSwitch.__proto__ || Object.getPrototypeOf(MDCSwitch)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();

    /** @private {!Function} */
    _this.changeHandler_;
    return _this;
  }

  _createClass(MDCSwitch, [{
    key: 'destroy',
    value: function destroy() {
      _get(MDCSwitch.prototype.__proto__ || Object.getPrototypeOf(MDCSwitch.prototype), 'destroy', this).call(this);
      this.ripple_.destroy();
      this.nativeControl_.removeEventListener('change', this.changeHandler_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.changeHandler_ = this.foundation_.handleChange.bind(this.foundation_);
      this.nativeControl_.addEventListener('change', this.changeHandler_);
    }

    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'initRipple_',


    /**
     * @return {!MDCRipple}
     * @private
     */
    value: function initRipple_() {
      var _this2 = this;

      var RIPPLE_SURFACE_SELECTOR = _foundation2.default.strings.RIPPLE_SURFACE_SELECTOR;

      var rippleSurface = /** @type {!Element} */this.root_.querySelector(RIPPLE_SURFACE_SELECTOR);

      var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
      var adapter = Object.assign(_index2.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeControl_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return rippleSurface.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return rippleSurface.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return rippleSurface.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return rippleSurface.getBoundingClientRect();
        }
      });
      var foundation = new _index2.MDCRippleFoundation(adapter);
      return new _index2.MDCRipple(this.root_, foundation);
    }

    /** @return {!MDCSwitchFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        setNativeControlChecked: function setNativeControlChecked(checked) {
          return _this3.nativeControl_.checked = checked;
        },
        isNativeControlChecked: function isNativeControlChecked() {
          return _this3.nativeControl_.checked;
        },
        setNativeControlDisabled: function setNativeControlDisabled(disabled) {
          return _this3.nativeControl_.disabled = disabled;
        },
        isNativeControlDisabled: function isNativeControlDisabled() {
          return _this3.nativeControl_.disabled;
        }
      });
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSwitch;
}(_component2.default);

exports.MDCSwitchFoundation = _foundation2.default;
exports.MDCSwitch = MDCSwitch;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelectionControl = exports.MDCSelectionControlState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */

var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

exports.MDCSelectionControlState = MDCSelectionControlState;
exports.MDCSelectionControl = MDCSelectionControl;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(34);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(88);

var _util = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'supportsPressRipple_',
    value: function supportsPressRipple_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var supportsPressRipple = this.supportsPressRipple_();

      this.registerRootHandlers_(supportsPressRipple);

      if (supportsPressRipple) {
        var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$.ROOT,
            UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

        requestAnimationFrame(function () {
          _this2.adapter_.addClass(ROOT);
          if (_this2.adapter_.isUnbounded()) {
            _this2.adapter_.addClass(UNBOUNDED);
            // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
            _this2.layoutInternal_();
          }
        });
      }
    }

    /** @override */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (this.supportsPressRipple_()) {
        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

          this.adapter_.removeClass(FG_ACTIVATION);
        }

        var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$2.ROOT,
            UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(ROOT);
          _this3.adapter_.removeClass(UNBOUNDED);
          _this3.removeCssVars_();
        });
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    }

    /**
     * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
     * @private
     */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_(supportsPressRipple) {
      var _this4 = this;

      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
        });
        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var _this16 = this;

      requestAnimationFrame(function () {
        return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this17 = this;

      requestAnimationFrame(function () {
        return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(90);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCSwitchAdapter>}
 */
var MDCSwitchFoundation = function (_MDCFoundation) {
  _inherits(MDCSwitchFoundation, _MDCFoundation);

  _createClass(MDCSwitchFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return {!MDCSwitchAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSwitchAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setNativeControlChecked: function setNativeControlChecked() /* checked: boolean */{},
          isNativeControlChecked: function isNativeControlChecked() /* boolean */{},
          setNativeControlDisabled: function setNativeControlDisabled() /* disabled: boolean */{},
          isNativeControlDisabled: function isNativeControlDisabled() /* boolean */{}
        }
      );
    }
  }]);

  function MDCSwitchFoundation(adapter) {
    _classCallCheck(this, MDCSwitchFoundation);

    return _possibleConstructorReturn(this, (MDCSwitchFoundation.__proto__ || Object.getPrototypeOf(MDCSwitchFoundation)).call(this, Object.assign(MDCSwitchFoundation.defaultAdapter, adapter)));
  }

  /** @override */


  _createClass(MDCSwitchFoundation, [{
    key: 'init',
    value: function init() {
      // Do an initial state update based on the state of the native control.
      this.handleChange();
    }

    /** @return {boolean} */

  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.adapter_.isNativeControlChecked();
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.adapter_.setNativeControlChecked(checked);
      this.updateCheckedStyling_(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.adapter_.isNativeControlDisabled();
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.adapter_.setNativeControlDisabled(disabled);
      if (disabled) {
        this.adapter_.addClass(_constants.cssClasses.DISABLED);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.DISABLED);
      }
    }

    /**
     * Handles the change event for the switch native control.
     */

  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.updateCheckedStyling_(this.isChecked());
    }

    /**
     * Updates the styling of the switch based on its checked state.
     * @param {boolean} checked
     * @private
     */

  }, {
    key: 'updateCheckedStyling_',
    value: function updateCheckedStyling_(checked) {
      if (checked) {
        this.adapter_.addClass(_constants.cssClasses.CHECKED);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.CHECKED);
      }
    }
  }]);

  return MDCSwitchFoundation;
}(_foundation2.default);

exports.default = MDCSwitchFoundation;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Switch. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCSwitchAdapter = function () {
  function MDCSwitchAdapter() {
    _classCallCheck(this, MDCSwitchAdapter);
  }

  _createClass(MDCSwitchAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {boolean} checked */

  }, {
    key: "setNativeControlChecked",
    value: function setNativeControlChecked(checked) {}

    /** @return {boolean} checked */

  }, {
    key: "isNativeControlChecked",
    value: function isNativeControlChecked() {}

    /** @param {boolean} disabled */

  }, {
    key: "setNativeControlDisabled",
    value: function setNativeControlDisabled(disabled) {}

    /** @return {boolean} disabled */

  }, {
    key: "isNativeControlDisabled",
    value: function isNativeControlDisabled() {}
  }]);

  return MDCSwitchAdapter;
}();

exports.default = MDCSwitchAdapter;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  CHECKED: 'mdc-switch--checked',
  DISABLED: 'mdc-switch--disabled'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ })
/******/ ]);