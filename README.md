# Klassemonster · Mid-fi prototype

Een klikbaar prototype voor begrijpend lezen in het eerste middelbaar. Open `index.html` in een browser. De site gebruikt gewone HTML, CSS en JavaScript en heeft geen installatie of build nodig.

- **Leerling** kiest uit elf verhalen op drie leesniveaus, bewaart favorieten en oefent vier leesvaardigheden. De leesflow heeft woordhulp, instelbare tekstgrootte, feedback per antwoord en leesbadges.
- **Startgids** laat je een ei uitbroeden, je monster benoemen en kleuren, een korte tekst lezen en zelf een vraag beantwoorden. Een fout antwoord geeft een hint. De juiste oplossing levert één keer XP en klasenergie op.
- **Monsteratelier** heeft 43 opties verdeeld over zeven onderdelen. Je kiest onder meer het lichaam, de ogen, de achtergrond en accessoires. Een monster krijgt een grotere vorm en extra onderdelen naarmate het XP verdient.
- **Klasmonster Atlas** groeit door de eerste afronding van elke tekst per leerling. De score bepaalt die bijdrage niet. Vanaf de tweede groeifase brengt elke leerling één wijzigbare stem uit voor een accessoire.
- **Leerkracht** volgt de klasvoortgang, past het weekdoel aan en maakt opdrachten met maximaal acht vragen. **Ouder** ziet de resultaten van de geselecteerde leerling. Beide rollen kunnen Atlas bekijken.

### Probeer het samen

1. Kies rechtsboven **Robin · Startprofiel**. In een nieuwe browser begint Robin met een ei, 0 XP en zonder resultaten. Open **Start de gids** en volg de vijf stappen.
2. De eerste afgeronde tekst geeft XP en draagt bij aan Atlas. In een verse demo groeit Atlas daarmee naar Bosreus en gaat de stemming open.
3. Wissel naar **Emma · Met voortgang**. In een verse demo heeft ze een afgewerkte tekst, favorieten, een level 4-monster en een opdracht die ze kan hervatten.
4. Open **Monsteratelier → Draai je kijkdoos** om het gepersonaliseerde monster in zijn habitat te bekijken.

De zes leerlingen zijn demoprofielen. Ieder profiel bewaart zijn eigen monster, resultaten, favorieten, leespositie en stap in de gids. Atlas, stemmen en klasinstellingen zijn gedeeld binnen dezelfde browser. Eerdere voortgang uit de eerste twee versies van Klassemonster blijft behouden. Er is geen synchronisatie tussen toestellen.

Op Vercel werkt dit als statische site met preset **Other**, de hoofdmap als root en een leeg buildcommando.

### Ontwerpverkenning

- [Scratch](https://scratch.mit.edu/help/studio/tips/home/) inspireerde de gids waarin elke stap een handeling is.
- [National Geographic Kids](https://kids.nationalgeographic.com/) inspireerde de afwisseling tussen illustraties, lezen en korte vragen.
- [ClassDojo](https://help.classdojo.com/hc/en-us/articles/202739645-Customize-Your-Monster) liet zien welke lichaamsdelen leerlingen zelf kunnen aanpassen.
- [Lalilo](https://lalilo-help.renaissance.com/hc/en-us/articles/10484935118363-Unlocking-worlds-diplomas-badges-treasures-and-stories) koppelt voortgang aan nieuwe omgevingen en beloningen. In Klassemonster veranderen daarom het silhouet en de omgeving mee met de groei.
- [ReadTheory](https://readtheory.org/) gebruikt feedback en leesvoortgang om leerlingen zelfstandig te laten oefenen. Klassemonster geeft uitleg per antwoord en laat de leerling zelf een tekstniveau kiezen.

De habitat gebruikt [CSS-perspectief en lagen in 3D-ruimte](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-style). De illustraties blijven 2D, maar voorgrond, monster en achtergrond draaien op aparte afstanden. De kijkdoos werkt met knoppen en respecteert de systeeminstelling voor minder beweging. Voor vrij ronddraaien rond een volledig geboetseerd monster zou een 3D-model met Three.js een volgende stap zijn.
