import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/by-name/:name?",
      name: "byName",
      component: () => import("../views/MealsByName.vue"),
    },
    {
      path: "/by-letter/:letter?",
      name: "byLetter",
      component: () => import("../views/MealsByLetter.vue"),
    },
    {
      path: "/by-ingredients/",
      name: "ingredients",
      component: () => import("../views/Ingredients.vue"),
    },
    {
      path: "/by-ingredients/:ingredients",
      name: "byIngredients",
      component: () => import("../views/MealsByIngredients.vue"),
    },
    {
      path: "/meals/:id",
      name: "mealDetails",
      component: () => import("../views/MealDetails.vue"),
    },
  ],
});

export default router;
