<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><Info
      msg="Hello Vue 3 + Vite"
    ></Info>
    <div>{{getName}}</div>
    <div class="stuff">some class test</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from "vue-demi";
import Info from '@/components/Info.vue'
import { useMainStore } from "@/store/index";

export default defineComponent({
  components: { Info },
  setup() {
    const store = useMainStore()
    return {
      getName: computed(() => store.getName),
      Info,
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
