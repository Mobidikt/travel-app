import { AttractionAction, AttractionActionTypes, AttractionType } from '../types/attraction'

const filterAttractions = (searchVal: string): AttractionAction => ({
  type: AttractionActionTypes.FILTER_ATTRACTIONS,
  payload: searchVal,
})

const setAttractions = (idCountry: string): AttractionAction => ({
  type: AttractionActionTypes.SET_ATTRACTIONS,
  payload: idCountry,
})

const fetchAttractions = (countryId: string): AttractionAction => ({
  type: AttractionActionTypes.FETCH_ATTRACTIONS,
  payload: countryId,
})

const requestedAttractions = (): AttractionAction => ({
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS,
})

const requestedAttractionsSucceeded = (attractions: Array<AttractionType>): AttractionAction => ({
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS_SUCCEEDED,
  payload: attractions,
})

const requestedAttractionsFailed = (err: string): AttractionAction => ({
  type: AttractionActionTypes.REQUESTED_ATTRACTIONS_FAILED,
  payload: err,
})

const setNewScore = (id: string, email: string, stars: number): AttractionAction => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  type: AttractionActionTypes.SET_NEW_SCORE,
  payload: { id, email, stars },
})

export default {
  filterAttractions,
  fetchAttractions,
  requestedAttractions,
  requestedAttractionsSucceeded,
  requestedAttractionsFailed,
  setNewScore,
  setAttractions,
}
