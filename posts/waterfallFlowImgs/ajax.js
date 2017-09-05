// JavaScript Document
/**    
* 执行基本ajax请求,返回XMLHttpRequest    
*  ajax{    
*  url    
*  method 请求方式 POST or GET(默认)   
*  data 请求参数 (键值对字符串)   
*  success 请求成功后响应函数，参数为xhr    
* )   
*/  
function ajax(method,url,data,success){
	//1、创建ajax对象
	var  xhr=null;
	//兼容IE6
	if(window.XMLHttpRequest){
	   xhr=new XMLHttpRequest();	
	}else{
	   xhr=new ActiveXObject("Microsoft.XMLHTTP");		
	}
	
	if(method=='get'  &&data){
	  url +='?'+data;	
	}
	//2、连接服务器
	//open('方法','文件名',是否异步);
	xhr.open(method,url,true);
	
	//3、发送请求
	if(method=='get'){
	   	xhr.send();
	}else{
		xhr.setRequestHeader=('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	
	//4、接收返回
	xhr.onreadystatechange=function(){  //当浏览器和服务器之间有通信
		//4--完成
		if(xhr.readyState==4){//xhr.readyState只代表是否完成，而不代表是否成功
			//200  成功 否则失败
			if(xhr.status==200){
				success && success(xhr.responseText);
			}else{
				alert('出错了,Err:'+xhr.status);
			}
			
		}
		
	};
	
}