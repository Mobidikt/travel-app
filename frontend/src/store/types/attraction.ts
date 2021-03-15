export type AttractionType = {
  _id: string,
  idCountry: string,
  name: string,
  picture: string,
  description: string,
  score: {
    score: number,
    votedPeople: Array<string>,
  },
}

export interface AttractionState {
  attraction: Array<AttractionType>;
  isLoading: boolean;
  error: string | null;
}

export enum AttractionActionTypes {
  FETCH_ATTRACTIONS = 'ATTRACTIONS/FETCH_ATTRACTIONS',
  REQUESTED_ATTRACTIONS = 'ATTRACTIONS/REQUESTED_ATTRACTIONS',
  REQUESTED_ATTRACTIONS_SUCCEEDED = 'ATTRACTIONS/REQUESTED_ATTRACTIONS_SUCCEEDED',
  REQUESTED_ATTRACTIONS_FAILED = 'ATTRACTIONS/REQUESTED_ATTRACTIONS_FAILED',
  SET_ATTRACTIONS = 'ATTRACTIONS/SET_CURRENT_ATTRACTIONS',
  FILTER_ATTRACTIONS = 'ATTRACTIONS/FILTER_ATTRACTIONS',
}

export interface RequestedAttractionAction {
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS;
}

export interface RequestedAttractionSucceededAction {
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS_SUCCEEDED;
  payload: Array<AttractionType>;
}

export interface RequestedAttractionFailedAction {
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS_FAILED;
  payload: string;
}

export interface SetAttractions {
  type: AttractionActionTypes.SET_ATTRACTIONS;
  payload: string;
}

export interface FetchAttractionAction {
  type: AttractionActionTypes.FETCH_ATTRACTIONS;
  payload: string;
}

export interface FilterAttractionAction {
  type: AttractionActionTypes.FILTER_ATTRACTIONS;
  payload: string;
}

export type AttractionAction =
  | RequestedAttractionAction
  | RequestedAttractionSucceededAction
  | RequestedAttractionFailedAction
  | FetchAttractionAction
  | FilterAttractionAction
  | SetAttractions
