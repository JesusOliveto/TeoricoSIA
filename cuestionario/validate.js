// Dual-mode structural validator for cuestionario question banks.
// Browser: include via <script src="validate.js"> and call window.validateAll(window.QUIZ_DATA).
// Node:    `node validate.js` reads cuestionario/data/*.js, evals them, validates, exits non-zero on errors.
'use strict';

// Chapter schema — each data/capNN.js must set:
//   window.QUIZ_DATA[N] = {
//     title: <non-empty string>,
//     sets: [ exactly 5 x {
//       name?: <string>,
//       questions: [ >=8 x { q: <string>, opts: [4 x non-empty string], a: <int 0-3>, exp: <string> } ]
//     } ]
//   }

// Pure validator, no I/O. Works identically in both environments.
function validateAll(quizData) {
  var errors = [];
  var warnings = [];
  quizData = quizData || {};
  var keys = Object.keys(quizData);

  if (keys.length === 0) {
    errors.push('No chapters registered in QUIZ_DATA.');
  }

  keys.forEach(function (key) {
    var entry = quizData[key];
    var label = 'cap' + key;

    if (!entry || typeof entry !== 'object') {
      errors.push(label + ': entry is not an object');
      return;
    }
    if (!entry.title || typeof entry.title !== 'string') {
      errors.push(label + ': missing or empty "title"');
    }

    var sets = entry.sets;
    if (!Array.isArray(sets) || sets.length !== 5) {
      errors.push(label + ': expected exactly 5 sets, got ' +
        (Array.isArray(sets) ? sets.length : typeof sets));
      return;
    }

    sets.forEach(function (set, setIdx) {
      var setLabel = label + '/set[' + setIdx + ']';
      var questions = set && set.questions;
      if (!Array.isArray(questions)) {
        errors.push(setLabel + ': missing "questions" array');
        return;
      }
      if (questions.length < 8) {
        errors.push(setLabel + ': has ' + questions.length + ' questions, floor is 8');
      } else if (questions.length < 10) {
        warnings.push(setLabel + ': has ' + questions.length + ' questions, aim is 10');
      }

      questions.forEach(function (q, qIdx) {
        var qLabel = setLabel + '/question[' + qIdx + ']';
        if (!q || typeof q.q !== 'string' || q.q.trim() === '') {
          errors.push(qLabel + ': empty or missing "q"');
        }
        if (!q || !Array.isArray(q.opts) || q.opts.length !== 4 ||
            q.opts.some(function (o) { return typeof o !== 'string' || o.trim() === ''; })) {
          errors.push(qLabel + ': "opts" must be exactly 4 non-empty strings');
        }
        if (!q || typeof q.a !== 'number' || !Number.isInteger(q.a) || q.a < 0 || q.a > 3) {
          errors.push(qLabel + ': "a" must be an integer 0-3');
        }
        if (!q || typeof q.exp !== 'string' || q.exp.trim() === '') {
          errors.push(qLabel + ': empty or missing "exp"');
        } else if (q.exp.indexOf('§') === -1) {
          errors.push(qLabel + ': "exp" must cite a § section reference');
        }
      });
    });
  });

  // Chapter keys with >=1 error, so callers can exclude them (labels are 'cap<key>...').
  var invalidChapters = {};
  errors.forEach(function (msg) {
    var m = /^cap(\d+)/.exec(msg);
    if (m) { invalidChapters[m[1]] = true; }
  });

  return {
    ok: errors.length === 0,
    errors: errors,
    warnings: warnings,
    invalidChapters: Object.keys(invalidChapters)
  };
}

// Browser: expose for index.html (or manual console use) to call.
if (typeof window !== 'undefined') {
  window.validateAll = validateAll;
}

// Node CLI: `node validate.js` — only runs when this file is executed directly.
if (typeof window === 'undefined' && typeof module !== 'undefined' && require.main === module) {
  (function runNodeCli() {
    var fs = require('fs');
    var path = require('path');

    var shimWindow = { QUIZ_DATA: {} };
    var dataDir = path.join(__dirname, 'data');
    var files = [];
    if (fs.existsSync(dataDir)) {
      files = fs.readdirSync(dataDir)
        .filter(function (f) { return /\.js$/.test(f); })
        .sort();
    }

    var loadErrors = [];
    files.forEach(function (file) {
      var full = path.join(dataDir, file);
      var src = fs.readFileSync(full, 'utf8');
      var before = Object.keys(shimWindow.QUIZ_DATA).length;
      try {
        // ponytail: repo-owned data files only, never external/user input.
        new Function('window', src)(shimWindow);
      } catch (e) {
        loadErrors.push(file + ': failed to load — ' + e.message);
        return;
      }
      if (Object.keys(shimWindow.QUIZ_DATA).length <= before) {
        loadErrors.push(file + ': registered no new chapter ' +
          '(syntax error, missing registration, or duplicate-key clobber)');
      }
    });

    var report = validateAll(shimWindow.QUIZ_DATA);
    // Load failures gate the exit code just like structural errors.
    if (loadErrors.length) {
      report.errors = loadErrors.concat(report.errors);
    }
    var chapterCount = Object.keys(shimWindow.QUIZ_DATA).length;

    console.log('Chapters loaded: ' + chapterCount + ' (files found: ' + files.length + ')');
    if (report.warnings.length) {
      console.warn('Warnings:');
      report.warnings.forEach(function (w) { console.warn('  - ' + w); });
    }
    if (report.errors.length) {
      console.error('Errors:');
      report.errors.forEach(function (e) { console.error('  - ' + e); });
    } else {
      console.log('All checks passed.');
    }

    process.exit(report.errors.length ? 1 : 0);
  })();
}
