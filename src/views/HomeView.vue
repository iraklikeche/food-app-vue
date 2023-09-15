<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
import Meals from "../components/Meals.vue";
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    meals.value.push(response.data.meals[0]);
  }
});

console.log(meals);
</script>
