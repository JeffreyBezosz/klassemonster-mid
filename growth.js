const STORAGE_KEY = 'klassemonster-mid-v2';
const LEGACY_KEY = 'klassemonster-mid-v1';
const LEVEL_XP = 200;

const growthStages = [
  { name: 'Kiempje', description: 'Een klein monster met grote nieuwsgierigheid.' },
  { name: 'Spruit', description: 'De eerste nieuwe hoorntjes en details komen tevoorschijn.' },
  { name: 'Verkenner', description: 'Grotere poten en extra patronen voor onderweg.' },
  { name: 'Verhalenjager', description: 'Een volgroeid monster met grotere oren en nieuwe accessoires.' },
  { name: 'Leesreus', description: 'Vleugels en een glimmende vacht maken zijn groei zichtbaar.' },
  { name: 'Leeslegende', description: 'Je monster draagt een sterrenkrans. Alle onderdelen zijn beschikbaar.' }
];

const monsterSlots = [
  { id: 'body', label: 'Lichaam', items: [
    ['blob', 'Mosspruit', 1], ['cloud', 'Wolk', 1], ['dragon', 'Draak', 2], ['mushroom', 'Paddenstoel', 3], ['spirit', 'Sterrengeest', 5]
  ] },
  { id: 'color', label: 'Kleur', items: [
    ['sage', 'Mosgroen', 1], ['lavender', 'Lavendel', 1], ['peach', 'Perzik', 1], ['midnight', 'Nachtblauw', 2], ['ice', 'IJsblauw', 3], ['amber', 'Amber', 4], ['berry', 'Besrood', 5]
  ] },
  { id: 'eyes', label: 'Ogen', items: [
    ['round', 'Nieuwsgierig', 1], ['sleepy', 'Slaperig', 1], ['focus', 'Scherp', 1], ['star', 'Sterrenblik', 2], ['cyclops', 'Eénoog', 4]
  ] },
  { id: 'horns', label: 'Hoorntjes', items: [
    ['none', 'Zonder hoorntjes', 1], ['curl', 'Krullen', 1], ['short', 'Puntjes', 1], ['antler', 'Gewei', 2], ['antenna', 'Antennes', 3], ['leaf', 'Blaadjes', 4]
  ] },
  { id: 'mark', label: 'Patroon', items: [
    ['plain', 'Effen', 1], ['cheeks', 'Blozende wangen', 1], ['freckle', 'Sproeten', 1], ['stripe', 'Strepen', 2], ['spot', 'Stippen', 3], ['spark', 'Sterstof', 5]
  ] },
  { id: 'accessory', label: 'Accessoires', items: [
    ['none', 'Zonder accessoire', 1], ['scarf', 'Sjaal', 1], ['glasses', 'Leesbril', 2], ['headphones', 'Koptelefoon', 2], ['pack', 'Rugzak', 3], ['wreath', 'Bloemenkrans', 3], ['crown', 'Kroon', 4], ['badge', 'Verkennersspeld', 6]
  ] },
  { id: 'home', label: 'Achtergrond', items: [
    ['meadow', 'Bosweide', 1], ['dusk', 'Avondlucht', 1], ['candy', 'Perzikwolk', 2], ['library', 'Leeshoek', 2], ['cave', 'Kristalgrot', 4], ['space', 'In de ruimte', 5]
  ] }
];

const monsterColors = {
  sage: ['#adc48e', '#648755', '#355345', '#dfe7b9'],
  lavender: ['#c6b4de', '#9071ad', '#4a3d64', '#eee0f9'],
  peach: ['#f5bc9e', '#c77e64', '#724739', '#ffe5be'],
  midnight: ['#8aadce', '#445d89', '#2a3f65', '#bcd5ee'],
  ice: ['#aff1e5', '#68a5bb', '#345f75', '#def8ee'],
  amber: ['#f5d97f', '#bd8c4b', '#694c39', '#faf0bb'],
  berry: ['#eeacc6', '#a9527d', '#693958', '#ffd5e5']
};

const defaultAppearances = {
  milan: { body: 'blob', color: 'sage', horns: 'curl', eyes: 'round', mark: 'cheeks', accessory: 'none', home: 'meadow' },
  emma: { body: 'mushroom', color: 'lavender', horns: 'none', eyes: 'star', mark: 'spot', accessory: 'wreath', home: 'library' },
  lars: { body: 'dragon', color: 'midnight', horns: 'short', eyes: 'focus', mark: 'stripe', accessory: 'headphones', home: 'dusk' },
  noah: { body: 'cloud', color: 'peach', horns: 'none', eyes: 'sleepy', mark: 'freckle', accessory: 'scarf', home: 'meadow' },
  ella: { body: 'blob', color: 'ice', horns: 'antenna', eyes: 'round', mark: 'spot', accessory: 'glasses', home: 'candy' }
};

const sampleResults = {
  milan: demoResults,
  emma: [{ title: 'Het uitzicht vanaf de toren', percent: 90 }, { title: 'De laatste afslag', percent: 100 }, { title: 'Buiten bereik', percent: 80 }],
  lars: [{ title: 'De verborgen tunnel', percent: 80 }, { title: 'Het veld na de regen', percent: 75 }],
  noah: [{ title: 'De verdwenen fiets', percent: 72 }],
  ella: [{ title: 'Het verkeerde adres', percent: 82 }, { title: 'De route langs het water', percent: 90 }]
};

const classStages = [
  { energy: 0, name: 'Woudwachter', body: 'dragon', horns: 'leaf', home: 'meadow', mark: 'freckle' },
  { energy: 3, name: 'Bosreus', body: 'dragon', horns: 'antler', home: 'dusk', mark: 'stripe' },
  { energy: 6, name: 'Sterrenwachter', body: 'spirit', horns: 'antler', home: 'cave', mark: 'spark' },
  { energy: 10, name: 'Nachtreus', body: 'spirit', horns: 'antenna', home: 'space', mark: 'spark' },
  { energy: 16, name: 'Klaslegende', body: 'spirit', horns: 'antler', home: 'space', mark: 'spark' }
];

const classStyles = [
  { id: 'wreath', name: 'Bloemenkrans', description: 'Een krans van bladeren, bloemen en licht.' },
  { id: 'glasses', name: 'Reuzenleesbril', description: 'Grote ronde glazen met een gouden montuur.' },
  { id: 'crown', name: 'Sterrenkroon', description: 'Een lichte kroon met drie scherpe punten.' }
];

const badgeGoals = [
  { skill: 'Informatie vinden', name: 'Sporenvinder', icon: 'target', tone: 'sage' },
  { skill: 'Afleiden', name: 'Tussen de regels', icon: 'spark', tone: 'lilac' },
  { skill: 'Verbanden leggen', name: 'Bruggenbouwer', icon: 'list', tone: 'sand' },
  { skill: 'Hoofdgedachte', name: 'Hoofdzaak', icon: 'star', tone: 'peach' }
];

function readSaved(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function freshProfile(reader) {
  return { entries: [], drafts: {}, textSize: 1, saved: [], monsterName: reader.pet, look: { ...defaultAppearances[reader.id] } };
}

function loadGrowthState() {
  const students = Object.fromEntries(demoReaders.map(reader => [reader.id, freshProfile(reader)]));
  const saved = readSaved(STORAGE_KEY);
  const old = saved ? null : readSaved(LEGACY_KEY);
  const settings = saved ?? old ?? {};

  for (const reader of demoReaders) {
    const profile = saved?.students?.[reader.id] ?? (reader.id === 'milan' ? old : null);
    if (!profile || typeof profile !== 'object') continue;
    const account = students[reader.id];
    if (Array.isArray(profile.entries)) account.entries = profile.entries;
    if (profile.drafts && typeof profile.drafts === 'object') account.drafts = profile.drafts;
    if ([0, 1, 2].includes(profile.textSize)) account.textSize = profile.textSize;
    if (Array.isArray(profile.saved)) account.saved = profile.saved.filter(id => typeof id === 'string');
    if (typeof profile.monsterName === 'string' && profile.monsterName.trim()) account.monsterName = profile.monsterName.trim().slice(0, 24);
    for (const { id, items } of monsterSlots) {
      if (items.some(([key]) => key === profile.look?.[id])) account.look[id] = profile.look[id];
    }
  }

  const candidate = settings.activeStudent;
  return {
    activeStudent: Object.hasOwn(students, candidate) ? candidate : 'milan',
    students,
    custom: Array.isArray(settings.custom) ? settings.custom : [],
    className: typeof settings.className === 'string' && settings.className ? settings.className : '1B',
    goal: Number.isInteger(settings.goal) && settings.goal >= 1 && settings.goal <= 7 ? settings.goal : 3,
    votes: Object.fromEntries(demoReaders.flatMap(reader => {
      const choice = saved?.votes?.[reader.id];
      return classStyles.some(style => style.id === choice) ? [[reader.id, choice]] : [];
    }))
  };
}

function currentMonday(now = new Date()) {
  const monday = new Date(now);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7);
  return monday.getTime();
}

function personalGrowth(state, studentId) {
  const reader = demoReaders.find(item => item.id === studentId);
  const initialResults = sampleResults[studentId];
  const { entries } = state.students[studentId];
  const best = new Map();
  const monday = currentMonday();
  const thisWeek = new Set();
  for (const entry of entries) {
    if (entry.percent > (best.get(entry.id) ?? -1)) best.set(entry.id, entry.percent);
    if (entry.date >= monday) thisWeek.add(entry.id);
  }
  const earned = entries.reduce((total, entry) => total + entry.xp, 0);
  const totalXP = reader.xp + earned;
  const level = Math.floor(totalXP / LEVEL_XP) + 1;
  const scores = [...initialResults.map(entry => entry.percent), ...best.values()];

  return {
    level, xp: totalXP % LEVEL_XP, earned,
    stage: growthStages[Math.min(level, growthStages.length) - 1],
    totalRead: initialResults.length + best.size,
    weekly: initialResults.length + thisWeek.size,
    average: Math.round(scores.reduce((total, score) => total + score, 0) / scores.length)
  };
}

function classGrowth(state) {
  const energyByStudent = Object.fromEntries(demoReaders.map(reader => [
    reader.id, reader.classEnergy + new Set(state.students[reader.id].entries.map(entry => entry.id)).size
  ]));
  const energy = Object.values(energyByStudent).reduce((total, points) => total + points, 0);
  const stage = classStages.findLastIndex(stage => stage.energy <= energy);
  const votes = Object.fromEntries(classStyles.map(style => [style.id, 0]));
  if (stage > 0) {
    for (const choice of Object.values(state.votes)) votes[choice] += 1;
  }
  const maxVotes = Math.max(...Object.values(votes));
  const leaders = classStyles.filter(style => maxVotes > 0 && votes[style.id] === maxVotes);
  const active = classStages[stage];
  return {
    energy, energyByStudent, votes, stage, active, next: classStages[stage + 1],
    leader: leaders.length === 1 ? leaders[0] : null, tied: leaders.length > 1,
    look: {
      body: active.body, horns: active.horns, home: active.home, mark: active.mark,
      color: stage >= 3 ? 'midnight' : stage >= 2 ? 'ice' : 'sage',
      eyes: stage >= 2 ? 'star' : 'round', accessory: leaders.length === 1 ? leaders[0].id : 'none'
    }
  };
}

function badgeProgress(entries, stories) {
  const successes = new Map(badgeGoals.map(badge => [badge.skill, new Set()]));
  for (const entry of entries) {
    const story = stories.find(item => item.id === entry.id);
    if (!story || !Array.isArray(entry.answers)) continue;
    story.questions.forEach((question, index) => {
      if (entry.answers[index] === question.correct) successes.get(question.skill)?.add(`${story.id}/${index}`);
    });
  }
  return badgeGoals.map(badge => ({ ...badge, count: successes.get(badge.skill).size, target: 4 }));
}
