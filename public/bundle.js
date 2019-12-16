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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var rootElement = document.querySelector('.notepad-wrapper');\nvar list = [];\n\nvar createTaskAndAddToTheList = function createTaskAndAddToTheList(item) {\n  var task = {\n    content: item.trim(),\n    createdAt: new Date(),\n    id: item.length + Math.random,\n    isChecked: false\n  };\n  list.push(task);\n};\n\nvar ListItem = function ListItem(props) {\n  return React.createElement(\"div\", {\n    className: \"list-item\"\n  }, React.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"check\",\n    checked: props.isChecked\n  }), React.createElement(\"label\", {\n    htmlFor: \"check\"\n  }, props.content), React.createElement(\"button\", {\n    className: \"small-btn\"\n  }, \"\\u232B\"));\n};\n\nvar getList = function getList() {\n  return list.map(function (task) {\n    return React.createElement(ListItem, {\n      content: task.content,\n      key: task.id,\n      createdAt: task.createdAt\n    });\n  });\n};\n\nvar onFormSubmission = function onFormSubmission(e) {\n  e.preventDefault();\n  var item = e.target.elements.intext.value;\n\n  if (item) {\n    createTaskAndAddToTheList(item);\n    e.target.elements.intext.value = \"\";\n  }\n\n  render();\n};\n\nvar render = function render() {\n  var listComponent = React.createElement(\"div\", {\n    className: \"notepad card\"\n  }, React.createElement(\"div\", {\n    className: \"list-area\"\n  }, getList()), React.createElement(\"form\", {\n    onSubmit: onFormSubmission,\n    className: \"control-form\"\n  }, React.createElement(\"input\", {\n    type: \"text\",\n    autoComplete: \"off\",\n    name: \"intext\",\n    placeholder: \"Make a list..\"\n  }), React.createElement(\"div\", {\n    className: \"sep\"\n  }, \"\\xA0\\xA0\\xA0\"), React.createElement(\"button\", null, \"\\u2191\")));\n  ReactDOM.render(listComponent, rootElement);\n};\n\nrender();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });