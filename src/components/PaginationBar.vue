<template>
  <ul class="pagination">
    <li class="pagination-item">
      <router-link :to="{ path: '/1' }"> First </router-link>
    </li>
    <li class="pagination-item">
      <router-link :to="{ path: `/${currentPage - 1}` }">
        Previous
      </router-link>
    </li>
    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <router-link
        :class="{ active: isPageActive(page.name) }"
        :to="{ path: `/${page.name}` }"
      >
        {{ page.name }}
      </router-link>
    </li>
    <li class="pagination-item">
      <router-link :to="{ path: `/${currentPage + 1}` }"> Next </router-link>
    </li>
    <li class="pagination-item">
      <router-link :to="{ path: `/${totalPages}` }"> Last </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
}

.router-link-exact-active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
