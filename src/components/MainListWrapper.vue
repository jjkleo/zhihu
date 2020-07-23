<template>
  <div>
    <main-list-nav :type="type"/>
    <div class="card-content">
      <router-view v-for="(item,index) in fakeInfo"
        :key="index"
        :item="item"
        :index="index"
        :type="item.type"
        :showPart="['title']"
      />
    </div>
  </div>
</template>

<script>
import MainListNav from '@/components/MainListNav.vue';
export default {
  components:{
    MainListNav
  },
  data () {
    return {
      type:'main',
      fakeInfo: [
        {
          author:{
            avatar_url:"",
            headline:"",
            name:"jizihan",
          },
          relationship:{
            is_nothelp:false,
            is_thanked:false,
            voting:0,
          },
          question:{
            author:{
              avatar_url:"",
              headline:"",
              name:"hhh",
            },
            answer_count:18,
            comment_count:1,
            excerpt:"简介啊啊啊啊啊啊啊啊啊啊啊啊啊",
            title:"IntelliJ IDEA 中有什么让你相见恨晚的技巧？",
            type:"question",
            url:"",
          },
          comment_count:41,
          content:"AAAAAAAAAAAAAAA",
          excerpt:"奉义天涯： 别的不说，我先辟谣。 太多人跟我说“成年妇女失踪要24小时才会立案” 谁说的！ 没有这回事！ 我敢保证，绝对没有这法律条文“成年妇女失踪24小时立案。” 如果电视剧里提到，那么电视剧在胡扯。 如果媒体提…",
          thanks_count:69,
          thumbnail:"/static/image/java学习路线.jpg",
          type:"answer",
          voteup_count:771,
        },
        {
          author:{
            avatar_url:"",
            headline:"",
            name:"haidwao",
          },
          relationship:{
            is_nothelp:false,
            is_thanked:false,
            voting:0,
          },
          question:{
            author:{
              avatar_url:"",
              headline:"",
              name:"1231",
            },
            answer_count:18,
            comment_count:1,
            excerpt:"人在他在",
            title:"你在《王者荣耀》遇到过哪些有意思的队友？",
            type:"question",
            url:"",
          },
          comment_count:411,
          content:"AAAAAAAAAAAAAAA",
          excerpt:"杪柒： 给大家安利一个沙雕快乐套路。 1.四黑！匹配！开局等唯一的路人选好英雄锁了以后秒选四辅助，队频发：\"恭迎陛下登基！\"再进游戏以后，再发一次。 2.玩法类似养猪全程跟着就完事了，但是不…",
          thanks_count:629,
          thumbnail:"/static/image/java学习路线.jpg",
          type:"answer",
          voteup_count:11,
        },
      
      ]
    }
  }
}
</script>

<style scoped>
.card-content{
  padding: 0;
}
</style>