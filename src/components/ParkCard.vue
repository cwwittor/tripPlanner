<template>
  <div class="hello">
    <div class="max-w-sm">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full logoImg"
          :src="park.images[0].url"
          alt="Picture of the National Park at ..."
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ park.name }}</div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoImg {
  max-height: 300pxpx;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
