<template>
	<div id="form">
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
</template>

<style scoped>
    #header{
    	background: yellow;
    }
    #form {
    	  display: inline-block;
    	  width: 200%;
    	  height: 100%;
    }
    #form>div:first-child{
    	border-left: 1px solid #ccc;
    }
    
     #form>div{
          box-sizing: border-box;
    	  display: inline-block;
    	  width: 20%;
    	  height: 100%;
    	  border-right: 1px solid #ccc;
    }
    #form>div>li{
    	height: 30px;
    	text-align: center;
    	line-height: 30px;
    }
    #form>div>li>.icon{
    	float: right;
    	visibility: hidden;
    	margin-left: 20px;
    }
    #form>div>li:hover .icon{
    	visibility: visible;
    }
    #form>div>li>.icon>i{
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
    
    
    #form>div>li:nth-child(2n){
    	height: 25px;
    	text-align: center;
    	line-height: 25px;
    	background: rgb(243,244,246);
    }
    #form>div>li:nth-child(n){
    	height: 25px;
    	text-align: center;
    	line-height: 25px;
    }
    #form>div>li:first-child{
    	background-color: #eef1f6;
    }
    #form div li:first-child select{
    	background: #EEF1F6;
     	width: 100%;
     	height: 100%;
     	outline: none;
     	border-right: none;
     	border-left: none;
     	margin-top: 2px;
     }
</style>

<script>
  export default {
  	data(){
  		  return{
//		  	  screenWidth:window.screen.width-230,
//		  	  url:"http://localhost:8080/PMS/model/lodeDept",
  		  	  data:[{name:"部门"},{name:"部门"},{name:"部门"},{name:"部门"}]
  		  }
  	},
  	created:function(){
//    var vm=this;
//    vm.$http.post(vm.url, "",{'headers': {'Content-Type': 'x-www-form-urlencoded'}})
//   .then(function (res) {
//   	vm.data=res.body
//   	console.log(vm.data)
//   }, function (err) {
//   	
//   });
  	},
  	 mounted(){   
//	 	  	      var vm=this;
//		   	      //给id="component"这个盒子动态的设置宽度
//		   	      document.getElementById("component").style.width=vm.screenWidth+"px";
  	 }
  }
	
	
</script>