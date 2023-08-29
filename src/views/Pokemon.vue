<template>
  <h1 v-if="!pokemon && !errorMessage">Pokemon View</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { watch } from "vue";
import usePokemon from "@/composables/usePokemon";

export default {
  setup() {
    const route = useRoute();

    //console.log(route.params);
    const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id, // primer callback de que queres que escuche
      () => searchPokemon(route.params.id) // segunda CB, accion a realizar
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("esta seguro que desa sa?");
      console.log(answer);

      if (!answer) return false; // false bloquea las alida
    });

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style></style>
