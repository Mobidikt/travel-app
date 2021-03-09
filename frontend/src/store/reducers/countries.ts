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
    default:
      return state
  }
}

export default reducer
