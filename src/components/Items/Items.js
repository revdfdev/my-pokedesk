import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import Item from '../Item';

export function Items({ pokemons }) {

    return (
      <Row
        style={{
          marginTop: "20px"}}>
        {pokemons && pokemons.map(pokemon => {
            return <Item pokemom={pokemon} />
        })}
        </Row>
    );
}