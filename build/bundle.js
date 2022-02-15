/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2170:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/react-burger-menu/lib/BurgerMenu.js
var BurgerMenu = __webpack_require__(3190);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(5805);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss
var App = __webpack_require__(4554);
;// CONCATENATED MODULE: ./src/App.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(App/* default */.Z, options);




       /* harmony default export */ const src_App = (App/* default */.Z && App/* default.locals */.Z.locals ? App/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 28 modules
var Nav = __webpack_require__(8494);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Accordion.js + 23 modules
var Accordion = __webpack_require__(9467);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/AccordionButton.js
var AccordionButton = __webpack_require__(3621);
;// CONCATENATED MODULE: ./src/icons/arrow.svg
/* harmony default export */ const arrow = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2Zw0KICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgICAgIHZlcnNpb249IjEuMSINCiAgICAgICAgdmlld0JveD0iMCAwIDE2IDE2Ig0KICAgICAgICBjbGFzcz0ibmF2aWdhdGlvbi1zaWRlX19hcnJvdyB6LWljb24gei1maWxsIg0KICAgICAgICBzdHlsZT0id2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsiPg0KICAgIDxwYXRoIHBpZD0iMCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41MzYgNy4xNzJsLTMuMTgyIDMuMTgyYS41LjUgMCAwMS0uNzA4IDBMNC40NjQgNy4xNzFhLjUuNSAwIDAxLjcwOC0uNzA4TDcuNzA3IDloLjU4NmwyLjUzNi0yLjUzNmEuNS41IDAgMTEuNzA3LjcwOHoiIGZpbGw9IiM5Nzk5OUIiPg0KDQogICAgPC9wYXRoPg0KPC9zdmc+DQo=");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccordionToggler/accordionTogger.css
var accordionTogger = __webpack_require__(4118);
;// CONCATENATED MODULE: ./src/components/AccordionToggler/accordionTogger.css

      
      
      
      
      
      
      
      
      

var accordionTogger_options = {};

accordionTogger_options.styleTagTransform = (styleTagTransform_default());
accordionTogger_options.setAttributes = (setAttributesWithoutAttributes_default());

      accordionTogger_options.insert = insertBySelector_default().bind(null, "head");
    
accordionTogger_options.domAPI = (styleDomAPI_default());
accordionTogger_options.insertStyleElement = (insertStyleElement_default());

var accordionTogger_update = injectStylesIntoStyleTag_default()(accordionTogger/* default */.Z, accordionTogger_options);




       /* harmony default export */ const AccordionToggler_accordionTogger = (accordionTogger/* default */.Z && accordionTogger/* default.locals */.Z.locals ? accordionTogger/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/AccordionToggler/AccordionToggler.tsx




var AccordionToggler = function AccordionToggler(_ref) {
  var text = _ref.text,
      eventKey = _ref.eventKey;
  var iconRef = (0,react.useRef)(true);
  var decoratedOnClick = (0,AccordionButton/* useAccordionButton */.k)(eventKey, function () {
    iconRef.current = !iconRef.current;
  });
  var style = {
    transform: iconRef.current ? 'rotate(360deg)' : '',
    transition: 'transform 150ms ease' // smooth transition

  };
  return /*#__PURE__*/react.createElement("div", {
    className: "accordion-toggler__container",
    onClick: decoratedOnClick
  }, /*#__PURE__*/react.createElement("div", {
    className: "accordion-toggler__text"
  }, text), /*#__PURE__*/react.createElement("img", {
    src: arrow,
    className: "accordion-toggler__icon",
    style: style
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Menu/menu.scss
var menu = __webpack_require__(6256);
;// CONCATENATED MODULE: ./src/components/Menu/menu.scss

      
      
      
      
      
      
      
      
      

var menu_options = {};

menu_options.styleTagTransform = (styleTagTransform_default());
menu_options.setAttributes = (setAttributesWithoutAttributes_default());

      menu_options.insert = insertBySelector_default().bind(null, "head");
    
menu_options.domAPI = (styleDomAPI_default());
menu_options.insertStyleElement = (insertStyleElement_default());

var menu_update = injectStylesIntoStyleTag_default()(menu/* default */.Z, menu_options);




       /* harmony default export */ const Menu_menu = (menu/* default */.Z && menu/* default.locals */.Z.locals ? menu/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/icons/evraz_logo_1.svg
/* harmony default export */ const evraz_logo_1 = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzcyLjkgNTcuOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIzODgiPjxwYXRoIGQ9Ik0wIDIxLjdoNjAuMXYxNC41SDB6IiBmaWxsPSIjZWY3NjIyIi8+PHBhdGggZD0iTTAgNDMuNGg2MC4xdjE0LjVIMHoiIGZpbGw9IiNlZjRmMjQiLz48cGF0aCBkPSJNMCAwaDYwLjF2MTQuNUgweiIgZmlsbD0iI2ZiYWUxOCIvPjxwYXRoIGQ9Ik0zMjQuMiA0Ny41bDMyLjUtMzcuMmgtMzIuNVYuMWg0OC43djEwLjJMMzQwIDQ3LjVoMzIuOXYxMC4zaC00OC43ek0xNTguOCA1Ny44TDEzMy42LjFoMTMuOGwxNy4zIDQzIDE3LjgtNDNoMTNsLTI0LjIgNTcuN3oiIGZpbGw9IiMyMzFmMjAiLz48cGF0aCBkPSJNMjg4IDExLjZsLTguNCAyMi4yaDE3LjJ6bS0zMC40IDQ2LjJMMjgyIC4xaDEyLjlsMjQuNiA1Ny44SDMwNmwtNS4zLTEzLjhoLTI1LjFsLTUuMSAxMy44aC0xMi45eiIgZmlsbD0iIzIyMWYxZiIvPjxnIGZpbGw9IiMyMzFmMjAiPjxwYXRoIGQ9Ik0yMTIuMiAxMC40djE0LjVoMTQuOWM0IDAgNi44LS42IDguNC0xLjdzMi40LTMgMi40LTUuNmMwLTIuNy0uOC00LjUtMi4zLTUuNS0xLjMtLjktMy40LTEuNS02LjUtMS42aC0xNi45bTQwLjcgNDcuM2gtMTMuNmwtMy4yLTUuNy0zLjItNS43LTYuNC0xMS4zaC0xNC4zdjIyLjdoLTEyLjFWLjFIMjMwYzEuNyAwIDMuNC4xIDQuOS4zczIuOS40IDQuMi44YzEuMy4zIDIuNC44IDMuNSAxLjNzMiAxLjEgMi44IDEuOCAxLjUgMS41IDIuMSAyLjQgMS4xIDEuOSAxLjUgMyAuNyAyLjMuOSAzLjYuMyAyLjcuMyA0LjJjMCAxLjEtLjEgMi4yLS4yIDMuMnMtLjMgMi0uNSAyLjktLjUgMS44LS45IDIuNi0uOCAxLjYtMS4zIDIuMy0xLjEgMS4zLTEuNyAxLjktMS4zIDEuMS0yIDEuNS0xLjUuOC0yLjMgMS4yYy0uOC4zLTEuNy42LTIuNy44ek0xMjguOSAxMC4zSDk1LjN2MTMuMmgzMy42djEwLjNIOTUuM3YxMy44aDMzLjZ2MTAuMkg4MS41VjBsNDcuNC4xeiIvPjwvZz48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/components/Menu/Menu.tsx







var otherDocsMenu = [];
var sedMenu = [{
  description: "Мои задачи",
  link: "/My_tasks",
  isActive: false
}, {
  description: "Мои документы",
  link: "/My_document",
  isActive: false
}, {
  description: "Договоры",
  link: "/Agreements",
  isActive: true
}, {
  description: "Завки",
  link: "/Applications",
  isActive: false
}];
var Menu = function Menu(props) {
  var location = (0,react_router/* useLocation */.TH)();

  var renderMenu = function renderMenu(menu) {
    return /*#__PURE__*/react.createElement(Nav/* default */.Z, {
      activeKey: location.pathname
    }, menu.map(function (el, idx) {
      return /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
        as: react_router_dom/* Link */.rU,
        to: el.link,
        key: idx + el.link,
        eventKey: el.link,
        className: "menu__element",
        disabled: !el.isActive
      }, el.description);
    }));
  }; //todo it's possible to split


  return /*#__PURE__*/react.createElement("menu", {
    className: "menu__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu__logo-container"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/",
    className: "menu__logo"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "logo",
    src: evraz_logo_1,
    className: "menu__logo-img"
  })), /*#__PURE__*/react.createElement("div", {
    className: "menu__logo-gradient"
  })), /*#__PURE__*/react.createElement("div", {
    className: "menu__nav-container"
  }, /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    defaultActiveKey: "0",
    className: "menu__accordion-menu_el",
    flush: true
  }, /*#__PURE__*/react.createElement(AccordionToggler, {
    text: "CЭД",
    eventKey: "0"
  }), /*#__PURE__*/react.createElement(Accordion/* default.Collapse */.Z.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, renderMenu(sedMenu))), /*#__PURE__*/react.createElement(AccordionToggler, {
    text: "Остальные документы",
    eventKey: "1"
  }), /*#__PURE__*/react.createElement(Accordion/* default.Collapse */.Z.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, renderMenu(otherDocsMenu))))));
};
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 12 modules
var Form = __webpack_require__(5392);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(5005);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/FormControl.js
var FormControl = __webpack_require__(4716);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/InputGroup.js + 1 modules
var InputGroup = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/utils/StringUtils.ts



var StringUtils = /*#__PURE__*/(0,createClass/* default */.Z)(function StringUtils() {
  (0,classCallCheck/* default */.Z)(this, StringUtils);
});

(0,defineProperty/* default */.Z)(StringUtils, "sanitizeString", function (value) {
  if (value && value.length > 0) {
    return value.replace(/([^a-zа-яА-ЯёЁA-Z0-9_-\s]+)/, "");
  }

  return "";
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss
var header = __webpack_require__(2521);
;// CONCATENATED MODULE: ./src/components/Header/header.scss

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());

      header_options.insert = insertBySelector_default().bind(null, "head");
    
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.Z, header_options);




       /* harmony default export */ const Header_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/icons/search-icon.svg
/* harmony default export */ const search_icon = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPg0KICAgIDxwYXRoIGQ9Ik0gMTMgMyBDIDcuNDg4OTk3MSAzIDMgNy40ODg5OTcxIDMgMTMgQyAzIDE4LjUxMTAwMyA3LjQ4ODk5NzEgMjMgMTMgMjMgQyAxNS4zOTY1MDggMjMgMTcuNTk3Mzg1IDIyLjE0ODk4NiAxOS4zMjIyNjYgMjAuNzM2MzI4IEwgMjUuMjkyOTY5IDI2LjcwNzAzMSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjYuNzA3MDMxIDI1LjI5Mjk2OSBMIDIwLjczNjMyOCAxOS4zMjIyNjYgQyAyMi4xNDg5ODYgMTcuNTk3Mzg1IDIzIDE1LjM5NjUwOCAyMyAxMyBDIDIzIDcuNDg4OTk3MSAxOC41MTEwMDMgMyAxMyAzIHogTSAxMyA1IEMgMTcuNDMwMTIzIDUgMjEgOC41Njk4Nzc0IDIxIDEzIEMgMjEgMTcuNDMwMTIzIDE3LjQzMDEyMyAyMSAxMyAyMSBDIDguNTY5ODc3NCAyMSA1IDE3LjQzMDEyMyA1IDEzIEMgNSA4LjU2OTg3NzQgOC41Njk4Nzc0IDUgMTMgNSB6Ii8+DQo8L3N2Zz4=");
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx









var Header = function Header(props) {
  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      docName = _useState2[0],
      setDocName = _useState2[1];

  var onInputChange = function onInputChange(e) {
    var _e$target;

    setDocName(StringUtils.sanitizeString((e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) || ""));
  };

  return /*#__PURE__*/react.createElement("header", {
    className: "header__container"
  }, /*#__PURE__*/react.createElement(Form/* default */.Z, {
    className: "header__form-container"
  }, /*#__PURE__*/react.createElement(InputGroup/* default */.Z, {
    className: "mb-3 header__docs-input"
  }, /*#__PURE__*/react.createElement(FormControl/* default */.Z, {
    type: "text",
    id: "doc-name-input",
    value: docName,
    onChange: onInputChange,
    placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
    "aria-label": "Search documents input"
  }), /*#__PURE__*/react.createElement(InputGroup/* default.Text */.Z.Text, null, /*#__PURE__*/react.createElement("img", {
    src: search_icon,
    alt: "search-icon",
    className: "header__find-docs-icon"
  }))), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    id: "search-docs-btn",
    className: "header__find-btn",
    onClick: function onClick() {
      console.log("click");
    }
  }, "\u041D\u0430\u0439\u0442\u0438")));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/utils/CommonUtils.ts



var CommonUtils = /*#__PURE__*/(0,createClass/* default */.Z)(function CommonUtils() {
  (0,classCallCheck/* default */.Z)(this, CommonUtils);
});

(0,defineProperty/* default */.Z)(CommonUtils, "getDocsServiceHost", function () {
  // return "http://msk-lts-111.msk.evraz.com";
  return "http://127.0.0.1:1414";
});
;// CONCATENATED MODULE: ./src/controllers/AgreementController.ts






var AgreementController = /*#__PURE__*/(0,createClass/* default */.Z)(function AgreementController() {
  (0,classCallCheck/* default */.Z)(this, AgreementController);
});

(0,defineProperty/* default */.Z)(AgreementController, "getAgreementsList", /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(filterData) {
    var url, response, result;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = CommonUtils.getDocsServiceHost() + "/referent/br_dogovory.nsf/AllDocuments?ReadViewEntries&Outputformat=JSON&count=15";
            _context.next = 4;
            return fetch("".concat(url));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);

          case 13:
            return _context.abrupt("return", Promise.resolve(null));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

(0,defineProperty/* default */.Z)(AgreementController, "getAgreementPreviewUrl", function (agreementId) {
  return CommonUtils.getDocsServiceHost() + "/Referent/br_dogovory.nsf/0/".concat(agreementId);
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Agreements/AgreementsPreview/agreementsPreview.scss
var agreementsPreview = __webpack_require__(8062);
;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsPreview/agreementsPreview.scss

      
      
      
      
      
      
      
      
      

var agreementsPreview_options = {};

agreementsPreview_options.styleTagTransform = (styleTagTransform_default());
agreementsPreview_options.setAttributes = (setAttributesWithoutAttributes_default());

      agreementsPreview_options.insert = insertBySelector_default().bind(null, "head");
    
agreementsPreview_options.domAPI = (styleDomAPI_default());
agreementsPreview_options.insertStyleElement = (insertStyleElement_default());

var agreementsPreview_update = injectStylesIntoStyleTag_default()(agreementsPreview/* default */.Z, agreementsPreview_options);




       /* harmony default export */ const AgreementsPreview_agreementsPreview = (agreementsPreview/* default */.Z && agreementsPreview/* default.locals */.Z.locals ? agreementsPreview/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsPreview/AgreementsPreview.tsx


var AgreementsPreview = function AgreementsPreview(props) {
  var renderAgreement = function renderAgreement() {
    var _props$agreement;

    return !!props.src && !!((_props$agreement = props.agreement) !== null && _props$agreement !== void 0 && _props$agreement.agreementId) && /*#__PURE__*/react.createElement("iframe", {
      className: "agreements__agreement-frame",
      loading: "lazy",
      name: "agreements-preview",
      title: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430",
      scrolling: "yes" // src={"https://jsonplaceholder.typicode.com/"} //for test
      ,
      src: props.src
    });
  };

  var renderPreviewDescription = function renderPreviewDescription() {
    var _props$agreement2;

    return !!((_props$agreement2 = props.agreement) !== null && _props$agreement2 !== void 0 && _props$agreement2.agreementId) ? /*#__PURE__*/react.createElement("div", null) : /*#__PURE__*/react.createElement("div", {
      className: "agreements-preview__warning"
    }, /*#__PURE__*/react.createElement("h3", null, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440"));
  };

  var renderAgreementInfo = function renderAgreementInfo() {
    var _props$agreement3, _props$agreement4, _props$agreement5;

    var NO_AUTHOR_MSG = "Автор не найден";
    return !!props.src && !!((_props$agreement3 = props.agreement) !== null && _props$agreement3 !== void 0 && _props$agreement3.agreementId) ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430: ", (_props$agreement4 = props.agreement) === null || _props$agreement4 === void 0 ? void 0 : _props$agreement4.agreementName), /*#__PURE__*/react.createElement("div", null, "\u0410\u0432\u0442\u043E\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430: ", ((_props$agreement5 = props.agreement) === null || _props$agreement5 === void 0 ? void 0 : _props$agreement5.agreementAuthor) || NO_AUTHOR_MSG)) : "";
  };

  return /*#__PURE__*/react.createElement("section", {
    className: "agreements-preview__wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "agreements-preview__description"
  }, renderPreviewDescription()), /*#__PURE__*/react.createElement("div", {
    className: "agreements-preview__frame-container"
  }, renderAgreement()), /*#__PURE__*/react.createElement("div", {
    className: "agreements-preview__agreement-info"
  }, renderAgreementInfo()));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Agreements/AgreementsFilter/agreementsFilter.scss
var agreementsFilter = __webpack_require__(203);
;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsFilter/agreementsFilter.scss

      
      
      
      
      
      
      
      
      

var agreementsFilter_options = {};

agreementsFilter_options.styleTagTransform = (styleTagTransform_default());
agreementsFilter_options.setAttributes = (setAttributesWithoutAttributes_default());

      agreementsFilter_options.insert = insertBySelector_default().bind(null, "head");
    
agreementsFilter_options.domAPI = (styleDomAPI_default());
agreementsFilter_options.insertStyleElement = (insertStyleElement_default());

var agreementsFilter_update = injectStylesIntoStyleTag_default()(agreementsFilter/* default */.Z, agreementsFilter_options);




       /* harmony default export */ const AgreementsFilter_agreementsFilter = (agreementsFilter/* default */.Z && agreementsFilter/* default.locals */.Z.locals ? agreementsFilter/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsFilter/AgreementsFilter.tsx





var AgreementsFilter = function AgreementsFilter(props) {
  var _props$data, _props$data2;

  var onFilterChange = function onFilterChange(e) {
    var _e$target, _e$target2;

    props.onChange(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.name, StringUtils.sanitizeString((e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value) || ""));
  };

  return /*#__PURE__*/react.createElement(Form/* default */.Z, {
    className: "agreements-filter__container"
  }, /*#__PURE__*/react.createElement(FormControl/* default */.Z, {
    id: "agreement-name",
    name: "agreement_name",
    className: "agreements-filter__name agreements-filter__filter-element",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
    value: ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.agreement_name) || "" //@ts-ignore
    ,
    onChange: onFilterChange
  }), /*#__PURE__*/react.createElement(FormControl/* default */.Z, {
    id: "agreement-author",
    name: "agreement_author",
    className: "agreements-filter__author agreements-filter__filter-element",
    placeholder: "\u0410\u0432\u0442\u043E\u0440",
    value: ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.agreement_author) || "" //@ts-ignore
    ,
    onChange: onFilterChange
  }));
};
// EXTERNAL MODULE: ./node_modules/react-bootstrap-table2-paginator/lib/index.js
var lib = __webpack_require__(814);
// EXTERNAL MODULE: ./node_modules/react-bootstrap-table-next/lib/index.js
var react_bootstrap_table_next_lib = __webpack_require__(9551);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Agreements/AgreementsTable/agreementsTable.scss
var agreementsTable = __webpack_require__(9481);
;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsTable/agreementsTable.scss

      
      
      
      
      
      
      
      
      

var agreementsTable_options = {};

agreementsTable_options.styleTagTransform = (styleTagTransform_default());
agreementsTable_options.setAttributes = (setAttributesWithoutAttributes_default());

      agreementsTable_options.insert = insertBySelector_default().bind(null, "head");
    
agreementsTable_options.domAPI = (styleDomAPI_default());
agreementsTable_options.insertStyleElement = (insertStyleElement_default());

var agreementsTable_update = injectStylesIntoStyleTag_default()(agreementsTable/* default */.Z, agreementsTable_options);




       /* harmony default export */ const AgreementsTable_agreementsTable = (agreementsTable/* default */.Z && agreementsTable/* default.locals */.Z.locals ? agreementsTable/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Agreements/AgreementsTable/AgreementsTable.tsx
 // @ts-ignore




var columns = [{
  dataField: 'agreementId',
  text: 'ИД договора',
  sort: true,
  hidden: true
}, {
  dataField: 'agreementNum',
  text: '№',
  sort: true,
  align: 'center'
}, {
  dataField: 'agreementName',
  text: 'Название договора',
  sort: true,
  style: {
    fontSize: "12px"
  }
}, {
  dataField: 'agreementAuthor',
  text: 'Автор договора',
  sort: true,
  style: {
    fontSize: "12px"
  }
}];
var AgreementsTable = function AgreementsTable(props) {
  var selectRow = {
    mode: 'radio',
    classes: 'agreements__selected-row',
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: props.onSelect
  };
  var paginationConfig = {
    sizePerPage: 10,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    totalSize: props.total
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "agreements__table-container"
  }, /*#__PURE__*/react.createElement(react_bootstrap_table_next_lib/* default */.Z, {
    keyField: "agreementId",
    rowClasses: "agreements__table-row",
    data: props.data || [],
    columns: columns,
    pagination: (0,lib/* default */.ZP)(paginationConfig),
    noDataIndication: "No data" //@ts-ignore
    ,
    selectRow: selectRow // striped
    // hover
    ,
    condensed: true
  }));
};
;// CONCATENATED MODULE: ./src/utils/AgreementUtils.ts



var AgreementUtils = /*#__PURE__*/(0,createClass/* default */.Z)(function AgreementUtils() {
  (0,classCallCheck/* default */.Z)(this, AgreementUtils);
});

(0,defineProperty/* default */.Z)(AgreementUtils, "mapToTableRecords", function (data) {
  var _data$viewentry;

  if (!data) {
    return null;
  }

  ;
  var result = [];
  var agreementNameColumnIdx = "5";
  var agreementAuthorColumnIdx = "6";
  result = data === null || data === void 0 ? void 0 : (_data$viewentry = data.viewentry) === null || _data$viewentry === void 0 ? void 0 : _data$viewentry.map(function (viewEntry) {
    var _viewEntry$entrydata;

    var agreementRecord = {};
    agreementRecord.agreementId = viewEntry === null || viewEntry === void 0 ? void 0 : viewEntry["@unid"];
    agreementRecord.agreementNum = viewEntry === null || viewEntry === void 0 ? void 0 : viewEntry["@position"];

    var _viewEntry$entrydata$ = viewEntry === null || viewEntry === void 0 ? void 0 : (_viewEntry$entrydata = viewEntry.entrydata) === null || _viewEntry$entrydata === void 0 ? void 0 : _viewEntry$entrydata.reduce(function (acc, entry) {
      var isAgreementNameColumn = (entry === null || entry === void 0 ? void 0 : entry["@columnnumber"]) === agreementNameColumnIdx;
      var isAgreementAuthorColumn = (entry === null || entry === void 0 ? void 0 : entry["@columnnumber"]) === agreementAuthorColumnIdx;

      if (isAgreementNameColumn) {
        var _entry$text;

        acc.agreementName = entry === null || entry === void 0 ? void 0 : (_entry$text = entry.text) === null || _entry$text === void 0 ? void 0 : _entry$text["0"];
      }

      if (isAgreementAuthorColumn) {
        var _entry$text2;

        acc.agreementAuthor = entry === null || entry === void 0 ? void 0 : (_entry$text2 = entry.text) === null || _entry$text2 === void 0 ? void 0 : _entry$text2["0"];
      }

      return acc;
    }, {
      agreementName: null,
      agreementAuthor: null
    }),
        agreementName = _viewEntry$entrydata$.agreementName,
        agreementAuthor = _viewEntry$entrydata$.agreementAuthor;

    agreementRecord.agreementName = agreementName;
    agreementRecord.agreementAuthor = agreementAuthor;
    return agreementRecord;
  });
  return result;
});

(0,defineProperty/* default */.Z)(AgreementUtils, "filterAgreements", function (agreements, filterData) {
  var _filterData$agreement, _filterData$agreement2;

  if (!agreements) {
    return [];
  }

  if (!(filterData !== null && filterData !== void 0 && filterData.agreement_name) && !(filterData !== null && filterData !== void 0 && filterData.agreement_author)) {
    return agreements;
  }

  var filterAgreementName = (filterData === null || filterData === void 0 ? void 0 : (_filterData$agreement = filterData.agreement_name) === null || _filterData$agreement === void 0 ? void 0 : _filterData$agreement.toLocaleLowerCase()) || "";
  var filterAgreementAuthor = (filterData === null || filterData === void 0 ? void 0 : (_filterData$agreement2 = filterData.agreement_author) === null || _filterData$agreement2 === void 0 ? void 0 : _filterData$agreement2.toLocaleLowerCase()) || "";
  return agreements.filter(function (agreement) {
    var _agreement$agreementN, _agreement$agreementA;

    var agreementName = (agreement === null || agreement === void 0 ? void 0 : (_agreement$agreementN = agreement.agreementName) === null || _agreement$agreementN === void 0 ? void 0 : _agreement$agreementN.toLocaleLowerCase()) || "";
    var agreementAuthor = (agreement === null || agreement === void 0 ? void 0 : (_agreement$agreementA = agreement.agreementAuthor) === null || _agreement$agreementA === void 0 ? void 0 : _agreement$agreementA.toLocaleLowerCase()) || "";

    if (filterAgreementName && filterAgreementAuthor) {
      return (agreementName === null || agreementName === void 0 ? void 0 : agreementName.includes(filterAgreementName)) && (agreementAuthor === null || agreementAuthor === void 0 ? void 0 : agreementAuthor.includes(filterAgreementAuthor));
      return agreement;
    } else if (filterAgreementName) {
      return agreementName === null || agreementName === void 0 ? void 0 : agreementName.includes(filterAgreementName);
      return agreement;
    } else if (filterAgreementAuthor) {
      agreementAuthor === null || agreementAuthor === void 0 ? void 0 : agreementAuthor.includes(filterAgreementAuthor);
      return agreement;
    }
  });
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Agreements/agreements.scss
var agreements = __webpack_require__(7026);
;// CONCATENATED MODULE: ./src/components/Agreements/agreements.scss

      
      
      
      
      
      
      
      
      

var agreements_options = {};

agreements_options.styleTagTransform = (styleTagTransform_default());
agreements_options.setAttributes = (setAttributesWithoutAttributes_default());

      agreements_options.insert = insertBySelector_default().bind(null, "head");
    
agreements_options.domAPI = (styleDomAPI_default());
agreements_options.insertStyleElement = (insertStyleElement_default());

var agreements_update = injectStylesIntoStyleTag_default()(agreements/* default */.Z, agreements_options);




       /* harmony default export */ const Agreements_agreements = (agreements/* default */.Z && agreements/* default.locals */.Z.locals ? agreements/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Agreements/Agreements.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var Agreements = function Agreements(props) {
  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      agreements = _useState2[0],
      setAgreements = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      agreementsCount = _useState4[0],
      setAgreementsCount = _useState4[1];

  var _useState5 = (0,react.useState)({}),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      filterData = _useState6[0],
      setFilterData = _useState6[1];

  var _useState7 = (0,react.useState)(null),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      selectedAgreement = _useState8[0],
      setSelectedAgreement = _useState8[1];

  (0,react.useEffect)(function () {
    getAgreements();
  }, []);

  var getAgreements = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var result, tableData;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return AgreementController.getAgreementsList({});

            case 2:
              result = _context.sent;
              tableData = AgreementUtils.mapToTableRecords(result);
              setAgreements(tableData);
              setAgreementsCount(Number.parseInt((result === null || result === void 0 ? void 0 : result["@toplevelentries"]) + "") || 0);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAgreements() {
      return _ref.apply(this, arguments);
    };
  }();

  var onFilterChange = function onFilterChange(name, value) {
    setFilterData(function (data) {
      return _objectSpread(_objectSpread({}, data), {}, (0,defineProperty/* default */.Z)({}, name, value));
    });
  };

  var onAgreementSelect = function onAgreementSelect(agreement) {
    setSelectedAgreement(agreement);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "agreements__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "agreements__form-container"
  }, /*#__PURE__*/react.createElement(AgreementsFilter, {
    data: filterData,
    onChange: onFilterChange
  }), /*#__PURE__*/react.createElement(AgreementsTable, {
    onSelect: onAgreementSelect // data={agreements}
    ,
    data: AgreementUtils.filterAgreements(agreements, filterData),
    total: agreementsCount
  })), /*#__PURE__*/react.createElement("div", {
    className: "agreements__preview-container"
  }, /*#__PURE__*/react.createElement(AgreementsPreview, {
    src: AgreementController.getAgreementPreviewUrl(selectedAgreement === null || selectedAgreement === void 0 ? void 0 : selectedAgreement.agreementId),
    agreement: selectedAgreement
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Main/main.scss
var main = __webpack_require__(1141);
;// CONCATENATED MODULE: ./src/components/Main/main.scss

      
      
      
      
      
      
      
      
      

var main_options = {};

main_options.styleTagTransform = (styleTagTransform_default());
main_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_options.insert = insertBySelector_default().bind(null, "head");
    
main_options.domAPI = (styleDomAPI_default());
main_options.insertStyleElement = (insertStyleElement_default());

var main_update = injectStylesIntoStyleTag_default()(main/* default */.Z, main_options);




       /* harmony default export */ const Main_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/context/MenuStateCtx.tsx

var MenuStateCtx = /*#__PURE__*/(0,react.createContext)({
  isOpen: true
});
/* harmony default export */ const context_MenuStateCtx = (MenuStateCtx);
;// CONCATENATED MODULE: ./src/components/Main/Main.tsx





var Main = function Main(props) {
  var menuStateCtx = (0,react.useContext)(context_MenuStateCtx);
  return /*#__PURE__*/react.createElement("main", {
    className: "main__container ".concat(menuStateCtx !== null && menuStateCtx !== void 0 && menuStateCtx.isOpen ? "main-reduced" : "")
  }, /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/",
    element: /*#__PURE__*/react.createElement(react.Fragment, null)
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/Agreements",
    element: /*#__PURE__*/react.createElement(Agreements, null)
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Content/content.scss
var content = __webpack_require__(7234);
;// CONCATENATED MODULE: ./src/components/Content/content.scss

      
      
      
      
      
      
      
      
      

var content_options = {};

content_options.styleTagTransform = (styleTagTransform_default());
content_options.setAttributes = (setAttributesWithoutAttributes_default());

      content_options.insert = insertBySelector_default().bind(null, "head");
    
content_options.domAPI = (styleDomAPI_default());
content_options.insertStyleElement = (insertStyleElement_default());

var content_update = injectStylesIntoStyleTag_default()(content/* default */.Z, content_options);




       /* harmony default export */ const Content_content = (content/* default */.Z && content/* default.locals */.Z.locals ? content/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Content/Content.tsx




var Content = function Content(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "content__container",
    id: "page-wrap"
  }, /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement(Main, null));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/BugerMenuIcon/burgerMenuIcon.scss
var burgerMenuIcon = __webpack_require__(7687);
;// CONCATENATED MODULE: ./src/components/BugerMenuIcon/burgerMenuIcon.scss

      
      
      
      
      
      
      
      
      

var burgerMenuIcon_options = {};

burgerMenuIcon_options.styleTagTransform = (styleTagTransform_default());
burgerMenuIcon_options.setAttributes = (setAttributesWithoutAttributes_default());

      burgerMenuIcon_options.insert = insertBySelector_default().bind(null, "head");
    
burgerMenuIcon_options.domAPI = (styleDomAPI_default());
burgerMenuIcon_options.insertStyleElement = (insertStyleElement_default());

var burgerMenuIcon_update = injectStylesIntoStyleTag_default()(burgerMenuIcon/* default */.Z, burgerMenuIcon_options);




       /* harmony default export */ const BugerMenuIcon_burgerMenuIcon = (burgerMenuIcon/* default */.Z && burgerMenuIcon/* default.locals */.Z.locals ? burgerMenuIcon/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/BugerMenuIcon/BurgerMenuIcon.tsx


var BurgerMenuIcon = function BurgerMenuIcon(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "burger-menu__container",
    onClick: props.onClick
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null));
};
;// CONCATENATED MODULE: ./src/App.tsx


 //@ts-ignore









function App_App() {
  var _useState = (0,react.useState)(true),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggleMenu = function toggleMenu(_ref) {
    var isOpen = _ref.isOpen;
    setIsOpen(isOpen);
  };

  var renderMenuIcon = function renderMenuIcon(isOpen) {
    return isOpen ? undefined : /*#__PURE__*/react.createElement(BurgerMenuIcon, {
      onClick: function onClick() {
        return toggleMenu({
          isOpen: true
        });
      }
    });
  };

  return /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(context_MenuStateCtx.Provider, {
    value: {
      isOpen: isOpen
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "app__container",
    id: "outer-container"
  }, /*#__PURE__*/react.createElement(BurgerMenu.push, {
    noOverlay: true,
    width: "11%",
    pageWrapId: "page-wrap",
    outerContainerId: "outer-container",
    isOpen: isOpen,
    onStateChange: toggleMenu,
    customBurgerIcon: renderMenuIcon(isOpen)
  }, /*#__PURE__*/react.createElement(Menu, null)), /*#__PURE__*/react.createElement(Content, null))));
}

/* harmony default export */ const src_App_0 = (App_App);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss
var cjs_js_src = __webpack_require__(4800);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var src_options = {};

src_options.styleTagTransform = (styleTagTransform_default());
src_options.setAttributes = (setAttributesWithoutAttributes_default());

      src_options.insert = insertBySelector_default().bind(null, "head");
    
src_options.domAPI = (styleDomAPI_default());
src_options.insertStyleElement = (insertStyleElement_default());

var src_update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, src_options);




       /* harmony default export */ const src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.tsx


 // import reportWebVitals from './reportWebVitals';


react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App_0, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/***/ }),

/***/ 4554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app__container{height:100vh;width:100vw;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.bm-burger-button{position:fixed;width:36px;height:30px;left:8px;top:15px}.bm-burger-button>button{display:none}.bm-burger-bars{background:#fff}.bm-burger-bars-hover{background:#a90000}.bm-cross-button{height:24px;width:24px;right:-25px !important}.bm-cross{background:#bdc3c7}.bm-menu-wrap{position:fixed;height:100%}.bm-morph-shape{fill:#373a47}.bm-item-list{color:#b8b7ad}.bm-item{display:inline-block}.bm-overlay{background:rgba(0,0,0,.3)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".accordion-toggler__container{display:flex;justify-content:space-between;align-items:center;flex-direction:row;padding-left:5px;padding-right:5px}.accordion-toggler__icon{width:24px;transform:rotate(180deg)}.accordion-toggler__text{color:rgba(0,0,0,.8)}.accordion-toggler__container:hover{cursor:pointer}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".agreements-filter__container{width:90%;min-height:80px;display:flex;justify-content:center;align-items:center;flex-direction:row;padding:20px 0}.agreements-filter__to-process-btn{min-width:120px}.agreements-filter__filter-element{margin-right:5px !important;width:20%;min-width:200px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".agreements-preview__wrapper{width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.agreements-preview__frame-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding-top:10px}.agreements-preview__frame-container iframe{width:96%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.agreements-preview__description{width:90%;display:flex;justify-content:center;align-items:center}.agreements-preview__warning{width:100%;text-align:center;align-self:center;padding-top:80px}.agreements-preview__warning h3{color:var(--MAIN_BLACK_60)}.agreements-preview__agreement-info{width:90%;height:auto}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".agreements__table-container{width:96%;display:flex;flex-direction:column;flex-flow:column-reverse;justify-content:flex-start;align-items:flex-start}.agreements__table-container .react-bootstrap-table{width:100%}.agreements__table-row:hover{cursor:pointer;background:var(--MAIN_BLACK_2)}.agreements__selected-row{background:var(--MAIN_BLACK_5)}.react-bs-table-no-data{text-align:center}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".agreements__container{height:100%;width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.agreements__form-container{width:50%;min-width:var(--CONTENT_MIN_WIDTH);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border-right:1px solid var(--MAIN_BLACK_5)}@media screen and (min-width: 1700px){.agreements__form-container{width:35%}}.agreements__preview-container{width:50%;height:100%;display:flex;flex-direction:column;justify-content:stretch;align-items:stretch}@media screen and (min-width: 1700px){.agreements__preview-container{width:65%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".burger-menu__container{display:flex;height:28px;width:28px;justify-content:space-between;align-items:center;flex-direction:column;animation:showMenuIcon 1s ease-in}.burger-menu__container:hover{cursor:pointer}@keyframes showMenuIcon{0%{opacity:0}100%{opacity:1}}.burger-menu__container>span{background:#000;height:8px;width:inherit}.burger-menu__container>span:hover{cursor:pointer}.burger-menu__container>span:nth-child(1){background:var(--MAIN_YELLOW)}.burger-menu__container>span:nth-child(2){background:#ed7817}.burger-menu__container>span:nth-child(3){background:var(--MAIN_RED)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content__container{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;height:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header__container{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;height:10%;min-height:80px;padding:0;border-bottom:1px solid var(--MAIN_BLACK_5)}.header__form-container{width:var(--CONTENT_WIDTH);display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 20%}.header__docs-input{padding-right:10px;width:50%}.header__docs-input:hover{cursor:pointer}.header__find-btn{margin:0 !important;border-color:var(--MAIN_BLACK_20) !important}.input-group-text{background:var(--MAIN_WHITE) !important;border-left:none !important}div.header__docs-input.input-group{margin:0 !important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__container{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;width:100%;transition:width .2s ease-in}.main-reduced{width:89%;transition:width .2s ease-in}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu__container{height:100%;min-width:80px !important;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;border-right:1px solid var(--MAIN_BLACK_5);margin:0;padding-left:0}.menu__logo-container{height:10%;min-height:80px;display:flex;justify-content:space-between;align-items:center;flex-direction:column}.menu__logo-container img{padding:15px 4px 4px 4px;width:100%}.menu__logo-container:hover{cursor:pointer}.menu__logo-gradient{background:#f2d75e;background:linear-gradient(90deg, #f2d75e 0%, #c6a11d 55%, #ed3e3e 100%);height:3px;width:100%}.menu__nav-container{width:100%;height:100%}.menu__accordion-menu_el{border:none;padding-top:5px}.accordion-button::after,.accordion-button:not(.collapsed)::after,.accordion-button:not(.collapsed){color:#000 !important}.menu__element{width:100%;color:var(--MAIN_BLACK_80) !important}.menu__element[disabled]{color:var(--MAIN_BLACK_20) !important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6721);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_react_bootstrap_table2_paginator_dist_react_bootstrap_table2_paginator_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3496);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_react_bootstrap_table2_paginator_dist_react_bootstrap_table2_paginator_min_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace}:root{--MAIN_RED: #E32112;--MAIN_ORANGE: #ED7817;--MAIN_YELLOW: #FAB82E;--MAIN_GREEN: #16A851;--MAIN_WHITE: #FFFFFF;--MAIN_BLACK_80: rgba(0, 0, 0, 0.8);--MAIN_BLACK_60: rgba(0, 0, 0, 0.6);--MAIN_BLACK_40: rgba(0, 0, 0, 0.4);--MAIN_BLACK_20: rgba(0, 0, 0, 0.2);--MAIN_BLACK_5: rgba(0, 0, 0, 0.05);--MAIN_BLACK_2: rgba(0, 0, 0, 0.02);--MENU_WIDTH: 15%;--CONTENT_WIDTH: 85%;--MENU_MIN_WIDTH: 165px;--CONTENT_MIN_WIDTH: 505px;--BTN_HEIGHT: 38px;--INPUT_HEIGHT: 38px}.form-control:focus{border-color:var(--MAIN_ORANGE) !important;box-shadow:none !important}.btn{margin:0 !important;border-color:var(--MAIN_BLACK_20) !important;color:var(--MAIN_BLACK_80) !important;box-shadow:none !important;background:var(--MAIN_WHITE) !important;height:var(--BTN_HEIGHT) !important}.btn:focus{background:var(--MAIN_BLACK_5) !important;background-color:var(--MAIN_WHITE) !important}.btn:active{border-color:var(--MAIN_ORANGE) !important}.react-datepicker-wrapper,.react-datepicker__input-container,.react-datepicker__input-container input{height:var(--INPUT_HEIGHT) !important}.react-datepicker-wrapper{border-color:var(--MAIN_BLACK_20) !important}.agreements-filter__agreement-date:focus,.agreements-filter__agreement-date:focus-visible{border-color:var(--MAIN_ORANGE) !important}.selection-cell input{background-color:var(--MAIN_ORANGE) !important;background:var(--MAIN_ORANGE) !important}input[type=radio]:after{width:17px;height:17px;border-radius:15px;top:-3px;left:-1px;position:relative;background-color:#d1d3d1;content:\"\";display:inline-block;visibility:visible;border:2px solid #fff}input[type=radio]:checked:after{width:17px;height:17px;top:-3px;left:-1px;position:relative;background-color:orange;content:\"\";display:inline-block;visibility:visible;border:2px solid #fff}a.nav-link.active{color:var(--MAIN_ORANGE) !important}.react-bootstrap-table-pagination{margin:0 !important}.react-bootstrap-table-pagination div{padding:0 !important}.page-item.active .page-link{background:var(--MAIN_ORANGE) !important;color:var(--MAIN_WHITE) !important;border:none !important;height:38px;box-shadow:none !important}.page-item.active .page-link :focus{box-shadow:none !important}a.page-link{color:var(--MAIN_ORANGE) !important}a.page-link :focus{box-shadow:none !important}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid \\9 ;border-right:4px solid transparent;border-left:4px solid transparent}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid \\9 ;content:\"\"}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2204:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 9609:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2469:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4144:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ 175:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2740:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 3460:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5647:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1692:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8931:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8349:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1217:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2956:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp_demo_3"] = self["webpackChunkapp_demo_3"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [647], () => (__webpack_require__(2170)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;