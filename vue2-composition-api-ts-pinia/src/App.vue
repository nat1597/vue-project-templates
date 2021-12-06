<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><HelloWorld
      msg="Hello Vue 3 + Vite"
    ></HelloWorld>
    <div>{{getName}}</div>
    <div class="stuff">some class test</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from "vue-demi";
import HelloWorld from '@/components/HelloWorld.vue'
import { useMainStore } from "@/store/index";

export default defineComponent({
  components: { HelloWorld },
  setup() {
    const store = useMainStore()
    return {
      getName: computed(() => store.getName),
      HelloWorld,
    };
  },
});
</script>

<style lang='scss'>
html{
  margin: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & .stuff {
    color: blue;
  }
}
</style>
