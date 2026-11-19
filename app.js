const main = document.querySelector('#inhoud');
const sidebar = document.querySelector('#sidebar');
const topbar = document.querySelector('#topbar');
const dialog = document.querySelector('#dialog');
const announcement = document.querySelector('#announcement');
const state = loadGrowthState();

const roles = {
  leerling: { label: 'Leerling', home: 'overzicht', menu: [
    ['overzicht', 'Overzicht', 'home'],
    ['verhalen', 'Leesopdrachten', 'book'],
    ['monster', 'Monsteratelier', 'monster'],
    ['klasmonster', 'Klasmonster', 'users'],
    ['voortgang', 'Mijn voortgang', 'chart']
  ] },
  leerkracht: { label: 'Leerkracht', user: 'Mevr. Peeters', initials: 'MP', home: 'klas', menu: [
    ['klas', 'Mijn klas', 'users'],
    ['opdrachten', 'Klasopdrachten', 'book'],
    ['klasmonster', 'Klasmonster', 'monster'],
    ['instellingen', 'Klasinstellingen', 'settings']
  ] },
  ouder: { label: 'Ouder', home: 'voortgang', menu: [
    ['voortgang', 'Voortgang', 'chart'],
    ['resultaten', 'Leesresultaten', 'book'],
    ['klasmonster', 'Klasmonster', 'monster']
  ] }
};

const iconPaths = {
  home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z"/><path d="M9 21v-7h6v7"/>',
  book: '<path d="M12 6C9 3.7 5.8 4 3 5v14c3.2-1 6.1-.9 9 1 2.9-1.9 5.8-2 9-1V5c-2.8-1-6-1.3-9 1z"/><path d="M12 6v14M6 8.7c1.3-.3 2.4-.1 3 .2m6 0c.6-.3 1.7-.5 3-.2"/>',
  monster: '<path d="M6 9C3 8 2 5 3.5 3.5c.4 2 2 3.5 4 4a10 10 0 0 1 9 0c2-.5 3.6-2 4-4C22 5 21 8 18 9c1.5 1.5 2 3.1 2 5.3 0 4.1-3.4 6.2-8 6.2s-8-2.1-8-6.2c0-2.2.5-3.8 2-5.3z"/><path d="M8.5 13.2h.1m6.8 0h.1m-5 3c.9 1 2.1 1 3 0" stroke-width="2.5"/>',
  chart: '<path d="M3 3v17a1 1 0 0 0 1 1h17M8 16v-4m5 4V8m5 8V5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m17 0v-2a4 4 0 0 0-3-3.9"/><circle cx="10" cy="7.5" r="4"/><path d="M16.5 4a3.8 3.8 0 0 1 0 7.2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m9 3-.7 2.8L6 7l-2.7-.8L2 9l2 2v2l-2 2 1.3 2.8L6 17l2.3 1.2L9 21h6l.7-2.8L18 17l2.7.8L22 15l-2-2v-2l2-2-1.3-2.8L18 7l-2.3-1.2L15 3z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  back: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  star: '<path d="M12 2.8l2.6 5.8 6.3.7-4.7 4.2 1.3 6.1-5.5-3.1-5.5 3.1 1.3-6.1-4.7-4.2 6.3-.7z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" stroke-width="2.4"/>',
  spark: '<path d="M12 2c1.6 6.5 3.5 8.4 10 10-6.5 1.6-8.4 3.5-10 10C10.4 15.5 8.5 13.6 2 12 8.5 10.4 10.4 8.5 12 2z"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>'
};

function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Wijzigingen blijven tijdens de huidige sessie beschikbaar.
  }
}

function player() {
  return state.students[state.activeStudent];
}

function currentStudent() {
  return demoReaders.find(reader => reader.id === state.activeStudent);
}

function allStories() {
  return [...stories, ...state.custom];
}

function readRoute() {
  const [requestedRole, requestedPage, id] = location.hash.slice(1).split('/');
  const role = Object.hasOwn(roles, requestedRole) ? requestedRole : 'leerling';
  const page = requestedPage || roles[role].home;
  return { role, page, story: allStories().find(story => story.id === id) };
}

function href(role, page = roles[role].home, id) {
  return `#${role}/${page}${id ? `/${id}` : ''}`;
}

function navigate(role, page, id) {
  location.hash = href(role, page, id);
}

function say(message) {
  announcement.textContent = '';
  requestAnimationFrame(() => { announcement.textContent = message; });
}

function artwork(name, className, level = 3) {
  return `<canvas class="${className}" data-art="${name}" data-level="${level}" width="800" height="480" aria-hidden="true"></canvas>`;
}

function meter(value, max, label) {
  return `<progress class="meter" max="${max}" value="${value}" aria-label="${label}"></progress>`;
}

function latestResult(id) {
  return player().entries.findLast(entry => entry.id === id);
}

function getProgress() {
  return personalGrowth(state, state.activeStudent);
}

function draftFor(story) {
  const { drafts } = player();
  if (!drafts[story.id]) {
    drafts[story.id] = {
      step: 'lezen', index: 0, answers: Array(story.questions.length).fill(null), updated: Date.now()
    };
    save();
  }
  return drafts[story.id];
}

function resumeLink(story) {
  return href('leerling', player().drafts[story.id]?.step ?? 'lezen', story.id);
}

function navigation(route) {
  const { role, page } = route;
  const profile = roles[role];
  const student = currentStudent();
  const person = role === 'leerkracht' ? profile.user : role === 'ouder' ? `Ouder van ${student.name}` : student.name;
  const initials = role === 'leerkracht' ? profile.initials : role === 'ouder' ? `O${student.initials[0]}` : student.initials;
  const tone = role === 'leerkracht' ? 'sage' : student.tone;
  const activePage = role === 'leerling' && ['lezen', 'vragen', 'resultaat', 'nakijken'].includes(page) ? 'verhalen' : page;
  const progress = getProgress();
  const activeLabel = profile.menu.find(([key]) => key === activePage)?.[1] ?? profile.menu[0][1];

  sidebar.innerHTML = `<a class="brand" href="${href(role)}">
    <span class="brand-mark">${icon('monster', 25)}</span><span>Klassemonster</span>
  </a>
  <nav class="main-nav" aria-label="Hoofdmenu">
    ${profile.menu.map(([key, label, image]) => `<a href="${href(role, key)}" ${key === activePage ? 'aria-current="page"' : ''}>${icon(image)}<span>${label}</span></a>`).join('')}
  </nav>
  <div class="sidebar-bottom">
    ${role === 'leerling' ? `<a class="side-progress" href="${href('leerling', 'monster')}"><span>${icon('spark', 17)} Level ${progress.level}</span><strong>${progress.xp} / ${LEVEL_XP} XP</strong></a>` : ''}
    <p><span class="class-dot" aria-hidden="true"></span>Klas ${escapeHTML(state.className)} <span class="sidebar-divider" aria-hidden="true">·</span> Eerste middelbaar</p>
  </div>`;

  topbar.innerHTML = `<div class="breadcrumbs">${profile.label}<span aria-hidden="true">/</span><strong>${activeLabel}</strong></div>
    <details class="role-switch">
      <summary aria-label="Wissel profiel of rol. ${person}, ${profile.label}"><span class="avatar ${tone}">${initials}</span><span class="profile-label"><strong>${person}</strong><small>${profile.label}</small></span>${icon('chevron', 17)}</summary>
      <div class="role-menu">
        ${role !== 'leerkracht' ? `<label for="student-switch">Demoleerling
          <select id="student-switch">${demoReaders.map(reader => `<option value="${reader.id}" ${reader.id === student.id ? 'selected' : ''}>${reader.name}</option>`).join('')}</select>
        </label>` : ''}
      <nav aria-label="Wissel rol"><p>Wissel rol</p>
        ${Object.entries(roles).map(([key, entry]) => `<a href="${href(key)}" ${key === role ? 'aria-current="true"' : ''}>${entry.label}
          ${key === role ? icon('check', 16) : ''}</a>`).join('')}
      </nav></div>
    </details>`;
}

function pageHeading(title, subtitle, action = '') {
  return `<div class="page-heading"><div><h1>${title}</h1>${subtitle ? `<p>${subtitle}</p>` : ''}</div>${action}</div>`;
}

function meta(story, className = '') {
  return `<div class="meta ${className}"><span class="chip ${story.art}">${escapeHTML(story.category)}</span>
    <span>${icon('clock', 15)} ${story.minutes} min</span><span class="difficulty">${story.difficulty ?? 'Verder'}</span></div>`;
}

function storyStatus(story) {
  if (player().drafts[story.id]) return '<span class="status-chip">Bezig</span>';
  const done = latestResult(story.id);
  return done ? `<span class="status-chip done">${icon('check', 14)} ${done.correct}/${done.count}</span>` : '';
}

function bookmarkButton(story) {
  const saved = player().saved.includes(story.id);
  const label = saved ? 'Verwijder uit bewaard' : 'Bewaar voor later';
  return `<button class="icon-button bookmark-button" type="button" data-favorite="${story.id}"
    aria-pressed="${saved}" aria-label="${label}: ${escapeHTML(story.title)}" title="${label}">${icon('bookmark', 19)}</button>`;
}

function storyCard(story) {
  return `<article class="story-card">
    <a class="card-link" href="${resumeLink(story)}">
      <div class="story-cover ${story.art}">${artwork(story.art, 'cover-art')}</div>
      <div class="story-card-body">
        ${meta(story)}
        <h3>${escapeHTML(story.title)}</h3>
        <p>${escapeHTML(story.teaser)}</p>
        <div class="card-bottom"><span>${story.questions.length} ${story.questions.length === 1 ? 'vraag' : 'vragen'}</span>
          ${storyStatus(story)}<span class="card-arrow">${icon('arrow', 19)}</span></div>
      </div>
    </a>${bookmarkButton(story)}
  </article>`;
}

function featured(story) {
  const ongoing = Boolean(player().drafts[story.id]);
  return `<section class="featured">
    <div class="featured-copy">
      <div class="feature-eyebrow">${icon(ongoing ? 'book' : 'spark', 16)} ${ongoing ? 'Je bent al begonnen' : 'Uitgelicht'}</div>
      <h2>${escapeHTML(story.title)}</h2>
      <p>${escapeHTML(story.teaser)}</p>
      ${meta(story)}
      <a class="button primary" href="${resumeLink(story)}">${ongoing ? 'Ga verder' : 'Start leesopdracht'} ${icon('arrow', 17)}</a>
    </div>
    <div class="featured-art ${story.art}">${artwork(story.art, 'cover-art')}</div>
  </section>`;
}

function weeklyCard(progress) {
  const finished = progress.weekly >= state.goal;
  return `<section class="panel weekly-card">
    <div class="weekly-top"><span class="small-icon">${icon('target', 19)}</span><h2>Weekdoel</h2></div>
    <p><strong>${progress.weekly} van ${state.goal}</strong> teksten gelezen</p>
    <div class="weekly-progress" aria-label="${progress.weekly} van ${state.goal} teksten gelezen">${Array.from({ length: state.goal }, (_, index) => `<span class="${index < progress.weekly ? 'filled' : ''}" aria-hidden="true"></span>`).join('')}</div>
    ${finished ? '<p class="goal-feedback">Je hebt je weekdoel gehaald!</p>' : ''}
  </section>`;
}

function studentHome() {
  const progress = getProgress();
  const ongoing = Object.entries(player().drafts).sort((a, b) => b[1].updated - a[1].updated)[0]?.[0];
  const items = allStories();
  const selected = items.find(story => story.id === ongoing)
    ?? items.find(story => !latestResult(story.id)) ?? stories[0];
  const others = items.filter(story => story.id !== selected.id).slice(0, 2);
  return pageHeading(`Hey, ${currentStudent().name}!`, 'Ontdek nieuwe verhalen en laat je monster groeien.')
    + `<div class="dashboard-grid">
      <div class="dashboard-main">
        ${featured(selected)}
        <section class="story-section">
          <div class="section-heading"><h2>Verder ontdekken</h2><a class="text-link" href="${href('leerling', 'verhalen')}">Alle opdrachten ${icon('arrow', 17)}</a></div>
          <div class="story-grid">${others.map(storyCard).join('')}</div>
        </section>
      </div>
      <div class="dashboard-aside">${monsterCard(progress)}${classMonsterCard()}${weeklyCard(progress)}</div>
    </div>`;
}

const filters = ['Alles', 'Te doen', 'Bezig', 'Afgewerkt', 'Bewaard'];
let activeFilter = 'Alles';
let activeCategory = '';
let activeDifficulty = '';
let searchText = '';

function storyResults() {
  const query = searchText.trim().toLocaleLowerCase('nl');
  const items = allStories().filter(story => {
    if (activeCategory && story.category !== activeCategory) return false;
    if (activeDifficulty && (story.difficulty ?? 'Verder') !== activeDifficulty) return false;
    if (query && !`${story.title} ${story.teaser} ${story.category}`.toLocaleLowerCase('nl').includes(query)) return false;
    const draft = player().drafts[story.id];
    const done = latestResult(story.id);
    if (activeFilter === 'Te doen') return !draft && !done;
    if (activeFilter === 'Bezig') return Boolean(draft);
    if (activeFilter === 'Afgewerkt') return Boolean(done);
    if (activeFilter === 'Bewaard') return player().saved.includes(story.id);
    return true;
  });
  return `<p class="result-count" role="status">${items.length} ${items.length === 1 ? 'tekst' : 'teksten'}</p>
    ${items.length ? `<div class="story-grid all-stories">${items.map(storyCard).join('')}</div>`
      : '<p class="empty-state">Geen teksten gevonden. Pas je zoekterm of filters aan.</p>'}`;
}

function allStoriesScreen() {
  const categories = [...new Set(allStories().map(story => story.category))].sort((a, b) => a.localeCompare(b, 'nl'));
  return pageHeading('Leesbibliotheek', 'Zoek een onderwerp, kies een leesniveau of ga verder met een opdracht.')
    + `<div class="library-controls">
      <label class="search-control">${icon('search', 19)}<span class="visually-hidden">Zoek een tekst</span>
        <input id="story-search" type="search" placeholder="Zoek een tekst" maxlength="80" value="${escapeHTML(searchText)}"></label>
      <label><span class="visually-hidden">Genre</span>
        <select id="story-category"><option value="">Alle genres</option>${categories.map(category => `<option ${category === activeCategory ? 'selected' : ''}>${escapeHTML(category)}</option>`).join('')}</select></label>
      <label><span class="visually-hidden">Leesniveau</span>
        <select id="story-difficulty"><option value="">Alle niveaus</option>${['Start', 'Verder', 'Uitdaging'].map(level => `<option ${level === activeDifficulty ? 'selected' : ''}>${level}</option>`).join('')}</select></label>
    </div>`
    + `<div class="filters" aria-label="Filter opdrachten">
      ${filters.map(filter => `<button type="button" class="filter" data-filter="${filter}" aria-pressed="${filter === activeFilter}">${filter}</button>`).join('')}
    </div>
    <div id="story-results">${storyResults()}</div>`;
}

function refreshStoryResults() {
  const results = main.querySelector('#story-results');
  if (!results) return;
  results.innerHTML = storyResults();
  drawArtwork(results);
}

function readerSteps(active) {
  return `<ol class="reader-steps" aria-label="Stappen van de opdracht">
    ${['Lezen', 'Vragen', 'Nakijken'].map((label, index) => `<li ${index === active ? 'aria-current="step"' : ''}>
      <span>${index < active ? icon('check', 13) : index + 1}</span>${label}</li>`).join('')}
  </ol>`;
}

function readerHeader(story, active, title = story.title) {
  return `<a class="back-link text-link" href="${href('leerling', 'verhalen')}">${icon('back', 17)} Leesopdrachten</a>
    ${readerSteps(active)}
    ${pageHeading(escapeHTML(title), '')}`;
}

function paragraphs(story) {
  return story.paragraphs.map(text => `<p>${escapeHTML(text)}</p>`).join('');
}

function readingScreen(story) {
  const draft = draftFor(story);
  const setting = player().textSize;
  return `<div class="reading-layout">
    ${readerHeader(story, 0)}
    <div class="reading-controls">${meta(story)}
      <div class="type-controls" aria-label="Tekstgrootte">
        <button type="button" class="icon-button" data-text-size="-1" aria-label="Tekst verkleinen" ${setting === 0 ? 'disabled' : ''}>A−</button>
        <button type="button" class="icon-button" data-text-size="1" aria-label="Tekst vergroten" ${setting === 2 ? 'disabled' : ''}>A+</button>
        ${bookmarkButton(story)}
      </div>
    </div>
    <article class="panel reading-text size-${setting}" aria-label="Leestekst">${paragraphs(story)}</article>
    ${story.words.length ? `<details class="panel words"><summary>${icon('book', 19)} Woordenhulp ${icon('chevron', 16)}</summary>
      <dl>${story.words.map(([word, meaning]) => `<div><dt>${escapeHTML(word)}</dt><dd>${escapeHTML(meaning)}</dd></div>`).join('')}</dl>
    </details>` : ''}
    <div class="reader-actions">
      <span>${story.questions.length} ${story.questions.length === 1 ? 'vraag' : 'vragen'}</span>
      <a class="button primary" href="${href('leerling', 'vragen', story.id)}">${draft.step === 'vragen' ? 'Verder met de vragen' : 'Naar de vragen'} ${icon('arrow', 18)}</a>
    </div>
  </div>`;
}

function questionScreen(story) {
  const draft = draftFor(story);
  if (draft.step !== 'vragen') {
    draft.step = 'vragen';
    draft.updated = Date.now();
    save();
  }
  const question = story.questions[draft.index];
  const count = story.questions.length;
  const done = draft.index === count - 1;

  return `<div class="reading-layout">
    ${readerHeader(story, 1)}
    <section class="panel question-panel">
      <div class="question-meta"><strong>Vraag ${draft.index + 1} van ${count}</strong><span class="chip soft">${escapeHTML(question.skill)}</span></div>
      ${meter(draft.index + 1, count, 'Voortgang door de vragen')}
      <form id="question-form">
        <fieldset>
          <legend tabindex="-1">${escapeHTML(question.prompt)}</legend>
          ${question.options.map((option, index) => `<label class="answer">
            <input type="radio" name="answer" value="${index}" required ${draft.answers[draft.index] === index ? 'checked' : ''}>
            <span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHTML(option)}</span>
          </label>`).join('')}
        </fieldset>
        <div class="reader-actions">
          <button type="button" class="button secondary" data-action="previous-question">${icon('back', 17)} ${draft.index ? 'Vorige vraag' : 'Naar de tekst'}</button>
          <button type="submit" class="button primary">${done ? 'Indienen' : 'Volgende vraag'} ${icon(done ? 'check' : 'arrow', 18)}</button>
        </div>
      </form>
    </section>
    <details class="panel words"><summary>${icon('book', 19)} Tekst erbij nemen ${icon('chevron', 16)}</summary>
      <div class="reading-text size-${player().textSize}">${paragraphs(story)}</div>
    </details>
  </div>`;
}

function submitQuestion(story, answer) {
  const draft = draftFor(story);
  if (!Number.isInteger(answer) || answer < 0 || answer >= story.questions[draft.index].options.length) return;
  draft.answers[draft.index] = answer;
  if (draft.index < story.questions.length - 1) {
    draft.index += 1;
    draft.updated = Date.now();
    save();
    renderQuestion();
    return;
  }
  if (draft.answers.some(answer => answer === null)) return;

  const count = story.questions.length;
  const correct = draft.answers.filter((answer, index) => answer === story.questions[index].correct).length;
  const percent = Math.round(correct * 100 / count);
  const progressBefore = getProgress();
  const classBefore = classGrowth(state);
  const { entries, drafts } = player();
  const earlier = entries.filter(entry => entry.id === story.id);
  const priorXP = earlier.reduce((sum, entry) => sum + entry.xp, 0);
  const xp = Math.max(0, 30 + Math.round(percent / 5) - priorXP);
  const entry = { id: story.id, correct, count, percent, xp, answers: draft.answers, date: Date.now(), energy: earlier.length ? 0 : 1 };
  entries.push(entry);
  const individual = getProgress();
  const collective = classGrowth(state);
  if (individual.level > progressBefore.level) entry.newLevel = individual.level;
  if (collective.stage > classBefore.stage) entry.classAdvance = collective.active.name;
  delete drafts[story.id];
  save();
  navigate('leerling', 'resultaat', story.id);
}

function resultScreen(story, result) {
  return `<div class="reading-layout">
    ${readerHeader(story, 2, 'Opdracht afgerond')}
    <section class="panel result-panel">
      <div class="result-star">${icon(result.percent >= 60 ? 'star' : 'check', 34)}</div>
      <h2>${result.percent >= 60 ? `Goed gelezen, ${currentStudent().name}!` : 'Elke tekst helpt je groeien.'}</h2>
      <p>${escapeHTML(story.title)}</p>
      <div class="result-score"><strong>${result.correct}<span> / ${result.count}</span></strong><span>juist beantwoord</span></div>
      ${meter(result.percent, 100, 'Score')}
      <div class="result-rewards">
        <p class="result-xp">${icon('spark', 19)} ${result.xp ? `+${result.xp} XP voor ${escapeHTML(player().monsterName)}` : 'Je monster behoudt zijn verdiende XP'}</p>
        ${result.energy ? `<a class="result-xp class-reward" href="${href('leerling', 'klasmonster')}">${icon('users', 18)} +1 energie voor Atlas</a>` : ''}
      </div>
      ${result.newLevel ? `<p class="reward-detail">Je monster is gegroeid naar level ${result.newLevel}.</p>` : ''}
      ${result.classAdvance ? `<p class="reward-detail">Atlas is gegroeid tot ${escapeHTML(result.classAdvance)}!</p>` : ''}
      <div class="result-actions">
        <a class="button secondary" href="${href('leerling')}">Naar overzicht</a>
        <a class="button primary" href="${href('leerling', 'nakijken', story.id)}">Bekijk je antwoorden ${icon('arrow', 17)}</a>
      </div>
    </section>
  </div>`;
}

function reviewScreen(story, result) {
  return `<div class="reading-layout">
    ${readerHeader(story, 2, 'Je antwoorden')}
    <p class="review-intro">${escapeHTML(story.title)} · ${result.correct} van ${result.count} juist</p>
    <ol class="answer-review">
      ${story.questions.map((question, index) => {
        const selected = result.answers[index];
        const correct = selected === question.correct;
        return `<li class="panel review-card">
          <div class="review-meta"><span class="chip ${correct ? 'good' : 'retry'}">${correct ? icon('check', 14) + ' Juist' : 'Nog oefenen'}</span><span>${escapeHTML(question.skill)}</span></div>
          <h2>${escapeHTML(question.prompt)}</h2>
          <p><strong>Jouw antwoord</strong> ${escapeHTML(question.options[selected])}</p>
          ${correct ? '' : `<p><strong>Juiste antwoord</strong> ${escapeHTML(question.options[question.correct])}</p>`}
          <p class="feedback">${escapeHTML(question.feedback)}</p>
        </li>`;
      }).join('')}
    </ol>
    <div class="reader-actions">
      <a class="button secondary" href="${href('leerling', 'resultaat', story.id)}">${icon('back', 17)} Naar score</a>
      <a class="button primary" href="${href('leerling', 'verhalen')}">Volgende tekst ${icon('arrow', 17)}</a>
    </div>
  </div>`;
}

function recentResults() {
  const resultByStory = new Map();
  for (const result of [...player().entries].reverse()) {
    if (resultByStory.has(result.id)) continue;
    const story = allStories().find(story => story.id === result.id);
    if (story) resultByStory.set(result.id, { ...result, title: story.title });
  }
  return [...resultByStory.values(), ...sampleResults[state.activeStudent]];
}

function resultsList(role, limit = 5) {
  return `<ul class="results-list">
    ${recentResults().slice(0, limit).map(result => {
      const label = `<span class="result-book">${icon('book', 17)}</span><span>${escapeHTML(result.title)}</span><strong>${result.percent}%</strong>`;
      return `<li>${role === 'leerling' && result.id
        ? `<a class="result-row" href="${href('leerling', 'nakijken', result.id)}">${label}</a>`
        : `<div class="result-row">${label}</div>`}</li>`;
    }).join('')}
  </ul>`;
}

function stat(label, value, image, tone) {
  return `<div class="panel stat"><span class="stat-icon ${tone}">${icon(image, 21)}</span><div><dt>${label}</dt><dd>${value}</dd></div></div>`;
}

function progressScreen(role) {
  const progress = getProgress();
  const { name } = currentStudent();
  const isParent = role === 'ouder';
  const recentOnly = isParent && readRoute().page === 'resultaten';
  if (recentOnly) return pageHeading(`Leesresultaten van ${name}`, `Klas ${escapeHTML(state.className)}`)
    + `<section class="panel results-panel"><h2>Afgewerkte teksten</h2>${resultsList(role, allStories().length + sampleResults[state.activeStudent].length)}</section>`;

  return pageHeading(isParent ? `Voortgang van ${name}` : 'Mijn voortgang', isParent
    ? `Bekijk de leesresultaten en het weekdoel van ${name} in klas ${escapeHTML(state.className)}.`
    : 'Elke tekst telt. Hier zie je wat je al hebt bereikt.')
    + `<dl class="stats-grid">
      ${stat('Teksten gelezen', progress.totalRead, 'book', 'sage')}
      ${stat('Gemiddelde score', progress.average + '%', 'chart', 'lilac')}
      ${stat('Monsterlevel', progress.level, 'monster', 'sand')}
    </dl>
    <div class="progress-grid">
      <section class="panel results-panel"><h2>Laatste resultaten</h2>${resultsList(role)}</section>
      ${weeklyCard(progress)}
      <section class="panel trend-panel">
        <h2>Scores per opdracht</h2>
        <ol class="trend-chart">${recentResults().slice(0, 5).reverse().map(result => `<li>
          <div><span>${escapeHTML(result.title)}</span><strong>${result.percent}%</strong></div>
          ${meter(result.percent, 100, `Score voor ${escapeHTML(result.title)}`)}
        </li>`).join('')}</ol>
      </section>
    </div>${badgesPanel()}`;
}

function teacherScreen(page) {
  const className = escapeHTML(state.className);
  const newAssignment = `<button class="button primary" type="button" data-action="compose">${icon('plus', 19)} Nieuwe opdracht</button>`;
  if (page === 'opdrachten') {
    return pageHeading('Klasopdrachten', `Leesopdrachten voor klas ${className}.`, newAssignment)
      + `<section class="panel results-panel"><h2>Actieve opdrachten</h2>
        <ul class="class-stories">${allStories().map(story => `<li>
          <span class="result-book">${icon('book', 20)}</span>
          <div><strong>${escapeHTML(story.title)}</strong><p>${escapeHTML(story.category)} · ${story.questions.length} ${story.questions.length === 1 ? 'vraag' : 'vragen'}</p></div>
          <a class="text-link" href="${href('leerling', 'lezen', story.id)}">Bekijk als leerling ${icon('arrow', 16)}</a>
        </li>`).join('')}</ul>
      </section>`;
  }
  if (page === 'instellingen') {
    return pageHeading('Klasinstellingen', 'Pas de klasnaam en het leesdoel van de leerlingen aan.')
      + `<form class="panel settings-form" id="class-form">
        <label>Klasnaam <input name="className" maxlength="20" required value="${className}"></label>
        <label>Weekdoel <span>Aantal teksten dat een leerling per week probeert te lezen.</span>
          <input name="goal" type="number" min="1" max="7" step="1" required value="${state.goal}">
        </label>
        <p role="alert" class="form-error"></p>
        <button class="button primary" type="submit">Instellingen opslaan</button>
        <p class="settings-saved" role="status"></p>
      </form>`;
  }

  const readers = demoReaders.map(reader => {
    const progress = personalGrowth(state, reader.id);
    return { ...reader, read: progress.weekly, average: progress.average };
  });
  const average = Math.round(readers.reduce((sum, reader) => sum + reader.average, 0) / readers.length);
  return pageHeading(`Klas ${className}`, 'Bekijk de leesvoortgang van je leerlingen.', newAssignment)
    + `<dl class="stats-grid">
      ${stat('Leerlingen', readers.length, 'users', 'sage')}
      ${stat('Actieve opdrachten', allStories().length, 'book', 'lilac')}
      ${stat('Klasgemiddelde', average + '%', 'chart', 'sand')}
    </dl>
    <section class="panel table-panel">
      <div class="section-heading"><h2>Voortgang per leerling</h2><a class="text-link" href="${href('leerkracht', 'opdrachten')}">Naar klasopdrachten ${icon('arrow', 17)}</a></div>
      <div class="table-wrap"><table>
        <thead><tr><th scope="col">Leerling</th><th scope="col">Gemiddelde score</th><th scope="col">Weekdoel</th></tr></thead>
        <tbody>${readers.map(reader => `<tr>
          <th scope="row"><span class="avatar ${reader.tone}">${reader.initials}</span>${reader.name}</th>
          <td><strong>${reader.average}%</strong></td>
          <td><span>${reader.read} / ${state.goal} teksten</span>${meter(Math.min(reader.read, state.goal), state.goal, `Weekdoel van ${reader.name}`)}</td>
        </tr>`).join('')}</tbody>
      </table></div>
    </section>`;
}

function questionFields(id) {
  return `<fieldset data-question="${id}">
    <legend>Vraag <span data-number></span></legend>
    <label>Vraagtekst <input name="question-${id}" required maxlength="180"></label>
    <label>Juiste antwoord <input name="correct-${id}" required maxlength="170"></label>
    <label>Afleider 1 <input name="wrongA-${id}" required maxlength="170"></label>
    <label>Afleider 2 <input name="wrongB-${id}" required maxlength="170"></label>
    <label>Uitleg bij het juiste antwoord <textarea name="feedback-${id}" rows="2" required maxlength="350"></textarea></label>
    ${id > 0 ? `<button class="text-link remove-question" type="button" data-remove-question>Vraag verwijderen</button>` : ''}
  </fieldset>`;
}

let nextQuestion = 1;

function updateQuestionNumbers() {
  const questions = [...dialog.querySelectorAll('[data-question]')];
  questions.forEach((fields, index) => { fields.querySelector('[data-number]').textContent = index + 1; });
  const addButton = dialog.querySelector('[data-add-question]');
  addButton.disabled = questions.length >= 8;
}

function composeAssignment() {
  nextQuestion = 1;
  dialog.innerHTML = `<div class="dialog-heading">
    <div><h2 id="dialog-title">Nieuwe leesopdracht</h2><p>Voeg een tekst en één of meer meerkeuzevragen toe.</p></div>
    <button type="button" class="icon-button" data-close aria-label="Sluiten">${icon('close', 20)}</button>
  </div>
  <form id="assignment-form" class="compose-form">
    <label>Titel <input name="title" required maxlength="90" autofocus></label>
    <label>Leesniveau <select name="difficulty"><option>Start</option><option selected>Verder</option><option>Uitdaging</option></select></label>
    <label>Leestekst <textarea name="passage" rows="5" required maxlength="5000"></textarea></label>
    <div id="question-fields">${questionFields(0)}</div>
    <button class="button secondary" type="button" data-add-question>${icon('plus', 17)} Vraag toevoegen</button>
    <p class="form-error" role="alert"></p>
    <button class="button primary" type="submit">Opdracht plaatsen ${icon('check', 18)}</button>
  </form>`;
  updateQuestionNumbers();
  dialog.showModal();
}

function saveAssignment(form) {
  const values = new FormData(form);
  const text = key => String(values.get(key) ?? '').trim();
  const error = form.querySelector('.form-error');
  const title = text('title');
  const passage = text('passage');
  const questions = [];
  if (!title || !passage) {
    error.textContent = 'Vul een titel en een leestekst in.';
    return;
  }
  for (const fields of form.querySelectorAll('[data-question]')) {
    const { question: id } = fields.dataset;
    const prompt = text(`question-${id}`);
    const feedback = text(`feedback-${id}`);
    const options = [text(`correct-${id}`), text(`wrongA-${id}`), text(`wrongB-${id}`)];
    if (!prompt || !feedback || options.some(option => !option)) {
      error.textContent = 'Vul voor elke vraag de drie keuzes en de uitleg in.';
      return;
    }
    if (new Set(options.map(option => option.toLowerCase())).size !== options.length) {
      error.textContent = 'Gebruik bij elke vraag drie verschillende antwoordopties.';
      return;
    }
    const correct = (questions.length + 1) % options.length;
    [options[0], options[correct]] = [options[correct], options[0]];
    questions.push({ skill: 'Begrijpend lezen', prompt, feedback, options, correct });
  }

  state.custom.push({
    id: `klas-${Date.now()}-${state.custom.length}`, title, category: 'Klasopdracht', art: 'door',
    difficulty: ['Start', 'Verder', 'Uitdaging'].includes(text('difficulty')) ? text('difficulty') : 'Verder',
    minutes: Math.max(1, Math.ceil(passage.split(/\s+/).length / 125)),
    teaser: passage.length > 118 ? passage.slice(0, 118).trimEnd() + '…' : passage,
    words: [], paragraphs: passage.split(/\r?\n+/).map(line => line.trim()).filter(Boolean), questions
  });
  save();
  dialog.close();
  if (readRoute().page === 'opdrachten') render({ focus: true });
  else navigate('leerkracht', 'opdrachten');
  say(`“${title}” staat nu bij de klasopdrachten.`);
}

function studentScreen(page, story) {
  if (page === 'verhalen') return allStoriesScreen();
  if (page === 'monster') return monsterScreen();
  if (page === 'voortgang') return progressScreen('leerling');
  if (page === 'lezen' && story) return readingScreen(story);
  if (page === 'vragen' && story) return questionScreen(story);
  if (story && ['resultaat', 'nakijken'].includes(page)) {
    const result = latestResult(story.id);
    if (result) return page === 'resultaat' ? resultScreen(story, result) : reviewScreen(story, result);
    return allStoriesScreen();
  }
  return studentHome();
}

function render({ focus = false } = {}) {
  const route = readRoute();
  navigation(route);
  if (route.page === 'klasmonster') main.innerHTML = classMonsterScreen(route.role);
  else if (route.role === 'leerkracht') main.innerHTML = teacherScreen(route.page);
  else if (route.role === 'ouder') main.innerHTML = progressScreen('ouder');
  else main.innerHTML = studentScreen(route.page, route.story);
  drawArtwork(main);

  if (focus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function renderQuestion() {
  render({ focus: true });
  main.querySelector('legend')?.focus({ preventScroll: true });
}

main.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.filter) {
    activeFilter = button.dataset.filter;
    for (const filter of main.querySelectorAll('[data-filter]')) filter.setAttribute('aria-pressed', String(filter === button));
    refreshStoryResults();
  }
  if (button.dataset.textSize) {
    const profile = player();
    const old = profile.textSize;
    profile.textSize = Math.min(2, Math.max(0, old + Number(button.dataset.textSize)));
    main.querySelector('.reading-text').classList.replace(`size-${old}`, `size-${profile.textSize}`);
    for (const control of main.querySelectorAll('[data-text-size]')) {
      control.disabled = Number(control.dataset.textSize) < 0 ? profile.textSize === 0 : profile.textSize === 2;
    }
    if (button.disabled) main.querySelector('[data-text-size]:not(:disabled)').focus();
    save();
  }
  if (button.dataset.action === 'previous-question') {
    const { story } = readRoute();
    const draft = draftFor(story);
    if (draft.index === 0) navigate('leerling', 'lezen', story.id);
    else {
      draft.index -= 1;
      draft.updated = Date.now();
      save();
      renderQuestion();
    }
  }
  if (button.dataset.action === 'compose') composeAssignment();
  if (button.dataset.action === 'shuffle') shuffleMonster();
  if (button.dataset.monsterSlot) {
    activeMonsterSlot = button.dataset.monsterSlot;
    refreshAtelier(`[data-monster-slot="${activeMonsterSlot}"]`);
  }
  if (button.dataset.monsterOption) {
    const slot = monsterSlots.find(slot => slot.id === activeMonsterSlot);
    const choice = slot.items.find(([id]) => id === button.dataset.monsterOption);
    if (!choice || choice[2] > getProgress().level) return;
    player().look[slot.id] = choice[0];
    save();
    refreshAtelier(`[data-monster-option="${choice[0]}"]`);
    say(`${choice[1]} geselecteerd.`);
  }
  if (button.dataset.classVote) {
    const choice = classStyles.find(style => style.id === button.dataset.classVote);
    if (!choice || readRoute().role !== 'leerling' || classGrowth(state).stage === 0) return;
    const removed = state.votes[state.activeStudent] === choice.id;
    if (removed) delete state.votes[state.activeStudent];
    else state.votes[state.activeStudent] = choice.id;
    save();
    render();
    main.querySelector(`[data-class-vote="${choice.id}"]`)?.focus({ preventScroll: true });
    say(removed ? 'Je stem is verwijderd.' : `Je stem voor ${choice.name} is bewaard.`);
  }
  if (button.dataset.favorite) {
    const story = allStories().find(story => story.id === button.dataset.favorite);
    if (!story) return;
    const saved = player().saved;
    const index = saved.indexOf(story.id);
    if (index < 0) saved.push(story.id);
    else saved.splice(index, 1);
    save();
    if (readRoute().page === 'verhalen') {
      refreshStoryResults();
      (main.querySelector(`[data-favorite="${story.id}"]`) ?? main.querySelector('[data-filter][aria-pressed="true"]'))?.focus({ preventScroll: true });
    } else {
      const enabled = index < 0;
      const label = enabled ? 'Verwijder uit bewaard' : 'Bewaar voor later';
      button.setAttribute('aria-pressed', String(enabled));
      button.setAttribute('aria-label', `${label}: ${story.title}`);
      button.title = label;
    }
    say(index < 0 ? 'Tekst bewaard.' : 'Tekst verwijderd uit bewaard.');
  }
});

main.addEventListener('change', event => {
  if (event.target.id === 'story-category' || event.target.id === 'story-difficulty') {
    if (event.target.id === 'story-category') activeCategory = event.target.value;
    else activeDifficulty = event.target.value;
    refreshStoryResults();
    return;
  }
  if (event.target.name !== 'answer') return;
  const draft = draftFor(readRoute().story);
  draft.answers[draft.index] = Number(event.target.value);
  draft.updated = Date.now();
  save();
});

main.addEventListener('input', event => {
  if (event.target.id !== 'story-search') return;
  searchText = event.target.value;
  refreshStoryResults();
});

main.addEventListener('submit', event => {
  const form = event.target;
  if (form.id === 'question-form') {
    event.preventDefault();
    const answer = new FormData(form).get('answer');
    if (answer !== null) submitQuestion(readRoute().story, Number(answer));
  }
  if (form.id === 'class-form') {
    event.preventDefault();
    const values = new FormData(form);
    const className = values.get('className').trim();
    const goal = Number(values.get('goal'));
    if (!className || !Number.isInteger(goal) || goal < 1 || goal > 7) {
      form.querySelector('.form-error').textContent = 'Vul een klasnaam en een doel tussen 1 en 7 in.';
      return;
    }
    state.className = className;
    state.goal = goal;
    save();
    navigation(readRoute());
    form.querySelector('.form-error').textContent = '';
    form.querySelector('.settings-saved').textContent = 'Instellingen opgeslagen.';
  }
  if (form.id === 'monster-name-form') {
    event.preventDefault();
    const name = String(new FormData(form).get('monsterName') ?? '').trim();
    if (!name || name.length > 24) {
      form.querySelector('.form-error').textContent = 'Gebruik een naam van 1 tot 24 tekens.';
      return;
    }
    player().monsterName = name;
    save();
    refreshAtelier('#monster-name-form input');
    say('De naam van je monster is bewaard.');
  }
});

dialog.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-close')) dialog.close();
  if (button.hasAttribute('data-add-question')) {
    const fields = dialog.querySelector('#question-fields');
    fields.insertAdjacentHTML('beforeend', questionFields(nextQuestion));
    nextQuestion += 1;
    updateQuestionNumbers();
    fields.lastElementChild.querySelector('input').focus();
  }
  if (button.hasAttribute('data-remove-question')) {
    button.closest('fieldset').remove();
    updateQuestionNumbers();
    dialog.querySelector('[data-add-question]').focus();
  }
});

dialog.addEventListener('submit', event => {
  if (event.target.id !== 'assignment-form') return;
  event.preventDefault();
  saveAssignment(event.target);
});

topbar.addEventListener('click', event => {
  if (event.target.closest('.role-menu a')) topbar.querySelector('.role-switch').open = false;
});

topbar.addEventListener('change', event => {
  if (event.target.id !== 'student-switch' || !Object.hasOwn(state.students, event.target.value)) return;
  const { role, page } = readRoute();
  state.activeStudent = event.target.value;
  activeFilter = 'Alles';
  activeCategory = '';
  activeDifficulty = '';
  searchText = '';
  save();
  if (page === roles[role].home) render({ focus: true });
  else navigate(role, roles[role].home);
  say(`Demoleerling ${currentStudent().name} geselecteerd.`);
});

document.addEventListener('click', event => {
  const switcher = topbar.querySelector('.role-switch[open]');
  if (switcher && !switcher.contains(event.target)) switcher.open = false;
});

document.querySelector('[data-skip]').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});

window.addEventListener('hashchange', () => {
  if (dialog.open) dialog.close();
  render({ focus: true });
});

render();
