import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { getFlats } from "../api/api";

const SET_FLATS = 'SET_FLATS';
const LIKE_FLAT = 'LIKE_FLAT';

let initialState = {
    flats: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLATS:
            return {
                ...state,
                flats: action.flats
            }
        case LIKE_FLAT: 
            return {
              ...state,
            }
        default:
            return state;
    }
};

export const setFlats = (flats) => ({
  type: SET_FLATS,
  flats
});

export const getFlatsThunkCreator = () => async dispatch => {
  let data = await getFlats()
  dispatch(setFlats(data))
}

let store = createStore(reducer, applyMiddleware(thunk));

export default store;