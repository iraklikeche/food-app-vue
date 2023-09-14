<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">{{ meal.strInstructions }}</div>

    <div class="flex items-center justify-center mt-5">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }},
              {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <!-- <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div> -->
    </div>
    <div class="mt-4 flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});
console.log(route.params.id);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    );
    // We use [0] not for loop in <div></div> above because we have only 1 meal in the array everytime ! ! !.
    meal.value = response.data.meals[0] || {};
    // console.log(meal.value);
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
