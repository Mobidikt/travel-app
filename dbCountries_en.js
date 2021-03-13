const countries = [
  {
    id: 1545484,
    idCountry: 1,
    country: 'Switzerland',
    population: 8570000,
    capital: 'Bern',
    currency: 'swiss franc',
    description:
      'A sovereign state, a federal republic consisting of 26 cantons with federal authorities in Bern. Major cities: Geneva, Zurich, Bern, Basel, Lausanne, Lucerne',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c6aa5f2c4de30e8a6058d6e4a9f07894-l&n=33&w=576&h=720&q=60',
    video: 'https://www.youtube.com/embed/tQIgwox2nmA',
    timeZone: 'Europe/Zurich',
    zip: '3011',
  },
  {
    id: 24654846,
    idCountry: 2,
    country: 'Dominican Republic',
    population: 10499707,
    capital: 'Santo Domingo',
    currency: 'dominican peso',
    description:
      'A state in the eastern part of the island of Haiti and on the coastal islands. The western part of the island is occupied by the State of the Republic of Haiti. The island is part of the Greater Antilles archipelago.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=767ea8cc1326a0e2587a6b33fc3f5847-l&n=33&w=624&h=720&q=60',
    video: 'https://www.youtube.com/embed/27r5PAyeTFg',
    timeZone: 'America/Santo_Domingo',
    zip: '10210',
  },
  {
    id: 242425566,
    idCountry: 3,
    country: 'Venezuela',
    population: 28515829,
    capital: 'Caracas',
    currency: 'Venezuelan bolivar',
    description:
      'A country in the north of South America. It is bordered by the Caribbean Sea and the Atlantic Ocean to the north, Guyana to the east, Brazil to the south, and Colombia to the west.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6e48385081e754a7658be768f9a440ac-l&n=33&w=967&h=720&q=60',
    video: 'https://www.youtube.com/embed/SmVAoOGSvPQ',
    timeZone: 'America/Caracas',
    zip: '7940068',
  },
  {
    id: 242425566,
    idCountry: 4,
    country: 'Albania',
    population: 2845955,
    capital: 'Tyrant',
    currency: 'albanian lek',
    description:
      'ГосударA state in the western part of the Balkan Peninsula. The population, according to the Institute of Statistics of Albania as of January 1, 2017, is 2,876,591 people, the territory is 28,748 km2. It ranks 136th in the world in terms of population and 139th in terms of territory.ство в западной части Балканского полуострова. Население, по данным Института статистики Албании на 1 января 2017 года, составляет 2 876 591 человек, территория - 28 748 км². Занимает 136-е место в мире по численности населения и 139-е по территории.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c88f410e342d984a30f1622b3e509a80-l&n=33&w=540&h=720&q=60',
    video: 'https://www.youtube.com/embed/gwgIiYI43qs',
    timeZone: 'Europe/Tirane',
    zip: '1010',
  },
  {
    id: 24576568,
    idCountry: 5,
    country: 'Germany',
    population: 83149300,
    capital: 'Berlin',
    currency: 'euro',
    description:
      'A state in Central Europe. The area of the territory is 357,408. 74 km. The population as of September 30, 2019 is 83,149,300 inhabitants. It ranks 18th in the world in terms of population and 62nd in the world in terms of territory.',
    picture: 'https://www.1zoom.ru/big2/982/324344-svetik.jpg',
    video: 'https://www.youtube.com/embed/hbb4PYiSnVs',
    timeZone: 'Europe/Berlin',
    zip: '10117',
  },
  {
    id: 35876568,
    idCountry: 6,
    country: 'Irish',
    population: 4977400,
    capital: 'Dublin',
    currency: 'euro',
    description:
      'A state in Western Europe that occupies most of the island of Ireland. It borders Northern Ireland to the north. The area is 70.2 thousand km2. The name of the country comes from Eire "state".',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=39f0118c1171dfc754ad6a425c68e615-l&n=33&w=480&h=720&q=60',
    video: 'https://www.youtube.com/embed/GSlEfFM7CFo',
    timeZone: 'Europe/Dublin',
    zip: 'D01',
  },
  {
    id: 42076568,
    idCountry: 7,
    country: 'Georgia',
    population: 3716858,
    capital: 'Tbilisi',
    currency: 'georgian lari',
    description:
      'The state is located in the western part of Transcaucasia on the eastern coast of the Black Sea. It belongs to the Near East; it is often considered as a country at the junction of Europe and Asia, sometimes as part of modern Europe.',
    picture:
      'https://cdn.fishki.net/upload/post/2019/05/22/2985752/015ae4ee2b27057390111dab27044553.jpg',
    video: 'https://www.youtube.com/embed/0xluX6E2tKo',
    timeZone: 'Asia/Tbilisi',
    zip: '0100',
  },
  {
    id: 45076568,
    idCountry: 8,
    country: 'Estonia',
    population: 1329460,
    capital: 'Tallinn',
    currency: 'euro',
    description:
      'A country located in Northern Europe on the eastern coast of the Baltic Sea, washed by the waters of the Gulf of Finland and the Gulf of Riga. It borders Russia to the east and Latvia to the south. In the north, in the Gulf of Finland, there is a sea border with Finland. In the north and west, it is washed by the waters of the Baltic Sea.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74dcfc8ea1de9c8f9c102b1f5276be26&n=13',
    video: 'https://www.youtube.com/embed/fibYq834w14',
    timeZone: 'Europe/Tallinn',
    zip: '10148',
  },
];

const attraction = [
  {
    id: 123343241323,
    idCountry: 1,
    name: 'Lake Geneva',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0293a1b505899db20d74a9702b85200d&n=13',
    description:
      'The largest lake in the Alps and the second largest lake in Central Europe. Located within the borders of Switzerland and France. The surface area is 582 km². Height above sea level - 372 m.',
  },
  {
    id: 1232132131,
    idCountry: 1,
    name: 'Dying lion',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24f03e274b1b95b02efa63bb0666f89a&n=13',
    description:
      'The world famous sculptural composition created according to the sketch of Bertel Thorvaldsen in the Swiss city of Lucerne. Dedicated to the valor of the Swiss guards who fell in the resistance to the assault on the Tuileries Palace on the day of the uprising on August 10, 1792.',
  },
  {
    id: 234314667,
    idCountry: 1,
    name: 'Berne cathedral',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5ad7f323fcf46dd9f2e454f7537c2df6&n=13',
    description:
      'Protestant cathedral located in the southern part of Old Bern. The cathedral is considered the most important late Gothic church in Switzerland. From an architectural point of view, the cathedral is a three-aisled basilica.',
  },
  {
    id: 547653524,
    idCountry: 1,
    name: 'Mount Jungfrau',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=bec958f4d84feb391810e2e28aa8edb3&n=13',
    description:
      'One of the most famous mountain peaks in Switzerland. Its height is 4158 meters above sea level. It is the third highest mountain in the Bernese Alps, which together with the Eiger and Mönch mountains forms a remarkable trio.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Kapellbrücke bridge',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=f07bf7b30ab806a1dbb7718dba125e47&n=13',
    description:
      'An ancient bridge in the Swiss city of Lucerne on the Reuss river. The oldest wooden covered bridge in Europe, one of the main attractions of Switzerland and the symbol of the city of Lucerne. The length of the bridge is 204.70 m. The Kapellbrücke was built in 1365.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Fountain of geneva',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8c7cfa17200ab8c43aee211038818718&n=13',
    description:
      'Fountain on Lake Geneva in Geneva, an important landmark in the city and one of the largest fountains in the world.',
  },
  {
    id: 56153452,
    idCountry: 2,
    name: 'Samana Bay',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7507100d5891b5006577241dc23b3de0-l&n=33&w=1011&h=720&q=60',
    description:
      'A bay in the Atlantic Ocean off the northeastern coast of the Dominican Republic, south of the town and cape of the same name. The main cities on the coast are Santa Barbara de Samana, Sanchez, Sabana de la Mar. The name of the bay was given by Christopher Columbus - Golfo de las Flechas.',
  },
  {
    id: 51321452,
    idCountry: 2,
    name: 'Cathedral of Santo Domingo',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=28acb749fc42865456130c86219320fb-l&n=33&w=960&h=720&q=60',
    description:
      'Catholic Cathedral in Santo Domingo, capital of the Dominican Republic. Cathedral of the Archdiocese of Santo Domingo, headed by Cardinal Nicolas de Jesus Lopez Rodriguez. The cathedral has the honorary status of a "minor basilica".',
  },
  {
    id: 51654452,
    idCountry: 2,
    name: 'Alcazar de Colon',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=37f29fb2b6c130f76524eefd8e17b0d6-l&n=33&w=1086&h=720&q=60',
    description:
      'The oldest residence of viceroys in America, located in Santo Domingo, the capital of the Dominican Republic. It is part of the Colonial City of Santo Domingo, which was included in the World Heritage List in 1990. The former residence now houses the Alcazar de Diego Colon Museum, whose collections include art objects dating from the late Middle Ages and the Renaissance, which were acquired by the museum in the 1950s. The collection of tapestries dating from the 15th to the 17th centuries is particularly unique in the Caribbean region and includes tapestries created by masters from the Flemish Van den Hecke family on cardboard by the French artist Charles Lebrun. The Alcazar de Colon is now the most visited museum in Santo Domingo.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'Altom de Chavon',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8b308ae6f0a4dd9c3f6ad6f30dd3a87e&n=13',
    description:
      'The artificially recreated medieval area is an exact copy of a Spanish village of the 15th century, called the city of artists and craftsmen.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'National Pantheon of the Dominican Republic',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e7ac14b1bd3cf14debf19b566618e0d4-l&n=33&w=540&h=720&q=60',
    description:
      'It was built in 1714-1746 by the Spaniard Geronimo Quesada y Garzón and was originally a church of the Jesuit Order. The building was built in the neoclassical style of the Renaissance. Today, the building acts as a national symbol of the Dominican Republic and serves as the final resting place of the most honorable citizens of the republic.',
  },
  {
    id: 523446572,
    idCountry: 3,
    name: 'Miraflores palace',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8ba382a61816ce919cc0f56363d5a6fb-l&n=33&w=996&h=720&q=60',
    description:
      'It is the official residence of the President of the Bolivarian Republic of Venezuela, and the residence of the President is the La Casona Palace. Located on Urdaneta Avenue, in the Liberator Bolivar municipality in Caracas.',
  },
  {
    id: 578693022,
    idCountry: 3,
    name: 'Museum of the Revolution',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=60c5363599b46aa4b3ab3b06e4f2ad8c&n=13',
    description:
      'It is a multi-purpose cultural and historical building. It is located in the flat area of ​​the 23rd January district of the Liberator Bolivar municipality in the metropolitan area of ​​Caracas. It is the final resting place of Venezuelan President Hugo Chavez.',
  },
  {
    id: 578235022,
    idCountry: 3,
    name: 'Canaima National Park',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5097bad31deb2e3a5f5af8bc7b654cbd-l&n=13',
    description:
      'Park in the southeast of Venezuela, on the border with Brazil and Guyana. The area of ​​the park is about 30,000 km². It is located in the state of Bolivar and occupies approximately the same territory as the Gran Sabana Natural Park.',
  },
  {
    id: 523545022,
    idCountry: 3,
    name: 'Ibrahim al-Ibrahim mosque',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=aae10282da9ed112c5e956a78b2e199e-l&n=33&w=957&h=720&q=60',
    description:
      'A mosque located in the capital of Venezuela, Caracas, in the El Recreo area. Considered the second largest mosque in Latin America after the King Fahd Islamic Cultural Center in Buenos Aires, Argentina.',
  },
  {
    id: 523445022,
    idCountry: 3,
    name: 'Financial Center Confinance',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e2281299a7516ad062eb8339def41293-l&n=33&w=540&h=720&q=60',
    description:
      'Unfinished skyscraper in Caracas; the third highest in Venezuela. Due to the fact that the building has been home to poor residents of Caracas since 2007, the skyscraper is often called “vertical slums”. With a maximum number of residents of about 5 thousand people, it is the most densely populated squat in the world.',
  },
  {
    id: 526572022,
    idCountry: 4,
    name: 'Monument to Skanderbeg',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7933edb1fa307a25b700a94772d0084e-l&n=33&w=540&h=720&q=60',
    description:
      'Monument to Georgi Kastrioti, nicknamed Skanderbeg, the leader of the anti-Ottoman Albanian uprising, the national hero of Albania, sung in folk songs. Located in the center of Tirana`s main square that bears his name.',
  },
  {
    id: 524672022,
    idCountry: 4,
    name: 'Amphitheater in Durres',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=afb2a83672186b664f3808f59f342afe-l&n=13',
    description:
      'Roman amphitheater located in the modern city of Durres in Albania. Built at the beginning of the 1st, according to other sources in the 2nd century, the amphitheater is one of the largest monuments of the ancient period in Albania and the Balkan region. The monument is under the protection of the Albanian Institute of Cultural Monuments.',
  },
  {
    id: 553472022,
    idCountry: 4,
    name: 'Pyramid in Tirana',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=47d23bcbd5289e5633537f9282010955-l&n=13',
    description:
      'Former museum in Tirana, the capital of Albania, opened on October 14, 1988. It was designed by the daughter and son-in-law of Enver Hoxha, the ruler of Albania in 1946-1985, and told about his life. After the collapse of the communist regime in 1991, the museum was closed, and the building housed a conference hall and an exhibition center. Sometimes referred to as the "Mausoleum of Enver Hoxha", although this is not entirely accurate. The structure was conceived as the most expensive structure ever built in Albania.',
  },
  {
    id: 21232022,
    idCountry: 4,
    name: 'Tomb of Kaplan Pasha',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2c566c77ba6c93633def504b1fe0d39e-l&n=33&w=1084&h=720&q=60',
    description:
      'The tomb of Kaplan Pasha Toptani was built in 1820 next to the Suleiman Pasha mosque. The monument was built of soft white limestone and consists of eight arched round columns. Initially, the tomb had a wooden roof and was four meters high. The tablet on the tomb was badly damaged, but you can still make out the inscription on it that the ruler of Tirana, Kaplan Pasha Toptani, originally from Kruja, died in October 1819. The mosque and monument were badly damaged during the Second World War. This Muslim tomb was declared a National Cultural Monument in 1948, after which the tombstone and sarcophagus of Kaplan Pasha were removed.',
  },
  {
    id: 2125673,
    idCountry: 4,
    name: 'Resurrection Cathedral',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=be2ba48280af42b799325113bba8a650-l&n=33&w=720&h=720&q=60',
    description:
      'Cathedral of the Korcha Metropolitanate of the Albanian Orthodox Church, located in Korcha, Albania. Built in neo-Byzantine style. On the site of the cathedral until its destruction by the communist authorities in 1968 during an anti-religious campaign, the St. George Cathedral stood.',
  },
  {
    id: 5425673,
    idCountry: 4,
    name: 'Mother Albania',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2842811e2491dbdcadb38d4e3379ff2e-l&n=33&w=540&h=720&q=60',
    description:
      'Twelve-meter statue located near the National Cemetery of the Martyrs of Albania. Built in 1971. The authors of the monument are Muntas Dhrami, Christak Rama and Shaban Haderi.',
  },
  {
    id: 5423563,
    idCountry: 5,
    name: 'BMW Museum',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=71dd050f3844a36ca7c2f277cfcf0924-l&n=33&w=1080&h=720&q=60',
    description:
      'Museum dedicated to the history of BMW, located in Munich, Germany near the BMW headquarters building. The museum presents an exposition of BMW cars and motorcycles throughout the history of the brand.',
  },
  {
    id: 7653563,
    idCountry: 5,
    name: 'Reichstag',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=48322e69be88ec28a6ee326af5457f90-l&n=13',
    description:
      'Historical building in Berlin, where in 1894-1933 the eponymous state body of Germany - the Reichstag of the German Empire and the Reichstag of the Weimar Republic - sat. In 1945, in the Soviet Union, the building of the German parliament was declared the main symbol of Nazi Germany. I.V. Stalin ordered the Victory Banner to be hoisted on it. Since 1999, the reconstructed Reichstag building has been home to the Bundestag.',
  },
  {
    id: 7953563,
    idCountry: 5,
    name: 'Brandenburg Gate',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2295073215a31f9ea3e4b922aea1ad11-l&n=33&w=539&h=720&q=60',
    description:
      'The only surviving city gate of Berlin, the main symbol of the city. Located in the central Mitte district of Paris Square, where the boulevard Unter den Linden meets the Tiergarten. This gate to the Berlin Customs Wall was erected between 1788 and 1791 to commemorate the establishment of peace in the Netherlands.',
  },
  {
    id: 7586563,
    idCountry: 5,
    name: 'Cologne Cathedral',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a2041b4aad8a99987f5dffc693bb3920&n=13',
    description:
      'Roman Catholic Gothic cathedral in the city of Cologne. Ranked third in the list of the tallest churches in the world and is included in the list of World Cultural Heritage sites.',
  },
  {
    id: 7958793,
    idCountry: 5,
    name: 'Berlin Wall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5aa38643b5d2bed73e8dce979b0fe0cc-l&n=13',
    description:
      'An engineering-equipped and fortified state border of the German Democratic Republic, built on the territory of the GDR around West Berlin and existed from August 13, 1961 to November 9, 1989. The Berlin Wall divided the western and eastern parts of the city, separating West Berlin from the territory of the GDR. The total length of the wall was 155 km.',
  },
  {
    id: 7768793,
    idCountry: 5,
    name: 'Red town hall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6f314ca7b7fc381e405b6a3fdc70e8b2&n=13',
    description:
      'Historic building in the center of Berlin, named for its red brick façade. Built in 1861-1869 in the half-Renaissance-half-Gothic style by the architect G.F.Wesemann.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Dublin Castle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74a9e12f9bc1d73808a86eb56dc1ad35-l&n=13',
    description:
      'The main government building complex in Dublin. Until 1922 - the main outpost of Britain in Ireland. Although the castle existed already under King John, the first Lord of Ireland, most of the buildings in the complex date from the 18th century. In 1922, the castle was solemnly transferred to the first Irish government, headed by Michael Collins.',
  },
  {
    id: 7895993,
    idCountry: 6,
    name: 'Rock of Cashel',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c2e2618fa5861e695c26b6e4727bbbbd-l&n=33&w=908&h=720&q=60',
    description:
      'A dilapidated castle of the XII-XIII centuries in the town of Cashel in the County of South Tipperary in Ireland. According to local legends, the hill where the castle stands served as the residence of local rulers for several hundred years before the Norman invasion.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Newgrange',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e8367d40d77a369aa776445ebac9b04f-l&n=13',
    description:
      'A megalithic cult building in Ireland, a corridor tomb that is part of the Bru-na-Boyne complex. Newgrange dates back to 2500 BC. e. Located 40.2 km north of Dublin in the Boyne Valley. National Monument of Ireland at number 147',
  },
  {
    id: 7559893,
    idCountry: 6,
    name: 'Dublin needle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=3ce752d458942b57988342a1d6c92b16&n=13',
    description:
      'A needle-shaped steel monument located in Dublin at the north end of O`Connell Street, the city`s central street. Height - 120 meters. The Dublin Needle was erected in 2003 by the Ian Ritchie firm on the site of the monument to Admiral Nelson, which was blown up in 1966 by IRA militants as part of the City Hall`s campaign to modernize the city center.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Loch Ree',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=13b6ade7ad22eb00ec4b3c471538121a&n=13',
    description:
      'A lake located in Ireland on the Shannon River; one of the three large lakes on this river and one of those lakes in Ireland where the horse-headed monster has been seen; in 2001, a search expedition took place on the lake, covered by the Irish media. In addition, according to legend, an underwater city with a cathedral is hidden in the lake.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Titanic Belfast',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0e588f750142cdbde0075bed50bd80ae&n=13',
    description:
      'Belfast Maritime Heritage Museum and Monument at the site of the former Harland & Wolf shipyard in the Titanic Quarter. Opened April 1, 2012. It tells the stories of the ill-fated Titanic, which sank on its maiden voyage in 1912, and its brothers, the ships Olympic and Britannica.',
  },
  {
    id: 7569893,
    idCountry: 7,
    name: 'Trinity Church',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=086a44a546ddbfbd4a2beb7e4dfd382c&n=13',
    description:
      'It is located at an altitude of 2,170 m at the foot of Kazbek along the Georgian Military Highway in the Georgian village of Gergeti on the right bank of the Chkheri, right above the village of Stepantsminda. Built in the XIV century, the shrine is the only cross-domed temple in the Khevi region.',
  },
  {
    id: 8599893,
    idCountry: 7,
    name: 'Katskhi monastery',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c950e81d33143e8b2e6fcd076fca4d79&n=13',
    description:
      'Medieval monastery in Georgia, located in the village of Katskhi near the city of Chiatura. It was built by the Baguashi clan in the period 988-1014. The church building, hexagonal in plan, is distinguished by rich ornamentation. Closed under Soviet rule in 1924, the monastery was revived in 1990 and is currently administered by the Diocese of Sachkhere and Chiatura of the Georgian Orthodox Church.',
  },
  {
    id: 8545893,
    idCountry: 7,
    name: 'The bridge of peace',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=1a03552b4ab0abc419c1921493c603a7&n=13',
    description:
      'Pedestrian bridge over the Kura river in Tbilisi, Georgia. Connects Heraclius II Street and Rike Park. Upstream there is the Baratashvili bridge, below - the Metekhi bridge. The bridge has a 156-meter steel frame covered with glass.',
  },
  {
    id: 8145893,
    idCountry: 7,
    name: 'Volcano Kazbek',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c20fd8b6dea9adca542a253a504365b5&n=13',
    description:
      'Potentially active stratovolcano, the easternmost five-thousanders of the Caucasus, the height in the Baltic system of heights is 5033.8 m. It is located in the eastern part of the Central Caucasus, on the border of Russia and Georgia, in the eastern part of the Khokh ridge. The last eruption occurred in 650 BC. e.',
  },
  {
    id: 8176893,
    idCountry: 7,
    name: 'Dadiani Palace',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=09a9912acbaf8bb0917dcf8fefec4938&n=13',
    description:
      'The residence of the Megrelian rulers from the Dadiani clan in the Georgian city of Zugdidi.',
  },
  {
    id: 8256893,
    idCountry: 7,
    name: 'Fortress Khertvisi',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=9904bb6583ef39e5c2922c10a016822f&n=13',
    description:
      'One of the oldest and best preserved fortresses of the Georgian Middle Ages. Located in the province of Samtskhe-Javakheti, in the southern part of Georgia.',
  },
  {
    id: 7256893,
    idCountry: 8,
    name: 'Valaste waterfall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24bcb96e0b64fb057b08d2094ebf2a7d&n=13',
    description:
      'The highest waterfall in Estonia and the Baltic countries. In 1996, it was declared a natural heritage and national symbol of Estonia by a commission of the Academy of Sciences. Located in Ida-Viru County near the town of Kohtla-Järve.',
  },
  {
    id: 7315893,
    idCountry: 8,
    name: 'Fellin Castle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c25a0d6e4133964144c9ce2b2ed5bd88&n=13',
    description:
      'Castle of the Teutonic Order, the construction of which began in 1224 on the site of a former settlement. The castle was one of the most powerful in Livonia. Completely destroyed during the Polish-Swedish wars at the beginning of the 17th century.',
  },
  {
    id: 7426893,
    idCountry: 8,
    name: 'Layuse castle',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=b2af7324417b860cbc21f130e9d23e91&n=13',
    description:
      'Livonian Order Castle, located in the village of Lauzevälja in Jõgevamaa County, Estonia. It is currently in ruins.',
  },
  {
    id: 7435893,
    idCountry: 8,
    name: 'Victoria Bastion',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=623be5c447bd1d46b2dbfd4e781535db-l&n=33&w=1080&h=720&q=60',
    description:
      'The defensive structure of the city of Narva, built in the years 1683-1704. The bastion was destroyed during the Great Northern War in 1704 and rebuilt after its end. Currently included in the list of Estonian cultural heritage.',
  },
  {
    id: 7219893,
    idCountry: 8,
    name: 'Ukuoru waterfall',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a91625b5677de6b3308e4ec84b75a85b-l&n=33&w=471&h=720&q=60',
    description:
      'A waterfall on the Ukuoya River, located in Ida-Viru County in the northwestern part of Sillamäe, on the eastern slope of the Päite Plateau. It does not exist at the moment, the former channel is dry.',
  },
  {
    id: 7212393,
    idCountry: 8,
    name: 'Kadriorg',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8668c1f4c0cf995745da4397640f1ab8&n=13',
    description:
      'Baroque palace and park ensemble in Tallinn. Ekaterinental got its name in honor of the wife of the Russian Emperor Peter I - Catherine I.',
  },
];
