<template>
  <div class="home">
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: 'Home',
  components:{
    MainHeader,
  },

};
</script>

<style scoped>

</style>