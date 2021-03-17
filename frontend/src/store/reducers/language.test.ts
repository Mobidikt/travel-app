import reducer from './language';
import { setLanguage } from '../actions/language';


describe('languageReducer test', () => {
  let state = {
    language: 'ru',
  };

  it('language should be equal payload', ()=>{
    let action = setLanguage('en');
    let newState = reducer(state, action);
    expect(newState.language).toBe('en');
  });
});
