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
  <div id="header-bar" class="py-5 bg-black">
    <router-link
      :to="{ name: 'ParkList' }"
      class="rounded-full px-3 text-m font-semibold text-white hover:bg-gray-500 mt-2"
      >Parks</router-link
    >
  </div>
  <div>
    <ul>
      <li>First Park</li>
    </ul>
  </div>
</template>
