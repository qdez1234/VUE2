<template>
  <div id="index">
  	
  	
  <div id="header">
 <el-row>
  <el-col :span="4"><div class="grid-content bg-purple">
  	          <div class="Timg">
  	          	    <img src="../dist/1.jpg" alt="" />
  	          	    <span class="text">伟杰</span>
  	          </div>
  	
  </div></el-col>
  <el-col :span="11"><div class="grid-content bg-purple-light">
  	<div class="list-text">
  		    <span class="text">17G16A</span>
  		    <span class="list-1">立项></span>
  		    <span class="list-1">T1 ></span>
  		    <span class="list-1">PR1 ></span>
  		    <span class="list-1">PR2 ></span>
  		    <span class="list-1">PR3 ></span>
  		    <span class="list-1">PIR ></span>
  		    <span class="list-1">MPR </span>
  		    <span class="list-1">...</span>
  	</div>
  </div></el-col>
  <el-col :span="9" class="Hlist"><div class="grid-content bg-purple-light bg-right">
  	        <span class="icon-1"> <span class="text">成本</span></span>
  	        <span class="icon-1"> <span class="text">品质</span></span>
  	        <span class="icon-1"> <span class="text">文档</span></span>
  	        <span class="icon-1"> <span class="text">计划</span></span>
  	        <span class="icon-1"> <span class="text">物料</span></span>
  	        <span class="icon-1"> <span class="text">看板</span></span>
  	        <span class="icon-1"> <span class="text">ROM</span></span>
  </div></el-col>
</el-row>
  </div>

  	
  <div id="navigation">
       
  	  <el-col  class="Nconten">
    <el-menu default-active="9-3" class="el-menu-vertical-demo" theme="light" unique-opened>
    	<li class="Htop" >
    		
    	<el-badge :value="3" class="H-btn">
      <i class="el-icon-menu"></i>提醒
      </el-badge>	 
      
      <el-badge :value="3" class="H-btn">
      <i class="el-icon-menu"></i>待批
      </el-badge>	 
      
      <el-badge :value="3" class="H-btn">
      <i class="el-icon-menu"></i>需批
      </el-badge>	 

    	</li>
     <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>通讯录</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">通讯 
 </el-menu-item>
          <el-menu-item index="3-2">通讯录-职员明细</el-menu-item>
          <el-menu-item index="3-3">新增公</el-menu-item>
          </shiro:hasPermission>
          <el-menu-item index="3-4">新增职员 </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>部门</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">工作日结</el-menu-item>
          <el-menu-item index="4-2"> 每周日结</el-menu-item>
          <el-menu-item index="4-3"> 部门经费</el-menu-item>
          <el-menu-item index="4-4">体系文件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>项目其他</template>
        <el-menu-item-group>
          <el-menu-item index="5-1"> 项目任务</el-menu-item>
          <el-menu-item index="5-2">项目奖罚</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>绩效</template>
        <el-menu-item-group>
          <el-menu-item index="6-1"> 个人绩效</el-menu-item>
          <el-menu-item index="6-2"> 项目绩效</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

     <el-submenu index="7">
        <template slot="title"><i class="el-icon-message"></i>知识库</template>
        <el-menu-item-group>
          <el-menu-item index="7-1"> 知识培训</el-menu-item>
          <el-menu-item index="7-2">知识总结</el-menu-item>
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

   <el-submenu index="9">
        <template slot="title"><i class="el-icon-message"></i>部门管理</template>
        <el-menu-item-group>
          <el-menu-item index="9-1" @click="goRouter(9-1)"> 部门设计</el-menu-item>
          <el-menu-item index="9-2"> 部门展示</el-menu-item>                                                                                              
          <el-menu-item index="9-3" @click="goRouter(9-3)"> 主页面展示</el-menu-item>                                                                                              
          <el-menu-item index="9-4" @click="goRouter(9-4)"> 阶段配置</el-menu-item>                                                                                              
          <el-menu-item index="9-5" @click="goRouter(9-5)"> 模板管理-创建模板</el-menu-item>                                                                                              
        </el-menu-item-group>
      </el-submenu>
       
       <li class="Hcontent">
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
      <span><i class="el-icon-star-off"></i>  <span class="timer">2017.06.06 10:05</span> <span class="text">详情详情详情情详详</span></span> 
       </li>
  </el-menu>
  </el-col>
  </div>
     	 
     	 
     	 <div id="component">  <router-view></router-view></div>
     	 
     	 
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

    body #index{
    	min-width: 00px;
    	height: 100%;
    	position: relative;
    }
    /*组件公共样式修改开始*/
    .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    }
    .el-submenu__title{
    	height: 45px;
    	line-height: 45px;
    }
    /*组件公共样式修改结束*/
    #navigation .Htop{
    	height: 65px;
    }
     #navigation{
     	width: 200px;
     	display: inline-block;
     	float: left;
     }
     #navigation .Htop .H-btn{
     	    color: #48576a;
      	  margin-left: 25px;
      	  line-height: 110px;
      	  font-size: 14px;
      	  height: 70px;
      	  cursor: pointer;
      }
    #navigation .Htop i{
         position: absolute;
         left: 2px;
         top: 15px;
         font-size: 25px;
         color: #4B5D67;
      }
      #navigation .Htop sup{
      	right: 10px;
      	top: 10px;
      }
      #navigation .Htop .H-btn:first-child sup{
      	background: #7BBC52;
      }
      #navigation .Htop .H-btn:nth-child(2) sup{
      	background: #8E44AD;
      }
      #navigation .Htop .H-btn:nth-child(3) sup{
      	background: #BF4346;
      }
       #navigation .Nconten{
       	width: 200px;
       	float: none;
       }
      #navigation .Nconten :after{
      	content:"";
      	display: block;
      	height: 0;
      }
      #navigation .el-menu-vertical-demo{
      	  box-sizing: border-box;
      	  background-color: white;
      	  width: 200px;
      }
       #navigation .el-menu-vertical-demo>li{
      	 padding: 0;
      }
       #navigation .Htop{
        height: 70px;
       }
       #navigation .Hcontent{
      	  min-height:200px;
      }
      #navigation .Hcontent span>i{
      	font-size: 25px;
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
       color: #4B5D67;
       width: 160px;
       overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
      }
      #navigation .el-menu-vertical-demo>li{
      	  border: 1px double  #ccc;
      	  border-bottom: none;
      }

      #navigation .el-menu-vertical-demo>li:last-child{
 
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
       color: #4B5D67;
  }
  #header .list-text>span{
  	height: 50px;
  	line-height: 50px;
  	float: left;
  }
    #header .list-text .text{
    	font-size: 20px;
    	font-weight: 800;
    	margin-right: 10px;
    }
   #header .list-text .list-1{
   	height: 30px;
   	text-align: center;
   	font-size: 14px;
   	font-weight: 700;
   	padding-bottom: 5px;
   }
   #header .list-text .list-1:last-child{
   	margin-left: 5px;
   	line-height:30px;
   	font-size: 30px;
   	font-weight: 900;
   	color: #A1A1A1;
   }
    
  
  #header .bg-right {
  	padding: 0 20px;
  }
  #header .bg-right>span{
  	height: 49px;
  	width: 50px;
  	text-align: center;
  }
    #header .bg-right>span:hover{
    	border-bottom: 3px solid #41C7DB;
    }
  #header .bg-right .icon-1{
  	float: right;
  }
  #header .bg-right i{
  	font-size: 20px;
  	color: darkgray;
  }
 #header .bg-right .text{
   	margin-top: 15px;
 	  display: inline-block;
 	  height: 20px;
 	  line-height: 20px;
  	text-align: center;
  	margin-left: 5px;
  	border-right: 2px solid #ccc;
  	padding-right: 6px;
  }
  
  #header .Hlist{
  	height: 50px;
  	color:#4B5D67;
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
    color:#4B5D67;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<style type="text/css">
  #component{
  	box-sizing: border-box;
  	overflow: auto;
  	margin-left: 10px;
  	margin-top: 10px;
  }

</style>


<script>
   import $ from 'jquery'
  export default {
  	data(){
  		  return{
  		  	     num:2
  		  }
  	},
  	created:function(){
       

  	},
  	 mounted(){
//	 	        var form=document.getElementById("form") 
//	 	        var Wdiv=form.childNodes;
//	 	        console.log(Wdiv)
//	 	        var num=this.num
//            switch(num){
//               	case 1:
//            	  form.style.width="100%";
//            	  break; 
//            	  case 2:
//            	  form.style.width="200%";
//            	  break; 
//            	  case 3:
//            	  form.style.width="300%";
//            	  break;
//            	 default:
//               form.style.width="100%";
//            }
  	 },
     methods: {
      goRouter(index){
      	switch(index){
      		case 9-1:
      		this.$router.push({path:"/department/design"});
      		break;
      		case 9-3:
      		this.$router.push({path:"/department/index"});
      		break;
      		case 9-4:
      		this.$router.push({path:"/department/config"});
      		break;
      		case 9-5:
      		this.$router.push({path:"/department/Mtemplate"})

      	}
      },
    }

  }
	
</script>