import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'; 

export function Item({ error, pokemom, openEditBox }) {

  console.log("Pokaemon", JSON.stringify(pokemom, null, 3));

  const { url } = pokemom;
  const ids = url ? url.split('/') : "";
  const id = ids[6] ? ids[6] : pokemom.pokemonId;
  const pokemonName = pokemom.name ? pokemom.name : pokemom.name
  console.log("url", ids);

  const onEditClicked = (e) => {
    e.preventDefault();
    const pokemon = {
      id: id,
      name: pokemonName
    }
    openEditBox(pokemon);
  }

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {pokemom &&
        <div className="card h-100">
        <Link to={`/details/${id}`}>
          <img
            className="card-img-top"
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt=""
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            {pokemonName}
          </h4>
          <h5>{`ID # ${id}`}</h5>
        </div>
        <div className="card-footer">
          <Button color="primary" size="lg" active onClick={onEditClicked}>Edit</Button>
        </div>
      </div>
      }
    </div>
  );
}