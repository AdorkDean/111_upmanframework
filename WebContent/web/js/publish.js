/** obj全选checkbox，desObj:目标checkbox的名字
 * 根据obj的选中与否,更新关联的目标checkBox是否选中
 * author:	WilliamLau
 * date:	2006-10-13
 * eg : <input type="checkbox" name="all" onclick="javascript:selectAll(this,'ids')"/>全选
 */
function selectAll(obj,desObj){	
		try{		  	
		  	var des = document.getElementsByName(desObj);
			if(null != obj){
				if(obj.checked){
					for(var i = 0; i < des.length ; i++){
						des[i].checked = true;
					}
				}else{
					for(var i = 0;i< des.length;i++){
						des[i].checked = false;
					}
				}
			 }
	  	}catch(E){
		  alert(E);
	  	}
}
/*
 * 子checkbox调用,
 * 如果所有的子checkbox都被选中则将全选checkbox更新为选中
 * 其中任一子checkbox未被选中则将全选checkbox更新为不选中
 * author:	WilliamLau
 * date:	2006-10-13
 */

function checkAll(all,item){
	try{
		var allCheckBox = document.getElementById(all);
		var subCheckBox = document.getElementsByName(item);
		if(null != subCheckBox){
			for(var i = 0 ; i< subCheckBox.length;i++){
				if(!subCheckBox[i].checked){
					allCheckBox.checked = false;
					return;
				}
			}
			allCheckBox.checked = true;
		}
	}catch(E){
		alert(E);
	}
}