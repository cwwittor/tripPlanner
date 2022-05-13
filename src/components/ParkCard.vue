<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img
      class="w-full aspect-square object-cover"
      :src="park.images[0].url + '?w=500'"
      alt="Picture of the National Park at ..."
    />
    <div class="">
      <div class="px-4">
        <div class="font-bold text-xl mt-2">
          {{ park.name }}
        </div>
        <p class="text-gray-700 text-base">
          {{ park.addresses[0].city }},
          {{ park.addresses[0].stateCode }}
        </p>
      </div>
      <div class="px-6 pt-3 pb-2">
        <router-link
          class="park-link"
          :to="{ name: 'ParkDetails', params: { id: park.parkCode } }"
        >
          <button
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-100"
          >
            Park Info
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    park: {
      type: Object,
      required: true,
    },
  },
};
</script>
