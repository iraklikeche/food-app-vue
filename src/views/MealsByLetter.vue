<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useMealsStore } from "../stores/meals";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import axios from "axios";
import Meals from "../components/Meals.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const mealStore = useMealsStore();
const route = useRoute();

const letter = ref("");

const meals = computed(() => mealStore.mealsByLetter);
const searchMeals = async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter.value}`
  );

  console.log(response.data.meals);

  mealStore.setSearchByLetter(response.data.meals);
};

onMounted(async () => {
  try {
    letter.value = route.params.letter;
    if (letter.value) {
      await searchMeals();
    }
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});

watch(route, async () => {
  try {
    letter.value = route.params.letter;
    if (letter.value) {
      await searchMeals();
    }
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
