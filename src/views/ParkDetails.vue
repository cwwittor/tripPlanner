<script setup>
import { useParkStore } from "../stores";
import { defineProps, onMounted } from "vue";

const parkStore = useParkStore();
const props = defineProps(["id"]);

onMounted(() => {
  parkStore.fetchPark(props.id).catch((error) => {
    this.$router.push({
      name: "ErrorDisplay",
      params: { error: error },
    });
  });
});
</script>

<template>
  <div v-if="parkStore.park">
    <h1>{{ parkStore.park.name }}</h1>
  </div>
</template>
