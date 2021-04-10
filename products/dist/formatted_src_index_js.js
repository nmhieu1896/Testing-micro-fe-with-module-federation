(self['webpackChunkproducts'] = self['webpackChunkproducts'] || []).push([
  ['src_index_js'],
  {
    './src/faker.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_exports__.default = () => __WEBPACK_DEFAULT_EXPORT__;
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

      function __WEBPACK_DEFAULT_EXPORT__() {
        return nameList[Math.floor(Math.random() * 10)];
      }
    },

    './src/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var _faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/faker.js'
      );

      let products = '';

      for (let i = 0; i < 5; i++) {
        const name = _faker__WEBPACK_IMPORTED_MODULE_0__.default();
        products += `<div>${name}</div>`;
      }

      document.querySelector('#dev-products').innerHTML = products;
    },
  },
]);
