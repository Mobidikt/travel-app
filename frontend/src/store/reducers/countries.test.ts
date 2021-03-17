import reducer from './countries';
import { CountriesState } from "../types/countries";
import countriesActions from '../actions/countries';


describe('countryReducer test', () => {
  let state: CountriesState = {
    countries: [
      {
        _id: '1545484',
        country: 'Швейцария',
        population: 8570000,
        capital: 'Берн',
        currency: 'швейцарский франк',
        description:
          'Суверенное государство, федеративная республика, состоящая из 26 кантонов с федеральными властями в Берне. Крупнейшие города: Женева, Цюрих, Берн, Базель, Лозанна, Люцерн',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=c6aa5f2c4de30e8a6058d6e4a9f07894-l&n=33&w=576&h=720&q=60',
        video: 'https://www.youtube.com/embed/tQIgwox2nmA',
        id: '123',
        timeZone: 'Europe/Zurich',
        zip: '3011',
        map: 'https://yandex.ru/map-widget/v1/-/CCUQnRgfgA',
      },
      {
        _id: '24654846',
        country: 'Доминиканская Республика',
        population: 10499707,
        capital: 'Санто-Доминго',
        currency: 'доминиканское песо',
        description:
          'Государство в восточной части острова Гаити и на прибрежных островах. Западную часть острова занимает государство Республика Гаити. Остров входит в состав архипелага Больших Антильских островов.',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=767ea8cc1326a0e2587a6b33fc3f5847-l&n=33&w=624&h=720&q=60',
        video: 'https://www.youtube.com/embed/27r5PAyeTFg',
        id: '1654',
        timeZone: 'America/Santo_Domingo',
        zip: '10210',
        map: 'https://yandex.ru/map-widget/v1/-/CCUQnRc9GC',
      },
      {
        _id: '242425566',
        country: 'Венесуэла',
        population: 28515829,
        capital: 'Каракас',
        currency: 'венесуэльский боливар',
        description:
          'Государство на севере Южной Америки. Омывается Карибским морем и Атлантическим океаном на севере, граничит с Гайаной на востоке, Бразилией - на юге и Колумбией - на западе.',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=6e48385081e754a7658be768f9a440ac-l&n=33&w=967&h=720&q=60',
        video: 'https://www.youtube.com/embed/SmVAoOGSvPQ',
        id: '8794',
        timeZone: 'America/Caracas',
        zip: '7940068',
        map: 'https://yandex.ru/map-widget/v1/-/CCUQnRcRTB',
      },
    ],
    isLoading: false,
    error: null,
    currentCountry: null,
  };

  it('current country to be truthy', ()=>{
    let action = countriesActions.setCurrentCountry('123');
    let newState = reducer(state, action);
    expect(newState.currentCountry).toBeTruthy();
  });

  it('after country request isLoading should be true', ()=>{
    let action = countriesActions.requestedCountries();
    let newState = reducer(state, action);
    expect(newState.isLoading).toBeTruthy();
  });

  it('if countries request failed error prop should be equal payload ', ()=>{
    let action = countriesActions.requestedCountriesFailed('ERROR');
    let newState = reducer(state, action);
    expect(newState.error).toBe('ERROR');
  });

  it('if request countries succeed isLoading should be false ', ()=>{
    let action = countriesActions.requestedCountriesSucceeded(state.countries);
    let newState = reducer(state, action);
    expect(newState.isLoading).toBeFalsy();
  });

  it('if request countries succeed newState.countries.length should be equal payload.length', ()=>{
    let action = countriesActions.requestedCountriesSucceeded(state.countries);
    let newState = reducer(state, action);
    expect(newState.countries.length).toBe(state.countries.length);
  });
});
