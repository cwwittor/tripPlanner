<template>
  <div class="hello">
    <div class="max-w-sm flex">
      <div class="inline-block max-w-sm rounded overflow-hidden shadow-lg mb-5">
        <img
          class="w-full w-96 h-64"
          :src="park.images[0].url"
          alt="Picture of the National Park at ..."
        />
        <div class="w-96 h-30">
          <div class="">
            <div class="font-bold text-xl mb-2 truncate">{{ park.name }}</div>
            <p class="text-gray-700 text-base">{{ park.addresses[0].city }}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <router-link
              class="park-link"
              :to="{ name: 'ParkDetails', params: { id: park.parkCode } }"
            >
              <button
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-100"
              >
                View More
              </button>
            </router-link>
          </div>
        </div>
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
