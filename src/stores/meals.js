import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", () => {
  const searchResult = ref([]);

  const setSearchResults = (results) => {
    searchResult.value = results;
  };

  const logSearchResult = () => {
    console.log(searchResult.value);
  };

  return { searchResult, setSearchResults, logSearchResult };
});
