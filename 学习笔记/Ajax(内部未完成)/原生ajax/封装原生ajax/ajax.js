function ajax(url,type,param,datatype,callback){

	//兼容ie处理
	// var xhr = null;
	// if(window.XMLHttpRequest){
	// 	xhr = new XMLHttpRequest();
	// }else{
	// 	xhr = new ActiveXObject('Microsoft.XMLHTML');
	// }

	var xhr = new XMLHttpRequest();

	if(type = 'get'){
		url += "?" + param;
	}
	xhr.open(type,url,true);

	var datas = null;
	if(type = 'post'){
		datas = param;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}
	xhr.send(datas);
	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				if(datatype == 'json'){
					datad = JSON.parse(data);
				}
				callback(datad);		
			}
		}
	}

}