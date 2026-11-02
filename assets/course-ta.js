window.COURSE_TA = {
  title: "The Web Builder's Field Guide",
  tagline: "HTML, CSS, JavaScript-ஐ ஒவ்வொரு lesson-ஆ கத்துக்கும் hands-on course.",
  modules: [
    {
      id: "01",
      title: "HTML: the skeleton",
      weeks: "Weeks 1–2",
      hours: "~14 h",
      goals: [
        "Blank file-லிருந்து valid HTML5 எழுதுவது.",
        "Headings, links, images, lists-ஐ use பண்ணி text-க்கு structure கொடுப்பது.",
        "Accessible forms build பண்ணி, DevTools-ல DOM-ஐ படிப்பது."
      ],
      prereq: "எதுவும் இல்ல. ஒரு browser-உம் ஒரு text editor-உம்.",
      project: "About Me page → link பண்ணின recipe page",
      exit: "Scratch-லிருந்து valid two-page site build பண்ணி, head-உம் body-உம் difference-ஐ explain பண்ணுவது.",
      lessons: [
        { id: "1-1", num: "1.1", title: "Your first page" },
        { id: "1-2", num: "1.2", title: "Links, images, and lists" },
        { id: "1-3", num: "1.3", title: "Tables, forms, and semantic structure" },
        { id: "1-4", num: "1.4", title: "Project: About Me → recipe page", project: true }
      ]
    },
    {
      id: "02",
      title: "CSS: the skin",
      weeks: "Weeks 3–4",
      hours: "~16 h",
      goals: [
        "Selectors, cascade, specificity-ஐ intention-ஓட use பண்ணுவது.",
        "Box model, spacing, color, type-ல strong ஆவது.",
        "Flexbox-ல layouts build பண்ணி, styles-ஐ live-ஆ debug பண்ணுவது."
      ],
      prereq: "Module 1: valid HTML-உம் correct nesting-உம்.",
      project: "Personal portfolio, version 1",
      exit: "Sideways scroll இல்லாம reference-ஐ match பண்ணி page-ஐ style பண்ணுவது.",
      lessons: [
        { id: "2-1", num: "2.1", title: "Selectors, cascade, and specificity" },
        { id: "2-2", num: "2.2", title: "The box model and spacing" },
        { id: "2-3", num: "2.3", title: "Type, color, and visual rhythm" },
        { id: "2-4", num: "2.4", title: "Flexbox + portfolio v1", project: true }
      ]
    },
    {
      id: "03",
      title: "Layout & responsive design",
      weeks: "Weeks 5–6",
      hours: "~16 h",
      goals: [
        "CSS Grid-உம் mobile-first media queries-உம் use பண்ணுவது.",
        "Small screens-ல work ஆகும் navigation build பண்ணுவது.",
        "Accessibility basics-ஐ apply பண்ணுவது: focus, contrast, labels."
      ],
      prereq: "Module 2: box model-உம் Flexbox-உம்.",
      project: "Responsive landing page",
      exit: "320, 768, 1440 pixels-ல page work ஆகணும்; page-level horizontal scroll இருக்கக்கூடாது.",
      lessons: [
        { id: "3-1", num: "3.1", title: "CSS Grid" },
        { id: "3-2", num: "3.2", title: "Mobile-first responsive design" },
        { id: "3-3", num: "3.3", title: "Accessibility + landing page", project: true }
      ]
    },
    {
      id: "04",
      title: "JavaScript foundations",
      weeks: "Weeks 7–8",
      hours: "~16 h",
      goals: [
        "Values, variables, types, operators-ஓட work பண்ணுவது.",
        "Conditionals, loops, functions, arrays, objects எழுதுவது.",
        "Guess பண்ணாம console-ல debug பண்ணுவது."
      ],
      prereq: "Module 1 HTML; Module 2 CSS basics.",
      project: "Interactive calculator",
      exit: "Input வாங்கி correct output return பண்ணும் function-ஐ எழுதி debug பண்ணுவது.",
      lessons: [
        { id: "4-1", num: "4.1", title: "Values, variables, and types" },
        { id: "4-2", num: "4.2", title: "Conditionals and logic" },
        { id: "4-3", num: "4.3", title: "Loops and collections" },
        { id: "4-4", num: "4.4", title: "Functions and scope" },
        { id: "4-5", num: "4.5", title: "Arrays, objects, and the calculator", project: true }
      ]
    },
    {
      id: "05",
      title: "DOM & events",
      weeks: "Weeks 9–10",
      hours: "~16 h",
      goals: [
        "Elements-ஐ safely select பண்ணி change பண்ணுவது.",
        "Clicks, input, form submission-ஐ handle பண்ணுவது.",
        "Data-லிருந்து lists render பண்ணி simple state-ஐ manage பண்ணுவது."
      ],
      prereq: "Module 4: functions, arrays, objects.",
      project: "To-do list + quiz app",
      exit: "தெரியுற ஒவ்வொரு control-உம் state அல்லது data-ஐ change பண்ணணும்; UI அதுக்கு ஏத்த மாதிரி update ஆகணும்.",
      lessons: [
        { id: "5-1", num: "5.1", title: "Selecting and changing the DOM" },
        { id: "5-2", num: "5.2", title: "Events, input, and forms" },
        { id: "5-3", num: "5.3", title: "State and rendering lists" },
        { id: "5-4", num: "5.4", title: "To-do list + quiz app", project: true }
      ]
    },
    {
      id: "06",
      title: "Async & APIs",
      weeks: "Weeks 11–12",
      hours: "~16 h",
      goals: [
        "fetch-உம் async/await-உம் use பண்ணி data fetch பண்ணுவது.",
        "JSON படிச்சு loading, empty, error, success states-ஐ handle பண்ணுவது.",
        "localStorage-ல small amount data store பண்ணுவது."
      ],
      prereq: "Module 5: events-உம் DOM updates-உம்.",
      project: "Weather app",
      exit: "நாலு UI states-ஐயும் handle பண்ணி, console-ல unhandled error எதுவும் விடக்கூடாது.",
      lessons: [
        { id: "6-1", num: "6.1", title: "Promises and async/await" },
        { id: "6-2", num: "6.2", title: "fetch, JSON, and API keys" },
        { id: "6-3", num: "6.3", title: "Loading, empty, and error states" },
        { id: "6-4", num: "6.4", title: "Storage + weather app", project: true }
      ]
    },
    {
      id: "07",
      title: "Ship it",
      weeks: "Weeks 13–14",
      hours: "~18 h",
      goals: [
        "Multi-page site-ஐ structure பண்ணி shared patterns-ஐ reuse பண்ணுவது.",
        "Accessibility-ஐயும் performance-ஐயும் audit பண்ணுவது.",
        "Git use பண்ணி, GitHub-ல publish பண்ணி, live site-ஐ deploy பண்ணுவது."
      ],
      prereq: "Modules 1–6-உம் முடிச்ச ஒரு project-உம்.",
      project: "Portfolio v2 + three-page site, deployed",
      exit: "Mobile-ல work ஆகுற, audit pass ஆகுற, GitHub-ல documented live URL.",
      lessons: [
        { id: "7-1", num: "7.1", title: "Multi-page architecture" },
        { id: "7-2", num: "7.2", title: "Accessibility and performance audit" },
        { id: "7-3", num: "7.3", title: "Git, deploy, and portfolio v2", project: true }
      ]
    }
  ]
};
