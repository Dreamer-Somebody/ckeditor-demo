<template>
  <div class="color-comp" :style="{backgroundColor}">
    My background will change!
    But after Redo and Undo my backround won't change!
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      backgroundColor: "#aaa"
    };
  },
  mounted() {
    this.changeColor();
  },
  methods: {
    changeColor() {
        this.backgroundColor = this.getRandomColor();
    },
    getRandomColor() {
      return (
        "#" +
        (function(color) {
          return (color += "0123456789abcdef"[
            Math.floor(Math.random() * 16)
          ]) && color.length == 6
            ? color
            : arguments.callee(color);
        })("")
      );
    }
  }
};
</script>

<style scoped>
</style>
