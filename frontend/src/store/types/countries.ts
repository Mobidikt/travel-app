export type CountryType = {
  id: number,
  idCountry: number,
  country: string,
  population: number,
  capital: string,
  currency: string,
  description: string,
  picture: string,
  video: string,
}

export interface CountriesState {
  countries: Array<CountryType>;
  isLoading: boolean;
  isError: boolean;
  currentCountry: CountryType | null;
}

export enum CountriesActionTypes {
  FETCH_COUNTRIES = 'COUNTRIES/FETCH_COUNTRIES',
  REQUESTED_COUNTRIES = 'COUNTRIES/REQUESTED_COUNTRIES',
  REQUESTED_COUNTRIES_SUCCEEDED = 'COUNTRIES/REQUESTED_COUNTRIES_SUCCEEDED',
  REQUESTED_COUNTRIES_FAILED = 'COUNTRIES/REQUESTED_COUNTRIES_FAILED',
  SET_CURRENT_COUNTRY = 'COUNTRIES/SET_CURRENT_COUNTRY',
}

export interface RequestedCountriesAction {
  type: CountriesActionTypes.REQUESTED_COUNTRIES;
}

export interface RequestedCountriesSucceededAction {
  type: CountriesActionTypes.REQUESTED_COUNTRIES_SUCCEEDED;
  payload: Array<CountryType>;
}

export interface RequestedCountriesFailedAction {
  type: CountriesActionTypes.REQUESTED_COUNTRIES_FAILED;
  payload: string;
}

export interface SetCurrentCountryAction {
  type: CountriesActionTypes.SET_CURRENT_COUNTRY;
  payload: CountryType;
}

export interface FetchCountriesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES;
}

export type CountriesAction =
  | RequestedCountriesAction
  | RequestedCountriesSucceededAction
  | RequestedCountriesFailedAction
  | SetCurrentCountryAction
  | FetchCountriesAction
