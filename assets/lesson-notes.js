window.LESSON_NOTES = {
  "1-1": {
    en: {
      why: "HTML gives a page its structure and meaning, so CSS has something to style and JavaScript has something solid to change. Without it, content is just an unstructured wall of text.",
      where: "Every webpage starts from this skeleton, and you can see it in DevTools or view-source on any site you visit.",
      analogy: "A house frame and room labels decide what exists and where it goes; paint and wiring come afterward."
    },
    ta: {
      why: "HTML page-க்கு structure-ஐயும் meaning-ஐயும் கொடுக்கும். அதனால CSS-க்கு style பண்ண ஒன்னு இருக்கும், JavaScript-க்கு change பண்ண ஒரு solid base இருக்கும். HTML இல்லாம content வெறும் ஒழுங்கில்லாத text குவியலா இருக்கும்.",
      where: "எல்லா webpage-உம் இந்த skeleton-லிருந்து தான் start ஆகும். நீங்க பாக்குற எந்த site-ஐயும் DevTools-ல அல்லது view-source-ல பாக்கலாம்.",
      analogy: "House frame-உம் room labels-உம் எது எங்க இருக்கணும் என்பதை decide பண்ணும்; paint-உம் wiring-உம் அதுக்கு அப்புறம் தான் வரும்."
    }
  },
  "1-2": {
    en: {
      why: "Links turn separate files into a website, while correct paths, alt text, and list types keep images and content usable for everyone.",
      where: "Navigation menus, recipe or blog pages, and image galleries.",
      analogy: "A relative path is like a street name that works inside the same neighbourhood, while an absolute URL is a full postal address that works from anywhere."
    },
    ta: {
      why: "Links தனித்தனி files-ஐ ஒரு website-ஆ இணைக்கும். Correct paths, alt text, correct list type இருந்தா தான் images-உம் content-உம் எல்லாருக்கும் use ஆகும்.",
      where: "Navigation menus, recipe அல்லது blog pages, image galleries.",
      analogy: "Relative path என்பது street name மாதிரி - அதே area-ல work ஆகும்; absolute URL முழு postal address மாதிரி - எங்க இருந்தும் work ஆகும்."
    }
  },
  "1-3": {
    en: {
      why: "Tables, forms, and landmarks give data and input a meaning that both browsers and screen readers can navigate.",
      where: "Signup forms, schedule or pricing tables, and page layouts built from header, nav, main, and footer.",
      analogy: "A form is like a paper application where every blank has a printed label, and landmarks are the floor signs of a building."
    },
    ta: {
      why: "Tables, forms, landmarks data-க்கும் input-க்கும் browser-உம் screen reader-உம் புரிஞ்சுக்கும் meaning-ஐ கொடுக்கும்.",
      where: "Signup forms, schedule அல்லது pricing tables, header/nav/main/footer-ல build பண்ணின page layouts.",
      analogy: "Form என்பது paper application மாதிரி - ஒவ்வொரு blank-க்கும் printed label இருக்கணும்; landmarks building-ல floor signs மாதிரி வழி காட்டும்."
    }
  },
  "1-4": {
    en: {
      why: "The project proves you can combine structure, links, images, lists, and forms into a real site instead of practising tags in isolation.",
      where: "Small personal and business sites are built from exactly these linked pages.",
      analogy: "It is like cooking a full meal after practising knife skills, because every technique shows up at once."
    },
    ta: {
      why: "Structure, links, images, lists, forms எல்லாத்தையும் சேர்த்து ஒரு real site-ஆ build பண்ண முடியுமா என்பதை இந்த project prove பண்ணும். Tags-ஐ தனியா practice பண்றது மட்டும் இல்ல.",
      where: "Small personal-உம் business sites-உம் இதே மாதிரி linked pages-ல தான் build ஆகும்.",
      analogy: "Knife skills practice பண்ணிட்டு முழு meal cook பண்றது மாதிரி - கத்துக்கிட்ட எல்லா technique-உம் ஒரே நேரத்தில use ஆகும்."
    }
  },
  "2-1": {
    en: {
      why: "When two CSS rules disagree, the cascade and specificity decide which declaration actually applies, so knowing the score replaces guesswork.",
      where: "Styling components, overriding framework styles, and debugging a colour that refuses to change in DevTools.",
      analogy: "It is like a queue of instructions where the more specific, later order wins, just as a named person's request beats a general announcement."
    },
    ta: {
      why: "CSS rules ஒன்னோட ஒன்னு clash ஆனா, cascade-உம் specificity-உம் எந்த declaration apply ஆகும் என்பதை decide பண்ணும். Score தெரிஞ்சா guess தேவை இல்ல.",
      where: "Components style பண்ணும்போது, framework styles override பண்ணும்போது, DevTools-ல color ஏன் மாறல என debug பண்ணும்போது.",
      analogy: "Instructions வரிசை மாதிரி - specific-ஆன, அப்புறம் வந்த order win ஆகும்; ஒரு person-க்கு சொன்ன request பொதுவான announcement-ஐ விட win ஆகும்."
    }
  },
  "2-2": {
    en: {
      why: "Every element is a box, so width, padding, border, and margin explain most overflow and cramped-layout problems.",
      where: "Fixing an element that is 20 pixels too wide, building card layouts, and keeping spacing consistent.",
      analogy: "It is like framing a picture: the photo is content, the mat is padding, the frame is border, and the wall gap is margin."
    },
    ta: {
      why: "ஒவ்வொரு element-உம் ஒரு box. Width, padding, border, margin தான் overflow-உம் tight layout-உம் ஏன் வருது என்பதை explain பண்ணும்.",
      where: "20px extra ஆ இருக்குற element-ஐ fix பண்ணும்போது, card layouts build பண்ணும்போது, spacing-ஐ consistent-ஆ வைக்கும்போது.",
      analogy: "Picture frame மாதிரி - photo content, mat padding, frame border, wall-க்கும் frame-க்கும் இடையில gap margin."
    }
  },
  "2-3": {
    en: {
      why: "A small type scale, readable contrast, and shared tokens make a page feel calm and stay accessible instead of collecting random sizes and colours.",
      where: "Design systems, marketing pages, and any project that needs consistent branding and WCAG contrast.",
      analogy: "It is like a playlist built from a few repeated notes: a consistent rhythm feels intentional, while random notes feel noisy."
    },
    ta: {
      why: "Small type scale, readable contrast, shared tokens இருந்தா page calm-ஆவும் accessible-ஆவும் இருக்கும். Random sizes-உம் colours-உம் சேராது.",
      where: "Design systems, marketing pages, consistent branding-உம் WCAG contrast-உம் தேவைப்படுற எல்லா project-லயும்.",
      analogy: "சில notes-ஐ திரும்ப திரும்ப use பண்ணி build பண்ணின playlist மாதிரி - consistent rhythm intentional-ஆ தெரியும்; random notes noisy-ஆ தெரியும்."
    }
  },
  "2-4": {
    en: {
      why: "Flexbox arranges a header, hero, or card row along one axis and shares the leftover space, which covers most everyday layouts.",
      where: "Navigation bars, button groups, card rows, and responsive headers.",
      analogy: "It is like arranging books on a shelf: push them left, centre them, spread them out, or let them wrap to a second shelf."
    },
    ta: {
      why: "Flexbox header, hero, card row மாதிரி things-ஐ ஒரு axis-ல arrange பண்ணி மீதி space-ஐ share பண்ணும். Everyday layouts-க்கு இது போதும்.",
      where: "Navigation bars, button groups, card rows, responsive headers.",
      analogy: "Shelf-ல books arrange பண்றது மாதிரி - left, centre, space out, இல்ல wrap to next shelf."
    }
  },
  "3-1": {
    en: {
      why: "Grid controls rows and columns at the same time, so galleries and page skeletons line up predictably instead of by accident.",
      where: "Dashboards, photo galleries, and full page layouts with a header, sidebar, main area, and footer.",
      analogy: "It is like a spreadsheet or a chessboard: you set the rows and columns first, then place pieces in the cells."
    },
    ta: {
      why: "Grid rows-ஐயும் columns-ஐயும் ஒரே நேரத்தில control பண்ணும். அதனால galleries-உம் page skeletons-உம் accident-ஆ இல்லாம predictable-ஆ line up ஆகும்.",
      where: "Dashboards, photo galleries, header/sidebar/main/footer-ஓட full page layouts.",
      analogy: "Spreadsheet அல்லது chessboard மாதிரி - முதல்ல rows-ஐயும் columns-ஐயும் set பண்ணி, பிறகு cells-ல pieces வைக்கணும்."
    }
  },
  "3-2": {
    en: {
      why: "One layout that starts small and gains columns as space appears prevents sideways scrolling and wrong breakpoints on phones.",
      where: "Every production site, especially while testing at 320, 768, and 1440 pixels.",
      analogy: "It is like packing a small bag first and adding compartments only when the bag grows."
    },
    ta: {
      why: "Small-ஆ start பண்ணி space வரும்போது columns add பண்ணினா, sideways scrolling-உம் wrong breakpoints-உம் தடுக்கப்படும்.",
      where: "எல்லா production site-லயும், குறிப்பா 320, 768, 1440 pixels-ல test பண்ணும்போது.",
      analogy: "Small bag-ல முதல்ல pack பண்ணி, bag பெருசாகும்போது மட்டும் compartments add பண்றது மாதிரி."
    }
  },
  "3-3": {
    en: {
      why: "Accessibility makes the same page usable by keyboard, screen reader, and low-vision users, and it is testable rather than an optional final polish.",
      where: "Landing pages, forms, navigation, and every client project before launch.",
      analogy: "It is like a building with a ramp as well as stairs: the same destination should be reachable by more than one route."
    },
    ta: {
      why: "Accessibility ஒரே page-ஐ keyboard, screen reader, low-vision users-க்கும் use பண்ண வைக்கும். இது optional polish இல்ல, test பண்ணக்கூடியது.",
      where: "Landing pages, forms, navigation, launch-க்கு முன் ஒவ்வொரு client project.",
      analogy: "Building-ல stairs-ஓட ramp-உம் இருப்பது மாதிரி - ஒரே destination-ஐ ஒரு route-க்கு மேல அடையணும்."
    }
  },
  "4-1": {
    en: {
      why: "Every program stores and compares values, and strict equality with typeof prevents the silent type-coercion bugs beginners hit first.",
      where: "Reading form input, calculating totals, and checking data before rendering it.",
      analogy: "It is like labelled jars in a kitchen: the label is the variable, the contents are the value, and the type tells sugar from salt."
    },
    ta: {
      why: "ஒவ்வொரு program-உம் values-ஐ store பண்ணி compare பண்ணும். Strict equality-உம் typeof-உம் beginners முதல்ல பாக்குற silent type-coercion bugs-ஐ தடுக்கும்.",
      where: "Form input படிக்கும்போது, totals calculate பண்ணும்போது, data render பண்றதுக்கு முன் check பண்ணும்போது.",
      analogy: "Kitchen-ல label ஒட்டின jars மாதிரி - label variable, உள்ள content value, type எது sugar எது salt என்பதை சொல்லும்."
    }
  },
  "4-2": {
    en: {
      why: "Programs need to choose between paths, and understanding truthiness and operator order keeps those decisions correct.",
      where: "Form validation, pricing rules, access checks, and status messages in the UI.",
      analogy: "It is like a train switchyard: the first matching track sends the train down one route and the rest are skipped."
    },
    ta: {
      why: "Programs paths-க்கு இடையில choose பண்ணணும். Truthiness-ஐயும் operator order-ஐயும் புரிஞ்சா அந்த decisions correct-ஆ இருக்கும்.",
      where: "Form validation, pricing rules, access checks, UI-ல status messages.",
      analogy: "Train switchyard மாதிரி - முதல் matching track train-ஐ ஒரு route-ல அனுப்பும், மற்றவை skip ஆகும்."
    }
  },
  "4-3": {
    en: {
      why: "Real data arrives in lists, and loops plus array methods let you visit, filter, and combine items without repeating code.",
      where: "Rendering lists, totalling prices, and transforming API results.",
      analogy: "It is like processing a stack of forms one at a time, or using a stamp, a sieve, and a calculator on the same stack."
    },
    ta: {
      why: "Real data lists-ஆ தான் வரும். Loops-உம் array methods-உம் items-ஐ visit பண்ணி, filter பண்ணி, combine பண்ண code repeat பண்ணாம help பண்ணும்.",
      where: "Lists render பண்ணும்போது, prices total பண்ணும்போது, API results-ஐ transform பண்ணும்போது.",
      analogy: "Forms stack-ஐ ஒவ்வொன்னா process பண்றது மாதிரி, இல்ல அதே stack-ல stamp, sieve, calculator use பண்றது மாதிரி."
    }
  },
  "4-4": {
    en: {
      why: "Functions turn repeated steps into reusable, testable tools, and scope keeps their variables from leaking into unrelated code.",
      where: "Calculation helpers, event handlers, and callbacks passed to array methods.",
      analogy: "It is like a recipe card: give it ingredients as arguments, it returns a dish, and its counter space is only for that recipe."
    },
    ta: {
      why: "Functions repeat ஆகுற steps-ஐ reusable, testable tools-ஆ மாத்தும். Scope அவங்க variables வேற code-ல leak ஆகாம protect பண்ணும்.",
      where: "Calculation helpers, event handlers, array methods-க்கு pass பண்ற callbacks.",
      analogy: "Recipe card மாதிரி - ingredients (arguments) கொடுத்தா dish (return value) தரும்; அதன் counter space (scope) அந்த recipe-க்கு மட்டும்."
    }
  },
  "4-5": {
    en: {
      why: "Objects model one record, arrays of objects model real data, and a pure calculate function keeps the maths testable apart from the buttons.",
      where: "Shopping carts, dashboards, and any app that separates business logic from its interface.",
      analogy: "It is like a calculator's brain versus its keypad: the brain still does the maths even if the buttons are redesigned."
    },
    ta: {
      why: "Objects ஒரு record-ஐ model பண்ணும், objects array real data-ஐ model பண்ணும். Pure calculate function maths-ஐ buttons-லிருந்து தனியா வைத்து test பண்ண உதவும்.",
      where: "Shopping carts, dashboards, business logic-ஐ interface-லிருந்து separate பண்ற எல்லா app-லயும்.",
      analogy: "Calculator brain-உம் keypad-உம் மாதிரி - buttons redesign ஆனாலும் brain maths பண்ணும்."
    }
  },
  "5-1": {
    en: {
      why: "The DOM is the live page as a tree of objects, so selecting and changing it safely is how JavaScript makes anything happen on screen.",
      where: "Updating a status message, opening a panel, adding a list row, and every interactive component.",
      analogy: "It is like editing a document through its outline: find a paragraph, change its text, then insert or delete a section."
    },
    ta: {
      why: "DOM என்பது live page-ஐ objects tree-ஆ பாக்குறது. அதை safely select பண்ணி change பண்றது தான் JavaScript-ல screen-ல எதையும் நடக்க வைக்கும் வழி.",
      where: "Status message update பண்ணும்போது, panel open பண்ணும்போது, list row add பண்ணும்போது, எல்லா interactive component-லயும்.",
      analogy: "Document-ஐ அதன் outline வழியா edit பண்றது மாதிரி - paragraph find பண்ணி, text change பண்ணி, section insert அல்லது delete பண்றது."
    }
  },
  "5-2": {
    en: {
      why: "Events are how a page reacts to clicks and typing, and preventDefault plus delegation keep forms and long lists behaving correctly.",
      where: "Search boxes, signup forms, keyboard shortcuts, and lists with many repeating buttons.",
      analogy: "It is like a receptionist listening for arrivals: one desk can handle every visitor instead of putting a bell on every door."
    },
    ta: {
      why: "Events தான் page clicks-க்கும் typing-க்கும் react பண்ண வைக்கும். preventDefault-உம் delegation-உம் forms-ஐயும் long lists-ஐயும் correct-ஆ நடத்தும்.",
      where: "Search boxes, signup forms, keyboard shortcuts, நிறைய repeat buttons இருக்குற lists.",
      analogy: "Receptionist visitors-ஐ கவனிக்கிறது மாதிரி - ஒவ்வொரு door-லயும் bell வைக்காம ஒரே desk-ல எல்லாரையும் handle பண்ணலாம்."
    }
  },
  "5-3": {
    en: {
      why: "Keeping state separate from the DOM and rendering from one array stops rows going stale when items are added, toggled, or filtered.",
      where: "To-do lists, dashboards, carts, and any UI that displays a changing collection.",
      analogy: "It is like wiping and rewriting a whiteboard from a master notebook, so the board can never disagree with the source."
    },
    ta: {
      why: "State-ஐ DOM-லிருந்து separate-ஆ வைத்து ஒரே array-லிருந்து render பண்ணினா, items add, toggle, filter பண்ணும்போது rows stale ஆகாது.",
      where: "To-do lists, dashboards, carts, மாறுற collection-ஐ காட்டுற எல்லா UI.",
      analogy: "Master notebook-லிருந்து whiteboard-ஐ wipe பண்ணி மீண்டும் எழுதுவது மாதிரி - board source-ஓட எப்பவும் match ஆகும்."
    }
  },
  "5-4": {
    en: {
      why: "The project proves that one state-and-render pattern can power two different apps, from a to-do list to a quiz.",
      where: "Task managers, survey screens, and simple game or learning interfaces.",
      analogy: "It is like using one cooking process for two dishes: prepare, cook, and plate, with only the ingredients changing."
    },
    ta: {
      why: "ஒரே state-and-render pattern to-do list-லிருந்து quiz வரை இரண்டு வேற apps-க்கு work ஆகும் என்பதை இந்த project prove பண்ணும்.",
      where: "Task managers, survey screens, simple game அல்லது learning interfaces.",
      analogy: "ஒரே cooking process-ல இரண்டு dishes செய்வது மாதிரி - prepare, cook, plate; மாறுவது ingredients மட்டும்."
    }
  },
  "6-1": {
    en: {
      why: "Slow work such as a network call must not freeze the page, and promises plus async/await let you write that waiting in readable order.",
      where: "Loading user profiles, fetching orders, and running several API calls in parallel.",
      analogy: "It is like a restaurant order slip: you get a receipt immediately, the kitchen works, and you collect the meal when it is ready."
    },
    ta: {
      why: "Network call மாதிரி slow work page-ஐ freeze பண்ணக்கூடாது. Promises-உம் async/await-உம் அந்த waiting-ஐ readable order-ல எழுத உதவும்.",
      where: "User profiles load பண்ணும்போது, orders fetch பண்ணும்போது, பல API calls parallel-ஆ run பண்ணும்போது.",
      analogy: "Restaurant order slip மாதிரி - உடனே receipt கிடைக்கும், kitchen work பண்ணும், meal ready ஆனதும் collect பண்ணலாம்."
    }
  },
  "6-2": {
    en: {
      why: "fetch is how a browser asks another computer for data, and checking response.ok plus keeping keys on a server prevents broken pages and stolen accounts.",
      where: "Weather, search, maps, and any app that reads a third-party API.",
      analogy: "It is like ordering by post: your letter goes out, a parcel returns with a status label, and you read the label before opening it."
    },
    ta: {
      why: "fetch தான் browser வேற computer-இடம் data கேட்குற வழி. response.ok-ஐ check பண்றதும் keys-ஐ server-ல வைப்பதும் broken pages-ஐயும் stolen accounts-ஐயும் தடுக்கும்.",
      where: "Weather, search, maps, third-party API படிக்குற எல்லா app-லயும்.",
      analogy: "Post-ல order பண்றது மாதிரி - letter போகும், status label-ஓட parcel வரும், open பண்றதுக்கு முன் label-ஐ படிக்கணும்."
    }
  },
  "6-3": {
    en: {
      why: "A request can be slow, return nothing, or fail, so designing all four states stops the interface from looking broken or frozen.",
      where: "Search results, dashboards, weather apps, and any data-driven screen.",
      analogy: "It is like a train departure board that shows delayed, cancelled, no trains, or the time instead of a blank space."
    },
    ta: {
      why: "Request slow-ஆ இருக்கலாம், ஒன்னும் return பண்ணாம இருக்கலாம், இல்ல fail ஆகலாம். நாலு states-ஐயும் design பண்ணா interface broken அல்லது frozen-ஆ தெரியாது.",
      where: "Search results, dashboards, weather apps, data-driven எல்லா screen.",
      analogy: "Train departure board மாதிரி - delayed, cancelled, no trains, இல்ல time-ஐ காட்டும்; blank space காட்டாது."
    }
  },
  "6-4": {
    en: {
      why: "localStorage lets a small app remember a choice after a refresh, and saving only stable preferences keeps the stored data useful rather than stale.",
      where: "Remembering the last city, theme, or unit preference in a weather app.",
      analogy: "It is like a sticky note on the fridge: quick to read and survives a restart, but not a safe place for passwords."
    },
    ta: {
      why: "localStorage small app-ஐ refresh-க்கு அப்புறமும் ஒரு choice-ஐ நினைவில் வைக்க உதவும். Stable preferences-ஐ மட்டும் save பண்ணா stored data useful-ஆ இருக்கும், stale ஆகாது.",
      where: "Weather app-ல last city, theme, unit preference நினைவில் வைப்பது.",
      analogy: "Fridge-ல ஒட்டின sticky note மாதிரி - வேகமா படிக்கலாம், restart-ஐ தாண்டி இருக்கும், ஆனா passwords-க்கு safe place இல்ல."
    }
  },
  "7-1": {
    en: {
      why: "A multi-page site is a system, and consistent folders, relative paths, and one shared shell stop links from breaking on a host.",
      where: "Portfolio sites, small business sites, and GitHub Pages deployments.",
      analogy: "It is like a filing cabinet with labelled drawers: if every page follows the same map, anyone can find any document."
    },
    ta: {
      why: "Multi-page site ஒரு system. Consistent folders, relative paths, ஒரே shared shell இருந்தா host-ல links break ஆகாது.",
      where: "Portfolio sites, small business sites, GitHub Pages deployments.",
      analogy: "Label ஒட்டின drawers உள்ள filing cabinet மாதிரி - எல்லா page-உம் ஒரே map follow பண்ணினா எந்த document-ஐயும் யாரும் find பண்ணலாம்."
    }
  },
  "7-2": {
    en: {
      why: "A site that only works with a mouse and fast internet loses people, and the same audit catches both access and performance problems.",
      where: "Pre-launch checks on every client project, including Lighthouse on a mobile setting.",
      analogy: "It is like a pre-flight checklist: the same short list catches problems that would otherwise appear only after takeoff."
    },
    ta: {
      why: "Mouse-உம் fast internet-உம் மட்டும் இருந்தா work ஆகுற site people-ஐ lose பண்ணும். ஒரே audit accessibility-ஐயும் performance-ஐயும் சேர்த்து பிடிக்கும்.",
      where: "ஒவ்வொரு client project-ன் launch-க்கு முன் check, mobile setting-ல Lighthouse உடன்.",
      analogy: "Pre-flight checklist மாதிரி - அதே short list பிறகு வர பிரச்சினைகளை முன்கூட்டியே பிடிக்கும்."
    }
  },
  "7-3": {
    en: {
      why: "Version control and deployment turn local files into a public site you can share, update, and roll back.",
      where: "Publishing a portfolio on GitHub Pages and documenting it with a README.",
      analogy: "It is like saving a document with version history and then printing it for the world: the laptop file is not shipped until it is published."
    },
    ta: {
      why: "Version control-உம் deployment-உம் local files-ஐ share பண்ண, update பண்ண, roll back பண்ண public site-ஆ மாத்தும்.",
      where: "Portfolio-ஐ GitHub Pages-ல publish பண்ணி README-ல document பண்றது.",
      analogy: "Version history-ஓட document-ஐ save பண்ணி, பிறகு world-க்கு print பண்றது மாதிரி - laptop-ல இருக்குற file publish ஆகுற வரை ship ஆகாது."
    }
  }
};
