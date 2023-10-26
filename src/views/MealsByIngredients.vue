<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMealsStore } from "../stores/meals";

import axios from "axios";
import Meals from "../components/Meals.vue";
import { useRoute } from "vue-router";

const ingredients = ref("");

const route = useRoute();
const mealStore = useMealsStore();
const meals = ref([]); // Define meals using the ref function

const searchMeals = async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients.value}`
  );

  console.log(response.data.meals);
  meals.value = response.data.meals; // Update the meals property with the response data
  mealStore.setSearchIngredients(response.data.meals);
};

onMounted(async () => {
  try {
    ingredients.value = route.params.ingredients;
    if (ingredients.value) {
      await searchMeals();
    }
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
