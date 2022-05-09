<script>
export default {
  props: ["error"],
};
</script>

<template>
  <h4>There seems to have been an error:</h4>
  <p>{{ error }}</p>
</template>
