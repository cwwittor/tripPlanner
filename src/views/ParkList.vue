<template>
  <h1>National Parks Planner</h1>
  <div class="parks">
    <ParkCard
      v-for="park in parkStore.parks.data"
      :key="park.id"
      :park="park"
    />
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

<style scoped>
.parks {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
