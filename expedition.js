const guideSteps = ['Ei', 'Monster', 'Lezen', 'Vraag', 'Groei'];

function starterEgg(id = state.activeStudent) {
  return !state.students[id].guide.hatched;
}

function expeditionHome() {
  const { step } = player().guide;
  const resumed = step > 0;
  return `<section class="expedition-hero">
    <div class="expedition-copy">
      <span class="expedition-label">${icon('spark', 16)} Startgids · 5 stappen</span>
      <h2>${resumed ? 'Je expeditie gaat verder' : 'Klaar voor je eerste expeditie?'}</h2>
      <p>Broed een monsterei uit, lees een kort verhaal en ontdek wat één antwoord doet voor jou en Atlas.</p>
      <a class="button primary" href="${href('leerling', 'start')}">${resumed ? 'Ga verder met de gids' : 'Start de gids'} ${icon('arrow', 18)}</a>
    </div>
    <div class="expedition-hero-art">${campArtwork()}</div>
  </section>`;
}

function campArtwork() {
  return '<img class="cover-art" src="assets/startkamp.jpg" width="1100" height="733" alt="" decoding="async">';
}

function guideTrack(step) {
  return `<ol class="guide-track" aria-label="Stappen van de startgids">${guideSteps.map((name, index) => `<li ${step === index ? 'aria-current="step"' : ''}>
    <span>${index < step ? icon('check', 16) : index + 1}</span><strong>${name}</strong>
  </li>`).join('')}</ol>`;
}

function guideArt(step) {
  const profile = player();
  if (step === 1) return `<div class="guide-art" id="guide-monster">${monsterCanvas(profile.look, getProgress().level, profile.monsterName)}</div>`;
  if (step === 4) {
    const growth = classGrowth(state);
    return `<div class="guide-art">${monsterCanvas(growth.look, growth.stage + 2, 'Atlas, het klasmonster', true)}</div>`;
  }
  return `<div class="guide-art">${step === 0 ? campArtwork() : artwork(step === 2 ? 'trail' : 'clue', 'cover-art')}</div>`;
}

function guideBack() {
  return '<button class="button secondary" type="button" data-guide-back>Vorige stap</button>';
}

function guideTask(step) {
  const profile = player();
  if (step === 0) {
    return `<span class="guide-kicker">1 / 5 · Bij het kamp</span>
      <h1>${profile.guide.hatched ? 'Maak je klaar voor vertrek' : 'Er zit iets in je ei'}</h1>
      <p>Met elk verhaal geef je jouw monster XP. Een tekst die je voor het eerst afwerkt, helpt ook Atlas, het grote monster van de klas.</p>
      <p>${profile.guide.hatched ? 'Bekijk straks wat er na één tekst verandert.' : 'Tik op de knop om je monster te laten uitkomen.'}</p>
      <div class="guide-actions"><button type="button" class="button primary" data-guide-next="hatch">${profile.guide.hatched ? 'Ga verder' : 'Broed mijn ei uit'} ${icon('arrow', 18)}</button></div>`;
  }
  if (step === 1) {
    const colors = monsterSlots.find(slot => slot.id === 'color').items.filter(([, , level]) => level <= 1);
    return `<span class="guide-kicker">2 / 5 · Eerste ontmoeting</span>
      <h1>Hoe heet je monster?</h1>
      <p>Kies een naam en een kleur. Je kunt beide later in het monsteratelier nog veranderen.</p>
      <form id="guide-identity">
        <label class="guide-name">Naam van je monster <input name="monsterName" maxlength="24" required value="${escapeHTML(profile.monsterName)}"></label>
        <fieldset class="guide-colors">
          <legend>Kleur</legend>
          ${colors.map(([id, label]) => `<label class="guide-color">
            <input type="radio" name="starterColor" value="${id}" ${profile.look.color === id ? 'checked' : ''}>
            <span class="swatch" style="--swatch:${monsterColors[id][0]}" aria-hidden="true"></span>${label}
          </label>`).join('')}
        </fieldset>
        <p role="alert" class="form-error"></p>
        <div class="guide-actions">${guideBack()}<button type="submit" class="button primary">Bewaar en ga verder ${icon('check', 17)}</button></div>
      </form>`;
  }
  if (step === 2) {
    return `<span class="guide-kicker">3 / 5 · Lezen</span>
      <h1>${guideStory.title}</h1>
      <p>Lees op je eigen tempo. Let op wat de groep bij de brug ziet.</p>
      <div class="guide-passage reading-text size-${profile.textSize}">${paragraphs(guideStory)}</div>
      <div class="guide-actions">${guideBack()}<button type="button" class="button primary" data-guide-next="read">Ik heb gelezen ${icon('arrow', 18)}</button></div>`;
  }
  if (step === 3) {
    const question = guideStory.questions[0];
    return `<span class="guide-kicker">4 / 5 · De aanwijzing</span>
      <h1>Welk detail helpt je?</h1>
      <p>Kies het antwoord dat je in het verhaal kunt terugvinden.</p>
      <form id="guide-question" class="question-panel guide-question">
        <fieldset>
          <legend>${escapeHTML(question.prompt)}</legend>
          ${question.options.map((answer, index) => `<label class="answer">
            <input name="answer" type="radio" value="${index}" required>
            <span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHTML(answer)}</span>
          </label>`).join('')}
        </fieldset>
        <p id="guide-hint" class="guide-hint" role="status"></p>
        <details class="guide-reread"><summary>${icon('book', 17)} Lees het verhaal opnieuw</summary>
          <div class="guide-passage reading-text size-${profile.textSize}">${paragraphs(guideStory)}</div>
        </details>
        <div class="guide-actions">${guideBack()}<button type="submit" class="button primary">Controleer mijn antwoord ${icon('check', 17)}</button></div>
      </form>`;
  }
  const result = latestResult(guideStory.id);
  const growth = classGrowth(state);
  return `<span class="guide-kicker">5 / 5 · Eerste spoor gevonden</span>
    <h1>Je expeditie is gestart!</h1>
    <p>${escapeHTML(guideStory.questions[0].feedback)}</p>
    <div class="guide-rewards">
      <div><span class="small-icon">${icon('spark', 20)}</span><div><strong>${result?.xp ? `+${result.xp} XP` : 'Gelezen'} voor ${escapeHTML(profile.monsterName)}</strong>
        <p>${getProgress().xp} / ${LEVEL_XP} XP voor het volgende level</p></div></div>
      <div><span class="small-icon">${icon('users', 20)}</span><div><strong>${result?.energy ? '+1 energie voor Atlas' : 'Atlas groeit met de klas'}</strong>
        <p>${result?.classAdvance ? `Atlas is nu een ${escapeHTML(result.classAdvance)}!` : `${growth.energy} energie samen verzameld`}</p></div></div>
    </div>
    <div class="guide-actions">
      <a class="button secondary" href="${href('leerling', 'klasmonster')}">Bekijk Atlas</a>
      <a class="button primary" href="${href('leerling', 'verhalen')}">Kies je volgende tekst ${icon('arrow', 18)}</a>
    </div>`;
}

function guideScreen() {
  const { step } = player().guide;
  return `<div class="guide-page">
    <a class="text-link" href="${href('leerling')}">${icon('back', 17)} Naar overzicht</a>
    ${guideTrack(step)}
    <div class="guide-grid">
      <section class="panel guide-task">${guideTask(step)}</section>
      <div class="guide-side">
        ${guideArt(step)}
        ${step === 2 ? '<p class="guide-side-note">Een aanwijzing is een detail dat je helpt begrijpen waarom iets gebeurt.</p>' : ''}
      </div>
    </div>
  </div>`;
}

function goGuideStep(step) {
  player().guide.step = step;
  save();
  render({ focus: true });
}

function guideClick(button) {
  if (readRoute().role !== 'leerling' || readRoute().page !== 'start') return false;
  const guide = player().guide;
  if (button.hasAttribute('data-guide-back') && guide.step >= 1 && guide.step <= 3) {
    goGuideStep(guide.step - 1);
    return true;
  }
  if (button.dataset.guideNext === 'hatch' && guide.step === 0) {
    guide.hatched = true;
    goGuideStep(1);
    say('Je monster is uit het ei gekomen.');
    return true;
  }
  if (button.dataset.guideNext === 'read' && guide.step === 2) {
    goGuideStep(3);
    return true;
  }
  return false;
}

function guideSubmit(form) {
  if (readRoute().role !== 'leerling' || readRoute().page !== 'start') return;
  if (form.id === 'guide-identity' && player().guide.step === 1) {
    const values = new FormData(form);
    const name = String(values.get('monsterName') ?? '').trim();
    if (!name || name.length > 24) {
      form.querySelector('.form-error').textContent = 'Schrijf een naam van 1 tot 24 tekens.';
      return;
    }
    const color = values.get('starterColor');
    if (color && monsterSlots.find(slot => slot.id === 'color').items.some(([id, , level]) => id === color && level === 1)) player().look.color = color;
    player().monsterName = name;
    goGuideStep(2);
  }
  if (form.id === 'guide-question' && player().guide.step === 3) {
    const answer = new FormData(form).get('answer');
    if (answer == null || Number(answer) !== guideStory.questions[0].correct) {
      form.querySelector('#guide-hint').textContent = 'Kijk nog eens naar het bord bij de brug. Wat betekent rood? Probeer opnieuw.';
      return;
    }
    if (!latestResult(guideStory.id)) recordResult(guideStory, [Number(answer)]);
    goGuideStep(4);
    say('Juist. Je hebt de startgids afgerond.');
  }
}

function habitatView(profile, level) {
  return `<details class="panel habitat-view" id="habitat-view">
    <summary>${icon('spark', 21)} <strong>Draai je kijkdoos</strong> ${icon('chevron', 17)}</summary>
    <p>Bekijk ${escapeHTML(profile.monsterName)} in zijn omgeving. Kies een kant om de lagen te zien bewegen.</p>
    <div class="diorama-scene">
      <div class="diorama-world">
        <div class="diorama-plane depth-back"><canvas class="cover-art" data-art="habitat" data-home="${profile.look.home}" width="800" height="480" aria-hidden="true"></canvas></div>
        <div class="diorama-plane depth-center">${monsterCanvas(profile.look, level, profile.monsterName, false, true)}</div>
        <div class="diorama-plane depth-front">${artwork('forefront', 'cover-art')}</div>
      </div>
    </div>
    <div class="diorama-controls" role="group" aria-label="Kies een kijkrichting">
      <button type="button" class="button secondary" data-tilt="-1" aria-pressed="false">Links</button>
      <button type="button" class="button secondary" data-tilt="0" aria-pressed="true">Voorkant</button>
      <button type="button" class="button secondary" data-tilt="1" aria-pressed="false">Rechts</button>
    </div>
  </details>`;
}

function tiltHabitat(button) {
  if (!button) return;
  const view = button.closest('.habitat-view');
  const angle = Number(button.dataset.tilt);
  if (!view || ![-1, 0, 1].includes(angle)) return;
  view.querySelector('.diorama-world').style.setProperty('--turn', `${angle * 14}deg`);
  for (const control of view.querySelectorAll('[data-tilt]')) control.setAttribute('aria-pressed', String(control === button));
}
