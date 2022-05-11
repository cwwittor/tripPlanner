<script>
export default {
  props: ["error"],
};
</script>

<template>
  <div>
    <h4>There seems to have been an error:</h4>
    <p>{{ error }}</p>
  </div>
</template>
