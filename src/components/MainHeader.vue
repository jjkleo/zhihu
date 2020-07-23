<template>
  <header class="main-header">
    <div class="header-content">
      <el-row>
        <el-col :span="4" class="main-header-logo">
          <!--logo-->
          <router-link class="header-logo" :to="{name:'home'}">
            <img :src="logo" width="150px">
          </router-link>
        </el-col>
        <el-col :span="5">
          <!-- 菜单 -->
          <el-menu :default-active="activeIndex" class="header-menu" @select="handleSelect" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">发现</el-menu-item>
            <el-menu-item index="3">话题</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="7" class="search-input">
          <!--搜索栏-->
          <el-input size="medium" class="search" placeholder="请输入内容" v-model="keywords">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2" class="question-button">
          <!--"提问"按钮-->
          <el-button size="medium" type="primary">提问</el-button>
        </el-col>
        <!--用户部分-->
        <el-col :span="6" v-if="!isLogin" class="user-login">
          <el-link @click="()=>{ this.$router.push({name:'signup'})}">登录</el-link>
        </el-col>
        <template v-if="isLogin">
          <el-col :span="3" class="header-message">         
            <!--提醒-->
            <span class="header-svg" v-html="svgBell"/>
            <!--信息-->
            <span class="header-svg" v-html="svgComments"/>
          </el-col>
          <el-col :span="3" class="user-info">
            <!--头像-->
            <el-dropdown placement="bottom" trigger="click" class="header-dropdown">
              <span>JKovac
                <el-avatar shape="square" size="medium" :src="avatar" class="header-avatar">
                </el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="goToPersonalPage" class="dropdown-span">
                    <font-awesome-icon icon="user" />
                    <span>我的主页</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item >
                  <div @click="setting" class="dropdown-span">
                    <font-awesome-icon icon="cog"/>
                    <span>设置</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item >
                  <div @click="logout" class="dropdown-span">
                    <font-awesome-icon icon="power-off" />
                    <span>退出</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </template>
      </el-row>
    </div>
  </header>
</template>


<script>
import logo from '@/assets/image/logo.png';
import svgBell from '@/assets/icon/bell.svg';
import svgComments from "@/assets/icon/comments.svg";
import avatar from "@/assets/image/avatar-default.png";
export default {
  data() {
    return { 
      logo,
      avatar,
      svgBell,
      svgComments,
      activeIndex:'1',
      keywords:'',
      isLogin: true,
    };
  },
  methods:{
    handleSelect(key){
      console.log(key);
    },
    logout(){

    },
    goToPersonalPage(){

    },
    setting(){

    }
  },
}
</script>

<style scoped>
.main-header{
  position:sticky;
  top: 0;
  z-index: 1;
  bottom: auto;
  width: 100%;
  border-bottom:solid 1px #e6e6e6;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  background: #ffffff;
}
.header-content{
  width: 1200px;
  margin: auto;
}
.main-header-logo{
  padding-top:2px;
}

.header-menu{
  border-bottom: none !important;
}

.search-input{
  padding: 12px 0px;
  text-align: center;
}
.question-button{
  padding:12px 0px;
  text-align: center;
}
.user-login{
  text-align: right;
  padding: 15px 10px;
  color:#8590a6;
}
.header-message{
  text-align: right;
  padding: 20px 0 0 0;
}
.header-svg{
  color:#8590a6;
  margin: 0 0 0 20px;
  cursor: pointer;
}
.user-info{
  text-align: right;
}
.header-dropdown{
  margin-top: 12px;
  text-align: center;
  cursor: pointer;
}
.header-dropdown span{
  vertical-align: -10px;
  color: rgb(0, 132, 255);
}
.header-avatar{
  margin: 0 0 0 8px;
}

.dropdown-span{
  color: #8590a6;
}
.dropdown-span span{
  margin: 0 0 0 5px;
}

</style>