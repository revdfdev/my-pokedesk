import { put, call, take, takeEvery } from 'redux-saga/effects';
import { getaAllPokemons, mockAddPokemon, mockEditPokemon } from '../../services/poke';

//actions
const GET_ALL_POKEMONS = "pokeapi/pokemon/GET_ALL_POKEMONS";
const GET_ALL_POKEMONS_SUCCESS = "pokeapi/pokemon/GET_ALL_POKEMONS_SUCCESS";
const GET_ALL_POKEMONS_ERROR = "pokeapi/pokemon/GET_ALL_POKEMONS_FAILURE";

const ADD_POKEMON = 'pokeapi/pokemon/ADD_POKEMON';
const ADD_POKEMON_SUCCESS = 'pokeapi/pokemon/ADD_POKEMON_SUCCESS';
const ADD_POKEMON_FAILURE = 'pokeapi/pokemon/ADD_POKEMON_FAILURE';

const EDIT_BOX_OPEN = 'pokeapi/pokemon/EDIT_BOX_OPEN';
const EDIT_BOX_CLOSE = 'pokeapi/pokemon/EDIT_BOX_CLOSE';

const EDIT_POKEMON = "pokeapi/pokemon/EDIT_POKEMON";
const EDIT_POKEMON_SUCCESS = "pokeapi/pokemon/EDIT_POKEMON_SUCCESS";
const EDIT_POKEMON_FAILURE = "pokeapi/pokemon/EDIT_POKEMON_FAILURE";
const EDIT_RESET = "pokeapi/pokemon/EDI_RESET";


//state
const initialState = {
    pokemons: [],
    message: null,
    pokemonData: {
        id: "",
        name: ""
    },
    isOpen: false,
    error: null
};

//reducer
export default function pokemon(state = { ...initialState }, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons
            }
        case EDIT_BOX_OPEN:
            return {
                ...state,
                pokemonData: action.pokemon,
                isOpen: true
            }
        case EDIT_BOX_CLOSE:
            return {
                ...state,
                pokemonData: {},
                isOpen: false
            }
        case ADD_POKEMON_SUCCESS:
            return {
                ...state,
                message: action.message,
                pokemons:[...state.pokemons, action.pokemon]
            }
        case EDIT_POKEMON_SUCCESS:
            console.log(action.pokemon);
            //const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.pokemon.id);
            const index = state.pokemons.findIndex(pokemon => {
                const ids = pokemon.url.split("/")
                return ids[6] == action.pokemon.pokemonIdEdit
            })
            state.pokemons[index] = {
                    name: action.pokemon.pokemonNameEdit, url: `https://pokeapi.co/api/v2/pokemon/${action.pokemon.pokemonIdEdit}/`
                }
            return {
                ...state,
                pokemons: state.pokemons,
                message: action.message
            }
        case GET_ALL_POKEMONS_ERROR:
            return {
                ...state,
                error: action.error
            }
        case ADD_POKEMON_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case EDIT_POKEMON_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case EDIT_RESET:
            return {
                ...state,
                message: "",
                error: null
            }
        default:
            return state;
    }
}

// action creator
export function getPokemons() {
    return {
        type: GET_ALL_POKEMONS,
        maxCounts: 20
    }
}

export function openEditBox(pokemon) {
    return {
        type: EDIT_BOX_OPEN,
        pokemon: pokemon,
    }
}

export function closeEditBox() {
    return {
        type: EDIT_BOX_CLOSE
    }
}

export function addAPokemon(pokemon) {
    return {
        type: ADD_POKEMON,
        pokemon: pokemon
    };
}

export function editPokemon(pokemon) { 
    return {
        type: EDIT_POKEMON,
        pokemon: pokemon
    }
}

function* handleGetAllPokemons({ maxCounts }) {
    try {
        const response = yield call(getaAllPokemons, maxCounts);
        yield put({ pokemons: response.data.results, type: GET_ALL_POKEMONS_SUCCESS });
    } catch (e) {
        yield put({ error: e.message, type: GET_ALL_POKEMONS_ERROR });
    }
}

function* handleAddPokemon({ pokemon }) {
    try {
        const response = yield call (mockAddPokemon, pokemon);
        yield put({ message: response.msg, pokemon: pokemon, type: ADD_POKEMON_SUCCESS });
    } catch (e) {
        yield put({error: e.message, type: ADD_POKEMON_FAILURE })
    }
}

function* handleEditPokemon({ pokemon }) {
    try {
        const response = yield call(mockEditPokemon, pokemon);
        yield put({ message: response.msg, pokemon: pokemon, type: EDIT_POKEMON_SUCCESS });
        yield put({ type: EDIT_RESET });
    } catch (e) { 
        yield put({ error: e.message, type: EDIT_POKEMON_FAILURE });
    }
}

export function* getAllPokemonsSaga() {
    yield takeEvery(GET_ALL_POKEMONS, handleGetAllPokemons);
}

export function* getAddPokemonSaga() {
    yield takeEvery(ADD_POKEMON, handleAddPokemon);
}

export function* getEditPokemonSaga() {
    yield takeEvery(EDIT_POKEMON, handleEditPokemon);
}