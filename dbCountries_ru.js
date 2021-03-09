const countries = [
  {
    id: 1545484,
    idCountry: 1,
    country: 'Швейцария',
    population: 8570000,
    capital: 'Берн',
    currency: 'швейцарский франк',
    description:
      'Суверенное государство, федеративная республика, состоящая из 26 кантонов с федеральными властями в Берне. Крупнейшие города: Женева, Цюрих, Берн, Базель, Лозанна, Люцерн',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c6aa5f2c4de30e8a6058d6e4a9f07894-l&n=33&w=576&h=720&q=60',
    video: 'https://www.youtube.com/embed/tQIgwox2nmA',
  },
  {
    id: 24654846,
    idCountry: 2,
    country: 'Доминиканская Республика',
    population: 10499707,
    capital: 'Санто-Доминго',
    currency: 'доминиканское песо',
    description:
      'Государство в восточной части острова Гаити и на прибрежных островах. Западную часть острова занимает государство Республика Гаити. Остров входит в состав архипелага Больших Антильских островов.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=767ea8cc1326a0e2587a6b33fc3f5847-l&n=33&w=624&h=720&q=60',
    video: 'https://www.youtube.com/embed/27r5PAyeTFg',
  },
  {
    id: 242425566,
    idCountry: 3,
    country: 'Венесуэла',
    population: 28515829,
    capital: 'Каракас',
    currency: 'венесуэльский боливар',
    description:
      'Государство на севере Южной Америки. Омывается Карибским морем и Атлантическим океаном на севере, граничит с Гайаной на востоке, Бразилией - на юге и Колумбией - на западе.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6e48385081e754a7658be768f9a440ac-l&n=33&w=967&h=720&q=60',
    video: 'https://www.youtube.com/embed/SmVAoOGSvPQ',
  },
  {
    id: 242425566,
    idCountry: 4,
    country: 'Албания',
    population: 2845955,
    capital: 'Тирана',
    currency: 'албанский лек',
    description:
      'Государство в западной части Балканского полуострова. Население, по данным Института статистики Албании на 1 января 2017 года, составляет 2 876 591 человек, территория - 28 748 км². Занимает 136-е место в мире по численности населения и 139-е по территории.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c88f410e342d984a30f1622b3e509a80-l&n=33&w=540&h=720&q=60',
    video: 'https://www.youtube.com/embed/gwgIiYI43qs',
  },
  {
    id: 24576568,
    idCountry: 5,
    country: 'Германия',
    population: 83149300,
    capital: 'Берлин',
    currency: 'евро',
    description:
      'Государство в Центральной Европе. Площадь территории - 357 408,74 км². Численность населения на 30 сентября 2019 года - 83 149 300 жителей. Занимает 18-е место в мире по численности населения и 62-е в мире по территории.',
    picture: 'https://www.1zoom.ru/big2/982/324344-svetik.jpg',
    video: 'https://www.youtube.com/embed/hbb4PYiSnVs',
  },
  {
    id: 35876568,
    idCountry: 6,
    country: 'Ирландия',
    population: 4977400,
    capital: 'Дублин',
    currency: 'евро',
    description:
      'Государство в Западной Европе, занимающее большую часть острова Ирландия. На севере граничит с Северной Ирландией. Площадь - 70,2 тыс. км². Название страны происходит от Eire «государство».',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=39f0118c1171dfc754ad6a425c68e615-l&n=33&w=480&h=720&q=60',
    video: 'https://www.youtube.com/embed/GSlEfFM7CFo',
  },
  {
    id: 42076568,
    idCountry: 7,
    country: 'Грузия',
    population: 3716858,
    capital: 'Тбилиси',
    currency: 'грузинский лари',
    description:
      'Государство, расположенное в западной части Закавказья на восточном побережье Чёрного моря. Относится к Передней Азии; рассматривается часто как страна на стыке Европы и Азии, иногда - как часть современной Европы.',
    picture:
      'https://cdn.fishki.net/upload/post/2019/05/22/2985752/015ae4ee2b27057390111dab27044553.jpg',
    video: 'https://www.youtube.com/embed/0xluX6E2tKo',
  },
  {
    id: 45076568,
    idCountry: 8,
    country: 'Эстония',
    population: 1329460,
    capital: 'Таллин',
    currency: 'евро',
    description:
      'Государство, расположенное в Северной Европе на восточном побережье Балтийского моря, омываемое водами Финского и Рижского заливов. На востоке граничит с Россией, на юге - с Латвией. На севере, в Финском заливе, проходит морская граница с Финляндией. На севере и западе омывается водами Балтийского моря.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74dcfc8ea1de9c8f9c102b1f5276be26&n=13',
    video: 'https://www.youtube.com/embed/fibYq834w14',
  },
];

const attraction = [
  {
    id: 123343241323,
    idCountry: 1,
    name: 'Женевское озеро',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0293a1b505899db20d74a9702b85200d&n=13',
    description:
      'Самое большое озеро Альп и второе по величине озеро Центральной Европы. Расположено в границах Швейцарии и Франции. Площадь поверхности - 582 км². Высота над уровнем моря - 372 м.',
  },
  {
    id: 1232132131,
    idCountry: 1,
    name: 'Умирающий лев',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24f03e274b1b95b02efa63bb0666f89a&n=13',
    description:
      'Всемирно известная скульптурная композиция, созданная по эскизу Бертеля Торвальдсена в швейцарском городе Люцерн. Посвящена доблести швейцарских гвардейцев, павших при сопротивлении штурму дворца Тюильри в день восстания 10 августа 1792 года.',
  },
  {
    id: 234314667,
    idCountry: 1,
    name: 'Бернский собор',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5ad7f323fcf46dd9f2e454f7537c2df6&n=13',
    description:
      'Протестантский кафедральный собор, расположенный в южной части Старого Берна. Собор считается важнейшим позднеготическим храмом Швейцарии. С архитектурной точки зрения собор является трёхнефной базиликой.',
  },
  {
    id: 547653524,
    idCountry: 1,
    name: 'Гора Юнгфрау',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=bec958f4d84feb391810e2e28aa8edb3&n=13',
    description:
      'Одна из самых известных горных вершин Швейцарии. Её высота - 4158 метров над уровнем моря. Это третья по высоте гора Бернских Альп, которая образует вместе с горами Эйгер и Мёнх примечательное трио.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Мост Капельбрюкке',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=f07bf7b30ab806a1dbb7718dba125e47&n=13',
    description:
      'Старинный мост в швейцарском городе Люцерне на реке Ройс. Самый древний деревянный крытый мост в Европе, одна из главных достопримечательностей Швейцарии и символ города Люцерна. Длина моста составляет 204,70 м. Капельбрюкке был построен в 1365 году.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Женевский фонтан',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8c7cfa17200ab8c43aee211038818718&n=13',
    description:
      'Фонтан на Женевском озере в Женеве, важная достопримечательность города и один из самых больших фонтанов в мире.',
  },
  {
    id: 56153452,
    idCountry: 2,
    name: 'Залив Самана',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7507100d5891b5006577241dc23b3de0-l&n=33&w=1011&h=720&q=60',
    description:
      'Залив в Атлантическом океане у северо-восточного побережья Доминиканской Республики к югу от одноименных города и мыса. Основные города на побережье - Санта Барбара де Самана, Санчес, Сабана де ла Мар. Названия заливу дано Христофором Колумбом - Golfo de las Flechas.',
  },
  {
    id: 51321452,
    idCountry: 2,
    name: 'Кафедральный собор Санто-Доминго',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=28acb749fc42865456130c86219320fb-l&n=33&w=960&h=720&q=60',
    description:
      'Католический собор в Санто-Доминго, столице Доминиканской Республики. Кафедральный собор архиепархии Санто-Доминго, возглавляемой кардиналом Николасом де Хесус Лопес Родригесом. Собор имеет почётный статус «малой базилики».',
  },
  {
    id: 51654452,
    idCountry: 2,
    name: 'Алькасар-де-Колон',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=37f29fb2b6c130f76524eefd8e17b0d6-l&n=33&w=1086&h=720&q=60',
    description:
      'Старейшая резиденция вице-королей в Америке, расположенная в Санто-Доминго, столице Доминиканской Республики. Она является частью Колониального города Санто-Доминго, включённого в 1990 году в список Всемирного наследия. Ныне в здании бывшей резиденции размещён Музей Алькасар де Диего Колон, собрания которого составляют предметы искусства, датируемые поздним средневековьем и эпохой Ренессанса, которые были приобретены музеем в 1950-е годы. Коллекция гобеленов, относящихся к периоду с XV по XVII века, особенно уникальна для Карибского региона и включает в себя гобелены, созданные мастерами из фламандской семьи Ван ден Хекке по картонам французского художника Шарля Лебрена. Алькасар-де-Колон - ныне самый посещаемый музей в Санто-Доминго.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'Альтом де Чавон',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8b308ae6f0a4dd9c3f6ad6f30dd3a87e&n=13',
    description:
      'Искусственно воссозданная средневековая территория - точная копия испанской деревни XV века, называемый городом художников и ремесленников.',
  },
  {
    id: 51655822,
    idCountry: 2,
    name: 'Национальный пантеон Доминиканской Республики',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e7ac14b1bd3cf14debf19b566618e0d4-l&n=33&w=540&h=720&q=60',
    description:
      'Был построен в 1714-1746 испанцем Джеронимо Кесада у Гарсон и изначально был церковью ордена Иезуитов. Здание построено в стиле неоклассицизм эпохи Возрождения. В наши дни строение выступает в качестве национального символа Доминиканской Республики и служит местом последнего упокоения самых почётных граждан республики.',
  },
  {
    id: 523446572,
    idCountry: 3,
    name: 'Дворец Мирафлорес',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8ba382a61816ce919cc0f56363d5a6fb-l&n=33&w=996&h=720&q=60',
    description:
      'Это официальная резиденция президента Боливарианской Республики Венесуэла, а местом жительства президента является дворец Ла-Касона. Расположен на авеню Урданета, в муниципалитете Боливара-освободителя в Каракасе.',
  },
  {
    id: 578693022,
    idCountry: 3,
    name: 'Музей революции',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=60c5363599b46aa4b3ab3b06e4f2ad8c&n=13',
    description:
      'Это многоцелевое, культурное и историческое здание. Находится в равнинной местности района 23 января, муниципалитета Боливара-освободителя в столичном районе Каракаса. Является местом последнего упокоения президента Венесуэлы Уго Чавеса.',
  },
  {
    id: 578235022,
    idCountry: 3,
    name: 'Национальный парк Канайма',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5097bad31deb2e3a5f5af8bc7b654cbd-l&n=13',
    description:
      'Парк на юго-востоке Венесуэлы, на границе с Бразилией и Гайаной. Площадь парка около 30000 км². Расположен в штате Боливар и занимает примерно на той же территории, что и природный парк Гран Сабана.',
  },
  {
    id: 523545022,
    idCountry: 3,
    name: 'Мечеть Ибрагим аль-Ибрагим',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=aae10282da9ed112c5e956a78b2e199e-l&n=33&w=957&h=720&q=60',
    description:
      'Мечеть, находящаяся в столице Венесуэлы городе Каракас в районе Эль-Рекрео. Считается второй по величине мечетью в Латинской Америке после мечети в Исламском культурном центре имени короля Фахда в Буэнос-Айресе, Аргентина.',
  },
  {
    id: 523445022,
    idCountry: 3,
    name: 'Финансовый центр Конфинансас',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e2281299a7516ad062eb8339def41293-l&n=33&w=540&h=720&q=60',
    description:
      'Недостроенный небоскрёб в Каракасе; третий по высоте в Венесуэле. Из-за того, что в здании с 2007 года живут малоимущие жители Каракаса, небоскрёб нередко называют «вертикальными трущобами». С максимальным количеством жильцов около 5 тыс. человек, является самым густонаселённым сквотом в мире.',
  },
  {
    id: 526572022,
    idCountry: 4,
    name: 'Памятник Скандербег',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=7933edb1fa307a25b700a94772d0084e-l&n=33&w=540&h=720&q=60',
    description:
      'Монумент Георги Кастриоти по прозвищу Скандербег, вождю антиосманского албанского восстания, национальному герою Албании, воспеваемому в народных песнях. Расположен в центре главной площади Тираны, носящей его имя.',
  },
  {
    id: 524672022,
    idCountry: 4,
    name: 'Амфитеатр в Дурресе',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=afb2a83672186b664f3808f59f342afe-l&n=13',
    description:
      'Римский амфитеатр, расположенный в современном городе Дуррес в Албании. Построенный в начале I, по другим данным в II веке, амфитеатр является одним из крупнейших памятников античного периода в Албании и Балканском регионе. Памятник находится под охраной албанского Института памятников культуры.',
  },
  {
    id: 553472022,
    idCountry: 4,
    name: 'Пирамида в Тиране',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=47d23bcbd5289e5633537f9282010955-l&n=13',
    description:
      'Бывший музей в городе Тиране, столице Албании, открытый 14 октября 1988 года. Был спроектирован дочерью и зятем Энвера Ходжи, правителя Албании в 1946-1985 годах, и рассказывал о его жизни. После крушения коммунистического режима в 1991 году музей был закрыт, в здании расположились Конференц-зал и выставочный центр. Иногда именуется «Мавзолеем Энвера Ходжи», хотя это и не совсем точно. Сооружение задумывалось как самое дорогое строение из когда-либо строившихся в Албании.',
  },
  {
    id: 21232022,
    idCountry: 4,
    name: 'Гробница Каплана-паши',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2c566c77ba6c93633def504b1fe0d39e-l&n=33&w=1084&h=720&q=60',
    description:
      'Гробница Каплана-паши Топтани была построена в 1820 году рядом с мечетью Сулеймана-паши. Памятник был построен из мягкого белого известняка и состоит из восьми связанных арками круглых колонн. Изначально гробница имела деревянную крышу, а высота составляла четыре метра. Табличка на гробнице сильно пострадала, но на ней ещё можно разобрать надпись, что правитель Тираны Каплан-паша Топтани, родом из Круя, умер в октябре 1819 года. Мечеть и памятник очень пострадали во время Второй Мировой войны. Эта мусульманская гробница в 1948 году была объявлена национальным памятником культуры.После этого надгробие и саркофаг Каплана-паши были удалены. Долгое время памятник находился в заброшенном состоянии и нуждался в ремонте. На соседнем участке в 2007 году началось строительство высотного TID Tower. В начале строительства перед строителями была поставлена сложная задача — совместить сохранение гробницы со зданием TID Tower. Задача была выполнена с помощью специальных круговых 3D-вырезов в основании здания. В 2016 году гробница была полностью реставрирована',
  },
  {
    id: 2125673,
    idCountry: 4,
    name: 'Воскресенский собор',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=be2ba48280af42b799325113bba8a650-l&n=33&w=720&h=720&q=60',
    description:
      'Кафедральный собор Корчинской митрополии Албанской православной церкви, расположенный в Корче, Албания. Построен в неовизантийском стиле. На месте собора до разрушения коммунистической властью в 1968 году в ходе антирелигиозной кампании стоял Георгиевский собор.',
  },
  {
    id: 5425673,
    idCountry: 4,
    name: 'Мать Албания',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2842811e2491dbdcadb38d4e3379ff2e-l&n=33&w=540&h=720&q=60',
    description:
      'Двенадцатиметровая статуя, расположенная около Национального кладбища мучеников Албании. Воздвигнута в 1971 году. Авторы памятника Мунтас Дхрами, Кристак Рама и Шабан Хадери.',
  },
  {
    id: 5423563,
    idCountry: 5,
    name: 'Музей БМВ',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=71dd050f3844a36ca7c2f277cfcf0924-l&n=33&w=1080&h=720&q=60',
    description:
      'Музей, посвящённый истории BMW, расположенный в Мюнхене, Германия возле здания штаб-квартиры BMW. В музее представлена экспозиция автомобилей и мотоциклов BMW за всю историю марки.',
  },
  {
    id: 7653563,
    idCountry: 5,
    name: 'Рейхстаг',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=48322e69be88ec28a6ee326af5457f90-l&n=13',
    description:
      'Историческое здание в Берлине, где в 1894-1933 годах заседал одноимённый государственный орган Германии - рейхстаг Германской империи и рейхстаг Веймарской республики. В 1945 году в Советском Союзе здание германского парламента было объявлено главным символом гитлеровской Германии. И.В. Сталин приказал водрузить на нём Знамя Победы. С 1999 года в реконструированном здании рейхстага размещается бундестаг.',
  },
  {
    id: 7953563,
    idCountry: 5,
    name: 'Бранденбургские ворота',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=2295073215a31f9ea3e4b922aea1ad11-l&n=33&w=539&h=720&q=60',
    description:
      'Единственные сохранившиеся городские ворота Берлина, главный символ города. Расположены в центральном районе Митте на Парижской площади, где бульвар Унтер-ден-Линден сходится с Тиргартеном. Эти ворота Берлинской таможенной стены были возведены в 1788-1791 годах в ознаменование установления мира в Нидерландах.',
  },
  {
    id: 7586563,
    idCountry: 5,
    name: 'Кёльнский собор',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a2041b4aad8a99987f5dffc693bb3920&n=13',
    description:
      'Римско-католический готический собор в городе Кёльне. Занимает третье место в списке самых высоких церквей мира и внесён в список объектов Всемирного культурного наследия.',
  },
  {
    id: 7958793,
    idCountry: 5,
    name: 'Берлинская стена',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=5aa38643b5d2bed73e8dce979b0fe0cc-l&n=13',
    description:
      'Инженерно-оборудованная и укреплённая государственная граница Германской Демократической Республики, построенная на территории ГДР вокруг Западного Берлина и существовавшая с 13 августа 1961 года по 9 ноября 1989 года. Берлинская стена разделяла западную и восточную части города, отделяя Западный Берлин от территории ГДР. Общая протяжённость стены составляла 155 км.',
  },
  {
    id: 7768793,
    idCountry: 5,
    name: 'Красная ратуша',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6f314ca7b7fc381e405b6a3fdc70e8b2&n=13',
    description:
      'Историческое здание в центре Берлина, названное так по своему фасаду красного кирпича. Построена в 1861-1869 годах в стиле полуренессанса-полуготики по проекту архитектора Г. Ф. Веземана.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Дублинский замок',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=74a9e12f9bc1d73808a86eb56dc1ad35-l&n=13',
    description:
      'Главный правительственный комплекс зданий в Дублине. До 1922 года - главный форпост Британии в Ирландии. Хотя замок существовал уже при короле Иоанне, первом Лорде Ирландии, большинство строений комплекса датируются XVIII веком. В 1922 году замок в торжественной обстановке был передан первому ирландскому правительству во главе с Майклом Коллинзом.',
  },
  {
    id: 7895993,
    idCountry: 6,
    name: 'Скала Кашел',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c2e2618fa5861e695c26b6e4727bbbbd-l&n=33&w=908&h=720&q=60',
    description:
      'Полуразрушенный замок XII-XIII веков в городе Кашел графства Южный Типперэри в Ирландии. Согласно местным преданиям, холм, где стоит замок, служил резиденцией местных правителей за несколько сотен лет до норманнского вторжения.',
  },
  {
    id: 7568993,
    idCountry: 6,
    name: 'Ньюгрейндж',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=e8367d40d77a369aa776445ebac9b04f-l&n=13',
    description:
      'Мегалитическое культовое сооружение в Ирландии, коридорная гробница, входящая в комплекс Бру-на-Бойн. Ньюгрэйндж датируется 2500 годом до н. э. Находится в 40,2 км к северу от Дублина в долине реки Бойн. Является национальным памятником Ирландии под номером 147',
  },
  {
    id: 7559893,
    idCountry: 6,
    name: 'Дублинский игла',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=3ce752d458942b57988342a1d6c92b16&n=13',
    description:
      'Стальной памятник в форме иглы, расположенный в Дублине в северном конце О`Коннелл-стрит - центральной улицы города. Высота - 120 метров. Дублинская игла была возведена в 2003 по проекту фирмы Иана Ричи на месте взорванного в 1966 году боевиками ИРА памятника адмиралу Нельсону в рамках проводимой мэрией кампании по осовремениванию центра города.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Лох-Ри',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=13b6ade7ad22eb00ec4b3c471538121a&n=13',
    description:
      'Озеро, расположенное в Ирландии на реке Шаннон; одно из трёх больших озёр на этой реке и одно из тех озёр Ирландии, в которых видели лошадиноголовое чудовище; в 2001 году на озере прошла поисковая экспедиция, освещавшаяся в СМИ Ирландии. Кроме того, в озере, по легенде, скрывается подводный город с собором.',
  },
  {
    id: 7876893,
    idCountry: 6,
    name: 'Титаник Белфаст',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=0e588f750142cdbde0075bed50bd80ae&n=13',
    description:
      'Музей и памятник морского наследия Белфаста на месте бывшей верфи Харланд энд Вольф в районе Квартал Титаника. Открыт 1 апреля 2012 г. Он рассказывает истории о злополучном Титанике, который затонул в своём первом рейсе в 1912 году, и о его братьях, кораблях Олимпик и Британик.',
  },
  {
    id: 7569893,
    idCountry: 7,
    name: 'Троицкая церковь',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=086a44a546ddbfbd4a2beb7e4dfd382c&n=13',
    description:
      'Расположена на высоте 2 170 м у подножья Казбека вдоль Военно-Грузинской дороги в грузинской деревне Гергети на правом берегу Чхери, прямо над посёлком Степанцминда. Построенная в XIV веке святыня является единственным крестово-купольным храмом в области Хеви.',
  },
  {
    id: 8599893,
    idCountry: 7,
    name: 'Монастырь Кацхи',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c950e81d33143e8b2e6fcd076fca4d79&n=13',
    description:
      'Средневековый монастырь в Грузии, расположенный в селе Кацхи недалеко от города Чиатура. Он был построен родом Багуаши в период 988-1014 годов. Здание церкви, шестиугольное в плане, отличается богатым орнаментом. Закрытый при советской власти в 1924 году монастырь был возрождён в 1990 году и в настоящее время управляется епархией Сачхере и Чиатуре Грузинской православной церкви.',
  },
  {
    id: 8545893,
    idCountry: 7,
    name: 'Мост Мира',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=1a03552b4ab0abc419c1921493c603a7&n=13',
    description:
      'Пешеходный мост через реку Куру в Тбилиси, Грузия. Соединяет улицу Ираклия II и парк Рике. Выше по течению находится мост Бараташвили, ниже - Метехский мост. Мост имеет 156-метровый стальной каркас, покрытый стеклом.',
  },
  {
    id: 8145893,
    idCountry: 7,
    name: 'Вулкан Казбек',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c20fd8b6dea9adca542a253a504365b5&n=13',
    description:
      'Потенциально активный стратовулкан, самый восточный пятитысячник Кавказа, высота в Балтийской системе высот 5033,8 м. Расположен в восточной части Центрального Кавказа, на границе России и Грузии, в восточной части Хохского хребта. Последнее извержение произошло в 650 году до н. э.',
  },
  {
    id: 8176893,
    idCountry: 7,
    name: 'Дворец Дадиани',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=09a9912acbaf8bb0917dcf8fefec4938&n=13',
    description:
      'Резиденция мегрельских правителей из рода Дадиани в грузинском городе Зугдиди.',
  },
  {
    id: 8256893,
    idCountry: 7,
    name: 'Крепость Хертвиси',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=9904bb6583ef39e5c2922c10a016822f&n=13',
    description:
      'Одна из самых древних и лучше всего сохранившихся крепостей грузинского средневековья. Расположена в крае Самцхе-Джавахети, в южной части Грузии.',
  },
  {
    id: 7256893,
    idCountry: 8,
    name: 'Водопад Валасте',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=24bcb96e0b64fb057b08d2094ebf2a7d&n=13',
    description:
      'Самый высокий водопад в Эстонии и странах Прибалтики. В 1996 году комиссией Академии Наук объявлен природным наследием и национальным символом Эстонии. Расположен в уезде Ида-Вирумаа недалеко от города Кохтла-Ярве.',
  },
  {
    id: 7315893,
    idCountry: 8,
    name: 'Замок Феллин',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c25a0d6e4133964144c9ce2b2ed5bd88&n=13',
    description:
      'Замок Тевтонского ордена, строительство которого было начато в 1224 году на месте бывшего городища. Замок являлся одним из самых мощных в Ливонии. Полностью уничтожен во время польско-шведских войн в начале XVII века.',
  },
  {
    id: 7426893,
    idCountry: 8,
    name: 'Замок Лайузе',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=b2af7324417b860cbc21f130e9d23e91&n=13',
    description:
      'Замок Ливонского ордена, расположен в деревне Лаузевялья в уезде Йыгевамаа, Эстония. В настоящее время находится в руинах.',
  },
  {
    id: 7435893,
    idCountry: 8,
    name: 'Бастион Виктория',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=623be5c447bd1d46b2dbfd4e781535db-l&n=33&w=1080&h=720&q=60',
    description:
      'Защитное сооружение города Нарва, построенное в 1683-1704 годах. Бастион был разрушен во время Северной войны в 1704 году и восстановлен после её окончания. На настоящее время включён в список культурного наследия Эстонии.',
  },
  {
    id: 7219893,
    idCountry: 8,
    name: 'Водопад Укуору',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=a91625b5677de6b3308e4ec84b75a85b-l&n=33&w=471&h=720&q=60',
    description:
      'Водопад на реке Укуоя, располагавшийся в уезде Ида-Вирумаа в северо-западной части города Силламяэ, на восточном склоне плато Пяйте. На данный момент не существует, прежнее русло сухое.',
  },
  {
    id: 7212393,
    idCountry: 8,
    name: 'Кадриорг',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=8668c1f4c0cf995745da4397640f1ab8&n=13',
    description:
      'Барочный дворцово-парковый ансамбль в Таллине. Своё название Екатериненталь получил в честь супруги российского императора Петра I - Екатерины I.',
  },
];
