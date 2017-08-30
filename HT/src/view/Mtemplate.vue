<style scoped>
#Mtemplate{
	background: white;
	width: 100%;
	min-width: 1190px;
	position: absolute;
	z-index: 100px;
	left: 0;
	top: 0;
}
#Mtemplate #Bheader{
	height: 50px;
	line-height: 50px;
	background-color: rgb(251,116,19);
	font-size: 20px;
	font-weight: 600;
    color: white;
    padding-left: 20px;
}	  
#Mtemplate #Blist{
	box-sizing: border-box;
	height: 36px;
	padding: 2px 0 ;
	background-color:rgb(204,204,204);
	position: relative;
}
#Mtemplate #Blist .Btext{
	background-color: white;
	height: 36px;
	width: 40px;
	text-align: center;
	line-height: 36px;
	position: absolute;
	
}
#Mtemplate #Blist .Bul{
	float: right;
}
#Mtemplate #Blist .el-select input{
	border: none;
	border-radius:0;
	text-align: center;
}
 #Mtemplate .el-select-dropdown{
	left: 0 !important;
}
#Mtemplate #Blist .Bul li{
	float: right;
	margin-right: 20px;
	line-height: 36px;
	cursor: pointer;
}
#Mtemplate #Blist .Bul li{
	float: right;
	margin-right: 20px;
	line-height: 36px;
	cursor: pointer;
}
#Mtemplate #Blist2 .list{
	padding: 20px 0 50px 60px;
	width: 830px;
}
#Mtemplate #Blist2 .list>span{
	width: 270px;
	line-height: 30px;
	height: 30px;
	color: #BF4346;
	font-size: 14px;
}
#Mtemplate #Blist2 .list>span .text{
	width: 80px;
}
#Mtemplate #Blist2 .list span input{
	text-align: center;
}
#Mtemplate #Blist3 .template{
	padding-left: 30px;
	font-size: 20px;
	color: #BF4346;
}
#Mtemplate #Blist3 .template input{
	padding: 3px 0px;
	font-size: 20px;
	color: #BF4346;
	width: 705px;
	text-align: center;
}
#Mtemplate #Blist3 .template .text{
	margin-right: 10px;
}
#Mtemplate #Blist3 .template .text .number{
	display: inline-block;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #FFCC00;
	float: left;
	margin-right: 10px;
	text-align: center;
	color: black;
	line-height: 30px;
}



#Mtemplate #Blist4 .stage{
	margin-top: 20px;
	padding-left: 30px;
}

#Mtemplate #Blist4 .stage .text{
	margin-right: 10px;
   color: #BF4346;
   font-size: 20px;
   display: block;

}
#Mtemplate #Blist4 .stage .text .number{
	display: inline-block;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #FFCC00;
	margin-right: 10px;
	text-align: center;
	color: black;
	line-height: 30px;
}
#Mtemplate #Blist4 .stage .stage-list{
	 float: left;
	 width: 1000px;
	 font-size: 14px;
}
#Mtemplate #Blist4 .stage .stage-list{
	 height:30px;
	 line-height: 30px;
	 text-align: center;
}
#Mtemplate #Blist4 .stage .stage-list .list1 span{
	width: 500px;
	background-color: rgb(153,153,153);
}
#Mtemplate #Blist4 .stage .stage-list .list2 span{
	width: 500px;
}

#Mtemplate #Blist4 .stage .stage-list .list2 span input{
	width: 499px;
	height: 31px;
	outline: none;
	border: none;
	text-align: center;
}
#Mtemplate #Blist4 .stage .stage-list .list2:nth-child(2n) span input{
		background:rgb(238,238,238);
 
}
</style>
<template>
	<div id="Mtemplate">
		   <div id="Bheader">模板管理--创建模板</div>
		   <div id="Blist">
                <span class="Btext">筛选</span>
            <ul class="Bul">	
            	 <li @click="goIndex(1)">关闭</li>
            	 <li>打印</li>
            	 <li @click="next">后一记录</li>
            	 <li @click="pre">前一记录</li>
            	 <li>提审</li>
            	 <li @click="remove()">删除</li>
            	 <li @click="save()" >保存</li>
            	 <li>新增</li>
            </ul>
	       </div>
           <div id="Blist2">
           	   <div class="list">
           	           <span><span class="text">最后操作人</span> <input type="text"/></span>
           	           <span><span class="text">审核人</span> <input type="text"/></span>
           	           <span><span class="text">审批人</span> <input type="text"/></span>
           	           <span><span class="text">提审时间</span> <input type="text"/></span>
           	           <span><span class="text">审核时间</span> <input type="text"/></span>
           	           <span><span class="text">审批时间</span> <input type="text"/></span>
           	   </div>
           	
           </div>
	       <div id="Blist3">
	              <div class="template">
	                 <span class="text"><span class="number">1</span>模板名称</span><input type="text" id="name" att=0 :value="Message.name" />
	              </div>
	       </div>
           <div id="Blist4">
              	  <div class="stage">
	                 <span class="text"><span class="number">2</span>阶段名称</span>
	                 <div class="stage-list" style="margin-left: 125px; border-right: 1px solid white;">
	                           <div class="list1"><span class="name">阶段名称</span><span class="explain">阶段说明</span></div>
	                           <div class="list2" v-for="x in stage"><span><input type="text" :value="x.name" /></span><span id="explain1"><input type="text" :value="x.description"/></span></div>
	                           <div class="list2"><span class="stages"><input type="text" /></span><span class="explain" ><input type="text" /></span></div>
	                           <div class="list2"><span class="stages"><input type="text" /></span><span class="explain"><input type="text" /></span></div>
	                           <div class="list2"><span class="stages"><input type="text" /></span><span class="explain"><input type="text" /></span></div>
	                           <div class="list2"><span class="stages"><input type="text" /></span><span class="explain"><input type="text" /></span></div>

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
      	     Message:"",
      	     stage:""
      }

    },
    created(){    
    	          
    	         
    },
     mounted(){
     	   var Wheight=window.screen.height-100
     	   $("#Mtemplate").height(Wheight)
     },
     methods:{
      goIndex(index){
      	switch(index){
      		case 1:
      		this.$router.push({path:"/department/index"});
      		break;
      	}
      },
      save() {
      	var vm=this;
      	var reg = /^\s*$/g;  
      	var name=$("#name").val();
//      模板名不能为空
      	if(name==""||reg.test(name)){this.$alert('模板名不能为空', { confirmButtonText: '确定'});return}
      	else{
      	//获取页面数据
      	var stages=[];
      	var repeat=[]
        for(var i=0;i<$(".list2").length;i++){
        	var stage=$(".list2").eq(i).children('.stages').children("input").val()
        	var description=$(".list2").eq(i).children('.explain').children("input").val()
        	var stageMessage={name:stage,description:description};
        	stages.push(stageMessage)
        	repeat.push(stage)}
          //post数据
          var Message={name:name,stages}
          console.log(Message)
         //判断数据中阶段是否是重名状态
             for(var i=0;i<repeat.length;i++){
             	 var data=repeat[i];
             	 var number=0;
             	 if(data==""||reg.test(data)){
             	 	continue;
             	 }
             	 for(var j=0;j<repeat.length;j++){
             	 	if(data==repeat[j]){number++}
             	 }
             	 if(number>1){
                  this.$alert('阶段名称'+data+"出现重复", '提示', {
                  confirmButtonText: '确定'})
                  return;
             	}
                }
      	}
 //      让用户确定是否保存
      		this.$confirm('确定保存?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
            }).then(() => {
                  this.$http.post(url,Message,{emulateJSON:true}).then(function (res) {
                  console.log(res)
                  this.$message({
                  type: 'success',
                  message: '保存成功!'
                  });
                  }, function (res) {
                  	console.log(res)
                  this.$message({
                  type: 'info',
                  message: '保存出错'
                  }); 
                  })
                  }).catch(() => {});
      },
      
     remove:function(){
     	       var remove_id=$("#name").attr("att")
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
               confirmButtonText: '确定',
               cancelButtonText: '取消',
               type: 'warning'
                }).then(() => {
                        this.$http.post("http://localhost:8080/pms/model/delete",{id:remove_id},{ emulateJSON:true})
                        .then(function (res) {
                         this.$message({
                         type: 'success',
                         message: '删除成功!'
                        });	
                        },
                        function(res){
                         this.$message({
                         type: 'info',
                         message: '删除失败'
                         });      	 
                        }); 
                 }).catch(() => {});
     },
     pre:function(){
     	var  vm=this;
     	var  pre_id=$("#name").attr("att")
     	vm.$http.post('http://localhost:8080/pms/model/previous',{id:pre_id},{ emulateJSON:true})
     	                .then(function (res) {
     	                	var status=res.body.success
                            if(status){
                            vm.Message=res.body.obj.model;
     	                	vm.stage=res.body.obj.stage;
     	                	$("#name").attr("att",res.body.obj.model.id)
                            }
                            else{
                                this.$message({
                                type: 'info',
                                message: res.body.msg
                             });	
                            }
                         },function(res){
                         	  console.log(res)
                         })
     },
     next:function(){
     	var  vm=this;
     	var  next_id=$("#name").attr("att")
     	console.log(next_id)
     	vm.$http.post('http://localhost:8080/pms/model/next',{id:next_id},{ emulateJSON:true})
     	.then(function (res) {
     	   var status=res.body.success
           if(status){
           	 vm.Message=res.body.obj.model;
     	     vm.stage=res.body.obj.stage;
     	       $("#name").attr("att",res.body.obj.model.id )
     	       console.log(vm.Message)
           }
         else{
               this.$message({
               type: 'info',
                message: res.body.msg
                });	
                }
        },function(res){
        console.log(res)
        })
     },                                                        
     add:function(){
      	var vm=this
      	var name=$("#name").val();
      	var reg = /^\s*$/g;  
//      模板名不能为空
      	if(name==""||reg.test(name)){ window.location.reload(),return}
//    	if(是否是处于审核/审批状态){ window.location.reload(),return}
//      if(是否是将原来的那个数据进行修改)
    	    this.$confirm('确定保存?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
            }).then(() => {
//      数据提交后台                   
, function (res) {
                  	console.log(res)
                  this.$message({
                  type: 'info',
                  message: '保存出错'
                  }); 
                  })
                  }).catch(() => {});
          vm.getDate("http://localhost:8080/pms/model/save")
      },
     }
      }
</script>