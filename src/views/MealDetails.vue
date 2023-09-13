<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});
console.log(route.params.id);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    );
    console.log(response.data);
    meal.value = response.data;
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
