<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5"
        >Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName', params: { name } }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'byIngredients', params: { ingredients } }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
