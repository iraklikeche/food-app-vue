<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import axios from "axios";
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
</script>
