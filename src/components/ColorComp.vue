<template>
  <div class="color-comp" :style="{backgroundColor}">
    My background will change!But after Redo and Undo my backround won't change!
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
    var vm = this;
    vm.changeColor();
    setInterval(() => {
        vm.changeColor();
    },3000);
  },
  methods: {
    changeColor() {
        this.backgroundColor = this.getRandomColor();
    },
    getRandomColor() {
        var r = Math.floor( Math.random() * 256 );
        var g = Math.floor( Math.random() * 256 );    
        var b = Math.floor( Math.random() * 256 );
        return "rgb("+r+','+g+','+b+")";
    }
  }
};
</script>

<style scoped>
.color-comp {
    margin: 10px 0;
}
</style>
