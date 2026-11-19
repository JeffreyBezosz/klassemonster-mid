let activeMonsterSlot = 'body';

function monsterCanvas(look, level, name, giant = false) {
  const attributes = monsterSlots.map(({ id }) => `data-${id}="${escapeHTML(look[id])}"`).join(' ');
  return `<canvas class="cover-art" data-art="custom-monster" data-level="${level}" data-giant="${giant}"
    ${attributes} width="800" height="480" role="img" aria-label="${escapeHTML(name)}"></canvas>`;
}

function monsterCard(progress) {
  const { look, monsterName } = player();
  return `<section class="panel monster-card">
    <h2>Mijn monster</h2>
    <div class="monster-picture">${monsterCanvas(look, progress.level, monsterName)}<span class="level-tag">Level ${progress.level}</span></div>
    <div class="monster-level"><strong>${escapeHTML(monsterName)}</strong><span>${progress.xp} / ${LEVEL_XP} XP</span></div>
    ${meter(progress.xp, LEVEL_XP, 'XP voor het volgende level')}
    <a class="text-link" href="${href('leerling', 'monster')}">Naar het monsteratelier ${icon('arrow', 17)}</a>
  </section>`;
}

function monsterScreen() {
  const progress = getProgress();
  return pageHeading('Monsteratelier', 'Je monster groeit met elke leesopdracht. Kies hoe het eruitziet.')
    + `<div id="atelier">${atelierContent(progress)}</div>`;
}

function atelierContent(progress = getProgress()) {
  const profile = player();
  const slot = monsterSlots.find(slot => slot.id === activeMonsterSlot);
  const unlocked = monsterSlots.flatMap(slot => slot.items).filter(([, , level]) => level <= progress.level).length;
  const total = monsterSlots.flatMap(slot => slot.items).length;
  return `<div class="studio-grid">
    <section class="panel studio-preview">
      <div class="monster-picture">${monsterCanvas(profile.look, progress.level, profile.monsterName)}<span class="level-tag">Level ${progress.level} · ${progress.stage.name}</span></div>
      <div class="studio-identity"><h2>${escapeHTML(profile.monsterName)}</h2>
        <strong>${progress.xp} / ${LEVEL_XP} XP</strong></div>
      ${meter(progress.xp, LEVEL_XP, 'XP voor het volgende level')}
      <p class="muted">${progress.stage.description} Nog ${LEVEL_XP - progress.xp} XP tot level ${progress.level + 1}.</p>
      <form class="monster-name-form" id="monster-name-form">
        <label>Naam <input name="monsterName" maxlength="24" required value="${escapeHTML(profile.monsterName)}"></label>
        <button class="button secondary" type="submit">Bewaar naam</button>
        <p role="alert" class="form-error"></p>
      </form>
    </section>
    <section class="panel studio-tools">
      <div class="section-heading"><h2>Pas je monster aan</h2><span class="custom-count">${unlocked} van ${total} vrij</span></div>
      <div class="studio-tabs" role="group" aria-label="Onderdelen">
        ${monsterSlots.map(tab => `<button type="button" class="filter" data-monster-slot="${tab.id}" aria-pressed="${tab.id === slot.id}">${tab.label}</button>`).join('')}
      </div>
      <div class="studio-options" role="group" aria-label="${slot.label}">
        ${slot.items.map(([id, label, min]) => {
          const selected = profile.look[slot.id] === id;
          const swatch = slot.id === 'color' ? monsterColors[id][0] : slot.id === 'home' ? habitats[id][1] : '';
          return `<button type="button" class="studio-option" data-monster-option="${id}" aria-pressed="${selected}" ${progress.level < min ? 'disabled' : ''}>
            ${swatch ? `<span class="swatch" style="--swatch:${swatch}" aria-hidden="true"></span>` : ''}
            <span><strong>${label}</strong>${progress.level < min ? `<small>Vanaf level ${min}</small>` : ''}</span>
            ${selected ? icon('check', 16) : progress.level < min ? icon('lock', 15) : ''}
          </button>`;
        }).join('')}
      </div>
      <button class="button secondary shuffle-button" type="button" data-action="shuffle">${icon('spark', 18)} Verras me</button>
      <p class="studio-hint">Je keuzes worden meteen bewaard.</p>
    </section>
  </div>
  <section class="panel evolution-panel">
    <h2>Zo groeit je monster</h2>
    <ol class="milestones">
      ${growthStages.map((stage, index) => {
        const current = Math.min(progress.level, growthStages.length) === index + 1;
        return `<li class="${progress.level > index + 1 ? 'complete' : ''}" ${current ? 'aria-current="step"' : ''}>
          <span class="milestone-icon">${progress.level > index + 1 ? icon('check', 15) : index + 1}</span><strong>${stage.name}</strong>
        </li>`;
      }).join('')}
    </ol>
  </section>`;
}

function refreshAtelier(focusSelector) {
  const atelier = main.querySelector('#atelier');
  atelier.innerHTML = atelierContent();
  drawArtwork(atelier);
  if (focusSelector) atelier.querySelector(focusSelector)?.focus({ preventScroll: true });
}

function shuffleMonster() {
  const { level } = getProgress();
  const { look } = player();
  for (const slot of monsterSlots) {
    const choices = slot.items.filter(([id, , min]) => min <= level && id !== look[slot.id]);
    if (choices.length) look[slot.id] = choices[Math.floor(Math.random() * choices.length)][0];
  }
  save();
  refreshAtelier('[data-action="shuffle"]');
  say('Je monster heeft een nieuwe look.');
}

function classMeter(growth) {
  const end = growth.next?.energy ?? growth.active.energy;
  return meter(Math.min(growth.energy, end), end, 'Energie voor de volgende klasgroei');
}

function classMonsterCard() {
  const growth = classGrowth(state);
  return `<section class="panel class-mini">
    <div class="weekly-top"><span class="small-icon">${icon('users', 19)}</span><h2>Ons klasmonster</h2></div>
    <p><strong>Atlas</strong> · ${growth.active.name}</p>
    ${classMeter(growth)}
    <a class="text-link" href="${href('leerling', 'klasmonster')}">Bekijk Atlas ${icon('arrow', 17)}</a>
    </section>`;
}

function classRoster() {
  return `<section class="panel monster-roster">
    <h2>Monsters van de klas</h2>
    <ul>${demoReaders.map(reader => {
      const profile = state.students[reader.id];
      const { level } = personalGrowth(state, reader.id);
      return `<li><div class="roster-art">${monsterCanvas(profile.look, level, profile.monsterName)}</div>
        <strong>${escapeHTML(profile.monsterName)}</strong><span>Van ${reader.name}</span></li>`;
    }).join('')}</ul>
  </section>`;
}

function classMonsterScreen(role) {
  const growth = classGrowth(state);
  const stage = growth.stage + 1;
  const voted = state.votes[state.activeStudent];
  const closed = growth.stage === 0;
  const votingNote = closed
    ? 'De stemming gaat open zodra Atlas een Bosreus wordt.'
    : growth.tied ? 'Het staat gelijk. Atlas wacht op een duidelijke favoriet.'
      : growth.leader ? `${growth.leader.name} staat op kop en is nu te zien bij Atlas.`
        : 'Kies een accessoire voor Atlas. Elke leerling heeft één aanpasbare stem.';
  return pageHeading('Ons klasmonster', `Alle leerlingen van klas ${escapeHTML(state.className)} helpen Atlas groeien.`)
    + `<section class="class-hero">
      <div class="class-hero-info">
        <span class="class-stage">${icon('spark', 15)} Fase ${stage} · ${growth.active.name}</span>
        <h2>Atlas</h2>
        <p>Rond je een tekst voor het eerst af? Dan krijgt Atlas energie, ongeacht je score.</p>
        <div class="energy-total"><strong>${growth.energy}</strong> ${growth.next ? `/ ${growth.next.energy}` : ''} energie</div>
        ${classMeter(growth)}
        <p>${growth.next ? `Nog ${growth.next.energy - growth.energy} energie tot ${growth.next.name}.` : 'De klas heeft de hoogste groeifase bereikt!'}</p>
      </div>
      <div class="class-hero-art">${monsterCanvas(growth.look, growth.stage + 2, `Atlas als ${growth.active.name}`, true)}</div>
    </section>
    <div class="class-growth-grid">
      <section class="panel evolution-panel">
        <h2>Atlas in groei</h2>
        <ol class="milestones class-milestones">${classStages.map((phase, index) => `<li class="${growth.stage > index ? 'complete' : ''}" ${growth.stage === index ? 'aria-current="step"' : ''}>
          <span class="milestone-icon">${growth.stage > index ? icon('check', 15) : index + 1}</span>
          <strong>${phase.name}</strong><small>${phase.energy} energie</small>
        </li>`).join('')}</ol>
      </section>
      <section class="panel contribution-panel">
        <h2>${role === 'leerling' ? 'Jouw bijdrage' : 'Bijdrage van de klas'}</h2>
        ${role === 'leerling' ? `<p><strong>${growth.energyByStudent[state.activeStudent]}</strong> energie voor Atlas.</p>
          <a class="button primary" href="${href('leerling', 'verhalen')}">Kies een tekst ${icon('arrow', 17)}</a>`
          : `<p><strong>${Object.values(growth.energyByStudent).filter(Boolean).length}</strong> leerlingen hebben al bijgedragen.</p>`}
      </section>
    </div>
    <section class="panel class-vote">
      <div class="section-heading"><h2>Kies de look van Atlas</h2>
        ${closed ? `<span class="chip soft">${icon('lock', 14)} Vanaf fase 2</span>` : `<span class="chip soft">${Object.values(growth.votes).reduce((sum, count) => sum + count, 0)} stemmen</span>`}
      </div>
      <p class="muted">${votingNote}</p>
      <div class="vote-options">
        ${classStyles.map(option => `<article class="vote-card">
          <div class="vote-art">${monsterCanvas({ ...growth.look, accessory: option.id }, 3, option.name)}</div>
          <div class="vote-info"><h3>${option.name}</h3><p>${option.description}</p>
            <div class="vote-bottom"><span>${growth.votes[option.id]} ${growth.votes[option.id] === 1 ? 'stem' : 'stemmen'}</span>
              ${role === 'leerling' ? `<button type="button" class="button ${voted === option.id ? 'primary' : 'secondary'}"
                data-class-vote="${option.id}" aria-pressed="${voted === option.id}" ${closed ? 'disabled' : ''}>${voted === option.id ? icon('check', 16) + ' Jouw stem' : 'Stem'}</button>` : ''}
            </div>
          </div>
        </article>`).join('')}
      </div>
    </section>${classRoster()}`;
}

function badgesPanel() {
  const badges = badgeProgress(player().entries, allStories());
  return `<section class="panel badge-panel">
    <h2>Leesbadges</h2>
    <p class="muted">Beantwoord vier verschillende vragen goed per vaardigheid.</p>
    <ul class="badge-grid">${badges.map(badge => `<li>
      <div class="badge-title"><span class="stat-icon ${badge.tone}">${icon(badge.icon, 20)}</span>
        <div><h3>${badge.name}</h3><p>${badge.skill}</p></div></div>
      ${meter(Math.min(badge.count, badge.target), badge.target, badge.skill)}
      <span class="badge-status">${badge.count >= badge.target ? icon('check', 15) + ' Verdiend' : `${badge.count} / ${badge.target} goede antwoorden`}</span>
    </li>`).join('')}</ul>
  </section>`;
}
