<template>
  <div>
    <div class="actions">
      <!--热度-->
      <el-button v-if="showActionItems.indexOf('hot')>=0" size="medium" type="text">
        <span class=""></span>
        {{metrics_area.text}}
      </el-button>
      <!--赞同-->
      <el-button class="blue-button" v-if="showActionItems.indexOf('vote')>=0" size="small" type="primary" plain>
        <font-awesome-icon icon="caret-up" />
         <span>赞同</span>{{voteup_count}}
      </el-button>
      <!--支持-->
      <el-button class="blue-button"  v-if="showActionItems.indexOf('vote')>=0" size="small" type="primary" plain>
        <font-awesome-icon icon="caret-down" />
      </el-button>
      <!--评论-->
      <el-button class="gray-button" v-if="showActionItems.indexOf('comment')>=0" size="medium" type="text">
        <font-awesome-icon icon="comment" />
        {{comment_count}}条评论
      </el-button>
      <!--分享-->
      <el-button class="gray-button" v-if="showActionItems.indexOf('share')>=0" size="medium" type="text">
        <font-awesome-icon icon="share-alt" />
        分享
      </el-button>
      <!--收藏-->
      <el-button class="gray-button" v-if="showActionItems.indexOf('favorite')>=0" size="medium" type="text" >
        <font-awesome-icon icon="star" />
        收藏
      </el-button>
      <!--感谢-->
      <el-button class="gray-button" v-if="showActionItems.indexOf('thanks')>=0" size="medium" type="text">
        <font-awesome-icon icon="heart" />
        {{thanks_count}}个喜欢
      </el-button>
      <!--更多-->
      <el-dropdown  v-if="showActionItems.indexOf('more')>=0" placement="bottom">
        <el-button class="gray-button" size="medium" type="text">
          <font-awesome-icon icon="ellipsis-h" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>没有帮助</el-dropdown-item>
          <el-dropdown-item>举报</el-dropdown-item>
          <el-dropdown-item>申请授权</el-dropdown-item>
          <el-dropdown-item>不感兴趣</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'comment_count', //评论数目
    'thanks_count', //感谢数目
    'voteup_count', //支持数目
    'metrics_area', //热度数据
    'showActionItems', //展示内容
  ],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.actions{
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.blue-button{
  padding: 8px 12px;
  border: none;
  font-size: 14px;
}
.blue-button span{
  margin: 0 5px;
}
.gray-button{
  color: #8590a6;
  margin-left: 25px!important;
}
</style>