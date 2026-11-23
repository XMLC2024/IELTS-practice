// Optional listening manifest stub.
// Listening question sources and audio are excluded from this static mirror by
// design; this empty manifest keeps the optional lazy loader from issuing a 404
// and lets the app report the built-in listening bank as unavailable.
(function (global) {
  'use strict';
  global.__LISTENING_EXAM_MANIFEST__ = global.__LISTENING_EXAM_MANIFEST__ || {};
})(typeof globalThis !== 'undefined' ? globalThis : this);
