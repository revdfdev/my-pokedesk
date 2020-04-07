import { HomePage } from './HomePage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPokemons, addAPokemon, editPokemon, closeEditBox } from '../../store/ducks/pokemon';

function mapStateToProps(state) {
    return {
        pokemons: state.pokemon.pokemons,
        message: state.pokemon.message,
        pokemonData: state.pokemon.pokemonData,
        isOpen: state.pokemon.isOpen,
        error: state.pokemon.error
    }
}

export default withRouter(connect(mapStateToProps, { getPokemons, addAPokemon, editPokemon, closeEditBox })(HomePage));