<template>
  <el-container class="main-content">
    <div class="main-list">
      <main-list-wrapper/>
    </div>
    <div class="main-sidebar">
      <main-sidebar/>
    </div>
  </el-container>
</template>

<script>
import MainListWrapper from '@/components/MainListWrapper.vue';
import MainSidebar from '@/components/MainSidebar.vue';
export default {
  name:'Main',
  components:{
    MainListWrapper,
    MainSidebar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.main-content {
  text-align: center;
  width: 1000px;
  min-height: 9000px;
  margin: auto;
  padding: 10px;
}
.main-list{
  text-align: left;
  width: 700px;
  margin-right: 10px;
  border: 1px solid #dcdfe6;
  background: #ffffff;
}
.main-sidebar{
  width: 300px;
}
</style>