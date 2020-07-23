<template>
  <div class="answer-main">

    <div class="title" v-if="showPart.indexOf('title')>=0">
      <a>{{transtedInfo.title}}</a>
    </div>

    <div class="creater-info" v-if="showPart.indexOf('creator')>=0">
      <div class="avater">
        <img :src="item.author.avatarUrl" alt="">
      </div>
      <div class="userinfo">
        <p class="username">
          {{item.author.name}}
        </p>
        <p class="headline">
          {{item.author.headline}}
        </p>
      </div>
    </div>

    <div class="vote" v-if="showPart.indexOf('vote')>=0">
      <span>
        {{JSON.parse(item.status.voteUp).length}}人赞同了该回答
      </span>
    </div>

    <div class="content-wrapper clearfix">
      <div class="shortCut" v-if="showType==='excerpt'">
        <div class="cover" v-if="transtedInfo.cover">
          <img :src="transtedInfo.cover" alt="" width="190px" height="105px">
        </div>
        <div class="excerpt">
          <span v-html="item.excerpt"></span>
          <el-button class="excerpt-button"
           type="text" 
           icon="el-icon-arrow-down" 
           style="padding:0px;"
           @click="showType='all'">阅读全文</el-button>
        </div>
      </div>
      <div class="content" v-if="showType==='all'">
        <span v-html="item.content"></span>
        <el-button class="" type="text" icon="el-icon-arrow-up" @click="showType='excerpt'">收起</el-button>
      </div>
    </div>

    <!--底部 操作按钮-->
    <list-item-actions
      :thanks_count="22"
      :comment_count="33"
      :voteup_count="44"
      :showActionItems="['vote','thanks','comment','share','favorite','more']"
    />
  </div>
</template>

<script>
import ListItemActions from '@/components/ListItemActions.vue';
export default {
  props:['item','showPart','type'],
  components:{
    ListItemActions
  },
  data () {
    return {
      showType:'excerpt',
    }
  },
  computed:{
    transtedInfo(){
      if(this.type==='article'){
        return{
          title:this.item.title,
          cover:this.item.image_url||"",
        };
      }else if(this.type==='answer'){
        return{
          title:this.item.question.title,
          cover:this.item.thumbnail||"",
        }
      }
    }
  },
}
</script>

<style scoped>
.answer-main{
  padding: 20px;
  border: 1px solid #EBEEF5;
}
.title{
  font-size: 18px;
  font-weight: 600;
  font-synthesis: style;
  line-height: 1.6;
}
.title a:hover{
  color: #175199;
  cursor: pointer;
}
.shortCut{
  height: 110px;
}
.cover{
  float: left;
  margin-right: 18px;
  cursor: pointer;
}
.excerpt{
  max-height: 100px;
  margin-top: 9px;
  overflow: hidden;
  line-height: 1.67;
  font-size: 15px;
}
.excerpt:hover{
  color: #646464;
  cursor: pointer;
}
.excerpt-button{
  padding: 0;
  margin-left: 4px;
  color: rgb(23, 81, 153);;
}
.excerpt-button:hover{
  background-color: transparent;
  color: grey;
}
</style>