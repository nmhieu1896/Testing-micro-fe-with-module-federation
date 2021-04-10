(self['webpackChunkcontainer'] = self['webpackChunkcontainer'] || []).push([
  ['src_bootstrap_js'],
  {
    './src/bootstrap.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      var products_ProductsIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'webpack/container/remote/products/ProductsIndex'
      );

      var products_ProductsIndex__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        products_ProductsIndex__WEBPACK_IMPORTED_MODULE_0__
      );

      var cart_CartShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'webpack/container/remote/cart/CartShow'
      );

      var cart_CartShow__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
        cart_CartShow__WEBPACK_IMPORTED_MODULE_1__
      );

      console.log('Container!');
    },
  },
]);
