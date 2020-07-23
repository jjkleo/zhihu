<template>
  <div class="main-sidebar">
    <el-card class="sidebar-card" :body-style="{ padding: '0px' }">
      <icon-buttons :exists="['question','article','thinking']"/>
      <div class="draft" @click="goDraft">
        <font-awesome-icon icon="envelope-open-text" style="color:#dc5e14;"/>
        <span class="draft-text">我的草稿</span>
        <span class="draft-num">2</span>
      </div>
    </el-card>
    <el-card class="sidebar-card" :body-style="{ padding: '0px' }">
      <icon-buttons :exists="['live','book','desk','expert','consult']"/>
    </el-card>
    <el-card class="sidebar-card" :body-style="{ padding: '10px 0 10px 0' }">
      <div class="sidebar-item" style="border-top:none;">
        <font-awesome-icon icon="star" />
        <span class="text">我的收藏</span>     
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="question-circle" />
        <span class="text">我关注的问题</span>
        <span class="num">320</span>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="user-plus" />
        <span class="text">我的邀请</span>
        <span class="num">1</span>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="coins" />
        <span class="text">我的余额</span>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="comment-dots" />
        <span class="text">站务中心</span>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="headset" />
        <span class="text">帮助中心</span>
      </div>
    </el-card>
    <sidebar-footer/>
  </div>
</template>

<script>
import IconButtons from '@/components/IconButtons.vue';
import SidebarFooter from '@/components/SidebarFooter.vue';
export default {
  components:{
    IconButtons,
    SidebarFooter,
  },
  data () {
    return {
      
    }
  },
  methods:{
    goDraft(){
      console.log("我的草稿");
    }
  }
}
</script>

<style scoped>
.main-sidebar{
  position: sticky;
  top: -12%;
  bottom: auto;
}
.sidebar-card{
  margin: 0 0 10px 0;
}
.sidebar-item{
  position: relative;
  display: flex;
  margin: 0 0;
  padding: 10px 20px 10px 20px;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
}
.draft{
  position: relative;
  display: flex;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  border-top: 1px solid #8590a6;
  padding: 14px 0 14px 5px;
  margin: 0 20px;
}
.draft-num{
  position:absolute;
  right: 10px;
  left: auto;
  padding: 6px 10px;
  border-radius: 2px;
  background: #f6f6f6;
  color: #8590a6;
  font-size: 12px;
}
.draft-text{
  display: inline-block;
  margin: 0 0 0 6px;
}
.draft:hover .draft-text{
  color: #0f88eb;
}
.sidebar-item svg{
  font-size: 16px;
  color: #8590a6;
}
.sidebar-item:hover{
  background-color: #f6f6f6;
}
.sidebar-item:hover .num{
  background-color: #ffffff;
}
.text{
  display: inline-block;
  margin: 0 0 0 6px;
  color: #8590a6;
}

.num{
  position:absolute;
  right: 20px;
  left: auto;
  padding: 6px 10px;
  border-radius: 2px;
  background: #f6f6f6;
  color: #8590a6;
  font-size: 12px;
}
</style>