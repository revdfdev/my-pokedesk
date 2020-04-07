import { put, call, takeEvery } from 'redux-saga/effects';
import { getSinglePokemon } from '../../services/poke';

//actions
const GET_POKEMON = "pokeapi/singlepokemon/GET_POKEMON";
const GET_POKEMON_SUCCESS = "pokeapi/singlepokemon/GET_POKEMON_SUCCESS";
const GET_POKEMON_FAILURE = "pokeapi/singlepokemon/GET_POKEMON_FAILURE";

const initialState = {
    pokemons: [],
    error: null
};

export default function singlepokemon(state={...initialState}, action) {
    switch(action.type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons
            }
        case GET_POKEMON_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

//action creator
export function getPokemon(pokemons) {
    return {
        type: GET_POKEMON,
        pokemons: pokemons
    }
}

function* handleGetPoken({ pokemons }) {
    try {
        const responses = yield call(getSinglePokemon, pokemons)
        const responseDatas = responses.map(response => response.data);
        yield put({ pokemons: responseDatas, type: GET_POKEMON_SUCCESS });
    } catch(e) {
        yield put({error: e.message, type: GET_POKEMON_FAILURE});
    }
}

export function* getPokemonSaga() {
    yield takeEvery(GET_POKEMON, handleGetPoken);
}