window.COURSE = {
  title: "The Web Builder's Field Guide",
  tagline: "A hands-on course in HTML, CSS, and JavaScript, one lesson at a time.",
  modules: [
    {
      id: "01",
      title: "HTML: the skeleton",
      weeks: "Weeks 1–2",
      hours: "~14 h",
      goals: [
        "Write valid HTML5 from a blank file.",
        "Structure text with headings, links, images, and lists.",
        "Build accessible forms and read the DOM in DevTools."
      ],
      prereq: "None. A browser and a text editor.",
      project: "About Me page → linked recipe page",
      exit: "Build a valid two-page site from scratch and explain head vs body.",
      lessons: [
        { id: "1-1", num: "1.1", title: "Your first page", time: "75–90 min" },
        { id: "1-2", num: "1.2", title: "Links, images, and lists", time: "60–75 min" },
        { id: "1-3", num: "1.3", title: "Tables, forms, and semantic structure", time: "60–75 min" },
        { id: "1-4", num: "1.4", title: "Project: About Me → recipe page", time: "2–3 h", project: true }
      ]
    },
    {
      id: "02",
      title: "CSS: the skin",
      weeks: "Weeks 3–4",
      hours: "~16 h",
      goals: [
        "Use selectors, the cascade, and specificity with intent.",
        "Master the box model, spacing, color, and type.",
        "Build layouts with Flexbox and debug styles live."
      ],
      prereq: "Module 1: valid HTML and correct nesting.",
      project: "Personal portfolio, version 1",
      exit: "Style a page to match a reference without sideways scrolling.",
      lessons: [
        { id: "2-1", num: "2.1", title: "Selectors, cascade, and specificity", time: "60–75 min" },
        { id: "2-2", num: "2.2", title: "The box model and spacing", time: "60–75 min" },
        { id: "2-3", num: "2.3", title: "Type, color, and visual rhythm", time: "60–75 min" },
        { id: "2-4", num: "2.4", title: "Flexbox + portfolio v1", time: "2–3 h", project: true }
      ]
    },
    {
      id: "03",
      title: "Layout & responsive design",
      weeks: "Weeks 5–6",
      hours: "~16 h",
      goals: [
        "Use CSS Grid and mobile-first media queries.",
        "Build navigation that works on small screens.",
        "Apply accessibility basics: focus, contrast, labels."
      ],
      prereq: "Module 2: box model and Flexbox.",
      project: "Responsive landing page",
      exit: "Page works at 320, 768, and 1440 pixels with no page-level horizontal scroll.",
      lessons: [
        { id: "3-1", num: "3.1", title: "CSS Grid", time: "60–75 min" },
        { id: "3-2", num: "3.2", title: "Mobile-first responsive design", time: "60–75 min" },
        { id: "3-3", num: "3.3", title: "Accessibility + landing page", time: "2–3 h", project: true }
      ]
    },
    {
      id: "04",
      title: "JavaScript foundations",
      weeks: "Weeks 7–8",
      hours: "~16 h",
      goals: [
        "Work with values, variables, types, and operators.",
        "Write conditionals, loops, functions, arrays, and objects.",
        "Debug with the console instead of guessing."
      ],
      prereq: "Module 1 HTML; Module 2 CSS basics.",
      project: "Interactive calculator",
      exit: "Write and debug a function that takes input and returns the correct output.",
      lessons: [
        { id: "4-1", num: "4.1", title: "Values, variables, and types", time: "60–75 min" },
        { id: "4-2", num: "4.2", title: "Conditionals and logic", time: "60–75 min" },
        { id: "4-3", num: "4.3", title: "Loops and collections", time: "60–75 min" },
        { id: "4-4", num: "4.4", title: "Functions and scope", time: "60–75 min" },
        { id: "4-5", num: "4.5", title: "Arrays, objects, and the calculator", time: "2–3 h", project: true }
      ]
    },
    {
      id: "05",
      title: "DOM & events",
      weeks: "Weeks 9–10",
      hours: "~16 h",
      goals: [
        "Select and change elements safely.",
        "Handle clicks, input, and form submission.",
        "Render lists from data and manage simple state."
      ],
      prereq: "Module 4: functions, arrays, and objects.",
      project: "To-do list + quiz app",
      exit: "Every visible control changes state or data, and the UI updates to match.",
      lessons: [
        { id: "5-1", num: "5.1", title: "Selecting and changing the DOM", time: "60–75 min" },
        { id: "5-2", num: "5.2", title: "Events, input, and forms", time: "60–75 min" },
        { id: "5-3", num: "5.3", title: "State and rendering lists", time: "60–75 min" },
        { id: "5-4", num: "5.4", title: "To-do list + quiz app", time: "2–3 h", project: true }
      ]
    },
    {
      id: "06",
      title: "Async & APIs",
      weeks: "Weeks 11–12",
      hours: "~16 h",
      goals: [
        "Fetch data with fetch and async/await.",
        "Read JSON and handle loading, empty, error, and success states.",
        "Store small amounts of data with localStorage."
      ],
      prereq: "Module 5: events and DOM updates.",
      project: "Weather app",
      exit: "Handle all four UI states and leave no unhandled console errors.",
      lessons: [
        { id: "6-1", num: "6.1", title: "Promises and async/await", time: "60–75 min" },
        { id: "6-2", num: "6.2", title: "fetch, JSON, and API keys", time: "60–75 min" },
        { id: "6-3", num: "6.3", title: "Loading, empty, and error states", time: "60–75 min" },
        { id: "6-4", num: "6.4", title: "Storage + weather app", time: "2–3 h", project: true }
      ]
    },
    {
      id: "07",
      title: "Ship it",
      weeks: "Weeks 13–14",
      hours: "~18 h",
      goals: [
        "Structure a multi-page site and reuse shared patterns.",
        "Audit accessibility and performance.",
        "Use Git, publish to GitHub, and deploy a live site."
      ],
      prereq: "Modules 1–6 plus one completed project.",
      project: "Portfolio v2 + three-page site, deployed",
      exit: "A live URL that works on mobile, passes an audit, and is documented on GitHub.",
      lessons: [
        { id: "7-1", num: "7.1", title: "Multi-page architecture", time: "60–75 min" },
        { id: "7-2", num: "7.2", title: "Accessibility and performance audit", time: "60–75 min" },
        { id: "7-3", num: "7.3", title: "Git, deploy, and portfolio v2", time: "3–4 h", project: true }
      ]
    }
  ]
};
