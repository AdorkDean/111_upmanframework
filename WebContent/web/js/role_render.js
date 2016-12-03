	
function getPos(obj,aspect) {
	var offset = 0;
	while (obj!=null) {
		eval("offset+=obj.offset"+aspect);
		obj = obj.offsetParent;
	}
	return offset;
}

var g_currentTab = 1;

function syncToAdvanced(){
	
	
	var items = document.getElementsByName('menuItem');
	for(var i=0;i<items.length;i++){
		if(items[i].disabled)
			continue;
		var linkedModules = items[i].getAttribute('linkedModules');

		if(linkedModules!=null){			
			
			var valArr = linkedModules.split(',');

			for(var j=0;j<valArr.length;j++){
				var strId = 'c' + valArr[j];

				var temp = document.getElementById(strId);

				if(temp){
					temp.checked=items[i].checked;
				}
			}
		}
	}
}



function syncToSimple(){
	var items = document.getElementsByName('menuItem');
	for(var i=0;i<items.length;i++){		
		if(items[i].disabled)
			continue;
		
		var valArr = items[i].value.split(',');
		
		var cnt = 0;
		var str = '';
		for(var j=0;j<valArr.length;j++){
			var temp = document.getElementById('c' + valArr[j]);
			if(temp && temp.checked){
				str += (cnt==0?'':',') + valArr[j];
				cnt ++;
			}
		}
		
		//（子项部分选中）
		var tipStr =  '\uff08\u5b50\u9879\u90e8\u5206\u9009\u4e2d\uff09';
		var tmpLabel = document.getElementById(items[i].id + '_label');
		if(cnt == valArr.length){
			items[i].checked = true;
			items[i].setAttribute('linkedModules',str);
			tmpLabel.style.color='#0000ff';
			tmpLabel.style.fontWeight='bold';
			var _pos =tmpLabel.innerHTML.indexOf(tipStr);
			if(_pos!=-1){
				tmpLabel.innerHTML = tmpLabel.innerHTML.substring(0,_pos);	
			}
		}else if(cnt == 0){
			items[i].checked = false;
			items[i].setAttribute('linkedModules',str);
			tmpLabel.style.color='';
			tmpLabel.style.fontWeight='';
			var _pos =tmpLabel.innerHTML.indexOf(tipStr);
			if(_pos!=-1){
				tmpLabel.innerHTML = tmpLabel.innerHTML.substring(0,_pos);	
			}
		}else{
			items[i].checked = true;
			items[i].setAttribute('linkedModules',str);
			tmpLabel.style.color='#0000ff';
			tmpLabel.style.fontWeight='';
			if(tmpLabel.innerHTML.indexOf(tipStr)==-1){
				tmpLabel.innerHTML = tmpLabel.innerHTML + tipStr;	
			}
		}
	}
}


function advancedRender(){
	if(g_currentTab == 1){
		return;
	}
	syncToAdvanced();
	document.getElementById('simplePan').style.visibility='hidden';
	document.getElementById('advancedPan').style.visibility='visible';


	document.getElementById('btnAdvanced').style.backgroundColor='#99CCFF';	
	document.getElementById('btnAdvanced').disabled=true;
	document.getElementById('btnSimple').style.backgroundColor='#FFFFFF';		
	document.getElementById('btnSimple').disabled=false;
	
	g_currentTab = 1;
}

function simpleRender(){
	if(g_currentTab == 0){
		return;
	}
	syncToSimple();
	document.getElementById('simplePan').style.visibility='visible';
	document.getElementById('advancedPan').style.visibility='hidden';
	

	document.getElementById('btnAdvanced').style.backgroundColor='#FFFFFF';
	document.getElementById('btnAdvanced').disabled=false;
	document.getElementById('btnSimple').style.backgroundColor='#99CCFF';		
	document.getElementById('btnSimple').disabled=true;
	
	g_currentTab = 0;
}


function resetMenuItem(item){
		if(item.checked){
			item.setAttribute('linkedModules',item.value);
			document.getElementById(item.id + '_label').style.color='#0000ff';
			document.getElementById(item.id + '_label').style.fontWeight='bold';
			
			var linked = item.getAttribute('linkedModules');
			var linkedArr = linked.split(',');
			if(linkedArr){
				for(var i=0;i<linkedArr.length;i++){
					var el = document.getElementById('c'+ linkedArr[i]);
					if(el){
						el.checked = true;
					}
				}
			}
			
		}else{
				
			var linked = item.getAttribute('linkedModules');
			var linkedArr = linked.split(',');
			if(linkedArr){
				for(var i=0;i<linkedArr.length;i++){
					var el = document.getElementById('c'+ linkedArr[i]);
					if(el){
						el.checked = false;
					}
				}
			}
			item.setAttribute('linkedModules',item.value);
			document.getElementById(item.id + '_label').style.color='';
			document.getElementById(item.id + '_label').style.fontWeight='';
		}
		syncToSimple();
}



function initPan(){
	var canvas = document.getElementById('tabContent');
	var sPan = document.getElementById('simplePan');
	var aPan = document.getElementById('advancedPan');
	
	var _left = getPos(canvas,"Left");
	var _top=getPos(canvas,"Top")+20;			
	sPan.style.left = _left + 'px';
	sPan.style.top = _top + 'px';
	aPan.style.left = _left + 'px';
	aPan.style.top = _top + 'px';	

	simpleRender();
}	