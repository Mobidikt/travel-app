import reducer from './attractions';
import { AttractionState } from "../types/attraction";
import attractionsActions from '../actions/attractions';


describe('attractionsReducer test', () => {
  let state: AttractionState = {
    attraction: [
      {
        _id: '123343241323',
        idCountry: '1',
        name: 'Женевское озеро',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=0293a1b505899db20d74a9702b85200d&n=13',
        description:
          'Самое большое озеро Альп и второе по величине озеро Центральной Европы. Расположено в границах Швейцарии и Франции. Площадь поверхности - 582 км². Высота над уровнем моря - 372 м.',
        versionKey: true
      },
      {
        _id: '1232132131',
        idCountry: '1',
        name: 'Умирающий лев',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=24f03e274b1b95b02efa63bb0666f89a&n=13',
        description:
          'Всемирно известная скульптурная композиция, созданная по эскизу Бертеля Торвальдсена в швейцарском городе Люцерн. Посвящена доблести швейцарских гвардейцев, павших при сопротивлении штурму дворца Тюильри в день восстания 10 августа 1792 года.',
        versionKey: true
      },
      {
        _id: '234314667',
        idCountry: '1',
        name: 'Бернский собор',
        picture:
          'https://im0-tub-ru.yandex.net/i?id=5ad7f323fcf46dd9f2e454f7537c2df6&n=13',
        description:
          'Протестантский кафедральный собор, расположенный в южной части Старого Берна. Собор считается важнейшим позднеготическим храмом Швейцарии. С архитектурной точки зрения собор является трёхнефной базиликой.',
        versionKey: true
      },
    ],
    isLoading: false,
    error: null,
  };

  it('after requested attractions isLoading should be true', ()=>{
    let action = attractionsActions.requestedAttractions();
    let newState = reducer(state, action);
    expect(newState.isLoading).toBeTruthy();
  });

  it('if attractions request failed error prop should be equal payload ', ()=>{
    let action = attractionsActions.requestedAttractionsFailed('ERROR');
    let newState = reducer(state, action);
    expect(newState.error).toBe('ERROR');
  });

  it('if request attractions succeed isLoading should be false ', ()=>{
    let action = attractionsActions.requestedAttractionsSucceeded(state.attraction);
    let newState = reducer(state, action);
    expect(newState.isLoading).toBeFalsy();
  });

  it('if request attractions succeed newState.attractions.length should be equal payload.length', ()=>{
    let action = attractionsActions.requestedAttractionsSucceeded(state.attraction);
    let newState = reducer(state, action);
    expect(newState.attraction.length).toBe(state.attraction.length);
  });
});
