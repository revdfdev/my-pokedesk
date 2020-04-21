import React from 'react';
import { Container } from 'reactstrap';
import DescBox from '../../components/DescBox';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export class DetailsPage extends React.Component {

    componentDidMount() { 
        const { match, lookPokemonDesc } = this.props;
        lookPokemonDesc(`${BASE_URL}/${match.params.id}/`)
        //lookPokemonDesc(url);
    }

    render() {
        const { pokemonDesc, error } = this.props;

        const pokemon = {
          cardImg: `https://pokeres.bastionbot.org/images/pokemon/${pokemonDesc.id}.png`,
          pokeMonTitle: pokemonDesc.name,
          pokemonId: pokemonDesc.id,
          weight: pokemonDesc.weight,
          height: pokemonDesc.height,
          abilities: pokemonDesc.abilities ? pokemonDesc.abilities : []
        };

        return (
          <Container
            fluid
            style={{
              marginTop: "70px"
            }}
          >
                {pokemonDesc && <DescBox pokemon={pokemon}/>}
          </Container>
        );
    }
}