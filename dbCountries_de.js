const countries = [
  {
    id: 1545484,
    idCountry: 1,
    country: 'Schweiz',
    population: 8570000,
    capital: 'Bern',
    currency: 'Schweizer Franc',
    description:
      'Ein souveräner Staat, eine Bundesrepublik, bestehend aus 26 Kantonen mit Bundesbehörden in Bern. Die größten Städte: Genf, Zürich, Bern, Basel, Lausanne, Luzern',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c6aa5f2c4de30e8a6058d6e4a9f07894-l&n=33&w=576&h=720&q=60',
    video: 'https://www.youtube.com/embed/tQIgwox2nmA',
  },
  {
    id: 24654846,
    idCountry: 2,
    country: 'Dominikanische Republik',
    population: 10499707,
    capital: 'Santo Domingo',
    currency: 'dominikanischer Peso',
    description:
      'Der Staat im östlichen Teil der Insel Haiti und auf den Küsteninseln. Der westliche Teil der Insel wird von der Republik Haiti besetzt. Die Insel ist Teil des Archipels der Großen Antillen.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=767ea8cc1326a0e2587a6b33fc3f5847-l&n=33&w=624&h=720&q=60',
    video: 'https://www.youtube.com/embed/27r5PAyeTFg',
  },
  {
    id: 242425566,
    idCountry: 3,
    country: 'Venezuela',
    population: 28515829,
    capital: 'Caracas',
    currency: 'venezolanischer Bolivar',
    description:
      'Der Staat im Norden Südamerikas. Es wird von der Karibik und dem Atlantik im Norden gewaschen, grenzt an Guyana im Osten, Brasilien - im Süden und Kolumbien - im Westen.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6e48385081e754a7658be768f9a440ac-l&n=33&w=967&h=720&q=60',
    video: 'https://www.youtube.com/embed/SmVAoOGSvPQ',
  },
  {
    id: 242425566,
    idCountry: 4,
    country: 'Albanien',
    population: 2845955,
    capital: 'Tirana',
    currency: 'albanischer lek',
    description:
      'Der Staat im westlichen Teil der Balkanhalbinsel. Die Bevölkerung, nach Angaben des Instituts für Statistik Albanien zum 1. Januar 2017, ist 2 876 591 Menschen, das Gebiet-28 748 km2. Platz in der Welt nach der Bevölkerung und 139-e nach dem Territorium.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c88f410e342d984a30f1622b3e509a80-l&n=33&w=540&h=720&q=60',
    video: 'https://www.youtube.com/embed/gwgIiYI43qs',
  },
  {
    id: 24576568,
    idCountry: 5,
    country: 'Deutschland',
    population: 83149300,
    capital: 'Berlin',
    currency: 'Euro',
    description:
      'Staat in Mitteleuropa. Fläche - 357 408,74 km. Bevölkerung am 30. September 2019 - 83 149 300 Einwohner. Platz in der Welt nach der Bevölkerung und 62.in der Welt nach dem Territorium.',
    picture: 'https://www.1zoom.ru/big2/982/324344-svetik.jpg',
    video: 'https://www.youtube.com/embed/hbb4PYiSnVs',
  },
  {
    id: 35876568,
    idCountry: 6,
    country: 'Irland',
    population: 4977400,
    capital: 'Dublin',
    currency: 'Euro',
    description:
      'Ein Staat in Westeuropa, der den größten Teil der Insel Irland einnimmt. Im Norden grenzt es an Nordirland. Fläche-70,2 Tausend km2. Der Name des Landes kommt von Eire "Staat".',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=39f0118c1171dfc754ad6a425c68e615-l&n=33&w=480&h=720&q=60',
    video: 'https://www.youtube.com/embed/GSlEfFM7CFo',
  },
  {
    id: 42076568,
    idCountry: 7,
    country: 'Georgia',
    population: 3716858,
    capital: 'Tiflis',
    currency: 'georgische lari',
    description:
      'Der Staat befindet sich im westlichen Teil des Kaukasus an der Ostküste des Schwarzen Meeres. Bezieht sich auf Vorderasien; wird oft als ein Land an der Kreuzung von Europa und Asien, manchmal - als Teil des modernen Europa.',
    picture:
      'https://cdn.fishki.net/upload/post/2019/05/22/2985752/015ae4ee2b27057390111dab27044553.jpg',
    video: 'https://www.youtube.com/embed/0xluX6E2tKo',
  },
  {
    id: 45076568,
    idCountry: 8,
    country: 'Estland',
    population: 1329460,
    capital: 'Tallinn',
    currency: 'Euro',
    description:
      'Ein Staat, der in Nordeuropa an der Ostküste der Ostsee liegt und von den Gewässern der Finnischen und Rigaer Bucht umspült wird. Im Osten grenzt es an Russland, im Süden an Lettland. Im Norden, im Finnischen Meerbusen, verläuft die Seegrenze mit Finnland. Im Norden und Westen wird von den Gewässern der Ostsee gewaschen.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74dcfc8ea1de9c8f9c102b1f5276be26&n=13',
    video: 'https://www.youtube.com/embed/fibYq834w14',
  },
];

const attraction = [
  {
    id: 123343241323,
    idCountry: 1,
    name: 'Genfer See',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0293a1b505899db20d74a9702b85200d&n=13',
    description:
      'Der größte See der Alpen und der zweitgrößte See Mitteleuropas. Es liegt in den Grenzen der Schweiz und Frankreich. Die Fläche beträgt 582 km2. Die Höhe über dem Meeresspiegel beträgt 372 m.',
  },
  {
    id: 1232132131,
    idCountry: 1,
    name: 'Der sterbende Löwe',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24f03e274b1b95b02efa63bb0666f89a&n=13',
    description:
      'Die weltberühmte skulpturale Komposition, die nach der Skizze Bertel Torvaldsen in der Schweizer Stadt Luzern geschaffen ist. Es ist der Tapferkeit der Schweizer Gardisten gewidmet, die am Tag des Aufstands am 10.August 1792 beim Widerstand gegen den Sturm des Tuileries-Palastes fielen.',
  },
  {
    id: 234314667,
    idCountry: 1,
    name: 'Berner Dom',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5ad7f323fcf46dd9f2e454f7537c2df6&n=13',
    description:
      'Die evangelische Kathedrale befindet sich im südlichen Teil der Altstadt von Bern. Die Kathedrale gilt als die wichtigste spätgotische Kirche der Schweiz. Aus architektonischer Sicht ist die Kathedrale eine dreischiffige Basilika.',
  },
  {
    id: 547653524,
    idCountry: 1,
    name: 'Jungfrau Berg',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=bec958f4d84feb391810e2e28aa8edb3&n=13',
    description:
      'Einer der bekanntesten Berggipfel der Schweiz. Seine Höhe beträgt 4158 Meter über dem Meeresspiegel. Es ist der dritthöchste Berg der Berner Alpen, der zusammen mit den Bergen Eiger und Mönch ein bemerkenswertes Trio bildet.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Kapellbrücke',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=f07bf7b30ab806a1dbb7718dba125e47&n=13',
    description:
      'Alte Brücke in der Schweizer Stadt Luzern am Fluss Royce. Die älteste hölzerne überdachte Brücke Europas, eine der wichtigsten Sehenswürdigkeiten der Schweiz und das Wahrzeichen der Stadt Luzern. Die Länge der Brücke beträgt 204,70 m. Die Kapellbrücke wurde im Jahr 1365 gebaut.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Genfer Brunnen',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8c7cfa17200ab8c43aee211038818718&n=13',
    description:
      'Der Brunnen am Genfer See in Genf, eine wichtige Sehenswürdigkeit der Stadt und einer der größten Brunnen der Welt.',
  },
  {
    id: 56153452,
    idCountry: 2,
    name: 'Bucht von Samana',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7507100d5891b5006577241dc23b3de0-l&n=33&w=1011&h=720&q=60',
    description:
      'Die Bucht im Atlantischen Ozean vor der Nordostküste der Dominikanischen Republik südlich der gleichnamigen Stadt und Landzunge. Die wichtigsten Städte an der Küste sind Santa Barbara de Samana, Sanchez, Sabana de la Mar. Der Name der Bucht ist von Christoph Kolumbus gegeben-Golfo de las Flechas.',
  },
  {
    id: 51321452,
    idCountry: 2,
    name: 'Kathedrale von Santo Domingo',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=28acb749fc42865456130c86219320fb-l&n=33&w=960&h=720&q=60',
    description:
      'Die katholische Kathedrale in Santo Domingo, der Hauptstadt der Dominikanischen Republik. Die Kathedrale der Erzdiözese Santo Domingo wird von Kardinal Nicolas de Jesús López Rodríguez geleitet. Die Kathedrale hat den Ehrenstatus der»kleinen Basilika".',
  },
  {
    id: 51654452,
    idCountry: 2,
    name: 'Alcazar de Colon',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=37f29fb2b6c130f76524eefd8e17b0d6-l&n=33&w=1086&h=720&q=60',
    description:
      'Die älteste Residenz der Vizekönige in Amerika befindet sich in Santo Domingo, der Hauptstadt der Dominikanischen Republik. Es ist Teil der Kolonialstadt Santo Domingo, die 1990 in die Liste des Weltkulturerbes aufgenommen wurde. Das Museum Alcázar de Diego Colon, dessen Sammlungen Kunstgegenstände aus dem späten Mittelalter und der Renaissance, die in den 1950er Jahren vom Museum erworben wurden, bilden, ist heute in der ehemaligen Residenz untergebracht. Jahrhundert ist besonders einzigartig in der Karibik und umfasst Wandteppiche, die von Handwerkern aus der flämischen Familie Van den Höcke auf Pappen des französischen Künstlers Charles Lebrin erstellt wurden. Alcazar de Colon ist heute das meistbesuchte Museum in Santo Domingo.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'Altos de Chavon',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8b308ae6f0a4dd9c3f6ad6f30dd3a87e&n=13',
    description:
      'Das künstlich nachgebaute mittelalterliche Gebiet ist eine exakte Nachbildung eines spanischen Dorfes aus dem 15.Jahrhundert, der Stadt der Künstler und Handwerker genannt wird.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'Nationales Pantheon der Dominikanischen Republik',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e7ac14b1bd3cf14debf19b566618e0d4-l&n=33&w=540&h=720&q=60',
    description:
      'Es wurde in 1714-1746 von dem Spanier Geronimo Quesada y Garzón gebaut und war ursprünglich die Kirche des Jesuiten-Ordens. Das Gebäude wurde im neoklassizistischen Stil der Renaissance gebaut. Heute dient das Gebäude als nationales Symbol der Dominikanischen Republik und dient als letzte Ruhestätte der ehrenamtlichsten Bürger der Republik.',
  },
  {
    id: 523446572,
    idCountry: 3,
    name: 'Miraflores-Palast',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8ba382a61816ce919cc0f56363d5a6fb-l&n=33&w=996&h=720&q=60',
    description:
      'Es ist die offizielle Residenz des Präsidenten der Bolivarischen Republik Venezuela und der Sitz des Präsidenten ist der Palast von La Casona. Das Hotel liegt an der Avenue Urdaneta, in der Gemeinde Bolivar-Befreier in Caracas.',
  },
  {
    id: 578693022,
    idCountry: 3,
    name: 'Museum der Revolution',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=60c5363599b46aa4b3ab3b06e4f2ad8c&n=13',
    description:
      'Es ist ein vielseitiges kulturelles und historisches Gebäude. Januar, Gemeinde Bolivar Liberator in der Metropolregion Caracas. Dies ist die letzte Ruhestätte des venezolanischen Präsidenten Hugo Chavez.',
  },
  {
    id: 578235022,
    idCountry: 3,
    name: 'Canaima Nationalpark',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5097bad31deb2e3a5f5af8bc7b654cbd-l&n=13',
    description:
      'Park im Südosten Venezuelas an der Grenze zu Brasilien und Guyana. Die Fläche des Parks beträgt ca. 30.000 km². Es befindet sich im Bundesstaat Bolivar und befindet sich ungefähr auf dem gleichen Gebiet wie der Naturpark Gran Sabana.',
  },
  {
    id: 523545022,
    idCountry: 3,
    name: 'Ibrahim al-Ibrahim Moschee',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=aae10282da9ed112c5e956a78b2e199e-l&n=33&w=957&h=720&q=60',
    description:
      'Eine Moschee in der Hauptstadt von Venezuela, Caracas, in der Region El Recreo. Gilt als zweitgrößte Moschee Lateinamerikas nach dem King Fahd Islamic Cultural Center in Buenos Aires, Argentinien.',
  },
  {
    id: 523445022,
    idCountry: 3,
    name: 'Finanzzentrum Confinance',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e2281299a7516ad062eb8339def41293-l&n=33&w=540&h=720&q=60',
    description:
      'Unfertiger Wolkenkratzer in Caracas; der dritthöchste in Venezuela. Aufgrund der Tatsache, dass in dem Gebäude seit 2007 arme Bewohner von Caracas leben, wird der Wolkenkratzer oft als "vertikale Slums" bezeichnet. Mit einer maximalen Einwohnerzahl von etwa 5.000 Einwohnern ist es die am dichtesten besiedelte Kniebeuge der Welt.',
  },
  {
    id: 526572022,
    idCountry: 4,
    name: 'Denkmal für Skanderbeg',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7933edb1fa307a25b700a94772d0084e-l&n=33&w=540&h=720&q=60',
    description:
      'Denkmal für Georgi Kastrioti, genannt Skanderbeg, der Anführer des anti-osmanischen albanischen Aufstands, der Nationalheld Albaniens, gesungen in Volksliedern. Das Hotel liegt im Zentrum von Tiranas Hauptplatz, der seinen Namen trägt.',
  },
  {
    id: 524672022,
    idCountry: 4,
    name: 'Amphitheater in Durres',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=afb2a83672186b664f3808f59f342afe-l&n=13',
    description:
      'Römisches Amphitheater in der modernen Stadt Durres in Albanien. Das Amphitheater wurde zu Beginn des 1. Jahrhunderts erbaut und ist nach anderen Quellen im 2. Jahrhundert eines der größten Denkmäler der Antike in Albanien und auf dem Balkan. Das Denkmal steht unter dem Schutz des Albanischen Instituts für Kulturdenkmäler.',
  },
  {
    id: 553472022,
    idCountry: 4,
    name: 'Pyramide in Tirana',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=47d23bcbd5289e5633537f9282010955-l&n=13',
    description:
      'Das ehemalige Museum in Tirana, der Hauptstadt Albaniens, wurde am 14. Oktober 1988 eröffnet. Es wurde von der Tochter und dem Schwiegersohn von Enver Hoxha, dem Herrscher Albaniens in den Jahren 1946-1985, entworfen und erzählte von seinem Leben. Nach dem Zusammenbruch des kommunistischen Regimes im Jahr 1991 wurde das Museum geschlossen und das Gebäude beherbergte einen Konferenzsaal und ein Ausstellungszentrum. Wird manchmal als "Mausoleum von Enver Hoxha" bezeichnet, obwohl dies nicht ganz richtig ist. Die Struktur wurde als die teuerste Struktur konzipiert, die jemals in Albanien gebaut wurde.',
  },
  {
    id: 21232022,
    idCountry: 4,
    name: 'Grab von Kaplan Pascha',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2c566c77ba6c93633def504b1fe0d39e-l&n=33&w=1084&h=720&q=60',
    description:
      'Das Grab von Kaplan Pasha Toptani wurde 1820 neben der Suleiman Pasha Moschee erbaut. Das Denkmal wurde aus weichem weißem Kalkstein erbaut und besteht aus acht gewölbten runden Säulen. Das Grab hatte zunächst ein Holzdach und war vier Meter hoch. Die Tafel auf dem Grab wurde schwer beschädigt, aber Sie können immer noch die Inschrift darauf erkennen, dass der Herrscher von Tirana, Kaplan Pasha Toptani, ursprünglich aus Kruja, im Oktober 1819 starb. Die Moschee und das Denkmal wurden im Zweiten Weltkrieg schwer beschädigt. Dieses muslimische Grab wurde 1948 zum nationalen Kulturdenkmal erklärt, wonach der Grabstein und der Sarkophag von Kaplan Pascha entfernt wurden.',
  },
  {
    id: 2125673,
    idCountry: 4,
    name: 'Auferstehungskathedrale',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=be2ba48280af42b799325113bba8a650-l&n=33&w=720&h=720&q=60',
    description:
      'Kathedrale der Korcha-Metropole der albanisch-orthodoxen Kirche in Korcha, Albanien. Erbaut im neo-byzantinischen Stil. An der Stelle der Kathedrale stand bis zu ihrer Zerstörung durch die kommunistischen Behörden im Jahr 1968 während einer antireligiösen Kampagne die St.-Georgs-Kathedrale.',
  },
  {
    id: 5425673,
    idCountry: 4,
    name: 'Mutter Albanien',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2842811e2491dbdcadb38d4e3379ff2e-l&n=33&w=540&h=720&q=60',
    description:
      'Zwölf Meter hohe Statue in der Nähe des Nationalfriedhofs der Märtyrer Albaniens. Erbaut 1971. Die Autoren des Denkmals sind Muntas Dhrami, Christak Rama und Shaban Haderi.',
  },
  {
    id: 5423563,
    idCountry: 5,
    name: 'BMW Museum',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=71dd050f3844a36ca7c2f277cfcf0924-l&n=33&w=1080&h=720&q=60',
    description:
      'Museum zur Geschichte von BMW in München in der Nähe des BMW Hauptgebäudes. Das Museum zeigt eine Ausstellung von BMW Autos und Motorrädern in der Geschichte der Marke.',
  },
  {
    id: 7653563,
    idCountry: 5,
    name: 'Reichstag',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=48322e69be88ec28a6ee326af5457f90-l&n=13',
    description:
      'Historisches Gebäude in Berlin, in dem 1894-1933 der gleichnamige deutsche Staat - der Reichstag des Deutschen Reiches und der Reichstag der Weimarer Republik - saß. In der Sowjetunion wurde 1945 der Bau des Deutschen Bundestages zum Hauptsymbol des nationalsozialistischen Deutschlands erklärt. I.V. Stalin befahl, das Siegesbanner darauf zu hissen. In dem rekonstruierten Reichstagsgebäude befindet sich seit 1999 der Bundestag.',
  },
  {
    id: 7953563,
    idCountry: 5,
    name: 'Brandenburger Tor',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2295073215a31f9ea3e4b922aea1ad11-l&n=33&w=539&h=720&q=60',
    description:
      'Das einzige erhaltene Stadttor Berlins, das Hauptsymbol der Stadt. Das Hotel liegt im zentralen Stadtteil Mitte des Pariser Platzes, wo der Boulevard Unter den Linden auf den Tiergarten trifft. Dieses Tor zur Berliner Zollmauer wurde zwischen 1788 und 1791 zum Gedenken an die Friedensstiftung in den Niederlanden errichtet.',
  },
  {
    id: 7586563,
    idCountry: 5,
    name: 'Kölner Dom',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a2041b4aad8a99987f5dffc693bb3920&n=13',
    description:
      'Römisch-katholischer gotischer Dom in der Stadt Köln. Platz drei in der Liste der höchsten Kirchen der Welt und ist in der Liste der Weltkulturerbestätten enthalten.',
  },
  {
    id: 7958793,
    idCountry: 5,
    name: 'Berliner Mauer',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5aa38643b5d2bed73e8dce979b0fe0cc-l&n=13',
    description:
      'Eine vom Ingenieurwesen ausgerüstete und befestigte Staatsgrenze der Deutschen Demokratischen Republik, die auf dem Gebiet der DDR um Westberlin errichtet wurde und vom 13. August 1961 bis 9. November 1989 bestand. Die Berliner Mauer teilte den westlichen und östlichen Teil der Stadt und trennte Westberlin vom Gebiet der DDR. Die Gesamtlänge der Mauer betrug 155 km.',
  },
  {
    id: 7768793,
    idCountry: 5,
    name: 'Rotes Rathaus',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6f314ca7b7fc381e405b6a3fdc70e8b2&n=13',
    description:
      'Historisches Gebäude im Zentrum Berlins, benannt nach seiner roten Backsteinfassade. Erbaut in den Jahren 1861-1869 im halb Renaissance-halb gotischen Stil vom Architekten G.F.Wesemann.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Dublin Castle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74a9e12f9bc1d73808a86eb56dc1ad35-l&n=13',
    description:
      'Der Hauptkomplex des Regierungsgebäudes in Dublin. Bis 1922 - der Hauptaußenposten Großbritanniens in Irland. Obwohl die Burg bereits unter König John, dem ersten Lord von Irland, existierte, stammen die meisten Gebäude des Komplexes aus dem 18. Jahrhundert. 1922 wurde die Burg feierlich an die erste irische Regierung unter der Leitung von Michael Collins übertragen.',
  },
  {
    id: 7895993,
    idCountry: 6,
    name: 'Rock of Cashel',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c2e2618fa5861e695c26b6e4727bbbbd-l&n=33&w=908&h=720&q=60',
    description:
      'Eine heruntergekommene Burg des XII-XIII Jahrhunderts in der Stadt Cashel in der Grafschaft South Tipperary in Irland. Nach lokalen Legenden diente der Hügel, auf dem die Burg steht, vor der normannischen Invasion mehrere hundert Jahre lang als Wohnsitz lokaler Herrscher.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Newgrange',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e8367d40d77a369aa776445ebac9b04f-l&n=13',
    description:
      'Ein Megalithkultgebäude in Irland, ein Korridorgrab, das Teil des Bru-na-Boyne-Komplexes ist. Newgrange stammt aus dem Jahr 2500 v. e. Das Hotel liegt 40,2 km nördlich von Dublin im Boyne Valley. National Monument of Ireland unter der Nummer 147',
  },
  {
    id: 7559893,
    idCountry: 6,
    name: 'Dublin Nadel',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=3ce752d458942b57988342a1d6c92b16&n=13',
    description:
      'Ein nadelförmiges Stahldenkmal in Dublin am nördlichen Ende der O`Connell Street, der Hauptstraße der Stadt. Höhe - 120 Meter. Die Dublin Needle wurde 2003 von der Firma Ian Ritchie an der Stelle des Denkmals für Admiral Nelson errichtet, das 1966 von der IRA im Rahmen der Kampagne des Rathauses zur Modernisierung des Stadtzentrums gesprengt wurde.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Loch Ree',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=13b6ade7ad22eb00ec4b3c471538121a&n=13',
    description:
      'Ein See in Irland am Shannon River; einer der drei großen Seen an diesem Fluss und einer der Seen in Irland, an denen das Monster mit dem Pferdekopf gesehen wurde; 2001 fand auf dem See eine Suchexpedition statt, über die die irischen Medien berichteten. Außerdem ist der Legende nach eine Unterwasserstadt mit einer Kathedrale im See versteckt.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Titanic Belfast',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0e588f750142cdbde0075bed50bd80ae&n=13',
    description:
      'Belfast Maritime Heritage Museum und Denkmal an der Stelle der ehemaligen Werft Harland & Wolff im Titanic Quarter. Eröffnet am 1. April 2012. Es erzählt die Geschichte der unglücklichen Titanic, die 1912 auf ihrer Jungfernfahrt unterging, und ihrer Brüder, der Schiffe Olympic und Britannic.',
  },
  {
    id: 7569893,
    idCountry: 7,
    name: 'Dreifaltigkeitskirche',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=086a44a546ddbfbd4a2beb7e4dfd382c&n=13',
    description:
      'Es befindet sich auf einer Höhe von 2.170 m am Fuße von Kasbek entlang der georgischen Militärstraße im georgischen Dorf Gergeti am rechten Ufer des Chkheri, direkt über dem Dorf Stepantsminda. Der im 14. Jahrhundert erbaute Schrein ist der einzige Kreuzkuppeltempel in der Region Khevi.',
  },
  {
    id: 8599893,
    idCountry: 7,
    name: 'Katskhi Kloster',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c950e81d33143e8b2e6fcd076fca4d79&n=13',
    description:
      'Mittelalterliches Kloster in Georgien, im Dorf Katskhi in der Nähe der Stadt Chiatura gelegen. Es wurde vom Baguashi-Clan in der Zeit von 988 bis 1014 erbaut. Das sechseckige Kirchengebäude zeichnet sich durch eine reich verzierte Verzierung aus. Das 1924 unter sowjetischer Herrschaft geschlossene Kloster wurde 1990 wiederbelebt und wird derzeit von der Diözese Sachkhere und Chiatura der georgisch-orthodoxen Kirche verwaltet.',
  },
  {
    id: 8545893,
    idCountry: 7,
    name: 'Die Brücke des Friedens',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=1a03552b4ab0abc419c1921493c603a7&n=13',
    description:
      'Fußgängerbrücke über den Kura-Fluss in Tiflis, Georgien. Verbindet die Heraclius II Straße und den Rike Park. Stromaufwärts befindet sich die Baratashvili-Brücke, darunter die Metekhi-Brücke. Die Brücke hat einen 156 Meter hohen Stahlrahmen, der mit Glas bedeckt ist.',
  },
  {
    id: 8145893,
    idCountry: 7,
    name: 'Vulkan Kazbek',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c20fd8b6dea9adca542a253a504365b5&n=13',
    description:
      'Der potenziell aktive Stratovulkan, der östlichste Fünftausend des Kaukasus, hat eine Höhe im baltischen Höhensystem von 5033,8 m. Er befindet sich im östlichen Teil des Zentralkaukasus an der Grenze zwischen Russland und Georgien im östlichen Teil des Kaukasus der Khokh Grat. Der letzte Ausbruch ereignete sich 650 v. e.',
  },
  {
    id: 8176893,
    idCountry: 7,
    name: 'Dadiani-Palast',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=09a9912acbaf8bb0917dcf8fefec4938&n=13',
    description:
      'Die Residenz der megrelianischen Herrscher aus dem Dadiani-Clan in der georgischen Stadt Zugdidi.',
  },
  {
    id: 8256893,
    idCountry: 7,
    name: 'Festung Khertvisi',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=9904bb6583ef39e5c2922c10a016822f&n=13',
    description:
      'Eine der ältesten und am besten erhaltenen Festungen des georgischen Mittelalters. Das Hotel liegt in der Provinz Samtskhe-Javakheti im südlichen Teil von Georgia.',
  },
  {
    id: 7256893,
    idCountry: 8,
    name: 'Valaste Wasserfall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24bcb96e0b64fb057b08d2094ebf2a7d&n=13',
    description:
      'Der höchste Wasserfall in Estland und den baltischen Ländern. 1996 wurde es von einer Kommission der Akademie der Wissenschaften zum Naturerbe und nationalen Symbol Estlands erklärt. Das Hotel liegt im Landkreis Ida-Viru in der Nähe der Stadt Kohtla-Järve.',
  },
  {
    id: 7315893,
    idCountry: 8,
    name: 'Fellin Castle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c25a0d6e4133964144c9ce2b2ed5bd88&n=13',
    description:
      'Schloss des Deutschen Ordens, dessen Bau 1224 an der Stelle einer ehemaligen Siedlung begann. Die Burg war eine der mächtigsten in Livland. Während der polnisch-schwedischen Kriege zu Beginn des 17. Jahrhunderts vollständig zerstört.',
  },
  {
    id: 7426893,
    idCountry: 8,
    name: 'Layuse Schloss',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=b2af7324417b860cbc21f130e9d23e91&n=13',
    description:
      'Livonian Order Castle, gelegen im Dorf Lauzevälja im Landkreis Jõgevamaa, Estland. Es ist derzeit in Trümmern.',
  },
  {
    id: 7435893,
    idCountry: 8,
    name: 'Victoria Bastion',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=623be5c447bd1d46b2dbfd4e781535db-l&n=33&w=1080&h=720&q=60',
    description:
      'Die Verteidigungsstruktur der Stadt Narva, erbaut in den Jahren 1683-1704. Die Bastion wurde während des Großen Nordischen Krieges 1704 zerstört und nach ihrem Ende wieder aufgebaut. Derzeit in der Liste des estnischen Kulturerbes enthalten.',
  },
  {
    id: 7219893,
    idCountry: 8,
    name: 'Ukuoru Wasserfall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a91625b5677de6b3308e4ec84b75a85b-l&n=33&w=471&h=720&q=60',
    description:
      'Ein Wasserfall am Fluss Ukuoja im Landkreis Ida-Viru im nordwestlichen Teil von Sillamäe am Osthang des Päite-Plateaus. Es existiert momentan nicht, der ehemalige Kanal ist trocken.',
  },
  {
    id: 7212393,
    idCountry: 8,
    name: 'Kadriorg',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8668c1f4c0cf995745da4397640f1ab8&n=13',
    description:
      'Barockschloss und Parkensemble in Tallinn. Ekaterinental erhielt seinen Namen zu Ehren der Frau des russischen Kaisers Peter I. - Katharina I.',
  },
];
