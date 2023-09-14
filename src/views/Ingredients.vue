<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredients',
        params: { ingredients: ingredient.idIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMealsStore } from "../stores/meals";
import { useRoute } from "vue-router";
import axios from "axios";

// const route = useRoute();
const ingredients = ref("");

const mealStore = useMealsStore();

// const meals = computed(() => mealStore.mealsByIngredients);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https:/www.themealdb.com/api/json/v1/1/list.php?i=list"
    );

    ingredients.value = response.data.meals;

    console.log(response.data.meals);
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
