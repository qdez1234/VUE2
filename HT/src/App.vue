<template>
  <div>

  <el-col id="navigation">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">

     <li class="img"> 
     <img src="./assets/logo.jpg"> 

     </li>

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>


  <div id="header">

<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1" @click="goRouter(3)">处理中心</el-menu-item>
  <el-submenu index="2" >
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" @click="goRouter(1)">表单</el-menu-item>
  <el-menu-item index="4" @click="goRouter(2)">注册</el-menu-item>
  <el-menu-item index="5" @click="goRouter(4)">文件上传</el-menu-item>
  <el-menu-item index="6" @click="goRouter(5)">用户头像上传</el-menu-item>
</el-menu>

  </div>




  <div id="content">

  <router-view></router-view>

  </div>









  </div>
</template>





<style>
    *{
      margin:0;
      padding:0;
    }
     #header{
        margin-left:200px;

     }
     #navigation{
        width:200px;
        float:left;
     }
     #navigation .img{
        height:100px;
     }
      #navigation .img img{
        height:60px;
        border-radius:50%;
        border:1px solid #ccc;
        text-align:center;
        margin:20px 50px;
     }
      #navigation .el-menu-vertical-demo{
          min-height:800px;
          width:200px;
          position:absolute;
          top:0;
      }
      #content{
          margin-left:200px;
      }
</style>


<script>

  export default {
    data() {
     return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
     methods: {
         goRouter(index){
              switch (index) {
                      case 1:
                        this.$router.push({path: 'ace'});
                        console.log(this)
                        break;
                      case 2:
                        this.$router.push({path: 'acf'});
                        console.log(this)
                        break;
                      case 3:
                        this.$router.push({path: 'acg'});
                        console.log(this)
                        break;
                      case 4:
                        this.$router.push({path: 'ach'});
                        console.log(this)
                        break;
                      case 5:
                        this.$router.push({path: 'aci'});
                        console.log(this)
                        break;
                    }
                }
            },
  }
</script>
