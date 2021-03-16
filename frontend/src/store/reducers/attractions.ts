/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AttractionAction, AttractionActionTypes, AttractionState } from '../types/attraction'

const initialState: AttractionState = {
  attraction: [],
  isLoading: false,
  error: null,
}

const reducer = (state = initialState, action: AttractionAction): AttractionState => {
  switch (action.type) {
    case AttractionActionTypes.REQUESTED_ATTRACTIONS: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case AttractionActionTypes.REQUESTED_ATTRACTIONS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        attraction: action.payload,
      }
    }

    case AttractionActionTypes.REQUESTED_ATTRACTIONS_FAILED: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case AttractionActionTypes.SET_NEW_SCORE: {
      const { id, email, stars } = action.payload
      const newAttractions = state.attraction.map((el) => {
        return el.id !== id
          ? el
          : {
              ...el,
              score: {
                score: el.score.score + stars,
                votedPeople: [...el.score.votedPeople, email],
              },
            }
      })

      return {
        ...state,
        attraction: newAttractions,
      }
    }

    // case AttractionActionTypes.FILTER_ATTRACTIONS: {
    //   const regExp = new RegExp(action.payload, 'ig')
    //   // eslint-disable-next-line
    //   const newAttraction = initialState.attraction.filter((attraction) => {
    //     if (regExp.test(attraction.country) || regExp.test(attraction.capital)) {
    //       return attraction
    //     }
    //   })
    //   return {
    //     ...state,
    //     countries: newCountries.length ? newCountries : initialState.countries,
    //   }
    // }
    default:
      return state
  }
}

export default reducer
