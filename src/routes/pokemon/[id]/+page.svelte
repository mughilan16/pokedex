<script lang="ts" context="module">
  import { page } from "$app/stores";
  export async function load() {
    const ref = page.subscribe.name;
    console.log(ref);
    const url = `https://pokeapi.co/api/v2/poken/${ref}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    return { props: { pokeman } };
  }
</script>

<script lang="ts">
  import type { Pokemon } from "../../../types/pokemon";
  export let pokeman: Pokemon;
</script>

<h1>{pokeman.name}</h1>

