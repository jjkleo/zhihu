<template>
  <div class="icon-wrapper">
    <div class="icon-item" v-if="exists.indexOf('question')>=0">
      <font-awesome-icon icon="file-alt" style="color:#0084ff"/>
      <span>写回答</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('article')>=0">
      <font-awesome-icon icon="edit"  style="color:#f4c807"/>
      <span>写文章</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('thinking')>=0">
      <font-awesome-icon icon="lightbulb" style="color:#26bfbf" />
      <span>写想法</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('live')>=0">
      <font-awesome-icon icon="bolt" style="color:#ffcf00"/>
      <span>Live</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('book')>=0">
      <font-awesome-icon icon="book" style="color:#43d480"/>
      <span>书店</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('desk')>=0">
      <font-awesome-icon icon="th-large" style="color:#0084ff"/>
      <span>圆桌</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('expert')>=0">
      <font-awesome-icon icon="pen" style="color:#0f88eb"/>
      <span>专栏</span>
    </div>
    <div class="icon-item" v-if="exists.indexOf('consult')>=0">
      <font-awesome-icon icon="comment-dollar" style="color:#5478f0"/>
      <span>付费咨询</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['exists']
}
</script>

<style scoped>
.icon-wrapper{
  text-align: left;
  padding: 10px;
}
.icon-item{
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 60px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 10px;
}
.icon-item svg{
  font-size: 18px;
  margin: 5px 0 8px 0;
}
.icon-item span{
  display: block;
  font-size: 12px;
  white-space: nowrap;
}
.icon-item:hover span{
  color:#66b1ff;
}
</style>