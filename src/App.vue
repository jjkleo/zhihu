<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
}
</script>
<style>
#app{
  padding: 0;
  background: #f6f6f6;
  font-size: 14px;
  font-family: "Microsoft YaHei",sans-serif;
}
body{
  margin: 0;
  position: relative;
}
a{
  color: inherit;
  text-decoration: none;  
}
</style>