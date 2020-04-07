import { api, reflect } from './api';
import axios from 'axios';

const BASE_PATH = "api/v2/pokemon";

export async function getaAllPokemons(maxCounts) {
    const request = api.get(BASE_PATH, {
        params: {
            offset: maxCounts
        }
    });
    const res = await reflect(request);

    if (res.e) {
        return {};
    }
    const response = res.v;
    return response;
}

export async function getSinglePokemon(pokemons) {
    try {
        const responses = await Promise.all(
            pokemons.map(pokemon => {
                return axios.get(pokemon.url);
        }));
        console.log(JSON.stringify(responses));
        return responses;
    } catch(e) {
        throw e;
    }
}

export async function getPokemonDescription(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw e;
    }
}

export async function mockAddPokemon(pokemon) {
    try {
        const response = await new Promise((resolve, reject) => {
            resolve({
                msg: 'Pokemon added successfully'
            });
        });
        return response;
    } catch (e) {
        throw e;
    }
}

export async function mockEditPokemon(pokemon) {
    try {
        const response = await new Promise((resolve, reject) => {
            resolve({
                msg: 'Pokemon edited successfully'
            });
        });
        return response;
    } catch (e) {
        throw e;
    }
}