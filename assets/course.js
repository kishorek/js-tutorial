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
  var mapLinks = Array.from(document.querySelectorAll('[data-route-link="map"]'));

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
    COURSE.modules.forEach(function (module) {
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
      title.textContent = module.title;

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
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.className = 'menu-lesson';
        link.href = '#/lesson/' + lesson.id;
        link.dataset.lesson = lesson.id;
        link.dataset.search = (lesson.num + ' ' + lesson.title + ' ' + module.title).toLowerCase();
        if (lesson.project) {
          link.classList.add('is-project');
        }

        var lessonNum = document.createElement('span');
        lessonNum.className = 'menu-lesson__num';
        lessonNum.textContent = lesson.num;

        var lessonTitle = document.createElement('span');
        lessonTitle.className = 'menu-lesson__title';
        lessonTitle.textContent = lesson.title;

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
    mapLinks.forEach(function (link) {
      link.removeAttribute('aria-current');
    });
  }

  function clearActiveLesson() {
    menuMeta.forEach(function (entry) {
      entry.links.forEach(function (link) {
        link.removeAttribute('aria-current');
      });
    });
    mapLinks.forEach(function (link) {
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
      menuText.textContent = count + ' of ' + total + ' complete';
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
      finishButton.textContent = isDone ? 'Completed ✓' : 'Mark lesson complete';
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
      frame.setAttribute('sandbox', 'allow-scripts');

      function render(message) {
        frame.srcdoc = code.value;
        if (status) {
          var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          status.textContent = message || 'Preview updated at ' + time + '.';
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
              status.textContent = 'Reset to the starter code.';
            }
          } else if (action === 'copy') {
            var ok = await copyText(code.value);
            var original = button.textContent;
            button.textContent = ok ? 'Copied' : 'Select + copy';
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

  function runPractices(root) {
    root.querySelectorAll('[data-practice]').forEach(function (practice) {
      var attempt = practice.querySelector('[data-attempt]');
      var reveal = practice.querySelector('[data-reveal]');
      var note = practice.querySelector('[data-gate-note]');
      var solution = practice.querySelector('[data-solution]');
      var answer = practice.querySelector('script[data-answer]');
      if (!attempt || !reveal || !note || !solution) {
        return;
      }

      var initial = attempt.value;
      var minimum = Number(practice.dataset.min || 30);
      var revealed = false;

      function sync() {
        var changed = attempt.value !== initial;
        var enough = attempt.value.trim().length >= minimum;
        var ready = changed && enough;
        reveal.disabled = !ready || revealed;
        if (revealed) {
          note.textContent = 'Model answer revealed. Compare it with your attempt.';
        } else if (ready) {
          note.textContent = 'Answer unlocked. Try running yours first.';
        } else if (!changed) {
          note.textContent = 'Make an attempt first. Then the model answer unlocks.';
        } else {
          note.textContent = 'Add ' + Math.max(0, minimum - attempt.value.trim().length) + ' more characters to unlock the answer.';
        }
      }

      attempt.addEventListener('input', sync);

      reveal.addEventListener('click', function () {
        if (answer && !solution.querySelector('pre')) {
          var label = document.createElement('p');
          label.className = 'practice__solution-label';
          label.textContent = 'Model answer';
          var pre = document.createElement('pre');
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
            feedback.textContent = (isCorrect ? 'Correct. ' : 'Not quite. ') + (question.dataset.explanation || '');
            feedback.classList.toggle('is-bad', !isCorrect);
          }
        });

        result.hidden = false;
        if (firstUnanswered) {
          result.textContent = 'Answer all questions first.';
          firstUnanswered.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'center'
          });
          return;
        }

        var pct = Math.round((correct / questions.length) * 100);
        result.innerHTML = '<strong>' + correct + ' / ' + questions.length + '</strong> correct — ' + pct + '%. ' +
          (correct === questions.length ? 'Clean sweep.' : 'Read the explanations and try again.');
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
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy this code example');
    button.addEventListener('click', async function () {
      var ok = await copyText(code.textContent);
      button.textContent = ok ? 'Copied' : 'Select code';
      setTimeout(function () {
        button.textContent = 'Copy';
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
    nav.setAttribute('aria-label', 'In this lesson');
    var label = document.createElement('p');
    label.className = 'lesson-toc__label';
    label.textContent = 'In this lesson';
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
    kicker.textContent = 'Lesson ' + lesson.num;
    var title = document.createElement('h2');
    title.textContent = 'Done with this lesson?';
    var text = document.createElement('p');
    text.textContent = 'Mark it complete to update your course progress. You can undo it at any time.';
    copy.appendChild(kicker);
    copy.appendChild(title);
    copy.appendChild(text);

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn complete-btn';
    button.dataset.complete = lesson.id;
    button.setAttribute('aria-pressed', String(completed.has(lesson.id)));
    button.textContent = completed.has(lesson.id) ? 'Completed ✓' : 'Mark lesson complete';
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
      prevLink.innerHTML = '<span>Previous</span><strong>' + previous.num + ' · ' + previous.title + '</strong>';
      nav.appendChild(prevLink);
    } else {
      var mapLink = document.createElement('a');
      mapLink.href = '#/map';
      mapLink.innerHTML = '<span>Course</span><strong>Back to the course map</strong>';
      nav.appendChild(mapLink);
    }

    if (next) {
      var nextLink = document.createElement('a');
      nextLink.className = 'next';
      nextLink.href = '#/lesson/' + next.id;
      nextLink.innerHTML = '<span>Next</span><strong>' + next.num + ' · ' + next.title + '</strong>';
      nav.appendChild(nextLink);
    } else {
      var finishLink = document.createElement('a');
      finishLink.className = 'next';
      finishLink.href = '#/map';
      finishLink.innerHTML = '<span>Finish</span><strong>Return to the course map</strong>';
      nav.appendChild(finishLink);
    }

    root.appendChild(nav);
  }

  function initLesson(root, lesson) {
    renderCodeBlocks(root);
    runEditors(root);
    runPractices(root);
    runQuizzes(root);
    addCopyButtons(root);
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
    var rows = COURSE.modules.map(function (module) {
      var goals = module.goals.map(function (goal) {
        return '<li>' + goal + '</li>';
      }).join('');
      var lessons = module.lessons.map(function (lesson) {
        return '<a class="map-lesson-link" href="#/lesson/' + lesson.id + '"><span>' + lesson.num + '</span>' + lesson.title + '</a>';
      }).join('');
      return '<tr>' +
        '<td data-label="Module & time"><span class="map-module-name">' + module.id + ' · ' + module.title + '</span><span class="map-module-time">' + module.weeks + ' · ' + module.hours + '</span></td>' +
        '<td data-label="Objectives"><ul class="tight">' + goals + '</ul></td>' +
        '<td data-label="Prerequisites">' + module.prereq + '</td>' +
        '<td data-label="Project & exit">' + module.project + '<br><span class="mod-time">Exit: ' + module.exit + '</span></td>' +
        '<td data-label="Lessons">' + lessons + '</td>' +
        '</tr>';
    }).join('');

    container.innerHTML = '<div class="table-wrap"><table class="table--stack map-table">' +
      '<caption>7 modules · 27 lessons · 7 projects. Times assume 7–9 focused hours per week.</caption>' +
      '<thead><tr><th scope="col">Module &amp; time</th><th scope="col">Objectives</th><th scope="col">Prerequisites</th><th scope="col">Project &amp; exit</th><th scope="col">Lessons</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';
  }

  function showLoading() {
    view.innerHTML = '<div class="view-loading" role="status" aria-live="polite">' +
      '<p>Loading the lesson…</p><div class="view-loading__bar"><span></span></div></div>';
  }

  function showError(message) {
    var fileNote = '';
    if (location.protocol === 'file:') {
      fileNote = ' This course loads lessons over HTTP. Run python3 -m http.server in the course folder, then open http://localhost:8000.';
    }
    view.innerHTML = '<div class="view-error"><p class="eyebrow">Could not load</p>' +
      '<h1>The lesson did not arrive.</h1><p data-error-message></p>' +
      '<p><button class="btn" type="button" data-retry>Try again</button> ' +
      '<a class="btn btn--ghost" href="#/map">Course map</a></p></div>';
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
      var response = await fetch('lessons/' + lessonId + '.html', { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      var html = await response.text();
      if (token !== renderToken) {
        return;
      }
      view.innerHTML = html;
      document.title = lesson.num + ' · ' + lesson.title + ' — ' + COURSE.title;
      initLesson(view, lesson);
      scrollTop();
      focusHeading(view);
      closeMenu(false);
    } catch (error) {
      if (token !== renderToken) {
        return;
      }
      showError('The lesson file could not be fetched. Check your connection and try again.' + (error && error.message ? ' (' + error.message + ')' : ''));
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
      var response = await fetch('views/map.html', { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      var html = await response.text();
      if (token !== renderToken) {
        return;
      }
      view.innerHTML = html;
      document.title = 'Course map — ' + COURSE.title;
      initMap(view);
      scrollTop();
      focusHeading(view);
      closeMenu(false);
    } catch (error) {
      if (token !== renderToken) {
        return;
      }
      showError('The course map could not be fetched. Check your connection and try again.' + (error && error.message ? ' (' + error.message + ')' : ''));
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
    menuToggle.setAttribute('aria-label', 'Close course menu');
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
    menuToggle.setAttribute('aria-label', 'Open course menu');
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
        if (!window.confirm('Reset all lesson progress?')) {
          return;
        }
        completed.clear();
        saveCompleted();
        updateProgressUI();
      });
    }

    window.addEventListener('hashchange', route);
  }

  buildMenu();
  bindShell();
  updateProgressUI();
  route();
})();
