<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, autem!
      </p>
      <div class="flex items-center justify-between mb-2">
        <YoutubeButton :href="meal.strYoutube">Youtube Link</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({
  meal: Object,
});
</script>
