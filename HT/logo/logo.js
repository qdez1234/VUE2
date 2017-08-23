$(document).ready(function(){
      $(".nm").focus(function(){
      $(".nm").parent().children(".Htop").css("display","none")
      })
     $(".ps").focus(function(){
        	  $(".ps").parent().children(".Htop").css("display","none");
      })


//用户提交数据
      $(".btn").click(function(){
        if($(".nm").val()==""){
        	  $(".nm").parent().children(".Htop").css("display","block");
        	  return
        }
       if($(".ps").val()==""){
        	  $(".ps").parent().children(".Htop").css("display","block");
        	  return
        }

       var Username= $(".nm").val()
       var Passwork= $(".ps").val()
        
       var data={Username:Username,passwork:Passwork}
       console.log(data)
/*       $.ajax({
       	url:"",
       	type:"post",
       	data:data,
       	success:function(result){

       	},
       	err:{

       	}
       })*/

    if($('.keep').is(':checked')) {

    	
}


      })
});