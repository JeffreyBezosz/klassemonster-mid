const stories = [
  {
    id: 'signaal',
    title: 'Het signaal om 23:17',
    category: 'Mysterie',
    difficulty: 'Verder',
    minutes: 5,
    art: 'radio',
    teaser: 'Elke avond kraakt er een radio in de lege fietsenstalling. Noor probeert te achterhalen wie er aan de andere kant zit.',
    words: [
      ['Morse', 'Een manier om letters te seinen met korte en lange signalen.'],
      ['Storing', 'Iets dat een signaal verstoort, waardoor je bijvoorbeeld geruis hoort.'],
      ['Noodsein', 'Een vooraf afgesproken signaal waarmee je om hulp vraagt.']
    ],
    paragraphs: [
      'Noor woonde tegenover de school. Haar kamer keek uit op de oude fietsenstalling, die sinds de zomer op slot zat. Op maandagavond hoorde ze er plots een krakend geluid. Toen volgden drie korte piepjes en één lang. Haar wekker stond op 23:17. Dinsdag klonk het opnieuw, op precies hetzelfde moment. Ze nam het geluid op met haar telefoon.',
      'De volgende ochtend liet ze het aan Sam horen. “Morse,” zei hij. “Met korte en lange piepjes kun je letters doorgeven.” Even later kwam hij terug op zijn idee. Dit patroon kwam volgens de tabel op zijn telefoon helemaal niet overeen met een noodsein. Sam hield het op een technisch probleem. Noor vroeg zich af waarom een storing zich elke avond aan de klok zou houden.',
      'Na de les vroegen ze aan conciërge Fatima of ze binnen mochten kijken. Ze bleef bij de deur staan terwijl Noor onder de werkbank kroop. Daar stond een kleine zender, het lampje met plakband afgedekt. Aan het handvat hing een briefje: “Test 4. Als je me hoort, vertel morgen waar je stond. Laat alles liggen. — Lena”',
      'Lena zat bij hen in de klas. Bij het volgende lesuur legde ze uit dat ze voor de techniekclub uitzocht hoe ver haar zender raakte. Eerst had ze in de middag getest, maar tijdens de pauze vielen de piepjes weg tussen het geroezemoes. Daarom stelde ze de zender in op een tijdstip waarop het buiten stil was. Via een tijdschakelaar ging hij elke avond vanzelf aan.',
      '“Ik dacht dat er iemand hulp nodig had,” zei Noor. Lena keek verbaasd. Niemand had tot dan toe gemeld het signaal te hebben gehoord. Ze tekenden Noors slaapkamer op de testkaart. Die avond om 23:17 hoorde Noor opnieuw drie korte piepjes en één lang. Ze drukte op opnemen en bedacht waar ze het volgende luisterpunt konden zetten.'
    ],
    questions: [
      { skill: 'Informatie vinden', prompt: 'Welk detail maakt volgens Noor een toevallige storing minder waarschijnlijk?', options: ['Het geluid klinkt elke avond op hetzelfde tijdstip.', 'De fietsenstalling staat sinds de zomer op slot.', 'Sam gebruikt een tabel op zijn telefoon.'], correct: 0, feedback: 'Noor vraagt zich af waarom een storing zich “elke avond aan de klok zou houden”. Ze let op het patroon in de tijd.' },
      { skill: 'Verbanden leggen', prompt: 'Waarom verplaatst Lena haar test naar de late avond?', options: ['De zender kan overdag geen stroom krijgen.', 'De signalen zijn dan beter te horen doordat het buiten stil is.', 'Ze wil alleen testen wanneer Noor in haar kamer is.'], correct: 1, feedback: 'Tijdens de middagpauze overstemt het geroezemoes de piepjes. De stilte laat Lena beter meten waar je het signaal hoort.' },
      { skill: 'Afleiden', prompt: 'Wat vertelt “Test 4” op het briefje je over Lena?', options: ['Ze heeft pas beslist dat ze een zender wil bouwen.', 'Ze test altijd met vier medeleerlingen.', 'Ze heeft al eerder met de zender geëxperimenteerd.'], correct: 2, feedback: 'De nummering maakt duidelijk dat deze proef deel uitmaakt van een reeks. In de volgende alinea vertelt Lena inderdaad over een eerdere test.' },
      { skill: 'Verbanden leggen', prompt: 'Naar welk probleem verwijst het woord “daarom” in de vierde alinea?', options: ['Het geluid viel tijdens de pauze weg tussen het geroezemoes.', 'De fietsenstalling was al sinds de zomer afgesloten.', 'Niemand wist hoe je letters in morse kunt doorgeven.'], correct: 0, feedback: '“Daarom” koppelt de oorzaak (het geroezemoes) aan Lena’s beslissing (later testen wanneer het stil is).' },
      { skill: 'Afleiden', prompt: 'Hoe is Noors houding aan het einde veranderd?', options: ['Ze vertrouwt Lena minder en houdt haar waarneming geheim.', 'Ze is teleurgesteld en stopt met luisteren.', 'Haar ongerustheid maakt plaats voor nieuwsgierigheid naar de proef.'], correct: 2, feedback: 'Eerst denkt Noor dat iemand hulp nodig heeft. Aan het einde neemt ze het signaal op en zoekt ze mee naar het volgende luisterpunt.' },
      { skill: 'Hoofdgedachte', prompt: 'Welke zin vat het verhaal het best samen?', options: ['Twee leerlingen proberen tevergeefs morse te leren.', 'Een vreemd geluid blijkt een proef te zijn waaraan Noor zelf kan bijdragen.', 'Een conciërge ontdekt hoe ze de school ’s avonds op slot moet doen.'], correct: 1, feedback: 'De zoektocht naar het terugkerende geluid én de ontdekking van Lena’s proef vormen de kern van het verhaal.' }
    ]
  },
  {
    id: 'stad',
    title: 'Een stad voor de nacht',
    category: 'Natuur',
    difficulty: 'Start',
    minutes: 4,
    art: 'night',
    teaser: 'Als de straten stilvallen, begint voor sommige dieren de drukste tijd van de dag.',
    words: [
      ['Berm', 'De strook grond vlak naast een weg of spoor.'],
      ['Verbinding', 'Hier: een strook groen waarlangs dieren veilig van de ene plek naar de andere kunnen.']
    ],
    paragraphs: [
      'Net na zonsondergang fietst Imran langs het park naar huis. Bij de vuilnisbak ziet hij iets laag over het pad schieten. In het licht van zijn fiets herkent hij de spitse kop van een vos. De volgende dag zoekt hij uit waarom het dier zo dicht bij de huizen kwam. Hij ontdekt dat veel vossen in steden leven: er zijn genoeg schuilplaatsen en ze vinden er makkelijk voedsel.',
      'Een stadspark is voor een vos meer dan een plek om te rusten. Via tuinen, bermen en spoorstroken bereikt hij andere delen van de stad. Zulke stroken groen vormen verbindingen. Zonder verbindingen moet een dier omlopen of drukke wegen oversteken. Een gesloten hek kan op de kaart onbelangrijk lijken, terwijl het in werkelijkheid een hele route onderbreekt.',
      'Ook licht verandert de kaart. Voor mensen maakt een verlichte weg de rit naar huis overzichtelijker. Voor sommige nachtdieren heeft straatlicht het omgekeerde effect. Sommige vleermuizen mijden fel verlichte plekken. Daardoor blijven de insecten op de donkere route bereikbaar, maar raken andere voedselplekken moeilijker te bereiken. Zomaar alle lichten doven is geen eenvoudige oplossing: fietsers en voetgangers willen de weg kunnen zien.',
      'Sommige gemeenten kiezen daarom voor gerichte verlichting. Een lamp kan alleen het fietspad beschijnen, terwijl de struiken ernaast donker blijven. In rustige uren kan de lamp ook minder fel branden. Imran kijkt de volgende avond opnieuw naar de rand van het park. Eerst zag hij er alleen een rij struiken. Nu ziet hij een drukke route, precies op de plek waar het voor hem donker wordt.'
    ],
    questions: [
      { skill: 'Informatie vinden', prompt: 'Welke twee redenen geeft de tekst waarom vossen in de stad leven?', options: ['De straten zijn breed en het licht trekt hen aan.', 'Ze vinden er schuilplaatsen en voedsel.', 'Het is er altijd warmer en er zijn geen hekken.'], correct: 1, feedback: 'In de eerste alinea ontdekt Imran dat vossen er kunnen schuilen en gemakkelijk voedsel vinden.' },
      { skill: 'Afleiden', prompt: 'Waarom gebruikt de schrijver het voorbeeld van het gesloten hek?', options: ['Het laat zien dat een kleine hindernis een belangrijke dierenroute kan onderbreken.', 'Het bewijst dat vossen nooit in afgehekte tuinen komen.', 'Het toont aan dat mensen te weinig kaarten van de stad maken.'], correct: 0, feedback: 'Op een kaart valt zo’n hek nauwelijks op. Voor het dier kan het bepalen of het zijn bestemming bereikt.' },
      { skill: 'Verbanden leggen', prompt: 'Wat is het verband tussen de derde en vierde alinea?', options: ['De vierde alinea geeft een tweede voorbeeld van hetzelfde probleem.', 'De vierde alinea zegt dat het probleem uit alinea drie zich niet voordoet.', 'De derde alinea legt een probleem uit en de vierde beschrijft een aanpak.'], correct: 2, feedback: 'Eerst lees je het spanningsveld tussen zichtbaarheid voor mensen en duisternis voor dieren. Daarna volgt een manier om beide te combineren.' },
      { skill: 'Hoofdgedachte', prompt: 'Wat wil de tekst vooral duidelijk maken?', options: ['Elk dier in de stad is afhankelijk van het stadspark.', 'De inrichting van een stad bepaalt hoe mensen én nachtdieren zich er verplaatsen.', 'Vossen zijn gevaarlijker in het donker dan overdag.'], correct: 1, feedback: 'De voorbeelden van groenstroken, hekken en lampen laten zien dat mensen en dieren een stad op verschillende manieren gebruiken.' },
      { skill: 'Afleiden', prompt: 'Wat bedoelt Imran met “een drukke route” in de laatste alinea?', options: ['Een route die nachtdieren langs de struiken volgen.', 'Een omweg voor fietsers die niet door het park mogen.', 'Een rij auto’s die bij de straatlampen stopt.'], correct: 0, feedback: 'De struiken vormen een donker traject voor dieren. Imran heeft geleerd door hun ogen naar de rand van het park te kijken.' }
    ]
  },
  {
    id: 'kamer',
    title: 'De kamer achter de muur',
    category: 'Avontuur',
    difficulty: 'Verder',
    minutes: 4,
    art: 'door',
    teaser: 'Een oude plattegrond en een vreemd detail wijzen Aya naar een vergeten kamer.',
    words: [
      ['Plattegrond', 'Een tekening waarop je een gebouw of plaats van bovenaf ziet.'],
      ['Kerfje', 'Een kleine inkeping die iemand met een scherp voorwerp maakte.']
    ],
    paragraphs: [
      'De klas van Aya maakt een audiogids voor een oud kasteel. Iedereen wil de troonzaal opnemen. Aya krijgt de wintergang, het smalle stuk tussen de keuken en de benedenverdieping. Ze telt negen stappen van deur tot raam. Op een plattegrond uit het archief zouden het er ongeveer twaalf moeten zijn. Op de plaats van het verschil staat een klein rechthoekje dat op de nieuwe plattegrond ontbreekt.',
      'Haar klasgenoot Lou stelt voor om het verschil te vergeten. Ze hebben die middag maar twintig minuten om op te nemen. Aya loopt terug en klopt op de muur. Achter een houten paneel klinkt het plots holler. Aan de rand ziet ze een kerfje, precies op de hoogte waar je een deurklink verwacht. Ze tekent de plek op de plattegrond en laat het aan de gids zien.',
      'De gids duwt het paneel voorzichtig opzij. Er loopt een smalle trap naar een kamer zonder ramen. Op een platte steen liggen oude labels met namen van kruiden. Volgens de gids was het waarschijnlijk een opslagruimte voor de koks. Dikke muren hielden de ruimte koel. Op de wand ziet Lou ook vier gegraveerde initialen. Wie ze heeft gekerfd, weet niemand.',
      'Voor de opname wil Lou zeggen dat de initialen van een kok zijn. Aya vindt dat te stellig. Ze spreken af dat ze in de audiogids eerst beschrijven wat ze zelf zagen, en pas daarna het vermoeden van de gids vertellen. In de montage laat Aya de holle klop op het paneel horen. Wie door de gang wandelt, kan voortaan zelf bedenken wat er achter de muur heeft gezeten.'
    ],
    questions: [
      { skill: 'Informatie vinden', prompt: 'Wat zet Aya aan om de wintergang verder te onderzoeken?', options: ['De gids vertelt haar vooraf over een trap.', 'De afstand op de oude plattegrond past niet bij wat ze meet.', 'Lou hoort stemmen achter het paneel.'], correct: 1, feedback: 'Aya telt negen stappen waar de oude plattegrond er ongeveer twaalf doet verwachten. Dat verschil trekt haar aandacht.' },
      { skill: 'Afleiden', prompt: 'Wat doet Aya als ze vermoedt dat er een deur achter het paneel zit?', options: ['Ze verplaatst het paneel zonder hulp.', 'Ze presenteert haar vermoeden onmiddellijk als een feit.', 'Ze noteert de aanwijzing en vraagt hulp aan de gids.'], correct: 2, feedback: 'Ze tekent de plek op de kaart en laat die aan de gids zien. Samen kunnen ze het vermoeden controleren.' },
      { skill: 'Feit of vermoeden', prompt: 'Welke bewering is een waarneming uit de tekst?', options: ['Op de muur staan vier initialen.', 'Een kok kraste zijn initialen in de muur.', 'De kamer werd zeker gebruikt om kruiden te bewaren.'], correct: 0, feedback: 'De vier initialen zijn zichtbaar. Wie ze maakte en waarvoor de kamer precies diende, weten de leerlingen niet zeker.' },
      { skill: 'Verbanden leggen', prompt: 'Waarom wil Aya de luisteraars eerst vertellen wat ze zagen?', options: ['Ze wil dat de luisteraar het verschil begrijpt tussen bewijs en een vermoeden.', 'Ze wil de rol van de gids uit het verhaal halen.', 'Ze denkt dat de audiogids alleen geluiden mag bevatten.'], correct: 0, feedback: 'Aya noemt Lous verklaring te stellig. De volgorde helpt luisteraars te begrijpen wat vaststaat en wat een mogelijke uitleg is.' },
      { skill: 'Hoofdgedachte', prompt: 'Welke titel past ook bij deze tekst?', options: ['Hoe je een troonzaal opneemt', 'De snelste weg naar de keuken', 'Een aanwijzing tussen twee plattegronden'], correct: 2, feedback: 'Het verschil tussen de oude en nieuwe plattegrond brengt Aya op het spoor van de vergeten kamer.' }
    ]
  }
];

const demoReaders = [
  { id: 'robin', name: 'Robin', initials: 'R', tone: 'sage', xp: 0, classEnergy: 0, pet: 'Spruit', demoLabel: 'Startprofiel' },
  { id: 'milan', name: 'Milan', initials: 'M', tone: 'sage', xp: 520, classEnergy: 0, pet: 'Moss' },
  { id: 'emma', name: 'Emma', initials: 'EV', tone: 'peach', xp: 660, classEnergy: 1, pet: 'Nova', demoLabel: 'Met voortgang' },
  { id: 'lars', name: 'Lars', initials: 'LD', tone: 'lilac', xp: 328, classEnergy: 1, pet: 'Nox' },
  { id: 'noah', name: 'Noah', initials: 'NC', tone: 'sand', xp: 165, classEnergy: 0, pet: 'Pip' },
  { id: 'ella', name: 'Ella', initials: 'EM', tone: 'peach', xp: 475, classEnergy: 0, pet: 'Vonk' }
];

const demoResults = [
  { title: 'De verdwenen fiets', percent: 80 },
  { title: 'Het dagboek in de kast', percent: 70 }
];

const guideStory = {
  id: 'gids-het-lichtspoor',
  title: 'Het lichtspoor',
  category: 'Startgids',
  difficulty: 'Start',
  minutes: 1,
  art: 'trail',
  words: [['Vondst', 'Iets dat je onderweg hebt gevonden.']],
  paragraphs: [
    'Bij de start van de avondwandeling geeft Fien haar groep een kaart. Op de kaart staan twee paden naar het uitkijkpunt. Het korte pad loopt over een houten brug. Het lange pad volgt de oever. Bij de brug hangt een rood lichtje. Op een bord staat: “Rood: brug dicht. Volg het pad langs het water.”',
    'Timo kijkt naar de lege brug en wil toch het korte pad nemen. Fien wijst naar het lichtje. “Het bord zegt waarom we een tweede route hebben.” De groep volgt de oever. Even later vinden ze onderweg drie lichtgevende steentjes. Ze leggen er eentje bij de eerste bocht, zodat de volgende groep het juiste pad sneller ziet.'
  ],
  questions: [{
    skill: 'Informatie vinden',
    prompt: 'Waarom kiest de groep het pad langs de oever?',
    options: ['Het is het kortste pad naar het uitkijkpunt.', 'Het rode lichtje geeft aan dat de brug dicht is.', 'Ze weten vooraf dat er lichtgevende steentjes liggen.'],
    correct: 1,
    feedback: 'Goed gezien. In de eerste alinea staat bij het rode lichtje: “Rood: brug dicht.” De groep kiest daarom het andere pad.'
  }]
};

