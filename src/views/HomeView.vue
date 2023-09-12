<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
    />
    <div class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingridients = ref([]);

onMounted(async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  console.log(response.data);
  ingridients.value = response.data;
});
</script>
