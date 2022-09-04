import type { Pokemon } from 'src/types/pokemon';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store'

export const pokemon: Writable<Array<Pokemon>> = writable([])
const fetchPokemon = async () => {
  const url: string = `https://pokeapi.co/api/v2/pokemon?limit=150`
  const res = await fetch(url);
  const data = await res.json()
  const loadedPokemon = data.results.map((data: Pokemon, index: number): Pokemon => {
    return (
      {
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }
    )
  })
  pokemon.set(loadedPokemon)
}
fetchPokemon()
