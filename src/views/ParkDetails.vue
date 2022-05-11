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
  <div id="header-bar" class="lg:w-screen lg:h-14 h-20 bg-black">
    <router-link
      :to="{ name: 'ParkList' }"
      class="inline-block rounded-full px-3 py-1 text-m font-semibold text-white hover:bg-gray-500 mt-4"
      >Parks</router-link
    >
    <button
      class="inline-block bg-gray-400 rounded-full font-semibold text-white hover:bg-gray-300 lg:mt-4 lg:right-0 lg:text-sm lg:absolute lg:mr-8 lg:px-3 lg:py-1 relative content-center text-lg mt-5 px-6 py-2"
    >
      View Planner
    </button>
  </div>
  <div class="flex" v-if="parkStore.park">
    <div
      class="bg-slate-200 lg:w-1/2 lg:h-screen lg:relative absolute bottom-0 w-screen h-1/2"
    >
      <div
        class="bg-white rounded border border-black lg:w-1/4 w-1/2 inline-block content-center my-4"
      >
        <h1 class="font-extrabold">{{ parkStore.park.name }}</h1>
        <h1>{{ parkStore.park.designation }}</h1>
      </div>

      <h1 class="bg-white rounded mx-5 mt-4">
        {{ parkStore.park.description }}
      </h1>

      <ul>
        <li :v-for="hours in parkStore.park.operatingHours[0].standardHours">
          {{ hours }}
        </li>
      </ul>

      <h1 class="mt-4">
        Cost of Admission: {{ parkStore.park.entranceFees[0].cost }}
      </h1>

      <button
        class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-gray-200 mt-4"
      >
        Add To Planner
      </button>
    </div>
    <img
      class="lg:w-1/2 lg:h-screen lg:relative object-cover object-right-bottom"
      :src="parkStore.park.images[0].url"
      alt="Picture of the National Park at ..."
    />
  </div>
</template>

<style scoped>
.parks {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}
</style>
