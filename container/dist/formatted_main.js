(() => {
  var __webpack_modules__ = {
    'webpack/container/reference/cart': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = new Promise((resolve) => {
        if (typeof cart !== 'undefined') return resolve();
        __webpack_require__.load(
          'http://localhost:8082/remoteEntry.js',
          'cart'
        );
      }).then(() => cart);
    },

    'webpack/container/reference/products': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = new Promise((resolve) => {
        if (typeof products !== 'undefined') return resolve();
        __webpack_require__.load(
          'http://localhost:8081/remoteEntry.js',
          'products'
        );
      }).then(() => products);
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
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
  __webpack_require__.m = __webpack_modules__;

  (() => {
    __webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module['default'] : () => module;
      getter.a = getter;
      return getter;
    };
  })();

  __webpack_require__.f = {};

  /* webpack/runtime/load script */
  (() => {
    var dataWebpackPrefix = 'container:';
    // loadScript function to load a script via script tag
    __webpack_require__.load = (url, key) => {
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (
            s.getAttribute('src') == url ||
            s.getAttribute('data-webpack') == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
        }
      }
      if (!script) {
        needAttach = true;
        script = document.createElement('script');

        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute('nonce', __webpack_require__.nc);
        }
        script.setAttribute('data-webpack', dataWebpackPrefix + key);
        script.src = url;
      }

      var onScriptComplete = (prev, event) => {
        script.parentNode && script.parentNode.removeChild(script);

        if (prev) return prev(event);
      };

      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);
    };
  })();

  (() => {
    var chunkMapping = {
      src_bootstrap_js: [
        'webpack/container/remote/products/ProductsIndex',
        'webpack/container/remote/cart/CartShow',
      ],
    };
    var idToExternalAndNameMapping = {
      'webpack/container/remote/products/ProductsIndex': [
        'default',
        './ProductsIndex',
        'webpack/container/reference/products',
      ],
      'webpack/container/remote/cart/CartShow': [
        'default',
        './CartShow',
        'webpack/container/reference/cart',
      ],
    };
    __webpack_require__.f.remotes = (chunkId, promises) => {
      chunkMapping[chunkId].forEach((id) => {
        var data = idToExternalAndNameMapping[id];
        if (data.p) return promises.push(data.p);

        var handleFunction = (fn, arg1, arg2, d, next, first) => {
          try {
            var promise = fn(arg1, arg2);
            if (promise && promise.then) {
              var p = promise.then((result) => next(result, d), onError);
              if (first) promises.push((data.p = p));
              else return p;
            } else {
              return next(promise, d, first);
            }
          } catch (error) {
            onError(error);
          }
        };
        var onExternal = (external, _, first) =>
          external
            ? handleFunction(
                __webpack_require__.I,
                data[0],
                0,
                external,
                onInitialized,
                first
              )
            : onError();
        var onInitialized = (_, external, first) =>
          handleFunction(external.get, data[1], 0, onFactory, first);
        var onFactory = (factory) => {
          data.p = 1;
          __webpack_modules__[id] = (module) => {
            module.exports = factory();
          };
        };
        handleFunction(__webpack_require__, data[2], 0, onExternal, 1);
      });
    };
  })();

  /* webpack/runtime/sharing */
  (() => {
    __webpack_require__.S = {};
    var initPromises = {};
    var initTokens = {};
    __webpack_require__.I = (name, initScope) => {
      if (!initScope) initScope = [];
      // handling circular init calls
      var initToken = initTokens[name];
      if (!initToken) initToken = initTokens[name] = {};
      if (initScope.indexOf(initToken) >= 0) return;
      initScope.push(initToken);
      // only runs once
      if (initPromises[name]) return initPromises[name];

      if (!__webpack_require__.S.name) __webpack_require__.S[name] = {};

      var initExternal = (id) => {
        var handleError = (err) =>
          console.warn('Initialization of sharing external failed: ' + err);
        try {
          var module = __webpack_require__(id);
          if (!module) return;
          var initFn = (module) =>
            module &&
            module.init &&
            module.init(__webpack_require__.S[name], initScope);
          if (module.then)
            return promises.push(module.then(initFn, handleError));
          var initResult = initFn(module);
          if (initResult && initResult.then)
            return promises.push(initResult.catch(handleError));
        } catch (err) {
          handleError(err);
        }
      };
      var promises = [];
      switch (name) {
        case 'default':
          {
            initExternal('webpack/container/reference/cart');
            initExternal('webpack/container/reference/products');
          }
          break;
      }
      if (!promises.length) return (initPromises[name] = 1);
      return (initPromises[name] = Promise.all(promises).then(
        () => (initPromises[name] = 1)
      ));
    };
  })();

  (() => {
    var scriptUrl;
    if (window.importScripts) scriptUrl = window.location + '';
    var document = window.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName('script');
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
      }
    }

    __webpack_require__.scriptUrl = scriptUrl;
  })();

  (() => {
    var installedChunks = {
      main: 0,
    };

    __webpack_require__.f.j = (chunkId, promises) => {
      var installedChunkData = installedChunks[chunkId];
      if (installedChunkData !== 0) {
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          if (true) {
            var promise = new Promise((resolve, reject) => {
              installedChunkData = installedChunks[chunkId] = [resolve, reject];
            });
            promises.push((installedChunkData[2] = promise));

            var url = __webpack_require__.scriptUrl + chunkId + '.js';

            __webpack_require__.load(url, 'chunk-' + chunkId);
          } else installedChunks[chunkId] = 0;
        }
      }
    };

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
        if (moreModules[moduleId]) {
          __webpack_require__.m[moduleId] = moreModules[moduleId];
        }
      }
      if (runtime) runtime(__webpack_require__);
      parentChunkLoadingFunction(data);
      while (resolves.length) {
        resolves.shift()();
      }
    };

    var chunkLoadingGlobal = (self['webpackChunkcontainer'] =
      self['webpackChunkcontainer'] || []);
    var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(
      chunkLoadingGlobal
    );
    chunkLoadingGlobal.push = webpackJsonpCallback;
  })();

  (() => {
    __webpack_require__
      .e('src_bootstrap_js')
      .then(
        __webpack_require__.bind(__webpack_require__, './src/bootstrap.js')
      );
  })();
})();
