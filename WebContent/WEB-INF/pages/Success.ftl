<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN" xml:lang="zh-CN">
<head>
<title>操作结果</title>
<META http-equiv="Content-Type" content="text/html; charset=utf-8">
<META http-equiv="Content-Language" content="UTF-8">
<link href="${model.context}/css/main.css" rel="stylesheet" type="text/css" />
</head>
<body>
<p>　</p>
<p>　</p>
<div align="center">
<table border="1" cellpadding="1" cellspacing="0" bordercolor="#2E699E" width="420">
  <tr> 
    <td align="center" height="22" class="tablelabel2">操作结果</td>
  </tr>
  <tr> 
    <td align="center" height="47">$!Result</td>
  </tr>
  <tr align="center"> 
    <td class="title2">
	<input type="button" #if ($!buttonvalue=="关闭") value="关闭" #else  value="返回" #end name="exit" onclick="$Location">
	</td>
  </tr>
</table>
</div>
<script type="text/javascript">
try{
	//删除、添加成功时将刷新左边的列表树
	if($Result.equals("系统模块删除成功!")){
		window.parent.frames["fraLeft"].location="$link.setPage("module,ModuleTree.ftl")";
		window.event.cancelBubble = true;
	}else if($Result.equals("模块删除成功!")){
		window.parent.frames["fraLeft"].location="$link.setPage("module,ModuleTree.ftl")";
		window.event.cancelBubble = true;
	}else if($Result.equals("系统模块新建成功!")){
		window.parent.frames["fraLeft"].location="$link.setPage("module,ModuleTree.ftl")";
		window.event.cancelBubble = true;
	}else if($Result.equals("模块新建成功!")){
		window.parent.frames["fraLeft"].location="$link.setPage("module,ModuleTree.ftl")";
		window.event.cancelBubble = true;
	}
}catch(E){
}
</script>
</body>
</html>