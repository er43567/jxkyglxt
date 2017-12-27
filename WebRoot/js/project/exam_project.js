function examProject(){
	$.ajax({
		url : "/teacherms/Admin/admin_getSpecifiedInformationByPaging",
		type : "post",
		async : false,
		timeout : 3000,
		data : data,
		dataType : "json",
		success : function(xhr_data) {
			var xhr=xhr_data.ObjDatas;
			var str="";
			for(i=0;i<xhr.length;i++){
				str+="<tr>";
			    str+="<td>"+(i+1)+"</td>";
			    str+="<td>"+xhr[i][0].projectName+"</td>";
			    str+="<td>"+xhr[i][0].projectUserNames+"</td>";
			    str+="<td>"+xhr[i][0].projectSource+"</td>";
			    str+="<td>"+xhr[i][0].projectNo+"</td>";
			    str+='<td><input type="hidden" value="' + xhr[i][0].projectId + '" ><button class="btn btn-default btn-xs modiButton" title="修改"><i class="fa fa-pencil-square-o fa-lg"></i></button><button class="btn btn-default btn-xs solidButton" title="固化"><i class="fa fa-chain fa-lg" ></i></button></td>';
			   str+="</tr>";   
			}
			$('.table').children('tbody').html(str);
			$('.solidButton').click(ProjectsolidInfo);	
		},
		error : function() {}
	});
	$(".modiButton").unbind().on("click",function(){
		//显示出模态框
		$('#project_modal').modal({
			keyboard : true
		})
		$.post("/teacherms/Admin/admin_getTeacherTableInfoById",
				{tableId:$(this).siblings().val(),tableName:"TeacherProject"},function(xhr){
					$("#project_modal input,select").each(function(){
						 var na= $(this).attr("name").split(".")[1];
					 if(na=="userId"){
							 $(this).val(xhr.user.userId);
						 }
					 else	if(na=="userName"){
							 $(this).val(xhr.user.userName);
						 }
					 else	 $(this).val(xhr.object[na]);
					  })
				},"json");
	})
		
}
/*信息固化*/
var ProjectsolidInfo=function(){
   var infoid=$(this).siblings('input').val();
   $(this).siblings().remove();
   $(this).children().remove();
   $(this).append("<img  src='img/ok1.png' />")
     $.post('/teacherms/Admin/admin_LiftCuring',{
	   tableId:infoid,
	   tableName:"TeacherProject",
	   dataState:"40"},function(xhr){
		   if(xhr.result=="success"){
			   toastr.success("信息固化成功");
		   }else{
			  return;
		   }
   },'json')
}