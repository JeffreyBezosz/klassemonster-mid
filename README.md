# Klassemonster · Mid-fi prototype

Een klikbaar prototype voor begrijpend lezen in het eerste middelbaar. Open `index.html` in een browser. De site gebruikt gewone HTML, CSS en JavaScript en heeft geen installatie of build nodig.

- **Leerling** kiest uit elf verhalen op drie leesniveaus, bewaart favorieten en oefent vier leesvaardigheden. De leesflow heeft woordhulp, instelbare tekstgrootte, feedback per antwoord en leesbadges.
- **Monsteratelier** heeft 43 opties verdeeld over zeven onderdelen. Je kiest onder meer het lichaam, de ogen, de achtergrond en accessoires. Een monster krijgt een grotere vorm en extra onderdelen naarmate het XP verdient.
- **Klasmonster Atlas** groeit door de eerste afronding van elke tekst per leerling. De score bepaalt die bijdrage niet. Vanaf de tweede groeifase brengt elke leerling één wijzigbare stem uit voor een accessoire.
- **Leerkracht** volgt de klasvoortgang, past het weekdoel aan en maakt opdrachten met maximaal acht vragen. **Ouder** ziet de resultaten van de geselecteerde leerling. Beide rollen kunnen Atlas bekijken.

### Probeer het samen

1. Open als Milan **Monsteratelier** en pas Moss aan.
2. Rond een tekst af. Atlas groeit van Woudwachter naar Bosreus en de stemming gaat open.
3. Kies via het profiel bovenaan een andere demoleerling. Bekijk hun eigen monster en stem mee op het accessoire van Atlas.

De vijf leerlingen zijn demoprofielen. Ieder profiel bewaart zijn eigen monster, resultaten, favorieten en leespositie. Atlas, stemmen en klasinstellingen zijn gedeeld binnen dezelfde browser. Eerdere voortgang van deze versie van Klassemonster wordt bij Milan behouden. Er is geen synchronisatie tussen toestellen.

Op Vercel werkt dit als statische site met preset **Other**, de hoofdmap als root en een leeg buildcommando.

### Ontwerpverkenning

- [ClassDojo](https://help.classdojo.com/hc/en-us/articles/202739645-Customize-Your-Monster) liet zien welke lichaamsdelen leerlingen zelf kunnen aanpassen.
- [Lalilo](https://lalilo-help.renaissance.com/hc/en-us/articles/10484935118363-Unlocking-worlds-diplomas-badges-treasures-and-stories) koppelt voortgang aan nieuwe omgevingen en beloningen. In Klassemonster veranderen daarom het silhouet en de omgeving mee met de groei.
- [ReadTheory](https://readtheory.org/) gebruikt feedback en leesvoortgang om leerlingen zelfstandig te laten oefenen. Klassemonster geeft uitleg per antwoord en laat de leerling zelf een tekstniveau kiezen.
