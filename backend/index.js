const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const flash = require('express-flash')
const { PORT } = require('./config')

const { connectionDB } = require('./db/db')

connectionDB()

const countries = [
  {
    country: 'Schweiz',
    population: 8570000,
    capital: 'Bern',
    currency: 'Schweizer Franc',
    description:
      'Ein souveräner Staat, eine Bundesrepublik, bestehend aus 26 Kantonen mit Bundesbehörden in Bern. Die größten Städte: Genf, Zürich, Bern, Basel, Lausanne, Luzern',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c6aa5f2c4de30e8a6058d6e4a9f07894-l&n=33&w=576&h=720&q=60',
    video: 'https://www.youtube.com/embed/tQIgwox2nmA',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRgfgA',
    timeZone: 'Europe/Zurich',
    zip: '3011',
  },
  {
    country: 'Dominikanische Republik',
    population: 10499707,
    capital: 'Santo Domingo',
    currency: 'dominikanischer Peso',
    description:
      'Der Staat im östlichen Teil der Insel Haiti und auf den Küsteninseln. Der westliche Teil der Insel wird von der Republik Haiti besetzt. Die Insel ist Teil des Archipels der Großen Antillen.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=767ea8cc1326a0e2587a6b33fc3f5847-l&n=33&w=624&h=720&q=60',
    video: 'https://www.youtube.com/embed/27r5PAyeTFg',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRc9GC',
    timeZone: 'America/Santo_Domingo',
    zip: '10210',
  },
  {
    country: 'Venezyela',
    population: 28515829,
    capital: 'Caracas',
    currency: 'venezolanischer Bolivar',
    description:
      'Der Staat im Norden Südamerikas. Es wird von der Karibik und dem Atlantik im Norden gewaschen, grenzt an Guyana im Osten, Brasilien - im Süden und Kolumbien - im Westen.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=6e48385081e754a7658be768f9a440ac-l&n=33&w=967&h=720&q=60',
    video: 'https://www.youtube.com/embed/SmVAoOGSvPQ',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRcRTB',
    timeZone: 'America/Caracas',
    zip: '7940068',
  },
  {
    country: 'Albanien',
    population: 2845955,
    capital: 'Tirana',
    currency: 'albanischer lek',
    description:
      'Der Staat im westlichen Teil der Balkanhalbinsel. Die Bevölkerung, nach Angaben des Instituts für Statistik Albanien zum 1. Januar 2017, ist 2 876 591 Menschen, das Gebiet-28 748 km2. Platz in der Welt nach der Bevölkerung und 139-e nach dem Territorium.',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=c88f410e342d984a30f1622b3e509a80-l&n=33&w=540&h=720&q=60',
    video: 'https://www.youtube.com/embed/gwgIiYI43qs',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRWFxC',
    timeZone: 'Europe/Tirane',
    zip: '1010',
  },
  {
    country: 'Deutschland',
    population: 83149300,
    capital: 'Berlin',
    currency: 'Euro',
    description:
      'Staat in Mitteleuropa. Fläche - 357 408,74 km. Bevölkerung am 30. September 2019 - 83 149 300 Einwohner. Platz in der Welt nach der Bevölkerung und 62.in der Welt nach dem Territorium.',
    picture: 'https://www.1zoom.ru/big2/982/324344-svetik.jpg',
    video: 'https://www.youtube.com/embed/hbb4PYiSnVs',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRSgpA',
    timeZone: 'Europe/Berlin',
    zip: '10117',
  },
  {
    country: 'Irland',
    population: 4977400,
    capital: 'Dublin',
    currency: 'Euro',
    description:
      'Ein Staat in Westeuropa, der den größten Teil der Insel Irland einnimmt. Im Norden grenzt es an Nordirland. Fläche-70,2 Tausend km2. Der Name des Landes kommt von Eire "Staat".',
    picture:
      'https://im0-tub-ru.yandex.net/i?id=39f0118c1171dfc754ad6a425c68e615-l&n=33&w=480&h=720&q=60',
    video: 'https://www.youtube.com/embed/GSlEfFM7CFo',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRSESA',
    timeZone: 'Europe/Dublin',
    zip: 'D01',
  },
  {
    country: 'Georgia',
    population: 3716858,
    capital: 'Tiflis',
    currency: 'georgische lari',
    description:
      'Der Staat befindet sich im westlichen Teil des Kaukasus an der Ostküste des Schwarzen Meeres. Bezieht sich auf Vorderasien; wird oft als ein Land an der Kreuzung von Europa und Asien, manchmal - als Teil des modernen Europa.',
    picture:
      'https://cdn.fishki.net/upload/post/2019/05/22/2985752/015ae4ee2b27057390111dab27044553.jpg',
    video: 'https://www.youtube.com/embed/0xluX6E2tKo',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnRGMCA',
    timeZone: 'Asia/Tbilisi',
    zip: '0100',
  },
  {
    country: 'Estonia',
    population: 1329460,
    capital: 'Tallinn',
    currency: 'euro',
    description:
      'A country located in Northern Europe on the eastern coast of the Baltic Sea, washed by the waters of the Gulf of Finland and the Gulf of Riga. It borders Russia to the east and Latvia to the south. In the north, in the Gulf of Finland, there is a sea border with Finland. In the north and west, it is washed by the waters of the Baltic Sea.',
    picture: 'https://im0-tub-ru.yandex.net/i?id=74dcfc8ea1de9c8f9c102b1f5276be26&n=13',
    video: 'https://www.youtube.com/embed/fibYq834w14',
    map: 'https://yandex.ru/map-widget/v1/-/CCUQnYXwpC',
    timeZone: 'Europe/Tallinn',
    zip: '10148',
  },
]

const countriesRouter = require('./routes/countries')
const attractionsRouter = require('./routes/attractions')
const authRoutes = require('./routes/auth')
const gradeRoutes = require('./routes/grades')
const attrRoutes = require('./routes/attractions')
const Country = require('./models/Country')

const load = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const {
      country,
      population,
      capital,
      currency,
      description,
      picture,
      video,
      map,
      timeZone,
      zip,
    } = arr[i]
    await new Country({
      country,
      population,
      capital,
      currency,
      description,
      picture,
      video,
      map,
      timeZone,
      zip,
      langCode: 'de',
    }).save()
  }
}

// load(countries)

app.use('/uploads', express.static('uploads'))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(flash())
app.use(cors())

app.use(async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

app.get('/', function (req, res) {
  console.log('index')
  return res.send('work')
})

app.use(countriesRouter)
app.use(attractionsRouter)
app.use('/auth', authRoutes)
app.use(gradeRoutes)
app.use(attrRoutes)

app.listen(PORT, () => {
  console.log(`we're online on ${PORT} port!`)
})
