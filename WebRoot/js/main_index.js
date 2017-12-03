var data = {
		tableName : "",
		dataState : "",
		page : 1,
		time_interval : "",
		tableId : "",
		query_num : "",
		query_id : "",
			}

$(function(){
	
	$('.sidebar-menu .nav li a').click(function(){
	$(this).addClass("Atfer_li");
	$(this).parent().siblings().children().removeClass("Atfer_li");
		if(($(this).text())=="信息审核"){
			$('.right-side').load('exam_pageinfo.jsp #content',selectSeacher(),function(){
				$('.nav-tabs li a').unbind().click(function(){
					if($(this).parent('li').attr('class') == 'active') return;
					var a_href = $(this).attr("href");
					
					switch(a_href) {
					
					case '#user':
						
						$('#user').load('exam_pageinfo.jsp  #user_table_audit',function(){
							data.tableName="TeacherInfo";
							data.dataState="20";
							getExamInfo(data);
							examInfo();
						});
						break;
					case '#award':
						
						$('#award').load('exam_pageinfo.jsp #award_table_audit',function(){
							data.tableName="TeacherAward";
							data.dataState="20";
							getExamInfo(data);
							examAward();
						});
						break;
					case '#works':
						
						$('#works').load('exam_pageinfo.jsp #works_table_audit',function(){
							data.tableName="TeacherWorks";
							data.dataState="20";
							getExamInfo(data);
							examWorks();
						});
						break;
					case '#paper':
						
						$('#paper').load('exam_pageinfo.jsp #paper_table_audit',function(){
							data.tableName="TeacherPaper";
							data.dataState="20";
							getExamInfo(data);
							examPaper();
						});
						break;
					case '#patent':
					
						$('#patent').load('exam_pageinfo.jsp #patent_table_audit',function(){
							data.tableName="TeacherPatent";
							data.dataState="20";
							getExamInfo(data);
							examPatent();
						});
						break;
					case '#project':
						
						$('#project').load('exam_pageinfo.jsp #project_table_audit',function(){
							data.tableName="TeacherProject";
							data.dataState="20";
							getExamInfo(data);
							examProject();
						});
						break;
					default:
						break;
				}
				})
			});
		}
		 if(($(this).text())=="信息管理"){
				$('.right-side').load('check_pageinfo.jsp #content',selectSeacher(),function(){
					$('.nav-tabs li a').unbind().click(function(){
						if($(this).parent('li').attr('class') == 'active') return;
						var a_href = $(this).attr("href");
						switch(a_href){
						case '#user':
							$('#user').load('check_pageinfo.jsp  #user_table_view',function(){
								data.tableName="TeacherInfo";
								data.dataState="40";
								getCheckInfo(data);
								checkInfo();
							});
							break;
						case '#award':
							$('#award').load('check_pageinfo.jsp #award_table_view',function(){
								data.tableName="TeacherAward";
								data.dataState="20";
								getCheckInfo(data);
								checkAward();
							});
							break;
						case '#works':
							$('#works').load('check_pageinfo.jsp #works_table_view',function(){
								data.tableName="TeacherWorks";
								data.dataState="20";
								getCheckInfo(data);
								checkWorks();
							});
							break;
						case '#paper':
							$('#paper').load('check_pageinfo.jsp #paper_table_view',function(){
								data.tableName="TeacherPaper";
								data.dataState="20";
								getCheckInfo(data);
								checkPaper();
							});
							break;
						case '#patent':
							$('#patent').load('check_pageinfo.jsp #patent_table_view',function(){
								data.tableName="TeacherPatent";
								data.dataState="20";
								getCheckInfo(data);
								checkPatent();
							});
							break;
						case '#project':
							$('#project').load('check_pageinfo.jsp #project_table_view',function(){
								data.tableName="TeacherProject";
								data.dataState="20";
								getCheckInfo(data);
								checkProject();
							});
							break;
						default:
							break;
						}
					})
				})
		}
	});
});