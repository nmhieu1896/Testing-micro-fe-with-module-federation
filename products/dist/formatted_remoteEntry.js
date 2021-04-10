var products;
products = (() => {
  'use strict';
  var __webpack_modules__ = {
    'webpack/container/entry/products': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var moduleMap = {
        './ProductsIndex': () => {
          return __webpack_require__
            .e('src_index_js')
            .then(() => () => __webpack_require__('./src/index.js'));
        },
      };

      var get = (module, getScope) => {
        getScope = moduleMap[module]();
        return getScope;
      };

      var init = (shareScope, initScope) => {
        if (!__webpack_require__.S) return;
        var oldScope = __webpack_require__.S['default'];
        var name = 'default';

        __webpack_require__.S[name] = shareScope;
        return __webpack_require__.I(name, initScope);
      };

      module.get = () => get;
      module.init = () => init;
    },
  };

  var __webpack_module_cache__ = {};

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

  (() => {
    __webpack_require__.f = {};
  })();

  (() => {
    var scriptUrl;
    if (window.importScripts) scriptUrl = window.location + '';
    var document = window.document;
    if (!scriptUrl && doument) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName('script');
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
      }
    }

    __webpack_require__.p = scriptUrl;
  })();

  (() => {
    var installedChunks = {
      products: 0,
    };

    // __webpack_require__.f.j = (chunkId, promises) => {
    //   var installedChunkData = installedChunks[chunkId];

    //   if (installedChunkData !== 0) {
    //     if (installedChunkData) {
    //       promises.push(installedChunkData[2]);
    //     } else {
    //       if (true) {
    //         var promise = new Promise((resolve, reject) => {
    //           installedChunkData = installedChunks[chunkId] = [resolve, reject];
    //         });
    //         promises.push((installedChunkData[2] = promise));

    //         var url = `${__webpack_require__.p}${chunkId}.js`;

    //         __webpack_require__.load(url, 'chunk-' + chunkId);
    //       } else installedChunks[chunkId] = 0;
    //     }
    //   }
    // };

    var webpackJsonpCallback = (data) => {
      var [chunkIds, moreModules, runtime] = data;

      var moduleId,
        chunkId,
        i = 0,
        resolves = [];
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (installedChunks[chunkId]) {
          resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
      }
      for (moduleId in moreModules) {
        __webpack_modules__[moduleId] = moreModules[moduleId];
      }
      if (runtime) runtime(__webpack_require__);
      parentChunkLoadingFunction(data);
      while (resolves.length) {
        resolves.shift()();
      }
    };

    var chunkLoadingGlobal = (self['webpackChunkproducts'] =
      self['webpackChunkproducts'] || []);
    var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(
      chunkLoadingGlobal
    );
    chunkLoadingGlobal.push = webpackJsonpCallback;
  })();

  return __webpack_require__('webpack/container/entry/products');
})();
