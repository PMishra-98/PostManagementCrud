<template>
  <HeaderComponent />

  <!-- <FooterComponent /> -->

  <router-view />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getAllData');
    });
  },
};
</script>

<style>
body {
  background-color: #0072a8;
}
</style>
