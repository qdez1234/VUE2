<template>
  <div>
  	
  	
  <div id="header">
 <el-row>
  <el-col :span="4"><div class="grid-content bg-purple">
  	          <div class="Timg">
  	          	    <img src="../dist/1.jpg" alt="" />
  	          	    <span class="text">谢伟杰</span>
  	          </div>
  	
  </div></el-col>
  <el-col :span="11"><div class="grid-content bg-purple-light">
  	<div class="list-text">
  		    <span class="text">17G16A</span>
  		    <span class="list-1">立项</span>
  		    <span class="list-1">T1</span>
  		    <span class="list-1">PR1</span>
  		    <span class="list-1">PR2</span>
  		    <span class="list-1">PR3</span>
  		    <span class="list-1">PIR</span>
  		    <span class="list-1">MPR</span>
  		    <span class="list-1">...</span>
  	</div>
  </div></el-col>
  <el-col :span="9" class="Hlist"><div class="grid-content bg-purple-light bg-right">
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>
  	        <span class="icon-1"> <i class="el-icon-date icon-1-1"></i><br /><span class="text">rom</span></span>

  </div></el-col>
</el-row>
  </div>

  	
  <div id="navigation">
  	  <el-col :span="4">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="light">
    <el-menu-item index="1"><i class="el-icon-menu"></i>提醒 <el-button type="success" class="number">5</el-button> <el-button type="danger" class="number">5</el-button> </el-menu-item>
    <el-menu-item index="2"><i class="el-icon-menu"></i>特批/需批<el-button type="success" class="number">5</el-button> <el-button type="danger" class="number">5</el-button>  </el-menu-item>
     <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>通讯录</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">誉鑫公司</el-menu-item>
          <el-menu-item index="3-2">其他公司</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>部门</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">工作日结</el-menu-item>
          <el-menu-item index="4-2">每周日结</el-menu-item>
          <el-menu-item index="4-3">部门经费</el-menu-item>
          <el-menu-item index="4-4">体系文件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>项目其他</template>
        <el-menu-item-group>
          <el-menu-item index="5-1">项目任务</el-menu-item>
          <el-menu-item index="5-2">项目奖励</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>绩效</template>
        <el-menu-item-group>
          <el-menu-item index="6-1">个人绩效</el-menu-item>
          <el-menu-item index="6-2">项目绩效</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="7">
        <template slot="title"><i class="el-icon-message"></i>知识库</template>
        <el-menu-item-group>
          <el-menu-item index="7-1">知识总结</el-menu-item>
          <el-menu-item index="7-2">培训考试</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    <el-submenu index="8">
        <template slot="title"><i class="el-icon-message"></i>设置</template>
        <el-menu-item-group>
          <el-menu-item index="8-1">项目团队</el-menu-item>
        <el-submenu index="8-2">
          <template slot="title">项目流程点</template>
          <el-menu-item index="8-2-1">创建项目</el-menu-item>
          <el-menu-item index="8-2-2">权限设置</el-menu-item>
          <el-menu-item index="8-2-3">末班管理</el-menu-item>
        </el-submenu>
        </el-menu-item-group>
      </el-submenu>
       
       <li class="Hcontent">
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
       </li>

  </el-menu>
  </el-col>
  </div>
  </div>

</template>


<style>
    *{
      margin:0;
      padding:0;
    }
    html{
    	height: 100%;
    }
    span{
    	  	display: inline-block;
    }
    li{
    	list-style: none;
    }
    body{
    	min-width: 1190px;
    	height: 100%;
    }
    body>div{
    	min-width: 1190px;
    	height: 100%;
    }
    
      #navigation .el-menu-vertical-demo{
      	  box-sizing: border-box;
      	  background-color: white;
      }
       #navigation .el-menu-vertical-demo>li{
      	 padding: 0;
      }
       #navigation .Hcontent{
      	  min-height:200px;
      }
      #navigation .Hcontent span>i{
      	font-size: 25px;
      }
      #navigation .number{
      	height: 20px;
      	line-height: 0;
      	margin-left: 0;
      	margin-right: 2px;
      	float: right;
      	margin-top: 11px;
      }
      #navigation .Hcontent>span{
      	width: 100%;
      	box-sizing: border-box;
      	cursor: pointer;
      	padding-left: 10px;
      	line-height: 10px;
      	position: relative;
      	margin-bottom:10px ;
      }
    #navigation .Hcontent>span>i{
      	line-height: 30px;
      	position: absolute;
      }
     #navigation .Hcontent>span>.timer{
       font-size: 12px;
       display: inline;
       line-height: 0;
       position: absolute;
       top: 10px;
       left: 50px;
      }
     #navigation .Hcontent>span>.text{
       font-size: 14px;
       top: 10px;
       left: 40px;
       line-height: 35px;
       margin-top: 10px;
       margin-left: 40px;
       color: darkkhaki;
       width: 160px;
       overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
      }
      #navigation .el-menu-vertical-demo>li{
      	  border: 1px double  #ccc;
      	  border-bottom: none;
      }
      #navigation .el-submenu .el-menu-item {
      	min-width: auto;
      }
      #navigation .el-menu-vertical-demo>li:last-child{
 
      }
      #navigation .el-menu-item{
      	height: 50px;
      	line-height: 50px;
      }
       #navigation .el-menu-vertical-demo .img{
       	height: 50px;
       	padding-left: 20px;
       	line-height: 50px;
       	border: none;
        background:white;
        font-size: 20px;
        font-weight:600;
       }
       #navigation .el-menu-vertical-demo .img img{
       	width: 35px;
       	height: 35px;
       }
       
      #content{
          margin-left:200px;
      }
      
</style>

<style>
  #header{
  	border-bottom: 1px solid #ccc;
  }
  #header .grid-content{
     min-height: 50px;
     background-color: white;
  }
  #header .Timg{
  	padding: 0 10px;
  	height: 50px;
  	line-height: 50px;
  }
    #header .Timg img{
     max-height: 35px;
     border: 1px solid #ccc;
     border-radius: 50%;
     margin: 5px;
     float: left;
  }
     #header .Timg .text{
       font-size: 20px;
       font-weight: 600;
  }
  #header .list-text>span{
  	height: 50px;
  	line-height: 50px;
  	float: left;
  }
    #header .list-text .text{
    	font-size: 20px;
    	font-weight: 800;
    }
   #header .list-text .list-1{
   	border-bottom: 3px solid #ccc;
   	width: 40px;
   	height: 30px;
   	text-align: center;
   	margin-left: 15px;
   	font-weight: 500;
   	padding-bottom: 5px;
   }
   #header .list-text .list-1:last-child{
   	border: none;
   }
    
  
  #header .bg-right {
  	padding: 0 20px;
  }
  #header .bg-right>span{
  	height: 40px;
  	width: 50px;
  	text-align: center;
  }
  #header .bg-right .icon-1{
  	float: right;
  }
  #header .bg-right i{
  	font-size: 20px;
  	color: darkgray;
  }
 #header .bg-right .text{
  	text-align: center;
  	margin-left: 5px;
  }
  
  #header .Hlist{
  	height: 50px;
  }
  
    #header .el-row{
	  margin-bottom: 0;
     }
     #header .el-row .grid-content{
     	border-radius: 0;
     }
	  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>



<script>
  export default {
    methods: {

    }
  }
</script>