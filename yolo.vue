<template>
    <small>{{text}} here</small>
</template>

<script>
export default {
  props: ['text']
};
</script>

<style scoped>
small {
  display: block;
}
</style>
