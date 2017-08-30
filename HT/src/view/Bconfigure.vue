<style>
#Bconfigure{
	background: white;
	width: 100%;
	min-width: 1190px;
	position: absolute;
	z-index: 100px;
	left: 0;
	top: 0;
}
#Bheader{
	height: 50px;
	line-height: 50px;
	background-color: rgb(251,116,19);
	font-size: 20px;
	font-weight: 600;
    color: white;
    padding-left: 20px;
}	  
#Blist{
	box-sizing: border-box;
	height: 36px;
	padding: 2px 0 ;
	background-color:rgb(204,204,204);
	position: relative;
}
#Blist .Btext{
	background-color: white;
	height: 36px;
	width: 40px;
	text-align: center;
	line-height: 36px;
	position: absolute;
	
}
#Blist .Bul{
	float: right;
}
#Blist .el-select input{
	border: none;
	border-radius:0;
	text-align: center;
}
 .el-select-dropdown{
	left: 0 !important;
}
#Blist .Bul li{
	float: right;
	margin-right: 20px;
	line-height: 36px;
	cursor: pointer;
}
#Bconfigure #Blist-2{
	width: 1140px;
	height: 44px;

}
 #Bconfigure  #Blist-2>div{
	display: inline-block;
	width: 280px;

}
#Bconfigure  #Blist-2>div>.text{
	width: 80px;
	color:#BF4346;
	line-height: 100%;
}
#Bconfigure  #Blist-2>div>input{
	width: 180px;
	text-align: center;
}
#Bconfigure  #Blist-2>div>select{
    width:180px;
}
#Bconfigure  #Blist-2>div>.block{
	display: inline-block;
}
#Bconfigure  #Blist-2>div>.block .el-date-editor--datetime{
	left: -5px;
}
#Bconfigure  #Blist-2>div>.block input{
	display: inline-block;
    width:184px;
    height: 20px;
    border-radius: 0;
}


     #Bform{
     	margin-top: 10px;
     }
     #Bform>div{
          box-sizing: border-box;
    	  display: inline-block;
    	  width: 20%;
    	  height: 100%;
    	  border-right: 1px solid #ccc;
    }
    #Bform>div>li{
    	height: 30px;
    	text-align: center;
    	line-height: 30px;
    }
    #Bform>div>li>.icon{
    	float: right;
    	visibility: hidden;
    	margin-left: 20px;
    }
    #Bform>div>li:hover .icon{
    	visibility: visible;
    }
    #Bform>div>li>.icon>i{
    	cursor: pointer;
    	margin-top: 2px;
    	width: 18px;
    	height: 18px;
    	font-size: 12px;
    	background-color: #7BBC52;
    	display:inline-block;
    	border-radius: 50%;
    	color: white;
    	text-align: center;
    	line-height: 22px;
    }
    #Bform>div>li:nth-child(2n){
    	background: rgb(243,244,246);
    }
    #Bform>div>li:nth-child(n){
    }
    #Bform>div>li:first-child{
    	background-color: #eef1f6;
    }
    #Bform div li:first-child select{
    	background: #EEF1F6;
     	width: 100%;
     	height: 100%;
     	outline: none;
     	border-right: none;
     	border-left: none;
     }
</style>
<template>
	<div id="Bconfigure">
		   <div id="Bheader">模板管理--阶段配置</div>
		   <div id="Blist">

                <span class="Btext">筛选</span>
            <ul class="Bul">	
            	 <li @click="goIndex(1)">关闭</li>
            	 <li>打印</li>
            	 <li>后一记录</li>
            	 <li>前一记录</li>
            	 <li>删除</li>
            	 <li>保存</li>
            	 <li>新增</li>
            </ul>
		   </div>
	       <div id="Blist-2">
	               <div><span class="text">*模板</span> 
	               	     <select id="test" @change="getSelect()">
	               	        <option id="remove" disabled>  </option>
	               	     	<option v-for="x in temSelect" :id="x.id">{{x.name}}</option>
	               	     </select>
	               </div>
	               <div><span class="text">最后制作人</span><input type="text" /></div>
	               <div><span class="text">审核人</span><input type="text" /></div>
	               <div><span class="text">审批人</span><input type="text" /></div>
	               <div><span class="text">*阶段名称</span> 
	               	      <select>
	               	     	<option v-for="x in stageSelect">
	               	     		     {{x.name}}
	               	     	</option>
	               	     </select>
	               </div>
	               <div><span class="text">提审时间</span> 
	               	<div class="block">
                    <input type="text"/>
           </div>
          </div>
	               <div><span class="text">审核时间</span><input type="text" /></div>
	               <div><span class="text">审批时间</span><input type="text" /></div>	               
	       </div>
	        <div id="Bform">
	          	  <div v-for="x in data">
                   	  <li>
                   	  	<select>
                   	  	  <option value="">1</option>
                   	  	  <option value="">1</option>
                   	  	  <option value="">1</option>
                   	    </select>
                   	  </li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   	  <li>{{x.name}} <span class="icon"> <i class="el-icon-caret-bottom"></i> <i class="el-icon-caret-bottom"></i> </span></li>
                   </div>	   
	          </div> 
	        
	       </div>
	       </div>
	</div>
</template>
		
<script>
   import $ from 'jquery'
  export default {
    data() {
      return {
      	   temSelect:"",
      	   data:"",
      	   stageSelect:""
      }
    },
  created(){
           this.$http.post('http://localhost:8080/pms/model/load',"",{ emulateJSON:true})
                                .then(function (res) {
                                this.temSelect=res.body.obj
                                }, function (res) {console.log(res)});
               
    },
     mounted(){
     	   var Wheight=window.screen.height-100
     	   console.log(Wheight)
     	    $("#Bconfigure").height(Wheight)
     },
     methods:{
     //页面路由发放跳转
      goIndex(index){
      	switch(index){
      		case 1:
      		this.$router.push({path:"/department/index"});
      		break;
      	}
      },

     //加载对应下拉菜单
     getSelect:function(){
     	          var  myselect=document.getElementById("test")
     	          var  index=myselect.selectedIndex;
     	          var  id=myselect.options[index].id;
     	          this.$http.post('http://localhost:8080/pms/stage/find',{id:id},{ emulateJSON:true}).then(function (res) {
                   this.stageSelect=res.body.obj
                  }, function (res) {console.log(res)});
                              
     },
     }
  }
</script>

