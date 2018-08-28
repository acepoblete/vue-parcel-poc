<template>
    <h1>{{msg}} <yolo text="default vanila vue"></yolo></h1>
</template>

<script>
import Yolo from "./yolo.vue";

export default {
  components: {
    yolo: Yolo
  },
  data() {
    return {
      msg: "vue!"
    };
  }
};
</script>


