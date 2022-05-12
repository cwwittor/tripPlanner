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

// onSubmit() => {
//   const park = {
//     ...this.park,
//     id: uuidv4(),
//   }
//   this.parkStore.createPark(park).then(() => {
//     this.$router.push({
//       name: 'ParkDetails',
//       params: { parkCode: park.ParkCode}
//     })
//   })
//   .catch(error => {
//     this.$router.push({
//       name:'ErrorDisplay',
//       params: { error: error }
//     })
//   })
// };
</script>

<template>
  <div id="header-bar" class="py-5 bg-black">
    <router-link
      :to="{ name: 'ParkList' }"
      class="rounded-full px-3 text-m font-semibold text-white hover:bg-gray-500 mt-2"
      >Parks</router-link
    >
    <button
      class="bg-gray-400 rounded-full font-semibold text-white hover:bg-gray-300 lg:mt-0 lg:text-sm lg:mr-8 lg:px-3 lg:py-1 content-center text-lg mt-3 px-6 py-2 lg:absolute lg:right-0"
    >
      <router-link :to="{ name: 'ParkPlanner' }"> View Planner </router-link>
    </button>
  </div>
  <div class="" v-if="parkStore.park">
    <img
      class="object-cover object-right-bottom lg:h-screen lg:right-0 lg:w-1/2 lg:absolute"
      :src="parkStore.park.images[0].url"
      alt="Picture of the National Park at ..."
    />
    <div class="bg-slate-200 lg:w-1/2 lg:h-screen">
      <div
        class="bg-white rounded border border-black content-center shadow-lg"
      >
        <h1 class="font-extrabold text-2xl">{{ parkStore.park.name }}</h1>
        <h1>{{ parkStore.park.designation }}</h1>
      </div>

      <h1 class="bg-white rounded mx-8 mt-3 shadow-lg lg:text-xl text-lg px-3">
        {{ parkStore.park.description }}
      </h1>

      <ul class="lg:mt-96 rounded mt-8 mx-16 px-2">
        <li>
          Sunday: {{ parkStore.park.operatingHours[0].standardHours.sunday }}
        </li>
        <li>
          Monday: {{ parkStore.park.operatingHours[0].standardHours.monday }}
        </li>
        <li>
          Tuesday: {{ parkStore.park.operatingHours[0].standardHours.tuesday }}
        </li>
        <li>
          Wednesday:
          {{ parkStore.park.operatingHours[0].standardHours.wednesday }}
        </li>
        <li>
          Thursday:
          {{ parkStore.park.operatingHours[0].standardHours.thursday }}
        </li>
        <li>
          Friday: {{ parkStore.park.operatingHours[0].standardHours.friday }}
        </li>
        <li>
          Saturday:
          {{ parkStore.park.operatingHours[0].standardHours.saturday }}
        </li>
      </ul>

      <h1 class="lg:mt-16 mt-6">
        Cost of Admission: {{ parkStore.park.entranceFees[0].cost }}
      </h1>

      <button
        class="bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white lg:mt-1 mt-2 mb-3 hover:bg-gray-200"
      >
        Add To Planner
      </button>
    </div>
  </div>
</template>
