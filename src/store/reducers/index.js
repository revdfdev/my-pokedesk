import { combineReducers } from 'redux';
import pokemon from '../ducks/pokemon';
import singlepokemon from '../ducks/singlepokemon';
import pokemondesc from '../ducks/pokemondesc';

export default () => combineReducers({
    pokemon,
    singlepokemon,
    pokemondesc
});