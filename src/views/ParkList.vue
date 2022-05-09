<script>
import ParkCard from "../components/ParkCard.vue";
export default {
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: {
    events() {
      return this.$store.state.events; //change based on naming conventions in store
    },
  },
};
</script>

<template>
  <h1>National Parks Planner</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
