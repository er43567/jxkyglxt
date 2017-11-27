<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>信息查看-著作</title>
<link rel="stylesheet" href="<%=basePath%>/css/bootstrap.min.css" />
<link rel="stylesheet" href="<%=basePath%>/css/jquery-confirm.css" />
<link rel="stylesheet" href="<%=basePath%>/css/teacher_award.css" />
<script type="text/javascript"
	src="<%=basePath%>/js/jquery-3.1.1.min.js"></script>
<jsp:include page="/modal/admin/paper_modal.html" flush="true"></jsp:include>
<jsp:include page="/modal/export/paper_modal.html" flush="true"></jsp:include>
<jsp:include page="/top_nav.jsp" flush="true"></jsp:include>
<jsp:include page="/exam_left_nav.jsp" flush="true"></jsp:include>
</head>
<body>
	<div id="info_type">
		<div id="type_content">论文</div>

		<div class="export_button">
			<button class="btn btn btn-sm btn-primary btn btn-default">导出</button>
		</div>
	</div>

	<div id="mian">
		<div id="info_table" class="table-responsive">
			<div id="table_content">
				<table class="table">
					<thead>
						<tr>
							<td>工号</td>
							<td>姓名</td>
							<td>论文名称</td>
							<td>论文类别</td>
							<td>创建时间</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						<!-- <tr>
						<td>15478011</td>
						<td>张三</td>
						<td>论文名称</td>
						<td>科研</td>
						<td>2017-10-29</td>
						<td><img class="checkimg" src="img/审核(6).png" /></td>
					</tr> -->
					</tbody>
				</table>
			</div>
			<div id="page">
				<ul class="pager">
					<li><a onclick="page(1)">首页</a></li>
					<li><a onclick="prepage()">上一页</a></li>
					<li><a onclick="nextpage()">下一页</a></li>
					<li><a onclick="page(999)">尾页</a></li>
				</ul>
			</div>
		</div>
	</div>
	<script>
		window.onload = function() {
			var obj_lis = document.getElementById("left_nav_ul").getElementsByTagName("li");
			var typecontent = document.getElementById("type_content").innerHTML;
			var obj_ul = document.getElementById("left_nav_ul")
			for (i = 0; i < obj_lis.length; i++) {
			}
		}
	</script>

	<script type="text/javascript" src="<%=basePath%>/js/jquery-confirm.js"></script>
	<script type="text/javascript"
		src="<%=basePath%>/js/paper/exam_paper.js"></script>
	<script type="text/javascript" src="<%=basePath%>/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="<%=basePath%>/js/exam_checkImgChange.js"></script>
</body>
</html>