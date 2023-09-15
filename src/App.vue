<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="max-w-[1200px] mx-auto">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
