import { put, call, takeEvery } from 'redux-saga/effects';
import { getPokemonDescription } from '../../services/poke';

//actions
const GET_POKEMON_DESCRIPTION = "pokeapi/pokemondesc/GET_POKEMON_DESCRIPTION";
const GET_POKEMON_DESCRIPTION_SUCCESS = "pokeapi/pokemondesc/GET_POKEMON_DESCRIPTION_SUCCESS";
const GET_POKEMON_DESCRIPTION_FAILURE = "pokeapi/pokemondesc/GET_POKEMON_DESCRIPTION_FAILURE";


const initialState = {
    pokemonDesc: {},
    error: null
}

export default function pokemondesc(state = { ...initialState }, action) {
    switch (action.type) {
        case GET_POKEMON_DESCRIPTION_SUCCESS:
            return {
                ...state,
                pokemonDesc: action.pokemonDesc
            };
        case GET_POKEMON_DESCRIPTION_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export function lookPokemonDesc(url) {
    return {
        type: GET_POKEMON_DESCRIPTION,
        url: url
    };
};

function* handleLookUpPokemonDesc({ url }) { 
    try {
        const data = yield call(getPokemonDescription, url);
        yield put({ type: GET_POKEMON_DESCRIPTION_SUCCESS, pokemonDesc: data });
    } catch (e) { 
        yield put({ type: GET_POKEMON_DESCRIPTION_FAILURE, error: e.message });
    }
}

export function* getLookPokemonDescSaga() {
    yield takeEvery(GET_POKEMON_DESCRIPTION, handleLookUpPokemonDesc);
}