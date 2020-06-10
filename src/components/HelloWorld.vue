<template>
  <div class="hello">
    <h1>CKEditor4 Demo</h1>
    <div id="carrier">Some text ..............</div>
    <button @click="insertVueComp">insert Vue component</button>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.esm.js";
import ColorComp from "./ColorComp.vue";
export default {
  props: {},
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = window.CKEDITOR.replace("carrier", {
      width: 800,
      allowedContent: true,
      copyFormatting_allowRules: true,
      extraPlugins: "divarea",
      removePlugins: 'easyimage,cloudservices'
    });
  },
  methods: {
    insertVueComp() {
      let compId = "comp-" + new Date().getTime();
      this.editor.insertHtml(
        `<div data-comp-id="${compId}"><color-comp></color-comp></div>`
      );
      this.instantiate(compId);
    },
    instantiate(compId) {
      this.$nextTick(() => {
        new Vue({
          el: `[data-comp-id="${compId}"]`,
          components: {
            ColorComp
          }
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
