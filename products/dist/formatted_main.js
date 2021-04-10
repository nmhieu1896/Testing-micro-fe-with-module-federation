(() => {
  'use strict';
  var __webpack_modules__ = {
    './src/faker.js': (
      __unused_webpack_module,
      __webpack_exports__, //module['./src/faker.js'].exports
      __webpack_require__
    ) => {
      const exportObj = {
        sameFuncAsDefault: () => sameFuncAsDefault,
        default: () => __WEBPACK_DEFAULT_EXPORT__,
      };
      __webpack_exports__ = { ...__webpack_exports__, ...exportObj };

      const nameList = [
        'Javascript',
        'Golang',
        'Python',
        'Rust',
        'Elexir',
        'Clojure',
        'Java',
        'C++',
        'Haskel',
        'Typescript',
      ];
      const sameFuncAsDefault = () => {
        return nameList[Math.floor(Math.random() * 10)];
      };
      function __WEBPACK_DEFAULT_EXPORT__() {
        return nameList[Math.floor(Math.random() * 10)];
      }
    },

    './src/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      var _faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/faker.js'
      );
      let products = '';
      for (let i = 0; i < 5; i++) {
        const name = (0, _faker__WEBPACK_IMPORTED_MODULE_0__.default)();
        products += `<div>${name}</div>`;
      }
      document.querySelector('#dev-products').innerHTML = products;
    },
  };

  var __webpack_module_cache__ = {};

  // var __webpack_module_cache__ = {
  //   './src/index.js': { exports: {} },
  //   './src/faker.js': {
  //     exports: {
  //       sameFuncAsDefault: () => sameFuncAsDefault,
  //       default: () => __WEBPACK_DEFAULT_EXPORT__,
  //     },
  //   },
  // };

  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  __webpack_require__('./src/index.js');
})();
