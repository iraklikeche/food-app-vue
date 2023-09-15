<template>
  <div class="p-8 pb-0 mb-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMealsStore } from "../stores/meals";
import axios from "axios";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();

const mealStore = useMealsStore();

const keyword = ref("");

const meals = computed(() => mealStore.searchResult);

const searchMeals = async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword.value}`
  );
  console.log(response.data.meals);

  mealStore.setSearchResults(response.data.meals);
};

onMounted(async () => {
  try {
    keyword.value = route.params.name;
    if (keyword.value) {
      await searchMeals();
    }
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
