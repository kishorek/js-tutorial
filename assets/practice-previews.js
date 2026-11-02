window.PRACTICE_PREVIEWS = {
  "1-1": { mode: "html" },
  "1-2": { mode: "html" },
  "1-3": { mode: "html" },
  "7-2": { mode: "html", stripLeadingText: true },
  "7-1": { mode: "none" },

  "2-1": {
    mode: "css",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; background: #f7f2e7; }`,
    html: `<article class="card">
  <h2 class="card__title">Weekend plan</h2>
  <p class="card__text">Walk, read, and cook something new.</p>
</article>`
  },
  "2-2": {
    mode: "css",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; background: #f7f2e7; }`,
    html: `<article class="card">
  <h2>Focus timer</h2>
  <p>Twenty-five minutes of work, then a five-minute break.</p>
  <a class="button" href="#">Start</a>
</article>`
  },
  "2-3": {
    mode: "css",
    baseCss: `:root {
  --ink: #1c1a16; --muted: #5d574d; --paper: #f7f2e7; --card: #fffdf7;
  --accent: #14532d; --rule: #d8d0c0; --radius: 8px;
  --space-2: .5rem; --space-3: 1rem; --space-4: 1.5rem; --space-5: 2rem;
}
body { padding: 24px; }`,
    html: `<article class="article">
  <p class="article__meta">Notes · 4 min read</p>
  <h1 class="article__title">A quieter home page</h1>
  <p class="article__lede">Fewer colours, more space, and type you can read without leaning in.</p>
  <p>Start with one accent, one type scale, and a spacing system. Repeat them until the page feels calm.</p>
</article>`
  },
  "3-1": {
    mode: "css",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; background: #f7f2e7; }
.gallery > * { padding: 24px; background: #fffdf7; border: 1px solid #d8d0c0; border-radius: 8px; text-align: center; }`,
    html: `<div class="gallery">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
  <article class="card">Card 4</article>
  <article class="card">Card 5</article>
  <article class="card">Card 6</article>
</div>`
  },
  "3-2": {
    mode: "css",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; background: #f7f2e7; }
.split > * { padding: 24px; background: #fffdf7; border: 1px solid #d8d0c0; border-radius: 8px; }`,
    html: `<section class="split">
  <div><h2>Left column</h2><p>Some content that should stack on small screens.</p></div>
  <div><h2>Right column</h2><p>More content for the second column.</p></div>
</section>`
  },

  "4-1": { mode: "js" },
  "4-2": { mode: "js" },
  "4-3": { mode: "js" },
  "4-4": { mode: "js" },

  "5-1": {
    mode: "js",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; }
.is-highlighted { background: #fde68a; padding: 4px 8px; border-radius: 4px; display: inline-block; }
.old { padding: 8px; border: 1px solid #c98a7a; background: #f7e6e2; }`,
    html: `<h1 id="title">Original headline</h1>
<ul id="list"><li>Existing item</li></ul>
<p class="old">Remove me</p>`
  },
  "5-2": {
    mode: "js",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; max-width: 560px; }
label { display: block; margin: 10px 0 4px; }
textarea, input { width: 100%; padding: 8px; box-sizing: border-box; }
.is-over { color: #a1231d; font-weight: 700; }
form { margin-top: 12px; }
button { padding: 8px 12px; }`,
    html: `<label for="bio">Bio</label>
<textarea id="bio" rows="4"></textarea>
<p id="count">0 / 120 characters</p>
<form id="profile">
  <label for="name">Name</label>
  <input id="name" name="name" value="Maya">
  <label for="email">Email</label>
  <input id="email" name="email" value="maya@example.com">
  <button type="submit">Save</button>
</form>
<p id="summary"></p>`
  },
  "5-3": {
    mode: "js",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; max-width: 560px; }
form { display: flex; gap: 8px; align-items: end; margin-bottom: 16px; }
label { display: block; }
input { flex: 1; padding: 8px; }
ul { list-style: none; padding: 0; }
li { display: flex; gap: 8px; align-items: center; margin: 6px 0; padding: 8px; border: 1px solid #d8cfbc; border-radius: 4px; }
li.done span { text-decoration: line-through; opacity: .6; }
.empty { color: #6b6355; }`,
    html: `<form id="add-form">
  <div><label for="new-item">New item</label><input id="new-item" name="item"></div>
  <button type="submit">Add</button>
</form>
<ul id="list"></ul>`
  },

  "6-1": {
    mode: "js",
    prelude: `function loadProfile(id) {
  return new Promise(resolve => setTimeout(() => resolve({ id, name: "Maya" }), 300));
}
function loadPosts(profileId) {
  return new Promise(resolve => setTimeout(() => resolve([{ id: 1 }, { id: 2 }, { id: 3 }]), 300));
}`
  },
  "6-2": { mode: "js" },
  "6-3": {
    mode: "js",
    baseCss: `body { font-family: system-ui, sans-serif; padding: 24px; }`,
    html: `<h1>Weather</h1><p id="output">Idle</p>`
  }
};
