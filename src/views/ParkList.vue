<script>
import ParkCard from "../components/ParkCard.vue";
export default {
  components: {
    ParkCard,
  },
  created() {
    this.$store.dispatch("fetchParks").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    events() {
      return this.$store.state.parks;
    },
  },
};
</script>

<template>
  <h1>National Parks Planner</h1>
  <div class="parks">
    <ParkCard v-for="park in parks" :key="park.id" :park="park" />
  </div>
</template>
