<script lang="ts">
  // Store
  import { pokemon } from "../stores/pokestore";
  // Component
  import PokemonCard from "../components/pokemonCard.svelte";
  import type { Pokemon } from "src/types/pokemon";

  let searchTerm: string = "";
  let filteredPokemon: Array<Pokemon> = [];

  $: {
    if (searchTerm) {
      filteredPokemon = $pokemon.filter((pokeman) =>
        pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemon = [...$pokemon];
    }
  }
</script>

<svelte:head>
  <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200 my-2"
  bind:value={searchTerm}
  type="text"
  placeholder="Search Pokemon"
/>

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredPokemon as pokeman}
    <PokemonCard {pokeman} />
  {/each}
</div>
