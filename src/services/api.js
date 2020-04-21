import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/',
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const reflect = p => p.then(v => ({ v, status: "fulfilled" }), e => ({ v: {}, status: "rejected" }));