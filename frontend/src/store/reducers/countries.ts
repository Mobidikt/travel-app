/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CountriesAction, CountriesActionTypes, CountriesState } from '../types/countries'

const initialState: CountriesState = {
  countries: [
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
      id: 242425567,
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
      picture: 'https://im0-tub-ru.yandex.net/i?id=74dcfc8ea1de9c8f9c102b1f5276be26&n=13',
      video: 'https://www.youtube.com/embed/fibYq834w14',
    },
  ],
  isLoading: false,
  isError: false,
  currentCountry: null,
}

const reducer = (state = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.SET_CURRENT_COUNTRY: {
      const newCurrentCountry = state.countries.find((country) => country.id === action.payload)
      return {
        ...state,
        currentCountry: newCurrentCountry || null,
      }
    }
    case CountriesActionTypes.FILTER_COUNTRIES: {
      const regExp = new RegExp(action.payload, 'ig')
      // eslint-disable-next-line
      const newCountries = initialState.countries.filter((country) => {
        if (regExp.test(country.country) || regExp.test(country.capital)) {
          return country
        }
      })
      return {
        ...state,
        countries: newCountries.length ? newCountries : initialState.countries,
      }
    }
    default:
      return state
  }
}

export default reducer
