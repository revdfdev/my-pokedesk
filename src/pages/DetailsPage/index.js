import { DetailsPage } from './DetailsPage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { lookPokemonDesc } from '../../store/ducks/pokemondesc';

function mapStateToProps(state) { 
    return {
        pokemonDesc: state.pokemondesc.pokemonDesc,
        error: state.pokemondesc.error
    }
}

export default withRouter(connect(mapStateToProps, { lookPokemonDesc })(DetailsPage));