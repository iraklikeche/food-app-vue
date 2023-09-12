<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName', params: { name: $route.params.name } }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter', params: { letter: $route.params.letter } }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{
          name: 'byIngredients',
          params: { ingredients: $route.params.ingredients },
        }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>
