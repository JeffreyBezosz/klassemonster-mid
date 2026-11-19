function readingStory({ questions, ...story }) {
  return {
    ...story,
    questions: questions.map(([skill, prompt, options, correct, feedback]) => ({ skill, prompt, options, correct, feedback }))
  };
}

stories.push(...[
  {
    id: 'negentig-seconden',
    title: 'De laatste negentig seconden',
    category: 'Sport',
    difficulty: 'Start',
    minutes: 3,
    art: 'court',
    teaser: 'De ploeg staat één punt achter. Lina moet kiezen of ze zelf schiet of de bal opnieuw afgeeft.',
    words: [['Blok', 'In deze tekst: een speler die een verdediger afschermt zodat een ploeggenoot ruimte krijgt.']],
    paragraphs: [
      'Met nog negentig seconden op het bord stond de ploeg van Lina één punt achter. De laatste drie keer had zij van buiten de lijn geschoten. Telkens sprong dezelfde lange verdediger precies op tijd voor haar. “Je moet sneller loslaten,” riep iemand vanaf de bank. Lina keek naar Hanne. Die stond al twee aanvallen lang vrij in de hoek en had de bal nog niet gekregen.',
      'Tijdens de time-out tekende de trainer geen nieuwe aanval. Hij stelde één vraag: “Wat doet de verdediger zodra Lina naar de bal vraagt?” Hanne schoof met haar vinger over het bord. “Ze loopt al naar Lina vóór de pass vertrekt.” De ploeg sprak af om dat één keer bewust uit te lokken. Lina zou opnieuw naar de bal vragen. Hanne zou doen alsof ze een blok zette en dan naar de lege hoek lopen.',
      'De eerste poging mislukte. Lina speelde de bal te vroeg door en Hanne botste tegen een medespeler aan. Met twaalf seconden over probeerden ze het nog eens. Deze keer wachtte Lina tot de verdediger één stap naar voren zette. Pas toen gaf ze de pass. Hanne ving de bal zonder iemand vlak voor haar. Ze scoorde net vóór het eindsignaal.',
      'In de kleedkamer kreeg Hanne alle schouderklopjes. Ze nam het bord van de trainer en tekende er één stip bij, vlak naast Lina’s naam. “Bij die stap kreeg ik ruimte,” zei ze. Lina had geen punt gemaakt in de laatste minuut. Toch wist ze precies op welk moment de aanval was gelukt.'
    ],
    questions: [
      ['Informatie vinden', 'Wat doet de verdediger wanneer Lina de bal vraagt?', ['Ze gaat meteen naar Hanne.', 'Ze loopt al richting Lina vóór de pass vertrekt.', 'Ze wacht op de aanval in de lege hoek.'], 1, 'Hanne merkt tijdens de time-out op dat de verdediger zich al verplaatst vóór de pass.'],
      ['Verbanden leggen', 'Waarom wacht Lina bij de tweede poging iets langer?', ['Ze wil eerst zien of de verdediger haar volgt en ruimte vrijmaakt.', 'Ze verwacht dat het eindsignaal eerder komt dan gepland.', 'Ze wil dat Hanne eerst terug naar de bank gaat.'], 0, 'Door te wachten tot de verdediger naar haar toe stapt, kan Lina Hanne bereiken wanneer de hoek vrij is.'],
      ['Afleiden', 'Waarom tekent Hanne aan het einde een stip bij Lina’s naam?', ['Ze wil op het bord zetten wie de meeste punten maakte.', 'Ze legt uit dat Lina de volgende wedstrijd hetzelfde schot moet nemen.', 'Ze laat zien dat Lina’s beslissing een belangrijke bijdrage was.'], 2, 'Hanne krijgt complimenten voor de score, maar wijst juist op Lina’s pass die de score mogelijk maakte.'],
      ['Hoofdgedachte', 'Welke zin vat de belangrijkste wending samen?', ['Lina leert dat driepunters altijd een slecht idee zijn.', 'De ploeg benut de reactie van de verdediger om samen een nieuwe kans te maken.', 'De trainer neemt een time-out en beslist alles zelf.'], 1, 'Het plan werkt wanneer de spelers een voorspelbare reactie herkennen en hun timing samen aanpassen.']
    ]
  },
  {
    id: 'iedereen-deelt',
    title: 'Iedereen deelt het al',
    category: 'Media',
    difficulty: 'Verder',
    minutes: 4,
    art: 'signal',
    teaser: 'Een filmpje over de school gaat rond. Imran ontdekt dat het jaartal nergens in beeld staat.',
    words: [['Context', 'De informatie rond een bericht die je nodig hebt om te begrijpen wat het precies betekent.']],
    paragraphs: [
      'In de klasgroep verscheen een filmpje van water dat over de tegels van de speelplaats liep. Iemand had erboven gezet: “Morgen geen les. Alles staat onder water.” Binnen tien minuten had bijna iedereen het gedeeld. Imran vond het vreemd. Hij was die middag als laatste door de poort gelopen en had geen plas gezien. Misschien was het filmpje van ’s avonds. Toch viel hem iets anders op.',
      'Aan de rand van het beeld stond een rode container. Die stond er vorig schooljaar tijdens werken, maar was al maanden weg. Imran schreef niet meteen dat het filmpje vals was. Hij zocht in de berichten van de school en vond een oude melding met een foto van dezelfde container. Toen stuurde hij die foto met één vraag naar de klasgroep: “Zou dit filmpje soms van toen zijn?”',
      'Een leerling stuurde de oorspronkelijke video door. Het water op de beelden was echt, maar de video was bijna een jaar oud. De zin over morgen stond nergens bij het origineel. De persoon die het bericht die avond eerst deelde, had het op zijn beurt gekregen uit een andere groep. Hij had de tekst erboven vertrouwd omdat die van een vriend kwam.',
      'Imran schreef een kort bericht met wat ze nu wisten: de beelden waren oud en de school had geen sluiting aangekondigd. De klas vroeg de beheerder om de verduidelijking bovenaan vast te maken. De nieuwe versie werd minder vaak gedeeld dan het eerste bericht. Ze bleef wel zichtbaar voor wie later in de groep kwam kijken.'
    ],
    questions: [
      ['Informatie vinden', 'Welk detail helpt Imran de video in de tijd te plaatsen?', ['De tegels zijn nat.', 'De video wordt binnen tien minuten gedeeld.', 'De rode container is al maanden weg.'], 2, 'De container stond op de speelplaats tijdens vroegere werken. Dat maakt hem een nuttige tijdsaanduiding.'],
      ['Afleiden', 'Waarom schrijft Imran niet meteen dat het filmpje vals is?', ['Hij heeft een vermoeden, maar moet de context nog controleren.', 'Hij weet dat het verhaal over morgen zeker klopt.', 'Hij wil doen alsof hij het filmpje niet heeft gezien.'], 0, 'Een verdachte aanwijzing is geen volledige controle. Imran zoekt eerst een bron en stelt een vraag.'],
      ['Verbanden leggen', 'Wat verandert er in de betekenis door het bijschrift?', ['Door het bijschrift wordt de echte video technisch bewerkt.', 'Een video van vorig jaar wordt voorgesteld als bewijs voor morgen.', 'Het bijschrift vertelt precies waar de video oorspronkelijk is geplaatst.'], 1, 'De beelden blijven echt. De toegevoegde tekst geeft ze een verkeerde tijd en een verkeerde conclusie.'],
      ['Hoofdgedachte', 'Welke les sluit het best bij het verhaal aan?', ['Een vaak gedeeld bericht krijgt vanzelf een betrouwbare bron.', 'Video’s zijn alleen betrouwbaar wanneer de maker zelf in beeld komt.', 'Ook echte beelden kunnen misleiden als de uitleg of datum niet klopt.'], 2, 'De misleiding zit hier in de context van het filmpje, niet in de opgenomen beelden.']
    ]
  },
  {
    id: 'tweede-proef',
    title: 'De tweede proef',
    category: 'Wetenschap',
    difficulty: 'Uitdaging',
    minutes: 5,
    art: 'lab',
    teaser: 'Yara en Otis willen weten welke beker het langst warm blijft. Hun eerste meting vertelt minder dan ze denken.',
    words: [['Variabele', 'Iets dat kan verschillen of worden veranderd tijdens een onderzoek.'], ['Gelijk houden', 'Ervoor zorgen dat iets in elke proef hetzelfde blijft.']],
    paragraphs: [
      'Voor de projectdag bouwden Yara en Otis twee bekers met een beschermlaag. Rond de ene beker zat vilt, rond de andere gevouwen karton. Hun onderzoeksvraag stond groot op het bord: “Welke laag houdt warm water het langst warm?” Ze schonken heet water in beide bekers, wachtten tien minuten en maten. De beker met vilt was vier graden warmer. Otis wilde “Vilt wint” op de poster schrijven.',
      'Yara bekeek het filmpje van hun proef. De kom met water was bijna leeg geweest toen Otis de tweede beker vulde. In de kartonnen beker zat daardoor zichtbaar minder water. Ze hadden ook alleen op het einde gemeten. Niemand wist of de twee bekers met dezelfde temperatuur begonnen. “Misschien werkt vilt beter,” zei ze. “Maar als we dit resultaat tonen, moeten we ook kunnen uitleggen waardoor het komt.”',
      'Voor de tweede proef wogen ze het water af en maten ze de temperatuur bij het begin. Ze gebruikten twee gelijke bekers en zetten die naast elkaar, uit de tocht. Yara controleerde de klok terwijl Otis om de vijf minuten beide temperaturen opschreef. Ze wisselden bij een herhaling van plaats, zodat de positie op de tafel niet altijd aan dezelfde laag vastzat.',
      'Nu was het verschil kleiner. Vilt hield in twee metingen iets meer warmte vast. In de derde meting was het verschil te klein om met hun thermometer goed te zien. Op de poster hield Otis een lege strook over voor de eerste proef. Ze schreven erbij wat er was misgegaan. Bij hun conclusie voegden ze twee woorden toe: “in deze opstelling”. Dat was minder opvallend dan “Vilt wint”. Het was wel een antwoord dat ze konden verdedigen.'
    ],
    questions: [
      ['Informatie vinden', 'Wat was tijdens de eerste proef zichtbaar verschillend behalve de beschermlaag?', ['De hoeveelheid water in de bekers.', 'Het materiaal van de thermometer.', 'De tijd tussen de twee eindmetingen.'], 0, 'Op het filmpje ziet Yara dat er minder water in de kartonnen beker zit.'],
      ['Verbanden leggen', 'Waarom wisselen ze van plaats bij een herhaling?', ['Omdat een andere plaats het resultaat sowieso zal omkeren.', 'Omdat beide bekers uiteindelijk naast de deur moeten staan.', 'Omdat de plaats op de tafel anders telkens met dezelfde laag samenvalt.'], 2, 'De wissel helpt voorkomen dat een eventueel effect van de plaats wordt aangezien voor een effect van het materiaal.'],
      ['Afleiden', 'Wat maakt “in deze opstelling” preciezer?', ['Het zegt dat de uitkomst alleen gaat over wat ze onder deze voorwaarden maten.', 'Het zegt dat ze de conclusie van een ander experiment overnemen.', 'Het maakt duidelijk dat vilt in alle bekers precies hetzelfde werkt.'], 0, 'Ze meten een klein verschil in hun eigen proef. Die woorden begrenzen de conclusie tot hun opstelling.'],
      ['Hoofdgedachte', 'Waarom laten ze de eerste proef op de poster staan?', ['Omdat alleen de eerste proef een groot verschil gaf.', 'Omdat het verschil tussen de twee proeven toont hoe ze beter leerden meten.', 'Omdat die proef voldoende was en de herhaling overbodig bleek.'], 1, 'Hun eerste aanpak toont waarom controle van de omstandigheden nodig was. De verbetering is deel van het onderzoek.']
    ]
  },
  {
    id: 'na-applaus',
    title: 'Stilte na het applaus',
    category: 'School',
    difficulty: 'Verder',
    minutes: 4,
    art: 'stage',
    teaser: 'Ravi oefent een podiumtekst met zijn klas. De regisseur vraagt hem om juist minder te zeggen.',
    words: [['Regie', 'Het organiseren van wat er op een podium gebeurt en hoe spelers dat uitvoeren.']],
    paragraphs: [
      'Ravi kende zijn tekst van buiten, maar tijdens de repetitie kwam elke zin sneller dan de vorige. Na zijn laatste zin klapte de klas keurig. “Ik verstond alles,” zei Ona, die de regie deed. “Toch wist ik niet waar je aan het twijfelen was.” Ravi keek naar de tekst. In de tweede alinea stond letterlijk “Ik twijfel”. Hij had die woorden extra luid uitgesproken.',
      'Ona vroeg hem de scène opnieuw te spelen en één ding te veranderen. Vóór die zin moest hij naar de gesloten deur kijken en wachten tot hij zelf de neiging voelde om verder te praten. Ze zei niet hoeveel tellen de pauze moest duren. De eerste keer wachtte hij één tel. De tweede keer bleef hij langer staan. Er schoof iemand op de eerste rij naar de rand van zijn stoel.',
      'Tijdens de voorstelling dacht Ravi even dat de pauze te lang duurde. Hij hoorde de verwarming tikken. Een leerling die zijn tekst niet kende, fluisterde: “Gaat hij naar binnen?” Precies toen zei Ravi zijn volgende zin. Het besef dat de zaal op een antwoord wachtte, veranderde hoe hij sprak. Hij hoefde niet meer te duwen op ieder woord.',
      'Na afloop vertelde Ravi aan Ona dat hij op die plek bijna was doorgegaan. Ona vroeg: “Wat zou er dan met de vraag in de zaal zijn gebeurd?” Ravi dacht aan het gefluister op de eerste rij. Pas nu begreep hij dat de stilte voor de kijkers ook een moment was om zelf iets te bedenken.'
    ],
    questions: [
      ['Informatie vinden', 'Welke verandering stelt Ona voor tijdens de repetitie?', ['De zin over de twijfel helemaal weglaten.', 'Voor de zin naar de deur kijken en even wachten.', 'Alle zinnen even traag voorlezen.'], 1, 'Ona verandert één moment: het kijken naar de deur en de pauze vóór de zin.'],
      ['Afleiden', 'Wat laat de fluisterende leerling zien?', ['Een kijker is actief aan het bedenken wat Ravi zal doen.', 'Het publiek heeft de hele tekst op voorhand gekregen.', 'Ravi heeft die zin nog altijd te stil uitgesproken.'], 0, 'De leerling vult de stilte met een eigen vraag. Dat toont hoe de pauze nieuwsgierigheid oproept.'],
      ['Verbanden leggen', 'Wat is het verband tussen de repetitie en de voorstelling?', ['De voorstelling bewijst dat het advies van Ona niet werkte.', 'Tijdens de voorstelling kiest Ravi ineens een andere scène.', 'Een ingreep uit de repetitie krijgt tijdens de voorstelling een zichtbaar effect.'], 2, 'Ona introduceert de pauze. Tijdens de voorstelling merkt Ravi aan de reactie van een leerling wat die pauze doet.'],
      ['Hoofdgedachte', 'Waarom past de titel bij de tekst?', ['De scène leert Ravi hoeveel een moment van stilte kan vertellen.', 'Er is geen publiek aanwezig dat na de voorstelling kan klappen.', 'Er mag achter de schermen niet worden gepraat.'], 0, 'Stilte is het terugkerende middel waarmee Ravi twijfel overbrengt en zijn publiek laat meedenken.']
    ]
  },
  {
    id: 'laatste-vlieger',
    title: 'De vlieger op het dak',
    category: 'Avontuur',
    difficulty: 'Start',
    minutes: 3,
    art: 'kite',
    teaser: 'Een rukwind verandert een proef met vliegers in een zoektocht naar een briefje.',
    words: [['Breekpunt', 'Hier: het punt waarop een touw te hard wordt uitgerekt en knapt.']],
    paragraphs: [
      'Op het einde van de projectdag liet Fien haar zelfgemaakte vlieger op. Aan het touw zat een gevouwen briefje met een voorspelling: hoelang zou de vlieger boven de koer blijven? Toen er een rukwind kwam, brak het touw dicht bij de knoop. De vlieger draaide naar het lage dak van het fietsenhok. Het briefje zag Fien verdwijnen achter de regenpijp.',
      'Ilyas wilde op het hek klimmen om het briefje te halen. Fien wees naar het bord “Niet betreden” en ging de toezichter halen. Die keek vanaf de grond naar het dak. “De vlieger nemen we later weg,” zei hij. “Maar dat briefje zit niet op het dak.” Op de koer liep een goot naast de regenpijp. Daar lag een reep papier met het woord “minuten”.',
      'Fien pakte de natte reep op. Ze kon alleen het cijfer vier nog lezen. In haar schetsboek had ze de volledige voorspelling opgeschreven: veertien minuten. Ilyas dacht dat de proef mislukt was, want de vlieger was maar even in de lucht geweest. Fien ging naar het team dat het filmpje maakte. Op de opname stond wanneer het touw begon te trillen en waar het brak.',
      'Ze zette haar voorspelling en de kortere vliegtijd naast elkaar in haar verslag. Daarna tekende ze een cirkel rond de knoop. Bij de volgende proef wilde ze daar een sterker stukje touw gebruiken. Het briefje droogde uit op de vensterbank. De reep papier was minder belangrijk dan wat ze met de opname kon ontdekken.'
    ],
    questions: [
      ['Informatie vinden', 'Waar vinden ze uiteindelijk een deel van het briefje?', ['In een goot naast de regenpijp.', 'Op het lage dak van het fietsenhok.', 'Aan het hek bij het bord.'], 0, 'De toezichter ziet de strook papier in de goot op de koer.'],
      ['Afleiden', 'Waarom gaat Fien naar het team dat filmde?', ['Ze wil de opname verwijderen zodat niemand de mislukking ziet.', 'Ze hoopt beelden terug te vinden die haar iets over de breuk leren.', 'Ze denkt dat iemand de knoop opzettelijk losmaakte.'], 1, 'Op de beelden kan ze achteraf bekijken waar en wanneer het touw begon te trillen en brak.'],
      ['Verbanden leggen', 'Wat helpt Fien om toch een verslag te maken?', ['Ze schrijft op dat de vliegtijd dezelfde was als de voorspelling.', 'Ze weet niet meer wat ze voorspelde en laat dat deel weg.', 'Ze gebruikt haar schetsboek voor de voorspelling en de opname voor het verloop.'], 2, 'Haar voorspelling was in het schetsboek bewaard. De opname geeft informatie over de echte proef.'],
      ['Hoofdgedachte', 'Wat verandert voor Fien het meest?', ['Ze maakt van een proef die anders liep dan verwacht een aanwijzing voor de volgende.', 'Ze vindt het briefje en besluit haar eerste voorspelling te behouden.', 'Ze wil na één vlucht niet meer bouwen aan een nieuwe vlieger.'], 0, 'Hoewel de vlieger vroeg neerkomt, gebruikt Fien haar observaties om de volgende proef te verbeteren.']
    ]
  },
  {
    id: 'honderd-geleende-lampen',
    title: 'Honderd geleende lampen',
    category: 'Toekomst',
    difficulty: 'Uitdaging',
    minutes: 5,
    art: 'city',
    teaser: 'In een toekomstige wijk bepaalt een teller wie stroom krijgt. Jules ontdekt wat de teller niet ziet.',
    words: [['Verbruik', 'De hoeveelheid stroom of ander materiaal die iemand gebruikt.'], ['Verdeelregel', 'Een afspraak die bepaalt welk deel iedereen krijgt.']],
    paragraphs: [
      'In de wijk van Jules had elk gebouw een stroomplafond. Bij weinig zon schoot een lamp boven de deur van groen naar geel. Dan besliste de wijkcomputer waar de beschikbare stroom naartoe ging. De regel leek eerlijk: een gebouw dat gisteren veel stroom had verbruikt, kreeg vandaag minder. De programmeurs hadden op die manier willen voorkomen dat één gebouw steeds alle stroom vroeg.',
      'Op een donderdag stond bij de bibliotheek de gele lamp aan. Jules was er om zijn zus te halen. In de gang zag hij honderd opgeladen fietslampen op tafel liggen. Die avond was er een buurttocht. De organisatoren hadden de voorbije week lampen uitgeleend aan fietsers die er geen hadden. De bibliotheek had ze gisteren samen opgeladen. Het systeem zag dat als hoog verbruik van één gebouw.',
      'De lampen waren op tijd klaar, maar de stroom van de leeszaal ging die middag uit. In de wijkvergadering stelde iemand voor om de bibliotheek voortaan altijd voorrang te geven. Een ander stelde voor om geen lampen meer samen op te laden. Jules tekende honderd streepjes op het bord. “Wat als we gewoon laten zien voor wie dat verbruik was?” vroeg hij. Hij wilde de energie nog steeds tellen. Hij vroeg zich alleen af of alle kosten bij één deur moesten terechtkomen.',
      'De wijk testte twee weken een vakje voor gezamenlijke activiteiten. Een groep moest vooraf aanmelden hoeveel stroom nodig was en waarom. Na de proef zou de wijk opnieuw beslissen. Jules keek de volgende donderdag naar de lamp boven de bibliotheekdeur. Die was groen. Hij wist dat één groen lampje nog geen bewijs was dat de nieuwe regel altijd beter werkte. Hij schreef het wel op bij de eerste resultaten.'
    ],
    questions: [
      ['Informatie vinden', 'Waarom kregen gebouwen die gisteren veel stroom verbruikten eerst minder?', ['De wijk wilde voorkomen dat één gebouw steeds veel stroom kreeg.', 'De gebouwen moesten hun verbruik volledig kunnen verbergen.', 'De bibliotheek had altijd voorrang op andere gebouwen.'], 0, 'De oorspronkelijke regel moest beletten dat één gebouw voortdurend alle beschikbare stroom kon vragen.'],
      ['Afleiden', 'Wat ziet de verdeelregel niet bij de bibliotheek?', ['Dat er helemaal geen stroom is gebruikt.', 'Dat de lampen van de bibliotheek technisch niet werken.', 'Dat de stroom in één gebouw gebruikt werd voor veel mensen uit de wijk.'], 2, 'De computer ziet waar het laden gebeurde. Hij weet niet wie uiteindelijk voordeel haalt uit die stroom.'],
      ['Verbanden leggen', 'Hoe verschilt Jules’ voorstel van “geef de bibliotheek altijd voorrang”?', ['Jules wil geen verbruik meer meten.', 'Hij wil gezamenlijke activiteiten zichtbaar maken, ook wanneer ze elders plaatsvinden.', 'Jules wil dat alleen de bibliotheek de nieuwe regeling kan gebruiken.'], 1, 'Het voorstel gaat over het doel van het verbruik, niet over een vast voorrecht voor één gebouw.'],
      ['Afleiden', 'Wat zegt Jules’ reactie op het groene lampje over zijn manier van denken?', ['Hij weet dat een eerste goede uitkomst nog niet genoeg is voor een algemene conclusie.', 'Hij vermoedt dat de nieuwe verdeelregel die week al is stopgezet.', 'Hij vindt dat je de uitkomst van een proef nooit moet opschrijven.'], 0, 'Hij neemt het signaal op als eerste waarneming. De wijk zal pas na de hele proef beslissen.']
    ]
  },
  {
    id: 'kaart-zonder-stippen',
    title: 'De kaart zonder stippen',
    category: 'Mysterie',
    difficulty: 'Verder',
    minutes: 4,
    art: 'map',
    teaser: 'Bij een oriëntatietocht ontvangt Jules een tweede kaart. Daarop staat niets behalve een lijn langs het water.',
    words: [['Oriëntatiepunt', 'Iets herkenbaars in de omgeving waarmee je bepaalt waar je bent.']],
    paragraphs: [
      'Aan het begin van de oriëntatietocht kreeg Jules twee kaarten. De eerste had zes genummerde stippen. De tweede was bijna leeg. Op die kaart liep alleen een blauwe lijn langs het water, met één korte zwarte streep ernaast. Het mapje van de begeleider bevatte de instructie: “Neem de tweede kaart erbij zodra er iets verandert dat niet op de eerste staat.” Zijn groep legde de lege kaart onder in de rugzak.',
      'De eerste vier posten vonden ze snel. Bij de vijfde stip wees een pijl naar een houten brug. Bij de oever zagen ze dat een stuk van het brugdek was weggehaald. Er hing een bord dat de oversteek gesloten was. Jade wilde terug naar de vorige post, want op de eerste kaart stond geen tweede brug. Jules haalde de lege kaart boven. Daar stond de blauwe lijn op de oever waarop zij nu liepen.',
      'Ze volgden het pad aan het water. De zwarte streep lag volgens Jules op de plaats waar het pad een landweg kruiste. Toen ze daar stonden, zagen ze verderop een smalle doorgang onder een spoorbrug. Het was geen nieuwe oversteek. Via de doorgang kwamen ze voorbij de natte berm en op een weg die aan dezelfde kant verderliep naar post zes.',
      'Op de laatste post lag een briefje: “De route was groter dan de lijst met stippen.” Jade telde hun kaartjes. Ze hadden er vijf in plaats van zes. De begeleider gaf hun ook het vijfde kaartje, omdat ze de gesloten brug hadden opgemerkt en de omleiding hadden gekozen. Volgens hem was het kaartlezen pas echt begonnen waar de eerste kaart niet meer volstond.'
    ],
    questions: [
      ['Informatie vinden', 'Wanneer moeten de leerlingen de tweede kaart gebruiken?', ['Wanneer ze bij de eerste post aankomen.', 'Wanneer er onderweg iets is veranderd dat niet op de eerste kaart staat.', 'Wanneer iemand onderweg een eerste kaart verliest.'], 1, 'De begeleider noemt precies die voorwaarde in het mapje bij de start.'],
      ['Verbanden leggen', 'Waarom volstaat de eerste kaart niet bij post vijf?', ['Een brug is gesloten terwijl de kaart die route nog aangeeft.', 'De kaart toont een ander water dan het water dat ze volgen.', 'De groep heeft de kaart verkeerd gevouwen.'], 0, 'De kaart wijst naar de brug, maar de situatie is gewijzigd. Ze hebben een alternatief nodig.'],
      ['Afleiden', 'Wat betekent het briefje over de “lijst met stippen”?', ['Elke post ligt verder weg dan op de kaart is getekend.', 'Er staan per ongeluk te weinig nummers op beide kaarten.', 'De opdracht draait ook om het lezen van wat er onderweg werkelijk gebeurt.'], 2, 'De stippen zijn vaste doelen. Bij de brug moeten ze daarnaast kijken naar de veranderde omgeving.'],
      ['Hoofdgedachte', 'Welk inzicht staat centraal?', ['Een bruikbare kaart vraagt soms dat je aanwijzingen uit de echte omgeving toevoegt.', 'Je volgt bij een tocht altijd de kortste getekende route.', 'Een kaart zonder genummerde stippen kan niets nuttigs tonen.'], 0, 'De tweede kaart wordt pas nuttig wanneer de leerlingen die combineren met het pad en de afgesloten brug die ze zelf zien.']
    ]
  },
  {
    id: 'lege-knop',
    title: 'De knop zonder label',
    category: 'Technologie',
    difficulty: 'Start',
    minutes: 3,
    art: 'signal',
    teaser: 'Aya test een schoolapp. De ontwerpers denken dat de knop vanzelf duidelijk is.',
    words: [['Prototype', 'Een eerste werkend voorbeeld waarmee je een ontwerp kunt uitproberen.']],
    paragraphs: [
      'Voor het schoolfeest maakte een groep een app waarmee bezoekers konden aanduiden welke activiteiten ze wilden volgen. Op het startscherm stond een lijst met activiteiten en onderaan een ronde knop met een pijl. “Die brengt je naar je gekozen activiteiten,” zei ontwerper Noor. De groep kon de app zonder aarzelen gebruiken. Ze hadden immers zelf alle schermen gemaakt.',
      'Aya kwam de app testen. Ze duwde op de pijl vóór ze iets had gekozen. Een leeg scherm verscheen. Ze ging terug en begon bovenaan opnieuw te lezen. Noor wilde zeggen waar ze moest tikken, maar de begeleider vroeg om eerst te kijken. Na een korte stilte zei Aya dat ze verwachtte dat de pijl naar de volgende activiteiten zou gaan.',
      'De ontwerpers probeerden daarna twee aanpassingen. Ze tekenden eerst een grotere pijl. Een andere testpersoon klikte er opnieuw te snel op. In de tweede versie stond er “Mijn gekozen activiteiten” op de knop. De volgende bezoeker las die woorden, koos eerst twee activiteiten en ging dan pas naar het overzicht.',
      'Noor liet de pijl naast de tekst staan omdat hij de richting nog altijd goed weergaf. Ze voegde op het lege scherm ook een terugweg toe met “Kies een activiteit”. Toen Aya de tweede versie uitprobeerde, vond ze zelf de lijst terug. In het verslag noteerde Noor dat een testpersoon soms een andere betekenis leest in hetzelfde teken. Die betekenis wordt pas zichtbaar als je hen even laat proberen.'
    ],
    questions: [
      ['Informatie vinden', 'Waar verwacht Aya dat de pijl haar naartoe brengt?', ['Naar een formulier voor het schoolfeest.', 'Naar resultaten die andere bezoekers al gekozen hebben.', 'Naar de volgende activiteiten.'], 2, 'Aya zegt na het proberen dat ze achter de pijl meer activiteiten verwachtte.'],
      ['Verbanden leggen', 'Waarom lost een grotere pijl het probleem niet op?', ['Het teken wordt zichtbaarder, maar de betekenis blijft dezelfde onduidelijke.', 'De grotere pijl werkt niet meer op het startscherm.', 'De volgende testpersoon ziet kleine tekens liever dan grote.'], 0, 'Zowel de originele als de grotere pijl vertelt op zichzelf niet wat er achter de knop staat.'],
      ['Afleiden', 'Waarom vraagt de begeleider Noor om eerst te kijken?', ['De app moet per se zonder enig testverslag worden gebruikt.', 'Wanneer Noor helpt, kan de groep minder goed zien wat Aya zelf begrijpt.', 'Aya heeft de echte bedoeling van de knop al eerder gehoord.'], 1, 'Zonder hulp wordt duidelijk welke verwachting de knop oproept bij iemand die de app voor het eerst ziet.'],
      ['Hoofdgedachte', 'Wat leert de groep door de test?', ['Meer labels maken iedere eenvoudige app automatisch beter.', 'Testpersonen moeten weten hoe het ontwerp gemaakt werd.', 'Wat logisch is voor de maker, kan voor een nieuwe gebruiker iets anders betekenen.'], 2, 'De ontwerpers kennen de functie al. De test laat zien dat een nieuwe bezoeker de pijl anders leest.']
    ]
  }
].map(readingStory));
