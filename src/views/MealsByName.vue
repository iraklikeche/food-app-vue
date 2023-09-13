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
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
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
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
          >
            Youtube Link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMealsStore } from "../stores/meals";
import axios from "axios";
import { useRoute } from "vue-router";

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
