function check_selectAllProject(){
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
			    str += '<td><input type="hidden" value="' + xhr[i][0].projectId  + '" ><button class="btn btn-default btn-xs relieveButton" title="解除固化"><i class="fa fa-chain-broken fa-lg"></i></button><button class="btn btn-default btn-xs viewButton" title="查看"><i class="fa fa-search-plus fa-lg"  aria-hidden="true"></i></button></td>';
			    str+="</tr>";   
			}
			$('.table').children('tbody').html(str);
			$('.relieveButton').click(ProjectelieveInfo);
		},
		error : function() {}
	});
}
function checkProject(){
	check_selectAllProject();
	$(".viewButton").unbind().on("click",function(){
		//显示出模态框
		$('#project_modal').modal({
			keyboard : true
		})
		imgUpload();
		$.post("/teacherms/Admin/admin_getTeacherTableInfoById",
				{tableId:$(this).siblings().val(),tableName:"TeacherProject"},function(xhr){
				var inf = $('.table_infomation');
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
		$(".review-info").remove();
	})
	$(".export_button").unbind().on("click",function(){
		//显示出模态框
		$('#export_project').modal({
			keyboard : true
		});
	})

	$('.end-button').unbind().on("click",function(){
		
		$('#info_table tbody tr').each(function(){
			if(($(this).find(' input[name="check"]').is(':checked'))==true){
			data.export_id+=$(this).find('input[type="hidden"]').val()+',';
			}
		})
		$('#export_project .group-list li input[name="checkbox"]').each(function(){
			if(($(this).is(':checked'))==true){
				data.export_name+=$(this).val()+',';
			}
		})
		if (data.export_id != "" && data.export_name != "") {
			location.href = "/teacherms/Admin/admin_ExportExcelCollection?tableName=TeacherProject&export_id=" + (data.export_id).substring(0,data.export_id.length-1) + "&export_name=" + (data.export_name).substring(0,data.export_name.length-1);
		} else {
			alert("请选择数据");
		}
		data.export_id="";
		$('.end-button').unbind().remove();
	});
}


/*解除固化*/
var ProjectelieveInfo=function(){
	   var infoid=$(this).siblings('input').val();
	   $(this).children().remove();
		$(this).append("<img  src='img/ok1.png' />");
		$(this).attr("title","已解除固化");
	   $.post('/teacherms/Admin/admin_LiftCuring',{
		   tableId:infoid,
		   tableName:"TeacherProject",
		   dataState:"10"},function(xhr){
			   if(xhr.result=="success"){
				   toastr.success("信息解除固化成功");
			   }else{
				  return;
			   }
	   },'json')
}