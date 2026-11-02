window.COURSE_TA = {
  title: "The Web Builder's Field Guide",
  tagline: "HTML, CSS, JavaScript ஆகியவற்றை ஒவ்வொரு பாடமாகக் கற்றுக்கொள்ளும் நேரடி பயிற்சி பாடத்திட்டம்.",
  modules: [
    {
      id: "01",
      title: "HTML: எலும்புக்கூடு",
      weeks: "வாரங்கள் 1–2",
      hours: "~14 மணி",
      goals: [
        "காலியான கோப்பிலிருந்து சரியான HTML5 எழுதுவது.",
        "தலைப்புகள், இணைப்புகள், படங்கள், பட்டியல்களைக் கொண்டு உரையைக் கட்டமைப்பது.",
        "அனைவரும் பயன்படுத்தக்கூடிய படிவங்களை உருவாக்கி, DevTools-ல் DOM-ஐப் படிப்பது."
      ],
      prereq: "எதுவுமில்லை. ஒரு உலாவி மற்றும் ஒரு உரைத் தொகுப்பான்.",
      project: "என்னைப் பற்றி பக்கம் → இணைக்கப்பட்ட சமையல் குறிப்பு பக்கம்",
      exit: "புதிதாகச் சரியான இரண்டு பக்க தளத்தை உருவாக்கி, head மற்றும் body வேறுபாட்டை விளக்குவது.",
      lessons: [
        { id: "1-1", num: "1.1", title: "உங்கள் முதல் பக்கம்" },
        { id: "1-2", num: "1.2", title: "இணைப்புகள், படங்கள், பட்டியல்கள்" },
        { id: "1-3", num: "1.3", title: "அட்டவணைகள், படிவங்கள், அர்த்தமுள்ள கட்டமைப்பு" },
        { id: "1-4", num: "1.4", title: "திட்டப்பணி: என்னைப் பற்றி → சமையல் குறிப்பு பக்கம்", project: true }
      ]
    },
    {
      id: "02",
      title: "CSS: தோல்",
      weeks: "வாரங்கள் 3–4",
      hours: "~16 மணி",
      goals: [
        "selectors, cascade, specificity ஆகியவற்றை நோக்கத்துடன் பயன்படுத்துவது.",
        "box model, இடைவெளி, நிறம், எழுத்துரு ஆகியவற்றில் தேர்ச்சி பெறுவது.",
        "Flexbox மூலம் layout உருவாக்கி, நேரடியாக styles-ஐ debug செய்வது."
      ],
      prereq: "தொகுதி 1: சரியான HTML மற்றும் சரியான nesting.",
      project: "தனிப்பட்ட portfolio, பதிப்பு 1",
      exit: "பக்கவாட்டில் scroll இல்லாமல், ஒரு மாதிரியைப் போல பக்கத்தை style செய்வது.",
      lessons: [
        { id: "2-1", num: "2.1", title: "Selectors, cascade, specificity" },
        { id: "2-2", num: "2.2", title: "Box model மற்றும் இடைவெளி" },
        { id: "2-3", num: "2.3", title: "எழுத்துரு, நிறம், காட்சி தாளம்" },
        { id: "2-4", num: "2.4", title: "Flexbox + portfolio v1", project: true }
      ]
    },
    {
      id: "03",
      title: "Layout மற்றும் responsive design",
      weeks: "வாரங்கள் 5–6",
      hours: "~16 மணி",
      goals: [
        "CSS Grid மற்றும் mobile-first media queries பயன்படுத்துவது.",
        "சிறிய திரைகளில் வேலை செய்யும் navigation உருவாக்குவது.",
        "accessibility அடிப்படைகளைப் பயன்படுத்துவது: focus, contrast, labels."
      ],
      prereq: "தொகுதி 2: box model மற்றும் Flexbox.",
      project: "Responsive landing page",
      exit: "320, 768, 1440 pixel அளவுகளில் பக்கம் வேலை செய்ய வேண்டும்; பக்க அளவில் கிடைமட்ட scroll இருக்கக்கூடாது.",
      lessons: [
        { id: "3-1", num: "3.1", title: "CSS Grid" },
        { id: "3-2", num: "3.2", title: "Mobile-first responsive design" },
        { id: "3-3", num: "3.3", title: "Accessibility + landing page", project: true }
      ]
    },
    {
      id: "04",
      title: "JavaScript அடிப்படைகள்",
      weeks: "வாரங்கள் 7–8",
      hours: "~16 மணி",
      goals: [
        "values, variables, types, operators உடன் பணியாற்றுவது.",
        "conditionals, loops, functions, arrays, objects எழுதுவது.",
        "ஊகிக்காமல் console மூலம் debug செய்வது."
      ],
      prereq: "தொகுதி 1 HTML; தொகுதி 2 CSS அடிப்படைகள்.",
      project: "ஊடாடும் calculator",
      exit: "input பெற்று சரியான output திருப்பும் function ஒன்றை எழுதி debug செய்வது.",
      lessons: [
        { id: "4-1", num: "4.1", title: "Values, variables, types" },
        { id: "4-2", num: "4.2", title: "Conditionals மற்றும் logic" },
        { id: "4-3", num: "4.3", title: "Loops மற்றும் collections" },
        { id: "4-4", num: "4.4", title: "Functions மற்றும் scope" },
        { id: "4-5", num: "4.5", title: "Arrays, objects, மற்றும் calculator", project: true }
      ]
    },
    {
      id: "05",
      title: "DOM மற்றும் events",
      weeks: "வாரங்கள் 9–10",
      hours: "~16 மணி",
      goals: [
        "elements-ஐ பாதுகாப்பாகத் தேர்ந்தெடுத்து மாற்றுவது.",
        "clicks, input, form submission ஆகியவற்றைக் கையாள்வது.",
        "data-விலிருந்து பட்டியல்களை render செய்து எளிய state-ஐ நிர்வகிப்பது."
      ],
      prereq: "தொகுதி 4: functions, arrays, objects.",
      project: "To-do list + quiz app",
      exit: "தெரியும் ஒவ்வொரு control-ம் state அல்லது data-வை மாற்ற வேண்டும்; UI அதற்கேற்ப புதுப்பிக்கப்பட வேண்டும்.",
      lessons: [
        { id: "5-1", num: "5.1", title: "DOM-ஐ தேர்ந்தெடுத்து மாற்றுவது" },
        { id: "5-2", num: "5.2", title: "Events, input, forms" },
        { id: "5-3", num: "5.3", title: "State மற்றும் பட்டியல்களை render செய்வது" },
        { id: "5-4", num: "5.4", title: "To-do list + quiz app", project: true }
      ]
    },
    {
      id: "06",
      title: "Async மற்றும் APIs",
      weeks: "வாரங்கள் 11–12",
      hours: "~16 மணி",
      goals: [
        "fetch மற்றும் async/await மூலம் data பெறுவது.",
        "JSON படித்து loading, empty, error, success ஆகிய நிலைகளைக் கையாள்வது.",
        "localStorage மூலம் சிறிய அளவு data சேமிப்பது."
      ],
      prereq: "தொகுதி 5: events மற்றும் DOM புதுப்பிப்புகள்.",
      project: "வானிலை செயலி",
      exit: "நான்கு UI நிலைகளையும் கையாண்டு, console-ல் கையாளப்படாத error எதையும் விடக்கூடாது.",
      lessons: [
        { id: "6-1", num: "6.1", title: "Promises மற்றும் async/await" },
        { id: "6-2", num: "6.2", title: "fetch, JSON, மற்றும் API keys" },
        { id: "6-3", num: "6.3", title: "Loading, empty, error நிலைகள்" },
        { id: "6-4", num: "6.4", title: "Storage + வானிலை செயலி", project: true }
      ]
    },
    {
      id: "07",
      title: "வெளியிடுங்கள்",
      weeks: "வாரங்கள் 13–14",
      hours: "~18 மணி",
      goals: [
        "பல பக்க தளத்தைக் கட்டமைத்து பொதுவான patterns-ஐ மீண்டும் பயன்படுத்துவது.",
        "accessibility மற்றும் performance-ஐ audit செய்வது.",
        "Git பயன்படுத்தி, GitHub-ல் வெளியிட்டு, நேரடி தளத்தை deploy செய்வது."
      ],
      prereq: "தொகுதிகள் 1–6 மற்றும் முடிக்கப்பட்ட ஒரு திட்டப்பணி.",
      project: "Portfolio v2 + மூன்று பக்க தளம், deploy செய்யப்பட்டது",
      exit: "mobile-ல் வேலை செய்யும், audit-ஐத் தேர்ச்சி பெறும், GitHub-ல் ஆவணப்படுத்தப்பட்ட நேரடி URL.",
      lessons: [
        { id: "7-1", num: "7.1", title: "பல பக்க கட்டமைப்பு" },
        { id: "7-2", num: "7.2", title: "Accessibility மற்றும் performance audit" },
        { id: "7-3", num: "7.3", title: "Git, deploy, மற்றும் portfolio v2", project: true }
      ]
    }
  ]
};
