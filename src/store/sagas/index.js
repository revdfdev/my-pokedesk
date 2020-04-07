import { all } from "redux-saga/effects";
import { getAllPokemonsSaga, getAddPokemonSaga, getEditPokemonSaga } from "../ducks/pokemon";
import { getPokemonSaga } from '../ducks/singlepokemon';
import { getLookPokemonDescSaga } from '../ducks/pokemondesc'; 

export default function* rootSaga() {
    yield all([
        getAllPokemonsSaga(),
        getPokemonSaga(),
        getLookPokemonDescSaga(),
        getAddPokemonSaga(),
        getEditPokemonSaga()
    ]);
}
