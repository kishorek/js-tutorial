(function () {
  'use strict';

  var COURSE = window.COURSE;
  if (!COURSE) {
    return;
  }

  var flatLessons = [];
  var lessonById = {};
  var moduleById = {};
  var moduleOfLesson = {};

  COURSE.modules.forEach(function (module) {
    moduleById[module.id] = module;
    module.lessons.forEach(function (lesson) {
      var entry = Object.assign({}, lesson, {
        moduleId: module.id,
        moduleTitle: module.title,
        moduleNum: module.id
      });
      flatLessons.push(entry);
      lessonById[lesson.id] = entry;
      moduleOfLesson[lesson.id] = module;
    });
  });


  var I18N = {
    en: {
      skip: "Skip to lesson",
      openMenu: "Open course menu",
      closeMenu: "Close course menu",
      brandHome: "The Web Builder's Field Guide, back to course map",
      courseNav: "Course",
      courseMap: "Course map",
      startLesson: "Start Lesson 1.1",
      startHere: "Start here",
      progress: "Progress",
      courseProgress: "Course progress",
      modules: "Modules",
      courseMenu: "Course menu",
      lessonsProjects: "27 lessons · 7 projects",
      courseMapLink: "Course map →",
      filterPlaceholder: "Filter lessons…",
      filterAria: "Filter lessons",
      resetProgress: "Reset progress",
      language: "Language",
      inThisLesson: "In this lesson",
      whyMatters: "Why this matters",
      whereUse: "Where you'll use it",
      analogy: "Analogy",
      modelAnswer: "Model answer",
      attemptFirst: "Make an attempt first. Then the model answer unlocks.",
      answerUnlocked: "Answer unlocked. Try running yours first.",
      addCharacters: "Add {n} more characters to unlock the answer.",
      answerRevealed: "Model answer revealed. Compare it with your attempt.",
      correct: "Correct.",
      notQuite: "Not quite.",
      answerAll: "Answer all questions first.",
      correctCount: "{pct}% correct.",
      cleanSweep: "Clean sweep.",
      tryAgain: "Read the explanations and try again.",
      loadingLesson: "Loading the lesson…",
      couldNotLoad: "Could not load",
      lessonDidNotArrive: "The lesson did not arrive.",
      errorFetch: "The lesson file could not be fetched. Check your connection and try again.",
      mapFetchError: "The course map could not be fetched. Check your connection and try again.",
      fileNote: " This course loads lessons over HTTP. Run python3 -m http.server in the course folder, then open http://localhost:8000.",
      tryAgainButton: "Try again",
      courseMapButton: "Course map",
      mapTitle: "Course map",
      mapCaption: "7 modules · 27 lessons · 7 projects. Times assume 7–9 focused hours per week.",
      moduleTime: "Module & time",
      objectives: "Objectives",
      prerequisites: "Prerequisites",
      projectExit: "Project & exit",
      lessons: "Lessons",
      exitLabel: "Exit:",
      resetConfirm: "Reset all lesson progress?",
      lesson: "Lesson",
      doneTitle: "Done with this lesson?",
      doneText: "Mark it complete to update your course progress. You can undo it at any time.",
      markComplete: "Mark lesson complete",
      completed: "Completed ✓",
      previous: "Previous",
      next: "Next",
      course: "Course",
      finish: "Finish",
      backToMap: "Back to the course map",
      returnToMap: "Return to the course map",
      menuProgress: "{done} of {total} complete",
      footerCount: "27 lessons · 7 projects",
      previewUpdated: "Preview updated at {time}.",
      previewReset: "Reset to the starter code.",
      copy: "Copy",
      copied: "Copied",
      selectCopy: "Select + copy",
      copyCodeAria: "Copy this code example",
      selectCode: "Select code"
    },
    ta: {
      skip: "Skip to lesson",
      openMenu: "Open course menu",
      closeMenu: "Close course menu",
      brandHome: "The Web Builder's Field Guide, back to Course map",
      courseNav: "Course",
      courseMap: "Course map",
      startLesson: "Start Lesson 1.1",
      startHere: "Start here",
      progress: "Progress",
      courseProgress: "Course progress",
      modules: "Modules",
      courseMenu: "Course menu",
      lessonsProjects: "27 lessons · 7 projects",
      courseMapLink: "Course map →",
      filterPlaceholder: "Filter lessons…",
      filterAria: "Filter lessons",
      resetProgress: "Reset progress",
      language: "Language",
      inThisLesson: "In this lesson",
      whyMatters: "Why this matters",
      whereUse: "Where you'll use it",
      analogy: "Analogy",
      modelAnswer: "Model answer",
      attemptFirst: "First ஒரு attempt பண்ணுங்கள். அப்புறம் model answer unlock ஆகும்.",
      answerUnlocked: "Answer unlocked. First உங்க attempt-ஐ run பண்ணிப் பாருங்கள்.",
      addCharacters: "Answer unlock பண்ண மேலும் {n} characters எழுதுங்கள்.",
      answerRevealed: "Model answer shown. உங்க attempt-ஓட compare பண்ணுங்கள்.",
      correct: "Correct.",
      notQuite: "Not quite.",
      answerAll: "First எல்லா questions-க்கும் answer பண்ணுங்கள்.",
      correctCount: "{pct}% correct.",
      cleanSweep: "Clean sweep.",
      tryAgain: "Explanations-ஐ read பண்ணி மீண்டும் try பண்ணுங்கள்.",
      loadingLesson: "Lesson load ஆகுது…",
      couldNotLoad: "Could not load",
      lessonDidNotArrive: "Lesson load ஆகல.",
      errorFetch: "Lesson file fetch பண்ண முடியல. Internet check பண்ணி மீண்டும் try பண்ணுங்கள்.",
      mapFetchError: "Course map fetch பண்ண முடியல. Internet check பண்ணி மீண்டும் try பண்ணுங்கள்.",
      fileNote: " This course loads lessons over HTTP. Course folder-ல python3 -m http.server run பண்ணி, http://localhost:8000 open பண்ணுங்கள்.",
      tryAgainButton: "Try again",
      courseMapButton: "Course map",
      mapTitle: "Course map",
      mapCaption: "7 modules · 27 lessons · 7 projects. Week-க்கு 7–9 focused hours.",
      moduleTime: "Module & time",
      objectives: "Objectives",
      prerequisites: "Prerequisites",
      projectExit: "Project & exit",
      lessons: "Lessons",
      exitLabel: "Exit:",
      resetConfirm: "Reset all lesson progress?",
      lesson: "Lesson",
      doneTitle: "Done with this lesson?",
      doneText: "Mark it complete to update your progress. எப்போது வேண்டுமானாலும் undo பண்ணலாம்.",
      markComplete: "Mark lesson complete",
      completed: "Completed ✓",
      previous: "Previous",
      next: "Next",
      course: "Course",
      finish: "Finish",
      backToMap: "Back to Course map",
      returnToMap: "Return to Course map",
      menuProgress: "{done} / {total} complete",
      footerCount: "27 lessons · 7 projects",
      previewUpdated: "Preview updated at {time}.",
      previewReset: "Reset to starter code.",
      copy: "Copy",
      copied: "Copied",
      selectCopy: "Select + copy",
      copyCodeAria: "Copy this code example",
      selectCode: "Select code"
    }
  };

  var LANG_KEY = 'field-guide-lang-v1';
  var lang = loadLanguage();
  var COURSE_TA = window.COURSE_TA || null;
  var LESSON_NOTES = window.LESSON_NOTES || {};
  var PRACTICE_PREVIEWS = window.PRACTICE_PREVIEWS || {};
  var taModuleById = {};
  var taLessonById = {};

  if (COURSE_TA) {
    COURSE_TA.modules.forEach(function (module) {
      taModuleById[module.id] = module;
      module.lessons.forEach(function (lesson) {
        taLessonById[lesson.id] = lesson;
      });
    });
  }

  function loadLanguage() {
    try {
      return localStorage.getItem(LANG_KEY) === 'ta' ? 'ta' : 'en';
    } catch (error) {
      return 'en';
    }
  }

  function saveLanguage() {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      return;
    }
  }

  function t(key, vars) {
    var table = I18N[lang] || I18N.en;
    var text = table[key] !== undefined ? table[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.replace(new RegExp('\\{' + name + '\\}', 'g'), String(vars[name]));
      });
    }
    return text;
  }

  function localizedModule(module) {
    if (lang !== 'ta') {
      return module;
    }
    var ta = taModuleById[module.id];
    if (!ta) {
      return module;
    }
    return Object.assign({}, module, {
      title: ta.title || module.title,
      weeks: ta.weeks || module.weeks,
      hours: ta.hours || module.hours,
      goals: ta.goals || module.goals,
      prereq: ta.prereq || module.prereq,
      project: ta.project || module.project,
      exit: ta.exit || module.exit
    });
  }

  function localizedLesson(lesson) {
    if (lang !== 'ta') {
      return lesson;
    }
    var ta = taLessonById[lesson.id];
    return ta && ta.title ? Object.assign({}, lesson, { title: ta.title }) : lesson;
  }

  function courseTitle() {
    return lang === 'ta' && COURSE_TA && COURSE_TA.title ? COURSE_TA.title : COURSE.title;
  }

  function lessonPath(id) {
    return (lang === 'ta' ? 'lessons/ta/' : 'lessons/') + id + '.html';
  }

  function mapPath() {
    return lang === 'ta' ? 'views/ta/map.html' : 'views/map.html';
  }

  function applyStaticTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
      element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      element.setAttribute('aria-label', t(element.dataset.i18nAria));
    });
    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    if (menuToggle) {
      menuToggle.setAttribute('aria-label', t(body.classList.contains('menu-open') ? 'closeMenu' : 'openMenu'));
    }
  }

  function setLanguage(next) {
    next = next === 'ta' ? 'ta' : 'en';
    if (next === lang) {
      return;
    }
    lang = next;
    saveLanguage();
    applyStaticTranslations();
    buildMenu();
    updateProgressUI();
    var parsed = parseRoute();
    if (parsed && parsed.type === 'map') {
      loadMap();
    } else if (parsed && parsed.type === 'lesson') {
      loadLesson(parsed.id);
    } else {
      route();
    }
  }

  function injectLessonNotes(root, lesson) {
    var data = LESSON_NOTES[lesson.id];
    if (!data) {
      return;
    }
    var note = data[lang] || data.en;
    if (!note) {
      return;
    }
    var article = root.querySelector('article.lesson');
    if (!article) {
      return;
    }
    var wrap = document.createElement('div');
    wrap.className = 'lesson-notes';
    wrap.setAttribute('aria-label', t('whyMatters') + ', ' + t('whereUse') + ', ' + t('analogy'));
    [['why', 'whyMatters'], ['where', 'whereUse'], ['analogy', 'analogy']].forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'lesson-note';
      var label = document.createElement('span');
      label.className = 'lesson-note__label';
      label.textContent = t(item[1]);
      var copy = document.createElement('p');
      copy.textContent = note[item[0]] || '';
      card.appendChild(label);
      card.appendChild(copy);
      wrap.appendChild(card);
    });
    var brief = article.querySelector('.brief');
    if (brief) {
      brief.insertAdjacentElement('afterend', wrap);
    } else {
      var head = article.querySelector('.lesson-head');
      if (head) {
        head.appendChild(wrap);
      } else {
        article.insertBefore(wrap, article.firstChild);
      }
    }
  }

  var STORAGE_KEY = 'field-guide-completed-v2';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var completed = loadCompleted();
  var openModules = new Set();
  var renderToken = 0;
  var menuMeta = [];
  var activeFilter = '';

  var body = document.body;
  var view = document.getElementById('view');
  var menu = document.getElementById('course-menu');
  var menuModules = document.getElementById('menu-modules');
  var menuToggle = document.querySelector('.menu-toggle');
  var overlay = document.querySelector('.drawer-overlay');
  var filterInput = document.getElementById('lesson-filter');
  var topBar = document.querySelector('[data-top-progress-bar]');
  var topText = document.querySelector('[data-top-progress-text]');
  var menuBar = document.querySelector('[data-menu-progress-bar]');
  var menuText = document.querySelector('[data-menu-progress-text]');
  var resetButton = document.querySelector('[data-reset-progress]');

  function loadCompleted() {
    try {
      var stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return new Set(Array.isArray(stored) ? stored : []);
    } catch (error) {
      return new Set();
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completed)));
    } catch (error) {
      return;
    }
  }

  function buildMenu() {
    menuModules.textContent = '';
    menuMeta = [];
    openModules.clear();
    COURSE.modules.forEach(function (module) {
      var display = localizedModule(module);
      var section = document.createElement('section');
      section.className = 'menu-module';

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'menu-module__toggle';
      button.setAttribute('aria-expanded', 'false');

      var num = document.createElement('span');
      num.className = 'menu-module__num';
      num.textContent = module.id;

      var title = document.createElement('span');
      title.className = 'menu-module__title';
      title.textContent = display.title;

      var done = document.createElement('span');
      done.className = 'menu-module__done';
      done.textContent = '0/' + module.lessons.length;

      var chevron = document.createElement('span');
      chevron.className = 'menu-module__chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '▾';

      button.appendChild(num);
      button.appendChild(title);
      button.appendChild(done);
      button.appendChild(chevron);

      var list = document.createElement('ol');
      list.className = 'menu-lessons';
      var listId = 'menu-module-' + module.id;
      list.id = listId;
      button.setAttribute('aria-controls', listId);

      var links = [];

      module.lessons.forEach(function (lesson) {
        var displayLesson = localizedLesson(lesson);
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.className = 'menu-lesson';
        link.href = '#/lesson/' + lesson.id;
        link.dataset.lesson = lesson.id;
        link.dataset.search = (lesson.num + ' ' + displayLesson.title + ' ' + display.title).toLowerCase();
        if (lesson.project) {
          link.classList.add('is-project');
        }

        var lessonNum = document.createElement('span');
        lessonNum.className = 'menu-lesson__num';
        lessonNum.textContent = lesson.num;

        var lessonTitle = document.createElement('span');
        lessonTitle.className = 'menu-lesson__title';
        lessonTitle.textContent = displayLesson.title;

        var check = document.createElement('span');
        check.className = 'menu-lesson__check';
        check.setAttribute('aria-hidden', 'true');
        check.textContent = '✓';

        link.appendChild(lessonNum);
        link.appendChild(lessonTitle);
        link.appendChild(check);
        item.appendChild(link);
        list.appendChild(item);
        links.push(link);

        link.addEventListener('click', function () {
          closeMenu(false);
        });
      });

      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          openModules.delete(module.id);
        } else {
          openModules.add(module.id);
        }
        syncModuleOpen(module.id);
      });

      section.appendChild(button);
      section.appendChild(list);
      menuModules.appendChild(section);

      menuMeta.push({
        module: module,
        section: section,
        button: button,
        list: list,
        done: done,
        links: links
      });
    });

    menuMeta.forEach(function (entry) {
      entry.list.hidden = true;
      entry.button.setAttribute('aria-expanded', 'false');
    });

    if (menuMeta.length) {
      openModules.add(menuMeta[0].module.id);
      syncModuleOpen(menuMeta[0].module.id);
    }
  }

  function syncModuleOpen(moduleId) {
    menuMeta.forEach(function (entry) {
      if (entry.module.id !== moduleId) {
        return;
      }
      var isOpen = openModules.has(moduleId);
      entry.button.setAttribute('aria-expanded', String(isOpen));
      entry.list.hidden = !isOpen;
    });
  }

  function openModuleFor(lessonId) {
    var module = moduleOfLesson[lessonId];
    if (!module) {
      return;
    }
    openModules.clear();
    openModules.add(module.id);
    menuMeta.forEach(function (entry) {
      var isOpen = openModules.has(entry.module.id);
      entry.button.setAttribute('aria-expanded', String(isOpen));
      entry.list.hidden = !isOpen;
    });
  }

  function setActiveLesson(lessonId) {
    menuMeta.forEach(function (entry) {
      entry.links.forEach(function (link) {
        if (link.dataset.lesson === lessonId) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
    openModuleFor(lessonId);
    document.querySelectorAll('[data-route-link="map"]').forEach(function (link) {
      link.removeAttribute('aria-current');
    });
  }

  function clearActiveLesson() {
    menuMeta.forEach(function (entry) {
      entry.links.forEach(function (link) {
        link.removeAttribute('aria-current');
      });
    });
    document.querySelectorAll('[data-route-link="map"]').forEach(function (link) {
      link.setAttribute('aria-current', 'page');
    });
  }

  function updateProgressUI() {
    var total = flatLessons.length;
    var count = completed.size;
    var pct = total ? Math.round((count / total) * 100) : 0;

    if (topBar) {
      topBar.value = pct;
      topBar.textContent = pct + '%';
    }
    if (topText) {
      topText.textContent = count + ' / ' + total;
    }
    if (menuBar) {
      menuBar.value = pct;
      menuBar.textContent = pct + '%';
    }
    if (menuText) {
      menuText.textContent = t('menuProgress', { done: count, total: total });
    }

    menuMeta.forEach(function (entry) {
      var done = 0;
      entry.links.forEach(function (link) {
        var isDone = completed.has(link.dataset.lesson);
        link.classList.toggle('is-complete', isDone);
        if (isDone) {
          done += 1;
        }
      });
      entry.done.textContent = done + '/' + entry.module.lessons.length;
    });

    var finishButton = view.querySelector('[data-complete]');
    if (finishButton) {
      var isDone = completed.has(finishButton.dataset.complete);
      finishButton.classList.toggle('is-complete', isDone);
      finishButton.textContent = isDone ? t('completed') : t('markComplete');
      finishButton.setAttribute('aria-pressed', String(isDone));
    }
  }

  function filterMenu() {
    activeFilter = filterInput ? filterInput.value.trim().toLowerCase() : '';
    menuMeta.forEach(function (entry) {
      var visible = 0;
      entry.links.forEach(function (link) {
        var match = !activeFilter || link.dataset.search.indexOf(activeFilter) !== -1;
        link.parentElement.hidden = !match;
        if (match) {
          visible += 1;
        }
      });
      entry.section.hidden = Boolean(activeFilter) && visible === 0;
      if (activeFilter && visible > 0) {
        entry.button.setAttribute('aria-expanded', 'true');
        entry.list.hidden = false;
      } else if (!activeFilter) {
        var isOpen = openModules.has(entry.module.id);
        entry.button.setAttribute('aria-expanded', String(isOpen));
        entry.list.hidden = !isOpen;
      }
    });
  }

  function runEditors(root) {
    root.querySelectorAll('[data-editor]').forEach(function (editor) {
      var code = editor.querySelector('textarea');
      var frame = editor.querySelector('iframe');
      var status = editor.querySelector('[data-status]');
      var starter = editor.querySelector('script[data-starter]');
      if (!code || !frame) {
        return;
      }

      if (starter) {
        code.value = normalizeCode(starter.textContent);
      }

      var initial = code.value;
      var timer;
      code.setAttribute('lang', 'en');
      frame.setAttribute('sandbox', 'allow-scripts allow-forms');

      function render(message) {
        frame.srcdoc = code.value;
        if (status) {
          var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          status.textContent = message || t('previewUpdated', { time: time });
        }
      }

      editor.querySelectorAll('[data-action]').forEach(function (button) {
        button.addEventListener('click', async function () {
          var action = button.dataset.action;
          if (action === 'run') {
            render();
          } else if (action === 'reset') {
            code.value = initial;
            frame.srcdoc = initial;
            code.dispatchEvent(new Event('input', { bubbles: true }));
            if (status) {
              status.textContent = t('previewReset');
            }
          } else if (action === 'copy') {
            var ok = await copyText(code.value);
            var original = button.textContent;
            button.textContent = ok ? t('copied') : t('selectCopy');
            clearTimeout(timer);
            timer = setTimeout(function () {
              button.textContent = original;
            }, 1600);
          }
        });
      });

      code.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          var start = code.selectionStart;
          var end = code.selectionEnd;
          code.setRangeText('  ', start, end, 'end');
        }
        if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
          event.preventDefault();
          render();
        }
      });

      frame.srcdoc = initial;
    });
  }


  var IMAGE_PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#efe6d4"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#6b6355" font-family="sans-serif" font-size="20">Image preview</text></svg>');
  var IMAGE_FALLBACK = '<script>(function(){var fallback="' + IMAGE_PLACEHOLDER + '";function fix(img){if(img.complete&&img.naturalWidth===0){img.src=fallback;}}document.querySelectorAll("img").forEach(function(img){img.addEventListener("error",function(){img.src=fallback;},{once:true});fix(img);});})();</script>';

  function buildHtmlPreview(code, config) {
    var text = code.trim();
    if (config && config.stripLeadingText) {
      var firstTag = text.indexOf('<');
      if (firstTag > 0) {
        text = text.slice(firstTag);
      }
    }
    text = text.replace(/(<img\b[^>]*\bsrc=")([^"]*)(")/gi, function (match, start, src, end) {
      if (/^(https?:|data:|\/\/)/i.test(src)) {
        return match;
      }
      return start + IMAGE_PLACEHOLDER + end;
    });
    if (!text) {
      return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>body{font-family:system-ui;padding:24px;color:#6b6355}</style></head><body><p>Your page preview will appear here after you press Run.</p></body></html>';
    }
    if (/<html[\s>]/i.test(text) || /<!doctype/i.test(text)) {
      if (/<\/body>/i.test(text)) {
        return text.replace(/<\/body>/i, IMAGE_FALLBACK + '</body>');
      }
      return text + IMAGE_FALLBACK;
    }
    return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>body{font-family:system-ui;margin:0;padding:24px;background:#fff;color:#1c1a16;line-height:1.6}img{max-width:100%;height:auto}</style></head><body>' + text + IMAGE_FALLBACK + '</body></html>';
  }

  function buildCssPreview(config, code) {
    return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>' +
      'body{font-family:system-ui;margin:0;padding:24px;background:#f7f2e7;color:#1c1a16;line-height:1.6}' +
      (config.baseCss || '') + '\n' + code +
      '</style></head><body>' + (config.html || '') + '</body></html>';
  }

  function buildJsPreview(config, code) {
    var full = (config.prelude || '') + '\n' + code;
    var encoded = JSON.stringify(full)
      .replace(/</g, '\\u003c')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
    var capture = '<script>(function(){var out=document.getElementById("__console");function write(kind,args){var line=document.createElement("div");var text=Array.prototype.map.call(args,function(value){try{return typeof value==="object"?JSON.stringify(value):String(value);}catch(error){return String(value);}}).join(" ");line.textContent=(kind?kind+": ":"")+text;out.appendChild(line);out.scrollTop=out.scrollHeight;}["log","info","warn","error"].forEach(function(kind){var original=console[kind];console[kind]=function(){write(kind==="log"?"":kind,arguments);if(original){original.apply(console,arguments);}};});window.addEventListener("error",function(event){write("error",[event.message]);});window.addEventListener("unhandledrejection",function(event){write("error",[event.reason&&event.reason.message?event.reason.message:event.reason]);});})();</script>';
    var executor = '<script>(function(){var code=' + encoded + ';try{eval(code);}catch(error){console.error(error.message);}})();</script>';
    return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>' +
      'body{font-family:system-ui;margin:0;padding:20px;background:#f7f2e7;color:#1c1a16;line-height:1.6}' +
      (config.baseCss || '') +
      '#__console{margin-top:18px;padding:12px;border:1px solid #d8cfbc;border-radius:6px;background:#1d1b17;color:#f4eddd;font:12px/1.55 ui-monospace,SFMono-Regular,Consolas,monospace;white-space:pre-wrap;max-height:220px;overflow:auto}' +
      '#__console:empty::before{content:"Console output will appear here.";color:#99917f}' +
      '</style></head><body>' + (config.html || '<h1>Console output</h1>') +
      '<div id="__console" role="status" aria-live="polite"></div>' +
      capture + executor + '</body></html>';
  }

  function setupPracticePreview(practice, attempt, answer, lessonId) {
    var config = PRACTICE_PREVIEWS[lessonId];
    if (!config || config.mode === 'none' || practice.querySelector('[data-editor]')) {
      return null;
    }

    var wrap = document.createElement('div');
    wrap.className = 'practice__playground';
    var codePane = document.createElement('div');
    codePane.className = 'practice__code-pane';
    attempt.parentNode.insertBefore(wrap, attempt);
    codePane.appendChild(attempt);
    wrap.appendChild(codePane);

    var pane = document.createElement('div');
    pane.className = 'practice__preview-pane';
    var bar = document.createElement('div');
    bar.className = 'practice__preview-bar';
    var label = document.createElement('span');
    label.textContent = 'Live preview';
    var runButton = document.createElement('button');
    runButton.type = 'button';
    runButton.className = 'btn btn--small';
    runButton.textContent = 'Run preview';
    bar.appendChild(label);
    bar.appendChild(runButton);

    var frame = document.createElement('iframe');
    frame.setAttribute('title', 'Live preview of your answer');
    frame.setAttribute('sandbox', 'allow-scripts allow-forms');

    var status = document.createElement('p');
    status.className = 'practice__preview-status';
    status.setAttribute('aria-live', 'polite');

    pane.appendChild(bar);
    pane.appendChild(frame);
    pane.appendChild(status);
    wrap.appendChild(pane);

    function run(code, message) {
      var doc;
      if (config.mode === 'css') {
        doc = buildCssPreview(config, code);
      } else if (config.mode === 'js') {
        doc = buildJsPreview(config, code);
      } else {
        doc = buildHtmlPreview(code, config);
      }
      frame.srcdoc = doc;
      status.textContent = message || 'Preview updated.';
    }

    runButton.addEventListener('click', function () {
      run(attempt.value, 'Preview updated.');
    });

    attempt.addEventListener('input', function () {
      status.textContent = 'Press Run preview to see your changes.';
    });

    run('', 'Write code, then press Run preview.');
    return { run: run };
  }

  function runPractices(root, lesson) {
    root.querySelectorAll('[data-practice]').forEach(function (practice) {
      var attempt = practice.querySelector('[data-attempt]');
      var reveal = practice.querySelector('[data-reveal]');
      var note = practice.querySelector('[data-gate-note]');
      var solution = practice.querySelector('[data-solution]');
      var answer = practice.querySelector('script[data-answer]');
      if (!attempt || !reveal || !note || !solution) {
        return;
      }

      var preview = setupPracticePreview(practice, attempt, answer, lesson && lesson.id);
      var initial = attempt.value;
      var minimum = Number(practice.dataset.min || 30);
      var revealed = false;

      function sync() {
        var changed = attempt.value !== initial;
        var enough = attempt.value.trim().length >= minimum;
        var ready = changed && enough;
        reveal.disabled = !ready || revealed;
        if (revealed) {
          note.textContent = t('answerRevealed');
        } else if (ready) {
          note.textContent = t('answerUnlocked');
        } else if (!changed) {
          note.textContent = t('attemptFirst');
        } else {
          note.textContent = t('addCharacters', { n: Math.max(0, minimum - attempt.value.trim().length) });
        }
      }

      attempt.addEventListener('input', sync);

      reveal.addEventListener('click', function () {
        if (answer && !solution.querySelector('pre')) {
          var label = document.createElement('p');
          label.className = 'practice__solution-label';
          label.textContent = t('modelAnswer');
          var pre = document.createElement('pre');
          pre.setAttribute('lang', 'en');
          var code = document.createElement('code');
          code.textContent = normalizeCode(answer.textContent);
          pre.appendChild(code);
          solution.appendChild(label);
          solution.appendChild(pre);
          addCopyButton(pre);
        }
        solution.hidden = false;
        revealed = true;
        sync();
        solution.focus({ preventScroll: true });
        if (preview && answer) {
          preview.run(normalizeCode(answer.textContent), 'Showing model answer.');
        }
      });

      solution.setAttribute('tabindex', '-1');
      sync();
    });
  }

  function runQuizzes(root) {
    root.querySelectorAll('[data-quiz]').forEach(function (quiz) {
      var form = quiz.querySelector('form');
      var result = quiz.querySelector('[data-quiz-result]');
      var reset = quiz.querySelector('[data-quiz-reset]');
      if (!form || !result) {
        return;
      }

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var questions = Array.from(form.querySelectorAll('[data-question]'));
        var correct = 0;
        var firstUnanswered = null;

        questions.forEach(function (question) {
          question.querySelectorAll('.option').forEach(function (option) {
            option.classList.remove('is-correct', 'is-wrong');
          });
          var feedback = question.querySelector('[data-feedback]');
          if (feedback) {
            feedback.hidden = true;
            feedback.classList.remove('is-bad');
          }

          var picked = question.querySelector('input:checked');
          if (!picked) {
            if (!firstUnanswered) {
              firstUnanswered = question;
            }
            return;
          }

          var correctInput = question.querySelector('input[value="' + question.dataset.answer + '"]');
          if (correctInput) {
            correctInput.closest('.option').classList.add('is-correct');
          }

          var isCorrect = picked.value === question.dataset.answer;
          if (isCorrect) {
            correct += 1;
          } else {
            picked.closest('.option').classList.add('is-wrong');
          }

          if (feedback) {
            feedback.hidden = false;
            feedback.textContent = (isCorrect ? t('correct') : t('notQuite')) + ' ' + (question.dataset.explanation || '');
            feedback.classList.toggle('is-bad', !isCorrect);
          }
        });

        result.hidden = false;
        if (firstUnanswered) {
          result.textContent = t('answerAll');
          firstUnanswered.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'center'
          });
          return;
        }

        var pct = Math.round((correct / questions.length) * 100);
        result.innerHTML = '<strong>' + correct + ' / ' + questions.length + '</strong> ' +
          t('correctCount', { pct: pct }) + ' ' +
          (correct === questions.length ? t('cleanSweep') : t('tryAgain'));
      });

      if (reset) {
        reset.addEventListener('click', function () {
          form.reset();
          form.querySelectorAll('.option').forEach(function (option) {
            option.classList.remove('is-correct', 'is-wrong');
          });
          form.querySelectorAll('[data-feedback]').forEach(function (feedback) {
            feedback.hidden = true;
            feedback.textContent = '';
            feedback.classList.remove('is-bad');
          });
          result.hidden = true;
          result.textContent = '';
        });
      }
    });
  }

  function renderCodeBlocks(root) {
    root.querySelectorAll('[data-code]').forEach(function (block) {
      var script = block.querySelector('script[type="text/plain"]');
      if (!script) {
        return;
      }
      var pre = document.createElement('pre');
      pre.setAttribute('lang', 'en');
      var code = document.createElement('code');
      code.textContent = normalizeCode(script.textContent);
      pre.appendChild(code);
      block.replaceChildren(pre);
    });
  }

  function addCopyButton(pre) {
    if (!pre || pre.querySelector('.copy-btn')) {
      return;
    }
    var code = pre.querySelector('code');
    if (!code) {
      return;
    }
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-btn';
    button.textContent = t('copy');
    button.setAttribute('aria-label', t('copyCodeAria'));
    button.addEventListener('click', async function () {
      var ok = await copyText(code.textContent);
      button.textContent = ok ? t('copied') : t('selectCode');
      setTimeout(function () {
        button.textContent = t('copy');
      }, 1600);
    });
    pre.appendChild(button);
  }

  function addCopyButtons(root) {
    root.querySelectorAll('pre').forEach(addCopyButton);
  }

  function normalizeCode(text) {
    return text.replace(/@ENDSCRIPT/g, '</script>').replace(/^\n/, '').replace(/\s+$/, '');
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        void error;
      }
    }
    var helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    var copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }
    helper.remove();
    return copied;
  }

  function buildToc(root) {
    var article = root.querySelector('article.lesson');
    if (!article) {
      return;
    }
    var headings = Array.from(article.querySelectorAll('h2'));
    if (headings.length < 2) {
      return;
    }
    var nav = document.createElement('nav');
    nav.className = 'lesson-toc';
    nav.setAttribute('aria-label', t('inThisLesson'));
    var label = document.createElement('p');
    label.className = 'lesson-toc__label';
    label.textContent = t('inThisLesson');
    nav.appendChild(label);
    var list = document.createElement('ol');
    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'section-' + index + 1;
      }
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent.trim();
      link.addEventListener('click', function (event) {
        event.preventDefault();
        heading.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      });
      item.appendChild(link);
      list.appendChild(item);
    });
    nav.appendChild(list);
    var head = article.querySelector('.lesson-head');
    if (head) {
      head.insertAdjacentElement('afterend', nav);
    } else {
      article.insertBefore(nav, article.firstChild);
    }
  }

  function appendCompletion(root, lesson) {
    var article = root.querySelector('article.lesson');
    if (!article) {
      return;
    }
    var section = document.createElement('section');
    section.className = 'lesson-finish';

    var copy = document.createElement('div');
    var kicker = document.createElement('p');
    kicker.className = 'kicker';
    kicker.textContent = t('lesson') + ' ' + lesson.num;
    var title = document.createElement('h2');
    title.textContent = t('doneTitle');
    var text = document.createElement('p');
    text.textContent = t('doneText');
    copy.appendChild(kicker);
    copy.appendChild(title);
    copy.appendChild(text);

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn complete-btn';
    button.dataset.complete = lesson.id;
    button.setAttribute('aria-pressed', String(completed.has(lesson.id)));
    button.textContent = completed.has(lesson.id) ? t('completed') : t('markComplete');
    if (completed.has(lesson.id)) {
      button.classList.add('is-complete');
    }
    button.addEventListener('click', function () {
      if (completed.has(lesson.id)) {
        completed.delete(lesson.id);
      } else {
        completed.add(lesson.id);
      }
      saveCompleted();
      updateProgressUI();
    });

    section.appendChild(copy);
    section.appendChild(button);
    article.insertAdjacentElement('afterend', section);
  }

  function appendLessonNav(root, lesson) {
    var index = flatLessons.findIndex(function (entry) {
      return entry.id === lesson.id;
    });
    var previous = index > 0 ? flatLessons[index - 1] : null;
    var next = index >= 0 && index < flatLessons.length - 1 ? flatLessons[index + 1] : null;

    var nav = document.createElement('nav');
    nav.className = 'lesson-nav';
    nav.setAttribute('aria-label', 'Lesson navigation');

    if (previous) {
      var prevLink = document.createElement('a');
      prevLink.href = '#/lesson/' + previous.id;
      var prevDisplay = localizedLesson(previous);
      prevLink.innerHTML = '<span>' + t('previous') + '</span><strong>' + prevDisplay.num + ' · ' + prevDisplay.title + '</strong>';
      nav.appendChild(prevLink);
    } else {
      var mapLink = document.createElement('a');
      mapLink.href = '#/map';
      mapLink.innerHTML = '<span>' + t('course') + '</span><strong>' + t('backToMap') + '</strong>';
      nav.appendChild(mapLink);
    }

    if (next) {
      var nextLink = document.createElement('a');
      nextLink.className = 'next';
      nextLink.href = '#/lesson/' + next.id;
      var nextDisplay = localizedLesson(next);
      nextLink.innerHTML = '<span>' + t('next') + '</span><strong>' + nextDisplay.num + ' · ' + nextDisplay.title + '</strong>';
      nav.appendChild(nextLink);
    } else {
      var finishLink = document.createElement('a');
      finishLink.className = 'next';
      finishLink.href = '#/map';
      finishLink.innerHTML = '<span>' + t('finish') + '</span><strong>' + t('returnToMap') + '</strong>';
      nav.appendChild(finishLink);
    }

    root.appendChild(nav);
  }

  function initLesson(root, lesson) {
    renderCodeBlocks(root);
    runEditors(root);
    runPractices(root, lesson);
    runQuizzes(root);
    addCopyButtons(root);
    injectLessonNotes(root, lesson);
    buildToc(root);
    appendCompletion(root, lesson);
    appendLessonNav(root, lesson);
    updateProgressUI();
  }

  function initMap(root) {
    renderCodeBlocks(root);
    runEditors(root);
    runPractices(root);
    runQuizzes(root);
    addCopyButtons(root);
    renderMapModules(root);
  }

  function renderMapModules(root) {
    var container = root.querySelector('[data-map-modules]');
    if (!container) {
      return;
    }
    var rows = COURSE.modules.map(function (rawModule) {
      var module = localizedModule(rawModule);
      var goals = module.goals.map(function (goal) {
        return '<li>' + goal + '</li>';
      }).join('');
      var lessons = module.lessons.map(function (rawLesson) {
        var lesson = localizedLesson(rawLesson);
        return '<a class="map-lesson-link" href="#/lesson/' + lesson.id + '"><span>' + lesson.num + '</span>' + lesson.title + '</a>';
      }).join('');
      return '<tr>' +
        '<td data-label="' + t('moduleTime') + '"><span class="map-module-name">' + module.id + ' · ' + module.title + '</span><span class="map-module-time">' + module.weeks + ' · ' + module.hours + '</span></td>' +
        '<td data-label="' + t('objectives') + '"><ul class="tight">' + goals + '</ul></td>' +
        '<td data-label="' + t('prerequisites') + '">' + module.prereq + '</td>' +
        '<td data-label="' + t('projectExit') + '">' + module.project + '<br><span class="mod-time">' + t('exitLabel') + ' ' + module.exit + '</span></td>' +
        '<td data-label="' + t('lessons') + '">' + lessons + '</td>' +
        '</tr>';
    }).join('');

    container.innerHTML = '<div class="table-wrap"><table class="table--stack map-table">' +
      '<caption>' + t('mapCaption') + '</caption>' +
      '<thead><tr><th scope="col">' + t('moduleTime') + '</th><th scope="col">' + t('objectives') + '</th><th scope="col">' + t('prerequisites') + '</th><th scope="col">' + t('projectExit') + '</th><th scope="col">' + t('lessons') + '</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';
  }

  function showLoading() {
    view.innerHTML = '<div class="view-loading" role="status" aria-live="polite">' +
      '<p>' + t('loadingLesson') + '</p><div class="view-loading__bar"><span></span></div></div>';
  }

  function showError(message) {
    var fileNote = location.protocol === 'file:' ? t('fileNote') : '';
    view.innerHTML = '<div class="view-error"><p class="eyebrow">' + t('couldNotLoad') + '</p>' +
      '<h1>' + t('lessonDidNotArrive') + '</h1><p data-error-message></p>' +
      '<p><button class="btn" type="button" data-retry>' + t('tryAgainButton') + '</button> ' +
      '<a class="btn btn--ghost" href="#/map">' + t('courseMapButton') + '</a></p></div>';
    var messageNode = view.querySelector('[data-error-message]');
    if (messageNode) {
      messageNode.textContent = message + fileNote;
    }
    var retry = view.querySelector('[data-retry]');
    if (retry) {
      retry.addEventListener('click', route);
    }
  }

  function focusHeading(root) {
    var heading = root.querySelector('h1');
    if (!heading) {
      return;
    }
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  async function loadLesson(lessonId) {
    var lesson = lessonById[lessonId];
    if (!lesson) {
      location.replace('#/lesson/1-1');
      return;
    }
    var token = ++renderToken;
    setActiveLesson(lessonId);
    if (filterInput && filterInput.value) {
      filterInput.value = '';
      filterMenu();
    }
    showLoading();
    try {
      var response = await fetch(lessonPath(lessonId), { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      var html = await response.text();
      if (token !== renderToken) {
        return;
      }
      view.innerHTML = html;
      var display = localizedLesson(lesson);
      document.title = display.num + ' · ' + display.title + ' — ' + courseTitle();
      initLesson(view, lesson);
      scrollTop();
      focusHeading(view);
      closeMenu(false);
    } catch (error) {
      if (token !== renderToken) {
        return;
      }
      showError(t('errorFetch') + (error && error.message ? ' (' + error.message + ')' : ''));
    }
  }

  async function loadMap() {
    var token = ++renderToken;
    clearActiveLesson();
    if (filterInput && filterInput.value) {
      filterInput.value = '';
      filterMenu();
    }
    showLoading();
    try {
      var response = await fetch(mapPath(), { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      var html = await response.text();
      if (token !== renderToken) {
        return;
      }
      view.innerHTML = html;
      document.title = t('mapTitle') + ' — ' + courseTitle();
      initMap(view);
      scrollTop();
      focusHeading(view);
      closeMenu(false);
    } catch (error) {
      if (token !== renderToken) {
        return;
      }
      showError(t('mapFetchError') + (error && error.message ? ' (' + error.message + ')' : ''));
    }
  }

  function parseRoute() {
    var raw = location.hash.replace(/^#\/?/, '');
    if (raw === 'map') {
      return { type: 'map' };
    }
    var match = raw.match(/^lesson\/([\w-]+)$/);
    if (match && lessonById[match[1]]) {
      return { type: 'lesson', id: match[1] };
    }
    return null;
  }

  function route() {
    var parsed = parseRoute();
    if (!parsed) {
      history.replaceState(null, '', '#/lesson/1-1');
      parsed = { type: 'lesson', id: '1-1' };
    }
    if (parsed.type === 'map') {
      loadMap();
    } else {
      loadLesson(parsed.id);
    }
  }

  function openMenu() {
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', t('closeMenu'));
    menu.scrollTop = 0;
    var focusable = menu.querySelector('a, button, input');
    if (focusable) {
      focusable.focus({ preventScroll: true });
    }
  }

  function closeMenu(returnFocus) {
    if (!body.classList.contains('menu-open')) {
      return;
    }
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', t('openMenu'));
    if (returnFocus !== false) {
      menuToggle.focus();
    }
  }

  function trapFocus(event) {
    if (event.key !== 'Tab' || !body.classList.contains('menu-open')) {
      return;
    }
    var focusable = Array.from(menu.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')).filter(function (element) {
      return !element.hidden && element.offsetParent !== null;
    });
    if (!focusable.length) {
      return;
    }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function bindShell() {
    var menuClose = document.querySelector('.menu-close');
    if (menuClose) {
      menuClose.addEventListener('click', function () {
        closeMenu(true);
      });
    }

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.addEventListener('click', function () {
        setLanguage(button.dataset.lang);
      });
    });

    var skipLink = document.querySelector('[data-skip]');
    if (skipLink) {
      skipLink.addEventListener('click', function (event) {
        event.preventDefault();
        view.focus();
      });
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        if (body.classList.contains('menu-open')) {
          closeMenu(true);
        } else {
          openMenu();
        }
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function () {
        closeMenu(true);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu(true);
      }
      trapFocus(event);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        closeMenu(false);
      }
    });

    if (filterInput) {
      filterInput.addEventListener('input', filterMenu);
    }

    if (resetButton) {
      resetButton.addEventListener('click', function () {
        if (!window.confirm(t('resetConfirm'))) {
          return;
        }
        completed.clear();
        saveCompleted();
        updateProgressUI();
      });
    }

    window.addEventListener('hashchange', route);
  }

  document.documentElement.lang = lang;
  applyStaticTranslations();
  buildMenu();
  bindShell();
  updateProgressUI();
  route();
})();
