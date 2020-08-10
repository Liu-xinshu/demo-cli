<template>
  <el-container headerShow leftShow rightShow>
      <div slot="header" class="header">
         阿斯顿发发发发
      </div>
      <div slot="left" class="left">
        w
      </div>
       <div slot="right" class="right">
        是
      </div>
      
  </el-container>
</template>
<script>
export default {
   name: 'Home',
   data() {
       return {}
   },
}
</script>
<style scoped lang = 'scss'>
.Home{
    width: 100%;
    height: 100%;
}
.header{
    height: 120px;
    border: 1px solid red;

   
}
.left,
.right{
    height: 800px;
    width: 300px;
    border: 1px solid red;
}

.left{
    margin: 10px 0 0 10px;
}
.right{
    margin: 10px 10px 0 0 ;
}
</style>
