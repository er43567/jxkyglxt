function checkAward(){
	//清楚原来的数据
	$('.table tbody').empty();
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
			    str+="<td>"+xhr[i][0].achievementName+"</td>";
			    str+="<td>"+xhr[i][0].awardName+"</td>";
			    str+="<td>"+xhr[i][0].awardUserNames+"</td>";
			    str+="<td>"+xhr[i][0].awardType+"</td>";
			    str+="<td>"+xhr[i][0].awardClass+"</td>"; 
			    str+="<td>"+xhr[i][0].awardGrade+"</td>";
			    str+="<td>"+xhr[i][0].awardLevel+"</td>";
			    str += '<td><input type="hidden" value="' + xhr[i][0].awardId  + '" ><button class="btn btn-default btn-xs relieveButton" title="解除固化"><i class="fa fa-chain-broken fa-lg"></i></button><button class="btn btn-default btn-xs viewButton" title="查看"><i class="fa fa-search-plus fa-lg"  aria-hidden="true"></i></button></td>';		
			    str+="</tr>";   
			}
			$('.table').children('tbody').append(str);
		},
		error : function() {}
	});
	$(".relieveButton").on("click",function(){
		data.dataState="20"
			$(this).children().remove();
			$(this).append("<img  src='img/ok1.png' />");
			$(this).attr("title","已解除固化");
	})
	$(".viewButton").unbind().on("click",function(){
		//显示出模态框
		$('#award_modal').modal({
			keyboard : true
		});
		
		$.post("/teacherms/Admin/admin_getTeacherTableInfoById",
				{tableId:$(this).siblings().val(),tableName:"TeacherAward"},function(xhr){
					var inf = $('.table_infomation');
				  $("#award_modal input,select").each(function(){
					 var na= $(this).attr("name").split(".")[1];
				 if(na=="userId"){
						 $(this).val(xhr.user.userId);
					 }
				 else if(na=="userName"){
						 $(this).val(xhr.user.userName);
					 }
				 else $(this).val(xhr.object[na]);
				  })
				  
				},"json");
		$(".review-info").remove();
	})

	
	$(".export_button").unbind().on("click",function(){
		//显示出模态框
		$('#export_award').modal({
			keyboard : true
		});
	});
	$('.export-info').unbind().click(function(){
		$('.second-panel-heading').append('<button class="btn btn-primary end-button">确认导出</button>');
		$('#info_table tbody tr').each(function(){
			 $(this).find("td:first").empty().append('<input name="check" type="checkbox">');
			 $(this).on("click",function(){
				var check_attr= $(this).find('td input[name="check"]').is(":checked");
				if(check_attr==false){
					$(this).find('td input[name="check"]').attr("checked","true");
				}
				else{
					$(this).find('td input[name="check"]').removeAttr("checked");
				}
			 })
		});
		$('.end-button').unbind().on("click",function(){
		
			$('#info_table tbody tr').each(function(){
				if(($(this).find(' input[name="check"]').is(':checked'))==true){
				data.export_id+=$(this).find('input[type="hidden"]').val()+',';
				}
			})
			$('#export_award .group-list li input[name="checkbox"]').each(function(){
				if(($(this).is(':checked'))==true){
					data.export_name+=$(this).val()+',';
				}
			})
			if (data.export_id != "" && data.export_name != "") {
				location.href = "/teacherms/Admin/admin_ExportExcelCollection?tableName=TeacherAward&export_id=" + (data.export_id).substring(0,data.export_id.length-1) + "&export_name=" + (data.export_name).substring(0,data.export_name.length-1);
			} else {
				alert("请选择数据");
			}
			data.export_id="";
			$('.end-button').unbind().remove();
		});
		
	});
	
	
}
