// Optional listening index stub (companion to manifest.js).
// No listening sources are bundled in this static mirror; expose an empty index
// so the optional loader resolves cleanly without a 404.
(function (global) {
  'use strict';
  global.listeningExamIndex = global.listeningExamIndex || [];
})(typeof globalThis !== 'undefined' ? globalThis : this);
