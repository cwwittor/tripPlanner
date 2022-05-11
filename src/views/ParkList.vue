<template>
  <div>
    <div id="header-bar" class="lg:w-screen lg:h-14 h-20 bg-black mb-2">
      <span class="lg:left-0 inline-flex lg:visible invisible absolute">
        <img
          class="lg:h-14 lg:w-auto static lg:left-0"
          src="../assets/barLogo.png"
          alt="logo"
        />
        <h1 class="text-white text-3xl lg:mt-4 lg:ml-1 font-serif relative">
          National Parks Planner
        </h1>
      </span>
      <button
        class="inline-block bg-gray-400 rounded-full font-semibold text-white hover:bg-gray-300 lg:mt-4 lg:right-0 lg:text-sm lg:absolute lg:mr-8 lg:px-3 lg:py-1 relative content-center text-lg mt-5 px-6 py-2"
      >
        View Planner
      </button>
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1">
      <ParkCard
        v-for="park in parkStore.parks.data"
        :key="park.id"
        :park="park"
      />
    </div>
  </div>
</template>

<script setup>
import ParkCard from "../components/ParkCard.vue";
import { useParkStore } from "../stores";
import { onMounted } from "vue";

const parkStore = useParkStore();

onMounted(() => {
  parkStore.fetchParks().catch((error) => {
    this.$router.push({
      name: "ErrorDisplay",
      params: { error: error },
    });
  });
});
</script>

<style scoped></style>
