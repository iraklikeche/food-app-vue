<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mt-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div
    v-if="!meals || meals.length === 0"
    class="flex justify-center text-gray-600 p-8"
  >
    <h2>There are no meals</h2>
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const props = defineProps({
  meals: Object,
});
</script>
