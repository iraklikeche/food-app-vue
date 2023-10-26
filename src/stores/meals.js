import { ref } from "vue";
import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", () => {
  const searchResult = ref([]);
  const mealsByLetter = ref([]);
  const mealsByIngredients = ref([]);

  const setSearchResults = (results) => {
    searchResult.value = results;
  };
  const setSearchByLetter = (results) => {
    mealsByLetter.value = results;
  };
  const setSearchIngredients = (results) => {
    mealsByIngredients.value = results;
  };

  return {
    searchResult,
    mealsByLetter,
    mealsByIngredients,
    setSearchResults,
    setSearchByLetter,
    setSearchIngredients,
  };
});
